"path:SCRN/o2m/FAEF_POAdjust.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("FAEF_FAEF_POAdjust.js*PostconditionOnInit", e);
    }
}