var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.CURRENT_STATUS.value = "Confirm";
        document.MAINFORM.CLS_FLG.value = "No";
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBranch.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo('TRCO_REF', 'SYF_TRCO_Cal_SetRefNo');
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.COMM_DATA_TP.value = "Branch";
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBranch.js*InitValues", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE === "IQ") {
           // SYF_TRCO_Gen_SelectFieldOptionFromCommBusiUnit();
        } else {
            SYF_TRCO_Gen_SelectFieldOptionFromSecBusiUnit();
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBranch.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_SetRefNo = function(ref) {
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
        sub = 'TRCO';
        document.MAINFORM.C_MAIN_REF.value = sub + CountryCode + year + ref;
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBranch.js*SYF_TRCO_Cal_SetRefNo", e);
    }
}


/*csFuncLevelProto.SYF_TRCO_Gen_SelectFieldOptionFromCommBusiUnit= function() {
    try {
  var sMappingList;
        sMappingList = "BR_ID";
        // SYS_GetTableDataByRule_S("GetUnitDataFromSecByAll", '1', null, 'Y', "Y");

        var sTableName = "EXIMTRX.TRCO_BR_DATA";
        var sSQLWhere = "C_TRX_STATUS="M"";
        var sFieldList = "BR_ID";
        var sMappingList = "BR_ID"
        SYS_GetMultiValueRefreshOptions_S(sTableName, sSQLWhere, sFieldList, sMappingList, '', '', true);
      SYS_GetTableDataByRule_S('GetBranchDataByAll', '1', true);
        var sBrIdValList = SYS_GetMultiFldValueFromArray("BR_ID");
        if (sBrIdValList === "" || sBrIdValList === null) {
            return;
        }
        var aBrIdVal = sBrIdValList.split(",");
        var nLen = aBrIdVal.length;
        if (nLen > 0) {
            var aBranchIdVal = SYT_create2DArray(2, nLen);
            var i;
            for (i = 0; i < nLen; i++) {
                aBranchIdVal[0][i] = aBrIdVal[i];
                aBranchIdVal[1][i] = aBrIdVal[i];
            }
            SYT_genSelectFldOptionFmFreeArray(aBranchIdVal, "BR_ID");
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBranch.js*SYF_TRCO_Gen_SelectFieldOptionFromCommBusiUnit", e);
    }
}*/


csFuncLevelProto.SYF_TRCO_Gen_SelectFieldOptionFromSecBusiUnit = function() {
    try {
        var sBusiUnit = "";
        var sMappingList;
        sMappingList = "BR_ID";
        // SYS_GetTableDataByRule_S("GetUnitDataFromSecByAll", '1', null, 'Y', "Y");

        var sTableName = "EXIMUSER.SEC_BUSINESS_UNIT";
        var sSQLWhere = "C_CNTY_CODE='" + SYS_BANK_COUNTRY + "'" + " AND " + "C_BK_GROUP_ID='" + SYS_BANK_GROUP + "'";
        var sFieldList = "C_UNIT_CODE";
        var sMappingList = "BR_ID"
        SYS_GetMultiValueRefreshOptions_S(sTableName, sSQLWhere, sFieldList, sMappingList, '', '', true);
        //   SYM_TRCO_RefreshOptions(sMappingList);
        var sBrIdValList = SYS_GetMultiFldValueFromArray("BR_ID");
        SYT_RemoveOption(document.MAINFORM.BR_ID.name, "CSOFFICE");
        SYT_RemoveOption(document.MAINFORM.BR_ID.name, "HUC");
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBranch.js*SYF_TRCO_Gen_SelectFieldOptionFromSecBusiUnit", e);
    }
}

csFuncLevelProto.SYF_TRCO_Get_BranchInfoFmSecBusiUnitData = function() {
    try {
        SYS_GetCUBK('GetSecUnitInfo', 'BR_ID');
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBranch.js*SYF_TRCO_Get_BranchInfoFmSecBusiUnitData", e);
    }
}

csFuncLevelProto.FLD_TRCO_BR_ID_onchange = function(event) {
    try {
    	
if (document.MAINFORM.BR_ID.value != '') {
        document.MAINFORM.TEMP_C_CFNC_REF.value = '';
        SYS_GetCUBK_S('Check_GetExistedBranch', document.MAINFORM.BR_ID.name,'TRUE');
        if (document.MAINFORM.TEMP_C_CFNC_REF.value != null && document.MAINFORM.TEMP_C_CFNC_REF.value != '' && document.MAINFORM.TEMP_C_CFNC_REF.value != 'null') {
            SYS_CheckError(document.MAINFORM.BR_ID, 'The Branch has registered in the system, please change another one. ');
            document.MAINFORM.BR_ID.value = '';
            return false;
        }else{	
    	SYS_GetCUBK('GetSecUnitInfo', document.MAINFORM.BR_ID.name);
    }
    }
    else {
            document.MAINFORM.BR_ID.value = '';

        }
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBranch.js*FLD_TRCO_BR_ID_onchange", e);
    }
}
