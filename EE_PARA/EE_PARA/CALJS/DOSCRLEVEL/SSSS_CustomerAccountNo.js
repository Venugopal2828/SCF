"path:SCRN/DO/CustomerAccountNo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});
csDOScreenProto.Chk_DuplicateRecordByAcNoAndTypeOnCurrDO = function() {		
    try {
        var bReturnDfFlag = false;
        var CUST_ACNO = document.MAINFORM.CUST_ACNO.value;
        var CUST_AC_TP = document.MAINFORM.CUST_AC_TP.value;
        var DEFLT_FLG = document.MAINFORM.DEFLT_FLG.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        var sTargetDoNm = "CustomerAccountNo";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        var sBtStat = oTargetDO.getStatue();
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var i;
        for (i = 0; i < oDoAllRecs.length; i++) {
            var oDoRec = oDoAllRecs[i];
            var sDOAcno = SYS_getValFromRec(oDoRec, "CUST_ACNO");
            var sDOCustAcTp = SYS_getValFromRec(oDoRec, "CUST_AC_TP");
            var sDODefltFlg = SYS_getValFromRec(oDoRec, "DEFLT_FLG");
            var sDOIndexNo = SYS_getValFromRec(oDoRec, "DO_INDEX_NO");
            if (sDOIndexNo !== DO_INDEX_NO) {
                if (CUST_AC_TP === sDOCustAcTp && DEFLT_FLG === "Yes" && sDODefltFlg === "Yes") {
                    alert("The Account No of " + CUST_AC_TP + " have been set default already!");
                    document.MAINFORM.DEFLT_FLG.value = "No";
                    bReturnDfFlag = true;
                    break;
                } else if (sDOAcno === CUST_ACNO) {
                    //alert("The Account No: " + CUST_ACNO + " is have been exist!");
                    bReturnDfFlag = false;
                    //document.MAINFORM.CUST_ACNO.value = "";
                    break;
                }
            }
        }
        return bReturnDfFlag;
    } catch (e) {
        DisExcpt("SSSS_CustomerAccountNo.js", e);
    }
}

/*csDOScreenProto.Gen_SelectFldOtpOfCntyProductCode = function() {		
    try {
        document.MAINFORM.ITEM_FLD_NM.value = "CntyProductCode";
        SYT_genSelectFldOptionFmCommonModule("PROD_CD");
    } catch (e) {
        DisExcpt("SSSS_CustomerAccountNo.js", e);
    }
}*/

csDOScreenProto.InitValues = function() {	
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.CNPT_AC_CD.value = SYS_getValueFromMain("CNPT_AC_CD");
        document.MAINFORM.CNPT_SHORT_NM.value = SYS_getValueFromMain("CNPT_SHORT_NM");
        document.MAINFORM.CNPT_ID.value = SYS_getValueFromMain("CNPT_ID");
        document.MAINFORM.CUST_ID.value = SYS_getValueFromMain("CUST_ID");
        document.MAINFORM.PROD_CD.value = "All";
        document.MAINFORM.DEFLT_FLG.value = "No";
        document.MAINFORM.DO_INDEX_NO.value = SYT_genIndexRef();
        document.MAINFORM.SERIAL_NO.value = SYT_genSerialNo("CustomerAccountNo");
    } catch (e) {
        DisExcpt("SSSS_CustomerAccountNo.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {		
    try {
        //Gen_SelectFldOtpOfCntyProductCode();
    } catch (e) {
        DisExcpt("SSSS_CustomerAccountNo.js", e);
    }
}

csDOScreenProto.CUST_ACNO_onchange = function(event) {	
    Chk_DuplicateRecordByAcNoAndTypeOnCurrDO();
}

csDOScreenProto.CUST_AC_TP_onchange = function(event) {	
    Chk_DuplicateRecordByAcNoAndTypeOnCurrDO();
}

csDOScreenProto.DEFLT_FLG_onchange = function(event) {		
    Chk_DuplicateRecordByAcNoAndTypeOnCurrDO();
}