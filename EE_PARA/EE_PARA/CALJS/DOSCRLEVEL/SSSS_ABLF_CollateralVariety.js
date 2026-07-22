"path:SCRN/DO/ABLF_CollateralVariety.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.PARTY_ID.value = SYS_getValueFromMain('PARTY_ID');
    } catch (e) {
        DisExcpt("SSSS_ABLF_CollateralVariety.js", e);
    }
}