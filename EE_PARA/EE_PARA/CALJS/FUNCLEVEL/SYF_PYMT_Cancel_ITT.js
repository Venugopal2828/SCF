var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYS_Batch_CheckFieldValue()) {
            return false;
        }
        //check whether the value of all class fields are correct
        SYT_Cal_TRX_HISTORY();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_ITT.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "ITT_CANCEL";
        document.MAINFORM.NXT_STATUS.value = "END";
        document.MAINFORM.CANCEL_FLG.value = "Yes";
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_ITT.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            SYS_highTrxButton("_confirm", "_cancel", "_transaction");
        }

        SYT_disableAllFields();
        SYT_ChangeFldClass(document.MAINFORM.NOTES, "M");
        EEHtml.getElementById('AA').innerText = "Cancel ITT";
        document.MAINFORM.NOTES.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_ITT.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_ITT.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_ITT.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_ITT.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_ITT.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Cancel_ITT.js", e);
    }
}