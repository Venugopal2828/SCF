var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            SYS_highTrxButton("_confirm", "_cancel", "_transaction");
        }
        SYT_disableAllFields();
        SYT_ChangeFldClass(document.MAINFORM.NOTES, "M");
        EEHtml.getElementById('AA').innerText = "Cancel Internal Transfer";
        document.MAINFORM.NOTES.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_InternalTransfers.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (document.MAINFORM.TRX_HISTORY.value == null) {
            document.MAINFORM.TRX_HISTORY.value = "";
        }

        SYT_Cal_TRX_HISTORY();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_InternalTransfers.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "AT_CANCEL";
        document.MAINFORM.CANCEL_FLG.value = "Yes"; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_InternalTransfers.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_InternalTransfers.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_InternalTransfers.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_InternalTransfers.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_InternalTransfers.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_InternalTransfers.js", e);
    }
}