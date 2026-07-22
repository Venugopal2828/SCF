"path:SCRN/o2m/FAEF_InvAdjustandCancelation.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.AmountFormat = function() {
    try {
        document.MAINFORM.FA_DOC_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
        document.MAINFORM.FA_DOC_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_AMT16.value);
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_LOAN_BAL.value);
        document.MAINFORM.FA_CRN_AMT_SUM.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_CRN_AMT_SUM.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.CAL_DOC_STATUE = function() {
    try {
        if (document.MAINFORM.FA_MSG_FUNC.value == '9') {
            document.MAINFORM.FA_DOC_STATUS.value = 'CANCEL';
            document.MAINFORM.FA_DOC_BAL.value = 0;
        } else if (document.MAINFORM.FA_MSG_FUNC.value == '10') {
            document.MAINFORM.FA_DOC_STATUS.value = 'ADJ';
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.CHECK_FA_DOC_DUE_DT = function() {
    try {
        var invduedate = SYS_GetSubDays(document.MAINFORM.FA_DOC_DT.name, document.MAINFORM.FA_DOC_DUE_DT.name);
        if (invduedate < 0) {
            alert('Invoice Due Date must be later than Invoice Date, please check!');
            return false;
        }

        if (document.MAINFORM.FA_MSG_FUNC.value == '9') {
            //add by sandy20120418
            var dBusiDt = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
            var dDueDt = getDate(SYS_DATE_FORMAT, document.MAINFORM.FA_DOC_DUE_DT.value);
            //if (SYS_BUSI_DATE >document.MAINFORM.FA_DOC_DUE_DT.value){
            if (dBusiDt > dDueDt) {
                SYS_CheckError(document.MAINFORM.FA_DOC_VAL_DT, "Invoice is expired, can't cancel it.");
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.CHECK_FA_INV_LOAN_BAL = function() {
    try {
        if (document.MAINFORM.FA_MSG_FUNC.value == '9' && SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_BAL.value) > 0) {
            SYS_CheckError(document.MAINFORM.FA_INV_LOAN_BAL, "Cannot cancel the invoice, there is outstanding loan balance!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.Check_DSP = function() {
    try {
        if (document.MAINFORM.FA_TEMP4.value == 'DSP' && document.MAINFORM.FA_MSG_FUNC.value == '9') {
            alert("The invoice is in dispute, cannot cancel it!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        //setTrxRefValue();
        CAL_DOC_STATUE();
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!checkInvValDate()) {
            return false;
        }

        if (!check_MsgFunc_DocStatu()) {
            return false;
        }

        if (!CHECK_FA_DOC_DUE_DT()) {
            return false;
        }
        if (!CHECK_FA_INV_LOAN_BAL()) {
            return false;
        }
        if (!Check_DSP()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.FA_DOC_DUE_DT_back = function(date) {
    try {
        document.MAINFORM.FA_DOC_DUE_DT.value = date;
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_DUE_DT, 'onchange');
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.FOR_FA_MSG_FUNC = function() {
    try {
        if (document.MAINFORM.FA_MSG_FUNC.value == '9') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_DUE_DT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_VAL_DT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_ORDER_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_COND, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_TERMS, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_DT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_LATEST_SHIP_DT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_PRM_DISC_DAYS, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_PRM_DISC_RT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_SND_DISC_DAYS, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_SND_DISC_RT, 'P', 'N');
        } else if (document.MAINFORM.FA_MSG_FUNC.value == '10') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_DUE_DT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_VAL_DT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_ORDER_NO, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_COND, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_TERMS, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_PRM_DISC_DAYS, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_PRM_DISC_RT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_SND_DISC_DAYS, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_SND_DISC_RT, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_DOC_CCY.value = SYS_getValueFromMain("FA_DOC_CCY");
        document.MAINFORM.FA_MSG_FUNC.value = SYS_getValueFromMain("FA_MSG_FUNC");
        FOR_FA_MSG_FUNC();
        //getInvDueDate();
        AmountFormat();

    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.calPmtTerms = function() {
    try {
        var pmtTerms = SYS_GetSubDays(document.MAINFORM.FA_DOC_VAL_DT.name, document.MAINFORM.FA_DOC_DUE_DT.name);
        document.MAINFORM.FA_PMT_TERMS.value = pmtTerms;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.checkInvValDate = function() {
    try {
        var date = SYS_GetSubDays(document.MAINFORM.FA_DOC_DT.name, document.MAINFORM.FA_DOC_VAL_DT.name);
        if (date < 0) {
            alert('Invoice value date must be later than the Invoice Date! Please check!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.check_MsgFunc_DocStatu = function() {
    try {
        if (document.MAINFORM.FA_MSG_FUNC.value == '9' && SYS_BeFloat(document.MAINFORM.FA_CRN_AMT_SUM.value) > 0) {
            alert("There is uncleared credit notes linked to the invoice, please cancel its credit notes first!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.getInvDueDate = function() {
    try {
        var pmtTerms = document.MAINFORM.FA_PMT_TERMS.value;
        var valDate = document.MAINFORM.FA_DOC_VAL_DT.value;
        SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, valDate, pmtTerms, FA_DOC_DUE_DT_back, 'A', 'N');
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.setTrxRefValue = function() {
    try {
        if (document.MAINFORM.FA_MSG_FUNC.value == 9) {
            document.MAINFORM.FA_DOC_NO.value = document.MAINFORM.FA_TEMP3.value + "CAL";
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.FA_DOC_DUE_DT_onchange = function(event) {
    try {
        calPmtTerms();
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.FA_DOC_VAL_DT_onchange = function(event) {
    try {
        getInvDueDate();
        calPmtTerms();
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}

csDOScreenProto.FA_PMT_TERMS_onchange = function(event) {
    try {
        getInvDueDate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjustandCancelation.js", e);
    }
}