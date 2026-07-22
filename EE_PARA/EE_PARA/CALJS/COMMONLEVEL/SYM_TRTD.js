function SYM_TRTD_Cal_TeamPrftSynchronization() {
    try {

        var TEAM_ID = document.MAINFORM.TEAM_ID.value;
        var TEAM_NM = document.MAINFORM.TEAM_NM.value;
        var sTargetDoNm = "TeamPortfolioDetails";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            return;
        }
        var aTeamPrtfRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nTeamPrtfRecCount = oDoAllRecs.length;
        if (nTeamPrtfRecCount > 0) {
            var j;
            for (j = 0; j < nTeamPrtfRecCount; j++) {
                var oTeamPrtfDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oTeamPrtfDoRec, "TEAM_ID", TEAM_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "TEAM_NM", TEAM_NM);
                aTeamPrtfRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aTeamPrtfRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRTD.js*SYM_TRTD_Cal_TeamPrftSynchronization", e);
    }
}

function SYM_TRTD_Cal_AssignTadrToTeamSynchronization() {
    try {

        var TADR_ID = document.MAINFORM.TADR_ID.value;
        var sTargetDoNm = "AssignTraderToTeam";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            return;
        }
        var aAsgTadrTeamRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nAsgTadrTeamRecCount = oDoAllRecs.length;
        if (nAsgTadrTeamRecCount > 0) {
            var j;
            for (j = 0; j < nAsgTadrTeamRecCount; j++) {
                var oAsgTadrTeamDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oAsgTadrTeamDoRec, "TADR_ID", TADR_ID);
                aAsgTadrTeamRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aAsgTadrTeamRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRTD.js*SYM_TRTD_Cal_AssignTadrToTeamSynchronization", e);
    }
}

function SYM_TRTD_Cal_KDForderSynchronization() {
    try {

        var TADR_ID = document.MAINFORM.TADR_ID.value;
        var TADR_EN_NM = document.MAINFORM.TADR_EN_NM.value;
        var sTargetDoNm = "KDFolderDetails";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            return;
        }
        var aKDForderRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nKDForderRecCount = oDoAllRecs.length;
        if (nKDForderRecCount > 0) {
            var j;
            for (j = 0; j < nKDForderRecCount; j++) {
                var oKDForderDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oKDForderDoRec, "TADR_ID", TADR_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "TADR_EN_NM", TADR_EN_NM);
                aKDForderRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aKDForderRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRTD.js*SYM_TRTD_Cal_KDForderSynchronization", e);
    }
}

function SYM_TRTD_Chk_NotHaveDelTeamInKDForderDO() {
    try {

        var bChkFlg = true;
        var nAsTmTrRecCount = 0;
        var nKDRecCount = 0;
        var sTargetDoNm = "AssignTraderToTeam";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            bChkFlg = false;
        }
        var aAsgTmTrRecSet = [];
        var oAsgTmTrAllRecs = SYS_getRecords(oTargetDO);
        nAsTmTrRecCount = oAsgTmTrAllRecs.length;
        //
        sTargetDoNm = "KDFolderDetails";
        oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            bChkFlg = false;
        }
        var aKDFrdrRecSet = [];
        var oKDFrdrAllRecs = SYS_getRecords(oTargetDO);
        nKDRecCount = oKDFrdrAllRecs.length;
        if (nAsTmTrRecCount > 0) {
            var i;
            for (i = 0; i < nAsTmTrRecCount; i++) {
                var oAsTmTrRec = oAsgTmTrAllRecs[i];
                var BE_SELECT_FLG = SYS_getValFromRec(oAsTmTrRec, "BE_SELECT_FLG");
                var TADR_TEAM_ID = SYS_getValFromRec(oAsTmTrRec, "TADR_TEAM_ID");
                if (BE_SELECT_FLG === "Y") {
                    if (nKDRecCount > 0) {
                        var j;
                        for (j = 0; j < nKDRecCount; j++) {
                            var oKDFrdrRec = oKDFrdrAllRecs[j];
                            var TEAM_ID = SYS_getValFromRec(oKDFrdrRec, "TEAM_ID");
                            if (TADR_TEAM_ID === TEAM_ID) {
                                alert("Please delete forder of Team ID:" + TADR_TEAM_ID + " frist!");
                                bChkFlg = false;
                                break;
                            }
                        }
                    }
                }
            }
        }
        return bChkFlg;
    } catch (e) {
        DisExcpt("SYM_TRTD.js*SYM_TRTD_Chk_NotHaveDelTeamInKDForderDO", e);
    }
}