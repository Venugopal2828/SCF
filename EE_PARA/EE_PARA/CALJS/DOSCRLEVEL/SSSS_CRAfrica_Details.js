"path:SCRN/DO/CRAfrica_Details.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CRAfrica_onClick = function() {
    try {
        CR_Get_Field_Mapping();

        if (parent.document.MAINFORM.C_MAIN_REF.value.substring(0, 2) == "IT") {
            document.MAINFORM.CR_AMT.value = parent.document.MAINFORM.CR_AMT.value;
        } else {

            if (parent.document.MAINFORM.CR_CALC_AMT.value == 0) {
                SYS_GetExchangeRateAMT_S(parent.document.MAINFORM.DB_CCY.value, parent.document.MAINFORM.CR_CCY.value, "TT Selling;TT Selling;TT Selling", SYS_BeFloat(parent.document.MAINFORM.DB_CALC_AMT.value), "CR_AMT", "", "1;1;1");
            }

            if (document.MAINFORM.CR_AMT.value == 0) {
                document.MAINFORM.CR_AMT.value = parent.document.MAINFORM.CR_CALC_AMT.value;
            }

        }

        // Default values into fields for exchange rates and values
        if (parent.document.MAINFORM.CR_CCY.value != "USD" && parent.document.MAINFORM.CR_CCY.value != "") {
            SYS_GetExchangeRateAMT_S(parent.document.MAINFORM.CR_CCY.value, "USD", "TT Selling;TT Selling;TT Selling", SYS_BeFloat(document.MAINFORM.CR_AMT.value), "CRAFRICA_USD_EQ_AMT", "", "1;1;1");
        } else {
            document.MAINFORM.CRAFRICA_USD_EQ_AMT.value = document.MAINFORM.CR_AMT.value;
        }

        document.MAINFORM.CRAFRICA_PRODUCT.value = parent.document.MAINFORM.C_MAIN_REF.value.substring(0, 2);

        SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "O");
        SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "O");

        // Check if the defining rule is true. If it isn't make the controls read only 
        // and popup a message indicating that capture is not possible
        // had to manually 
        if (SYS_BANK_COUNTRY == "MU" && parent.document.MAINFORM.CR_CCY.value == "MUR") {
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");

            ClearPurpsCode();

            alert("No Central Bank reporting required");

        } else if (parent.document.MAINFORM.CR_CCY.value == SYS_LOCAL_CCY && SYS_BANK_COUNTRY != "MU") {
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");

            ClearPurpsCode();

            alert("No Central Bank reporting required");
        } else if (SYS_BANK_COUNTRY == "MU" && parent.document.MAINFORM.CR_CCY.value != "MUR") {
            // Check if country sent to is applicable for Central Reporting
            if (document.MAINFORM.CRAFRICA_PRODUCT.value == "OT") {
                if (parent.document.MAINFORM.AC_WT_INST_CNTY_CODE.value == "MU") {
                    SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
                    SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");

                    ClearPurpsCode();

                    alert("No Central Bank reporting required");
                } else if (parent.document.MAINFORM.AC_WT_INST_CNTY_CODE.value == "") {
                    alert("The central bank reporting requirement could not be determined because the Account With Institution Country Code field is blank.");
                }
            }
            if (document.MAINFORM.CRAFRICA_PRODUCT.value == "IT") {
                if (parent.document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "MU") {
                    SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
                    SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");

                    ClearPurpsCode();

                    alert("No Central Bank reporting required");
                }
            }
        } else if (SYS_BANK_COUNTRY == "TZ" && parent.document.MAINFORM.CR_CCY.value != "TZS") {
            // Check if country sent to is applicable for Central Reporting
            if (document.MAINFORM.CRAFRICA_PRODUCT.value == "OT") {
                if (parent.document.MAINFORM.AC_WT_INST_CNTY_CODE.value == "TZ") {
                    SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
                    SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");

                    ClearPurpsCode();

                    alert("No Central Bank reporting required");
                } else if (parent.document.MAINFORM.AC_WT_INST_CNTY_CODE.value == "") {
                    alert("The central bank reporting requirement could not be determined because the Account With Institution Country Code field is blank.");
                }
            }
            if (document.MAINFORM.CRAFRICA_PRODUCT.value == "IT") {
                if (parent.document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "TZ") {
                    SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
                    SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");

                    ClearPurpsCode();

                    alert("No Central Bank reporting required");
                }
            }
        }

        if (document.MAINFORM.CRAFRICA_USD_EQ_AMT.value > 0) {
            document.MAINFORM.CRAFRICA_USD_EQ_AMT.value = SYT_AmtFormat("USD", document.MAINFORM.CRAFRICA_USD_EQ_AMT.value);
        }
    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}

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
        sSourceFieldLists = sSourceFieldLists + "FUNC_SHORT_NAME;BANK_COUNTRY;LOCAL_CCY;C_MAIN_REF;C_CUST_ID;C_CUSTOMER_AC";

        SYS_GetDataBySSS_S('SYST_CR_SETUP_CRAFRICA_TRX', sSourceFieldLists);
    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}

