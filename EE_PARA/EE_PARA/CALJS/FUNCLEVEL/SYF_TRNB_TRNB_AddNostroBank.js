var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_TRNB_Cal_NostroAcNoSynchronization();
        SYM_TRNB_Cal_ContactSynchronization();
        document.MAINFORM.CURRENT_STATUS.value = "Confirm";
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {
        document.MAINFORM.CURRENT_STATUS.value = "Save";
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*ConfirmBusinessCallSave", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo('NOSTRO_BANK_REF', 'SYF_TRNB_Cal_SetRefNo');
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.LOCAL_TIME.value = SYS_TIME;
        document.MAINFORM.SYN_SOURCE_NOTES.value = "TRNB";
        SYF_TRNB_Get_NsBkCountryName();
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        SYF_TRNB_Set_NostroAccountNoDoButton(); //在加载DO页面的时候判断set DO 的Add button是启用还是禁用
        SYF_TRNB_Set_NostroBankContactDoButton();
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "MM") { //如果全局变量Function Type是PM或MM
            SYS_highTrxButton("_confirm", "_cancel", "_save", "_transaction", "_LoadTmpl", "_SaveTmpl");
            //当function type是PM或MM时可以点亮的button
        } else {
            SYS_highTrxButton("_confirm", "_cancel", "_save", "_transaction");
            //当function type不是PM或MM时可以点亮的button
        }
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRNB_Cal_SetRefNo = function(ref) {
    try {
        var UnitCode;
        var month;
        var pre;
        var sub;
        var year;
        CountryCode = SYS_BANK_COUNTRY;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'NB';
        document.MAINFORM.C_MAIN_REF.value = sub + CountryCode + year + month + ref;
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*SYF_TRNB_Cal_SetRefNo", e);
    }
}

csFuncLevelProto.SYF_TRNB_Chk_DuplicateRecordByNsBkID = function() {
    try {
        //var NS_BK_ID = document.MAINFORM.NS_BK_ID.value; //定义bank id的变量
        //var sSQLWhere = "NS_BK_ID = '" + NS_BK_ID + "'"; //拼装sql语句的where条件语句
        //var sTableName = "TRNB_MASTER"; //table名
        //var sFieldList = "NS_BK_ID"; //field名
        //var sMappingList = "NS_BK_ID"; //？
        //SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList, "SYF_TRNB_Chk_DuplicateRecordByNsBkIDSuccess", "SYF_TRNB_Chk_DuplicateRecordByNsBkIDFail", true);
		//SYS_GetTableDataByRule_S('Chk_DuplicateRecordByNsBkID', '1', 'Y');
		SYS_GetTableDataByRule('Chk_DuplicateRecordByNsBkID', '1', 'SYF_TRNB_Chk_DuplicateRecordByNsBkIDSuccess', "", "Y");
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*SYF_TRNB_Chk_DuplicateRecordByNsBkID", e);
    }
}

csFuncLevelProto.SYF_TRNB_Chk_DuplicateRecordByNsBkIDFail = function() {
    try {
        SYF_TRNB_Set_NostroAccountNoDoButton();
        SYF_TRNB_Set_NostroBankContactDoButton();
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*SYF_TRNB_Chk_DuplicateRecordByNsBkIDFail", e);
    }
}

csFuncLevelProto.SYF_TRNB_Chk_DuplicateRecordByNsBkIDSuccess = function() {
    try {
        //被function SYF_TRNB_Chk_DuplicateRecordByNsBkID()调用
        var NS_BK_ID = document.MAINFORM.NS_BK_ID.value;
        alert("The Nostro Bank ID:" + NS_BK_ID + " is exist!");
        document.MAINFORM.NS_BK_ID.value = "";
        SYF_TRNB_Set_NostroAccountNoDoButton(); //check通过后可以set DO 的Add button是启用还是禁用
        SYF_TRNB_Set_NostroBankContactDoButton(); //check通过后可以set DO 的Add button是启用还是禁用
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*SYF_TRNB_Chk_DuplicateRecordByNsBkIDSuccess", e);
    }
}

