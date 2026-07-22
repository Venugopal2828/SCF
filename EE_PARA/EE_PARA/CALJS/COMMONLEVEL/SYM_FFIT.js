function SYM_FFIT_CHK_NEG_VAL(value) {
    try {
        if (SYS_BeFloat(value) < 0) {
            alert("Negative value should not accept");
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_CHK_X202_TAG_52A() {
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
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_CHK_X202_TAG_53A() {
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
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_CHK_X202_TAG_54A() {
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
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_CHK_X202_TAG_56A() {
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
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_CHK_X202_TAG_57A() {
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
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_CHK_X202_TAG_58A() {
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
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_CHK_X202_TAG_B2() {
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
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_Cal_ACPT_BK_ID_UN_onchange() {
    try {
        if (document.MAINFORM.ACPT_BK_ID.value != '') {
            SYS_GetCUBK('ACPT_BK_ID_UN', 'ACPT_BK_ID');
        } else {
            document.MAINFORM.ACPT_BK_NM.value = '';
            document.MAINFORM.ACPT_BK_SW.value = '';
            document.MAINFORM.ACPT_BK_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_Cal_ACPT_BK_ID_onchange() {
    try {
        if (document.MAINFORM.ACPT_BK_ID.value != '') {
            SYS_GetCUBK('ACPT_BK_ID', 'ACPT_BK_ID');
        } else {
            document.MAINFORM.ACPT_BK_NM.value = '';
            document.MAINFORM.ACPT_BK_SW.value = '';
            document.MAINFORM.ACPT_BK_ADD.value = '';
            document.MAINFORM.ACPT_BK_CNTY.value = '';
            document.MAINFORM.ACPT_CNTY_TYPE.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_Cal_ACPT_BK_SW_UN_onchange() {
    try {
        if (document.MAINFORM.ACPT_BK_SW.value != '') {
            SYS_GetCUBK('ACPT_BK_SW_UN', 'ACPT_BK_SW');
        } else {
            document.MAINFORM.ACPT_BK_NM.value = '';
            document.MAINFORM.ACPT_BK_ID.value = '';
            document.MAINFORM.ACPT_BK_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_Cal_ACPT_BK_SW_onchange() {
    try {
        if (document.MAINFORM.ACPT_BK_SW.value != '') {
            SYS_GetCUBK('ACPT_BK_SW', 'ACPT_BK_SW');
        } else {
            document.MAINFORM.ACPT_BK_NM.value = '';
            document.MAINFORM.ACPT_BK_ID.value = '';
            document.MAINFORM.ACPT_BK_ADD.value = '';
            document.MAINFORM.ACPT_BK_CNTY.value = '';
            document.MAINFORM.ACPT_CNTY_TYPE.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_Cal_EXPT_ID_onchange() {
    try {
        if (document.MAINFORM.EXPT_ID.value != '') {
            SYS_GetCUBK('EXPT_ID', 'EXPT_ID');
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_Cal_GRANTOR_BK_ID_onchange() {
    try {
        if (document.MAINFORM.GRANTOR_BK_ID.value != '') {
            SYS_GetCUBK('GRANTOR_BK_ID', 'GRANTOR_BK_ID');
        } else {
            document.MAINFORM.GRANTOR_BK_SW.value = '';
            document.MAINFORM.GRANTOR_BK_NM.value = '';
            document.MAINFORM.GRANTOR_BK_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_Cal_GRANTOR_BK_SW_onchange() {
    try {
        if (document.MAINFORM.GRANTOR_BK_SW.value != '') {
            SYS_GetCUBK('GRANTOR_BK_SW', 'GRANTOR_BK_SW');
        } else {
            document.MAINFORM.GRANTOR_BK_ID.value = '';
            document.MAINFORM.GRANTOR_BK_NM.value = '';
            document.MAINFORM.GRANTOR_BK_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_Cal_HO_ACPT_BK_ID_onchange() {
    try {
        if (document.MAINFORM.HO_ACPT_BK_ID.value != '') {
            SYS_GetCUBK('HO_ACPT_BK_ID', 'HO_ACPT_BK_ID');
        } else {
            document.MAINFORM.HO_ACPT_BK_CNTY.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_Cal_SELL_BK_ID_onchange() {
    try {
        if (document.MAINFORM.SELL_BK_ID.value != '') {
            SYS_GetCUBK('SELL_BK_ID', 'SELL_BK_ID');
        } else {
            document.MAINFORM.SELL_BK_SW.value = '';
            document.MAINFORM.SELL_BK_NM.value = '';
            document.MAINFORM.SELL_BK_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_Cal_SELL_BK_SW_onchange() {
    try {
        if (document.MAINFORM.SELL_BK_SW.value != '') {
            SYS_GetCUBK('SELL_BK_SW', 'SELL_BK_SW');
        } else {
            document.MAINFORM.SELL_BK_ID.value = '';
            document.MAINFORM.SELL_BK_NM.value = '';
            document.MAINFORM.SELL_BK_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}

function SYM_FFIT_TRX_NO(TRXNOField) {
    try {
        var sTRX_NO = TRXNOField.substr(0, 4);
        if (sTRX_NO == 'EPLC') {
            sTRX_NO = 'EPLC';
            return sTRX_NO;
        } else if (sTRX_NO == 'EXCO') {
            sTRX_NO = 'EXCO';
            return sTRX_NO;
        }
    } catch (e) {
        DisExcpt("SYM_FFIT.js", e);
    }
}