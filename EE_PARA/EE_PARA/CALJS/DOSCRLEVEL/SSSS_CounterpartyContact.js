"path:SCRN/DO/CounterpartyContact.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Chk_DuplicateRecordByCnptContactOnCurrDO = function() {		
    try {
        var bReturnDfFlag = false;
        var TRX_TP = document.MAINFORM.TRX_TP.value;
        var CONT_TYPE = document.MAINFORM.CONT_TYPE.value;
        var CONT_NM = document.MAINFORM.CONT_NM.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        var sTargetDoNm = "CounterpartyContact";
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
            var sDOTrxTp = SYS_getValFromRec(oDoRec, "TRX_TP");
            var sDOContTp = SYS_getValFromRec(oDoRec, "CONT_TYPE");
            var sDOContNm = SYS_getValFromRec(oDoRec, "CONT_NM");
            var sDOIndexNo = SYS_getValFromRec(oDoRec, "DO_INDEX_NO");
            if (sDOTrxTp === TRX_TP && sDOContTp === CONT_TYPE && sDOContNm === CONT_NM && sDOIndexNo !== DO_INDEX_NO) {
                alert("The " + sDOTrxTp + " " + sDOContTp + "'s Name is " + sDOContNm + " have been exist!");
                bReturnDfFlag = true;
                document.MAINFORM.CONT_NM.value = "";
                break;
            }
        }
        return bReturnDfFlag;
    } catch (e) {
        DisExcpt("SSSS_CounterpartyContact.js", e);
    }
}

/*csDOScreenProto.Gen_SelectFldOtpOfContactType = function() {			
    try {
        document.MAINFORM.ITEM_FLD_NM.value = "ContactType";
        SYT_genSelectFldOptionFmCommonModule("CONT_TYPE");
    } catch (e) {
        DisExcpt("SSSS_CounterpartyContact.js", e);
    }
}

csDOScreenProto.Gen_SelectFldOtpOfTransactionType = function() {			
    try {
        document.MAINFORM.ITEM_FLD_NM.value = "CntyProductCode";
        SYT_genSelectFldOptionFmCommonModule("TRX_TP");

    } catch (e) {
        DisExcpt("SSSS_CounterpartyContact.js", e);
    }
}*/

csDOScreenProto.InitValues = function() {		
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.CNPT_AC_CD.value = SYS_getValueFromMain("CNPT_AC_CD");
        document.MAINFORM.CNPT_ID.value = SYS_getValueFromMain("CNPT_ID");
        document.MAINFORM.CNPT_SHORT_NM.value = SYS_getValueFromMain("CNPT_SHORT_NM");
        document.MAINFORM.CNPT_SWADD.value = SYS_getValueFromMain("CNPT_SWADD");
        document.MAINFORM.CUST_ID.value = SYS_getValueFromMain("CUST_ID");
        document.MAINFORM.DO_INDEX_NO.value = SYT_genIndexRef();
        document.MAINFORM.SERIAL_NO.value = SYT_genSerialNo("CounterpartyContact");
    } catch (e) {
        DisExcpt("SSSS_CounterpartyContact.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {		
    try {
        //Gen_SelectFldOtpOfTransactionType();
        //Gen_SelectFldOtpOfContactType();
    } catch (e) {
        DisExcpt("SSSS_CounterpartyContact.js", e);
    }
}

csDOScreenProto.CONT_NM_onchange = function(event) {	
    Chk_DuplicateRecordByCnptContactOnCurrDO();
}

csDOScreenProto.CONT_TYPE_onchange = function(event) {		
    Chk_DuplicateRecordByCnptContactOnCurrDO();
}

csDOScreenProto.TRX_TP_onchange = function(event) {		
    Chk_DuplicateRecordByCnptContactOnCurrDO();
}