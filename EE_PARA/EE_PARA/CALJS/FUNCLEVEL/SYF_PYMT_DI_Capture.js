var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_PYMT_error_finding_receiving_bank = function() {
    try {

        SYS_CheckError(document.MAINFORM.X103_INSTR_CCY_33B, 'There are no Receiving Banks loaded for this currency - Please load banks');
        SYT_EnableField(document.MAINFORM.X103_ADV_BKID_B2, 'M');
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_set_up_cheque_number = function() {
    try {

        document.MAINFORM.RPLCD_CHEQ_NO.value = document.MAINFORM.CHEQ_NO.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_getStayTotal = function(amountInWords) {
    try {

        document.MAINFORM.XN99_NARRATIVE_79.value = amountInWords;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_amount_In_Words = function() {
    try {

        SYS_SayTotal('SYF_PYMT_getStayTotal', document.MAINFORM.CR_AMT.value, document.MAINFORM.X103_INSTR_CCY_33B.value, 'US', 'EN-DEF');
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
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
        document.MAINFORM.Ord_Cust_lookup.disabled = true;
        document.MAINFORM.lookup1.disabled = true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var AccountType; // Utility Auto Fix Comments
        var Cash_chkMult; // Utility Auto Fix Comments
        var _Paymentdetail; // Utility Auto Fix Comments
        var Int_Acct_Ccy_Loc; // Utility Auto Fix Comments
        var Int_Acct_Loc; // Utility Auto Fix Comments
        var Int_Amt_Loc; // Utility Auto Fix Comments
        var Int_Cash_Ind_Loc; // Utility Auto Fix Comments
        var Int_Override_Ind_Loc; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var counterT; // Utility Auto Fix Comments
        var dup; // Utility Auto Fix Comments
        var existingAccount; // Utility Auto Fix Comments
        var gapi_ind; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var indexArr; // Utility Auto Fix Comments
        var notes; // Utility Auto Fix Comments
        var overDra_chkMult; // Utility Auto Fix Comments
        var stlmt; // Utility Auto Fix Comments
        if (SYS_FUNCTION_NAME == "DI_Cancel" && SYS_FUNCTION_TYPE == "EC") {
            return true;
        }
        if (!SYS_Batch_CheckFieldValue()) {
            return false;
        } //check whether the value of all class fields are correct
        stlmt = SYT_Init_Notes();
        SYF_PYMT_duplicate_draft_check();
        SYT_Chk_FormAdv_CashInd();
        if (stlmt == false) {
            return false;
        } else {
            SYF_PYMT_reset_credit_amount_with_settlement_values();
        }
        dup = SYF_PYMT_duplicate_check('14');
        if (dup == false) {
            return false;
        }
        crAmt = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
        crAmt = SYT_AmtFormat(document.MAINFORM.X103_INSTR_CCY_33B.value, crAmt);
        crAmt = crAmt.replace(/,/g, '');
        if (crAmt.length > 15) {
            alert("The Length of Credit Amount is over the limit of SWIFT Standard");
            return false;
        }
        SYF_PYMT_amount_In_Words();
        notes = SYT_VisibleNote();
        SYT_Chk_CHG_FLD_LOCAL_CUST_AC_NO();
        if (notes == false) {
            return false;
        }


        _Paymentdetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(_Paymentdetail); // Utility Auto Fix Comments
        Int_Acct_Loc = new Array();
        Int_Amt_Loc = new Array();
        Int_Acct_Ccy_Loc = new Array();
        Int_Cash_Ind_Loc = new Array();
        Int_Override_Ind_Loc = new Array();

        indexArr = new Array();
        existingAccount = "No";
        counterT = 0;

        for (i = 0; i < Records.length; i++) { // Utility Auto Fix Comments
            Record = Records[i];
            Int_Acct_Loc[i] = SYS_getValFromRec(Record, "CPYT_DR_AC");
            Int_Amt_Loc[i] = SYS_getValFromRec(Record, "SETT_AMT");
            Int_Acct_Ccy_Loc[i] = SYS_getValFromRec(Record, "SETT_CCY");
            Int_Cash_Ind_Loc[i] = SYS_getValFromRec(Record, "MUL_CASH_IND");
            Int_Override_Ind_Loc[i] = SYS_getValFromRec(Record, "MUL_OVRIDE");

        }
        // for Release 
        document.MAINFORM.INT_ACT1.value = "";
        document.MAINFORM.INT_AMT1.value = "";
        document.MAINFORM.INT_ACT1_CCY.value = "";
        document.MAINFORM.INT_CASH_IND1.value = "";
        document.MAINFORM.INT_AC_IDENTIFIER.value = "";
        document.MAINFORM.CPYT_DR_AC_TYPE.value = "";
        document.MAINFORM.C_AC_IDENTIFIER.value = "";
        document.MAINFORM.GAPI_IND_FLG.value = "";

        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + SYS_getValFromRec(Record, "CPYT_DR_AC") + ";";
            document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + SYS_getValFromRec(Record, "SETT_AMT") + ";";
            document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + SYS_getValFromRec(Record, "SETT_CCY") + ";";
            document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + SYS_getValFromRec(Record, "MUL_CASH_IND") + ";";
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + SYS_getValFromRec(Record, "MUL_OVRIDE") + ";";
            document.MAINFORM.CPYT_DR_AC_TYPE.value = document.MAINFORM.CPYT_DR_AC_TYPE.value + SYS_getValFromRec(Record, "CPYT_DR_AC_TYPE") + ";"; // Utility Auto Fix Comments
            document.MAINFORM.C_AC_IDENTIFIER.value = document.MAINFORM.C_AC_IDENTIFIER.value + SYS_getValFromRec(Record, "C_AC_IDENTIFIER") + ";"; // Utility Auto Fix Comments

        }
        if (parseInt(Chg.Screen.getLocalPayChgTotalAmt(), 0) == 0) {
            document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + "undefined" + ";";
            document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + "undefined" + ";";
            document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + "undefined" + ";";
            document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + "undefined" + ";";
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + "undefined" + ";";
        } else {
            document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + ";";
            document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + Chg.Screen.getLocalPayChgTotalAmt() + ";";
            document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + ";";
            document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + document.MAINFORM.CHG_CASH_IND.value + ";";
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + "No" + ";";
        }
        document.MAINFORM.INT_ACCOUNTCOUNT.value = Records.length + 1;
        document.MAINFORM.CPYT_DR_AC_TYPE.value = document.MAINFORM.CPYT_DR_AC_TYPE.value + "CUSTOMER" + ";";
        //document.MAINFORM.INT_ACCT_CUNT.value=Int_Acct_Loc.length;
        document.MAINFORM.INT_C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;

        if (SYS_FUNCTION_TYPE != 'EC') {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES) + 1;
        } else {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES);
        }
        document.MAINFORM.C_MODULE.value = SYS_MODULE_NAME;
        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.INT_SW_DETAILS.value = document.MAINFORM.X103_ADV_BKSW_B2.value;
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY; // Utility Auto Fix Comments
        //document.MAINFORM.INT_FOR_BANK_SW.value= document.MAINFORM.X103_BK2BK_INF1_72.value;
        /*** **/
        gapi_ind = true;
        overDra_chkMult = new Array();
        Cash_chkMult = new Array();
        AccountType = new Array();
        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            Cash_chkMult[i] = SYS_getValFromRec(Record, "MUL_CASH_IND"); // Utility Auto Fix Comments
            overDra_chkMult[i] = SYS_getValFromRec(Record, "MUL_OVRIDE"); // Utility Auto Fix Comments
            AccountType[i] = SYS_getValFromRec(Record, "CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments

            //	alert("AccountType"+AccountType[i]);
            if (AccountType[i] == "CUSTOMER") {
                if (Cash_chkMult[i] == "No") {
                    if (overDra_chkMult[i] == "No") {
                        gapi_ind = false;
                        sec_gapi_Check = false;
                        break;
                    } else {
                        gapi_ind = true;
                    }
                } else {
                    gapi_ind = true;
                }
            }
        }


        /*if(accountCheck)
	{
			
			if(!gapi_ind)
				 {
				 	gapi_ind=false;
					}
				 else{
				 gapi_ind=false;
				}
			
		}		
		else{
			alert("gapi else");
			gapi_ind=false;
		}*/

        //alert("gapi222"+gapi_ind);
        //alert("Cash indicator.."+Chg.Screen.getLocalPayChgTotalAmt());
        if (document.MAINFORM.CHG_CASH_IND.value == 'No' && parseInt(Chg.Screen.getLocalPayChgTotalAmt(), 0) > 0) {
            if (document.MAINFORM.X103_DET_CHG_71A.value == "BEN") {
                if (!gapi_ind) {
                    gapi_ind = false;
                } else {
                    gapi_ind = true;
                    return gapi_ind;
                }
            }
            gapi_ind = false;
        } else {
            if (!gapi_ind) {
                gapi_ind = false;
            } else {
                gapi_ind = true;
            }
        }
        //alert("gapi"+gapi_ind);
        document.MAINFORM.GAPI_IND_FLG.value = gapi_ind;
        document.MAINFORM.CHG_VALUE_DATE.value = document.MAINFORM.X103_VALUE_DT_32A.value;

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_GTEE_Cal_LIAB_TRXCCY_AMT();
        SYF_PYMT_calculate_charge();
        if (document.MAINFORM.CPYT_CR_BK_AC.value == "" && document.MAINFORM.X103_ADV_BKSW_B2.value == "") {
            SYF_PYMT_load_default_receiving_bank_and_account();
        }
        document.MAINFORM.CURRNT_STATUS.value = document.MAINFORM.NXT_STATUS.value;
        document.MAINFORM.NXT_STATUS.value = 'PROCESSED';
        SYM_IWGT_Cal_FURTHER_IDENTITY_OnChange();
        document.MAINFORM.CHG_CASH_IND.value = "No";
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if ((SYS_FUNCTION_NAME == "DI_Cancel" && SYS_FUNCTION_TYPE == "EC") || (document.MAINFORM.CANCEL_FLG.value == "Yes" && SYS_FUNCTION_TYPE == "RE")) {
            SYT_Cancel_Init();
            return;
        } else {
            document.MAINFORM.CANCEL_FLG.value = "No";
        }
        SYF_PYMT_disable_fields();
        if (SYS_FUNCTION_TYPE == 'RE') {
            SYF_PYMT_check_value_date_on_release();
        } else if (SYS_FUNCTION_TYPE != 'IQ') {
            SYF_PYMT_validate_Value_Date();
        }

        if (SYS_FUNCTION_TYPE == 'RE') {
            if (document.MAINFORM.OVRIDE.value == "Yes") {
                alert("Funds Check has been Overridden.Please check the Notes tab");
                EEHtml.fireEvent(EEHtml.getElementById('F'), 'onclick');
                document.MAINFORM.TRX_HISTORY.onfocus();
            }
        }
        SYT_Chgs_Without_Deferred_Terms();
        /*
if(SYS_FUNCTION_TYPE == "RE"){
//EEHtml.getElementById('A').innerText = "Draft Capture";
}
*/
        SYT_Hide_partchgfld();
        SYT_Cal_ChgCashInd();
        SYT_Hide_Partchgfld();
        SYT_Cal_ChgAC();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_transaction");

        }
        SYT_Audit_Main();

        //Auto advice printing
        SYT_AdviceAutoPrint(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.X103_ORDCU_ID_50A.value, "DI");

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_check_value_date_on_release = function() {
    try {

        if (document.MAINFORM.X103_VALUE_DT_32A.value != SYS_BUSI_DATE) {
            SYS_CheckError(document.MAINFORM.X103_VALUE_DT_32A, 'Value date is incorrect. Please refuse for correction');
            //        EEHtml.getElementById("B").fireEvent('onclick');
            //	document.MAINFORM.X103_VALUE_DT_32A.onfocus;
        }
        if (document.MAINFORM.X103_VALUE_DT_32A.value != SYS_BUSI_DATE) {
            SYT_restrictRelease();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_calculate_charge = function() {
    try {

        if (document.MAINFORM.CR_AMT.value == 0) {
            Chg.calculate(['DI_CMSN'], document.MAINFORM.X103_SETT_CCY_32A.value, document.MAINFORM.DB_AMT.value);
            //Chg.calculate(['DI_CMSN','DI_SWIFT'],document.MAINFORM.X103_SETT_CCY_32A.value, document.MAINFORM.DB_AMT.value);
        } else {
            Chg.calculate(['DI_CMSN'], document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.CR_AMT.value);
            //Chg.calculate(['DI_CMSN','DI_SWIFT'],document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.CR_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_get_notsro_account_with_currency = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        //Sql_Cond = "C_CNTY_CODE= '" + SYS_BANK_COUNTRY + "' AND C_CLEAR_DEF= 'T' AND C_CLEAR_TYPE= 'NOSTRO' AND C_ACCT_CCY= '" + document.MAINFORM.X103_INSTR_CCY_33B.value + "' AND C_BK_GROUP_ID= '" + SYS_BANK_GROUP + "'";
        //Field_List = "C_ACCT_NR;C_ACCT_WITH_ID;BIC_CODE";
        //Mapping_List = "CPYT_CR_BK_AC;X103_ADV_BKID_B2;X103_ADV_BKSW_B2";
        SYS_GetTableDataByRule('SYF_PYMT_DI_Capture_SYF_PYMT_get_notsro_account_with_currency_0', '1', 'SYF_PYMT_getReceivingBank', 'SYF_PYMT_error_finding_receiving_bank', 'false');
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_duplicate_check = function(noOfDaysBack) {
    try {

        var amt; // Utility Auto Fix Comments
        var answer; // Utility Auto Fix Comments
        var benName; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var dbAmt; // Utility Auto Fix Comments
        var duplicateTrn; // Utility Auto Fix Comments
        var eventName; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, SYS_BUSI_DATE, noOfDaysBack, "DAYS_BACK", 'B', 'Y', 'Y');
        //date = document.MAINFORM.DAYS_BACK.value;
        //amt = SYS_BeFloat(document.MAINFORM.X103_INSTR_AMT_33B.value);
        //dbAmt = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value);
        eventName = 'Draft Payments';
        //table = "PYMT_EVENT";
        document.MAINFORM.DUPLICATE_TRN.value = "";
        //strSQLWhere = " where C_BK_GROUP_ID = '" + SYS_BANK_GROUP + "' and X103_INSTR_CCY_33B = '" + document.MAINFORM.X103_INSTR_CCY_33B.value + "' and X103_INSTR_AMT_33B = '" + amt + "' and X103_SETT_AMT_32A = '" + dbAmt + "' and NXT_STATUS = 'PROCESSED' and  to_char(D_SYS_OP_DATE, 'YYYY-MM-DD') > '" + date + "' and X103_ORDCU_ID_50A = '" + document.MAINFORM.X103_ORDCU_ID_50A.value + "' and c_main_ref <> '" + document.MAINFORM.C_MAIN_REF.value + "' AND I_EVENT_TIMES = (select MAX(I_EVENT_TIMES) from eximtrx.pymt_LEDGER WHERE c_main_ref = EXIMTRX.PYMT_EVENT.C_MAIN_REF ) and currnt_status <> 'CANCEL'" + " and LOWER(X103_BENECU_NM_59A) = '" + benName + "'";
        benName = document.MAINFORM.X103_BENECU_NM_59A.value.toLowerCase();
        SYS_GetTableDataByRule_S('SYF_PYMT_DI_Capture_SYF_PYMT_duplicate_check_1', '1', 'TRUE');
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
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_getReceivingBank = function() {
    try {

        SYS_GetCUBK('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYT_Audit_value_assign_WithCharges();
        SYT_Audit_Main();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_load_default_receiving_bank_and_account = function() {
    try {

        SYF_PYMT_get_notsro_account_with_currency();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYM_IWGT_Check_EXPIRY_DT();
            SYT_CHG_INIT();
            Chg.Screen.mapLocalCust('X103_ORDCU_ID_50A', 'X103_ORDCU_NM_50A');
            Chg.attchEvent(SYT_Cal_ChgAC);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_validate_Value_Date = function() {
    try {

        if (document.MAINFORM.X103_VALUE_DT_32A.value != SYS_BUSI_DATE) {
            //SYS_CheckError(document.MAINFORM.X103_VALUE_DT_32A,'Value date is not current date. The Value date has been changed to todays date');
            alert('The Value date has been changed to todays date');
            document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE; // Utility Auto Fix Comments
        }
        document.MAINFORM.CHG_VALUE_DATE.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_reset_credit_amount_with_settlement_values = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.X103_INSTR_AMT_33B.value) == 0) {
            document.MAINFORM.CR_AMT.value = SYS_getFieldSumByXpath('PAY_AMT', 'PaymentMultipleDebits');
            document.MAINFORM.CR_AMT.value = SYS_BeFloat(DecimalFormat(document.MAINFORM.CR_AMT.value, findDecFromCCY(document.MAINFORM.X103_INSTR_CCY_33B.value)));
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_duplicate_draft_check = function() {
    try {

        var duplicateTrn; // Utility Auto Fix Comments
        var eventName; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var table; // Utility Auto Fix Comments
        eventName = 'Draft Payments';
        //table = "PYMT_EVENT";
        document.MAINFORM.DUPLICATE_TRN.value = "";
        //strSQLWhere = "C_BK_GROUP_ID = '" + SYS_BANK_GROUP + "' and RPLCD_CHEQ_NO= '" + document.MAINFORM.CHEQ_NO.value + "'";
        SYS_GetTableDataByRule_S('SYF_PYMT_DI_Capture_SYF_PYMT_duplicate_draft_check_2', '1', 'TRUE');
        duplicateTrn = document.MAINFORM.DUPLICATE_TRN.value;
        if (duplicateTrn == null || duplicateTrn == "" || duplicateTrn == document.MAINFORM.C_MAIN_REF.value) {
            document.MAINFORM.DUPLICATE_TRN.value = "";
        } else {
            SYS_CheckError(document.MAINFORM.CHEQ_NO, "DUPLICATE DRAFT NUMBER\r\n\nThe entered draft number has been used in transaction - " + document.MAINFORM.DUPLICATE_TRN.value + ".\r\n\nPlease correct.");
            document.MAINFORM.CHEQ_NO.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHEQ_NO_onchange = function(event) {
    try {
        document.MAINFORM.CHEQ_NO.value = document.MAINFORM.CHEQ_NO.value.trim();
        document.MAINFORM.CHEQ_NO.value = document.MAINFORM.CHEQ_NO.value.toUpperCase();
        SYF_PYMT_duplicate_draft_check();
        SYF_PYMT_set_up_cheque_number();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_BK_AC_onchange = function(event) {
    try {
        get_receiving_bank_id_using_nostro_account();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_LOOK_UP_BTN1_onclick = function(event) {
    try {
        list_Nostro_receiving_banks_per_currency();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103BENECUADD1_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.X103BENECUADD1_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103BENECUADD2_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.X103BENECUADD2_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103BENECUADD3_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.X103BENECUADD3_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        get_receiving_bank_details_using_id();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_NM_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.X103_BENECU_NM_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_AMT_33B_onchange = function(event) {
    try {
        SYM_GTEE_Cal_LIAB_TRXCCY_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_CCY_33B_onchange = function(event) {
    try {
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.RATE_TYPE.value, document.MAINFORM.RATE_NAME.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUACNO_50A_onchange = function(event) {
    try {
        debit_account_changed();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD1_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD1_50A.value = document.MAINFORM.X103_ORDCUADD1_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD2_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD2_50A.value = document.MAINFORM.X103_ORDCUADD2_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD3_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD3_50A.value = document.MAINFORM.X103_ORDCUADD3_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        change_of_applicant_id();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_NM_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCU_NM_50A.value = document.MAINFORM.X103_ORDCU_NM_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SETT_AMT_32A_onchange = function(event) {
    try {
        SYM_GTEE_Cal_LIAB_TRXCCY_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
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
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function(event) {
    try {
        DI_validate_value_date();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Capture.js", e);
    }
}