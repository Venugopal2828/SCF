"path:SCRN/DO/SWIFT_MT752.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_SWIFT_MT752.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_SWIFT_MT752.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_SWIFT_MT752.js", e);
    }
}

csDOScreenProto.X752_ADV_BKID_B2_onclick = function(event) {
    try {
        SYS_GetCUBK_S(X752_B2_ADV_BK_ID_BTN, document.MAINFORM.X752_ADV_BKID_B2.name);
    } catch (e) {
        DisExcpt("SSSS_SWIFT_MT752.js", e);
    }
}

csDOScreenProto.X752_ADV_BKNM_B2_onclick = function(event) {
    try {
        SYS_GetCUBK_S(X752_B2_ADV_BK_ADD_BTN, document.MAINFORM.X752_ADV_BKNM_B2.name);
    } catch (e) {
        DisExcpt("SSSS_SWIFT_MT752.js", e);
    }
}

csDOScreenProto.X752_RECCORRID_54A_onclick = function(event) {
    try {
        SYS_GetCUBK_S(X752_54A_RECCORR_BK_ID_BTN, document.MAINFORM.X752_RECCORRID_54A.name);
    } catch (e) {
        DisExcpt("SSSS_SWIFT_MT752.js", e);
    }
}

csDOScreenProto.X752_RECCORRNM_54A_onclick = function(event) {
    try {
        SYS_GetCUBK_S(X752_54A_RECCORR_BK_ADD_BTN, document.MAINFORM.X752_RECCORRNM_54A.name);
    } catch (e) {
        DisExcpt("SSSS_SWIFT_MT752.js", e);
    }
}

csDOScreenProto.X752_SENDCORRID53A_onclick = function(event) {
    try {
        SYS_GetCUBK_S(X752_53A_SENDCORR_BK_ID_BTN, document.MAINFORM.X752_SENDCORRID53A.name);
    } catch (e) {
        DisExcpt("SSSS_SWIFT_MT752.js", e);
    }
}

csDOScreenProto.X752_SENDCORRNM53A_onclick = function(event) {
    try {
        SYS_GetCUBK_S(X752_53A_SENDCORR_BK_ADD_BTN, document.MAINFORM.X752_SENDCORRNM53A.name);
    } catch (e) {
        DisExcpt("SSSS_SWIFT_MT752.js", e);
    }
}