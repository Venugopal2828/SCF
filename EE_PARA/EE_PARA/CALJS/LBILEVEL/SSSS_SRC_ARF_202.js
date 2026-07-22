"path:SCRN/Library/ARF_202.lbi";

var csLbiCompProto = {};

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
        DisExcpt("SSSS_SRC_ARF_202.js", e);
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
        DisExcpt("SSSS_SRC_ARF_202.js", e);
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
        DisExcpt("SSSS_SRC_ARF_202.js", e);
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
        DisExcpt("SSSS_SRC_ARF_202.js", e);
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
        DisExcpt("SSSS_SRC_ARF_202.js", e);
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
        DisExcpt("SSSS_SRC_ARF_202.js", e);
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
        DisExcpt("SSSS_SRC_ARF_202.js", e);
    }
}

csLbiCompProto.Set_SwiftTags_202 = function() {
    try {
        //Tag 52
        if (document.MAINFORM.X202_ORDBK_NM_52A.value != "") {
            if (document.MAINFORM.X202_ORDBK_SW_52A.value == "") {
                document.MAINFORM.X202_TAG_52A.value = "D";
            } else {
                document.MAINFORM.X202_TAG_52A.value = "A"; // Utility Auto Fix Comments
            }
        }

        //Tag 53
        if (document.MAINFORM.X202_SENDCORRSW53A.value != "") {
            document.MAINFORM.X202_TAG_53A.value = "A";
        } else if (document.MAINFORM.X202_SENDCORRNM53A.value != "" && document.MAINFORM.X202SENDCORADD353A.value != "" && document.MAINFORM.X202_SENDCORRSW53A.value == "") {
            document.MAINFORM.X202_TAG_53A.value = "D";
        } else if (document.MAINFORM.X202_SENDCORRNM53A.value == "" && document.MAINFORM.X202SENDCORADD253A.value != "" && document.MAINFORM.X202_SENDCORRSW53A.value == "") {
            document.MAINFORM.X202_TAG_53A.value = "B";
        }

        //Tag 54
        if (document.MAINFORM.X202_RECCORRSW_54A.value != "") {
            document.MAINFORM.X202_TAG_54A.value = "A";
        } else if (document.MAINFORM.X202_RECCORRNM_54A.value != "" && document.MAINFORM.X202_RECCORADD354A.value != "" && document.MAINFORM.X202_RECCORRSW_54A.value == "") {
            document.MAINFORM.X202_TAG_54A.value = "D";
        } else if (document.MAINFORM.X202_RECCORRNM_54A.value == "" && document.MAINFORM.X202_RECCORADD254A.value != "" && document.MAINFORM.X202_RECCORRSW_54A.value == "") {
            document.MAINFORM.X202_TAG_54A.value = "B";
        }

        //Tag 56
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value != "") {
            document.MAINFORM.X202_TAG_56A.value = "A";
        } else if (document.MAINFORM.X202_MEDI_BKNM_56A.value != "" && document.MAINFORM.X202MEDIBKADD3_56A.value != "" && document.MAINFORM.X202_MEDI_BKSW_56A.value == "") {
            document.MAINFORM.X202_TAG_56A.value = "D";
        } else if (document.MAINFORM.X202_MEDI_BKNM_56A.value == "" && document.MAINFORM.X202_MEDIBKACNO56A.value != "" && document.MAINFORM.X202_MEDI_BKSW_56A.value == "") {
            document.MAINFORM.X202_TAG_56A.value = "C";
        }

        //Tag 57
        if (document.MAINFORM.X202_ACC_BKSW_57A.value != "") {
            document.MAINFORM.X202_TAG_57A.value = "A";
        } else if (document.MAINFORM.X202_ACC_BKSW_57A.value == "" && document.MAINFORM.X202_ACC_BKNM_57A.value != "" && document.MAINFORM.X202_ACCBKADD3_57A.value != "") {
            document.MAINFORM.X202_TAG_57A.value = "D";
        } else if (document.MAINFORM.X202_ACC_BKSW_57A.value == "" && document.MAINFORM.X202_ACC_BKNM_57A.value == "" && document.MAINFORM.X202_ACC_BKACNO57A.value != "" && document.MAINFORM.X202_ACCBKADD2_57A.value != "") {
            document.MAINFORM.X202_TAG_57A.value = "B";
        } else if (document.MAINFORM.X202_ACC_BKSW_57A.value == "" && document.MAINFORM.X202_ACC_BKNM_57A.value == "" && document.MAINFORM.X202_ACC_BKACNO57A.value != "" && document.MAINFORM.X202_ACCBKADD2_57A.value == "") {
            document.MAINFORM.X202_TAG_57A.value = "C";
        }

        //Tag 58
        if (document.MAINFORM.X202_BENE_BKNM_58A.value != "") {
            if (document.MAINFORM.X202_BENE_BKSW_58A.value == "") {
                document.MAINFORM.X202_TAG_58A.value = "D";
            } else {
                document.MAINFORM.X202_TAG_58A.value = "A"; // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_202.js", e);
    }
}

csLbiCompProto.X202_ACC_BKID_57A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
            SYS_GetCUBK_S('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
        } else {
            document.MAINFORM.X202_ACC_BKNM_57A.value = '';
            document.MAINFORM.X202_ACCBKADD1_57A.value = '';
            document.MAINFORM.X202_ACCBKADD2_57A.value = '';
            document.MAINFORM.X202_ACCBKADD3_57A.value = '';
            document.MAINFORM.X202_ACC_BKSW_57A.value = '';
            document.MAINFORM.X202_ACC_BKACNO57A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_202.js", e);
    }
}

