"path:SCRN/DO/CounterpartySSI.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});
csDOScreenProto.Cal_AC_WT_BK_SWADD_ToUpperCase = function() {	
    try {
        var AC_WT_BK_SWADD = document.MAINFORM.AC_WT_BK_SWADD.value;
        document.MAINFORM.AC_WT_BK_SWADD.value = SYT_setFldValToUpperCase(AC_WT_BK_SWADD);
    } catch (e) {
        DisExcpt("SSSS_CounterpartySSI.js", e);
    }
}

csDOScreenProto.Cal_BENE_BK_SWADD_ToUpperCase = function() {		
    try {
        var BENE_BK_SWADD = document.MAINFORM.BENE_BK_SWADD.value;
        document.MAINFORM.BENE_BK_SWADD.value = SYT_setFldValToUpperCase(BENE_BK_SWADD);
    } catch (e) {
        DisExcpt("SSSS_CounterpartySSI.js", e);
    }
}

csDOScreenProto.Cal_INTMED_BK_SWADD_ToUpperCase = function() {	
    try {
        var INTMED_BK_SWADD = document.MAINFORM.INTMED_BK_SWADD.value;
        document.MAINFORM.INTMED_BK_SWADD.value = SYT_setFldValToUpperCase(INTMED_BK_SWADD);
    } catch (e) {
        DisExcpt("SSSS_CounterpartySSI.js", e);
    }
}

csDOScreenProto.Chk_DuplicateRecordByCnptSSIOnCurrDO = function() {	
    try {
        var bReturnDfFlag = false;
        var SSI_ATTR = document.MAINFORM.SSI_ATTR.value;
        var PROD_CD = document.MAINFORM.PROD_CD.value;
        var NS_CCY = document.MAINFORM.NS_CCY.value;
        var EFFCV_DT = document.MAINFORM.EFFCV_DT.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        var sTargetDoNm = "CounterpartySSI";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The DO: " + sTargetDoNm + " not exist!");
            return;
        }
        if (NS_CCY !== "" && NS_CCY !== null && EFFCV_DT !== "" && EFFCV_DT !== null) {
            var sBtStat = oTargetDO.getStatue();
            var oDoAllRecs = SYS_getRecords(oTargetDO);
            var i;
            var nChkDays1 = SYT_getSubDaysByDateVal(EFFCV_DT, SYS_DATE);
            /*if(nChkDays1 < 0){
        alert("The Effective Date must later than or equal " + SYS_DATE + " !");
        document.MAINFORM.EFFCV_DT.value = "";
        bReturnDfFlag = true;
        return bReturnDfFlag;
    }*/
            for (i = 0; i < oDoAllRecs.length; i++) {
                var oDoRec = oDoAllRecs[i];
                var sDOSSIAttr = SYS_getValFromRec(oDoRec, "SSI_ATTR");
                var sDOProdCd = SYS_getValFromRec(oDoRec, "PROD_CD");
                var sDONsCcy = SYS_getValFromRec(oDoRec, "NS_CCY");
                var sDOEffcvDt = SYS_getValFromRec(oDoRec, "EFFCV_DT");
                var sDOIndexNo = SYS_getValFromRec(oDoRec, "DO_INDEX_NO");
                var nChkDays2 = SYT_getSubDaysByDateVal(sDOEffcvDt, EFFCV_DT);
                if (sDOSSIAttr === SSI_ATTR && sDOProdCd === PROD_CD && sDONsCcy === NS_CCY && nChkDays2 === 0 && sDOIndexNo !== DO_INDEX_NO) {
                    alert("The Attribute:" + sDOSSIAttr + " & Product Code:" + sDOProdCd + " & Currency:" + sDONsCcy + " & Effective Date:" + EFFCV_DT + " have been exist!");
                    bReturnDfFlag = true;
                    document.MAINFORM.NS_CCY.value = "";
                    document.MAINFORM.EFFCV_DT.value = "";
                    break;
                }
            }
        }
        //return bReturnDfFlag;
    } catch (e) {
        DisExcpt("SSSS_CounterpartySSI.js", e);
    }
}

/*csDOScreenProto.Gen_SelectFldOtpOfCntyProductCode = function() {		
    try {
        document.MAINFORM.ITEM_FLD_NM.value = "CntyProductCode";
        SYT_genSelectFldOptionFmCommonModule("PROD_CD");
    } catch (e) {
        DisExcpt("SSSS_CounterpartySSI.js", e);
    }
}*/

csDOScreenProto.InitValues = function() {		
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.CNPT_AC_CD.value = SYS_getValueFromMain("CNPT_AC_CD");
        document.MAINFORM.CNPT_ID.value = SYS_getValueFromMain("CNPT_ID");
        document.MAINFORM.CNPT_SHORT_NM.value = SYS_getValueFromMain("CNPT_SHORT_NM");
        document.MAINFORM.CNPT_SWADD.value = SYS_getValueFromMain("CNPT_SWADD");
        document.MAINFORM.BENE_BK_SWADD.value = SYS_getValueFromMain("CNPT_SWADD");
        //document.MAINFORM.BENE_BK_NM.value = SYS_getValueFromMain("CNPT_FULL_NM");
        document.MAINFORM.PROD_CD.value = "All";
        document.MAINFORM.DO_INDEX_NO.value = SYT_genIndexRef();
        document.MAINFORM.SERIAL_NO.value = SYT_genSerialNo("CounterpartySSI");
    } catch (e) {
        DisExcpt("SSSS_CounterpartySSI.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {		
    try {
        //Gen_SelectFldOtpOfCntyProductCode();
    } catch (e) {
        DisExcpt("SSSS_CounterpartySSI.js", e);
    }
}

csDOScreenProto.AC_WT_BK_SWADD_onchange = function(event) {		
    Cal_AC_WT_BK_SWADD_ToUpperCase();
}

csDOScreenProto.BENE_BK_SWADD_onchange = function(event) {		
    Cal_BENE_BK_SWADD_ToUpperCase();
}

csDOScreenProto.EFFCV_DT_onchange = function(event) {	
    Chk_DuplicateRecordByCnptSSIOnCurrDO();
}

csDOScreenProto.INTMED_BK_SWADD_onchange = function(event) {		
    Cal_INTMED_BK_SWADD_ToUpperCase();
}

csDOScreenProto.NS_CCY_onchange = function(event) {		
    Chk_DuplicateRecordByCnptSSIOnCurrDO();
}

csDOScreenProto.PROD_CD_onchange = function(event) {		
    Chk_DuplicateRecordByCnptSSIOnCurrDO();
}

csDOScreenProto.SSI_ATTR_onchange = function(event) {	
    Chk_DuplicateRecordByCnptSSIOnCurrDO();
}