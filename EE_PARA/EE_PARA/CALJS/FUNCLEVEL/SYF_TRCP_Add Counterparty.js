var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_TRCP_Cal_SSISynchronization();
        SYM_TRCP_Cal_BrokerChgWaySynchronization();
        SYM_TRCP_Cal_ContactSynchronization();
        SYM_TRCP_Cal_NonNettingSynchronization();
        SYM_TRCP_Cal_AccountSynchronization();
        //SYM_TRCP_Cal_CreditLimitSynchronization();
        SYM_TRCP_Cal_VostroAcNoSynchronization();
        document.MAINFORM.CURRENT_STATUS.value = "Confirm";
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {
        document.MAINFORM.CURRENT_STATUS.value = "Save";
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*ConfirmBusinessCallSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo('TRCP_REF', 'SYF_TRCP_Cal_SetRefNo');
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.ISSUER_FLG.value = "No";
        document.MAINFORM.PROFESL_FLG.value = "No";
        document.MAINFORM.VVIP_FLG.value = "No";
        document.MAINFORM.STAKH.value = "No";
        document.MAINFORM.FHC_ACT_RLTSP.value = "No";
        document.MAINFORM.PROFESL_LVL.value = 0;
        document.MAINFORM.SYN_SOURCE_NOTES.value = "GTS";
        SYF_TRCP_Get_CountryName();
        FLD_TRCP_CNPT_CLASS_SH_NM_onchange();
        //SYM_TRCP_Get_CNPT_CLASS_FL_NM();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        SYF_TRCP_Set_BrokerChargeWayDoButton();
        SYF_TRCP_Set_CounterpartyContactDoButton();
        SYF_TRCP_Set_CounterpartyNonNettingCCYDoButton();
        SYF_TRCP_Set_CounterpartySSIDoButton();
        SYF_TRCP_Set_CounterpartyAccountDoButton();
        //        SYF_TRCP_Set_CounterpartyCreditLimitDoButton();
        SYF_TRCP_Set_CounterpartyVostroAccountNoDoButton();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "MM") {
            SYS_highTrxButton("_confirm", "_cancel", "_save", "_transaction", "_LoadTmpl", "_SaveTmpl");
        } else {
            SYS_highTrxButton("_confirm", "_cancel", "_save", "_transaction");
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYM_TRCP_genSelectFieldOptionFromBranchCodeData("PROFIT_BR");
        SYM_TRCP_genSelectFieldOptionFromBranchCodeData("BR_CD");
        SYM_TRCP_genSelectFieldOptionFromBranchCodeData("CROP_BR_CD");
        SYM_TRCP_genSelectFieldOptionFromBranchCodeData("AC_BR");
        //SYM_TRCP_Gen_SelectFldOtpOfCnptClassName();
        //SYM_TRCP_Gen_SelectFldOtpOfCropBrGp();
        //SYM_TRCP_Gen_SelectFldOtpOfCnptType();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRCP_Cal_SetRefNo = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        CountryCode = SYS_BANK_COUNTRY;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'TRCP';
        document.MAINFORM.C_MAIN_REF.value = sub + CountryCode + year + ref;
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Cal_SetRefNo", e);
    }
}

csFuncLevelProto.SYF_TRCP_Chk_DuplicateRecordByAccountCode = function() {
    try {
        SYS_MULTI_DATA = "";
        var CNPT_AC_CD = document.MAINFORM.CNPT_AC_CD.value;
        var sWhereSql = "CNPT_AC_CD = '" + CNPT_AC_CD + "' ORDER BY CNPT_ID ASC";
        var nSize = 0;
        SYS_GetTableMultiDataToArray_S("TRCP_MASTER", sWhereSql, "CNPT_AC_CD", true);
        if (SYS_MULTI_DATA !== "" && SYS_MULTI_DATA !== null) {
            var aDoCnptAcCd = SYS_MULTI_DATA[0][1].toString().split(",");
            nSize = aDoCnptAcCd.length;
            if (nSize > 0) {
                alert("The Counterparty Account Code:" + CNPT_AC_CD + " is exist!");
                document.MAINFORM.CNPT_AC_CD.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Chk_DuplicateRecordByAccountCode", e);
    }
}

csFuncLevelProto.SYF_TRCP_Chk_DuplicateRecordByID = function() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var sSQLWhere = "CNPT_ID = '" + CNPT_ID + "'";
        var sTableName = "TRCP_MASTER";
        var sFieldList = "CNPT_ID";
        var sMappingList = "CNPT_ID";
        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, "SYF_TRCP_Chk_DuplicateRecordByIDSuccess", "SYF_TRCP_Chk_DuplicateRecordByIDFail", true);
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Chk_DuplicateRecordByID", e);
    }
}

