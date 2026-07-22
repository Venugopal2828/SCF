var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYT_CLERK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_ReceiveMT740.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_ShowBlankRow('REIM_LC Detail_2', 1);
        SYT_ShowBlankRow('REIM_Financial Details_2', 4);
        SYT_ShowBlankRow('REIM_Available With Bank_1', 1);
        SYT_ShowBlankRow('REIM_Drawee_1', 1);
    } catch (e) {
        DisExcpt("SYF_REIM_ReceiveMT740.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ReceiveMT740.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ReceiveMT740.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ReceiveMT740.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ReceiveMT740.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ReceiveMT740.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ReceiveMT740.js", e);
    }
}