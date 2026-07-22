var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_TRNB_Cal_NostroAcNoSynchronization();
        SYM_TRNB_Cal_ContactSynchronization();
        document.MAINFORM.CURRENT_STATUS.value = "Confirm";
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_EditNostroBank.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {
        document.MAINFORM.CURRENT_STATUS.value = "Save";
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_EditNostroBank.js*ConfirmBusinessCallSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.SYN_SOURCE_NOTES.value = "TRNB";
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_EditNostroBank.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        SYS_GetDataForDO_S("GetNostroAccountNo", "N");
        SYS_GetDataForDO_S("GetNostroBankContact", "N");
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_EditNostroBank.js*LoadDODataOnInit", e);
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
        DisExcpt("SYF_TRNB_TRNB_EditNostroBank.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRNB_Get_NsBkCountryName = function() {
    try {
        var NS_BK_CNTY_CD = document.MAINFORM.NS_BK_CNTY_CD.value;
        var sCntyFldNm = document.MAINFORM.NS_BK_CNTY_NM.value;
        if (NS_BK_CNTY_CD !== "" && NS_BK_CNTY_CD !== null) {
            SYF_TRNB_getCountryName(NS_BK_CNTY_CD, sCntyFldNm);
        } else {
            document.MAINFORM.NS_BK_CNTY_NM.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_EditNostroBank.js*SYF_TRNB_Get_NsBkCountryName", e);
    }
}

csFuncLevelProto.SYF_TRNB_getCountryName = function(sCntyCdVal, sCntyNmFldNm) {
    try {
        if (sCntyCdVal !== null && sCntyCdVal !== "" && sCntyNmFldNm !== null && sCntyNmFldNm !== "") {
            //var sSQLWhere = "C_CNTY_CODE = '" + sCntyCdVal + "'";
            //var sTableName = "SEC_COUNTRY";
            //var sFieldList = "C_CNTY_NAME";
            //var sMappingList = sCntyNmFldNm;
            //SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, "", "", true);
			SYS_GetTableDataByRule_S('GetCountryNameByCode', '1', 'Y');
        } else {
            document.MAINFORM.NS_BK_CNTY_NM.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_EditNostroBank.js*SYF_TRNB_getCountryName", e);
    }
}

csFuncLevelProto.FLD_TRNB_NS_BK_CNTY_CD_onchange = function(event) {
    try {
        SYF_TRNB_Get_NsBkCountryName();
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_EditNostroBank.js*FLD_TRNB_NS_BK_CNTY_CD_onchange", e);
    }
}

csFuncLevelProto.FLD_TRNB_NS_BK_HO_SWADD_onchange = function(event) {
    try {
        SYM_TRNB_Cal_NS_BK_HO_SWADD_ToUpperCase();
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_EditNostroBank.js*FLD_TRNB_NS_BK_HO_SWADD_onchange", e);
    }
}

csFuncLevelProto.FLD_TRNB_NS_BK_SWADD_onchange = function(event) {
    try {
        SYM_TRNB_Cal_NS_BK_SWADD_ToUpperCase();
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_EditNostroBank.js*FLD_TRNB_NS_BK_SWADD_onchange", e);
    }
}