"path:SCRN/DO/KDFolderDetails.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});
csDOScreenProto.Cal_SHORT_NM_ToUpperCase = function() {		
    try {
        var SHORT_NM = document.MAINFORM.SHORT_NM.value;
        document.MAINFORM.SHORT_NM.value = SYT_setFldValToUpperCase(SHORT_NM);
    } catch (e) {
        DisExcpt("SSSS_KDFolderDetails.js", e);
    }
}

csDOScreenProto.Chk_DuplicateRecordByKDFolderDetailsOnCurrDO = function() {		
    try {
        var bReturnDfFlag = false;
        var TADR_ID = document.MAINFORM.TADR_ID.value;
        var PORTFL_CD = document.MAINFORM.PORTFL_CD.value;
        var POSIT_TP = document.MAINFORM.POSIT_TP.value;
        var SHORT_NM = document.MAINFORM.SHORT_NM.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        var sTargetDoNm = "KDFolderDetails";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The DO: " + sTargetDoNm + " not exist!");
            return;
        }
        var sBtStat = oTargetDO.getStatue();
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var i;
        for (i = 0; i < oDoAllRecs.length; i++) {
            var oDoRec = oDoAllRecs[i];
            var sDOTadrId = SYS_getValFromRec(oDoRec, "TADR_ID");
            var sDOPortflCd = SYS_getValFromRec(oDoRec, "PORTFL_CD");
            var sDOPositTp = SYS_getValFromRec(oDoRec, "POSIT_TP");
            var sDOShortNm = SYS_getValFromRec(oDoRec, "SHORT_NM");
            var sDOIndexNo = SYS_getValFromRec(oDoRec, "DO_INDEX_NO");
            if (sDOShortNm === SHORT_NM && sDOIndexNo !== DO_INDEX_NO) {
                alert("The Folder Short Name:" + sDOShortNm + " have been exist!");
                bReturnDfFlag = true;
                document.MAINFORM.SHORT_NM.value = "";
                break;
            }
        }
        return bReturnDfFlag;
    } catch (e) {
        DisExcpt("SSSS_KDFolderDetails.js", e);
    }
}

csDOScreenProto.Gen_SelectFieldOptionFromAssignTeamData = function() {		
    try {
        var oTargetDO = SYS_getDoByXpath("AssignTraderToTeam");
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            return;
        }
        var aTadrTeam = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var i;
        for (i = 0; i < oDoAllRecs.length; i++) {
            var oDoRec = oDoAllRecs[i];
            var TEAM_ID = SYS_getValFromRec(oDoRec, "TEAM_ID");
            aTadrTeam[i] = TEAM_ID;
        }
        var nLen = aTadrTeam.length;
        if (nLen > 0) {
            var aTadrTeamIdVal = SYT_create2DArray(2, nLen);
            var j;
            for (j = 0; j < nLen; j++) {
                aTadrTeamIdVal[0][j] = aTadrTeam[j];
                aTadrTeamIdVal[1][j] = aTadrTeam[j];
            }
            SYT_genSelectFldOptionFmFreeArray(aTadrTeamIdVal, "TEAM_ID");
        }

    } catch (e) {
        DisExcpt("SSSS_KDFolderDetails.js", e);
    }
}

csDOScreenProto.Gen_SelectFieldOptionFromPortfolioData = function() {	
    try {
        var PORTFL_CD = document.MAINFORM.PORTFL_CD.value;
        SYS_GetDataBySSS_S("SSSS_CommGetPortfolioDataByTeamId_TRX", "TEAM_ID");
        var sPortflCdList = SYS_GetMultiFldValueFromArray("PORTFL_CD");
        var aPortflCd = sPortflCdList.toString().split(",");
        if (sPortflCdList === "" || sPortflCdList === null) {
            SYT_cleanSelectFieldAllOption("PORTFL_CD");
            return;
        }
        var nLen = aPortflCd.length;
        if (nLen > 0) {
            var aPortflVal = SYT_create2DArray(2, nLen);
            var i;
            for (i = 0; i < nLen; i++) {
                aPortflVal[0][i] = aPortflCd[i];
                aPortflVal[1][i] = aPortflCd[i];
            }
            SYT_genSelectFldOptionFmFreeArray(aPortflVal, "PORTFL_CD");
        }
        if (SYS_FUNCTION_TYPE === "EC" || SYS_ORG_FUNCTION_NAME === "EditTraderData") {
            document.MAINFORM.PORTFL_CD.value = PORTFL_CD;
        }
    } catch (e) {
        DisExcpt("SSSS_KDFolderDetails.js", e);
    }
}

