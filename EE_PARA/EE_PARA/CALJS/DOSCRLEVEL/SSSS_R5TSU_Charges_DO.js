"path:SCRN/DO/R5TSU_Charges_DO.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.InitValues = function() {
    try {
        TSU_CCY();
    } catch (e) {
        DisExcpt("SSSS_R5TSU_Charges_DO.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var MainCCY; // Utility Auto Fix Comments
        MainCCY = parent.SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_CCY.value = MainCCY;
    } catch (e) {
        DisExcpt("SSSS_R5TSU_Charges_DO.js", e);
    }
}