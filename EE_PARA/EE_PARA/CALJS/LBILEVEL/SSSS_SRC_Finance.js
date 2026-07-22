"path:SCRN/Library/FFIT/Finance.lbi";

var csLbiCompProto = {};

var ccyCUBK = '';

csLbiCompProto.FINC_AMT_FINC_EQAMT = function() {
    try {
        if (document.MAINFORM.FINC_INIT_FLG.value == '1') {
            if (document.MAINFORM.FINC_TRX_CCY.value == document.MAINFORM.FINC_CCY.value) {
                document.MAINFORM.FINC_AMT.value = document.MAINFORM.FINC_EQ_AMT.value;
            } else {
                if (document.MAINFORM.FINC_TRX_TYPE.value == '1') {
                    document.MAINFORM.FINC_AMT.value = SYS_BeFloat(document.MAINFORM.FINC_EQ_AMT.value) * SYS_BeFloat(document.MAINFORM.BUYING_CUST_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_CCY_CUST_RT.value);
                } else {
                    document.MAINFORM.FINC_AMT.value = SYS_BeFloat(document.MAINFORM.FINC_EQ_AMT.value) * SYS_BeFloat(document.MAINFORM.SELLING_CUST_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_CCY_CUST_RT.value);
                }
            }
            document.MAINFORM.FINC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
            document.MAINFORM.FINC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
            document.MAINFORM.FINC_PCT.value = SYS_BeFloat(document.MAINFORM.FINC_EQ_AMT.value) / SYS_BeFloat(document.MAINFORM.FINC_TRX_AMT.value) * 100;
            document.MAINFORM.FINC_PCT.value = SYT_CCY_AMT('USD', document.MAINFORM.FINC_PCT.value);
        } else if (document.MAINFORM.FINC_INIT_FLG.value == '2') {
            if (document.MAINFORM.FINC_TRX_CCY.value == document.MAINFORM.FINC_CCY.value) {
                document.MAINFORM.FINC_EQ_AMT.value = document.MAINFORM.FINC_AMT.value;
            } else {

                if (document.MAINFORM.FINC_TRX_TYPE.value == '1') {
                    document.MAINFORM.FINC_EQ_AMT.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) * SYS_BeFloat(document.MAINFORM.FINC_CCY_CUST_RT.value) / SYS_BeFloat(document.MAINFORM.BUYING_CUST_RT.value);
                } else {
                    document.MAINFORM.FINC_EQ_AMT.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) * SYS_BeFloat(document.MAINFORM.FINC_CCY_CUST_RT.value) / SYS_BeFloat(document.MAINFORM.SELLING_CUST_RT.value);
                }
            }
            document.MAINFORM.FINC_EQ_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_TRX_CCY.value, document.MAINFORM.FINC_EQ_AMT.value);
            document.MAINFORM.FINC_PCT.value = SYS_BeFloat(document.MAINFORM.FINC_EQ_AMT.value) / SYS_BeFloat(document.MAINFORM.FINC_TRX_AMT.value) * 100;
            document.MAINFORM.FINC_PCT.value = SYT_CCY_AMT('USD', document.MAINFORM.FINC_PCT.value);
            document.MAINFORM.FINC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        } else {
            document.MAINFORM.FINC_EQ_AMT.value = SYS_BeFloat(document.MAINFORM.FINC_TRX_AMT.value) * SYS_BeFloat(document.MAINFORM.FINC_PCT.value) / 100;
            if (document.MAINFORM.FINC_TRX_CCY.value == document.MAINFORM.FINC_CCY.value) {
                document.MAINFORM.FINC_AMT.value = document.MAINFORM.FINC_EQ_AMT.value;
            } else {
                if (document.MAINFORM.FINC_TRX_TYPE.value == '1') {
                    document.MAINFORM.FINC_AMT.value = SYS_BeFloat(document.MAINFORM.FINC_EQ_AMT.value) * SYS_BeFloat(document.MAINFORM.BUYING_CUST_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_CCY_CUST_RT.value);
                } else {
                    document.MAINFORM.FINC_AMT.value = SYS_BeFloat(document.MAINFORM.FINC_EQ_AMT.value) * SYS_BeFloat(document.MAINFORM.SELLING_CUST_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_CCY_CUST_RT.value);
                }
            }
            document.MAINFORM.FINC_EQ_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_TRX_CCY.value, document.MAINFORM.FINC_EQ_AMT.value);
            document.MAINFORM.FINC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
            document.MAINFORM.FINC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FINC_BASIC_DAYS = function() {
    try {
        if (document.MAINFORM.FINC_CCY.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_Finance_FINC_BASIC_DAYS_0', '1');

        } else {
            document.MAINFORM.FINC_BASIC_DAY.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FINC_DAYS = function() {
    try {
        if (document.MAINFORM.FINC_DUE_DT.value != '' && document.MAINFORM.FINC_DT.value != '') {
            document.MAINFORM.FINC_DAYS.value = SYS_GetSubDays('FINC_DT', 'FINC_DUE_DT');
        } else {
            document.MAINFORM.FINC_DAYS.value = 0;
        }

        GetFincLiborRt(document.MAINFORM.FINC_DAYS.value, document.MAINFORM.FINC_CCY.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FINC_DUE_DT = function() {
    try {
        if (document.MAINFORM.FINC_DT.value != '') {
            if (document.MAINFORM.FINC_BILL_DUE_DT.value != '') {
                if (document.MAINFORM.GRACE_FLG.value == '2') {
                    SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.FINC_BILL_DUE_DT.value, document.MAINFORM.GRACE_DAYS.value, 'FINC_DUE_DT', 'A', 'Y', 'Y');
                } else {
                    SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.FINC_BILL_DUE_DT.value, document.MAINFORM.GRACE_DAYS.value, 'FINC_DUE_DT', 'A', 'N', 'Y');
                }

            } else {

                SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.FINC_DT.value, document.MAINFORM.FINC_DAYS.value, 'FINC_DUE_DT', 'A', 'N', 'Y');
            }
            GetEndDate();
        } else {
            document.MAINFORM.FINC_DUE_DT.value = '';
            FINC_DAYS();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FINC_EXCH_FAV_RT_onchange = function() {
    try {
        if (SYS_MODULE_NAME == 'EXLC' || SYS_MODULE_NAME == 'EXCL') {
            GetExchCustRate('2', document.MAINFORM.FINC_CCY_EXCH_RT.value, document.MAINFORM.FINC_CCY_CLOSE_RT.value, document.MAINFORM.FINC_CCY_CUST_RT);
        } else {
            GetExchCustRate('1', document.MAINFORM.FINC_CCY_EXCH_RT.value, document.MAINFORM.FINC_CCY_CLOSE_RT.value, document.MAINFORM.FINC_CCY_CUST_RT);
        }
        FINC_AMT_FINC_EQAMT();
        PRE_FINC_INT();
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FINC_EXCH_FIX_PENDING = function() {
    try {
        var exchFieldList; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME == 'EPLC' || SYS_MODULE_NAME == 'EPCL') {
            exchFieldList = 'FINC_CCY_EXCH_RT' + ';' + 'FINC_CCY_CLOSE_RT';
            SYS_GetExchangeRate_Boc(document.MAINFORM.FINC_CCY.value, 'USD', "Selling Rate;Selling Close Rate", exchFieldList);
            GetExchCustRate('2', document.MAINFORM.FINC_CCY_EXCH_RT.value, document.MAINFORM.FINC_CCY_CLOSE_RT.value, document.MAINFORM.FINC_CCY_CUST_RT);
        } else {
            exchFieldList = 'FINC_CCY_EXCH_RT' + ';' + 'FINC_CCY_CLOSE_RT'; // Utility Auto Fix Comments
            SYS_GetExchangeRate_Boc(document.MAINFORM.FINC_CCY.value, 'USD', "Buying Rate;Buying Close Rate", exchFieldList);
            GetExchCustRate('1', document.MAINFORM.FINC_CCY_EXCH_RT.value, document.MAINFORM.FINC_CCY_CLOSE_RT.value, document.MAINFORM.FINC_CCY_CUST_RT);
        }

        FINC_AMT_FINC_EQAMT();
        document.MAINFORM.FINC_DT.value = SYS_BUSI_DATE;
        if (SYS_BeFloat(document.MAINFORM.FINC_DAYS_ORG.value) != 0) {

            FINC_DUE_DT();
        } else if (document.MAINFORM.FINC_BILL_DUE_DT.value != '') {

            FINC_DUE_DT();
        } else {

            FINC_DAYS();
            PRE_FINC_INT();
        }
        if (document.MAINFORM.INT_MTHD.value == '1') {
            document.MAINFORM.FINC_PMT_DT.value = document.MAINFORM.FINC_DUE_DT.value;
        } else {
            document.MAINFORM.FINC_PMT_DT.value = SYS_BUSI_DATE;
        }
        document.MAINFORM.FINC_LAST_PMT_DT.value = SYS_BUSI_DATE;
        if (EEHtml.getElementById("FINC_TYPE_DESC").value.indexOf("ADVC") >= 0) {
            SYT_ChangeFldClass(EEHtml.getElementById("FINC_AC_NO"), 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FINC_MARGIN_LIBOR_INT = function() {
    try {
        var discRate; // Utility Auto Fix Comments
        var int1; // Utility Auto Fix Comments
        var int2; // Utility Auto Fix Comments
        var nv; // Utility Auto Fix Comments
        var period; // Utility Auto Fix Comments
        if (document.MAINFORM.INT_MODE.value == '2') {
            discRate = SYS_BeFloat(document.MAINFORM.FINC_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / 360 / 100;
            nv = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) / (1 + discRate);

            document.MAINFORM.PRE_FINC_INT.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) - nv;
            document.MAINFORM.PRE_FINC_INT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.PRE_FINC_INT.value);
        } else if (document.MAINFORM.INT_MODE.value == '3') {
            period = Math.floor(SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / 365);
            discRate = SYS_BeFloat(document.MAINFORM.FINC_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAY.value) / 100; // Utility Auto Fix Comments
            int1 = Math.pow((1 + SYS_BeFloat(document.MAINFORM.FINC_RT.value) * 365 / 360 / 100), period);
            int2 = (1 + SYS_BeFloat(document.MAINFORM.FINC_RT.value) * (SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) - period * 365) / 100 / 360);
            nv = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) / (int1 * int2); // Utility Auto Fix Comments

            document.MAINFORM.PRE_FINC_INT.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) - nv;
            document.MAINFORM.PRE_FINC_INT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.PRE_FINC_INT.value);

        } else {
            document.MAINFORM.PRE_FINC_INT.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) * SYS_BeFloat(document.MAINFORM.FINC_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAY.value) / 100;

            document.MAINFORM.PRE_FINC_INT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.PRE_FINC_INT.value);

        }
        document.MAINFORM.PRE_FINC_LIBOR.value = SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value) * SYS_BeFloat(document.MAINFORM.LIBOR_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_RT.value);
        document.MAINFORM.PRE_FINC_LIBOR.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.PRE_FINC_LIBOR.value);
        document.MAINFORM.PRE_FINC_MARGIN.value = SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value) - SYS_BeFloat(document.MAINFORM.PRE_FINC_LIBOR.value);
        document.MAINFORM.PRE_FINC_MARGIN.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.PRE_FINC_MARGIN.value);
        document.MAINFORM.FINC_PAY_INT.value = document.MAINFORM.PRE_FINC_INT.value;
        document.MAINFORM.FINC_PAY_LIBOR.value = document.MAINFORM.PRE_FINC_LIBOR.value;
        document.MAINFORM.FINC_PAY_MARGIN.value = document.MAINFORM.PRE_FINC_MARGIN.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FINC_MARGIN_RCVA_INT = function() {
    try {
        var discRate; // Utility Auto Fix Comments
        var int1; // Utility Auto Fix Comments
        var int2; // Utility Auto Fix Comments
        var nv; // Utility Auto Fix Comments
        var period; // Utility Auto Fix Comments
        if (document.MAINFORM.INT_MODE.value == '2') {
            discRate = SYS_BeFloat(document.MAINFORM.FINC_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / 360 / 100;
            nv = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) / (1 + discRate);
            document.MAINFORM.RCVA_INT.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) - nv;
            document.MAINFORM.RCVA_INT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.RCVA_INT.value);
        } else if (document.MAINFORM.INT_MODE.value == '3') {
            period = Math.floor(SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / 365);
            discRate = SYS_BeFloat(document.MAINFORM.FINC_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAY.value) / 100; // Utility Auto Fix Comments
            int1 = Math.pow((1 + SYS_BeFloat(document.MAINFORM.FINC_RT.value) * 365 / 360 / 100), period);
            int2 = (1 + SYS_BeFloat(document.MAINFORM.FINC_RT.value) * (SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) - period * 365) / 100 / 360);
            nv = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) / (int1 * int2); // Utility Auto Fix Comments
            document.MAINFORM.RCVA_INT.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) - nv;
            document.MAINFORM.RCVA_INT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.RCVA_INT.value);

        } else {
            document.MAINFORM.RCVA_INT.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) * SYS_BeFloat(document.MAINFORM.FINC_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAY.value) / 100;
            document.MAINFORM.RCVA_INT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.RCVA_INT.value);

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FINC_NET_AMT = function() {
    try {
        var FINC_CCY; // Utility Auto Fix Comments
        var FINC_TRX_CCY; // Utility Auto Fix Comments
        var netEqAmt; // Utility Auto Fix Comments
        var netFincAmt; // Utility Auto Fix Comments
        netFincAmt = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) - SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value);
        netFincAmt = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, netFincAmt);

        if (document.MAINFORM.FINC_INIT_FLG.value == '2') {
            netEqAmt = SYS_BeFloat(netFincAmt) * SYS_BeFloat(document.MAINFORM.FINC_CCY_CUST_RT.value) / SYS_BeFloat(document.MAINFORM.SELLING_CUST_RT.value);
            netEqAmt = SYT_CCY_AMT(document.MAINFORM.FINC_TRX_CCY.value, netEqAmt);
        } else {
            netEqAmt = SYS_BeFloat(document.MAINFORM.FINC_EQ_AMT.value) - SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value) * SYS_BeFloat(document.MAINFORM.FINC_CCY_CUST_RT.value) / SYS_BeFloat(document.MAINFORM.SELLING_CUST_RT.value); // Utility Auto Fix Comments
            netEqAmt = SYT_CCY_AMT(document.MAINFORM.FINC_TRX_CCY.value, netEqAmt);
        }

        if (document.MAINFORM.FINC_CCY.value != '' && document.MAINFORM.FINC_TRX_CCY.value != '' && document.MAINFORM.FINC_CCY.value != document.MAINFORM.FINC_TRX_CCY.value) {

            document.MAINFORM.FINC_CR_AMT.value = netEqAmt;
            document.MAINFORM.FINC_CNY_AMT2.value = SYS_BeFloat(netEqAmt) * SYS_BeFloat(document.MAINFORM.SELLING_CLOSE_RT.value) / 100;
            document.MAINFORM.FINC_CNY_AMT2.value = SYT_CCY_AMT('USD', document.MAINFORM.FINC_CNY_AMT2.value);
            document.MAINFORM.FINC_NET_TRX_AMT.value = netEqAmt;
            if (document.MAINFORM.FINC_CCY.value != 'USD' && document.MAINFORM.FINC_TRX_CCY.value != 'USD') {
                document.MAINFORM.FINC_CNY_AMT1.value = SYS_BeFloat(netFincAmt) * SYS_BeFloat(document.MAINFORM.FINC_CCY_CLOSE_RT.value) / 100;
                document.MAINFORM.FINC_CNY_AMT1.value = SYT_CCY_AMT('USD', document.MAINFORM.FINC_CNY_AMT1.value);
                document.MAINFORM.FINC_DR_AMT.value = netFincAmt;
                document.MAINFORM.FINC_EXCH_INCM.value = Math.abs(SYS_BeFloat(document.MAINFORM.FINC_CNY_AMT1.value) - SYS_BeFloat(document.MAINFORM.FINC_CNY_AMT2.value));
            } else {
                document.MAINFORM.FINC_CNY_AMT1.value = 0;
                document.MAINFORM.FINC_DR_AMT.value = 0;
                document.MAINFORM.FINC_EXCH_INCM.value = Math.abs(SYS_BeFloat(document.MAINFORM.FINC_CNY_AMT2.value) - SYS_BeFloat(netFincAmt));
            }
        } else if (document.MAINFORM.FINC_CCY.value != '' && document.MAINFORM.FINC_TRX_CCY.value != '' && document.MAINFORM.FINC_CCY.value == document.MAINFORM.FINC_TRX_CCY.value) {
            document.MAINFORM.FINC_DR_AMT.value = 0;
            document.MAINFORM.FINC_CNY_AMT1.value = 0;
            document.MAINFORM.FINC_CNY_AMT2.value = 0;
            document.MAINFORM.FINC_CR_AMT.value = 0;
            document.MAINFORM.FINC_EXCH_INCM.value = 0;
            document.MAINFORM.FINC_NET_TRX_AMT.value = netFincAmt;
        } else {
            document.MAINFORM.FINC_DR_AMT.value = 0;
            document.MAINFORM.FINC_CNY_AMT1.value = 0;
            document.MAINFORM.FINC_CNY_AMT2.value = 0;
            document.MAINFORM.FINC_CR_AMT.value = 0;
            document.MAINFORM.FINC_EXCH_INCM.value = 0;
            document.MAINFORM.FINC_NET_TRX_AMT.value = netFincAmt;
        }

        document.MAINFORM.FINC_NET_AMT.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) - SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value);
        document.MAINFORM.FINC_NET_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_NET_AMT.value);

        FINC_TRX_CCY = document.MAINFORM.FINC_TRX_CCY.value;
        FINC_CCY = document.MAINFORM.FINC_CCY.value;
        if (FINC_CCY.value != '' && FINC_TRX_CCY.value != '') {
            if (FINC_CCY.value != 'USD' && FINC_TRX_CCY.value != 'USD') {
                document.MAINFORM.FINC_P_EXCH_RPTNO.value = document.MAINFORM.FINC_TH_RPTN.value;
                document.MAINFORM.FINC_S_EXCH_RPTNO.value = '';
            } else if (FINC_CCY.value == 'USD' && FINC_TRX_CCY.value != 'USD') {
                document.MAINFORM.FINC_P_EXCH_RPTNO.value = document.MAINFORM.FINC_PMT_EXCH_RPTNO.value;
                document.MAINFORM.FINC_S_EXCH_RPTNO.value = '';
            } else if (FINC_CCY.value != 'USD' && FINC_TRX_CCY.value == 'USD') {
                document.MAINFORM.FINC_P_EXCH_RPTNO.value = '';
                document.MAINFORM.FINC_S_EXCH_RPTNO.value = document.MAINFORM.FINC_SETT_EXCH_RPTNO.value;
            } else {
                document.MAINFORM.FINC_P_EXCH_RPTNO.value = '';
                document.MAINFORM.FINC_S_EXCH_RPTNO.value = '';
            }
        }

        RPT_FINC_CNY_AMT();

        //FINC_NET_AMT_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FincCcyExchRate = function(trxType) {
    try {
        var exchFieldList; // Utility Auto Fix Comments
        if (trxType == '1') {
            exchFieldList = 'FINC_CCY_EXCH_RT' + ';' + 'FINC_CCY_CLOSE_RT';
            SYS_GetExchangeRate_Boc(document.MAINFORM.FINC_CCY.value, 'USD', "Selling Rate;Selling Close Rate", exchFieldList);
            GetExchCustRate('2', document.MAINFORM.FINC_CCY_EXCH_RT.value, document.MAINFORM.FINC_CCY_CLOSE_RT.value, document.MAINFORM.FINC_CCY_CUST_RT);
        } else {
            exchFieldList = 'FINC_CCY_EXCH_RT' + ';' + 'FINC_CCY_CLOSE_RT'; // Utility Auto Fix Comments
            SYS_GetExchangeRate_Boc(document.MAINFORM.FINC_CCY.value, 'USD', "Buying Rate;Buying Close Rate", exchFieldList);
            GetExchCustRate('1', document.MAINFORM.FINC_CCY_EXCH_RT.value, document.MAINFORM.FINC_CCY_CLOSE_RT.value, document.MAINFORM.FINC_CCY_CUST_RT);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FincFieldEvent = function() {
    try {
        document.MAINFORM.INT_MTHD.onchange = FLD_FFIT_INT_MTHD_onchange;
        document.MAINFORM.PRE_FINC_INT.onchange = FLD_FFIT_PRE_FINC_INT_onchange;
        document.MAINFORM.FINC_DUE_DT.onchange = FLD_FFIT_FINC_DUE_DT_onchange;
        document.MAINFORM.LIBOR_RT.onchange = FLD_FFIT_LIBOR_RT_onchange;
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FincInitValue = function(trxNo, custId, trxType) {
    try {
        var prdtCode; // Utility Auto Fix Comments
        document.MAINFORM.FINC_DECIMAL_NUM.value = findDecFromCCY(document.MAINFORM.FINC_CCY.value, 'AMT');
        document.MAINFORM.FINC_930_BUSI_TYPE.value = INTERFACE_930_TRX_CODE + '|' + INTERFACE_GL_TRX_CODE;
        document.MAINFORM.FINC_CUST_ID.value = custId;

        document.MAINFORM.FINC_TRX_NO.value = trxNo;
        document.MAINFORM.FINC_TRX_TYPE.value = trxType;
        document.MAINFORM.FINC_UNIT_CODE.value = SYS_ORI_UNIT_CODE;
        document.MAINFORM.FINC_FUNC_ID.value = SYS_ORG_FUNCTION_ID;
        document.MAINFORM.FINC_MODU_ID.value = SYS_MODULE_NAME;
        document.MAINFORM.FINC_DAYS_ORG.value = document.MAINFORM.FINC_DAYS.value;
        document.MAINFORM.FINC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        document.MAINFORM.FINC_EQ_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_TRX_CCY.value, document.MAINFORM.FINC_EQ_AMT.value);
        document.MAINFORM.FINC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        document.MAINFORM.FINC_RISK_LEVEL.value = '00';
        document.MAINFORM.FINC_DEVAL_MODE.value = '0';
        document.MAINFORM.MARGIN_RT_ORG.value = document.MAINFORM.MARGIN_RT.value;

        FincCcyExchRate(document.MAINFORM.FINC_TRX_TYPE.value);
        FINC_BASIC_DAYS();
        FINC_AMT_FINC_EQAMT();

        SYS_GetTableDataByRule_S('SSSS_SRC_Finance_FincInitValue_1', '1');

        if (EEHtml.getElementById("FINC_TYPE_DESC").value.indexOf("ADVC") >= 0) {
            EEHtml.getElementById("FINC_AC_NO").value = "";
            if (SYS_MODULE_NAME == 'EPLC') {
                document.MAINFORM.FINC_TYPE.value = EEHtml.getElementById("PRODUCT_CODE_NEGO").value;
            } else if (SYS_MODULE_NAME == 'IMCO') {
                document.MAINFORM.FINC_TYPE.value = EEHtml.getElementById("PRODUCT_CODE").value;
            } else if (SYS_MODULE_NAME == 'IPLC') {
                if (EEHtml.getElementById("PRODUCT_CODE_ACPT") != null && EEHtml.getElementById("PRODUCT_CODE_ACPT").value != '') {
                    document.MAINFORM.FINC_TYPE.value = EEHtml.getElementById("PRODUCT_CODE_ACPT").value;
                } else {
                    document.MAINFORM.FINC_TYPE.value = EEHtml.getElementById("PRODUCT_CODE").value;
                }
            }

            SYT_ChangeFldClass(EEHtml.getElementById("FINC_AC_NO"), 'M');
            EEHtml.getElementById("FINC_ADVC_BUSI_TYPE").value = INTERFACE_BANCS_BGLDR_TRX_CODE;
        } else if (EEHtml.getElementById("FINC_AC_NO").value != '') {
            EEHtml.getElementById("FINC_ADVC_BUSI_TYPE").value = INTERFACE_GL_TRX_CODE;
        }

        prdtCode = document.MAINFORM.FINC_TYPE_DESC.value;
        if (prdtCode == 'FINCEXCLRFD' || prdtCode == 'FINCEXLCRFD') {
            if (document.MAINFORM.INT_MTHD.value == '1') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO1';
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'F11';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCIMLCTYWBDF' || prdtCode == 'FINCIMCLTYWBDF' || prdtCode == 'FINCHCHKWBDF') {
            if (document.MAINFORM.INT_MTHD.value == '1') {
                alert('Please Input correct FINC_AC_TYPE!');
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'F12';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCEXLCDISC' || prdtCode == 'FINCEXCLDISC') {
            if (document.MAINFORM.INT_MTHD.value == '1') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO3';
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO4';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCEXLCPURCH' || prdtCode == 'FINCEXCLPURCH') {
            if (document.MAINFORM.INT_MTHD.value == '1') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO1';
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO2';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCGJHKRYD' || prdtCode == 'FINCGNHKRYD') {
            if (document.MAINFORM.INT_MTHD.value == '1') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO1';
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO2';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCIMLCHLD' || prdtCode == 'FINCIMCLHLD' || prdtCode == 'FINCGJHKOUREPURCH' || prdtCode == 'FINCIMGJHKHLD' || prdtCode == 'FINCIMLCPURCH' || prdtCode == 'FINCIMCLPURCH') { //7214
            if (document.MAINFORM.INT_MTHD.value == '1') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO1';
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO2';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCEXLCRXD' || prdtCode == 'FINCEXCLRXD' || prdtCode == 'FINCGJHKRXD' || prdtCode == 'FINCGNHKRXD') {
            if (document.MAINFORM.INT_MTHD.value == '1') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO1';
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO2';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCCKBLRZ' || prdtCode == 'FINCFACTEF' || prdtCode == 'FINCFACTED' || prdtCode == 'FINCFACTDCSELL' || prdtCode == 'FINCFACTDD') {
            if (document.MAINFORM.INT_MTHD.value == '1') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO1';
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO2';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCFFIT' || prdtCode == 'FINCFFITLC' || prdtCode == 'FINCFFITCL' || prdtCode == 'FINCFFITLCTRF' || prdtCode == 'FINCFFITCLTRF' || prdtCode == 'FINCFFITLCEJSC' || prdtCode == 'FINCFFITCLEJSC' || prdtCode == 'FINCFFITGNEJSC') { //7217
            if (document.MAINFORM.INT_MTHD.value == '1') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO1';
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO2';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCLCRZJHSDSY' || prdtCode == 'FINCCLRZJHSDSY' || prdtCode == 'FINCGJHKRZJHSDSY' || prdtCode == 'FINCQTRZJHSDSY' || prdtCode == 'FINCEXLCHLD' || prdtCode == 'FINCEXCLHLD' || prdtCode == 'FINCEXGJHKHLD' || prdtCode == 'FINCQTHLD' || prdtCode == 'FINCCKTS') { //7219
            if (document.MAINFORM.INT_MTHD.value == '1') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO1';
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO2';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCDSLCPURCHBUY' || prdtCode == 'FINCDSLCPURCHSELL' || prdtCode == 'FINCDELCNEGO') { //7601
            if (document.MAINFORM.INT_MTHD.value == '1') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO1';
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO2';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCIMCLOVS' || prdtCode == 'FINCIMLCOVS') {
            if (document.MAINFORM.INT_MTHD.value == '1') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO1';
            } else if (document.MAINFORM.INT_MTHD.value == '2') {
                document.MAINFORM.FINC_AC_TYPE.value = 'FO5';
            } else {
                alert('Please Input correct Int Charge Method!');
            }
        } else if (prdtCode == 'FINCIMLCADVC' || prdtCode == 'FINCIMCLADVC' || prdtCode == 'FINCEXLCADVC' || prdtCode == 'FINCEXCLADVC') {
            document.MAINFORM.FINC_AC_TYPE.value = '';
        } else {
            if (SYS_BeFloat(document.MAINFORM.FINC_AMT.value) > 0) {
                alert('Please input correct prdtCode');
            }
        }


        document.MAINFORM.FINC_DT.value = SYS_BUSI_DATE;

        if (SYS_BeFloat(document.MAINFORM.FINC_DAYS_ORG.value) != 0) {
            FINC_DUE_DT();

        } else if (document.MAINFORM.FINC_BILL_DUE_DT.value != '') {

            FINC_DUE_DT();
        } else {

            FINC_DAYS();
            PRE_FINC_INT();
        }

        if (document.MAINFORM.INT_MTHD.value == '1') {
            document.MAINFORM.FINC_PMT_DT.value = document.MAINFORM.FINC_DUE_DT.value;
        } else {
            document.MAINFORM.FINC_PMT_DT.value = SYS_BUSI_DATE;
        }
        document.MAINFORM.FINC_LAST_PMT_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.GetEndDate = function() {
    try {
        var finc_days; // Utility Auto Fix Comments
        var finc_days1; // Utility Auto Fix Comments
        finc_days = SYS_GetSubDays('FINC_DT', 'FINC_DUE_DT');
        finc_days1 = SYS_GetSubDays('FINC_DT', 'FINC_BILL_DUE_DT') + SYS_BeInt(document.MAINFORM.GRACE_DAYS.value);
        /*
	if(finc_days!=SYS_BeInt(document.MAINFORM.FINC_DAYS.value)&&SYS_BeInt(document.MAINFORM.FINC_DAYS.value)>0&&SYS_MODULE_NAME!='FFIT'){
	
	}
	
	if(document.MAINFORM.GRACE_FLG.value=='1'&&finc_days!=finc_days1&&SYS_MODULE_NAME=='FFIT'){
		
	}
	*/
        FINC_DAYS();
        PRE_FINC_INT();
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.GetFincLiborRt = function(days, ccy) {
    try {
        var prdtCode; // Utility Auto Fix Comments
        days = SYS_BeInt(days);
        ccyCUBK = ccy;
        if (days <= 0) {
            document.MAINFORM.LIBOR_RT.value = 0;
            return;
        }
        prdtCode = document.MAINFORM.FINC_TYPE_DESC.value;
        if (prdtCode != '') {
            if (days > 0 && days <= 7) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_2', '1');
            } else if (days > 7 && days <= 14) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_3', '1');
            } else if (days > 14 && days <= 30) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_4', '1');
            } else if (days > 30 && days <= 60) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_5', '1');
            } else if (days > 60 && days <= 90) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_6', '1');
            } else if (days > 90 && days <= 120) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_7', '1');

            } else if (days > 120 && days <= 150) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_8', '1');
            } else if (days > 150 && days <= 180) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_9', '1');
            } else if (days > 180 && days <= 210) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_10', '1');
            } else if (days > 210 && days <= 240) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_11', '1');
            } else if (days > 240 && days <= 270) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_12', '1');
            } else if (days > 270 && days <= 300) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_13', '1');
            } else if (days > 300 && days <= 330) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_14', '1');
            } else if (days > 330 && days <= 360) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_15', '1');
            } else if (days > 360) {
                SYS_GetTableDataByRule_S('SSSS_SRC_Finance_GetFincLiborRt_16', '1');
            }
        } else {
            document.MAINFORM.LIBOR_RT.value = 0;
        }

        if (document.MAINFORM.MARGIN_RT_ORG.value != "" && SYS_BeFloat(document.MAINFORM.MARGIN_RT_ORG.value) != 0) {
            document.MAINFORM.FINC_RT.value = SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) + SYS_BeFloat(document.MAINFORM.LIBOR_RT.value);
            if (SYS_MODULE_NAME == 'FINC') {
                document.MAINFORM.FINC_RT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.FINC_RT.value), 6);
            } else {
                document.MAINFORM.FINC_RT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.FINC_RT.value), 5);
            }
        } else if (SYS_BeFloat(document.MAINFORM.FINC_RT.value) != 0) {
            document.MAINFORM.MARGIN_RT.value = SYS_BeFloat(document.MAINFORM.FINC_RT.value) - SYS_BeFloat(document.MAINFORM.LIBOR_RT.value);
            if (SYS_MODULE_NAME == 'FINC') {
                document.MAINFORM.MARGIN_RT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.MARGIN_RT.value), 6);
            } else {
                document.MAINFORM.MARGIN_RT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.MARGIN_RT.value), 5);
            }
        }
        document.MAINFORM.FINC_RT_1ST.value = document.MAINFORM.FINC_RT.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.GetFincMarginRt = function(prdtCode, custId, branchId) {
    try {
        if (prdtCode == 'FINCFACTDD' || prdtCode == 'FINCFACTDCSELL' || prdtCode == 'FINCFACTDCBUY') {
            SYS_GetIntRate_BOC('FLOAT', prdtCode, custId, document.MAINFORM.GTS_BR_ID.value, 'MARGIN_RT');
        } else if (prdtCode == 'FINCDSLCPURCHBUY' || prdtCode == 'FINCDSLCPURCHSELL') {
            SYS_GetIntRate_BOC('DISCCNY', prdtCode, custId, document.MAINFORM.GTS_BR_ID.value, 'MARGIN_RT');
        } else {
            SYS_GetIntRate_BOC('MARGIN', prdtCode, custId, document.MAINFORM.GTS_BR_ID.value, 'MARGIN_RT');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.PRE_FINC_INT = function() {
    try {
        if (document.MAINFORM.INT_MTHD.value == '1') {
            FINC_MARGIN_LIBOR_INT();
            EEHtml.getElementById('RCVA_INT').value = 0;
            FINC_NET_AMT();
        } else {
            FINC_MARGIN_RCVA_INT();
            document.MAINFORM.PRE_FINC_INT.value = 0;
            document.MAINFORM.PRE_FINC_LIBOR.value = 0;
            document.MAINFORM.PRE_FINC_MARGIN.value = 0;
            document.MAINFORM.FINC_PAY_INT.value = 0;
            document.MAINFORM.FINC_PAY_LIBOR.value = 0;
            document.MAINFORM.FINC_PAY_MARGIN.value = 0;
            FINC_NET_AMT();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.RPT_FINC_CNY_AMT = function() {
    try {
        var RPT_PMT_CNY_AMT; // Utility Auto Fix Comments
        document.MAINFORM.RPT_FINC_CNY_AC_NO.value = '';
        document.MAINFORM.RPT_FINC_EXCH_RT.value = 0;
        document.MAINFORM.RPT_FINC_CCY_AC_NO.value = '';
        RPT_PMT_CNY_AMT = 0;
        document.MAINFORM.RPT_FINC_CNY_AMT.value = 0;

        if (document.MAINFORM.FINC_CCY.value == 'USD' && SYS_BeFloat(document.MAINFORM.FINC_AMT.value) > 0) {
            document.MAINFORM.RPT_FINC_CNY_AMT.value = SYS_BeFloat(document.MAINFORM.FINC_NET_TRX_AMT.value);
            document.MAINFORM.RPT_FINC_CNY_AC_NO.value = document.MAINFORM.FINC_AC_NO.value;
            document.MAINFORM.RPT_FINC_EXCH_RT.value = document.MAINFORM.BUYING_CUST_RT.value;
        } else {
            document.MAINFORM.RPT_FINC_CNY_AMT.value = 0;
        }

        if (document.MAINFORM.FINC_CCY.value != 'USD' && SYS_BeFloat(document.MAINFORM.FINC_AMT.value) > 0) {
            document.MAINFORM.RPT_FINC_CCY_AC_NO.value = document.MAINFORM.FINC_AC_NO.value;
        }
        document.MAINFORM.RPT_FINC_IN_CHG.value = SYS_BeFloat(document.MAINFORM.FINC_EQ_AMT.value) - SYS_BeFloat(document.MAINFORM.FINC_NET_TRX_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}

csLbiCompProto.FLD_SSSS_FINC_NET_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FINC_DUE_DT_PRE.value = document.MAINFORM.FINC_DUE_DT.value;

        if (SYS_MODULE_NAME == 'IMLC') {
            SYF_IMLC_FINC_AMT_onchange();
        } else if (SYS_MODULE_NAME == 'LOFG') {
            SYF_LOFG_FINC_AMT_onchange();
        } else if (SYS_MODULE_NAME == 'EXLC') {
            SYF_EXLC_FINC_AMT_onchange();
        } else if (SYS_MODULE_NAME == 'FFIT') {
            SYF_FFIT_FINC_AMT_onchange();
        } else if (SYS_MODULE_NAME == 'EXCL') {
            SYF_EXCL_FINC_AMT_onchange();
        } else if (SYS_MODULE_NAME == 'IMCL') {
            SYF_IMCL_FINC_AMT_onchange();
        } else if (SYS_MODULE_NAME == 'FINC') {
            SYF_FINC_FINC_AMT_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Finance.js", e);
    }
}