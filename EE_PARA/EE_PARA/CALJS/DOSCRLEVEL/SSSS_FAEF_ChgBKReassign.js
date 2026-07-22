"path:SCRN/o2m/FAEF_ChgBKReassign.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.Check_FA_INV_LOAN_BAL = function() {
    try {
        var loanbal = SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_BAL.value);
        if (loanbal > 0) {
            alert('There is still Financing balance that have not been paid!');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        Check_FA_INV_LOAN_BAL();
        FA_MSG_TYPE();
        setDocStatus();
        TEMP_INV_BA();
        TEMP_CRN_BA();
        setFIN_RET_AMT(); //Add by Smile ,Because when inEDI, the field chg_amt may not change.
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!check_cbk_amt()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.FA_MSG_FUNC_field = function() {
    try {
        if (document.MAINFORM.FA_MSG16_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_CBK_AMT, 'P', 'N');
            document.MAINFORM.FA_DOC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, 0);
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_CBK_AMT, 'M', 'N');
            document.MAINFORM.FA_DOC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.FA_MSG_TYPE = function() {
    try {
        if (document.MAINFORM.FA_MSG16_TYPE.value == '2') {
            document.MAINFORM.FA_CBK_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT10.value);
            document.MAINFORM.FA_DOC_NO.value = document.MAINFORM.FA_TEMP4.value + 'RES';
        } else {
            //document.MAINFORM.FA_CBK_AMT.value=0;
            document.MAINFORM.FA_DOC_NO.value = document.MAINFORM.FA_TEMP4.value;
        }
        document.MAINFORM.FA_CBK_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_CBK_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        if (document.MAINFORM.FA_TEMP_AMT10.value == 0) {
            document.MAINFORM.FA_TEMP_AMT10.value = document.MAINFORM.FA_DOC_BAL.value;
        }
        document.MAINFORM.FA_DOC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
        document.MAINFORM.FA_TEMP3.value = SYS_getValueFromMain('FA_BUSI_STATUS');
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain('C_MAIN_REF');
        document.MAINFORM.TRX_DT.value = SYS_getValueFromMain('TRX_DT');
        document.MAINFORM.FA_CBK_DT.value = SYS_getValueFromMain('FA_CBK_DT');
        document.MAINFORM.FA_MSG16_TYPE.value = SYS_getValueFromMain('FA_MSG16_TYPE');
        document.MAINFORM.FA_CBK_REF.value = SYS_getValueFromMain('FA_CBK_REF');
        if (SYS_BeFloat(document.MAINFORM.FA_CBK_AMT.value) == 0) {
            document.MAINFORM.FA_TEMP4.value = document.MAINFORM.FA_DOC_NO.value;
            FA_MSG_TYPE();
        }
        FA_MSG_FUNC_field();

    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.TEMP_CRN_BA = function() {
    try {
        if (document.MAINFORM.FA_DOC_TYPE.value == '2') {

            document.MAINFORM.FA_TEMP_CRN_BA.value = SYS_BeFloat(document.MAINFORM.FA_CBK_AMT.value);
        } else {

            document.MAINFORM.FA_TEMP_CRN_BA.value = 0;
        }

        document.MAINFORM.FA_TEMP_CRN_BA.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_CRN_BA.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.TEMP_INV_BA = function() {
    try {
        if (document.MAINFORM.FA_DOC_TYPE.value == '1') {
            document.MAINFORM.FA_TEMP_INV_BA.value = SYS_BeFloat(document.MAINFORM.FA_CBK_AMT.value);
        } else {
            document.MAINFORM.FA_TEMP_INV_BA.value = 0;
        }
        document.MAINFORM.FA_TEMP_INV_BA.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_INV_BA.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.check_cbk_amt = function() {
    try {
        var cbkamt = SYS_BeFloat(document.MAINFORM.FA_CBK_AMT.value);
        var docbal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT10.value);
        if (cbkamt > docbal) {
            alert('Charge back amount is not available,please check it!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.setDocBal = function() {
    try {
        document.MAINFORM.FA_DOC_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT10.value) - SYS_BeFloat(document.MAINFORM.FA_CBK_AMT.value);
        document.MAINFORM.FA_DOC_BAL.value = Math.max(SYS_BeFloat(document.MAINFORM.FA_DOC_BAL.value), 0);
        document.MAINFORM.FA_DOC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
        //document.MAINFORM.FA_DOC_BAL.value.fireEvent('onchange');
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_LOAN_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.setDocStatus = function() {
    try {
        if (document.MAINFORM.FA_DOC_BAL.value == 0 && document.MAINFORM.FA_INV_LOAN_BAL.value == 0) {
            document.MAINFORM.FA_DOC_STATUS.value = 'CLOSED';
        } else {
            document.MAINFORM.FA_DOC_STATUS.value = document.MAINFORM.FA_TEMP3.value;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.setFIN_RET_AMT = function() {
    try {
        if (document.MAINFORM.FA_DOC_TYPE.value == '1') {
            var invBal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT10.value);
            var oldCrnBal = SYS_BeFloat(document.MAINFORM.FA_CRN_BAL.value);
            var oldFinRetBal = SYS_BeFloat(document.MAINFORM.TEMP_AMT13.value);
            var amtDiff = invBal - oldCrnBal - (SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_BAL.value) - oldFinRetBal);
            var cbkAmt = SYS_BeFloat(document.MAINFORM.FA_CBK_AMT.value);
            var exRate = SYS_BeFloat(document.MAINFORM.FA_TRF_FX_RT.value);

            if (cbkAmt > amtDiff && cbkAmt <= (invBal - oldCrnBal)) {
                amttoReturn = cbkAmt - amtDiff;
                document.MAINFORM.TEMP_AMT15.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, amttoReturn);
                document.MAINFORM.TEMP_AMT18.value = SYS_BeFloat(amttoReturn * exRate);
                newReturnBal = amttoReturn + oldFinRetBal;
                document.MAINFORM.FA_FIN_RET_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, newReturnBal);
            } else {
                document.MAINFORM.TEMP_AMT15.value = 0;
                document.MAINFORM.TEMP_AMT18.value = 0;
                newReturnBal = oldFinRetBal;
                document.MAINFORM.FA_FIN_RET_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, newReturnBal);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.FA_CBK_AMT_onchange = function(event) {
    try {
        setDocBal();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_BAL, 'onchange');
        //check_cbk_amt();
        TEMP_INV_BA();
        TEMP_CRN_BA();
        setFIN_RET_AMT();
        document.MAINFORM.FA_CBK_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_CBK_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}

csDOScreenProto.FA_DOC_BAL_onchange = function(event) {
    try {
        //setDocStatus();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ChgBKReassign.js", e);
    }
}