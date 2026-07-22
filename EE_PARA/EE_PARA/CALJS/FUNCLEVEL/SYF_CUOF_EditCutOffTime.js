var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'MM') {
            SYS_highTrxButton("_confirm", "_cancel");
        }
        EEHtml.getElementById('Main').innerText = 'Edit Cutoff Times'; // Utility Auto Fix Comments
        SYT_ChangeFldClass(document.MAINFORM.CNTY_CODE, "P");
        SYT_ChangeFldClass(document.MAINFORM.CCY, "P");
    } catch (e) {
        DisExcpt("SYF_CUOF_EditCutOffTime.js", e);
    }
}

csFuncLevelProto.SYF_CUOF_setCutOffTime = function() {
    try {

        document.MAINFORM.CCY_CUTOFF_TIME.value = document.MAINFORM.CUOF_HRS.value + document.MAINFORM.CUOF_MTS.value; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_CUOF_EditCutOffTime.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_EditCutOffTime.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_EditCutOffTime.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_EditCutOffTime.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_EditCutOffTime.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_EditCutOffTime.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_EditCutOffTime.js", e);
    }
}

csFuncLevelProto.FLD_CUOF_CCY_CUTOFF_TIME_onchange = function(event) {
    try {
        SYF_CUOF_setCutOffTime(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_CUOF_EditCutOffTime.js", e);
    }
}

csFuncLevelProto.FLD_CUOF_CUOF_HRS_onchange = function(event) {
    try {
        SYF_CUOF_setCutOffTime();
        EEHtml.fireEvent(document.MAINFORM.CCY_CUTOFF_TIME, 'onchange');
    } catch (e) {
        DisExcpt("SYF_CUOF_EditCutOffTime.js", e);
    }
}

csFuncLevelProto.FLD_CUOF_CUOF_MTS_onchange = function(event) {
    try {
        SYF_CUOF_setCutOffTime();
        EEHtml.fireEvent(document.MAINFORM.CCY_CUTOFF_TIME, 'onchange');
    } catch (e) {
        DisExcpt("SYF_CUOF_EditCutOffTime.js", e);
    }
}