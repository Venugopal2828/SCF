var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CustomerPaymentStatusReport.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_CustomerPaymentStatusReport.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_CustomerPaymentStatusReport.js*ConfirmBusinessCallSave", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CustomerPaymentStatusReport.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CustomerPaymentStatusReport.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_CustomerPaymentStatusReport.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_CustomerPaymentStatusReport.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_CustomerPaymentStatusReport.js*PreInitValues", e);
    }
}

csFuncLevelProto.ReleaseConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CustomerPaymentStatusReport.js*ReleaseConfirmBusinessCheck", e);
    }
}