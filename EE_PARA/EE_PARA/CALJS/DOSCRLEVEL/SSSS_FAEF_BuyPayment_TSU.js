"path:SCRN/o2m/FAEF_BuyPayment_TSU.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        FA_INV_CLEAR_AMT();
        DOCSTATUS();
        SYS_GetTableDataByRule_S('MAINREF_FOR_BUYPAY', '1', true);
    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!checkPMT_AMT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.DOCSTATUS = function() {
    try {
        if (document.MAINFORM.FA_DOC_BAL.value = 0) {
            document.MAINFORM.FA_DOC_STATUS.value = 'CLOSED'
        } else {
            document.MAINFORM.FA_DOC_STATUS.value = 'PMT'
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.DOC_BAL = function() {
    try {
        if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '2') {
            document.MAINFORM.FA_DOC_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) - SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_BK_CHG_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value);
        } else if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '1') {
            document.MAINFORM.FA_DOC_BAL.value = 0;
        }
        document.MAINFORM.FA_DOC_BAL.value = DecimalFormat(document.MAINFORM.FA_DOC_BAL.value, 2);
    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.FA_INV_CLEAR_AMT = function() {
    try {
        if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '1') {
            document.MAINFORM.FA_INV_CLEAR_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
        } else if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '2') {
            document.MAINFORM.FA_INV_CLEAR_AMT.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_BK_CHG_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value);

        }
        document.MAINFORM.FA_INV_CLEAR_AMT.value = DecimalFormat(document.MAINFORM.FA_INV_CLEAR_AMT.value, 2);
    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.FA_PMT_CLEAR_TYPE = function() {
    try {
        if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_AMT, 'P');
            document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
            document.MAINFORM.FA_PMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
            document.MAINFORM.FA_DOC_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, 0);
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_AMT, 'M');
            document.MAINFORM.FA_PMT_AMT.value = 0;
            document.MAINFORM.FA_PMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
            document.MAINFORM.FA_DOC_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
            document.MAINFORM.FA_DOC_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_PMT_REF.value = SYS_getValueFromMain("FA_PMT_REF");
        document.MAINFORM.FA_PMT_DT.value = SYS_getValueFromMain("FA_PMT_DT");
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_getValueFromMain("FA_PMT_VAL_DT");
        amtformat();

    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.amtformat = function() {
    try {
        document.MAINFORM.FA_PMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
        document.MAINFORM.FA_BK_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_BK_CHG_AMT.value);
        document.MAINFORM.FA_DEDUCT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DEDUCT_AMT.value);
        document.MAINFORM.FA_TEMP_AMT8.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_AMT8.value);
        document.MAINFORM.FA_DOC_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
        document.MAINFORM.FA_DOC_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.checkPMT_AMT = function() {
    try {
        var orgDocBal; // Utility Auto Fix Comments
        var pmtFlg; // Utility Auto Fix Comments
        var ttlPaid; // Utility Auto Fix Comments
        ttlPaid = (SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) * 1000 + SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value) * 1000 + SYS_BeFloat(document.MAINFORM.FA_BK_CHG_AMT.value) * 1000) / 1000;
        orgDocBal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
        pmtFlg = document.MAINFORM.FA_PMT_CLEAR_TYPE.value;
        if (ttlPaid > orgDocBal && pmtFlg == '1') {
            SYS_CheckError(document.MAINFORM.FA_PMT_AMT, "Amount paid exceeds the document balance! Please check."); // Utility Auto Fix Comments
            return false;
        }
        if (ttlPaid >= orgDocBal && pmtFlg == '2') {
            SYS_CheckError(document.MAINFORM.FA_PMT_AMT, "Amount paid should be less than the document balance! Please check."); // Utility Auto Fix Comments
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.FA_BK_CHG_AMT_onchange = function(event) {
    try {
        FA_INV_CLEAR_AMT();
        DOC_BAL();


    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.FA_DEDUCT_AMT_onchange = function(event) {
    try {
        FA_INV_CLEAR_AMT();
        DOC_BAL();

    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.FA_PMT_AMT_onchange = function(event) {
    try {
        FA_INV_CLEAR_AMT();
        DOC_BAL();

    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.FA_PMT_CLEAR_TYPE_onchange = function(event) {
    try {
        FA_PMT_CLEAR_TYPE();
        FA_INV_CLEAR_AMT();
        DOC_BAL();

    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}

csDOScreenProto.FA_TEMP_AMT8_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_BuyPayment_TSU.js", e);
    }
}