csFuncLevelProto.SYF_TRCP_Chk_DuplicateRecordByIDFail = function() {
    try {
        SYF_TRCP_Set_BrokerChargeWayDoButton();
        SYF_TRCP_Set_CounterpartyContactDoButton();
        SYF_TRCP_Set_CounterpartyNonNettingCCYDoButton();
        SYF_TRCP_Set_CounterpartySSIDoButton();
        SYF_TRCP_Set_CounterpartyAccountDoButton();
        //        SYF_TRCP_Set_CounterpartyCreditLimitDoButton();
        SYF_TRCP_Set_CounterpartyVostroAccountNoDoButton();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Chk_DuplicateRecordByIDFail", e);
    }
}

csFuncLevelProto.SYF_TRCP_Chk_DuplicateRecordByIDSuccess = function() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        alert("The Counterparty ID:" + CNPT_ID + " is exist!");
        document.MAINFORM.CNPT_ID.value = "";
        SYF_TRCP_Set_BrokerChargeWayDoButton();
        SYF_TRCP_Set_CounterpartyContactDoButton();
        SYF_TRCP_Set_CounterpartyNonNettingCCYDoButton();
        SYF_TRCP_Set_CounterpartySSIDoButton();
        SYF_TRCP_Set_CounterpartyAccountDoButton();
        //        SYF_TRCP_Set_CounterpartyCreditLimitDoButton();
        SYF_TRCP_Set_CounterpartyVostroAccountNoDoButton();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Chk_DuplicateRecordByIDSuccess", e);
    }
}

csFuncLevelProto.SYF_TRCP_Chk_DuplicateRecordByShortNm = function() {
    try {
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        var sSQLWhere = "CNPT_SHORT_NM = '" + CNPT_SHORT_NM + "'";
        var sTableName = "TRCP_MASTER";
        var sFieldList = "CNPT_SHORT_NM";
        var sMappingList = "CNPT_SHORT_NM";
        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, "SYF_TRCP_Chk_DuplicateRecordByShortNmSuccess", "SYF_TRCP_Chk_DuplicateRecordByShortNmFail", true);
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Chk_DuplicateRecordByShortNm", e);
    }
}

csFuncLevelProto.SYF_TRCP_Chk_DuplicateRecordByShortNmFail = function() {
    try {
        SYF_TRCP_Set_BrokerChargeWayDoButton();
        SYF_TRCP_Set_CounterpartyContactDoButton();
        SYF_TRCP_Set_CounterpartyNonNettingCCYDoButton();
        SYF_TRCP_Set_CounterpartySSIDoButton();
        SYF_TRCP_Set_CounterpartyAccountDoButton();
        //        SYF_TRCP_Set_CounterpartyCreditLimitDoButton();
        SYF_TRCP_Set_CounterpartyVostroAccountNoDoButton();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Chk_DuplicateRecordByShortNmFail", e);
    }
}

csFuncLevelProto.SYF_TRCP_Chk_DuplicateRecordByShortNmSuccess = function() {
    try {
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        alert("The Counterparty Short Name:" + CNPT_SHORT_NM + " is exist!");
        document.MAINFORM.CNPT_SHORT_NM.value = "";
        SYF_TRCP_Set_BrokerChargeWayDoButton();
        SYF_TRCP_Set_CounterpartyContactDoButton();
        SYF_TRCP_Set_CounterpartyNonNettingCCYDoButton();
        SYF_TRCP_Set_CounterpartySSIDoButton();
        SYF_TRCP_Set_CounterpartyAccountDoButton();
        //        SYF_TRCP_Set_CounterpartyCreditLimitDoButton();
        SYF_TRCP_Set_CounterpartyVostroAccountNoDoButton();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Chk_DuplicateRecordByShortNmSuccess", e);
    }
}

