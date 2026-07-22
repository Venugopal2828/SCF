var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.addRecordCheck = function() {
    try {

        var _dodetail; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        if (document.MAINFORM.MLT_STLMT.value == 'No') {
            if (Records.length > 0) {
                alert("Max One Settlement row is allowed");
                return false;
            }
        } else {
            if (Records.length > 4) {
                alert("Max Five Settlement rows are allowed");
                return false;
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Rev_AcctNo = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        /*Sql_Cond = "C_MAIN_REF=" +"'"+document.MAINFORM.C_MAIN_REF.value+"'" ;
Field_List = "CPYT_DR_AC";
Mapping_List = "REVE_AC_NO";
SYS_Get22TableData_S('CLNPYMT_DEBITS',Sql_Cond,Field_List,Mapping_List,'Sett_AccNo_Succ','false');*/
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_getAccountNum = function() {
    try {

        //SYS_InqCUBK_Sql('REVE_NOSTRO_AC_NO', ' C_ACCT_CCY=\'<--REVE_CCY-->\'');
        SYS_InqCUBK_byCondition('REVE_NOSTRO_AC_NO', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Reve_Ac_No = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        document.MAINFORM.C_CUST_ID.value = '';
        document.MAINFORM.CPYT_DR_NAME.value = '';
        if (document.MAINFORM.REVE_AC_NO.value.trim().length == 0) {
            document.MAINFORM.REVE_AC_NO.focus();
            return false;
        } else {
            //Sql_Cond = "C_ACCT_CCY=" + "'" + document.MAINFORM.REVE_CCY.value + "'" + " AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_ACCT_NR=" + "'" + document.MAINFORM.REVE_AC_NO.value + "'";
            //Field_List = "C_ACCT_NR;C_ACCT_WITH_ID";
            //Mapping_List = "C_AC_NUMBER;C_CUST_ID";
            SYS_GetTableDataByRule_S('SYF_PYMT_ReversePayment_ITT_SYF_PYMT_Check_Reve_Ac_No_0', '1', 'Sett_AccNo_Succ', 'false');
            if (document.MAINFORM.C_AC_NUMBER.value != document.MAINFORM.REVE_AC_NO.value) {
                alert('The Account number entered is invalid,please verify.');
                document.MAINFORM.REVE_AC_NO.value = '';
                document.MAINFORM.C_CUST_ID.value = '';
                document.MAINFORM.CPYT_DR_NAME.value = '';
                return false;
            } else {
                //Sql_Cond1 = "C_MAIN_REF=" + "'" + document.MAINFORM.C_CUST_ID.value + "'";
                //Field_List1 = "PARTY_NM";
                //Mapping_List1 = "CPYT_DR_NAME";
                SYS_GetTableDataByRule_S('SYF_PYMT_ReversePayment_ITT_SYF_PYMT_Check_Reve_Ac_No_1', '1', '', 'false');
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Reve_DT = function() {
    try {

        var cntyCode; // Utility Auto Fix Comments
        var dSpotDt; // Utility Auto Fix Comments
        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var reqDate; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sStDate; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        var spotDate; // Utility Auto Fix Comments
        cntyCode = SYS_BANK_COUNTRY;
        sValDt = document.MAINFORM.REVERSAL_DT.value;
        sSysDt = SYS_BUSI_DATE;

        if (sValDt != "") {
            SYS_CheckHoliday(SYS_BANK_COUNTRY, document.MAINFORM.REVERSAL_DT.name, '', SYS_BUSI_UNIT); // Utility Auto Fix Comments
        }

        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt < dSysDt) {
                alert("The Value Date cannot be in the Past"); // Utility Auto Fix Comments
                document.MAINFORM.REVERSAL_DT.value = "";
            }

            document.MAINFORM.REVERSAL_DT.focus();
        }

        sCntyCode = SYS_BANK_COUNTRY;
        sStDate = SYS_BUSI_DATE;
        spotDate = SYS_CalEndWorkingDate_S(sCntyCode, sStDate, '2', 'TWO_DAYS_BACK', 'A', 'y', 'y');
        reqDate = document.MAINFORM.TWO_DAYS_BACK.value;
        dSpotDt = SYT_GetDateObjectFromStr(reqDate);
        if (dValDt > dSpotDt) {
            alert("The Value Date cannot be more than Spot");
            document.MAINFORM.REVERSAL_DT.value = "";
            EEHtml.getElementById("imgDrawDown_REVERSAL_DT").click();
            document.MAINFORM.REVERSAL_DT.focus();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Reve_Amt = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.REVE_AMT.value) == 0) {
            alert("The Reversal Amount Should be greater than 0");
            document.MAINFORM.REVE_AMT.value = document.MAINFORM.CR_CALC_AMT.value;
        } else if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            if (SYS_BeFloat(document.MAINFORM.REVE_AMT.value) > SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value)) {
                alert("The Reversal Amount Should be less than or equal to Settlement Amount " + document.MAINFORM.CR_CALC_AMT.value);
                document.MAINFORM.REVE_AMT.value = document.MAINFORM.CR_CALC_AMT.value;
            }
        }
        document.MAINFORM.REVE_AMT.value = SYS_BeFloat(document.MAINFORM.REVE_AMT.value);
        document.MAINFORM.CR_AMT.value = document.MAINFORM.REVE_AMT.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_predoc", "_transaction");
        }
        SYT_Audit_Main();
        SYM_PYMT_SetRateType_Reversal();
       // SYS_GetCUBK('GetContactInfo', 'X103_BENECU_ID_59A', '', '', 'TRUE');  
        //added for valuedate validation
        if (SYS_FUNCTION_TYPE == "RE") {
            if (!SYT_Chk_PastDate(document.MAINFORM.REVERSAL_DT)) {
                SYT_restrictRelease();
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.REVE_AMT.value = SYT_AmtFormat(document.MAINFORM.REVE_CCY.value, document.MAINFORM.REVE_AMT.value);
        document.MAINFORM.FDS_TO_CHK.value = 'Yes'; //sathish
        document.MAINFORM.CR_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
        if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
            document.MAINFORM.CR_AMT.value = document.MAINFORM.CR_CALC_AMT.value;
            document.MAINFORM.REVE_AMT.value = document.MAINFORM.CR_CALC_AMT.value;
            document.MAINFORM.REVE_AMT.value = SYT_AmtFormat(document.MAINFORM.REVE_CCY.value, document.MAINFORM.REVE_AMT.value);
        } else {
            document.MAINFORM.CR_AMT.value = document.MAINFORM.INW_X103_SETT_AMT_32A.value;
            document.MAINFORM.REVE_AMT.value = document.MAINFORM.INW_X103_SETT_AMT_32A.value;
            document.MAINFORM.REVE_AMT.value = SYT_AmtFormat(document.MAINFORM.REVE_CCY.value, document.MAINFORM.REVE_AMT.value);
        }
        document.MAINFORM.REVE_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
        document.MAINFORM.CPYT_FUNC_NAME.value = SYS_FUNCTION_NAME;
        SYF_PYMT_Set_Rev_AcctNo();
        document.MAINFORM.REVE_AC_NO_ORG.value = document.MAINFORM.REVE_AC_NO.value;
        document.MAINFORM.REVE_AC_NO.value = document.MAINFORM.CPYT_DR_AC.value;
        document.MAINFORM.CURRNT_STATUS.value = 'ITT_REVERSE';
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Reve_DT_Fail = function() {
    try {

        document.MAINFORM.REVERSAL_DT.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
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
        var RecIndex; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var Tot_Sett_Amt; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
        var counterT; // Utility Auto Fix Comments
        var existingAccount; // Utility Auto Fix Comments
        var gapi_ind; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var indexArr; // Utility Auto Fix Comments
        var overDra_chkMult; // Utility Auto Fix Comments
        //*** interface 

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

        document.MAINFORM.INT_ACT1.value = "";
        document.MAINFORM.INT_AMT1.value = "";
        document.MAINFORM.INT_ACT1_CCY.value = "";
        document.MAINFORM.INT_CASH_IND1.value = "";
        document.MAINFORM.INT_AC_IDENTIFIER.value = "";
        document.MAINFORM.CPYT_DR_AC_TYPE.value = "";
        document.MAINFORM.C_AC_IDENTIFIER.value = "";
        document.MAINFORM.GAPI_IND_FLG.value = "";

        for (i = 0; i < Records.length; i++) { // Utility Auto Fix Comments
            Record = Records[i];
            document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + SYS_getValFromRec(Record, "CPYT_DR_AC") + ";";
            document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + SYS_getValFromRec(Record, "SETT_AMT") + ";";
            document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + SYS_getValFromRec(Record, "SETT_CCY") + ";";
            document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + SYS_getValFromRec(Record, "MUL_CASH_IND") + ";";
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + SYS_getValFromRec(Record, "MUL_OVRIDE") + ";";
            document.MAINFORM.CPYT_DR_AC_TYPE.value = document.MAINFORM.CPYT_DR_AC_TYPE.value + SYS_getValFromRec(Record, "CPYT_DR_AC_TYPE") + ";"; // Utility Auto Fix Comments
            document.MAINFORM.C_AC_IDENTIFIER.value = document.MAINFORM.C_AC_IDENTIFIER.value + SYS_getValFromRec(Record, "C_AC_IDENTIFIER") + ";"; // Utility Auto Fix Comments

        }
        document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + "undefined" + ";";
        document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + "undefined" + ";";
        document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + "undefined" + ";";
        document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + "undefined" + ";";
        document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + "undefined" + ";";

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
        //document.MAINFORM.INT_SW_DETAILS.value=document.MAINFORM.X103_ADV_BKSW_B2.value;//TODO
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY; // Utility Auto Fix Comments
        //document.MAINFORM.INT_FOR_BANK_SW.value= document.MAINFORM.X103_BK2BK_INF1_72.value;

        gapi_ind = true;
        overDra_chkMult = new Array();
        Cash_chkMult = new Array();
        AccountType = new Array();
        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            Cash_chkMult[i] = SYS_getValFromRec(Record, "MUL_CASH_IND"); // Utility Auto Fix Comments
            overDra_chkMult[i] = SYS_getValFromRec(Record, "MUL_OVRIDE"); // Utility Auto Fix Comments
            AccountType[i] = SYS_getValFromRec(Record, "CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments


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

        document.MAINFORM.GAPI_IND_FLG.value = gapi_ind;
        //*** interface**
        Tot_Sett_Amt = SYS_getFieldSumByXpath('PAY_AMT', 'PaymentMultipleDebits');

        if (SYS_BeFloat(Tot_Sett_Amt) != SYS_BeFloat(document.MAINFORM.REVE_AMT.value)) {

            alert(" Reversal Amount(" + document.MAINFORM.REVE_AMT.value + ") and  Total Payment Amounts(" + Tot_Sett_Amt + ") are not balanced. ");

            return false;
        }
        SYF_PYMT_Check_Reve_Ac_No();
        document.MAINFORM.CURRNT_STATUS.value = 'ITT_REVERSE';
        document.MAINFORM.NXT_STATUS.value = 'ITT_REVERSE_RELEASE';
        SYT_Reversals_CashVoucher();
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments

        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            RecIndex = SYS_getRecID(Record);
        }
        document.MAINFORM.INW_X103_EXCH_RT_36.value = SYS_getFieldValue(_dodetail, RecIndex, "EXCH_RATE"); // Utility Auto Fix Comments
        document.MAINFORM.COV_NO.value = SYS_getFieldValue(_dodetail, RecIndex, "COV_NO"); // Utility Auto Fix Comments
        document.MAINFORM.SETT_CCY.value = SYS_getFieldValue(_dodetail, RecIndex, "SETT_CCY"); // Utility Auto Fix Comments

        //document.MAINFORM.INW_X103_EXCH_RT_36.value = SYS_getFieldSumByXpath('EXCH_RATE','PaymentMultipleDebits');
        if (SYS_ERROR == '') {
            SYT_addTrxHistory();
            document.MAINFORM.NOTES.value = '';
        }
        document.MAINFORM.REVE_IND.value = 'Yes'; // Utility Auto Fix Comments
        SYT_Set_Int_Flds_CustId();

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYT_Audit_value_assign_WithSett();
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_REVERSAL_DT_onchange = function(event) {
    try {
        var cntyCode; // Utility Auto Fix Comments
        cntyCode = document.MAINFORM.REVE_CCY.value.substring(0, 2);
        document.MAINFORM.CNTY_CODE.value = cntyCode;
        SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.REVERSAL_DT.name, '', '', SYS_BUSI_UNIT, 'SYF_PYMT_Check_Reve_DT', 'SYF_PYMT_Check_Reve_DT_Fail');
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_REVE_AC_NO_onchange = function(event) {
    try {
        SYF_PYMT_Check_Reve_Ac_No();
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_REVE_AMT_onchange = function(event) {
    try {
        var REVE_AMT; //Added 08/05/2019
        REVE_AMT = SYS_BeFloat(document.MAINFORM.REVE_AMT.value);
        if (REVE_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.REVE_AMT.value = 0;
        }
        SYT_Chg_NegativeAmt(document.MAINFORM.REVE_AMT);
        SYF_PYMT_Check_Reve_Amt();
        _Paymentdetail = SYS_getDoByXpath('PaymentMultipleDebits');
        _Paymentdetail.clearAll(true);
        document.MAINFORM.REVE_AMT.value = SYT_AmtFormat(document.MAINFORM.REVE_CCY.value, document.MAINFORM.REVE_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT.js", e);
    }
}