var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //SYT_ShowBlankRow('BENE_blankRow',1);
        SYT_ShowBlankRow('INDE', 1);
        SYT_DisableDivClass("C_div");
        SYM_GTEE_APLB_RULE2();

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardAmendClaim.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "AmendClaim";
        document.MAINFORM.NXT_STATUS.value = "SettleOutwardClaim";

        document.MAINFORM.TEMP_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value; //For Guarantee Balance before Amend
        document.MAINFORM.TEMP_GTEE_AMT.value = document.MAINFORM.CLM_TRX_CCY_AMT.value; //For Claim Amount
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardAmendClaim.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_GTEE_BAL = function() {
    try {

        var nORIGIN_GTEE_BAL = SYS_BeFloat(document.MAINFORM.ORIGIN_GTEE_BAL.value);
        var nCLM_AMT_TRXCCY = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        //var nGTEE_BAL = SYS_BeFloat(nORIGIN_GTEE_BAL -nCLM_AMT_TRXCCY);  //Don' calculate Guarantee Balance in Claim Register

        if (nCLM_AMT_TRXCCY > nORIGIN_GTEE_BAL) {
            alert("Claim Amount can not exceed the Outstanding Guarantee Amount");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = document.MAINFORM.TEMP_GTEE_AMT.value;
            //	document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value,document.MAINFORM.TEMP_GTEE_BAL.value);  //Don' calculate Guarantee Balance in Claim Register
            return false;
        } else {
            //	document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value,nGTEE_BAL);  //Don' calculate Guarantee Balance in Claim Register
            return true;

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardAmendClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardAmendClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardAmendClaim.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_DT_onchange = function(event) {
    try {
        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.CLM_DT.name) < 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, "Claim Register Date must be later than Registration Date!");
            document.MAINFORM.CLM_DT.value = '';
        } else if ((SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.CLM_DT.name) >= 0)) {
            SYS_CheckError(document.MAINFORM.CLM_DT, "Claim Register Date is not allowed later than Expiry/Review Date");
            document.MAINFORM.CLM_DT.value = '';
        }

        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CLM_DT');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardAmendClaim.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_TRX_CCY_AMT_onchange = function(event) {
    try {
        var value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
        if (SYM_GTEE_CHK_NEG(value)) {
            alert("Claim amount should not accept negative values");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
        }



        SYF_GTEE_Cal_GTEE_BAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardAmendClaim.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardAmendClaim.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardAmendClaim.js", e);
    }
}