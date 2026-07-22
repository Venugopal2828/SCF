var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_CZQO_SetRefNo();
    } catch (e) {
        DisExcpt("SYF_CZQO_AddLimitTransferbyMaster.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CZQO_AddLimitTransferbyMaster.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CZQO_AddLimitTransferbyMaster.js", e);
    }
}