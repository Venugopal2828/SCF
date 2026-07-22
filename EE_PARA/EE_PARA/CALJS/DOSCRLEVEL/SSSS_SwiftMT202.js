"path:SCRN/DO/SwiftMT202.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_SwiftMT202.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_SwiftMT202.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_SwiftMT202.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        alert('ly-try');
    } catch (e) {
        DisExcpt("SSSS_SwiftMT202.js", e);
    }
}