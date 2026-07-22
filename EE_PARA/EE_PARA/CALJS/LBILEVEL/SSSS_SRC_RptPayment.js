"path:SCRN/Library/FFIT/RptPayment.lbi";

var csLbiCompProto = {};

var innerPayFlag = false;
var rpt = false;
var rptPayment = false;

csLbiCompProto.CHECK_RPT_TRX_REMARK = function() {
    try {
        var i; // Utility Auto Fix Comments
        var remarkobj; // Utility Auto Fix Comments
        for (i = 1; i <= 2; i++) { // Utility Auto Fix Comments
            remarkobj = EEHtml.getElementById("RPT_TRX_REMARK" + i);
            if (!SYT_CHECK_TRX_REMARK(remarkobj)) {
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.FLD_IBPD_RPT_CUST_TYPE_onchange = function() {
    try {
        if (document.MAINFORM.RPT_PMT_FLAG.value != "YES") {
            document.MAINFORM.RPT_CUSTIDCODE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
            return;
        }
        if (document.MAINFORM.RPT_CUST_TYPE.value == 'C') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
            document.MAINFORM.RPT_CUSTIDCODE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_ORGAN_ID, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'M');
        }
        RPT_CNTY_CODE_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.FLD_IBPD_RPT_SETT_MTHD_onchange = function() {
    try {
        var sltVal; // Utility Auto Fix Comments
        if (document.MAINFORM.RPT_PMT_FLAG.value != "YES") {
            return;
        }
        sltVal = document.MAINFORM.RPT_SETT_MTHD.value;
        if (sltVal == 'L' || sltVal == 'G') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_LC_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISSUE_DT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RPT_LC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISSUE_DT, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPTNO_onclick = function(fieldvalue) {
    try {
        document.MAINFORM.RPT_CNTY_CODE.value = fieldvalue;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_CUT_LENGTH = function() {
    try {
        var RPT_NEGO_BK_NM; // Utility Auto Fix Comments
        var RPT_PAYEE_NM; // Utility Auto Fix Comments
        var RPT_PAYER_NM; // Utility Auto Fix Comments
        var RPT_RCV_BK_ADD; // Utility Auto Fix Comments
        var RPT_RCV_BK_NM; // Utility Auto Fix Comments
        RPT_PAYER_NM = EEHtml.getElementById('RPT_PAYER_NM');
        RPT_PAYEE_NM = EEHtml.getElementById('RPT_PAYEE_NM');
        RPT_NEGO_BK_NM = EEHtml.getElementById('RPT_NEGO_BK_NM');
        RPT_RCV_BK_ADD = EEHtml.getElementById('RPT_RCV_BK_ADD');
        RPT_RCV_BK_NM = EEHtml.getElementById('RPT_RCV_BK_NM');
        RPT_PAYER_NM.value = RPT_PAYER_NM.value.substr(0, 128);
        RPT_PAYEE_NM.value = RPT_PAYEE_NM.value.substr(0, 128);
        RPT_NEGO_BK_NM.value = RPT_NEGO_BK_NM.value.substr(0, 60);
        RPT_RCV_BK_ADD.value = RPT_RCV_BK_ADD.value.substr(0, 60);
        RPT_RCV_BK_NM.value = RPT_RCV_BK_NM.value.substr(0, 60);
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_DCLR_NO_onchange = function() {
    try {
        RPT_ISPRINTFLG();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_ISPRINTFLG = function() {
    try {
        if (document.MAINFORM.RPT_CNTY_CODE.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLG, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_ISREF_FLAG_onchange = function() {
    try {
        var rtp_isref; // Utility Auto Fix Comments
        rtp_isref = document.MAINFORM.RPT_ISREF;
        if (rtp_isref.value == 'N') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_INV_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_LTST_SHIP_DT, 'O');
            if (document.MAINFORM.RPT_DRAFT_AMT.className != 'AMT_P') {
                SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_AMT, 'O');
            }
        } else if (rtp_isref.value == 'Y' && document.MAINFORM.RPT_PMT_FLAG.value == "YES") {
            SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_INV_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_LTST_SHIP_DT, 'M');

            if (document.MAINFORM.RPT_DRAFT_AMT.className != 'AMT_P' && document.MAINFORM.RPT_CNTY_CODE.value != 'CHN' && document.MAINFORM.RPT_IS_REF.value != 'NO') {
                SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_AMT, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_ISREF_changefldclass = function() {
    try {
        if (document.MAINFORM.RPT_ISREF.value == 'Y') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_PHONE, 'O');

            SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_AMT, 'M');

            SYT_ChangeFldClass(document.MAINFORM.RPT_NEGO_BK_REF_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_NEGO_BK_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_RCV_BK_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_RCV_BK_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PMT_NO, 'O');
        }
        if (document.MAINFORM.RPT_ISREF.value == 'N') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_PHONE, 'P');

            SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_NEGO_BK_REF_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_NEGO_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_RCV_BK_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_RCV_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PMT_NO, 'P');

        }

        RPT_IS_REF_changefldclass();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_IS_REF_changefldclass = function() {
    try {
        if (document.MAINFORM.RPT_ISREF.value == 'Y' || document.MAINFORM.RPT_ISREF.value == '') {

            SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF, 'M');
            if (document.MAINFORM.RPT_IS_REF.value == 'YES') {
                if (document.MAINFORM.RPT_DCLR_TYPE.value == '1') {
                    SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG, 'M');
                    SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_CCY, 'O');
                    SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_AMT, 'O');

                } else {
                    SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG, 'P');
                    document.MAINFORM.RPT_PAY_FLG.value = '';
                    SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_CCY, 'M');
                    SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_AMT, 'M');

                }

                SYT_ChangeFldClass(document.MAINFORM.RPT_LTST_SHIP_DT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_NO, 'M');
                SYT_ChangeFldClass(document.MAINFORM.RPT_INV_NO, 'M');
                SYT_ChangeFldClass(document.MAINFORM.RPT_TI_YUN_DAN_NO, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_AMT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RPT_BEI_AN_BIAO_NO, 'O');


            }
            if (document.MAINFORM.RPT_IS_REF.value == 'NO' && document.MAINFORM.RPT_DCLR_TYPE.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_CCY, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_AMT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.RPT_LTST_SHIP_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.RPT_INV_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.RPT_TI_YUN_DAN_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.RPT_BEI_AN_BIAO_NO, 'P');
                document.MAINFORM.RPT_PAY_FLG.value = '';
                document.MAINFORM.RPT_LTST_SHIP_DT.value = '';
                document.MAINFORM.RPT_CONTRACT_NO.value = '';
                document.MAINFORM.RPT_INV_NO.value = '';
                document.MAINFORM.RPT_TI_YUN_DAN_NO.value = '';
                document.MAINFORM.RPT_CONTRACT_AMT.value = 0;
                document.MAINFORM.RPT_BEI_AN_BIAO_NO.value = '';
            }
            if (document.MAINFORM.RPT_IS_REF.value == 'NO' && document.MAINFORM.RPT_DCLR_TYPE.value == '1') {
                SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_CCY, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_AMT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG, 'M');
                SYT_ChangeFldClass(document.MAINFORM.RPT_LTST_SHIP_DT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_NO, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RPT_INV_NO, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RPT_TI_YUN_DAN_NO, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_AMT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RPT_BEI_AN_BIAO_NO, 'O');
            }
        } else {

            document.MAINFORM.RPT_IS_REF.value = '';
            SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_LTST_SHIP_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_INV_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TI_YUN_DAN_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_BEI_AN_BIAO_NO, 'P');
            document.MAINFORM.RPT_PAY_FLG.value = '';
            document.MAINFORM.RPT_LTST_SHIP_DT.value = '';
            document.MAINFORM.RPT_CONTRACT_NO.value = '';
            document.MAINFORM.RPT_INV_NO.value = '';
            document.MAINFORM.RPT_TI_YUN_DAN_NO.value = '';
            document.MAINFORM.RPT_CONTRACT_AMT.value = 0;
            document.MAINFORM.RPT_BEI_AN_BIAO_NO.value = '';

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_PMT_FLAG_onchange = function() {
    try {
        if (document.MAINFORM.RPT_PMT_FLAG.value == 'YES') {
            RPT_CNTY_CODE_onchange();
        } else {
            document.MAINFORM.RPT_CNTY_CODE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE, 'P');
            RPT_CNTY_CODE_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_TRX_AMT1_onchange = function(fieldName) {
    try {
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT1.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY1.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_TRX_AMT2_onchange = function(fieldName) {
    try {
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY2.value = '';
        }

        if (document.MAINFORM.RPT_TRX_AMT2.value != '0') {
            document.MAINFORM.RPT_TRX_AMT1.value = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT.value) - SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2.value);
            document.MAINFORM.RPT_TRX_AMT1.value = SYT_CCY_AMT(document.MAINFORM.RPT_TRX_CCY1.value, document.MAINFORM.RPT_TRX_AMT1.value);
            document.MAINFORM.RPT_TRX_AMT2.value = SYT_CCY_AMT(document.MAINFORM.RPT_TRX_CCY2.value, document.MAINFORM.RPT_TRX_AMT2.value);
            document.MAINFORM.RPT_TRX_AMT1.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_TRX_AMT1.value);
            document.MAINFORM.RPT_TRX_AMT2.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_TRX_AMT2.value);
        } else {
            document.MAINFORM.RPT_TRX_AMT1.value = document.MAINFORM.RPT_TRX_AMT.value;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_TRX_CODE1_onchange = function(fieldName) {
    try {
        if (document.MAINFORM.RPT_TRX_CODE1.value == '') {
            document.MAINFORM.RPT_TRX_REMARK1.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_TRX_CODE2_onchange = function(fieldName) {
    try {
        if (document.MAINFORM.RPT_TRX_CODE2.value == '') {
            document.MAINFORM.RPT_TRX_REMARK2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_TRX_REMARK1 = function() {
    try {
        var rmk; // Utility Auto Fix Comments
        var rmk1; // Utility Auto Fix Comments
        rmk = document.MAINFORM.RPT_TRX_CODE1_V.options[document.MAINFORM.RPT_TRX_CODE1_V.selectedIndex].text;

        rmk1 = rmk.split(' ');
        if (rmk != '') {
            document.MAINFORM.RPT_TRX_REMARK1.value = rmk1[1];
        } else {
            document.MAINFORM.RPT_TRX_REMARK1.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RPT_TRX_REMARK2 = function() {
    try {
        var Rmk; // Utility Auto Fix Comments
        var rmk2; // Utility Auto Fix Comments
        Rmk = document.MAINFORM.RPT_TRX_CODE2_V.options[document.MAINFORM.RPT_TRX_CODE2_V.selectedIndex].text;
        rmk2 = Rmk.split(' ');
        if (Rmk != '') {
            document.MAINFORM.RPT_TRX_REMARK2.value = rmk2[1];
        } else {
            document.MAINFORM.RPT_TRX_REMARK2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RptCnyCcyAmt = function(ccy, amt) {
    try {
        var CHG_INOUT_FLG; // Utility Auto Fix Comments
        var RPT_CCY_AC_NO; // Utility Auto Fix Comments
        var RPT_CCY_AMT; // Utility Auto Fix Comments
        var RPT_CNY_AC_NO; // Utility Auto Fix Comments
        var RPT_CNY_AMT; // Utility Auto Fix Comments
        var RPT_EXCH_RT; // Utility Auto Fix Comments
        var RPT_FINC_CCY_AC_NO; // Utility Auto Fix Comments
        var RPT_FINC_CNY_AC_NO; // Utility Auto Fix Comments
        var RPT_FINC_CNY_AMT; // Utility Auto Fix Comments
        var RPT_FINC_EXCH_RT; // Utility Auto Fix Comments
        var RPT_IN_CHG_AMT; // Utility Auto Fix Comments
        var RPT_PMT_CCY_AC_NO; // Utility Auto Fix Comments
        var RPT_PMT_CNY_AC_NO; // Utility Auto Fix Comments
        var RPT_PMT_CNY_AMT; // Utility Auto Fix Comments
        var RPT_PMT_EXCH_RT; // Utility Auto Fix Comments
        var RPT_SETT_CCY_AC_NO; // Utility Auto Fix Comments
        var RPT_SETT_CNY_AC_NO; // Utility Auto Fix Comments
        var RPT_SETT_CNY_AMT; // Utility Auto Fix Comments
        var RPT_SETT_EXCH_RT; // Utility Auto Fix Comments
        var TTL_CUST_CHG_AMT; // Utility Auto Fix Comments
        var TTL_CUST_CHG_AMT2; // Utility Auto Fix Comments
        var TTL_FOR_CHG_AMT; // Utility Auto Fix Comments
        document.MAINFORM.RPT_TRX_CCY.value = ccy;
        document.MAINFORM.RPT_TRX_AMT.value = SYS_BeFloat(amt);
        document.MAINFORM.RPT_TRX_AMT.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_TRX_AMT.value);
        document.MAINFORM.RPT_TRX_CCY1.value = ccy;
        document.MAINFORM.RPT_TRX_AMT1.value = SYS_BeFloat(amt);
        document.MAINFORM.RPT_TRX_AMT1.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_TRX_AMT1.value);

        RPT_CNY_AMT = 0;
        RPT_EXCH_RT = 0;
        RPT_CNY_AC_NO = '';
        RPT_CCY_AC_NO = '';
        RPT_CCY_AMT = 0;
        RPT_IN_CHG_AMT = 0;

        RPT_SETT_CNY_AC_NO = EEHtml.getElementById('RPT_SETT_CNY_AC_NO');
        RPT_SETT_CNY_AMT = EEHtml.getElementById('RPT_SETT_CNY_AMT');
        RPT_SETT_EXCH_RT = EEHtml.getElementById('RPT_SETT_EXCH_RT');
        RPT_SETT_CCY_AC_NO = EEHtml.getElementById('RPT_SETT_CCY_AC_NO');

        RPT_PMT_CNY_AC_NO = EEHtml.getElementById('RPT_PMT_CNY_AC_NO');
        RPT_PMT_CNY_AMT = EEHtml.getElementById('RPT_PMT_CNY_AMT');
        RPT_PMT_EXCH_RT = EEHtml.getElementById('RPT_PMT_EXCH_RT');
        RPT_PMT_CCY_AC_NO = EEHtml.getElementById('RPT_PMT_CCY_AC_NO');

        RPT_FINC_CNY_AC_NO = EEHtml.getElementById('RPT_FINC_CNY_AC_NO');
        RPT_FINC_CNY_AMT = EEHtml.getElementById('RPT_FINC_CNY_AMT');
        RPT_FINC_EXCH_RT = EEHtml.getElementById('RPT_FINC_EXCH_RT');
        RPT_FINC_CCY_AC_NO = EEHtml.getElementById('RPT_FINC_CCY_AC_NO');

        CHG_INOUT_FLG = EEHtml.getElementById('CHG_INOUT_FLG');
        TTL_CUST_CHG_AMT = EEHtml.getElementById('TTL_CUST_CHG_AMT');
        TTL_CUST_CHG_AMT2 = EEHtml.getElementById('TTL_CUST_CHG_AMT2');
        TTL_FOR_CHG_AMT = EEHtml.getElementById('TTL_FOR_CHG_AMT');


        if (RPT_FINC_CNY_AMT != null) {
            RPT_CNY_AMT = RPT_CNY_AMT + SYS_BeFloat(RPT_FINC_CNY_AMT.value);
            RPT_EXCH_RT = RPT_FINC_EXCH_RT.value;
            RPT_CNY_AC_NO = RPT_FINC_CNY_AC_NO.value;
            if (RPT_FINC_CCY_AC_NO.value != '') {
                RPT_CCY_AC_NO = RPT_FINC_CCY_AC_NO.value;
            }
        }

        if (RPT_PMT_CNY_AMT != null) {

            RPT_CNY_AMT = RPT_CNY_AMT + SYS_BeFloat(RPT_PMT_CNY_AMT.value);
            if (SYS_BeFloat(RPT_PMT_EXCH_RT.value) != 0) {
                RPT_EXCH_RT = RPT_PMT_EXCH_RT.value;

            }
            if (RPT_PMT_CNY_AC_NO.value != '') {
                RPT_CNY_AC_NO = RPT_PMT_CNY_AC_NO.value;

            }
            if (RPT_PMT_CCY_AC_NO.value != '') {
                RPT_CCY_AC_NO = RPT_PMT_CCY_AC_NO.value;

            }
        }



        RPT_CNY_AMT = Math.min(RPT_CNY_AMT, SYS_BeFloat(amt));
        RPT_CNY_AMT = SYT_CCY_AMT('JPY', RPT_CNY_AMT);
        RPT_CCY_AMT = Math.max(SYS_BeFloat(amt) - SYS_BeFloat(RPT_CNY_AMT), 0);

        document.MAINFORM.RPT_CNY_AMT.value = SYT_CCY_AMT('JPY', RPT_CNY_AMT);
        document.MAINFORM.RPT_EXCH_RT.value = RPT_EXCH_RT;
        if (SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT.value) > 0) {
            document.MAINFORM.RPT_CNY_AC_NO.value = RPT_CNY_AC_NO;
        } else {
            document.MAINFORM.RPT_CNY_AC_NO.value = '';
        }
        document.MAINFORM.RPT_CCY_AMT.value = SYT_CCY_AMT('JPY', RPT_CCY_AMT);
        if (SYS_BeFloat(document.MAINFORM.RPT_CCY_AMT.value) > 0) {
            document.MAINFORM.RPT_CCY_AC_NO.value = RPT_CCY_AC_NO;
        } else {
            document.MAINFORM.RPT_CCY_AC_NO.value = '';
        }

        document.MAINFORM.RPT_IN_CHG_AMT.value = Math.max(SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT.value) - SYS_BeFloat(document.MAINFORM.RPT_NET_PMT_AMT.value), 0);
        document.MAINFORM.RPT_IN_CHG_AMT.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_IN_CHG_AMT.value);

        document.MAINFORM.RPT_DRAFT_AMT.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_DRAFT_AMT.value);
        document.MAINFORM.RPT_CONTRACT_AMT.value = SYT_CCY_AMT('JPY', document.MAINFORM.RPT_CONTRACT_AMT.value);


        if (SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT.value) == 0) {
            document.MAINFORM.RPT_IN_CHG_CCY.value = '';
        } else {
            document.MAINFORM.RPT_IN_CHG_CCY.value = ccy;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_NET_PMT_AMT.value) == 0) {
            document.MAINFORM.RPT_NET_PMT_CCY.value = '';
        } else {
            document.MAINFORM.RPT_NET_PMT_CCY.value = ccy;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT1.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY1.value = '';
        } else {
            document.MAINFORM.RPT_TRX_CCY1.value = ccy;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY2.value = '';
        } else {
            document.MAINFORM.RPT_TRX_CCY2.value = ccy;
        }
        Rpt_ChangeFieldClass();
        RPT_TRX_AMT2_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.RptRef = function(ref) {
    try {
        document.MAINFORM.RPT_DCLR_NO.value = ref;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.Rpt_ChangeFieldClass = function() {
    try {
        if (document.MAINFORM.RPT_PMT_FLAG.value == 'YES') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PMT_FLAG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYER_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYEE_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_ORGAN_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_EXCH_RT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_CCY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_NET_PMT_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_NET_PMT_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_MTHD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REF_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_LC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISSUE_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISREF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_EXPIRY_DT, 'O');
        }
        if (document.MAINFORM.RPT_PMT_FLAG.value == 'NO') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PMT_FLAG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYER_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYEE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_ORGAN_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_EXCH_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_NET_PMT_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_NET_PMT_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_MTHD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REF_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_LC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISSUE_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_EXPIRY_DT, 'P');

            SYT_ChangeFldClass(document.MAINFORM.RPT_ISREF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_PHONE, 'P');


            SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_LTST_SHIP_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_INV_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TI_YUN_DAN_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CONTRACT_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_BEI_AN_BIAO_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_EXPIRY_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DRAFT_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_NEGO_BK_REF_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_NEGO_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_RCV_BK_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_RCV_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PMT_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISREF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF, 'P');
            document.MAINFORM.RPT_ISREF.value = 'N';
            document.MAINFORM.RPT_IS_REF.value = 'NO';
            document.MAINFORM.RPT_DCLR_NO.value = '';
        }

        RPT_ISPRINTFLG();

        if (!EEHtml.getElementById("OVS_FLG")) {
            RPT_ISREF_FLAG_onchange();
        }
        if (document.MAINFORM.RPT_CUST_TYPE.value == 'C') {
            document.MAINFORM.RPT_CUSTIDCODE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
        } else if (document.MAINFORM.RPT_CUST_TYPE.value == 'D' || document.MAINFORM.RPT_CUST_TYPE.value == 'F') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'O');
        }
        RPT_ISREF_FLAG_onchange();
        if (document.MAINFORM.RPT_PMT_FLAG.value != "YES") {
            document.MAINFORM.RPT_CUSTIDCODE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
        } else {
            if (document.MAINFORM.RPT_CUST_TYPE.value == 'C') {
                SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
                document.MAINFORM.RPT_CUSTIDCODE.value = "";
                SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_ORGAN_ID, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'M');
            }
        }
        FLD_IBPD_RPT_SETT_MTHD_onchange();
        if (SYS_FUNCTION_TYPE == "EC" && rptPayment == false) {
            RptInitCnty(document.MAINFORM.RPT_CNTY_CODE.value);
            rptPayment = true;
        }
        RPT_ISREF_changefldclass();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}

csLbiCompProto.check_RPT_DCLR_NO_PAY = function() {
    try {
        var a; // Utility Auto Fix Comments
        var aa; // Utility Auto Fix Comments
        var b; // Utility Auto Fix Comments
        var bb; // Utility Auto Fix Comments
        var c; // Utility Auto Fix Comments
        var cc; // Utility Auto Fix Comments
        var dd; // Utility Auto Fix Comments
        if (document.MAINFORM.RPT_DCLR_NO.value != '') {
            aa = document.MAINFORM.TRX_DT.value;
            a = aa.substr(2, 2); // Utility Auto Fix Comments
            b = aa.substr(5, 2); // Utility Auto Fix Comments
            c = aa.substr(8, 2); // Utility Auto Fix Comments
            bb = a + b + c;
            cc = document.MAINFORM.RPT_DCLR_NO.value;
            dd = cc.substr(12, 6);
            if (bb != dd) {
                return false;
            } else {
                return true;
            }
            //return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptPayment.js", e);
    }
}