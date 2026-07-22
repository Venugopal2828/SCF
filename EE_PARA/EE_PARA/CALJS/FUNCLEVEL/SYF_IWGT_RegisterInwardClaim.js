var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'RegisterClaim';
        document.MAINFORM.NXT_STATUS.value = '';
        document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
        SYM_IWGT_Cal_CLAIM_COUNTER();
        document.MAINFORM.CLM_REF.value = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.CLM_CNTR.value;
        document.MAINFORM.CLM_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CLS_FLG.value = 'NO';
        document.MAINFORM.SEND_TO_RCV_INFO.value = "";
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
        document.MAINFORM.APPL_CUST_BK.value = 'Bank';
        if (document.MAINFORM.ACPT_REJ.value == 'ACCP') {
            document.MAINFORM.GTEE_AMT.value = document.MAINFORM.NEW_GTEE_AMT.value;
            //document.MAINFORM.GTEE_BAL.value =document.MAINFORM.NEW_GTEE_AMT.value ;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardClaim.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        onChangeDiary();
        if (C_FUNC_SHORT_NAME == 'SettleClaim') {
            document.MAINFORM.GTEE_BAL.value = document.MAINFORM.CLM_BAL.value;
        }
        if (document.MAINFORM.ACPT_REJ.value == 'ACCP') {
            document.MAINFORM.GTEE_AMT.value = document.MAINFORM.NEW_GTEE_AMT.value;
            //document.MAINFORM.GTEE_BAL.value =document.MAINFORM.NEW_GTEE_AMT.value ;
        }
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
        DisExcpt("SYF_IWGT_RegisterInwardClaim.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardClaim.js", e);
    }
}

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
        DisExcpt("SYF_IWGT_RegisterInwardClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CLM_DT_onchange = function(event) {
    try {
        var days;
        var days1; // Utility Auto Fix Comments
        days = SYS_GetSubDays('INWARD_RCV_DT', 'CLM_DT');
        days1 = SYS_GetSubDays('EXPIRY_DT', 'CLM_DT');
        if (days < 0) {
            SYS_CheckError(document.MAINFORM.CLM_DT, " Claim Registration Date  should be later than issue date!");
            document.MAINFORM.CLM_DT.value = '';
        } else if (days1 > 0) {
            SYS_CheckError(document.MAINFORM.CLM_DT, " Claim Registration Date  should be below than expiry date!");
            document.MAINFORM.CLM_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardClaim.js", e);
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
        DisExcpt("SYF_IWGT_RegisterInwardClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardClaim.js", e);
    }
}