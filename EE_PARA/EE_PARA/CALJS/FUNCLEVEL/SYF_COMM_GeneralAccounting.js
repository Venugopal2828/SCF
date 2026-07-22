var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_COMM_SetRef = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_COMM_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('COMM', 'SYF_COMM_SetRef');
    } catch (e) {
        DisExcpt("SYF_COMM_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_COMM_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_COMM_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.FLD_COMM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_COMM_GeneralAccounting.js", e);
    }
}

csFuncLevelProto.FLD_COMM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_COMM_GeneralAccounting.js", e);
    }
}