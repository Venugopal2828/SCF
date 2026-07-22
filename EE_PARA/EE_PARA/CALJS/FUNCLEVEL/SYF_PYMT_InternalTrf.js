var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var Int_Acct = '';
var Int_Acct_Ccy = '';
var Int_Amt = '';

csFuncLevelProto.SYF_PYMT_Check_Valid_Date = function() {
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
        cntyCode = document.MAINFORM.CR_CCY.value.substring(0, 2);
        sValDt = document.MAINFORM.X103_VALUE_DT_32A.value;

        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);

            if (dValDt < dSysDt) {
                alert("The Value Date cannot be in the Past"); // Utility Auto Fix Comments
                document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
                return false;
            }

            if (document.MAINFORM.X103_VALUE_DT_32A.value != "") {
                if (document.MAINFORM.X103_VALUE_DT_32A.name == "X103_VALUE_DT_32A") {
                    cntyCode = document.MAINFORM.DB_CCY.value.substring(0, 2); // Utility Auto Fix Comments
                    document.MAINFORM.CNTY_CODE.value = cntyCode;
                    SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.X103_VALUE_DT_32A.name, '', '', SYS_BUSI_UNIT, 'SYF_PYMT_Check_Valid_Date_Succ', 'SYF_PYMT_Check_Valid_Date_Fail1');
                }
            }
        }

        sCntyCode = SYS_BANK_COUNTRY;
        sStDate = SYS_BUSI_DATE;
        spotDate = SYS_CalEndWorkingDate_S(sCntyCode, sStDate, '2', 'TWO_DAYS_BACK', 'A', 'y', 'y');
        reqDate = document.MAINFORM.TWO_DAYS_BACK.value;
        dSpotDt = SYT_GetDateObjectFromStr(reqDate);
        if (dValDt > dSpotDt) {
            alert("The Value Date cannot be more than Spot");
            document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
            //EEHtml.getElementById("A").click();
            document.MAINFORM.X103_VALUE_DT_32A.focus();
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Valid_Date_Succ = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chck_Debit_AcctNo = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
                //Sql_Cond = "C_CUST_ID=" + "'" + document.MAINFORM.X103_ORDCU_ID_50A.value + "'" + " AND " + "C_AC_NUMBER=" + "'" + document.MAINFORM.X103_ORDCUACNO_50A.value + "' AND " + "(C_DBT_CRDT = 'B' OR  C_DBT_CRDT='D') AND " + "C_CURRENCY like '" + document.MAINFORM.DB_CCY.value + "%' ";
                //Field_List = "C_AC_NUMBER";
                //Mapping_List = "C_AC_NUMBER";
                SYS_GetTableDataByRule_S('SYF_PYMT_InternalTrf_SYF_PYMT_Chck_Debit_AcctNo_0', '1', 'Sett_AccNo_Succ', 'false');

                if (document.MAINFORM.C_AC_NUMBER.value != document.MAINFORM.X103_ORDCUACNO_50A.value && document.MAINFORM.X103_ORDCUACNO_50A.value != "") {
                    alert('The Account number entered is invalid ,please verify .');
                    document.MAINFORM.X103_ORDCUACNO_50A.value = '';
                    return false;
                }
            } else {
                //Sql_Cond1 = "C_ACCT_WITH_ID=" + "'" + document.MAINFORM.X103_ORDCU_ID_50A.value + "'" + " AND " + "C_ACCT_NR=" + "'" + document.MAINFORM.X103_ORDCUACNO_50A.value + "'";
                //Field_List1 = "C_ACCT_NR";
                //Mapping_List1 = "C_ACCT_NR";
                SYS_GetTableDataByRule_S('SYF_PYMT_InternalTrf_SYF_PYMT_Chck_Debit_AcctNo_1', '1', 'Sett_AccNo_Succ', 'false');
                if (document.MAINFORM.C_ACCT_NR.value != document.MAINFORM.X103_ORDCUACNO_50A.value && document.MAINFORM.X103_ORDCUACNO_50A.value != "") {
                    alert('The Account number entered is invalid ,please verify .');
                    document.MAINFORM.X103_ORDCUACNO_50A.value = '';
                    return false;
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chck_Credit_AcctNo = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            if (document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER") {
                //Sql_Cond = "C_CUST_ID=" + "'" + document.MAINFORM.X103_BENECU_ID_59A.value + "'" + " AND " + "C_AC_NUMBER=" + "'" + document.MAINFORM.X103_BENECUACNO59A.value + "' AND " + "(C_DBT_CRDT = 'B' OR  C_DBT_CRDT='C') AND " + "C_CURRENCY like '" + document.MAINFORM.CR_CCY.value + "%' ";
                //Field_List = "C_AC_NUMBER";
                //Mapping_List = "C_AC_NUMBER";
                SYS_GetTableDataByRule_S('SYF_PYMT_InternalTrf_SYF_PYMT_Chck_Credit_AcctNo_2', '1', 'Sett_AccNo_Succ', 'false');
                if (document.MAINFORM.C_AC_NUMBER.value != document.MAINFORM.X103_BENECUACNO59A.value && document.MAINFORM.X103_BENECUACNO59A.value != "") {
                    alert('The Account number entered is invalid ,please verify .');
                    document.MAINFORM.X103_BENECUACNO59A.value = '';
                    return false;
                }
            } else {
                //Sql_Cond1 = "C_ACCT_WITH_ID=" + "'" + document.MAINFORM.X103_BENECU_ID_59A.value + "'" + " AND " + "C_ACCT_NR=" + "'" + document.MAINFORM.X103_BENECUACNO59A.value + "'";
                //Field_List1 = "C_ACCT_NR";
                //Mapping_List1 = "C_ACCT_NR";
                SYS_GetTableDataByRule_S('SYF_PYMT_InternalTrf_SYF_PYMT_Chck_Credit_AcctNo_3', '1', 'Sett_AccNo_Succ', 'false');
                if (document.MAINFORM.C_ACCT_NR.value != document.MAINFORM.X103_BENECUACNO59A.value && document.MAINFORM.X103_BENECUACNO59A.value != "") {
                    alert('The Account number entered is invalid ,please verify .');
                    document.MAINFORM.X103_BENECUACNO59A.value = '';
                    return false;
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_GetFrontOfficeCode = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        //Sql_Cond = "C_MAIN_REF = '" + document.MAINFORM.X103_ORDCU_ID_50A.value + "' AND " + "CNTY_CODE = '" + SYS_BANK_COUNTRY + "' ";


        //Field_List = "FRONT_OFFICE_CODE";
        //Mapping_List = "FRONT_OFFICE_CODE";
        SYS_GetTableDataByRule('SYF_PYMT_InternalTrf_SYF_PYMT_GetFrontOfficeCode_4', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ProtbBeneCust = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_RES, "M");
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Chg_CashInd = function() {
    try {

        if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.CHG_CASH_IND.value = 'Yes';
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.CHG_GETAC_BTN);
        } else {
            if (document.MAINFORM.CHG_CASH_IND.value == 'Yes') {
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYM_PYMT_clsdisableField(document.MAINFORM.CHG_GETAC_BTN);
            } else {
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
                SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN);
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_callgapi = function() {
    try {

        var callgapi; // Utility Auto Fix Comments
        callgapi = false;

        if (document.MAINFORM.CHG_CASH_IND.value == 'Yes' && document.MAINFORM.DB_CASH_IND.value == 'Yes') {
            callgapi = false;
        } else {
            callgapi = true;
        }

        if (document.MAINFORM.OVRIDE.value == 'Yes') {
            callgapi = false;
        }

        if (document.MAINFORM.CHG_CASH_IND.value == 'No' && parseInt(Chg.Screen.getLocalPayChgTotalAmt(), 0) > 0) {
            callgapi = true;
        }

        if (callgapi) {
            if (document.MAINFORM.APP_TYPE.value != "BANK") {
                SYS_InqGapi_S('BalanceCheck'); //SYS_InqGapi('BalanceCheck','BalanceCheckSuccess');
                SYF_PYMT_BalanceCheckSuccess();
                if (document.MAINFORM.BALANCECHECK_RESPONSE.value == 'false' || document.MAINFORM.BALANCECHECK_RESPONSE.value == '') {
                    return false;
                }
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_initialize = function() {
    try {

        Int_Acct = new Array();
        Int_Amt = new Array();
        Int_Acct_Ccy = new Array();
        if (document.MAINFORM.INT_ACT1.value == document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value) {
            Int_Amt[0] = SYS_BeFloat(document.MAINFORM.DB_AMT.value) + SYS_BeFloat(Chg.Screen.getLocalChgTotalAmt());
        } else {
            Int_Amt[0] = document.MAINFORM.DB_AMT.value;
        }

        if (document.MAINFORM.DB_CASH_IND.value == 'Yes' || document.MAINFORM.OVRIDE.value == 'Yes') {
            Int_Acct[0] = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value;
            Int_Amt[0] = Chg.Screen.getLocalChgTotalAmt();
            Int_Acct_Ccy[0] = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        } else {
            Int_Acct[0] = document.MAINFORM.X103_ORDCUACNO_50A.value;
            Int_Acct_Ccy[0] = document.MAINFORM.DB_CCY.value;
            Int_Acct[1] = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value;
            Int_Amt[1] = Chg.Screen.getLocalChgTotalAmt();
            Int_Acct_Ccy[1] = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        }

        accountCount = document.MAINFORM.INT_RESPONCECOUNT.value;
        if (parseInt(document.MAINFORM.INT_RESPONCECOUNT.value, 0) > 0) {
            accountCount = document.MAINFORM.INT_RESPONCECOUNT.value;
        } else {
            accountCount = 0;
        }

        document.MAINFORM.INT_AMT6.value = Chg.Screen.getLocalChgTotalAmt();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {

        SYM_PYMT_move_notes_to_history();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_BalanceCheckSuccess = function() {
    try {

        SYM_PYMT_initialize();
        /*
//alert("1");
if(!SYM_PYMT_checkErrorDescription())return false;
//alert("2");
if(!SYF_PYMT_checkAccountNumberSyncAndBalanceNumeric())return false;
//alert("3");
if(!SYF_PYMT_checkAccountStatus()) return false;
//alert("4");
if(!SYF_PYMT_checkAccountCurrenciesSync()) return false;
//alert("5");
if(!SYF_PYMT_checkAccountStyle()) return false;
//alert("6");
if(!SYF_PYMT_checkSufficientFunds()) return false;
//alert("7");
*/
        document.MAINFORM.BALANCECHECK_RESPONSE.value = "true";
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
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
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_checkAccountNumberSyncAndBalanceNumeric = function() {
    try {

        if (accountCount == 1) {
            if (document.MAINFORM.INT_ACT1.value != Int_Acct[0] || isNaN(document.MAINFORM.INT_AMT1.value)) {
                alert("Request for Balance Check Failed");
                document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
                return false;
            }
        } else if (accountCount == 2) {
            if (document.MAINFORM.INT_ACT1.value != Int_Acct[0] || document.MAINFORM.INT_ACT6.value != Int_Acct[1] || isNaN(document.MAINFORM.INT_AMT1.value) || isNaN(document.MAINFORM.INT_AMT6.value)) {
                alert("Request for Balance Check Failed");
                document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
                return false;
            }
        }

        if (accountCount == 0) {
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            return false;
        }

        return true; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_checkSufficientFunds = function() {
    try {

        var Over_indicator; // Utility Auto Fix Comments
        var accountStat; // Utility Auto Fix Comments
        var accountStat1; // Utility Auto Fix Comments
        var accountStat2; // Utility Auto Fix Comments
        var accountStat3; // Utility Auto Fix Comments
        var accountStat4; // Utility Auto Fix Comments
        var accountStat5; // Utility Auto Fix Comments
        var accountStat6; // Utility Auto Fix Comments
        var alertmsg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var val; // Utility Auto Fix Comments
        alertmsg = "";
        accountStat = "";
        accountStat1 = "No";
        accountStat2 = "No";
        accountStat3 = "No";
        accountStat4 = "No";
        accountStat5 = "No";
        accountStat6 = "No";
        Over_indicator = new Array();
        if (accountCount == 1) {
            if (SYS_BeFloat(Int_Amt[0]) < SYS_BeFloat(document.MAINFORM.INT_AMT1.value)) {
                //alertmsg = alertmsg  + "Account " + document.MAINFORM.INT_ACT1.value + " has sufficient Funds, and may not be overdrawn. " + "\n";
                accountStat1 = "No";
            } else {
                if (Over_indicator[0] == 'N') {
                    alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT1.value + " has Insufficient Funds, and may not be overdrawn. " + "\n";
                } else {
                    alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT1.value + " has Insufficient Funds " + "\n";
                }

                accountStat1 = "Yes";
            }
        } else if (accountCount == 2) {
            if (SYS_BeFloat(Int_Amt[0]) < SYS_BeFloat(document.MAINFORM.INT_AMT1.value)) {
                //alertmsg = alertmsg  + "Account " + document.MAINFORM.INT_ACT1.value + " has sufficient Funds, and may not be overdrawn. " + "\n";
                //SYS_setValToRec(0,MUL_FDS_AVAL,"Yes");
                //SYS_setValToRec(0,MUL_OVRIDE,"Yes");
                alert("condiation fine");
                accountStat1 = "No";
            } else {
                if (Over_indicator[0] == 'N') {
                    alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT1.value + " has Insufficient Funds, and may not be overdrawn. " + "\n";
                } else {
                    alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT1.value + " has Insufficient Funds " + "\n";
                }

                //SYS_setValToRec(0,MUL_FDS_AVAL,"Yes");
                //alert("else===");
                accountStat1 = "Yes";
            }

            if (SYS_BeFloat(Int_Amt[1]) < SYS_BeFloat(document.MAINFORM.INT_AMT2.value)) {
                //alertmsg = alertmsg  + "Account " + document.MAINFORM.INT_ACT2.value + " has sufficient Funds, and may not be overdrawn. " + "\n";
                //SYS_setValToRec(1,MUL_FDS_AVAL,"Yes");
                //SYS_setValToRec(1,MUL_OVRIDE,"Yes");
                accountStat2 = "No";
            } else {
                if (Over_indicator[1] == 'N') {
                    alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT2.value + " has Insufficient Funds, and may not be overdrawn. " + "\n";
                } else {
                    alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT2.value + " has Insufficient Funds " + "\n";
                }

                //SYS_setValToRec(1,MUL_FDS_AVAL,"Yes");
                //alert("else===222");
                accountStat2 = "Yes";
            }
        }

        if (accountCount > 0) {
            for (i = 1; i <= accountCount; i++) {
                val = eval('accountStat' + i); // Utility Auto Fix Comments
                if (val == "Yes") {
                    accountStat = "Yes";
                    break;
                } else {
                    accountStat = "No";
                }
            }
        }

        if (accountCount == 0) {
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            return false;
        }

        if (accountStat == "Yes") {
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            alert(alertmsg);
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
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
                alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT1.value + " has Invalid Currency. " + "\n";
                accountStat = "Yes";
            }
        } else if (accountCount == 2) {
            if (document.MAINFORM.INT_ACT1_CCY.value != Int_Acct_Ccy[0]) {
                alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT1.value + " has Invalid Currency. " + "\n";
                accountStat = "Yes";
            }

            if (document.MAINFORM.INT_ACT2_CCY.value != Int_Acct_Ccy[1]) {
                alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT2.value + " has Invalid Currency. " + "\n";
                accountStat = "Yes";
            }
        }

        if (accountCount == 0) {
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            return false;
        }

        if (accountStat == "Yes") {
            alert(alertmsg);
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
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
                alertmsg = "Account " + document.MAINFORM.INT_ACT1.value + " has an Invalid Style. " + "\n";
                accountStat = "Yes";
            }
        } else if (accountCount == 2) {
            if (document.MAINFORM.INT_ACT1_TYPE.value == "N") {
                alertmsg = "Account " + document.MAINFORM.INT_ACT1.value + " has an Invalid Style. " + "\n";
                accountStat = "Yes";
            }
            if (document.MAINFORM.INT_ACT2_TYPE.value == "N") {
                alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT6.value + " has an Invalid Style. " + "\n";
                accountStat = "Yes";
            }
        }

        if (accountCount == 0) {
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            return false;
        }

        if (accountStat == "Yes") {
            alert(alertmsg);
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_trigger_X103_ORDCU_ID_50A_Fail = function() {
    try {

        alert('The Account number entered is invalid ,please verify .');
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
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
                alertmsg = "Account " + document.MAINFORM.INT_ACT1.value + " is not Active. " + "\n";
                accountStat = "Yes";
            }
        } else if (accountCount == 2) {
            if (document.MAINFORM.INT_ACT1_STATUS.value != "Open") {
                alertmsg = "Account " + document.MAINFORM.INT_ACT1.value + " is not Active. " + "\n";
                accountStat = "Yes";
            }
            if (document.MAINFORM.INT_ACT2_STATUS.value != "Open") {
                alertmsg = alertmsg + "Account " + document.MAINFORM.INT_ACT2.value + " is not Active. " + "\n";
                accountStat = "Yes";
            }
        }

        if (accountCount == 0) {
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "false";
            return false;
        }

        if (accountStat == "Yes") {
            alert(alertmsg);
            document.MAINFORM.BALANCECHECK_RESPONSE.value = "true";
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_OrdCustBankAcNo = function() {
    try {

        //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A_BANK', SYM_PYMT_SYS_buildSQLCond(new Array('C_ACCT_WITH_ID', 'X103_ORDCU_ID_50A', 'C_ACCT_NR', 'X103_ORDCUACNO_50A', 'C_ACCT_CCY', 'DB_CCY')));
        SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A_BANK', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_OrdCustAccts = function() {
    try {

        if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.DB_CASH_IND.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            document.MAINFORM.CR_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
        } else {
            document.MAINFORM.DB_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "O");
            if (document.MAINFORM.BENE_RECORDER_TYPE.value != 'NonCustomer' && document.MAINFORM.CR_CASH_IND.value == 'No') {
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "O");
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            }
            document.MAINFORM.CHG_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
        }
        SYF_PYMT_Calc_Charges();
        if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
            document.MAINFORM.FIELD_6_X.value = 'D';
            SYS_GetDataBySSS('PYMT_X103_ORDCU_ID_50A_CHKMORE_TRX', 'X103_ORDCU_ID_50A;DB_CCY;FIELD_6_X', 'SYM_PYMT_showAccounts');
        } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.FIELD_6_X.value = 'D';
            SYS_GetDataBySSS('X103_ORDCU_ID_50A_NONCUSTCHKMORE', 'X103_ORDCU_ID_50A;DB_CCY;FIELD_6_X', '');
            document.MAINFORM.X103_ORDCUACNO_50A.value = "Not Applicable";
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.button1); // Utility Auto Fix Comments
        }
        SYF_PYMT_Set_Chg_CashInd();
        SYF_PYMT_Set_CovNumProp();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_CustomerPayCurrency = function() {
    try {

        if (document.MAINFORM.CHG_CASH_IND.value == 'Yes') {
            //document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value="";
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";

            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.CHG_GETAC_BTN);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_trigger_X103_BENECU_ID_59A_Fail = function() {
    try {

        alert('The Account number entered is invalid ,please verify .');
        document.MAINFORM.X103_BENECUACNO59A.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_BeneBankAcNo = function() {
    try {

        SYS_InqCUBK_Sql('X103_BENECUACNO59A_BANK', SYM_PYMT_SYS_buildSQLCond(new Array('C_ACCT_WITH_ID', 'X103_BENECU_ID_59A', 'C_ACCT_NR', 'X103_BENECUACNO59A', 'C_ACCT_CCY', 'CR_CCY')));
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_getBenAccounts = function() {
    try {

        SYS_GetDataBySSS('PYMT_X103_BENECU_ID_59A_CHKMORE_TRX', 'X103_BENECU_ID_59A', 'SYF_PYMT_showBenAccounts');
        SYF_PYMT_ProtbBeneCust();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_PYMTChgCallBack = function() {
    try {

        SYF_PYMT_CustomerPayCurrency();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_setBothAmtsToZero = function() {
    try {

        document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
        document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0.00);
        document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
        document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0.00);
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_RateType = function() {
    try {

        document.MAINFORM.RATE_TYPE.value = "";

        if (document.MAINFORM.DB_CCY.value != SYS_LOCAL_CCY && document.MAINFORM.CR_CCY.value == SYS_LOCAL_CCY) {
            document.MAINFORM.RATE_TYPE.value = "TT Buying";
        } else if (document.MAINFORM.DB_CCY.value != SYS_LOCAL_CCY && (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO")) {
            document.MAINFORM.RATE_TYPE.value = "TT Buying";
        } else if (document.MAINFORM.DB_CCY.value == SYS_LOCAL_CCY && document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
            document.MAINFORM.RATE_TYPE.value = "TT Selling";
        } else if (document.MAINFORM.DB_CCY.value != SYS_LOCAL_CCY && (document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO")) {
            document.MAINFORM.RATE_TYPE.value = "TT Selling";
        } else if (document.MAINFORM.DB_CCY.value != SYS_LOCAL_CCY && document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
            document.MAINFORM.RATE_TYPE.value = "TT Selling";
        } else {
            document.MAINFORM.RATE_TYPE.value = "TT Buying";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_CovNumProp = function() {
    try {

        SYF_PYMT_Set_RateType();

        SYF_PYMT_Get_DrtDealInd();
        SYT_Check_Cov_Limit(document.MAINFORM.DRT_DEAL_IND, document.MAINFORM.CR_AMT, document.MAINFORM.CR_CCY, document.MAINFORM.DB_AMT, document.MAINFORM.DB_CCY);
        if (document.MAINFORM.CR_CCY.value != document.MAINFORM.DB_CCY.value) {
            if (document.MAINFORM.DRT_DEAL_IND.value == 'Yes' && (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0 || SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0)) {
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                document.MAINFORM.COV_NO.value = "";
            } else {
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                document.MAINFORM.COV_NO.value = "";
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_EXCH_RT_36, "P");
            document.MAINFORM.COV_NO.value = "";
            document.MAINFORM.X103_EXCH_RT_36.value = 1;
        }
        if (document.MAINFORM.X103_EXCH_RT_36.value == "") {
            SYF_PYMT_Set_ExchRateProp();
        }

        SYF_PYMT_SetCashIndicators();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'INTERNAL_TRANSFER';
        document.MAINFORM.NXT_STATUS.value = 'INTERNAL_TRANSFER_RELEASE';
        document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
        document.MAINFORM.CPYT_DR_VAL_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.CHG_VALUE_DATE.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_setRefNo = function(sRef) {
    try {

        SYT_Format_Ref(sRef);
        document.MAINFORM.C_MAIN_REF.value = "AT" + document.MAINFORM.C_MAIN_REF.value.substring(2);
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var gapi_ind;
        SYT_Set_ExchRate_TrxChargeDO();
        if (document.MAINFORM.RECORDER_TYPE.value == "Customer") {
            if (document.MAINFORM.DB_CASH_IND.value != "Yes") {
                SYF_PYMT_Chck_Debit_AcctNo();
            }
        }
        if (document.MAINFORM.BENE_RECORDER_TYPE.value == "Customer") {
            if (document.MAINFORM.CR_CASH_IND.value != "Yes") {
                SYF_PYMT_Chck_Credit_AcctNo();
            }
        }
        if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer' && document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer') {
            alert("Both Debit Customer and Credit Customer cannot be NonCustomer , please verify ");
            return false;
        }
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) == 0 && SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) == 0) {
            alert("To confirm a transaction, You have to enter either debit or credit amount");
            return false;
        }
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "" && document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            if (document.MAINFORM.X103_ORDCUACNO_50A.value == document.MAINFORM.X103_BENECUACNO59A.value) {
                alert("The Beneficiary Customer's Account should be different from Applicant Account");
                document.MAINFORM.X103_BENECUACNO59A.value = "";
                return false;
            }
        }
        if (document.MAINFORM.OVRIDE.value == "No" && document.MAINFORM.FDS_AVAL.value == "No") {
            alert('Insufficient funds. Please contact the relationship manager');
            return false;
        } else {
            return true;
        }
        if (document.MAINFORM.CHG_CASH_IND.value == "Yes") {
            SYS_GetTableDataByRule_S('SYF_PYMT_InternalTrf_ConfirmBusinessCheck_5', '1', true);
        }
        if (document.MAINFORM.DB_CASH_IND.value == "Yes") {
            SYS_GetTableDataByRule_S('SYF_PYMT_InternalTrf_ConfirmBusinessCheck_6', '1', true);
        } else if (document.MAINFORM.CR_CASH_IND.value == "Yes") {
            SYS_GetTableDataByRule_S('SYF_PYMT_InternalTrf_ConfirmBusinessCheck_7', '1', true);
        }
        if (document.MAINFORM.CHG_CASH_IND.value != 'Yes') {
            document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + ";";
            document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + Chg.Screen.getLocalPayChgTotalAmt() + ";";
            document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + ";";
            document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + document.MAINFORM.CHG_CASH_IND.value + ";";
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + document.MAINFORM.CHG_OVERRIDE_IND.value + ";";
            document.MAINFORM.CPYT_DR_AC_TYPE.value = document.MAINFORM.CPYT_DR_AC_TYPE.value + "CUSTOMER" + ";";
            document.MAINFORM.C_AC_IDENTIFIER.value = document.MAINFORM.C_AC_IDENTIFIER.value + "undefined" + ";";
        } else {
            document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + "undefined" + ";";
            document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + "undefined" + ";";
            document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + "undefined" + ";";
            document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + "undefined" + ";";
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + "undefined" + ";";
            document.MAINFORM.C_AC_IDENTIFIER.value = document.MAINFORM.C_AC_IDENTIFIER.value + "undefined" + ";";
        }
        document.MAINFORM.INT_ACCOUNTCOUNT.value = 2;
        if (SYS_FUNCTION_TYPE != 'EC') {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES) + 1;
        } else {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES);
        }
        document.MAINFORM.INT_C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;
        gapi_ind = "";
        if (document.MAINFORM.DB_CASH_IND.value == 'Yes') {
            callgapi = true;
        } else {
            callgapi = false;
        }
        if (document.MAINFORM.OVRIDE.value == 'Yes') {
            callgapi = true;
        }
        if (document.MAINFORM.CHG_OVERRIDE_IND.value == 'No' && document.MAINFORM.CHG_CASH_IND.value == 'No' && parseInt(Chg.Screen.getLocalPayChgTotalAmt(), 0) > 0) {
            callgapi = false;
        }
        if (document.MAINFORM.DB_CCY.value != document.MAINFORM.CR_CCY.value && document.MAINFORM.CHANNEL.value != "NBOL" && document.MAINFORM.CHANNEL.value != "NBOL MULTI" && document.MAINFORM.CHANNEL.value != "MT101" && document.MAINFORM.CHANNEL.value != "MT101 MULTI") {
            if (document.MAINFORM.MD_I.value == '') {
                alert("Exchange rate not loaded");
                return false;
            }
        }
        document.MAINFORM.GAPI_IND_FLG.value = callgapi;
        SYT_Set_Int_Flds_CustId();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_showBenAccounts = function() {
    try {

        if (document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.X103_BENECUACNO59A.value = document.MAINFORM.X103_BENECU_ID_59A.value;
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.button2);
        } else {
            SYS_InqCUBK_byCondition('X103_BENECUACNO59A', '1');
        }
        if (document.MAINFORM.X103_ORDCU_ID_50A.value == "") {
            if (document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer') {
                document.MAINFORM.CR_CASH_IND.value = 'Yes';
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
                document.MAINFORM.DB_CASH_IND.value = 'No';
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            } else {
                document.MAINFORM.CR_CASH_IND.value = 'No';
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "O");
                document.MAINFORM.DB_CASH_IND.value = 'No';
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "O");
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_HideChrgPaidByRow = function() {
    try {

        EEHtml.getElementById('LBL_VAL_DT').innerText = "";
        EEHtml.getElementById('CHG_VALUE_DATE').style.display = "none";
        EEHtml.getElementById('imgDrawDown_X103_VALUE_DT_32A').style.display = "none";
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SetCashIndicators = function(updateValues) {
    try {

        if (document.MAINFORM.APP_TYPE.value == "CUSTOMER" && document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER") {
            if (document.MAINFORM.X103_ORDCU_ID_50A.value != "" && document.MAINFORM.RECORDER_TYPE.value == "NonCustomer") {
                if (updateValues == true) {
                    document.MAINFORM.CR_CASH_IND.value = "No";
                    document.MAINFORM.DB_CASH_IND.value = "Yes";
                }
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
            } else if (document.MAINFORM.X103_BENECU_ID_59A.value != "" && document.MAINFORM.BENE_RECORDER_TYPE.value == "NonCustomer") {
                if (updateValues == true) {
                    document.MAINFORM.CR_CASH_IND.value = "Yes";
                    document.MAINFORM.DB_CASH_IND.value = "No";
                }
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
            } else {
                if (updateValues == true) {
                    SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "O");
                    SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "O");
                    if (document.MAINFORM.X103_BENECUACNO59A.value != "Not Applicable") {
                        document.MAINFORM.CR_CASH_IND.value = "No";
                    }
                    if (document.MAINFORM.X103_ORDCUACNO_50A.value != "Not Applicable") {
                        document.MAINFORM.DB_CASH_IND.value = "No";
                    }
                }
            }
        } else if (document.MAINFORM.APP_TYPE.value == "CUSTOMER" && (document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO")) {
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
            if (updateValues == true) {
                document.MAINFORM.CR_CASH_IND.value = "No";
            }
            if (document.MAINFORM.X103_ORDCU_ID_50A.value != "" && document.MAINFORM.RECORDER_TYPE.value == "NonCustomer") {
                if (updateValues == true) {
                    document.MAINFORM.DB_CASH_IND.value = "Yes";
                }
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "O");
                if (updateValues == true) {
                    if (document.MAINFORM.X103_ORDCUACNO_50A.value != "Not Applicable") {
                        document.MAINFORM.DB_CASH_IND.value = "No";
                    }
                }
            }
        } else if (document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER" && (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO")) {
            if (updateValues == true) {
                document.MAINFORM.DB_CASH_IND.value = "No";
            }
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            if (document.MAINFORM.X103_BENECU_ID_59A.value != "" && document.MAINFORM.BENE_RECORDER_TYPE.value == "NonCustomer") {
                if (updateValues == true) {
                    document.MAINFORM.CR_CASH_IND.value = "Yes";
                }
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "O");
                if (updateValues == true) {
                    if (document.MAINFORM.X103_BENECUACNO59A.value != "Not Applicable") {
                        document.MAINFORM.CR_CASH_IND.value = "No";
                    }
                }
            }
        } else if ((document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO") && (document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO")) {
            if (updateValues == true) {
                document.MAINFORM.CR_CASH_IND.value = "No";
                document.MAINFORM.DB_CASH_IND.value = "No";
            }
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Ben_Cust = function() {
    try {

        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            alert('The Customer Id entered is invalid ,please verify .');
        }
        document.MAINFORM.X103_BENECU_ID_59A.value = "";
        document.MAINFORM.X103_BENECU_NM_59A.value = "";
        document.MAINFORM.X103BENECUADD1_59A.value = "";
        document.MAINFORM.X103BENECUADD2_59A.value = "";
        document.MAINFORM.X103BENECUADD3_59A.value = "";
        document.MAINFORM.X103_BENECUACNO59A.value = "";
        document.MAINFORM.BENE_CNTY_RES.value = "";
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "M");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "M");
        if (document.MAINFORM.CHANNEL.value == "NBOL" || document.MAINFORM.CHANNEL.value == "NBOL MULTI" || document.MAINFORM.CHANNEL.value == "MT101" || document.MAINFORM.CHANNEL.value == "MT101 MULTI") {
            SYM_PYMT_clsdisableField(document.MAINFORM.button2);
        } else {
            SYM_PYMT_enableField(document.MAINFORM.button2);
        }
        SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_RES, "M");

        SYF_PYMT_SetCashIndicators(true);
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Calc_Charges = function() {
    try {

        if (document.MAINFORM.CR_CALC_AMT.value == 0) {
            Chg.calculate(['PYMT_COMM', 'INW_PYT_COMM', 'DI_PYFEE', 'SWIFT_INT', 'STP_FAIL', 'FND_WD'], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            SYT_Audit_Update_Charges();
        } else {
            Chg.calculate(['PYMT_COMM', 'INW_PYT_COMM', 'DI_PYFEE', 'SWIFT_INT', 'STP_FAIL', 'FND_WD'], document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            SYT_Audit_Update_Charges();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Appl = function() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value == "") {
            document.MAINFORM.X103_ORDCU_ID_50A.value = "";
            document.MAINFORM.X103_ORDCU_NM_50A.value = "";
            document.MAINFORM.X103_ORDCUADD1_50A.value = "";
            document.MAINFORM.X103_ORDCUADD2_50A.value = "";
            document.MAINFORM.X103_ORDCUADD3_50A.value = "";
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
            document.MAINFORM.APPL_CNTY_RES.value = "";
            return;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_FailData = function() {
    try {

        document.MAINFORM.INT_ACT1.value = "";
        document.MAINFORM.INT_ACT2.value = "";
        document.MAINFORM.INT_ACT3.value = "";
        document.MAINFORM.INT_ACT4.value = "";
        document.MAINFORM.INT_ACT5.value = "";
        document.MAINFORM.INT_ACT6.value = "";
        document.MAINFORM.INT_ACT1_STATUS.value = "";
        document.MAINFORM.INT_ACT2_STATUS.value = "";
        document.MAINFORM.INT_ACT3_STATUS.value = "";
        document.MAINFORM.INT_ACT4_STATUS.value = "";
        document.MAINFORM.INT_ACT5_STATUS.value = "";
        document.MAINFORM.INT_ACT6_STATUS.value = "";
        document.MAINFORM.INT_ACT1_CCY.value = "";
        document.MAINFORM.INT_ACT2_CCY.value = "";
        document.MAINFORM.INT_ACT3_CCY.value = "";
        document.MAINFORM.INT_ACT4_CCY.value = "";
        document.MAINFORM.INT_ACT5_CCY.value = "";
        document.MAINFORM.INT_ACT6_CCY.value = "";
        document.MAINFORM.INT_ACT1_TYPE.value = "";
        document.MAINFORM.INT_ACT2_TYPE.value = "";
        document.MAINFORM.INT_ACT3_TYPE.value = "";
        document.MAINFORM.INT_ACT4_TYPE.value = "";
        document.MAINFORM.INT_ACT5_TYPE.value = "";
        document.MAINFORM.INT_ACT6_TYPE.value = "";
        document.MAINFORM.INT_AMT1.value = "";
        document.MAINFORM.INT_AMT2.value = "";
        document.MAINFORM.INT_AMT3.value = "";
        document.MAINFORM.INT_AMT4.value = "";
        document.MAINFORM.INT_AMT5.value = "";
        document.MAINFORM.INT_AMT6.value = "";
        document.MAINFORM.INT_CASH_IND1.value = "";
        document.MAINFORM.INT_CASH_IND2.value = "";
        document.MAINFORM.INT_CASH_IND3.value = "";
        document.MAINFORM.INT_CASH_IND4.value = "";
        document.MAINFORM.INT_CASH_IND5.value = "";
        document.MAINFORM.INT_CASH_IND6.value = "";
        document.MAINFORM.INT_OVERRIDE_IND1.value = "";
        document.MAINFORM.INT_OVERRIDE_IND2.value = "";
        document.MAINFORM.INT_OVERRIDE_IND3.value = "";
        document.MAINFORM.INT_OVERRIDE_IND4.value = "";
        document.MAINFORM.INT_OVERRIDE_IND5.value = "";
        document.MAINFORM.INT_RESPONSE.value = ""; // Utility Auto Fix Comments
        accountCount = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_BalanceCheck_init = function() {
    try {

        SYF_PYMT_Clr_FailData(); // Utility Auto Fix Comments
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
        } else {
            document.MAINFORM.INT_ACT6.value = undefined;
            document.MAINFORM.INT_AMT6.value = undefined;
            document.MAINFORM.INT_ACT6_CCY.value = undefined;
            document.MAINFORM.INT_CASH_IND6.value = undefined;
            document.MAINFORM.INT_ACCOUNTCOUNT.value = 1;
        }
        if (document.MAINFORM.DB_CASH_IND.value != "Yes" && document.MAINFORM.OVRIDE.value != "Yes") {
            if (document.MAINFORM.X103_BENECUACNO59A.value != "") {
                document.MAINFORM.INT_ACT1.value = document.MAINFORM.X103_ORDCUACNO_50A.value;
                document.MAINFORM.INT_AMT1.value = document.MAINFORM.DB_AMT.value;
                document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.DB_CCY.value;
                document.MAINFORM.INT_ACCOUNTCOUNT.value = 1;
            }
        }
        if (document.MAINFORM.CHG_CASH_IND.value != 'Yes' && document.MAINFORM.DB_CASH_IND.value != "Yes") {
            if (document.MAINFORM.INT_ACT1.value == document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value) {
                document.MAINFORM.INT_ACT6.value = undefined;
                document.MAINFORM.INT_AMT6.value = undefined;
                document.MAINFORM.INT_ACT6_CCY.value = undefined;
                document.MAINFORM.INT_CASH_IND6.value = undefined;
                document.MAINFORM.INT_ACCOUNTCOUNT.value = 1;
            } else {
                document.MAINFORM.INT_ACCOUNTCOUNT.value = 2;
            }
        }

        if (SYS_FUNCTION_TYPE != 'EC') {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES) + 1;
        } else {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES);
        }

        document.MAINFORM.C_MODULE.value = SYS_MODULE_NAME;
        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_DrtDealInd = function() {
    try {

        document.MAINFORM.DRT_DEAL_IND.value = "";
        if (document.MAINFORM.APP_TYPE.value == "CUSTOMER" && document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            SYS_GetTableDataByRule_S('SYF_PYMT_InternalTrf_SYF_PYMT_Get_DrtDealInd_8', '1', 'Sett_AccNo_Succ', 'false');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_RateType_Chrgs = function() {
    try {

        if (document.MAINFORM.DB_CCY.value != SYS_LOCAL_CCY && document.MAINFORM.CR_CCY.value == SYS_LOCAL_CCY) {
            Chg.init('TT Buying', 'TT Buying', 'TT Buying', 'TT Buying');
        } else if (document.MAINFORM.DB_CCY.value != SYS_LOCAL_CCY && (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO")) {
            Chg.init('TT Buying', 'TT Buying', 'TT Buying', 'TT Buying');
        } else if (document.MAINFORM.DB_CCY.value == SYS_LOCAL_CCY && document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
            Chg.init('TT Selling', 'TT Selling', 'TT Selling', 'TT Selling');
        } else if (document.MAINFORM.DB_CCY.value != SYS_LOCAL_CCY && (document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO")) {
            Chg.init('TT Selling', 'TT Selling', 'TT Selling', 'TT Selling');
        } else if (document.MAINFORM.DB_CCY.value != SYS_LOCAL_CCY && document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
            Chg.init('TT Selling', 'TT Selling', 'TT Selling', 'TT Selling');
        } else {
            Chg.init('TT Buying', 'TT Buying', 'TT Buying', 'TT Buying');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CR_CALC_AMT = function() {
    try {

        var sCrCalAmt; // Utility Auto Fix Comments
        if (SYS_BeInt(document.MAINFORM.CR_CALC_AMT.value) >= 1000000000000000) {
            alert("The entered amount is too big, please correct it.");
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
            document.MAINFORM.CR_CALC_AMT.focus();
            return;
        }
        sCrCalAmt = SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value);
        if (sCrCalAmt > 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.CR_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);

            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0);
            if (document.MAINFORM.MD_I.value == 'M') {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else if (document.MAINFORM.MD_I.value == 'D') {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }
            if (document.MAINFORM.DB_CCY.value != document.MAINFORM.CR_CCY.value) {
                if (document.MAINFORM.MD_I.value == '') {
                    //alert("Exchange rate not loaded");
                    return;
                }
            }
        } else {
            SYF_PYMT_setBothAmtsToZero();
        }
        if (sCrCalAmt > 0 && document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            SYF_PYMT_Calc_Charges();
        }
        SYF_PYMT_Set_CovNumProp();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var covno; // Utility Auto Fix Comments
        var holdCRAmt; // Utility Auto Fix Comments
        var holdCRCalcAmt; // Utility Auto Fix Comments
        var holdDBAmt; // Utility Auto Fix Comments
        var holdDBCalcAmt; // Utility Auto Fix Comments
        var holdRate; // Utility Auto Fix Comments
        var holdcurrtemp; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var objFldCollectAmt; // Utility Auto Fix Comments
        var res; // Utility Auto Fix Comments
        var sResult; // Utility Auto Fix Comments
        covno = "";

        SYF_PYMT_Set_RateType();

        if (SYS_FUNCTION_TYPE != "IQ") {
            if (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO") {
                if (document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER") {
                    Chg.Screen.mapLocalCust("X103_BENECU_ID_59A", "X103_BENECU_NM_59A");
                } else {
                    Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
                }
            } else {
                Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
            }
        }

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYF_PYMT_Set_RateType_Chrgs();
            if (SYS_FUNCTION_TYPE != 'EC') {
                SYF_PYMT_Calc_Charges();
                SYT_getExchangeRate_Settl(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.CR_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
                    SYF_PYMT_Chg_CR_CALC_AMT();
                } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
                    SYF_PYMT_Chg_DB_CALC_AMT();
                }
            }
        }

        if (SYS_FUNCTION_TYPE == "EC" || SYS_BANK_COUNTRY != "ZA") {
            SYT_ChangeFldClass(document.MAINFORM.EXTERNAL_REF, "P");
        }

        if (SYS_BANK_COUNTRY == "ZA") {
            SYF_PYMT_GetFrontOfficeCode();
        }

        if ((SYS_FUNCTION_NAME == "Cancel_InternalTransfers" && SYS_FUNCTION_TYPE == "EC") || (document.MAINFORM.CANCEL_FLG.value == "Yes" && SYS_FUNCTION_TYPE == "RE")) {
            SYT_Cancel_Init();
            return;
        } else {
            document.MAINFORM.CANCEL_FLG.value = "No";
        }


        //SYF_PYMT_HideChrgPaidByRow();

        if (SYS_FUNCTION_TYPE != "IQ") {
            Chg.attchEvent(SYF_PYMT_Set_Chg_CashInd); //commented by sathish
            SYT_Chgs_Without_Deferred_Terms();
        }

        if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
            SYM_PYMT_Chg_X103_VALUE_DT_32A();
            if (document.MAINFORM.DB_CASH_IND.value == 'Yes') {
                SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
                SYM_PYMT_clsdisableField(document.MAINFORM.button1);
                document.MAINFORM.CR_CASH_IND.value = 'No';
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
            } else if (document.MAINFORM.CR_CASH_IND.value == 'Yes') {
                SYM_PYMT_clsdisableField(document.MAINFORM.button2);
                SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
                document.MAINFORM.DB_CASH_IND.value = 'No';
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            }

            if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
                document.MAINFORM.DB_CASH_IND.value = 'Yes';
                document.MAINFORM.CR_CASH_IND.value = 'No';
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
                SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_RES, "P");
                //document.MAINFORM.APPL_CNTY_RES
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
                SYT_ChangeFldClass(document.MAINFORM.APPL_CNTY_RES, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            }

            if (document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer') {
                document.MAINFORM.CR_CASH_IND.value = 'Yes';
                //document.MAINFORM.APPL_CNTY_RES
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
                SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_RES, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
            }

            if (document.MAINFORM.FDS_AVAL.value == 'Yes') {
                SYT_ChangeFldClass(document.MAINFORM.OVRIDE, "P");
            }

            //document.MAINFORM.BENE_AC_TYPE.value="CUSTOMER"	;
            if (document.MAINFORM.COV_NO.value != "") {
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
            }

            SYF_PYMT_SetCashIndicators(false);
        }

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_predoc", "_transaction");
            Chg.attchEvent(SYF_PYMT_PYMTChgCallBack);
        }

        if (SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = "3";
            CHG_allTrxChargeAt_onchange();
        } else if (SYS_FUNCTION_TYPE == 'EC') {

            // Make the field in charges tab protected
            objFldCollectAmt = EEHtml.getElementById("CHG_FLD_COLLECT_AMT_1");
            j = 1;

            while (objFldCollectAmt != null) {
                objFldCollectAmt.className = "AMT_P";

                j++;
                objFldCollectAmt = EEHtml.getElementById("CHG_FLD_COLLECT_AMT_" + j);
            }
        }

        if (document.MAINFORM.DB_CALC_AMT.value != "0.00" && document.MAINFORM.CR_CALC_AMT.value == "0.00") {
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, "P");
        } else if (document.MAINFORM.DB_CALC_AMT.value == "0.00" && document.MAINFORM.CR_CALC_AMT.value != "0.00") {
            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, "P");
        }

        if (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO") {
            document.MAINFORM.CHG_OVERRIDE_IND.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.CHG_OVERRIDE_IND, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CHG_OVERRIDE_IND, "O");
        }

        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            SYF_PYMT_ProtOrdCust();
        }

        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            SYF_PYMT_ProtbBeneCust();
        }

        if (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO") {
            document.MAINFORM.DB_CASH_IND.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            SYT_ChangeFldClass(document.MAINFORM.DB_BANK_REF, "M");
        }

        if (document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO") {
            document.MAINFORM.CR_CASH_IND.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
            SYT_ChangeFldClass(document.MAINFORM.CR_BANK_REF, "M");
        }

        if (document.MAINFORM.COV_NO.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.X103_EXCH_RT_36, "M");
        }

        if (SYS_FUNCTION_TYPE != 'RE') {
            if (document.MAINFORM.CHG_CASH_IND.value == 'Yes') {
                //document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value="";
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYT_disableField(document.MAINFORM.CHG_GETAC_BTN);

            } else if (document.MAINFORM.CHG_CASH_IND.value == 'No') {
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
                SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN);
            }
        }

        if (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO") {
            if (document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO") {
                //document.MAINFORM.CHG_CASH_IND.value = "No";
                if (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO") {
                    document.MAINFORM.CHG_CASH_IND.value = "Yes";
                } else {
                    document.MAINFORM.CHG_CASH_IND.value = "No";
                }

                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");

                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYT_disableField(document.MAINFORM.CHG_GETAC_BTN);
            }
        }

        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "O");

        if (document.MAINFORM.RECORDER_TYPE.value == "NonCustomer") {
            document.MAINFORM.CHG_OVERRIDE_IND.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.CHG_OVERRIDE_IND, "P");
        }

        SYT_ConfigureHelpLink();

        if (SYS_FUNCTION_TYPE == 'RE') {
            res = SYM_PYMT_Chk_ValDt_Rel();
            if (res == false) {
                SYT_restrictRelease();
            } else {
                if (res == undefined) {
                    if (document.MAINFORM.X103_VALUE_DT_32A.value == "") {
                        SYT_restrictRelease();
                    }
                }
                sResult = SYM_PYMT_Chk_ValueDate_CutOffTime();
                if (sResult == false) {
                    SYT_restrictRelease();
                }
            }
        }

        if (SYS_FUNCTION_TYPE != "IQ") {
            if (document.MAINFORM.AUTO_CREATED.value == "Yes") {


                // kosheik start
                holdcurrtemp = document.MAINFORM.DB_CCY.value;

                FLD_PYMT_X103_ORDCUACNO_50A_onchange();
                FLD_PYMT_X103_BENECUACNO59A_onchange();
                if (document.MAINFORM.DB_CASH_IND.value == "Yes") {
                    FLD_PYMT_DB_CASH_IND_onchange();
                }
                if (document.MAINFORM.CR_CASH_IND.value == "Yes") {
                    FLD_PYMT_CR_CASH_IND_onchange();
                }
                FLD_PYMT_X103_VALUE_DT_32A_onchange();
                CHG_allTrxChargeAt_onchange();

                if (covno != "") {
                    document.MAINFORM.COV_NO.value = covno;
                }
                document.MAINFORM.DB_CCY.value = holdcurrtemp;

            } else {
                FLD_PYMT_X103_VALUE_DT_32A_onchange();
            }
        }

        document.MAINFORM.AUTO_CREATED.value = "No";

        if (document.MAINFORM.CHANNEL.value == "NBOL" || document.MAINFORM.CHANNEL.value == "NBOL MULTI" || document.MAINFORM.CHANNEL.value == "MT101" || document.MAINFORM.CHANNEL.value == "MT101 MULTI") {
            if (document.MAINFORM.COV_NO.value != "") {
                covno = document.MAINFORM.COV_NO.value;
            }

            SYT_ChangeFldClass(document.MAINFORM.CR_CCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DB_CCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.RELATED_REF_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHANNEL, "P");
            SYT_ChangeFldClass(document.MAINFORM.CUST_REF, "P");
            SYT_ChangeFldClass(document.MAINFORM.APP_TYPE, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD1_50A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD2_50A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD3_50A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_ID_50A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, "P");
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
            //SYT_ChangeFldClass(document.MAINFORM.FDS_AVAL,"P");
            //SYT_ChangeFldClass(document.MAINFORM.COV_NO,"P");
            //SYT_ChangeFldClass(document.MAINFORM.X103_EXCH_RT_36,"P");
            SYT_ChangeFldClass(document.MAINFORM.BENE_AC_TYPE, "P");
            SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_RES, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_ID_59A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_SW_59A, "P");
            //SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND,"P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.button2);
            SYM_PYMT_clsdisableField(document.MAINFORM.button);
            SYM_PYMT_clsdisableField(document.MAINFORM.Ord_Cust_lookup);

            //	SYF_PYMT_Set_CovNumProp();

            // kosheik start
            holdRate = document.MAINFORM.X103_EXCH_RT_36.value;

            holdCRAmt = document.MAINFORM.CR_AMT.value;
            holdCRCalcAmt = document.MAINFORM.CR_CALC_AMT.value;
            holdDBAmt = document.MAINFORM.DB_AMT.value;
            holdDBCalcAmt = document.MAINFORM.DB_CALC_AMT.value;

            if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
                SYT_getExchangeRate_Settl(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, document.MAINFORM.RATE_TYPE.value,
                    document.MAINFORM.CR_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I,
                    document.MAINFORM.COV_NO);
            } else {
                SYT_getExchangeRate_Settl(document.MAINFORM.DB_CCY, document.MAINFORM.CR_CCY, document.MAINFORM.RATE_TYPE.value,
                    document.MAINFORM.DB_AMT, document.MAINFORM.CR_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I,
                    document.MAINFORM.COV_NO);
            }

            document.MAINFORM.X103_EXCH_RT_36.value = holdRate;

            document.MAINFORM.CR_AMT.value = holdCRAmt;
            document.MAINFORM.CR_CALC_AMT.value = holdCRCalcAmt;
            document.MAINFORM.DB_AMT.value = holdDBAmt;
            document.MAINFORM.DB_CALC_AMT.value = holdDBCalcAmt;

            // kosheik end
            document.MAINFORM.CHG_VALUE_DATE.value = SYS_BUSI_DATE;
            FLD_PYMT_X103_EXCH_RT_36_onchange();

            SYF_PYMT_Set_CovNumProp();

            if (covno != "") {
                document.MAINFORM.COV_NO.value = covno;
            }

        }

        //Auto advice printing
        SYT_AdviceAutoPrint(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.X103_ORDCU_ID_50A.value, "AT");

        SYT_Audit_Main();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_Loaded_Chg = function() {
    try {

        var Chg_Obj; // Utility Auto Fix Comments
        var chgActiveAmt; // Utility Auto Fix Comments
        var chgRuleAmt; // Utility Auto Fix Comments
        var comm; // Utility Auto Fix Comments
        var commCodeArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        commCodeArr = Chg.Screen.getAllTrxCharge();

        for (i = 0; i < commCodeArr.length; i++) {
            comm = commCodeArr[i];
            Chg_Obj = Chg.Screen.getTrxChargeByCommCode(comm.getCommCode());
            chgRuleAmt = Chg_Obj.getRuleAmt();
            chgActiveAmt = Chg_Obj.getActiveAmt();

            if (chgRuleAmt != chgActiveAmt) {
                document.MAINFORM.NOTES.value = document.MAINFORM.NOTES.value + "\n Value of " + comm.getCommDesc() + " has been modified from " + chgRuleAmt + " to  " + chgActiveAmt + " on " + SYS_BUSI_DATE + " by the user " + SYS_USER_ID + ".Please Note";
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ProtOrdCust = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD1_50A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD2_50A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD3_50A, "P");
        SYT_ChangeFldClass(document.MAINFORM.APPL_CNTY_RES, "P");
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_ExchRateProp = function() {
    try {

        if (document.MAINFORM.COV_NO.className == "CHAR_M") {
            SYT_ChangeFldClass(document.MAINFORM.X103_EXCH_RT_36, "P");
            document.MAINFORM.X103_EXCH_RT_36.value = "";
            if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
                document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0);
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0);
            } else {
                document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0);
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0);
            }
        } else {
            if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) != 0) {
                SYT_getExchangeRateSB(document.MAINFORM.DB_CCY, document.MAINFORM.CR_CCY, 'TT Buying;TT Buying;TT Buying', document.MAINFORM.DB_CALC_AMT, document.MAINFORM.CR_AMT, document.MAINFORM.X103_EXCH_RT_36);
            } else {
                if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) != 0) {
                    SYT_getExchangeRateSB(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, 'TT Buying;TT Buying;TT Buying', document.MAINFORM.CR_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.X103_EXCH_RT_36);
                }
            }
            SYT_ChangeFldClass(document.MAINFORM.X103_EXCH_RT_36, "P");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        //Chg.init('TT Selling','TT Selling','TT Selling','TT Selling');
        //Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A","X103_ORDCU_NM_50A");

        if ((SYS_FUNCTION_NAME == "Cancel_InternalTransfers" && SYS_FUNCTION_TYPE == "EC") || (document.MAINFORM.CANCEL_FLG.value == "Yes" && SYS_FUNCTION_TYPE == "RE")) {
            //SYT_Cancel_Init()
            return;
        }

        SYS_GetRefNo('AT', 'SYF_PYMT_setRefNo'); // Utility Auto Fix Comments

        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, "M");
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "O");

        if (SYS_FUNCTION_TYPE != "IQ") {
            SYT_Protect_COMM_DESC();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Valid_Date_Fail1 = function() {
    try {

        if (SYS_FUNCTION_TYPE != "RE") {
            document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_DB_CALC_AMT = function() {
    try {

        var sDbCalAmt; // Utility Auto Fix Comments
        if (SYS_BeInt(document.MAINFORM.DB_CALC_AMT.value) >= 1000000000000000) {
            alert("The entered amount is too big, please correct it.");
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
            document.MAINFORM.DB_CALC_AMT.focus();
            return;
        }
        sDbCalAmt = SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value);
        if (sDbCalAmt > 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.DB_CCY, document.MAINFORM.CR_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.CR_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            if (document.MAINFORM.MD_I.value == 'M') {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else if (document.MAINFORM.MD_I.value == 'D') {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }
            if (document.MAINFORM.DB_CCY.value != document.MAINFORM.CR_CCY.value) {
                if (document.MAINFORM.MD_I.value == '') {
                    //alert("Exchange rate not loaded");
                    return;
                }
            }
        } else {

            SYF_PYMT_setBothAmtsToZero();
        }
        if (sDbCalAmt > 0 && document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            SYF_PYMT_Calc_Charges();
        }
        SYF_PYMT_Set_CovNumProp();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Inwd_getAccounts = function() {
    try {

        if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.DB_CASH_IND.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            document.MAINFORM.CR_CASH_IND.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
        } else {
            document.MAINFORM.DB_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "O");
            document.MAINFORM.CR_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "O");
        }

        SYF_PYMT_Calc_Charges();

        if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
            SYS_GetDataBySSS('PYMT_X103_ORDCU_ID_50A_CHKMORE_TRX', 'X103_ORDCU_ID_50A;DB_CCY', 'SYM_PYMT_showAccounts'); // Utility Auto Fix Comments
        } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.button1); // Utility Auto Fix Comments
        }
        SYF_PYMT_Set_Chg_CashInd();
        SYF_PYMT_Set_CovNumProp();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_Ord_Cust = function() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            alert('The Customer Id entered is invalid ,please verify .');
        }

        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        document.MAINFORM.X103_ORDCU_NM_50A.value = "";
        document.MAINFORM.X103_ORDCUADD1_50A.value = "";
        document.MAINFORM.X103_ORDCUADD2_50A.value = "";
        document.MAINFORM.X103_ORDCUADD3_50A.value = "";
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        document.MAINFORM.DRT_DEAL_IND.value = "";
        document.MAINFORM.X103_TAG_50A.value = "";
        document.MAINFORM.CHG_CASH_IND.value = "No";

        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
        SYT_EnableField(document.MAINFORM.CHG_GETAC_BTN);
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, "M");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD1_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD2_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD3_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");

        if (document.MAINFORM.CHANNEL.value == "NBOL" || document.MAINFORM.CHANNEL.value == "NBOL MULTI" || document.MAINFORM.CHANNEL.value == "MT101" || document.MAINFORM.CHANNEL.value == "MT101 MULTI") {
            SYM_PYMT_clsdisableField(document.MAINFORM.button1);
        } else {
            SYM_PYMT_enableField(document.MAINFORM.button1);
        }


        SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
        SYT_ChangeFldClass(document.MAINFORM.APPL_CNTY_RES, "O");

        SYF_PYMT_SetCashIndicators(true);
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_OrCBankAcNo = function() {
    try {

        //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A_BANK', SYM_PYMT_SYS_buildSQLCond(new Array('C_ACCT_WITH_ID', 'X103_ORDCU_ID_50A', 'C_ACCT_NR', 'X103_ORDCUACNO_50A', 'C_ACCT_CCY', 'DB_CCY')));
        SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A_BANK', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_BenCustAccts = function() {
    try {

        document.MAINFORM.FIELD_6_X.value = 'C';
        SYS_GetDataBySSS('PYMT_X103_BENECU_ID_59A_CHKMORE_TRX', 'X103_BENECU_ID_59A;CR_CCY;FIELD_6_X', 'SYF_PYMT_Get_BenCustAccts'); // Utility Auto Fix Comments
        SYF_PYMT_ProtbBeneCust();
        SYF_PYMT_Calc_Charges();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_BenCustAccts = function() {
    try {

        if (document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.X103_BENECUACNO59A.value = "Not Applicable";
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.button2);

            document.MAINFORM.DB_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            document.MAINFORM.CR_CASH_IND.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");

        } else {
            if (document.MAINFORM.BEN_ACCTS.value > 1 && document.MAINFORM.X103_BENECUACNO59A.value == "") {
                //SYS_InqCUBK_Sql('X103_BENECUACNO59A', 'C_CUST_ID= \'<--X103_BENECU_ID_59A-->\' AND  C_CURRENCY=\'<--CR_CCY-->\' AND  (C_DBT_CRDT = \'B\' OR  C_DBT_CRDT=\'C\')');
                SYS_InqCUBK_byCondition('X103_BENECUACNO59A', '1');
            }


        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_BeneBankAcNo = function() {
    try {

        //SYS_InqCUBK_Sql('X103_BENECUACNO59A_BANK', SYM_PYMT_SYS_buildSQLCond(new Array('C_ACCT_WITH_ID', 'X103_BENECU_ID_59A', 'C_ACCT_NR', 'X103_BENECUACNO59A', 'C_ACCT_CCY', 'CR_CCY')));
        SYS_InqCUBK_byCondition('X103_BENECUACNO59A_BANK', '1');
        SYF_PYMT_ProtbBeneCust();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_FDS_AVAL = function() {
    try {

        if (document.MAINFORM.FDS_AVAL.value == "No") {
            if (document.MAINFORM.C_AC_IDENTIFIER.value != 'Y') {
                alert("The account you are trying to use cannot be overdrawn.");
                document.MAINFORM.FDS_AVAL.value = "Yes"; // Utility Auto Fix Comments
            } else {
                SYT_ChangeFldClass(document.MAINFORM.OVRIDE, "M");
                document.MAINFORM.OVRIDE.value = "No";
            }
        } else {
            document.MAINFORM.OVRIDE.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.OVRIDE, "P");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CR_CCY.value;
        document.MAINFORM.X103_SETT_AMT_32A.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
        if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) == 0) {
            document.MAINFORM.X103_INSTR_CCY_33B.value = document.MAINFORM.CR_CCY.value;
            document.MAINFORM.X103_INSTR_AMT_33B.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
        } else if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) == 0) {
            document.MAINFORM.X103_INSTR_CCY_33B.value = document.MAINFORM.DB_CCY.value;
            document.MAINFORM.X103_INSTR_AMT_33B.value = SYS_BeFloat(document.MAINFORM.DB_AMT.value);
        }
        document.MAINFORM.INT_ACT1.value = document.MAINFORM.X103_ORDCUACNO_50A.value + ";";
        document.MAINFORM.INT_AMT1.value = document.MAINFORM.DB_AMT.value.replace(/\,/g, '') + ";";
        document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.DB_CCY.value + ";";
        document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.DB_CASH_IND.value + ";";
        document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.OVRIDE.value + ";";
        document.MAINFORM.CPYT_DR_AC_TYPE.value = document.MAINFORM.APP_TYPE.value + ";";
        document.MAINFORM.C_AC_IDENTIFIER.value = document.MAINFORM.C_AC_IDENTIFIER.value + ";";
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_APP_TYPE_onchange = function(event) {
    try {
        SYF_PYMT_Clr_Ord_Cust();

        if (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO") {
            document.MAINFORM.FDS_AVAL.value = "Yes";
            document.MAINFORM.OVRIDE.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.FDS_AVAL, "P");

            SYT_ChangeFldClass(document.MAINFORM.DB_BANK_REF, "M");

            document.MAINFORM.CHG_OVERRIDE_IND.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.CHG_OVERRIDE_IND, "P");

            if (document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO") {
                document.MAINFORM.CHG_CASH_IND.value = "Yes";
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
                SYT_Cal_ChgAC();

                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");

                SYM_PYMT_disableField(document.MAINFORM.CHG_GETAC_BTN);
            } else {
                Chg.Screen.mapLocalCust("X103_BENECU_ID_59A", "X103_BENECU_NM_59A");
            }
        } else {
            //SYT_ChangeFldClass(document.MAINFORM.FDS_AVAL, "M");

            if (document.MAINFORM.CHANNEL.value == "NBOL" || document.MAINFORM.CHANNEL.value == "NBOL MULTI" || document.MAINFORM.CHANNEL.value == "MT101" || document.MAINFORM.CHANNEL.value == "MT101 MULTI") {
                SYT_ChangeFldClass(document.MAINFORM.FDS_AVAL, "P");
            } else {
                SYT_ChangeFldClass(document.MAINFORM.FDS_AVAL, "M");
            }
            document.MAINFORM.DB_BANK_REF.value = "";
            SYT_ChangeFldClass(document.MAINFORM.DB_BANK_REF, "P");

            SYT_ChangeFldClass(document.MAINFORM.CHG_OVERRIDE_IND, "O");

            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");

            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");

            SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN);

            Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_BENE_AC_TYPE_onchange = function(event) {
    try {
        SYF_PYMT_Clr_Ben_Cust();

        if (document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO") {
            SYT_ChangeFldClass(document.MAINFORM.CR_BANK_REF, "M");

            //document.MAINFORM.CR_CASH_IND.value = "No";
            //SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");

            if (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO") {
                document.MAINFORM.CHG_CASH_IND.value = "Yes";
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
                SYT_Cal_ChgAC();

                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");

                SYM_PYMT_disableField(document.MAINFORM.CHG_GETAC_BTN);
            } else {
                Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CR_BANK_REF, "P");
            document.MAINFORM.CR_BANK_REF.value = "";

            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");

            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");

            SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHANNEL_onchange = function(event) {
    try {
        var docChannel; // Utility Auto Fix Comments
        docChannel = document.MAINFORM.CHANNEL.value;
        switch (docChannel.toUpperCase()) {
            case "INTERNETBANKING":
                if (SYS_BANK_COUNTRY != "MU") {
                    SYS_CheckError(document.MAINFORM.CHANNEL, "You have selected a restricted Channel, please select another.");
                    EEHtml.getElementById("CHANNEL").value = "";
                }
                break;
            case "ITRADE":
                SYS_CheckError(document.MAINFORM.CHANNEL, "You have selected a restricted Channel, please select another.");
                EEHtml.getElementById("CHANNEL").value = "";
                break;
            case "ICM":
                SYS_CheckError(document.MAINFORM.CHANNEL, "You have selected a restricted Channel, please select another.");
                EEHtml.getElementById("CHANNEL").value = "";
                break;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_CASH_IND_onchange = function(event) {
    try {
        if (document.MAINFORM.CHG_CASH_IND.value == 'Yes') {
            //document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value="";
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.CHG_GETAC_BTN);
        } else {
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_COV_NO_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            if (document.MAINFORM.COV_NO.value.trim() == "" || document.MAINFORM.COV_NO.value.trim == null) {
                SYF_PYMT_Set_CovNumProp();
                document.MAINFORM.X103_EXCH_RT_36.value = "";
                SYT_ChangeFldClass(document.MAINFORM.X103_EXCH_RT_36, "P");
                document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0.00);
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0.00);
            } else {
                document.MAINFORM.X103_EXCH_RT_36.value = "";
                SYT_ChangeFldClass(document.MAINFORM.X103_EXCH_RT_36, "M");
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0.00);
            }
        } else {
            if (document.MAINFORM.COV_NO.value.trim() == "" || document.MAINFORM.COV_NO.value.trim == null) {
                SYF_PYMT_Set_CovNumProp();
                document.MAINFORM.X103_EXCH_RT_36.value = "";
                SYT_ChangeFldClass(document.MAINFORM.X103_EXCH_RT_36, "P");
                document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
            } else {
                document.MAINFORM.X103_EXCH_RT_36.value = "";
                SYT_ChangeFldClass(document.MAINFORM.X103_EXCH_RT_36, "M");
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CALC_AMT_onchange = function(event) {
    try {
        var sCrCalAmt; // Utility Auto Fix Comments
        if (SYS_BeInt(document.MAINFORM.CR_CALC_AMT.value) >= 1000000000000000) {
            alert("The entered amount is too big, please correct it.");
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
            document.MAINFORM.CR_CALC_AMT.focus();
            return;
        }

        SYF_PYMT_Set_RateType();

        sCrCalAmt = SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value);
        if (sCrCalAmt > 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.CR_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);

            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, 'P');

            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0);

            if (document.MAINFORM.MD_I.value == "M") {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }
        } else {
            SYF_PYMT_setBothAmtsToZero();

            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, 'M');
        }

        SYF_PYMT_Calc_Charges();
        SYF_PYMT_Set_CovNumProp();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CASH_IND_onchange = function(event) {
    try {
        var beneId; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        custID = document.MAINFORM.X103_ORDCU_ID_50A.value;
        beneId = document.MAINFORM.X103_BENECU_ID_59A.value;

        if (document.MAINFORM.CR_CASH_IND.value == 'Yes') {
            document.MAINFORM.DB_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            document.MAINFORM.X103_BENECUACNO59A.value = "Not Applicable";
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.button2);
        } else {

            if (document.MAINFORM.APP_TYPE.value != "NOSTRO" && document.MAINFORM.APP_TYPE.value != "VOSTRO") {
                document.MAINFORM.DB_CASH_IND.value = 'No';
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "O");
            }

            document.MAINFORM.X103_BENECUACNO59A.value = "";
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "M");
            if (document.MAINFORM.CHANNEL.value == "NBOL" || document.MAINFORM.CHANNEL.value == "NBOL MULTI" || document.MAINFORM.CHANNEL.value == "MT101" || document.MAINFORM.CHANNEL.value == "MT101 MULTI") {
                SYM_PYMT_clsdisableField(document.MAINFORM.button1);
            } else {
                SYM_PYMT_enableField(document.MAINFORM.button1);
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CCY_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_VALUE_DT_32A();

        if (document.MAINFORM.BENE_RECORDER_TYPE.value != 'NonCustomer') {
            if (document.MAINFORM.X103_BENECUACNO59A.value != "Not Applicable") {
                document.MAINFORM.X103_BENECUACNO59A.value = "";
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
        }

        SYF_PYMT_Set_RateType();

        if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) != 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.DB_CCY, document.MAINFORM.CR_CCY, document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.CR_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);

            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);

            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);

            if (document.MAINFORM.MD_I.value == "M") {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }

        } else if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) != 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value, document.MAINFORM.CR_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);

            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);

            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0);

            if (document.MAINFORM.MD_I.value == "M") {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }

        }

        SYF_PYMT_Set_CovNumProp();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DB_CALC_AMT_onchange = function(event) {
    try {
        SYF_PYMT_Set_RateType();
        var sDbCalAmt;
        sDbCalAmt = SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value);
        if (sDbCalAmt > 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.DB_CCY, document.MAINFORM.CR_CCY, document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.CR_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, 'P');
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
            if (document.MAINFORM.MD_I.value == "M") {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }
        } else {
            SYF_PYMT_setBothAmtsToZero();
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, 'M');
        }
        if (sDbCalAmt > 0 && document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            SYF_PYMT_Calc_Charges();
        }
        SYF_PYMT_Set_CovNumProp();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DB_CASH_IND_onchange = function(event) {
    try {
        var beneId; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        custID = document.MAINFORM.X103_ORDCU_ID_50A.value;
        beneId = document.MAINFORM.X103_BENECU_ID_59A.value;

        if (document.MAINFORM.DB_CASH_IND.value == 'Yes') {
            document.MAINFORM.X103_ORDCUACNO_50A.value = "Not Applicable";
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.button1);
            document.MAINFORM.CR_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
        } else {
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");

            if (document.MAINFORM.CHANNEL.value == "NBOL" || document.MAINFORM.CHANNEL.value == "NBOL MULTI" || document.MAINFORM.CHANNEL.value == "MT101" || document.MAINFORM.CHANNEL.value == "MT101 MULTI") {
                SYM_PYMT_clsdisableField(document.MAINFORM.button1);
            } else {
                SYM_PYMT_enableField(document.MAINFORM.button1);
            }

            if (document.MAINFORM.BENE_AC_TYPE.value != "NOSTRO" && document.MAINFORM.BENE_AC_TYPE.value != "VOSTRO") {
                document.MAINFORM.CR_CASH_IND.value = 'No';
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "O");
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DB_CCY_onchange = function(event) {
    try {
        if (document.MAINFORM.RECORDER_TYPE.value != 'NonCustomer') {
            if (document.MAINFORM.X103_ORDCUACNO_50A.value != "Not Applicable") {
                document.MAINFORM.X103_ORDCUACNO_50A.value = "";
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
        }

        SYF_PYMT_Set_RateType();

        if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) != 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.DB_CCY, document.MAINFORM.CR_CCY, document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.CR_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);

            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);

            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);

            if (document.MAINFORM.MD_I.value == "M") {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }

        } else if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) != 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value + ';' + document.MAINFORM.RATE_TYPE.value, document.MAINFORM.CR_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);

            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);

            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0);

            if (document.MAINFORM.MD_I.value == "M") {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }

        }

        SYF_PYMT_Set_CovNumProp();

        SYF_PYMT_Calc_Charges();
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_FDS_AVAL_onchange = function(event) {
    try {
        if (document.MAINFORM.FDS_AVAL.value == "No") {
            SYT_ChangeFldClass(document.MAINFORM.OVRIDE, "P");
            alert("Override Insufficient Funds = Yes"); //Added
            document.MAINFORM.OVRIDE.value = "Yes";
            FLD_PYMT_OVRIDE_onchange();
        } else {
            document.MAINFORM.OVRIDE.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.OVRIDE, "P");
            FLD_PYMT_OVRIDE_onchange();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_OVRIDE_onchange = function(event) {
    try {
        if (document.MAINFORM.OVRIDE.value == 'Yes') {
            document.MAINFORM.NOTES.value = "Funds check has been overridden on " + SYS_BUSI_DATE + " by the user " + SYS_USER_ID;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_Ord_Cust_lookup_onclick = function(event) {
    try {
        var name;
        name = document.MAINFORM.X103_ORDCU_NM_50A.value.trim();
        if (name != "") {
            if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
                SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A', '1');
            } else if (document.MAINFORM.APP_TYPE.value == "VOSTRO" || document.MAINFORM.APP_TYPE.value == "NOSTRO") {
                SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A_BANK', '1');
            }
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.X103_BENECU_ID_59A.value.toUpperCase();

        if (document.MAINFORM.APP_TYPE.value == "VOSTRO" || document.MAINFORM.APP_TYPE.value == "NOSTRO") {
            if (document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER") {
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
                SYM_PYMT_SYT_enableField(document.MAINFORM.CHG_GETAC_BTN);
            }
        }

        if (document.MAINFORM.CHANNEL.value == "NBOL" || document.MAINFORM.CHANNEL.value == "NBOL MULTI" || document.MAINFORM.CHANNEL.value == "MT101" || document.MAINFORM.CHANNEL.value == "MT101 MULTI") {
            SYM_PYMT_clsdisableField(document.MAINFORM.button1);
        } else {
            SYM_PYMT_enableField(document.MAINFORM.button1);
        }

        SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "M");
        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            if (document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER") {
                if (document.MAINFORM.FIREDFROMACNO.value != "true") {
                    document.MAINFORM.X103_BENECUACNO59A.value = "";
                    document.MAINFORM.FIREDFROMACNO.value = "false";
                }
                SYS_GetCUBK('X103_BENECU_ID_59A_INTTRF', 'X103_BENECU_ID_59A', 'SYF_PYMT_Chk_BenCustAccts()', 'SYF_PYMT_Clr_Ben_Cust', 'TRUE');
            } else {
                if (document.MAINFORM.X103_BENECUACNO59A.value == '') {
                    SYS_GetCUBK('X103_BENECU_ID_59A_BANK', 'X103_BENECU_ID_59A', 'SYF_PYMT_Get_BeneBankAcNo()', 'SYF_PYMT_Clr_Ben_Cust', 'TRUE');
                } else {
                    SYS_GetCUBK('X103_BENECU_ID_59A_BANK', 'X103_BENECU_ID_59A', 'SYF_PYMT_Get_BenCustAccts()', 'SYF_PYMT_Clr_Ben_Cust', 'TRUE');
                }
            }
        } else {
            SYF_PYMT_Clr_Ben_Cust();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_EXCH_RT_36_onchange = function(event) {
    try {
        SYT_Chg_NegativeAmt(event.currentTarget);
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0);
            if (document.MAINFORM.MD_I.value == "M") {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }
        } else {
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0);
            if (document.MAINFORM.MD_I.value == "M") {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
        if (document.MAINFORM.CHANNEL.value == "NBOL" || document.MAINFORM.CHANNEL.value == "NBOL MULTI") {
            SYM_PYMT_clsdisableField(document.MAINFORM.button1);
        } else {
            SYM_PYMT_enableField(document.MAINFORM.button1);
        }
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");
        if ((document.MAINFORM.X103_ORDCU_ID_50A.value).trim() != "") {
            if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
                if (document.MAINFORM.FIREDFROMACNO.value != "true") {
                    document.MAINFORM.X103_ORDCUACNO_50A.value = "";
                    document.MAINFORM.FIREDFROMACNO.value = "false";
                }
                if (document.MAINFORM.X103_ORDCUACNO_50A.value == '') {
                    SYS_GetCUBK('X103_ORDCU_ID_50A_INTRF', 'X103_ORDCU_ID_50A', 'SYF_PYMT_Get_OrdCustAccts', 'SYF_PYMT_Clr_Ord_Cust', 'TRUE');
                    SYF_PYMT_ProtOrdCust();
                } else {
                    SYS_GetCUBK('X103_ORDCU_ID_50A_INTRF', 'X103_ORDCU_ID_50A', 'SYF_PYMT_ProtOrdCust', 'SYF_PYMT_Clr_Ord_Cust', 'TRUE');
                    if (document.MAINFORM.CHANNEL.value == "NBOL" || document.MAINFORM.CHANNEL.value == "NBOL MULTI" || document.MAINFORM.CHANNEL.value == "MT101" || document.MAINFORM.CHANNEL.value == "MT101 MULTI") {
                        SYM_PYMT_clsdisableField(document.MAINFORM.button1);
                    } else {
                        SYM_PYMT_enableField(document.MAINFORM.button1);
                    }
                    SYF_PYMT_ProtOrdCust();
                }
            } else if (document.MAINFORM.APP_TYPE.value == "VOSTRO" || document.MAINFORM.APP_TYPE.value == "NOSTRO") {
                if (document.MAINFORM.X103_ORDCUACNO_50A.value == '') {
                    SYS_GetCUBK('X103_ORDCU_ID_50A_BANK', 'X103_ORDCU_ID_50A', 'SYF_PYMT_Get_OrdCustBankAcNo', 'SYF_PYMT_Clr_Ord_Cust', 'TRUE');
                } else {
                    SYS_GetCUBK('X103_ORDCU_ID_50A_BANK', 'X103_ORDCU_ID_50A', 'SYF_PYMT_Get_OrdCustAccts', 'SYF_PYMT_Clr_Ord_Cust', 'TRUE');
                }
                SYF_PYMT_ProtOrdCust();
            }
            SYF_PYMT_Set_CovNumProp();
        } else {
            SYF_PYMT_Clr_Ord_Cust();
            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "O");
        }
        if (SYS_BANK_COUNTRY == "ZA") {
            SYF_PYMT_GetFrontOfficeCode();
        }
        if (document.MAINFORM.RECORDER_TYPE.value == "NonCustomer") {
            document.MAINFORM.CHG_OVERRIDE_IND.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.CHG_OVERRIDE_IND, "P");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function(event) {
    try {
        /*
if(SYF_PYMT_Check_Valid_Date('X103_VALUE_DT_32A')){
	//SYM_PYMT_Chk_ValDates('CPYT_DR_VAL_DATE');//saevent.currentTargeth Dec 17
} else {
    if (SYS_FUNCTION_TYPE == "RE") {
        SYT_restrictRelease();
    }
}
*/

        SYM_PYMT_Chg_X103_VALUE_DT_32A();
        document.MAINFORM.CPYT_DR_VAL_DATE.value = document.MAINFORM.X103_VALUE_DT_32A.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_button_onclick = function(event) {
    try {
        //SYF_PYMT_Bene_Cust_lookup_onclick();
        var add1; // Utility Auto Fix Comments
        var add2; // Utility Auto Fix Comments
        var add3; // Utility Auto Fix Comments
        var name; // Utility Auto Fix Comments
        name = document.MAINFORM.X103_BENECU_NM_59A.value.trim();
        add1 = document.MAINFORM.X103BENECUADD1_59A.value.trim();
        add2 = document.MAINFORM.X103BENECUADD2_59A.value.trim();
        add3 = document.MAINFORM.X103BENECUADD3_59A.value.trim();
        if (name != "") {
            if (document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER") {
                SYS_InqCUBK_byCondition('X103_BENECU_ID_59A', '1');
            } else if (document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO") {
                SYS_InqCUBK_byCondition('X103_BENECU_ID_59A_BANK', '1');
            }
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_button1_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A', '1'); //Added
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_button2_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('X103_BENECUACNO59A_BANK', '1'); //Added
    } catch (e) {
        DisExcpt("SYF_PYMT_InternalTrf.js", e);
    }
}