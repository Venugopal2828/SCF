var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

var ChgCodeBS = "";
var ChgCodeOur = "";
var accCUBK = "";
var acctNumCUBK = "";
var inPostConditionOnInit = "N";
var v_C_ACCT_WITH_ID = "";

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        MAINFORM.CHG_CUST_AMT.value = Chg.Screen.getLocalTotalAmt();
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY; //FOR Bridge
        SYF_PYMT_Get_Resident_Status();
        if (document.MAINFORM.MX_OR_MT_FLAG.value == "MX") {
            document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
        } else {
            document.MAINFORM.C_MAIN_REF_20Z.value = '';
        }
        document.MAINFORM.CUTOFF_DAY.value = '';
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {
        document.MAINFORM.CHGCODE_OUR.value = ChgCodeOur;
        document.MAINFORM.CHGCODE_BS.value = ChgCodeBS;
        document.MAINFORM.CURRNT_STATUS.value = 'ITT_CAPTURE'; // Utility Auto Fix Comments
        document.MAINFORM.NXT_STATUS.value = "ITT_RELEASE";

        SYM_PYMT_move_notes_to_history();
        document.MAINFORM.NOTES.value = '';
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*ConfirmBusinessCallSave", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        var _dodetail; // Utility Auto Fix Comments
        var RecIndex; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var accMUPTIS; // Utility Auto Fix Comments
        var bkeFlag; // Utility Auto Fix Comments
        var bkeFlag202; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var paymentDO; // Utility Auto Fix Comments
        var sResult; // Utility Auto Fix Comments
        document.MAINFORM.CHGCODE_OUR.value = ChgCodeOur;
        document.MAINFORM.CHGCODE_BS.value = ChgCodeBS;
        if (!RateExists) {
            alert('Exchange rate needs to be loaded');
            return false;
        }
        if (document.MAINFORM.CPYT_DR_AC.value == "") {
            alert('The Debit account number may not be blank');
            return false;
        }
        if (document.MAINFORM.SEND_TO_FLAG.value != "Send to Investigation Queue") {
            if (!SYS_Batch_CheckFieldValue()) {
                return false;
            }
            if (sett_loadFlag) {
                if (document.MAINFORM.MT103_DISTRBN.value != "Single Settlement") {
                    paymentDO = SYS_getDoByXpath('PaymentMultipleDebits');
                    paymentDO.clearAll(true);
                } else if (document.MAINFORM.MT103_DISTRBN.value == "Single Settlement") {
                    document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.CR_AMT.value;
                    if (!SYM_PYMT_match_trn_and_settlement_amts()) {
                        return false;
                    }
                    SYF_PYMT_Chk_AcctNumChange();
                    _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
                    Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
                    for (i = 0; i < Records.length; i++) { // Utility Auto Fix Comments
                        Record = Records[i];
                        RecIndex = SYS_getRecID(Record);
                    }
                    document.MAINFORM.EXCH_RATE.value = SYS_getFieldValue(_dodetail, RecIndex, "EXCH_RATE"); // Utility Auto Fix Comments
                    document.MAINFORM.COV_NO.value = SYS_getFieldValue(_dodetail, RecIndex, "COV_NO"); // Utility Auto Fix Comments
                    document.MAINFORM.SETT_CCY.value = SYS_getFieldValue(_dodetail, RecIndex, "SETT_CCY"); // Utility Auto Fix Comments
                }
            }
            if (SYS_FUNCTION_TYPE != 'EC') {
                document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES) + 1;
            } else {
                document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES);
            }
            document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY;
            document.MAINFORM.C_MODULE.value = SYS_MODULE_NAME;
            document.MAINFORM.REMIT_INFO_TMP_70.value = '';
            if (document.MAINFORM.MT103_DISTRBN.value == "Forward Funds") {
                if (!SYF_PYMT_LocalMUP() && !SYF_PYMT_LocalTIS()) {
                    SYM_PYMT_chk_CrAcctNo();
                }
                bkeFlag = SYM_PYMT_chkRecBIC(document.MAINFORM.X103_ADV_BKSW_B2);
                if (!bkeFlag) {
                    return false;
                }
                if (bkeFlag) {
                    if (document.MAINFORM.CPYT_PAY_COV_MSG.value != "") {
                        bkeFlag202 = SYM_PYMT_chkRecBIC(document.MAINFORM.X202_ADV_BKSW_B2);
                        if (!bkeFlag202) {
                            return false;
                        }
                    }
                }
                document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CR_CCY.value;
                document.MAINFORM.X103_SETT_AMT_32A.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value);
                document.MAINFORM.X103_INSTR_CCY_33B.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
                if (SYS_BeFloat(document.MAINFORM.X103_SENDCHGAMT71F.value) <= 0) {
                    document.MAINFORM.X103_INSTR_AMT_33B.value = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value);
                } else {
                    document.MAINFORM.X103_INSTR_AMT_33B.value = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value) +
                        SYS_BeFloat(document.MAINFORM.X103_SENDCHGAMT71F.value);
                }
                SYM_PYMT_Chk_SwiftTags_103();
                if (document.MAINFORM.CPYT_PAY_COV_MSG.value != "") {
                    SYM_PYMT_Set_202Values(); // Utility Auto Fix Comments
                    SYM_PYMT_Set_SwiftTags_202();
                }
                SYM_PYMT_Chk_BkPartyIds_103();
                SYM_PYMT_Chk_BkPartyIds_202();
                document.MAINFORM.TOT_DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.TOT_DB_AMT.value);
                document.MAINFORM.CURRNT_STATUS.value = 'ITT_FWD_FDS';
                document.MAINFORM.NXT_STATUS.value = "ITT_RELEASE";
                SYF_PYMT_Set_Foreign_ChgAcct(ChgCodeOur);
                document.MAINFORM.REMIT_INFO_TMP_70.value = document.MAINFORM.X103_REMIT_INF1_70.value + document.MAINFORM.X103_REMIT_INF2_70.value + document.MAINFORM.X103_REMIT_INF3_70.value + document.MAINFORM.X103_REMIT_INF4_70.value;
            } else if (document.MAINFORM.MT103_DISTRBN.value == "Return of Funds") {
                SYF_PYMT_Set_Foreign_ChgAcct(ChgCodeOur);
                document.MAINFORM.CURRNT_STATUS.value = 'ITT_RET_FUNDS';
                document.MAINFORM.NXT_STATUS.value = "ITT_RELEASE";
                if (document.MAINFORM.CPYT_PAY_COV_MSG.value != "") {
                    SYM_PYMT_Set_SwiftTags_202();
                }
                document.MAINFORM.REMIT_INFO_TMP_70.value = document.MAINFORM.INW_X103_REMIT_INF1_70.value + document.MAINFORM.INW_X103_REMIT_INF2_70.value + document.MAINFORM.INW_X103_REMIT_INF3_70.value + document.MAINFORM.INW_X103_REMIT_INF4_70.value;
            } else if (document.MAINFORM.MT103_DISTRBN.value == "Single Settlement") {
                SYF_PYMT_Set_Foreign_ChgAcct(ChgCodeOur);
                document.MAINFORM.CURRNT_STATUS.value = 'ITT_CAPTURE';
                document.MAINFORM.NXT_STATUS.value = "ITT_RELEASE";
                SYT_Chk_FormAdv_CashInd(); //ADDED FOR CASH VOUCHER
                document.MAINFORM.REMIT_INFO_TMP_70.value = document.MAINFORM.INW_X103_REMIT_INF1_70.value + document.MAINFORM.INW_X103_REMIT_INF2_70.value + document.MAINFORM.INW_X103_REMIT_INF3_70.value + document.MAINFORM.INW_X103_REMIT_INF4_70.value;
            }
            sResult = SYM_PYMT_Chk_ValueDate_CutOffTime();
            if (sResult == false) {
                return false;
            } else {
                accMUPTIS = SYF_PYMT_CheckMUPTISAccountNumber();
                if (accMUPTIS == false) {
                    return false;
                }
            }
            document.MAINFORM.CHG_VALUE_DATE.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        } else {
            document.MAINFORM.CURRNT_STATUS.value = 'ITT_INVESTIGATION';
            document.MAINFORM.NXT_STATUS.value = "ITT_RELEASE";
            SYT_Audit_Update_Charges();
            if (document.MAINFORM.MT191_Flag.value == "Yes") {
                document.MAINFORM.MT191_Flag.value = "No";
            }
            if (document.MAINFORM.MT190_Flag == "Yes") {
                document.MAINFORM.MT190_Flag.value = "No";
            }
            document.MAINFORM.CPYT_PAY_ADV_MSG.value = "";
            document.MAINFORM.CPYT_PAY_COV_MSG.value = "";
            Chg.Screen.mapLocalCust("INW_X103_BENECU_ID_59A", "INW_X103_BENECU_NM_59A");
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = "3";
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'onChange');
        }
        SYM_PYMT_move_notes_to_history();
        SYT_setTag11forSwift();
        document.MAINFORM.MLT_STLMT.value = 'No';
        SYM_PYMT_Copy50Fvalues();
        SYT_Set_Int_Flds_CustId();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        var nLc_no; // Utility Auto Fix Comments
        var nSeq; // Utility Auto Fix Comments
        SYF_PYMT_Set_Init_Values();
        SYF_PYMT_Get_CPYT_DR_AC();
        SYF_PYMT_Set_MT900();
        SYM_PYMT_REF_20();
        //Added by Gopi
        FLD_PYMT_INW_X103_BENECUACNO59A_onchange(); //newly added gutcubk and onchange
        FLD_PYMT_INW_X103_ORDCUACNO_50A_onchange(); //newly added gutcubk and onchange
        document.MAINFORM.X103_ORDCU_ID_50A.value = document.MAINFORM.INW_X103_ORDCU_ID_50A.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        SYT_Audit_value_assign_WithSett();
        SYT_Audit_Main();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        var res;
        var sResult;
        inPostConditionOnInit = 'Y';
        SYT_ConfigureHelpLink();
        EEHtml.getElementById("E_div").style.display = "block";
        if (SYS_BANK_COUNTRY == 'ZA') {
            showZALBIs();
            SYT_ChangeFldClass(document.MAINFORM.FRONT_OFFICE_CODE, "M");
            SYT_ChangeFldClass(document.MAINFORM.EXTERNAL_REF, "M");
            SYT_ChangeFldClass(document.MAINFORM.INV_STATUS, "P");
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FLAG, "P");
            EEHtml.getElementById("Span_ER").style.visibility = "hidden";
            EEHtml.getElementById("X103_EXCH_RT_36").style.visibility = "hidden";
            EEHtml.getElementById('select3').remove(2);
        }
        if ((SYS_ORG_FUNCTION_NAME == "Cancel_ITT" && SYS_FUNCTION_TYPE == "EC") || (document.MAINFORM.CANCEL_FLG.value == "Yes" && SYS_FUNCTION_TYPE == "RE")) {
            if (SYS_BANK_COUNTRY != 'ZM') {
                Chg.Screen.mapForeignCust("CHG_CNTY_BANKID", "INW_SNDBK_NM", 'INW_X103_SETT_CCY_32A', 'CPYT_DR_AC');
            } else {
                Chg.Screen.mapForeignCust("INW_SNDBK_ID", "INW_SNDBK_NM", 'INW_X103_SETT_CCY_32A', 'CPYT_DR_AC');
            }
            if (document.MAINFORM.NXT_STATUS.value == "ITT_REPAIR") {
                Chg.Screen.mapLocalCust("INW_X103_BENECU_ID_59A", "INW_X103_BENECU_NM_59A");
            } else {
                Chg.Screen.mapLocalCust("X103_BENECU_ID_59A", "X103_BENECU_NM_59A");
            }
            SYT_Cancel_Init();
            return;
        } else {
            document.MAINFORM.CANCEL_FLG.value = "No";
        }
        document.MAINFORM.RATE_TYPE.value = 'Booking Rate';
        RATE_TYPE = document.MAINFORM.RATE_TYPE.value;
        rate_type = RATE_TYPE + ';' + RATE_TYPE + ';' + RATE_TYPE;
        if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_predoc", "_transaction");
            ChgCodeOur = document.MAINFORM.CHGCODE_OUR.value;
            ChgCodeBS = document.MAINFORM.CHGCODE_BS.value;
            SYF_PYMT_Init_EC();
            if (document.MAINFORM.MT103_DISTRBN.value == "Single Settlement") {
                SYT_ChangeFldClass(document.MAINFORM.IS_COVER, "M");
                if (document.MAINFORM.IS_COVER.value == 'Y') {
                    SYT_ChangeFldClass(document.MAINFORM.FUNDS_RECV, "M");
                } else if (document.MAINFORM.IS_COVER.value == 'N') {
                    SYT_ChangeFldClass(document.MAINFORM.FUNDS_RECV, "P");
                }
            }
        } else if (SYS_FUNCTION_TYPE == 'RE') { //&& SYS_ERROR == ""
            if (document.MAINFORM.ACC_CHANGE_FLAG.value == "true") {
                alert("Account Number in the transaction has been Modified from the Account Number in the Incoming Swift");
            }
            SYF_PYMT_Set_IncTabs();
            if (document.MAINFORM.SEND_TO_FLAG.value != "Send to Investigation Queue") {
                res = SYT_chkValDt_Rel();
                if (res == false) {
                    SYT_restrictRelease();
                } else {
                    if (document.MAINFORM.MT103_DISTRBN.value != "") {
                        sResult = SYM_PYMT_Chk_ValueDate_CutOffTime();
                        if (sResult == false) {
                            SYT_restrictRelease();
                        }
                    }
                }
            }
        } else if (SYS_FUNCTION_TYPE == 'IQ') {
            SYF_PYMT_Set_IncTabs();
        } else {
            ChgCodeBS = 'INW_PYT_COMM';
            ChgCodeOur = '71G_REC_CHGS';
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_predoc", "_transaction");
            Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
            if (SYS_BANK_COUNTRY != 'ZM') {
                Chg.Screen.mapLocalCust("INW_X103_BENECU_ID_59A", "INW_X103_BENECU_NM_59A"); //Add by Sunny 20150506
                Chg.Screen.mapForeignCust("CHG_CNTY_BANKID", "INW_SNDBK_NM", 'INW_X103_SETT_CCY_32A', 'CPYT_DR_AC');
            } else {
                Chg.Screen.mapForeignCust("INW_SNDBK_ID", "INW_SNDBK_NM", 'INW_X103_SETT_CCY_32A', 'CPYT_DR_AC');
            }
            if (document.MAINFORM.NXT_STATUS.value == "ITT_REPAIR") {
                Chg.Screen.mapLocalCust("INW_X103_BENECU_ID_59A", "INW_X103_BENECU_NM_59A");
            } else {
                Chg.Screen.mapLocalCust("X103_BENECU_ID_59A", "X103_BENECU_NM_59A");
            }
            //document.MAINFORM.X103_DET_CHG_71A.value = '';
            SYM_PYMT_Hide_LocPymtChrgs();
            SYF_PYMT_Chg_MT103_DISTRBN();
            SYT_Chgs_Without_Deferred_Terms();
            Chg.attchEvent(SYF_PYMT_Clbk_ITT_Chrgs);
            document.MAINFORM.ORG_BEN_CUSTID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
            document.MAINFORM.ORG_BEN_CUSTACCT.value = document.MAINFORM.X103_BENECUACNO59A.value;
            document.MAINFORM.FOR_CHG_ID.value = "DUMMY"; //sathish for kp jan 11
            document.MAINFORM.FOR_CHG_NAME.value = "DUMMY"; ////sathish for kp
            // SYF_PYMT_Chk_Inc_ValDt();
        }
        SYT_AdviceAutoPrint(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.X103_BENECU_ID_59A.value, "IT");
        inPostConditionOnInit = 'N';
        SYF_PYMT_MPO_X9N0_25P_IDENTIFIER()
        SYF_PYMT_Set_MT900();
        FLD_PYMT_X103_BENECUACNO59A_onchange();
        FLD_PYMT_INW_X103_DET_CHG_71A_onchange();
        EEHtml.getElementById('K').style.display = "block";
        EEHtml.getElementById('MT191_Break').style.display = 'block';
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_PYMT_AC_NO_Change = function() {
    try {
        SYM_PYMT_Set_ChgCashInd();

        SYS_GetCUBK('GetContactInfo', 'X103_BENECU_ID_59A', '', '', 'TRUE');

        if (document.MAINFORM.X103_BENECUACNO59A.value != '') {
            if (document.MAINFORM.X103_BENECUACNO59A.value.length > 35) {
                alert("Beneficiary account number must be prefixed with / and not exceed 34 characters");
                document.MAINFORM.X103_BENECUACNO59A.value = "";
            }

            SYM_PYMT_Chk_X103_BENECUACNO59A_IBAN();
        } else {
            if (document.MAINFORM.MT103_DISTRBN.value == "Forward Funds") {
                SYM_PYMT_Enb_103_Acct_With_Ins();
                SYM_PYMT_Clr_All_Banks('Clear103');
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_AC_NO_Change", e);
    }
}

csFuncLevelProto.SYF_PYMT_Ben_ID_Fail = function() {
    try {
        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            alert("The Customer Id is invalid");
            document.MAINFORM.X103_BENECU_ID_59A.value = '';
        }

        FLD_PYMT_X103_BENECU_ID_59A_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Ben_ID_Fail", e);
    }
}

csFuncLevelProto.SYF_PYMT_CheckMUPTISAccountNumber = function() {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        Mapping_List = "";
        ////Field_List = "C_ACCT_NR";

        if (document.MAINFORM.MT103_DISTRBN.value == 'Single Settlement') {
            Mapping_List = "CPYT_DR_AC";
        } else if (document.MAINFORM.MT103_DISTRBN.value == 'Forward Funds') {
            Mapping_List = "CPYT_CR_BK_AC";
        }

        switch (SYS_BANK_COUNTRY) {
            case "MU":
                if (SYF_PYMT_LocalMUP()) {
                    ////Sql_Cond1 = "BIC_CODE = 'BOMMMUPLXXX' AND c_cnty_code = 'MU' AND c_acct_ccy = 'MUR'";

                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_CheckMUPTISAccountNumber_19', '1', true);
                    if (document.MAINFORM[Mapping_List].value != document.MAINFORM.TEMP_ACC_NO.value) {
                        if (document.MAINFORM.MT103_DISTRBN.value == 'Single Settlement') {
                            alert("This is a local MUP transaction and therefore the debit account number for this transaction must be " + document.MAINFORM.TEMP_ACC_NO.value);
                            return false;
                        } else if (document.MAINFORM.MT103_DISTRBN.value == 'Forward Funds') {
                            alert("This is a local MUP transaction and therefore the credit account number for this transaction must be " + document.MAINFORM.TEMP_ACC_NO.value);
                            return false;
                        }
                    }
                }
                break;
            case "TZ":
                if (SYF_PYMT_LocalTIS()) {
                    ////Sql_Cond1 = "BIC_CODE = 'TANZTZTZXXX' AND c_cnty_code = 'TZ' AND c_acct_ccy = 'TZS'";

                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_CheckMUPTISAccountNumber_20', '1', true);
                    if (document.MAINFORM[Mapping_List].value != document.MAINFORM.TEMP_ACC_NO.value) {
                        if (document.MAINFORM.MT103_DISTRBN.value == 'Single Settlement') {
                            alert("This is a local TZS transaction and therefore the debit account number for this transaction must be " + document.MAINFORM.TEMP_ACC_NO.value);
                            return false;
                        } else if (document.MAINFORM.MT103_DISTRBN.value == 'Forward Funds') {
                            alert("This is a local TZS transaction and therefore the credit account number for this transaction must be " + document.MAINFORM.TEMP_ACC_NO.value);
                            return false;
                        }
                    }
                }
                break;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_CheckMUPTISAccountNumber", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_Ben_Opt = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_ID_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_TAG_59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_TYPE, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "O");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_SW_59A, "O");
        SYM_PYMT_enableField(document.MAINFORM.X103_ID_59_BTN, 'O');
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chg_Ben_Opt", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_Ben_Prot = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_ID_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_TAG_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_TYPE, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_SW_59A, "P");
        SYM_PYMT_disableField(document.MAINFORM.X103_ID_59_BTN);
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chg_Ben_Prot", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CORR_MSG = function() {
    try {
        var corrMsg; // Utility Auto Fix Comments
        corrMsg = document.MAINFORM.CORR_MSG.value;
        if (corrMsg == "MT195" || corrMsg == "MT196") {
            SYF_PYMT_Set_MT195_MT196();
        } else {
            SYF_PYMT_Clr_MT195_MT196Tab();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chg_CORR_MSG", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_MT103_DISTRBN = function() {
    try {
        var sDistrVal; // Utility Auto Fix Comments
        SYM_PYMT_Hide_Chgs_PaidByRow();
        SYF_PYMT_Set_Chgs_Desc();
        sDistrVal = document.MAINFORM.MT103_DISTRBN.value;
        if (sDistrVal != "") {
            if (sDistrVal == "Single Settlement") {
                if (document.MAINFORM.X103_BENECU_ID_59A.value == '') {
                    document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.INW_X103_BENECU_ID_59A.value;
                    document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;
                    document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;
                    document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;
                    document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;
                    document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;
                    document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;
                    document.MAINFORM.X103_BENECUACNO59A.value = document.MAINFORM.INW_X103_BENECUACNO59A.value;
                }
                SYM_PYMT_disableField(document.MAINFORM.X103_B2_ADD_BTN);
                SYM_PYMT_clsdisableField(document.MAINFORM.CUST_REF);
                SYF_PYMT_Show_Sett();
                SYF_PYMT_Hide_Out_Charges();
                SYF_PYMT_Hide_195_196Tab();
                document.MAINFORM.CPYT_PAY_ADV_MSG.value = "";
                document.MAINFORM.CPYT_CR_BK_AC.value = "";
                SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BK_AC, "P");
                SYM_PYMT_clsdisableField(document.MAINFORM.X103_DET_CHG_71A);
                SYF_PYMT_Dis_Out_MT103();
                SYF_PYMT_Set_InwPytComm_Chrgs(ChgCodeBS);
                SYF_PYMT_Set_RecChgs(ChgCodeOur);
                SYF_PYMT_Set_RetFundsChrgs();
                document.MAINFORM.X103_SEND_NO_20.value = '';
                document.MAINFORM.CUST_REF.value = '';
                SYM_PYMT_Dis_2XX_div();
                SYF_PYMT_Set_Chrg_CashInd();
                SYF_PYMT_Set_CrAmt();
                if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
                    SYF_PYMT_Set_MT191(ChgCodeOur);
                    SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "O");
                }
                if (document.MAINFORM.ORG_BEN_CUSTID.value == '') {
                    SYF_PYMT_Chg_Ben_Opt();
                } else {
                    document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.ORG_BEN_CUSTID.value;
                    SYS_GetCUBK_S('X103_BENECU_ID_59A_NONCU', 'X103_BENECU_ID_59A', 'TRUE');
                    document.MAINFORM.X103_BENECUACNO59A.value = document.MAINFORM.ORG_BEN_CUSTACCT.value;
                    SYF_PYMT_Chg_Ben_Prot();
                }
                SYT_Audit_Update_Charges();
                if (SYS_BANK_COUNTRY == 'ZA') {
                    SYF_PYMT_HidePayTabs();
                }
                SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_ID_59A, "O");
                SYT_ChangeFldClass(document.MAINFORM.X103_ID_59_BTN, "O");
				SYT_ChangeFldClass(document.MAINFORM.IS_COVER, "M");
            } else if (sDistrVal == "Forward Funds") {
                SYM_PYMT_enableField(document.MAINFORM.X103_B2_ADD_BTN, 'O');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BK_AC, "M");
                SYM_PYMT_enableField(document.MAINFORM.CUST_REF, 'O');
                SYF_PYMT_Hide_Sett();
                SYF_PYMT_Show_Out_Charges();
                SYF_PYMT_Hide_195_196Tab();
                SYF_PYMT_Set_InwPytComm_Chrgs(ChgCodeBS);
                SYF_PYMT_Set_RetFundsChrgs();
                SYF_PYMT_Set_RecChgs(ChgCodeOur);
                SYF_PYMT_Set_Chrg_CashInd();
                SYF_PYMT_Set_CrAmt();
                document.MAINFORM.CPYT_PAY_ADV_MSG.value = "MT103";
                SYF_PYMT_Set_MT103_Values();
                SYT_ChangeFldClass(document.MAINFORM.X103_DET_CHG_71A, "P");
                if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
                    SYF_PYMT_Set_MT191(ChgCodeOur);
                }
                SYT_Audit_Update_Charges();
                SYF_PYMT_ShowPayTabs();
				SYT_ChangeFldClass(document.MAINFORM.IS_COVER, "P");
				document.MAINFORM.IS_COVER.value = "";
				SYT_ChangeFldClass(document.MAINFORM.FUNDS_RECV, "P");
				document.MAINFORM.FUNDS_RECV.value = "";
            } else if (sDistrVal == "Return of Funds") {
                SYF_PYMT_Dis_Out_MT103();
                SYF_PYMT_Hide_Sett();
                SYF_PYMT_Hide_Out_Charges();
                SYF_PYMT_Set_RecChgs(ChgCodeOur);
                SYF_PYMT_Set_InwPytComm_Chrgs(ChgCodeBS);
                SYF_PYMT_Set_RetFundsChrgs();
                SYT_disableField(document.MAINFORM.X103_B2_ADD_BTN);
                document.MAINFORM.CPYT_CR_BK_AC.value = "";
                SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BK_AC, "P");
                document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
                SYM_PYMT_clsdisableField(document.MAINFORM.CUST_REF);
                SYF_PYMT_Set_Chrg_CashInd();
                SYF_PYMT_Set_CrAmt();
                document.MAINFORM.CPYT_PAY_COV_MSG.value = "MT202";
                SYF_PYMT_Set_MT202Values();
                SYF_PYMT_Show_195_196Tab();
                SYF_PYMT_Chg_CORR_MSG();
                if (document.MAINFORM.MT191_Flag.value == 'Yes') {
                    document.MAINFORM.MT191_Flag.value = 'No'; // Utility Auto Fix Comments
                    SYF_PYMT_Chg_MT191_Flag(); // Utility Auto Fix Comments
                }
                if (document.MAINFORM.MT190_Flag.value == 'Yes') {
                    document.MAINFORM.MT190_Flag.value = 'No'; // Utility Auto Fix Comments
                    SYF_PYMT_Chg_MT190_Flag(); // Utility Auto Fix Comments
                }
                SYT_Audit_Update_Charges();
                SYF_PYMT_ShowPayTabs();
                SYF_PYMT_Set_MT103_Values();
				SYT_ChangeFldClass(document.MAINFORM.IS_COVER, "P");
		        document.MAINFORM.IS_COVER.value = "";
		        SYT_ChangeFldClass(document.MAINFORM.FUNDS_RECV, "P");
		        document.MAINFORM.FUNDS_RECV.value = "";
            }
        } else {
            SYT_disableField(document.MAINFORM.X103_B2_ADD_BTN);
            document.MAINFORM.CPYT_PAY_ADV_MSG.value = "";
            document.MAINFORM.CPYT_CR_BK_AC.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BK_AC, "P");
            SYF_PYMT_Dis_Out_MT103();
            SYF_PYMT_Hide_Sett();
            SYF_PYMT_Hide_Out_Charges();
            SYF_PYMT_Hide_195_196Tab();
            SYF_PYMT_Set_RecChgs(ChgCodeOur);
            SYF_PYMT_Set_InwPytComm_Chrgs(ChgCodeBS);
            SYF_PYMT_Set_RetFundsChrgs();
            document.MAINFORM.X103_DET_CHG_71A.value = document.MAINFORM.INW_X103_DET_CHG_71A.value;
            document.MAINFORM.X103_SEND_NO_20.value = '';
            document.MAINFORM.CUST_REF.value = '';
            SYF_PYMT_Set_Chrg_CashInd();
            SYF_PYMT_Set_CrAmt();
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
                SYF_PYMT_Set_MT191(ChgCodeOur);
            }
        }
        SYF_PYMT_ITT_MUP_TIS_AccountChargesRules();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chg_MT103_DISTRBN", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_MT190_Flag = function() {
    try {
        if (document.MAINFORM.MT190_Flag.value == "Yes") {
            SYF_PYMT_Enb_MT190();
        } else if (document.MAINFORM.MT190_Flag.value == "No") {
            SYF_PYMT_Dis_MT190();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chg_MT190_Flag", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_MT191_Flag = function() {
    try {
        if (document.MAINFORM.MT191_Flag.value == "Yes") {
            SYF_PYMT_Enb_MT191(); // Utility Auto Fix Comments
        } else if (document.MAINFORM.MT191_Flag.value == "No") {
            SYF_PYMT_Dis_MT191(); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chg_MT191_Flag", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_SEND_TO_FLAG = function() {
    try {
        var Paid_71GObj; // Utility Auto Fix Comments
        var RecChg_71GObj; // Utility Auto Fix Comments
        if (document.MAINFORM.SEND_TO_FLAG.value == "Send to Investigation Queue") {
            document.MAINFORM.INV_STATUS.value = "Investigations " + SYS_BUSI_DATE;
            document.MAINFORM.CURRNT_STATUS.value = 'ITT_INVESTIGATION';
            document.MAINFORM.NXT_STATUS.value = "ITT_RELEASE";

            document.MAINFORM.MT103_DISTRBN.value = "";
            SYT_ChangeFldClass(document.MAINFORM.X103_VALUE_DT_32A, "O");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "O");
            SYT_ChangeFldClass(document.MAINFORM.MT103_DISTRBN, "O");
            SYF_PYMT_Chg_MT103_DISTRBN();

            if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
                RecChg_71GObj = Chg.Screen.getTrxChargeByCommCode(ChgCodeOur);
                RecChg_71GObj.reset();
                if (Chg.Screen.getTrxChargeByCommCode('PAID_71G')) {
                    Paid_71GObj = Chg.Screen.getTrxChargeByCommCode('PAID_71G');
                    Paid_71GObj.reset();
                }
                SYF_PYMT_Set_MT191(ChgCodeOur);
            }
            SYF_PYMT_Set_Chrgs_TotalAmt();
        } else {
            document.MAINFORM.INV_STATUS.value = "";
            document.MAINFORM.NXT_STATUS.value = "";
            SYT_ChangeFldClass(document.MAINFORM.MT103_DISTRBN, "M");
            SYT_ChangeFldClass(document.MAINFORM.X103_VALUE_DT_32A, "M");
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
                SYF_PYMT_Set_RecChgs(ChgCodeOur);
                SYF_PYMT_Set_MT191(ChgCodeOur);
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
            }

        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chg_SEND_TO_FLAG", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_DET_CHG_71A = function() {
    try {
        SYF_PYMT_ITT_MUP_TIS_AccountChargesRules();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chg_X103_DET_CHG_71A", e);
    }
}

csFuncLevelProto.SYF_PYMT_ChkCustAccNum = function(acctNum) {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        acctNumCUBK = acctNum;
        document.MAINFORM.C_CUST_ID.value = "";
        //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_AC_NUMBER=" + "'" + acctNumCUBK + "'";
        //Field_List = "C_CUST_ID";
        //Mapping_List = "C_CUST_ID";
        SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_ChkCustAccNum_16', '1', true);
        if (document.MAINFORM.C_CUST_ID.value != "") {
            //Sql_Cond1 = "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_MAIN_REF=" + "'" + document.MAINFORM.C_CUST_ID.value + "'";
            //Field_List1 = "RECORDER_TYPE";
            //Mapping_List1 = "RECORDER_TYPE";
            SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_ChkCustAccNum_17', '1', true);
            if (document.MAINFORM.RECORDER_TYPE.value == "Customer") {
                return document.MAINFORM.C_CUST_ID.value;
            } else {
                return "";
            }
        } else {
            return "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_ChkCustAccNum", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_AcctNumChange = function() {
    try {
        var NumArr; // Utility Auto Fix Comments
        var RecIndex; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var RecvAcctNum; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
        var chkAcctNum; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var settAcctNum; // Utility Auto Fix Comments
        RecvAcctNum = document.MAINFORM.INW_X103_BENECUACNO59A.value;
        chkAcctNum = ''; // Utility Auto Fix Comments
        if (RecvAcctNum != '') {
            NumArr = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
            for (i = 0; i < RecvAcctNum.length; i++) {
                for (j = 0; j < NumArr.length; j++) {
                    if (RecvAcctNum.charAt(i) == NumArr[j]) {
                        chkAcctNum = chkAcctNum + RecvAcctNum.charAt(i);
                    }
                }
            }
            _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
            Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments

            for (i = 0; i < Records.length; i++) {
                Record = Records[i];
                RecIndex = SYS_getRecID(Record);
            }
            settAcctNum = SYS_getFieldValue(_dodetail, RecIndex, "CPYT_DR_AC"); // Utility Auto Fix Comments
            if (chkAcctNum != settAcctNum) {
                document.MAINFORM.ACC_CHANGE_FLAG.value = "true";
            } else {
                document.MAINFORM.ACC_CHANGE_FLAG.value = "false";
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chk_AcctNumChange", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_BenAcctValid = function() {
    try {
        var BENECUACNO59A; // Utility Auto Fix Comments
        var BenCustId; // Utility Auto Fix Comments
        var NumArr; // Utility Auto Fix Comments
        var X103_BENECUACNO59A; // Utility Auto Fix Comments
        BenCustId = "";
        X103_BENECUACNO59A = "";
        BENECUACNO59A = document.MAINFORM.INW_X103_BENECUACNO59A.value;
        if (BENECUACNO59A != "" && document.MAINFORM.INW_X103_ACC_BKSW_57A.value == SYS_LOGIN_BIC) {
            BENECUACNO59A = String(BENECUACNO59A);
            NumArr = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
            for (i = 0; i < BENECUACNO59A.length; i++) {
                for (j = 0; j < NumArr.length; j++) {
                    if (BENECUACNO59A.charAt(i) == NumArr[j]) {
                        X103_BENECUACNO59A = X103_BENECUACNO59A + BENECUACNO59A.charAt(i);
                    }
                }
            }
            BenCustId = SYF_PYMT_ChkCustAccNum(X103_BENECUACNO59A);
            if (BenCustId != "") {
                document.MAINFORM.NXT_STATUS.value = "ITT_PROCESS";
                document.MAINFORM.X103_BENECU_ID_59A.value = BenCustId;
                SYS_GetCUBK_S('X103_BENECU_ID_59A_NONCU', 'X103_BENECU_ID_59A', 'TRUE');
                document.MAINFORM.X103_BENECUACNO59A.value = X103_BENECUACNO59A;
                document.MAINFORM.ORG_BEN_CUSTID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
                document.MAINFORM.ORG_BEN_CUSTACCT.value = document.MAINFORM.X103_BENECUACNO59A.value;
                SYF_PYMT_Chg_Ben_Prot();
            } else {
                if (SYS_BANK_COUNTRY == "MU") {
                    SYF_PYMT_Chk_IBANForMU();
                }
            }

        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chk_BenAcctValid", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_IBANForMU = function() {
    try {
        var BENECUACNO59A; // Utility Auto Fix Comments
        var BenCustId1; // Utility Auto Fix Comments
        var BenCustId2; // Utility Auto Fix Comments
        var CleanedAccNum; // Utility Auto Fix Comments
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var NumArr; // Utility Auto Fix Comments
        var Res1; // Utility Auto Fix Comments
        var Res2; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var recCCY; // Utility Auto Fix Comments
        BENECUACNO59A = document.MAINFORM.INW_X103_BENECUACNO59A.value;
        BENECUACNO59A = String(BENECUACNO59A);
        X103_BENECUACNO59A = "";
        NumArr = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
        for (i = 0; i < BENECUACNO59A.length; i++) {
            for (j = 0; j < NumArr.length; j++) {
                if (BENECUACNO59A.charAt(i) == NumArr[j]) {
                    X103_BENECUACNO59A = X103_BENECUACNO59A + BENECUACNO59A.charAt(i);
                }
            }
        }
        CleanedAccNum = X103_BENECUACNO59A;
        Res1 = "";
        Res2 = "";
        if (CleanedAccNum.length == 30) {
            //recCCY = X103_BENECUACNO59A.substring(27);
            //Sql_Cond = "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "ITEM_NAME=" + "'" + recCCY + "'" + " AND " + "ITEM_C=" + "'014'";
            //Field_List = "FIELD_1_X";
            //Mapping_List = "FIELD_1_X";
            SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Chk_IBANForMU_18', '1', true);
            Res1 = document.MAINFORM.FIELD_1_X.value;
            Res2 = X103_BENECUACNO59A.substring(12, 23);
            X103_BENECUACNO59A = Res1 + Res2;
            document.MAINFORM.FIELD_1_X.value = "";
            BenCustId1 = SYF_PYMT_ChkCustAccNum(X103_BENECUACNO59A);
            if (BenCustId1 != "") {
                document.MAINFORM.NXT_STATUS.value = "ITT_PROCESS";
                document.MAINFORM.X103_BENECU_ID_59A.value = BenCustId1;
                SYS_GetCUBK_S('X103_BENECU_ID_59A_NONCU', 'X103_BENECU_ID_59A', 'TRUE');
                document.MAINFORM.X103_BENECUACNO59A.value = X103_BENECUACNO59A;
                document.MAINFORM.ORG_BEN_CUSTID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
                document.MAINFORM.ORG_BEN_CUSTACCT.value = document.MAINFORM.X103_BENECUACNO59A.value;
                SYF_PYMT_Chg_Ben_Prot();
            }
        } else if (CleanedAccNum.length == 24) {
            Res1 = CleanedAccNum.substring(12);
            X103_BENECUACNO59A = Res1.substring(0, 4) + '0' + Res1.substring(4);
            BenCustId2 = SYF_PYMT_ChkCustAccNum(X103_BENECUACNO59A);
            if (BenCustId2 != "") {
                document.MAINFORM.NXT_STATUS.value = "ITT_PROCESS";
                document.MAINFORM.X103_BENECU_ID_59A.value = BenCustId2;
                SYS_GetCUBK_S('X103_BENECU_ID_59A_NONCU', 'X103_BENECU_ID_59A', 'TRUE');
                document.MAINFORM.X103_BENECUACNO59A.value = X103_BENECUACNO59A;
                document.MAINFORM.ORG_BEN_CUSTID.value = document.MAINFORM.X103_BENECU_ID_59A.value;
                document.MAINFORM.ORG_BEN_CUSTACCT.value = document.MAINFORM.X103_BENECUACNO59A.value;
                SYF_PYMT_Chg_Ben_Prot();
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chk_IBANForMU", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_Inc_ValDt = function() {
    try {
        var dSpotDt; // Utility Auto Fix Comments
        var dSysDt; // Utility Auto Fix Comments
        var dincValDt; // Utility Auto Fix Comments
        var incValDt; // Utility Auto Fix Comments
        var reqDate; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sStDate; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var spotDate; // Utility Auto Fix Comments
        incValDt = document.MAINFORM.INW_X103_VALUE_DT_32A.value;
        sSysDt = SYS_BUSI_DATE;
        dincValDt = SYT_GetDateObjectFromStr(incValDt);
        dSysDt = SYT_GetDateObjectFromStr(sSysDt);
        if (dincValDt < dSysDt) {
            alert("The Value Date cannot be in the Past");
            document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
        } else if (dincValDt >= dSysDt) {
            sCntyCode = SYS_BANK_COUNTRY;
            sStDate = SYS_BUSI_DATE;
            spotDate = SYS_CalEndWorkingDate_S(sCntyCode, sStDate, '2', 'TWO_DAYS_BACK', 'A', 'y', 'y');
            reqDate = document.MAINFORM.TWO_DAYS_BACK.value;
            dSpotDt = SYT_GetDateObjectFromStr(reqDate);
            if (dincValDt > dSpotDt) {
                alert("The Value Date cannnot be more than Spot");
                document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
            } else if (dincValDt <= dSpotDt) {
                document.MAINFORM.X103_VALUE_DT_32A.value = incValDt;
            } else {
                document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
            }
        }
        document.MAINFORM.DB_CCY.value = document.MAINFORM.CR_CCY.value;
        SYM_PYMT_Chg_X103_VALUE_DT_32A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Chk_Inc_ValDt", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clbk_ITT_Chrgs = function() {
    try {
        var IncCredAmt; // Utility Auto Fix Comments
        var InwPytComm; // Utility Auto Fix Comments
        var RecChg_71GObj; // Utility Auto Fix Comments
        var RetFdsObj; // Utility Auto Fix Comments
        var SendChg; // Utility Auto Fix Comments
        if (document.MAINFORM.MT103_DISTRBN.value == 'Single Settlement') {
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value == 'OUR') {
                SYF_PYMT_Set_ChgChanges_OUR(ChgCodeOur);
                document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
                EEHtml.fireEvent(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "onchange");
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYM_PYMT_disableField(document.MAINFORM.CHG_GETAC_BTN);
                SYF_PYMT_Set_MT191(ChgCodeOur);
            } else {
                if (SYS_FUNCTION_TYPE == 'EC') {
                    Chg.Screen.protectAllCollectAmt();
                }
                if (document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value == 0) {
                    if (document.MAINFORM.INW_X103_DET_CHG_71A.value == 'OUR') {
                        document.MAINFORM.CHG_CASH_IND.value = 'No';
                        SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
                    } else {
                        if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
                            document.MAINFORM.CHG_CASH_IND.value = 'No';
                            if (document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value == "Not Applicable") {
                                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
                            }
                            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
                            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
                            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "O");
                        } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
                            document.MAINFORM.CHG_CASH_IND.value = 'Yes';
                            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
                            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                            SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
                        }
                    }
                }
                InwPytComm = Chg.Screen.getTrxChargeByCommCode(ChgCodeBS);
                if (InwPytComm.getChargeAt() == "3") {
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
                }
                if (document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value != InwPytComm.getChargeAt()) {
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = InwPytComm.getChargeAt();
                    EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "onchange");
                }
            }
            SYF_PYMT_Set_CrAmt();
        } else if (document.MAINFORM.MT103_DISTRBN.value == 'Forward Funds') {
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value != 'OUR') {
                if (document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value != document.MAINFORM.INW_X103_SETT_CCY_32A.value) {
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
                    SYT_calForeignColl2PayRate(SYS_LOCAL_CCY, document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value);
                    EEHtml.fireEvent(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "onchange");
                    SYT_calLocalColl2PayRate(SYS_LOCAL_CCY, document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value);
                }
                InwPytComm = Chg.Screen.getTrxChargeByCommCode(ChgCodeBS);
                if (SYS_FUNCTION_TYPE == 'EC') {
                    if (InwPytComm.getChargeAt() == '') {
                        InwPytComm.setChargeAt(0);
                    }
                }
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYM_PYMT_disableField(document.MAINFORM.CHG_GETAC_BTN);
                IncCredAmt = SYS_BeFloat(document.MAINFORM.INW_X103_SETT_AMT_32A.value);
                SendChg = Chg.Screen.getForeignPayTotalAmt();
                document.MAINFORM.X103_SENDCHGCCY71F.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
                document.MAINFORM.X103_SENDCHGAMT71F.value = SYT_AmtFormat(document.MAINFORM.X103_SENDCHGCCY71F.value, SendChg);
                if (SYS_BeFloat(SendChg) > 0) {
                    document.MAINFORM.X103_DET_CHG_71A.value = "BEN";
                    SYF_PYMT_Set_Fwd_72_Info();
                } else {
                    document.MAINFORM.X103_DET_CHG_71A.value = "SHA";
                    document.MAINFORM.X103_BK2BK_INF2_72.value = document.MAINFORM.INW_X103_BK2BK_INF2_72.value;
                }
            } else {
                InwPytComm = Chg.Screen.getTrxChargeByCommCode(ChgCodeBS);
                if (SYS_FUNCTION_TYPE == 'EC') {
                    if (InwPytComm.getChargeAt() == '') {
                        InwPytComm.setChargeAt(0);
                    }
                }
                SYF_PYMT_Set_ChgChanges_OUR(ChgCodeOur);
                SYF_PYMT_Set_MT191(ChgCodeOur);
            }


            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, IncCredAmt - SendChg);
            SYF_PYMT_Set_Out_103_Inst();
            InwPytComm = Chg.Screen.getTrxChargeByCommCode(ChgCodeBS);
            if (document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value != InwPytComm.getChargeAt()) {
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = InwPytComm.getChargeAt();
                EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "onchange");
            }
            SYF_PYMT_Set_CrAmt();
        } else if (document.MAINFORM.MT103_DISTRBN.value == 'Return of Funds') {
            RetFdsObj = Chg.Screen.getTrxChargeByCommCode('RET_FDS_FEE');
            if (SYS_FUNCTION_TYPE == 'EC') {
                if (RetFdsObj.getChargeAt() == '') {
                    RetFdsObj.setChargeAt(0);
                }
            }
            RetFdsObj.protectChargeFor();
            RetFdsObj.protectChargeAt();
            if (document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value != RetFdsObj.getChargeAt()) {
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = RetFdsObj.getChargeAt();
                EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "onchange");
            }
            SYF_PYMT_Set_CrAmt();
            document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CR_AMT.value;
            if (document.MAINFORM.CORR_MSG.value == "MT195" || document.MAINFORM.CORR_MSG.value == "MT196") {
                SYF_PYMT_Set_195_196Narr();
            }
        } else {
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value == 'OUR') {
                SYF_PYMT_Set_ChgChanges_OUR(ChgCodeOur);
                SYF_PYMT_Set_MT191(ChgCodeOur);
            }
        }

        if (document.MAINFORM.INW_X103_DET_CHG_71A.value == 'OUR') {
            RecChg_71GObj = Chg.Screen.getTrxChargeByCommCode(ChgCodeOur);
            if (RecChg_71GObj.getBalAmt() > 0) {
                RecChg_71GObj.setCollectAmt(0);
                RecChg_71GObj.setPayAmt(0);
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Clbk_ITT_Chrgs", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clk_Ben_Cust_lookup = function() {
    try {
        var name; // Utility Auto Fix Comments
        name = document.MAINFORM.X103_BENECU_NM_59A.value.trim();
        if (name != "") {
            //SYS_InqCUBK_Sql('X103_BENECU_ID_59A', SYM_PYMT_SYS_buildSQLCond(new Array('PARTY_NM','X103_BENECU_NM_59A')));
            //SYS_InqCUBK_Sql('X103_BENECU_ID_59A', SYM_PYMT_SearchLookUp(new Array('PARTY_NM','X103_BENECU_NM_59A'),"","(RECORDER_TYPE = \'Customer\' OR RECORDER_TYPE = \'NonCustomer\' )"));
            //SYS_InqCUBK_Sql('X103_BENECU_ID_59A_NONCU', SYM_PYMT_SearchLookUp(new Array('PARTY_NM', 'X103_BENECU_NM_59A'), "", "(RECORDER_TYPE = \'Customer\' OR RECORDER_TYPE = \'NonCustomer\' )"));
            SYS_InqCUBK_byCondition('X103_BENECU_ID_59A_NONCU', '1');
        } else {
            //SYS_InqCUBK('X103_BENECU_ID_59A');
            SYS_InqCUBK_byCondition('X103_BENECU_ID_59A_NONCU', '2');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Clk_Ben_Cust_lookup", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clk_DB_Acct_No_Lookup = function() {
    try {
        if (document.MAINFORM.INW_X103_RECCORRID_54A.value.trim() != '') {
            document.MAINFORM.AC_WT_INST_ID.value = document.MAINFORM.INW_X103_RECCORRID_54A.value;
        } else if (document.MAINFORM.INW_X103_SENDCORRID53A.value.trim() != '') {
            document.MAINFORM.AC_WT_INST_ID.value = document.MAINFORM.INW_X103_SENDCORRID53A.value;
        } else if (document.MAINFORM.INW_SNDBK_ID.value.trim() != '') {
            document.MAINFORM.AC_WT_INST_ID.value = document.MAINFORM.INW_SNDBK_ID.value;
        }
        if (document.MAINFORM.INW_X103_SETT_CCY_32A.value == SYS_LOCAL_CCY) {
            document.MAINFORM.C_CLEAR_TYPE.value = "VOSTRO";
        } else {
            document.MAINFORM.C_CLEAR_TYPE.value = "NOSTRO";
        }
        if (document.MAINFORM.AC_WT_INST_ID.value != '') {
            //SYS_InqCUBK_Sql('CPYT_DR_AC_INQ', 'C_CLEAR_TYPE = \'<--C_CLEAR_TYPE-->\' AND C_ACCT_CCY = \'<--INW_X103_SETT_CCY_32A-->\' AND C_ACCT_WITH_ID = \'<--AC_WT_INST_ID-->\' AND c_clear_valid =\'T\' ');
            SYS_InqCUBK_byCondition('CPYT_DR_AC_INQ', '1');
        } else {
            alert("Bank is empty"); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Clk_DB_Acct_No_Lookup", e);
    }
}

csFuncLevelProto.SYF_PYMT_Clr_MT195_MT196Tab = function() {
    try {
        SYM_PYMT_disableField(document.MAINFORM.Query_Ans_Button);
        SYM_PYMT_disableField(document.MAINFORM.NarrButton_95);
        SYM_PYMT_disableField(document.MAINFORM.XN99_NARRATIVE_79_Button);
        SYT_DisableDiv("M_div|CORR_MSG");
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Clr_MT195_MT196Tab", e);
    }
}

csFuncLevelProto.SYF_PYMT_Decide_191_190 = function(ChgCodeOur) {
    try {
        var RecChg71G_ActiveAmt; // Utility Auto Fix Comments
        var RecChg71G_Bank; // Utility Auto Fix Comments
        var RecChg71G_PayAmt; // Utility Auto Fix Comments
        var RecChg71G_SetAmt; // Utility Auto Fix Comments
        var RecChg_71GObj; // Utility Auto Fix Comments
        var inc32A; // Utility Auto Fix Comments
        var inc32ACcy; // Utility Auto Fix Comments
        var inc33B; // Utility Auto Fix Comments
        var inc33BCcy; // Utility Auto Fix Comments
        var inc71GCcy; // Utility Auto Fix Comments
        var inc71GChg; // Utility Auto Fix Comments
        RecChg_71GObj = Chg.Screen.getTrxChargeByCommCode(ChgCodeOur);
        RecChg71G_Bank = RecChg_71GObj.getBalAmt();
        RecChg71G_SetAmt = RecChg_71GObj.getRuleAmt();
        RecChg71G_ActiveAmt = RecChg_71GObj.getActiveAmt();
        inc32ACcy = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
        inc33BCcy = document.MAINFORM.INW_X103_INSTR_CCY_33B.value;
        inc32A = SYS_BeFloat(document.MAINFORM.INW_X103_SETT_AMT_32A.value);
        inc33B = SYS_BeFloat(document.MAINFORM.INW_X103_INSTR_AMT_33B.value);
        inc71GChg = SYS_BeFloat(document.MAINFORM.INW_X103_RECCHGAMT_71G.value);
        inc71GCcy = document.MAINFORM.INW_X103_RECCHGCCY_71G.value;
        if (inc71GChg > 0) {
            if (inc32ACcy != SYS_LOCAL_CCY) {
                if (inc71GCcy == inc32ACcy) {
                    document.MAINFORM.DET_RECCHRGS_AMT.value = inc71GChg;
                    document.MAINFORM.MT191SENT_NO.value = "0";
                } else {
                    alert('The currency code in the fields 71G and 32A must be the same');
                    document.MAINFORM.DET_RECCHRGS_AMT.value = SYT_AmtFormat(inc32ACcy, 0);
                    if (RecChg71G_ActiveAmt > 0) {
                        document.MAINFORM.MT191SENT_NO.value = "1";
                    } else {
                        document.MAINFORM.MT191SENT_NO.value = "0";
                    }
                }
            } else {
                if (inc71GCcy == inc32ACcy) {
                    document.MAINFORM.DET_RECCHRGS_AMT.value = inc71GChg;
                    document.MAINFORM.MT191SENT_NO.value = "0";
                } else {
                    alert('The currency code in the fields 71G and 32A must be the same');
                    document.MAINFORM.DET_RECCHRGS_AMT.value = SYT_AmtFormat(inc32ACcy, 0);
                    if (RecChg71G_ActiveAmt > 0) {
                        document.MAINFORM.MT191SENT_NO.value = "1";
                    } else {
                        document.MAINFORM.MT191SENT_NO.value = "0";
                    }
                }
                if (RecChg71G_ActiveAmt > 0) {
                    if (document.MAINFORM.BANK_CHRG_ACCT.value != "") {
                        EEHtml.getElementById("L").style.display = "block";
                        EEHtml.getElementById("MT190_Break").style.display = "block";
                        document.MAINFORM.MT190_Flag.value = "Yes";
                        SYF_PYMT_Chg_MT190_Flag();
                        document.MAINFORM.XN90_CCY_32A.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
                        SYT_ChangeFldClass(document.MAINFORM.XN90_CCY_32A, "P");
                        document.MAINFORM.XN90_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.XN90_CCY_32A.value, RecChg_71GObj.getPayAmt()); //					
                        document.MAINFORM.XN90_ACCT_IDENT_25.value = document.MAINFORM.BANK_CHRG_ACCT.value;
                    } else {
                        document.MAINFORM.MT191SENT_NO.value = "1";
                    }
                }
            }
        } else {
            document.MAINFORM.DET_RECCHRGS_AMT.value = SYT_AmtFormat(inc32ACcy, 0);
            if (RecChg71G_ActiveAmt > 0) {
                document.MAINFORM.MT191SENT_NO.value = "1";
            } else {
                document.MAINFORM.MT191SENT_NO.value = "0";
            }
        }
        if (inc32ACcy == SYS_LOCAL_CCY) {
            RecChg71G_PayAmt = RecChg_71GObj.getPayAmt(); //SATHISH JAN 11
            if (RecChg71G_ActiveAmt > 0) {
                if (RecChg71G_Bank > 0 || RecChg71G_PayAmt > 0) {
                    if (document.MAINFORM.BANK_CHRG_ACCT.value != "") {
                        EEHtml.getElementById("L").style.display = "block";
                        EEHtml.getElementById("MT190_Break").style.display = "block";
                        document.MAINFORM.MT190_Flag.value = "Yes";
                        SYF_PYMT_Chg_MT190_Flag();
                        document.MAINFORM.XN90_CCY_32A.value = inc32ACcy;
                        SYT_ChangeFldClass(document.MAINFORM.XN90_CCY_32A, "P");
                        document.MAINFORM.XN90_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.XN90_CCY_32A.value, RecChg_71GObj.getPayAmt());
                        document.MAINFORM.XN90_ACCT_IDENT_25.value = document.MAINFORM.BANK_CHRG_ACCT.value;
                    } else if (document.MAINFORM.BANK_CHRG_ACCT.value == "") {
                        if (document.MAINFORM.MT191SENT_NO.value == "1") {
                            EEHtml.getElementById('K').style.display = "block";
                            EEHtml.getElementById('MT191_Break').style.display = 'block';
                        } else {
                            EEHtml.getElementById('K').style.display = "none";
                            EEHtml.getElementById('MT191_Break').style.display = 'none';
                        }
                        document.MAINFORM.MT191_Flag.value = "Yes";
                        SYF_PYMT_Chg_MT191_Flag(); // Utility Auto Fix Comments
                        //document.MAINFORM.MT191SENT_NO.value = 1; for SA
                        document.MAINFORM.XN91_CCY_32B.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
                        SYT_ChangeFldClass(document.MAINFORM.XN91_CCY_32B, "P");
                        document.MAINFORM.XN91_AMT_32B.value = SYT_AmtFormat(document.MAINFORM.XN91_CCY_32B.value, RecChg71G_Bank);
                    }
                } else {
                    document.MAINFORM.MT190_Flag.value = "No";
                    document.MAINFORM.MT191SENT_NO.value = "0";
                    EEHtml.getElementById("L").style.display = "none";
                    EEHtml.getElementById("MT190_Break").style.display = 'none';
                    EEHtml.getElementById('K').style.display = "none";
                    EEHtml.getElementById('MT191_Break').style.display = 'none';
                }
            } else {
                if (document.MAINFORM.BANK_CHRG_ACCT.value != "") {
                    EEHtml.getElementById("L").style.display = "none";
                    EEHtml.getElementById("MT190_Break").style.display = "none";
                    document.MAINFORM.MT190_Flag.value = "No";
                    SYF_PYMT_Chg_MT190_Flag();
                } else {
                    EEHtml.getElementById('K').style.display = "none";
                    EEHtml.getElementById('MT191_Break').style.display = 'none';
                    document.MAINFORM.MT191_Flag.value = "No";
                    SYF_PYMT_Chg_MT191_Flag(); // Utility Auto Fix Comments
                }
            }
        } else if (document.MAINFORM.INW_X103_SETT_CCY_32A.value != SYS_LOCAL_CCY) {
            if (inc71GChg == 0) {
                document.MAINFORM.DET_RECCHRGS_AMT.value = SYT_AmtFormat(document.MAINFORM.INW_X103_SETT_CCY_32A.value, 0);
                if (RecChg71G_ActiveAmt > 0) {
                    EEHtml.getElementById('K').style.display = "block";
                    EEHtml.getElementById('MT191_Break').style.display = 'block';
                    document.MAINFORM.MT191_Flag.value = "Yes";
                    document.MAINFORM.MT191SENT_NO.value = "1";
                    document.MAINFORM.XN91_CCY_32B.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
                    SYT_ChangeFldClass(document.MAINFORM.XN91_CCY_32B, "P");
                    document.MAINFORM.XN91_AMT_32B.value = SYT_AmtFormat(document.MAINFORM.XN91_CCY_32B.value, RecChg71G_Bank);
                    SYF_PYMT_Chg_MT191_Flag();
                } else {
                    document.MAINFORM.MT191_Flag.value = "No";
                    document.MAINFORM.MT191SENT_NO.value = "0";
                    EEHtml.getElementById('K').style.display = "none";
                    EEHtml.getElementById('MT191_Break').style.display = 'none';
                }
            } else if (inc71GChg != 0) {
                if (RecChg71G_Bank > 0) {
                    if (document.MAINFORM.MT191SENT_NO.value == "1") {
                        EEHtml.getElementById('K').style.display = "block";
                        EEHtml.getElementById('MT191_Break').style.display = 'block';
                    } else {
                        EEHtml.getElementById('K').style.display = "none";
                        EEHtml.getElementById('MT191_Break').style.display = 'none';
                    }
                    document.MAINFORM.MT191_Flag.value = "Yes";
                    SYF_PYMT_Chg_MT191_Flag(); // Utility Auto Fix Comments
                    //document.MAINFORM.MT191SENT_NO.value = "1"; for SA
                    document.MAINFORM.XN91_CCY_32B.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
                    SYT_ChangeFldClass(document.MAINFORM.XN91_CCY_32B, "P");
                    document.MAINFORM.XN91_AMT_32B.value = SYT_AmtFormat(document.MAINFORM.XN91_CCY_32B.value, RecChg71G_Bank);
                } else {
                    if (document.MAINFORM.MT191SENT_NO.value == "1") {
                        EEHtml.getElementById('K').style.display = "block";
                        EEHtml.getElementById('MT191_Break').style.display = 'block';
                    } else {
                        EEHtml.getElementById('K').style.display = "none";
                        EEHtml.getElementById('MT191_Break').style.display = 'none';
                        document.MAINFORM.MT191_Flag.value = "No";
                        SYF_PYMT_Chg_MT191_Flag(); // Utility Auto Fix Comments
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Decide_191_190", e);
    }
}

csFuncLevelProto.SYF_PYMT_Dis_MT190 = function() {
    try {
        SYT_DisableDiv("L_div");
        document.MAINFORM.MT190_Flag.value = "No";
        EEHtml.getElementById('L').style.display = "none";
        EEHtml.getElementById('MT190_Break').style.display = 'none';
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Dis_MT190", e);
    }
}

csFuncLevelProto.SYF_PYMT_Dis_MT191 = function() {
    try {
        SYT_DisableDiv("K_div");
        document.MAINFORM.MT191_Flag.value = "No";
        EEHtml.getElementById('K').style.display = "none";
        EEHtml.getElementById('MT191_Break').style.display = 'none';
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Dis_MT191", e);
    }
}

csFuncLevelProto.SYF_PYMT_Dis_MT900 = function() {
    try {
        SYT_DisableDiv("O_div");
        EEHtml.getElementById('O').style.display = "none";
        EEHtml.getElementById('MT900_Break').style.display = 'none';
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Dis_MT900", e);
    }
}

csFuncLevelProto.SYF_PYMT_Dis_Out_MT103 = function() {
    try {
        document.MAINFORM.X103_EXCH_RT_36.value = '1';
        SYT_DisableDivClass("H_div");
        SYT_DisableDivClass("I_div");
        SYT_DisableDivClass("J_div");
        for (i = 0; i < document.MAINFORM.CHIP_FED.length; i++) {
            if (document.MAINFORM.CHIP_FED[i]) {
                document.MAINFORM.CHIP_FED[i].disabled = true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Dis_Out_MT103", e);
    }
}

csFuncLevelProto.SYF_PYMT_EC_MT103_DISTRBN = function() {
    try {
        var sDistrVal; // Utility Auto Fix Comments
        SYM_PYMT_Hide_Chgs_PaidByRow(); // Utility Auto Fix Comments
        SYF_PYMT_Set_Chgs_Desc(); // Utility Auto Fix Comments
        sDistrVal = document.MAINFORM.MT103_DISTRBN.value;
        if (sDistrVal != "") {
            if (sDistrVal == "Single Settlement") {
                SYT_disableField(document.MAINFORM.X103_B2_ADD_BTN);
                SYM_PYMT_clsdisableField(document.MAINFORM.CUST_REF);
                SYF_PYMT_Show_Sett();
                SYF_PYMT_Hide_Out_Charges(); // Utility Auto Fix Comments
                SYF_PYMT_Hide_195_196Tab(); // Utility Auto Fix Comments
                document.MAINFORM.CPYT_PAY_ADV_MSG.value = "";
                document.MAINFORM.CPYT_CR_BK_AC.value = "";
                SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BK_AC, "P");
                //SYM_PYMT_clsdisableField(document.MAINFORM.X103_DET_CHG_71A);
                SYF_PYMT_Dis_Out_MT103(); // Utility Auto Fix Comments
                document.MAINFORM.X103_SEND_NO_20.value = '';
                document.MAINFORM.CUST_REF.value = '';
                SYM_PYMT_Dis_2XX_div(); // Utility Auto Fix Comments
                SYF_PYMT_Set_CrAmt(); // Utility Auto Fix Comments
                if (document.MAINFORM.X103_BENECU_ID_59A.value == '') {
                    document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.INW_X103_BENECU_ID_59A.value;
                    document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;
                    document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;
                    document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;
                    document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;
                    document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;
                    document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;
                    document.MAINFORM.X103_BENECUACNO59A.value = document.MAINFORM.INW_X103_BENECUACNO59A.value;
                }
            } else if (sDistrVal == "Forward Funds") {
                SYM_PYMT_enableField(document.MAINFORM.X103_B2_ADD_BTN);
                SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BK_AC, "M");
                SYM_PYMT_enableField(document.MAINFORM.CUST_REF, 'O');
                SYF_PYMT_Hide_Sett(); // Utility Auto Fix Comments
                SYF_PYMT_Show_Out_Charges(); // Utility Auto Fix Comments
                SYF_PYMT_Hide_195_196Tab(); // Utility Auto Fix Comments
                SYF_PYMT_Set_CrAmt(); // Utility Auto Fix Comments
                document.MAINFORM.CPYT_PAY_ADV_MSG.value = "MT103";
                //SYF_PYMT_Set_MT103_Values();
                SYF_PYMT_Set_EC_MT103_Values();
                SYT_ChangeFldClass(document.MAINFORM.X103_DET_CHG_71A, "P");
            } else if (sDistrVal == "Return of Funds") {
                SYF_PYMT_Dis_Out_MT103(); // Utility Auto Fix Comments
                SYF_PYMT_Hide_Sett(); // Utility Auto Fix Comments
                SYF_PYMT_Hide_Out_Charges(); // Utility Auto Fix Comments
                document.MAINFORM.CPYT_CR_BK_AC.value = "";
                SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BK_AC, "P");
                document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
                SYM_PYMT_clsdisableField(document.MAINFORM.CUST_REF);
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
                SYF_PYMT_Set_CrAmt(); // Utility Auto Fix Comments
                document.MAINFORM.CPYT_PAY_COV_MSG.value = "MT202";
                SYF_PYMT_Set_MT202Values();
                SYF_PYMT_Show_195_196Tab(); // Utility Auto Fix Comments
                SYF_PYMT_Chg_CORR_MSG(); // Utility Auto Fix Comments
                if (document.MAINFORM.MT191_Flag.value == 'Yes') {
                    document.MAINFORM.MT191_Flag.value = 'No'; // Utility Auto Fix Comments
                    SYF_PYMT_Chg_MT191_Flag(); // Utility Auto Fix Comments
                }
                if (document.MAINFORM.MT190_Flag.value == 'Yes') {
                    document.MAINFORM.MT190_Flag.value = 'No'; // Utility Auto Fix Comments
                    SYF_PYMT_Chg_MT190_Flag();
                }
                SYT_Audit_Update_Charges(); //added for audit
            }
        } else {
            SYT_disableField(document.MAINFORM.X103_B2_ADD_BTN);
            document.MAINFORM.CPYT_PAY_ADV_MSG.value = "";
            document.MAINFORM.CPYT_CR_BK_AC.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BK_AC, "P");
            SYF_PYMT_Dis_Out_MT103(); // Utility Auto Fix Comments
            SYF_PYMT_Hide_Sett(); // Utility Auto Fix Comments
            SYF_PYMT_Hide_Out_Charges(); // Utility Auto Fix Comments
            SYF_PYMT_Hide_195_196Tab(); // Utility Auto Fix Comments
            document.MAINFORM.X103_DET_CHG_71A.value = document.MAINFORM.INW_X103_DET_CHG_71A.value; //ADDED BY RAVI ON 17 JULY for ITT BRS 12 CHANGE DOCUMENT
            document.MAINFORM.X103_SEND_NO_20.value = '';
            document.MAINFORM.CUST_REF.value = '';
            SYF_PYMT_Set_CrAmt(); // Utility Auto Fix Comments
        }
        if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
            if (document.MAINFORM.MT191_Flag.value == 'Yes') {
                EEHtml.getElementById('K').style.display = "block";
                EEHtml.getElementById('MT191_Break').style.display = 'block';
                SYT_EnableDivClass("K_div");
                SYT_ChangeFldClass(document.MAINFORM.MT191_Flag, "P");
                document.MAINFORM.XN91_CCY_32B.className = "CHAR_P";
                document.MAINFORM.XN91_AMT_32B.className = "AMT_P";
                SYT_ChangeFldClass(document.MAINFORM.XN91_DET_CHG1_71B, "M");
            } else {
                EEHtml.getElementById('K_div').style.display = "none";
                EEHtml.getElementById('MT191_Break').style.display = 'none';
            }
            if (document.MAINFORM.MT190_Flag.value == 'Yes') {
                EEHtml.getElementById('L').style.display = "block";
                EEHtml.getElementById('MT190_Break').style.display = 'block';
                SYT_EnableDivClass("L_div");
                SYT_ChangeFldClass(document.MAINFORM.MT190_Flag, "P");
                document.MAINFORM.XN90_CCY_32A.className = "CHAR_P";
                document.MAINFORM.XN90_AMT_32A.className = "AMT_P";
                SYT_ChangeFldClass(document.MAINFORM.XN90_DET_CHG1_71B, "M");
            } else {
                EEHtml.getElementById('L_div').style.display = "none";
                EEHtml.getElementById('MT190_Break').style.display = 'none';
            }
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "O");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_EC_MT103_DISTRBN", e);
    }
}

csFuncLevelProto.SYF_PYMT_Enb_MT190 = function() {
    try {
        SYT_EnableDivClass("L_div");
        SYT_ChangeFldClass(document.MAINFORM.MT190_Flag, "P");
        document.MAINFORM.XN90_CCY_32A.className = "CHAR_P";
        document.MAINFORM.XN90_AMT_32A.className = "AMT_P";
        SYT_ChangeFldClass(document.MAINFORM.XN90_DET_CHG1_71B, "M");
        document.MAINFORM.XN90_ORD_BKSW_52A.value = document.MAINFORM.INW_SNDBK_SW.value;
        EEHtml.fireEvent(document.MAINFORM.XN90_ORD_BKSW_52A, 'onChange');
        //document.MAINFORM.XN90_ORD_BKID_52A.value = document.MAINFORM.INW_SNDBK_ID.value;
        document.MAINFORM.XN90_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.XN90_RELATEDNO_21.value = document.MAINFORM.INW_X103_SEND_NO_20.value;
        document.MAINFORM.XN90_VALUE_DT_32A.value = SYS_BUSI_DATE;
        SYT_ChangeFldClass(document.MAINFORM.XN90_DET_CHG1_71B, "M");
        SYT_ChangeFldClass(document.MAINFORM.XN90_DET_CHG2_71B, "O");
        SYT_ChangeFldClass(document.MAINFORM.XN90_DET_CHG3_71B, "O");
        SYT_ChangeFldClass(document.MAINFORM.XN90_DET_CHG4_71B, "O");
        SYT_ChangeFldClass(document.MAINFORM.XN90_DET_CHG5_71B, "O");
        SYT_ChangeFldClass(document.MAINFORM.XN90_DET_CHG6_71B, "O");
        document.MAINFORM.XN90_DET_CHG1_71B.value = "/COMM/";
        document.MAINFORM.XN90_DET_CHG2_71B.value = "/PAYMENT " + document.MAINFORM.INW_X103_SEND_NO_20.value; // /YOUR PAYMENT
        document.MAINFORM.XN90_DET_CHG3_71B.value = "/DATED " + document.MAINFORM.INW_X103_VALUE_DT_32A.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Enb_MT190", e);
    }
}

csFuncLevelProto.SYF_PYMT_Enb_MT191 = function() {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sStDate; // Utility Auto Fix Comments
        SYT_EnableDivClass("K_div");
        SYT_ChangeFldClass(document.MAINFORM.MT191_Flag, "P");
        document.MAINFORM.XN91_CCY_32B.className = "CHAR_P";
        document.MAINFORM.XN91_AMT_32B.className = "AMT_P";
        SYT_ChangeFldClass(document.MAINFORM.XN91_DET_CHG1_71B, "M");
        document.MAINFORM.C_MAIN_REF_FRE.value = 'CG' + document.MAINFORM.C_MAIN_REF.value.substring(2, 16);
        document.MAINFORM.XN91_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.XN91_RELATEDNO_21.value = document.MAINFORM.INW_X103_SEND_NO_20.value;
        //document.MAINFORM.MT191SENT_NO.value = "1";//sathish dec 03
        sCntyCode = SYS_BANK_COUNTRY;
        sStDate = SYS_BUSI_DATE;
        SYS_CalEndWorkingDate_S(sCntyCode, sStDate, '14', 'NXT_TRCR_DT', 'A', 'y', 'y');
        SYT_GetDateObjectFromStr(document.MAINFORM.NXT_TRCR_DT.value);
        if (document.MAINFORM.INW_X103_SETT_CCY_32A.value == SYS_LOCAL_CCY) {
            SYS_GetCUBK('MT191_VOSTRO', 'SYS_BUSI_UNIT', 'SYF_PYMT_Get_MT191_BankRef', '', 'TRUE');
        } else if (document.MAINFORM.INW_X103_SETT_CCY_32A.value != SYS_LOCAL_CCY) {
            document.MAINFORM.XN91_ACC_BKSW_57A.value = '';
            if (document.MAINFORM.BANK_CHRG_ACCT.value != '') {
                document.MAINFORM.XN91_ACC_BKID_57A.value = document.MAINFORM.INW_SNDBK_ID.value;
                SYF_PYMT_Get_191CorrDetails(); // Utility Auto Fix Comments
            } else {
                //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_DEF=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'NOSTRO'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.INW_X103_SETT_CCY_32A.value + "'";
                //Field_List = "C_ACCT_WITH_ID";
                //Mapping_List = "XN91_ACC_BKID_57A";
                SYS_GetTableDataByRule('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Enb_MT191_4', '1', 'SYF_PYMT_Get_191CorrDetails()', 'SYF_PYMT_Get_191CorrDetails()', true);
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Enb_MT191", e);
    }
}

csFuncLevelProto.SYF_PYMT_Enb_MT900 = function() {
    try {
        SYT_EnableDivClass("O_div");
        EEHtml.getElementById('O').style.display = "";
        EEHtml.getElementById('MT900_Break').style.display = 'block';
        document.MAINFORM.RELATED_REF_NO.value = document.MAINFORM.INW_X103_SEND_NO_20.value;
        document.MAINFORM.LC_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
        document.MAINFORM.LC_AMT.value = document.MAINFORM.INW_X103_SETT_AMT_32A.value;
        document.MAINFORM.VALUE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.ASSET_ACNO.value = document.MAINFORM.CPYT_DR_AC.value;
        document.MAINFORM.X203_52A_IDENTIFIER.value = document.MAINFORM.INW_SNDBK_SW.value;
        document.MAINFORM.X203_52D_PARTY_ADD1.value = document.MAINFORM.INW_SNDBK_ADD1.value;
        document.MAINFORM.X203_52D_PARTY_ADD2.value = document.MAINFORM.INW_SNDBK_ADD2.value;
        document.MAINFORM.X203_52D_PARTY_ADD3.value = document.MAINFORM.INW_SNDBK_ADD3.value;
        document.MAINFORM.X203_52D_PARTY_NAME.value = document.MAINFORM.INW_SNDBK_NM.value;
        document.MAINFORM.X203_52_PARTY_ID.value = document.MAINFORM.INW_SNDBK_ID.value;

        SYT_ChangeFldClass(document.MAINFORM.RELATED_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.LC_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.LC_AMT, 'P');
        SYM_PYMT_REF_20();
        /*
            var nLc_no; // Utility Auto Fix Comments
            var nSeq; // Utility Auto Fix Comments
            ref = document.MAINFORM.C_MAIN_REF.value;
            nLc_no = ref.substr(0, 6);
            nSeq = ref.substr(6, 10);
            document.MAINFORM.RELATED_REF.value = nLc_no + nSeq;
    */
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Enb_MT900", e);
    }
}

csFuncLevelProto.SYF_PYMT_Enb_Out_MT103 = function() {
    try {
        SYT_EnableDivClass("H_div");
        SYT_EnableDivClass("I_div");
        SYT_EnableDivClass("J_div");
        SYF_PYMT_Set_Out_103_Inst();
        SYM_PYMT_enableField(document.MAINFORM.X103_ADV_BKSW_B2, 'M');
        for (i = 0; i < document.MAINFORM.CHIP_FED.length; i++) {
            if (document.MAINFORM.CHIP_FED[i]) {
                document.MAINFORM.CHIP_FED[i].disabled = false;
            }
            document.MAINFORM.CHIP_FED[0].checked = true;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Enb_Out_MT103", e);
    }
}

csFuncLevelProto.SYF_PYMT_Fail_CutOff = function() {
    try {
        alert('CutOff Time is not loaded for the Selected Currency');
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Fail_CutOff", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_191CorrDetails = function() {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        if (document.MAINFORM.XN91_ACC_BKID_57A.value.trim() == '') {
            //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALId=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'NOSTRO'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.INW_X103_SETT_CCY_32A.value + "'";
            //Field_List = "C_ACCT_WITH_ID";
            //Mapping_List = "XN91_ACC_BKID_57A";
            SYS_GetTableDataByRule('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Get_191CorrDetails_8', '1', '', '', true);
        }
        if (document.MAINFORM.INW_X103_SETT_CCY_32A.value == SYS_LOCAL_CCY) {
            document.MAINFORM.XN91_ACC_BKID_57A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
            document.MAINFORM.AVAL_WT_BK_ID.value = "";
        }
        SYM_PYMT_Chg_XN91_ACC_BKID_57A();
        document.MAINFORM.XN91_DET_CHG1_71B.value = "/COMM/";
        document.MAINFORM.XN91_DET_CHG2_71B.value = "/PAYMENT " + document.MAINFORM.INW_X103_SEND_NO_20.value; // /YOUR PAYMENT
        document.MAINFORM.XN91_DET_CHG3_71B.value = "/DATED " + document.MAINFORM.INW_X103_VALUE_DT_32A.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Get_191CorrDetails", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_CPYT_DR_AC = function() {
    try {
        var bSNDBK_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //bSNDBK_ID = document.MAINFORM.INW_SNDBK_ID.value;

        //sSQLWhere = "C_ACCT_WITH_ID = '" + bSNDBK_ID + "'";
        //sTableName = "STD_CLEARING";
        //sFieldList = "C_ACCT_NR;C_CLEAR_TYPE";
        //sMappingList = "CPYT_DR_AC;VOSTRO_NOSTRO_FLAG";
        SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Get_CPYT_DR_AC_15', '1', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Get_CPYT_DR_AC", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_MT191_BankRef = function() {
    try {
        document.MAINFORM.AVAL_WT_BK_ID.value = '';
        SYT_getIdFromBIC(document.MAINFORM.XN91_ACC_BKSW_57A, document.MAINFORM.AVAL_WT_BK_ID);
        document.MAINFORM.XN91_ACC_BKID_57A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
        SYF_PYMT_Get_191CorrDetails();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Get_MT191_BankRef", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_Resident_Status = function() {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        //Sql_Cond = "C_MAIN_REF=" + "'" + document.MAINFORM.X103_BENECU_ID_59A.value + "'" + " AND " + "CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'";
        //Field_List = "RES_STATUS";
        //Mapping_List = "RES_STATUS";
        SYS_GetTableDataByRule('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Get_Resident_Status_7', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Get_Resident_Status", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_Valid_IncAcct = function() {
    try {
        var NumArr; // Utility Auto Fix Comments
        var RecvAcctNum; // Utility Auto Fix Comments
        var chkAcctNum; // Utility Auto Fix Comments
        RecvAcctNum = document.MAINFORM.INW_X103_BENECUACNO59A.value;
        chkAcctNum = ''; // Utility Auto Fix Comments
        if (RecvAcctNum != '') {
            NumArr = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
            for (i = 0; i < RecvAcctNum.length; i++) {
                for (j = 0; j < NumArr.length; j++) {
                    if (RecvAcctNum.charAt(i) == NumArr[j]) {
                        chkAcctNum = chkAcctNum + RecvAcctNum.charAt(i);
                    }
                }
            }
        }
        return chkAcctNum;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Get_Valid_IncAcct", e);
    }
}

csFuncLevelProto.SYF_PYMT_HidePayTabs = function() {
    try {
        EEHtml.getElementById("PayInstBreak").style.display = "none";
        EEHtml.getElementById("PaySettleBreak").style.display = "none";
        EEHtml.getElementById("PayDetailsBreak").style.display = "none";

        EEHtml.getElementById("H").style.display = "none";
        EEHtml.getElementById("I").style.display = "none";
        EEHtml.getElementById("J").style.display = "none";
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_HidePayTabs", e);
    }
}

csFuncLevelProto.SYF_PYMT_Hide_195_196Tab = function() {
    try {
        //EEHtml.getElementById("M_div").style.display = "none";	
        EEHtml.getElementById("M").style.display = "none";
        EEHtml.getElementById("MT195_Break").style.display = "none";
        SYT_DisableDiv("M_div");
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Hide_195_196Tab", e);
    }
}

csFuncLevelProto.SYF_PYMT_Hide_Out_Charges = function() {
    try {
        EEHtml.getElementById("OUTCHGS_ROW1").style.display = "none";
        EEHtml.getElementById("OUTCHGS_ROW2").style.display = "none";
        //SYM_PYMT_clsdisableField(document.MAINFORM.X103_DET_CHG_71A);
        //SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGCCY71F);
        //SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGAMT71F);
        //SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGCCY_71G);
        //SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGAMT_71G);
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Hide_Out_Charges", e);
    }
}

csFuncLevelProto.SYF_PYMT_Hide_Sett = function() {
    try {
        //EEHtml.getElementById("G_div").style.display = "none";	
        EEHtml.getElementById("G").style.display = "none";
        EEHtml.getElementById("Sett_Break").style.display = "none";
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Hide_Sett", e);
    }
}

csFuncLevelProto.SYF_PYMT_ITT_MUP_TIS_AccountChargesRules = function() {
    try {
        //Mauritius and Tanzania payments

        if (SYF_PYMT_LocalMUP() || SYF_PYMT_LocalTIS()) {
            SYM_PYMT_Shw_Loc_Pymt_Chrgs(document.MAINFORM.MT103_DISTRBN, document.MAINFORM.INW_X103_DET_CHG_71A);
            SYF_PYMT_ITT_MUP_TIS_AccountDefault();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_ITT_MUP_TIS_AccountChargesRules", e);
    }
}

csFuncLevelProto.SYF_PYMT_ITT_MUP_TIS_AccountDefault = function() {
    try {
        var Field_List1; // Utility Auto Fix Comments
        var Field_List2; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List3; // Utility Auto Fix Comments
        var Mapping_List4; // Utility Auto Fix Comments
        var Mapping_List5; // Utility Auto Fix Comments
        var Mapping_List6; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var Sql_Cond2; // Utility Auto Fix Comments
        Mapping_List = "";

        switch (SYS_BANK_COUNTRY) {
            case "MU":
                ////Sql_Cond1 = "BIC_CODE = 'BOMMMUPLXXX' AND c_cnty_code = 'MU' AND c_acct_ccy = 'MUR'";
                ////Field_List1 = "C_ACCT_NR";
                if (document.MAINFORM.MT103_DISTRBN.value == 'Single Settlement') {
                    //Mapping_List3 = "CPYT_DR_AC";
                    document.MAINFORM.CPYT_CR_BK_AC.value = "";
                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_ITT_MUP_TIS_AccountDefault_11', '1', true);
                } else if (document.MAINFORM.MT103_DISTRBN.value == 'Forward Funds') {
                    //Mapping_List4 = "CPYT_CR_BK_AC";
                    //document.MAINFORM.CPYT_DR_AC.value = "";
                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_ITT_MUP_TIS_AccountDefault_12', '1', true);
                }


                break;
            case "TZ":
                ////Sql_Cond2 = "BIC_CODE = 'TANZTZTZXXX' AND c_cnty_code = 'TZ' AND c_acct_ccy = 'TZS'";
                ////Field_List2 = "C_ACCT_NR";

                if (document.MAINFORM.MT103_DISTRBN.value == 'Single Settlement') {
                    //Mapping_List5 = "CPYT_DR_AC";
                    document.MAINFORM.CPYT_CR_BK_AC.value = "";
                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_ITT_MUP_TIS_AccountDefault_13', '1', true);
                } else if (document.MAINFORM.MT103_DISTRBN.value == 'Forward Funds') {
                    //Mapping_List6 = "CPYT_CR_BK_AC";
                    //document.MAINFORM.CPYT_DR_AC.value = "";
                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_ITT_MUP_TIS_AccountDefault_14', '1', true);
                }


                break;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_ITT_MUP_TIS_AccountDefault", e);
    }
}

csFuncLevelProto.SYF_PYMT_Init_EC = function() {
    try {
        SYF_PYMT_Set_Init_Values();
        if (document.MAINFORM.X103_BENECU_ID_59A.value == "") {
            SYF_PYMT_Chg_Ben_Opt();
        } else {
            if (document.MAINFORM.ORG_BEN_CUSTID.value != "") {
                if (document.MAINFORM.X103_BENECU_ID_59A.value != document.MAINFORM.ORG_BEN_CUSTID.value) {
                    SYF_PYMT_Chg_Ben_Opt();
                } else {
                    SYF_PYMT_Chg_Ben_Prot();
                }
            } else {
                if (document.MAINFORM.INW_X103_TAG_57A.value == "A") {
                    if (document.MAINFORM.INW_X103_ACC_BKSW_57A.value != SYS_LOGIN_BIC) {
                        SYF_PYMT_Chg_Ben_Prot();
                    } else {
                        SYF_PYMT_Chg_Ben_Opt();
                    }
                } else {
                    SYF_PYMT_Chg_Ben_Opt();
                }
            }
        }
        document.MAINFORM.CHG_CNTY_BANKID.value = '';
        document.MAINFORM.CHG_CNTY_BANKID.value = SYS_BANK_COUNTRY + document.MAINFORM.X103_ADV_BKID_B2.value;
        if (SYS_BANK_COUNTRY != 'ZM') {
            Chg.Screen.mapForeignCust("CHG_CNTY_BANKID", "INW_SNDBK_NM", 'INW_X103_SETT_CCY_32A', 'CPYT_DR_AC');
        } else {
            Chg.Screen.mapForeignCust("INW_SNDBK_ID", "INW_SNDBK_NM", 'INW_X103_SETT_CCY_32A', 'CPYT_DR_AC');
        }
        if (document.MAINFORM.NXT_STATUS.value == "ITT_REPAIR") {
            Chg.Screen.mapLocalCust("INW_X103_BENECU_ID_59A", "INW_X103_BENECU_NM_59A");
        } else {
            Chg.Screen.mapLocalCust("X103_BENECU_ID_59A", "X103_BENECU_NM_59A");
        }
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.attchEvent(SYF_PYMT_Clbk_ITT_Chrgs);
        if (document.MAINFORM.SEND_TO_FLAG.value == "Send to Investigation Queue") {
            document.MAINFORM.MT103_DISTRBN.value = "";
            SYT_ChangeFldClass(document.MAINFORM.MT103_DISTRBN, "O"); // Utility Auto Fix Comments
        }

        SYF_PYMT_EC_MT103_DISTRBN();
        SYF_PYMT_Set_IncTabs();
        SYF_PYMT_Set_EC_Chgs();
        if (document.MAINFORM.X103_VALUE_DT_32A.value == '') {
            SYF_PYMT_Chk_Inc_ValDt();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Init_EC", e);
    }
}

csFuncLevelProto.SYF_PYMT_LocalMUP = function() {
    try {
        if (SYS_BANK_COUNTRY == "MU" && document.MAINFORM.CR_CCY.value == "MUR") {
            document.MAINFORM.X103_B3_SERVICE_CODE.value = document.MAINFORM.X103_B3_SERVICE_CODE_ORIGINAL.value;

            if (document.MAINFORM.MT103_DISTRBN.value == "Single Settlement") {
                if (document.MAINFORM.X103_B3_SERVICE_CODE.value == "MUP" &&
                    document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "MU" &&
                    document.MAINFORM.INW_X103_ACC_BKSW_57A.value.substr(0, 8) == "SBICMUMU") {
                    return true;
                } else {
                    SYT_DebugAlert("LocalMUP = False\r\nX103_B3_SERVICE_CODE.value=='MUP' (" + (document.MAINFORM.X103_B3_SERVICE_CODE.value == "MUP") + " '" + document.MAINFORM.X103_B3_SERVICE_CODE.value + "')\r\nINW_SNDBK_SW.value.substring(4, 6)=='MU' (" + (document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "MU") + " '" + document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) + "')\r\nINW_X103_ACC_BKSW_57A.value.substr(0, 8)=='SBICMUMU' (" + (document.MAINFORM.INW_X103_ACC_BKSW_57A.value.substr(0, 8) == "SBICMUMU") + " '" + document.MAINFORM.INW_X103_ACC_BKSW_57A.value.substr(0, 8) + "')\r\n");
                }
            } else if (document.MAINFORM.MT103_DISTRBN.value == "Forward Funds") {
                if (document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) != "MU" &&
                    document.MAINFORM.X103_ACC_BKSW_57A.value.substring(4, 6) == "MU") {
                    document.MAINFORM.X103_B3_SERVICE_CODE.value = "MUP";
                    return true;
                } else {
                    SYT_DebugAlert("LocalMUP = False\r\nINW_SNDBK_SW.value.substring(4, 6)=='MU' (" + (document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "MU") + " '" + document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) + "')\r\nX103_ACC_BKSW_57A.value.substring(4, 6)=='MU' (" + (document.MAINFORM.X103_ACC_BKSW_57A.value.substring(4, 6) == "MU") + " '" + document.MAINFORM.X103_ACC_BKSW_57A.value.substring(4, 6) + "')");
                }
            }
        }

        return false;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_LocalMUP", e);
    }
}

csFuncLevelProto.SYF_PYMT_LocalTIS = function() {
    try {
        if (SYS_BANK_COUNTRY == "TZ" && document.MAINFORM.CR_CCY.value == "TZS") {
            document.MAINFORM.X103_B3_SERVICE_CODE.value = document.MAINFORM.X103_B3_SERVICE_CODE_ORIGINAL.value;

            if (document.MAINFORM.MT103_DISTRBN.value == "Single Settlement") {
                if (document.MAINFORM.X103_B3_SERVICE_CODE.value == "TIS" &&
                    document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) == "TZ" &&
                    document.MAINFORM.INW_X103_ACC_BKSW_57A.value.substr(0, 8) == "SBICTZTX") {
                    return true;
                }
            } else if (document.MAINFORM.MT103_DISTRBN.value == "Forward Funds") {
                if (document.MAINFORM.INW_SNDBK_SW.value.substring(4, 6) != "TZ" &&
                    document.MAINFORM.X103_ACC_BKSW_57A.value.substring(4, 6) == "TZ") {
                    document.MAINFORM.X103_B3_SERVICE_CODE.value = "TIS";
                    return true;
                }
            }
        }

        return false;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_LocalTIS", e);
    }
}

csFuncLevelProto.SYF_PYMT_MPO_X9N0_25P_IDENTIFIER = function() {
    try {
        if (document.MAINFORM.TEMP_TAG25.value == 'P') {
            SYT_ChangeFldClass_New('X9N0_25P_IDENTIFIER', 'M');
            document.MAINFORM.X9N0_25P_IDENTIFIER.value = document.MAINFORM.INW_SNDBK_SW.value;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_MPO_X9N0_25P_IDENTIFIER", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_195_196Narr = function() {
    try {
        document.MAINFORM.XN99_NARRATIVE_79.value = "With Reference to your MT103 dated " +
            document.MAINFORM.INW_X103_VALUE_DT_32A.value + ",with the following details, " + '\n' +
            "20:" + document.MAINFORM.INW_X103_SEND_NO_20.value + '\n' +
            "32a:" + document.MAINFORM.INW_X103_SETT_CCY_32A.value + " " + document.MAINFORM.INW_X103_SETT_AMT_32A.value + '\n' +
            "50:" + document.MAINFORM.INW_X103_ORDCU_NM_50A.value + '\n' +
            //"59:" +document.MAINFORM.INW_X103_BENECUACNO59A.value+'\n'+
            "59:" + SYF_PYMT_Get_Valid_IncAcct() + '\n' +

            "we hereby return " + document.MAINFORM.X202_AMT_32A.value + " " +
            document.MAINFORM.X202_CCY_32A.value + " " + document.MAINFORM.X202_VALUE_DT_32A.value +
            " to the credit of account " + document.MAINFORM.X202_ACC_BKSW_57A.value + " ";
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_195_196Narr", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Acct_Name = function(sAcct) {
    try {
        var Field_List1; // Utility Auto Fix Comments
        var Field_List2; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Mapping_List2; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var Sql_Cond2; // Utility Auto Fix Comments
        accCUBK = sAcct;
        document.MAINFORM.CPYT_CR_BK_AC1.value = '';

        //Sql_Cond1 = "C_ACCT_NR='" + accCUBK + "'";
        //Field_List1 = "C_ACCT_WITH_ID";
        //Mapping_List1 = v_C_ACCT_WITH_ID;
        SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Set_Acct_Name_9', '1', true);

        //Sql_Cond2 = "C_MAIN_REF='" + v_C_ACCT_WITH_ID + "'";
        //Field_List2 = "PARTY_NM";
        //Mapping_List2 = "CPYT_CR_BK_AC1";
        SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Set_Acct_Name_10', '1', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_Acct_Name", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_ChgChanges_OUR = function(ChgCodeOur) {
    try {
        var ConvAmt; // Utility Auto Fix Comments
        var InwCcy; // Utility Auto Fix Comments
        var Paid_71GObj; // Utility Auto Fix Comments
        var RecChg71G_Bank; // Utility Auto Fix Comments
        var RecChg71G_set; // Utility Auto Fix Comments
        var RecChg_71GObj; // Utility Auto Fix Comments
        var RecdChgs; // Utility Auto Fix Comments
        var ReceivedChg71; // Utility Auto Fix Comments
        var RuleCcy; // Utility Auto Fix Comments
        var calcAmt; // Utility Auto Fix Comments
        var detChgs; // Utility Auto Fix Comments
        var diffAmt; // Utility Auto Fix Comments
        var inc32A; // Utility Auto Fix Comments
        var inc32ACcy; // Utility Auto Fix Comments
        var inc33B; // Utility Auto Fix Comments
        var inc33BCcy; // Utility Auto Fix Comments
        var inc71GCcy; // Utility Auto Fix Comments
        var inc71GChg; // Utility Auto Fix Comments
        RecChg_71GObj = Chg.Screen.getTrxChargeByCommCode(ChgCodeOur);
        if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
            ConvAmt = 0;
            if (SYS_FUNCTION_TYPE == "EC") {
                if (RecChg_71GObj.getChargeAt() == '') {
                    RecChg_71GObj.setChargeAt(0);
                }
            }
            RuleCcy = RecChg_71GObj.getRuleCcy();
            InwCcy = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
            ReceivedChg71 = SYS_BeFloat(document.MAINFORM.DET_RECCHRGS_AMT.value);
            document.MAINFORM.EXCH_RATE.value = 0;

            RecdChgs = SYS_BeFloat(document.MAINFORM.DET_RECCHRGS_AMT.value);
            detChgs = 0;
            inc32ACcy = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
            inc33BCcy = document.MAINFORM.INW_X103_INSTR_CCY_33B.value;
            inc32A = SYS_BeFloat(document.MAINFORM.INW_X103_SETT_AMT_32A.value);
            inc33B = SYS_BeFloat(document.MAINFORM.INW_X103_INSTR_AMT_33B.value);
            inc71GChg = SYS_BeFloat(document.MAINFORM.INW_X103_RECCHGAMT_71G.value);
            inc71GCcy = document.MAINFORM.INW_X103_RECCHGCCY_71G.value;
            if (inc71GChg > 0) {
                if (inc71GCcy == inc32ACcy) {
                    document.MAINFORM.DET_RECCHRGS_AMT.value = inc71GChg;
                } else {
                    alert('The currency code in the fields 71G and 32A must be the same');
                    document.MAINFORM.DET_RECCHRGS_AMT.value = SYT_AmtFormat(inc32ACcy, 0);
                }
            } else {
                document.MAINFORM.DET_RECCHRGS_AMT.value = SYT_AmtFormat(inc32ACcy, 0);
            }
            /*
    		if (inc33B != 0){
    			if (document.MAINFORM.INW_X103_SETT_CCY_32A.value== document.MAINFORM.INW_X103_INSTR_CCY_33B.value){
    				if( (inc32A-inc33B)>0){
    					detChgs = RecdChgs;
    				}else{
    					detChgs = 0;
    				}
    			}else{
    				calcAmt = SYS_BeFloat(document.MAINFORM.INW_X103_INSTR_AMT_33B.value)*SYS_BeFloat(document.MAINFORM.INW_X103_EXCH_RT_36.value);
    				diffAmt = SYS_BeFloat(document.MAINFORM.INW_X103_INSTR_AMT_33B.value)-calcAmt;
    				if (diffAmt>0){
    					detChgs = RecdChgs;
    				}else{
    					detChgs = 0;
    				}
    			}
    		}
    		*/
            if (RuleCcy != '' && RecChg_71GObj.getActiveAmt() > 0) { //dec 14
                if (InwCcy != SYS_LOCAL_CCY) {
                    if (RuleCcy != SYS_LOCAL_CCY) {
                        if (InwCcy != RuleCcy) {
                            RecChg_71GObj.setBalCcy(InwCcy);
                            document.MAINFORM.DB_CCY.value = RuleCcy;
                            document.MAINFORM.DB_CALC_AMT.value = RecChg_71GObj.getActiveAmt();
                            SYT_getExchangeRateSB(document.MAINFORM.DB_CCY, document.MAINFORM.INW_X103_SETT_CCY_32A, rate_type, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.EXCH_RATE);
                            if (document.MAINFORM.EXCH_RATE.value == '') {
                                RateExists = false;
                            }
                            if (ReceivedChg71 > 0) {
                                ConvAmt = SYS_BeFloat(document.MAINFORM.DB_AMT.value) - ReceivedChg71;
                            } else {
                                ConvAmt = SYS_BeFloat(document.MAINFORM.DB_AMT.value);
                            }
                            if (ConvAmt > 0) {
                                RecChg_71GObj.setBalAmt(ConvAmt);
                            } else {
                                RecChg_71GObj.setBalAmt(0);
                            }
                            RecChg_71GObj.setPayAmt(0);
                            RecChg_71GObj.setCollectAmt(0);
                            SYF_PYMT_Set_Chrgs_TotalAmt(); // Utility Auto Fix Comments
                        } else {
                            RecChg_71GObj.setBalCcy(InwCcy);
                            RecChg71G_Bank = RecChg_71GObj.getBalAmt();
                            RecChg71G_set = RecChg_71GObj.getActiveAmt(); //dec 14
                            if (RecChg71G_set - ReceivedChg71 > 0) {
                                RecChg_71GObj.setBalAmt(RecChg71G_set - ReceivedChg71);
                                RecChg_71GObj.setPayAmt(0);
                                RecChg_71GObj.setCollectAmt(0);
                                SYF_PYMT_Set_Chrgs_TotalAmt(); // Utility Auto Fix Comments
                            } else {
                                RecChg_71GObj.setBalAmt(0);
                                RecChg_71GObj.setPayAmt(0);
                                RecChg_71GObj.setCollectAmt(0);
                                SYF_PYMT_Set_Chrgs_TotalAmt(); // Utility Auto Fix Comments
                            }
                        }
                    } else {
                        if (InwCcy != RuleCcy) {
                            //SYS_GetExchangeRate_S(RuleCcy,InwCcy ,'TT Buying' , 'EXCH_RATE','','','','','','9');
                            document.MAINFORM.DB_CALC_AMT.value = RecChg_71GObj.getActiveAmt();
                            document.MAINFORM.DB_AMT.value = 0;
                            document.MAINFORM.DB_CCY.value = RuleCcy;
                            SYT_getExchangeRateSB(document.MAINFORM.DB_CCY, document.MAINFORM.INW_X103_SETT_CCY_32A, rate_type, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.EXCH_RATE);

                            if (document.MAINFORM.EXCH_RATE.value == '') {
                                RateExists = false;
                            }
                            RecChg_71GObj.setBalCcy(InwCcy);
                            //ConvAmt = (SYS_BeFloat( RecChg_71GObj.getActiveAmt())*SYS_BeFloat(document.MAINFORM.EXCH_RATE.value));//dec 14
                            ConvAmt = (SYS_BeFloat(document.MAINFORM.DB_AMT.value)); //dec 14
                            if (ReceivedChg71 > 0) {
                                ConvAmt = ConvAmt - ReceivedChg71;
                            }
                            if (ConvAmt > 0) {
                                RecChg_71GObj.setBalAmt(ConvAmt);
                            } else {
                                RecChg_71GObj.setBalAmt(0);
                            }
                            RecChg_71GObj.setPayAmt(0);
                            RecChg_71GObj.setCollectAmt(0);
                            SYF_PYMT_Set_Chrgs_TotalAmt(); // Utility Auto Fix Comments
                        } else {
                            RecChg71G_Bank = RecChg_71GObj.getBalAmt();
                            RecChg71G_set = RecChg_71GObj.getActiveAmt(); //dec 14
                            if (RecChg71G_set - ReceivedChg71 > 0) {
                                if (RecChg71G_set - ReceivedChg71 > 0) {
                                    RecChg_71GObj.setBalAmt(RecChg71G_set - ReceivedChg71);
                                } else {
                                    RecChg_71GObj.setBalAmt(0);
                                }
                            } else {
                                RecChg_71GObj.setBalAmt(0);
                                RecChg_71GObj.setPayAmt(0);
                                RecChg_71GObj.setCollectAmt(0);
                                SYF_PYMT_Set_Chrgs_TotalAmt(); // Utility Auto Fix Comments
                            }
                        }
                    }
                } else {
                    if (InwCcy != RuleCcy) {
                        //SYS_GetExchangeRate_S(RuleCcy,InwCcy ,'TT Buying' , 'EXCH_RATE','','','','','','9');
                        document.MAINFORM.DB_CALC_AMT.value = RecChg_71GObj.getActiveAmt();
                        document.MAINFORM.DB_AMT.value = 0;
                        document.MAINFORM.DB_CCY.value = RuleCcy;
                        SYT_getExchangeRateSB(document.MAINFORM.DB_CCY, document.MAINFORM.INW_X103_SETT_CCY_32A, rate_type, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.EXCH_RATE);
                        if (document.MAINFORM.EXCH_RATE.value == '') {
                            RateExists = false;
                        }
                        RecChg_71GObj.setBalCcy(InwCcy);
                        //ConvAmt = (SYS_BeFloat( RecChg_71GObj.getActiveAmt())*SYS_BeFloat(document.MAINFORM.EXCH_RATE.value));//dec 14
                        ConvAmt = (SYS_BeFloat(document.MAINFORM.DB_AMT.value)); //dec 14
                        if (ReceivedChg71 > 0) {
                            ConvAmt = (SYS_BeFloat(ConvAmt) - SYS_BeFloat(ReceivedChg71));
                            if (ConvAmt > 0) {
                                RecChg_71GObj.setBalAmt(ConvAmt);
                            } else {
                                RecChg_71GObj.setBalAmt(0);
                            }
                            RecChg_71GObj.setPayAmt(0);
                            RecChg_71GObj.setCollectAmt(0);
                        } else {
                            if (ConvAmt > 0) {
                                RecChg_71GObj.setBalAmt(ConvAmt);
                            } else {
                                RecChg_71GObj.setBalAmt(0);
                            }
                            RecChg_71GObj.setPayAmt(0);
                            RecChg_71GObj.setCollectAmt(0);
                        }
                    } else {
                        RecChg71G_Bank = RecChg_71GObj.getBalAmt();
                        RecChg71G_set = RecChg_71GObj.getActiveAmt(); //dec 14
                        if (SYS_BeFloat(RecChg71G_set) - SYS_BeFloat(ReceivedChg71) > 0) {
                            RecChg_71GObj.setBalAmt(SYS_BeFloat(RecChg71G_set) - SYS_BeFloat(ReceivedChg71));
                        } else {
                            RecChg_71GObj.setBalAmt(0);
                            RecChg_71GObj.setPayAmt(0);
                            RecChg_71GObj.setCollectAmt(0);
                        }
                    }
                }
                Paid_71GObj = Chg.Screen.getTrxChargeByCommCode('PAID_71G');
                if (RuleCcy != '' && RecChg_71GObj.getActiveAmt() > 0) { //dec 14
                    if (document.MAINFORM.INW_X103_SETT_CCY_32A.value == SYS_LOCAL_CCY) {
                        if (document.MAINFORM.BANK_CHRG_ACCT.value != '') {
                            RecChg_71GObj.setPayCcy(SYS_LOCAL_CCY);
                            RecChg_71GObj.setPayAmt(RecChg_71GObj.getBalAmt());
                            RecChg_71GObj.setCollectCcy(SYS_LOCAL_CCY);
                            RecChg_71GObj.setCollectAmt(RecChg_71GObj.getPayAmt());
                            RecChg_71GObj.setBalCcy(SYS_LOCAL_CCY);
                            RecChg_71GObj.setBalAmt(0.00);
                            SYF_PYMT_Set_Chrgs_TotalAmt(); // Utility Auto Fix Comments
                        }
                    }
                }
                SYF_PYMT_Set_Chrgs_TotalAmt(); // Utility Auto Fix Comments
            }
            /*
        else{
    		//RecChg_71GObj.hide();//SATHISH DEC 14
    		//Paid_71GObj.hide();
    	}
     */
            SYT_calLocalColl2PayRate(SYS_LOCAL_CCY, document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value);
        } else {
            RecChg_71GObj.hide();
            Paid_71GObj.hide();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_ChgChanges_OUR", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Chgs_Desc = function() {
    try {
        if (document.MAINFORM.INW_X103_DET_CHG_71A.value != "") {
            if (document.MAINFORM.MT103_DISTRBN.value != "Return of Funds") {
                if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
                    document.MAINFORM.OUR_CHGS.value = "All for Remitter";
                } else {
                    document.MAINFORM.OUR_CHGS.value = "All for Beneficiary";
                }
            } else {
                document.MAINFORM.OUR_CHGS.value = "All for Remitter";
            }
        } else {
            document.MAINFORM.OUR_CHGS.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_Chgs_Desc", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Chrg_CashInd = function() {
    try {
        if (document.MAINFORM.MT103_DISTRBN.value == 'Single Settlement') {
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value == 'OUR') {
                document.MAINFORM.CHG_CASH_IND.value = 'No';
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
            } else {
                if (document.MAINFORM.RECORDER_TYPE.value == 'Customer') {
                    document.MAINFORM.CHG_CASH_IND.value = 'No';
                    SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "";
                    SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
                    SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "O");
                } else if (document.MAINFORM.RECORDER_TYPE.value == 'NonCustomer') {
                    document.MAINFORM.CHG_CASH_IND.value = 'Yes';
                    SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                    SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                    SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
                }
            }
        } else if (document.MAINFORM.MT103_DISTRBN.value == 'Forward Funds') {
            document.MAINFORM.CHG_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
        } else if (document.MAINFORM.MT103_DISTRBN.value == 'Return of Funds') {
            document.MAINFORM.CHG_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
        } else if (document.MAINFORM.MT103_DISTRBN.value == '') {
            document.MAINFORM.CHG_CASH_IND.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_Chrg_CashInd", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Chrgs_TotalAmt = function() {
    try {
        var Paid_71GObj; // Utility Auto Fix Comments
        var RecChg_71GObj; // Utility Auto Fix Comments
        RecChg_71GObj = Chg.Screen.getTrxChargeByCommCode(ChgCodeOur);
        Paid_71GObj = Chg.Screen.getTrxChargeByCommCode('PAID_71G');
        //Chg.Screen.setForeignPayTotalAmt(foreignPayChgTotalAmt + foreignPayVatTotalAmt);
        if (Chg.Screen.getForeignCollectVatTotalAmt() > 0) {
            Chg.Screen.setForeignCollectTotalAmt(RecChg_71GObj.getCollectAmt() + Paid_71GObj.getCollectAmt() + Chg.Screen.getForeignCollectVatTotalAmt());
        } else {
            Chg.Screen.setForeignCollectTotalAmt(RecChg_71GObj.getCollectAmt() + Paid_71GObj.getCollectAmt());
        }
        if (Chg.Screen.getForeignPayVatTotalAmt() > 0) {
            Chg.Screen.setForeignPayTotalAmt(RecChg_71GObj.getPayAmt() + Paid_71GObj.getPayAmt() + Chg.Screen.getForeignPayVatTotalAmt());
        } else {
            Chg.Screen.setForeignPayTotalAmt(RecChg_71GObj.getPayAmt() + Paid_71GObj.getPayAmt());
        }
        Chg.Screen.setForeignPayChgTotalAmt(RecChg_71GObj.getPayAmt() + Paid_71GObj.getPayAmt());
        Chg.Screen.setForeignCollectChgTotalAmt(RecChg_71GObj.getCollectAmt() + Paid_71GObj.getCollectAmt());
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_Chrgs_TotalAmt", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_CrAmt = function() {
    try {
        var ChgCcy; // Utility Auto Fix Comments
        var IncCredAmt; // Utility Auto Fix Comments
        var IncCredCcy; // Utility Auto Fix Comments
        var RecdChgs; // Utility Auto Fix Comments
        var SendChg; // Utility Auto Fix Comments
        var SndChg; // Utility Auto Fix Comments
        var calcAmt; // Utility Auto Fix Comments
        var detChgs; // Utility Auto Fix Comments
        var diffAmt; // Utility Auto Fix Comments
        var inc32A; // Utility Auto Fix Comments
        var inc33B; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var retFdsAmt; // Utility Auto Fix Comments
        var sDistrVal; // Utility Auto Fix Comments
        document.MAINFORM.CR_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
        SYT_ChangeFldClass(document.MAINFORM.CR_CCY, "P");
        IncCredCcy = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
        IncCredAmt = SYS_BeFloat(document.MAINFORM.INW_X103_SETT_AMT_32A.value);
        ChgCcy = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        sDistrVal = document.MAINFORM.MT103_DISTRBN.value;
        rate = document.MAINFORM.EXCH_RATE.value;
        SendChg = Chg.Screen.getLocalChgCustPayTotalAmt();
        RecdChgs = SYS_BeFloat(document.MAINFORM.INW_X103_RECCHGAMT_71G.value);
        detChgs = 0;
        inc32A = SYS_BeFloat(document.MAINFORM.INW_X103_SETT_AMT_32A.value);
        inc33B = SYS_BeFloat(document.MAINFORM.INW_X103_INSTR_AMT_33B.value);
        if (RecdChgs > 0) {
            detChgs = RecdChgs;
        } else {
            detChgs = 0;
        }
        /*if (inc33B != 0){
    	if (document.MAINFORM.INW_X103_SETT_CCY_32A.value== document.MAINFORM.INW_X103_INSTR_CCY_33B.value){
    		if( (inc32A-inc33B)>0){
    			//detChgs = RecdChgs;
    			detChgs = SYS_BeFloat(inc32A-inc33B);
    		}else{
    			detChgs = 0;
    		}
    	}else{
    		calcAmt = SYS_BeFloat(document.MAINFORM.INW_X103_INSTR_AMT_33B.value)*SYS_BeFloat(document.MAINFORM.INW_X103_EXCH_RT_36.value);
    		diffAmt = SYS_BeFloat(document.MAINFORM.INW_X103_INSTR_AMT_33B.value)-calcAmt;
    		if (diffAmt>0){
    			detChgs = RecdChgs;
    		}else{
    			detChgs = 0;
    		}
    	}
    }
    */
        if (sDistrVal == "Single Settlement") {
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, IncCredAmt - detChgs);
            } else {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, IncCredAmt);
            }
        } else if (sDistrVal == "Forward Funds") {
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, IncCredAmt - detChgs);
            } else {
                //SndChg = Chg.Screen.getLocalPayTotalAmt();
                SndChg = Chg.Screen.getForeignPayTotalAmt();
                document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, IncCredAmt - SndChg);
            }
        } else if (sDistrVal == "Return of Funds") {
            retFdsAmt = Chg.Screen.getForeignPayTotalAmt();
            document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, IncCredAmt - retFdsAmt);
        } else if (sDistrVal == "") {
            //document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value,IncCredAmt);	
            document.MAINFORM.CR_AMT.value = 0;
        }


        if (SYS_BANK_COUNTRY != "NG") {
            SYF_PYMT_Set_DB_AcctNo();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_CrAmt", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_DB_AcctNo = function() {
    try {
        var DebitId; // Utility Auto Fix Comments
        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        ////DebitId = "";

        if (SYS_FUNCTION_TYPE == 'EC' && inPostConditionOnInit == 'Y') {
            return;
        }

        if (SYS_FUNCTION_TYPE != 'EC' && inPostConditionOnInit == 'Y' && SYS_BANK_COUNTRY == "NG") {
            return;
        }
        /*
        if (document.MAINFORM.INW_X103_RECCORRID_54A.value != "") {
            ////DebitId = document.MAINFORM.INW_X103_RECCORRID_54A.value;
        } else if (document.MAINFORM.INW_X103_SENDCORRID53A.value != "") {
            ////DebitId = document.MAINFORM.INW_X103_SENDCORRID53A.value;
        } else {
            ////DebitId = document.MAINFORM.INW_SNDBK_ID.value;
        }
        */
        if (document.MAINFORM.INW_X103_SETT_CCY_32A.value == SYS_LOCAL_CCY) {
            document.MAINFORM.C_CLEAR_TYPE.value = "VOSTRO";
            //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + document.MAINFORM.C_CLEAR_TYPE.value + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.INW_X103_SETT_CCY_32A.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + DebitId + "'";
            //Field_List = "C_ACCT_NR";
            //Mapping_List = "CPYT_DR_AC";
            SYS_GetTableDataByRule('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Set_DB_AcctNo_5', '1', '', '', true);
        } else if (document.MAINFORM.INW_X103_SETT_CCY_32A.value != SYS_LOCAL_CCY) {
            document.MAINFORM.C_CLEAR_TYPE.value = "NOSTRO";
            //Sql_Cond1 = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + document.MAINFORM.C_CLEAR_TYPE.value + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.INW_X103_SETT_CCY_32A.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + DebitId + "'";
            //Field_List1 = "C_ACCT_NR";
            //Mapping_List1 = "CPYT_DR_AC";
            SYS_GetTableDataByRule('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Set_DB_AcctNo_6', '1', '', '', true);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_DB_AcctNo", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_EC_Chgs = function() {
    try {
        var InwPytComm; // Utility Auto Fix Comments
        var Paid_71GObj; // Utility Auto Fix Comments
        var RecChg_71GObj; // Utility Auto Fix Comments
        var RetFdsObj; // Utility Auto Fix Comments
        var obj; // Utility Auto Fix Comments
        var sDistrVal; // Utility Auto Fix Comments
        SYT_Chgs_Without_Deferred_Terms();
        sDistrVal = document.MAINFORM.MT103_DISTRBN.value;
        if (sDistrVal == "Return of Funds") {
            RetFdsObj = Chg.Screen.getTrxChargeByCommCode('RET_FDS_FEE');
            RetFdsObj.protectChargeFor();
            RetFdsObj.protectChargeAt();
            RetFdsObj._protectCollectAmt(); // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
        } else {
            if (sDistrVal == "Forward Funds") {
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
            }
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value == 'OUR') {
                RecChg_71GObj = Chg.Screen.getTrxChargeByCommCode(ChgCodeOur);
                RecChg_71GObj.protectChargeFor();
                RecChg_71GObj._protectCollectAmt(); // Utility Auto Fix Comments
                RecChg_71GObj.setPayCcy(SYS_LOCAL_CCY);
                RecChg_71GObj.setCollectCcy(SYS_LOCAL_CCY);
                if (document.MAINFORM.MT191_Flag.value == "Yes") {
                    RecChg_71GObj.setPayAmt(0);
                    RecChg_71GObj.setCollectAmt(0);
                }
                if (Chg.Screen.getTrxChargeByCommCode('PAID_71G') != '' && Chg.Screen.getTrxChargeByCommCode('PAID_71G') != null) {
                    Paid_71GObj = Chg.Screen.getTrxChargeByCommCode('PAID_71G');
                    obj = $(Paid_71GObj._getFldId(Chg.FLD_ACTIVE_AMT)); // Utility Auto Fix Comments
                    obj.className = 'AMT_P';
                    obj.disabled = true;
                }
                SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
            } else {
                InwPytComm = Chg.Screen.getTrxChargeByCommCode(ChgCodeBS);
                InwPytComm._protectCollectAmt(); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_EC_Chgs", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_EC_MT103_Values = function() {
    try {
        document.MAINFORM.X103_EXCH_RT_36.value = '1';
        SYF_PYMT_Set_Orig_IncOrdCust();
        if (document.MAINFORM.INW_X103_TAG_57A.value == "A") {
            if (document.MAINFORM.INW_X103_ACC_BKSW_57A.value != SYS_LOGIN_BIC) {
                document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.INW_X103_BENECU_ID_59A.value;
                document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;
                document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;
                document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;
                document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;
                document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;
                document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;
                document.MAINFORM.X103_BENECUACNO59A.value = SYF_PYMT_Get_Valid_IncAcct();
                SYF_PYMT_Chg_Ben_Prot();
            } else {
                document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.INW_X103_BENECU_ID_59A.value;
                document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;
                document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;
                document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;
                document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;
                document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;
                document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;
                document.MAINFORM.X103_BENECUACNO59A.value = SYF_PYMT_Get_Valid_IncAcct();
                SYF_PYMT_Chg_Ben_Opt(); // Utility Auto Fix Comments
            }
        } else {
            document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.INW_X103_BENECU_ID_59A.value;
            document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;
            document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;
            document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;
            document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;
            document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;
            document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;
            document.MAINFORM.X103_BENECUACNO59A.value = SYF_PYMT_Get_Valid_IncAcct();
            SYF_PYMT_Chg_Ben_Opt();
        }
        SYF_PYMT_Enb_Out_MT103();
        SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_ADV_MSG, "P");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_COV_MSG, "P");
        document.MAINFORM.ROUT_PRIORITY.value = "BKE";
        if (document.MAINFORM.INW_X103_ACC_BKSW_57A.value != SYS_LOGIN_BIC) {
            if (document.MAINFORM.INW_X103_ACC_BKSW_57A.value != "") {
                if (document.MAINFORM.INW_X103_ACC_BKSW_57A.value != SYS_LOGIN_BIC) {
                    SYT_ChangeFldClass(document.MAINFORM.X103_ACC_BKID_57A, "P");
                    SYT_ChangeFldClass(document.MAINFORM.X103_57A_BTN, "P");
                    SYT_ChangeFldClass(document.MAINFORM.X103_ACC_BKNM_57A, "P");
                    SYT_ChangeFldClass(document.MAINFORM.X103_ACCBKADD1_57A, "P");
                    SYT_ChangeFldClass(document.MAINFORM.X103_ACCBKADD2_57A, "P");
                    SYT_ChangeFldClass(document.MAINFORM.X103_ACCBKADD3_57A, "P");
                    SYT_ChangeFldClass(document.MAINFORM.X103_ACC_BKACNO57A, "P");
                    SYT_ChangeFldClass(document.MAINFORM.X103_TAG_57A, "P");
                    SYT_ChangeFldClass(document.MAINFORM.X103_ACC_BKSW_57A, "P");
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_EC_MT103_Values", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Foreign_ChgAcct = function(ChgCodeOur) {
    try {
        SYF_PYMT_Set_Acct_Name(document.MAINFORM.CPYT_DR_AC.value);
        if (document.MAINFORM.INW_X103_DET_CHG_71A.value == 'OUR') {
            Chg.Screen.setTrxTempFieldVaule('PAID_71G', '1', document.MAINFORM.CPYT_DR_AC.value);
            Chg.Screen.setTrxTempFieldVaule('PAID_71G', '2', document.MAINFORM.CPYT_CR_BK_AC1.value);
            if (document.MAINFORM.BANK_CHRG_ACCT.value != '') {
                SYF_PYMT_Set_Acct_Name(document.MAINFORM.BANK_CHRG_ACCT.value);
                Chg.Screen.setTrxTempFieldVaule(ChgCodeOur, '1', document.MAINFORM.BANK_CHRG_ACCT.value);
                Chg.Screen.setTrxTempFieldVaule(ChgCodeOur, '2', document.MAINFORM.CPYT_CR_BK_AC1.value);
            }
        }
        SYF_PYMT_Set_Acct_Name(document.MAINFORM.CPYT_DR_AC.value);
        if (document.MAINFORM.MT103_DISTRBN.value == "Return of Funds") {
            Chg.Screen.setTrxTempFieldVaule('RET_FDS_FEE', '1', document.MAINFORM.CPYT_DR_AC.value);
            Chg.Screen.setTrxTempFieldVaule('RET_FDS_FEE', '2', document.MAINFORM.CPYT_CR_BK_AC1.value);
        } else {
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value != 'OUR') {
                Chg.Screen.setTrxTempFieldVaule(ChgCodeBS, '1', document.MAINFORM.CPYT_DR_AC.value);
                Chg.Screen.setTrxTempFieldVaule(ChgCodeBS, '2', document.MAINFORM.CPYT_CR_BK_AC1.value);
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_Foreign_ChgAcct", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Fwd_72_Info = function() {
    try {
        if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "BEN") {
            if (SYS_BeFloat(document.MAINFORM.INW_X103_SENDCHGAMT71F.value) > 0) {
                document.MAINFORM.X103_BK2BK_INF1_72.value = "/REC/";
                document.MAINFORM.X103_BK2BK_INF2_72.value = "//Remitter Charges:" + document.MAINFORM.INW_X103_SENDCHGCCY71F.value + ' ' + document.MAINFORM.INW_X103_SENDCHGAMT71F.value;
                document.MAINFORM.X103_BK2BK_INF3_72.value = "//Our Charges:" + document.MAINFORM.X103_SENDCHGCCY71F.value + ' ' + document.MAINFORM.X103_SENDCHGAMT71F.value;
            } else {
                document.MAINFORM.X103_BK2BK_INF2_72.value = document.MAINFORM.INW_X103_BK2BK_INF2_72.value;
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_Fwd_72_Info", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_IncTabs = function() {
    try {
        if (document.MAINFORM.MT190_Flag.value == 'No') {
            EEHtml.getElementById("L").style.display = "none";
            EEHtml.getElementById("MT190_Break").style.display = "none";
        }
        if (document.MAINFORM.MT191_Flag.value == 'No') {
            EEHtml.getElementById("K").style.display = "none";
            EEHtml.getElementById("MT191_Break").style.display = "none";
        } else {
            if (document.MAINFORM.MT191SENT_NO.value == "0") {
                EEHtml.getElementById("K").style.display = "none";
                EEHtml.getElementById("MT191_Break").style.display = "none";
            }
        }
        if (document.MAINFORM.MT103_DISTRBN.value != 'Return of Funds') {
            EEHtml.getElementById("M").style.display = "none";
            EEHtml.getElementById("M_div").style.display = "none";
            EEHtml.getElementById("MT195_Break").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_IncTabs", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Inc_50F_Name = function() {
    try {
        if (document.MAINFORM.INW_X103_TAG_50A.value == "F") {
            if (document.MAINFORM.INW_X103_ORDCU_NM_50A.value.indexOf("/") > -1) {
                document.MAINFORM.INW_X103_ORDCU_NM_50A.value = document.MAINFORM.INW_X103_ORDCU_NM_50A.value.substring(2);
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_Inc_50F_Name", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Init_Values = function() {
    try {
        var strSQLWhere; // Utility Auto Fix Comments
        SYF_PYMT_Set_Inc_50F_Name(); // Utility Auto Fix Comments
        document.MAINFORM.NOTES.value = '';
        SYT_disableField(document.MAINFORM.X103_50_BTN);
        SYT_disableField(document.MAINFORM.X103_50_ADD_BTN);
        SYT_disableField(document.MAINFORM.APP_TYPE);

        SYT_DebugAlert('B3 Before: ' + document.MAINFORM.X103_B3_SERVICE_CODE.value);
        SYS_GetDataBySSS_S('PYMT_GetB3ServiceCode_TRX', 'C_MAIN_REF', '');
        SYT_DebugAlert('B3 After: ' + document.MAINFORM.X103_B3_SERVICE_CODE.value);

        document.MAINFORM.X103_B3_SERVICE_CODE_ORIGINAL.value = document.MAINFORM.X103_B3_SERVICE_CODE.value;
        if (document.MAINFORM.NXT_STATUS.value == "ITT_REPAIR") {
            SYF_PYMT_Chk_BenAcctValid();
            if (document.MAINFORM.NXT_STATUS.value == "ITT_REPAIR") {
                //alert("Beneficiary Account Number could not be validated,Please verify and update.");
                SYF_PYMT_Chg_Ben_Opt();
            }
        } else {
            if (SYS_FUNCTION_TYPE != 'EC') {
                SYT_disableField(document.MAINFORM.X103_ID_59_BTN);
            }

            strSQLWhere = "C_MAIN_REF = '" + document.MAINFORM.X103_BENECU_ID_59A.value + "' AND PROD = 'ITT'";
            /*SYS_Get22TableData_S("PROD_SPEC_INFO", strSQLWhere, "STAN_INSTR", "STAN_INSTR", true);*/

            //SYS_GetCUBK('GetContactInfo','X103_BENECU_ID_59A','','','TRUE');
            //SYS_GetCUBK('GetContProdSpecificInfo','X103_BENECU_ID_59A','','','TRUE');
            if (document.MAINFORM.X103_BENECU_ID_59A.value.trim() == '') {
                SYF_PYMT_Chg_Ben_Opt(); // Utility Auto Fix Comments
            } else {
                SYF_PYMT_Chg_Ben_Prot(); // Utility Auto Fix Comments
            }
        }
        document.MAINFORM.X103_INSTR_AMT_33B.value = DecimalFormat(document.MAINFORM.X103_INSTR_AMT_33B.value, findDecFromCCY(document.MAINFORM.X103_INSTR_CCY_33B.value));
        document.MAINFORM.X103_SETT_AMT_32A.value = DecimalFormat(document.MAINFORM.X103_SETT_AMT_32A.value, findDecFromCCY(document.MAINFORM.X103_SETT_CCY_32A.value));
        SYM_PYMT_Chg_CPYT_PAY_COV_MSG(); // Utility Auto Fix Comments
        document.MAINFORM.SYS_BUSI_UNIT.value = SYS_BUSI_UNIT;
        SYS_GetCUBK('BU_SWIFTADD', 'SYS_BUSI_UNIT', 'SYM_PYMT_Get_Ord_Ins()', '', 'TRUE');
        SYF_PYMT_Set_Chgs_Desc(); // Utility Auto Fix Comments

        //For ITT
        if (document.MAINFORM.SEND_TO_FLAG.value != "Send to Investigation Queue") {
            document.MAINFORM.INV_STATUS.value = "";
        }
        document.MAINFORM.INW_X103_SETT_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.INW_X103_SETT_CCY_32A.value, document.MAINFORM.INW_X103_SETT_AMT_32A.value);
        EEHtml.getElementById("K").style.display = "none";
        EEHtml.getElementById("MT191_Break").style.display = "none";
        EEHtml.getElementById("L").style.display = "none";
        EEHtml.getElementById("MT190_Break").style.display = "none";
        //document.MAINFORM.INW_CUST_REF.value = document.MAINFORM.INW_X103_ORDCU_NM_50A.value.substring(0,14);
        SYF_PYMT_Set_Orig_IncOrdCust(); // Utility Auto Fix Comments
        if (document.MAINFORM.INW_X103_ACC_BKSW_57A.value != SYS_LOGIN_BIC) {
            document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;
            document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;
            document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;
            document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;
            document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;
            document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;
            //document.MAINFORM.X103_BENECUACNO59A.value = document.MAINFORM.INW_X103_BENECUACNO59A.value;
            document.MAINFORM.X103_BENECUACNO59A.value = SYF_PYMT_Get_Valid_IncAcct();

        }
        if (document.MAINFORM.INW_X103_SENDCORRSW53A.value == "") {
            document.MAINFORM.MT103_DISTRBN.remove(3);
        }
        document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.CR_AMT.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_Init_Values", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_InwPytComm_Chrgs = function(ChgCodeBS) {
    try {
        var InwPytComm; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        InwPytComm = Chg.Screen.getTrxChargeByCommCode(ChgCodeBS);
        if (document.MAINFORM.MT103_DISTRBN.value != 'Return of Funds') {
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value != "OUR") {
                InwPytComm.display();
                //if (SYS_FUNCTION_TYPE !='EC'){
                if (document.MAINFORM.X103_BENECU_ID_59A.value == "" || document.MAINFORM.X103_BENECU_ID_59A.value == null) {
                    Chg.Screen.mapLocalCust("FOR_CHG_ID", "FOR_CHG_NAME");
                    aResult = Chg.callCalcService(document.MAINFORM.INW_X103_SETT_CCY_32A.value, document.MAINFORM.INW_X103_SETT_AMT_32A.value, ChgCodeBS, 'L', document.MAINFORM.X103_BENECU_ID_59A.value, 'ZMK', 'Booking Rate');
                } else {
                    Chg.Screen.mapLocalCust("X103_BENECU_ID_59A", "X103_BENECU_NM_59A");
                    aResult = Chg.callCalcService(document.MAINFORM.INW_X103_SETT_CCY_32A.value, document.MAINFORM.INW_X103_SETT_AMT_32A.value, ChgCodeBS, 'L', document.MAINFORM.X103_BENECU_ID_59A.value, 'ZMK', 'Booking Rate'); // Utility Auto Fix Comments
                }
                Chg.Screen.setChargeValue(ChgCodeBS, aResult[1], aResult[2]);
                if (document.MAINFORM.MT103_DISTRBN.value == 'Forward Funds') {
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'F';
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
                } else if (document.MAINFORM.MT103_DISTRBN.value == 'Single Settlement') {
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = SYS_LOCAL_CCY;
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'L';
                }
                EEHtml.fireEvent(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "onchange"); // Utility Auto Fix Comments
                EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'onchange');
                // }						
                InwPytComm.protectChargeFor();
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "O");
                InwPytComm.setChargeAt(0);
            } else {
                InwPytComm.hide();
            }
        } else {
            InwPytComm.hide();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_InwPytComm_Chrgs", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_MT103_Values = function() {
    try {
        document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.CUST_REF.value = document.MAINFORM.INW_CUST_REF.value;
        document.MAINFORM.X103_EXCH_RT_36.value = '1';
        SYF_PYMT_Set_Orig_IncOrdCust();
        /*
    if(document.MAINFORM.INW_X103_TAG_52A.value == ""){
    	SYS_GetCUBK('BU_SWIFTADD','SYS_BUSI_UNIT','SYM_PYMT_Get_Ord_Ins()','','TRUE');
    }else{
    	SYF_PYMT_Set_Ord_Bk_52();
    }
    */
        if (document.MAINFORM.INW_X103_TAG_57A.value == "A") {
            if (document.MAINFORM.INW_X103_ACC_BKSW_57A.value != SYS_LOGIN_BIC) {
                document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.INW_X103_BENECU_ID_59A.value;
                document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;
                document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;
                document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;
                document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;
                document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;
                document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;
                document.MAINFORM.X103_BENECUACNO59A.value = SYF_PYMT_Get_Valid_IncAcct();
                SYF_PYMT_Chg_Ben_Prot();
            } else {
                document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.INW_X103_BENECU_ID_59A.value;
                document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;
                document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;
                document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;
                document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;
                document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;
                document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;
                document.MAINFORM.X103_BENECUACNO59A.value = SYF_PYMT_Get_Valid_IncAcct();
                SYF_PYMT_Chg_Ben_Opt(); // Utility Auto Fix Comments
            }
        } else {
            document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.INW_X103_BENECU_ID_59A.value;
            document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.INW_X103_BENECU_NM_59A.value;
            document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.INW_X103BENECUADD1_59A.value;
            document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.INW_X103BENECUADD2_59A.value;
            document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.INW_X103BENECUADD3_59A.value;
            document.MAINFORM.X103_BENECU_SW_59A.value = document.MAINFORM.INW_X103_BENECU_SW_59A.value;
            document.MAINFORM.X103_TAG_59A.value = document.MAINFORM.INW_X103_TAG_59A.value;
            document.MAINFORM.X103_BENECUACNO59A.value = SYF_PYMT_Get_Valid_IncAcct();
            SYF_PYMT_Chg_Ben_Opt();
        }
        SYF_PYMT_Enb_Out_MT103();
        if (document.MAINFORM.INW_X103_TAG_52A.value == "") {
            SYS_GetCUBK('BU_SWIFTADD', 'SYS_BUSI_UNIT', 'SYM_PYMT_Get_Ord_Ins()', '', 'TRUE');
        } else {
            SYF_PYMT_Set_Ord_Bk_52();
        }
        document.MAINFORM.CPYT_PAY_ADV_MSG.value = "MT103";
        SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_ADV_MSG, "P");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_COV_MSG, "P");
        document.MAINFORM.ROUT_PRIORITY.value = "BKE";
        if (document.MAINFORM.INW_X103_TAG_57A.value == "A") {
            if (document.MAINFORM.INW_X103_ACC_BKSW_57A.value != SYS_LOGIN_BIC) {
                if (document.MAINFORM.INW_X103_ACC_BKSW_57A.value != "") {
                    document.MAINFORM.X103_ACC_BKSW_57A.value = document.MAINFORM.INW_X103_ACC_BKSW_57A.value;
                    SYM_PYMT_Chg_X103_ACC_BKSW_57A();
                    if (document.MAINFORM.INW_X103_ACC_BKSW_57A.value != SYS_LOGIN_BIC) {
                        SYT_ChangeFldClass(document.MAINFORM.X103_ACC_BKID_57A, "P");
                        SYT_ChangeFldClass(document.MAINFORM.X103_57A_BTN, "P");
                        SYT_ChangeFldClass(document.MAINFORM.X103_ACC_BKNM_57A, "P");
                        SYT_ChangeFldClass(document.MAINFORM.X103_ACCBKADD1_57A, "P");
                        SYT_ChangeFldClass(document.MAINFORM.X103_ACCBKADD2_57A, "P");
                        SYT_ChangeFldClass(document.MAINFORM.X103_ACCBKADD3_57A, "P");
                        SYT_ChangeFldClass(document.MAINFORM.X103_ACC_BKACNO57A, "P");
                        SYT_ChangeFldClass(document.MAINFORM.X103_TAG_57A, "P");
                        SYT_ChangeFldClass(document.MAINFORM.X103_ACC_BKSW_57A, "P");
                    }
                } else if (document.MAINFORM.INW_X103_ACC_BKACNO57A.value != "") {
                    document.MAINFORM.X103_ACC_BKACNO57A.value = document.MAINFORM.INW_X103_ACC_BKACNO57A.value;
                    SYM_PYMT_Chg_X103_ACC_BKACNO57A();
                } else {
                    //document.MAINFORM.X103_ACC_BKACNO57A.value = document.MAINFORM.INW_X103_ACC_BKID_57A.value;
                    document.MAINFORM.X103_ACC_BKNM_57A.value = document.MAINFORM.INW_X103_ACC_BKNM_57A.value;
                    document.MAINFORM.X103_ACCBKADD1_57A.value = document.MAINFORM.INW_X103_ACCBKADD1_57A.value;
                    document.MAINFORM.X103_ACCBKADD2_57A.value = document.MAINFORM.INW_X103_ACCBKADD2_57A.value;
                    document.MAINFORM.X103_ACCBKADD3_57A.value = document.MAINFORM.INW_X103_ACCBKADD3_57A.value;
                    document.MAINFORM.X103_TAG_57A.value = document.MAINFORM.INW_X103_TAG_57A.value;
                }
            } else {
                SYM_PYMT_Clr_All_Banks('Clear103');
            }
        } else {
            SYM_PYMT_Clr_All_Banks('Clear103');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_MT103_Values", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_MT191 = function(ChgCodeOur) {
    try {
        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
            if (document.MAINFORM.INW_X103_SETT_CCY_32A.value == SYS_LOCAL_CCY) {
                document.MAINFORM.C_CLEAR_TYPE.value = "VOSTRO";
                //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + document.MAINFORM.C_CLEAR_TYPE.value + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.INW_X103_SETT_CCY_32A.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + document.MAINFORM.INW_SNDBK_ID.value + "'";
                //Field_List = "C_ACCT_NR";
                //Mapping_List = "BANK_CHRG_ACCT";
                SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Set_MT191_0', '1', true);
                SYF_PYMT_Decide_191_190(ChgCodeOur);
            } else if (document.MAINFORM.INW_X103_SETT_CCY_32A.value != SYS_LOCAL_CCY) {
                document.MAINFORM.C_CLEAR_TYPE.value = "NOSTRO";
                //Sql_Cond1 = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + document.MAINFORM.C_CLEAR_TYPE.value + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.INW_X103_SETT_CCY_32A.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + document.MAINFORM.INW_SNDBK_ID.value + "'";
                //Field_List1 = "C_ACCT_NR";
                //Mapping_List1 = "BANK_CHRG_ACCT";
                SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Set_MT191_1', '1', true);
                SYF_PYMT_Decide_191_190(ChgCodeOur);
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_MT191", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_MT195_MT196 = function() {
    try {
        document.MAINFORM.PAY_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.RELATED_REF.value = document.MAINFORM.C_MAIN_REF.value;
        //document.MAINFORM.RELA_REF.value = document.MAINFORM.INW_CUST_REF.value;
        document.MAINFORM.RELA_REF.value = document.MAINFORM.INW_X103_SEND_NO_20.value;
        document.MAINFORM.SEND_CORR_BK_ID.value = document.MAINFORM.INW_SNDBK_ID.value;
        document.MAINFORM.SEND_CORR_BK_NM.value = document.MAINFORM.INW_SNDBK_NM.value;
        document.MAINFORM.SEND_CORR_BK_ADD1.value = document.MAINFORM.INW_SNDBK_ADD1.value;
        document.MAINFORM.SEND_CORR_BK_ADD2.value = document.MAINFORM.INW_SNDBK_ADD2.value;
        document.MAINFORM.SEND_CORR_BK_ADD3.value = document.MAINFORM.INW_SNDBK_ADD3.value;
        document.MAINFORM.SEND_CORR_SW_ADD.value = document.MAINFORM.INW_SNDBK_SW.value;

        SYT_ChangeFldClass(document.MAINFORM.PAY_REF, 'M');
        SYT_ChangeFldClass(document.MAINFORM.RELA_REF, 'M');
        SYT_ChangeFldClass(document.MAINFORM.MT_DT_ISN, 'O');
        SYT_ChangeFldClass(document.MAINFORM.XN95_96_NARRATIVE, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X95_96_QUER_ANS, 'M');
        SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'M');
        SYM_PYMT_enableField(document.MAINFORM.Query_Ans_Button, 'O');
        SYM_PYMT_enableField(document.MAINFORM.NarrButton_95, 'O');
        SYM_PYMT_enableField(document.MAINFORM.XN99_NARRATIVE_79_Button, 'O');

        EEHtml.getElementById('XN99_NARRATIVE_79_Button').value = 'Clause';
        EEHtml.getElementById('NarrButton_95').value = 'Clause';
        EEHtml.getElementById('Query_Ans_Button').value = 'Clause';

        document.MAINFORM.MT_DT_ISN.value = "";
        SYF_PYMT_Set_195_196Narr();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_MT195_MT196", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_MT199 = function() {
    try {
        document.MAINFORM.XN99_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.XN99_RELATEDNO_21.value = document.MAINFORM.INW_X103_SEND_NO_20.value;
        document.MAINFORM.TRACKER_SW_ADD.value = 'TRCKCHZ0';
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_MT199", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_MT202Values = function() {
    try {
        document.MAINFORM.CPYT_PAY_COV_MSG.value = "MT202";
        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.X202_RELATEDNO_21.value = "NONE";
        document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.CR_CCY.value;
        document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CR_AMT.value;

        if (document.MAINFORM.INW_X103RECCORRACNO54A.value != "" || document.MAINFORM.INW_X103_RECCORRNM_54A.value != "" || document.MAINFORM.INW_X103_RECCORRSW_54A.value != "") {
            document.MAINFORM.X202_ADV_BKID_B2.value = document.MAINFORM.INW_X103_RECCORRID_54A.value;
            document.MAINFORM.X202_ADV_BKNM_B2.value = document.MAINFORM.INW_X103_RECCORRNM_54A.value;
            document.MAINFORM.X202_ADV_BKADD1_B2.value = document.MAINFORM.INW_X103_RECCORADD154A.value;
            document.MAINFORM.X202_ADV_BKADD2_B2.value = document.MAINFORM.INW_X103_RECCORADD254A.value;
            document.MAINFORM.X202_ADV_BKADD3_B2.value = document.MAINFORM.INW_X103_RECCORADD354A.value;
            document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.INW_X103_RECCORRSW_54A.value;
        } else if (document.MAINFORM.INW_X103_SENDCORRSW53A.value != "" || document.MAINFORM.INW_X103SENDCORACNO53A.value != "" || document.MAINFORM.INW_X103_SENDCORRNM53A.value != "") {
            document.MAINFORM.X202_ADV_BKID_B2.value = document.MAINFORM.INW_X103_SENDCORRID53A.value;
            document.MAINFORM.X202_ADV_BKNM_B2.value = document.MAINFORM.INW_X103_SENDCORRNM53A.value;
            document.MAINFORM.X202_ADV_BKADD1_B2.value = document.MAINFORM.INW_X103SENDCORADD153A.value;
            document.MAINFORM.X202_ADV_BKADD2_B2.value = document.MAINFORM.INW_X103SENDCORADD253A.value;
            document.MAINFORM.X202_ADV_BKADD3_B2.value = document.MAINFORM.INW_X103SENDCORADD353A.value;
            document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.INW_X103_SENDCORRSW53A.value;
        }
        document.MAINFORM.X202_ACC_BKID_57A.value = document.MAINFORM.INW_X103_SENDCORRID53A.value;
        document.MAINFORM.X202_ACC_BKNM_57A.value = document.MAINFORM.INW_X103_SENDCORRNM53A.value;
        document.MAINFORM.X202_ACCBKADD1_57A.value = document.MAINFORM.INW_X103SENDCORADD153A.value;
        document.MAINFORM.X202_ACCBKADD2_57A.value = document.MAINFORM.INW_X103SENDCORADD253A.value;
        document.MAINFORM.X202_ACCBKADD3_57A.value = document.MAINFORM.INW_X103SENDCORADD353A.value;
        document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.INW_X103_SENDCORRSW53A.value;
        document.MAINFORM.X202_TAG_57A.value = document.MAINFORM.INW_X103_SENDCORRSW53A.value;
        /*
    		if (document.MAINFORM.INW_X103SENDCORACNO53A.value.charAt(0)!= '/'){
    			document.MAINFORM.X202_ACC_BKACNO57A.value = "/"+document.MAINFORM.INW_X103SENDCORACNO53A.value;
    		}else{
    			document.MAINFORM.X202_ACC_BKACNO57A.value = document.MAINFORM.INW_X103SENDCORACNO53A.value;
    		}	
    		*/ //FIXED IN THE CORE	
        document.MAINFORM.X202_BENE_BKID_58A.value = document.MAINFORM.INW_SNDBK_ID.value;
        document.MAINFORM.X202_BENE_BKNM_58A.value = document.MAINFORM.INW_SNDBK_NM.value;
        document.MAINFORM.X202BENEBKADD1_58A.value = document.MAINFORM.INW_SNDBK_ADD1.value;
        document.MAINFORM.X202BENEBKADD2_58A.value = document.MAINFORM.INW_SNDBK_ADD2.value;
        document.MAINFORM.X202BENEBKADD3_58A.value = document.MAINFORM.INW_SNDBK_ADD3.value;
        document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.INW_SNDBK_SW.value;
        document.MAINFORM.X202_TAG_58A.value = "A";
        //document.MAINFORM.X202_BENEBKACNO58A.value = ;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_MT202Values", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_MT900 = function() {
    try {
        if (document.MAINFORM.VOSTRO_NOSTRO_FLAG.value == 'VOSTRO' && document.MAINFORM.MT103_DISTRBN.value == 'Single Settlement') {
            SYF_PYMT_Enb_MT900();
            document.MAINFORM.X203_52_TAG.value = "A";
        } else {
            SYF_PYMT_Dis_MT900();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_MT900", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Ord_Bk_52 = function() {
    try {
        if (document.MAINFORM.INW_X103_TAG_52A.value != '') {
            if (document.MAINFORM.INW_X103_TAG_52A.value == 'A' || document.MAINFORM.INW_X103_TAG_52A.value == 'D') {
                document.MAINFORM.X103_ORD_BKID_52A.value = document.MAINFORM.INW_X103_ORD_BKID_52A.value;
                document.MAINFORM.X103_ORD_BKNM_52A.value = document.MAINFORM.INW_X103_ORD_BKNM_52A.value;
                document.MAINFORM.X103_ORDBKADD1_52A.value = document.MAINFORM.INW_X103_ORDBKADD1_52A.value;
                document.MAINFORM.X103_ORDBKADD2_52A.value = document.MAINFORM.INW_X103_ORDBKADD2_52A.value;
                document.MAINFORM.X103_ORDBKADD3_52A.value = document.MAINFORM.INW_X103_ORDBKADD3_52A.value;
                document.MAINFORM.X103_ORD_BKSW_52A.value = document.MAINFORM.INW_X103_ORD_BKSW_52A.value;
                if (document.MAINFORM.INW_X103_ORDBKACNO_52A.value != '') {
                    if (document.MAINFORM.INW_X103_ORDBKACNO_52A.value.charAt(0) == '/') {
                        document.MAINFORM.X103_ORDBKACNO_52A.value = document.MAINFORM.INW_X103_ORDBKACNO_52A.value.substring(1);
                    } else {
                        document.MAINFORM.X103_ORDBKACNO_52A.value = document.MAINFORM.INW_X103_ORDBKACNO_52A.value;
                    }
                }
                document.MAINFORM.X103_TAG_52A.value = document.MAINFORM.INW_X103_TAG_52A.value;
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_Ord_Bk_52", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Orig_IncOrdCust = function() {
    try {
        if (document.MAINFORM.INW_X103_TAG_50A.value == "A") {
            document.MAINFORM.X103_ORDCU_NM_50A.value = document.MAINFORM.INW_X103_ORDCU_NM_50A.value;
            document.MAINFORM.X103_ORDCUADD1_50A.value = document.MAINFORM.INW_X103_ORDCUADD1_50A.value;
            document.MAINFORM.X103_ORDCUADD2_50A.value = document.MAINFORM.INW_X103_ORDCUADD2_50A.value;
            document.MAINFORM.X103_ORDCUADD3_50A.value = document.MAINFORM.INW_X103_ORDCUADD3_50A.value;
            document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.INW_X103_ORDCU_SW_50A.value;
            document.MAINFORM.X103_TAG_50A.value = document.MAINFORM.INW_X103_TAG_50A.value;
            document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.INW_X103_ORDCUACNO_50A.value.substring(1);
        } else if (document.MAINFORM.INW_X103_TAG_50A.value == "K") {
            document.MAINFORM.X103_ORDCU_NM_50A.value = document.MAINFORM.INW_X103_ORDCU_NM_50A.value;
            document.MAINFORM.X103_ORDCUADD1_50A.value = document.MAINFORM.INW_X103_ORDCUADD1_50A.value;
            document.MAINFORM.X103_ORDCUADD2_50A.value = document.MAINFORM.INW_X103_ORDCUADD2_50A.value;
            document.MAINFORM.X103_ORDCUADD3_50A.value = document.MAINFORM.INW_X103_ORDCUADD3_50A.value;
            document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.INW_X103_ORDCU_SW_50A.value;
            document.MAINFORM.X103_TAG_50A.value = document.MAINFORM.INW_X103_TAG_50A.value;
            document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.INW_X103_ORDCUACNO_50A.value.substring(1);
        } else if (document.MAINFORM.INW_X103_TAG_50A.value == "F") {
            document.MAINFORM.X103_ORDCU_NM_50A.value = '1/' + document.MAINFORM.INW_X103_ORDCU_NM_50A.value;
            document.MAINFORM.X103_ORDCUADD1_50A.value = document.MAINFORM.INW_X103_ORDCUADD1_50A.value;
            document.MAINFORM.X103_ORDCUADD2_50A.value = document.MAINFORM.INW_X103_ORDCUADD2_50A.value;
            document.MAINFORM.X103_ORDCUADD3_50A.value = document.MAINFORM.INW_X103_ORDCUADD3_50A.value;
            document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.INW_X103_ORDCU_SW_50A.value;
            document.MAINFORM.X103_TAG_50A.value = document.MAINFORM.INW_X103_TAG_50A.value;
            document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.INW_X103_ORDCUACNO_50A.value;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_Orig_IncOrdCust", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Out_103_Inst = function() {
    try {
        document.MAINFORM.X103_BKOP_CODE_23B.value = document.MAINFORM.INW_X103_BKOP_CODE_23B.value; //23B

        document.MAINFORM.X103_INSTRCODE1_23E.value = document.MAINFORM.INW_X103_INSTRCODE1_23E.value; //23E
        document.MAINFORM.X103_INSTRCODE2_23E.value = document.MAINFORM.INW_X103_INSTRCODE2_23E.value;

        //26T

        document.MAINFORM.X103_REMIT_INF1_70.value = document.MAINFORM.INW_X103_REMIT_INF1_70.value; //70
        document.MAINFORM.X103_REMIT_INF2_70.value = document.MAINFORM.INW_X103_REMIT_INF2_70.value;
        document.MAINFORM.X103_REMIT_INF3_70.value = document.MAINFORM.INW_X103_REMIT_INF3_70.value;
        document.MAINFORM.X103_REMIT_INF4_70.value = document.MAINFORM.INW_X103_REMIT_INF4_70.value;

        document.MAINFORM.X103_BK2BK_INF1_72.value = document.MAINFORM.INW_X103_BK2BK_INF1_72.value; //72
        document.MAINFORM.X103_BK2BK_INF2_72.value = document.MAINFORM.INW_X103_BK2BK_INF2_72.value;
        document.MAINFORM.X103_BK2BK_INF3_72.value = document.MAINFORM.INW_X103_BK2BK_INF3_72.value;
        document.MAINFORM.X103_BK2BK_INF4_72.value = document.MAINFORM.INW_X103_BK2BK_INF4_72.value;
        document.MAINFORM.X103_BK2BK_INF5_72.value = document.MAINFORM.INW_X103_BK2BK_INF5_72.value;
        document.MAINFORM.X103_BK2BK_INF6_72.value = document.MAINFORM.INW_X103_BK2BK_INF6_72.value;

        document.MAINFORM.X103_REG_REP1_77B.value = document.MAINFORM.INW_X103_REG_REP1_77B.value; //77B
        document.MAINFORM.X103_REG_REP2_77B.value = document.MAINFORM.INW_X103_REG_REP2_77B.value;
        document.MAINFORM.X103_REG_REP3_77B.value = document.MAINFORM.INW_X103_REG_REP3_77B.value;

        document.MAINFORM.X103_ENV_CONT_77T.value = document.MAINFORM.INW_X103_ENV_CONT_77T.value; //77T

        SYT_ChangeFldClass(document.MAINFORM.X103_REMIT_INF1_70, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_REMIT_INF2_70, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_REMIT_INF3_70, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_REMIT_INF4_70, "P");

        SYT_ChangeFldClass(document.MAINFORM.X103_REG_REP1_77B, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_REG_REP2_77B, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_REG_REP3_77B, "P");

        SYT_ChangeFldClass(document.MAINFORM.X103_ENV_CONT_77T, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_TRX_TYPCD_26T, "P");

        if (document.MAINFORM.INW_X103_INSTRCODE1_23E.value == '') {
            document.MAINFORM.X103_INSTRCODE1_23E.value = "SDVA";
        }
        SYT_ChangeFldClass(document.MAINFORM.X103_BKOP_CODE_23B, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_INSTRCODE1_23E, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_INSTRCODE2_23E, "P");
        SYF_PYMT_Set_Fwd_72_Info();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_Out_103_Inst", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_RecChgs = function(ChgCodeOur) {
    try {
        var ConvAmt; // Utility Auto Fix Comments
        var Field_List; // Utility Auto Fix Comments
        var Field_List1; // Utility Auto Fix Comments
        var InwCcy; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Mapping_List1; // Utility Auto Fix Comments
        var Paid_71GObj; // Utility Auto Fix Comments
        var RecChg71G_Bank; // Utility Auto Fix Comments
        var RecChg71G_set; // Utility Auto Fix Comments
        var RecChg_71GObj; // Utility Auto Fix Comments
        var ReceivedChg71; // Utility Auto Fix Comments
        var RuleCcy; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var Sql_Cond1; // Utility Auto Fix Comments
        var inc32A; // Utility Auto Fix Comments
        var inc32ACcy; // Utility Auto Fix Comments
        var inc33B; // Utility Auto Fix Comments
        var inc33BCcy; // Utility Auto Fix Comments
        var inc71GCcy; // Utility Auto Fix Comments
        var inc71GChg; // Utility Auto Fix Comments
        RecChg_71GObj = Chg.Screen.getTrxChargeByCommCode(ChgCodeOur);
        Paid_71GObj = Chg.Screen.getTrxChargeByCommCode('PAID_71G');
        if (document.MAINFORM.MT103_DISTRBN.value != 'Return of Funds') {
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "OUR") {
                document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value; //ssk feb 26
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "O"); //ssk feb 26
                inc32ACcy = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
                inc33BCcy = document.MAINFORM.INW_X103_INSTR_CCY_33B.value;
                inc32A = SYS_BeFloat(document.MAINFORM.INW_X103_SETT_AMT_32A.value);
                inc33B = SYS_BeFloat(document.MAINFORM.INW_X103_INSTR_AMT_33B.value);
                inc71GChg = SYS_BeFloat(document.MAINFORM.INW_X103_RECCHGAMT_71G.value);
                inc71GCcy = document.MAINFORM.INW_X103_RECCHGCCY_71G.value;

                if (inc71GChg > 0) {
                    if (inc71GCcy == inc32ACcy) {
                        document.MAINFORM.DET_RECCHRGS_AMT.value = inc71GChg;
                    } else {
                        alert('The currency code in the fields 71G and 32A must be the same');
                        document.MAINFORM.DET_RECCHRGS_AMT.value = SYT_AmtFormat(inc32ACcy, 0);
                    }
                } else {
                    document.MAINFORM.DET_RECCHRGS_AMT.value = SYT_AmtFormat(inc32ACcy, 0);
                }
                if (inc32ACcy == SYS_LOCAL_CCY) {
                    document.MAINFORM.C_CLEAR_TYPE.value = "VOSTRO";
                    //Sql_Cond = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + document.MAINFORM.C_CLEAR_TYPE.value + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.INW_X103_SETT_CCY_32A.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + document.MAINFORM.INW_SNDBK_ID.value + "'";
                    //Field_List = "C_ACCT_NR";
                    //Mapping_List = "BANK_CHRG_ACCT";
                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Set_RecChgs_2', '1', true);
                } else if (inc32ACcy != SYS_LOCAL_CCY) {
                    document.MAINFORM.C_CLEAR_TYPE.value = "NOSTRO";
                    //Sql_Cond1 = "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_CLEAR_VALID=" + "'T'" + " AND " + "C_CLEAR_TYPE=" + "'" + document.MAINFORM.C_CLEAR_TYPE.value + "'" + " AND " + "C_ACCT_CCY=" + "'" + document.MAINFORM.INW_X103_SETT_CCY_32A.value + "'" + " AND " + "C_ACCT_WITH_ID=" + "'" + document.MAINFORM.INW_SNDBK_ID.value + "'";
                    //Field_List1 = "C_ACCT_NR";
                    //Mapping_List1 = "BANK_CHRG_ACCT";
                    SYS_GetTableDataByRule_S('SYF_PYMT_Proc_Inc_103_SYF_PYMT_Set_RecChgs_3', '1', true);
                }
                Paid_71GObj = Chg.Screen.getTrxChargeByCommCode('PAID_71G');
                SYF_PYMT_Set_RecChgs_Paid(); // Utility Auto Fix Comments
                ConvAmt = 0;
                RecChg_71GObj.display();
                Chg.Screen.setTrxChargeFor(ChgCodeOur, 'F');
                Chg.calculate([ChgCodeOur]);
                SYT_Audit_Update_Charges();
                RecChg_71GObj.setChargeAt(0);
                RecChg_71GObj.protectChargeFor();
                RuleCcy = RecChg_71GObj.getRuleCcy();
                InwCcy = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
                ReceivedChg71 = SYS_BeFloat(document.MAINFORM.DET_RECCHRGS_AMT.value);
                document.MAINFORM.EXCH_RATE.value = 0;


                if (RuleCcy != '') { //&& RecChg_71GObj.getActiveAmt()>0 -- jan 17 2011
                    if (InwCcy != SYS_LOCAL_CCY) {
                        if (RuleCcy != SYS_LOCAL_CCY) {
                            if (InwCcy != RuleCcy) {
                                RecChg_71GObj.setBalCcy(InwCcy);
                                document.MAINFORM.DB_CCY.value = RuleCcy;
                                document.MAINFORM.DB_CALC_AMT.value = RecChg_71GObj.getActiveAmt(); //dec 14
                                SYT_getExchangeRateSB(document.MAINFORM.DB_CCY, document.MAINFORM.INW_X103_SETT_CCY_32A, rate_type, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.EXCH_RATE);
                                if (document.MAINFORM.EXCH_RATE.value == '') {
                                    RateExists = false;
                                }
                                if (ReceivedChg71 > 0) {
                                    ConvAmt = SYS_BeFloat(document.MAINFORM.DB_AMT.value) - ReceivedChg71;
                                } else {
                                    ConvAmt = SYS_BeFloat(document.MAINFORM.DB_AMT.value);
                                }
                                if (ConvAmt > 0) {
                                    RecChg_71GObj.setBalAmt(ConvAmt);
                                } else {
                                    RecChg_71GObj.setBalAmt(0);
                                }
                            } else {
                                //RecChg71G_Bank = RecChg_71GObj.getBalAmt();
                                RecChg71G_set = RecChg_71GObj.getActiveAmt(); //dec 14				
                                if (RecChg71G_set - ReceivedChg71 > 0) {
                                    RecChg_71GObj.setBalCcy(InwCcy);
                                    if (RecChg71G_set - ReceivedChg71 > 0) {
                                        RecChg_71GObj.setBalAmt(RecChg71G_set - ReceivedChg71);
                                    } else {
                                        RecChg_71GObj.setBalAmt(0);
                                    }
                                } else {
                                    RecChg_71GObj.setBalAmt(0);
                                }
                            }
                        } else {
                            if (InwCcy != RuleCcy) {
                                //SYS_GetExchangeRate_S(RuleCcy,InwCcy ,'TT Buying' , 'EXCH_RATE','','','','','','9');
                                document.MAINFORM.DB_CALC_AMT.value = RecChg_71GObj.getActiveAmt();
                                document.MAINFORM.DB_AMT.value = 0;
                                document.MAINFORM.DB_CCY.value = RuleCcy;
                                SYT_getExchangeRateSB(document.MAINFORM.DB_CCY, document.MAINFORM.INW_X103_SETT_CCY_32A, rate_type, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.EXCH_RATE);
                                if (document.MAINFORM.EXCH_RATE.value == '') {
                                    RateExists = false;
                                }
                                RecChg_71GObj.setBalCcy(InwCcy);
                                //ConvAmt = (SYS_BeFloat( RecChg_71GObj.getActiveAmt())*SYS_BeFloat(document.MAINFORM.EXCH_RATE.value));//dec 14
                                ConvAmt = (SYS_BeFloat(document.MAINFORM.DB_AMT.value)); //dec 14
                                if (ReceivedChg71 > 0) {
                                    ConvAmt = ConvAmt - ReceivedChg71;
                                }
                                if (ConvAmt > 0) {
                                    RecChg_71GObj.setBalAmt(ConvAmt);
                                } else {
                                    RecChg_71GObj.setBalAmt(0);
                                }
                            } else {
                                //RecChg71G_Bank = RecChg_71GObj.getBalAmt();
                                RecChg71G_set = RecChg_71GObj.getActiveAmt(); //dec 14
                                if (RecChg71G_set - ReceivedChg71 > 0) {
                                    RecChg_71GObj.setBalCcy(InwCcy);
                                    if (RecChg71G_set - ReceivedChg71 > 0) {
                                        RecChg_71GObj.setBalAmt(RecChg71G_set - ReceivedChg71);
                                    } else {
                                        RecChg_71GObj.setBalAmt(0);
                                    }
                                } else {
                                    RecChg_71GObj.setBalAmt(0);
                                }
                            }
                        }
                    } else {
                        if (InwCcy != RuleCcy) {
                            //SYS_GetExchangeRate_S(RuleCcy,InwCcy ,'TT Buying' , 'EXCH_RATE','','','','','','9');
                            document.MAINFORM.DB_CALC_AMT.value = RecChg_71GObj.getActiveAmt();
                            document.MAINFORM.DB_AMT.value = 0;
                            document.MAINFORM.DB_CCY.value = RuleCcy;
                            SYT_getExchangeRateSB(document.MAINFORM.DB_CCY, document.MAINFORM.INW_X103_SETT_CCY_32A, rate_type, document.MAINFORM.DB_CALC_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.EXCH_RATE);

                            if (document.MAINFORM.EXCH_RATE.value == '') {
                                RateExists = false;
                            }
                            RecChg_71GObj.setBalCcy(InwCcy);
                            //ConvAmt = (SYS_BeFloat( RecChg_71GObj.getActiveAmt())*SYS_BeFloat(document.MAINFORM.EXCH_RATE.value));//dec 14
                            ConvAmt = (SYS_BeFloat(document.MAINFORM.DB_AMT.value)); //dec 14
                            if (ReceivedChg71 > 0) {
                                ConvAmt = (SYS_BeFloat(ConvAmt) - SYS_BeFloat(ReceivedChg71));
                                if (ConvAmt > 0) {
                                    RecChg_71GObj.setBalAmt(ConvAmt);
                                } else {
                                    RecChg_71GObj.setBalAmt(0);
                                }
                            }
                        } else {
                            RecChg71G_Bank = RecChg_71GObj.getBalAmt();
                            RecChg71G_set = RecChg_71GObj.getActiveAmt(); //dec 14
                            if (SYS_BeFloat(RecChg71G_set) - SYS_BeFloat(ReceivedChg71) > 0) {
                                RecChg_71GObj.setBalCcy(InwCcy);
                                if (SYS_BeFloat(RecChg71G_set) - SYS_BeFloat(ReceivedChg71) > 0) {
                                    RecChg_71GObj.setBalAmt(SYS_BeFloat(RecChg71G_set) - SYS_BeFloat(ReceivedChg71));
                                } else {
                                    RecChg_71GObj.setBalAmt(0);
                                }
                            } else {
                                RecChg_71GObj.setBalAmt(0);
                            }
                        }
                    }
                    if (RuleCcy != '' && RecChg_71GObj.getActiveAmt() > 0) { //dec 14
                        if (document.MAINFORM.INW_X103_SETT_CCY_32A.value == SYS_LOCAL_CCY) {
                            if (document.MAINFORM.BANK_CHRG_ACCT.value != '') {
                                RecChg_71GObj.setPayCcy(SYS_LOCAL_CCY);
                                if (RecChg_71GObj.getBalAmt() > 0) {
                                    RecChg_71GObj.setPayAmt(RecChg_71GObj.getBalAmt());
                                }
                                RecChg_71GObj.setCollectCcy(SYS_LOCAL_CCY);
                                RecChg_71GObj.setCollectAmt(RecChg_71GObj.getPayAmt());
                                RecChg_71GObj.setBalCcy(SYS_LOCAL_CCY);
                                RecChg_71GObj.setBalAmt(0.00);
                            }
                        }
                    }
                    //exchRate = document.MAINFORM.EXCH_RATE.value;
                } else {
                    RecChg_71GObj.hide();
                    Paid_71GObj.hide();
                }
                SYT_calLocalColl2PayRate(SYS_LOCAL_CCY, document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value);
            } else {
                RecChg_71GObj.hide();
                Paid_71GObj.hide();
            }
        } else {
            RecChg_71GObj.reset();
            RecChg_71GObj.hide();
            Paid_71GObj.reset();
            Paid_71GObj.hide();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_RecChgs", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_RecChgs_Paid = function() {
    try {
        var Paid_71GObj; // Utility Auto Fix Comments
        var obj; // Utility Auto Fix Comments
        Paid_71GObj = Chg.Screen.getTrxChargeByCommCode('PAID_71G');
        Paid_71GObj.display();
        obj = $(Paid_71GObj._getFldId(Chg.FLD_ACTIVE_AMT)); // Utility Auto Fix Comments
        obj.className = 'AMT_P';
        obj.disabled = true;
        if (SYS_BeFloat(document.MAINFORM.DET_RECCHRGS_AMT.value) > 0) {
            Paid_71GObj.display();
            Chg.Screen.setTrxChargeFor('PAID_71G', 'F');
            Chg.calculate(['PAID_71G']);
            Paid_71GObj.protectChargeAt();
            Paid_71GObj.setChargeAt(0);
            Paid_71GObj.setPayCcy(document.MAINFORM.INW_X103_SETT_CCY_32A.value);
            Paid_71GObj.setPayAmt(SYS_BeFloat(document.MAINFORM.DET_RECCHRGS_AMT.value));
            if (document.MAINFORM.INW_X103_SETT_CCY_32A.value != SYS_LOCAL_CCY) {
                //SYS_GetExchangeRate_S(document.MAINFORM.INW_X103_SETT_CCY_32A.value,SYS_LOCAL_CCY ,'TT Buying' ,'EXCH_RATE','','','','','','9');//mar 1
                document.MAINFORM.DB_AMT.value = 0;
                document.MAINFORM.DB_CCY.value = SYS_LOCAL_CCY;
                SYT_getExchangeRateSB(document.MAINFORM.INW_X103_SETT_CCY_32A, document.MAINFORM.DB_CCY, rate_type, document.MAINFORM.DET_RECCHRGS_AMT, document.MAINFORM.DB_AMT, document.MAINFORM.EXCH_RATE);
                if (document.MAINFORM.EXCH_RATE.value == '') {
                    RateExists = false;
                }
                Paid_71GObj.setCollectCcy(SYS_LOCAL_CCY);
                //Paid_71GObj.setCollectAmt(SYS_BeFloat(document.MAINFORM.DET_RECCHRGS_AMT.value)*SYS_BeFloat(document.MAINFORM.EXCH_RATE.value));mar 1
                Paid_71GObj.setCollectAmt(document.MAINFORM.DB_AMT.value);
                if (document.MAINFORM.EXCH_RATE.value != 0) {
                    document.MAINFORM.CHG_LOCAL_CUST_PAY_RATE.value = document.MAINFORM.EXCH_RATE.value;
                }
                document.MAINFORM.EXCH_RATE.value = 0;
            } else {
                Paid_71GObj.setCollectCcy(SYS_LOCAL_CCY);
                Paid_71GObj.setCollectAmt(SYS_BeFloat(document.MAINFORM.DET_RECCHRGS_AMT.value));
            }
        } else {
            Paid_71GObj.reset();
            Paid_71GObj.hide();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_RecChgs_Paid", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_RetFundsChrgs = function() {
    try {
        var RetFdsObj; // Utility Auto Fix Comments
        RetFdsObj = Chg.Screen.getTrxChargeByCommCode('RET_FDS_FEE');
        if (document.MAINFORM.MT103_DISTRBN.value == 'Return of Funds') {
            if (SYS_BANK_COUNTRY != 'ZM') {
                Chg.Screen.mapForeignCust("CHG_CNTY_BANKID", "INW_SNDBK_NM", 'INW_X103_SETT_CCY_32A', 'CPYT_DR_AC');
            } else {
                Chg.Screen.mapForeignCust("INW_SNDBK_ID", "INW_SNDBK_NM", 'INW_X103_SETT_CCY_32A', 'CPYT_DR_AC');
            }
            RetFdsObj.display();
            Chg.calculate(['RET_FDS_FEE']);
            document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "onchange");
            SYT_calLocalColl2PayRate(SYS_LOCAL_CCY, document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value);
            SYT_calForeignColl2PayRate(SYS_LOCAL_CCY, document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value);
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'F';
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'onchange');
            RetFdsObj.protectChargeFor();
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
            RetFdsObj.setChargeAt(0);
            RetFdsObj.protectChargeAt();
        } else {
            RetFdsObj.hide();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Set_RetFundsChrgs", e);
    }
}

csFuncLevelProto.SYF_PYMT_ShowPayTabs = function() {
    try {
        EEHtml.getElementById("PayInstBreak").style.display = "block";
        EEHtml.getElementById("PaySettleBreak").style.display = "block";
        EEHtml.getElementById("PayDetailsBreak").style.display = "block";
        EEHtml.getElementById("H").style.display = "";
        EEHtml.getElementById("I").style.display = "";
        EEHtml.getElementById("J").style.display = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_ShowPayTabs", e);
    }
}

csFuncLevelProto.SYF_PYMT_Show_195_196Tab = function() {
    try {
        EEHtml.getElementById("M").style.display = "";
        EEHtml.getElementById("MT195_Break").style.display = "block";
        SYT_EnableDivClass("M_div");
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ID, "P");
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_NM, "P");
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD1, "P");
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD2, "P");
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD3, "P");
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_TAG, "P");
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_SW_ADD, "P");
        document.MAINFORM.SEND_CORR_SW_TAG.value = 'A';
        SYT_ChangeFldClass(document.MAINFORM.CORR_MSG, 'M');
        SYM_PYMT_disableField(document.MAINFORM.Query_Ans_Button);
        SYM_PYMT_disableField(document.MAINFORM.NarrButton_95);
        SYM_PYMT_disableField(document.MAINFORM.XN99_NARRATIVE_79_Button);
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Show_195_196Tab", e);
    }
}

csFuncLevelProto.SYF_PYMT_Show_Out_Charges = function() {
    try {
        EEHtml.getElementById("OUTCHGS_ROW1").style.display = "block";
        EEHtml.getElementById("OUTCHGS_ROW2").style.display = "block";
        if (document.MAINFORM.INW_X103_DET_CHG_71A.value != 'OUR') {
            document.MAINFORM.X103_DET_CHG_71A.value = "BEN";
        } else {
            document.MAINFORM.X103_DET_CHG_71A.value = "SHA";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Show_Out_Charges", e);
    }
}

csFuncLevelProto.SYF_PYMT_Show_Sett = function() {
    try {
        //EEHtml.getElementById("G_div").style.display = "block";	
        EEHtml.getElementById("G").style.display = "";
        EEHtml.getElementById("Sett_Break").style.display = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Show_Sett", e);
    }
}

csFuncLevelProto.SYF_PYMT_Succ_CutOff = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_Succ_CutOff", e);
    }
}

csFuncLevelProto.SYF_PYMT_getCutOffDetails = function() {
    try {
        document.MAINFORM.CUTOFF_REF.value = SYS_BANK_COUNTRY + document.MAINFORM.CR_CCY.value;
        document.MAINFORM.CCY_CUTOFF_DAY.value = "";
        document.MAINFORM.CUTOFF_DAY.value = "";
        document.MAINFORM.CUTOFF_TIME.value = "";
        SYS_GetCUBK_S('GET_CUTOFF', 'CUTOFF_REF', '', '', 'TRUE');
        if (document.MAINFORM.CUTOFF_TIME.value == "") {
            SYF_PYMT_Fail_CutOff();
        } else {
            SYF_PYMT_setCutOffDay();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_getCutOffDetails", e);
    }
}

csFuncLevelProto.SYF_PYMT_setCutOffDay = function() {
    try {
        //Nothing
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*SYF_PYMT_setCutOffDay", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        var Records; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
        _dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(_dodetail); // Utility Auto Fix Comments
        if (Records.length > 0) {
            alert("Max One Settlement row is allowed");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_CNTY_CODE_onchange = function() {
    try {
        SYM_PYMT_Chg_AC_WT_INST_CNTY_CODE();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_AC_WT_INST_CNTY_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_BENE_AC_TYPE_onchange = function() {
    try {
        SYM_PYMT_Chg_BENE_AC_TYPE();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_BENE_AC_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_CASH_IND_onchange = function() {
    try {
        SYM_PYMT_Chg_CHG_CASH_IND();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_CHG_CASH_IND_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHIP_FED_onchange = function() {
    try {
        SYM_PYMT_Chg_Chip_Fed();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_CHIP_FED_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CORR_MSG_onchange = function() {
    try {
        SYF_PYMT_Show_195_196Tab();
        SYF_PYMT_Chg_CORR_MSG();
        SYF_PYMT_Clbk_ITT_Chrgs();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_CORR_MSG_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_BK_AC_onchange = function() {
    try {
        if (!SYF_PYMT_LocalMUP() && !SYF_PYMT_LocalTIS()) {
            //Bypass normal account validation rules
            SYM_PYMT_chk_CrAcctNo();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_CPYT_CR_BK_AC_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_BK_AC1_onchange = function() {
    try {
        SYS_GetCUBK('CPYT_CR_BK_AC_202', 'CPYT_CR_BK_AC');
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_CPYT_CR_BK_AC1_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_DR_AC1_onchange = function() {
    try {
        SYS_GetCUBK('CPYT_DR_AC', 'CPYT_DR_AC');
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_CPYT_DR_AC1_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_PAY_COV_MSG_onchange = function() {
    try {
        SYM_PYMT_Chg_CPYT_PAY_COV_MSG();
        For_Swift_Mapping2();
        /*
    if(SYS_ORG_FUNCTION_SHORT_NAME=='CompOutPmt'){
    }
    */
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_CPYT_PAY_COV_MSG_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CCY_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_CR_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_INW_X103_BENECUACNO59A_onchange = function() {
    try {
        SYT_GetCUBK_All('INW_X103_BENECUACNO59A', 'INW_X103_BENECUACNO59A');
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_INW_X103_BENECUACNO59A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_INW_X103_DET_CHG_71A_onchange = function() {
    try {
        if (document.MAINFORM.INW_X103_DET_CHG_71A.value == "BEN") {
            SYT_ChangeFldClass(document.MAINFORM.CHG_OVERRIDE_IND, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CHG_OVERRIDE_IND, "O");
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, "O");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_INW_X103_DET_CHG_71A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_INW_X103_ORDCUACNO_50A_onchange = function() {
    try {
        SYT_GetCUBK_All('INW_X103_ORDCUACNO_50A', 'INW_X103_ORDCUACNO_50A');
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_INW_X103_ORDCUACNO_50A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_IS_COVER_onchange = function() {
    try {
        if (document.MAINFORM.IS_COVER.value == 'Y') {
            SYT_ChangeFldClass(document.MAINFORM.FUNDS_RECV, "M");
            document.MAINFORM.FUNDS_RECV.value = "";
        } else if (document.MAINFORM.IS_COVER.value == 'N') {
            SYT_ChangeFldClass(document.MAINFORM.FUNDS_RECV, "P");
            document.MAINFORM.FUNDS_RECV.value = "Y";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_IS_COVER_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_MERGE_FLAG_103_onchange = function() {
    try {
        MERGE_FALG_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_MERGE_FLAG_103_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_MSG_TYPE_onchange = function() {
    try {
        if (document.MAINFORM.MSG_TYPE.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.X199_NARRATIVE_79, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X199_NARRATIVE_79, "O");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_MSG_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_MT103_DISTRBN_onchange = function() {
    try {
        SYF_PYMT_Chg_MT103_DISTRBN();
        SYF_PYMT_Set_MT900();
        SYF_PYMT_Set_MT199();
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_ID_59A, "P");
        var sDistrVal; // Utility Auto Fix Comments   
        sDistrVal = document.MAINFORM.MT103_DISTRBN.value;
        if (sDistrVal == "Single Settlement") {
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_ID_59A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_ID_59_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "P"); //ADDED
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "P");
        } else if (sDistrVal == "Forward Funds") {
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "O");
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "O");
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "P");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_MT103_DISTRBN_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_SEND_TO_FLAG_onchange = function() {
    try {
        SYF_PYMT_Chg_SEND_TO_FLAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_SEND_TO_FLAG_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_TEMP_TAG25_onchange = function() {
    try {
        SYF_PYMT_MPO_X9N0_25P_IDENTIFIER();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_TEMP_TAG25_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD1_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD1_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ACCBKADD1_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD2_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD2_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ACCBKADD2_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD3_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD3_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ACCBKADD3_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKACNO57A_onchange = function() {
    try {
        //SYM_PYMT_Chg_X103_ACC_BKACNO57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ACC_BKACNO57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKID_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ACC_BKID_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKNM_57A_onchange = function() {
    try {
        //SYM_PYMT_Chg_X103_ACC_BKNM_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ACC_BKNM_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKSW_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ACC_BKSW_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ACC_BKSW_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ADV_BKID_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ADV_BKID_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ADV_BKSW_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ADV_BKSW_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECUACNO59A_onchange = function() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_BENECUACNO59A);
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_BENECUACNO59A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_ID_59A_onchange = function() {
    try {
        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            SYS_GetCUBK('X103_BENECU_ID_59A_NONCU', 'X103_BENECU_ID_59A', 'SYF_PYMT_AC_NO_Change', 'SYF_PYMT_Ben_ID_Fail', 'TRUE');
            if (document.MAINFORM.MT103_DISTRBN.value == "Forward Funds") {
                SYT_ChangeFldClass(document.MAINFORM.X103_B2_ADD_BTN, "O");
            } else {
                SYT_ChangeFldClass(document.MAINFORM.X103_B2_ADD_BTN, "P");
            }
            Chg.Screen.mapLocalCust("X103_BENECU_ID_59A", "X103_BENECU_NM_59A");
            if (document.MAINFORM.INW_X103_DET_CHG_71A.value != 'OUR') {
                SYF_PYMT_Set_InwPytComm_Chrgs(ChgCodeBS);
            }
        } else {
            SYM_PYMT_Clr_Ben_Cust();
            Chg.Screen.mapLocalCust("FOR_CHG_ID", "FOR_CHG_NAME");
            if (document.MAINFORM.MT103_DISTRBN.value == "Forward Funds") {
                SYM_PYMT_Enb_103_Acct_With_Ins();
                SYM_PYMT_Clr_All_Banks('Clear103');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.X103_B2_ADD_BTN, "P");
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_BENECU_ID_59A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF1_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_BK2BK_INF1_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF2_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_BK2BK_INF2_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF3_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_BK2BK_INF3_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF4_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_BK2BK_INF4_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF5_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_BK2BK_INF5_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF6_72_onchange = function() {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_BK2BK_INF6_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BKOP_CODE_23B_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_BKOP_CODE_23B();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_BKOP_CODE_23B_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ENV_CONT_77T_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ENV_CONT_77T();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ENV_CONT_77T_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKID_56A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_MEDI_BKID_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_MEDI_BKID_56A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKSW_56A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_MEDI_BKSW_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_MEDI_BKSW_56A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKID_52A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ORD_BKID_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ORD_BKID_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKSW_52A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_ORD_BKSW_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ORD_BKSW_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCORRID_54A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_RECCORRID_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_RECCORRID_54A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCORRSW_54A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_RECCORRSW_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_RECCORRSW_54A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP1_77B_onchange = function() {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_REG_REP1_77B_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP2_77B_onchange = function() {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_REG_REP2_77B_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP3_77B_onchange = function() {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_REG_REP3_77B_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF1_70_onchange = function() {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_REMIT_INF1_70_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF2_70_onchange = function() {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_REMIT_INF2_70_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF3_70_onchange = function() {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_REMIT_INF3_70_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF4_70_onchange = function() {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_REMIT_INF4_70_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRID53A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_SENDCORRID53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_SENDCORRID53A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRSW53A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_SENDCORRSW53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_SENDCORRSW53A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SEND_BKID_51A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_SEND_BKID_51A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_SEND_BKID_51A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SEND_BKSW_51A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_SEND_BKSW_51A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_SEND_BKSW_51A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TRDREIMID_55A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_TRDREIMID_55A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_TRDREIMID_55A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TRDREIMSW_55A_onchange = function() {
    try {
        SYM_PYMT_Chg_X103_TRDREIMSW_55A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_TRDREIMSW_55A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function() {
    try {
        document.MAINFORM.DB_CCY.value = document.MAINFORM.CR_CCY.value;
        SYM_PYMT_Chg_X103_VALUE_DT_32A();
        document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        if (document.MAINFORM.MT103_DISTRBN.value == 'Return of Funds') {
            if (document.MAINFORM.CORR_MSG.value == "MT195" || document.MAINFORM.CORR_MSG.value == "MT196") {
                SYF_PYMT_Set_195_196Narr();
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_VALUE_DT_32A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKID_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_ACC_BKID_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKSW_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ACC_BKSW_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_ACC_BKSW_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKID_B2_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ADV_BKID_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_ADV_BKID_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKSW_B2_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ADV_BKSW_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_ADV_BKSW_B2_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKID_58A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BENE_BKID_58A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_BENE_BKID_58A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKSW_58A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BENE_BKSW_58A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_BENE_BKSW_58A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF1_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF1_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_BK2BK_INF1_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF2_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF2_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_BK2BK_INF2_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF3_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF3_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_BK2BK_INF3_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF4_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF4_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_BK2BK_INF4_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF5_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF5_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_BK2BK_INF5_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF6_72_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF6_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_BK2BK_INF6_72_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKID_56A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_MEDI_BKID_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_MEDI_BKID_56A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKSW_56A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_MEDI_BKSW_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_MEDI_BKSW_56A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_ID_52A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ORDBK_ID_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_ORDBK_ID_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_SW_52A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_ORDBK_SW_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_ORDBK_SW_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_RECCORRID_54A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_RECCORRID_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_RECCORRID_54A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_RECCORRSW_54A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_RECCORRSW_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_RECCORRSW_54A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_SENDCORRID53A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_SENDCORRID53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_SENDCORRID53A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_SENDCORRSW53A_onchange = function() {
    try {
        SYM_PYMT_Chg_X202_SENDCORRSW53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_SENDCORRSW53A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_X203_52A_IDENTIFIER_onchange = function() {
    try {
        if (document.MAINFORM.X203_52A_IDENTIFIER.value == '') {
            document.MAINFORM.X203_52_TAG.value = 'D';
        } else {
            document.MAINFORM.X203_52_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X203_52A_IDENTIFIER_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_XN90_ORD_BKID_52A_onchange = function() {
    try {
        SYM_PYMT_Chg_XN90_ORD_BKID_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_XN90_ORD_BKID_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_XN90_ORD_BKSW_52A_onchange = function() {
    try {
        SYM_PYMT_Chg_XN90_ORD_BKSW_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_XN90_ORD_BKSW_52A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_XN91_ACC_BKID_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_XN91_ACC_BKID_57A();
        alert(document.MAINFORM.XN91_ACC_BKID_57A.value);
        alert(document.MAINFORM.XN91_ACC_BKSW_57A.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_XN91_ACC_BKID_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_XN91_ACC_BKSW_57A_onchange = function() {
    try {
        SYM_PYMT_Chg_XN91_ACC_BKSW_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_XN91_ACC_BKSW_57A_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CORR_ID_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_XN91_ACC_BKID_57A_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_CORR_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_CORR_POST_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_XN90_ORD_BKID_52A_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_CORR_POST_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_NarrButton_95_onclick = function() {
    try {
        SYS_InsertClause('XN95_96_NARRATIVE');
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_NarrButton_95_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_Ord_Cust_lookup_onclick = function() {
    try {
        var name = document.MAINFORM.X103_ORDCU_NM_50A.value.trim();
        var add1 = document.MAINFORM.X103_ORDCUADD1_50A.value.trim();
        var add2 = document.MAINFORM.X103_ORDCUADD2_50A.value.trim();
        var add3 = document.MAINFORM.X103_ORDCUADD3_50A.value.trim();
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
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_Ord_Cust_lookup_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_Query_Ans_Button_onclick = function() {
    try {
        SYS_InsertClause('X95_96_QUER_ANS');
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_Query_Ans_Button_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_SEND_TO_ID_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_AC_WT_INST_CNTY_CODE_Lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_SEND_TO_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_SG_BIN_onclick = function() {
    try {
        SYM_PYMT_Clk_Trd_Reim_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_SG_BIN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_50_ADD_BTN_onclick = function() {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_50A.value == '') {
            //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A', SYM_PYMT_SYS_buildSQLCond(new Array('C_AC_NUMBER', 'X103_ORDCUACNO_50A')));
            SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A', '2');
        } else {
            //SYS_InqCUBK_Sql('X103_ORDCUACNO_50A', SYM_PYMT_SYS_buildSQLCond(new Array('c_cust_id', 'X103_ORDCU_ID_50A', 'C_AC_NUMBER', 'X103_ORDCUACNO_50A')));
            SYS_InqCUBK_byCondition('X103_ORDCUACNO_50A', '3');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_50_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_50_BTN_onclick = function() {
    try {
        SYF_PYMT_Ord_Cust_lookup_onclick();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_50_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_51_ADD_BTN_onclick = function() {
    try {
        SYF_PYMT_Clk_DB_Acct_No_Lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_51_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_51_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_Send_Ins_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_51_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_52A_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_Ord_Ins_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_52A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_53A_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_Send_Corr_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_53A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_54A_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_Rec_Corr_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_54A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_56A_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_IntIns_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_56A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_57A_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_AWI_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_57A_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_ADD_BTN_onclick = function() {
    try {
        //SYM_PYMT_lookup_CrAcctNo();
        if (document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
            document.MAINFORM.C_CLEAR_TYPE_TEMP.value = "NOSTRO";
            SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '4');
        } else {
            document.MAINFORM.C_CLEAR_TYPE_TEMP.value = "VOSTRO";
            SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '4');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_B2_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_B2_lookup1();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_B2_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_59_BTN_onclick = function() {
    try {
        SYF_PYMT_Clk_Ben_Cust_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X103_ID_59_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_52_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup5();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_52_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_53_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup6();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_53_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_54_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup7();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_54_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_56_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup8();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_56_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_57_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup9();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_57_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_58_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup4();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_58_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_B2_BTN_onclick = function() {
    try {
        SYM_PYMT_Clk_X202_lookup3();
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_X202_B2_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_XN99_NARRATIVE_79_Button_onclick = function() {
    try {
        SYS_InsertClause('XN99_NARRATIVE_79');
    } catch (e) {
        DisExcpt("SYF_PYMT_Proc_Inc_103.js*FLD_PYMT_XN99_NARRATIVE_79_Button_onclick", e);
    }
}