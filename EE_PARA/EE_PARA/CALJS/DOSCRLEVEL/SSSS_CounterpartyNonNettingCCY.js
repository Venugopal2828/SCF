"path:SCRN/DO/CounterpartyNonNettingCCY.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Chk_DuplicateRecordByCnptNonNetCcyOnCurrDO = function() {	
    try {
        var bReturnDfFlag = false;
        var NON_NET_CCY = document.MAINFORM.NON_NET_CCY.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        var sTargetDoNm = "CounterpartyNonNettingCCY";
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
            var sNonNetCcy = SYS_getValFromRec(oDoRec, "NON_NET_CCY");
            var sDOIndexNo = SYS_getValFromRec(oDoRec, "DO_INDEX_NO");
            if (sNonNetCcy === NON_NET_CCY && sDOIndexNo !== DO_INDEX_NO) {
                alert("The Currency:" + sNonNetCcy + " has been exist!");
                bReturnDfFlag = true;
                document.MAINFORM.NON_NET_CCY.value = "";
                break;
            }
        }
        return bReturnDfFlag;
    } catch (e) {
        DisExcpt("SSSS_CounterpartyNonNettingCCY.js", e);
    }
}

csDOScreenProto.InitValues = function() {		
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.CNPT_ID.value = SYS_getValueFromMain("CNPT_ID");
        document.MAINFORM.CNPT_SHORT_NM.value = SYS_getValueFromMain("CNPT_SHORT_NM");
        document.MAINFORM.CNPT_SWADD.value = SYS_getValueFromMain("CNPT_SWADD");
        document.MAINFORM.DO_INDEX_NO.value = SYT_genIndexRef();
    } catch (e) {
        DisExcpt("SSSS_CounterpartyNonNettingCCY.js", e);
    }
}

csDOScreenProto.NON_NET_CCY_onchange = function(event) {	
    Chk_DuplicateRecordByCnptNonNetCcyOnCurrDO();
}