csFuncLevelProto.SYF_TRCP_Get_CntyCdFmSwiftBIC = function() {
    try {
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value;
        var sCntyCdFldNm = document.MAINFORM.CNPT_RISK_CNTY_CD.name;
        SYT_getCountryCodeFromSwiftBIC(CNPT_SWADD, sCntyCdFldNm);
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Get_CntyCdFmSwiftBIC", e);
    }
}

csFuncLevelProto.SYF_TRCP_Get_CountryName = function() {
    try {
        var CNPT_HO_RISK_CNTY = document.MAINFORM.CNPT_HO_RISK_CNTY.value;
        var sCntyFldNm = document.MAINFORM.CNPT_HO_RISK_CY_NM.name;
        SYT_getCountryName(CNPT_HO_RISK_CNTY, sCntyFldNm);
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Get_CountryName", e);
    }
}

csFuncLevelProto.SYF_TRCP_Set_BrokerChargeWayDoButton = function() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        if ((CNPT_ID === "" || CNPT_ID === null) || (CNPT_SHORT_NM === "" || CNPT_SHORT_NM === null)) {
            SYT_setDOGridButtonDisable("BrokerChargeWay", "A");
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYT_setDOGridButtonEnable("BrokerChargeWay", "A");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Set_BrokerChargeWayDoButton", e);
    }
}

csFuncLevelProto.SYF_TRCP_Set_CounterpartyAccountDoButton = function() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        if ((CNPT_ID === "" || CNPT_ID === null) || (CNPT_SHORT_NM === "" || CNPT_SHORT_NM === null)) {
            SYT_setDOGridButtonDisable("CustomerAccountNo", "A");
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYT_setDOGridButtonEnable("CustomerAccountNo", "A");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Set_CounterpartyAccountDoButton", e);
    }
}

csFuncLevelProto.SYF_TRCP_Set_CounterpartyContactDoButton = function() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        if ((CNPT_ID === "" || CNPT_ID === null) || (CNPT_SHORT_NM === "" || CNPT_SHORT_NM === null)) {
            SYT_setDOGridButtonDisable("CounterpartyContact", "A");
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYT_setDOGridButtonEnable("CounterpartyContact", "A");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Set_CounterpartyContactDoButton", e);
    }
}

csFuncLevelProto.SYF_TRCP_Set_CounterpartyCreditLimitDoButton = function() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        if ((CNPT_ID === "" || CNPT_ID === null) || (CNPT_SHORT_NM === "" || CNPT_SHORT_NM === null)) {
            SYT_setDOGridButtonDisable("CnptCustCreditLimit", "A");
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYT_setDOGridButtonEnable("CnptCustCreditLimit", "A");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Set_CounterpartyCreditLimitDoButton", e);
    }
}

csFuncLevelProto.SYF_TRCP_Set_CounterpartyNonNettingCCYDoButton = function() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        if ((CNPT_ID === "" || CNPT_ID === null) || (CNPT_SHORT_NM === "" || CNPT_SHORT_NM === null)) {
            SYT_setDOGridButtonDisable("CounterpartyNonNettingCCY", "A");
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYT_setDOGridButtonEnable("CounterpartyNonNettingCCY", "A");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Set_CounterpartyNonNettingCCYDoButton", e);
    }
}

csFuncLevelProto.SYF_TRCP_Set_CounterpartySSIDoButton = function() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        if ((CNPT_ID === "" || CNPT_ID === null) || (CNPT_SHORT_NM === "" || CNPT_SHORT_NM === null)) {
            SYT_setDOGridButtonDisable("CounterpartySSI", "A");
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYT_setDOGridButtonEnable("CounterpartySSI", "A");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Set_CounterpartySSIDoButton", e);
    }
}