csDOScreenProto.Gen_SelectFieldOptionFromPortfolioDataByAll = function() {		
    try {
        SYS_GetDataBySSS_S("SSSS_CommGetPortfolioDataByAll_TRX", "C_MAIN_REF");
        var sPortflCdList = SYS_GetMultiFldValueFromArray("PORTFL_CD");
        var aPortflCd = sPortflCdList.toString().split(",");
        if (sPortflCdList === "" || sPortflCdList === null) {
            SYT_cleanSelectFieldAllOption("PORTFL_CD");
            return;
        }
        var nLen = aPortflCd.length;
        if (nLen > 0) {
            var aPortflVal = SYT_create2DArray(2, nLen);
            var i;
            for (i = 0; i < nLen; i++) {
                aPortflVal[0][i] = aPortflCd[i];
                aPortflVal[1][i] = aPortflCd[i];
            }
            SYT_genSelectFldOptionFmFreeArray(aPortflVal, "PORTFL_CD");
        }
    } catch (e) {
        DisExcpt("SSSS_KDFolderDetails.js", e);
    }
}

csDOScreenProto.Gen_SelectFldOtpOfPositionType = function() {		
    try {
        document.MAINFORM.ITEM_FLD_NM.value = "PositionType";
        SYT_genSelectFldOptionFmCommonModule("POSIT_TP");
    } catch (e) {
        DisExcpt("SSSS_KDFolderDetails.js", e);
    }
}

csDOScreenProto.InitValues = function() {			
    try {
        document.MAINFORM.TADR_ID.value = SYS_getValueFromMain("TADR_ID");
        document.MAINFORM.TADR_EN_NM.value = SYS_getValueFromMain("TADR_EN_NM");
        document.MAINFORM.BR_CD.value = SYS_getValueFromMain("TADR_BR_CD");
        document.MAINFORM.DO_INDEX_NO.value = SYT_genIndexRef();
    } catch (e) {
        DisExcpt("SSSS_KDFolderDetails.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {		
    try {
        if (SYS_FUNCTION_TYPE === "EC" || SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "MM") {
            Gen_SelectFieldOptionFromPortfolioData();
        }

    } catch (e) {
        DisExcpt("SSSS_KDFolderDetails.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {		
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
            SYT_genSelectFldOptionFmFreeArray(aBranchCdVal, "BR_CD");
        }
        //SYT_genSelectFieldOptionFromBranchCodeData("BR_CD");
        //Gen_SelectFldOtpOfPositionType();
        Gen_SelectFieldOptionFromAssignTeamData();
        Gen_SelectFieldOptionFromPortfolioDataByAll();
    } catch (e) {
        DisExcpt("SSSS_KDFolderDetails.js", e);
    }
}

csDOScreenProto.PORTFL_CD_onchange = function(event) {		
    Chk_DuplicateRecordByKDFolderDetailsOnCurrDO();
}

csDOScreenProto.POSIT_TP_onchange = function(event) {		
    Chk_DuplicateRecordByKDFolderDetailsOnCurrDO();
}

csDOScreenProto.SHORT_NM_onchange = function(event) {		
    Cal_SHORT_NM_ToUpperCase();
    Chk_DuplicateRecordByKDFolderDetailsOnCurrDO();
}

csDOScreenProto.TEAM_ID_onchange = function(event) {			
    Gen_SelectFieldOptionFromPortfolioData();
}