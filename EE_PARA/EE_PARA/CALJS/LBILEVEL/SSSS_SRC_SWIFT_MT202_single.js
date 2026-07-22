"path:SCRN/Library/FFIT/SWIFT_MT202_single.lbi";

var csLbiCompProto = {};

csLbiCompProto.Check_X202_1_56A_BIC = function() {
    try {
        if (document.MAINFORM.X202_1_56A_BIC.value != '') {
            if (document.MAINFORM.X202_1_57A_BIC.value == '') {
                alert("57A can't be emputy");
                return false;
            }
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.ConfirmBusinessCheck_MT202 = function() {
    try {
        if (!Check_X202_1_56A_BIC()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.InitEvent_MT202 = function() {
    try {
        document.MAINFORM.X202_1_52A_BIC.onchange = X202_1_52A_BIC_onchange;
        document.MAINFORM.X202_1_53A_BIC.onchange = X202_1_53A_BIC_onchange;
        document.MAINFORM.X202_1_54A_BIC.onchange = X202_1_54A_BIC_onchange;
        document.MAINFORM.X202_1_56A_BIC.onchange = X202_1_56A_BIC_onchange;
        document.MAINFORM.X202_1_57A_BIC.onchange = X202_1_57A_BIC_onchange;
        document.MAINFORM.X202_1_58A_BIC.onchange = X202_1_58A_BIC_onchange;
        document.MAINFORM.X202_1_58A_TAG.onchange = X202_1_58A_TAG_change;
        document.MAINFORM.X202_1_58A_ADD.onchange = X202_1_58A_ADD_change;
        document.MAINFORM.X202_1_52A_ID.onchange = X202_1_52A_ID_onchange;
        document.MAINFORM.X202_1_53A_ID.onchange = X202_1_53A_ID_onchange;
        document.MAINFORM.X202_1_54A_ID.onchange = X202_1_54A_ID_onchange;
        document.MAINFORM.X202_1_56A_ID.onchange = X202_1_56A_ID_onchange;
        document.MAINFORM.X202_1_57A_ID.onchange = X202_1_57A_ID_onchange;
        document.MAINFORM.X202_1_58A_ID.onchange = X202_1_58A_ID_onchange;
        document.MAINFORM.X202_1_58A_NM.onchange = X202_1_58A_NM_onchange;
        document.MAINFORM.X202_1_58A_ADD.onchange = X202_1_58A_ADD_onchange;
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.InitValues_MT202 = function() {
    try {
        var qObject = EEHtml.getElementById("RelatedParties");
        qObject.style.display = "none";
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.SYF_CHK_X202_TAG_52A = function() {
    try {
        if (document.MAINFORM.X202_ORDBK_SW_52A.value != '') {
            document.MAINFORM.X202_TAG_52A.value = 'A';
        }
        if ((document.MAINFORM.X202_ORDBK_NM_52A.value != '' || document.MAINFORM.X202_ORDBKADD1_52A.value != '' || document.MAINFORM.X202_ORDBKADD2_52A.value != '' || document.MAINFORM.X202_ORDBKADD3_52A.value != '') && document.MAINFORM.X202_ORDBK_SW_52A.value == '') {
            document.MAINFORM.X202_TAG_52A.value = 'D';
        }
        if (document.MAINFORM.X202_ORDBK_NM_52A.value == '' && document.MAINFORM.X202_ORDBKADD1_52A.value == '' && document.MAINFORM.X202_ORDBKADD2_52A.value == '' && document.MAINFORM.X202_ORDBKADD3_52A.value == '' && document.MAINFORM.X202_ORDBK_SW_52A.value == '') {
            document.MAINFORM.X202_TAG_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.SYF_CHK_X202_TAG_53A = function() {
    try {
        if (document.MAINFORM.X202_SENDCORRSW53A.value != '') {
            document.MAINFORM.X202_TAG_53A.value = 'A';
        }
        if ((document.MAINFORM.X202_SENDCORRNM53A.value != '' || document.MAINFORM.X202SENDCORADD153A.value != '' || document.MAINFORM.X202SENDCORADD253A.value != '' || document.MAINFORM.X202SENDCORADD353A.value != '') && document.MAINFORM.X202_SENDCORRSW53A.value == '') {
            document.MAINFORM.X202_TAG_53A.value = 'D';
        }
        if (document.MAINFORM.X202_SENDCORRNM53A.value == '' && document.MAINFORM.X202SENDCORADD153A.value == '' && document.MAINFORM.X202SENDCORADD253A.value == '' && document.MAINFORM.X202SENDCORADD353A.value == '' && document.MAINFORM.X202_SENDCORRSW53A.value == '') {
            document.MAINFORM.X202_TAG_53A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.SYF_CHK_X202_TAG_54A = function() {
    try {
        if (document.MAINFORM.X202_RECCORRSW_54A.value != '') {
            document.MAINFORM.X202_TAG_54A.value = 'A';
        }
        if ((document.MAINFORM.X202_RECCORRNM_54A.value != '' || document.MAINFORM.X202_RECCORADD154A.value != '' || document.MAINFORM.X202_RECCORADD254A.value != '' || document.MAINFORM.X202_RECCORADD354A.value != '') && document.MAINFORM.X202_RECCORRSW_54A.value == '') {
            document.MAINFORM.X202_TAG_54A.value = 'D';
        }
        if (document.MAINFORM.X202_RECCORRNM_54A.value == '' && document.MAINFORM.X202_RECCORADD154A.value == '' && document.MAINFORM.X202_RECCORADD254A.value == '' && document.MAINFORM.X202_RECCORADD354A.value == '' && document.MAINFORM.X202_RECCORRSW_54A.value == '') {
            document.MAINFORM.X202_TAG_54A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.SYF_CHK_X202_TAG_56A = function() {
    try {
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value != '') {
            document.MAINFORM.X202_TAG_56A.value = 'A';
        }
        if ((document.MAINFORM.X202_MEDI_BKNM_56A.value != '' || document.MAINFORM.X202MEDIBKADD1_56A.value != '' || document.MAINFORM.X202MEDIBKADD2_56A.value != '' || document.MAINFORM.X202MEDIBKADD3_56A.value != '') && document.MAINFORM.X202_MEDI_BKSW_56A.value == '') {
            document.MAINFORM.X202_TAG_56A.value = 'D';
        }
        if (document.MAINFORM.X202_MEDI_BKNM_56A.value == '' && document.MAINFORM.X202MEDIBKADD1_56A.value == '' && document.MAINFORM.X202MEDIBKADD2_56A.value == '' && document.MAINFORM.X202MEDIBKADD3_56A.value == '' && document.MAINFORM.X202_MEDI_BKSW_56A.value == '') {
            document.MAINFORM.X202_TAG_56A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.SYF_CHK_X202_TAG_57A = function() {
    try {
        if (document.MAINFORM.X202_ACC_BKSW_57A.value != '') {
            document.MAINFORM.X202_TAG_57A.value = 'A';
        }
        if ((document.MAINFORM.X202_ACC_BKNM_57A.value != '' || document.MAINFORM.X202_ACCBKADD1_57A.value != '' || document.MAINFORM.X202_ACCBKADD2_57A.value != '' || document.MAINFORM.X202_ACCBKADD3_57A.value != '') && document.MAINFORM.X202_ACC_BKSW_57A.value == '') {
            document.MAINFORM.X202_TAG_57A.value = 'D';
        }
        if (document.MAINFORM.X202_ACC_BKNM_57A.value == '' && document.MAINFORM.X202_ACCBKADD1_57A.value == '' && document.MAINFORM.X202_ACCBKADD2_57A.value == '' && document.MAINFORM.X202_ACCBKADD3_57A.value == '' && document.MAINFORM.X202_ACC_BKSW_57A.value == '') {
            document.MAINFORM.X202_TAG_57A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.SYF_CHK_X202_TAG_58A = function() {
    try {
        if (document.MAINFORM.X202_BENE_BKSW_58A.value != '') {
            document.MAINFORM.X202_TAG_58A.value = 'A';
        }
        if ((document.MAINFORM.X202_BENE_BKNM_58A.value != '' || document.MAINFORM.X202BENEBKADD1_58A.value != '' || document.MAINFORM.X202BENEBKADD2_58A.value != '' || document.MAINFORM.X202BENEBKADD3_58A.value != '') && document.MAINFORM.X202_BENE_BKSW_58A.value == '') {
            document.MAINFORM.X202_TAG_58A.value = 'D';
        }
        if (document.MAINFORM.X202_BENE_BKNM_58A.value == '' && document.MAINFORM.X202BENEBKADD1_58A.value == '' && document.MAINFORM.X202BENEBKADD2_58A.value == '' && document.MAINFORM.X202BENEBKADD3_58A.value == '' && document.MAINFORM.X202_BENE_BKSW_58A.value == '') {
            document.MAINFORM.X202_TAG_58A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.SYF_CHK_X202_TAG_B2 = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            document.MAINFORM.X202_TAG_B2.value = 'A';
        }
        if ((document.MAINFORM.X202_ADV_BKNM_B2.value != '' || document.MAINFORM.X202_ADV_BKADD1_B2.value != '' || document.MAINFORM.X202_ADV_BKADD2_B2.value != '' || document.MAINFORM.X202_ADV_BKADD3_B2.value != '') && document.MAINFORM.X202_ADV_BKSW_B2.value == '') {
            document.MAINFORM.X202_TAG_B2.value = 'D';
        }
        if (document.MAINFORM.X202_ADV_BKNM_B2.value == '' && document.MAINFORM.X202_ADV_BKADD1_B2.value == '' && document.MAINFORM.X202_ADV_BKADD2_B2.value == '' && document.MAINFORM.X202_ADV_BKADD3_B2.value == '' && document.MAINFORM.X202_ADV_BKSW_B2.value == '') {
            document.MAINFORM.X202_TAG_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_52A_BIC = function() {
    try {
        if (document.MAINFORM.X202_1_52A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single_X202_1_52A_BIC_0', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_52A_TAG = function() {
    try {
        if (document.MAINFORM.X202_1_52A_BIC.value != '') {
            document.MAINFORM.X202_1_52A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_1_52A_ADD.value != '') {
            document.MAINFORM.X202_1_52A_TAG.value = 'D';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_53A_BIC = function() {
    try {
        if (document.MAINFORM.X202_1_53A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single_X202_1_53A_BIC_2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_53A_TAG = function() {
    try {
        if (document.MAINFORM.X202_1_53A_BIC.value != '') {
            document.MAINFORM.X202_1_53A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_1_53A_ADD.value != '') {
            document.MAINFORM.X202_1_53A_TAG.value = 'D';
        } else if (document.MAINFORM.X202_1_53A_NM.value != '') {
            document.MAINFORM.X202_1_53A_TAG.value = 'B';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_54A_BIC = function() {
    try {
        if (document.MAINFORM.X202_1_54A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single_X202_1_54A_BIC_4', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_54A_TAG = function() {
    try {
        if (document.MAINFORM.X202_1_54A_BIC.value != '') {
            document.MAINFORM.X202_1_54A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_1_54A_ADD.value != '') {
            document.MAINFORM.X202_1_54A_TAG.value = 'D';
        } else if (document.MAINFORM.X202_1_54A_NM.value != '') {
            document.MAINFORM.X202_1_54A_TAG.value = 'B';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_56A_BIC = function() {
    try {
        if (document.MAINFORM.X202_1_56A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single_X202_1_56A_BIC_6', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_56A_ID_onchange = function() {
    try {
        SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single_X202_1_56A_ID_onchange_7', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_56A_TAG = function() {
    try {
        if (document.MAINFORM.X202_1_56A_BIC.value != '') {
            document.MAINFORM.X202_1_56A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_1_56A_ADD.value != '') {
            document.MAINFORM.X202_1_56A_TAG.value = 'D';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_57A_BIC = function() {
    try {
        if (document.MAINFORM.X202_1_57A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single_X202_1_57A_BIC_8', '1');
        } else {
            document.MAINFORM.X202_1_57A_ID.value = '';
            document.MAINFORM.X202_1_57A_NM.value = '';
            document.MAINFORM.X202_1_57A_ADD.value = '';
            document.MAINFORM.X202_1_57A_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_57A_ID_onchange = function() {
    try {
        SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single_X202_1_57A_ID_onchange_9', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_57A_TAG = function() {
    try {
        if (document.MAINFORM.X202_1_57A_BIC.value != '') {
            document.MAINFORM.X202_1_57A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_1_57A_ADD.value != '') {
            document.MAINFORM.X202_1_57A_TAG.value = 'D';
        } else if (document.MAINFORM.X202_1_57A_NM.value != '') {
            document.MAINFORM.X202_1_57A_TAG.value = 'B';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_58A_ADD_change = function() {
    try {
        X202_1_58A_TAG();
        X202_1_58A_TAG_change();
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_58A_BIC = function() {
    try {
        if (document.MAINFORM.X202_1_58A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_SWIFT_MT202_single_X202_1_58A_BIC_10', '1');
        } else {
            document.MAINFORM.X202_1_58A_ID.value = '';
            document.MAINFORM.X202_1_58A_NM.value = '';
            document.MAINFORM.X202_1_58A_ADD.value = '';
            document.MAINFORM.X202_1_58A_TAG.value = '';

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_58A_IM_RPT = function() {
    try {
        if (SYS_ORG_FUNCTION_ID == "F05030700861" || SYS_ORG_FUNCTION_ID == "F05030700884") {
            document.MAINFORM.RPT_RCV_BK_ADD.value = document.MAINFORM.X202_1_58A_ADD.value.substr(0, 60);
            document.MAINFORM.RPT_RCV_BK_NM.value = document.MAINFORM.X202_1_58A_NM.value.substr(0, 60);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_58A_TAG = function() {
    try {
        if (document.MAINFORM.X202_1_58A_BIC.value != '') {
            document.MAINFORM.X202_1_58A_TAG.value = 'A';
        } else if (document.MAINFORM.X202_1_58A_ADD.value != '') {
            document.MAINFORM.X202_1_58A_TAG.value = 'D';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}

csLbiCompProto.X202_1_58A_TAG_change = function() {
    try {
        if (document.MAINFORM.X202_1_58A_TAG.value == 'D' && document.MAINFORM.X202_1_20.value != '') {

            SYT_ChangeFldClass(document.MAINFORM.X202_1_58A_ADD, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_1_58A_ADD, 'O', 'N');
        }
        if (document.MAINFORM.X202_1_20.value != '' && document.MAINFORM.X202_1_58A_TAG.value == 'A') {
            SYT_ChangeFldClass(document.MAINFORM.X202_1_58A_BIC, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_1_58A_ID, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_1_58A_BIC, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_1_58A_ID, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SWIFT_MT202_single.js", e);
    }
}