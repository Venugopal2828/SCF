"path:SCRN/o2m/FAEF_IFSUBPayment.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CHK_FA_PMT_AMT = function() {
    try {
        var bankchg; // Utility Auto Fix Comments
        var deductamt; // Utility Auto Fix Comments
        var docbal; // Utility Auto Fix Comments
        var origbal; // Utility Auto Fix Comments
        var payamt; // Utility Auto Fix Comments
        var pmttype; // Utility Auto Fix Comments
        var tempamt; // Utility Auto Fix Comments
        pmttype = document.MAINFORM.FA_PMT_CLEAR_TYPE.value;
        payamt = document.MAINFORM.FA_PMT_AMT.value;
        bankchg = document.MAINFORM.FA_BK_CHG_AMT.value;
        deductamt = document.MAINFORM.FA_DEDUCT_AMT.value;
        origbal = document.MAINFORM.FA_TEMP_AMT8.value;
        docbal = document.MAINFORM.FA_DOC_BAL.value;
        tempamt = SYS_BeFloat(payamt) + SYS_BeFloat(bankchg) + SYS_BeFloat(deductamt);
        if (pmttype == '1' && tempamt > SYS_BeFloat(origbal)) {
            SYS_CheckError(document.MAINFORM.FA_PMT_AMT.name, "Amount paid exceeds the document balance! Please check!"); // Utility Auto Fix Comments
            return false;
        }

        if (pmttype == '2' && tempamt >= SYS_BeFloat(origbal)) {
            SYS_CheckError(document.MAINFORM.FA_PMT_AMT.name, "Amount paid should be less than the document balance! Please check!"); // Utility Auto Fix Comments
            return false;
        }

        if (SYS_BeFloat(origbal) == SYS_BeFloat(docbal)) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        ForBAAmount();
        For_FA_DOC_STATUS();
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_BK_CHG_AMT.value) == 0) {
            if (!confirm('Bank charges amount is 0!')) {
                return false;
            }
        }

        if (SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value) == 0) {
            if (!confirm('The Deduct Amount is 0!')) {
                return false;
            }
        }

        if (!CHK_FA_PMT_AMT()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.ForBAAmount = function() {
    try {
        if (document.MAINFORM.FA_DOC_TYPE.value == '1') {
            document.MAINFORM.FA_TEMP_INV_BA.value = document.MAINFORM.FA_INV_CLEAR_AMT.value;
            document.MAINFORM.FA_TEMP_CRN_BA.value = 0;
        }
        if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
            document.MAINFORM.FA_TEMP_CRN_BA.value = -SYS_BeFloat(document.MAINFORM.FA_INV_CLEAR_AMT.value);
            document.MAINFORM.FA_TEMP_INV_BA.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.For_DOC_BAL = function() {
    try {
        if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '2') {
            if (document.MAINFORM.FA_DOC_TYPE.value == '1') {
                document.MAINFORM.FA_DOC_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) - SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_BK_CHG_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value);
            } else if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
                document.MAINFORM.FA_DOC_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) - SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
            }
        } else if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '1') {
            document.MAINFORM.FA_DOC_BAL.value = 0;
        }
        document.MAINFORM.FA_DOC_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.For_FA_DOC_STATUS = function() {
    try {
        if (document.MAINFORM.FA_DOC_BAL.value == 0) {
            document.MAINFORM.FA_DOC_STATUS.value = 'CLOSED';
        } else {
            document.MAINFORM.FA_DOC_STATUS.value = document.MAINFORM.FA_PMT_TYPE.value;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.For_FA_INV_CLEAR_AMT = function() {
    try {
        if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '1') {
            if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
                document.MAINFORM.FA_INV_CLEAR_AMT.value = -SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
            } else if (document.MAINFORM.FA_DOC_TYPE.value == '1') {
                document.MAINFORM.FA_INV_CLEAR_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
            }
        } else if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '2') {
            if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
                document.MAINFORM.FA_INV_CLEAR_AMT.value = -SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
            } else {
                document.MAINFORM.FA_INV_CLEAR_AMT.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_BK_CHG_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value);
            }
        }
        document.MAINFORM.FA_INV_CLEAR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_CLEAR_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.Forclass = function() {
    try {
        if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BK_CHG_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DEDUCT_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_BK_CHG_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_DEDUCT_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.Get_FA_PMT_AMT = function() {
    try {
        if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '1') {
            document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
            SYT_ChangeFldClass_New('FA_PMT_AMT', 'P');
            EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT, "onchange");
        } else {
            document.MAINFORM.FA_PMT_AMT.value = 0;
            SYT_ChangeFldClass_New('FA_PMT_AMT', 'M');
            EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT, "onchange");
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        Get_FA_PMT_AMT();
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_BK_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_BK_CHG_AMT.value);
        document.MAINFORM.FA_CRN_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_BK_CHG_AMT.value);
        document.MAINFORM.FA_DEDUCT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DEDUCT_AMT.value);
        document.MAINFORM.FA_DOC_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
        document.MAINFORM.FA_DOC_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
        document.MAINFORM.FA_INV_CLEAR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_CLEAR_AMT.value);
        document.MAINFORM.FA_PMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
        document.MAINFORM.FA_TEMP_AMT10.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_AMT10.value);
        document.MAINFORM.FA_TEMP_AMT11.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_AMT11.value);
        document.MAINFORM.FA_TEMP_AMT8.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_AMT8.value);
        document.MAINFORM.FA_TEMP_CRN_BA.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_CRN_BA.value);
        document.MAINFORM.FA_TEMP_INV_BA.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_INV_BA.value);

        document.MAINFORM.FA_PMT_REF.value = SYS_getValueFromMain("FA_PMT_REF");
        document.MAINFORM.FA_PMT_DT.value = SYS_getValueFromMain("FA_PMT_DT");
        document.MAINFORM.FA_PMT_TYPE.value = SYS_getValueFromMain("FA_PMT_TYPE");
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_getValueFromMain("FA_PMT_VAL_DT");
        Forclass();

    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.FA_BK_CHG_AMT_onchange = function(event) {
    try {
        For_DOC_BAL();
        For_FA_INV_CLEAR_AMT();
        CHK_FA_PMT_AMT();
        document.MAINFORM.FA_BK_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_BK_CHG_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.FA_DEDUCT_AMT_onchange = function(event) {
    try {
        For_DOC_BAL();
        For_FA_INV_CLEAR_AMT();
        CHK_FA_PMT_AMT();
        document.MAINFORM.FA_DEDUCT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DEDUCT_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.FA_DOC_TYPE_onchange = function(event) {
    try {
        For_DOC_BAL();
        Forclass();
        For_FA_INV_CLEAR_AMT();
        ForBAAmount();
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.FA_PMT_AMT_onchange = function(event) {
    try {
        For_DOC_BAL();
        For_FA_INV_CLEAR_AMT();
        CHK_FA_PMT_AMT();
        document.MAINFORM.FA_PMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}

csDOScreenProto.FA_PMT_CLEAR_TYPE_onchange = function(event) {
    try {
        Get_FA_PMT_AMT();
        For_DOC_BAL();
        For_FA_INV_CLEAR_AMT();
        CHK_FA_PMT_AMT();
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBPayment.js", e);
    }
}