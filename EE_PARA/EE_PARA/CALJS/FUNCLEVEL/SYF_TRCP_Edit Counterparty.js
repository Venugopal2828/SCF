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
        DisExcpt("SYF_TRCP_Edit Counterparty.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {
        document.MAINFORM.CURRENT_STATUS.value = "Save";
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*ConfirmBusinessCallSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.SYN_SOURCE_NOTES.value = "GTS";
        //        SYM_TRCP_Get_CNPT_CLASS_FL_NM();
        FLD_TRCP_CNPT_CLASS_SH_NM_onchange();
        SYF_TRCP_Get_CountryName();
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE !== "EC" && SYS_FUNCTION_TYPE !== "RE") {
            SYS_GetDataForDO_S("GetBrokerChargeWay", "N", false);
            SYS_GetDataForDO_S("GetCounterpartySSI", "N", false);
            SYS_GetDataForDO_S("GetCounterpartyContact", "N", false);
            SYS_GetDataForDO_S("GetCounterpartyNonNettingCCY", "N", false);
            SYS_GetDataForDO_S("GetCounterpartyAccountNo", "N", false);
            //            SYS_GetDataForDO_S("GetCnptCustCreditLimit", "N", false);
            SYS_GetDataForDO_S("GetVostroAccountNo", "N", false);
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "MM") {
            SYS_highTrxButton("_confirm", "_cancel", "_save", "_transaction", "_LoadTmpl", "_SaveTmpl");
        } else {
            SYS_highTrxButton("_confirm", "_cancel", "_save", "_transaction");
        }
        SYM_TRCP_Set_FldClassByKeyFld("ISSUER_FLG", "ISSUER_ID");
        SYM_TRCP_Set_FldClassByKeyFld("KYC_FLG", "KYC_DT");
        SYM_TRCP_Set_FldClassByKeyFld("PROFESL_FLG", "PROFESL_LVL");
        SYM_TRCP_Set_FldClassByKeyFld("STAKH", "STAKH_TP");
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYM_TRCP_genSelectFieldOptionFromBranchCodeData("PROFIT_BR");
        SYM_TRCP_genSelectFieldOptionFromBranchCodeData("BR_CD");
        SYM_TRCP_genSelectFieldOptionFromBranchCodeData("CROP_BR_CD");
        SYM_TRCP_genSelectFieldOptionFromBranchCodeData("AC_BR");
        //        SYM_TRCP_Gen_SelectFldOtpOfCnptClassName();
        //        SYM_TRCP_Gen_SelectFldOtpOfCropBrGp();
        //        SYM_TRCP_Gen_SelectFldOtpOfCnptType();
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRCP_Chk_DuplicateRecordByID = function() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var sSQLWhere = "CNPT_ID = '" + CNPT_ID + "'";
        var sTableName = "TRCP_MASTER";
        var sFieldList = "CNPT_ID";
        var sMappingList = "CNPT_ID";
        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, "SYF_TRCP_Chk_DuplicateRecordByIDSuccess", "", "Y");
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*SYF_TRCP_Chk_DuplicateRecordByID", e);
    }
}

csFuncLevelProto.SYF_TRCP_Chk_DuplicateRecordByIDSuccess = function() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        alert("The Counterparty ID:" + CNPT_ID + " is exist!");
        document.MAINFORM.CNPT_ID.value = "";
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*SYF_TRCP_Chk_DuplicateRecordByIDSuccess", e);
    }
}

