"path:SCRN/o2m/TRCO_MiscellaneousVoucher.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_CUST_ID_ToUpperCase = function() {
    try {
        var CUST_ID = document.MAINFORM.CUST_ID.value;
        document.MAINFORM.CUST_ID.value = SYT_setFldValToUpperCase(CUST_ID);
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Cal_CUST_ID_ToUpperCase", e);
    }
}

csDOScreenProto.Cal_EVAL_FLG = function() {
    try {
        if (SYS_MODULE_NAME === "TRCO") {
            var EVAL_FLG = SYS_getValueFromMain("EVAL_FLG");
            document.MAINFORM.EVAL_FLG.value = EVAL_FLG;
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Cal_EVAL_FLG", e);
    }
}

csDOScreenProto.Cal_EVAL_GP_NO = function() {
    try {
        if (SYS_MODULE_NAME === "TRCO") {
            var EVAL_FLG = document.MAINFORM.EVAL_FLG.value;
            if (EVAL_FLG === "Yes") {
                document.MAINFORM.EVAL_GP_NO.value = SYS_getValueFromMain("TRX_REF_NO");
            }
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Cal_EVAL_GP_NO", e);
    }
}

csDOScreenProto.Cal_NostroIsNotExist = function() {
    try {
        var CUST_ID = document.MAINFORM.CUST_ID.value;
        var VOU_CCY = document.MAINFORM.VOU_CCY.value;
        //alert("The Nostro Bank BIC:" + CUST_ID + " & Nostro Currency:" + VOU_CCY + " is not exist in Nostro Bank Data!");
        alert("The Nostro Bank BIC:" + CUST_ID + " & Nostro Currency:" + VOU_CCY + " does not exist in Nostro Bank Data!");
        document.MAINFORM.CUST_ID.value = "";
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Cal_NostroIsNotExist", e);
    }
}

csDOScreenProto.Cal_VOU_DESC = function() {
    try {
        if (SYS_MODULE_NAME === "TRCO") {
            var TRX_REF_NO = SYS_getValueFromMain("TRX_REF_NO");
            var sVouDesc = "";
            document.MAINFORM.VOU_DESC.value = TRX_REF_NO;
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Cal_VOU_DESC", e);
    }
}

csDOScreenProto.Cal_chkAcnoIsNotExistInSTAN = function() {
    try {
        var DC_ACNO = document.MAINFORM.DC_ACNO.value;
        //alert("The Account Number:" + DC_ACNO + " is not exist in Standing Data!");
        alert("The Account Number:" + DC_ACNO + " does not exist in Standing Data!");
        document.MAINFORM.DC_ACNO.value = "";
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Cal_chkAcnoIsNotExistInSTAN", e);
    }
}

csDOScreenProto.Chk_AcNoByTrxCd = function() {
    try {
        var TRX_CD = document.MAINFORM.TRX_CD.value;
        var DC_ACNO = document.MAINFORM.DC_ACNO.value;
        var VOU_CCY = document.MAINFORM.VOU_CCY.value;
        var sLcy = "";
        if (DC_ACNO !== "" && DC_ACNO !== null) {
            var sChkAcPoint1 = DC_ACNO.substr(0, 1); //4,5
            if (TRX_CD === "ACU") {
                sLcy = "USD";
            } else {
                sLcy = "USD";
            }

            var bRtnFlag = true;
            if (sChkAcPoint1 === "4" || sChkAcPoint1 === "5") {
                if (VOU_CCY !== sLcy) {
                    alert("When Business Unit is the " + TRX_CD + " and Account Number is Income/Charge, the Currency must be " + sLcy + "!");
                    document.MAINFORM.VOU_CCY.value = sLcy;
                    bRtnFlag = false;
                }
            }
            return bRtnFlag;
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Chk_AcNoByTrxCd", e);
    }
}

csDOScreenProto.Chk_AcNoIsExistInSTAN = function() {
    try {
        var sAcnoFldNm = document.MAINFORM.DC_ACNO.name;
        var DC_ACNO = document.MAINFORM.DC_ACNO.value;
        if (DC_ACNO !== "" && DC_ACNO !== null) {
            SYS_GetCUBK("GetAcNoForMiscellaneousByComm", sAcnoFldNm, "Get_AcNoFromSTANSuccess", "Cal_chkAcnoIsNotExistInSTAN", true);
        } else {
            document.MAINFORM.CUST_ID.value = "";
            Chk_CustomerIdBankSwiftFldClass();
            Set_InqNsBkButtonClass();
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Chk_AcNoIsExistInSTAN", e);
    }
}

csDOScreenProto.Chk_CurrencyByTrxCd = function() {
    try {
        var TRX_CD = document.MAINFORM.TRX_CD.value;
        var VOU_CCY = document.MAINFORM.VOU_CCY.value;
        var DC_ACNO = document.MAINFORM.DC_ACNO.value;
        var EVAL_FLG = document.MAINFORM.EVAL_FLG.value;
        if (VOU_CCY !== "" && VOU_CCY !== null && DC_ACNO !== "" && DC_ACNO !== null) {
            var sChkAcPoint1 = DC_ACNO.substr(0, 1);
            var bRtnFlag = true;
            if (TRX_CD === "ACU" && VOU_CCY === "USDD" && ((sChkAcPoint1 === "1" && EVAL_FLG === "No") || sChkAcPoint1 === "8" || sChkAcPoint1 === "9")) {
                alert("When Business Unit is " + TRX_CD + ", the Currency is not " + VOU_CCY + "!");
                document.MAINFORM.VOU_CCY.value = "";
                bRtnFlag = false;
            }
            return bRtnFlag;
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Chk_CurrencyByTrxCd", e);
    }
}

csDOScreenProto.Chk_CustomerIdBankSwiftFldClass = function() {
    try {
        var DC_ACNO = document.MAINFORM.DC_ACNO.value;
        if (DC_ACNO === "110210301") {
            SYT_ChangeFldClass(document.MAINFORM.CUST_ID, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CUST_ID, "O");
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Chk_CustomerIdBankSwiftFldClass", e);
    }
}

csDOScreenProto.Chk_TotalVoucherRecords = function() {
    try {
        var sTargetDoNm = "MISCLS_VOU_DO";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + " not exist!");
            return;
        }
        var aMiscVouRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nMiscVouRecCount = oDoAllRecs.length;
        var bRtnFlag = true;

        if (nMiscVouRecCount > 30) {
            alert("The Host of Voucher can't do over 30 entry!");
            bRtnFlag = false;
        }

        return bRtnFlag;
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Chk_TotalVoucherRecords", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        Cal_VOU_DESC();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*ConfirmBusinessCall", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!Chk_TotalVoucherRecords()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.Get_AcNoFromSTANSuccess = function() {
    try {
        Chk_AcNoByTrxCd();
        Chk_CustomerIdBankSwiftFldClass();
        Set_InqNsBkButtonClass();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Get_AcNoFromSTANSuccess", e);
    }
}

csDOScreenProto.Get_NostroBkInfo = function() {
    try {
        var DC_ACNO = document.MAINFORM.DC_ACNO.value;
        var CUST_ID = document.MAINFORM.CUST_ID.value;
        if (DC_ACNO === "110210301" && CUST_ID !== "" && CUST_ID !== null) {
            document.MAINFORM.CUST_ID.value = CUST_ID.toUpperCase();
            var sFldNmList = document.MAINFORM.CUST_ID_BK_BIC.name + ";" + document.MAINFORM.VOU_CCY.name;
            SYS_GetCUBK("GetNostroBankInfo", sFldNmList, "", "Cal_NostroIsNotExist", true); //wait TRNB
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Get_NostroBkInfo", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.TRX_CD.value = SYS_getValueFromMain("BUSI_UNIT");
        document.MAINFORM.VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.VOU_CCY.value = "";
        SYS_GetSubPageRefNo_S('TRCO_MISCE_REF', setDOref, "", "DOREF", "DOREF");
        document.MAINFORM.MDL_SHORT_NM.value = SYS_MODULE_NAME;
        Cal_EVAL_FLG();
        Cal_EVAL_GP_NO();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*InitValues", e);
    }
}

csDOScreenProto.Inq_AccountNoFmSTAN = function() {
    try {
        SYS_InqCUBK("GetAcNoForMiscellaneousByComm"); //GET ACCOUNT NO FROM STANDING
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Inq_AccountNoFmSTAN", e);
    }
}

csDOScreenProto.Inq_NostroBankInfo = function() {
    try {
        SYS_InqCUBK_byCondition("GetNostroBankInfo", 1);
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Inq_NostroBankInfo", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        Chk_CustomerIdBankSwiftFldClass();
        Set_InqNsBkButtonClass();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*PostconditionOnInit", e);
    }
}

csDOScreenProto.Set_InqNsBkButtonClass = function() {
    try {
        var DC_ACNO = document.MAINFORM.DC_ACNO.value;
        if (DC_ACNO === "110210301") {
            SYT_DisObj(document.MAINFORM.INQ_NS_DATA_BTN.name);
        } else {
            SYT_hideObj(document.MAINFORM.INQ_NS_DATA_BTN.name);
        }
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*Set_InqNsBkButtonClass", e);
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
        document.MAINFORM.VOU_INDEX_NO.value = "VO" + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*setDOref", e);
    }
}

csDOScreenProto.CUST_ID_onchange = function(event) {
    try {
        Cal_CUST_ID_ToUpperCase();
        Get_NostroBkInfo();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*CUST_ID_onchange", e);
    }
}

csDOScreenProto.DC_ACNO_onchange = function(event) {
    try {
        Chk_AcNoIsExistInSTAN();
        Chk_CurrencyByTrxCd();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*DC_ACNO_onchange", e);
    }
}

csDOScreenProto.VOU_AMT_onchange = function(event) {
    try {
        var ccy = document.MAINFORM.VOU_CCY.value;
        document.MAINFORM.VOU_AMT.value = SYT_AmtFormat(ccy, document.MAINFORM.VOU_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*VOU_AMT_onchange", e);
    }
}

csDOScreenProto.VOU_CCY_onchange = function(event) {
    try {
        Chk_AcNoByTrxCd();
        Chk_CurrencyByTrxCd();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*VOU_CCY_onchange", e);
    }
}

csDOScreenProto.INQ_ACNO_DATA_BTN_onclick = function(event) {
    try {
        Inq_AccountNoFmSTAN();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*INQ_ACNO_DATA_BTN_onclick", e);
    }
}

csDOScreenProto.INQ_NS_DATA_BTN_onclick = function(event) {
    try {
        Inq_NostroBankInfo();
    } catch (e) {
        DisExcpt("SSSS_TRCO_MiscellaneousVoucher.js*INQ_NS_DATA_BTN_onclick", e);
    }
}