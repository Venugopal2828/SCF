var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_TSUM_Chk_TSU_REJT_RSNTP();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRejection.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Chk_TSU_REJT_RSNTP = function() {
    try {

        var TSU_REJT_RSNTP = document.MAINFORM.TSU_REJT_RSNTP.value;
        if (TSU_REJT_RSNTP == "2") {
            SYS_setChildDoOfRootEnabled("RjctdElmtAmd");
            SYT_hideObj("Global Rejection Reason");
            document.MAINFORM.TSU_REJT_RSN2.className = "CHAR_P";
            document.MAINFORM.TSU_REJT_RSN2.value = "";
        } else if (TSU_REJT_RSNTP == "1") {
            SYS_setChildDoOfRootDisabled("RjctdElmtAmd");
            SYT_DisObj("Global Rejection Reason");
            document.MAINFORM.TSU_REJT_RSN2.className = "CHAR_M";
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRejection.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_SUBMITR_BIC = function() {
    try {

        var TSU_SUBMITR_BIC = "";
        TSU_SUBMITR_BIC = SYS_LOGIN_BIC;
        SYT_setFldValue("TSU_SUBMITR_BIC", TSU_SUBMITR_BIC);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRejection.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_TSU_SUBMITR_BIC();
        SYF_TSUM_TSU_REF();
        document.MAINFORM.TSU_OUR_REF.value = document.MAINFORM.C_MAIN_REF.value;
        var amdno = document.MAINFORM.TSU_AMD_NO.value;
        document.MAINFORM.TSU_REJT_AMDMB.value = amdno;
        document.MAINFORM.TSU_REJT_RSNTP.value = '1';
        document.MAINFORM.TSU_REJT_RSN2.value = "";
        document.MAINFORM.TSU_TRX_STATUS.value = "";
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRejection.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_REF = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRejection.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var Prefix = 'ARJ';
        document.MAINFORM.TSU_MESSAGE_ID.value = Prefix + ref;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRejection.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRejection.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRejection.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_REJT_RSNTP_onchange = function(event) {
    try {
        SYF_TSUM_Chk_TSU_REJT_RSNTP();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRejection.js", e);
    }
}