csFuncLevelProto.SYF_TRCP_Chk_DuplicateRecordByShortNm = function() {
    try {
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        var C_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        var sSQLWhere = "CNPT_SHORT_NM = '" + CNPT_SHORT_NM + "'";
        var nCount = 0;
        var bChkFlg = false;
        SYS_MULTI_DATA = "";
        SYS_GetTableMultiDataToArray_S("TRCP_MASTER", sSQLWhere, "C_MAIN_REF", true);
        if (SYS_MULTI_DATA !== "" && SYS_MULTI_DATA !== null) {
            var aMainRefValRs = SYS_MULTI_DATA[0][1].toString().split(",");
            nCount = aMainRefValRs.length;
            var i;
            for (i = 0; i < nCount; i++) {
                if (aMainRefValRs[i] !== C_MAIN_REF) {
                    bChkFlg = true;
                    break;
                }
            }
        }
        if (bChkFlg) {
            alert("The Counterparty Short Name:" + CNPT_SHORT_NM + " is exist!");
            document.MAINFORM.CNPT_SHORT_NM.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*SYF_TRCP_Chk_DuplicateRecordByShortNm", e);
    }
}

csFuncLevelProto.SYF_TRCP_Get_CntyCdFmSwiftBIC = function() {
    try {
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value;
        var sCntyCdFldNm = document.MAINFORM.CNPT_RISK_CNTY_CD.name;
        SYT_getCountryCodeFromSwiftBIC(CNPT_SWADD, sCntyCdFldNm);
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*SYF_TRCP_Get_CntyCdFmSwiftBIC", e);
    }
}

csFuncLevelProto.SYF_TRCP_Get_CountryName = function() {
    try {
        var CNPT_HO_RISK_CNTY = document.MAINFORM.CNPT_HO_RISK_CNTY.value;
        var sCntyFldNm = document.MAINFORM.CNPT_HO_RISK_CY_NM.name;
        SYT_getCountryName(CNPT_HO_RISK_CNTY, sCntyFldNm);
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*SYF_TRCP_Get_CountryName", e);
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
        DisExcpt("SYF_TRCP_Edit Counterparty.js*FLD_TRCP_CNPT_CLASS_SH_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_GP_SHORT_NM_onchange = function(event) {
    try {
        SYM_TRCP_Cal_CNPT_GP_SHORT_NM_ToUpperCase();
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*FLD_TRCP_CNPT_GP_SHORT_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_HO_RISK_CNTY_onchange = function(event) {
    try {
        SYF_TRCP_Get_CountryName();
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*FLD_TRCP_CNPT_HO_RISK_CNTY_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_ID_onchange = function(event) {
    try {
        SYF_TRCP_Chk_DuplicateRecordByID();
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*FLD_TRCP_CNPT_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_SHORT_NM_onchange = function(event) {
    try {
        SYF_TRCP_Chk_DuplicateRecordByShortNm();
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*FLD_TRCP_CNPT_SHORT_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_CNPT_SWADD_onchange = function(event) {
    try {
        SYM_TRCP_Cal_CNPT_SWADD_ToUpperCase();
        SYF_TRCP_Get_CntyCdFmSwiftBIC();
        SYF_TRCP_Get_CountryName();
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*FLD_TRCP_CNPT_SWADD_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_ISSUER_FLG_onchange = function(event) {
    try {
        SYM_TRCP_Set_FldClassByKeyFld("ISSUER_FLG", "ISSUER_ID");
        SYM_TRCP_Cal_FldValByKeyFld("ISSUER_FLG", "ISSUER_ID");
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*FLD_TRCP_ISSUER_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_KYC_FLG_onchange = function(event) {
    try {
        SYM_TRCP_Set_FldClassByKeyFld("KYC_FLG", "KYC_DT");
        SYM_TRCP_Cal_FldValByKeyFld("KYC_FLG", "KYC_DT");
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*FLD_TRCP_KYC_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_PROFESL_FLG_onchange = function(event) {
    try {
        SYM_TRCP_Set_FldClassByKeyFld("PROFESL_FLG", "PROFESL_LVL");
        SYM_TRCP_Cal_FldValByKeyFld("PROFESL_FLG", "PROFESL_LVL");
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*FLD_TRCP_PROFESL_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCP_STAKH_onchange = function(event) {
    try {
        SYM_TRCP_Set_FldClassByKeyFld("STAKH", "STAKH_TP");
        SYM_TRCP_Cal_FldValByKeyFld("STAKH", "STAKH_TP");
    } catch (e) {
        DisExcpt("SYF_TRCP_Edit Counterparty.js*FLD_TRCP_STAKH_onchange", e);
    }
}