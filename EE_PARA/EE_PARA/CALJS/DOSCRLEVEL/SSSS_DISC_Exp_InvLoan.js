"path:SCRN/o2m/DISC_Exp_InvLoan.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvLoan.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvLoan.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvLoan.js", e);
    }
}

csDOScreenProto.plg_InputFormPopulated = function(frm, sld, wrapper) {
    try {

    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvLoan.js", e);
    }
}