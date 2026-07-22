var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IWGT_Cal_check_CLM_AMT = function() {
    try {

        var nGTEE_BAL = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value);
        var nCLM_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        if (nCLM_AMT > nGTEE_BAL) {
            alert("Claim Amount can not exceed the Guarantee Amount");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'GteeDemand';
        document.MAINFORM.NXT_STATUS.value = '';

        SYM_IWGT_Cal_CLAIM_COUNTER();

        document.MAINFORM.CLM_REF.value = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.CLM_CNTR.value;
        document.MAINFORM.CLM_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CLS_FLG.value = 'NO';
        document.MAINFORM.SEND_TO_RCV_INFO.value = "";

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
        document.MAINFORM.APPL_CUST_BK.value = 'Bank';
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_IWGT_MPO_APLB_RULE_NARR();

        SYT_DisableDivClass('A_div');
        SYT_DisableDivClass('B_div');

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CLM_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.CLM_DT.value < SYS_BUSI_DATE) {
            alert("date of Demand date is not allowed early than system date!");
            document.MAINFORM.CLM_DT.value = "";
        }
        if (document.MAINFORM.CLM_DT.value > SYS_BUSI_DATE) {
            alert("date of Demand date is not allowed later than system date!");
            document.MAINFORM.CLM_DT.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CLM_TRX_CCY_AMT_onchange = function(event) {
    try {
        var Claim_Amount;
        Claim_Amount = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        if (Claim_Amount < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
        }
        SYF_IWGT_Cal_check_CLM_AMT();
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DEMAND_STATE_CODE_onchange = function(event) {
    try {
        if (document.MAINFORM.DEMAND_STATE_CODE.value != '') {
            document.MAINFORM.TEMP_DEMAND_STATE_CODE.value = document.MAINFORM.DEMAND_STATE_CODE.value;
            if (document.MAINFORM.DEMAND_STATE_CODE.value == 'INCP') {
                SYT_ChangeFldClass(document.MAINFORM.PRES_COM_DETL, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.PRES_COM_DETL, 'P');
                document.MAINFORM.PRES_COM_DETL.value = '';
            }
        } else {
            document.MAINFORM.TEMP_DEMAND_STATE_CODE.value = '';
            document.MAINFORM.DEMAND_STATE_NARR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.PRES_COM_DETL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DEMAND_TYPE_onchange = function(event) {
    try {
        if (document.MAINFORM.DEMAND_TYPE.value == 'PAYM') {
            SYT_ChangeFldClass(document.MAINFORM.REQ_NEW_EXPIRY_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT_LOCAL, 'P');
            document.MAINFORM.REQ_NEW_EXPIRY_DT.value = '';
            document.MAINFORM.EXPIRY_DT_LOCAL.value = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.REQ_NEW_EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT_LOCAL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_FILE_23X_CODE_onchange = function(event) {
    try {
        if (document.MAINFORM.FILE_23X_CODE.value != '') {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = document.MAINFORM.FILE_23X_CODE.value;
        } else {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_REQ_NEW_EXPIRY_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.REQ_NEW_EXPIRY_DT.value < SYS_BUSI_DATE) {
            alert("Requested New Date of Expiry [31J] date is not allowed later than system date!");
            document.MAINFORM.REQ_NEW_EXPIRY_DT.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_GuaranteeDemand.js", e);
    }
}