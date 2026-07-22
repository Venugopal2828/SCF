var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        document.MAINFORM.OVER_AC_NO.value = document.MAINFORM.FINC_OVERDUE_NO.value;
        document.MAINFORM.SETTLE_DT.value = document.MAINFORM.FINC_OVERDUE_DT.value;
        SYT_Check_AMT();
        SYF_FFIT_TEMP_CHAR5();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'Overdue';
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        FincOverdueOrgInitValue();
        document.MAINFORM.TEMP_AMT.value = document.MAINFORM.FINC_BAL.value;

        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_OVER_DAYS = function() {
    try {

        var sA = SYS_GetSubDays(document.MAINFORM.FINC_DT.name, document.MAINFORM.TRX_DT.name);
        document.MAINFORM.OVER_DAYS.value = SYS_BeFloat(sA) - SYS_BeFloat(document.MAINFORM.FINC_DAYS.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.OVER_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.TRANS_DATE_ID.value = SYT_GetDateID(document.MAINFORM.TRX_DT.value);
            SYT_RELE_CREA_BY();
            FincOverdueOrgPostValue();
            SYF_FFIT_OVER_DAYS();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR5 = function() {
    try {

        var sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'AD' || sTRX_NO == 'BP') {
            document.MAINFORM.TEMP_CHAR5.value = '603';
        } else {
            document.MAINFORM.TEMP_CHAR5.value = '610';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_BAL_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DAYS_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRX_NO_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Overdue.js", e);
    }
}