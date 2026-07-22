var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYF_REIM_ChgFldCLS();
        SYT_Init_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CLM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CLS_FLG.value = 'NO';
        document.MAINFORM.CURRNT_STATUS.value = 'Claim';
        document.MAINFORM.NXT_STATUS.value = 'Settle Claim';
        document.MAINFORM.CLM_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.CLM_DT.value = SYS_DATE;

        if (SYS_BeInt(document.MAINFORM.CLM_CNTR.value) == 1) {
            document.MAINFORM.TEMP_AMT1.value = 0;
            document.MAINFORM.TEMP_AMT2.value = 0;
        } else {
            document.MAINFORM.TEMP_AMT1.value = document.MAINFORM.PEND_REIM_INST_BAL.value;
            document.MAINFORM.TEMP_AMT2.value = document.MAINFORM.PEND_REIM_CONF_BAL.value;
        }

        SYF_REIM_Cal_CHG_MINUS();
        SYF_REIM_Cal_CHG_PLUS();
        SYF_REIM_Cal_CLM_CNTR();
        SYF_REIM_Cal_DOC_VALUE();
        SYF_REIM_Cal_NEW_REIM_CONF_BAL();
        SYF_REIM_Cal_NEW_REIM_INST_BAL();

        Cal_BENE_BK_SW_ADD();
        Cal_AC_BK_SW_ADD();
        Cal_ISSUE_BK_SW_ADD();
        Cal_CLM_BK_SW_ADD();

        SYT_Cal_LOCAL_AMT('LC_CCY', 'REIM_INST_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_NEW_REIM_INST_BAL = function() {
    try {

        var PEND_REIM_INST_BAL = SYS_BeFloat(document.MAINFORM.PEND_REIM_INST_BAL.value);
        var REIM_INST_BAL = SYS_BeFloat(document.MAINFORM.REIM_INST_BAL.value);
        var CLM_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        var ORG_PEND_REIM_INST_BAL = SYS_BeFloat(document.MAINFORM.TEMP_AMT1.value);
        PEND_REIM_INST_BAL = CLM_TRX_CCY_AMT + ORG_PEND_REIM_INST_BAL;
        document.MAINFORM.PEND_REIM_INST_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, PEND_REIM_INST_BAL);
        document.MAINFORM.NEW_REIM_INST_BAL.value = REIM_INST_BAL - CLM_TRX_CCY_AMT;
        if (document.MAINFORM.NEW_REIM_INST_BAL.value < 0) {
            document.MAINFORM.NEW_REIM_INST_BAL.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_NEW_REIM_CONF_BAL = function() {
    try {

        var NEW_REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.NEW_REIM_CONF_BAL.value);
        var PEND_REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.PEND_REIM_CONF_BAL.value);
        var REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.REIM_CONF_BAL.value);
        var CLM_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        var ORG_PEND_REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.TEMP_AMT2.value);
        if (document.MAINFORM.CONF_INSTR.value == 'Confirmed') {
            PEND_REIM_CONF_BAL = CLM_TRX_CCY_AMT + ORG_PEND_REIM_CONF_BAL;
            document.MAINFORM.PEND_REIM_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, PEND_REIM_CONF_BAL);
            document.MAINFORM.NEW_REIM_CONF_BAL.value = REIM_CONF_BAL - CLM_TRX_CCY_AMT;
            NEW_REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.NEW_REIM_CONF_BAL.value);
        }
        if (NEW_REIM_CONF_BAL < 0) {
            document.MAINFORM.NEW_REIM_CONF_BAL.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Chk_CLM_TRX_CCY_AMT = function() {
    try {

        var CLM_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        var REIM_INST_BAL = SYS_BeFloat(document.MAINFORM.REIM_INST_BAL.value);
        if (CLM_TRX_CCY_AMT > REIM_INST_BAL) {
            SYS_CheckError(document.MAINFORM.CLM_TRX_CCY_AMT, "principal amount claimed has exceeded!");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
        } else if (SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value) < 0) {
            alert("Amount field should not be negative!");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.SYF_REIM_ChgFldCLS = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.CLM_CNTR, 'P');
        SYT_ChangeFldClass(document.MAINFORM.LC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.LC_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_INST_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_CNTY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ID, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_NM, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD2, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD3, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_SW_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_CNTY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_CLM_REF, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BK_EQ_CLM_BK, 'M');
        SYT_ChangeFldClass(document.MAINFORM.DOC_VALUE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DEC_CLM_AMT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_TRX_CCY_AMT, 'M');
        SYT_ChangeFldClass(document.MAINFORM.REIM_INST_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PEND_REIM_INST_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_INST_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_CONF_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PEND_REIM_CONF_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_CONF_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_PLUS, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CHG_MINUS, 'O');
        SYT_ChangeFldClass(document.MAINFORM.ADD_AMT_CLMD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NET_CLAIM_ISSBK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_DESC, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BK_ID, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BK_NM, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BK_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BK_ADD2, 'M');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BK_ADD3, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BK_SW_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'H');
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_DOC_VALUE = function() {
    try {

        var CLM_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        var DEC_CLM_AMT = SYS_BeFloat(document.MAINFORM.DEC_CLM_AMT.value);


        document.MAINFORM.DOC_VALUE.value = CLM_TRX_CCY_AMT + DEC_CLM_AMT;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_BENE_BK_EQ_CLM_BK = function() {
    try {

        if (document.MAINFORM.BENE_BK_EQ_CLM_BK.value == 'Yes') {
            document.MAINFORM.BENE_BK_ID.value = document.MAINFORM.CLM_BK_ID.value;
            document.MAINFORM.BENE_BK_NM.value = document.MAINFORM.CLM_BK_NM.value;
            document.MAINFORM.BENE_BK_ADD1.value = document.MAINFORM.CLM_BK_ADD1.value;
            document.MAINFORM.BENE_BK_ADD2.value = document.MAINFORM.CLM_BK_ADD2.value;
            document.MAINFORM.BENE_BK_ADD3.value = document.MAINFORM.CLM_BK_ADD3.value;
            document.MAINFORM.BENE_BK_SW_TAG.value = document.MAINFORM.CLM_BK_SW_TAG.value;
            document.MAINFORM.BENE_BK_SW_ADD.value = document.MAINFORM.CLM_BK_SW_ADD.value;
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_NET_CLAIM_ISSBK = function() {
    try {

        var CLM_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        var ADD_AMT_CLMD = SYS_BeFloat(document.MAINFORM.ADD_AMT_CLMD.value);
        var CHG_PLUS = SYS_BeFloat(document.MAINFORM.CHG_PLUS.value);
        var CHG_MINUS = SYS_BeFloat(document.MAINFORM.CHG_MINUS.value);

        document.MAINFORM.NET_CLAIM_ISSBK.value = CLM_TRX_CCY_AMT + ADD_AMT_CLMD + CHG_PLUS - CHG_MINUS;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_CHG_PLUS = function() {
    try {

        var CHG_PLUS = SYS_BeInt(document.MAINFORM.CHG_PLUS.value);
        var CHG_MINUS = SYS_BeInt(document.MAINFORM.CHG_MINUS.value);

        if (CHG_MINUS != 0) {
            SYT_ChangeFldClass(document.MAINFORM.CHG_PLUS, 'O');
            document.MAINFORM.CHG_PLUS.value = 0;
        } else if (CHG_MINUS == 0 && CHG_PLUS == 0) {
            SYT_ChangeFldClass(document.MAINFORM.CHG_PLUS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CHG_MINUS, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_CHG_MINUS = function() {
    try {

        var CHG_PLUS = SYS_BeInt(document.MAINFORM.CHG_PLUS.value);
        var CHG_MINUS = SYS_BeInt(document.MAINFORM.CHG_MINUS.value);

        if (CHG_PLUS != 0) {
            document.MAINFORM.CHG_MINUS.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.CHG_MINUS, 'O');
        } else if (CHG_PLUS == 0 && CHG_MINUS == 0) {
            SYT_ChangeFldClass(document.MAINFORM.CHG_MINUS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CHG_PLUS, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_CLM_CNTR = function() {
    try {

        var CLM_CNTR = SYS_BeInt(document.MAINFORM.CLM_CNTR.value);
        var NR;

        if (CLM_CNTR < 10) {
            NR = '/0' + CLM_CNTR;
        } else {
            NR = '/' + CLM_CNTR;
        }
        document.MAINFORM.CLM_REF.value = document.MAINFORM.C_MAIN_REF.value + NR;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_REIM_Cal_BENE_BK_EQ_CLM_BK();
        SYT_Show_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.CLM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_BENE_BK_EQ_CLM_BK_2 = function() {
    try {

        if (document.MAINFORM.BENE_BK_EQ_CLM_BK.value == 'Yes') {
            document.MAINFORM.BENE_BK_ID.value = document.MAINFORM.CLM_BK_ID.value;
            document.MAINFORM.BENE_BK_NM.value = document.MAINFORM.CLM_BK_NM.value;
            document.MAINFORM.BENE_BK_ADD1.value = document.MAINFORM.CLM_BK_ADD1.value;
            document.MAINFORM.BENE_BK_ADD2.value = document.MAINFORM.CLM_BK_ADD2.value;
            document.MAINFORM.BENE_BK_ADD3.value = document.MAINFORM.CLM_BK_ADD3.value;
            document.MAINFORM.BENE_BK_SW_ADD.value = document.MAINFORM.CLM_BK_SW_ADD.value;
            document.MAINFORM.BENE_BK_SW_TAG.value = document.MAINFORM.CLM_BK_SW_TAG.value;
            document.MAINFORM.BENE_BK_NOTES.value = document.MAINFORM.CLM_BK_NOTES.value;
            SYT_Show_Notes(document.MAINFORM.BENE_BK_NOTES.name);
        } else {
            document.MAINFORM.BENE_BK_ID.value = '';
            document.MAINFORM.BENE_BK_NM.value = '';
            document.MAINFORM.BENE_BK_ADD1.value = '';
            document.MAINFORM.BENE_BK_ADD2.value = '';
            document.MAINFORM.BENE_BK_ADD3.value = '';
            document.MAINFORM.BENE_BK_SW_ADD.value = '';
            document.MAINFORM.BENE_BK_SW_TAG.value = '';
            document.MAINFORM.BENE_BK_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.BENE_BK_NOTES.name);
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_AC_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_AC_BK_SW_ADD();
        Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ID_onchange = function(event) {
    try {
        Cal_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ADD_AMT_CLMD_onchange = function(event) {
    try {
        SYF_REIM_Cal_NET_CLAIM_ISSBK();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_BENE_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_EQ_CLM_BK_onchange = function(event) {
    try {
        SYF_REIM_Cal_BENE_BK_EQ_CLM_BK();
        SYF_REIM_Cal_BENE_BK_EQ_CLM_BK_2();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_ID_onchange = function(event) {
    try {
        Cal_BENE_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_BENE_BANK();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_BENE_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_BENE_BK_SW_TAG();
        Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_MINUS_onchange = function(event) {
    try {
        SYF_REIM_Cal_CHG_PLUS();
        SYF_REIM_Cal_CHG_MINUS();
        SYF_REIM_Cal_NET_CLAIM_ISSBK();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_PLUS_onchange = function(event) {
    try {
        SYF_REIM_Cal_CHG_PLUS();
        SYF_REIM_Cal_CHG_MINUS();
        SYF_REIM_Cal_NET_CLAIM_ISSBK();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_CLM_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_CNTY_onchange = function(event) {
    try {
        if ((SYM_REIM_SpecialCharacters_onchange_1(document.MAINFORM.CLM_BK_CNTY.value)) == false) {
            document.MAINFORM.CLM_BK_CNTY.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ID_onchange = function(event) {
    try {
        Get_CLM_BK_ID();
        SYF_REIM_Cal_BENE_BK_EQ_CLM_BK_2();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_CLM_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_NM_onchange = function(event) {
    try {
        //SYM_REIM_Chg_Screen_CLM();
        if ((SYM_REIM_SpecialCharacters_onchange_2(document.MAINFORM.CLM_BK_NM.value)) == false) {
            document.MAINFORM.CLM_BK_NM.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_CLM_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_SW_ADD_onchange = function(event) {
    try {
        Get_CLM_BK_CNTY();
        Cal_CLM_BK_SW_TAG();
        Cal_CLM_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_CNTR_onchange = function(event) {
    try {
        SYF_REIM_Cal_CLM_CNTR();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_TRX_CCY_AMT_onchange = function(event) {
    try {
        SYF_REIM_Chk_CLM_TRX_CCY_AMT();
        SYF_REIM_Cal_NEW_REIM_INST_BAL();
        SYF_REIM_Cal_NEW_REIM_CONF_BAL();
        SYF_REIM_Cal_NET_CLAIM_ISSBK();
        SYF_REIM_Cal_DOC_VALUE();
        EEHtml.fireEvent(document.MAINFORM.DOC_VALUE, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_CLAIM_ISSBK, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_REIM_CONF_BAL, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_REIM_INST_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_REIM_Cal_CLM_CNTR();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DEC_CLM_AMT_onchange = function(event) {
    try {
        SYF_REIM_Cal_DOC_VALUE();
        EEHtml.fireEvent(document.MAINFORM.DOC_VALUE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_ISSUE_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ID_onchange = function(event) {
    try {
        Cal_ISSUE_BK_ID();
        /*
if(SYS_ORG_FUNCTION_NAME == 'RegisterInstruction'){
//JACK 0921 REIM
SYM_REIM_Set_Risk_Party_Info();
document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
}
*/
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_REIM_Chg_Screen_ISSUE();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_ISSUE_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_ISSUE_BK_SW_ADD();
        Cal_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PEND_REIM_CONF_BAL_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.NEW_REIM_CONF_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PEND_REIM_INST_BAL_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.NEW_REIM_INST_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}

csFuncLevelProto.FLD_REIM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT742.js", e);
    }
}