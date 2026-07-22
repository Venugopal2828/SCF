var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_PYMT_callgapi = function() {
    try {

        if (document.MAINFORM.CHG_CASH_IND.value == 'No') {
            if (document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value != '') {
                SYS_InqGapi_S('BalanceCheck'); //SYS_InqGapi('BalanceCheck','BalanceCheckSuccess');
                SYF_PYMT_BalanceCheckSuccess();
                if (document.MAINFORM.BALANCECHECK_RESPONSE.value == 'false' || document.MAINFORM.BALANCECHECK_RESPONSE.value == '') {
                    alert("Request for Balance Check Failed");
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_BalanceCheck_init = function() {
    try {

        document.MAINFORM.INT_ACT1.value = undefined;
        document.MAINFORM.INT_ACT2.value = undefined;
        document.MAINFORM.INT_ACT3.value = undefined;
        document.MAINFORM.INT_ACT4.value = undefined;
        document.MAINFORM.INT_ACT5.value = undefined;
        document.MAINFORM.INT_AMT1.value = undefined;
        document.MAINFORM.INT_AMT2.value = undefined;
        document.MAINFORM.INT_AMT3.value = undefined;
        document.MAINFORM.INT_AMT4.value = undefined;
        document.MAINFORM.INT_AMT5.value = undefined;
        document.MAINFORM.INT_ACT1_CCY.value = undefined;
        document.MAINFORM.INT_ACT2_CCY.value = undefined;
        document.MAINFORM.INT_ACT3_CCY.value = undefined;
        document.MAINFORM.INT_ACT4_CCY.value = undefined;
        document.MAINFORM.INT_ACT5_CCY.value = undefined;
        document.MAINFORM.INT_CASH_IND1.value = undefined;
        document.MAINFORM.INT_CASH_IND2.value = undefined;
        document.MAINFORM.INT_CASH_IND3.value = undefined;
        document.MAINFORM.INT_CASH_IND4.value = undefined;
        document.MAINFORM.INT_CASH_IND5.value = undefined;
        // overrideindicator
        document.MAINFORM.INT_OVERRIDE_IND1.value = undefined;
        document.MAINFORM.INT_OVERRIDE_IND2.value = undefined;
        document.MAINFORM.INT_OVERRIDE_IND3.value = undefined;
        document.MAINFORM.INT_OVERRIDE_IND4.value = undefined;
        document.MAINFORM.INT_OVERRIDE_IND5.value = undefined;
        document.MAINFORM.INT_OVERRIDE_IND6.value = "undefined";
        document.MAINFORM.INT_C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;

        if (document.MAINFORM.CHG_CASH_IND.value != 'Yes') {
            document.MAINFORM.INT_ACT6.value = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value;
            document.MAINFORM.INT_AMT6.value = Chg.Screen.getLocalChgTotalAmt();
            document.MAINFORM.INT_ACT6_CCY.value = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
            document.MAINFORM.INT_ACCOUNTCOUNT.value = 1;

            if (SYS_FUNCTION_TYPE != 'EC') {
                document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES) + 1;
            } else {
                document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES);
            }
            document.MAINFORM.C_MODULE.value = SYS_MODULE_NAME;
            document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
            //document.MAINFORM.INT_SW_DETAILS.value=document.MAINFORM.X103_ADV_BKSW_B2.value;
            document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY; // Utility Auto Fix Comments
            //document.MAINFORM.INT_FOR_BANK_SW.value= document.MAINFORM.X103_BK2BK_INF1_72.value;

        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_getStayTotal = function(amountInWords) {
    try {

        document.MAINFORM.XN99_NARRATIVE_79.value = amountInWords;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYM_IWGT_Check_EXPIRY_DT();
            SYT_Get_Ref();
            SYT_Chg_INIT();
            Chg.Screen.mapLocalCust('X103_ORDCU_ID_50A', 'X103_ORDCU_NM_50A');
            Chg.attchEvent(SYT_Cal_ChgAC);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_initialize = function() {
    try {

        document.MAINFORM.INT_AMT6.value = Chg.Screen.getLocalChgTotalAmt();
        Int_Acct[0] = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value;
        Int_Amt[0] = Chg.Screen.getLocalChgTotalAmt();
        Int_Acct_Ccy[0] = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_save_original_trn_details = function() {
    try {

        document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X103_ADV_BKSW_B2.value;
        document.MAINFORM.REVERSAL_DT.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        document.MAINFORM.REVE_AC_NO.value = document.MAINFORM.CPYT_CR_BK_AC.value;
        document.MAINFORM.REVE_AMT.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
        document.MAINFORM.X202_BENE_BKNM_58A.value = document.MAINFORM.X103_BENECU_NM_59A.value;
        document.MAINFORM.X202BENEBKADD1_58A.value = document.MAINFORM.X103BENECUADD1_59A.value;
        document.MAINFORM.X202BENEBKADD2_58A.value = document.MAINFORM.X103BENECUADD2_59A.value;
        document.MAINFORM.X202BENEBKADD3_58A.value = document.MAINFORM.X103BENECUADD3_59A.value;
        document.MAINFORM.CHEQ_NO.value = document.MAINFORM.RPLCD_CHEQ_NO.value;
        document.MAINFORM.RPLCD_CHEQ_NO.value = "";
        SYF_PYMT_calculate_charge();
        SYF_PYMT_set_initial_audit_values();
        SYT_Cal_ChgCashInd();
        SYT_Cal_ChgAC();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var notes; // Utility Auto Fix Comments
        SYF_PYMT_duplicate_draft_check();
        if (!SYS_Batch_CheckFieldValue()) {
            return false;
        }
        //check whether the value of all class fields are correct
        SYF_PYMT_amount_In_Words();
        notes = SYT_VisibleNote();
        if (notes == false) {
            return false;
        }
        SYM_PYMT_BalanceCheck_init();
        SYF_PYMT_audit_check();
        document.MAINFORM.CHG_VALUE_DATE.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        SYM_IWGT_Cal_FURTHER_IDENTITY_OnChange();
        if (document.MAINFORM.CHG_CASH_IND.value == "Yes") {
            //Sql_Cond1 = "item_c=" + "'006'" + " AND " + "cnty_code=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "item_name=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + "'";
            //Field_List = "FIELD_1_X";
            //Mapping_List = "CHG_SUSP_AC";
            SYS_GetTableDataByRule_S('SYF_PYMT_DI_Re-issue_ConfirmBusinessCheck_0', '1', true);


        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_duplicate_draft_check = function() {
    try {

        var duplicateTrn; // Utility Auto Fix Comments
        var eventName; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        //eventName = 'Draft Payments';
        //table = "PYMT_EVENT";
        document.MAINFORM.DUPLICATE_TRN.value = "";
        //strSQLWhere = "C_BK_GROUP_ID = '" + SYS_BANK_GROUP + "' and C_EVENT_NAME = '" + eventName + "' and RPLCD_CHEQ_NO = '" + document.MAINFORM.RPLCD_CHEQ_NO.value + "'";
        SYS_GetTableDataByRule_S('SYF_PYMT_DI_Re-issue_SYF_PYMT_duplicate_draft_check_1', '1', 'TRUE');
        duplicateTrn = document.MAINFORM.DUPLICATE_TRN.value;
        if (duplicateTrn == null || duplicateTrn == "") {
            // document.MAINFORM.DUPLICATE_TRN.value = "";
            SYF_PYMT_duplicateNewagstOldDraftNocheck();
        } else {
            SYS_CheckError(document.MAINFORM.RPLCD_CHEQ_NO, "DUPLICATE DRAFT NUMBER\r\n\nThe entered draft number has been used in transaction - " + document.MAINFORM.DUPLICATE_TRN.value + ".\r\n\nPlease correct.");
            document.MAINFORM.RPLCD_CHEQ_NO.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_clears_all_fields = function() {
    try {

        document.MAINFORM.CHEQ_NO.value = "";
        document.MAINFORM.CR_AMT.value = '0';
        document.MAINFORM.CUST_REF.value = "";
        document.MAINFORM.DB_AMT.value = '0';
        document.MAINFORM.MD_I.value = 'M';
        document.MAINFORM.MLT_STLMT.value = 'No';
        document.MAINFORM.PRIORITY.value = 'Normal';
        document.MAINFORM.X103BENECUADD1_59A.value = '';
        document.MAINFORM.X103BENECUADD2_59A.value = '';
        document.MAINFORM.X103BENECUADD3_59A.value = '';
        document.MAINFORM.X103_ADV_BKADD1_B2.value = '';
        document.MAINFORM.X103_ADV_BKADD2_B2.value = '';
        document.MAINFORM.X103_ADV_BKADD3_B2.value = '';
        document.MAINFORM.X103_ADV_BKID_B2.value = '';
        document.MAINFORM.X103_ADV_BKNM_B2.value = '';
        document.MAINFORM.X103_ADV_BKSW_B2.value = '';
        document.MAINFORM.X103_BENECU_NM_59A.value = '';
        document.MAINFORM.X103_EXCH_RT_36.value = '1';
        document.MAINFORM.X103_INSTR_AMT_33B.value = '0';
        document.MAINFORM.X103_INSTR_CCY_33B.value = SYS_LOCAL_CCY;
        document.MAINFORM.X103_ORDCUACNO_50A.value = '';
        document.MAINFORM.X103_ORDCUADD1_50A.value = '';
        document.MAINFORM.X103_ORDCUADD2_50A.value = '';
        document.MAINFORM.X103_ORDCUADD3_50A.value = '';
        document.MAINFORM.X103_ORDCU_ID_50A.value = '';
        document.MAINFORM.X103_ORDCU_NM_50A.value = '';
        document.MAINFORM.X103_SETT_AMT_32A.value = '0';
        document.MAINFORM.X103_SETT_CCY_32A.value = SYS_LOCAL_CCY;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_calculate_charge = function() {
    try {

        if (document.MAINFORM.CR_AMT.value == 0) {
            Chg.calculate(['DI_REIS'], document.MAINFORM.X103_SETT_CCY_32A.value, document.MAINFORM.DB_AMT.value);
            SYT_Audit_Update_Charges();
        } else {
            Chg.calculate(['DI_REIS'], document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.CR_AMT.value);
            SYT_Audit_Update_Charges();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_duplicateOrignalcheck = function() {
    try {

        var duplicateTrnP; // Utility Auto Fix Comments
        var eventName; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        document.MAINFORM.RELATED_REF_NO.value = document.MAINFORM.RELATED_REF_NO.value.trim();
        document.MAINFORM.RELATED_REF_NO.value = document.MAINFORM.RELATED_REF_NO.value.toUpperCase();
        if (document.MAINFORM.RELATED_REF_NO.value != "") {
            //eventName = 'Draft Payments';
            //table = "PYMT_EVENT";
            document.MAINFORM.DUPLICATE_TRN_P.value = "";
            //strSQLWhere = "C_BK_GROUP_ID = '" + SYS_BANK_GROUP + "' and C_EVENT_NAME = '" + eventName + "' and RELATED_REF_NO = '" + document.MAINFORM.RELATED_REF_NO.value + "'";
            SYS_GetTableDataByRule_S('SYF_PYMT_DI_Re-issue_SYF_PYMT_duplicateOrignalcheck_2', '1', 'TRUE');
            duplicateTrnP = document.MAINFORM.DUPLICATE_TRN_P.value;
            if (duplicateTrnP == null || duplicateTrnP == "") {
                document.MAINFORM.DUPLICATE_TRN_P.value = "";
                SYF_PYMT_get_original_ref_details();
            } else {
                SYS_CheckError(document.MAINFORM.RELATED_REF_NO, "Invalid transaction number.\r\n\nPlease correct.");
                document.MAINFORM.RELATED_REF_NO.value = "";
                SYF_PYMT_clears_all_fields();
            }
        } else {
            SYF_PYMT_clears_all_fields();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_duplicateNewagstOldDraftNocheck = function() {
    try {

        var duplicateTrn; // Utility Auto Fix Comments
        var eventName; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        eventName = 'Draft Payments';
        //table = "PYMT_EVENT";
        document.MAINFORM.DUPLICATE_TRN.value = "";
        //strSQLWhere = "C_BK_GROUP_ID = '" + SYS_BANK_GROUP + "' and CHEQ_NO = '" + document.MAINFORM.RPLCD_CHEQ_NO.value + "'";
        SYS_GetTableDataByRule_S('SYF_PYMT_DI_Re-issue_SYF_PYMT_duplicateNewagstOldDraftNocheck_3', '1', 'TRUE');
        duplicateTrn = document.MAINFORM.DUPLICATE_TRN.value;
        if (duplicateTrn == null || duplicateTrn == "") {
            document.MAINFORM.DUPLICATE_TRN.value = "";
        } else {
            SYS_CheckError(document.MAINFORM.RPLCD_CHEQ_NO, "DUPLICATE DRAFT NUMBER\r\n\nThe entered draft number has been used in transaction - " + document.MAINFORM.DUPLICATE_TRN.value + ".\r\n\nPlease correct.");
            document.MAINFORM.RPLCD_CHEQ_NO.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_set_initial_audit_values = function() {
    try {

        var tempAuditNames; // Utility Auto Fix Comments
        tempAuditNames = ['Receiver Bank ID', 'Beneficiary Name'];
        SYF_PYMT_set_before_audit_values();
        auditFieldNames = tempAuditNames;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_set_before_audit_values = function() {
    try {

        var auditValues; // Utility Auto Fix Comments
        auditValues = [document.MAINFORM.X103_ADV_BKID_B2.value, document.MAINFORM.X103_BENECU_NM_59A.value];
        auditBeforeValues = auditValues;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_set_after_audit_values = function() {
    try {

        var auditValues; // Utility Auto Fix Comments
        auditValues = [document.MAINFORM.X103_ADV_BKID_B2.value, document.MAINFORM.X103_BENECU_NM_59A.value];
        auditAfterValues = auditValues;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_audit_check = function() {
    try {

        SYF_PYMT_set_after_audit_values();
        SYT_HiddenNote();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {

        SYF_PYMT_audit_check();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_validate_Value_Date = function() {
    try {

        if (document.MAINFORM.X103_VALUE_DT_32A.value != SYS_BUSI_DATE) {
            SYS_CheckError(document.MAINFORM.X103_VALUE_DT_32A, 'Value date is not current date. The Value date has been changed to todays date');
            document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_nullfunction = function() {
    try {

        //there is no func(EEAuto) here
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_checkAccountNumberSyncAndBalanceNumeric = function() {
    try {

        if (accountCount == 1) {
            if (document.MAINFORM.INT_ACT6.value != Int_Acct[0] || isNaN(document.MAINFORM.INT_AMT6.value)) {
                alert("Request for Balance Check Failed");
                document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
                return false;
            }

            return true;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_checkAccountStatus = function() {
    try {

        var accountStat; // Utility Auto Fix Comments
        var alertmsg; // Utility Auto Fix Comments
        alertmsg = "";
        accountStat = "No";
        if (accountCount == 1) {
            if (document.MAINFORM.INT_ACT1_STATUS.value != "Open") {
                alertmsg = "Account " + document.MAINFORM.INT_ACT6.value + " is not Active. " + "\n";
                accountStat = "Yes";
                //alert("inside");
            }
            if (accountStat == "Yes") {
                alert(alertmsg);
                document.MAINFORM.BALANCECHECK_RESPONSE.value = "true";
                return false;
            }
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_checkAccountCurrenciesSync = function() {
    try {

        var accountStat; // Utility Auto Fix Comments
        var alertmsg; // Utility Auto Fix Comments
        alertmsg = "";
        accountStat = "";
        if (accountCount == 1) {
            if (document.MAINFORM.INT_ACT1_CCY.value != Int_Acct_Ccy[0]) {
                alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT6.value + " has Invalid Currency. " + "\n";
                accountStat = "Yes";
            }
        }
        if (accountStat == "Yes") {
            alert(alertmsg);
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_checkAccountStyle = function() {
    try {

        var accountStat; // Utility Auto Fix Comments
        var alertmsg; // Utility Auto Fix Comments
        alertmsg = "";
        accountStat = "No";
        if (accountCount == 1) {
            if (document.MAINFORM.INT_ACT1_TYPE.value == "N") {
                alertmsg = "Account " + document.MAINFORM.INT_ACT6.value + " has an Invalid Style. " + "\n";
                accountStat = "Yes";
            }
        }

        if (accountStat == "Yes") {
            alert(alertmsg);
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_amount_In_Words = function() {
    try {

        SYS_SayTotal('SYF_IPLC_loadDoDataComplete', document.MAINFORM.CR_AMT.value, document.MAINFORM.X103_INSTR_CCY_33B.value, 'US', 'EN-DEF');
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_disable_fields = function() {
    try {

        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_INSTR_CCY_33B);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_INSTR_AMT_33B);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_SETT_CCY_32A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_SETT_AMT_32A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCU_ID_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCU_NM_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD1_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD2_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD3_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.MLT_STLMT);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUACNO_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.PRIORITY);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.CUST_REF);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.CHEQ_NO);
        document.MAINFORM.Ord_Cust_lookup.disabled = true;
        document.MAINFORM.lookup1.disabled = true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ref_not_found = function() {
    try {

        SYS_CheckError(document.MAINFORM.RELATED_REF_NO, 'Invalid Transaction Number, please re-enter');
        document.MAINFORM.RELATED_REF_NO.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_get_original_ref_details = function() {
    try {

        if (document.MAINFORM.RELATED_REF_NO.value != '') {
            SYS_GetCUBK('RELATED_REF_NO', 'RELATED_REF_NO', 'SYF_PYMT_save_original_trn_details', 'SYF_PYMT_ref_not_found', 'TRUE');
        } else {
            SYF_PYMT_clears_all_fields();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_check_value_date_on_release = function() {
    try {

        if (document.MAINFORM.X103_VALUE_DT_32A.value != SYS_BUSI_DATE) {
            alert('Value date is incorrect. Please refuse for correction');
            EEHtml.fireEvent(EEHtml.getElementById("B"), 'onclick');
            document.MAINFORM.X103_VALUE_DT_32A.onfocus();
        }
        if (document.MAINFORM.X103_VALUE_DT_32A.value != SYS_BUSI_DATE) {
            SYT_restrictRelease();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
        document.MAINFORM.CURRNT_STATUS.value = 'REISSUE'; // Utility Auto Fix Comments
        document.MAINFORM.NXT_STATUS.value = 'PROCESSED';
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_PYMT_disable_fields();
        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_transaction");
        }
        if (SYS_FUNCTION_TYPE == 'RE') {
            SYF_PYMT_check_value_date_on_release();
        } else if (SYS_FUNCTION_TYPE != 'IQ') {
            SYF_PYMT_validate_Value_Date();
        }
        SYT_Chgs_Without_Deferred_Terms();
        SYF_PYMT_set_initial_audit_values();
        document.MAINFORM.CHG_VALUE_DATE.value = SYS_BUSI_DATE;
        SYT_Hide_Partchgfld();
        SYT_Cal_ChgCashInd();
        SYT_Cal_ChgAC();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
        SYT_Audit_Main();

        //Auto advice printing
        SYT_AdviceAutoPrint(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.X103_ORDCU_ID_50A.value, "DI");
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_BalanceCheckSuccess = function() {
    try {

        SYF_PYMT_initialize();
        if (!SYF_PYMT_checkErrorDescription()) {
            return false;
        }
        if (!SYF_PYMT_checkAccountNumberSyncAndBalanceNumeric()) {
            return false;
        }
        if (!SYF_PYMT_checkAccountStatus()) {
            return false;
        }
        if (!SYF_PYMT_checkAccountCurrenciesSync()) {
            return false;
        }
        if (!SYF_PYMT_checkAccountStyle()) {
            return false;
        }
        if (!SYF_PYMT_checkSufficientFunds()) {
            return false;
        }
        document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_checkErrorDescription = function() {
    try {

        var alertmsg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var str; // Utility Auto Fix Comments
        var strArr; // Utility Auto Fix Comments
        alertmsg = "";
        strArr = new Array();
        //to check for the error description in the response
        //alert("document.MAINFORM.INT_RESPONSE.value1"+document.MAINFORM.INT_RESPONSE.value);
        if (document.MAINFORM.INT_RESPONSE.value != "") {
            str = document.MAINFORM.INT_RESPONSE.value;
            strArr = str.split('.END.'); // Utility Auto Fix Comments
            for (i = 0; i < strArr.length; i++) { // Utility Auto Fix Comments
                alertmsg = alertmsg + strArr[i] + "\n";
            }
            alert(alertmsg);
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_checkSufficientFunds = function() {
    try {

        var accountStat; // Utility Auto Fix Comments
        var accountStat1; // Utility Auto Fix Comments
        var accountStat2; // Utility Auto Fix Comments
        var accountStat3; // Utility Auto Fix Comments
        var accountStat4; // Utility Auto Fix Comments
        var accountStat5; // Utility Auto Fix Comments
        var accountStat6; // Utility Auto Fix Comments
        var alertmsg; // Utility Auto Fix Comments
        alertmsg = "";
        accountStat = "";
        accountStat1 = "No";
        accountStat2 = "No";
        accountStat3 = "No";
        accountStat4 = "No";
        accountStat5 = "No";
        accountStat6 = "No";
        if (accountCount == 1) {
            if (SYS_BeFloat(Int_Amt[0]) < SYS_BeFloat(document.MAINFORM.INT_AMT1.value)) {

                //alertmsg = alertmsg  + "Account " + document.MAINFORM.INT_ACT6.value + " has Insufficient Funds " + "\n";
                accountStat1 = "No";
            } else {
                alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT6.value + " has Insufficient Funds " + "\n";
                accountStat1 = "Yes";

            }
        }
        if (accountStat1 == "Yes") {
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            alert(alertmsg);
            return false;
        }
        return false;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHEQ_NO_onchange = function(event) {
    try {
        //alert("heelo");
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_BK_AC_onchange = function(event) {
    try {
        get_receiving_bank_id_using_nostro_account();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_LOOK_UP_BTN1_onclick = function(event) {
    try {
        list_Nostro_receiving_banks_per_currency();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_RPLCD_CHEQ_NO_onchange = function(event) {
    try {
        document.MAINFORM.RPLCD_CHEQ_NO.value = document.MAINFORM.RPLCD_CHEQ_NO.value.trim();
        document.MAINFORM.RPLCD_CHEQ_NO.value = document.MAINFORM.RPLCD_CHEQ_NO.value.toUpperCase();
        SYF_PYMT_duplicate_draft_check();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103BENECUADD1_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.X103BENECUADD1_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103BENECUADD2_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.X103BENECUADD2_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103BENECUADD3_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.X103BENECUADD3_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        get_receiving_bank_details_using_id();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_NM_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.X103_BENECU_NM_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_AMT_33B_onchange = function(event) {
    try {
        // THERE IS NO FUNC HERE
        SYF_PYMT_nullfunction();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_CCY_33B_onchange = function(event) {
    try {
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.RATE_TYPE.value, document.MAINFORM.RATE_NAME.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUACNO_50A_onchange = function(event) {
    try {
        debit_account_changed();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD1_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD1_50A.value = document.MAINFORM.X103_ORDCUADD1_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD2_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD2_50A.value = document.MAINFORM.X103_ORDCUADD2_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD3_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD3_50A.value = document.MAINFORM.X103_ORDCUADD3_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        change_of_applicant_id();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_NM_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCU_NM_50A.value = document.MAINFORM.X103_ORDCU_NM_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SETT_AMT_32A_onchange = function(event) {
    try {
        //THERE IS NO FUN HERE
        SYF_PYMT_nullfunction();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SETT_CCY_32A_onchange = function(event) {
    try {
        if (document.MAINFORM.RECORDER_TYPE.value != "NonCustomer") {
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        }
        document.MAINFORM.DB_CCY.value = document.MAINFORM.X103_SETT_CCY_32A.value;
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.RATE_TYPE.value, document.MAINFORM.RATE_NAME.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function(event) {
    try {
        DI_validate_value_date();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Re-issue.js", e);
    }
}