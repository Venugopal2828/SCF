"path:SCRN/DO/VostroAccountNo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Chk_DuplicateRecordByCcyAcNoOnCurrDO = function() {			
    try {
        var CCY = document.MAINFORM.CCY.value;
        var ACNO = document.MAINFORM.ACNO.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        var sTargetDoNm = "VostroAccountNo";
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
            var sDOCcy = SYS_getValFromRec(oDoRec, "CCY");
            var sDOAcNo = SYS_getValFromRec(oDoRec, "ACNO");
            var sDOIndexNo = SYS_getValFromRec(oDoRec, "DO_INDEX_NO");
            if (sDOCcy === CCY && sDOAcNo === ACNO && sDOIndexNo !== DO_INDEX_NO) {
                alert("The Account No:" + ACNO + " of " + CCY + " is exist!");
                document.MAINFORM.ACNO.value = "";
                break;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_VostroAccountNo.js", e);
    }
}

csDOScreenProto.InitValues = function() {	
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.CNPT_AC_CD.value = SYS_getValueFromMain("CNPT_AC_CD");
        document.MAINFORM.CNPT_ID.value = SYS_getValueFromMain("CNPT_ID");
        document.MAINFORM.CNPT_SWADD.value = SYS_getValueFromMain("CNPT_SWADD");
        document.MAINFORM.CUST_ID.value = SYS_getValueFromMain("CUST_ID");
        document.MAINFORM.DO_INDEX_NO.value = SYT_genIndexRef();
        document.MAINFORM.SERIAL_NO.value = SYT_genSerialNo("VostroAccountNo");
    } catch (e) {
        DisExcpt("SSSS_VostroAccountNo.js", e);
    }
}

csDOScreenProto.ACNO_onchange = function(event) {		
    Chk_DuplicateRecordByCcyAcNoOnCurrDO();
}

csDOScreenProto.CCY_onchange = function(event) {			
    Chk_DuplicateRecordByCcyAcNoOnCurrDO();
}