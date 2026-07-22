"path:SCRN/DO/202ForClean.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_202ForClean.js", e);
    }
}

csDOScreenProto.Clr_202_Rec_Bank = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_202ForClean.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_202ForClean.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_202ForClean.js", e);
    }
}