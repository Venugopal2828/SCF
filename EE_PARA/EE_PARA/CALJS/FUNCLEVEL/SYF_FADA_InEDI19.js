var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI19.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI19.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI19.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_InEDI19.js", e);
    }
}