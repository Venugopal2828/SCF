"path:SCRN/DO/PYMT_MultipleDebits.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

var CUST_ID = '';
var Cal_CCY_Ind = true;
var Cal_PAY_Ind = true;
var Cal_SETT_Ind = true;
var CrAmt = 0;
var CrCcy = '';
var Cross_Ccy_Ind = 'No';
var DbAmt = 0;
var DbCcy = '';
var DirDealCust = '';
var FEDS_Check = false;
var FdsAvail = '';
var FdsToChk = '';
var Multi_Ccy_Ind = 'No';
var Override = '';
var RATE_TYPE = '';
var Rec_Status = '';
var RecorderType = '';
var Temp_Pay_Amt = 0;
var Temp_Sett_Amt = 0;
var _dodetail = '';
var applicantType = '';
var fnName = '';
var mulSettFlag = '';
var rate_typeV = '';
var sum_Participts = 0;
var totAmt = 0;
var vCurency1CUBK = '';
var vCurency2CUBK = '';

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Check_Cov_Limit = function() {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        /*	Sql_Cond = "CNTY_CODE=" +"'"+SYS_BANK_COUNTRY+"'";
	Field_List = "COV_AMT;COV_CCY";
	Mapping_List = "COV_AMT;COV_CCY";
	SYS_Get22TableData_S('COLT_MASTER',Sql_Cond,Field_List,Mapping_List);
	if(document.MAINFORM.COV_CCY.value.trim().length!=0||document.MAINFORM.COV_AMT.value.trim().length!=0){
	Check_Cov_LimitSuccess();
 	}*/
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Check_Cov_LimitFail = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Check_Cov_LimitSuccess = function() {
    try {
        var COV_AMT_LOC; // Utility Auto Fix Comments
        var COV_CCY; // Utility Auto Fix Comments
        var CrAmt_loc; // Utility Auto Fix Comments
        var DbAmt_loc; // Utility Auto Fix Comments
        var Dir_cust; // Utility Auto Fix Comments
        var ORG_COV_AMT; // Utility Auto Fix Comments
        var rateList; // Utility Auto Fix Comments
        Dir_cust = DirDealCust; // Utility Auto Fix Comments
        COV_CCY = document.MAINFORM.COV_CCY.value;
        CrAmt_loc = 0;
        DbAmt_loc = 0;
        COV_AMT_LOC = 0;
        rateList = RATE_TYPE + ";" + RATE_TYPE + ";" + RATE_TYPE;
        ORG_COV_AMT = document.MAINFORM.COV_AMT.value;
        coveramount = document.MAINFORM.COV_AMT.value;
        document.MAINFORM.COV_AMT.value = 0;
        if (SYS_BeFloat(CrAmt) > 0) {
            if (CrCcy == COV_CCY) {
                if (SYS_BeFloat(CrAmt) > SYS_BeFloat(ORG_COV_AMT)) {
                    DirDealCust = "Yes";
                } else {
                    DirDealCust = Dir_cust;
                }
            } else {
                SYS_GetExchangeRateAMT_S(document.MAINFORM.COV_CCY.value, document.MAINFORM.PAY_CCY.value, rateList, ORG_COV_AMT, document.MAINFORM.COV_AMT.name, '', '1;1;1');
                if (SYS_BeFloat(document.MAINFORM.COV_AMT.value) == 0) {
                    DirDealCust = "Yes";
                } else {
                    if (SYS_BeFloat(CrAmt) > SYS_BeFloat(document.MAINFORM.COV_AMT.value)) {

                        DirDealCust = "Yes";
                    } else {
                        DirDealCust = Dir_cust;
                    }

                }

            }
        } else {
            if (DbCcy == COV_CCY) {
                if (SYS_BeFloat(DbAmt) > SYS_BeFloat(ORG_COV_AMT)) {
                    DirDealCust = "Yes";
                } else {
                    DirDealCust = Dir_cust;
                }
            } else {
                SYS_GetExchangeRateAMT_S(document.MAINFORM.COV_CCY.value, document.MAINFORM.SETT_CCY.value, rateList, ORG_COV_AMT, document.MAINFORM.COV_AMT.name, '', '1;1;1');
                if (SYS_BeFloat(document.MAINFORM.COV_AMT.value) == 0) {
                    DirDealCust = "Yes";
                } else {
                    if (SYS_BeFloat(DbAmt) > SYS_BeFloat(document.MAINFORM.COV_AMT.value)) {
                        DirDealCust = "Yes";
                    } else {
                        DirDealCust = "Yes";
                    }
                }

            }
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Check_FixPendProp = function() {
    try {
        var AcctType; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var fnName; // Utility Auto Fix Comments
        fnName = SYS_FUNCTION_NAME;
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits');
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments

        document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, document.MAINFORM.PAY_AMT.value);
        document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, document.MAINFORM.SETT_AMT.value);
        if (document.MAINFORM.MUL_OVRIDE.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE, "M");
            SYT_ChangeFldClass(document.MAINFORM.MUL_FDS_AVAL, "O");
        }
        if (fnName == 'ITT_FixPending' || fnName == 'Proc_Inc_103' || fnName == 'Settle_after_Receive9xx' || fnName == 'ReversePayment_ITT') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_TYPE, "P");
            SYT_ChangeFldClass(document.MAINFORM.SETT_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.PAY_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.RELA_REF, "P");
            if (RecorderType == "NonCustomer") {
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "P");
                protFundsRow(); //sathish
            } else {
                if (editrecord != null && editrecord["MUL_CASH_IND"] == "Yes") {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                    SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    protFundsRow(); //tinu		
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                    SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    if (document.MAINFORM.MUL_OVRIDE.value != 'Yes') {
                        unprotFundsRow(); //tinu					
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE, "M");
                    }
                }
                SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
            }
            if (DirDealCust == "Yes") {
                if (document.MAINFORM.PAY_CCY.value == document.MAINFORM.SETT_CCY.value) {
                    SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                    SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                    SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "M");
                }
            } else {
                if (document.MAINFORM.PAY_CCY.value == document.MAINFORM.SETT_CCY.value) { //sathish dec 19
                    SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                    SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.COV_NO, "O");
                    SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                }
            }
            if (SYS_ORG_FUNCTION_NAME == 'ReversePayment_ITT') {
                EEHtml.getElementById("FUNDS_ROW").style.display = "none"; //changed by sathish
            } else {
                EEHtml.getElementById("FUNDS_ROW").style.display = "none";
            }
        } else {
            if (mulSettFlag == "No") {
                SYT_ChangeFldClass(document.MAINFORM.SETT_AMT, "P");
                SYT_ChangeFldClass(document.MAINFORM.PAY_AMT, "P");
                SYT_ChangeFldClass(document.MAINFORM.SETT_CCY, "P");
                if (RecorderType == "NonCustomer") {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                    SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN); // Utility Auto Fix Comments
                    SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "P");
                    protFundsRow(); //sathish
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                    SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
                    if (document.MAINFORM.MUL_FDS_AVAL.value == 'Yes') { //sathish dec 30
                        unprotFundsRow();
                    }
                }
                if (document.MAINFORM.CPYT_DR_AC_TYPE.value == "CUSTOMER") {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                    SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN); // Utility Auto Fix Comments
                    SYT_ChangeFldClass(document.MAINFORM.RELA_REF, "O");
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                    SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    SYT_ChangeFldClass(document.MAINFORM.RELA_REF, "M");
                    SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "P");
                    if (applicantType == 'BANK') {
                        if (DbCcy == SYS_LOCAL_CCY) {
                            document.MAINFORM.CPYT_DR_AC_TYPE.value = 'VOSTRO';
                        } else {
                            document.MAINFORM.CPYT_DR_AC_TYPE.value = 'NOSTRO';
                        }
                        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_TYPE, "P");
                        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                        SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    }
                }
                if (DirDealCust == "Yes") {
                    if (document.MAINFORM.PAY_CCY.value == document.MAINFORM.SETT_CCY.value) {
                        SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                        SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                        if (SYS_FUNCTION_TYPE == 'EC' || editrecord != null) {
                            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "M");
                        }
                    }
                } else {
                    if (document.MAINFORM.COV_NO.value.trim().length != 0) {
                        SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "M");
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                    }
                    if (document.MAINFORM.PAY_CCY.value != document.MAINFORM.SETT_CCY.value) {
                        SYT_ChangeFldClass(document.MAINFORM.COV_NO, "O");
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                    }
                }
            } else {
                if (document.MAINFORM.CAP_AMT_IND.value == 'PAY_AMT') {
                    SYT_ChangeFldClass(document.MAINFORM.SETT_AMT, "P");
                    SYT_ChangeFldClass(document.MAINFORM.PAY_AMT, "O");
                }
                if (document.MAINFORM.CAP_AMT_IND.value == 'SETT_AMT') {
                    SYT_ChangeFldClass(document.MAINFORM.SETT_AMT, "O");
                    SYT_ChangeFldClass(document.MAINFORM.PAY_AMT, "P");
                }
                if (SYS_BeFloat(CrAmt) > 0) {
                    SYT_ChangeFldClass(document.MAINFORM.SETT_CCY, "O");
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.SETT_CCY, "P");
                }
                if (document.MAINFORM.CPYT_DR_AC_TYPE.value == "CUSTOMER") {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                    SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    SYT_ChangeFldClass(document.MAINFORM.RELA_REF, "O");
                    if (document.MAINFORM.MUL_OVRIDE.value != 'Yes') {
                        unprotFundsRow(); //sathish jan 04 10   
                    }
                } else {

                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                    SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    SYT_ChangeFldClass(document.MAINFORM.RELA_REF, "M");
                    protFundsRow(); //sathish
                }
                if (RecorderType == "NonCustomer") {
                    protFundsRow(); //sathish
                    SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "P");
                    if (editrecord != null) {
                        if (editrecord["MUL_CASH_IND"] == "Yes") {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                            SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN); // Utility Auto Fix Comments
                        } else {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                            SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN); // Utility Auto Fix Comments
                        }
                    } else {
                        if (Records.length == 0) {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                            SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN); // Utility Auto Fix Comments
                        } else {
                            Chk_CashInd();
                        }
                    }
                } else {
                    if (editrecord != null) {
                        if (editrecord["MUL_CASH_IND"] == "Yes") {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                            SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            protFundsRow(); //tinu					      			      	
                        } else {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                            SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN); // Utility Auto Fix Comments
                            if (document.MAINFORM.MUL_OVRIDE.value != 'Yes') {
                                unprotFundsRow(); //tinu
                            }
                        }
                    } else {
                        if (document.MAINFORM.MUL_CASH_IND.value == "Yes") {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                            SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
                            protFundsRow(); //tinu	
                        } else {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                            SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
                            unprotFundsRow(); //tinu
                        }
                    }
                }

                if (DirDealCust == "Yes") {
                    if (document.MAINFORM.PAY_CCY.value == document.MAINFORM.SETT_CCY.value) {
                        SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                        SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                        if (SYS_FUNCTION_TYPE == 'EC' || editrecord != null) {
                            if (document.MAINFORM.COV_NO.value.trim().length != 0) {
                                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "M");
                            } else {
                                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                            }
                        }
                    }
                } else {
                    if (document.MAINFORM.PAY_CCY.value == document.MAINFORM.SETT_CCY.value) {
                        SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                        SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.COV_NO, "O");
                        if (document.MAINFORM.COV_NO.value.trim().length != 0) { //dec 09
                            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "M");
                        } else {
                            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                        }
                    }
                }

                if (document.MAINFORM.MUL_FDS_AVAL.value == "Yes") {
                    SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE, "P");
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE, "M");
                }
            }
            //sathish dec 04 //for removing the cash indicator protection
            AcctType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
            if (AcctType == "NOSTRO" || AcctType == "VOSTRO") {
                SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "P");
                protFundsRow(); //sathish
            } else {
                if (RecorderType != "NonCustomer") { // code not to unprotect cash indicator for non-customer - added by kosheik 31 jan 08
                    SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
                }
            }
        }

        setFundsRow();
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Check_MandFld = function() {
    try {
        var nEleLeng; // Utility Auto Fix Comments
        var oEle; // Utility Auto Fix Comments
        var oField; // Utility Auto Fix Comments
        var sClass; // Utility Auto Fix Comments
        oEle = document.MAINFORM.elements;
        nEleLeng = oEle.length;
        for (j = 0; j < nEleLeng; j++) {
            oField = oEle[j];
            sClass = oField.className;
            sClass = sClass.substr(oField.className.length - 1);
            if (sClass == 'M') {
                if (oField.value.trim().length == 0 || oField.value.trim() == null) {
                    alert(oField.title + " is Mandatory");
                    oField.focus();
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Chk_CashInd = function() {
    try {
        var ChkVal; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var cashRes; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits');
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        cashRes = false;

        for (i = 0; i < Records.length; i++) { // Utility Auto Fix Comments
            Record = Records[i];
            ChkVal = SYS_getValFromRec(Record, "MUL_CASH_IND");
            if (ChkVal == "Yes") {
                cashRes = true;
            }
        }

        if (mulSettFlag == "Yes") {
            if (cashRes) {
                document.MAINFORM.MUL_CASH_IND.value = "No";
                //SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND,"P");	//sathish dec 15
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M"); // Utility Auto Fix Comments
                document.MAINFORM.CPYT_DR_AC.value = "";
                SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
            } else {
                if (RecorderType == "NonCustomer") {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                    document.MAINFORM.MUL_CASH_IND.value = "Yes";
                    SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "P");
                    SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                    protFundsRow(); //sathish								
                } else {
                    document.MAINFORM.CPYT_DR_AC.value = "";
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M"); // Utility Auto Fix Comments
                    SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                }
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
            document.MAINFORM.CPYT_DR_AC.value = document.MAINFORM.ORG_CPYT_DR_AC.value;
            SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
            if (fnName == 'Proc_Inc_103' || fnName == 'ITTReverPYMT' || fnName == 'SettleRec9xx') {
                document.MAINFORM.CPYT_DR_AC.value = document.MAINFORM.ORG_CPYT_DR_AC.value;
                if (RecorderType == "NonCustomer") {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                    SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN); // Utility Auto Fix Comments
                    protFundsRow(); //sathish
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                    SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                }
            }
            if (RecorderType == "NonCustomer") {
                document.MAINFORM.MUL_CASH_IND.value = 'Yes';
                SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "P");
                document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                protFundsRow(); //sathish
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Chk_OutstandingAMT = function() {
    try {
        var PayAmt; // Utility Auto Fix Comments
        var SettAmt; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        sum_Participts = 0;
        PayAmt = SYS_BeFloat(document.MAINFORM.PAY_AMT.value);
        SettAmt = SYS_BeFloat(document.MAINFORM.SETT_AMT.value);

        if (SYS_BeFloat(CrAmt) > 0) {
            sum_Participts = SYS_BeFloat(_dodetail.getFieldSumValue("PAY_AMT")) - SYS_BeFloat(Temp_Pay_Amt); // Utility Auto Fix Comments
            EEHtml.getElementById("AMT_OUT_CCY").value = EEHtml.getElementById("PAY_CCY").value;
            totAmt = sum_Participts + SYS_BeFloat(document.MAINFORM.PAY_AMT.value);

            document.MAINFORM.AMT_OUTS.className = "AMT_P";
            document.MAINFORM.AMT_OUTS.value = SYS_BeFloat(CrAmt) - SYS_BeFloat(totAmt);
        } else {
            sum_Participts = SYS_BeFloat(_dodetail.getFieldSumValue("SETT_AMT")) - SYS_BeFloat(Temp_Sett_Amt); // Utility Auto Fix Comments
            EEHtml.getElementById("AMT_OUT_CCY").value = EEHtml.getElementById("SETT_CCY").value;
            totAmt = sum_Participts + SYS_BeFloat(document.MAINFORM.SETT_AMT.value);

            document.MAINFORM.AMT_OUTS.className = "AMT_P";
            document.MAINFORM.AMT_OUTS.value = SYS_BeFloat(DbAmt) - SYS_BeFloat(totAmt); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Chk_Sett_AcctNo = function() {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Field_List2; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Mapping_List2; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var Sql_Cond2; // Utility Auto Fix Comments
        var custId; // Utility Auto Fix Comments
        custId = "";
        if (fnName == 'Proc_Inc_103' || fnName == 'ITTReverPYMT' || fnName == 'SettleRec9xx') {
            custId = SYS_getValueFromMain('X103_BENECU_ID_59A');
        } else {
            custId = SYS_getValueFromMain('X103_ORDCU_ID_50A');
        }
        document.MAINFORM.C_CUST_ID.value = '';
        if (document.MAINFORM.CPYT_DR_AC.value.trim() != "") {
            if (document.MAINFORM.CPYT_DR_AC_TYPE.value == "CUSTOMER") {
                if (RecorderType != "NonCustomer") {
                    //Sql_Cond = "C_AC_NUMBER=" + "'" + document.MAINFORM.CPYT_DR_AC.value + "'" + " AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CURRENCY=" + "'" + document.MAINFORM.SETT_CCY.value + "'" + " AND ( " + "C_DBT_CRDT=" + "'B' OR C_DBT_CRDT=" + "'" + document.MAINFORM.FIELD_6_X.value + "')";
                    //Field_List = "C_CUST_ID;C_AC_TITLE";
                    //Mapping_List = "C_CUST_ID;CPYT_DR_NAME";
                    SYS_GetTableDataByRule_S('SSSS_PYMT_MultipleDebits_Chk_Sett_AcctNo_0', '1', 'false');
                    if (document.MAINFORM.C_CUST_ID.value != document.MAINFORM.CPYT_DR_ID.value) {
                        alert('The Account number entered is invalid,Please verify.');
                        document.MAINFORM.CPYT_DR_AC.value = '';
                        document.MAINFORM.CPYT_DR_NAME.value = '';
                        return false;
                    }
                    if (fnName != 'Proc_Inc_103' || fnName != 'SettleRec9xx') {
                        getOverDrawnInd();
                    }
                }
            } else {
                //Sql_Cond1 = "C_ACCT_CCY=" + "'" + document.MAINFORM.SETT_CCY.value + "'" + " AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_ACCT_NR=" + "'" + document.MAINFORM.CPYT_DR_AC.value + "'";
                //Field_List1 = "C_ACCT_NR;C_ACCT_WITH_ID";
                //Mapping_List1 = "C_AC_NUMBER;C_CUST_ID";
                SYS_GetTableDataByRule_S('SSSS_PYMT_MultipleDebits_Chk_Sett_AcctNo_1', '1', 'false');
                if (document.MAINFORM.C_AC_NUMBER.value != document.MAINFORM.CPYT_DR_AC.value) {
                    alert('The Account number entered is invalid ,please verify.');
                    document.MAINFORM.CPYT_DR_AC.value = '';
                    document.MAINFORM.C_CUST_ID.value = '';
                    document.MAINFORM.CPYT_DR_NAME.value = '';
                    return false;
                } else {
                    if (document.MAINFORM.C_CUST_ID.value.trim() != '') {
                        //Sql_Cond2 = "C_MAIN_REF=" + "'" + document.MAINFORM.C_CUST_ID.value + "'";
                        //Field_List2 = "PARTY_NM";
                        //Mapping_List2 = "CPYT_DR_NAME";
                        SYS_GetTableDataByRule_S('SSSS_PYMT_MultipleDebits_Chk_Sett_AcctNo_2', '1', true);
                    }
                }
            }
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Chk_SplitPayAmt = function() {
    try {
        var AmountValue; // Utility Auto Fix Comments
        var PayAmt; // Utility Auto Fix Comments
        var SettAmt; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        sum_Participts = 0;
        PayAmt = SYS_BeFloat(document.MAINFORM.PAY_AMT.value);
        SettAmt = SYS_BeFloat(document.MAINFORM.SETT_AMT.value);

        // Get the outstanding amount before it is changed
        AmountValue = SYS_BeFloat(document.MAINFORM.AMT_OUTS.value);

        if (SYS_BeFloat(DbAmt) > 0) {
            sum_Participts = SYS_BeFloat(_dodetail.getFieldSumValue("SETT_AMT")) - SYS_BeFloat(Temp_Sett_Amt); // Utility Auto Fix Comments
            totAmt = sum_Participts + SYS_BeFloat(document.MAINFORM.SETT_AMT.value);
            //if(SYS_FUNCTION_NAME == "CompOutPmt" && SYS_BANK_COUNTRY =="ZA"){
            //Chk_OutstandingAMT();
            //}
            if (totAmt > DbAmt) {
                alert("The split Settlement Amount cannot be greater than Principal Payment Amount");
                document.MAINFORM.PAY_AMT.value = 0;
                document.MAINFORM.SETT_AMT.value = 0;
                //Chk_OutstandingAMT();
                return false;
            }
        } else {

            sum_Participts = SYS_BeFloat(_dodetail.getFieldSumValue("PAY_AMT")) - SYS_BeFloat(Temp_Pay_Amt); // Utility Auto Fix Comments
            totAmt = sum_Participts + SYS_BeFloat(document.MAINFORM.PAY_AMT.value);

            //if(SYS_FUNCTION_NAME == "CompOutPmt" && SYS_BANK_COUNTRY =="ZA"){
            //Chk_OutstandingAMT();
            //}
            if (totAmt > CrAmt) {
                alert("The split Payment Amount cannot be greater than Principal Payment Amount");
                document.MAINFORM.PAY_AMT.value = 0;
                document.MAINFORM.SETT_AMT.value = 0;
                //Chk_OutstandingAMT();
                return false;

            }
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var ChkAcct; // Utility Auto Fix Comments
        var ConfirmBlock; // Utility Auto Fix Comments
        var PayAmt; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var SettAmt; // Utility Auto Fix Comments
        var chkCov; // Utility Auto Fix Comments
        var currAcct; // Utility Auto Fix Comments
        var currCovNo; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var settChk; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits');
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        document.MAINFORM.CPYT_FUNC_NAME.value = SYS_FUNCTION_NAME;
        PayAmt = SYS_BeFloat(document.MAINFORM.PAY_AMT.value);
        SettAmt = SYS_BeFloat(document.MAINFORM.SETT_AMT.value);
        currCovNo = document.MAINFORM.COV_NO.value;
        currAcct = document.MAINFORM.CPYT_DR_AC.value;
        ConfirmBlock = false;
        settChk = false;

        if (mulSettFlag == "Yes") {
            if (Rec_Status == "Add") {
                if (Records.length > 4) {
                    alert("Max Five Settlement rows are allowed. Current Information cannot be saved");
                    ConfirmBlock = true;
                    settChk = true;
                    return false;
                }
            }
        } else {
            if (Rec_Status == "Add") {
                if (Records.length >= 1) {
                    alert("Max One Settlement row is allowed. Current Information cannot be saved");
                    ConfirmBlock = true;
                    settChk = true;
                    return false;
                }
            }
        }

        if (!settChk) {
            if (SYS_BeFloat(document.MAINFORM.PAY_AMT.value) >= 1000000000000000) {
                alert("The Payment Amount length is too large to Process");
                return false;
            }
            if (SYS_BeFloat(document.MAINFORM.SETT_AMT.value) >= 1000000000000000) {
                alert("The Settlement Amount length is too large to Process");
                return false;
            }
            if (PayAmt == 0 && SettAmt == 0) {
                alert("To save a settlement row,You have to enter one of the amounts");
                return false;
            }
            if (!Check_MandFld()) {
                ConfirmBlock = true;
            }
            if (document.MAINFORM.MUL_CASH_IND.value == "No") {
                if (!Chk_Sett_AcctNo()) {
                    ConfirmBlock = true;
                }
            }
            //Duplicate check starts -- sathish
            if (mulSettFlag == "Yes") {
                if (Rec_Status == "Add") {
                    for (i = 0; i < Records.length; i++) {
                        Record = Records[i];
                        ChkAcct = SYS_getValFromRec(Record, "CPYT_DR_AC");
                        if (currAcct.trim() == ChkAcct.trim()) {
                            chkCov = SYS_getValFromRec(Record, "COV_NO");
                            if (currCovNo.trim().toUpperCase() == chkCov.trim().toUpperCase()) {
                                alert("The combination of Cover Number and Account Number cannot be duplicated");
                                ConfirmBlock = true;
                                return false;
                            } else {
                                ConfirmBlock = false;
                            }
                        }
                    }
                } else {
                    for (i = 0; i < Records.length; i++) {
                        Record = Records[i];
                        ChkAcct = SYS_getValFromRec(Record, "CPYT_DR_AC");
                        if (currAcct.trim() == ChkAcct.trim()) {
                            chkCov = SYS_getValFromRec(Record, "COV_NO");
                            if (currCovNo.trim() == chkCov.trim()) {
                                if (SYS_getRecID(editrecord) != SYS_getRecID(Record)) {
                                    alert("The combination of Cover Number and Account Number cannot be duplicated");
                                    ConfirmBlock = true;
                                    return false;
                                }
                            } else {
                                ConfirmBlock = false;
                            }
                        }
                    }
                }
            }
            if (ConfirmBlock) {
                return false;
            }
            if (document.MAINFORM.MUL_FDS_AVAL.value == 'No' && document.MAINFORM.MUL_OVRIDE.value == 'No') {
                alert("The Settlement cannot be saved since Funds are not available");
                return false;
            }
            if (SYS_BeFloat(CrAmt) > 0) {
                if (fnName == 'ITTReverPYMT') {
                    totAmt = SYS_BeFloat(Temp_Pay_Amt);
                } else {
                    sum_Participts = SYS_BeFloat(_dodetail.getFieldSumValue("PAY_AMT")) - SYS_BeFloat(Temp_Pay_Amt); // Utility Auto Fix Comments
                    totAmt = sum_Participts + SYS_BeFloat(document.MAINFORM.PAY_AMT.value);
                }
                if (SYS_BeFloat(totAmt) > SYS_BeFloat(CrAmt)) {
                    alert("The split Payment Amount cannot be greater than Principal Payment Amount");
                    document.MAINFORM.PAY_AMT.value = 0;
                    document.MAINFORM.SETT_AMT.value = 0;
                    Chk_OutstandingAMT();
                    return false;
                }
            } else if (SYS_BeFloat(DbAmt) > 0) {
                sum_Participts = SYS_BeFloat(_dodetail.getFieldSumValue("SETT_AMT")) - SYS_BeFloat(Temp_Sett_Amt); // Utility Auto Fix Comments
                totAmt = sum_Participts + SYS_BeFloat(document.MAINFORM.SETT_AMT.value);
                if (SYS_BeFloat(totAmt) > SYS_BeFloat(DbAmt)) {
                    alert("The split Settlement Amount cannot be greater than Principal Payment Amount");
                    document.MAINFORM.PAY_AMT.value = 0;
                    document.MAINFORM.SETT_AMT.value = 0;
                    Chk_OutstandingAMT();
                    return false;
                }
            }
            if (SYS_BeFloat(document.MAINFORM.SETT_AMT.value) == 0) {
                alert("Settlement amount is Zero. Information entered cannot be saved");
                return false;
            }
            if ((fnName == 'Proc_Inc_103' || fnName == 'SettleRec9xx') && RecorderType != "NonCustomer") //added for audit
            {
                SYS_setValueToMain('SETT_ACC_AUDIT', document.MAINFORM.CPYT_DR_AC.value);
            }
            if ((fnName == 'CompOutPmt' || fnName == 'OTTReverPYMT') && RecorderType != "NonCustomer" && mulSettFlag == "No") //added for audit
            {
                SYS_setValueToMain('SETT_ACC_AUDIT', document.MAINFORM.CPYT_DR_AC.value);
            }
            if (fnName == 'DI_Capture' && RecorderType != "NonCustomer" && mulSettFlag == "No") //added for audit
            {
                SYS_setValueToMain('SETT_ACC_AUDIT', document.MAINFORM.CPYT_DR_AC.value);
            }
        }
        if (document.MAINFORM.CPYT_DR_AC_TYPE.value == 'NOSTRO' || document.MAINFORM.CPYT_DR_AC_TYPE.value == 'VOSTRO' || document.MAINFORM.MUL_CASH_IND.value == 'Yes') {
            document.MAINFORM.C_AC_IDENTIFIER.value = " "; // added by TINU-- 
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.DI_Specific = function() {
    try {
        EEHtml.getElementById("FUNDS_ROW").style.display = "none";
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        Set_FldClassProp();

        initMainData();

        document.MAINFORM.ORG_SETT_AMT.value = document.MAINFORM.SETT_AMT.value;
        document.MAINFORM.ORG_PAY_AMT.value = document.MAINFORM.PAY_AMT.value;
        document.MAINFORM.ORG_EXCH_RATE.value = document.MAINFORM.EXCH_RATE.value;
        document.MAINFORM.ORG_CPYT_DR_AC.value = document.MAINFORM.CPYT_DR_AC.value;
        document.MAINFORM.ORG_SETT_CCY.value = document.MAINFORM.SETT_CCY.value;
        if (SYS_BeFloat(CrAmt) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.PAY_CCY, "P");
        } else if (SYS_BeFloat(DbAmt) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.PAY_CCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.SETT_CCY, "P");
            //SYT_ChangeFldClass(document.MAINFORM.PAY_AMT,"P");		
        }
        if (CrCcy == DbCcy) {
            document.MAINFORM.EXCH_RATE.value = 1;
        }

        Chk_CashInd();

        setCovNoProp();

        Rec_Status = "Add";
        setFundsRow();
        document.MAINFORM.CAP_AMT_IND.value = '';
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Multi_COV_NO_onchange = function() {
    try {
        if (document.MAINFORM.SETT_AMT.className == "AMT_P") {
            setMD_Flag(document.MAINFORM.PAY_CCY.value, document.MAINFORM.SETT_CCY.value, rate_type);
        } else if (document.MAINFORM.PAY_AMT.className == "AMT_P") {
            setMD_Flag(document.MAINFORM.SETT_CCY.value, document.MAINFORM.PAY_CCY.value, rate_type);
        } else {
            setMD_Flag(document.MAINFORM.PAY_CCY.value, document.MAINFORM.SETT_CCY.value, rate_type);
        }
        if (document.MAINFORM.COV_NO.value.trim().length != 0) {
            document.MAINFORM.EXCH_RATE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "M");
            if (document.MAINFORM.MD_I.value == "" || document.MAINFORM.MD_I.value == null) {
                //alert("Exchange Rate for "+document.MAINFORM.PAY_CCY.value+" to "+document.MAINFORM.SETT_CCY.value+" not loaded. Transaction cannot be processed.")
                alert("MD Flag not loaded.Please contact Technical Support "); // Utility Auto Fix Comments
                document.MAINFORM.COV_NO.value = "";
                document.MAINFORM.EXCH_RATE.value = "";
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
            }
        } else {
            if (DirDealCust == "No") {
                if (document.MAINFORM.PAY_AMT.className == "AMT_P") {
                    if (document.MAINFORM.PAY_CCY.value != SYS_LOCAL_CCY && document.MAINFORM.SETT_CCY.value != SYS_LOCAL_CCY) {
                        SYT_getExchangeRate_Settl(document.MAINFORM.SETT_CCY, document.MAINFORM.PAY_CCY, rate_type, document.MAINFORM.SETT_AMT, document.MAINFORM.PAY_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                    } else {
                        //SYS_GetExchangeRate_S(document.MAINFORM.SETT_CCY.value, document.MAINFORM.PAY_CCY.value, RATE_TYPE, 'EXCH_RATE','','','','','','4');
                        SYT_getExchangeRate_Settl(document.MAINFORM.SETT_CCY, document.MAINFORM.PAY_CCY, rate_type, document.MAINFORM.SETT_AMT, document.MAINFORM.PAY_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                    }
                    cal_PayAmt();
                } else if (document.MAINFORM.SETT_AMT.className == "AMT_P") {
                    if (document.MAINFORM.PAY_CCY.value != SYS_LOCAL_CCY && document.MAINFORM.SETT_CCY.value != SYS_LOCAL_CCY) {

                        SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                    } else {
                        //SYS_GetExchangeRate_S(document.MAINFORM.PAY_CCY.value, document.MAINFORM.SETT_CCY.value, RATE_TYPE, 'EXCH_RATE','','','','','','4');
                        SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                    }
                    cal_SettAmt();
                }
                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "O");
            } else {
                document.MAINFORM.EXCH_RATE.value = "";
                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
            }
        }
        if (document.MAINFORM.EXCH_RATE.value == "") {
            if (document.MAINFORM.PAY_AMT.className == "AMT_P") {
                document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0.00);
            } else if (document.MAINFORM.SETT_AMT.className == "AMT_P") {
                document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0.00);
            } else {
                document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0.00);
                document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0.00);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Multi_EXCH_RATE_onchange = function() {
    try {
        if (document.MAINFORM.COV_NO.value.trim().length != 0) {
            if (SYS_BeFloat(document.MAINFORM.EXCH_RATE.value) == "" || SYS_BeFloat(document.MAINFORM.EXCH_RATE.value) == 0) {
                if (document.MAINFORM.PAY_AMT.className == "AMT_P") {
                    document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0);
                } else if (document.MAINFORM.SETT_AMT.className == "AMT_P") {
                    document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0);
                }
            }
            if (document.MAINFORM.PAY_AMT.className == "AMT_P") {

                cal_PayAmt();
            } else if (document.MAINFORM.SETT_AMT.className == "AMT_P") {
                cal_SettAmt();

            }
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Multi_PAY_AMT_onchange = function() {
    try {
        setMD_Flag(document.MAINFORM.PAY_CCY.value, document.MAINFORM.SETT_CCY.value, rate_type);
        if (SYS_BeFloat(document.MAINFORM.PAY_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.SETT_AMT, "P");
            //}else if(SYS_BeFloat(document.MAINFORM.PAY_AMT.value)==0){
        } else if (SYS_BeFloat(document.MAINFORM.PAY_AMT.value) == 0 || document.MAINFORM.PAY_AMT.value == "" || document.MAINFORM.PAY_AMT.value == null) {
            SYT_ChangeFldClass(document.MAINFORM.SETT_AMT, "O");
            document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0.00);
            document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0.00);
        }
        if (document.MAINFORM.COV_NO.value.trim().length != 0) {
            if (document.MAINFORM.EXCH_RATE.value != '') {

                cal_SettAmt();
            } else {
                alert("Please input Exchange Rate value for the Cover Number");
                document.MAINFORM.EXCH_RATE.focus();
                return;
            }
        } else {
            if (DirDealCust == "Yes") {
                document.MAINFORM.SETT_AMT.focus();
                cal_SettAmt();
            } else {
                SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Multi_SETT_AMT_onchange = function() {
    try {
        setMD_Flag(document.MAINFORM.SETT_CCY.value, document.MAINFORM.PAY_CCY.value, rate_type);

        if (SYS_BeFloat(document.MAINFORM.SETT_AMT.value) > 0) {

            SYT_ChangeFldClass(document.MAINFORM.PAY_AMT, "P");
        } else if (SYS_BeFloat(document.MAINFORM.SETT_AMT.value) == 0 || document.MAINFORM.SETT_AMT.value == "" || document.MAINFORM.SETT_AMT.value == null) {
            SYT_ChangeFldClass(document.MAINFORM.PAY_AMT, "O");
            document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0.00);
            document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0.00);
        }
        if (document.MAINFORM.COV_NO.value.trim().length != 0) {
            if (document.MAINFORM.EXCH_RATE.value != '' || document.MAINFORM.EXCH_RATE.value != null) {
                cal_PayAmt();
            } else {
                alert("Please input Exchange Rate value for the Cover Number");
                document.MAINFORM.EXCH_RATE.focus();
                return;
            }
        } else {
            if (DirDealCust == "Yes") {
                document.MAINFORM.SETT_AMT.focus();
                cal_PayAmt();
            } else {
                SYT_getExchangeRate_Settl(document.MAINFORM.SETT_CCY, document.MAINFORM.PAY_CCY, rate_type, document.MAINFORM.SETT_AMT, document.MAINFORM.PAY_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            }
        }
        //alert('document.MAINFORM.PAY_AMT.value 2' + document.MAINFORM.PAY_AMT.value);
        //Chk_OutstandingAMT();
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Multi_SETT_CCY_onchange = function() {
    try {
        if (document.MAINFORM.MUL_CASH_IND.value == 'No') {
            document.MAINFORM.CPYT_DR_AC.value = "";
        }
        if (document.MAINFORM.PAY_CCY.value != document.MAINFORM.SETT_CCY.value) {
            if (DirDealCust == "Yes") {
                document.MAINFORM.COV_NO.value = "";
                document.MAINFORM.EXCH_RATE.value = "";
                //document.MAINFORM.CPYT_DR_AC.value=""
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                if (document.MAINFORM.PAY_AMT.className == "AMT_P") {
                    document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0.00);
                } else if (document.MAINFORM.SETT_AMT.className == "AMT_P") {
                    document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0.00);
                } else {
                    document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0.00);
                    document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0.00);
                }
                alert("Please Enter the Cover Number for Selected Currency"); // Utility Auto Fix Comments
                //SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY ,document.MAINFORM.SETT_CCY,rate_type,document.MAINFORM.PAY_AMT,document.MAINFORM.SETT_AMT,document.MAINFORM.EXCH_RATE,document.MAINFORM.MD_I,document.MAINFORM.COV_NO);
                document.MAINFORM.COV_NO.focus();
                return;
            } else {
                document.MAINFORM.COV_NO.value = "";
                document.MAINFORM.EXCH_RATE.value = "";
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "O");
                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                if (document.MAINFORM.PAY_AMT.className == "AMT_P") {
                    document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0.00);
                    SYT_getExchangeRate_Settl(document.MAINFORM.SETT_CCY, document.MAINFORM.PAY_CCY, rate_type, document.MAINFORM.SETT_AMT, document.MAINFORM.PAY_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                } else if (document.MAINFORM.SETT_AMT.className == "AMT_P") {
                    SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                } else {
                    SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);

                }
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
            document.MAINFORM.COV_NO.value = "";
            document.MAINFORM.EXCH_RATE.value = 1;
            if (document.MAINFORM.PAY_AMT.className == "AMT_P") {
                document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0.00);
                cal_PayAmt();
            } else if (document.MAINFORM.SETT_AMT.className == "AMT_P") {
                document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0.00);
                cal_SettAmt();
            } else {
                document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0.00);
                document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0.00);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        Check_Cov_Limit();
        getAcctDCFlag();
        editrecord = parent.currentDo.getCurrentRecord();

        if (Rec_Status == "Add") {
            setAutoSettData();
        }

        Check_FixPendProp();

        //Chk_OutstandingAMT();

        //ADDED FOR ITTREVERSAL....EDIT OPTION OR fixpending
        if (editrecord == null) {
            if (mulSettFlag == "No") {
                if (SYS_BeFloat(CrAmt) > 0) {
                    document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, SYS_BeFloat(CrAmt));
                    if (DirDealCust == "Yes") {
                        if (document.MAINFORM.SETT_CCY.value == document.MAINFORM.PAY_CCY.value) {
                            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                            document.MAINFORM.EXCH_RATE.value = 1;
                            cal_SettAmt();
                        } else {
                            document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0);
                            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                            document.MAINFORM.EXCH_RATE.value = "";
                        }
                    } else {

                        SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                    }
                } else {
                    document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, SYS_BeFloat(DbAmt));
                    if (DirDealCust == "Yes") {
                        if (document.MAINFORM.SETT_CCY.value == document.MAINFORM.PAY_CCY.value) {
                            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                            document.MAINFORM.EXCH_RATE.value = 1;
                            cal_PayAmt();
                        } else {
                            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                            document.MAINFORM.EXCH_RATE.value = "";
                        }
                    } else {

                        SYT_getExchangeRate_Settl(document.MAINFORM.SETT_CCY, document.MAINFORM.PAY_CCY, rate_type, document.MAINFORM.SETT_AMT, document.MAINFORM.PAY_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                    }
                }
            }
        }

        setAcctNo_Pending();
        setCCY_Pending();
        document.MAINFORM.CPYT_DR_ID.value = CUST_ID;
        sum_Participts = 0;
        //added by tinu for edit record calcuation
        Temp_Pay_Amt = document.MAINFORM.PAY_AMT.value;
        Temp_Sett_Amt = document.MAINFORM.SETT_AMT.value;


        Chk_OutstandingAMT();

        //Temp_Cov_No=document.MAINFORM.COV_NO.value	
        if (SYS_FUNCTION_TYPE == 'EC') {
            if (mulSettFlag == "No") {
                if (fnName == "ITT FixPending") {
                    document.MAINFORM.ORG_CPYT_DR_AC.value = SYS_getValueFromMain('X103_ORDCUACNO_50A').substring(1);
                } else {
                    document.MAINFORM.ORG_CPYT_DR_AC.value = SYS_getValueFromMain('X103_ORDCUACNO_50A');
                }
            }
        }

        //Moved to the Top 
        //if(Rec_Status=="Add"){
        //	setAutoSettData();
        //}

        if (document.MAINFORM.CPYT_DR_AC.value != "" && document.MAINFORM.CPYT_DR_AC.value != "Not Applicable") {
            Chk_Sett_AcctNo();
        }

    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.PreInitMainData = function() {
    try {
        mulSettFlag = SYS_getValueFromMain('MLT_STLMT');
        DirDealCust = SYS_getValueFromMain('DRT_DEAL_IND');
        RecorderType = SYS_getValueFromMain('RECORDER_TYPE');
        fnName = SYS_ORG_FUNCTION_SHORT_NAME;
        RATE_TYPE = SYS_getValueFromMain('RATE_TYPE');
        rate_type = RATE_TYPE + ';' + RATE_TYPE + ';' + RATE_TYPE;

        if (fnName == 'DI_Re-Purchase') {
            DI_Specific();
        }
        FdsToChk = SYS_getValueFromMain('FDS_TO_CHK');
        if (FdsToChk == "Yes") {
            Override = SYS_getValueFromMain('OVRIDE');
            FdsAvail = SYS_getValueFromMain('FDS_AVAL');
        }

        if (fnName == 'ITTReverPYMT' || fnName == 'OTTReverPYMT') {
            CrCcy = SYS_getValueFromMain('REVE_CCY');
            document.MAINFORM.PAY_CCY.value = CrCcy;
            document.MAINFORM.SETT_CCY.value = CrCcy;
            CrAmt = SYS_BeFloat(SYS_getValueFromMain('REVE_AMT'));
            DbAmt = SYS_BeFloat(SYS_getValueFromMain('DB_CALC_AMT'));
            //ADDED BY TINU
            if (fnName == 'OTTReverPYMT') {
                //applicantType = SYS_getValueFromMain('APP_TYPE');
                CUST_ID = SYS_getValueFromMain('X103_ORDCU_ID_50A');
                FdsToChk = "No";
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_TYPE, "O");
            } else if (fnName == 'ITTReverPYMT') {
                CUST_ID = SYS_getValueFromMain('X103_BENECU_ID_59A');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_TYPE, "P");
            }
            SYT_ChangeFldClass(document.MAINFORM.PAY_CCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.RELA_REF, "P");
        } else if (fnName == 'Proc_Inc_103' || fnName == 'SettleRec9xx') {
            mulSettFlag = 'No';
            CrCcy = SYS_getValueFromMain('CR_CCY');
            document.MAINFORM.PAY_CCY.value = CrCcy;
            //DbCcy = SYS_getValueFromMain('DB_CCY');
            document.MAINFORM.SETT_CCY.value = CrCcy;
            CrAmt = SYS_BeFloat(SYS_getValueFromMain('CR_AMT'));
            DbAmt = SYS_BeFloat(SYS_getValueFromMain('DB_CALC_AMT'));
            //ADDED BY TINU
            CUST_ID = SYS_getValueFromMain('X103_BENECU_ID_59A');
            SYT_ChangeFldClass(document.MAINFORM.PAY_CCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_TYPE, "P");
            SYT_ChangeFldClass(document.MAINFORM.RELA_REF, "P");
        } else if (fnName == 'Re-effect_OTT') {
            FdsToChk = "Yes";
            applicantType = SYS_getValueFromMain('APP_TYPE');
            CrCcy = SYS_getValueFromMain('CR_CCY');
            document.MAINFORM.PAY_CCY.value = CrCcy;
            document.MAINFORM.SETT_CCY.value = CrCcy;
            CrAmt = SYS_BeFloat(SYS_getValueFromMain('CR_CALC_AMT'));
            CUST_ID = SYS_getValueFromMain('X103_ORDCU_ID_50A');
        } else {
            CrCcy = SYS_getValueFromMain('CR_CCY');
            document.MAINFORM.PAY_CCY.value = CrCcy;
            DbCcy = SYS_getValueFromMain('DB_CCY');
            document.MAINFORM.SETT_CCY.value = DbCcy;
            CrAmt = SYS_BeFloat(SYS_getValueFromMain('CR_CALC_AMT'));
            DbAmt = SYS_BeFloat(SYS_getValueFromMain('DB_CALC_AMT'));
            document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0);
            document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0);
            CUST_ID = SYS_getValueFromMain('X103_ORDCU_ID_50A');
            if (fnName == 'CompOutPmt') {
                applicantType = SYS_getValueFromMain('APP_TYPE');
                if (applicantType == 'BANK') {
                    if (DbCcy == SYS_LOCAL_CCY) {
                        document.MAINFORM.CPYT_DR_AC_TYPE.value = 'VOSTRO';
                    } else {
                        document.MAINFORM.CPYT_DR_AC_TYPE.value = 'NOSTRO';
                    }
                    if (mulSettFlag == 'No') {
                        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_TYPE, "P");
                    }
                }
            }
        }
        // Default Multi-Settlement Flag to 'No' for Nigeria
        if (SYS_BANK_COUNTRY == "NG") {
            mulSettFlag = 'No';
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        Rec_Status = "Edit";
        PreInitMainData(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Set_FldClassProp = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.PAY_CCY, "P");
        SYT_ChangeFldClass(document.MAINFORM.PAY_AMT, "O");
        SYT_ChangeFldClass(document.MAINFORM.SETT_CCY, "O");
        SYT_ChangeFldClass(document.MAINFORM.SETT_AMT, "O");
        SYT_ChangeFldClass(document.MAINFORM.RELA_REF, "O");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_NAME, "O");
        SYT_ChangeFldClass(document.MAINFORM.COV_NO, "O");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
        SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
        SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
        SYT_ChangeFldClass(document.MAINFORM.MUL_FDS_AVAL, "O");
        //SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE,"O");
        SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE, "P"); //sathish Dec 30
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_TYPE, "O");
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Single_COV_NO_onchange = function() {
    try {
        if (CrAmt > 0) {
            setMD_Flag(document.MAINFORM.PAY_CCY.value, document.MAINFORM.SETT_CCY.value, rate_type);
            if (document.MAINFORM.COV_NO.value.trim() == "" || document.MAINFORM.COV_NO.value.trim == null) {
                //document.MAINFORM.EXCH_RATE.value =document.MAINFORM.ORG_EXCH_RATE.value;
                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                document.MAINFORM.EXCH_RATE.value = "";
                if (DirDealCust == "No") {

                    SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                } else {
                    document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0);
                }
                SYT_ChangeFldClass(document.MAINFORM.SETT_AMT, "P");
                document.MAINFORM.COV_NO.value = "";
                document.MAINFORM.COV_NO.focus();
            } else {
                document.MAINFORM.EXCH_RATE.value = "";
                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "M");
                SYT_ChangeFldClass(document.MAINFORM.SETT_AMT, "P");
                document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0);
            }

        } else {
            setMD_Flag(document.MAINFORM.SETT_CCY.value, document.MAINFORM.PAY_CCY.value, rate_type);
            if (document.MAINFORM.COV_NO.value.trim() == "" || document.MAINFORM.COV_NO.value.trim() == null) {
                document.MAINFORM.EXCH_RATE.value = document.MAINFORM.ORG_EXCH_RATE.value;
                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                document.MAINFORM.EXCH_RATE.value = "";
                if (DirDealCust == "No") {

                    SYT_getExchangeRate_Settl(document.MAINFORM.SETT_CCY, document.MAINFORM.PAY_CCY, rate_type, document.MAINFORM.SETT_AMT, document.MAINFORM.PAY_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                } else {
                    document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0.00);

                }
                SYT_ChangeFldClass(document.MAINFORM.PAY_AMT, "P");
                document.MAINFORM.COV_NO.value = "";
                document.MAINFORM.COV_NO.focus();
            } else {
                document.MAINFORM.EXCH_RATE.value = "";
                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "M");
                SYT_ChangeFldClass(document.MAINFORM.PAY_AMT, "P");
                document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0.00);
            }
        }
        //added by tinu for exchange rate
        if (document.MAINFORM.MD_I.value == "" || document.MAINFORM.MD_I.value == null) {
            //alert("Exchange Rate for "+document.MAINFORM.PAY_CCY.value+" to "+document.MAINFORM.SETT_CCY.value+" not loaded. Transaction cannot be processed.")
            alert("MD Flag not loaded.Please contact Technical Support ."); // Utility Auto Fix Comments
            document.MAINFORM.COV_NO.value = "";
            document.MAINFORM.EXCH_RATE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Single_EXCH_RATE_onchange = function() {
    try {
        if (SYS_BeFloat(CrAmt) > 0) {
            if (document.MAINFORM.EXCH_RATE.value == "") {
                document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0);
            }
            cal_SettAmt();
        } else if (SYS_BeFloat(DbAmt) > 0) {
            if (document.MAINFORM.EXCH_RATE.value == "") {
                document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, 0);
            }
            cal_PayAmt();
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Single_PAY_AMT_onchange = function() {
    try {
        if (document.MAINFORM.COV_NO.value.trim() != "") {
            if (document.MAINFORM.EXCH_RATE.value != '') {
                cal_SettAmt();
            } else {
                alert("Please input Exchange Rate value for the Cover Number");
                document.MAINFORM.EXCH_RATE.focus();
                return;
            }
        } else {
            SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Single_SETT_AMT_onchange = function() {
    try {
        if (document.MAINFORM.COV_NO.value.trim() != "") {
            if (document.MAINFORM.EXCH_RATE.value != '') {
                cal_PayAmt();
            } else {
                alert("Please input Exchange Rate value for the Cover Number");
                document.MAINFORM.EXCH_RATE.focus();
                return;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.Single_SETT_CCY_onchange = function() {
    try {
        if (document.MAINFORM.MUL_CASH_IND.value == 'No') {
            if (document.MAINFORM.ORG_SETT_CCY.value == document.MAINFORM.SETT_CCY.value) {
                document.MAINFORM.CPYT_DR_AC.value = document.MAINFORM.ORG_CPYT_DR_AC.value;
            } else {
                document.MAINFORM.CPYT_DR_AC.value = "";
            }
        }
        if (document.MAINFORM.PAY_CCY.value != document.MAINFORM.SETT_CCY.value) {
            if (DirDealCust == "Yes") {
                SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                document.MAINFORM.COV_NO.value = "";
                document.MAINFORM.EXCH_RATE.value = "";
                //document.MAINFORM.CPYT_DR_AC.value=""
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, 0.00);
                alert("Please Enter the Cover Number for Selected Currency"); // Utility Auto Fix Comments
                document.MAINFORM.COV_NO.focus();
                return;
            } else {
                document.MAINFORM.COV_NO.value = "";
                document.MAINFORM.EXCH_RATE.value = "";
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "O");
            }
            if (SYS_BeFloat(CrAmt) > 0) {
                SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                cal_SettAmt();
            } else {
                SYT_getExchangeRate_Settl(document.MAINFORM.SETT_CCY, document.MAINFORM.PAY_CCY, rate_type, document.MAINFORM.SETT_AMT, document.MAINFORM.PAY_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            }

        } else {
            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
            document.MAINFORM.COV_NO.value = "";
            document.MAINFORM.EXCH_RATE.value = 1;
            cal_SettAmt();
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.cal_PayAmt = function() {
    try {
        var PAY_AMT; // Utility Auto Fix Comments
        if (document.MAINFORM.EXCH_RATE.value != '') {

            //added for new exchange rate change--tinu
            if (document.MAINFORM.SETT_CCY.value != document.MAINFORM.PAY_CCY.value) {
                if (document.MAINFORM.MD_I.value == 'M') {
                    PAY_AMT = SYS_BeFloat(document.MAINFORM.SETT_AMT.value) * SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
                } else if (document.MAINFORM.MD_I.value == 'D') {
                    PAY_AMT = SYS_BeFloat(document.MAINFORM.SETT_AMT.value) / SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
                }
            } else {
                PAY_AMT = SYS_BeFloat(document.MAINFORM.SETT_AMT.value) * SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
            }

            if (PAY_AMT < 0.000001) {
                PAY_AMT = 0.000001;
            }
            document.MAINFORM.PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PAY_CCY.value, PAY_AMT);
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.cal_SettAmt = function() {
    try {
        var SETT_AMT; // Utility Auto Fix Comments
        if (document.MAINFORM.EXCH_RATE.value != '') {

            //added for new exchange rate change--tinu
            if (document.MAINFORM.SETT_CCY.value != document.MAINFORM.PAY_CCY.value) {

                if (document.MAINFORM.MD_I.value == 'M') {
                    SETT_AMT = SYS_BeFloat(document.MAINFORM.PAY_AMT.value) * SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
                } else if (document.MAINFORM.MD_I.value == 'D') {
                    SETT_AMT = SYS_BeFloat(document.MAINFORM.PAY_AMT.value) / SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
                }
            } else {
                SETT_AMT = SYS_BeFloat(document.MAINFORM.PAY_AMT.value) * SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
            }

            if (SETT_AMT < 0.000001) {
                SETT_AMT = 0.000001;
            }
            document.MAINFORM.SETT_AMT.value = SYT_AmtFormat(document.MAINFORM.SETT_CCY.value, SETT_AMT);
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.fail = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.getAccountNum = function() {
    try {
        var AcctType; // Utility Auto Fix Comments
        AcctType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
        if (AcctType == "NOSTRO" || AcctType == "VOSTRO") {
            SYS_InqCUBK_byCondition('NOSTRO_AC_NO', '1');
        } else {
            SYS_InqCUBK_byCondition('CPYT_DR_AC', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.getAcctDCFlag = function() {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var PRODREF; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var mainRef; // Utility Auto Fix Comments
        mainRef = SYS_getValueFromMain('C_MAIN_REF');
        PRODREF = mainRef.substring(0, 2); // Utility Auto Fix Comments
        if (fnName == 'ITTReverPYMT') {
            //PRODREF = 'OT';
            SYS_GetTableDataByRule('SSSS_PYMT_MultipleDebits_getAcctDCFlag_6', '1', '', '', true);
        } else if (fnName == 'OTTReverPYMT') {
            //PRODREF = 'IT';
            SYS_GetTableDataByRule('SSSS_PYMT_MultipleDebits_getAcctDCFlag_3', '1', '', '', true);
        }
        //Sql_Cond = "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "ITEM_C=" + "'002'" + " AND " + "ITEM_NAME = " + "'" + PRODREF + "'";
        //Field_List = "FIELD_6_X";
        //Mapping_List = "FIELD_6_X";
        //SYS_GetTableDataByRule('SSSS_PYMT_MultipleDebits_getAcctDCFlag_3', '1', '', '', true);
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.getOverDrawnInd = function() {
    try {
        var AcctType; // Utility Auto Fix Comments
        AcctType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
        if (document.MAINFORM.MUL_CASH_IND.value == 'No') {
            if (AcctType == "CUSTOMER") {
                if (document.MAINFORM.CPYT_DR_AC.value != '') {
                    //SYS_GetCUBK('CPYT_DR_AC','CPYT_DR_AC','succ','fail','TRUE');
                    SYS_GetCUBK_S('CPYT_DR_AC', 'CPYT_DR_AC', 'TRUE');
                    if (document.MAINFORM.MUL_CASH_IND.value == 'No') {
                        if (document.MAINFORM.MUL_FDS_AVAL.value == 'No') {
                            if (document.MAINFORM.C_AC_IDENTIFIER.value != '' && document.MAINFORM.C_AC_IDENTIFIER.value == 'N') {
                                alert("The entered Account number cannot be overdrawn.");
                                document.MAINFORM.MUL_OVRIDE.value = "No";
                            }
                        }
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.initMainData = function() {
    try {
        if (mulSettFlag == "No") {
            SYT_ChangeFldClass(document.MAINFORM.SETT_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.PAY_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.SETT_CCY, "P");
            if (fnName == 'Proc_Inc_103' || fnName == 'ITTReverPYMT' || fnName == 'SettleRec9xx') {
                SYT_ChangeFldClass(document.MAINFORM.SETT_CCY, "O");
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_TYPE, "P");
                if (RecorderType == "NonCustomer") {
                    if (SYS_getValueFromMain('X103_BENECUACNO59A').substring(0, 1) == "/") {
                        document.MAINFORM.CPYT_DR_AC.value = SYS_getValueFromMain('X103_BENECUACNO59A').substring(1);
                    } else {
                        document.MAINFORM.CPYT_DR_AC.value = SYS_getValueFromMain('X103_BENECUACNO59A');
                    }
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                    SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    protFundsRow(); //sathish
                } else {
                    if (SYS_getValueFromMain('X103_BENECUACNO59A').substring(0, 1) == "/") {
                        document.MAINFORM.CPYT_DR_AC.value = SYS_getValueFromMain('X103_BENECUACNO59A').substring(1);
                    } else {
                        document.MAINFORM.CPYT_DR_AC.value = SYS_getValueFromMain('X103_BENECUACNO59A');
                    }
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                    SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                }
            } else {
                document.MAINFORM.CPYT_DR_AC.value = SYS_getValueFromMain('X103_ORDCUACNO_50A');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN); // Utility Auto Fix Comments
            }
            if (fnName == 'CompOutPmt' || fnName == 'OTTReverPYMT') {
                if (RecorderType == "NonCustomer") {
                    document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                    protFundsRow(); //sathish
                } else {
                    //document.MAINFORM.CPYT_DR_AC.value=document.MAINFORM.CPYT_DR_AC.value.substring(1);
                    document.MAINFORM.CPYT_DR_AC.value = SYS_getValueFromMain('X103_ORDCUACNO_50A');
                }
            }
        }
        if (fnName != 'Proc_Inc_103' || fnName != 'SettleRec9xx') {
            getOverDrawnInd();
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.protFundsRow = function() {
    try {
        document.MAINFORM.MUL_FDS_AVAL.value = 'Yes';
        document.MAINFORM.MUL_OVRIDE.value = 'No';
        SYT_ChangeFldClass(document.MAINFORM.MUL_FDS_AVAL, "P");
        SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE, "P");
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.setAcctNo_Pending = function() {
    try {
        if (fnName == 'Proc_Inc_103' || fnName == 'ITTReverPYMT' || fnName == 'SettleRec9xx') {
            if (SYS_getValueFromMain('X103_BENECUACNO59A').substring(0, 1) == "/") {
                document.MAINFORM.ORG_CPYT_DR_AC.value = SYS_getValueFromMain('X103_BENECUACNO59A').substring(1);
            } else {
                document.MAINFORM.ORG_CPYT_DR_AC.value = SYS_getValueFromMain('X103_BENECUACNO59A');
            }
        } else {
            document.MAINFORM.ORG_CPYT_DR_AC.value = SYS_getValueFromMain('X103_ORDCUACNO_50A');

        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.setAutoSettData = function() {
    try {
        var RecCovNo; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var splitSettVal; // Utility Auto Fix Comments
        if (fnName == "CompOutPmt" && SYS_getValueFromMain("AUTO_CREATED") == "Yes") {
            arr = SYS_getValueFromMain("SETT_DET_INFO_AUTO");
            splitSettVal = arr.split("|");
            for (i = 0; i < splitSettVal.length; i++) {
                if (splitSettVal[i].substring(0, splitSettVal[i].indexOf(":")) == "EX_RATE") {
                    document.MAINFORM.EXCH_RATE.value = splitSettVal[i].substring(splitSettVal[i].indexOf(":") + 1);
                } else if (splitSettVal[i].substring(0, splitSettVal[i].indexOf(":")) == "COV_NO") {
                    RecCovNo = splitSettVal[i].substring(splitSettVal[i].indexOf(":") + 1);
                    if (RecCovNo != "null" && RecCovNo != "") {
                        document.MAINFORM.COV_NO.value = RecCovNo;
                    } else {
                        document.MAINFORM.COV_NO.value = "";
                    }
                } else if (splitSettVal[i].substring(0, splitSettVal[i].indexOf(":")) == "MUL_CASH_IND") {
                    document.MAINFORM.MUL_CASH_IND.value = splitSettVal[i].substring(splitSettVal[i].indexOf(":") + 1);
                } else if (splitSettVal[i].substring(0, splitSettVal[i].indexOf(":")) == "CPYT_DR_AC") {
                    document.MAINFORM.CPYT_DR_AC.value = splitSettVal[i].substring(splitSettVal[i].indexOf(":") + 1);
                } else if (splitSettVal[i].substring(0, splitSettVal[i].indexOf(":")) == "PAY_CCY") {
                    document.MAINFORM.PAY_CCY.value = splitSettVal[i].substring(splitSettVal[i].indexOf(":") + 1);
                } else if (splitSettVal[i].substring(0, splitSettVal[i].indexOf(":")) == "PAY_AMT") {
                    document.MAINFORM.PAY_AMT.value = splitSettVal[i].substring(splitSettVal[i].indexOf(":") + 1);
                } else if (splitSettVal[i].substring(0, splitSettVal[i].indexOf(":")) == "SETT_CCY") {
                    document.MAINFORM.SETT_CCY.value = splitSettVal[i].substring(splitSettVal[i].indexOf(":") + 1);
                } else if (splitSettVal[i].substring(0, splitSettVal[i].indexOf(":")) == "SETT_AMT") {
                    document.MAINFORM.SETT_AMT.value = splitSettVal[i].substring(splitSettVal[i].indexOf(":") + 1);
                }
            }
        }

        if (document.MAINFORM.PAY_AMT.value > 0) {
            EEHtml.fireEvent(document.MAINFORM.PAY_AMT, "onchange");
        } else if (document.MAINFORM.SETT_AMT.value > 0) {
            EEHtml.fireEvent(document.MAINFORM.SETT_AMT, "onchange");
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.setCCY_Pending = function() {
    try {
        if (fnName == 'ITTReverPYMT' || fnName == 'OTTReverPYMT') {
            document.MAINFORM.ORG_SETT_CCY.value = SYS_getValueFromMain('REVE_CCY');
        } else if (fnName == 'Proc_Inc_103' || fnName == 'Re-effect_OTT' || fnName == 'SettleRec9xx') {
            document.MAINFORM.ORG_SETT_CCY.value = SYS_getValueFromMain('CR_CCY');
        } else {
            document.MAINFORM.ORG_SETT_CCY.value = SYS_getValueFromMain('DB_CCY');
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.setCashIndProp = function() {
    try {
        if (RecorderType == "NonCustomer") {
            document.MAINFORM.MUL_CASH_IND.value = "Yes";
            SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "P");
            document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
            protFundsRow(); //sathish		
        } else if (RecorderType == "Customer" && document.MAINFORM.CPYT_DR_AC_TYPE.value == "CUSTOMER") {
            //document.MAINFORM.MUL_CASH_IND.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
            if (fnName == 'Proc_Inc_103' || fnName == 'ITTReverPYMT' || fnName == 'SettleRec9xx') {
                if (document.MAINFORM.MUL_CASH_IND.value == "Yes") {
                    SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";

                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                    SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);

                }
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
            }


        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.setCovNoProp = function() {
    try {
        if (document.MAINFORM.PAY_CCY.value != document.MAINFORM.SETT_CCY.value) {
            if (DirDealCust == "Yes") {
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                document.MAINFORM.EXCH_RATE.value = "";
            } else {
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "O");
            }
            //added for testing new exchange rate--tinu
            SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);

            //-----
        } else {
            SYT_getExchangeRate_Settl(document.MAINFORM.PAY_CCY, document.MAINFORM.SETT_CCY, rate_type, document.MAINFORM.PAY_AMT, document.MAINFORM.SETT_AMT, document.MAINFORM.EXCH_RATE, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
            document.MAINFORM.EXCH_RATE.value = 1;
            if (mulSettFlag == 'No') {
                if (SYS_BeFloat(CrAmt) > 0) {
                    cal_SettAmt();
                } else {
                    cal_PayAmt();
                }
            }
        }
        //Chk_CashInd();
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.setFundsInitValues = function() {
    try {
        if (Override == "Yes") {
            document.MAINFORM.MUL_OVRIDE.value = Override;
            document.MAINFORM.MUL_FDS_AVAL.value = FdsAvail;
            SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE, "P");
            SYT_ChangeFldClass(document.MAINFORM.MUL_FDS_AVAL, "P");
        } else if (Override == "No") {
            document.MAINFORM.MUL_OVRIDE.value = "No";
            document.MAINFORM.MUL_FDS_AVAL.value = "Yes";
            SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE, "P");
            SYT_ChangeFldClass(document.MAINFORM.MUL_FDS_AVAL, "O");
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.setFundsRow = function() {
    try {
        if (FdsToChk == "Yes") {
            EEHtml.getElementById("FUNDS_ROW").style.display = "block";
            //SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE,"P");	
            //SYT_ChangeFldClass(document.MAINFORM.MUL_FDS_AVAL,"O");	
            //setFundsInitValues();
        } else if (FdsToChk == "No") {
            EEHtml.getElementById("FUNDS_ROW").style.display = "none";
            //SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE,"P");	
            //SYT_ChangeFldClass(document.MAINFORM.MUL_FDS_AVAL,"P");	
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.setMD_Flag = function(vToCcy, sRateType, vFrmCcy) {
    try {
        var Field_List1; // Utility Auto Fix Comments
        var Field_List2; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Mapping_List2; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var Sql_Cond2; // Utility Auto Fix Comments
        var sRateTypeL; // Utility Auto Fix Comments
        var vCurency1; // Utility Auto Fix Comments
        var vCurency2; // Utility Auto Fix Comments
        var vRate; // Utility Auto Fix Comments
        vRate = "";
        sRateTypeL = sRateType.split(";");
        document.MAINFORM.MD_I.value = "";
        SYS_GetExchangeRate_S(vFrmCcy, vToCcy, sRateTypeL[0], document.MAINFORM.COV_EXCH_RATE.name, '', document.MAINFORM.MD_I.name, '', '', '', '');

        if (document.MAINFORM.MD_I.value == "" || document.MAINFORM.MD_I.value == null) {
            vCurency2 = vFrmCcy + vToCcy;
            vCurency2CUBK = vCurency2;
            //Sql_Cond2 = "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "ITEM_C= '008'" + "AND " + "ITEM_NAME=" + "'" + vCurency2CUBK + "'";
            //Field_List2 = "FIELD_1_X";
            //Mapping_List2 = "MD_I";
            SYS_GetTableDataByRule_S('SSSS_PYMT_MultipleDebits_setMD_Flag_4', '1', 'false');

            if (document.MAINFORM.MD_I.value == "" || document.MAINFORM.MD_I.value == null) {
                vCurency1 = vToCcy + vFrmCcy;
                vCurency1CUBK = vCurency1;
                //Sql_Cond1 = "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "ITEM_C= '008'" + "AND " + "ITEM_NAME=" + "'" + vCurency1CUBK + "'";
                //Field_List1 = "FIELD_1_X";
                //Mapping_List1 = "MD_I";
                SYS_GetTableDataByRule_S('SSSS_PYMT_MultipleDebits_setMD_Flag_5', '1', 'false');
                if (document.MAINFORM.MD_I.value == 'M') {
                    document.MAINFORM.MD_I.value = 'D';
                } else if (document.MAINFORM.MD_I.value == 'D') {
                    document.MAINFORM.MD_I.value = 'M';
                }
            }

        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.setMultiCCYProp = function() {
    try {
        var ChkVal; // Utility Auto Fix Comments
        var Cross_Ccy_Ind; // Utility Auto Fix Comments
        var Multi_Ccy_Ind; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        Multi_Ccy_Ind = "No"; // Utility Auto Fix Comments
        Cross_Ccy_Ind = "No"; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits');
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        for (i = 0; i < Records.length; i++) {
            Record = Records[i];
            ChkVal = SYS_getValFromRec(Record, "MUL_CASH_IND");
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.succ = function() {
    try {
        if (document.MAINFORM.MUL_CASH_IND.value == 'No') {
            if (document.MAINFORM.MUL_FDS_AVAL.value == 'No') {
                if (document.MAINFORM.C_AC_IDENTIFIER.value != '' && document.MAINFORM.C_AC_IDENTIFIER.value == 'N') {
                    alert("The entered Account number cannot be overdrawn.");
                    document.MAINFORM.MUL_OVRIDE.value = "No";
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.unprotFundsRow = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.MUL_FDS_AVAL, "O");
        document.MAINFORM.MUL_FDS_AVAL.value = 'Yes';
        document.MAINFORM.MUL_OVRIDE.value = 'No';
        SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE, "P"); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.validateCover = function() {
    try {
        var COV_AMT; // Utility Auto Fix Comments
        var COV_CCY; // Utility Auto Fix Comments
        var COV_VAL_DT; // Utility Auto Fix Comments
        var FOREIGN_AGNT; // Utility Auto Fix Comments
        var PUR_SAL_IND; // Utility Auto Fix Comments
        var RemAmt; // Utility Auto Fix Comments
        var SendForAgnt; // Utility Auto Fix Comments
        var SpotDt; // Utility Auto Fix Comments
        var dCovValDt; // Utility Auto Fix Comments
        var dSpotDt; // Utility Auto Fix Comments
        var dSysDt; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        COV_CCY = document.MAINFORM.COV_CCY.value;
        COV_VAL_DT = document.MAINFORM.COV_VAL_DT.value;
        PUR_SAL_IND = document.MAINFORM.PUR_SAL_IND.value;
        COV_AMT = SYS_BeFloat(document.MAINFORM.COV_AMT.value);
        FOREIGN_AGNT = document.MAINFORM.FOREIGN_AGNT.value;

        RemAmt = SYS_BeFloat(document.MAINFORM.PAY_AMT.value);

        if (CrCcy != COV_CCY) {
            alert("The Currency of the Cover/FEC inconsistent with the Remittance Currency"); // Utility Auto Fix Comments
        }

        if (RemAmt > COV_AMT) {
            alert("The Amount of the Cover/FEC inconsistent with the Remittance Amount");
        }

        dCovValDt = SYT_GetDateObjectFromStr(COV_VAL_DT);
        sSysDt = SYS_BUSI_DATE;
        dSysDt = SYT_GetDateObjectFromStr(sSysDt);
        if (dCovValDt < dSysDt) {
            alert("The Cover Value Date is invalid"); // Utility Auto Fix Comments
        } else {
            SpotDt = SYS_getValueFromMain('TWO_DAYS_BACK');
            dSpotDt = SYT_GetDateObjectFromStr(SpotDt);
            if (dCovValDt > dSpotDt) {
                alert("The Cover Value Date is invalid");
            }
        }
        /*
	if(){
		alert("The purchase / sale indicator of the Cover is Invalid");
	}
	*/
        SendForAgnt = SYS_getValueFromMain('CPYT_CR_BK_AC');
        if (FOREIGN_AGNT != SendForAgnt) {
            alert("The Foreign Agent of the Cover/FEC inconsistent with the Remittance Foreign Agent");
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.CPYT_DR_AC_onchange = function(event) {
    try {
        Chk_Sett_AcctNo();
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.CPYT_DR_AC_TYPE_onchange = function(event) {
    try {
        document.MAINFORM.CPYT_DR_NAME.value = '';
        AcctType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
        MulCasInd = document.MAINFORM.MUL_CASH_IND.value;
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        cashRes = false;
        for (i = 0; i <= Records.length; i++) {
            Record = Records[i];
            ChkVal = SYS_getValFromRec(Record, "MUL_CASH_IND");
            if (ChkVal == "Yes") {
                cashRes = true;
            }
        }
        if (AcctType == "NOSTRO" || AcctType == "VOSTRO") {
            document.MAINFORM.RELA_REF.value = "";
            document.MAINFORM.CPYT_DR_AC.value = "";
            document.MAINFORM.MUL_CASH_IND.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.RELA_REF, "M");
            SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "P");
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
            SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
            protFundsRow(); //saevent.currentTargeth dec 09
        } else {
            if (applicantType == 'BANK') {
                alert('Customer is not allowed');
                if (DbCcy == SYS_LOCAL_CCY) {
                    document.MAINFORM.CPYT_DR_AC_TYPE.value = 'VOSTRO';
                } else {
                    document.MAINFORM.CPYT_DR_AC_TYPE.value = 'NOSTRO';
                }
            } else {
                document.MAINFORM.RELA_REF.value = "";
                document.MAINFORM.CPYT_DR_AC.value = "";
                SYT_ChangeFldClass(document.MAINFORM.RELA_REF, "O");
                if (mulSettFlag == "Yes") {
                    if (cashRes) {
                        if (editrecord != null && editrecord["MUL_CASH_IND"] == "Yes") {
                            document.MAINFORM.MUL_CASH_IND.value = "Yes";
                            //SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND,"P");//saevent.currentTargeth dec 15
                            SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
                            document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                            SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            protFundsRow(); //saevent.currentTargeth dec 30
                            //unprotFundsRow();//saevent.currentTargeth dec 30
                        } else {
                            document.MAINFORM.MUL_CASH_IND.value = "No";
                            //SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND,"P");	saevent.currentTargeth dec 15
                            SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
                            SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M"); // Utility Auto Fix Comments
                            SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            unprotFundsRow(); //saevent.currentTargeth dec 09
                        }
                    } else {
                        if (RecorderType == "NonCustomer") {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                            document.MAINFORM.MUL_CASH_IND.value = "Yes";
                            SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "P"); // Utility Auto Fix Comments
                            SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                            protFundsRow(); //saevent.currentTargeth dec 30
                            //unprotFundsRow();//saevent.currentTargeth dec 30
                        } else {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M"); // Utility Auto Fix Comments
                            SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            document.MAINFORM.MUL_CASH_IND.value = "No";
                            SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O"); // Utility Auto Fix Comments
                            document.MAINFORM.CPYT_DR_AC.value = "";
                            unprotFundsRow(); //saevent.currentTargeth dec 09
                        }
                    }
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                    //document.MAINFORM.CPYT_DR_AC.value="Not Applicable";	
                    SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    if (fnName == 'Proc_Inc_103' || fnName == 'ITTReverPYMT' || fnName == 'SettleRec9xx') {
                        if (RecorderType == "NonCustomer") {
                            document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P");
                            SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            //protFundsRow();//saevent.currentTargeth dec 09
                        } else {
                            document.MAINFORM.CPYT_DR_AC.value = document.MAINFORM.ORG_CPYT_DR_AC.value;
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                            SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                        }
                    }
                    if (RecorderType == "NonCustomer") {
                        document.MAINFORM.MUL_CASH_IND.value = "Yes";
                        SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "P");
                        document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                        SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                        protFundsRow(); //saevent.currentTargeth	dec 09
                    } else {
                        document.MAINFORM.MUL_CASH_IND.value = "No";
                        SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
                        if (mulSettFlag == "No") {
                            document.MAINFORM.CPYT_DR_AC.value = document.MAINFORM.ORG_CPYT_DR_AC.value;
                        }
                        SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                        unprotFundsRow(); //saevent.currentTargeth dec 09
                    }
                }
            }
        }
        Chk_Sett_AcctNo(); //added
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.EXCH_RATE_onchange = function(event) {
    try {
        /*
	SYT_Chg_NegativeAmt(event.currentTarget);	
	if(document.MAINFORM.COV_NO.value.trim()!="" ){
		if(SYS_BeFloat(document.MAINFORM.EXCH_RATE.value)=="" ||SYS_BeFloat(document.MAINFORM.EXCH_RATE.value)==0 ){
			alert("Please enter Exchange Rate value for the entered Cover Number")
			document.MAINFORM.EXCH_RATE.focus();
		}		
	}
	*/
        if (document.MAINFORM.EXCH_RATE.value.match(/[\D]/) == null || document.MAINFORM.EXCH_RATE.value.match(/[\D]/) == SYS_AMT_DEC_FORMAT) {
            if (document.MAINFORM.EXCH_RATE.value.split(SYS_AMT_DEC_FORMAT).length > 2) {
                document.MAINFORM.EXCH_RATE.value = 0;
            }
        } else {
            document.MAINFORM.EXCH_RATE.value = 0;
        }
        if (fnName == 'Proc_Inc_103' || fnName == 'ITTReverPYMT' || fnName == 'SettleRec9xx') {
            if (SYS_BeFloat(document.MAINFORM.PAY_AMT.value) > 0) {
                document.MAINFORM.SETT_AMT.value = 0;
                cal_SettAmt();
            }
        } else {
            if (mulSettFlag == 'No') {
                Single_EXCH_RATE_onchange();
            } else {
                Multi_EXCH_RATE_onchange();
            }
        }
        //Chk_OutstandingAMT();
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.MUL_CASH_IND_onchange = function(event) {
    try {
        document.MAINFORM.CPYT_DR_NAME.value = '';
        MulCasInd = document.MAINFORM.MUL_CASH_IND.value;
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        cashRes = false;
        for (i = 0; i <= Records.length; i++) {
            Record = Records[i];
            ChkVal = SYS_getValFromRec(Record, "MUL_CASH_IND");
            if (ChkVal == "Yes") {
                cashRes = true;
            }
        }

        if (editrecord != null) { //editing  record
            if (cashRes) {
                if (editrecord["MUL_CASH_IND"] == "Yes") {
                    if (MulCasInd == "No") {
                        if (mulSettFlag == "Yes") {
                            if (RecorderType != 'NonCustomer') { //jan 04 10
                                SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M"); // Utility Auto Fix Comments
                                document.MAINFORM.CPYT_DR_AC.value = "";
                                unprotFundsRow(); //TINU
                            } else {
                                document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                                SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                                protFundsRow(); //tinu
                            }
                        } else {

                            if (RecorderType != 'NonCustomer') {
                                if (document.MAINFORM.ORG_SETT_CCY.value == document.MAINFORM.SETT_CCY.value) {
                                    if (mulSettFlag == "No") {
                                        document.MAINFORM.CPYT_DR_AC.value = document.MAINFORM.ORG_CPYT_DR_AC.value;
                                    }
                                    unprotFundsRow(); //TINU
                                } else {
                                    document.MAINFORM.CPYT_DR_AC.value = "";
                                }
                            }
                            if (fnName == 'Proc_Inc_103' || fnName == 'ITTReverPYMT' || fnName == 'SettleRec9xx') {
                                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M"); // Utility Auto Fix Comments
                                SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                                if (document.MAINFORM.SETT_CCY.value == document.MAINFORM.PAY_CCY.value) {
                                    document.MAINFORM.COV_NO.value = '';
                                    document.MAINFORM.EXCH_RATE.value = 1;
                                    SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                                    SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                                    document.MAINFORM.SETT_AMT.value = document.MAINFORM.PAY_AMT.value;
                                }
                            } else {
                                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                                SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            }
                        }
                    } else {
                        document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                        SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                        protFundsRow(); //tinu
                    }
                } else {
                    if (mulSettFlag == "Yes") {
                        alert("Settlement row with Cash Indicator already added"); // Utility Auto Fix Comments
                        document.MAINFORM.MUL_CASH_IND.value = "No";
                        SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND, "O");
                        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M"); // Utility Auto Fix Comments
                        SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    }
                }
            } else {
                if (MulCasInd == "Yes") {
                    document.MAINFORM.CPYT_DR_AC.value = "";
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                    SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                    document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                    protFundsRow(); //tinu
                } else {
                    if (mulSettFlag == "Yes") {
                        if (RecorderType == "NonCustomer") {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                            SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                            protFundsRow(); //saevent.currentTargeth
                        } else {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M"); // Utility Auto Fix Comments
                            SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            document.MAINFORM.CPYT_DR_AC.value = "";
                        }
                    } else {
                        if (RecorderType == "NonCustomer") {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                            SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                            protFundsRow(); //saevent.currentTargeth
                        } else {
                            unprotFundsRow();
                            if (RecorderType != 'NonCustomer') {
                                if (document.MAINFORM.ORG_SETT_CCY.value == document.MAINFORM.SETT_CCY.value) {
                                    document.MAINFORM.CPYT_DR_AC.value = document.MAINFORM.ORG_CPYT_DR_AC.value;
                                } else {
                                    document.MAINFORM.CPYT_DR_AC.value = "";
                                }
                            }
                            if (fnName == 'Proc_Inc_103' || fnName == 'ITTReverPYMT' || fnName == 'SettleRec9xx') {
                                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M"); // Utility Auto Fix Comments
                                SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                                //document.MAINFORM.CPYT_DR_AC.value="";
                                if (document.MAINFORM.SETT_CCY.value == document.MAINFORM.PAY_CCY.value) {
                                    document.MAINFORM.COV_NO.value = '';
                                    document.MAINFORM.EXCH_RATE.value = 1;
                                    SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                                    SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                                    document.MAINFORM.SETT_AMT.value = document.MAINFORM.PAY_AMT.value;
                                }
                            } else {
                                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                                //SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN)	;
                                SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN); //SATHISH CHANGED 1008
                                document.MAINFORM.CPYT_DR_AC.value = document.MAINFORM.ORG_CPYT_DR_AC.value;
                            }
                        }
                    }
                }
            }
        } else { //adding a new record

            if (cashRes) {
                alert("Settlement row with Cash Indicator already added");
                document.MAINFORM.MUL_CASH_IND.value = "No";
                //SYT_ChangeFldClass(document.MAINFORM.MUL_CASH_IND,"P");	//done by saevent.currentTargeth
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M"); // Utility Auto Fix Comments
                SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
            } else {
                if (MulCasInd == "Yes") {
                    if (RecorderType == "NonCustomer") {
                        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                        SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                        document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                        protFundsRow(); //saevent.currentTargeth
                    } else {
                        document.MAINFORM.CPYT_DR_AC.value = "";
                        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                        SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                        document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                        protFundsRow(); //tinu
                    }
                } else {

                    if (RecorderType == "NonCustomer") {
                        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                        SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                        document.MAINFORM.CPYT_DR_AC.value = "Not Applicable";
                        protFundsRow(); //saevent.currentTargeth
                    } else {
                        document.MAINFORM.CPYT_DR_AC.value = "";
                        if (document.MAINFORM.ORG_SETT_CCY.value == document.MAINFORM.SETT_CCY.value) {
                            if (mulSettFlag == "No") {
                                document.MAINFORM.CPYT_DR_AC.value = document.MAINFORM.ORG_CPYT_DR_AC.value;
                            }
                        }
                        unprotFundsRow(); //TINU

                        if (fnName == 'Proc_Inc_103' || fnName == 'ITTReverPYMT' || fnName == 'SettleRec9xx') {
                            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M"); // Utility Auto Fix Comments
                            SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            if (document.MAINFORM.SETT_CCY.value == document.MAINFORM.PAY_CCY.value) {
                                document.MAINFORM.COV_NO.value = '';
                                document.MAINFORM.EXCH_RATE.value = 1;
                                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                                SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, "P");
                                document.MAINFORM.SETT_AMT.value = document.MAINFORM.PAY_AMT.value;
                            }

                        } else {
                            if (mulSettFlag == "No") {
                                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "P"); // Utility Auto Fix Comments
                                SYM_PYMT_clsdisableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            } else {
                                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, "M");
                                SYM_PYMT_SYT_enableField(document.MAINFORM.CPYT_DR_AC_BTN);
                            }
                        }

                    }
                }
            }
        }
        if (fnName != 'Proc_Inc_103' || fnName != 'SettleRec9xx') {
            getOverDrawnInd();
        }

        if (document.MAINFORM.MUL_CASH_IND.value == "No" && document.MAINFORM.CPYT_DR_AC_TYPE.value == "CUSTOMER") {
            SYS_GetTableDataByRule_S('SSSS_PYMT_MultipleDebits_Chk_Sett_AcctNo_0', '1', 'false');
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.MUL_FDS_AVAL_onchange = function(event) {
    try {
        if (document.MAINFORM.CPYT_DR_AC.value != '') {
            if (document.MAINFORM.MUL_CASH_IND.value == 'No') {
                if (document.MAINFORM.C_AC_IDENTIFIER.value != '') {
                    if (document.MAINFORM.C_AC_IDENTIFIER.value == 'N') {
                        if (document.MAINFORM.MUL_FDS_AVAL.value == 'No') {
                            alert("The account you are trying to use has insufficient funds, and event.currentTarget type of account cannot be overdrawn.\nPlease change the account that you are trying to use or reduce the amount to within the available balance on the account.");
                            document.MAINFORM.MUL_FDS_AVAL.value = "Yes";
                        }
                    }
                }
            }
        }
        if (document.MAINFORM.MUL_FDS_AVAL.value == "No") {
            SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE, "M");
            document.MAINFORM.MUL_OVRIDE.value = "No";
            MUL_OVRIDE_onChange();
        } else {
            document.MAINFORM.MUL_OVRIDE.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.MUL_OVRIDE, "P");
            MUL_OVRIDE_onChange();
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.MUL_OVRIDE_onchange = function(event) {
    try {
        if (document.MAINFORM.CPYT_DR_AC.value != '') {
            if (document.MAINFORM.MUL_CASH_IND.value == 'No') {
                if (document.MAINFORM.C_AC_IDENTIFIER.value != '') {
                    if (document.MAINFORM.C_AC_IDENTIFIER.value == 'N') {
                        if (document.MAINFORM.MUL_OVRIDE.value == 'Yes') {
                            alert("The entered Account number cannot be overdrawn.");
                            document.MAINFORM.MUL_OVRIDE.value = "No";
                        }
                    }
                }
            }
        }
        /*
	if (document.MAINFORM.MUL_OVRIDE.value == 'Yes'){
	
	}else{
		     
}
*/
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.PAY_AMT_onchange = function(event) {
    try {
        if (SYS_BeInt(document.MAINFORM.PAY_AMT.value) >= 1000000000000000) {
            alert("The entered amount is too big, please correct it.");
            document.MAINFORM.X103_INSTR_AMT_33B.value = '0.00';
            document.MAINFORM.X103_INSTR_AMT_33B.focus();
        }
        document.MAINFORM.CAP_AMT_IND.value = 'PAY_AMT';
        SYT_Chg_NegativeAmt(document.MAINFORM.PAY_AMT);
        if (SYS_BeFloat(CrAmt) > 0) {
            if (document.MAINFORM.PAY_AMT.value > CrAmt) {
                alert("The Payment Amount cannot be greater than Principal Payment Amount");
                document.MAINFORM.PAY_AMT.value = 0;
                if (fnName == 'Proc_Inc_103' || fnName == 'SettleRec9xx') {
                    document.MAINFORM.PAY_AMT.value = CrAmt;
                }
            }
            cal_SettAmt();
        } else {
            if (SYS_BeFloat(document.MAINFORM.SETT_AMT.value) > DbAmt) {
                alert("The Settlement Amount cannot be greater than Principal Debit Amount");
                document.MAINFORM.SETT_AMT.value = 0;
            }
        }
        if (mulSettFlag == 'Yes') {
            Multi_PAY_AMT_onchange();
        } else {
            Single_PAY_AMT_onchange();
        }
        Chk_SplitPayAmt();
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.PAY_CCY_onchange = function(event) {
    try {
        /*
if (document.MAINFORM.PAY_CCY.value != document.MAINFORM.SETT_CCY.value){
		//SYT_ChangeFldClass(document.MAINFORM.COV_NO,"O");	
}else{
		//document.MAINFORM.EXCH_RATE.value = 1;
		//SYT_ChangeFldClass(document.MAINFORM.COV_NO,"P");
}
*/
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.SETT_AMT_onchange = function(event) {
    try {
        document.MAINFORM.CAP_AMT_IND.value = 'SETT_AMT';
        SYT_Chg_NegativeAmt(document.MAINFORM.SETT_AMT);
        if (SYS_BeFloat(DbAmt) > 0) {
            if (SYS_BeFloat(document.MAINFORM.SETT_AMT.value) > DbAmt) {
                alert("The Settlement Amount cannot be greater than Principal Debit Amount");
                document.MAINFORM.SETT_AMT.value = 0;
                Chk_OutstandingAMT();
            }
        }
        if (SYS_BeFloat(CrAmt) > 0) {
            if (SYS_BeFloat(document.MAINFORM.PAY_AMT.value) > CrAmt) {
                alert("The Payment Amount cannot be greater than Principal Credit Amount");
                document.MAINFORM.SETT_AMT.value = 0;
                document.MAINFORM.PAY_AMT.value = 0;
                //Chk_OutstandingAMT();		
                if (fnName == 'Proc_Inc_103' || fnName == 'SettleRec9xx') {
                    document.MAINFORM.PAY_AMT.value = CrAmt;
                }
            }
        }
        if (mulSettFlag == 'Yes') {
            Multi_SETT_AMT_onchange();
        } else {
            Single_SETT_AMT_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}

csDOScreenProto.SETT_CCY_onchange = function(event) {
    try {
        if (mulSettFlag == 'No') {
            Single_SETT_CCY_onchange();
        } else {
            Multi_SETT_CCY_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_PYMT_MultipleDebits.js", e);
    }
}