"path:SCRN/DO/202.lbi";

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
        DisExcpt("SSSS_SRC_202.js", e);
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
        DisExcpt("SSSS_SRC_202.js", e);
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
        DisExcpt("SSSS_SRC_202.js", e);
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
        DisExcpt("SSSS_SRC_202.js", e);
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
        DisExcpt("SSSS_SRC_202.js", e);
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
        DisExcpt("SSSS_SRC_202.js", e);
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
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_52_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_52_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ORDBK_ADD_52A', 'X202_52_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_53_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_53_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_SENDCORRADD53A', 'X202_53_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_54_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_54_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_RECCORRADD_54A', 'X202_54_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_56_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_56_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_MEDI_BKADD_56A', 'X202_56_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_57_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_57_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ACC_BKADD_57A', 'X202_57_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_58_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_58_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_BENE_BKADD_58A', 'X202_58_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ACC_BKID_57A_onchange = function() {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
            SYS_GetCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A', 'SYF_CHK_X202_TAG_57A()');
        } else {
            document.MAINFORM.X202_ACC_BKNM_57A.value = '';
            document.MAINFORM.X202_ACCBKADD1_57A.value = '';
            document.MAINFORM.X202_ACCBKADD2_57A.value = '';
            document.MAINFORM.X202_ACCBKADD3_57A.value = '';
            document.MAINFORM.X202_ACC_BKSW_57A.value = '';
            document.MAINFORM.X202_ACC_BKACNO57A.value = '';
            document.MAINFORM.X202_TAG_57A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ACC_BKSW_57A_onchange = function() {
    try {
        SYF_CHK_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ADV_BKID_B2_onchange = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
            SYS_GetCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2', 'SYF_CHK_X202_TAG_B2()');
        } else {
            document.MAINFORM.X202_ADV_BKNM_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD1_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD2_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD3_B2.value = '';
            document.MAINFORM.X202_ADV_BKSW_B2.value = '';
            document.MAINFORM.X202_TAG_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ADV_BKSW_B2_onchange = function() {
    try {
        SYF_CHK_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_B2_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_B2_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ADV_BKADD_B2', 'X202_B2_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_BENE_BKID_58A_onchange = function() {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
            SYS_GetCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A', 'SYF_CHK_X202_TAG_58A()');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = '';
            document.MAINFORM.X202BENEBKADD1_58A.value = '';
            document.MAINFORM.X202BENEBKADD2_58A.value = '';
            document.MAINFORM.X202BENEBKADD3_58A.value = '';
            document.MAINFORM.X202_BENE_BKSW_58A.value = '';
            document.MAINFORM.X202_BENEBKACNO58A.value = '';
            document.MAINFORM.X202_TAG_58A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_BENE_BKSW_58A_onchange = function() {
    try {
        SYF_CHK_X202_TAG_58A();
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_MEDI_BKID_56A_onchange = function() {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A', 'SYF_CHK_X202_TAG_56A()');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = '';
            document.MAINFORM.X202_RECCORADD154A.value = '';
            document.MAINFORM.X202_RECCORADD254A.value = '';
            document.MAINFORM.X202_RECCORADD354A.value = '';
            document.MAINFORM.X202_RECCORRSW_54A.value = '';
            document.MAINFORM.X202RECCORRACNO54A.value = '';
            document.MAINFORM.X202_TAG_56A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_MEDI_BKSW_56A_onchange = function() {
    try {
        SYF_CHK_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ORDBK_ID_52A_onchange = function() {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
            SYS_GetCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'SYF_CHK_X202_TAG_52A()');
        } else {
            document.MAINFORM.X202_ORDBK_NM_52A.value = '';
            document.MAINFORM.X202_ORDBKADD1_52A.value = '';
            document.MAINFORM.X202_ORDBKADD2_52A.value = '';
            document.MAINFORM.X202_ORDBKADD3_52A.value = '';
            document.MAINFORM.X202_ORDBK_SW_52A.value = '';
            document.MAINFORM.X202_ORDBKACNO_52A.value = '';
            document.MAINFORM.X202_TAG_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_ORDBK_SW_52A_onchange = function() {
    try {
        SYF_CHK_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_RECCORRID_54A_onchange = function() {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
            SYS_GetCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A', 'SYF_CHK_X202_TAG_54A()');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = '';
            document.MAINFORM.X202_RECCORADD154A.value = '';
            document.MAINFORM.X202_RECCORADD254A.value = '';
            document.MAINFORM.X202_RECCORADD354A.value = '';
            document.MAINFORM.X202_RECCORRSW_54A.value = '';
            document.MAINFORM.X202RECCORRACNO54A.value = '';
            document.MAINFORM.X202_TAG_54A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_RECCORRSW_54A_onchange = function() {
    try {
        SYF_CHK_X202_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_SENDCORRID53A_onchange = function() {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
            SYS_GetCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A', 'SYF_CHK_X202_TAG_53A()');
        } else {
            document.MAINFORM.X202_SENDCORRNM53A.value = '';
            document.MAINFORM.X202SENDCORADD153A.value = '';
            document.MAINFORM.X202SENDCORADD253A.value = '';
            document.MAINFORM.X202SENDCORADD353A.value = '';
            document.MAINFORM.X202_SENDCORRSW53A.value = '';
            document.MAINFORM.X202SENDCORACNO53A.value = '';
            document.MAINFORM.X202_TAG_53A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_SENDCORRSW53A_onchange = function() {
    try {
        SYF_CHK_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_52_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_52_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ORDBK_ADD_52A', 'X202_ORDBK_ID_52A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_52_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'SYF_CHK_X202_TAG_52A()');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_53_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_53_ORDER_NO.value = '';
        SYS_InqCUBK('X202_SENDCORRADD53A', 'X202_SENDCORRID53A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_53_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A', 'SYM_FFIT_CHK_X202_TAG_53A()');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_54_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_54_ORDER_NO.value = '';
        SYS_InqCUBK('X202_RECCORRADD_54A', 'X202_RECCORRID_54A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_54_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A', 'SYF_CHK_X202_TAG_54A()');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_56_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_56_ORDER_NO.value = '';
        SYS_InqCUBK('X202_MEDI_BKADD_56A', 'X202_MEDI_BKID_56A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_56_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A', 'SYM_FFIT_CHK_X202_TAG_56A()');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_57_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_57_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ACC_BKADD_57A', 'X202_ACC_BKID_57A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_57_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A', 'SYM_FFIT_CHK_X202_TAG_57A()');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_58_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_58_ORDER_NO.value = '';
        SYS_InqCUBK('X202_BENE_BKADD_58A', 'X202_BENE_BKID_58A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_58_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A', 'SYM_FFIT_CHK_X202_TAG_58A()');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_B2_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_B2_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ADV_BKADD_B2', 'X202_ADV_BKID_B2', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}

csLbiCompProto.FLD_SSSS_X202_B2_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2', 'SYM_FFIT_CHK_X202_TAG_B2()');
    } catch (e) {
        DisExcpt("SSSS_SRC_202.js", e);
    }
}