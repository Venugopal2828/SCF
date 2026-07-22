var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_DATE;
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTraderData.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {

        document.MAINFORM.CURRENT_STATUS.value = "TraderSave";
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTraderData.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_TRTD_Cal_AssignTadrToTeamSynchronization();
        SYM_TRTD_Cal_KDForderSynchronization();
        document.MAINFORM.CURRENT_STATUS.value = "TraderConfirm";
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTraderData.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE !== "EC" && SYS_FUNCTION_TYPE !== "RE") {
            SYS_GetDataForDO_S("GetAssignTraderToTeam", "N", false);
            SYS_GetDataForDO_S("GetKDFolderDetails", "N", false);
        }
        SYF_TRTD_Chk_SyncTraderInfo();
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_SyncTraderInfo = function() {
    try {

        if (SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "MM" || SYS_FUNCTION_TYPE === "EC") {
            SYS_GetCUBK("GetUserIdFmSecuData", document.MAINFORM.TADR_ID.name, "SYF_TRTD_Chk_SyncTraderInfoSuccess", "SYF_TRTD_Chk_SyncTraderInfoFail", true);
        }
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_SyncTraderInfoSuccess = function() {
    try {

        alert("Trader Data already updating from Userprofile!");
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_SyncTraderInfoFail = function() {
    try {

        var TADR_ID = document.MAINFORM.TADR_ID.value;
        alert("The Trader: " + TADR_ID + "is not exist in user list of GTS System Security already, Please check frist!");
        SYT_setDisableDiv("A_div", null);
        SYF_TRTD_Set_DisabledDoButton();
        SYS_highTrxButton("_cancel");
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Set_DisabledDoButton = function() {	
    try {

        SYT_setDOGridButtonDisable("KDFolderDetails", "A");
        SYT_setDOGridButtonDisable("AssignTraderToTeam", "A");

    } catch (e) {
        DisExcpt("SYF_TRTD_EditTraderData.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        //SYT_genSelectFieldOptionFromBranchCodeData("TADR_BR_CD");
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTraderData.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        if (!SYM_TRTD_Chk_NotHaveDelTeamInKDForderDO()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTraderData.js", e);
    }
}
