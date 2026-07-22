"path:SCRN/DO/BrokerChargeWay.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Chk_DuplicateRecordByBrokerChgWayOnCurrDO = function() {		
    try {
        var bReturnDfFlag = false;
        var BROKER_ID = document.MAINFORM.BROKER_ID.value;
        var PROD_CD = document.MAINFORM.PROD_CD.value;
        var BROKER_CHG_WAY = document.MAINFORM.BROKER_CHG_WAY.value;
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        var sTargetDoNm = "BrokerChargeWay";
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
            var sDOBrokerId = SYS_getValFromRec(oDoRec, "BROKER_ID");
            var sDOProdCd = SYS_getValFromRec(oDoRec, "PROD_CD");
            var sDOCnptId = SYS_getValFromRec(oDoRec, "CNPT_ID");
            var sDOCnptShtNm = SYS_getValFromRec(oDoRec, "CNPT_SHORT_NM");
            var sDOBrkrChgWay = SYS_getValFromRec(oDoRec, "BROKER_CHG_WAY");
            var sDOIndexNo = SYS_getValFromRec(oDoRec, "DO_INDEX_NO");
            if (sDOBrokerId === BROKER_ID && sDOProdCd === PROD_CD && sDOCnptId === CNPT_ID && sDOCnptShtNm === CNPT_SHORT_NM && sDOBrkrChgWay === BROKER_CHG_WAY && sDOIndexNo !== DO_INDEX_NO) {
                alert("The Product Code:" + sDOProdCd + "& Broker ID:" + sDOBrokerId + " & Charge Way:" + sDOBrkrChgWay + " have been exist!");
                bReturnDfFlag = true;
                document.MAINFORM.BROKER_ID.value = "";
                document.MAINFORM.BROKER_NM.value = "";
                break;
            }
        }
        return bReturnDfFlag;
    } catch (e) {
        DisExcpt("SSSS_BrokerChargeWay.js", e);
    }
}

csDOScreenProto.Get_BrokerNameByBrokerID = function() {	
    try {
        var BROKER_ID = document.MAINFORM.BROKER_ID.value;
        if (BROKER_ID !== "" && BROKER_ID !== null) {
            SYS_GetCUBK_S("GetBrokerNameByBrokerId", "BROKER_ID", true);
        }
    } catch (e) {
        DisExcpt("SSSS_BrokerChargeWay.js", e);
    }
}

csDOScreenProto.InitValues = function() {		
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.CNPT_ID.value = SYS_getValueFromMain("CNPT_ID");
        document.MAINFORM.CNPT_SHORT_NM.value = SYS_getValueFromMain("CNPT_SHORT_NM");
        document.MAINFORM.CNPT_SWADD.value = SYS_getValueFromMain("CNPT_SWADD");
        document.MAINFORM.BROKER_ID.value = "";
        document.MAINFORM.BROKER_NM.value = "";
        document.MAINFORM.PROD_CD.value = "";
        document.MAINFORM.DO_INDEX_NO.value = SYT_genIndexRef();
    } catch (e) {
        DisExcpt("SSSS_BrokerChargeWay.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {		
    try {
        SYT_genSelectFieldOptionFromBrokerIDData("BROKER_ID");
        SYT_genSelectFieldOptionFromProductCodeData("PROD_CD");
    } catch (e) {
        DisExcpt("SSSS_BrokerChargeWay.js", e);
    }
}

csDOScreenProto.BROKER_CHG_WAY_onchange = function(event) {		
    Chk_DuplicateRecordByBrokerChgWayOnCurrDO();
}

csDOScreenProto.BROKER_ID_onchange = function(event) {			
    Get_BrokerNameByBrokerID();
    Chk_DuplicateRecordByBrokerChgWayOnCurrDO();
}

csDOScreenProto.PROD_CD_onchange = function(event) {		
    Chk_DuplicateRecordByBrokerChgWayOnCurrDO();
}