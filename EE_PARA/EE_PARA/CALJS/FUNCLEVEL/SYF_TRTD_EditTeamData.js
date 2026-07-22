var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_DATE;
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTeamData.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_TRTD_Cal_TeamPrftSynchronization();
        document.MAINFORM.CURRENT_STATUS.value = "TeamConfirm";
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTeamData.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {	
    try {

        document.MAINFORM.CURRENT_STATUS.value = "TeamSave";
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTeamData.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {		
    try {

        if (SYS_FUNCTION_TYPE !== "EC" && SYS_FUNCTION_TYPE !== "RE") {
            SYS_GetDataForDO_S("GetTeamPortfolioDetails", "N", false);
        }
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTeamData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_DuplicateTeamName = function() {		
    try {

        var TEAM_NM = document.MAINFORM.TEAM_NM.value;
        var sTeamFldNm = document.MAINFORM.TEAM_NM.name;
        if (TEAM_NM !== "" && TEAM_NM !== null) {
            document.MAINFORM.TEMP_CHK_DUP_INDEX.value = "";
            SYS_GetCUBK("ChkTeamNameIsDuplicate", sTeamFldNm, "SYF_TRTD_Chk_DuplicateTeamNameSuccess", "SYF_TRTD_Chk_DuplicateTeamNameFail", true);
        } else {
            SYF_TRTD_Set_TeamPortfolioDetailsDoButton();
        }
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTeamData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_DuplicateTeamNameFail = function() {		
    try {

        SYF_TRTD_Set_TeamPortfolioDetailsDoButton();
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTeamData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_DuplicateTeamNameSuccess = function() {		
    try {

        var TEMP_CHK_DUP_INDEX = document.MAINFORM.TEMP_CHK_DUP_INDEX.value;
        var C_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        if (C_MAIN_REF !== TEMP_CHK_DUP_INDEX) {
            var TEAM_NM = document.MAINFORM.TEAM_NM;
            SYS_CheckError(TEAM_NM, "The Team Name:" + TEAM_NM.value + " is exist!");
            document.MAINFORM.TEAM_NM.value = "";
        }
        SYF_TRTD_Set_TeamPortfolioDetailsDoButton();

    } catch (e) {
        DisExcpt("SYF_TRTD_EditTeamData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Set_TeamPortfolioDetailsDoButton = function() {		
    try {

        var TEAM_ID = document.MAINFORM.TEAM_ID.value;
        var TEAM_NM = document.MAINFORM.TEAM_NM.value;
        var sDoNm = "TeamPortfolioDetails";
        if ((TEAM_ID === "" || TEAM_ID === null) || (TEAM_NM === "" || TEAM_NM === null)) {
            SYT_setDOGridButtonDisable(sDoNm, "A");
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYT_setDOGridButtonEnable(sDoNm, "A");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTeamData.js", e);
    }
}

csFuncLevelProto.FLD_TRTD_TEAM_NM_onchange = function(event) {	
    try {
        SYF_TRTD_Chk_DuplicateTeamName();
    } catch (e) {
        DisExcpt("SYF_TRTD_EditTeamData.js", e);
    }
}