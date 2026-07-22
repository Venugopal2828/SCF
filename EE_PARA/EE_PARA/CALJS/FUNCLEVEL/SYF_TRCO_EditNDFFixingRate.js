var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        SYF_TRCO_Cal_FIX_RT();
    } catch (e) {
        DisExcpt("SYF_TRCO_EditNDFFixingRate.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_FIX_RT = function() {
    try {
        var FIX_RT = SYS_BeFloat(document.MAINFORM.FIX_RT.value);
        var COMT_CCY = document.MAINFORM.COMT_CCY.value;
        document.MAINFORM.FIX_RT.value = SYT_setRateFormatByCurrency(FIX_RT, COMT_CCY);
    } catch (e) {
        DisExcpt("SYF_TRCO_EditNDFFixingRate.js*SYF_TRCO_Cal_FIX_RT", e);
    }
}

csFuncLevelProto.FLD_TRCO_FIX_RT_onchange = function(event) {
    try {
        SYF_TRCO_Cal_FIX_RT();
    } catch (e) {
        DisExcpt("SYF_TRCO_EditNDFFixingRate.js*FLD_TRCO_FIX_RT_onchange", e);
    }
}