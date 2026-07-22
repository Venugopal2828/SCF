var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYF_REIM_ChgFldCLS();
        SYT_Init_Notes(document.MAINFORM.CLM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AC_BK_NOTES.name);
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CLS_FLG.value = 'NO';
        document.MAINFORM.CURRNT_STATUS.value = 'RefuseClaim';
        document.MAINFORM.NXT_STATUS.value = 'Claim Refused End';
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.CLM_BK_CLM_REF.value;
        document.MAINFORM.X730_DOC_CRE_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        if (document.MAINFORM.CLM_BK_ID.value != '') {
            document.MAINFORM.X730_ADV_BKID_B2.value = document.MAINFORM.CLM_BK_ID.value;
            document.MAINFORM.X730_ADV_BKNM_B2.value = document.MAINFORM.CLM_BK_NM.value;
            document.MAINFORM.X730_ADV_BKADD1_B2.value = document.MAINFORM.CLM_BK_ADD1.value;
            document.MAINFORM.X730_ADV_BKADD2_B2.value = document.MAINFORM.CLM_BK_ADD2.value;
            document.MAINFORM.X730_ADV_BKADD3_B2.value = document.MAINFORM.CLM_BK_ADD3.value;
            document.MAINFORM.X730_ADV_BKSW_B2.value = document.MAINFORM.CLM_BK_SW_ADD.value;
        }
        if (document.MAINFORM.LC_NO.value != '') {
            document.MAINFORM.X730_RCVER_NO_21.value = document.MAINFORM.LC_NO.value;
        }

        SYT_Cal_LOCAL_AMT('LC_CCY', 'REIM_INST_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.SYF_REIM_ChgFldCLS = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.LC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.LC_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_INST_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_CNTR, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_CNTY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_CNTY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_CLM_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BK_EQ_CLM_BK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DOC_VALUE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DEC_CLM_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_TRX_CCY_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_INST_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PEND_REIM_INST_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_INST_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_CONF_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PEND_REIM_CONF_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_CONF_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_PLUS, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_MINUS, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADD_AMT_CLMD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NET_CLAIM_ISSBK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_DESC, 'P');
        SYT_ChangeFldClass(document.MAINFORM.STL_CCY_AMT, 'P');

        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKID_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKNM_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKADD1_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKADD2_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKADD3_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKSW_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKMED_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_DOC_CRE_NO_20, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_RCVER_NO_21, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ACC_IDEN_25, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X730_BEACK_DT_30, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_TAG_32A, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X730_VALUE_DT_32A, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X730_CHG_DESC_71B, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X730_BKTOBK_INFO72, 'O');

        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ID_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD_BTN, 'H');
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Cal_ISSUE_NARR_MAIL();
        Get_X730_BEACK_DT_30();
        SYT_Show_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.CLM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        CAL_AC_BK_MULT_ADD();
        SYF_REIM_Cal_TEMP_DISP_OF_CLM();
        Cal_ISSUE_NARR_TAG_79();
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_TEMP_REASON_FOR_NONPAY = function() {
    try {

        var REASON_FOR_NONPAY = document.MAINFORM.REASON_FOR_NONPAY.value;
        var REASON_FOR_NONPAY_NARR = document.MAINFORM.REASON_FOR_NONPAY_NARR.value;
        if (REASON_FOR_NONPAY == "OTHR") {
            SYT_ChangeFldClass(document.MAINFORM.REASON_FOR_NONPAY_NARR, "M");
        }
        document.MAINFORM.TEMP_REASON_FOR_NONPAY.value = document.MAINFORM.REASON_FOR_NONPAY.value + '/' + document.MAINFORM.REASON_FOR_NONPAY_NARR.value;
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_TEMP_DISP_OF_CLM = function() {
    try {

        var DISP_OF_CLM = document.MAINFORM.DISP_OF_CLM.value;
        var DISP_OF_CLM_NARR = document.MAINFORM.DISP_OF_CLM_NARR.value;
        if (DISP_OF_CLM == 'HOLD') {
            SYT_ChangeFldClass(document.MAINFORM.DISP_OF_CLM_NARR, "M");
        }
        document.MAINFORM.TEMP_DISP_OF_CLM.value = document.MAINFORM.DISP_OF_CLM.value + '/' + document.MAINFORM.DISP_OF_CLM_NARR.value;
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_AC_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_AC_BK_SW_ADD();
        Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD1_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD2_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD3_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ID_onchange = function(event) {
    try {
        Cal_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_NM_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_CLM_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ID_onchange = function(event) {
    try {
        Get_CLM_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_CLM_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_NM_onchange = function(event) {
    try {
        SYM_REIM_Chg_Screen_CLM();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_CLM_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_SW_ADD_onchange = function(event) {
    try {
        Get_CLM_BK_CNTY();
        Cal_CLM_BK_SW_TAG();
        Cal_CLM_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DISP_OF_CLM_onchange = function(event) {
    try {
        SYF_REIM_Cal_TEMP_DISP_OF_CLM();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DISP_OF_CLM_NARR_onchange = function(event) {
    try {
        SYF_REIM_Cal_TEMP_DISP_OF_CLM();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_ISSUE_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
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
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_REIM_Chg_Screen_ISSUE();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_ISSUE_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_ISSUE_BK_SW_ADD();
        Cal_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_NARR_TAG_79_onchange = function(event) {
    try {
        Get_XN99_NARRATIVE_79();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_REASON_FOR_NONPAY_onchange = function(event) {
    try {
        SYF_REIM_Cal_TEMP_REASON_FOR_NONPAY();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_REASON_FOR_NONPAY_NARR_onchange = function(event) {
    try {
        SYF_REIM_Cal_TEMP_REASON_FOR_NONPAY();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_SEND_TO_onchange = function(event) {
    try {
        Cal_ISSUE_NARR_TAG_79();
        Get_X730_ACC_IDEN_25();
        Get_X730_BEACK_DT_30();
        SYM_REIM_Cal_X730_BEACK_DT_30();
        Cal_ISSUE_NARR_MAIL();
        SYM_REIM_Get_X730_ADV_BKID_B2();
        SYM_REIM_Get_X730_DOC_CRE_NO_20();
        SYM_REIM_Get_X730_RCVER_NO_21();

        Get_Ack_79();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_X730_CHG_AMT_32A_onchange = function(event) {
    try {
        Cal_X730_CHG_AMT_32A();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_X730_CHG_CCY_32A_onchange = function(event) {
    try {
        Cal_X730_CHG_AMT_32A();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_X730_VALUE_DT_32A_onchange = function(event) {
    try {
        Cal_X730_VALUE_DT_32A();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_REIM_RefuseClaim.js", e);
    }
}