"path:SCRN/o2m/FAEF_DFSUBPmtReg.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!checkPMT_AMT()) {
            return false;
        }
        if (!check_DeductAmt()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        changeclass();
        docstatus();
        document.MAINFORM.FA_PMT_REF.value = SYS_getValueFromMain("FA_PMT_REF");
        document.MAINFORM.FA_PMT_DT.value = SYS_getValueFromMain("FA_PMT_DT");

    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.changeclass = function() {
    try {
        if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DEDUCT_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_DEDUCT_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.checkPMT_AMT = function() {
    try {
        var orgDocBal; // Utility Auto Fix Comments
        var pmtFlg; // Utility Auto Fix Comments
        var ttlPaid; // Utility Auto Fix Comments
        ttlPaid = (SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) * 1000 + SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value) * 1000) / 1000;
        orgDocBal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
        pmtFlg = document.MAINFORM.FA_FINAL_PMT_FLG.value;
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
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.check_DeductAmt = function() {
    try {
        if (document.MAINFORM.FA_DEDUCT_AMT.value == 0) {
            return confirm("The deduct amount is 0");
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.docbal = function() {
    try {
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '2') {
            if (document.MAINFORM.FA_DOC_TYPE.value == '1') {
                document.MAINFORM.FA_DOC_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) - SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value);
            } else if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
                document.MAINFORM.FA_DOC_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) - SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
            }
        } else if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {
            document.MAINFORM.FA_DOC_BAL.value = 0;
        }
        document.MAINFORM.FA_DOC_BAL.value = SYT_CCY_AMT(SYS_LOCAL_CCY, document.MAINFORM.FA_DOC_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.docstatus = function() {
    try {
        document.MAINFORM.FA_PMT_TYPE.value = SYS_getValueFromMain("FA_PMT_TYPE");
        if (document.MAINFORM.FA_PMT_TYPE.value == '1') {
            document.MAINFORM.FA_DOC_STATUS.value = 'PMT';
        }
        if (document.MAINFORM.FA_PMT_TYPE.value == '2') {
            document.MAINFORM.FA_DOC_STATUS.value = 'PUG';
        }
        if (document.MAINFORM.FA_PMT_TYPE.value == '3') {
            document.MAINFORM.FA_DOC_STATUS.value = 'INP';
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.invclearamt = function() {
    try {
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {
            if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
                document.MAINFORM.FA_INV_CLEAR_AMT.value = -SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
            } else if (document.MAINFORM.FA_DOC_TYPE.value == '1') {
                document.MAINFORM.FA_INV_CLEAR_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
            }
        } else if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '2') {
            if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
                document.MAINFORM.FA_INV_CLEAR_AMT.value = -SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
            } else {
                document.MAINFORM.FA_INV_CLEAR_AMT.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value);
            }
        }
        //document.MAINFORM.FA_INV_CLEAR_AMT.value = DecimalFormat(document.MAINFORM.FA_INV_CLEAR_AMT.value,2);
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.pmtFlg = function() {
    try {
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {
            document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) - SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value);
        }
        document.MAINFORM.FA_PMT_AMT.value = SYT_CCY_AMT('RON', document.MAINFORM.FA_PMT_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.FA_DEDUCT_AMT_onchange = function(event) {
    try {
        docbal();
        invclearamt();
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.FA_FINAL_PMT_FLG_onchange = function(event) {
    try {
        pmtFlg();
        docbal();
        invclearamt();
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}

csDOScreenProto.FA_PMT_AMT_onchange = function(event) {
    try {
        docbal();
        invclearamt();
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBPmtReg.js", e);
    }
}