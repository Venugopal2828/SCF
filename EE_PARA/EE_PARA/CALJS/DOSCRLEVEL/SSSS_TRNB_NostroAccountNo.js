"path:SCRN/DO/TRNB_NostroAccountNo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

var bReturnDfFlag = "\'\'";
var sMapMainRefNo = "\'\'";
var sNsAcNoChkFlg = "\'\'";

csDOScreenProto.Cal_INTMED_BK_SWADD_ToUpperCase = function() {
    try {
        var INTMED_BK_SWADD = document.MAINFORM.INTMED_BK_SWADD.value;
        document.MAINFORM.INTMED_BK_SWADD.value = SYT_setFldValToUpperCase(INTMED_BK_SWADD);
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*Cal_INTMED_BK_SWADD_ToUpperCase", e);
    }
}

csDOScreenProto.Chk_DuplicateRecordByDefaultNostroCcy = function() {
    try {
        if (Chk_DuplicateRecordByDefaultNostroCcyOnCurrDO()) {
            document.MAINFORM.DEFLT_FLG.value = "No";
            sNsAcNoChkFlg = "F";
        } else {
            Chk_DuplicateRecordByDefaultNostroCcyOnDOData();
        }
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*Chk_DuplicateRecordByDefaultNostroCcy", e);
    }
}

csDOScreenProto.Chk_DuplicateRecordByDefaultNostroCcyOnCurrDO = function(bReturnDfFlag) {
    try {
        var bReturnDfFlag = false;
        var DEFLT_FLG = document.MAINFORM.DEFLT_FLG.value;
        var NOSTRO_CCY = document.MAINFORM.NOSTRO_CCY.value;
        var PRODUCT_CODE = document.MAINFORM.PRODUCT_CODE.value;
        var NOSTRO_AC_NO = document.MAINFORM.NOSTRO_AC_NO.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        var sTargetDoNm = "Nostro_Account_No";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The DO: " + sTargetDoNm + " not exist!");
            return;
        }
        if (DEFLT_FLG === "Yes") {
            var oDoAllRecs = SYS_getRecords(oTargetDO);
            var i;
            for (i = 0; i < oDoAllRecs.length; i++) {
                var oDoRec = oDoAllRecs[i];
                var sDONsCcy = SYS_getValFromRec(oDoRec, "NOSTRO_CCY");
                var sDODefltFlg = SYS_getValFromRec(oDoRec, "DEFLT_FLG");
                var sDOProdCd = SYS_getValFromRec(oDoRec, "PRODUCT_CODE");
                var sDONsBkId = SYS_getValFromRec(oDoRec, "NS_BK_ID");
                var sDONsBkAcNo = SYS_getValFromRec(oDoRec, "NOSTRO_AC_NO");
                var sDOIndexNo = SYS_getValFromRec(oDoRec, "DO_INDEX_NO");
                if (sDOIndexNo !== DO_INDEX_NO) {
                    if (sDONsCcy === NOSTRO_CCY && sDODefltFlg === "Yes") {
                        alert("The Master Nostor Currency:" + NOSTRO_CCY + " have been default by " + sDONsBkId + "!");
                        document.MAINFORM.DEFLT_FLG.value = "No";
                        bReturnDfFlag = true;
                        break;
                    }
                }
            }
        }
        return bReturnDfFlag;
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*Chk_DuplicateRecordByDefaultNostroCcyOnCurrDO", e);
    }
}

csDOScreenProto.Chk_DuplicateRecordByDefaultNostroCcyOnDOData = function() {
    try {
        var DEFLT_FLG = document.MAINFORM.DEFLT_FLG.value;
        var NOSTRO_CCY = document.MAINFORM.NOSTRO_CCY.value;
        var PRODUCT_CODE = document.MAINFORM.PRODUCT_CODE.value;
        var NS_BK_ID = document.MAINFORM.NS_BK_ID.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        if (DEFLT_FLG === "Yes") {
            SYS_GetDataBySSS_S("SSSS_GetNostroInfoByCcyDefuFlg_TRX", "NOSTRO_CCY;DEFLT_FLG");
            var aDoIdxNoList = SYS_GetMultiFldValueFromArray("DO_INDEX_NO");
            var aNsBkIdList = SYS_GetMultiFldValueFromArray("NS_BK_ID");
            var i;
            var nLen = aDoIdxNoList.length;
            if (nLen > 0) {
                for (i = 0; i < nLen; i++) {
                    var sNsBkId = aNsBkIdList[i];
                    var sDoIndexNo = aDoIdxNoList[i];
                    if (sDoIndexNo !== DO_INDEX_NO) {
                        alert("The Master Nostor Currency:" + NOSTRO_CCY + " have been default by " + sNsBkId + "!");
                        document.MAINFORM.DEFLT_FLG.value = "No";
                        sNsAcNoChkFlg = "F";
                        break;
                    } else {
                        sNsAcNoChkFlg = "T";
                    }
                }
            } else {
                sNsAcNoChkFlg = "T";
            }
        } else {
            sNsAcNoChkFlg = "T";
        }
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*Chk_DuplicateRecordByDefaultNostroCcyOnDOData", e);
    }
}

csDOScreenProto.Chk_DuplicateRecordByNostroCcyAcno = function() {
    try {
        if (Chk_DuplicateRecordByNostroCcyOnCurrDO()) {
            document.MAINFORM.NOSTRO_CCY.value = "";
            sNsAcNoChkFlg = "F";
        } else {
            Chk_DuplicateRecordByNostroSwCcyAcno();
        }
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*Chk_DuplicateRecordByNostroCcyAcno", e);
    }
}

