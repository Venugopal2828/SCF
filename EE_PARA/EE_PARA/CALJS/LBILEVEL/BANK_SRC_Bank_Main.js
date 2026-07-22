"path:SCRN/Library/Main/Components/Bank_Main.lbi";

var csLbiCompProto = {};

csLbiCompProto.FLD_BANK_AC1_CCY_onchange = function(event) {
    try {
        if (document.MAINFORM.VOSTRO_AC_TYPE.value != "" && document.MAINFORM.AC1_NO.value != "") {
            SYM_BANK_VACC_VDO_SET();
        }
    } catch (e) {
        DisExcpt("BANK_SRC_Bank_Main.js*FLD_BANK_AC1_CCY_onchange", e);
    }
}

csLbiCompProto.FLD_BANK_AC1_NO_onchange = function(event) {
    try {
        var vacc1 = document.querySelector('#MX_ACC');

        if (document.MAINFORM.AC1_NO.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.VOSTRO_AC_TYPE, "M");
            if (document.MAINFORM.VOSTRO_AC_TYPE.value != "") {
                SYM_BANK_VACC_VDO_SET();
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.VOSTRO_AC_TYPE, "O");
            vacc1.value = {};
        }
    } catch (e) {
        DisExcpt("BANK_SRC_Bank_Main.js*FLD_BANK_AC1_NO_onchange", e);
    }
}

csLbiCompProto.FLD_BANK_NOSTRO_AC_CCY1_onchange = function(event) {
    try {
        if (document.MAINFORM.NOSTRO_AC_TYPE1.value != "" && document.MAINFORM.NOSTRO_AC_NO1.value != "") {
            SYM_BANK_ACC1_VDO_SET();
        }
    } catch (e) {
        DisExcpt("BANK_SRC_Bank_Main.js*FLD_BANK_NOSTRO_AC_CCY1_onchange", e);
    }
}

csLbiCompProto.FLD_BANK_NOSTRO_AC_CCY2_onchange = function(event) {
    try {
        if (document.MAINFORM.NOSTRO_AC_TYPE2.value != "" && document.MAINFORM.NOSTRO_AC_NO2.value != "") {
            SYM_BANK_ACC2_VDO_SET();
        }
    } catch (e) {
        DisExcpt("BANK_SRC_Bank_Main.js*FLD_BANK_NOSTRO_AC_CCY2_onchange", e);
    }
}

csLbiCompProto.FLD_BANK_NOSTRO_AC_NO1_onchange = function(event) {
    try {
        var vacc1 = document.querySelector('#MX_N_ACC1');

        if (document.MAINFORM.NOSTRO_AC_NO1.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.NOSTRO_AC_TYPE1, "M");
            if (document.MAINFORM.NOSTRO_AC_TYPE1.value != "") {
                SYM_BANK_ACC1_VDO_SET();
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NOSTRO_AC_TYPE1, "O");
            vacc1.value = {};
        }
    } catch (e) {
        DisExcpt("BANK_SRC_Bank_Main.js*FLD_BANK_NOSTRO_AC_NO1_onchange", e);
    }
}

csLbiCompProto.FLD_BANK_NOSTRO_AC_NO2_onchange = function(event) {
    try {
        var vacc1 = document.querySelector('#MX_N_ACC2');

        if (document.MAINFORM.NOSTRO_AC_NO2.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.NOSTRO_AC_TYPE2, "M");
            if (document.MAINFORM.NOSTRO_AC_TYPE2.value != "") {
                SYM_BANK_ACC2_VDO_SET();
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NOSTRO_AC_TYPE2, "O");
            vacc1.value = {};
        }
    } catch (e) {
        DisExcpt("BANK_SRC_Bank_Main.js*FLD_BANK_NOSTRO_AC_NO2_onchange", e);
    }
}

csLbiCompProto.FLD_BANK_NOSTRO_AC_TYPE1_onchange = function(event) {
    try {
        if (document.MAINFORM.NOSTRO_AC_TYPE1.value != "" && document.MAINFORM.NOSTRO_AC_NO1.value != "") {
            SYM_BANK_ACC1_VDO_SET();
        }
    } catch (e) {
        DisExcpt("BANK_SRC_Bank_Main.js*FLD_BANK_NOSTRO_AC_TYPE1_onchange", e);
    }
}

csLbiCompProto.FLD_BANK_NOSTRO_AC_TYPE2_onchange = function(event) {
    try {
        if (document.MAINFORM.NOSTRO_AC_TYPE2.value != "" && document.MAINFORM.NOSTRO_AC_NO2.value != "") {
            SYM_BANK_ACC2_VDO_SET();
        }
    } catch (e) {
        DisExcpt("BANK_SRC_Bank_Main.js*FLD_BANK_NOSTRO_AC_TYPE2_onchange", e);
    }
}

csLbiCompProto.FLD_BANK_VOSTRO_AC_TYPE_onchange = function(event) {
    try {
        if (document.MAINFORM.VOSTRO_AC_TYPE.value != "" && document.MAINFORM.AC1_NO.value != "") {
            SYM_BANK_VACC_VDO_SET();
        }
    } catch (e) {
        DisExcpt("BANK_SRC_Bank_Main.js*FLD_BANK_VOSTRO_AC_TYPE_onchange", e);
    }
}