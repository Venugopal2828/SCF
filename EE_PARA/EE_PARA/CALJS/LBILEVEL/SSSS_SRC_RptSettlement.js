"path:SCRN/Library/FFIT/RptSettlement.lbi";

var csLbiCompProto = {};

var cntyCodeCUBK = '';

csLbiCompProto.CHECK_RPT_TRX_REMARK_sett = function() {
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
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RPTNO_onclick = function(fieldvalue) {
    try {
        document.MAINFORM.RPT_CNTY_CODE.value = fieldvalue;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RPT_CUST_TYPE_onchange = function() {
    try {
        if (document.MAINFORM.RPT_SETT_FLAG.value != "YES") {
            document.MAINFORM.RPT_CUSTIDCODE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_ORGAN_ID, 'O');
            return;
        }
        if (document.MAINFORM.RPT_CUST_TYPE.value == 'C') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
            document.MAINFORM.RPT_CUSTIDCODE.value = "";
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_ORGAN_ID, 'O');
        }
        RPT_CNTY_CODE_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RPT_CUT_LENGTH = function() {
    try {
        var RPT_PAYEE_NM; // Utility Auto Fix Comments
        var RPT_PAYER_NM; // Utility Auto Fix Comments
        RPT_PAYER_NM = EEHtml.getElementById('RPT_PAYER_NM');
        RPT_PAYEE_NM = EEHtml.getElementById('RPT_PAYEE_NM');
        RPT_PAYER_NM.value = RPT_PAYER_NM.value.substr(0, 128);
        RPT_PAYEE_NM.value = RPT_PAYEE_NM.value.substr(0, 128);
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RPT_DCLR_NO_onchange = function() {
    try {
        RPT_ISPRINTFLG();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RPT_ISPRINTFLG = function() {
    try {
        /*
	if(document.MAINFORM.RPT_CNTY_CODE.value!=''&&document.MAINFORM.RPT_SETT_FLAG.value=="YES")
	{
	 	//SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLG,'M');
	}
	else
	{
		// SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLG,'O');
	}
*/
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RPT_PAY_FLG_onchange = function(fieldName) {
    try {
        if (document.MAINFORM.RPT_DCLR_TYPE.value == '2') {
            if (document.MAINFORM.RPT_PAY_FLG.value != 'O' && document.MAINFORM.RPT_PAY_FLG.value != 'T' && document.MAINFORM.RPT_PAY_FLG.value != 'F') {
                document.MAINFORM.RPT_PAY_FLG.value = '';
                alert('???');
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RPT_SETT_FLAG_onchange = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RPT_TRX_AMT1_onchange = function(fieldName) {
    try {
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT1.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY1.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
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
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RPT_TRX_CODE1_onchange = function(fieldName) {
    try {
        if (document.MAINFORM.RPT_TRX_CODE1.value == '') {
            document.MAINFORM.RPT_TRX_REMARK1.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RPT_TRX_CODE2_onchange = function(fieldName) {
    try {
        if (document.MAINFORM.RPT_TRX_CODE2.value == '') {
            document.MAINFORM.RPT_TRX_REMARK2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
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
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
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
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RptCnyCcyAmt = function(ccy, amt) {
    try {
        var CHG_INOUT_FLG; // Utility Auto Fix Comments
        var FINC_TYPE_DESC; // Utility Auto Fix Comments
        var RPT_CCY_AC_NO; // Utility Auto Fix Comments
        var RPT_CCY_AMT; // Utility Auto Fix Comments
        var RPT_CNY_AC_NO; // Utility Auto Fix Comments
        var RPT_CNY_AMT; // Utility Auto Fix Comments
        var RPT_EXCH_RT; // Utility Auto Fix Comments
        var RPT_FINC_CCY_AC_NO; // Utility Auto Fix Comments
        var RPT_FINC_CNY_AC_NO; // Utility Auto Fix Comments
        var RPT_FINC_CNY_AMT; // Utility Auto Fix Comments
        var RPT_FINC_EXCH_RT; // Utility Auto Fix Comments
        var RPT_FINC_IN_CHG; // Utility Auto Fix Comments
        var RPT_IN_CHG_AMT; // Utility Auto Fix Comments
        var RPT_PMT_CCY_AC_NO; // Utility Auto Fix Comments
        var RPT_PMT_CNY_AC_NO; // Utility Auto Fix Comments
        var RPT_PMT_CNY_AMT; // Utility Auto Fix Comments
        var RPT_PMT_EXCH_RT; // Utility Auto Fix Comments
        var RPT_SETT_CCY_AC_NO; // Utility Auto Fix Comments
        var RPT_SETT_CNY_AC_NO; // Utility Auto Fix Comments
        var RPT_SETT_CNY_AMT; // Utility Auto Fix Comments
        var RPT_SETT_EXCH_RT; // Utility Auto Fix Comments
        var RPT_SETT_IN_CHG; // Utility Auto Fix Comments
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
        RPT_SETT_IN_CHG = EEHtml.getElementById('RPT_SETT_IN_CHG');
        RPT_FINC_IN_CHG = EEHtml.getElementById('RPT_FINC_IN_CHG');

        if (RPT_SETT_CNY_AMT != null) {
            RPT_CNY_AMT = RPT_CNY_AMT + SYS_BeFloat(RPT_SETT_CNY_AMT.value);
            RPT_EXCH_RT = RPT_SETT_EXCH_RT.value;
            RPT_CNY_AC_NO = RPT_SETT_CNY_AC_NO.value;
            if (RPT_SETT_CCY_AC_NO.value != '') {
                RPT_CCY_AC_NO = RPT_SETT_CCY_AC_NO.value;
            }
        }

        FINC_TYPE_DESC = EEHtml.getElementById('FINC_TYPE_DESC');

        if (RPT_FINC_CNY_AMT != null && FINC_TYPE_DESC.value != 'FINCFFIT') {
            RPT_CNY_AMT = RPT_CNY_AMT + SYS_BeFloat(RPT_FINC_CNY_AMT.value);
            if (SYS_BeFloat(RPT_FINC_EXCH_RT.value) != 0) {
                RPT_EXCH_RT = RPT_FINC_EXCH_RT.value;
            }
            if (RPT_FINC_CNY_AC_NO.value != '') {
                RPT_CNY_AC_NO = RPT_FINC_CNY_AC_NO.value;
            }
            if (RPT_FINC_CCY_AC_NO.value != '') {
                RPT_CCY_AC_NO = RPT_FINC_CCY_AC_NO.value;
            }
        }

        if (CHG_INOUT_FLG != null) {
            if (CHG_INOUT_FLG.value == 'IN') {
                RPT_IN_CHG_AMT = SYS_BeFloat(TTL_CUST_CHG_AMT.value) + SYS_BeFloat(TTL_CUST_CHG_AMT2.value) + SYS_BeFloat(TTL_FOR_CHG_AMT.value);
            } else {
                RPT_IN_CHG_AMT = SYS_BeFloat(TTL_FOR_CHG_AMT.value);
            }
        }
        if (RPT_SETT_IN_CHG != null) {
            RPT_IN_CHG_AMT = RPT_IN_CHG_AMT + SYS_BeFloat(RPT_SETT_IN_CHG.value);
        }
        if (RPT_FINC_IN_CHG != null) {
            RPT_IN_CHG_AMT = RPT_IN_CHG_AMT + SYS_BeFloat(RPT_FINC_IN_CHG.value);
        }
        RPT_IN_CHG_AMT = SYT_CCY_AMT('JPY', RPT_IN_CHG_AMT);
        RPT_CNY_AMT = Math.min(RPT_CNY_AMT, SYS_BeFloat(amt));
        RPT_CNY_AMT = SYT_CCY_AMT('JPY', RPT_CNY_AMT);
        RPT_CCY_AMT = Math.max(SYS_BeFloat(amt) - SYS_BeFloat(RPT_IN_CHG_AMT) - SYS_BeFloat(RPT_CNY_AMT), 0);

        if (SYS_BeFloat(RPT_CCY_AMT) == 0) {
            RPT_CNY_AMT = Math.max(SYS_BeFloat(amt) - SYS_BeFloat(RPT_IN_CHG_AMT), 0);
        }

        document.MAINFORM.RPT_CNY_AMT.value = SYT_CCY_AMT('JPY', RPT_CNY_AMT);
        document.MAINFORM.RPT_EXCH_RT.value = RPT_EXCH_RT;
        if (SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT.value) > 0) {
            document.MAINFORM.RPT_CNY_AC_NO.value = RPT_CNY_AC_NO;
        } else {
            document.MAINFORM.RPT_CNY_AC_NO.value = '';
        }

        document.MAINFORM.RPT_CCY_AMT.value = SYT_CCY_AMT('JPY', RPT_CCY_AMT);
        if (SYS_BeFloat(RPT_CCY_AMT) > 0) {
            document.MAINFORM.RPT_CCY_AC_NO.value = RPT_CCY_AC_NO;
        } else {
            document.MAINFORM.RPT_CCY_AC_NO.value = '';
        }

        document.MAINFORM.RPT_IN_CHG_AMT.value = SYT_CCY_AMT('JPY', RPT_IN_CHG_AMT);

        if (SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT.value) == 0) {
            document.MAINFORM.RPT_IN_CHG_CCY.value = '';
        } else {
            document.MAINFORM.RPT_IN_CHG_CCY.value = ccy;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_OUT_CHG_AMT.value) == 0) {
            document.MAINFORM.RPT_OUT_CHG_CCY.value = '';
        } else {
            document.MAINFORM.RPT_OUT_CHG_CCY.value = ccy;
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
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RptConfirmCheck = function() {
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
        RPT_CUT_LENGTH();
        document.MAINFORM.RPT_PC_UNIT_CODE.value = SYS_PC_UNIT;
        document.MAINFORM.RPT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.RPT_TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.RPT_DCLR_NO1.value = document.MAINFORM.RPT_DCLR_NO.value.substr(0, 6);
        document.MAINFORM.RPT_DCLR_NO2.value = document.MAINFORM.RPT_DCLR_NO.value.substr(6, 4);
        document.MAINFORM.RPT_DCLR_NO3.value = document.MAINFORM.RPT_DCLR_NO.value.substr(10, 2);
        document.MAINFORM.RPT_DCLR_NO4.value = document.MAINFORM.RPT_DCLR_NO.value.substr(12, 6);
        document.MAINFORM.RPT_DCLR_NO5.value = document.MAINFORM.RPT_DCLR_NO.value.substr(18, 4);
        document.MAINFORM.RPT_CUST_ORGAN_ID1.value = document.MAINFORM.RPT_CUST_ORGAN_ID.value.substr(0, 8);
        document.MAINFORM.RPT_CUST_ORGAN_ID2.value = document.MAINFORM.RPT_CUST_ORGAN_ID.value.substr(8, 1);


        if (document.MAINFORM.RPT_SETT_FLAG.value != 'YES') {
            return true;
        }
        if (!CHECK_RPT_TRX_REMARK_sett()) {
            return false;
        }
        if (!check_RPT_DCLR_NO_SETT()) {
            return false;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT.value) == 0) {
            document.MAINFORM.RPT_IN_CHG_CCY.value = '';
        } else {
            document.MAINFORM.RPT_IN_CHG_CCY.value = document.MAINFORM.RPT_TRX_CCY.value;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_OUT_CHG_AMT.value) == 0) {
            document.MAINFORM.RPT_OUT_CHG_CCY.value = '';
        } else {
            document.MAINFORM.RPT_OUT_CHG_CCY.value = document.MAINFORM.RPT_TRX_CCY.value;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT1.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY1.value = '';
        } else {
            document.MAINFORM.RPT_TRX_CCY1.value = document.MAINFORM.RPT_TRX_CCY.value;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2.value) == 0) {
            document.MAINFORM.RPT_TRX_CCY2.value = '';
        } else {
            document.MAINFORM.RPT_TRX_CCY2.value = document.MAINFORM.RPT_TRX_CCY.value;
        }

        if (document.MAINFORM.RPT_DCLR_NO.value != '') {
            if (SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT.value) < 0 || SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT.value) == 0) {
                SYS_CheckError(document.MAINFORM.RPT_TRX_AMT, 'RPT_TRX_AMT less input error');
                return false;
            }
            if (SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT.value) < 0) {
                SYS_CheckError(document.MAINFORM.RPT_IN_CHG_AMT, 'RPT_IN_CHG_AMT input error');
                return false;
            }
            if (SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT.value) > 0 && document.MAINFORM.RPT_CNY_AC_NO.value == '') {
                SYS_CheckError(document.MAINFORM.RPT_CNY_AMT, 'RPT_CNY_AMT.value input error');
                return false;
            }
            if (SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT.value) > 0 && SYS_BeFloat(document.MAINFORM.RPT_EXCH_RT.value) <= 0) {
                SYS_CheckError(document.MAINFORM.RPT_EXCH_RT, 'RPT_EXCH_RT input error');
                return false;
            }

            if (SYS_BeFloat(document.MAINFORM.RPT_CCY_AMT.value) > 0 && document.MAINFORM.RPT_CCY_AC_NO.value == '') {
                SYS_CheckError(document.MAINFORM.RPT_CCY_AMT, 'RPT_CCY_AMT input error');
                return false;
            }
            if (SYS_BeFloat(document.MAINFORM.RPT_OTHER_AMT.value) > 0 && document.MAINFORM.RPT_OTHER_AC_NO.value == '') {
                SYS_CheckError(document.MAINFORM.RPT_OTHER_AMT, 'RPT_OTHER_AMT input error');
                return false;
            }
            if ((SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT.value) < 0 || SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT.value) == 0) && document.MAINFORM.RPT_CNY_AC_NO.value != '') {
                SYS_CheckError(document.MAINFORM.RPT_CNY_AMT, 'RPT_CNY_AMT input error');
                return false;
            }
            if ((SYS_BeFloat(document.MAINFORM.RPT_CCY_AMT.value) < 0 || SYS_BeFloat(document.MAINFORM.RPT_CCY_AMT.value) == 0) && document.MAINFORM.RPT_CCY_AC_NO.value != '') {
                SYS_CheckError(document.MAINFORM.RPT_CCY_AMT, 'RPT_CCY_AMT input error');
                return false;
            }
            if ((SYS_BeFloat(document.MAINFORM.RPT_OTHER_AMT.value) < 0 || SYS_BeFloat(document.MAINFORM.RPT_OTHER_AMT.value) == 0) && document.MAINFORM.RPT_OTHER_AC_NO.value != '') {
                SYS_CheckError(document.MAINFORM.RPT_OTHER_AMT, 'RPT_OTHER_AMT input error');
                return false;
            }
            nRMB_AMT = SYS_BeFloat(document.MAINFORM.RPT_CNY_AMT.value);
            nCCY_AMT = SYS_BeFloat(document.MAINFORM.RPT_CCY_AMT.value);
            nOTHER_AMT = SYS_BeFloat(document.MAINFORM.RPT_OTHER_AMT.value);
            nRPT_IN_CHG_AMT = SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT.value);
            nTTLAMT = nRMB_AMT + nCCY_AMT + nOTHER_AMT + nRPT_IN_CHG_AMT;
            nHUIAMT = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT.value);
            nAmt_CR = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT.value) - SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT.value) - SYS_BeFloat(document.MAINFORM.RPT_OUT_CHG_AMT.value);
            if (nTTLAMT != SYS_BeFloat(nHUIAMT)) {
                SYS_CheckError(document.MAINFORM.RPT_CNY_AMT, 'RPT_OTHER_AMT input error');
                return false;
            }
            if (nTTLAMT == 0 && nAmt_CR > 0) {
                SYS_CheckError(document.MAINFORM.RPT_CCY_AMT, 'RPT_CCY_AMT input error');
                return false;
            }


        }


        nttlamt = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT1.value) + SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2.value);
        nHUIAMT = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT.value);
        if (document.MAINFORM.RPT_TRX_CODE2.value != '' && document.MAINFORM.RPT_TRX_CODE1.value == document.MAINFORM.RPT_TRX_CODE2.value) {
            SYS_CheckError(document.MAINFORM.RPT_TRX_CODE2, 'RPT_TRX_CODE2 input error');
            return false;
        } else if ((nttlamt != SYS_BeFloat(nHUIAMT)) && document.MAINFORM.RPT_ISREF.value != 'N') {
            SYS_CheckError(document.MAINFORM.RPT_TRX_AMT1, 'RPT_TRX_AMT1 input error');

            return false;

        } else if (nttlamt < SYS_BeFloat(document.MAINFORM.RPT_VERF_AMT.value)) {
            SYS_CheckError(document.MAINFORM.RPT_VERF_AMT, 'RPT_VERF_AMT input error');
            return false;
        }

        if (!RPT_VERF_NO_onchange(document.MAINFORM.RPT_VERF_NO.value)) {
            return false;
        }

        sIBP_TXCODE2 = document.MAINFORM.RPT_TRX_CODE2.value;
        nIBP_TC2AMT = SYS_BeFloat(document.MAINFORM.RPT_TRX_AMT2.value);
        sIBP_TX2REM = document.MAINFORM.RPT_TRX_REMARK2.value;
        strErrMsg3 = 'input error';
        if ((sIBP_TXCODE2 == '' && nIBP_TC2AMT == 0 && sIBP_TX2REM == '') || (sIBP_TXCODE2 != '' && nIBP_TC2AMT > 0 && sIBP_TX2REM != '')) {
            return true;
        } else {
            SYS_CheckError(document.MAINFORM.RPT_TRX_CODE2, strErrMsg3);
            return false;
        }


        //return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RptDiscCnyCcyAmt = function(ccy, amt) {
    try {
        var RPT_CCY_AC_NO; // Utility Auto Fix Comments
        var RPT_CCY_AMT; // Utility Auto Fix Comments
        var RPT_CNY_AC_NO; // Utility Auto Fix Comments
        var RPT_CNY_AMT; // Utility Auto Fix Comments
        var RPT_EXCH_RT; // Utility Auto Fix Comments
        var RPT_IN_CHG_AMT; // Utility Auto Fix Comments
        var RPT_PMT_INT_SUM; // Utility Auto Fix Comments
        var RPT_SETT_CCY_AC_NO; // Utility Auto Fix Comments
        var RPT_SETT_CNY_AC_NO; // Utility Auto Fix Comments
        var RPT_SETT_CNY_AMT; // Utility Auto Fix Comments
        var RPT_SETT_EXCH_RT; // Utility Auto Fix Comments
        var RPT_SETT_IN_CHG; // Utility Auto Fix Comments
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
        RPT_PMT_INT_SUM = EEHtml.getElementById('FA_PAID_INT_SUM');

        if (RPT_SETT_CNY_AMT != null) {
            RPT_CNY_AMT = RPT_CNY_AMT + SYS_BeFloat(RPT_SETT_CNY_AMT.value);
            RPT_EXCH_RT = RPT_SETT_EXCH_RT.value;
            RPT_CNY_AC_NO = RPT_SETT_CNY_AC_NO.value;
        }
        RPT_CNY_AMT = SYT_CCY_AMT('JPY', RPT_CNY_AMT);
        RPT_CCY_AMT = SYS_BeFloat(amt) - SYS_BeFloat(RPT_CNY_AMT);

        document.MAINFORM.RPT_CNY_AMT.value = SYT_CCY_AMT('JPY', RPT_CNY_AMT);
        document.MAINFORM.RPT_EXCH_RT.value = RPT_EXCH_RT;
        document.MAINFORM.RPT_CNY_AC_NO.value = RPT_CNY_AC_NO;
        document.MAINFORM.RPT_CCY_AC_NO.value = RPT_CCY_AC_NO;
        document.MAINFORM.RPT_CCY_AMT.value = SYT_CCY_AMT('JPY', RPT_CCY_AMT);
        RPT_SETT_IN_CHG = EEHtml.getElementById('RPT_SETT_IN_CHG');
        if (RPT_SETT_IN_CHG != null) {
            RPT_IN_CHG_AMT = RPT_IN_CHG_AMT + SYS_BeFloat(RPT_SETT_IN_CHG.value);
        }
        if (RPT_PMT_INT_SUM != null) {
            RPT_IN_CHG_AMT = RPT_IN_CHG_AMT + SYS_BeFloat(RPT_PMT_INT_SUM.value);
        }

        document.MAINFORM.RPT_IN_CHG_AMT.value = SYT_CCY_AMT('JPY', RPT_IN_CHG_AMT);
        if (SYS_BeFloat(amt) < SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT.value)) {
            document.MAINFORM.RPT_IN_CHG_AMT.value = SYT_CCY_AMT('JPY', SYS_BeFloat(amt));
        }
        if (RPT_SETT_IN_CHG != null) {
            RPT_CCY_AMT = SYS_BeFloat(amt) - SYS_BeFloat(RPT_CNY_AMT) - SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT.value);
        }
        document.MAINFORM.RPT_CCY_AMT.value = SYT_CCY_AMT('JPY', RPT_CCY_AMT);

        if (SYS_BeFloat(RPT_CCY_AMT) > 0 && RPT_SETT_CCY_AC_NO.value != '') {
            document.MAINFORM.RPT_CCY_AC_NO.value = RPT_SETT_CCY_AC_NO.value;
        } else if (SYS_BeFloat(RPT_CCY_AMT) > 0 && RPT_SETT_CCY_AC_NO.value == '') {
            document.MAINFORM.RPT_CCY_AC_NO.value = '7216';
        } else {
            document.MAINFORM.RPT_CCY_AC_NO.value = '';
        }

        if (SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT.value) == 0) {
            document.MAINFORM.RPT_IN_CHG_CCY.value = '';
        } else {
            document.MAINFORM.RPT_IN_CHG_CCY.value = ccy;
        }
        if (SYS_BeFloat(document.MAINFORM.RPT_OUT_CHG_AMT.value) == 0) {
            document.MAINFORM.RPT_OUT_CHG_CCY.value = '';
        } else {
            document.MAINFORM.RPT_OUT_CHG_CCY.value = ccy;
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

        RPT_TRX_AMT2_onchange();
        Rpt_ChangeFieldClass();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RptInitCnty = function(cntyCode) {
    try {
        var innerRptFlag; // Utility Auto Fix Comments
        var rptNoDate; // Utility Auto Fix Comments
        var rptSettlement; // Utility Auto Fix Comments
        var trxDate; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "INQU") {
            return;
        }

        rptNoDate = EEHtml.getElementById("RPT_DCLR_NO").value.substr(12, 6);
        trxDate = EEHtml.getElementById("TRX_DT").value;


        trxDate = trxDate.replace('-', '');
        trxDate = trxDate.replace('-', '');
        if (SYS_FUNCTION_TYPE == "EC" && exchRateOnLoadFlag) {
            if (rptNoDate != trxDate.substr(2, 6) && rptSettlement == false) {
                rptSettlement = true;
                innerRptFlag = true;
            } else {
                return;
            }
        }
        if (!innerRptFlag) {
            return;
        }

        cntyCodeCUBK = cntyCode;
        SYS_GetTableDataByRule_S('SSSS_SRC_RptSettlement_RptInitCnty_0', '1');
        if (document.MAINFORM.RPT_SETT_FLAG.value == 'YES') {
            if (document.MAINFORM.RPT_DCLR_TYPE.value == '2') {
                if (document.MAINFORM.RPT_CUST_TYPE.value == 'C') {
                    SYS_GetRefNo('IBPD01', 'RptRef', '', 'IBPD01');
                } else if (document.MAINFORM.RPT_CUST_TYPE.value != '') {
                    SYS_GetRefNo('IBPD02', 'RptRef', '', 'IBPD02');
                }
            } else if (document.MAINFORM.RPT_DCLR_TYPE.value == '1') {
                SYS_GetRefNo('IBPD03', 'RptRef', '', 'IBPD03');
            } else {
                document.MAINFORM.RPT_DCLR_NO.value = '';
            }
        } else {
            document.MAINFORM.RPT_DCLR_NO.value = '';
        }

        Rpt_ChangeFieldClass();
        innerRptFlag = false;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RptInitCust = function(custId) {
    try {
        document.MAINFORM.RPT_CUST_ID.value = custId;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.RptRef = function(ref) {
    try {
        document.MAINFORM.RPT_DCLR_NO.value = ref;
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.Rpt_ChangeFieldClass = function() {
    try {
        var rptSettlement; // Utility Auto Fix Comments
        RPT_ISPRINTFLG();

        /*
        if (document.MAINFORM.RPT_SETT_FLAG.value=='YES')	{
		    //SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE,'M'); 
	    }else{
     		//SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE,'O'); 
  	    }
 */
        if (document.MAINFORM.RPT_CUST_TYPE.value == 'C') {
            document.MAINFORM.RPT_CUSTIDCODE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
        } else if (document.MAINFORM.RPT_CUST_TYPE.value == 'D' || document.MAINFORM.RPT_CUST_TYPE.value == 'F') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'O');
        }
        if (document.MAINFORM.RPT_SETT_FLAG.value != "YES") {
            document.MAINFORM.RPT_CUSTIDCODE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
        } else {
            if (document.MAINFORM.RPT_CUST_TYPE.value == 'C') {
                SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
                document.MAINFORM.RPT_CUSTIDCODE.value = "";
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'M');
            }
        }
        if (SYS_FUNCTION_TYPE == "EC" && rptSettlement == false) {
            RptInitCnty(document.MAINFORM.RPT_CNTY_CODE.value);
            rptSettlement = true;
        }
        Rpt_ChangeFieldClass_SETT_RPT_ISREF();
        Rpt_ChangeFieldClass_SETT_RPT_IS_REF1();
        Rpt_ChangeFieldClass1();
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.Rpt_ChangeFieldClass1 = function() {
    try {
        if (document.MAINFORM.RPT_SETT_FLAG.value == 'YES') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_FLAG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYEE_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYER_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_ORGAN_ID, 'M');

            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_EXCH_RT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_CCY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_AMT, 'O');

            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_MTHD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REF_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OUT_CHG_CCY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OUT_CHG_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISREF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF, 'M');
        }
        if (document.MAINFORM.RPT_SETT_FLAG.value == 'NO') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_FLAG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DCLR_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYEE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAYER_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUSTIDCODE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CUST_ORGAN_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_EXCH_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IN_CHG_AMT, 'P');

            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINTFLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_MTHD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REF_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNY_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CCY_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OTHER_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OUT_CHG_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_OUT_CHG_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISREF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_PHONE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_FRGN_LOAN_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISBAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_BAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_COUNT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CHKPRTD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINT, 'P');
            document.MAINFORM.RPT_ISREF.value = 'N';
            document.MAINFORM.RPT_IS_REF.value = 'NO';
            document.MAINFORM.RPT_DCLR_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.Rpt_ChangeFieldClass_SETT_RPT_ISREF = function() {
    try {
        if (document.MAINFORM.RPT_ISREF.value == 'Y') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_PHONE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_FRGN_LOAN_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_REFFLG, 'M');
        }
        if (document.MAINFORM.RPT_ISREF.value == 'N') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CODE2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_CCY2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_AMT2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_REMARK2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DECLARER_PHONE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_FRGN_LOAN_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_REFFLG, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.Rpt_ChangeFieldClass_SETT_RPT_IS_REF = function() {
    try {
        if (document.MAINFORM.RPT_IS_REF.value == 'YES') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISBAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_BAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_COUNT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CHKPRTD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINT, 'O');
            if (SYS_MODULE_NAME == 'FFIT') {
                SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO, 'O');
            }

        }
        if (document.MAINFORM.RPT_IS_REF.value == 'NO') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISBAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_BAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_COUNT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CHKPRTD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINT, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.Rpt_ChangeFieldClass_SETT_RPT_IS_REF1 = function() {
    try {
        if (document.MAINFORM.RPT_IS_REF.value == 'YES') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISBAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_BAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_COUNT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CHKPRTD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINT, 'O');
            if (SYS_MODULE_NAME == 'FFIT') {
                SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO, 'O');
            }
        }
        if (document.MAINFORM.RPT_IS_REF.value == 'NO') {
            SYT_ChangeFldClass(document.MAINFORM.RPT_PAY_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISBAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_TRX_BAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_COUNT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_VERF_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_CHKPRTD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RPT_ISPRINT, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}

csLbiCompProto.check_RPT_DCLR_NO_SETT = function() {
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
        DisExcpt("SSSS_SRC_RptSettlement.js", e);
    }
}