csFuncLevelProto.SYF_TRCP_Set_CounterpartyVostroAccountNoDoButton = function() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        if ((CNPT_ID === "" || CNPT_ID === null) || (CNPT_SHORT_NM === "" || CNPT_SHORT_NM === null)) {
            SYT_setDOGridButtonDisable("VostroAccountNo", "A");
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYT_setDOGridButtonEnable("VostroAccountNo", "A");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*SYF_TRCP_Set_CounterpartyVostroAccountNoDoButton", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_AC_CD_onchange = function(event) {
    try {
        //SYM_TRCP_Get_CNPT_CLASS_FL_NM();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*FLD_TRCP_CNPT_AC_CD_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_CLASS_SH_NM_onchange = function(event) {
    try {
        switch (document.MAINFORM.CNPT_CLASS_SH_NM.value) {
            case 'BILLFC':
                document.MAINFORM.CNPT_CLASS_FL_NM.value = "BILL FINANCE CORP";
                break;
            case 'BR':
                document.MAINFORM.CNPT_CLASS_FL_NM.value = "ESUN BANK BRANCH";
                break;
            case 'DBK':
                document.MAINFORM.CNPT_CLASS_FL_NM.value = "DOMESTIC BANK";
                break;
            case 'DCORP':
                document.MAINFORM.CNPT_CLASS_FL_NM.value = "DOMESTIC CORPORATION";
                break;
            case 'DGOV':
                document.MAINFORM.CNPT_CLASS_FL_NM.value = "DOMESTIC GOVERNMENT INSTITUTION";
                break;
            case 'DLS':
                document.MAINFORM.CNPT_CLASS_FL_NM.value = "DOMESTIC LIFE INSURANCE";
                break;
            case 'DSEC.CO':
                document.MAINFORM.CNPT_CLASS_FL_NM.value = "DOMESTIC SECURITIES CO.";
                break;
            case 'DSFC.CO':
                document.MAINFORM.CNPT_CLASS_FL_NM.value = "DOMESTIC SECURITY FINANCIAL CO.";
                break;
            case 'DSPV':
                document.MAINFORM.CNPT_CLASS_FL_NM.value = "DOMESTIC SPV";
                break;
            case 'FBK':
                document.MAINFORM.CNPT_CLASS_FL_NM.value = "FOREIGN BANK";
                break;
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*FLD_TRCP_CNPT_CLASS_SH_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_GP_SHORT_NM_onchange = function(event) {
    try {
        SYM_TRCP_Cal_CNPT_GP_SHORT_NM_ToUpperCase();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*FLD_TRCP_CNPT_GP_SHORT_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_HO_RISK_CNTY_onchange = function(event) {
    try {
        SYF_TRCP_Get_CountryName();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*FLD_TRCP_CNPT_HO_RISK_CNTY_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_ID_onchange = function(event) {
    try {
        SYM_TRCP_Cal_CNPT_ID_ToUpperCase();
        SYF_TRCP_Chk_DuplicateRecordByID();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*FLD_TRCP_CNPT_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_SHORT_NM_onchange = function(event) {
    try {
        SYM_TRCP_Cal_CNPT_SHORT_NM_ToUpperCase();
        SYF_TRCP_Chk_DuplicateRecordByShortNm();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*FLD_TRCP_CNPT_SHORT_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_SWADD_onchange = function(event) {
    try {
        SYM_TRCP_Cal_CNPT_SWADD_ToUpperCase();
        SYF_TRCP_Get_CntyCdFmSwiftBIC();
        SYF_TRCP_Get_CountryName();
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*FLD_TRCP_CNPT_SWADD_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_ISSUER_FLG_onchange = function(event) {
    try {
        SYM_TRCP_Set_FldClassByKeyFld("ISSUER_FLG", "ISSUER_ID");
        SYM_TRCP_Cal_FldValByKeyFld("ISSUER_FLG", "ISSUER_ID");
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*FLD_TRCP_ISSUER_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_KYC_FLG_onchange = function(event) {
    try {
        SYM_TRCP_Set_FldClassByKeyFld("KYC_FLG", "KYC_DT");
        SYM_TRCP_Cal_FldValByKeyFld("KYC_FLG", "KYC_DT");
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*FLD_TRCP_KYC_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_PROFESL_FLG_onchange = function(event) {
    try {
        SYM_TRCP_Set_FldClassByKeyFld("PROFESL_FLG", "PROFESL_LVL");
        SYM_TRCP_Cal_FldValByKeyFld("PROFESL_FLG", "PROFESL_LVL");
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*FLD_TRCP_PROFESL_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_STAKH_onchange = function(event) {
    try {
        SYM_TRCP_Set_FldClassByKeyFld("STAKH", "STAKH_TP");
        SYM_TRCP_Cal_FldValByKeyFld("STAKH", "STAKH_TP");
    } catch (e) {
        DisExcpt("SYF_TRCP_Add Counterparty.js*FLD_TRCP_STAKH_onchange", e);
    }
}