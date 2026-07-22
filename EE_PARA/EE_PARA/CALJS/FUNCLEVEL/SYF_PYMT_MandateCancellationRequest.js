var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_MandateCancellationRequest.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_MandateCancellationRequest.js*ConfirmBusinessCheck", e);
    }
}
csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.UETR_GPI_121.value = SYF_PYMT_guid();
    } catch (e) {
        DisExcpt("SYF_PYMT_MandateAmendmentRequest.js*InitValues", e);
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
        DisExcpt("SYF_PYMT_MandateAmendmentRequest.js*SYF_PYMT_guid", e);
    }
}