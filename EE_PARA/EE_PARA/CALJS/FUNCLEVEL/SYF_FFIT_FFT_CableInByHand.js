var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_CABLE_ITEM_check = function() {
    try {

        if ((document.MAINFORM.FINANCE_FLG.value == '2') && (document.MAINFORM.FFT_TRF_FLG.value == '1')) {
            alert('This transaction have been transfer.');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableInByHand.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_Check_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableInByHand.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'FFFTCablelnHand';
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        document.MAINFORM.AUTH_BLACK.value = '0';
        document.MAINFORM.AUTH_POINT1.value = '0';
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableInByHand.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableInByHand.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableInByHand.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableInByHand.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FFT_TRF_FLG_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableInByHand.js", e);
    }
}