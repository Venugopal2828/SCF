var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.RT_CCY_LCY.value = '1.00';
    } catch (e) {
        DisExcpt("SYF_CFNC_DiscountAmendApprove.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_DiscountAmendApprove.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_DiscountAmendApprove.js", e);
    }
}