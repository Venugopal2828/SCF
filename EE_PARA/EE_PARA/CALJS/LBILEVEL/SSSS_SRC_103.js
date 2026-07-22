"path:SCRN/DO/Library/103.lbi";

var csLbiCompProto = {};

csLbiCompProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_103.js*CancelCheck", e);
    }
}

csLbiCompProto.ConfirmBusinessCall = function() {
    try {} catch (e) {
        DisExcpt("SSSS_SRC_103.js*ConfirmBusinessCall", e);
    }
}

csLbiCompProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_103.js*ConfirmBusinessCheck", e);
    }
}

csLbiCompProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_103.js*ConfirmBusinessCheckSave", e);
    }
}

csLbiCompProto.InitValues = function() {
    try {} catch (e) {
        DisExcpt("SSSS_SRC_103.js*InitValues", e);
    }
}

csLbiCompProto.LoadDODataOnInit = function() {
    try {} catch (e) {
        DisExcpt("SSSS_SRC_103.js*LoadDODataOnInit", e);
    }
}

csLbiCompProto.PostconditionOnInit = function() {
    try {} catch (e) {
        DisExcpt("SSSS_SRC_103.js*PostconditionOnInit", e);
    }
}

csLbiCompProto.PostconditionOnUnload = function() {
    try {} catch (e) {
        DisExcpt("SSSS_SRC_103.js*PostconditionOnUnload", e);
    }
}

csLbiCompProto.PreInitValues = function() {
    try {} catch (e) {
        DisExcpt("SSSS_SRC_103.js*PreInitValues", e);
    }
}

csLbiCompProto.PreconditionOnInit = function() {
    try {} catch (e) {
        DisExcpt("SSSS_SRC_103.js*PreconditionOnInit", e);
    }
}

csLbiCompProto.PreconditionOnUnload = function() {
    try {} catch (e) {
        DisExcpt("SSSS_SRC_103.js*PreconditionOnUnload", e);
    }
}

csLbiCompProto.X103_ADV_BKID_B2onclick = function() {
    try {
        var nX103_ADV_BKSW_B2; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_ADV_BKID_B2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_103.js*X103_ADV_BKID_B2onclick", e);
    }
}

csLbiCompProto.FLD_SSSS_X103_B2_BTN_onclick = function() {
    try {
        X103_ADV_BKID_B2onclick();
    } catch (e) {
        DisExcpt("SSSS_SRC_103.js*FLD_SSSS_X103_B2_BTN_onclick", e);
    }
}