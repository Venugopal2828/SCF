var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo_S('FAEF_INV_TRF', 'SYF_FAEF_Cal_Ref');
    } catch (e) {
        DisExcpt("SYF_FAEF_ManualRegisterPO.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.PO_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_FAEF_ManualRegisterPO.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Ref = function(ref) {
    try {
        var buditype;
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        buditype = document.MAINFORM.FA_BUSI_TYPE.value
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'MRP';
        document.MAINFORM.C_MAIN_REF.value = buditype + UnitCode + year + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FAEF_ManualRegisterPO.js*SYF_FAEF_Cal_Ref", e);
    }
}