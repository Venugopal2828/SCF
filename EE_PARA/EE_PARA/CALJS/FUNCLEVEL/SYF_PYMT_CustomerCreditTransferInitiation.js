var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CustomerCreditTransferInitiation.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_CustomerCreditTransferInitiation.js*ConfirmBusinessCallSave", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CustomerCreditTransferInitiation.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CustomerCreditTransferInitiation.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_CustomerCreditTransferInitiation.js*InitValues", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_CustomerCreditTransferInitiation.js*PreInitValues", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_CustomerCreditTransferInitiation.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnUnload = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_CustomerCreditTransferInitiation.js*PreconditionOnUnload", e);
    }
}

csFuncLevelProto.ReleaseConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CustomerCreditTransferInitiation.js*ReleaseConfirmBusinessCheck", e);
    }
}