var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        disableToolbarButton("_SaveTmpl");
        disableToolbarButton("_LoadTmpl");
    } catch (e) {
        DisExcpt("SYF_SBLC_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SBLC_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SBLC_GeneralAccounting.js", e);
    }
}