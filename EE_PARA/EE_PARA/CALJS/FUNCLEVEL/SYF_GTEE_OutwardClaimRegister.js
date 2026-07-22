var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var clm_Balflag = true;
var gtee_Clmbal = 0;

csFuncLevelProto.InitValues = function() {
    try {

        SYF_GTEE_Cal_CLM_CNTR();
        SYF_GTEE_Cal_CLM_REF();
        document.MAINFORM.CLM_TRX_CCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_BAL.value);
        document.MAINFORM.ORIGIN_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value;
        document.MAINFORM.CLM_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CURRNT_STATUS.value = 'RegOutwardClaim';
        document.MAINFORM.NXT_STATUS.value = 'SettleOutwardClaim';
        //document.MAINFORM.APPLY_FLG.value = 'YES';
        gtee_Clmbal = document.MAINFORM.GTEE_BAL.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_CLM_REF = function() {
    try {

        var ref = '/';
        var nCLM_NO = document.MAINFORM.CLM_CNTR.value;
        if (nCLM_NO != '') {
            document.MAINFORM.CLM_REF.value = document.MAINFORM.C_MAIN_REF.value + ref + document.MAINFORM.CLM_CNTR.value;
        } else {
            document.MAINFORM.CLM_REF.value = document.MAINFORM.C_MAIN_REF.value;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_CLM_CNTR = function() {
    try {

        var nCLM_CNTR = SYS_BeInt(document.MAINFORM.CLM_CNTR.value);
        document.MAINFORM.CLM_CNTR.value = nCLM_CNTR + 1;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_C_TRX_REF = function() {
    try {

        document.MAINFORM.C_TRX_REF.value = document.MAINFORM.CLM_REF.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_GTEE_Cal_C_TRX_REF();
        SYT_CLERK_ID();

        Cal_MSG_TYPE();
        SYF_GTEE_CheckClmBlnce();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {


        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);

        SYM_GTEE_APLB_RULE2();
        SYT_DisableDivClass("C_div");
        SYF_GTEE_MT798_FLG();
        if (SYS_FUNCTION_TYPE == 'RE') {
            var cre_Date = document.MAINFORM.X798_CRE_DATE.value;
            var chg_dateFormat = cre_Date.replaceAll('-', '');
            document.MAINFORM.X798_CRE_DATE.value = chg_dateFormat.trim();
        }
        if (SYS_FUNCTION_TYPE == 'EC') { //added by priyanka
            if (I_EVENT_TIMES != I_EVENT_TIMES + 1) {
                document.MAINFORM.GTEE_BAL.value = document.MAINFORM.ORIGIN_GTEE_BAL.value;
            } else {
                document.MAINFORM.GTEE_BAL.value = SYS_BeFloat(document.MAINFORM.ORIGIN_GTEE_BAL.value) - SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
                document.MAINFORM.ORIGIN_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value;
            }
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_GTEE_BAL = function() {
    try {

        var nORIGIN_GTEE_BAL = SYS_BeFloat(document.MAINFORM.ORIGIN_GTEE_BAL.value);
        var nCLM_AMT_TRXCCY = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        //var nGTEE_BAL = SYS_BeFloat(nORIGIN_GTEE_BAL -nCLM_AMT_TRXCCY);  //Don' calculate Guarantee Balance in Claim Register

        if (nCLM_AMT_TRXCCY > nORIGIN_GTEE_BAL) {
            alert("Claim Amount can not exceed the Outstanding Guarantee Amount");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
            //	document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value,nORIGIN_GTEE_BAL);  //Don' calculate Guarantee Balance in Claim Register
            return false;
        } else {
            //	document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value,nGTEE_BAL);  //Don' calculate Guarantee Balance in Claim Register
            return true;

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MT798_FLG = function() {
    try {

        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDiv('Z_div');

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CheckClmBlnce = function() {
    try {

        if (clm_Balflag) {
            //if (SYS_BeFloat(gtee_Clmbal) >= SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value)) {
                //document.MAINFORM.GTEE_CLM_BAL.value = SYS_BeFloat(gtee_Clmbal) - SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value)
                if (SYS_BeFloat(document.MAINFORM.ORIGIN_GTEE_BAL.value) >= SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value)) {
                document.MAINFORM.GTEE_CLM_BAL.value = SYS_BeFloat(document.MAINFORM.ORIGIN_GTEE_BAL.value) - SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value)
                clm_Balflag = false;
            } else {
                alert("Guarantee Balance " + document.MAINFORM.GTEE_CLM_BAL.value + " Claim amount Execeeds Gurantee Balance!!!");
                document.MAINFORM.CLM_TRX_CCY_AMT.value = '';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLY_FLG_onchange = function(event) {
    try {
        SYF_GTEE_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_DT_onchange = function(event) {
    try {
        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.CLM_DT.name) < 0) {
            SYS_CheckError(document.MAINFORM.CLM_DT, "Claim Register Date must be later than Registration Date!");
            document.MAINFORM.CLM_DT.value = '';
        } else if ((SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.CLM_DT.name) >= 0)) {
            SYS_CheckError(document.MAINFORM.CLM_DT, "Claim Register Date is not allowed later than Expiry/Review Date");
            document.MAINFORM.CLM_DT.value = '';
        }

        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CLM_DT');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_TRX_CCY_AMT_onchange = function(event) {
    try {
        if (SYM_GTEE_CHK_NEG(document.MAINFORM.CLM_TRX_CCY_AMT.value)) {
            alert("Claim amount should not accept negative values");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
        }
        SYF_GTEE_Cal_GTEE_BAL();
        clm_Balflag = true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_X798_31C_ISSUE_DATE_onchange = function(event) {
    try {
        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.X798_31C_ISSUE_DATE.name) < 0) {
            SYS_CheckError(document.MAINFORM.X798_31C_ISSUE_DATE, "Date of Issue[31C] must be later than Registration Date!");
            document.MAINFORM.X798_31C_ISSUE_DATE.value = '';
        } else if ((SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.X798_31C_ISSUE_DATE.name) >= 0) && document.MAINFORM.EXPIRY_DT.value != '') {
            SYS_CheckError(document.MAINFORM.X798_31C_ISSUE_DATE, "Date of Issue[31C] is not allowed later than Expiry/Review Date");
            document.MAINFORM.X798_31C_ISSUE_DATE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimRegister.js", e);
    }
}