"path:SCRN/DO/FormA_Nigeria.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CR_Get_Field_Mapping = function() {
    try {
        var arrSourceFields; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sSourceFieldLists; // Utility Auto Fix Comments
        var sfieldList; // Utility Auto Fix Comments
        arrSourceFields = new Array();
        sSQLWhere = "EVENT_SHORT_NAME = '" + SYS_ORG_FUNCTION_SHORT_NAME + "'" +
            " AND CR_COUNTRY = '" + SYS_BANK_COUNTRY + "'";
        sfieldList = "CR_SOURCE_FIELD";
        sSourceFieldLists = "";

        // Make sure the error message field is cleared before adding any new error messages
        document.MAINFORM.ERROR_MESSAGE.value = "";

        // Set hidden field to func(EEAuto) short name so this can be passed into the Java class
        document.MAINFORM.FUNC_SHORT_NAME.value = SYS_ORG_FUNCTION_SHORT_NAME;

        // Set hidden field to country code so this can be passed into the Java class
        document.MAINFORM.BANK_COUNTRY.value = SYS_BANK_COUNTRY;

        // Set hidden field to local currency so this can be passed into the Java class
        document.MAINFORM.LOCAL_CCY.value = SYS_LOCAL_CCY;

        SYS_GetTableMultiDataToArray_S("CR_FIELD_MAPPING", sSQLWhere, sfieldList, 'false'); // Utility Auto Fix Comments

        arrSourceFields = SYS_GetMultiFldValueFromArray('CR_SOURCE_FIELD'); // Utility Auto Fix Comments

        for (i = 0; i < arrSourceFields.length; i++) { // Utility Auto Fix Comments
            sSourceFieldLists = sSourceFieldLists + arrSourceFields[i] + ";";
        }

        // Add the default fields that will always be passed into the Java class
        sSourceFieldLists = sSourceFieldLists + "FUNC_SHORT_NAME;BANK_COUNTRY;LOCAL_CCY;C_MAIN_REF";

        SYS_GetDataBySSS_S('SYST_CR_SETUP_FORMA_TRX', sSourceFieldLists);

        // Combine address fields into one
        if (document.MAINFORM.FORMA_APPLC_ADRES_C_1.value != "" || document.MAINFORM.FORMA_APPLC_ADRES_C_2.value != "" || document.MAINFORM.FORMA_APPLC_ADRES_C_3.value != "") {
            document.MAINFORM.FORMA_APPLC_ADRES_C.value = document.MAINFORM.FORMA_APPLC_ADRES_C_1.value + " " + document.MAINFORM.FORMA_APPLC_ADRES_C_2.value + " " + document.MAINFORM.FORMA_APPLC_ADRES_C_3.value;
        }

        if (document.MAINFORM.FORMA_BEN_ADRES_1.value != "" || document.MAINFORM.FORMA_BEN_ADRES_2.value != "" || document.MAINFORM.FORMA_BEN_ADRES_3.value != "") {
            document.MAINFORM.FORMA_BEN_ADRES.value = document.MAINFORM.FORMA_BEN_ADRES_1.value + " " + document.MAINFORM.FORMA_BEN_ADRES_2.value + " " + document.MAINFORM.FORMA_BEN_ADRES_3.value;
        }
    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var sfieldList; // Utility Auto Fix Comments
        if (document.MAINFORM.FORMA_TAB_TEXT.value == "" || SYS_ORG_FUNCTION_SHORT_NAME == "Cancel_IntTrf") {
            return true;
        }

        // Refresh the data on the FormA tab
        CR_Get_Field_Mapping();

        document.MAINFORM.FORMA_TRANS_D.value = SYS_DATE;

        // Check to see if we should do any validations
        if (document.MAINFORM.FORMA_FRGN_CCY.value != SYS_LOCAL_CCY && document.MAINFORM.FORMA_LOCAL_CCY.value == SYS_LOCAL_CCY) {
            // Default values into fields for exchange rates and values
            SYS_GetExchangeRate_S("NGN", "USD", "TT Selling", "FORMA_EXCH_RATE", '', '', '', '', '', '9');
            SYS_GetExchangeRateAMT_S("NGN", "USD", "TT Selling", SYS_BeFloat(document.MAINFORM.FORMA_NAIRA_EQ_AMT.value), "FORMA_USD_EQ_AMT");

            sfieldList = "FORMA_APPLC_N";

            SYS_GetDataBySSS_S('SYST_CR_VALIDATE_FORMA_TRX', sfieldList);
            // Check if an error message has been passed back from the Java class and display it
            if (document.MAINFORM.ERROR_MESSAGE.value != "") {
                alert(document.MAINFORM.ERROR_MESSAGE.value);
                // We need to reenable the buttons manually when the transaction fails from a DO
                parent.parent.toolbar.SYS_MakeButtonShow("onTrx", SYS_MODULE_NAME);
                return false;
            }

            if (document.MAINFORM.FORMA_VALID_FX_C.value == "") {
                alert(document.MAINFORM.FORMA_VALID_FX_C.title + " can't be empty, please check it");
                parent.parent.toolbar.SYS_MakeButtonShow("onTrx", SYS_MODULE_NAME);
                return false;
            }

            if (document.MAINFORM.FORMA_PURPS_PMNT_C.value == "") {
                alert("Purpose Payment Code can't be empty, please check it");
                parent.parent.toolbar.SYS_MakeButtonShow("onTrx", SYS_MODULE_NAME);
                return false;
            }

            if (document.MAINFORM.FORMA_SRC_FX_C.value == "") {
                alert("Source Of FX can't be empty, please check it");
                parent.parent.toolbar.SYS_MakeButtonShow("onTrx", SYS_MODULE_NAME);
                return false;
            }

            if (document.MAINFORM.FORMA_REG_D.value == "") {
                alert("Registered Date can't be empty, please check it");
                parent.parent.toolbar.SYS_MakeButtonShow("onTrx", SYS_MODULE_NAME);
                return false;
            }

            if (document.MAINFORM.FORMA_APPLC_N.value == "") {
                alert("Application Number can't be empty, please check it");
                parent.parent.toolbar.SYS_MakeButtonShow("onTrx", SYS_MODULE_NAME);
                return false;
            }

            if (document.MAINFORM.FORMA_CITY_CD.value == "") {
                alert("City Code can't be empty, please check it");
                parent.parent.toolbar.SYS_MakeButtonShow("onTrx", SYS_MODULE_NAME);
                return false;
            }

            if (document.MAINFORM.FORMA_STATE_CD.value == "") {
                alert("State Code can't be empty, please check it");
                parent.parent.toolbar.SYS_MakeButtonShow("onTrx", SYS_MODULE_NAME);
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}

csDOScreenProto.FormATab_onClick = function() {
    try {
        CR_Get_Field_Mapping();

        document.MAINFORM.FORMA_TRANS_D.value = SYS_DATE;

        // Default values into fields for exchange rates and values
        SYS_GetExchangeRate_S("NGN", "USD", "TT Selling", "FORMA_EXCH_RATE", '', '', '', '', '', '9');
        SYS_GetExchangeRateAMT_S("NGN", "USD", "TT Selling", SYS_BeFloat(document.MAINFORM.FORMA_NAIRA_EQ_AMT.value), "FORMA_USD_EQ_AMT");



        // Check if the defining rule is true. If it isn't make the controls read only 
        // and popup a message indicating that capture is not possible
        if (document.MAINFORM.FORMA_FRGN_CCY.value == SYS_LOCAL_CCY || document.MAINFORM.FORMA_LOCAL_CCY.value != SYS_LOCAL_CCY || SYS_ORG_FUNCTION_SHORT_NAME == "Cancel_IntTrf" || SYS_ORG_FUNCTION_SHORT_NAME == "EnqPymt" || SYS_ORG_FUNCTION_SHORT_NAME == "EnqPendTrx" || SYS_ORG_FUNCTION_SHORT_NAME == "Cancel_OTT" || SYS_FUNCTION_TYPE == "RE") {
            SYT_ChangeFldClass(document.MAINFORM.FORMA_CCI_C, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_APPLC_N, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_PURPS_PMNT_C, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_SECTRL_PMNT_C, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_SRC_FX_C, "P");

            SYT_ChangeFldClass(document.MAINFORM.FORMA_PURPS_PMNT_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_SECTRL_PMNT_BTN, "P");

            SYT_ChangeFldClass(document.MAINFORM.FORMA_VALID_FX_C, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_CITY_CD, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_STATE_CD, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_REG_D, "P");

            if ((document.MAINFORM.FORMA_FRGN_CCY.value == SYS_LOCAL_CCY || document.MAINFORM.FORMA_LOCAL_CCY.value != SYS_LOCAL_CCY) && (SYS_ORG_FUNCTION_SHORT_NAME != "CompOutPmt")) {
                alert("No Form A reporting required");
            }

        } else {
            SYT_ChangeFldClass(document.MAINFORM.FORMA_CCI_C, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_APPLC_N, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_PURPS_PMNT_C, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_SECTRL_PMNT_C, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_SRC_FX_C, "M");

            SYT_ChangeFldClass(document.MAINFORM.FORMA_PURPS_PMNT_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_SECTRL_PMNT_BTN, "O");

            SYT_ChangeFldClass(document.MAINFORM.FORMA_VALID_FX_C, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_CITY_CD, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_STATE_CD, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORMA_REG_D, "M");


        }
    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var mainFrame; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sfieldList; // Utility Auto Fix Comments
        /*
if (SYS_BANK_COUNTRY == "NG") {
	// Get the text for the tab.
	sSQLWhere = "CR_REQUIRED_REF = '" + SYS_BANK_COUNTRY + SYS_ORG_FUNCTION_SHORT_NAME + "'";
	sfieldList = "CR_TAB_TEXT";

	SYS_Get22TableData_S("CR_TYPES",sSQLWhere,sfieldList,"FORMA_TAB_TEXT",true);

	// Display the Tab
	parent.EEHtml.getElementById("Z").innerHTML = document.MAINFORM.FORMA_TAB_TEXT.value;

	// Display the Tab
	parent.EEHtml.getElementById("Z").style.display = "";
	parent.EEHtml.getElementById("Z_SEP").style.display = "";

	parent.EEHtml.getElementById("Z").onclick = FormATab_onClick;

	// Default to AA
	if (document.MAINFORM.FORMA_APPLC_N.value == "") {
		document.MAINFORM.FORMA_APPLC_N.value = "AA";
	}

	if (document.MAINFORM.ERROR_MESSAGE.value == "" && document.MAINFORM.FORMA_APPLC_N.value != "AA" && SYS_FUNCTION_TYPE == 'RE' && document.MAINFORM.FORMA_TAB_TEXT.value != "" && SYS_ORG_FUNCTION_SHORT_NAME != "Cancel_IntTrf") {
		// Refresh the data on the FormA tab
		CR_Get_Field_Mapping();
		
		//document.MAINFORM.FORMA_TRANS_D.value = SYS_DATE;

		// Check to see if we should do any validations
		if (document.MAINFORM.FORMA_FRGN_CCY.value != SYS_LOCAL_CCY) {
		
			// Default values into fields for exchange rates and values
			SYS_GetExchangeRate_S("NGN", "USD", "TT Selling", "FORMA_EXCH_RATE", '', '', '', '','','9');
			SYS_GetExchangeRateAMT_S("NGN", "USD", "TT Selling", SYS_BeFloat(document.MAINFORM.FORMA_NAIRA_EQ_AMT.value), "FORMA_USD_EQ_AMT");

			sfieldList = "FORMA_APPLC_N";

			SYS_GetDataBySSS_S('SYST_CR_VALIDATE_FORMA_TRX',sfieldList);
			// Check if an error message has been passed back from the Java class and display it
			if (document.MAINFORM.ERROR_MESSAGE.value != "" && document.MAINFORM.ERROR_DISPLAYED.value == "") {
				alert(document.MAINFORM.ERROR_MESSAGE.value);
				// We need to reenable the buttons manually when the transaction fails from a DO
				// parent.parent.toolbar.SYS_MakeButtonShow("onTrx",SYS_MODULE_NAME);
				
				document.MAINFORM.ERROR_DISPLAYED.value = "Y";
				
				mainFrame= window.parent.parent.openForm;
				mainFrame.IsAgreeGroup[0].checked=false;
				mainFrame.IsAgreeGroup[0].disabled=true;
				mainFrame.IsAgreeGroup[1].checked=true;
				mainFrame.C_REFUSE_REASON.readOnly=false;
				mainFrame.C_REFUSE_REASON.disabled=false;
			}
		}
	}

} else {
	parent.EEHtml.getElementById("Z").style.display = "none";
	parent.EEHtml.getElementById("Z_SEP").style.display = "none";
}
*/

    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}

csDOScreenProto.PurposePaymentCodeFail = function() {
    try {
        document.MAINFORM.FORMA_PURPS_PMNT_DESC.value = "";
        document.MAINFORM.FORMA_PURPS_PMNT_C.value = "";

        SYS_CheckError(document.MAINFORM.FORMA_PURPS_PMNT_C, "Purpose of Payment Code is invalid. Please try again.");
    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}

csDOScreenProto.SectorialPurposeCodeFail = function() {
    try {
        document.MAINFORM.FORMA_SECTRL_PMNT_C.value = "";

        SYS_CheckError(document.MAINFORM.FORMA_SECTRL_PMNT_C, "Sectorial Purpose Code is invalid. Please try again.");
    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}

csDOScreenProto.FORMA_PURPS_PMNT_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('FORMA_PURPS_PMNT_CODE', '1 = 1');
        //NOT FIND THE RULE
    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}

csDOScreenProto.FORMA_REG_D_onchange = function(event) {
    try {
        sRegDt = document.MAINFORM.FORMA_REG_D.value;
        sSysDt = SYS_BUSI_DATE;

        if (sRegDt != "") {
            sRegDt = SYT_GetDateObjectFromStr(sRegDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);

            if (sRegDt > dSysDt) {
                alert("The Date Registered cannot be a future date"); // Utility Auto Fix Comments
                document.MAINFORM.FORMA_REG_D.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}

csDOScreenProto.FORMA_SECTRL_PMNT_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('FORMA_SECTRL_PMNT_CODE', '1 = 1');
        //NOT FIND THE RULE
    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}

csDOScreenProto.FORMA_SECTRL_PMNT_C_onchange = function(event) {
    try {
        SYS_GetCUBK('FORMA_SECTRL_PMNT_CODE', 'FORMA_SECTRL_PMNT_C', '', 'SectorialPurposeCodeFail()', 'FALSE');
    } catch (e) {
        DisExcpt("SSSS_FormA_Nigeria.js", e);
    }
}