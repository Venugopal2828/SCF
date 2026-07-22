"path:SCRN/DO/BOPDetails.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.BOP_ADHOC_SUBJ_BTN_onclick = function() {
    try {
        var sSQLWhere; // Utility Auto Fix Comments
        if (document.MAINFORM.BOP_CAT_C.value == "") {
            SYS_CheckError(document.MAINFORM.BOP_CAT_C, "Please select a valid BOP category");
        } else {
            sSQLWhere = "CR_REF = '" + document.MAINFORM.BOP_CAT_REF.value + "' ";

            //SYS_InqCUBK_Sql('BOP_ADHOC_SUBJECT', sSQLWhere);// Utility Auto Fix Comments
            //NOT FIND THE RULE

            if (document.MAINFORM.BOP_ADHOC_SUBJ_X.value == "") {
                BopAdhocSubjFail();
            }
        }
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.BopAdhocSubjFail = function() {
    try {
        if (document.MAINFORM.BOP_CAT_C.value == "") {
            SYS_CheckError(document.MAINFORM.BOP_CAT_C, "Please select a valid BOP category");
        }

        document.MAINFORM.BOP_ADHOC_X.value = "";
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.BopCategoryFail = function() {
    try {
        // If the resident type is not selected, no records will be returned
        if (parent.document.MAINFORM.BOP_RES_NRES_I.value == "") {
            SYS_CheckError(parent.document.MAINFORM.BOP_RES_NRES_I, "Please select a valid resident type");
        }

        // If the non resident type is not selected, no records will be returned
        if (parent.document.MAINFORM.BOP_NRES_NRES_I.value == "") {
            SYS_CheckError(parent.document.MAINFORM.BOP_NRES_NRES_I, "Please select a valid non resident type");
        }

        document.MAINFORM.BOP_DESCRIPTION.value = "";
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.CR_Check_Cat_Limit = function() {
    try {
        // Check if this amount is higher than the limit for this category
        // If it is, the excon numbers are mandatory
        if (SYS_BeFloat(document.MAINFORM.LIMIT.value) != 0 && SYS_BeFloat(document.MAINFORM.BOP_TRANS_A.value) > SYS_BeFloat(document.MAINFORM.LIMIT.value)) {
            SYT_ChangeFldClass(document.MAINFORM.BOP_EXCON_APLCT_N, 'M');
            SYT_ChangeFldClass(document.MAINFORM.BOP_EXCON_D, 'M');
            SYT_ChangeFldClass(document.MAINFORM.BOP_AUTHD_DEALR_C, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.CR_Get_Amount_Left_Reporting = function() {
    try {
        var amountLeft; // Utility Auto Fix Comments
        var bopDetails; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var reportingAmount; // Utility Auto Fix Comments
        var transAmtSum; // Utility Auto Fix Comments
        // Calculate the amount left for reporting


        if (parent.document.MAINFORM.BOP_SELCT_CCY[0].checked == true) {
            reportingAmount = parent.document.MAINFORM.BOP_PRNPL_A.value;
            document.MAINFORM.BOP_RPTG_CCY.value = parent.document.MAINFORM.BOP_PRNPL_CRNCY_C.value;
        } else {
            reportingAmount = parent.document.MAINFORM.BOP_SCDRY_A.value;
            document.MAINFORM.BOP_RPTG_CCY.value = parent.document.MAINFORM.BOP_SCDRY_CRNCY_C.value;
        }

        bopDetails = SYS_getDoByXpath('BOPHEADER.BOPDetails');
        records = SYS_getRecords(bopDetails);
        transAmtSum = 0;

        for (i = 0; i < records.length; i++) { // Utility Auto Fix Comments
            transAmtSum += SYS_BeFloat(SYS_getValFromRec(records[i], "BOP_TRANS_A"));
        }

        if (SYS_getEditedRecordForCurrentDo() != null) {
            transAmtSum -= SYS_getValFromRec(SYS_getEditedRecordForCurrentDo(), "BOP_TRANS_A");
        }

        amountLeft = SYS_BeFloat(reportingAmount) - transAmtSum - SYS_BeFloat(document.MAINFORM.BOP_TRANS_A.value);

        if (amountLeft < 0) {
            SYS_CheckError(document.MAINFORM.BOP_TRANS_A, "Amount entered cannot be greater than amount left for reporting");
            document.MAINFORM.BOP_TRANS_A.value = "0";
            CR_Get_Amount_Left_Reporting();
        } else {
            document.MAINFORM.BOP_RPTG_AMT.value = SYT_AmtFormat(document.MAINFORM.BOP_RPTG_CCY.value, SYS_BeFloat(reportingAmount) - transAmtSum - SYS_BeFloat(document.MAINFORM.BOP_TRANS_A.value));
        }
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
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
            if (arrFieldsToSet[i] != "") {
                // Determine if this object is on the current or parent page. This handles scenarios where
                // fields on the containing DO page needs to be changed as well.
                if (document.MAINFORM.elements[arrFieldsToSet[i]] == undefined) {
                    objField = parent.document.MAINFORM.elements[arrFieldsToSet[i]];
                } else {
                    objField = document.MAINFORM.elements[arrFieldsToSet[i]];
                }

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
                    if (sMPO == "P") {
                        objField.value = "";
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        var bopDetails; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        document.MAINFORM.BOP_DESCRIPTION.value = "";

        bopDetails = SYS_getDoByXpath('BOPHEADER.BOPDetails');
        records = SYS_getRecords(bopDetails);

        document.MAINFORM.BOP_SEQ_N.value = records.length;
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var bopCatC; // Utility Auto Fix Comments
        var bopDetails; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var iCatCount; // Utility Auto Fix Comments
        var rateType; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var ref; // Utility Auto Fix Comments
        // Check if the number of categories exceed the max number allowed
        bopDetails = SYS_getDoByXpath('BOPHEADER.BOPDetails');
        records = SYS_getRecords(bopDetails);

        if (records.length > SYS_BeInt(parent.document.MAINFORM.BOP_MAX_CATEGORIES.value) - 1) {
            alert("The maximum number of categories allowed is " + parent.document.MAINFORM.BOP_MAX_CATEGORIES.value);
            return false;
        }

        // Check if the category is 253, 254 or 303. If it is, make sure no other rows exist
        if (document.MAINFORM.BOP_CAT_C.value == 253 || document.MAINFORM.BOP_CAT_C.value == 254 || document.MAINFORM.BOP_CAT_C.value == 303) {
            bopDetails = SYS_getDoByXpath('BOPHEADER.BOPDetails');
            records = SYS_getRecords(bopDetails);

            if (records.length > 0) {
                alert("No other BOP Detail records may exist when using category 253, 254 or 303"); // Utility Auto Fix Comments
                return false;
            }
        } else if (document.MAINFORM.BOP_CAT_C.value == 304) {
            // Make sure no more than 5 records exist for category 304
            bopDetails = SYS_getDoByXpath('BOPHEADER.BOPDetails');
            records = SYS_getRecords(bopDetails);
            iCatCount = 1; // Add 1 for the current category being added

            for (i = 0; i < records.length; i++) {
                bopCatC = SYS_getValFromRec(records[i], "BOP_CAT_C");

                if (bopCatC == 304) {
                    iCatCount++;

                    if (iCatCount > 5) {
                        alert("No more than 5 BOP Detail records for category 304 may exist");
                        return false;
                    }
                } else {
                    alert("No other BOP Detail records may exist when using category 304"); // Utility Auto Fix Comments
                    return false;
                }
            }

        } else {
            // Make sure no other rows exists with category 253, 254, 303, 304
            bopDetails = SYS_getDoByXpath('BOPHEADER.BOPDetails');
            records = SYS_getRecords(bopDetails);


            for (i = 0; i < records.length; i++) {
                bopCatC = SYS_getValFromRec(records[i], "BOP_CAT_C");

                if (bopCatC == 253 || bopCatC == 254 || bopCatC == 303 || bopCatC == 304) {
                    alert("No other BOP Detail records may exist when using category 253, 254, 303 or 304"); // Utility Auto Fix Comments
                    return false;
                }
            }
        }

        rateType = "";
        ref = parent.document.MAINFORM.C_MAIN_REF.value.substring(0, 2);

        if (ref == "DI") {
            rateType = "TT Buying;";
        } else if (ref == "OT") {
            rateType = "TT Buying;"; // Utility Auto Fix Comments
        } else if (ref == "IT") {
            rateType = "TT Selling;";
        }

        // Calculate the opposite amount
        if (parent.document.MAINFORM.BOP_SELCT_CCY[0].checked == true) {
            // Principle amount
            SYS_GetExchangeRateAMT_S(parent.document.MAINFORM.BOP_PRNPL_CRNCY_C.value, parent.document.MAINFORM.BOP_SCDRY_CRNCY_C.value, rateType, SYS_BeFloat(document.MAINFORM.BOP_TRANS_A.value), "BOP_TRANS_OPP_A");

        } else {
            // Settlement amount
            SYS_GetExchangeRateAMT_S(parent.document.MAINFORM.BOP_SCDRY_CRNCY_C.value, parent.document.MAINFORM.BOP_PRNPL_CRNCY_C.value, rateType, SYS_BeFloat(document.MAINFORM.BOP_TRANS_A.value), "BOP_TRANS_OPP_A");
        }

        parent.document.MAINFORM.BOP_RPTG_AMT.value = SYT_AmtFormat(parent.document.MAINFORM.BOP_RPTG_CCY.value, document.MAINFORM.BOP_RPTG_AMT.value);

        return true;
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.BOP_VAR_1.value = 'S';
        document.MAINFORM.C_UNIT_CODE.value = SYS_ORI_UNIT_CODE;

        if (document.MAINFORM.BOP_EVENT_TIMES.value == "") {
            document.MAINFORM.BOP_EVENT_TIMES.value = SYS_I_EVENT_TIMES;
        }

        if (document.MAINFORM.BOP_TRANS_REF.value == "") {
            document.MAINFORM.BOP_TRANS_REF.value = document.MAINFORM.C_MAIN_REF.value;
        }
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        // If this is a Cancel & Replace transaction make the notes field mandatory
        if (SYS_ORG_FUNCTION_SHORT_NAME == "BOP_Capture" || SYS_ORG_FUNCTION_SHORT_NAME == "BOP_Enquire" ||
            SYS_ORG_FUNCTION_SHORT_NAME == "BOP_Update" || SYS_ORG_FUNCTION_SHORT_NAME == "BOP_Release") {

            SYT_ChangeFldClass(document.MAINFORM.BOP_OTHER_INFO_X, 'M');
        }

        // Get the purchase sale indicator from the BOP_HEADER screen and copy it to the details screen
        document.MAINFORM.BOP_PURCHASE_SALE_IND.value = parent.document.MAINFORM.BOP_PURCHASE_SALE_IND.value;

        document.MAINFORM.BOP_TRANS_REF.value = parent.document.MAINFORM.BOP_TRANS_REF.value;

        if (document.MAINFORM.BOP_TRANS_A.value == "" || document.MAINFORM.BOP_TRANS_A.value == "0.00") {
            CR_Get_Amount_Left_Reporting();
            // Default the amount to the amount left for reporting
            document.MAINFORM.BOP_TRANS_A.value = SYT_AmtFormat(document.MAINFORM.BOP_RPTG_CCY.value, document.MAINFORM.BOP_RPTG_AMT.value);
            document.MAINFORM.BOP_RPTG_AMT.value = SYT_AmtFormat(document.MAINFORM.BOP_RPTG_CCY.value, 0);
        }

    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.ValidateExportControl = function() {
    try {
        var i; // Utility Auto Fix Comments
        var validChars; // Utility Auto Fix Comments
        // The first character must be numeric
        if (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(0, 1) != parseInt(document.MAINFORM.BOP_IPET_CONTL_N.value.substr(0, 1), 10)) {
            SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
            document.MAINFORM.BOP_IPET_CONTL_N.value = "";
        } else {
            // Character 2 and 3 must be equal to ZA
            if (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(1, 2) != "ZA") {
                SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
                document.MAINFORM.BOP_IPET_CONTL_N.value = "";
            } else {
                // If the location country on the screen is BW, LS, NA or SZ then character 4 to 13 must be CMAEXPORTS
                if (document.MAINFORM.BOP_CNTR_Q.value == "BW" || document.MAINFORM.BOP_CNTR_Q.value == "LS" || document.MAINFORM.BOP_CNTR_Q.value == "NA" || document.MAINFORM.BOP_CNTR_Q.value == "SZ") {
                    if (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(3, 10) != "CMAEXPORTS") {
                        SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
                        document.MAINFORM.BOP_IPET_CONTL_N.value = "";
                    } else {
                        if ((document.MAINFORM.BOP_CNTR_Q.value == "BW" && document.MAINFORM.BOP_IPET_CONTL_N.value.substr(13, 3) != "BWP") ||
                            (document.MAINFORM.BOP_CNTR_Q.value == "NA" && document.MAINFORM.BOP_IPET_CONTL_N.value.substr(13, 3) != "NAD") ||
                            (document.MAINFORM.BOP_CNTR_Q.value == "SZ" && document.MAINFORM.BOP_IPET_CONTL_N.value.substr(13, 3) != "SZL") ||
                            (document.MAINFORM.BOP_CNTR_Q.value == "LS" && document.MAINFORM.BOP_IPET_CONTL_N.value.substr(13, 3) != "LSL")) {

                            SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
                            document.MAINFORM.BOP_IPET_CONTL_N.value = "";
                        } else {
                            if ((document.MAINFORM.BOP_IPET_CONTL_N.value.substr(16, 1) != parseInt(document.MAINFORM.BOP_IPET_CONTL_N.value.substr(16, 1), 10)) ||
                                (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(17, 1) != parseInt(document.MAINFORM.BOP_IPET_CONTL_N.value.substr(17, 1), 10)) ||
                                (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(18, 1) != parseInt(document.MAINFORM.BOP_IPET_CONTL_N.value.substr(18, 1), 10)) ||
                                (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(19, 1) != parseInt(document.MAINFORM.BOP_IPET_CONTL_N.value.substr(19, 1), 10))) {

                                SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
                                document.MAINFORM.BOP_IPET_CONTL_N.value = "";
                            } else {
                                if (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(document.MAINFORM.BOP_IPET_CONTL_N.value.length - 1, 1) != "N") {
                                    SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
                                    document.MAINFORM.BOP_IPET_CONTL_N.value = "";
                                }
                            }
                        }
                    }
                } else {
                    for (i = 3; i < document.MAINFORM.BOP_IPET_CONTL_N.value.length; i++) {
                        // Characters 4 to 11 must be numeric
                        if (i < 11) {
                            if (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(i, 1) != parseInt(document.MAINFORM.BOP_IPET_CONTL_N.value.substr(i, 1), 10)) {
                                SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
                                document.MAINFORM.BOP_IPET_CONTL_N.value = "";
                            }
                        } else {
                            // Characters 12 to 35 must be alpha or numeric, no special characters
                            validChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                            if (validChars.indexOf(document.MAINFORM.BOP_IPET_CONTL_N.value.substr(i, 1), 0) == -1) {
                                SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
                                document.MAINFORM.BOP_IPET_CONTL_N.value = "";
                            }
                        }
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.ValidateImportControl = function() {
    try {
        var i; // Utility Auto Fix Comments
        var validChars; // Utility Auto Fix Comments
        // The first 3 characters must be INV or BOE
        if (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(0, 3) != "INV" && document.MAINFORM.BOP_IPET_CONTL_N.value.substr(0, 3) != "BOE") {
            SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
            document.MAINFORM.BOP_IPET_CONTL_N.value = "";
        } else {
            if (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(0, 3) == "INV") {
                for (i = 3; i < document.MAINFORM.BOP_IPET_CONTL_N.value.length; i++) {
                    // Characters must be alphanumeric
                    validChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    if (validChars.indexOf(document.MAINFORM.BOP_IPET_CONTL_N.value.substr(i, 1), 0) == -1) {
                        SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
                        document.MAINFORM.BOP_IPET_CONTL_N.value = "";
                    }
                }
            }

            if (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(0, 3) == "BOE") {
                for (i = 3; i < document.MAINFORM.BOP_IPET_CONTL_N.value.length; i++) {
                    if (i < 11) {
                        if (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(i, 1) != parseInt(document.MAINFORM.BOP_IPET_CONTL_N.value.substr(i, 1), 10)) {
                            SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
                            document.MAINFORM.BOP_IPET_CONTL_N.value = "";
                        }
                    } else if (i < 14) {
                        // Characters must be alphabetical
                        validChars = "abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ";
                        if (validChars.indexOf(document.MAINFORM.BOP_IPET_CONTL_N.value.substr(i, 1), 0) == -1) {
                            SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
                            document.MAINFORM.BOP_IPET_CONTL_N.value = "";
                        }
                    } else {
                        // Characters must be numeric
                        if (document.MAINFORM.BOP_IPET_CONTL_N.value.substr(i, 1) != parseInt(document.MAINFORM.BOP_IPET_CONTL_N.value.substr(i, 1), 10)) {
                            SYS_CheckError(document.MAINFORM.BOP_IPET_CONTL_N, "Please enter a valid UCR/ECN(Export) Import Control (Import) number");
                            document.MAINFORM.BOP_IPET_CONTL_N.value = "";
                        }
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.BOP_ADHOC_SUBJ_X_onchange = function(event) {
    try {
        if (document.MAINFORM.BOP_CAT_C.value == "") {
            SYS_CheckError(document.MAINFORM.BOP_CAT_C, "Please select a valid BOP category");
        } else {
            if (document.MAINFORM.BOP_ADHOC_SUBJ_X.value != null && document.MAINFORM.BOP_ADHOC_SUBJ_X.value != "") {
                SYS_GetCUBK_S('BOP_ADHOC_SUBJECT', 'BOP_ADHOC_SUBJ_X', '', 'BopAdhocSubjFail', 'FALSE');
            } else {
                document.MAINFORM.BOP_ADHOC_X.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.BOP_CAT_BTN_onclick = function(event) {
    try {
        sProduct = parent.parent.document.MAINFORM.document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        sIEIndicator = parent.document.MAINFORM.BOP_NRES_NRES_I.value;

        sSQLWhere = "CR_VALUE='" + sProduct + "' " +
            " AND PURCHASE_SALE_IND = '" + document.MAINFORM.BOP_PURCHASE_SALE_IND.value + "' " +
            " AND '" + parent.document.MAINFORM.BOP_NRES_NRES_I.value + "' is not null " +
            " AND '" + parent.document.MAINFORM.BOP_RES_NRES_I.value + "' is not null " +
            " AND (('" + parent.document.MAINFORM.BOP_NRES_NRES_I.value + "' = 'X' AND RES_EXCEPTION_Y_N_IND = 'Y') " +
            "     OR " +
            "     ('" + parent.document.MAINFORM.BOP_NRES_NRES_I.value + "' = 'I' AND RES_INDIVIDUAL_Y_N_IND = 'Y') " +
            "     OR " +
            "     ('" + parent.document.MAINFORM.BOP_NRES_NRES_I.value + "' = 'E' AND RES_ENTITY_Y_N_IND = 'Y')) " +
            " AND (('" + parent.document.MAINFORM.BOP_RES_NRES_I.value + "' = 'X' AND NON_RES_EXCEPTION_Y_N_IND = 'Y') " +
            "     OR " +
            "     ('" + parent.document.MAINFORM.BOP_RES_NRES_I.value + "' = 'I' AND NON_RES_INDIVIDUAL_Y_N_IND = 'Y') " +
            "     OR " +
            "     ('" + parent.document.MAINFORM.BOP_RES_NRES_I.value + "' = 'E' AND NON_RES_ENTITY_Y_N_IND = 'Y')) ";

        // Check purpose code
        if (parent.document.MAINFORM.BOP_REPORTING[0].checked == true) {
            // Non Travel
            sSQLWhere += " AND PURPOSE_CODE <> 'TR' ";
        } else {
            // Travel
            sSQLWhere += " AND PURPOSE_CODE = 'TR' ";
        }

        // Check res and non res exception names
        if (parent.document.MAINFORM.BOP_RES_ONE_M.value != "") {
            sSQLWhere += " AND (SELECT COUNT(*) FROM CR_MATRIX_VALUES CM2 WHERE CM2.CR_REF = t1.CR_REF AND CM2.CR_TYPE = 'RES' AND CM2.CR_VALUE = '" + parent.document.MAINFORM.BOP_RES_ONE_M.value + "') > 0 ";
        }

        if (parent.document.MAINFORM.BOP_NRES_ONE_M.value != "") {
            sSQLWhere += " AND (SELECT COUNT(*) FROM CR_MATRIX_VALUES CM2 WHERE CM2.CR_REF = t1.CR_REF AND CM2.CR_TYPE = 'NRES' AND CM2.CR_VALUE = '" + parent.document.MAINFORM.BOP_NRES_ONE_M.value + "') > 0 ";
        }

        //SYS_InqCUBK_Sql('BOP_CATEGORY', sSQLWhere);// Utility Auto Fix Comments
        //NOT FIND THE RULE

        if (document.MAINFORM.BOP_CAT_C.value == "") {
            BopCategoryFail();
        }
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.BOP_CAT_C_onchange = function(event) {
    try {
        if (document.MAINFORM.BOP_CAT_C.value != null && document.MAINFORM.BOP_CAT_C.value != "") {
            SYS_GetCUBK_S('BOP_CATEGORY', 'BOP_CAT_C', '', 'BopCategoryFail', 'FALSE');

            document.MAINFORM.CR_REF.value = document.MAINFORM.BOP_CAT_REF.value;
            SYS_GetDataBySSS_S('SYST_CR_GET_FIELD_CLASS_TRX', 'CR_REF');

            // Check if event.currentTarget is a CFC transaction
            if (document.MAINFORM.BOP_RPTG_CCY.value != SYS_LOCAL_CCY) {
                if (document.MAINFORM.CFC_ALLOWED_IND.value == "N") {
                    SYS_CheckError(document.MAINFORM.BOP_CAT_C, "This category is not allowed for use on CFC transactions. Please change category or continue if you have approval.");
                }
            }

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

            CR_Check_Cat_Limit();

        } else {
            document.MAINFORM.BOP_DESCRIPTION.value = "";
        }

        document.MAINFORM.BOP_ADHOC_SUBJ_X.value = "";
        document.MAINFORM.BOP_ADHOC_X.value = "";
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.BOP_CNTR_Q_onchange = function(event) {
    try {
        if (document.MAINFORM.BOP_CNTR_Q.value == "EU" || document.MAINFORM.BOP_CNTR_Q.value == "ZA") {
            SYS_CheckError(document.MAINFORM.BOP_CNTR_Q, "The selected country code is invalid");
            document.MAINFORM.BOP_CNTR_Q.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.BOP_IPET_CONTL_N_onchange = function(event) {
    try {
        if (document.MAINFORM.BOP_PURCHASE_SALE_IND.value == "P") {
            ValidateExportControl();
        } else {
            ValidateImportControl();
        }
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.BOP_TRANS_A_onchange = function(event) {
    try {
        document.MAINFORM.BOP_TRANS_A.value = SYT_AmtFormat(document.MAINFORM.BOP_RPTG_CCY.value, document.MAINFORM.BOP_TRANS_A.value);

        CR_Get_Amount_Left_Reporting();

        CR_Check_Cat_Limit();
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}

csDOScreenProto.BOP_VAR_1_onchange = function(event) {
    try {
        SYS_GetCUBK('BOP_SECT_RULNG', document.MAINFORM.BOP_VAR_1.name);
    } catch (e) {
        DisExcpt("SSSS_BOPDetails.js", e);
    }
}