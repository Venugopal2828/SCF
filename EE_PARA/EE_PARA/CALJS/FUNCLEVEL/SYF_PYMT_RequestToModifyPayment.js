var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RequestToModifyPayment.js*ConfirmBusinessCheck", e);
    }
}

var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RequestToModifyPayment.js*ConfirmBusinessCheck", e);
    }
}

var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RequestToModifyPayment.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_RequestToModifyPayment.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_RequestToModifyPayment.js*ConfirmBusinessCallSave", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RequestToModifyPayment.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RequestToModifyPayment.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_RequestToModifyPayment.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_RequestToModifyPayment.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_PYMT_guid = function() {
    try {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    } catch (e) {
        DisExcpt("SYF_PYMT_RequestToModifyPayment.js*SYF_PYMT_guid", e);
    }
}