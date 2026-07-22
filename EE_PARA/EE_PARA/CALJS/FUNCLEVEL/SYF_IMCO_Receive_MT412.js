var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Receive_MT412.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Receive_MT412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_Receive_MT412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SHIP_FM_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('SHIP_FM_CNTY_CODE', document.MAINFORM.SHIP_FM_CNTY_CODE.name);
    } catch (e) {
        DisExcpt("SYF_IMCO_Receive_MT412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SHIP_TO_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('SHIP_TO_CNTY_CODE', document.MAINFORM.SHIP_TO_CNTY_CODE.name);
    } catch (e) {
        DisExcpt("SYF_IMCO_Receive_MT412.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_Receive_MT412.js", e);
    }
}