csDOScreenProto.ClearPurpsCode = function() {
    try {
        document.MAINFORM.CRAFRICA_PURPS_CAT.value = "";
        document.MAINFORM.CRAFRICA_PURPS_CD.value = "";
        document.MAINFORM.CRAFRICA_PURPS_DESC.value = "";
    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var doCheck; // Utility Auto Fix Comments
        var sSQLWhere1; // Utility Auto Fix Comments
        var sSQLWhere2; // Utility Auto Fix Comments
        var sfieldList; // Utility Auto Fix Comments
        if (document.MAINFORM.CRAFRICA_TAB_TEXT.value == "") {
            return true;
        }

        document.MAINFORM.CRAFRICA_PRODUCT.value = parent.document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        document.MAINFORM.CR_CCY.value = parent.document.MAINFORM.CR_CCY.value;


        // Determine correct customer class
        ////sfieldList = "NON_RES_CLASS";
        if (document.MAINFORM.CRAFRICA_PRODUCT.value == "OT") {
            document.MAINFORM.T_X103_ORDCU_ID_50A.value = SYS_getValueFromMain("X103_ORDCU_ID_50A");
            //sSQLWhere1 = "C_MAIN_REF = '" + parent.document.MAINFORM.X103_ORDCU_ID_50A.value + "'";
            SYS_GetTableDataByRule_S('SSSS_CRAfrica_Details_ConfirmBusinessCheck_0', '1', true);
        } else {
            document.MAINFORM.T_X103_BENECU_ID_59A.value = SYS_getValueFromMain("X103_BENECU_ID_59A");
            //sSQLWhere2 = "C_MAIN_REF = '" + parent.document.MAINFORM.X103_BENECU_ID_59A.value + "'";
            SYS_GetTableDataByRule_S('SSSS_CRAfrica_Details_ConfirmBusinessCheck_1', '1', true);
        }





        if (SYS_BANK_COUNTRY == "MU" && parent.document.MAINFORM.CR_CCY.value == "MUR") {
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");
        } else if (parent.document.MAINFORM.CR_CCY.value == SYS_LOCAL_CCY && SYS_BANK_COUNTRY != "MU") {
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");

            ClearPurpsCode();
        } else if ((SYS_BANK_COUNTRY == "MU" && parent.document.MAINFORM.CR_CCY.value != "MUR") && document.MAINFORM.CRAFRICA_PRODUCT.value == "OT" && parent.document.MAINFORM.AC_WT_INST_CNTY_CODE.value == "") {
            alert("The central bank reporting requirement could not be determined because the Account With Institution Country Code field is blank.");

            // We need to reenable the buttons manually when the transaction fails from a DO
            parent.parent.toolbar.SYS_MakeButtonShow("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_transaction");
            return false;
        } else if ((SYS_BANK_COUNTRY == "TZ" && parent.document.MAINFORM.CR_CCY.value != "TZS") && document.MAINFORM.CRAFRICA_PRODUCT.value == "OT" && parent.document.MAINFORM.AC_WT_INST_CNTY_CODE.value == "") {
            alert("The central bank reporting requirement could not be determined because the Account With Institution Country Code field is blank.");

            // We need to reenable the buttons manually when the transaction fails from a DO
            parent.parent.toolbar.SYS_MakeButtonShow("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_transaction");
            return false;
        } else if ((SYS_BANK_COUNTRY == "MU" && parent.document.MAINFORM.CR_CCY.value != "MUR") && document.MAINFORM.CRAFRICA_PRODUCT.value == "OT" && parent.document.MAINFORM.AC_WT_INST_CNTY_CODE.value == "MU") {
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");
            ClearPurpsCode();
        } else if ((SYS_BANK_COUNTRY == "MU" && parent.document.MAINFORM.CR_CCY.value != "MUR") && document.MAINFORM.CRAFRICA_PRODUCT.value == "IT" && parent.document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "MU") {
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");
            ClearPurpsCode();
        } else if ((SYS_BANK_COUNTRY == "TZ" && parent.document.MAINFORM.CR_CCY.value != "TZS") && document.MAINFORM.CRAFRICA_PRODUCT.value == "OT" && parent.document.MAINFORM.AC_WT_INST_CNTY_CODE.value == "TZ") {
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");
            ClearPurpsCode();
        } else if ((SYS_BANK_COUNTRY == "TZ" && parent.document.MAINFORM.CR_CCY.value != "TZS") && document.MAINFORM.CRAFRICA_PRODUCT.value == "IT" && parent.document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "TZ") {
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_CD, "P");
            SYT_ChangeFldClass(document.MAINFORM.CRAFRICA_PURPS_BTN, "P");
            ClearPurpsCode();
        } else if (document.MAINFORM.CRAFRICA_PURPS_CD.value == "") {
            doCheck = true;

            if (document.MAINFORM.C_MAIN_REF.value.substring(0, 2) == "IT") {
                if (parent.EEHtml.getElementById("SEND_TO_FLAG") != null) {
                    if (parent.EEHtml.getElementById("SEND_TO_FLAG").value == "Send to Investigation Queue") {
                        doCheck = false;
                    }
                }
            }

            if (doCheck == true) {

                //if (document.MAINFORM.CRAFRICA_PURPS_CD.value == "" && parent.document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
                alert("Purpose Code can't be empty, please check it");

                // We need to reenable the buttons manually when the transaction fails from a DO	
                parent.parent.toolbar.SYS_MakeButtonShow("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_transaction");
                return false;
            }
        }


        if (parent.document.MAINFORM.C_MAIN_REF.value.substring(0, 2) == "IT") {
            document.MAINFORM.CR_AMT.value = parent.document.MAINFORM.CR_AMT.value;
        } else {
            if (parent.document.MAINFORM.CR_CALC_AMT.value == 0) {
                SYS_GetExchangeRateAMT_S(parent.document.MAINFORM.DB_CCY.value, parent.document.MAINFORM.CR_CCY.value, "TT Selling;TT Selling;TT Selling", SYS_BeFloat(parent.document.MAINFORM.DB_CALC_AMT.value), "CR_AMT", "", "1;1;1");
            }

            if (document.MAINFORM.CR_AMT.value == 0) {
                document.MAINFORM.CR_AMT.value = parent.document.MAINFORM.CR_CALC_AMT.value;
            }
        }

        // Default values into fields for exchange rates and values
        if (parent.document.MAINFORM.CR_CCY.value != "USD" && parent.document.MAINFORM.CR_CCY.value != "") {
            SYS_GetExchangeRateAMT_S(parent.document.MAINFORM.CR_CCY.value, "USD", "TT Selling;TT Selling;TT Selling", SYS_BeFloat(document.MAINFORM.CR_AMT.value), "CRAFRICA_USD_EQ_AMT", "", "1;1;1");
        } else {
            document.MAINFORM.CRAFRICA_USD_EQ_AMT.value = document.MAINFORM.CR_AMT.value;
        }

        if (document.MAINFORM.CRAFRICA_USD_EQ_AMT.value > 0) {
            document.MAINFORM.CRAFRICA_USD_EQ_AMT.value = SYT_AmtFormat("USD", document.MAINFORM.CRAFRICA_USD_EQ_AMT.value);
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var sSQLWhere; // Utility Auto Fix Comments
        var sfieldList; // Utility Auto Fix Comments
        /*
if (SYS_BANK_COUNTRY == "MU" || SYS_BANK_COUNTRY == "TZ") {
	// Get the text for the tab.
	sSQLWhere = "CR_REQUIRED_REF = '" + SYS_BANK_COUNTRY + SYS_ORG_FUNCTION_SHORT_NAME + "'";
	sfieldList = "CR_TAB_TEXT";

	SYS_Get22TableData_S("CR_TYPES",sSQLWhere,sfieldList,"CRAFRICA_TAB_TEXT",true);

	if (document.MAINFORM.CRAFRICA_TAB_TEXT.value != "") {
		// Display the Tab
		parent.EEHtml.getElementById("Z").innerHTML = document.MAINFORM.CRAFRICA_TAB_TEXT.value;

		// Display the Tab
		parent.EEHtml.getElementById("Z").style.display = "";
		parent.EEHtml.getElementById("Z_SEP").style.display = "";
	
		parent.EEHtml.getElementById("Z").onclick = CRAfrica_onClick;
	} else {
		// Hide the Tab
		parent.EEHtml.getElementById("Z").style.display = "none";
		parent.EEHtml.getElementById("Z_SEP").style.display = "none";
	}
} else {
	parent.EEHtml.getElementById("Z").style.display = "none";
	parent.EEHtml.getElementById("Z_SEP").style.display = "none";
}
*/

    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}

csDOScreenProto.PurposeCodeFail = function() {
    try {
        document.MAINFORM.CRAFRICA_PURPS_DESC.value = "";
        document.MAINFORM.CRAFRICA_PURPS_CD.value = "";
        document.MAINFORM.CRAFRICA_PURPS_CAT.value = "";

        SYS_CheckError(document.MAINFORM.CRAFRICA_PURPS_CD, "Central Bank Code is invalid");
    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}

csDOScreenProto.PurposeCodePass = function() {
    try {
        if ((document.MAINFORM.CRAFRICA_PRODUCT.value.substring(0, 1) == "I" && (document.MAINFORM.CRAFRICA_PURPS_CD.value.substring(0, 1) == "O" || document.MAINFORM.CRAFRICA_PURPS_CD.value.substring(0, 1) == "3")) || (document.MAINFORM.CRAFRICA_PRODUCT.value.substring(0, 1) == "O" && (document.MAINFORM.CRAFRICA_PURPS_CD.value.substring(0, 1) == "I" || document.MAINFORM.CRAFRICA_PURPS_CD.value.substring(0, 1) == "2"))) {
            PurposeCodeFail();
            document.MAINFORM.CRAFRICA_PURPS_CD.value = "";
            document.MAINFORM.CRAFRICA_PURPS_DESC.value = "";
            document.MAINFORM.CRAFRICA_PURPS_CAT.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}

csDOScreenProto.CRAFRICA_PURPS_BTN_onclick = function(event) {
    try {
        /*SqlWhere = "CR_PRODUCT = '" + document.MAINFORM.C_MAIN_REF.value.substring(0, 2) + "' " +
        " AND CR_PURPS_CODE <> ' ' " +
        " AND (CR_HIDDEN <> 'Y' or CR_HIDDEN is null) ";

    SYS_InqCUBK_Sql('CRAFRICA_PURPS_CODE', SqlWhere);*/
        //NOT FIND THE RULE
    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}

csDOScreenProto.CRAFRICA_PURPS_CD_onchange = function(event) {
    try {
        if (document.MAINFORM.CRAFRICA_PURPS_CD.value != "") {
            SYS_GetCUBK('CRAFRICA_PURPS_CODE', 'CRAFRICA_PURPS_CD', 'PurposeCodePass()', 'PurposeCodeFail()', 'FALSE');
        } else {
            document.MAINFORM.CRAFRICA_PURPS_CAT.value = "";
            document.MAINFORM.CRAFRICA_PURPS_DESC.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}

csDOScreenProto.CR_AMT_onchange = function(event) {
    try {
        CR_Get_Field_Mapping();

        // Default values into fields for exchange rates and values
        if (document.MAINFORM.CR_CCY.value != "USD" && document.MAINFORM.CR_CCY.value != "") {
            SYS_GetExchangeRateAMT_S(document.MAINFORM.CR_CCY.value, "USD", "TT Selling;TT Selling;TT Selling", SYS_BeFloat(document.MAINFORM.CR_AMT.value), "CRAFRICA_USD_EQ_AMT", "", "1;1;1");
        } else {
            document.MAINFORM.CRAFRICA_USD_EQ_AMT.value = document.MAINFORM.CR_AMT.value;
        }

        EEHtml.fireEvent(document.MAINFORM.CRAFRICA_USD_EQ_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_CRAfrica_Details.js", e);
    }
}