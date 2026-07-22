"path:SCRN/DO/AssignTraderToTeam.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Chk_DuplicateRecordByAssignTadrToTeamOnCurrDO = function() {		
    try {
        var bReturnDfFlag = false;
        var TADR_ID = document.MAINFORM.TADR_ID.value;
        var TEAM_ID = document.MAINFORM.TEAM_ID.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        var sTargetDoNm = "AssignTraderToTeam";
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
            var sDOTadrTeamId = SYS_getValFromRec(oDoRec, "TEAM_ID");
            var sDOIndexNo = SYS_getValFromRec(oDoRec, "DO_INDEX_NO");
            if (sDOTadrId === TADR_ID && sDOTadrTeamId === TEAM_ID && sDOIndexNo !== DO_INDEX_NO) {
                alert("The Trader ID:" + sDOTadrId + " has already to be assigned " + sDOTadrTeamId + " Team ID!");
                bReturnDfFlag = true;
                document.MAINFORM.TEAM_ID.value = "";
                document.MAINFORM.TEAM_NM.value = "";
                break;
            }
        }
        return bReturnDfFlag;
    } catch (e) {
        DisExcpt("SSSS_AssignTraderToTeam.js", e);
    }
}

csDOScreenProto.Gen_SelectFieldOptionForTeamIdData = function() {			
    try {
        SYS_GetDataBySSS_S("SSSS_CommGetTraderTeamDataByAll_TRX", "C_MAIN_REF");
        var sTeamIdList = SYS_GetMultiFldValueFromArray("TEAM_ID");
        var aTeamId = sTeamIdList.toString().split(",");
        var nLen = aTeamId.length;
        if (nLen > 0) {
            var aTeamIdVal = SYT_create2DArray(2, nLen);
            var i;
            for (i = 0; i < nLen; i++) {
                aTeamIdVal[0][i] = aTeamId[i];
                aTeamIdVal[1][i] = aTeamId[i];
            }
            SYT_genSelectFldOptionFmFreeArray(aTeamIdVal, document.MAINFORM.TEAM_ID.name);
        }
    } catch (e) {
        DisExcpt("SSSS_AssignTraderToTeam.js", e);
    }
}

csDOScreenProto.Get_TeamNameByTeamID = function() {				
    try {
        var TEAM_ID = document.MAINFORM.TEAM_ID.value;
        if (TEAM_ID !== "" && TEAM_ID !== null) {
            SYS_GetCUBK_S("GetTeamNameByTraderTeamId", "TEAM_ID", true);
        }
    } catch (e) {
        DisExcpt("SSSS_AssignTraderToTeam.js", e);
    }
}

csDOScreenProto.InitValues = function() {			
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.TADR_ID.value = SYS_getValueFromMain("TADR_ID");
        document.MAINFORM.TEAM_ID.value = "";
        document.MAINFORM.DO_INDEX_NO.value = SYT_genIndexRef();
    } catch (e) {
        DisExcpt("SSSS_AssignTraderToTeam.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {			
    try {
        Gen_SelectFieldOptionForTeamIdData();
    } catch (e) {
        DisExcpt("SSSS_AssignTraderToTeam.js", e);
    }
}

csDOScreenProto.TEAM_ID_onchange = function(event) {		
    Get_TeamNameByTeamID();
    Chk_DuplicateRecordByAssignTadrToTeamOnCurrDO();
}