csDOScreenProto.Chk_DuplicateRecordByNostroCcyOnCurrDO = function() {
    try {
        var bReturnDfFlag = false;
        var NOSTRO_CCY = document.MAINFORM.NOSTRO_CCY.value;
        var PRODUCT_CODE = document.MAINFORM.PRODUCT_CODE.value;
        var NOSTRO_AC_NO = document.MAINFORM.NOSTRO_AC_NO.value;
        var DO_INDEX_NO = document.MAINFORM.DO_INDEX_NO.value;
        var sTargetDoNm = "NostroAccountNo";
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
            var sDONsCcy = SYS_getValFromRec(oDoRec, "NOSTRO_CCY");
            var sDOProdCd = SYS_getValFromRec(oDoRec, "PRODUCT_CODE");
            var sDONsBkId = SYS_getValFromRec(oDoRec, "NS_BK_ID");
            var sDONsAcNo = SYS_getValFromRec(oDoRec, "NOSTRO_AC_NO");
            var sDOIndexNo = SYS_getValFromRec(oDoRec, "DO_INDEX_NO");
            if (sDONsCcy === NOSTRO_CCY && sDOIndexNo !== DO_INDEX_NO) {
                alert("The Nostor Currency:" + NOSTRO_CCY + " is exist!");
                bReturnDfFlag = true;
                document.MAINFORM.NS_CCY.value = "";
                break;
            }
        }
        return bReturnDfFlag;
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*Chk_DuplicateRecordByNostroCcyOnCurrDO", e);
    }
}

csDOScreenProto.Chk_DuplicateRecordByNostroSwCcyAcno = function() {
    try {
        var NS_BK_SWADD = document.MAINFORM.NS_BK_SWADD.value;
        var NOSTRO_CCY = document.MAINFORM.NOSTRO_CCY.value;
        var NOSTRO_AC_NO = document.MAINFORM.NOSTRO_AC_NO.value;
        if (NS_BK_SWADD !== "" && NS_BK_SWADD !== null && NOSTRO_CCY !== "" && NOSTRO_CCY !== null && NOSTRO_AC_NO !== "" && NOSTRO_AC_NO !== null) {
            SYS_GetCUBK("ChkNostroSwCcyAcnoIsDuplicate", "NS_BK_SWADD;NOSTRO_CCY;NOSTRO_AC_NO", "Chk_DuplicateRecordByNostroSwCcyAcnoSuccess", "Chk_DuplicateRecordByNostroSwCcyAcnoFail", true);
        }
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*Chk_DuplicateRecordByNostroSwCcyAcno", e);
    }
}

csDOScreenProto.Chk_DuplicateRecordByNostroSwCcyAcnoFail = function() {
    try {
        Chk_DuplicateRecordByDefaultNostroCcy();
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*Chk_DuplicateRecordByNostroSwCcyAcnoFail", e);
    }
}

csDOScreenProto.Chk_DuplicateRecordByNostroSwCcyAcnoSuccess = function() {
    try {
        var C_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        var NS_BK_SWADD = document.MAINFORM.NS_BK_SWADD.value;
        var NOSTRO_CCY = document.MAINFORM.NOSTRO_CCY.value;
        var NOSTRO_AC_NO = document.MAINFORM.NOSTRO_AC_NO.value;
        if (sMapMainRefNo !== C_MAIN_REF) {
            alert("The Nostro SWIFT Code:" + NS_BK_SWADD + " & Currency:" + NOSTRO_CCY + " & Account:" + NOSTRO_AC_NO + "is exist, Please check again.");
            document.MAINFORM.NOSTRO_AC_NO.value = "";
            sNsAcNoChkFlg = "F";
        } else {
            sNsAcNoChkFlg = "T";
        }
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*Chk_DuplicateRecordByNostroSwCcyAcnoSuccess", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (sNsAcNoChkFlg === "F") {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYS_GetSubPageRefNo_S('TRNB_ACCOUNT_REF', setDOref, "", "DOREF", "DOREF");
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.NS_BK_ID.value = SYS_getValueFromMain("NS_BK_ID");
        document.MAINFORM.NS_BK_SWADD.value = SYS_getValueFromMain("NS_BK_SWADD");
        document.MAINFORM.PRODUCT_CODE.value = "All";
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*InitValues", e);
    }
}

csDOScreenProto.setDOref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        UnitCode = SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        document.MAINFORM.DO_INDEX_NO.value = "AN" + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*setDOref", e);
    }
}

csDOScreenProto.DEFLT_FLG_onchange = function(event) {
    try {
        Chk_DuplicateRecordByDefaultNostroCcy();
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*DEFLT_FLG_onchange", e);
    }
}

csDOScreenProto.INTMED_BK_SWADD_onchange = function(event) {
    try {
        Cal_INTMED_BK_SWADD_ToUpperCase();
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*INTMED_BK_SWADD_onchange", e);
    }
}

csDOScreenProto.NOSTRO_AC_NO_onchange = function(event) {
    try {
        Chk_DuplicateRecordByNostroCcyAcno();
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*NOSTRO_AC_NO_onchange", e);
    }
}

csDOScreenProto.NOSTRO_CCY_onchange = function(event) {
    try {
        Chk_DuplicateRecordByNostroCcyAcno();
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*NOSTRO_CCY_onchange", e);
    }
}

csDOScreenProto.NS_BK_SWADD_onchange = function(event) {
    try {
        Chk_DuplicateRecordByNostroSwCcyAcno();
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroAccountNo.js*NS_BK_SWADD_onchange", e);
    }
}