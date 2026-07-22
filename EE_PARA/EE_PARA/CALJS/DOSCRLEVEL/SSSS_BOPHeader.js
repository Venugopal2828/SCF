"path:SCRN/DO/BOPHeader.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.BOPTab_onClick = function() {
    try {
        var i; // Utility Auto Fix Comments
        var payAmt; // Utility Auto Fix Comments
        var paymentsMultipleDebits; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var settAmt; // Utility Auto Fix Comments
        // Calculate the total amounts on the Settlements tab to be used for reporting amount
        paymentsMultipleDebits = SYS_getDoByXpath('PaymentMultipleDebits');
        records = SYS_getRecords(paymentsMultipleDebits);

        payAmt = 0;
        settAmt = 0;

        for (i = 0; i < records.length; i++) { // Utility Auto Fix Comments
            if (SYS_LOCAL_CCY == SYS_getValFromRec(records[i], "SETT_CCY")) {
                payAmt += SYS_BeFloat(SYS_getValFromRec(records[i], "PAY_AMT"));
                settAmt += SYS_BeFloat(SYS_getValFromRec(records[i], "SETT_AMT"));
            }
        }

        document.MAINFORM.SETTLEMENT_DO_SETT_AMT.value = settAmt;
        document.MAINFORM.SETTLEMENT_DO_PAY_AMT.value = payAmt;

        CR_Get_Field_Mapping();

        Cal_PMO_BOP_NON_RSDNT_EXCPN_NM();

        Cal_PMO_BOP_RSDNT_EXCPN_NM();

        CR_Get_Amount_Left_Reporting();

        CR_Get_BOP_Trans_Ref_Number();
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.BOP_REPORTING_onclick = function() {
    try {
        var bopDetails; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        // Check if there are any rows in the details section. If there are, warn the user
        // to remove them first
        bopDetails = SYS_getDoByXpath('BOPHEADER.BOPDetails');
        records = SYS_getRecords(bopDetails);

        if (records.length > 0) {
            alert('Please delete all rows before switching between Travel and Non Travel');

            // Put the radio button back to where it was and exit the func(EEAuto).
            if (document.MAINFORM.BOP_REPORTING[0].checked == true) {
                document.MAINFORM.BOP_REPORTING[1].checked = true;
                return;
            } else {
                document.MAINFORM.BOP_REPORTING[0].checked = true;
                return;
            }
        }

        if (document.MAINFORM.BOP_REPORTING[1].checked == true) {
            // Travel
            document.MAINFORM.PROTECTED_FIELDS.value = "BOP_NRES_CNTRY_C;BOP_NRES_NRES_I;BOP_NRES_ONE_M;BOP_NRES_SURNAME_M;BOP_NRES_NAME_M";
            CR_Set_Fields_Class(document.MAINFORM.PROTECTED_FIELDS.value, "P");
        } else {
            // Non Travel
            BOP_STTUS_C_onchange();
            Cal_PMO_BOP_NON_RSDNT_EXCPN_NM();
        }
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.CR_Get_Amount_Left_Reporting = function() {
    try {
        var bopDetails; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var reportingAmount; // Utility Auto Fix Comments
        var transAmtSum; // Utility Auto Fix Comments
        // Calculate the amount left for reporting


        if (document.MAINFORM.BOP_SELCT_CCY[0].checked == true) {
            reportingAmount = document.MAINFORM.BOP_PRNPL_A.value;
            document.MAINFORM.BOP_RPTG_CCY.value = document.MAINFORM.BOP_PRNPL_CRNCY_C.value;
        } else {
            reportingAmount = document.MAINFORM.BOP_SCDRY_A.value;
            document.MAINFORM.BOP_RPTG_CCY.value = document.MAINFORM.BOP_SCDRY_CRNCY_C.value;
        }

        bopDetails = SYS_getDoByXpath('BOPHEADER.BOPDetails');
        records = SYS_getRecords(bopDetails);
        transAmtSum = 0;

        for (i = 0; i < records.length; i++) {
            transAmtSum += SYS_BeFloat(SYS_getValFromRec(records[i], "BOP_TRANS_A"));
        }

        document.MAINFORM.BOP_RPTG_AMT.value = SYT_AmtFormat(document.MAINFORM.BOP_RPTG_CCY.value, SYS_BeFloat(reportingAmount) - transAmtSum);
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.CR_Get_BOP_Trans_Ref_Number = function() {
    try {
        var i; // Utility Auto Fix Comments
        var sEventTimes; // Utility Auto Fix Comments
        var sPadded; // Utility Auto Fix Comments
        var sReportingStatus; // Utility Auto Fix Comments
        // Populate the BOP Reference number field.
        sEventTimes = document.MAINFORM.BOP_EVENT_TIMES.value;
        sPadded = '';

        // Pad with zeros if less than 3
        if (sEventTimes.length < 3) {
            for (i = 0; i < (3 - sEventTimes.length); i++) {
                sPadded += '0';
            }
        }

        sPadded = sPadded + document.MAINFORM.BOP_EVENT_TIMES.value;

        // Get reporting status value
        sReportingStatus = document.MAINFORM.BOP_STTUS_C.value;

        if (sReportingStatus == "Original" || sReportingStatus == "Not Reportable") {
            sReportingStatus = "";
        } else if (sReportingStatus == "Cancel") {
            sReportingStatus = "CA";
        } else if (sReportingStatus == "Replace") {
            sReportingStatus = "RE";
        } else if (sReportingStatus == "Cancel & Replace") {
            sReportingStatus = "CR";
        }

        document.MAINFORM.BOP_TRANS_REF.value = document.MAINFORM.BOP_TRANS_N.value + sPadded + sReportingStatus;
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
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
        document.MAINFORM.MANDATORY_FIELDS.value = "";
        document.MAINFORM.OPEN_FIELDS.value = "";
        document.MAINFORM.STATUS_OPTIONS.value = "";
        document.MAINFORM.PROTECTED_FIELDS.value = "";

        // Set hidden field to func(EEAuto) short name so this can be passed into the Java class
        document.MAINFORM.FUNC_SHORT_NAME.value = SYS_ORG_FUNCTION_SHORT_NAME;

        // Set hidden field to country code so this can be passed into the Java class
        document.MAINFORM.BANK_COUNTRY.value = SYS_BANK_COUNTRY;

        // Set hidden field to local currency so this can be passed into the Java class
        document.MAINFORM.LOCAL_CCY.value = SYS_LOCAL_CCY;

        SYS_GetTableMultiDataToArray_S("CR_FIELD_MAPPING", sSQLWhere, sfieldList, 'false'); // Utility Auto Fix Comments

        arrSourceFields = SYS_GetMultiFldValueFromArray('CR_SOURCE_FIELD'); // Utility Auto Fix Comments

        for (i = 0; i < arrSourceFields.length; i++) {
            sSourceFieldLists = sSourceFieldLists + arrSourceFields[i] + ";";
        }

        // Add the default fields that will always be passed into the Java class
        sSourceFieldLists = sSourceFieldLists + "FUNC_SHORT_NAME;BANK_COUNTRY;LOCAL_CCY;SETTLEMENT_DO_SETT_AMT;SETTLEMENT_DO_PAY_AMT";

        SYS_GetDataBySSS_S('SYST_CR_SETUP_BOP_TRX', sSourceFieldLists);

        // Call func(EEAuto) to handle the setting of the field classes based 
        // on the fields returned from the Java class
        if (document.MAINFORM.OPEN_FIELDS.value != "") {
            CR_Set_Fields_Class(document.MAINFORM.OPEN_FIELDS.value, "O");
        }

        if (document.MAINFORM.PROTECTED_FIELDS.value != "") {
            CR_Set_Fields_Class(document.MAINFORM.PROTECTED_FIELDS.value, "P");
        }

        if (document.MAINFORM.MANDATORY_FIELDS.value != "") {
            CR_Set_Fields_Class(document.MAINFORM.MANDATORY_FIELDS.value, "M");
        }

        if (document.MAINFORM.STATUS_OPTIONS.value != "") {
            CR_Set_Select_Options("BOP_STTUS_C", document.MAINFORM.STATUS_OPTIONS.value);
        }

        // Check if BOP is not reportable, If it isn't hide the BOP Details DO
        if (document.MAINFORM.BOP_STTUS_C.value == "Not Reportable") {
            EEHtml.getElementById("C_div").style.display = "none";
        }

        // Check if an error message has been passed back from the Java class and display it
        if (document.MAINFORM.ERROR_MESSAGE.value != "") {
            alert(document.MAINFORM.ERROR_MESSAGE.value);
        }
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.CR_Set_Fields_Class = function(fieldsToSet, sMPO) {
    try {
        var arrFieldsToSet; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var objField; // Utility Auto Fix Comments
        arrFieldsToSet = fieldsToSet.split(";");

        for (i = 0; i < arrFieldsToSet.length; i++) {
            objField = document.MAINFORM.elements[arrFieldsToSet[i]];

            // Check if this is an array and not any other input type
            if (objField.length != undefined && objField.type == undefined) {
                for (j = 0; j < objField.length; j++) {
                    SYT_ChangeFldClass(objField[j], sMPO);

                    // Change the radio button enabled or disabled based on the class
                    // This needs to be done manually as the EE method does not seem to
                    // change it for radio buttons correctly
                    if (objField[j].className == "CHAR_P") {
                        objField[j].disabled = true;
                    } else {
                        objField[j].disabled = false;
                    }
                }
            } else {
                SYT_ChangeFldClass(objField, sMPO);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.CR_Set_Select_Options = function(sFieldName, sSelectValues) {
    try {
        var arrFieldValues; // Utility Auto Fix Comments
        var blankOpt; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var opt; // Utility Auto Fix Comments
        // Remove all elements from the drop down
        document.MAINFORM.elements[sFieldName].options.length = 0;

        // Add first blank selection
        blankOpt = document.createElement("option");

        document.MAINFORM.elements[sFieldName].options.add(blankOpt);

        // Repopulate the select drop down with the required options
        arrFieldValues = sSelectValues.split(";");

        for (i = 0; i < arrFieldValues.length; i++) {
            opt = document.createElement("option");

            opt.text = arrFieldValues[i];
            opt.value = arrFieldValues[i];

            document.MAINFORM.elements[sFieldName].options.add(opt);
        }
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.Cal_PMO_BOP_NON_RSDNT_EXCPN_NM = function() {
    try {
        if (document.MAINFORM.BOP_NRES_NRES_I.value == 'X') {
            document.MAINFORM.BOP_NRES_NAME_M.value = ''; // Utility Auto Fix Comments
            document.MAINFORM.BOP_NRES_SURNAME_M.value = ''; // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.BOP_NON_RSDNT_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BOP_NON_RSDNT_SURNM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BOP_NRES_ONE_M, 'M');
        }

        if (document.MAINFORM.BOP_NRES_NRES_I.value == 'I') {
            document.MAINFORM.BOP_NRES_ONE_M.value = ''; // Utility Auto Fix Comments
            document.MAINFORM.BOP_NRES_SURNAME_M.value = ''; // Utility Auto Fix Comments
            document.MAINFORM.BOP_NRES_NAME_M.value = ''; // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.BOP_NRES_NAME_M, 'M');
            SYT_ChangeFldClass(document.MAINFORM.BOP_NRES_SURNAME_M, 'M');
            SYT_ChangeFldClass(document.MAINFORM.BOP_NRES_ONE_M, 'P');
        }

        if (document.MAINFORM.BOP_NRES_NRES_I.value == 'E') {
            document.MAINFORM.BOP_NRES_ONE_M.value = ''; // Utility Auto Fix Comments
            document.MAINFORM.BOP_NRES_NAME_M.value = ''; // Utility Auto Fix Comments
            document.MAINFORM.BOP_NRES_SURNAME_M.value = ''; // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.BOP_NRES_ONE_M, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BOP_NRES_NAME_M, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BOP_NRES_SURNAME_M, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.Cal_PMO_BOP_RSDNT_EXCPN_NM = function() {
    try {
        if (document.MAINFORM.BOP_RES_NRES_I.value == "X") {
            SYT_ChangeFldClass(document.MAINFORM.BOP_RES_ONE_M, 'O'); // Utility Auto Fix Comments
        } else {
            document.MAINFORM.BOP_RES_ONE_M.value = ''; // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.BOP_RES_ONE_M, 'P'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var arrDestinationFields; // Utility Auto Fix Comments
        var arrSourceFields; // Utility Auto Fix Comments
        var bopDetails; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var objSourceField; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var sDestinationField; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sfieldList; // Utility Auto Fix Comments
        if (document.MAINFORM.BOP_STTUS_C.value != "Not Reportable") {

            // Check if BOP screen fields values still match source fields
            arrSourceFields = new Array();
            arrDestinationFields = new Array();
            sSQLWhere = "EVENT_SHORT_NAME = '" + SYS_ORG_FUNCTION_SHORT_NAME + "'";
            sfieldList = "CR_DESTINATION_FIELD;CR_SOURCE_FIELD";



            SYS_GetTableMultiDataToArray_S("CR_FIELD_MAPPING", sSQLWhere, sfieldList, 'false');

            arrSourceFields = SYS_GetMultiFldValueFromArray('CR_SOURCE_FIELD');
            arrDestinationFields = SYS_GetMultiFldValueFromArray('CR_DESTINATION_FIELD');

            for (i = 0; i < arrSourceFields.length; i++) {
                objSourceField = arrSourceFields[i];
                sDestinationField = arrDestinationFields[i];

                if (eval(objSourceField) != EEHtml.getElementById(sDestinationField).value) {
                    alert("The transaction information has changed since BOP was completed. Please clear and redo BOP information.");
                    parent.parent.toolbar.SYS_MakeButtonShow("onTrx", SYS_MODULE_NAME);
                    return false;
                }
            }

            // If ID number filled in, temporary permit is not required and vice versa.
            if ((document.MAINFORM.BOP_BSNTR_ID_N.className == "CHAR_M" || document.MAINFORM.BOP_BSNTR_ID_N.className == "CHAR_O") && document.MAINFORM.BOP_BSNTR_ID_N.value == "" && document.MAINFORM.BOP_BSNTR_TEMPI_N.value == "") {
                SYS_CheckError(document.MAINFORM.BOP_BSNTR_ID_N, "Either the business traveller ID or temporary permit number must be filled in");
                // We need to reenable the buttons manually when the transaction fails from a DO	
                parent.parent.toolbar.SYS_MakeButtonShow("onTrx", SYS_MODULE_NAME);
                return false;
            }

            // Do Main BOP validations. This will be handled by the Java class
            sfieldList = "C_CUST_ID;C_CUSTOMER_AC;BANK_COUNTRY;LOCAL_CCY;BOP_BSNTR_FIRST_M;BOP_BSNTR_LAST_M;BOP_BSNTR_ID_N;BOP_BSNTR_TEMPI_N;BOP_SCDRY_A;BOP_SCDRY_CRNCY_C;BOP_PRNPL_A;BOP_PRNPL_CRNCY_C;BOP_AMNT_ENTRD_IND;BOP_PURCHASE_SALE_IND;BOP_STTUS_C;BOP_TRANS_N;C_MAIN_REF;BOP_RES_NRES_I;BOP_RES_ONE_M;BOP_NRES_NRES_I;BOP_NRES_ONE_M;BOP_NRES_NAME_M;BOP_NRES_SURNAME_M";

            // Create comma delimited lists of the BOP_DETAILS field values so these can
            // be passed to the Java class for validation.
            bopDetails = SYS_getDoByXpath('BOPHEADER.BOPDetails');
            records = SYS_getRecords(bopDetails);

            // Clear all fields first before populating
            document.MAINFORM.BOP_DETAIL_CAT_C.value = "";
            document.MAINFORM.BOP_DETAIL_TRANS_A.value = "";
            document.MAINFORM.BOP_DETAIL_IPET_CONTL_N.value = "";
            document.MAINFORM.BOP_DETAIL_GDLO_CNTRY_C.value = "";
            document.MAINFORM.BOP_DETAIL_OTHER_INFO_X.value = "";
            document.MAINFORM.BOP_DETAIL_EXCON_RULNG_X.value = "";
            document.MAINFORM.BOP_DETAIL_RULNG_DESCRIPTION.value = "";
            document.MAINFORM.BOP_DETAIL_EXCON_APLCT_N.value = "";
            document.MAINFORM.BOP_DETAIL_EXCON_D.value = "";
            document.MAINFORM.BOP_DETAIL_AUTHD_DEALR_C.value = "";
            document.MAINFORM.BOP_DETAIL_LOAN_REF_N.value = "";
            document.MAINFORM.BOP_DETAIL_CLINT_CUSTOMS_N.value = "";
            document.MAINFORM.BOP_DETAIL_TRVLR_ID_N.value = "";
            document.MAINFORM.BOP_DETAIL_ADHOC_SUBJ_X.value = "";
            document.MAINFORM.BOP_DETAIL_ADHOC_X.value = "";

            for (i = 0; i < records.length; i++) {
                document.MAINFORM.BOP_DETAIL_CAT_C.value += SYS_getValFromRec(records[i], "BOP_CAT_C") + ";";
                document.MAINFORM.BOP_DETAIL_TRANS_A.value += SYS_getValFromRec(records[i], "BOP_TRANS_A") + ";";
                document.MAINFORM.BOP_DETAIL_IPET_CONTL_N.value += SYS_getValFromRec(records[i], "BOP_IPET_CONTL_N") + ";";
                document.MAINFORM.BOP_DETAIL_GDLO_CNTRY_C.value += SYS_getValFromRec(records[i], "BOP_GDLO_CNTRY_C") + ";";
                document.MAINFORM.BOP_DETAIL_OTHER_INFO_X.value += SYS_getValFromRec(records[i], "BOP_OTHER_INFO_X") + ";";
                document.MAINFORM.BOP_DETAIL_EXCON_RULNG_X.value += SYS_getValFromRec(records[i], "BOP_EXCON_RULNG_X") + ";";
                document.MAINFORM.BOP_DETAIL_RULNG_DESCRIPTION.value += SYS_getValFromRec(records[i], "BOP_RULNG_DESCRIPTION") + ";";
                document.MAINFORM.BOP_DETAIL_EXCON_APLCT_N.value += SYS_getValFromRec(records[i], "BOP_EXCON_APLCT_N") + ";";
                document.MAINFORM.BOP_DETAIL_EXCON_D.value += SYS_getValFromRec(records[i], "BOP_EXCON_D") + ";";
                document.MAINFORM.BOP_DETAIL_AUTHD_DEALR_C.value += SYS_getValFromRec(records[i], "BOP_AUTHD_DEALR_C") + ";";
                document.MAINFORM.BOP_DETAIL_LOAN_REF_N.value += SYS_getValFromRec(records[i], "BOP_LOAN_REF_N") + ";";
                document.MAINFORM.BOP_DETAIL_CLINT_CUSTOMS_N.value += SYS_getValFromRec(records[i], "BOP_CLINT_CUSTOMS_N") + ";";
                document.MAINFORM.BOP_DETAIL_TRVLR_ID_N.value += SYS_getValFromRec(records[i], "BOP_TRVLR_ID_N") + ";";
                document.MAINFORM.BOP_DETAIL_ADHOC_SUBJ_X.value += SYS_getValFromRec(records[i], "BOP_ADHOC_SUBJ_X") + ";";
                document.MAINFORM.BOP_DETAIL_ADHOC_X.value += SYS_getValFromRec(records[i], "BOP_ADHOC_X") + ";";
            }

            // Remove the last ; from the fields
            document.MAINFORM.BOP_DETAIL_CAT_C.value = document.MAINFORM.BOP_DETAIL_CAT_C.value.substr(0, document.MAINFORM.BOP_DETAIL_CAT_C.value.length - 1);
            document.MAINFORM.BOP_DETAIL_TRANS_A.value = document.MAINFORM.BOP_DETAIL_TRANS_A.value.substr(0, document.MAINFORM.BOP_DETAIL_TRANS_A.value.length - 1);
            document.MAINFORM.BOP_DETAIL_IPET_CONTL_N.value = document.MAINFORM.BOP_DETAIL_IPET_CONTL_N.value.substr(0, document.MAINFORM.BOP_DETAIL_IPET_CONTL_N.value.length - 1);
            document.MAINFORM.BOP_DETAIL_GDLO_CNTRY_C.value = document.MAINFORM.BOP_DETAIL_GDLO_CNTRY_C.value.substr(0, document.MAINFORM.BOP_DETAIL_GDLO_CNTRY_C.value.length - 1);
            document.MAINFORM.BOP_DETAIL_OTHER_INFO_X.value = document.MAINFORM.BOP_DETAIL_OTHER_INFO_X.value.substr(0, document.MAINFORM.BOP_DETAIL_OTHER_INFO_X.value.length - 1);
            document.MAINFORM.BOP_DETAIL_EXCON_RULNG_X.value = document.MAINFORM.BOP_DETAIL_EXCON_RULNG_X.value.substr(0, document.MAINFORM.BOP_DETAIL_EXCON_RULNG_X.value.length - 1);
            document.MAINFORM.BOP_DETAIL_RULNG_DESCRIPTION.value = document.MAINFORM.BOP_DETAIL_RULNG_DESCRIPTION.value.substr(0, document.MAINFORM.BOP_DETAIL_RULNG_DESCRIPTION.value.length - 1);
            document.MAINFORM.BOP_DETAIL_EXCON_APLCT_N.value = document.MAINFORM.BOP_DETAIL_EXCON_APLCT_N.value.substr(0, document.MAINFORM.BOP_DETAIL_EXCON_APLCT_N.value.length - 1);
            document.MAINFORM.BOP_DETAIL_EXCON_D.value = document.MAINFORM.BOP_DETAIL_EXCON_D.value.substr(0, document.MAINFORM.BOP_DETAIL_EXCON_D.value.length - 1);
            document.MAINFORM.BOP_DETAIL_AUTHD_DEALR_C.value = document.MAINFORM.BOP_DETAIL_AUTHD_DEALR_C.value.substr(0, document.MAINFORM.BOP_DETAIL_AUTHD_DEALR_C.value.length - 1);
            document.MAINFORM.BOP_DETAIL_LOAN_REF_N.value = document.MAINFORM.BOP_DETAIL_LOAN_REF_N.value.substr(0, document.MAINFORM.BOP_DETAIL_LOAN_REF_N.value.length - 1);
            document.MAINFORM.BOP_DETAIL_CLINT_CUSTOMS_N.value = document.MAINFORM.BOP_DETAIL_CLINT_CUSTOMS_N.value.substr(0, document.MAINFORM.BOP_DETAIL_CLINT_CUSTOMS_N.value.length - 1);
            document.MAINFORM.BOP_DETAIL_TRVLR_ID_N.value = document.MAINFORM.BOP_DETAIL_TRVLR_ID_N.value.substr(0, document.MAINFORM.BOP_DETAIL_TRVLR_ID_N.value.length - 1);
            document.MAINFORM.BOP_DETAIL_ADHOC_SUBJ_X.value = document.MAINFORM.BOP_DETAIL_ADHOC_SUBJ_X.value.substr(0, document.MAINFORM.BOP_DETAIL_ADHOC_SUBJ_X.value.length - 1);
            document.MAINFORM.BOP_DETAIL_ADHOC_X.value = document.MAINFORM.BOP_DETAIL_ADHOC_X.value.substr(0, document.MAINFORM.BOP_DETAIL_ADHOC_X.value.length - 1);

            sfieldList += ";BOP_DETAIL_ADHOC_X;BOP_DETAIL_ADHOC_SUBJ_X;BOP_DETAIL_TRVLR_ID_N;BOP_DETAIL_CLINT_CUSTOMS_N;BOP_DETAIL_LOAN_REF_N;BOP_DETAIL_AUTHD_DEALR_C;BOP_DETAIL_EXCON_D;BOP_DETAIL_EXCON_APLCT_N;BOP_DETAIL_RULNG_DESCRIPTION;BOP_DETAIL_EXCON_RULNG_X;BOP_DETAIL_OTHER_INFO_X;BOP_DETAIL_CAT_C;BOP_DETAIL_TRANS_A;BOP_DETAIL_IPET_CONTL_N;BOP_DETAIL_GDLO_CNTRY_C";

            SYS_GetDataBySSS_S('SYST_CR_VALIDATE_BOP_TRX', sfieldList);

            // Check if an error message has been passed back from the Java class and display it
            if (document.MAINFORM.ERROR_MESSAGE.value != "") {
                alert(document.MAINFORM.ERROR_MESSAGE.value);

                // We need to reenable the buttons manually when the transaction fails from a DO	
                parent.parent.toolbar.SYS_MakeButtonShow("onTrx", SYS_MODULE_NAME);
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        // document.MAINFORM.BOP_PRNCL_CCY.value=SYS_getValueFromMain('LC_CCY');

        if (document.MAINFORM.BOP_EVENT_TIMES.value == "") {
            document.MAINFORM.BOP_EVENT_TIMES.value = SYS_I_EVENT_TIMES;
        }
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.LoadDODataOnInit = function() {
    try {
        SYS_GetDataForDO_S('BOPDETAILS', 'N', false);
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var sSQLWhere; // Utility Auto Fix Comments
        var sfieldList; // Utility Auto Fix Comments
        /*
// Get the text for the tab and max cats.
sSQLWhere = "CR_REQUIRED_REF = '" + SYS_BANK_COUNTRY + SYS_ORG_FUNCTION_SHORT_NAME + "'";
sfieldList = "CR_TAB_TEXT;CR_MAX_CATS";

SYS_Get22TableData_S("CR_TYPES",sSQLWhere,sfieldList,"BOP_TAB_TEXT;BOP_MAX_CATEGORIES",true);

// Display the BOP Tab
parent.EEHtml.getElementById("Z").innerHTML = document.MAINFORM.BOP_TAB_TEXT.value;

// Display the BOP Tab
parent.EEHtml.getElementById("Z").style.display = "";
parent.EEHtml.getElementById("Z_SEP").style.display = "";

parent.EEHtml.getElementById("Z").onclick = BOPTab_onClick;
*/

    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.BOP_BSNTR_ID_N_onchange = function(event) {
    try {
        if (document.MAINFORM.BOP_BSNTR_ID_N.value != "") {
            if ((document.MAINFORM.BOP_BSNTR_ID_N.value) != true) {
                SYS_CheckError(document.MAINFORM.BOP_BSNTR_ID_N, "Please enter a valid ID number");
                document.MAINFORM.BOP_BSNTR_ID_N.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.BOP_NRES_NRES_I_onchange = function(event) {
    try {
        Cal_PMO_BOP_NON_RSDNT_EXCPN_NM(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.BOP_RES_NRES_I_onchange = function(event) {
    try {
        Cal_PMO_BOP_RSDNT_EXCPN_NM(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}

csDOScreenProto.BOP_SELCT_CCY_onclick = function(event) {
    try {
        // Check if there are any rows in the details section. If there are, warn the user
        // to remove them first
        bopDetails = SYS_getDoByXpath('BOPHEADER.BOPDetails');
        records = SYS_getRecords(bopDetails);

        if (records.length > 0) {
            alert('Please delete all rows before switching between Principal Amount and Settlement Amount');

            // Put the radio button back to where it was and exit the func(EEAuto).
            if (document.MAINFORM.BOP_SELCT_CCY[0].checked == true) {
                document.MAINFORM.BOP_SELCT_CCY[1].checked = true;
                return;
            } else {
                document.MAINFORM.BOP_SELCT_CCY[0].checked = true;
                return;
            }
        }

        if (document.MAINFORM.BOP_SELCT_CCY[0].checked == true) {
            document.MAINFORM.BOP_AMNT_ENTRD_IND.value = "P";
        } else {
            document.MAINFORM.BOP_AMNT_ENTRD_IND.value = "S";
        }

        CR_Get_Amount_Left_Reporting();
    } catch (e) {
        DisExcpt("SSSS_BOPHeader.js", e);
    }
}