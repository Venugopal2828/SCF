var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_PYMT_Chk_Cr_AcctNo = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        if (document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER") {
            document.MAINFORM.C_AC_NUMBER.value = "";
            //Sql_Cond = "C_CUST_ID=" + "'" + document.MAINFORM.X103_BENECU_ID_59A.value + "'" + " AND " + "C_AC_NUMBER=" + "'" + document.MAINFORM.X103_BENECUACNO59A.value + "' AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CURRENCY=" + "'" + document.MAINFORM.CR_CCY.value + "'" + " AND ( " + "C_DBT_CRDT=" + "'B' OR C_DBT_CRDT=" + "'C')";
            //Field_List = "C_AC_NUMBER";
            //Mapping_List = "C_AC_NUMBER";
            SYS_GetTableDataByRule_S('SYF_PYMT_GeneralPurposeAccounting_SYF_PYMT_Chk_Cr_AcctNo_0', '1', 'Sett_AccNo_Succ', 'false');
            if (document.MAINFORM.C_AC_NUMBER.value != document.MAINFORM.X103_BENECUACNO59A.value) {
                if (document.MAINFORM.X103_BENECUACNO59A.value != "") {
                    alert('The Account number entered is invalid ,please verify .');
                    document.MAINFORM.X103_BENECUACNO59A.value = '';
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } else {
            //Sql_Cond1 = "C_ACCT_WITH_ID=" + "'" + document.MAINFORM.X103_BENECU_ID_59A.value + "'" + " AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_ACCT_NR=" + "'" + document.MAINFORM.X103_BENECUACNO59A.value + "'";
            //Field_List1 = "C_ACCT_NR";
            //Mapping_List1 = "C_ACCT_NR";
            SYS_GetTableDataByRule_S('SYF_PYMT_GeneralPurposeAccounting_SYF_PYMT_Chk_Cr_AcctNo_1', '1', 'Sett_AccNo_Succ', 'false');

            if (document.MAINFORM.C_ACCT_NR.value != document.MAINFORM.X103_BENECUACNO59A.value) {
                if (document.MAINFORM.X103_BENECUACNO59A.value != "") {
                    alert('The Account number entered is invalid ,please verify .');
                    document.MAINFORM.X103_BENECUACNO59A.value = '';
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ProtBeneCust = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_RES, "P");
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_CPYT_DR_VAL_DATE_Fail = function() {
    try {

        document.MAINFORM.CPYT_DR_VAL_DATE.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Hid_ChrgsPaidByRow = function() {
    try {

        EEHtml.getElementById('LBL_VAL_DT').innerText = "";
        EEHtml.getElementById('CHG_VALUE_DATE').style.display = "none";
        EEHtml.getElementById('imgDrawDown_X103_VALUE_DT_32A').style.display = "none";
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_RateType_Chrgs = function() {
    try {

        var ref; // Utility Auto Fix Comments
        Chg.DEF_CHG_DISPLAY_FLAG = 'false';
        ref = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        if (ref == "DI") {
            Chg.init('Sight Selling', 'Sight Selling', 'Sight Selling', 'Sight Selling');
        } else if (ref == "OT") {
            Chg.init('TT Selling', 'TT Selling', 'TT Selling', 'TT Selling');
        } else if (ref == "IT") {
            Chg.init('TT Buying', 'TT Buying', 'TT Buying', 'TT Buying');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_COV_NO = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            if (document.MAINFORM.COV_NO.value.trim() == "" || document.MAINFORM.COV_NO.value.trim == null) {
                SYF_PYMT_Set_CovNumProp(); // Utility Auto Fix Comments
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
                SYF_PYMT_Set_CovNumProp(); // Utility Auto Fix Comments
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
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_EXCH_RT_36 = function() {
    try {

        SYT_Chg_NegativeAmt(document.MAINFORM.X103_EXCH_RT_36);
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0);
            if (document.MAINFORM.MD_I.value == "D") {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else {
                document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }
        } else {
            document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0);
            if (document.MAINFORM.MD_I.value == "D") {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) / SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            } else {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) * SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value)));
            }
        }
        SYF_PYMT_Cal_Chrgs();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
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
        if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer' || document.MAINFORM.DB_CASH_IND.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "O");
        }
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "M");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "M");
        SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_RES, "O");
        SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A_BTN);
        document.MAINFORM.BENE_RECORDER_TYPE.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_Chrgs = function() {
    try {

        var ref; // Utility Auto Fix Comments
        ref = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        if (ref == "DI") {
            Chg.calculate(['DI_CMSN'], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            Chg.calculate(['DI_PYFEE'], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        } else if (ref == "OT") {
            Chg.calculate(['PYMT_COMM'], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        } else {
            Chg.calculate(['INW_PYT_COMM'], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        }
        Chg.calculate(['SWIFT_INT', 'STP_FAIL', 'FND_WD'], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CR_CASH_IND = function() {
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
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_BENECUACNO59A_BTN);
        } else {
            document.MAINFORM.DB_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "O");
            document.MAINFORM.X103_BENECUACNO59A.value = "";
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "M");
            SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A_BTN);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
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
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_RateType = function() {
    try {

        var ref; // Utility Auto Fix Comments
        document.MAINFORM.RATE_TYPE.value = "";
        ref = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        if (ref == "DI") {
            document.MAINFORM.RATE_TYPE.value = "Sight Selling";
        } else if (ref == "OT") {
            document.MAINFORM.RATE_TYPE.value = "TT Selling";
        } else if (ref == "IT") {
            document.MAINFORM.RATE_TYPE.value = "TT Buying";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_trigger_X103_ORDCU_ID_50A_onChange = function() {
    try {

        EEHtml.fireEvent(EEHtml.getElementById('X103_ORDCU_ID_50A'), 'onchange');
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_trigger_X103_ORDCU_ID_50A_Fail = function() {
    try {

        alert('The Account number entered is invalid ,please verify .');
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_Db_AcctNo = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
            document.MAINFORM.C_AC_NUMBER.value = "";
            //Sql_Cond = "C_CUST_ID=" + "'" + document.MAINFORM.X103_ORDCU_ID_50A.value + "'" + " AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_AC_NUMBER=" + "'" + document.MAINFORM.X103_ORDCUACNO_50A.value + "' AND " + "C_CURRENCY=" + "'" + document.MAINFORM.DB_CCY.value + "'" + " AND ( " + "C_DBT_CRDT=" + "'B' OR C_DBT_CRDT=" + "'D')";
            //Field_List = "C_AC_NUMBER;C_AC_IDENTIFIER";
            //Mapping_List = "C_AC_NUMBER;C_AC_IDENTIFIER";
            SYS_GetTableDataByRule_S('SYF_PYMT_GeneralPurposeAccounting_SYF_PYMT_Chk_Db_AcctNo_2', '1', 'Sett_AccNo_Succ', 'false');

            if (document.MAINFORM.C_AC_NUMBER.value != document.MAINFORM.X103_ORDCUACNO_50A.value) {
                if (document.MAINFORM.X103_ORDCUACNO_50A.value != "") {
                    alert('The Account number entered is invalid ,please verify .');
                    document.MAINFORM.X103_ORDCUACNO_50A.value = '';
                    document.MAINFORM.C_AC_IDENTIFIER.value = '';
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } else {
            //Sql_Cond1 = "C_ACCT_WITH_ID=" + "'" + document.MAINFORM.X103_ORDCU_ID_50A.value + "'" + " AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_ACCT_NR=" + "'" + document.MAINFORM.X103_ORDCUACNO_50A.value + "'";
            //Field_List1 = "C_ACCT_NR";
            //Mapping_List1 = "C_ACCT_NR";
            SYS_GetTableDataByRule_S('SYF_PYMT_GeneralPurposeAccounting_SYF_PYMT_Chk_Db_AcctNo_3', '1', 'Sett_AccNo_Succ', 'false');

            if (document.MAINFORM.C_ACCT_NR.value != document.MAINFORM.X103_ORDCUACNO_50A.value) {
                if (document.MAINFORM.X103_ORDCUACNO_50A.value != "") {
                    alert('The Account number entered is invalid ,please verify .');
                    document.MAINFORM.X103_ORDCUACNO_50A.value = '';
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CPYT_DR_VAL_DATE = function() {
    try {

        SYF_PYMT_Chk_Valid_Date('CPYT_DR_VAL_DATE');
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var chgCommCode; // Utility Auto Fix Comments
        var chgObj; // Utility Auto Fix Comments
        var defChg; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var defLen; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        document.MAINFORM.RATE_TYPE.value = "";
        SYF_PYMT_Set_RateType();
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYF_PYMT_Set_RateType_Chrgs();
            SYF_PYMT_Cal_Chrgs();
            if (SYS_FUNCTION_TYPE != 'EC') {
                SYT_getExchangeRate_Settl(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.CR_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
                if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
                    SYF_PYMT_Chg_CR_CALC_AMT();
                } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
                    SYF_PYMT_Chg_DB_CALC_AMT();
                }
            }
        }
        Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
        SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "O");
        SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "M");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "M");
        SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_RES, "O");
        SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A_BTN);
        SYF_PYMT_Hid_ChrgsPaidByRow();
        Chg.attchEvent(SYF_PYMT_Set_Chg_CashInd);
        SYF_PYMT_Get_DrtDealInd();
        SYT_Audit_Main();
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_transaction");
            SYF_PYMT_Set_CovNumProp();
            if (document.MAINFORM.CHG_CASH_IND.value == 'Yes') {
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = 'Not Applicable';
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            }
        }
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'IQ') {
            if (document.MAINFORM.DRT_DEAL_IND.value == 'Yes' && (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0 || SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0)) {
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                SYT_ChangeFldClass(document.MAINFORM.X103_EXCH_RT_36, "M");
            }
        }
        if (SYS_FUNCTION_TYPE != 'EC') {
            document.MAINFORM.BENE_AC_TYPE.value = "CUSTOMER";
        }
        if (SYS_FUNCTION_TYPE == 'EC') {
            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
            SYF_PYMT_ProtOrdCust();
            SYF_PYMT_ProtBeneCust();
            SYT_ChangeFldClass(document.MAINFORM.CHG_FOREIGN_CUST_PAY_RATE, "P");
            SYT_Protect_COMM_DESC();
            SYT_Chgs_Without_Deferred_Terms();
            if (document.MAINFORM.RECORDER_TYPE.value == "Customer") {
                SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");
                SYT_ChangeFldClass(document.MAINFORM.APPL_BK_AC_NO_BTN, "O");
            } else if (document.MAINFORM.RECORDER_TYPE.value == "NonCustomer") {
                SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
                SYT_ChangeFldClass(document.MAINFORM.APPL_BK_AC_NO_BTN, "P");
                document.MAINFORM.DB_CASH_IND.value = 'Yes';
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                document.MAINFORM.CHG_CASH_IND.value = 'Yes';
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = 'Not Applicable';
            }
            if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
                SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_transaction");
                if (document.MAINFORM.CR_CCY.value == document.MAINFORM.DB_CCY.value) {
                    document.MAINFORM.COV_NO.value = "";
                    document.MAINFORM.X103_EXCH_RT_36.value = "1";
                    SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
                }
                SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD1_50A, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD2_50A, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD3_50A, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "P");
                if (document.MAINFORM.DB_CASH_IND.value == 'Yes') {
                    SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
                    document.MAINFORM.CR_CASH_IND.value = 'No';
                    SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
                }
                if (document.MAINFORM.CHG_CASH_IND.value == 'Yes') {
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                    SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                }
                if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
                    document.MAINFORM.DB_CASH_IND.value = 'Yes';
                    document.MAINFORM.CR_CASH_IND.value = 'Yes';
                    SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
                    SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_RES, "P");
                    SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
                    SYT_ChangeFldClass(document.MAINFORM.APPL_CNTY_RES, "P");
                    SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
                }
                if (document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer') {
                    document.MAINFORM.CR_CASH_IND.value = 'Yes';
                    SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
                    SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_RES, "P");
                    SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
                }
                if (document.MAINFORM.FDS_AVAL.value == 'Yes') {
                    SYT_ChangeFldClass(document.MAINFORM.OVRIDE, "P");
                }
                if (document.MAINFORM.COV_NO.value != "") {
                    SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                }
            }
        }

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYF_PYMT_Chk_BenCustId();
            SYF_PYMT_Chk_OrdCustId();
            if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0 || SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
                SYF_PYMT_Cal_Chrgs();
            }
        }

        //added for valuedate validation
        if (SYS_FUNCTION_TYPE == "RE") {
            if (!SYT_Chk_PastDate(document.MAINFORM.CPYT_DR_VAL_DATE)) {
                SYT_restrictRelease();
            }
        }
        //Check that the value date being loaded is valid
        SYF_PYMT_Chk_Valid_Date('CPYT_DR_VAL_DATE');

        defChgArr = Chg.Screen.getAllDefCharge();
        defLen = defChgArr.length;
        for (i = 0; i < defLen; i++) { // Utility Auto Fix Comments
            defChg = defChgArr[i];
            chgCommCode = defChgArr[i].getCommCode();
            chgObj = Chg.Screen.getDefChargeByCommCode(chgCommCode);
            chgObj.setChargeFor(Chg.FOR_LOCAL);
            chgObj.chargeForOnchange();
            chgObj.setChargeAt(Chg.AT_FREE);
            chgObj.chargeAtOnchange();
        }

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, "P");
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.CURRNT_STATUS.value = 'GEN_ACCT';
        document.MAINFORM.NXT_STATUS.value = 'GEN_ACCT_RELEASE';
        document.MAINFORM.CPYT_CR_VAL_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.CHG_VALUE_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_AMT.value);
        document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_AMT.value);
        document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
        document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_BeneBankAcNo = function() {
    try {

        //SYS_InqCUBK_Sql('X103_BENECUACNO59A_BANK', SYM_PYMT_SYS_buildSQLCond(new Array('C_ACCT_WITH_ID', 'X103_BENECU_ID_59A', 'C_ACCT_NR', 'X103_BENECUACNO59A', 'C_ACCT_CCY', 'CR_CCY')));
        SYS_InqCUBK_byCondition('X103_BENECUACNO59A_BANK', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_BENE_AC_TYPE = function() {
    try {

        SYF_PYMT_Clr_Ben_Cust();
        if (document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO") {
            if (document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO") {
                if (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO") {
                    alert("Can not be applyed " + document.MAINFORM.BENE_AC_TYPE.value + " To " + document.MAINFORM.APP_TYPE.value);
                    document.MAINFORM.BENE_AC_TYPE.value = "CUSTOMER";
                }
            }

            if (document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO") {
                if (document.MAINFORM.APP_TYPE.value == "NOSTRO" || document.MAINFORM.APP_TYPE.value == "VOSTRO") {
                    alert("Can not be applyed " + document.MAINFORM.BENE_AC_TYPE.value + " To " + document.MAINFORM.APP_TYPE.value);
                    document.MAINFORM.BENE_AC_TYPE.value = "CUSTOMER";
                }
            }
            document.MAINFORM.X103_BENECUACNO59A.value = "";
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "M");
            SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A_BTN);
        } else {
            document.MAINFORM.X103_BENECUACNO59A.value = "";
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "M");
            SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A_BTN);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_ORDCUACNO_50A = function() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value == '') {
            if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
                SYS_GetCUBK('X103_ORDCUACNO_50A', 'X103_ORDCUACNO_50A', 'SYF_PYMT_trigger_X103_ORDCU_ID_50A_onChange()', 'SYF_PYMT_trigger_X103_ORDCU_ID_50A_Fail()', 'TRUE');
            } else {
                SYS_GetCUBK('X103_ORDCUACNO_50A_NONCUST', 'X103_ORDCUACNO_50A', 'SYF_PYMT_trigger_X103_ORDCU_ID_50A_onChange()', 'SYF_PYMT_trigger_X103_ORDCU_ID_50A_Fail()', 'TRUE');
            }
        }
        SYF_PYMT_Chk_Db_AcctNo();
        document.MAINFORM.FDS_AVAL.value = "Yes";
        SYF_PYMT_Chg_FDS_AVAL();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_BenCustAccts = function() {
    try {

        document.MAINFORM.FIELD_6_X.value = 'C';
        SYS_GetDataBySSS('PYMT_X103_BENECU_ID_59A_CHKMORE_TRX', 'X103_BENECU_ID_59A;CR_CCY;FIELD_6_X', 'SYF_PYMT_Get_BenCustAccts'); // Utility Auto Fix Comments
        SYF_PYMT_ProtBeneCust();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
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
                if (document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value == "Not Applicable") {
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
                }
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
                SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN);
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_CovNumProp = function() {
    try {

        SYF_PYMT_Get_DrtDealInd();
        SYT_Check_Cov_Limit(document.MAINFORM.DRT_DEAL_IND, document.MAINFORM.CR_AMT, document.MAINFORM.CR_CCY, document.MAINFORM.DB_AMT, document.MAINFORM.DB_CCY);
        if (document.MAINFORM.CR_CCY.value != document.MAINFORM.DB_CCY.value) {
            if (document.MAINFORM.DRT_DEAL_IND.value == 'Yes' && (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0 || SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0)) {
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                document.MAINFORM.COV_NO.value = "";
            } else {
                SYT_ChangeFldClass(document.MAINFORM.COV_NO, "O");
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
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_trigger_X103_BENECU_ID_59A_onChange = function() {
    try {

        EEHtml.fireEvent(EEHtml.getElementById('X103_BENECU_ID_59A'), 'onchange');
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_BenCustAccts = function() {
    try {

        if (document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.X103_BENECUACNO59A.value = document.MAINFORM.X103_BENECU_ID_59A.value;
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_BENECUACNO59A_BTN);
        } else {
            if (document.MAINFORM.BEN_ACCTS.value > 1) {
                //SYS_InqCUBK_Sql('X103_BENECUACNO59A', 'C_CUST_ID= \'<--X103_BENECU_ID_59A-->\' AND  C_CURRENCY=\'<--CR_CCY-->\' AND  (C_DBT_CRDT = \'B\' OR  C_DBT_CRDT=\'C\')');
                SYS_InqCUBK_byCondition('X103_BENECUACNO59A', '1');
            }

        }

        if (document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.CR_CASH_IND.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
            document.MAINFORM.DB_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
        } else {
            document.MAINFORM.CR_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "O");
            if (document.MAINFORM.RECORDER_TYPE.value != 'NonCustomer' && document.MAINFORM.DB_CASH_IND.value == 'No') {
                SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "O");
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_trigger_X103_BENECU_ID_59A_Fail = function() {
    try {

        alert('The Account number entered is invalid ,please verify .');
        document.MAINFORM.X103_BENECUACNO59A.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var gapi_ind; // Utility Auto Fix Comments
        if (document.MAINFORM.CR_CCY.value != document.MAINFORM.DB_CCY.value) {
            if (document.MAINFORM.MD_I.value == "" || document.MAINFORM.MD_I.value == null) {
                alert("Exchange Rate for " + document.MAINFORM.CR_CCY.value + " to " + document.MAINFORM.DB_CCY.value + " not loaded. Transaction cannot be processed.");
                return false;
            }
        }
        if (document.MAINFORM.DB_CASH_IND.value != "Yes") {
            if (SYF_PYMT_Chk_Db_AcctNo() == false) {
                return false;
            }
        }
        if (document.MAINFORM.CR_CASH_IND.value != "Yes") {
            if (SYF_PYMT_Chk_Cr_AcctNo() == false) {
                return false;
            }
        }

        document.MAINFORM.X103_EXCH_RT_36.value = SYS_BeFloat(document.MAINFORM.X103_EXCH_RT_36.value);
        document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CR_CCY.value;
        document.MAINFORM.X103_SETT_AMT_32A.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value);

        if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) == 0) {
            document.MAINFORM.X103_INSTR_CCY_33B.value = document.MAINFORM.CR_CCY.value;
            document.MAINFORM.X103_INSTR_AMT_33B.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
        } else if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) == 0) {
            document.MAINFORM.X103_INSTR_CCY_33B.value = document.MAINFORM.DB_CCY.value;
            document.MAINFORM.X103_INSTR_AMT_33B.value = SYS_BeFloat(document.MAINFORM.DB_AMT.value);
        }
        if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer' && document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer') {
            alert("Both Debit Customer and Credit Customer cannot be NonCustomer , please verify "); // Utility Auto Fix Comments
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

        SYT_Cal_TRX_HISTORY();
        document.MAINFORM.NOTES.value = '';
        if (document.MAINFORM.OVRIDE.value == "No") {
            if (document.MAINFORM.FDS_AVAL.value == "No") {
                alert('The account you are trying to use has insufficient funds, and this type of account cannot be overdrawn. Please change the account that you are trying to use or reduce the amount to within the available balance on the account.');
                return false;
            } else if (document.MAINFORM.X103_ORDCU_ID_50A.value != "" && document.MAINFORM.X103_BENECU_ID_59A.value != "") {
                if (document.MAINFORM.X103_ORDCUACNO_50A.value == document.MAINFORM.X103_BENECUACNO59A.value) {
                    alert("The Beneficiary Customer's Account should be different from Applicant Account");
                    document.MAINFORM.X103_BENECUACNO59A.value = "";
                    return false;
                }
            } else {
                if (SYS_ERROR == '') {
                    document.MAINFORM.NOTES.value = '';
                }
                return true;
            }
        }

        document.MAINFORM.INT_ACT1.value = "";
        document.MAINFORM.INT_AMT1.value = "";
        document.MAINFORM.INT_ACT1_CCY.value = "";
        document.MAINFORM.INT_CASH_IND1.value = "";
        document.MAINFORM.INT_AC_IDENTIFIER.value = "";
        document.MAINFORM.CPYT_DR_AC_TYPE.value = "";
        document.MAINFORM.GAPI_IND_FLG.value = "";
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY; // Utility Auto Fix Comments
        document.MAINFORM.C_MODULE.value = SYS_MODULE_NAME; // Utility Auto Fix Comments
        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT; // Utility Auto Fix Comments

        document.MAINFORM.INT_ACT1.value = document.MAINFORM.X103_ORDCUACNO_50A.value + ";";
        document.MAINFORM.INT_AMT1.value = document.MAINFORM.DB_AMT.value.replace(/\,/g, '') + ";";
        document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.DB_CCY.value + ";";
        document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.DB_CASH_IND.value + ";";
        document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.OVRIDE.value + ";";
        document.MAINFORM.CPYT_DR_AC_TYPE.value = document.MAINFORM.APP_TYPE.value + ";";
        document.MAINFORM.C_AC_IDENTIFIER.value = document.MAINFORM.C_AC_IDENTIFIER.value + ";";

        if (document.MAINFORM.CHG_CASH_IND.value != 'Yes') {
            document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + ";";
            document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + Chg.Screen.getLocalPayChgTotalAmt() + ";";
            document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + ";";
            document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + document.MAINFORM.CHG_CASH_IND.value + ";";
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + document.MAINFORM.CHG_OVERRIDE_IND.value + ";";
            document.MAINFORM.CPYT_DR_AC_TYPE.value = document.MAINFORM.CPYT_DR_AC_TYPE.value + "CUSTOMER" + ";";
            document.MAINFORM.C_AC_IDENTIFIER.value = document.MAINFORM.C_AC_IDENTIFIER.value + "undefined" + ";"; // Utility Auto Fix Comments
            document.MAINFORM.INT_ACCOUNTCOUNT.value = 2;
        } else {
            document.MAINFORM.INT_ACT1.value = document.MAINFORM.INT_ACT1.value + "undefined" + ";";
            document.MAINFORM.INT_AMT1.value = document.MAINFORM.INT_AMT1.value + "undefined" + ";";
            document.MAINFORM.INT_ACT1_CCY.value = document.MAINFORM.INT_ACT1_CCY.value + "undefined" + ";";
            document.MAINFORM.INT_CASH_IND1.value = document.MAINFORM.INT_CASH_IND1.value + "undefined" + ";";
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + "undefined" + ";";
            document.MAINFORM.C_AC_IDENTIFIER.value = document.MAINFORM.C_AC_IDENTIFIER.value + "undefined" + ";"; // Utility Auto Fix Comments
        }

        document.MAINFORM.INT_ACCOUNTCOUNT.value = 2;
        if (SYS_FUNCTION_TYPE != 'EC') {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES) + 1;
        } else {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES);
        }
        document.MAINFORM.C_MODULE.value = SYS_MODULE_NAME;
        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY; // Utility Auto Fix Comments
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
        if (document.MAINFORM.DB_CCY.value != document.MAINFORM.CR_CCY.value) {
            if (document.MAINFORM.MD_I.value == '') {
                alert("Exchange rate not loaded");
                return false;
            }
        }
        document.MAINFORM.GAPI_IND_FLG.value = callgapi;
        SYT_Set_Int_Flds_CustId();

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CHG_CASH_IND = function() {
    try {

        if (document.MAINFORM.CHG_CASH_IND.value == 'Yes') {
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.CHG_GETAC_BTN);
        } else {
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_BENECUACNO59A = function() {
    try {

        if (document.MAINFORM.X103_BENECU_ID_59A.value == '') {
            if (document.MAINFORM.X103_BENECUACNO59A.value.trim() != "") {
                if (document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER") {
                    SYS_GetCUBK_S('X103_BENECUACNO59A', 'X103_BENECUACNO59A', 'SYF_PYMT_trigger_X103_BENECU_ID_59A_onChange()', 'SYF_PYMT_trigger_X103_BENECU_ID_59A_Fail', 'TRUE');
                    EEHtml.fireEvent(EEHtml.getElementById('X103_BENECU_ID_59A'), 'onchange');
                } else {
                    SYS_GetCUBK_S('X103_BENECUACNO59A_NONCUST', 'X103_BENECUACNO59A', 'SYF_PYMT_trigger_X103_BENECU_ID_59A_onChange()', 'SYF_PYMT_trigger_X103_BENECU_ID_59A_Fail', 'TRUE');
                    EEHtml.fireEvent(EEHtml.getElementById('X103_BENECU_ID_59A'), 'onchange');
                }
            } else if (document.MAINFORM.X103_BENECUACNO59A.value.trim().length == 0) {
                SYF_PYMT_Clr_Ben_Cust();
                alert("Account Number cannot be null");
            }
        }
        SYF_PYMT_Chk_Cr_AcctNo();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_OrdCustBankAcNo = function() {
    try {

        //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A_BANK', SYM_PYMT_SYS_buildSQLCond(new Array('C_ACCT_WITH_ID', 'X103_ORDCU_ID_50A', 'C_ACCT_NR', 'X103_ORDCUACNO_50A', 'C_ACCT_CCY', 'DB_CCY')));
        SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A_BANK', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Shw_BenCustAccts = function() {
    try {

        if (document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.X103_BENECUACNO59A.value = document.MAINFORM.X103_BENECU_ID_59A.value;
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_BENECUACNO59A_BTN);
        }
        if (document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.CR_CASH_IND.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
            document.MAINFORM.DB_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
        } else {
            if (document.MAINFORM.CR_CASH_IND.value == 'Yes') {
                document.MAINFORM.X103_BENECUACNO59A.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_BothAmtsToZero = function() {
    try {

        document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
        document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0.00);
        document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, 0.00);
        document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, 0.00);
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
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
        SYF_PYMT_Cal_Chrgs();
        if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
            document.MAINFORM.FIELD_6_X.value = 'D';
            SYS_GetDataBySSS('PYMT_X103_ORDCU_ID_50A_CHKMORE_TRX', 'X103_ORDCU_ID_50A;DB_CCY;FIELD_6_X', 'SYM_PYMT_showAccounts');
        } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.FIELD_6_X.value = 'D';
            SYS_GetDataBySSS('X103_ORDCU_ID_50A_NONCUSTCHKMORE', 'X103_ORDCU_ID_50A;DB_CCY;FIELD_6_X', '');
            document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.APPL_BK_AC_NO_BTN); // Utility Auto Fix Comments
        }
        SYF_PYMT_Set_Chg_CashInd();
        SYF_PYMT_Set_CovNumProp();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_BENECU_ID_59A = function() {
    try {

        SYM_PYMT_enableField(document.MAINFORM.X103_BENECUACNO59A_BTN);
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "M");
        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            if (document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER") {
                document.MAINFORM.X103_BENECUACNO59A.value = "";
                SYS_GetCUBK('X103_BENECU_ID_59A_INTTRF', 'X103_BENECU_ID_59A', 'SYF_PYMT_Chk_BenCustAccts()', 'SYF_PYMT_Clr_Ben_Cust', 'TRUE');
            } else {
                if (document.MAINFORM.X103_BENECUACNO59A.value == '') {
                    SYS_GetCUBK('X103_BENECU_ID_59A_BANK', 'X103_BENECU_ID_59A', 'SYF_PYMT_Get_BeneBankAcNo()', 'SYF_PYMT_Clr_Ben_Cust', 'TRUE');
                } else {
                    SYS_GetCUBK('X103_BENECU_ID_59A_BANK', 'X103_BENECU_ID_59A', 'SYF_PYMT_Chk_BenCustAccts()', 'SYF_PYMT_Clr_Ben_Cust', 'TRUE');
                }
            }
        } else {
            SYF_PYMT_Clr_Ben_Cust();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_OrdCustId = function() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
                SYS_GetCUBK('X103_ORDCU_ID_50A_INTRF', 'X103_ORDCU_ID_50A', 'SYF_PYMT_Chk_OrdCustAccts', 'SYF_PYMT_Clr_Ord_Cust', 'TRUE');
            } else {
                if (document.MAINFORM.X103_ORDCUACNO_50A.value == '') {
                    SYS_GetCUBK('X103_ORDCU_ID_50A_BANK', 'X103_ORDCU_ID_50A', 'SYF_PYMT_Get_OrdCustBankAcNo', 'SYF_PYMT_Clr_Ord_Cust', 'TRUE');
                } else {
                    SYS_GetCUBK('X103_ORDCU_ID_50A_BANK', 'X103_ORDCU_ID_50A', 'SYF_PYMT_Chk_OrdCustAccts', 'SYF_PYMT_Clr_Ord_Cust', 'TRUE');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_OrdCustAccts = function() {
    try {

        document.MAINFORM.FIELD_6_X.value = 'C';
        SYS_GetDataBySSS('PYMT_X103_ORDCU_ID_50A_CHKMORE_TRX', 'X103_ORDCU_ID_50A;DB_CCY;FIELD_6_X', 'SYF_PYMT_Shw_OrdCustAccts'); // Utility Auto Fix Comments
        SYF_PYMT_ProtOrdCust();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Shw_OrdCustAccts = function() {
    try {

        if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
            document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            document.MAINFORM.DB_CASH_IND.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
            document.MAINFORM.CR_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
        } else {
            if (document.MAINFORM.DB_CASH_IND.value == 'Yes') {
                document.MAINFORM.X103_ORDCUACNO_50A.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            }
            /*
	if(document.MAINFORM.NUM_ACCTS.value > 1){
		SYS_InqCUBK_Sql('X103_ORDCUACNO_50A','C_CUST_ID= \'<--X103_ORDCU_ID_50A-->\' AND  C_CURRENCY=\'<--DB_CCY-->\' AND  (C_DBT_CRDT = \'B\' OR  C_DBT_CRDT=\'C\')');					
	}
	*/
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CR_CCY = function() {
    try {

        var cntyCode; // Utility Auto Fix Comments
        document.MAINFORM.X103_EXCH_RT_36.value = "";
        document.MAINFORM.MD_I.value = "";

        SYT_getExchangeRate_Settl(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.CR_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);

        if (document.MAINFORM.X103_EXCH_RT_36.value == "" && document.MAINFORM.MD_I.value == "") {
            return;
        }

        if (document.MAINFORM.BENE_RECORDER_TYPE.value != 'NonCustomer') {
            document.MAINFORM.X103_BENECUACNO59A.value = "";
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
        }

        if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) != 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.DB_CCY, document.MAINFORM.CR_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.CR_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        } else if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) != 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.CR_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
        }

        cntyCode = document.MAINFORM.CR_CCY.value.substring(0, 2);
        document.MAINFORM.CNTY_CODE.value = cntyCode;

        if (document.MAINFORM.CPYT_DR_VAL_DATE.value != "") {
            SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.CPYT_DR_VAL_DATE.name, '', '', SYS_BUSI_UNIT, '', 'SYF_PYMT_Chk_CPYT_DR_VAL_DATE_Fail()');
        }

        SYF_PYMT_Set_CovNumProp();
        SYF_PYMT_Cal_Chrgs();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
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
                    alert("Exchange rate not loaded");
                    return;
                }
            }
        } else {
            SYF_PYMT_Set_BothAmtsToZero();
        }
        if (sCrCalAmt > 0 && document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            SYF_PYMT_Cal_Chrgs();
        }
        SYF_PYMT_Set_CovNumProp();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clk_Ord_Cust_lookup = function() {
    try {

        var add1; // Utility Auto Fix Comments
        var add2; // Utility Auto Fix Comments
        var add3; // Utility Auto Fix Comments
        var name; // Utility Auto Fix Comments
        name = document.MAINFORM.X103_ORDCU_NM_50A.value.trim();
        add1 = document.MAINFORM.X103_ORDCUADD1_50A.value.trim();
        add2 = document.MAINFORM.X103_ORDCUADD2_50A.value.trim();
        add3 = document.MAINFORM.X103_ORDCUADD3_50A.value.trim();
        if (name != "") {
            if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
                //SYS_InqCUBK_Sql('X103_ORDCU_ID_50A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ORDCU_NM_50A', 'ADD1', 'X103_ORDCUADD1_50A', 'ADD2', 'X103_ORDCUADD2_50A', 'ADD3', 'X103_ORDCUADD3_50A'), "", "(RECORDER_TYPE = \'Customer\' OR RECORDER_TYPE = \'NonCustomer\' )"));
                SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A', '1');
            } else if (document.MAINFORM.APP_TYPE.value == "VOSTRO" || document.MAINFORM.APP_TYPE.value == "NOSTRO") {
                //SYS_InqCUBK_Sql('X103_ORDCU_ID_50A_BANK', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_ORDCU_NM_50A', 'ADD1', 'X103_ORDCUADD1_50A', 'ADD2', 'X103_ORDCUADD2_50A', 'ADD3', 'X103_ORDCUADD3_50A')));
                SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A_BANK', '1');
            }
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clk_Ord_Cust_Acct_lookup = function() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value == '') {
            alert("Search is not possible without Ordering Customer ID"); // Utility Auto Fix Comments
        } else {
            if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
                //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A', SYM_PYMT_SYS_buildSQLCond(new Array('c_cust_id', 'X103_ORDCU_ID_50A', 'C_AC_NUMBER', 'X103_ORDCUACNO_50A', 'C_CURRENCY', 'DB_CCY')));
                SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A', '1');
            } else {
                //SYS_InqCUBK_Sql('NOSTRO_AC_NO_ORCU', 'C_ACCT_CCY=\'<--DB_CCY-->\' AND  C_CLEAR_TYPE=\'<--APP_TYPE-->\' AND C_ACCT_WITH_ID=\'<--X103_ORDCU_ID_50A-->\'');
                SYS_InqCUBK_byCondition('NOSTRO_AC_NO_ORCU', '1');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clk_Bene_Cust_Acct_lookup = function() {
    try {

        if (document.MAINFORM.X103_BENECU_ID_59A.value == '') {
            alert("Search is not possible without Beneficiary Customer ID");
        } else {
            if (document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER") {
                //SYS_InqCUBK_Sql('X103_BENECUACNO59A', SYM_PYMT_SYS_buildSQLCond(new Array('c_cust_id', 'X103_BENECU_ID_59A', 'C_AC_NUMBER', 'X103_BENECUACNO59A', 'C_CURRENCY', 'CR_CCY')));
                SYS_InqCUBK_byCondition('X103_BENECUACNO59A', '1');
            } else {
                //SYS_InqCUBK_Sql('NOSTRO_AC_NO_BENCU', 'C_ACCT_CCY=\'<--CR_CCY-->\' AND  C_CLEAR_TYPE=\'<--BENE_AC_TYPE-->\' AND C_ACCT_WITH_ID=\'<--X103_BENECU_ID_59A-->\'');
                SYS_InqCUBK_byCondition('NOSTRO_AC_NO_BENCU', '1');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_DrtDealInd = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        document.MAINFORM.DRT_DEAL_IND.value = "";
        if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
            //Sql_Cond = "C_MAIN_REF=" + "'" + document.MAINFORM.X103_ORDCU_ID_50A.value + "'" + " AND " + "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'";
            //Field_List = "DRT_DEAL_IND";
            //Mapping_List = "DRT_DEAL_IND";
            SYS_GetTableDataByRule_S('SYF_PYMT_GeneralPurposeAccounting_SYF_PYMT_Get_DrtDealInd_4', '1', 'Sett_AccNo_Succ', 'false');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clk_Bene_Cust_lookup = function() {
    try {

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
                if (document.MAINFORM.CR_CASH_IND.value == 'No') {
                    //SYS_InqCUBK_Sql('X103_BENECU_ID_59A_INTTRF', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_BENECU_NM_59A', 'ADD1', 'X103BENECUADD1_59A', 'ADD2', 'X103BENECUADD2_59A', 'ADD3', 'X103BENECUADD3_59A'), "", "(RECORDER_TYPE = \'Customer\' OR RECORDER_TYPE = \'NonCustomer\' )"));
                    SYS_InqCUBK_byCondition('X103_BENECU_ID_59A_INTTRF', '1');
                } else {
                    //SYS_InqCUBK_Sql('X103_BENECU_ID_59A_INTTRF', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_BENECU_NM_59A', 'ADD1', 'X103BENECUADD1_59A', 'ADD2', 'X103BENECUADD2_59A', 'ADD3', 'X103BENECUADD3_59A'), "", "(RECORDER_TYPE = \'Customer\' OR RECORDER_TYPE = \'NonCustomer\' )"));
                    SYS_InqCUBK_byCondition('X103_BENECU_ID_59A_INTTRF', '1');
                }
            } else if (document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO") {
                //SYS_InqCUBK_Sql('X103_BENECU_ID_59A_BANK', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_BENECU_NM_59A', 'ADD1', 'X103BENECUADD1_59A', 'ADD2', 'X103BENECUADD2_59A', 'ADD3', 'X103BENECUADD3_59A')));
                SYS_InqCUBK_byCondition('X103_BENECU_ID_59A_BANK', '1');
            }
        } else {
            alert("Search is not possible without Name");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_BenCustId = function() {
    try {

        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            if (document.MAINFORM.BENE_AC_TYPE.value == "CUSTOMER") {
                SYS_GetCUBK('X103_BENECU_ID_59A_INTTRF', 'X103_BENECU_ID_59A', 'SYF_PYMT_Chk_BenCustAccts', 'SYF_PYMT_Clr_Ben_Cust', 'TRUE');
            } else {
                if (document.MAINFORM.X103_BENECUACNO59A.value == '') {
                    SYS_GetCUBK('X103_BENECU_ID_59A_BANK', 'X103_BENECU_ID_59A', 'SYF_PYMT_Get_BeneBankAcNo()', 'SYF_PYMT_Clr_Ben_Cust', 'TRUE');
                } else {
                    SYS_GetCUBK('X103_BENECU_ID_59A_BANK', 'X103_BENECU_ID_59A', 'SYF_PYMT_Chk_BenCustAccts', 'SYF_PYMT_Clr_Ben_Cust', 'TRUE');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_ORDCU_ID_50A = function() {
    try {

        document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
        SYM_PYMT_SYT_enableField(document.MAINFORM.APPL_BK_AC_NO_BTN); // Utility Auto Fix Comments
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");
        if ((document.MAINFORM.X103_ORDCU_ID_50A.value).trim() != "") {
            if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") {
                document.MAINFORM.X103_ORDCUACNO_50A.value = "";
                if (document.MAINFORM.X103_ORDCUACNO_50A.value == '') {
                    SYS_GetCUBK('X103_ORDCU_ID_50A_INTRF', 'X103_ORDCU_ID_50A', 'SYF_PYMT_Get_OrdCustAccts', 'SYF_PYMT_Clr_Ord_Cust', 'TRUE');
                    SYF_PYMT_ProtOrdCust();
                } else {
                    SYS_GetCUBK('X103_ORDCU_ID_50A_INTRF', 'X103_ORDCU_ID_50A', 'SYF_PYMT_ProtOrdCust', 'SYF_PYMT_Clr_Ord_Cust', 'TRUE');
                    SYM_PYMT_SYT_enableField(document.MAINFORM.APPL_BK_AC_NO_BTN); // Utility Auto Fix Comments
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
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
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
        document.MAINFORM.APPL_CNTY_RES.value = "";
        document.MAINFORM.DRT_DEAL_IND.value = "";
        document.MAINFORM.X103_TAG_50A.value = "";
        document.MAINFORM.RECORDER_TYPE.value = "";
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCU_NM_50A, "M");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD1_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD2_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUADD3_50A, "O");
        SYT_ChangeFldClass(document.MAINFORM.APPL_CNTY_RES, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");
        SYM_PYMT_enableField(document.MAINFORM.APPL_BK_AC_NO_BTN);
        SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
        document.MAINFORM.CHG_CASH_IND.value = 'No';
        if (document.MAINFORM.BENE_RECORDER_TYPE.value == 'NonCustomer' || document.MAINFORM.CR_CASH_IND.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DB_CASH_IND, "O");
        }
        SYF_PYMT_Set_Chg_CashInd();
        document.MAINFORM.RECORDER_TYPE.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_Valid_Date = function(dtfld_id) {
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
        sValDt = EEHtml.getElementById(dtfld_id).value;
        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt < dSysDt) {
                alert("The Value Date cannot be in the Past"); // Utility Auto Fix Comments
                EEHtml.getElementById(dtfld_id).value = SYS_BUSI_DATE;
                return false;
            }
            if (EEHtml.getElementById(dtfld_id).value != "") {
                if (EEHtml.getElementById(dtfld_id).name == "CPYT_DR_VAL_DATE") {
                    cntyCode = document.MAINFORM.DB_CCY.value.substring(0, 2);
                    document.MAINFORM.CNTY_CODE.value = cntyCode;
                    SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.CPYT_DR_VAL_DATE.name, '', '', SYS_BUSI_UNIT, '', 'SYF_PYMT_Chk_CPYT_DR_VAL_DATE_Fail()');
                    cntyCode = document.MAINFORM.CR_CCY.value.substring(0, 2);
                    document.MAINFORM.CNTY_CODE.value = cntyCode;
                    SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.CPYT_DR_VAL_DATE.name, '', '', SYS_BUSI_UNIT, '', 'SYF_PYMT_Chk_CPYT_DR_VAL_DATE_Fail()');
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
            EEHtml.getElementById(dtfld_id).value = SYS_BUSI_DATE;
            EEHtml.getElementById(dtfld_id).focus();
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_OVRIDE = function() {
    try {

        if (document.MAINFORM.OVRIDE.value == 'Yes' && document.MAINFORM.C_AC_IDENTIFIER.value != 'Y') {
            alert("The entered Account number cannot be overdrawn.");
            document.MAINFORM.OVRIDE.value = "No";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
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
                SYT_getExchangeRate_Settl(document.MAINFORM.DB_CCY, document.MAINFORM.CR_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.CR_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            } else if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) != 0) {
                SYT_getExchangeRate_Settl(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.CR_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            }
            SYT_ChangeFldClass(document.MAINFORM.X103_EXCH_RT_36, "P");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
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
                    alert("Exchange rate not loaded");
                    return;
                }
            }
        } else {

            SYF_PYMT_Set_BothAmtsToZero();
        }
        if (sDbCalAmt > 0 && document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            SYF_PYMT_Cal_Chrgs();
        }
        SYF_PYMT_Set_CovNumProp();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_APP_TYPE = function() {
    try {

        SYF_PYMT_Clr_Ord_Cust();
        if (document.MAINFORM.APP_TYPE.value == "VOSTRO" || document.MAINFORM.APP_TYPE.value == "NOSTRO") {
            if (document.MAINFORM.APP_TYPE.value == "VOSTRO") {
                if (document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO") {
                    alert("Can not be applyed " + " " + document.MAINFORM.APP_TYPE.value + " To " + document.MAINFORM.BENE_AC_TYPE.value);
                    document.MAINFORM.APP_TYPE.value = "CUSTOMER";
                }
            }
            if (document.MAINFORM.APP_TYPE.value == "NOSTRO") {
                if (document.MAINFORM.BENE_AC_TYPE.value == "NOSTRO" || document.MAINFORM.BENE_AC_TYPE.value == "VOSTRO") {
                    alert("Can not be applyed " + " " + document.MAINFORM.APP_TYPE.value + " To " + document.MAINFORM.BENE_AC_TYPE.value);
                    document.MAINFORM.APP_TYPE.value = "CUSTOMER";
                }
            }
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");
            SYM_PYMT_enableField(document.MAINFORM.APPL_BK_AC_NO_BTN);
            document.MAINFORM.DRT_DEAL_IND.value = '';
            if (document.MAINFORM.CR_CCY.value != document.MAINFORM.DB_CCY.value) {
                if (document.MAINFORM.DRT_DEAL_IND.value == 'Yes' && (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0 || SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0)) {
                    SYT_ChangeFldClass(document.MAINFORM.COV_NO, "M");
                    document.MAINFORM.COV_NO.value = "";
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.COV_NO, "O");
                    document.MAINFORM.COV_NO.value = "";
                }
            }
        } else {
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");
            SYT_EnableField(document.MAINFORM.APPL_BK_AC_NO_BTN);
            SYT_ChangeFldClass(document.MAINFORM.COV_NO, "P");
            document.MAINFORM.COV_NO.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_DB_CASH_IND = function() {
    try {

        var beneId; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        custID = document.MAINFORM.X103_ORDCU_ID_50A.value;
        beneId = document.MAINFORM.X103_BENECU_ID_59A.value;
        if (document.MAINFORM.DB_CASH_IND.value == 'Yes') {
            document.MAINFORM.X103_ORDCUACNO_50A.value = "Not Applicable";
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
            document.MAINFORM.CR_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "P");
            SYM_PYMT_clsdisableField(document.MAINFORM.APPL_BK_AC_NO_BTN);
        } else {
            document.MAINFORM.CR_CASH_IND.value = 'No';
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "M");
            SYT_ChangeFldClass(document.MAINFORM.CR_CASH_IND, "O");
            SYM_PYMT_enableField(document.MAINFORM.APPL_BK_AC_NO_BTN);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_DB_CCY = function() {
    try {

        var cntyCode; // Utility Auto Fix Comments
        document.MAINFORM.X103_EXCH_RT_36.value = "";
        document.MAINFORM.MD_I.value = "";

        SYT_getExchangeRate_Settl(document.MAINFORM.DB_CCY, document.MAINFORM.CR_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.CR_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);

        if (document.MAINFORM.X103_EXCH_RT_36.value == "" && document.MAINFORM.MD_I.value == "") {
            return;
        }

        if (document.MAINFORM.RECORDER_TYPE.value != 'NonCustomer') {
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_ORDCUACNO_50A, "P");
        }

        if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) != 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.DB_CCY, document.MAINFORM.CR_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.CR_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        } else if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) != 0) {
            SYT_getExchangeRate_Settl(document.MAINFORM.CR_CCY, document.MAINFORM.DB_CCY, document.MAINFORM.RATE_TYPE.value, document.MAINFORM.CR_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.X103_EXCH_RT_36, document.MAINFORM.MD_I, document.MAINFORM.COV_NO);
            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
        }

        cntyCode = document.MAINFORM.DB_CCY.value.substring(0, 2);
        document.MAINFORM.CNTY_CODE.value = cntyCode;

        if (document.MAINFORM.CPYT_DR_VAL_DATE.value != "") {
            SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.CPYT_DR_VAL_DATE.name, '', '', SYS_BUSI_UNIT, '', 'SYF_PYMT_Chk_CPYT_DR_VAL_DATE_Fail()');
        }

        SYF_PYMT_Set_CovNumProp();
        SYF_PYMT_Cal_Chrgs();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
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
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_APP_TYPE_onchange = function(event) {
    try {
        SYF_PYMT_Chg_APP_TYPE();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_BENE_AC_TYPE_onchange = function(event) {
    try {
        SYF_PYMT_Chg_BENE_AC_TYPE();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_CASH_IND_onchange = function(event) {
    try {
        SYF_PYMT_Chg_CHG_CASH_IND();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_COV_NO_onchange = function(event) {
    try {
        SYF_PYMT_Chg_COV_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_VAL_DATE_onchange = function(event) {
    try {
        SYF_PYMT_Chg_CPYT_DR_VAL_DATE();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CALC_AMT_onchange = function(event) {
    try {
        SYF_PYMT_Chg_CR_CALC_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CASH_IND_onchange = function(event) {
    try {
        SYF_PYMT_Chg_CR_CASH_IND();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CCY_onchange = function(event) {
    try {
        SYF_PYMT_Chg_CR_CCY();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DB_CALC_AMT_onchange = function(event) {
    try {
        SYF_PYMT_Chg_DB_CALC_AMT();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DB_CASH_IND_onchange = function(event) {
    try {
        SYF_PYMT_Chg_DB_CASH_IND();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DB_CCY_onchange = function(event) {
    try {
        SYF_PYMT_Chg_DB_CCY();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_FDS_AVAL_onchange = function(event) {
    try {
        SYF_PYMT_Chg_FDS_AVAL();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_OVRIDE_onchange = function(event) {
    try {
        SYF_PYMT_Chg_OVRIDE();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECUACNO59A_onchange = function(event) {
    try {
        SYF_PYMT_Chg_X103_BENECUACNO59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        SYF_PYMT_Chg_X103_BENECU_ID_59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_EXCH_RT_36_onchange = function(event) {
    try {
        SYF_PYMT_Chg_X103_EXCH_RT_36();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUACNO_50A_onchange = function(event) {
    try {
        SYF_PYMT_Chg_X103_ORDCUACNO_50A();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        SYF_PYMT_Chg_X103_ORDCU_ID_50A();
    } catch (e) {
        DisExcpt("SYF_PYMT_GeneralPurposeAccounting.js", e);
    }
}