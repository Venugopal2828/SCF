"path:SCRN/Library/FFIT/SWIFT_MT742.lbi";

var csLbiCompProto = {};

csLbiCompProto.InitEvent_MT742 = function() {
    try {
        document.MAINFORM.X742_52A_BIC.onchange = X742_52A_BIC_onchange;
        document.MAINFORM.X742_52A_ID.onchange = X742_52A_ID_onchange;
        document.MAINFORM.X742_57A_BIC.onchange = X742_57A_BIC_onchange;
        document.MAINFORM.X742_57A_ID.onchange = X742_57A_ID_onchange;
        document.MAINFORM.X742_58A_BIC.onchange = X742_58A_BIC_onchange;
        document.MAINFORM.X742_58A_ID.onchange = X742_58A_ID_onchange;
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.MT742_InitValue = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.X742_52A_BIC = function() {
    try {
        if (document.MAINFORM.X742_52A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT742_X742_52A_BIC_0', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.X742_52A_TAG = function() {
    try {
        if (document.MAINFORM.X742_52A_BIC.value != '') {
            document.MAINFORM.X742_52A_TAG.value = 'A';

        } else if (document.MAINFORM.X742_52A_ADD.value != '') {
            document.MAINFORM.X742_52A_TAG.value = 'D';

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.X742_57A_BIC = function() {
    try {
        if (document.MAINFORM.X742_57A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT742_X742_57A_BIC_2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.X742_57A_TAG = function() {
    try {
        if (document.MAINFORM.X742_57A_BIC.value != '') {
            document.MAINFORM.X742_57A_TAG.value = 'A';

        } else if (document.MAINFORM.X742_57A_ADD.value != '') {
            document.MAINFORM.X742_57A_TAG.value = 'D';

        } else if (document.MAINFORM.X742_57A_NM.value != '') {
            document.MAINFORM.X742_57A_TAG.value = 'B';

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.X742_58A_BIC = function() {
    try {
        if (document.MAINFORM.X742_58A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT742_X742_58A_BIC_4', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.X742_58A_TAG = function() {
    try {
        if (document.MAINFORM.X742_58A_BIC.value != '') {
            document.MAINFORM.X742_58A_TAG.value = 'A';

        } else if (document.MAINFORM.X742_58A_ADD.value != '') {
            document.MAINFORM.X742_58A_TAG.value = 'D';

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X742_52A_BIC_onchange = function(event) {
    try {
        X742_52A_BIC();
        X742_52A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X742_52A_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X742_52A_ID.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT742_X742_52A_ID_onchange_1', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X742_57A_BIC_onchange = function(event) {
    try {
        X742_57A_BIC();
        X742_57A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X742_57A_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X742_57A_ID.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT742_X742_57A_ID_onchange_3', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X742_58A_BIC_onchange = function(event) {
    try {
        X742_58A_BIC();
        X742_58A_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X742_58A_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X742_58A_ID.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT742_X742_58A_ID_onchange_5', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT742.js", e);
    }
}