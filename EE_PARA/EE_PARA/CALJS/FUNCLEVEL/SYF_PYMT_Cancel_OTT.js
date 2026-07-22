var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "OTT_CANCEL";
        document.MAINFORM.CANCEL_FLG.value = "Yes"; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_OTT.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        SYT_Cal_TRX_HISTORY();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_OTT.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            SYS_highTrxButton("_confirm", "_cancel", "_transaction");
        }

        SYT_disableAllFields();
        SYT_ChangeFldClass(document.MAINFORM.NOTES, "M");
        EEHtml.getElementById('AA').innerText = "Cancel OTT";
        document.MAINFORM.NOTES.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_OTT.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_OTT.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_OTT.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_OTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_AMD_DETAILS = function() {
    try {

        var AMD_DETAILS; // Utility Auto Fix Comments
        var AMD_NON_STD_WORDNG; // Utility Auto Fix Comments
        var AMED_DTL_TEMP; // Utility Auto Fix Comments
        var AMEND_DETAILS_TEMP; // Utility Auto Fix Comments
        var GTEE_WORDING_TEMP; // Utility Auto Fix Comments
        var NON_STD_WORDNG; // Utility Auto Fix Comments
        AMD_DETAILS = document.MAINFORM.AMD_DETAILS.value;
        NON_STD_WORDNG = document.MAINFORM.NON_STD_WORDNG.value;
        AMD_NON_STD_WORDNG = document.MAINFORM.AMD_NON_STD_WORDNG.value.toUpperCase();
        AMD_DETAILS = document.MAINFORM.AMD_DETAILS.value; // Utility Auto Fix Comments
        AMED_DTL_TEMP = document.MAINFORM.AMD_DTL_TEMP.value.toUpperCase();
        GTEE_WORDING_TEMP = document.MAINFORM.GTEE_WORDING_TEMP.value;
        AMEND_DETAILS_TEMP = document.MAINFORM.AMEND_DETAILS_TEMP.value;

        if (AMD_DETAILS != "" && AMD_DETAILS != null) {
            if (AMD_NON_STD_WORDNG != "") {
                if (GTEE_WORDING_TEMP != "") {
                    NON_STD_WORDNG = GTEE_WORDING_TEMP + "\n" + "ADDITIONAL AMENDMENT INFORMATION:" + "\n" + AMD_NON_STD_WORDNG;
                } else {
                    NON_STD_WORDNG = "ADDITIONAL AMENDMENT INFORMATION:" + "\n" + AMD_NON_STD_WORDNG;
                }
                if (AMD_DETAILS != "") {
                    AMD_DETAILS = AMEND_DETAILS_TEMP + "\n" + "OTHER AMENDMENT DETAILS:" + "\n" + AMED_DTL_TEMP + "\n" + "WORDING CHANGES ARE AS FOLLOWING:" + "\n" + AMD_NON_STD_WORDNG;
                } else {
                    AMD_DETAILS = AMEND_DETAILS_TEMP + "\n" + "WORDING CHANGES ARE AS FOLLOWING:" + "\n" + AMD_NON_STD_WORDNG;
                }

            } else {
                NON_STD_WORDNG = GTEE_WORDING_TEMP;
                if (AMED_DTL_TEMP != "") {
                    AMD_DETAILS = AMEND_DETAILS_TEMP + "\n" + "OTHER AMENDMENT DETAILS:" + "\n" + AMED_DTL_TEMP;
                } else {
                    AMD_DETAILS = AMEND_DETAILS_TEMP;
                }
            }
        } else {
            if (AMD_NON_STD_WORDNG != "") {
                NON_STD_WORDNG = GTEE_WORDING_TEMP + "\n" + "ADDITIONAL AMENDMENT INFORMATION:" + "\n" + AMD_NON_STD_WORDNG;
                if (AMED_DTL_TEMP != "") {
                    AMD_DETAILS = "OTHER AMENDMENT DETAILS:" + "\n" + AMED_DTL_TEMP + "\n" + "WORDING CHANGES ARE AS FOLLOWING:" + "\n" + AMD_NON_STD_WORDNG;
                } else {
                    AMD_DETAILS = "WORDING CHANGES ARE AS FOLLOWING:" + "\n" + AMD_NON_STD_WORDNG;
                }

            } else {
                NON_STD_WORDNG = GTEE_WORDING_TEMP;
                if (AMED_DTL_TEMP != "") {
                    AMD_DETAILS = "OTHER AMENDMENT DETAILS:" + "\n" + AMED_DTL_TEMP;
                } else {
                    AMD_DETAILS = "";
                }
            }
        }
        document.MAINFORM.AMD_DETAILS.value = AMD_DETAILS;
        document.MAINFORM.NON_STD_WORDNG.value = NON_STD_WORDNG;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_OTT.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_OTT.js", e);
    }
}