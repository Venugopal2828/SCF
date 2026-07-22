var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'MM') {
            SYS_highTrxButton("_confirm", "_cancel");
        }
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.SYF_CUOF_succDupChk = function() {
    try {

        alert('The Cutoff time already exists');
        document.MAINFORM.CCY.value = '';
        SYF_CUOF_setRef();
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CCY.value = ''; // Utility Auto Fix Comments
        SYF_CUOF_setRef();
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.SYF_CUOF_setRef = function() {
    try {

        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.CNTY_CODE.value + document.MAINFORM.CCY.value; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.SYF_CUOF_setCutOffTime = function() {
    try {

        document.MAINFORM.CCY_CUTOFF_TIME.value = document.MAINFORM.CUOF_HRS.value + document.MAINFORM.CUOF_MTS.value; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.FLD_CUOF_CCY_onchange = function(event) {
    try {
        SYF_CUOF_setRef();
        EEHtml.fireEvent(document.MAINFORM.C_MAIN_REF, 'onchange');
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.FLD_CUOF_CCY_CUTOFF_TIME_onchange = function(event) {
    try {
        SYM_CUOF_Chk_CutoffTime();
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.FLD_CUOF_CNTY_CODE_onchange = function(event) {
    try {
        SYF_CUOF_setRef();
        EEHtml.fireEvent(document.MAINFORM.C_MAIN_REF, 'onchange');
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.FLD_CUOF_CUOF_HRS_onchange = function(event) {
    try {
        SYF_CUOF_setCutOffTime();
        EEHtml.fireEvent(document.MAINFORM.CCY_CUTOFF_TIME, 'onchange');
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}

csFuncLevelProto.FLD_CUOF_CUOF_MTS_onchange = function(event) {
    try {
        SYF_CUOF_setCutOffTime();
        EEHtml.fireEvent(document.MAINFORM.CCY_CUTOFF_TIME, 'onchange');
    } catch (e) {
        DisExcpt("SYF_CUOF_AddCutOffTime.js", e);
    }
}