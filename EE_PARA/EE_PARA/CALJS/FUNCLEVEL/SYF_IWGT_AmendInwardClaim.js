var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PreconditionOnInit = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'AmendClaim';
        SYF_IWGT_Cal_Temp_N90_REF_20();
        SYF_IWGT_Cal_Temp_N90_REF_21();
        SYF_IWGT_Cal_Init_CLM_CNTR();
        document.MAINFORM.APPL_CUST_BK.value = 'Bank';
        document.MAINFORM.TEMP_AMT1.value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass('B_div');
        SYT_DisableDivClass('A_div');

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Temp_N90_REF_20 = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Temp_N90_REF_21 = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Init_CLM_CNTR = function() {
    try {

        var claim_no = SYS_BeInt(document.MAINFORM.CLM_CNTR.value);
        if (claim_no < 10) {
            document.MAINFORM.CLM_CNTR.value = '0' + claim_no;
        } else {
            document.MAINFORM.CLM_CNTR.value = claim_no;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_check_CLM_AMT = function() {
    try {

        var nGTEE_BAL = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value);
        var nCLM_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        var nORG_CLM_AMT = SYS_BeFloat(document.MAINFORM.TEMP_AMT1.value);
        if (nCLM_AMT > nGTEE_BAL) {
            alert("Claim Amount can not exceed the Guarantee Amount");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, nORG_CLM_AMT);
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
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
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_AmendInwardClaim.js", e);
    }
}