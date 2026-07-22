"path:SCRN/o2m/FAEF_POVerify.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;

    } catch (e) {
        DisExcpt("SSSS_FAEF_POVerify.js*PostconditionOnInit", e);
    }
}
