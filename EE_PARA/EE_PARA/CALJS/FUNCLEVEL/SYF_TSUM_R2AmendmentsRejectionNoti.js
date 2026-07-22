var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_TSUM_Check_REJT();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentsRejectionNoti.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Check_REJT = function() {
    try {

        var TSU_REJT_RSNTP = SYT_getFldValue("TSU_REJT_RSNTP");
        if (TSU_REJT_RSNTP == "2") {

            SYT_hideObj("Global Rejection Reason");
            document.MAINFORM.TSU_REJT_RSN2.value = "";
            SYS_setChildDoOfRootEnabled("RjctdElmtAmd");
        } else if (TSU_REJT_RSNTP == "1") {
            SYS_setChildDoOfRootDisabled("RjctdElmtAmd");
            SYT_DisObj("Global Rejection Reason");
            document.MAINFORM.TSU_REJT_RSN2.className = "CHAR_P";
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentsRejectionNoti.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentsRejectionNoti.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentsRejectionNoti.js", e);
    }
}