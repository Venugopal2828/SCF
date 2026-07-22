"path:SCRN/Library/FFIT/RptSettlement_new.lbi";

var csLbiCompProto = {};

var cntyCodeCUBK = '';
var custIdCUBK = '';
var innerRptFlag_SETT = false;
var rpt = false;
var rptSettlement_new = false;

csLbiCompProto.CHECK_RPT_TRX_REMARK_sett_new = function() {
    try {
        var i; // Utility Auto Fix Comments
        var remarkobj; // Utility Auto Fix Comments
        for (i = 1; i <= 2; i++) { // Utility Auto Fix Comments
            remarkobj = EEHtml.getElementById("RPT_TRX_REMARK" + i + "_SETT");
            if (!SYT_CHECK_TRX_REMARK(remarkobj)) {
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.FincFieldEvent_SETT = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPTNO_SETT_onclick = function(fieldvalue) {
    try {
        document.MAINFORM.RPT_CNTY_CODE_SETT.value = fieldvalue;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_CNTY_CODE_SETT_onchange = function() {
    try {
        RptInitCnty_SETT(document.MAINFORM.RPT_CNTY_CODE_SETT.value);
        Rpt_ChangeFieldClass_SETT();
        Rpt_ChangeFieldClass_SETT1();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_CUST_TYPE_SETT_onchange = function() {
    try {
        if (document.MAINFORM.RPT_SETT_FLAG.value != "YES") {
            document.MAINFORM.RPT_CUSTIDCODE_SETT.value = "";
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE_SETT, 'P');
            return;
        }
        if (document.MAINFORM.RPT_CUST_TYPE_SETT.value == 'C') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE_SETT, 'P');
            document.MAINFORM.RPT_CUSTIDCODE_SETT.value = "";
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE_SETT, 'M');
        }
        RPT_CNTY_CODE_SETT_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_CUT_LENGTH_SETT = function() {
    try {
        var RPT_PAYEE_NM_SETT; // Utility Auto Fix Comments
        var RPT_PAYER_NM_SETT; // Utility Auto Fix Comments
        RPT_PAYER_NM_SETT = EEHtml.getElementById('RPT_PAYER_NM_SETT');
        RPT_PAYEE_NM_SETT = EEHtml.getElementById('RPT_PAYEE_NM_SETT');
        RPT_PAYER_NM_SETT.value = RPT_PAYER_NM_SETT.value.substr(0, 128);
        RPT_PAYEE_NM_SETT.value = RPT_PAYEE_NM_SETT.value.substr(0, 128);
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_DCLR_NO_SETT_onchange = function() {
    try {
        RPT_ISPRINTFLG_SETT();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_ISPRINTFLG_SETT = function() {
    try {
        if (document.MAINFORM.RPT_CNTY_CODE_SETT.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLG_SETT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLG_SETT, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_PAY_FLG_SETT_onchange = function(fieldName) {
    try {
        if (document.MAINFORM.RPT_DCLR_TYPE_SETT.value == '2') {
            if (document.MAINFORM.RPT_PAY_FLG_SETT.value != 'O' && document.MAINFORM.RPT_PAY_FLG_SETT.value != 'T' && document.MAINFORM.RPT_PAY_FLG_SETT.value != 'F') {
                document.MAINFORM.RPT_PAY_FLG_SETT.value = '';
                alert('invalid input');
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_SETT_FLAG_onchange = function() {
    try {
        if (document.MAINFORM.RPT_SETT_FLAG.value == 'YES') {
            RPT_CNTY_CODE_SETT_onchange();
        } else {
            RPT_CNTY_CODE_SETT_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_TRX_AMT1_SETT_onchange = function(fieldName) {
    try {
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT1_SETT.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY1_SETT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_TRX_AMT2_SETT_onchange = function(fieldName) {
    try {
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2_SETT.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY2_SETT.value = '';
        }

        if (document.MAINFORM.RPT_TRX_AMT2_SETT.value != '0') {
            document.MAINFORM.RPT_TRX_AMT1_SETT.value = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT_SETT.value) - SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2_SETT.value);
            document.MAINFORM.RPT_TRX_AMT1_SETT.value = SYT_CCY_AMT(document.MAINFORM.RPT_TRX_CCY1_SETT.value, document.MAINFORM.RPT_TRX_AMT1_SETT.value);
            document.MAINFORM.RPT_TRX_AMT2_SETT.value = SYT_CCY_AMT(document.MAINFORM.RPT_TRX_CCY2_SETT.value, document.MAINFORM.RPT_TRX_AMT2_SETT.value);
            document.MAINFORM.RPT_TRX_AMT1_SETT.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_TRX_AMT1_SETT.value); //20090731
            document.MAINFORM.RPT_TRX_AMT2_SETT.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_TRX_AMT2_SETT.value); //20090731

        } else {
            document.MAINFORM.RPT_TRX_AMT1_SETT.value = document.MAINFORM.RPT_TRX_AMT_SETT.value;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_TRX_CODE1_SETT_onchange = function(fieldName) {
    try {
        if (document.MAINFORM.RPT_TRX_CODE1_SETT.value == '') {
            document.MAINFORM.RPT_TRX_REMARK1_SETT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_TRX_CODE2_SETT_onchange = function(fieldName) {
    try {
        if (document.MAINFORM.RPT_TRX_CODE2_SETT.value == '') {
            document.MAINFORM.RPT_TRX_REMARK2_SETT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_TRX_REMARK1_SETT = function() {
    try {
        var rmk; // Utility Auto Fix Comments
        var rmk1; // Utility Auto Fix Comments
        rmk = document.MAINFORM.RPT_TRX_CODE1_V_SETT.options[document.MAINFORM.RPT_TRX_CODE1_V_SETT.selectedIndex].text;
        rmk1 = rmk.split(' ');
        if (rmk != '') {
            document.MAINFORM.RPT_TRX_REMARK1_SETT.value = rmk1[1];
        } else {
            document.MAINFORM.RPT_TRX_REMARK1_SETT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_TRX_REMARK2_SETT = function() {
    try {
        var Rmk; // Utility Auto Fix Comments
        var rmk2; // Utility Auto Fix Comments
        Rmk = document.MAINFORM.RPT_TRX_CODE2_V_SETT.options[document.MAINFORM.RPT_TRX_CODE2_V_SETT.selectedIndex].text;
        rmk2 = Rmk.split(' ');
        if (Rmk != '') {
            document.MAINFORM.RPT_TRX_REMARK2_SETT.value = rmk2[1];
        } else {
            document.MAINFORM.RPT_TRX_REMARK2_SETT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RPT_VERF_NO_SETT_onchange = function(selectValue) {
    try {
        var reg; // Utility Auto Fix Comments
        var verfno; // Utility Auto Fix Comments
        verfno = selectValue.split(';');
        reg = /\d{9}/;
        if (selectValue != '') {
            for (i = 0; i < verfno.length; i++) {
                if (verfno[i].length != 9 || !reg.test(verfno[i])) {
                    SYS_CheckError(document.MAINFORM.RPT_VERF_NO_SETT, "RPT_VERF_NO_SETT input error");
                    return false;
                }
            }
        }
        SYT_GET_VERF_NO(document.MAINFORM.RPT_VERF_COUNT_SETT, selectValue); // Utility Auto Fix Comments
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RptCnyCcyAmt_SETT = function(ccy, amt) {
    try {
        var CHG_INOUT_FLG_SETT; // Utility Auto Fix Comments
        var RPT_CCY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_CCY_AMT_SETT; // Utility Auto Fix Comments
        var RPT_CNY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_CNY_AMT_SETT; // Utility Auto Fix Comments
        var RPT_EXCH_RT_SETT; // Utility Auto Fix Comments
        var RPT_FINC_CCY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_FINC_CNY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_FINC_CNY_AMT_SETT; // Utility Auto Fix Comments
        var RPT_FINC_EXCH_RT_SETT; // Utility Auto Fix Comments
        var RPT_FINC_IN_CHG_SETT; // Utility Auto Fix Comments
        var RPT_IN_CHG_AMT_SETT; // Utility Auto Fix Comments
        var RPT_PMT_CCY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_PMT_CNY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_PMT_CNY_AMT_SETT; // Utility Auto Fix Comments
        var RPT_PMT_EXCH_RT_SETT; // Utility Auto Fix Comments
        var RPT_SETT_CCY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_SETT_CNY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_SETT_CNY_AMT_SETT; // Utility Auto Fix Comments
        var RPT_SETT_EXCH_RT_SETT; // Utility Auto Fix Comments
        var RPT_SETT_IN_CHG_SETT; // Utility Auto Fix Comments
        var TTL_CUST_CHG_AMT2_SETT; // Utility Auto Fix Comments
        var TTL_CUST_CHG_AMT_SETT; // Utility Auto Fix Comments
        var TTL_FOR_CHG_AMT_SETT; // Utility Auto Fix Comments
        document.MAINFORM.RPT_TRX_CCY_SETT.value = ccy;
        document.MAINFORM.RPT_TRX_AMT_SETT.value = SYS_BeFloat(amt);
        document.MAINFORM.RPT_TRX_AMT_SETT.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_TRX_AMT_SETT.value);
        document.MAINFORM.RPT_TRX_CCY1_SETT.value = ccy;
        document.MAINFORM.RPT_TRX_AMT1_SETT.value = SYS_BeFloat(amt);
        document.MAINFORM.RPT_TRX_AMT1_SETT.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_TRX_AMT1_SETT.value);

        RPT_CNY_AMT_SETT = 0;
        RPT_EXCH_RT_SETT = 0;
        RPT_CNY_AC_NO_SETT = '';
        RPT_CCY_AC_NO_SETT = '';
        RPT_CCY_AMT_SETT = 0;
        RPT_IN_CHG_AMT_SETT = 0;

        RPT_SETT_CNY_AC_NO_SETT = EEHtml.getElementById('RPT_SETT_CNY_AC_NO');
        RPT_SETT_CNY_AMT_SETT = EEHtml.getElementById('RPT_SETT_CNY_AMT');

        RPT_SETT_EXCH_RT_SETT = EEHtml.getElementById('RPT_SETT_EXCH_RT');
        RPT_SETT_CCY_AC_NO_SETT = EEHtml.getElementById('RPT_SETT_CCY_AC_NO');

        RPT_PMT_CNY_AC_NO_SETT = EEHtml.getElementById('RPT_PMT_CNY_AC_NO');
        RPT_PMT_CNY_AMT_SETT = EEHtml.getElementById('RPT_PMT_CNY_AMT');
        RPT_PMT_EXCH_RT_SETT = EEHtml.getElementById('RPT_PMT_EXCH_RT');
        RPT_PMT_CCY_AC_NO_SETT = EEHtml.getElementById('RPT_PMT_CCY_AC_NO');

        RPT_FINC_CNY_AC_NO_SETT = EEHtml.getElementById('RPT_FINC_CNY_AC_NO');
        RPT_FINC_CNY_AMT_SETT = EEHtml.getElementById('RPT_FINC_CNY_AMT');
        RPT_FINC_EXCH_RT_SETT = EEHtml.getElementById('RPT_FINC_EXCH_RT');
        RPT_FINC_CCY_AC_NO_SETT = EEHtml.getElementById('RPT_FINC_CCY_AC_NO');

        CHG_INOUT_FLG_SETT = EEHtml.getElementById('CHG_INOUT_FLG');
        TTL_CUST_CHG_AMT_SETT = EEHtml.getElementById('TTL_CUST_CHG_AMT');
        TTL_CUST_CHG_AMT2_SETT = EEHtml.getElementById('TTL_CUST_CHG_AMT2');
        TTL_FOR_CHG_AMT_SETT = EEHtml.getElementById('TTL_FOR_CHG_AMT');
        RPT_SETT_IN_CHG_SETT = EEHtml.getElementById('RPT_SETT_IN_CHG');
        RPT_FINC_IN_CHG_SETT = EEHtml.getElementById('RPT_FINC_IN_CHG');

        if (RPT_SETT_CNY_AMT_SETT != null) {
            RPT_CNY_AMT_SETT = RPT_CNY_AMT_SETT + SYS_BeFloat(RPT_SETT_CNY_AMT_SETT.value);
            RPT_EXCH_RT_SETT = RPT_SETT_EXCH_RT_SETT.value;
            RPT_CNY_AC_NO_SETT = RPT_SETT_CNY_AC_NO_SETT.value;
            if (RPT_SETT_CCY_AC_NO_SETT.value != '') {
                RPT_CCY_AC_NO_SETT = RPT_SETT_CCY_AC_NO_SETT.value;
            }
        }

        if (RPT_FINC_CNY_AMT_SETT != null) {
            RPT_CNY_AMT_SETT = RPT_CNY_AMT_SETT + SYS_BeFloat(RPT_FINC_CNY_AMT_SETT.value);
            if (SYS_BeFloat(RPT_FINC_EXCH_RT_SETT.value) != 0) {
                RPT_EXCH_RT_SETT = RPT_FINC_EXCH_RT_SETT.value;
            }
            if (RPT_FINC_CNY_AC_NO_SETT.value != '') {
                RPT_CNY_AC_NO_SETT = RPT_FINC_CNY_AC_NO_SETT.value;
            }
            if (RPT_FINC_CCY_AC_NO_SETT.value != '') {
                RPT_CCY_AC_NO_SETT = RPT_FINC_CCY_AC_NO_SETT.value;
            }
        }


        if (CHG_INOUT_FLG_SETT != null) {
            if (CHG_INOUT_FLG_SETT.value == 'IN') {
                RPT_IN_CHG_AMT_SETT = SYS_BeFloat(TTL_CUST_CHG_AMT_SETT.value) + SYS_BeFloat(TTL_CUST_CHG_AMT2_SETT.value) + SYS_BeFloat(TTL_FOR_CHG_AMT_SETT.value);
            } else {
                RPT_IN_CHG_AMT_SETT = SYS_BeFloat(TTL_FOR_CHG_AMT_SETT.value);
            }
        }
        if (RPT_SETT_IN_CHG_SETT != null) {
            RPT_IN_CHG_AMT_SETT = RPT_IN_CHG_AMT_SETT + SYS_BeFloat(RPT_SETT_IN_CHG_SETT.value);
        }
        if (RPT_FINC_IN_CHG_SETT != null) {
            RPT_IN_CHG_AMT_SETT = RPT_IN_CHG_AMT_SETT + SYS_BeFloat(RPT_FINC_IN_CHG_SETT.value);
        }
        RPT_IN_CHG_AMT_SETT = SYT_CCY_AMT('JPY', RPT_IN_CHG_AMT_SETT);
        RPT_CNY_AMT_SETT = Math.min(RPT_CNY_AMT_SETT, SYS_BeFloat(amt));
        RPT_CNY_AMT_SETT = SYT_CCY_AMT('JPY', RPT_CNY_AMT_SETT);
        RPT_CCY_AMT_SETT = Math.max(SYS_BeFloat(amt) - SYS_BeFloat(RPT_IN_CHG_AMT_SETT) - SYS_BeFloat(RPT_CNY_AMT_SETT), 0);


        if (SYS_BeFloat(RPT_CCY_AMT_SETT) == 0) {
            RPT_CNY_AMT_SETT = Math.max(SYS_BeFloat(amt) - SYS_BeFloat(RPT_IN_CHG_AMT_SETT), 0);
        }

        document.MAINFORM.RPT_CNY_AMT_SETT.value = SYT_CCY_AMT('JPY', RPT_CNY_AMT_SETT);
        document.MAINFORM.RPT_EXCH_RT_SETT.value = RPT_EXCH_RT_SETT;

        if (SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT_SETT.value) > 0) {
            document.MAINFORM.RPT_CNY_AC_NO_SETT.value = RPT_CNY_AC_NO_SETT;
        } else {
            document.MAINFORM.RPT_CNY_AC_NO_SETT.value = '';
        }

        document.MAINFORM.RPT_CCY_AMT_SETT.value = SYT_CCY_AMT('JPY', RPT_CCY_AMT_SETT);
        if (SYS_BeFloat(RPT_CCY_AMT_SETT) > 0) {
            document.MAINFORM.RPT_CCY_AC_NO_SETT.value = RPT_CCY_AC_NO_SETT;
        } else {
            document.MAINFORM.RPT_CCY_AC_NO_SETT.value = '';
        }

        document.MAINFORM.RPT_IN_CHG_AMT_SETT.value = SYT_CCY_AMT('JPY', RPT_IN_CHG_AMT_SETT);

        if (SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT_SETT.value) == 0) {
            document.MAINFORM.RPT_IN_CHG_CCY_SETT.value = '';
        } else {
            document.MAINFORM.RPT_IN_CHG_CCY_SETT.value = ccy;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_OUT_CHG_AMT_SETT.value) == 0) {
            document.MAINFORM.RPT_OUT_CHG_CCY_SETT.value = '';
        } else {
            document.MAINFORM.RPT_OUT_CHG_CCY_SETT.value = ccy;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT1_SETT.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY1_SETT.value = '';
        } else {
            document.MAINFORM.RPT_TRX_CCY1_SETT.value = ccy;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2_SETT.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY2_SETT.value = '';
        } else {
            document.MAINFORM.RPT_TRX_CCY2_SETT.value = ccy;
        }
        Rpt_ChangeFieldClass_SETT();
        RPT_TRX_AMT2_SETT_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RptConfirmCheck_SETT = function() {
    try {
        var nAmt_CR; // Utility Auto Fix Comments
        var nCCY_AMT; // Utility Auto Fix Comments
        var nHUIAMT; // Utility Auto Fix Comments
        var nIBP_TC2AMT; // Utility Auto Fix Comments
        var nOTHER_AMT; // Utility Auto Fix Comments
        var nRMB_AMT; // Utility Auto Fix Comments
        var nRPT_IN_CHG_AMT; // Utility Auto Fix Comments
        var nTTLAMT; // Utility Auto Fix Comments
        var nttlamt; // Utility Auto Fix Comments
        var sIBP_TX2REM; // Utility Auto Fix Comments
        var sIBP_TXCODE2; // Utility Auto Fix Comments
        var strErrMsg3; // Utility Auto Fix Comments
        document.MAINFORM.RPT_PC_UNIT_CODE_SETT.value = SYS_PC_UNIT;
        RPT_CUT_LENGTH_SETT();
        if (document.MAINFORM.RPT_SETT_FLAG.value == 'NO') {
            if (document.MAINFORM.RPT_ISREF_SETT.value == 'YES' || document.MAINFORM.RPT_IS_REF_SETT.value == 'YES') {
                alert('input error');
                return false;

            } else {
                return true;
            }
        }
        document.MAINFORM.RPT_DT_SETT.value = SYS_BUSI_DATE;
        document.MAINFORM.RPT_TRX_DT_SETT.value = SYS_BUSI_DATE;
        document.MAINFORM.RPT_DCLR_NO_SETT1.value = document.MAINFORM.RPT_DCLR_NO_SETT.value.substr(0, 6);
        document.MAINFORM.RPT_DCLR_NO_SETT2.value = document.MAINFORM.RPT_DCLR_NO_SETT.value.substr(6, 4);
        document.MAINFORM.RPT_DCLR_NO_SETT3.value = document.MAINFORM.RPT_DCLR_NO_SETT.value.substr(10, 2);
        document.MAINFORM.RPT_DCLR_NO_SETT4.value = document.MAINFORM.RPT_DCLR_NO_SETT.value.substr(12, 6);
        document.MAINFORM.RPT_DCLR_NO_SETT5.value = document.MAINFORM.RPT_DCLR_NO_SETT.value.substr(18, 4);
        document.MAINFORM.RPT_CUST_ORGAN_ID_SETT1.value = document.MAINFORM.RPT_CUST_ORGAN_ID_SETT.value.substr(0, 8);
        document.MAINFORM.RPT_CUST_ORGAN_ID_SETT2.value = document.MAINFORM.RPT_CUST_ORGAN_ID_SETT.value.substr(8, 1);


        if (document.MAINFORM.RPT_SETT_FLAG.value != 'YES') {
            return true;
        }
        if (!CHECK_RPT_TRX_REMARK_sett_new()) {
            return false;
        }
        if (!check_RPT_DCLR_NO_SETTNEW()) {
            return false;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT_SETT.value) == 0) {
            document.MAINFORM.RPT_IN_CHG_CCY_SETT.value = '';
        } else {
            document.MAINFORM.RPT_IN_CHG_CCY_SETT.value = document.MAINFORM.RPT_TRX_CCY_SETT.value;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_OUT_CHG_AMT_SETT.value) == 0) {
            document.MAINFORM.RPT_OUT_CHG_CCY_SETT.value = '';
        } else {
            document.MAINFORM.RPT_OUT_CHG_CCY_SETT.value = document.MAINFORM.RPT_TRX_CCY_SETT.value;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT1_SETT.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY1_SETT.value = '';
        } else {
            document.MAINFORM.RPT_TRX_CCY1_SETT.value = document.MAINFORM.RPT_TRX_CCY_SETT.value;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2_SETT.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY2_SETT.value = '';
        } else {
            document.MAINFORM.RPT_TRX_CCY2_SETT.value = document.MAINFORM.RPT_TRX_CCY_SETT.value;
        }

        if (document.MAINFORM.RPT_DCLR_NO_SETT.value != '') {
            if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT_SETT.value) < 0 || SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT_SETT.value) == 0) {
                SYS_CheckError(document.MAINFORM.RPT_TRX_AMT_SETT, 'RPT_TRX_AMT_SETT input error');
                return false;
            }
            if (SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT_SETT.value) < 0) {
                SYS_CheckError(document.MAINFORM.RPT_IN_CHG_AMT_SETT, 'RPT_IN_CHG_AMT_SETT input error');
                return false;
            }
            if (SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT_SETT.value) > 0 && document.MAINFORM.RPT_CNY_AC_NO_SETT.value == '') {
                SYS_CheckError(document.MAINFORM.RPT_CNY_AC_NO_SETT, 'RPT_CNY_AC_NO_SETT input error');
                return false;
            }
            if (SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT_SETT.value) > 0 && SYS_BeFloat(document.MAINFORM.RPT_EXCH_RT_SETT.value) <= 0) {
                SYS_CheckError(document.MAINFORM.RPT_EXCH_RT_SETT, 'RPT_EXCH_RT_SETT input error');
                return false;
            }

            if (SYS_BeFloat(document.MAINFORM.RPT_CCY_AMT_SETT.value) > 0 && document.MAINFORM.RPT_CCY_AC_NO_SETT.value == '') {
                SYS_CheckError(document.MAINFORM.RPT_CCY_AMT_SETT, 'RPT_CCY_AMT_SETT input error');
                return false;
            }
            if (SYS_BeFloat(document.MAINFORM.RPT_OTHER_AMT_SETT.value) > 0 && document.MAINFORM.RPT_OTHER_AC_NO_SETT.value == '') {
                SYS_CheckError(document.MAINFORM.RPT_OTHER_AMT_SETT, 'RPT_OTHER_AMT_SETT input error');
                return false;
            }
            if ((SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT_SETT.value) < 0 || SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT_SETT.value) == 0) && document.MAINFORM.RPT_CNY_AC_NO_SETT.value != '') {
                SYS_CheckError(document.MAINFORM.RPT_CNY_AMT_SETT, 'RPT_CNY_AMT_SETT input error');
                return false;
            }
            if ((SYS_BeFloat(document.MAINFORM.RPT_CCY_AMT_SETT.value) < 0 || SYS_BeFloat(document.MAINFORM.RPT_CCY_AMT_SETT.value) == 0) && document.MAINFORM.RPT_CCY_AC_NO_SETT.value != '') {
                SYS_CheckError(document.MAINFORM.RPT_CCY_AMT_SETT, 'RPT_CCY_AMT_SETT input error');
                return false;
            }
            if ((SYS_BeFloat(document.MAINFORM.RPT_OTHER_AMT_SETT.value) < 0 || SYS_BeFloat(document.MAINFORM.RPT_OTHER_AMT_SETT.value) == 0) && document.MAINFORM.RPT_OTHER_AC_NO_SETT.value != '') {
                SYS_CheckError(document.MAINFORM.RPT_OTHER_AMT_SETT, 'RPT_OTHER_AMT_SET input error');
                return false;
            }
            nRMB_AMT = SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT_SETT.value);
            nCCY_AMT = SYS_BeFloat(document.MAINFORM.RPT_CCY_AMT_SETT.value);
            nOTHER_AMT = SYS_BeFloat(document.MAINFORM.RPT_OTHER_AMT_SETT.value);
            nRPT_IN_CHG_AMT = SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT_SETT.value);
            nTTLAMT = nRMB_AMT + nCCY_AMT + nOTHER_AMT + nRPT_IN_CHG_AMT;
            nHUIAMT = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT_SETT.value);
            nAmt_CR = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT_SETT.value) - SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT_SETT.value) - SYS_BeFloat(document.MAINFORM.RPT_OUT_CHG_AMT_SETT.value);
            if (nTTLAMT != SYS_BeFloat(nHUIAMT)) {

                SYS_CheckError(document.MAINFORM.RPT_CNY_AMT_SETT, 'RPT_CNY_AMT_SETT input error');
                return false;
            }
            if (nTTLAMT == 0 && nAmt_CR > 0) {

                SYS_CheckError(document.MAINFORM.RPT_CCY_AMT_SETT, 'RPT_CCY_AMT_SETT input error');
                return false;
            }

        }


        nttlamt = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT1_SETT.value) + SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2_SETT.value);
        nHUIAMT = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT_SETT.value);
        if (document.MAINFORM.RPT_TRX_CODE2_SETT.value != '' && document.MAINFORM.RPT_TRX_CODE1_SETT.value == document.MAINFORM.RPT_TRX_CODE2_SETT.value) {
            SYS_CheckError(document.MAINFORM.RPT_TRX_CODE2_SETT, 'RPT_TRX_CODE2_SETT input error');
            return false;
        } else if (nttlamt != SYS_BeFloat(nHUIAMT)) {

            SYS_CheckError(document.MAINFORM.RPT_TRX_AMT1_SETT, 'RPT_TRX_AMT1_SETT input error');
            return false;
        } else if (nttlamt < SYS_BeFloat(document.MAINFORM.RPT_VERF_AMT_SETT.value)) {
            SYS_CheckError(document.MAINFORM.RPT_VERF_AMT_SETT, 'RPT_VERF_AMT_SETT input error');
            return false;
        }

        if (!RPT_VERF_NO_SETT_onchange(document.MAINFORM.RPT_VERF_NO_SETT.value)) {
            return false;
        }

        sIBP_TXCODE2 = document.MAINFORM.RPT_TRX_CODE2_SETT.value;
        nIBP_TC2AMT = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2_SETT.value);
        sIBP_TX2REM = document.MAINFORM.RPT_TRX_REMARK2_SETT.value;
        strErrMsg3 = 'RPT_TRX_CODE2_SETT input error';
        if ((sIBP_TXCODE2 == '' && nIBP_TC2AMT == 0 && sIBP_TX2REM == '') || (sIBP_TXCODE2 != '' && nIBP_TC2AMT > 0 && sIBP_TX2REM != '')) {
            return true;
        } else {
            SYS_CheckError(document.MAINFORM.RPT_TRX_CODE2_SETT, strErrMsg3);
            return false;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RptDiscCnyCcyAmt_SETT = function(ccy, amt) {
    try {
        var RPT_CCY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_CCY_AMT_SETT; // Utility Auto Fix Comments
        var RPT_CNY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_CNY_AMT_SETT; // Utility Auto Fix Comments
        var RPT_EXCH_RT_SETT; // Utility Auto Fix Comments
        var RPT_IN_CHG_AMT_SETT; // Utility Auto Fix Comments
        var RPT_SETT_CCY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_SETT_CNY_AC_NO_SETT; // Utility Auto Fix Comments
        var RPT_SETT_CNY_AMT_SETT; // Utility Auto Fix Comments
        var RPT_SETT_EXCH_RT_SETT; // Utility Auto Fix Comments
        document.MAINFORM.RPT_TRX_CCY_SETT.value = ccy;
        document.MAINFORM.RPT_TRX_AMT_SETT.value = SYS_BeFloat(amt);
        document.MAINFORM.RPT_TRX_AMT_SETT.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_TRX_AMT_SETT.value);
        document.MAINFORM.RPT_TRX_CCY1_SETT.value = ccy;
        document.MAINFORM.RPT_TRX_AMT1_SETT.value = SYS_BeFloat(amt);
        document.MAINFORM.RPT_TRX_AMT1_SETT.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_TRX_AMT1_SETT.value);
        RPT_CNY_AMT_SETT = 0;
        RPT_EXCH_RT_SETT = 0;
        RPT_CNY_AC_NO_SETT = '';
        RPT_CCY_AC_NO_SETT = '';
        RPT_CCY_AMT_SETT = 0;
        RPT_IN_CHG_AMT_SETT = 0;

        RPT_SETT_CNY_AC_NO_SETT = EEHtml.getElementById('RPT_SETT_CNY_AC_NO');
        RPT_SETT_CNY_AMT_SETT = EEHtml.getElementById('RPT_SETT_CNY_AMT');

        RPT_SETT_EXCH_RT_SETT = EEHtml.getElementById('RPT_SETT_EXCH_RT');
        RPT_SETT_CCY_AC_NO_SETT = EEHtml.getElementById('RPT_SETT_CCY_AC_NO');

        if (RPT_SETT_CNY_AMT_SETT != null) {

            RPT_CNY_AMT_SETT = RPT_CNY_AMT_SETT + SYS_BeFloat(RPT_SETT_CNY_AMT_SETT.value);
            RPT_EXCH_RT_SETT = RPT_SETT_EXCH_RT_SETT.value;
            RPT_CNY_AC_NO_SETT = RPT_SETT_CNY_AC_NO_SETT.value;
        }

        RPT_CCY_AMT_SETT = SYS_BeFloat(amt) - SYS_BeFloat(RPT_CNY_AMT_SETT);

        if (SYS_BeFloat(RPT_CCY_AMT_SETT) > 0) {
            if (RPT_SETT_CCY_AC_NO_SETT.value != '') {
                RPT_CCY_AC_NO_SETT = RPT_SETT_CCY_AC_NO_SETT.value;
            } else {
                RPT_CCY_AC_NO_SETT = '7216';
            }
        } else {
            RPT_CCY_AC_NO_SETT = '';
        }

        document.MAINFORM.RPT_CNY_AMT_SETT.value = SYT_CCY_AMT('JPY', RPT_CNY_AMT_SETT);
        document.MAINFORM.RPT_EXCH_RT_SETT.value = RPT_EXCH_RT_SETT;
        document.MAINFORM.RPT_CNY_AC_NO_SETT.value = RPT_CNY_AC_NO_SETT;
        document.MAINFORM.RPT_CCY_AC_NO_SETT.value = RPT_CCY_AC_NO_SETT;
        document.MAINFORM.RPT_CCY_AMT_SETT.value = SYT_CCY_AMT('JPY', RPT_CCY_AMT_SETT);
        document.MAINFORM.RPT_IN_CHG_AMT_SETT.value = SYT_CCY_AMT('JPY', RPT_IN_CHG_AMT_SETT);

        if (SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT_SETT.value) == 0) {
            document.MAINFORM.RPT_IN_CHG_CCY_SETT.value = '';
        } else {
            document.MAINFORM.RPT_IN_CHG_CCY_SETT.value = ccy;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_OUT_CHG_AMT_SETT.value) == 0) {
            document.MAINFORM.RPT_OUT_CHG_CCY_SETT.value = '';
        } else {
            document.MAINFORM.RPT_OUT_CHG_CCY_SETT.value = ccy;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT1_SETT.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY1_SETT.value = '';
        } else {
            document.MAINFORM.RPT_TRX_CCY1_SETT.value = ccy;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2_SETT.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY2_SETT.value = '';
        } else {
            document.MAINFORM.RPT_TRX_CCY2_SETT.value = ccy;
        }
        Rpt_ChangeFieldClass_SETT();
        RPT_TRX_AMT2_SETT_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RptInitCnty_SETT = function(cntyCode) {
    try {
        var rptNoDate; // Utility Auto Fix Comments
        var trxDate; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "INQU") {
            return;
        }

        rptNoDate = EEHtml.getElementById("RPT_DCLR_NO_SETT").value.substr(12, 6);
        trxDate = EEHtml.getElementById("TRX_DT").value;
        trxDate = trxDate.replace('-', '');
        trxDate = trxDate.replace('-', '');
        if (SYS_FUNCTION_TYPE == "EC" && exchRateOnLoadFlag) {
            if (rptNoDate != trxDate.substr(2, 6) && rptSettlement_new == false) {
                rptSettlement_new = true;
                innerRptFlag_SETT = true;
            } else {
                return;
            }
        }
        if (!innerRptFlag_SETT) {
            return;
        }
        cntyCodeCUBK = cntyCode;
        SYS_GetTableDataByRule_S('SSSS_SRC_RptSettlement_new_RptInitCnty_SETT_0', '1');

        if (document.MAINFORM.RPT_SETT_FLAG.value == 'YES') {
            if (document.MAINFORM.RPT_DCLR_TYPE_SETT.value == '2') {
                if (document.MAINFORM.RPT_CUST_TYPE_SETT.value == 'C') {
                    SYS_GetRefNo('IBPD01', 'RptRef_SETT', '', 'IBPD01');
                } else if (document.MAINFORM.RPT_CUST_TYPE_SETT.value != '') {
                    SYS_GetRefNo('IBPD02', 'RptRef_SETT', '', 'IBPD02');
                }
            } else if (document.MAINFORM.RPT_DCLR_TYPE_SETT.value == '1') {
                SYS_GetRefNo('IBPD03', 'RptRef_SETT', '', 'IBPD03');
            } else {
                document.MAINFORM.RPT_DCLR_NO_SETT.value = '';
            }
        } else {
            document.MAINFORM.RPT_DCLR_NO_SETT.value = '';
        }
        Rpt_ChangeFieldClass_SETT();
        innerRptFlag_SETT = false;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RptInitCust_SETT = function(custId) {
    try {
        /*
custIdCUBK = custId;
document.MAINFORM.RPT_CUST_ID_SETT.value=custId;
SYS_Get22TableData_Boc('CUST_MASTER',"CUST_ID='"+custIdCUBK+"'",'CUST_ORGAN_ID;DCLR_FLG;CUST_NM_C','RPT_CUST_ORGAN_ID_SETT;RPT_DCLR_FLG_SETT;RPT_PAYEE_NM_SETT');
*/
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.RptRef_SETT = function(ref) {
    try {
        document.MAINFORM.RPT_DCLR_NO_SETT.value = ref;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.Rpt_ChangeFieldClass_SETT = function() {
    try {
        var rptNoDate; // Utility Auto Fix Comments
        var trxDate; // Utility Auto Fix Comments
        if (document.MAINFORM.RPT_CUST_TYPE_SETT.value == 'C') {
            document.MAINFORM.RPT_CUSTIDCODE_SETT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE_SETT, 'P');
        } else if (document.MAINFORM.RPT_CUST_TYPE_SETT.value == 'D' || document.MAINFORM.RPT_CUST_TYPE_SETT.value == 'F') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE_SETT, 'O');
        }
        if (document.MAINFORM.RPT_SETT_FLAG.value != "YES") {
            document.MAINFORM.RPT_CUSTIDCODE_SETT.value = "";
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE_SETT, 'P');
        } else {
            if (document.MAINFORM.RPT_CUST_TYPE_SETT.value == 'C') {
                SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE_SETT, 'P');
                document.MAINFORM.RPT_CUSTIDCODE_SETT.value = "";

                SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_ORGAN_ID_SETT, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE_SETT, 'M');
            }
        }
        rptNoDate = EEHtml.getElementById("RPT_DCLR_NO_SETT").value.substr(12, 6);
        trxDate = EEHtml.getElementById("TRX_DT").value;
        trxDate = trxDate.replace('-', '');
        trxDate = trxDate.replace('-', '');
        if (SYS_FUNCTION_TYPE == "EC" && rptSettlement_new == false) {
            RptInitCnty_SETT(document.MAINFORM.RPT_CNTY_CODE_SETT.value);
            rptSettlement_new = true;
        }
        Rpt_ChangeFieldClass_SETT1();
        Rpt_ChangeFieldClass_SETT_RPT_ISREF_SETT();
        Rpt_ChangeFieldClass_SETT_RPT_IS_REF_SETT1();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.Rpt_ChangeFieldClass_SETT1 = function() {
    try {
        if (document.MAINFORM.RPT_SETT_FLAG.value == 'YES') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_TYPE_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_FLAG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_NO_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_TYPE_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYEE_NM_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYER_NM_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_ORGAN_ID_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AMT_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_EXCH_RT_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AMT_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AMT_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_CCY_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_AMT_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLG_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_DT_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_MTHD_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REF_NO_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AC_NO_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AC_NO_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AC_NO_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OUT_CHG_CCY_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OUT_CHG_AMT_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISREF_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF_SETT, 'M');
        }
        if (document.MAINFORM.RPT_SETT_FLAG.value == 'NO') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_TYPE_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_FLAG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_NO_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_TYPE_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYEE_NM_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYER_NM_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_ORGAN_ID_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AMT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_EXCH_RT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AMT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AMT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_CCY_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_AMT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLG_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_DT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_MTHD_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REF_NO_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AC_NO_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AC_NO_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AC_NO_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OUT_CHG_CCY_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OUT_CHG_AMT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISREF_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE1_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE_NM_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY1_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT1_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK1_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE2_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY2_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT2_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK2_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_PHONE_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_FRGN_LOAN_NO_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISBAL_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_BAL_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_COUNT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_AMT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CHKPRTD_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISREF_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF_SETT, 'P');
            document.MAINFORM.RPT_ISREF_SETT.value = 'N';
            document.MAINFORM.RPT_IS_REF_SETT.value = 'NO';
            document.MAINFORM.RPT_DCLR_NO_SETT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.Rpt_ChangeFieldClass_SETT_RPT_ISREF_SETT = function() {
    try {
        if (document.MAINFORM.RPT_ISREF_SETT.value == 'Y') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE1_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE_NM_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY1_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT1_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK1_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE2_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY2_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT2_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK2_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_PHONE_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DT_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_FRGN_LOAN_NO_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_REFFLG, 'M');
        }
        if (document.MAINFORM.RPT_ISREF_SETT.value == 'N') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE1_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE_NM_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY1_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT1_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK1_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE2_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY2_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT2_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK2_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_PHONE_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_FRGN_LOAN_NO_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_REFFLG, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.Rpt_ChangeFieldClass_SETT_RPT_IS_REF_SETT = function() {
    try {
        if (document.MAINFORM.RPT_IS_REF_SETT.value == 'YES') {

            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISBAL_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_BAL_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_COUNT_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_AMT_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CHKPRTD_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINT_SETT, 'O');
            if (SYS_MODULE_NAME == 'FFIT') {
                SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO_SETT, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO_SETT, 'O');
            }
            if (SYS_FUNCTION_TYPE != 'IQ') {
                if (document.MAINFORM.RPT_DCLR_TYPE_SETT.value == '1') {
                    alert("RPT_DCLR_TYPE_SETT value is 1");
                }
            }
        }
        if (document.MAINFORM.RPT_IS_REF_SETT.value == 'NO') {

            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISBAL_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_BAL_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_COUNT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_AMT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CHKPRTD_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINT_SETT, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.Rpt_ChangeFieldClass_SETT_RPT_IS_REF_SETT1 = function() {
    try {
        if (document.MAINFORM.RPT_IS_REF_SETT.value == 'YES') {

            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISBAL_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_BAL_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_COUNT_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_AMT_SETT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CHKPRTD_SETT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINT_SETT, 'O');
            if (SYS_MODULE_NAME == 'FFIT') {
                SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO_SETT, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO_SETT, 'O');
            }

        }
        if (document.MAINFORM.RPT_IS_REF_SETT.value == 'NO') {

            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISBAL_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_BAL_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_COUNT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_AMT_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CHKPRTD_SETT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINT_SETT, 'P');

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}

csLbiCompProto.check_RPT_DCLR_NO_SETTNEW = function() {
    try {
        var a; // Utility Auto Fix Comments
        var aa; // Utility Auto Fix Comments
        var b; // Utility Auto Fix Comments
        var bb; // Utility Auto Fix Comments
        var c; // Utility Auto Fix Comments
        var cc; // Utility Auto Fix Comments
        var dd; // Utility Auto Fix Comments
        if (document.MAINFORM.RPT_DCLR_NO_SETT.value != '') {
            aa = document.MAINFORM.TRX_DT.value;
            a = aa.substr(2, 2); // Utility Auto Fix Comments
            b = aa.substr(5, 2); // Utility Auto Fix Comments
            c = aa.substr(8, 2); // Utility Auto Fix Comments
            bb = a + b + c;
            cc = document.MAINFORM.RPT_DCLR_NO_SETT.value;
            dd = cc.substr(12, 6);
            if (bb != dd) {
                alert('false'); // Utility Auto Fix Comments
                return false;
            } else {
                return true;
            }
            //return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement_new.js", e);
    }
}