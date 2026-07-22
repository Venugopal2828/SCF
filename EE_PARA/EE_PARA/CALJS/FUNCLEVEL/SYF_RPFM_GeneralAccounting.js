var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_RPFM_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_RPFM_GeneralAccounting.js", e);
    }
}