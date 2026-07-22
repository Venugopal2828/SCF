var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.C_MAIN_REF.value = SYT_genIndexRef();
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.TADR_BR_CD.value = SYS_BUSI_UNIT;

    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {	
    try {

        SYM_TRTD_Cal_AssignTadrToTeamSynchronization();
        SYM_TRTD_Cal_KDForderSynchronization();
        document.MAINFORM.CURRENT_STATUS.value = "TraderConfirm";
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {		
    try {

        document.MAINFORM.CURRENT_STATUS.value = "TraderSave";
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_DuplicateTraderID = function() {		
    try {

        var TADR_ID = document.MAINFORM.TADR_ID.value;
        var sTadrIdFldNm = document.MAINFORM.TADR_ID.name;
        if (TADR_ID !== "" && TADR_ID !== null) {
            SYS_GetCUBK("ChkTraderIDIsDuplicate", sTadrIdFldNm, "SYF_TRTD_Chk_DuplicateTraderIDSuccess", "SYF_TRTD_Chk_DuplicateTraderIDFail", true);
        } else {
            SYT_cleanAllFieldValuOfDiv("A_div", "C_MAIN_REF|TRX_DT|TADR_BR_CD");
        }
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_DuplicateTraderIDSuccess = function() {			
    try {

        var TEMP_CHK_DUP_INDEX = document.MAINFORM.TEMP_CHK_DUP_INDEX.value;
        var C_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        if (C_MAIN_REF !== TEMP_CHK_DUP_INDEX) {
            var TADR_ID = document.MAINFORM.TADR_ID;
            SYS_CheckError(TADR_ID, "The Trader ID:" + TADR_ID.value + " is exist!");
            document.MAINFORM.TADR_ID.value = "";
        }
        SYF_TRTD_Set_AssignTraderToTeamDoButton();
        SYF_TRTD_Set_KDFolderDetailsDoButton();
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Set_AssignTraderToTeamDoButton = function() {			
    try {

        var TARD_ID = document.MAINFORM.TADR_ID.value;
        var sDoNm = "AssignTraderToTeam";
        if (TARD_ID === "" || TARD_ID === null) {
            SYT_setDOGridButtonDisable(sDoNm, "A");
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYT_setDOGridButtonEnable(sDoNm, "A");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {			
    try {

        SYF_TRTD_Set_AssignTraderToTeamDoButton();
        SYF_TRTD_Set_KDFolderDetailsDoButton();
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Set_KDFolderDetailsDoButton = function() {			
    try {

        var TARD_ID = document.MAINFORM.TADR_ID.value;
        var sDoNm = "KDFolderDetails";
        if (TARD_ID === "" || TARD_ID === null) {
            SYT_setDOGridButtonDisable(sDoNm, "A");
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYT_setDOGridButtonEnable(sDoNm, "A");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_DuplicateTraderIDFail = function() {		
    try {

        SYF_TRTD_Chk_TraderIDIsExistSecu();
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_TraderIDIsExistSecu = function() {			
    try {

        var TADR_ID = document.MAINFORM.TADR_ID.value;
        var TADR_BR_CD = document.MAINFORM.TADR_BR_CD.value;
        var sSQLWhere = "C_USER_ID = '" + TADR_ID + "' AND C_UNIT_CODE = '" + TADR_BR_CD + "'";
        var sTableName = "SEC_USER_INFO";
        var sFieldList = "C_USER_ID";
        var sMappingList = "TADR_ID";
        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, "SYF_TRTD_Chk_TraderIDIsExistSecuSuccess", "SYF_TRTD_Chk_TraderIDIsExistSecuFail", true);
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_TraderIDIsExistSecuSuccess = function() {			
    try {

        SYS_GetCUBK_S("GetUserIdFmSecuData", document.MAINFORM.TADR_ID.name, true);
        SYF_TRTD_Get_TraderCountryName();
        SYF_TRTD_Set_AssignTraderToTeamDoButton();
        SYF_TRTD_Set_KDFolderDetailsDoButton();
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Chk_TraderIDIsExistSecuFail = function() {			
    try {

        var TADR_ID = document.MAINFORM.TADR_ID;
        SYS_CheckError(TADR_ID, "The Trader ID:" + TADR_ID.value + " was not authorized to use Trader System!");
        SYT_cleanAllFieldValuOfDiv("A_div", "C_MAIN_REF|TRX_DT|TADR_BR_CD");
        SYF_TRTD_Set_AssignTraderToTeamDoButton();
        SYF_TRTD_Set_KDFolderDetailsDoButton();
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {			
    try {
        SYS_GetDataBySSS_S("SSSS_CommGetBranchDataByAll_TRX", "C_MAIN_REF");
        var aBrIdValList = SYS_GetMultiFldValueFromArray("BR_ID");
        var nLen = aBrIdValList.length;
        if (nLen > 0) {
            var aBranchCdVal = SYT_create2DArray(2, nLen);
            var i;
            for (i = 0; i < nLen; i++) {
                aBranchCdVal[0][i] = aBrIdValList[i];
                aBranchCdVal[1][i] = aBrIdValList[i];
            }
            SYT_genSelectFldOptionFmFreeArray(aBranchCdVal, "TADR_BR_CD");
        }
        //SYT_genSelectFieldOptionFromBranchCodeData("TADR_BR_CD");
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Inq_TraderIdFmSecuData = function() {		
    try {

        var sSqlWhere = "C_UNIT_CODE='" + SYS_BUSI_UNIT + "'";
        SYS_InqCUBK_Sql("GetUserIdFmSecuData", sSqlWhere);
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.SYF_TRTD_Get_TraderCountryName = function() {			
    try {

        var TADR_CNTY_CD = document.MAINFORM.TADR_CNTY_CD.value;
        var sTadrCntyFldNm = document.MAINFORM.TADR_CNTY_NM.name;
        SYT_getCountryName(TADR_CNTY_CD, sTadrCntyFldNm);
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {		
    try {

        if (!SYM_TRTD_Chk_NotHaveDelTeamInKDForderDO()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.FLD_TRTD_TADR_BR_CD_onchange = function(event) {		
    try {
        SYF_TRTD_Chk_TraderIDIsExistSecu();
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.FLD_TRTD_TADR_ID_onchange = function(event) {			
    try {
        SYF_TRTD_Chk_DuplicateTraderID();
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}

csFuncLevelProto.FLD_TRTD_TADR_ID_BTN_onclick = function(event) {			
    try {
        SYF_TRTD_Inq_TraderIdFmSecuData();
    } catch (e) {
        DisExcpt("SYF_TRTD_AddTraderData.js", e);
    }
}