csLbiCompProto.X202_ADV_BKID_B2_GetCUBK = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
            SYS_GetCUBK_S('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
        } else {
            document.MAINFORM.X202_ADV_BKNM_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD1_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD2_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD3_B2.value = '';
            document.MAINFORM.X202_ADV_BKSW_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_202.js", e);
    }
}

csLbiCompProto.X202_BENE_BKID_58A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
            SYS_GetCUBK_S('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = '';
            document.MAINFORM.X202BENEBKADD1_58A.value = '';
            document.MAINFORM.X202BENEBKADD2_58A.value = '';
            document.MAINFORM.X202BENEBKADD3_58A.value = '';
            document.MAINFORM.X202_BENE_BKSW_58A.value = '';
            document.MAINFORM.X202_BENEBKACNO58A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_202.js", e);
    }
}

csLbiCompProto.X202_MEDI_BKID_56A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK_S('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A');
        } else {
            document.MAINFORM.X202_MEDI_BKNM_56A.value = '';
            document.MAINFORM.X202MEDIBKADD1_56A.value = '';
            document.MAINFORM.X202MEDIBKADD2_56A.value = '';
            document.MAINFORM.X202MEDIBKADD3_56A.value = '';
            document.MAINFORM.X202_MEDI_BKSW_56A.value = '';
            document.MAINFORM.X202_MEDIBKACNO56A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_202.js", e);
    }
}

csLbiCompProto.X202_ORDBK_ID_52A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
            SYS_GetCUBK_S('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A');
        } else {
            document.MAINFORM.X202_ORDBK_NM_52A.value = '';
            document.MAINFORM.X202_ORDBKADD1_52A.value = '';
            document.MAINFORM.X202_ORDBKADD2_52A.value = '';
            document.MAINFORM.X202_ORDBKADD3_52A.value = '';
            document.MAINFORM.X202_ORDBK_SW_52A.value = '';
            document.MAINFORM.X202_ORDBKACNO_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_202.js", e);
    }
}

csLbiCompProto.X202_RECCORRID_54A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
            SYS_GetCUBK_S('X202_RECCORRID_54A', 'X202_RECCORRID_54A');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = '';
            document.MAINFORM.X202_RECCORADD154A.value = '';
            document.MAINFORM.X202_RECCORADD254A.value = '';
            document.MAINFORM.X202_RECCORADD354A.value = '';
            document.MAINFORM.X202_RECCORRSW_54A.value = '';
            document.MAINFORM.X202RECCORRACNO54A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_202.js", e);
    }
}

csLbiCompProto.X202_SENDCORRID53A_GetCUBK = function() {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
            SYS_GetCUBK_S('X202_SENDCORRID53A', 'X202_SENDCORRID53A');
        } else {
            document.MAINFORM.X202_SENDCORRNM53A.value = '';
            document.MAINFORM.X202SENDCORADD153A.value = '';
            document.MAINFORM.X202SENDCORADD253A.value = '';
            document.MAINFORM.X202SENDCORADD353A.value = '';
            document.MAINFORM.X202_SENDCORRSW53A.value = '';
            document.MAINFORM.X202SENDCORACNO53A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_ARF_202.js", e);
    }
}