var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_TRF_REF.value = document.MAINFORM.FA_BUSI_TYPE.value + document.MAINFORM.FA_TRF_REF.value;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_TRF_REF.value;
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_FAEF_ManualRegisterInvoice.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_TTL_INV_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_INV_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_ManualRegisterInvoice.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo_S('FAEF_INV_TRF', 'SYF_FAEF_Cal_Ref');
    } catch (e) {
        DisExcpt("SYF_FAEF_ManualRegisterInvoice.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Ref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'MRI';
        document.MAINFORM.FA_TRF_REF.value = UnitCode + year + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FAEF_ManualRegisterInvoice.js*SYF_FAEF_Cal_Ref", e);
    }
}