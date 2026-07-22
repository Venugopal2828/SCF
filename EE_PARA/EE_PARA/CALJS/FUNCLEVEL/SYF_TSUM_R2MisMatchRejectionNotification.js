var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_CHECKRSN = function() {
    try {

        var TSU_REJT_RSNTP = document.MAINFORM.TSU_REJT_RSNTP.value;
        if (TSU_REJT_RSNTP == "2") {
            document.MAINFORM.TSU_REJT_RSN2.value = "";
            SYT_hideObj("Global Rejection Reason");
            SYS_setChildDoOfRootEnabled("RjctdElmtMis");
        } else if (TSU_REJT_RSNTP == "1") {
            SYS_setChildDoOfRootDisabled("RjctdElmtMis");
            SYT_DisObj("Global Rejection Reason");
            document.MAINFORM.TSU_REJT_RSN2.className = "CHAR_P";
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2MisMatchRejectionNotification.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_TSUM_CHECKRSN();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2MisMatchRejectionNotification.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2MisMatchRejectionNotification.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2MisMatchRejectionNotification.js", e);
    }
}