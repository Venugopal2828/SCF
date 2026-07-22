var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AutoFinancing_ME.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_AutoFinancing_ME.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_AutoFinancing_ME.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AutoFinancing_ME.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_AutoFinancing_ME.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_AutoFinancing_ME.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_AutoFinancing_ME.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AutoFinancing_ME.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AutoFinancing_ME.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AutoFinancing_ME.js*editRecordCheck", e);
    }
}