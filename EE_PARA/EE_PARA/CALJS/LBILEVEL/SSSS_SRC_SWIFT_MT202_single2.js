"path:SCRN/Library/FFIT/SWIFT_MT202_single2.lbi";

var csLbiCompProto = {};

csLbiCompProto.Check_X202_2_56A_BIC = function() {
    try {
        if (document.MAINFORM.X202_2_56A_BIC.value != '') {
            if (document.MAINFORM.X202_2_57A_BIC.value == '') {
                alert("57A can't be emputy");
                return false;

            }

            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.ConfirmBusinessCheck_MT202 = function() {
    try {
        if (!Check_X202_2_56A_BIC()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.InitEvent_MT202_2 = function() {
    try {
        document.MAINFORM.X202_2_52A_BIC.onchange = X202_2_52A_BIC_onchange;
        document.MAINFORM.X202_2_53A_BIC.onchange = X202_2_53A_BIC_onchange;
        document.MAINFORM.X202_2_54A_BIC.onchange = X202_2_54A_BIC_onchange;
        document.MAINFORM.X202_2_56A_BIC.onchange = X202_2_56A_BIC_onchange;
        document.MAINFORM.X202_2_57A_BIC.onchange = X202_2_57A_BIC_onchange;
        document.MAINFORM.X202_2_58A_BIC.onchange = X202_2_58A_BIC_onchange;
        document.MAINFORM.X202_2_58A_TAG.onchange = X202_2_58A_TAG_change;
        document.MAINFORM.X202_2_58A_ADD.onchange = X202_2_58A_ADD_change;
        document.MAINFORM.X202_2_52A_ID.onchange = X202_2_52A_ID_onchange;
        document.MAINFORM.X202_2_53A_ID.onchange = X202_2_53A_ID_onchange;
        document.MAINFORM.X202_2_54A_ID.onchange = X202_2_54A_ID_onchange;
        document.MAINFORM.X202_2_56A_ID.onchange = X202_2_56A_ID_onchange;
        document.MAINFORM.X202_2_57A_ID.onchange = X202_2_57A_ID_onchange;
        document.MAINFORM.X202_2_58A_ID.onchange = X202_2_58A_ID_onchange;

        document.MAINFORM.X202_2_58A_NM.onchange = X202_2_58A_NM_onchange;
        document.MAINFORM.X202_2_58A_ADD.onchange = X202_2_58A_ADD_onchange;
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.InitValues_MT202 = function() {
    try {
        var qObject = EEHtml.getElementById("RelatedParties");
        qObject.style.display = "none";
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_52A_BIC = function() {
    try {
        if (document.MAINFORM.X202_2_52A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single2_X202_2_52A_BIC_0', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_52A_ID_onchange = function() {
    try {
        SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single2_X202_2_52A_ID_onchange_1', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_52A_TAG = function() {
    try {
        if (document.MAINFORM.X202_2_52A_BIC.value != '') {
            document.MAINFORM.X202_2_52A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_2_52A_ADD.value != '') {
            document.MAINFORM.X202_2_52A_TAG.value = 'D';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_53A_BIC = function() {
    try {
        if (document.MAINFORM.X202_2_53A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single2_X202_2_53A_BIC_2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_53A_ID_onchange = function() {
    try {
        SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single2_X202_2_53A_ID_onchange_3', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_53A_TAG = function() {
    try {
        if (document.MAINFORM.X202_2_53A_BIC.value != '') {
            document.MAINFORM.X202_2_53A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_2_53A_ADD.value != '') {
            document.MAINFORM.X202_2_53A_TAG.value = 'D';
        } else if (document.MAINFORM.X202_2_53A_NM.value != '') {
            document.MAINFORM.X202_2_53A_TAG.value = 'B';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_54A_BIC = function() {
    try {
        if (document.MAINFORM.X202_2_54A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single2_X202_2_54A_BIC_4', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_54A_TAG = function() {
    try {
        if (document.MAINFORM.X202_2_54A_BIC.value != '') {
            document.MAINFORM.X202_2_54A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_2_54A_ADD.value != '') {
            document.MAINFORM.X202_2_54A_TAG.value = 'D';
        } else if (document.MAINFORM.X202_2_54A_NM.value != '') {
            document.MAINFORM.X202_2_54A_TAG.value = 'B';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_56A_BIC = function() {
    try {
        if (document.MAINFORM.X202_2_56A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single2_X202_2_56A_BIC_6', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_56A_TAG = function() {
    try {
        if (document.MAINFORM.X202_2_56A_BIC.value != '') {
            document.MAINFORM.X202_2_56A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_2_56A_ADD.value != '') {
            document.MAINFORM.X202_2_56A_TAG.value = 'D';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_57A_BIC = function() {
    try {
        if (document.MAINFORM.X202_2_57A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single2_X202_2_57A_BIC_8', '1');
        } else {
            document.MAINFORM.X202_2_57A_ID.value = '';
            document.MAINFORM.X202_2_57A_NM.value = '';
            document.MAINFORM.X202_2_57A_ADD.value = '';
            document.MAINFORM.X202_2_57A_TAG.value = '';

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_57A_TAG = function() {
    try {
        if (document.MAINFORM.X202_2_57A_BIC.value != '') {
            document.MAINFORM.X202_2_57A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_2_57A_ADD.value != '') {
            document.MAINFORM.X202_2_57A_TAG.value = 'D';
        } else if (document.MAINFORM.X202_2_57A_NM.value != '') {
            document.MAINFORM.X202_2_57A_TAG.value = 'B';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_58A_ADD_change = function() {
    try {
        X202_2_58A_TAG();
        X202_2_58A_TAG_change();
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_58A_BIC = function() {
    try {
        if (document.MAINFORM.X202_2_58A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single2_X202_2_58A_BIC_10', '1');
        } else {
            document.MAINFORM.X202_2_58A_ID.value = '';
            document.MAINFORM.X202_2_58A_NM.value = '';
            document.MAINFORM.X202_2_58A_ADD.value = '';
            document.MAINFORM.X202_2_58A_TAG.value = '';

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_58A_IM_RPT = function() {
    try {
        if (SYS_ORG_FUNCTION_ID == "F05030700861" || SYS_ORG_FUNCTION_ID == "F05030700884") {
            document.MAINFORM.RPT_RCV_BK_ADD.value = document.MAINFORM.X202_2_58A_ADD.value.substr(0, 60);
            document.MAINFORM.RPT_RCV_BK_NM.value = document.MAINFORM.X202_2_58A_NM.value;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_58A_TAG = function() {
    try {
        if (document.MAINFORM.X202_2_58A_BIC.value != '') {
            document.MAINFORM.X202_2_58A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_2_58A_ADD.value != '') {
            document.MAINFORM.X202_2_58A_TAG.value = 'D';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}

csLbiCompProto.X202_2_58A_TAG_change = function() {
    try {
        if (document.MAINFORM.X202_2_58A_TAG.value == 'D' && document.MAINFORM.X202_2_20.value != '') {

            SYT_ChangeFldClass(document.MAINFORM.X202_2_58A_ADD, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_2_58A_ADD, 'O', 'N');
        }
        if (document.MAINFORM.X202_2_20.value != '' && document.MAINFORM.X202_2_58A_TAG.value == 'A') {
            SYT_ChangeFldClass(document.MAINFORM.X202_2_58A_BIC, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_2_58A_ID, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_2_58A_BIC, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_2_58A_ID, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single2.js", e);
    }
}