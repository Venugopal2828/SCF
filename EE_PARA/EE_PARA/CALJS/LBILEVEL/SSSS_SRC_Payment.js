"path:SCRN/Library/FFIT/Payment.lbi";

var csLbiCompProto = {};

var BUSI_TYPE_GL = 'GL';
var FILTER_FUN_ID=new Array;
var aa = '';
var bb = '';
var cc = '';
var pmtCustCcySwitch = '';
var pmtSecdCustAcno=new Array;

csLbiCompProto.GetVoucherDesc_Pmt = function(counterBank, counterCustomer, clerkName) {
    try {
        for (i = 1; i <= 5; i++) {
            PMT_VCH_DESC = EEHtml.getElementById("PMT_VCH_DESC" + i);
            PMT_CUST_NM = EEHtml.getElementById("PMT_CUST_NM" + i);
            if (PMT_CUST_NM.value != "") {
                PMT_VCH_DESC.value = PMT_CUST_NM.value + "|" + document.MAINFORM.PMT_DCLR_NO.value + "|";
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PMT_ConfirmCall = function(counterBank, counterCustomer, clerkName) {
    try {
        var NET_DR_CCY; // Utility Auto Fix Comments
        var PMT_BUSI_TYPE; // Utility Auto Fix Comments
        var PMT_SETT_EXCH_RPTN; // Utility Auto Fix Comments
        var PmtAcAmt; // Utility Auto Fix Comments
        var PmtAcCcy; // Utility Auto Fix Comments
        var PmtAcNo_S; // Utility Auto Fix Comments
        var PmtExchPrtNo; // Utility Auto Fix Comments
        aa = counterBank;
        bb = counterCustomer;
        cc = clerkName;

        if (SYS_MODULE_NAME != 'FINC') {
            PmtInitCnty();
        }
        for (i = 1; i <= 5; i++) {
            PmtExchPrtNo = EEHtml.getElementById('PMT_EXCH_RPTNO' + i);
            PMT_SETT_EXCH_RPTN = EEHtml.getElementById('PMT_SETT_EXCH_RPTNO' + i);
            NET_DR_CCY = document.MAINFORM.NET_DR_CCY;
            PmtAcCcy = EEHtml.getElementById('PMT_AC_CCY' + i);
            PmtAcAmt = EEHtml.getElementById('PMT_AC_AMT' + i);
            PmtAcNo_S = EEHtml.getElementById('PMT_CUST_AC_NO' + i + '_S');

            if (PmtAcCcy.value == "" || NET_DR_CCY.value == "") {
                continue;
            }

            PMT_BUSI_TYPE = EEHtml.getElementById("PMT_BUSI_TYPE" + i);
            if (SYS_BeFloat(PmtAcAmt.value) == 0) {
                PMT_BUSI_TYPE.value = '';
            } else if (PmtAcNo_S.value == BUSI_TYPE_GL) {
                PMT_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
            } else if (EEHtml.getElementById("PMT_VALUE_DT").value < SYS_BUSI_DATE && PmtAcCcy.value != 'USD' && SYS_MODULE_NAME != 'FINC') {
                PMT_BUSI_TYPE.value = INTERFACE_BANCS_RETDT_DR_TRX_CODE + '|' + INTERFACE_BANCS_AC_TRX_CODE;
            } else if (EEHtml.getElementById("PMT_VALUE_DT").value < SYS_BUSI_DATE && PmtAcCcy.value != 'USD' && SYS_MODULE_NAME == 'FINC') {
                PMT_BUSI_TYPE.value = INTERFACE_BANCS_RETDT_DR_TRX_CODE;
            } else if (EEHtml.getElementById("PMT_VALUE_DT").value < SYS_BUSI_DATE && PmtAcCcy.value == 'USD') {
                PMT_BUSI_TYPE.value = INTERFACE_BANCS_RETDT_DR_TRX_CODE;
            } else if (PmtAcNo_S.value != '' && PmtAcNo_S.value != BUSI_TYPE_GL && PmtAcCcy.value == 'USD') {
                PMT_BUSI_TYPE.value = INTERFACE_BANCS_DR_TRX_CODE;
            } else if (PmtAcNo_S.value != '' && PmtAcNo_S.value != BUSI_TYPE_GL && PmtAcCcy.value != 'USD' && PmtAcCcy.value != '' && SYS_MODULE_NAME != 'FINC') {
                PMT_BUSI_TYPE.value = INTERFACE_BANCS_DR_TRX_CODE + '|' + INTERFACE_BANCS_AC_TRX_CODE;
            } else if (PmtAcNo_S.value != '' && PmtAcNo_S.value != BUSI_TYPE_GL && PmtAcCcy.value != 'USD' && PmtAcCcy.value != '' && SYS_MODULE_NAME == 'FINC') {
                PMT_BUSI_TYPE.value = INTERFACE_BANCS_DR_TRX_CODE;
            } else {
                PMT_BUSI_TYPE.value = '';
            }

            if (PmtAcCcy.value == 'USD' && NET_DR_CCY.value != 'USD') {
                PMT_SETT_EXCH_RPTN.value = "";
                PmtExchPrtNo.value = document.MAINFORM.PMT_EXCH_RPTNO.value;
            } else if (PmtAcCcy.value != 'USD' && NET_DR_CCY.value == 'USD') {
                PmtExchPrtNo.value = "";
                PMT_SETT_EXCH_RPTN.value = document.MAINFORM.PMT_SETT_EXCH_RPTNO.value;
            } else if (PmtAcCcy.value != 'USD' && NET_DR_CCY.value != 'USD') {
                PMT_SETT_EXCH_RPTN.value = "";
                PmtExchPrtNo.value = document.MAINFORM.PMT_TH_RPTN.value;
            } else {
                PMT_SETT_EXCH_RPTN.value = "";
                PmtExchPrtNo.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PMT_EQ_AMT1_onchange = function() {
    try {
        var amtNumber; // Utility Auto Fix Comments
        var custAmt; // Utility Auto Fix Comments
        var custCcy; // Utility Auto Fix Comments
        var custCloseRate; // Utility Auto Fix Comments
        var custCustRate; // Utility Auto Fix Comments
        var custEqAmt; // Utility Auto Fix Comments
        var custExchRate; // Utility Auto Fix Comments
        var custNonExchComm; // Utility Auto Fix Comments
        var pmtCnyAmt; // Utility Auto Fix Comments
        var pmtCnyAmt1; // Utility Auto Fix Comments
        var pmtCnyAmt2; // Utility Auto Fix Comments
        var pmtCrAmt; // Utility Auto Fix Comments
        var pmtDrAmt; // Utility Auto Fix Comments
        var pmtbusitype; // Utility Auto Fix Comments
        document.MAINFORM.PMT_EQ_AMT1.value = SYT_CCY_AMT(document.MAINFORM.NET_DR_CCY.value, document.MAINFORM.PMT_EQ_AMT1.value);

        amtNumber = '1';
        custCcy = EEHtml.getElementById('PMT_AC_CCY' + amtNumber);
        custAmt = EEHtml.getElementById('PMT_AC_AMT' + amtNumber);
        custEqAmt = EEHtml.getElementById('PMT_EQ_AMT' + amtNumber);
        pmtDrAmt = EEHtml.getElementById('PMT_DR_AMT' + amtNumber);
        pmtCnyAmt = EEHtml.getElementById('PMT_CNY_AMT' + amtNumber);

        pmtCnyAmt1 = EEHtml.getElementById('PMT_CNY_AMT1' + amtNumber);
        pmtCnyAmt2 = EEHtml.getElementById('PMT_CNY_AMT2' + amtNumber);

        pmtCrAmt = EEHtml.getElementById('PMT_CR_AMT' + amtNumber);
        custExchRate = EEHtml.getElementById('PMT_EXCH_RT' + amtNumber);
        custCloseRate = EEHtml.getElementById('PMT_CLOSE_RT' + amtNumber);
        custCustRate = EEHtml.getElementById('PMT_CUST_RT' + amtNumber);
        custNonExchComm = EEHtml.getElementById('PMT_EXCH_COMM' + amtNumber);
        pmtbusitype = EEHtml.getElementById('PMT_BUSI_TYPE' + amtNumber);

        if (custCcy.value != '' && document.MAINFORM.NET_DR_CCY.value != '' && custCcy.value != document.MAINFORM.NET_DR_CCY.value) {
            custAmt.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CUST_RT.value) / SYS_BeFloat(custCustRate.value);
            custAmt.value = SYT_CCY_AMT(custCcy.value, custAmt.value);
            custNonExchComm.value = 0;

            if (custCcy.value != 'USD' && document.MAINFORM.NET_DR_CCY.value != 'USD') {
                pmtCnyAmt.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CUST_RT.value) / 100;
                pmtCnyAmt.value = SYT_CCY_AMT('USD', pmtCnyAmt.value);

                pmtCnyAmt1.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CUST_RT.value) / SYS_BeFloat(custCustRate.value) * SYS_BeFloat(custCloseRate.value) / 100;
                pmtCnyAmt1.value = SYT_CCY_AMT('USD', pmtCnyAmt1.value);
                pmtCnyAmt2.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CLOSE_RT.value) / 100;
                pmtCnyAmt2.value = SYT_CCY_AMT('USD', pmtCnyAmt2.value);
                pmtDrAmt.value = custAmt.value;
                pmtCrAmt.value = custEqAmt.value;

            } else if (custCcy.value != 'USD' && document.MAINFORM.NET_DR_CCY.value == 'USD') {
                pmtDrAmt.value = custAmt.value;
                pmtCnyAmt1.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CUST_RT.value) / SYS_BeFloat(custCustRate.value) * SYS_BeFloat(custCloseRate.value) / 100;
                pmtCnyAmt1.value = SYT_CCY_AMT('USD', pmtCnyAmt1.value);
                pmtCrAmt.value = 0;
                pmtCnyAmt2.value = 0;
            } else {
                pmtCnyAmt2.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CLOSE_RT.value) / 100;
                pmtCnyAmt2.value = SYT_CCY_AMT('USD', pmtCnyAmt2.value);
                pmtCnyAmt.value = 0;
                pmtCnyAmt1.value = 0;
                pmtDrAmt.value = 0;
                pmtCrAmt.value = custEqAmt.value;
            }

        } else if (custCcy.value != '' && document.MAINFORM.NET_DR_CCY.value != '' && custCcy.value == document.MAINFORM.NET_DR_CCY.value) {

            if (custCcy.value == 'USD') {
                custNonExchComm.value = 0;
            } else {
                custNonExchComm.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NON_EXCH_RT.value) / 1000;
            }

            custAmt.value = SYS_BeFloat(custEqAmt.value) - SYS_BeFloat(custNonExchComm.value);
            custAmt.value = SYT_CCY_AMT(custCcy.value, custAmt.value);
            pmtDrAmt.value = 0;
            pmtCnyAmt.value = 0;
            pmtCnyAmt1.value = 0;
            pmtCnyAmt2.value = 0;
            pmtCrAmt.value = 0;
        } else {
            custAmt.value = 0;
            custNonExchComm.value = 0;
            pmtDrAmt.value = 0;
            pmtCnyAmt.value = 0;
            pmtCnyAmt1.value = 0;
            pmtCnyAmt2.value = 0;
            pmtCrAmt.value = 0;
        }

        if (document.MAINFORM.PMT_CUST_AC_NO1_S.value != '' && document.MAINFORM.PMT_CUST_AC_NO1_S.value != BUSI_TYPE_GL && custCcy.value == 'USD') {
            pmtbusitype.value = INTERFACE_BANCS_DR_TRX_CODE;
        } else if (document.MAINFORM.PMT_CUST_AC_NO1_S.value != '' && document.MAINFORM.PMT_CUST_AC_NO1_S.value != BUSI_TYPE_GL && custCcy.value != 'USD' && custCcy.value != '' && SYS_MODULE_NAME != 'FINC') {
            pmtbusitype.value = INTERFACE_BANCS_DR_TRX_CODE + '|' + INTERFACE_BANCS_AC_TRX_CODE;
        } else if (document.MAINFORM.PMT_CUST_AC_NO1_S.value != '' && document.MAINFORM.PMT_CUST_AC_NO1_S.value != BUSI_TYPE_GL && custCcy.value != 'USD' && custCcy.value != '' && SYS_MODULE_NAME == 'FINC') {
            pmtbusitype.value = INTERFACE_BANCS_DR_TRX_CODE;
        } else if (document.MAINFORM.PMT_CUST_AC_NO1_S.value == BUSI_TYPE_GL) {
            pmtbusitype.value = INTERFACE_GL_TRX_CODE;
        } else {
            pmtbusitype.value = '';
        }


        RPT_PMT_CNY_AMT();

        PaymentExchIncm(amtNumber);
        PaymentNonExchComm();
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PMT_EQ_AMT_onchange = function(fieldName) {
    try {
        var PMT_EQ_AMT; // Utility Auto Fix Comments
        var amtNumber; // Utility Auto Fix Comments
        var custAmt; // Utility Auto Fix Comments
        var custCcy; // Utility Auto Fix Comments
        var custCloseRate; // Utility Auto Fix Comments
        var custCustRate; // Utility Auto Fix Comments
        var custEqAmt; // Utility Auto Fix Comments
        var custExchRate; // Utility Auto Fix Comments
        var custNonExchComm; // Utility Auto Fix Comments
        var custacno; // Utility Auto Fix Comments
        var custacno_s; // Utility Auto Fix Comments
        var eqAmt1; // Utility Auto Fix Comments
        var fieldNameObject; // Utility Auto Fix Comments
        var pmtCnyAmt; // Utility Auto Fix Comments
        var pmtCnyAmt1; // Utility Auto Fix Comments
        var pmtCnyAmt2; // Utility Auto Fix Comments
        var pmtCrAmt; // Utility Auto Fix Comments
        var pmtDrAmt; // Utility Auto Fix Comments
        var pmtbusitype; // Utility Auto Fix Comments
        var ttlPmtEqAmt; // Utility Auto Fix Comments
        amtNumber = SYS_BeFloat(fieldName.substr(10, 1));

        fieldNameObject = EEHtml.getElementById('PMT_EQ_AMT' + amtNumber);

        fieldNameObject.value = SYT_CCY_AMT(document.MAINFORM.NET_DR_CCY.value, fieldNameObject.value);

        eqAmt1 = SYS_BeFloat(document.MAINFORM.NET_DR_AMT.value);

        ttlPmtEqAmt = 0;

        for (i = 2; i <= 5; i++) {
            PMT_EQ_AMT = EEHtml.getElementById('PMT_EQ_AMT' + i);
            PMT_EQ_AMT.className = 'AMT_O';
            PMT_EQ_AMT.readOnly = false;
            ttlPmtEqAmt = ttlPmtEqAmt + SYS_BeFloat(PMT_EQ_AMT.value);

        }
        eqAmt1 = eqAmt1 - ttlPmtEqAmt;

        if (eqAmt1 < 0) {
            alert('The EQ amount1 is less than 0,please reduce other cr amount of other acno!');
            fieldNameObject.value = SYT_CCY_AMT(document.MAINFORM.NET_DR_CCY.value, 0);
        }
        eqAmt1 = SYS_BeFloat(document.MAINFORM.NET_DR_AMT.value);
        for (i = 2; i < 6; i++) {
            PMT_EQ_AMT = EEHtml.getElementById('PMT_EQ_AMT' + i); // Utility Auto Fix Comments
            PMT_EQ_AMT.className = 'AMT_O';
            eqAmt1 -= SYS_BeFloat(PMT_EQ_AMT.value);
        }
        document.MAINFORM.PMT_EQ_AMT1.value = SYT_CCY_AMT(document.MAINFORM.NET_DR_CCY.value, eqAmt1);
        custCcy = EEHtml.getElementById('PMT_AC_CCY' + amtNumber);
        custAmt = EEHtml.getElementById('PMT_AC_AMT' + amtNumber);
        custEqAmt = EEHtml.getElementById('PMT_EQ_AMT' + amtNumber);
        pmtDrAmt = EEHtml.getElementById('PMT_DR_AMT' + amtNumber);
        pmtCnyAmt = EEHtml.getElementById('PMT_CNY_AMT' + amtNumber);

        pmtCnyAmt1 = EEHtml.getElementById('PMT_CNY_AMT1' + amtNumber);
        pmtCnyAmt2 = EEHtml.getElementById('PMT_CNY_AMT2' + amtNumber);

        pmtCrAmt = EEHtml.getElementById('PMT_CR_AMT' + amtNumber);
        custExchRate = EEHtml.getElementById('PMT_EXCH_RT' + amtNumber);
        custCloseRate = EEHtml.getElementById('PMT_CLOSE_RT' + amtNumber);
        custCustRate = EEHtml.getElementById('PMT_CUST_RT' + amtNumber);
        custNonExchComm = EEHtml.getElementById('PMT_EXCH_COMM' + amtNumber);
        custacno = EEHtml.getElementById('PMT_CUST_AC_NO' + amtNumber);
        custacno_s = EEHtml.getElementById('PMT_CUST_AC_NO' + amtNumber + '_S');

        pmtbusitype = EEHtml.getElementById('PMT_BUSI_TYPE' + amtNumber);
        if (custCcy.value != '' && document.MAINFORM.NET_DR_CCY.value != '' && custCcy.value != document.MAINFORM.NET_DR_CCY.value) {
            custAmt.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CUST_RT.value) / SYS_BeFloat(custCustRate.value);
            custAmt.value = SYT_CCY_AMT(custCcy.value, custAmt.value);
            custNonExchComm.value = 0;

            if (custCcy.value != 'USD' && document.MAINFORM.NET_DR_CCY.value != 'USD') {
                pmtCnyAmt.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CUST_RT.value) / 100;
                pmtCnyAmt.value = SYT_CCY_AMT('USD', pmtCnyAmt.value);
                pmtCnyAmt1.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CUST_RT.value) / SYS_BeFloat(custCustRate.value) * SYS_BeFloat(custCloseRate.value) / 100;
                pmtCnyAmt1.value = SYT_CCY_AMT('USD', pmtCnyAmt1.value);
                pmtCnyAmt2.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CLOSE_RT.value) / 100;
                pmtCnyAmt2.value = SYT_CCY_AMT('USD', pmtCnyAmt2.value);
                pmtCrAmt.value = custEqAmt.value;
                pmtDrAmt.value = custAmt.value;

            } else if (custCcy.value != 'USD' && document.MAINFORM.NET_DR_CCY.value == 'USD') {
                pmtDrAmt.value = custAmt.value;
                pmtCnyAmt1.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CUST_RT.value) / SYS_BeFloat(custCustRate.value) * SYS_BeFloat(custCloseRate.value) / 100;
                pmtCnyAmt1.value = SYT_CCY_AMT('USD', pmtCnyAmt1.value);
                pmtCrAmt.value = 0;
                pmtCnyAmt2.value = 0;
            } else {
                pmtCnyAmt.value = 0;
                pmtCnyAmt1.value = 0;
                pmtCnyAmt2.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NET_CLOSE_RT.value) / 100;
                pmtCnyAmt2.value = SYT_CCY_AMT('USD', pmtCnyAmt2.value);
                pmtDrAmt.value = 0;
                pmtCrAmt.value = custEqAmt.value;
            }

        } else if (custCcy.value != '' && document.MAINFORM.NET_DR_CCY.value != '' && custCcy.value == document.MAINFORM.NET_DR_CCY.value) {

            if (custCcy.value == 'USD') {
                custNonExchComm.value = 0;
            } else {
                custNonExchComm.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.PMT_NON_EXCH_RT.value) / 1000;
            }

            custAmt.value = SYS_BeFloat(custEqAmt.value) - SYS_BeFloat(custNonExchComm.value);
            custAmt.value = SYT_CCY_AMT(custCcy.value, custAmt.value);
            pmtDrAmt.value = 0;
            pmtCnyAmt.value = 0;
            pmtCnyAmt1.value = 0;
            pmtCnyAmt2.value = 0;
            pmtCrAmt.value = 0;
        } else {
            custAmt.value = 0;
            custNonExchComm.value = 0;
            pmtDrAmt.value = 0;
            pmtCnyAmt.value = 0;
            pmtCnyAmt1.value = 0;
            pmtCnyAmt2.value = 0;
            pmtCrAmt.value = 0;
        }
        if (custacno_s.value != '' && custacno_s.value != BUSI_TYPE_GL && custCcy.value == 'USD') {
            pmtbusitype.value = INTERFACE_BANCS_DR_TRX_CODE;
        } else if (custacno_s.value != '' && custacno_s.value != BUSI_TYPE_GL && custCcy.value != 'USD' && custCcy.value != '' && SYS_MODULE_NAME != 'FINC') {
            pmtbusitype.value = INTERFACE_BANCS_DR_TRX_CODE + '|' + INTERFACE_BANCS_AC_TRX_CODE;
        } else if (custacno_s.value != '' && custacno_s.value != BUSI_TYPE_GL && custCcy.value != 'USD' && custCcy.value != '' && SYS_MODULE_NAME == 'FINC') {
            pmtbusitype.value = INTERFACE_BANCS_DR_TRX_CODE;
        } else if (custacno_s.value == BUSI_TYPE_GL) {
            pmtbusitype.value = INTERFACE_GL_TRX_CODE;
        } else {
            pmtbusitype.value = '';
        }
        PaymentExchIncm(amtNumber);
        PMT_EQ_AMT1_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PMT_EXCH_FAV_RT_onchange = function() {
    try {
        var acnoFieldNameObject; // Utility Auto Fix Comments
        var ccyFieldNameObject; // Utility Auto Fix Comments
        var closeRateObject; // Utility Auto Fix Comments
        var custEqAmtObject; // Utility Auto Fix Comments
        var custRateObject; // Utility Auto Fix Comments
        var exchRateObject; // Utility Auto Fix Comments
        if (document.MAINFORM.NET_DR_CCY.value != '') {
            GetExchCustRate('2', document.MAINFORM.PMT_NET_EXCH_RT.value, document.MAINFORM.PMT_NET_CLOSE_RT.value, document.MAINFORM.PMT_NET_CUST_RT);
        }

        for (PMT_times = 1; PMT_times <= 5; PMT_times++) {

            acnoFieldNameObject = EEHtml.getElementById('PMT_CUST_AC_NO' + PMT_times);
            ccyFieldNameObject = EEHtml.getElementById('PMT_AC_CCY' + PMT_times);

            exchRateObject = EEHtml.getElementById('PMT_EXCH_RT' + PMT_times);
            closeRateObject = EEHtml.getElementById('PMT_CLOSE_RT' + PMT_times);
            custRateObject = EEHtml.getElementById('PMT_CUST_RT' + PMT_times);
            custEqAmtObject = EEHtml.getElementById('PMT_EQ_AMT' + PMT_times);

            if (PMT_times == 1 && ccyFieldNameObject.value != '') {
                GetExchCustRate('1', exchRateObject.value, closeRateObject.value, custRateObject);
                PMT_EQ_AMT1_onchange();
            } else if (ccyFieldNameObject.value != '') {
                GetExchCustRate('1', exchRateObject.value, closeRateObject.value, custRateObject);
                PMT_EQ_AMT_onchange(custEqAmtObject.name);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PMT_EXCH_FIX_PENDING = function() {
    try {
        var acnoFieldNameObject; // Utility Auto Fix Comments
        var ccyFieldNameObject; // Utility Auto Fix Comments
        var closeRateObject; // Utility Auto Fix Comments
        var custEqAmtObject; // Utility Auto Fix Comments
        var custRateObject; // Utility Auto Fix Comments
        var exchFieldList; // Utility Auto Fix Comments
        var exchRateObject; // Utility Auto Fix Comments
        var rptFlag; // Utility Auto Fix Comments
        rptFlag = false;
        if (document.MAINFORM.NET_DR_CCY.value != '') {
            exchFieldList = 'PMT_NET_EXCH_RT' + ';' + 'PMT_NET_CLOSE_RT';
            SYS_GetExchangeRate_Boc(document.MAINFORM.NET_DR_CCY.value, 'USD', "Selling Rate;Selling Close Rate", exchFieldList);
            GetExchCustRate('2', document.MAINFORM.PMT_NET_EXCH_RT.value, document.MAINFORM.PMT_NET_CLOSE_RT.value, document.MAINFORM.PMT_NET_CUST_RT);
        }
        for (PMT_times = 1; PMT_times <= 5; PMT_times++) {

            acnoFieldNameObject = EEHtml.getElementById('PMT_CUST_AC_NO' + PMT_times);
            ccyFieldNameObject = EEHtml.getElementById('PMT_AC_CCY' + PMT_times);

            exchRateObject = EEHtml.getElementById('PMT_EXCH_RT' + PMT_times);
            closeRateObject = EEHtml.getElementById('PMT_CLOSE_RT' + PMT_times);
            custRateObject = EEHtml.getElementById('PMT_CUST_RT' + PMT_times);
            custEqAmtObject = EEHtml.getElementById('PMT_EQ_AMT' + PMT_times);
            if (PMT_times == 1 && ccyFieldNameObject.value != '') {
                rptFlag = true;
                exchFieldList = exchRateObject.name + ';' + closeRateObject.name; // Utility Auto Fix Comments
                SYS_GetExchangeRate_Boc(ccyFieldNameObject.value, 'USD', "Buying Rate;Buying Close Rate", exchFieldList);

                GetExchCustRate('1', exchRateObject.value, closeRateObject.value, custRateObject);
                PMT_EQ_AMT1_onchange();
            } else if (ccyFieldNameObject.value != '') {
                rptFlag = true;
                exchFieldList = exchRateObject.name + ';' + closeRateObject.name; // Utility Auto Fix Comments
                SYS_GetExchangeRate_Boc(ccyFieldNameObject.value, 'USD', "Buying Rate;Buying Close Rate", exchFieldList);

                GetExchCustRate('1', exchRateObject.value, closeRateObject.value, custRateObject);
                PMT_EQ_AMT_onchange(custEqAmtObject.name);
            }
        }
        if (!rptFlag) {
            PMT_PAGE_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PMT_NON_EXCH_RT_onchange = function() {
    try {
        PMT_EQ_AMT1_onchange();
        PMT_EQ_AMT_onchange('PMT_EQ_AMT2');
        PMT_EQ_AMT_onchange('PMT_EQ_AMT3');
        PMT_EQ_AMT_onchange('PMT_EQ_AMT4');
        PMT_EQ_AMT_onchange('PMT_EQ_AMT5');
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PMT_PAGE_onchange = function() {
    try {
        if (SYS_MODULE_NAME == 'IMLC') {
            SYF_IMLC_PMT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'LOFG') {
            SYF_LOFG_PMT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'EXLC') {
            SYF_EXLC_PMT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'FFIT') {
            SYF_FFIT_PMT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'EXCL') {
            SYF_EXCL_PMT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'IMCL') {
            SYF_IMCL_PMT_PAGE_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PMT_PRTNO_onclick = function(fieldvalue) {
    try {
        var prtno; // Utility Auto Fix Comments
        prtno = fieldvalue.substr(0, 6);
        document.MAINFORM.PMT_EXCH_RPTNO.value = prtno;
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PMT_SECD_ACNO_CHECK = function() {
    try {
        var acnoFlag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var pmt_cust_acno; // Utility Auto Fix Comments
        var pmt_cust_acno_o; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        for (j = 1; j <= 5; j++) { // Utility Auto Fix Comments
            pmt_cust_acno_o = EEHtml.getElementById("PMT_CUST_AC_NO" + j + "_O");
            pmt_cust_acno = EEHtml.getElementById("PMT_CUST_AC_NO" + j);
            acnoFlag = false;
            if (pmt_cust_acno && pmt_cust_acno_o && pmt_cust_acno.value != "") {
                for (i = 0; i < pmt_cust_acno_o.length; i++) {
                    temp = pmt_cust_acno_o.options[i].value.split(' ');
                    if (temp[1] != null && pmt_cust_acno.value == temp[1]) {
                        acnoFlag = true;
                        break;
                    } else if (temp[1] == null && pmt_cust_acno.value == temp[0]) {
                        acnoFlag = true;
                        break;
                    }
                }
            } else {
                continue;
            }
            if (!acnoFlag) {
                pmt_cust_acno.select();
                alert("CUST_ID & CUST_ACNO check false! Please input again!");
                EEHtml.fireEvent(pmt_cust_acno_o, "onclick");
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PMT_SECD_CUST_ID_onchange = function() {
    try {
        var condition; // Utility Auto Fix Comments
        var isGetCustData; // Utility Auto Fix Comments
        /*
	if(document.MAINFORM.PMT_SECD_CUST_ID.value==''){
		document.MAINFORM.PMT_SECD_CUST_NM.value='';
		pmtSecdCustAcno.length=0;
		PaymentGetCustAcno(pmtCustCcySwitch);
		PMT_SECD_ACNO_CHECK();
		return true;
	}
	
	isGetCustData = SYS_Get22TableData_Boc('CUST_MASTER', "CUST_ID='" + document.MAINFORM.PMT_SECD_CUST_ID.value + "'", 'CUST_NM', 'PMT_SECD_CUST_NM');
	if(isGetCustData=='N'){
		document.MAINFORM.PMT_SECD_CUST_ID.value='';
		document.MAINFORM.PMT_SECD_CUST_NM.value='';
		pmtSecdCustAcno.length=0;
	}

	if(isGetCustData!='N'){
		pmtSecdCustAcno.length=0;
		condition="CUST_ID='"+document.MAINFORM.PMT_SECD_CUST_ID.value+"'";
		pmtSecdCustAcno=SYS_GetMultiData_Boc("ACNO_MASTER",condition,"CUST_AC_TYPE,CUST_AC_NO,CUST_AC_CCY,AC_TYPE,AC_SUB_TYPE");
		
		SECOND_PMT_ARRAY=SYS_GetMultiData_Boc("CUST_MASTER",condition,"CUST_ORGAN_ID,CUST_NM,CUST_NM_C");

		CUST_NM_ORGAN['SECOND_PMT_ORGAN']=SECOND_PMT_ARRAY[0][0];
		CUST_NM_ORGAN['SECOND_PMT_NM']=SECOND_PMT_ARRAY[0][1];
		CUST_NM_ORGAN['SECOND_PMT_NM_C']=SECOND_PMT_ARRAY[0][2];

	}
	PaymentGetCustAcno(pmtCustCcySwitch);
	PMT_SECD_ACNO_CHECK();
*/
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PMT_WHZH_TRX_CODE_CHECK = function() {
    try {
        var i; // Utility Auto Fix Comments
        for (i = 1; i <= 5; i++) {
            if (EEHtml.getElementById("PMT_BUSI_TYPE" + i) && EEHtml.getElementById("PMT_BUSI_TYPE" + i).value.indexOf(INTERFACE_BANCS_AC_TRX_CODE) >= 0 && SYS_BeFloat(EEHtml.getElementById("PMT_EQ_AMT" + i).value) > 0) {
                if (EEHtml.getElementById('WHZH_TRX_CODE').value == '') {
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PaymentCcyAmt = function(ccy, amt) {
    try {
        var PMT_AC_AMT; // Utility Auto Fix Comments
        var PMT_AC_CCY; // Utility Auto Fix Comments
        var PMT_CNY_AMT; // Utility Auto Fix Comments
        var PMT_CNY_AMT1; // Utility Auto Fix Comments
        var PMT_CNY_AMT2; // Utility Auto Fix Comments
        var PMT_CR_AMT; // Utility Auto Fix Comments
        var PMT_CUST_AC_NO; // Utility Auto Fix Comments
        var PMT_CUST_RT; // Utility Auto Fix Comments
        var PMT_DR_AMT; // Utility Auto Fix Comments
        var PMT_EQ_AMT; // Utility Auto Fix Comments
        var PMT_EXCH_COMM; // Utility Auto Fix Comments
        var PMT_EXCH_FAV; // Utility Auto Fix Comments
        var PMT_EXCH_INCM; // Utility Auto Fix Comments
        var eqAmt1; // Utility Auto Fix Comments
        var exchFieldList; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return;
        }
        if (document.MAINFORM.NET_DR_CCY.value == ccy && document.MAINFORM.NET_DR_AMT.value == SYT_CCY_AMT(ccy, amt)) {
            if ((document.MAINFORM.NET_DR_CCY.value != '') && (SYS_BeFloat(document.MAINFORM.NET_DR_AMT.value) > 0)) {
                SYT_ChangeFldClass(document.MAINFORM.PMT_CUST_AC_NO1, 'M', 'N');
                document.MAINFORM.PMT_CUST_AC_NO1.readOnly = true;
            }
            return;
        }

        document.MAINFORM.NET_DR_CCY.value = ccy;
        document.MAINFORM.NET_DR_AMT.value = SYT_CCY_AMT(ccy, amt);

        if (ccy != '') {
            exchFieldList = 'PMT_NET_EXCH_RT' + ';' + 'PMT_NET_CLOSE_RT';
            SYS_GetExchangeRate_Boc(ccy, 'USD', "Selling Rate;Selling Close Rate", exchFieldList);
            GetExchCustRate('2', document.MAINFORM.PMT_NET_EXCH_RT.value, document.MAINFORM.PMT_NET_CLOSE_RT.value, document.MAINFORM.PMT_NET_CUST_RT);
        }

        if ((document.MAINFORM.NET_DR_CCY.value != '') && (SYS_BeFloat(document.MAINFORM.NET_DR_AMT.value) > 0)) {
            SYT_ChangeFldClass(document.MAINFORM.PMT_CUST_AC_NO1, 'M', 'N');
            document.MAINFORM.PMT_CUST_AC_NO1.readOnly = true;
            eqAmt1 = SYS_BeFloat(amt);
            for (i = 2; i <= 5; i++) {
                PMT_EQ_AMT = EEHtml.getElementById('PMT_EQ_AMT' + i);
                PMT_EQ_AMT.className = 'AMT_O';
                PMT_EQ_AMT.readOnly = false;
                eqAmt1 -= SYS_BeFloat(PMT_EQ_AMT.value);
            }

            if (eqAmt1 < 0) {
                alert('The EQ amount1 is less than 0,please reduce other cr amount of other acno!');
            }

            document.MAINFORM.PMT_EQ_AMT1.value = SYT_CCY_AMT(ccy, eqAmt1);
            PMT_EQ_AMT1_onchange();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PMT_CUST_AC_NO1, 'P', 'N');
            for (i = 1; i <= 5; i++) {
                PMT_EQ_AMT = EEHtml.getElementById('PMT_EQ_AMT' + i);
                PMT_AC_CCY = EEHtml.getElementById('PMT_AC_CCY' + i);
                PMT_CUST_AC_NO = EEHtml.getElementById('PMT_CUST_AC_NO' + i);
                PMT_CUST_RT = EEHtml.getElementById('PMT_CUST_RT' + i);
                PMT_EXCH_INCM = EEHtml.getElementById('PMT_EXCH_INCM' + i);
                PMT_EXCH_FAV = EEHtml.getElementById('PMT_EXCH_FAV' + i);
                PMT_EXCH_COMM = EEHtml.getElementById('PMT_EXCH_COMM' + i);
                PMT_DR_AMT = EEHtml.getElementById('PMT_DR_AMT' + i);
                PMT_CNY_AMT = EEHtml.getElementById('PMT_CNY_AMT' + i);
                PMT_CNY_AMT1 = EEHtml.getElementById('PMT_CNY_AMT1' + i);
                PMT_CNY_AMT2 = EEHtml.getElementById('PMT_CNY_AMT2' + i);
                PMT_CR_AMT = EEHtml.getElementById('PMT_CR_AMT' + i);
                PMT_AC_AMT = EEHtml.getElementById('PMT_AC_AMT' + i);
                PMT_EQ_AMT.value = 0;
                PMT_EQ_AMT.className = 'AMT_P';
                PMT_EQ_AMT.readOnly = true;
                PMT_AC_AMT.value = 0;
                PMT_AC_CCY.value = '';
                PMT_CUST_AC_NO.value = '';
                PMT_CUST_RT.value = 0;
                PMT_EXCH_INCM.value = 0;
                PMT_EXCH_FAV.value = 0;
                PMT_EXCH_COMM.value = 0;
                PMT_DR_AMT.value = 0;
                PMT_CNY_AMT.value = 0;
                PMT_CNY_AMT1.value = 0;
                PMT_CNY_AMT2.value = 0;
                PMT_CR_AMT.value = 0;
            }
            PMT_EQ_AMT1_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PaymentCustAcNoInitValue = function(fieldList) {
    try {
debugger;
        var fieldArray; // Utility Auto Fix Comments
        var fieldObject; // Utility Auto Fix Comments
        var pmtAcnoNumber; // Utility Auto Fix Comments
        var s; // Utility Auto Fix Comments
        fieldArray = fieldList.split(',');
        for (i = 0; i <= fieldArray.length - 1; i++) {
            fieldObject = EEHtml.getElementById(fieldArray[i]);
            fieldObject.length = 0;
        }
        for (i = 0; i <= fieldArray.length - 1; i++) {
            fieldObject = EEHtml.getElementById(fieldArray[i]);

            pmtAcnoNumber = 0;
            s = 0;
            fieldObject[s] = new Option('Acno of First Cust');
            fieldObject[s].value = '';
            s++;

            for (j = 0; j <= custAcno.length - 1; j++) {
                if (pmtCustCcySwitch == '1') {
                    if (custAcno[j][2] == 'USD') {
                        fieldObject[s] = new Option(custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2]);
                        fieldObject[s].value = custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2] + ' FIRST';
                        pmtAcnoNumber++;
                        s++;
                    }
                } else {
                    fieldObject[s] = new Option(custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2]);
                    fieldObject[s].value = custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2] + ' FIRST';
                    pmtAcnoNumber++;
                    s++;
                }
            }
            if (pmtSecdCustAcno.length > 0) {
                fieldObject[pmtAcnoNumber + 1] = new Option('');
                fieldObject[pmtAcnoNumber + 1].value = '';
                pmtAcnoNumber++;
                fieldObject[pmtAcnoNumber + 1] = new Option('Acno of Second Cust');
                fieldObject[pmtAcnoNumber + 1].value = '';
                pmtAcnoNumber++;
            }
            for (j = 0; j <= pmtSecdCustAcno.length - 1; j++) {
                if (pmtCustCcySwitch == '1') {
                    if (pmtSecdCustAcno[j][2] == 'USD') {
                        fieldObject[pmtAcnoNumber + 1] = new Option(pmtSecdCustAcno[j][3] + pmtSecdCustAcno[j][4] + ' ' + pmtSecdCustAcno[j][1] + ' ' + pmtSecdCustAcno[j][2]);
                        fieldObject[pmtAcnoNumber + 1].value = pmtSecdCustAcno[j][3] + pmtSecdCustAcno[j][4] + ' ' + pmtSecdCustAcno[j][1] + ' ' + pmtSecdCustAcno[j][2] + ' SECOND_PMT';
                        pmtAcnoNumber++;
                    }
                } else {
                    fieldObject[pmtAcnoNumber + 1] = new Option(pmtSecdCustAcno[j][3] + pmtSecdCustAcno[j][4] + ' ' + pmtSecdCustAcno[j][1] + ' ' + pmtSecdCustAcno[j][2]);
                    fieldObject[pmtAcnoNumber + 1].value = pmtSecdCustAcno[j][3] + pmtSecdCustAcno[j][4] + ' ' + pmtSecdCustAcno[j][1] + ' ' + pmtSecdCustAcno[j][2] + ' SECOND_PMT';
                    pmtAcnoNumber++;
                }
            }

            fieldObject[pmtAcnoNumber + 1] = new Option('');
            fieldObject[pmtAcnoNumber + 1].value = '';
            pmtAcnoNumber++;
            fieldObject[pmtAcnoNumber + 1] = new Option('Acno of GL');
            fieldObject[pmtAcnoNumber + 1].value = '';
            pmtAcnoNumber++;
            if (["LOFG", "LGAD", "IMLC", "IMCL", "DISC", "FAEF", "FADA"].join(",").indexOf(SYS_MODULE_NAME) == -1) {
                fieldObject[pmtAcnoNumber + 1] = new Option(BUSI_TYPE_GL + ' ' + GL8421);
                fieldObject[pmtAcnoNumber + 1].value = BUSI_TYPE_GL + ' ' + GL8421;
                pmtAcnoNumber++;
            }
            if (FILTER_FUN_ID.toString().indexOf(SYS_ORG_FUNCTION_ID) >= 0) {
                fieldObject[pmtAcnoNumber + 1] = new Option(BUSI_TYPE_GL + ' ' + GL6201);
                fieldObject[pmtAcnoNumber + 1].value = BUSI_TYPE_GL + ' ' + GL6201;
                pmtAcnoNumber++;
            }
            fieldObject[pmtAcnoNumber + 1] = new Option(BUSI_TYPE_GL + ' ' + CGL9991);
            fieldObject[pmtAcnoNumber + 1].value = BUSI_TYPE_GL + ' ' + CGL9991;
            pmtAcnoNumber++;
            fieldObject.size = pmtAcnoNumber + 1;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PaymentCustAcNoOnclick = function(selectValue, subjectFieldName, acnoFieldName, ccyFieldName) {
    try {
        var PMT_CUST_NM; // Utility Auto Fix Comments
        var PMT_CUST_NM_C; // Utility Auto Fix Comments
        var PMT_ORGAN_ID; // Utility Auto Fix Comments
        var acno; // Utility Auto Fix Comments
        var acnoFieldNameObject; // Utility Auto Fix Comments
        var amtNumber; // Utility Auto Fix Comments
        var ccyFieldNameObject; // Utility Auto Fix Comments
        var closeRateName; // Utility Auto Fix Comments
        var closeRateObject; // Utility Auto Fix Comments
        var custRateName; // Utility Auto Fix Comments
        var custRateObject; // Utility Auto Fix Comments
        var eqAmtName; // Utility Auto Fix Comments
        var exchFieldList; // Utility Auto Fix Comments
        var exchRateName; // Utility Auto Fix Comments
        var exchRateNameObject; // Utility Auto Fix Comments
        var subjectFieldNameObject; // Utility Auto Fix Comments
        acno = selectValue.split(' ');
        subjectFieldNameObject = EEHtml.getElementById(subjectFieldName);
        acnoFieldNameObject = EEHtml.getElementById(acnoFieldName);
        ccyFieldNameObject = EEHtml.getElementById(ccyFieldName);

        exchRateName = acnoFieldName.replace('PMT_CUST_AC_NO', 'PMT_EXCH_RT');
        closeRateName = acnoFieldName.replace('PMT_CUST_AC_NO', 'PMT_CLOSE_RT');
        custRateName = acnoFieldName.replace('PMT_CUST_AC_NO', 'PMT_CUST_RT');
        PMT_ORGAN_ID = acnoFieldName.replace('PMT_CUST_AC_NO', 'PMT_ORGAN_ID');
        PMT_CUST_NM = acnoFieldName.replace('PMT_CUST_AC_NO', 'PMT_CUST_NM');
        PMT_CUST_NM_C = acnoFieldName.replace('PMT_CUST_AC_NO', 'PMT_CUST_NM_ZH');

        exchRateNameObject = EEHtml.getElementById(exchRateName);
        closeRateObject = EEHtml.getElementById(closeRateName);
        custRateObject = EEHtml.getElementById(custRateName);
        PMT_ORGAN_ID = EEHtml.getElementById(PMT_ORGAN_ID);
        PMT_CUST_NM = EEHtml.getElementById(PMT_CUST_NM);
        PMT_CUST_NM_C = EEHtml.getElementById(PMT_CUST_NM_C);
        if (selectValue.indexOf(BUSI_TYPE_GL) >= 0) {
            subjectFieldNameObject.value = acno[0];
            acnoFieldNameObject.value = acno[1];
            ccyFieldNameObject.value = document.MAINFORM.NET_DR_CCY.value;
            exchFieldList = exchRateNameObject.name + ';' + closeRateObject.name;
            SYS_GetExchangeRate_Boc(ccyFieldNameObject.value, 'USD', "Buying Rate;Buying Close Rate", exchFieldList);
            GetExchCustRate('1', exchRateNameObject.value, closeRateObject.value, custRateObject);
            PMT_ORGAN_ID.value = "";
            PMT_CUST_NM.value = "";
            PMT_CUST_NM_C.value = "";
        } else if (selectValue != '') {
            subjectFieldNameObject.value = acno[0];
            acnoFieldNameObject.value = acno[1];
            ccyFieldNameObject.value = acno[2];

            exchFieldList = exchRateNameObject.name + ';' + closeRateObject.name;
            SYS_GetExchangeRate_Boc(ccyFieldNameObject.value, 'USD', "Buying Rate;Buying Close Rate", exchFieldList);
            GetExchCustRate('1', exchRateNameObject.value, closeRateObject.value, custRateObject);

            PMT_ORGAN_ID.value = CUST_NM_ORGAN[acno[3] + '_ORGAN'];
            PMT_CUST_NM.value = CUST_NM_ORGAN[acno[3] + '_NM'];
            PMT_CUST_NM_C.value = CUST_NM_ORGAN[acno[3] + '_NM_C'];
        } else {
            subjectFieldNameObject.value = '';
            acnoFieldNameObject.value = '';
            ccyFieldNameObject.value = '';
            exchRateNameObject.value = 0;
            closeRateObject.value = 0;
            custRateObject.value = 0;
            PMT_ORGAN_ID.value = "";
            PMT_CUST_NM.value = "";
            PMT_CUST_NM_C.value = "";
        }

        amtNumber = SYS_BeFloat(acnoFieldName.substr(14, 1));
        eqAmtName = 'PMT_EQ_AMT' + amtNumber;
        if (amtNumber == '1') {
            PMT_EQ_AMT1_onchange();
        } else {
            PMT_EQ_AMT_onchange(eqAmtName);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PaymentCustId = function(trxno, cntycode, custid) {
    try {
        document.MAINFORM.PMT_930_BUSI_TYPE.value = INTERFACE_930_TRX_CODE + '|' + INTERFACE_GL_TRX_CODE;
        document.MAINFORM.PMT_BGL_AC_NO.value = '9991';
        document.MAINFORM.PMT_TRX_NO.value = trxno;
        document.MAINFORM.PMT_CNTY_CODE.value = cntycode;
        document.MAINFORM.PMT_CUST_ID.value = custid;
        if (document.MAINFORM.PMT_CUST_ID.value != '') {
            SYS_GetTableDataByRule_S('SSSS_SRC_Payment_PaymentCustId_0', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PaymentExchIncm = function(amtNumber) {
    try {
        var custAmt; // Utility Auto Fix Comments
        var custCcy; // Utility Auto Fix Comments
        var custCloseRate; // Utility Auto Fix Comments
        var custCustRate; // Utility Auto Fix Comments
        var custEqAmt; // Utility Auto Fix Comments
        var custExchFav; // Utility Auto Fix Comments
        var custExchIncm; // Utility Auto Fix Comments
        var custExchRate; // Utility Auto Fix Comments
        var exchFav; // Utility Auto Fix Comments
        var exchIncm; // Utility Auto Fix Comments
        var netCcy; // Utility Auto Fix Comments
        var netCloseRate; // Utility Auto Fix Comments
        var netCustRate; // Utility Auto Fix Comments
        var netExchRate; // Utility Auto Fix Comments
        var pmtCnyAmt1; // Utility Auto Fix Comments
        var pmtCnyAmt2; // Utility Auto Fix Comments
        netCcy = EEHtml.getElementById('NET_DR_CCY');
        netExchRate = EEHtml.getElementById('PMT_NET_EXCH_RT');
        netCloseRate = EEHtml.getElementById('PMT_NET_CLOSE_RT');
        netCustRate = EEHtml.getElementById('PMT_NET_CUST_RT');
        custCcy = EEHtml.getElementById('PMT_AC_CCY' + amtNumber);
        custAmt = EEHtml.getElementById('PMT_AC_AMT' + amtNumber);
        custEqAmt = EEHtml.getElementById('PMT_EQ_AMT' + amtNumber);
        custExchRate = EEHtml.getElementById('PMT_EXCH_RT' + amtNumber);
        custCloseRate = EEHtml.getElementById('PMT_CLOSE_RT' + amtNumber);
        custCustRate = EEHtml.getElementById('PMT_CUST_RT' + amtNumber);
        custExchIncm = EEHtml.getElementById('PMT_EXCH_INCM' + amtNumber);
        custExchFav = EEHtml.getElementById('PMT_EXCH_FAV' + amtNumber);
        pmtCnyAmt1 = EEHtml.getElementById('PMT_CNY_AMT1' + amtNumber);
        pmtCnyAmt2 = EEHtml.getElementById('PMT_CNY_AMT2' + amtNumber);
        if (netCcy.value != '' && custCcy.value != '' && netCcy.value != custCcy.value) {
            exchFav = 0;
            exchIncm = 0;
            exchFav = SYS_BeFloat(custEqAmt.value) * (SYS_BeFloat(document.MAINFORM.PMT_NET_EXCH_RT.value) - SYS_BeFloat(document.MAINFORM.PMT_NET_CUST_RT.value));
            exchFav = exchFav + SYS_BeFloat(custAmt.value) * (SYS_BeFloat(custCustRate.value) - SYS_BeFloat(custExchRate.value));
            custExchFav.value = SYT_CCY_AMT('USD', exchFav / 100);
            if (custCcy.value != 'USD' && netCcy.value != 'USD') {
                custExchIncm.value = Math.abs(SYS_BeFloat(pmtCnyAmt1.value) - SYS_BeFloat(pmtCnyAmt2.value));
            } else if (custCcy.value != 'USD' && netCcy.value == 'USD') {
                custExchIncm.value = Math.abs(SYS_BeFloat(pmtCnyAmt1.value) - SYS_BeFloat(custEqAmt.value));
            } else {
                custExchIncm.value = Math.abs(SYS_BeFloat(pmtCnyAmt2.value) - SYS_BeFloat(custAmt.value));
            }
            custExchIncm.value = SYT_CCY_AMT('USD', custExchIncm.value);
        } else {
            custExchFav.value = 0;
            custExchIncm.value = 0;
        }

        PaymentTtlExchIncmFav();
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PaymentGetCustAcno = function(CcySwitch) {
    try {
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return;
        }
        pmtCustCcySwitch = CcySwitch;
        PaymentCustAcNoInitValue("PMT_CUST_AC_NO1_O,PMT_CUST_AC_NO2_O,PMT_CUST_AC_NO3_O,PMT_CUST_AC_NO4_O,PMT_CUST_AC_NO5_O");
        document.MAINFORM.PMT_930_AC_NO.value = '9301';
        document.MAINFORM.PMT_VALUE_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PaymentNonExchComm = function() {
    try {
        var nonExchComm; // Utility Auto Fix Comments
        var ttlNonExchComm; // Utility Auto Fix Comments
        ttlNonExchComm = 0;
        for (i = 1; i <= 5; i++) {
            nonExchComm = EEHtml.getElementById('PMT_EXCH_COMM' + i);
            ttlNonExchComm += SYS_BeFloat(nonExchComm.value);
        }
        document.MAINFORM.PMT_NET_EXCH_COMM.value = SYT_CCY_AMT(document.MAINFORM.NET_DR_CCY.value, ttlNonExchComm);
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PaymentTtlExchIncmFav = function() {
    try {
        var custExchFav; // Utility Auto Fix Comments
        var custExchIncm; // Utility Auto Fix Comments
        var exchFav; // Utility Auto Fix Comments
        var exchIncm; // Utility Auto Fix Comments
        exchIncm = 0;
        exchFav = 0;
        for (i = 1; i <= 5; i++) {
            custExchIncm = EEHtml.getElementById('PMT_EXCH_INCM' + i);
            custExchFav = EEHtml.getElementById('PMT_EXCH_FAV' + i);
            exchIncm = exchIncm + SYS_BeFloat(custExchIncm.value);
            exchFav = exchFav + SYS_BeFloat(custExchFav.value);
        }
        document.MAINFORM.PMT_TTL_EXCH_FAV.value = SYT_CCY_AMT('USD', exchFav);
        document.MAINFORM.PMT_TTL_EXCH_INCM.value = SYT_CCY_AMT('USD', exchIncm);
        PMT_PAGE_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PmtInitCnty = function() {
    try {
        var c; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var custac; // Utility Auto Fix Comments
        var custac_s; // Utility Auto Fix Comments
        var rptNo; // Utility Auto Fix Comments
        c = 0;
        for (i = 1; i <= 5; i++) {
            custac = EEHtml.getElementById('PMT_CUST_AC_NO' + i);
            custac_s = EEHtml.getElementById('PMT_CUST_AC_NO' + i + '_S');
            ccy = EEHtml.getElementById('PMT_AC_CCY' + i);
            if (custac.value != '' && custac_s.value != '' && custac_s.value != BUSI_TYPE_GL && ccy.value != 'USD') {
                c = 1;
            }
        }
        if (c == 1) {

            rptNo = SYT_GET_RPT_DCLR_NO();
            if (document.MAINFORM.PMT_CNTY_CODE.value != 'CHN' && document.MAINFORM.PMT_CNTY_CODE.value != '') {
                if (rptNo) {
                    PmtRef(rptNo);
                } else {
                    SYS_GetRefNo_S('IBPD07', 'PmtRef', '', 'IBPD07');
                }
                //rptNo?PmtRef(rptNo):SYS_GetRefNo_S('IBPD07','PmtRef','','IBPD07');
            } else if (document.MAINFORM.PMT_CNTY_CODE.value == 'CHN') {
                if (rptNo) {
                    PmtRef(rptNo);
                } else {
                    SYS_GetRefNo_S('IBPD09', 'PmtRef', '', 'IBPD09');
                }
                //rptNo?PmtRef(rptNo):SYS_GetRefNo_S('IBPD09','PmtRef','','IBPD09');
            } else {
                document.MAINFORM.PMT_DCLR_NO.value = '';
            }
        } else {
            document.MAINFORM.PMT_DCLR_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.PmtRef = function(ref) {
    try {
        if (document.MAINFORM.PMT_CNTY_CODE.value != 'CHN' && document.MAINFORM.PMT_CNTY_CODE.value != '') {
            document.MAINFORM.PMT_DCLR_NO.value = '1' + ref;
        } else if (document.MAINFORM.PMT_CNTY_CODE.value == 'CHN') {
            document.MAINFORM.PMT_DCLR_NO.value = '2' + ref;
        } else {
            document.MAINFORM.PMT_DCLR_NO.value = ref;
        }
        GetVoucherDesc_Pmt(aa, bb, cc);
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}

csLbiCompProto.RPT_PMT_CNY_AMT = function() {
    try {
        var PMT_AC_CCY; // Utility Auto Fix Comments
        var PMT_CUST_AC_NO; // Utility Auto Fix Comments
        var PMT_EQ_AMT; // Utility Auto Fix Comments
        var vRPT_PMT_CNY_AMT; // Utility Auto Fix Comments
        document.MAINFORM.RPT_PMT_CNY_AC_NO.value = '';
        document.MAINFORM.RPT_PMT_EXCH_RT.value = 0;
        document.MAINFORM.RPT_PMT_CCY_AC_NO.value = ''; // Utility Auto Fix Comments
        vRPT_PMT_CNY_AMT = 0;
        for (i = 1; i <= 5; i++) {
            PMT_AC_CCY = EEHtml.getElementById('PMT_AC_CCY' + i);
            PMT_EQ_AMT = EEHtml.getElementById('PMT_EQ_AMT' + i);
            PMT_CUST_AC_NO = EEHtml.getElementById('PMT_CUST_AC_NO' + i);
            if (PMT_AC_CCY.value == 'USD' && SYS_BeFloat(PMT_EQ_AMT.value) > 0) {
                vRPT_PMT_CNY_AMT = vRPT_PMT_CNY_AMT + SYS_BeFloat(PMT_EQ_AMT.value);
                document.MAINFORM.RPT_PMT_CNY_AC_NO.value = PMT_CUST_AC_NO.value;
                document.MAINFORM.RPT_PMT_EXCH_RT.value = document.MAINFORM.PMT_NET_CUST_RT.value;
            }
            if (PMT_AC_CCY.value != 'USD' && SYS_BeFloat(PMT_EQ_AMT.value) > 0) {
                document.MAINFORM.RPT_PMT_CCY_AC_NO.value = PMT_CUST_AC_NO.value;

            }
        }
        document.MAINFORM.RPT_PMT_CNY_AMT.value = vRPT_PMT_CNY_AMT;
    } catch (e) {
        DisExcpt("SSSS_SRC_Payment.js", e);
    }
}