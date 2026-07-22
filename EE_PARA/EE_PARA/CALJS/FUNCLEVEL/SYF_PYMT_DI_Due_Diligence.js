var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_PYMT_Check_Value_Date = function() {
    try {

        if (document.MAINFORM.X103_VALUE_DT_32A.value != SYS_BUSI_DATE) {
            SYS_CheckError(document.MAINFORM.X103_VALUE_DT_32A, 'Value date is not current date. The Value date has been changed to todays date');
            document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var ACvalid; // Utility Auto Fix Comments
        var dueDil; // Utility Auto Fix Comments
        var dup; // Utility Auto Fix Comments
        var notes; // Utility Auto Fix Comments
        var oRide; // Utility Auto Fix Comments
        if (SYS_FUNCTION_NAME == "DI_Cancel" && SYS_FUNCTION_TYPE == "EC") {
            return true;
        }
        if (!SYM_PYMT_DI_PayAmtChk()) {
            return false;
        }
        SYF_PYMT_get_callback_limit();
        oRide = SYF_PYMT_confirmation_funds_overide_check();
        if (oRide == false) {
            return false;
        }
        if (!SYS_Batch_CheckFieldValue()) {
            return false;
        }
        //check whether the value of all class fields are correct
        dueDil = SYF_PYMT_check_due_dilligence_fields();
        if (dueDil == false) {
            return false;
        }
        dup = SYF_PYMT_duplicate_check('14');
        if (dup == false) {
            return false;
        }
        notes = SYT_VisibleNote();
        if (notes == false) {
            return false;
        }
        ACvalid = SYF_PYMT_InvalidACcheck();
        if (ACvalid == false) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_duplicate_check = function(noOfDaysBack) {
    try {

        var amt; // Utility Auto Fix Comments
        var amtDb; // Utility Auto Fix Comments
        var answer; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var duplicateTrn; // Utility Auto Fix Comments
        var eventName; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, SYS_BUSI_DATE, noOfDaysBack, "DAYS_BACK", 'B', 'Y', 'Y');
        //date = document.MAINFORM.DAYS_BACK.value;
        //amt = SYS_BeFloat(document.MAINFORM.X103_INSTR_AMT_33B.value);
        //amtDb = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value);
        eventName = 'Draft Payments';
        //table = "PYMT_EVENT";
        document.MAINFORM.DUPLICATE_TRN.value = "";
        //strSQLWhere = " where C_BK_GROUP_ID = '" + SYS_BANK_GROUP + "' and ((X103_INSTR_CCY_33B = '" + document.MAINFORM.X103_INSTR_CCY_33B.value + "' and X103_INSTR_AMT_33B = '" + amt + "') and  (X103_SETT_CCY_32A = '" + document.MAINFORM.X103_SETT_CCY_32A.value + "' and X103_SETT_AMT_32A = '" + amtDb + "')) and to_char(D_SYS_OP_DATE, 'YYYY-MM-DD') > '" + date + "' and X103_ORDCU_ID_50A = '" + document.MAINFORM.X103_ORDCU_ID_50A.value + "' and c_main_ref <> '" + document.MAINFORM.C_MAIN_REF.value + "' AND I_EVENT_TIMES = (select MAX(I_EVENT_TIMES) from eximtrx.pymt_LEDGER WHERE c_main_ref = EXIMTRX.PYMT_EVENT.C_MAIN_REF ) and currnt_status <> 'CANCEL' ";
        SYS_GetTableDataByRule_S('SYF_PYMT_DI_Due_Diligence_SYF_PYMT_duplicate_check_0', '1', 'TRUE');
        duplicateTrn = document.MAINFORM.DUPLICATE_TRN.value;
        if (duplicateTrn == null || duplicateTrn == "" || duplicateTrn == document.MAINFORM.C_MAIN_REF.value) {
            return true;
        } else {
            answer = confirm("POSSIBLE DUPLICATE TRANSACTION\r\n\nA transaction has already been issued with similar details under reference - " + duplicateTrn + ".\r\n\nClick OK - If you wish to complete the confirmation of this transaction.\r\nClick Cancel - If you wish to go back to the Due Diligence screen to edit the transaction.");
            if (answer) {
                document.MAINFORM.DUP_CHK.value = 'Yes'; //for audit
                return true;
            } else {
                return false;
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Initial_set_up_of_fields = function() {
    try {

        var cmaCountry; // Utility Auto Fix Comments
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCU_NM_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD3_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD2_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD1_50A);
        cmaCountry = 'N';
        if (cmaCountry == 'Y') {
            EEHtml.getElementById("SupportingDocsRow").style.display = "none";
        } else {
            EEHtml.getElementById("ExchangeControlRow").style.display = "none";
            document.MAINFORM.EXCH_CTRL.value = 'Yes';
        }
        SYM_GTEE_Cal_LIAB_TRXCCY_AMT();
        SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', 'SYF_PYMT_non_customer_check', 'N', 'TRUE');
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_check_due_dilligence_fields = function() {
    try {

        if (document.MAINFORM.VERF_SIGN.value == 'No') {
            SYS_CheckError(document.MAINFORM.VERF_SIGN, "The Field Signature Verified is No, Please select Yes or Save the transaction");
            return false;
        } else if (document.MAINFORM.FDS_AVAL.value == 'No' && document.MAINFORM.OVRIDE.value == 'No') {
            SYS_CheckError(document.MAINFORM.FDS_AVAL, "The Field Funds Available is No, Please select Yes, Override or Save the transaction"); // Utility Auto Fix Comments
            return false;
        } else if (document.MAINFORM.EXCH_CTRL.value == 'No') {
            SYS_CheckError(document.MAINFORM.EXCH_CTRL, "The Field Exchange Control is No, Please select Yes or Save the transaction");
            return false;
        } else if (document.MAINFORM.CALBK.value == 'Y' && document.MAINFORM.CALBK.value == 'No') {
            SYS_CheckError(document.MAINFORM.CALBK, "The Field Callback is No, Please select Yes or Save the transaction");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_InvalidACcheck = function() {
    try {

        var ACCust; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
            return true;
        }
        //table = "STD_AC_NUMBER";
        document.MAINFORM.X103_ORDCU_ID_50A_B.value = "";
        //strSQLWhere = "C_BK_GROUP_ID = '" + SYS_BANK_GROUP + "' and C_AC_NUMBER = '" + document.MAINFORM.X103_ORDCUACNO_50A.value + "'";
        SYS_GetTableDataByRule_S('SYF_PYMT_DI_Due_Diligence_SYF_PYMT_InvalidACcheck_1', '1', 'TRUE');
        ACCust = document.MAINFORM.X103_ORDCU_ID_50A_B.value;
        //alert(ACCust);
        if (ACCust == null || ACCust == "") {
            alert("The Account number is invalid for the entered customer");
            document.MAINFORM.X103_ORDCUACNO_50A.value = '';
            document.MAINFORM.X103_ORDCU_ID_50A_B.value = '';
            document.MAINFORM.X103_ORDCUACNO_50A.focus();
            return false;
        } else {
            if (ACCust == document.MAINFORM.X103_ORDCU_ID_50A.value) {
                //alert("For this account No, it is valid for the entered customer"+ACCust);
                return true;
            } else {
                alert("The Account number is invalid for the entered customer");
                document.MAINFORM.X103_ORDCUACNO_50A.value = '';
                document.MAINFORM.X103_ORDCU_ID_50A_B.value = '';
                document.MAINFORM.X103_ORDCUACNO_50A.focus();
                return false;
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYM_IWGT_Check_EXPIRY_DT();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_funds_overide = function() {
    try {

        if (document.MAINFORM.OVRIDE.value == 'Yes') {
            SYS_CheckError(document.MAINFORM.NOTES, 'Please ensure the notes fields is updated with the reason for funds override.'); // Utility Auto Fix Comments
            SYM_IMCO_SetRefNo(document.MAINFORM.NOTES, 'M');
        } else {
            SYM_IMCO_SetRefNo(document.MAINFORM.NOTES, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.BUSI_UNIT.value = SYS_BUSI_UNIT;
        document.MAINFORM.CURRNT_STATUS.value = document.MAINFORM.NXT_STATUS.value;
        document.MAINFORM.NXT_STATUS.value = "CAPTURE";
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_get_callback_limit = function() {
    try {

        document.MAINFORM.APP_TYPE.value = SYS_BUSI_UNIT + 'DI';
        SYS_GetCUBK('CallbackLimitPerProduct', 'APP_TYPE', '', 'SYF_PYMT_error_getting_callback_limit', 'TRUE');
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_confirmation_funds_overide_check = function() {
    try {

        document.MAINFORM.NOTES.value = document.MAINFORM.NOTES.value.trim();
        if (document.MAINFORM.OVRIDE.value == 'Yes' && document.MAINFORM.NOTES.value == "") {
            SYS_CheckError(document.MAINFORM.NOTES, 'Please ensure the notes fields is updated with the reason for funds override.'); // Utility Auto Fix Comments
            SYM_PYMT_SYT_enableField(document.MAINFORM.NOTES, 'M');
            return false; // Utility Auto Fix Comments
        } else {
            SYM_PYMT_SYT_enableField(document.MAINFORM.NOTES, 'O');
            return true; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_non_customer_check = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'IQ') {
            if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
                SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            } else {
                SYM_PYMT_SYT_enableField(document.MAINFORM.X103_ORDCUACNO_50A, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if ((SYS_FUNCTION_NAME == "DI_Cancel" && SYS_FUNCTION_TYPE == "EC") || (document.MAINFORM.CANCEL_FLG.value == "Yes" && SYS_FUNCTION_TYPE == "RE")) {
            SYT_Cancel_Init(); // Utility Auto Fix Comments
            return;
        } else {
            document.MAINFORM.CANCEL_FLG.value = "No";
        }
        SYM_GTEE_APPL_ID_BTN();
        SYF_PYMT_Initial_set_up_of_fields();
        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            SYS_highTrxButton("_confirm", "_cancel", "_save");

        }
        SYF_PYMT_get_callback_limit();
        if (SYS_FUNCTION_TYPE != 'IQ') {
            SYF_PYMT_Check_Value_Date();
        }
        document.MAINFORM.DB_CCY.value = document.MAINFORM.X103_SETT_CCY_32A.value;
        SYT_Audit_Main();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_error_getting_callback_limit = function() {
    try {

        SYS_CheckError(document.MAINFORM.CALBK, 'There is no callback limit loaded for this branch product combination');
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CALBK_onchange = function(event) {
    try {
        SYM_GTEE_BENE_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CONT_NM_onchange = function(event) {
    try {
        document.MAINFORM.CONT_NM.value = document.MAINFORM.CONT_NM.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CONT_NO_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_FDS_AVAL_onchange = function(event) {
    try {
        SYM_GTEE_APPL_ID_BTN();
        //SYS_InqGapi_S('FundsCheckingDueDiligence');
        //alert(document.MAINFORM.FDS_AVAL.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_OVRIDE_onchange = function(event) {
    try {
        SYF_PYMT_funds_overide();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_AMT_33B_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.X103_INSTR_AMT_33B.value) < 0) {
            SYS_CheckError(document.MAINFORM.X103_INSTR_AMT_33B, 'Amount less than zero is not allowed, Please correct');
            document.MAINFORM.X103_INSTR_AMT_33B.value = 0;
        } else {
            SYM_GTEE_Cal_LIAB_TRXCCY_AMT();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_CCY_33B_onchange = function(event) {
    try {
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.RATE_TYPE.value, document.MAINFORM.RATE_NAME.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUACNO_50A_onchange = function(event) {
    try {
        debit_account_changed();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD1_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD1_50A.value = document.MAINFORM.X103_ORDCUADD1_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD2_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD2_50A.value = document.MAINFORM.X103_ORDCUADD2_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD3_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD3_50A.value = document.MAINFORM.X103_ORDCUADD3_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        change_of_applicant_id();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_NM_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCU_NM_50A.value = document.MAINFORM.X103_ORDCU_NM_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SETT_AMT_32A_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value) < 0) {
            SYS_CheckError(document.MAINFORM.X103_SETT_AMT_32A, 'Amount less than zero is not allowed, Please correct');
            document.MAINFORM.X103_SETT_AMT_32A.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SETT_CCY_32A_onclick = function(event) {
    try {
        SYS_InsertClause('SEND_TO_RCV_INFO');
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function(event) {
    try {
        DI_validate_value_date();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Due_Diligence.js", e);
    }
}