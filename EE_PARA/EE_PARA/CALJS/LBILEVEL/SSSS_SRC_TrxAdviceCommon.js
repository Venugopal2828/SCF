"path:SCRN/Library/TrxAdviceCommon.lbi";

var csLbiCompProto = {};

csLbiCompProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.FORM_UNTI_CODE.value = SYS_BUSI_UNIT;
        SYS_GetCUBK_S('IBC_ADDR_SBA', 'FORM_UNTI_CODE');
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_TrxAdviceCommon.js", e);
    }
}