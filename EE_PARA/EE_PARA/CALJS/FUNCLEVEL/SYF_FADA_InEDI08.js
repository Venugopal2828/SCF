var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_BUSI_TYPE_FIELD = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            EEHtml.getElementById('EF1').style.display = "";
            EEHtml.getElementById('EF2').style.display = "";
            EEHtml.getElementById('EF3').style.display = "";
            EEHtml.getElementById('IF1').style.display = "none";
            EEHtml.getElementById('IF2').style.display = "none";
            EEHtml.getElementById('IF3').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'IF') {
            EEHtml.getElementById('EF1').style.display = "none";
            EEHtml.getElementById('EF2').style.display = "none";
            EEHtml.getElementById('EF3').style.display = "none";
            EEHtml.getElementById('IF1').style.display = "";
            EEHtml.getElementById('IF2').style.display = "";
            EEHtml.getElementById('IF3').style.display = "";
        }
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI08.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_FADA_BUSI_TYPE_FIELD();
        document.MAINFORM.FA_REASON.remove(19);
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI08.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI08.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI08.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI08.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI08.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI08.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI08.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI08.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI08.js", e);
    }
}