"path:SCRN/Library/FFIT/Exch_Rate.lbi";

var csLbiCompProto = {};

var custIdCUBK = '';

csLbiCompProto.CustExchRt = function() {
    try {
        SELLING_FAV_RT_onchange();
        BUYING_FAV_RT_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_Exch_Rate.js", e);
    }
}

csLbiCompProto.CustFavRate_onchange = function() {
    try {
        CustExchRt();
    } catch (e) {
        DisExcpt("SSSS_SRC_Exch_Rate.js", e);
    }
}

csLbiCompProto.ExchRate_FIX_PENDING = function() {
    try {
        var CUST_CHG_ACNO; // Utility Auto Fix Comments
        var FINC_TRX_FLG; // Utility Auto Fix Comments
        var MRGN_CUST_AC_NO; // Utility Auto Fix Comments
        var PMT_CUST_AC_NO; // Utility Auto Fix Comments
        var SETT_CUST_AC_NO; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'EC') {
            SETT_CUST_AC_NO = EEHtml.getElementById('SETT_CUST_AC_NO1');
            PMT_CUST_AC_NO = EEHtml.getElementById('PMT_CUST_AC_NO1');
            MRGN_CUST_AC_NO = EEHtml.getElementById('MRGN_CUST_AC_NO1');
            FINC_TRX_FLG = EEHtml.getElementById('FINC_TRX_FLG');
            CUST_CHG_ACNO = EEHtml.getElementById('CUST_CHG_ACNO');
            if (FINC_TRX_FLG != null && (FINC_TRX_FLG.value == 'FINC' || FINC_TRX_FLG.value == 'FINCMULTIPAY')) {
                FINC_EXCH_FIX_PENDING();
            }
            if (SETT_CUST_AC_NO != null) {
                SETT_EXCH_FIX_PENDING();
            }
            if (PMT_CUST_AC_NO != null) {
                PMT_EXCH_FIX_PENDING();
            }
            if (MRGN_CUST_AC_NO != null) {
                MRGN_EXCH_FIX_PENDING();
            }
            /*
		if(CUST_CHG_ACNO!=null)
		{
                           //RCV_DLY_AMT_EC();
		}
         */
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Exch_Rate.js", e);
    }
}

csLbiCompProto.ExchRt = function(ccy) {
    try {
        SYS_GetExchangeRate_Boc(ccy, 'USD', "Buying Rate;Buying Close Rate;Booking Rate;Selling Close Rate;Selling Rate", "BUYING_RT;BUYING_CLOSE_RT;BOOKING_RT;SELLING_CLOSE_RT;SELLING_RT");
        SYS_GetExchangeRate_Boc('USD', 'USD', "Buying Rate;Buying Close Rate;Booking Rate;Selling Close Rate;Selling Rate", "BUYING_USRT;BUYING_CLOSE_USRT;BOOKING_USRT;SELLING_CLOSE_USRT;SELLING_USRT");
    } catch (e) {
        DisExcpt("SSSS_SRC_Exch_Rate.js", e);
    }
}

csLbiCompProto.FavExchRt = function(custId) {
    try {
        var custIdCUBK; // Utility Auto Fix Comments
        custIdCUBK = custId;
        SYS_GetTableDataByRule_S('SSSS_SRC_Exch_Rate_FavExchRt_0', '1');
        if (document.MAINFORM.BUYING_FAV_RT.value == '') {
            document.MAINFORM.BUYING_FAV_RT.value = 0;
        }
        if (document.MAINFORM.SELLING_FAV_RT.value == '') {
            document.MAINFORM.SELLING_FAV_RT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Exch_Rate.js", e);
    }
}

csLbiCompProto.GetExchCustRate = function(buySellFlag, exchRate, closeRate, custRateField) {
    try {
        var amt; // Utility Auto Fix Comments
        if (buySellFlag == '1') {
            custRateField.value = SYS_BeFloat(exchRate) + SYS_BeFloat(document.MAINFORM.BUYING_FAV_RT.value) * (SYS_BeFloat(closeRate) - SYS_BeFloat(exchRate)) / 100;
            amt = SYS_BeFloat(custRateField.value);
            custRateField.value = DecimalFormat(amt, 4);
            custRateField.value = custRateField.value.replace(',', '');

        } else if (buySellFlag == '2') {
            custRateField.value = SYS_BeFloat(exchRate) - SYS_BeFloat(document.MAINFORM.SELLING_FAV_RT.value) * (SYS_BeFloat(exchRate) - SYS_BeFloat(closeRate)) / 100;

            amt = SYS_BeFloat(custRateField.value); // Utility Auto Fix Comments
            custRateField.value = DecimalFormat(amt, 4);
            custRateField.value = custRateField.value.replace(',', '');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Exch_Rate.js", e);
    }
}

csLbiCompProto.GetTrxCcyExchRt = function(ccy, custId) {
    try {
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return;
        }

        if (ccy != '') {
            ExchRt(ccy);
        }
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'MM' || SYS_FUNCTION_TYPE == 'KP' || (SYS_FUNCTION_TYPE == 'EC' && exchRateOnLoadFlag == false)) {
            FavExchRt(custId);
        }

        GetExchCustRate('1', document.MAINFORM.BUYING_RT.value, document.MAINFORM.BUYING_CLOSE_RT.value, document.MAINFORM.BUYING_CUST_RT);
        GetExchCustRate('2', document.MAINFORM.SELLING_RT.value, document.MAINFORM.SELLING_CLOSE_RT.value, document.MAINFORM.SELLING_CUST_RT);
        GetExchCustRate('1', document.MAINFORM.BUYING_USRT.value, document.MAINFORM.BUYING_CLOSE_USRT.value, document.MAINFORM.BUYING_CUST_USRT);
        GetExchCustRate('2', document.MAINFORM.SELLING_USRT.value, document.MAINFORM.SELLING_CLOSE_USRT.value, document.MAINFORM.SELLING_CUST_USRT);

        if ((SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'MM' || SYS_FUNCTION_TYPE == 'EC') && exchRateOnLoadFlag == false) {

            CustExchRt();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Exch_Rate.js", e);
    }
}

csLbiCompProto.GetTrxCcyExchRtSingle = function(ccy, custId) {
    try {
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return;
        }

        if (ccy != '') {
            ExchRt(ccy);
        }

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'MM' || SYS_FUNCTION_TYPE == 'KP' || (SYS_FUNCTION_TYPE == 'EC' && exchRateOnLoadFlag == false)) {
            FavExchRt(custId);
        }

        GetExchCustRate('1', document.MAINFORM.BUYING_RT.value, document.MAINFORM.BUYING_CLOSE_RT.value, document.MAINFORM.BUYING_CUST_RT);
        GetExchCustRate('2', document.MAINFORM.SELLING_RT.value, document.MAINFORM.SELLING_CLOSE_RT.value, document.MAINFORM.SELLING_CUST_RT);
        GetExchCustRate('1', document.MAINFORM.BUYING_USRT.value, document.MAINFORM.BUYING_CLOSE_USRT.value, document.MAINFORM.BUYING_CUST_USRT);
        GetExchCustRate('2', document.MAINFORM.SELLING_USRT.value, document.MAINFORM.SELLING_CLOSE_USRT.value, document.MAINFORM.SELLING_CUST_USRT);
    } catch (e) {
        DisExcpt("SSSS_SRC_Exch_Rate.js", e);
    }
}