csFuncLevelProto.SYF_TRNB_Get_NsBkCountryName = function() {
    try {
        var NS_BK_CNTY_CD = document.MAINFORM.NS_BK_CNTY_CD.value; //定义Nostro Bank Country Code的变量
        var sCntyFldNm = document.MAINFORM.NS_BK_CNTY_NM.name; //定义Nostro Bank Country Name的变量
        //如果Nostro Bank Country Code不为空或null
        if (NS_BK_CNTY_CD !== "" && NS_BK_CNTY_CD !== null) {
            SYF_TRNB_getCountryName(NS_BK_CNTY_CD, sCntyFldNm);
        } else {
            document.MAINFORM.NS_BK_CNTY_NM.value = "";
            //若Nostro Bank Country Code为空则清除Nostro Bank Country Name中的内容，应该会加入onchange事件中：function FLD_TRNB_NS_BK_CNTY_CD_onchange
        }
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*SYF_TRNB_Get_NsBkCountryName", e);
    }
}

csFuncLevelProto.SYF_TRNB_Set_NostroAccountNoDoButton = function() {
    try {
        var NS_BK_ID = document.MAINFORM.NS_BK_ID.value; //定义bank id的变量
        //如果bank id为空
        if (NS_BK_ID === "" || NS_BK_ID === null) {
            SYS_disableButton('Nostro_Account_No', 'addbutton');
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYS_enableButton('Nostro_Account_No', 'addbutton');
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*SYF_TRNB_Set_NostroAccountNoDoButton", e);
    }
}

csFuncLevelProto.SYF_TRNB_Set_NostroBankContactDoButton = function() {
    try {
        var NS_BK_ID = document.MAINFORM.NS_BK_ID.value;
        if (NS_BK_ID === "" || NS_BK_ID === null) {
            SYS_disableButton('Nostro_Bank_Account', 'addbutton');
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYS_enableButton('Nostro_Bank_Account', 'addbutton');
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*SYF_TRNB_Set_NostroBankContactDoButton", e);
    }
}

csFuncLevelProto.SYF_TRNB_getCountryCodeFromSwiftBIC = function(sBICFldValue, sCntyCodeFldNm) {
    try {
        var sCntyCode = "";
        if (sBICFldValue !== "" && sBICFldValue !== null) {
            sCntyCode = sBICFldValue.substr(4, 2);
        }
        document.getElementById(sCntyCodeFldNm).value = sCntyCode;
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*SYF_TRNB_getCountryCodeFromSwiftBIC", e);
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
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*SYF_TRNB_getCountryName", e);
    }
}

csFuncLevelProto.SYF_TRNB_setDOGridButtonDisable = function(sDoNm, sButtonTp) {
    try {
        sButtonTp = sButtonTp.toUpperCase();
        switch (sButtonTp) {
            case "A":
                SYS_disableButton(sDoNm, "addbutton");
                break;
            case "E":
                SYS_disableButton(sDoNm, "editbutton");
                break;
            case "D":
                SYS_disableButton(sDoNm, "deletebutton");
                break;
            case "V":
                SYS_disableButton(sDoNm, "viewbutton");
                break;
        }
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*SYF_TRNB_setDOGridButtonDisable", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_TRNB_NS_BK_CNTY_CD_onchange = function(event) {
    try {
        SYF_TRNB_Get_NsBkCountryName();
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*FLD_TRNB_NS_BK_CNTY_CD_onchange", e);
    }
}

csFuncLevelProto.FLD_TRNB_NS_BK_HO_SWADD_onchange = function(event) {
    try {
        SYM_TRNB_Cal_NS_BK_HO_SWADD_ToUpperCase();
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*FLD_TRNB_NS_BK_HO_SWADD_onchange", e);
    }
}

csFuncLevelProto.FLD_TRNB_NS_BK_ID_onchange = function(event) {
    try {
        SYM_TRNB_Cal_NS_BK_ID_ToUpperCase();
        SYF_TRNB_Chk_DuplicateRecordByNsBkID();
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*FLD_TRNB_NS_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRNB_NS_BK_SWADD_onchange = function(event) {
    try {
        SYM_TRNB_Cal_NS_BK_SWADD_ToUpperCase();
        SYF_TRNB_getCountryCodeFromSwiftBIC(document.MAINFORM.NS_BK_SWADD.value, document.MAINFORM.NS_BK_CNTY_CD.name);
        SYF_TRNB_Get_NsBkCountryName();
    } catch (e) {
        DisExcpt("SYF_TRNB_TRNB_AddNostroBank.js*FLD_TRNB_NS_BK_SWADD_onchange", e);
    }
}