"path:SCRN/DO/TeamPortfolioDetails.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_GenSelectFldOptionFmProductCode = function() {		
    try {
        SYS_GetDataBySSS_S("SSSS_CommGetProductDataByAll_TRX", "C_MAIN_REF");
        var aPrdCdValList = SYS_GetMultiFldValueFromArray("C_PRODUCT_CODE");
        var aPrdDesValList = SYS_GetMultiFldValueFromArray("C_PRODUCT_DESC");
        var nLen = aPrdCdValList.length;
        if (nLen > 0) {
            var aPrdCdVal = SYT_create2DArray(2, nLen - 1);
            var i;
            var j = 0;
            for (i = 0; i < nLen; i++) {
                if (aPrdCdValList[i] !== "All") {
                    aPrdCdVal[0][i - j] = aPrdCdValList[i];
                    aPrdCdVal[1][i - j] = aPrdDesValList[i];
                } else {
                    j++;
                }
            }
            SYT_genSelectFldOptionFmFreeArray(aPrdCdVal, document.MAINFORM.PROD_CD.name);
        } else {
            oSelectList.options.length = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_TeamPortfolioDetails.js", e);
    }
}

csDOScreenProto.Cal_PORTFL_CD = function() {		
    try {
        var PROD_CD = document.MAINFORM.PROD_CD.value;
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        document.MAINFORM.PORTFL_CD.value = PROD_CD + BUSI_UNIT;
    } catch (e) {
        DisExcpt("SSSS_TeamPortfolioDetails.js", e);
    }
}

csDOScreenProto.Chk_DuplicateRecordByTeamPortfolioOnCurrDO = function() {	
    try {
        var bReturnDfFlag = false;
        var PROD_CD = document.MAINFORM.PROD_CD.value;
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        var sTargetDoNm = "TeamPortfolioDetails";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The DO: " + sTargetDoNm + " not exist!");
            return;
        }
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var i;
        for (i = 0; i < oDoAllRecs.length; i++) {
            var oDoRec = oDoAllRecs[i];
            var sDOProdCd = SYS_getValFromRec(oDoRec, "PROD_CD");
            var sDOBusiUnit = SYS_getValFromRec(oDoRec, "BUSI_UNIT");
            var sDOPortflCd = SYS_getValFromRec(oDoRec, "PORTFL_CD");
            var sDOIndexNo = SYS_getValFromRec(oDoRec, "DO_INDEX_NO");
            if (sDOProdCd === PROD_CD && sDOBusiUnit === BUSI_UNIT && sDOIndexNo !== DO_INDEX_NO) {
                alert("The Portfolio Code:" + sDOPortflCd + " have been exist!");
                document.MAINFORM.PROD_CD.value = "";
                document.MAINFORM.BUSI_UNIT.value = "";
                document.MAINFORM.PORTFL_CD.value = "";
                bReturnDfFlag = true;
                break;
            }
        }
        return bReturnDfFlag;
    } catch (e) {
        DisExcpt("SSSS_TeamPortfolioDetails.js", e);
    }
}

csDOScreenProto.InitValues = function() {		
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.TEAM_ID.value = SYS_getValueFromMain("TEAM_ID");
        document.MAINFORM.TEAM_NM.value = SYS_getValueFromMain("TEAM_NM");
        document.MAINFORM.PROD_CD.value = "";
        document.MAINFORM.BUSI_UNIT.value = "";
        document.MAINFORM.DO_INDEX_NO.value = SYT_genIndexRef();
    } catch (e) {
        DisExcpt("SSSS_TeamPortfolioDetails.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {		
    try {
        Cal_GenSelectFldOptionFmProductCode();
    } catch (e) {
        DisExcpt("SSSS_TeamPortfolioDetails.js", e);
    }
}

csDOScreenProto.BUSI_UNIT_onchange = function(event) {	
    Cal_PORTFL_CD();
    Chk_DuplicateRecordByTeamPortfolioOnCurrDO();
}

csDOScreenProto.PORTFL_CD_onchange = function(event) {	
    Cal_PORTFL_CD();
    Chk_DuplicateRecordByTeamPortfolioOnCurrDO();
}

csDOScreenProto.PROD_CD_onchange = function(event) {	
    Cal_PORTFL_CD();
    Chk_DuplicateRecordByTeamPortfolioOnCurrDO();
}