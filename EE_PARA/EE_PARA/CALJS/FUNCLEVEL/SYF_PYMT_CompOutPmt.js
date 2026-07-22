var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var LOCAL_BANK_PYMT_BLOCK3 = '';
var LOCAL_BANK_PYMT_NOSTRO_ACC_NO = '';
var nBOL_CHG_FLD_LOCAL_CUST_AC_NO = '';
var nBOL_CHG_FLD_LOCAL_CUST_CCY = '';

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_PYMT_CAL_CHG_AMT();
        if (SYS_FUNCTION_TYPE == "EC") {
            document.MAINFORM.CUTOFF_DAY.value = '';
            return true;
        }
        if (document.MAINFORM.X103_DET_CHG_71A.value != "BEN") {
            document.MAINFORM.CHG_CUST_AMT.value = Chg.Screen.getLocalPayChgTotalAmt();
        } else {
            document.MAINFORM.CHG_CUST_AMT.value = 0.0;
        }
        if (document.MAINFORM.MX_OR_MT_FLAG.value == "MX") {
            document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
        } else {
            document.MAINFORM.C_MAIN_REF_20Z.value = '';
        }
        document.MAINFORM.CUTOFF_DAY.value = '';
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        document.MAINFORM.UETR_GPI_121.value = SYF_PYMT_guid();
        Chg.Screen.mapLocalCust("123", "345"); //Add by Sunny 20150506
        Chg.Screen.mapForeignCust("FOR_CHG_ID", "FOR_CHG_NAME", "CR_CCY", "FOR_CHG_AC");
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Instruction23E; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var RecChgsObj; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        var initDate; // Utility Auto Fix Comments
        var res; // Utility Auto Fix Comments
        var sResult; // Utility Auto Fix Comments
        Instruction23E = '';

        //If loading a nbol trx(auto-created trxs), store the charges values in this variables for later usage.
        if (document.MAINFORM.AUTO_CREATED.value == "Yes") {
            Instruction23E = document.MAINFORM.X103_INSTRCODE1_23E.value;
            nBOL_CHG_FLD_LOCAL_CUST_AC_NO = document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value;
            nBOL_CHG_FLD_LOCAL_CUST_CCY = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value; // Utility Auto Fix Comments
        }

        //Added this check for defect 168
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYT_Charge_Set_Types("OT");
        }

        if (SYS_BANK_COUNTRY == "ZA") {
            //showZALBIs();
            SYT_ChangeFldClass(document.MAINFORM.EXTERNAL_REF, "M");
            SYT_ChangeFldClass(document.MAINFORM.FRONT_OFFICE_CODE, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EXTERNAL_REF, "O");
            SYT_ChangeFldClass(document.MAINFORM.FRONT_OFFICE_CODE, "O");

            EEHtml.getElementById("WFREF").style.visibility = 'visible';
            EEHtml.getElementById("EXTERNAL_REF").style.visibility = 'hidden';
            EEHtml.getElementById("FRONT_OFFICE_CODE").style.visibility = 'hidden';
            EEHtml.getElementById("ZA_LBI_1").style.visibility = 'hidden';
            EEHtml.getElementById("ZA_LBI_2").style.visibility = 'hidden';
        }

        document.MAINFORM.X103_BK2BK_72_AUTH_DEALER_CD.className = "AMT_O";
        document.MAINFORM.X103_BK2BK_72_APPROVAL_NO.className = "AMT_O";

        document.MAINFORM.X103_BK2BK_72_AUTH_DEALER_CD.value = '';
        document.MAINFORM.X103_BK2BK_72_APPROVAL_NO.value = '';

        SYF_PYMT_Field72Checker();

        if ((SYS_FUNCTION_NAME == "Cancel_OTT" && SYS_FUNCTION_TYPE == "EC") || (document.MAINFORM.CANCEL_FLG.value == "Yes" && SYS_FUNCTION_TYPE == "RE")) {
            Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
            SYT_Cancel_Init();
            return;
        } else {
            document.MAINFORM.CANCEL_FLG.value = "No";
        }
        initDate = document.MAINFORM.X103_VALUE_DT_32A.value;
        SYM_PYMT_Hide_Chgs_PaidByRow();
        if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
            document.MAINFORM.AVAL_WT_BK_ID.value = '';
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_transaction");
            SYF_PYMT_Init_EC();
            SYT_Chgs_Without_Deferred_Terms();
            Chg.attchEvent(SYM_PYMT_Set_71GAmt);
            SYM_PYMT_Chg_X103_VALUE_DT_32A();
            SYM_PYMT_Chg_X103_BKOP_CODE_23B();
            if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "") {
                SYM_PYMT_Dis_2XX_div();
            } else {
                SYM_PYMT_Enb_2XX_Div();
            }
            SYM_PYMT_Set_OtherFields_MT103();
            SYM_PYMT_Chk_RefuseReason();
            SYM_PYMT_Set_MPO_Chrgs();
            if (document.MAINFORM.CHG_CASH_IND.value == 'Yes') {
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = "Not Applicable";
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, "P");
            }
            if (document.MAINFORM.BENE_AC_TYPE.value == "IBAN") {
                document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_M";
            } else {
                document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_O";
            }
        } else if (SYS_FUNCTION_TYPE == 'RE') {
            SYM_PYMT_Hide_Chgs_PaidByRow();
            if (document.MAINFORM.AUTO_CREATED.value != "Yes") {
                document.MAINFORM.NOTES.value = '';
            }

            if (document.MAINFORM.OVRIDE.value == "Yes") {
                alert("Funds Check has been Overridden.Please check the Audit");
            }
            if (document.MAINFORM.BENE_AC_TYPE.value == "IBAN") {
                document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_M";
            } else {
                document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_O";
            }
            if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "") {
                SYM_PYMT_Dis_2XX_div();
            } else {
                SYM_PYMT_Enb_2XX_Div();
            }
            SYM_PYMT_Chg_X103_BKOP_CODE_23B();
            SYM_PYMT_Set_MPO_Chrgs();
            Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
            Chg.init('TT Selling', 'TT Selling', 'TT Selling', 'TT Selling');
            RecChgsObj = Chg.Screen.getTrxChargeByCommCode('OTT_71GCHG');
            if (document.MAINFORM.X103_DET_CHG_71A.value != "OUR") {
                RecChgsObj.reset();
                RecChgsObj.hide();
            }
            if (document.MAINFORM.BENE_AC_TYPE.value == "IBAN") {
                document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_M";
            } else {
                document.MAINFORM.X103_BENECUACNO59A.className = "CHAR_O";
            }
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
        } else if (SYS_FUNCTION_TYPE == 'KP') {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_transaction");
            if (document.MAINFORM.APP_TYPE.value == "CUSTOMER") { ////sathish Dec 24
                SYS_GetCUBK_S('GetCustOtherInfo', 'X103_ORDCU_ID_50A', '', '', 'TRUE');
            } else if (document.MAINFORM.APP_TYPE.value == "BANK") {
                //Sql_Cond = "C_MAIN_REF=" + "'" + document.MAINFORM.X103_ORDCU_ID_50A.value + "'";
                //Field_List = "CNTY_CODE";
                //Mapping_List = "APPL_CNTY_RES";
                SYS_GetTableDataByRule('SYF_PYMT_CompOutPmt_PostconditionOnInit_0', '1', '', '', true);
                document.MAINFORM.X103_TAG_50A.value = 'A';
            }
            //SetMinChgs();
            //dispMinChgs();
            SYF_PYMT_Set_OrdCustForForm();
            if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
                Chg.calculate([chargeCode1], document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
            } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
                Chg.calculate([chargeCode1], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
            }
            SYT_Chgs_Without_Deferred_Terms();
            SYM_PYMT_Chg_X103_VALUE_DT_32A();
            SYF_PYMT_Set_InitValues();
            Chg.attchEvent(SYM_PYMT_Set_71GAmt);
            SYM_PYMT_Chg_X103_BKOP_CODE_23B();
            //check_MinPymt();
        } else if (SYS_FUNCTION_TYPE == 'IQ') {

            if (document.MAINFORM.CHG_OVERRIDE_IND.value == '') {
                document.MAINFORM.CHG_OVERRIDE_IND.value = 'No';
            }
            //Auto advice printing
            SYT_AdviceAutoPrint(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.X103_ORDCU_ID_50A.value, "OT");

            SYT_ConfigureHelpLink();

            document.MAINFORM.X103_BK2BK_INF1_72A.onchange = SYF_PYMT_Set_F72_EXCON_APP;
        }
        //if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC')
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') // -- SATHISH
        {
            document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY;
            // Local Bank Payment Instructions
            SYS_GetDataBySSS_S('System_LocalBankPaymentInstruction_TRX', 'CR_CCY;AC_WT_INST_CNTY_CODE;COUNTRY;C_MAIN_REF');
            SYM_PYMT_TIS_MUP_Payments();
        }

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            if (document.MAINFORM.X103_ACC_BKSW_57A.value != "") {
                SYM_PYMT_Chg_X103_ACC_BKSW_57A();
            }
        }

        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "" && document.MAINFORM.AUTO_CREATED.value == "Yes") {
            if (document.MAINFORM.X103_ORDCUACNO_50A.value.substring(0, 14) != "Not Applicable") {
                SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', 'SYF_PYMT_OT_ProtOrdCust()', 'SYF_PYMT_OT_Clr_Ord_Cust_RegDD()', 'TRUE');
            } else {
                document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.X103_ORDCUACNO_50A.value.substring(14).trim();
            }

        } else {
            if (document.MAINFORM.X103_ORDCUACNO_50A.value != "" && document.MAINFORM.AUTO_CREATED.value == "Yes") {
                if (document.MAINFORM.APP_TYPE.value.toUpperCase() == 'CUSTOMER') {
                    if (document.MAINFORM.X103_ORDCUACNO_50A.value.substring(0, 14) != "Not Applicable") {
                        SYS_GetCUBK('X103_ORDCUACNO_50A_NBOL', 'X103_ORDCUACNO_50A', 'SYF_PYMT_OT_Chg_ORDCU_ID_50A()', '', 'TRUE');
                    } else {
                        document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.X103_ORDCUACNO_50A.value.substring(14).trim();
                    }
                }
            }
        }

        if (document.MAINFORM.AUTO_CREATED.value == "Yes") {
            document.MAINFORM.X103_INSTRCODE1_23E.value = Instruction23E;
            SYF_PYMT_ProtectFieldsForNBOL();
        }

        //Add by Amy in 20111107.
        SYF_PYMT_MERGE_FLAG_103();
        FLD_PYMT_X202_MEDI_BKSW_56A_onchange();
        // SYM_PYMT_Chg_BENE_AC_TYPE();//Added--
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == '') { //added
            SYT_ChangeFldClass(document.MAINFORM.X202_MEDI_BKID_56A, "P");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_DET_CHG_71A = function() {
    try {

        var ChgSend; // Utility Auto Fix Comments
        var PymtCommChg; // Utility Auto Fix Comments
        var RecChgsObj; // Utility Auto Fix Comments
        var collectCcy; // Utility Auto Fix Comments
        var foreignCustCcy; // Utility Auto Fix Comments
        var sDetChg; // Utility Auto Fix Comments
        var swift_chg; // Utility Auto Fix Comments
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY;
        // Local Bank Payment Instructions
        SYS_GetDataBySSS_S('System_LocalBankPaymentInstruction_TRX', 'CR_CCY;AC_WT_INST_CNTY_CODE;COUNTRY;C_MAIN_REF');
        SYM_PYMT_TIS_MUP_Payments();

        Chg.calculate(['SWIFT_CHG_PYT']);
        sDetChg = document.MAINFORM.X103_DET_CHG_71A.value;
        swift_chg = Chg.Screen.getTrxChargeByCommCode('SWIFT_CHG_PYT');
        PymtCommChg = Chg.Screen.getTrxChargeByCommCode(chargeCode1);
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");

        if (sDetChg == "OUR") {
            SYM_PYMT_setRecChgs();
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'L';
            swift_chg.setChargeFor("L");
            PymtCommChg.setChargeFor("L");
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'onchange');
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGCCY71F);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGAMT71F);
            document.MAINFORM.X103_RECCHGCCY_71G.value = document.MAINFORM.CR_CCY.value;
            SYM_PYMT_disableField(document.MAINFORM.X103_RECCHGCCY_71G);
            SYM_PYMT_disableField(document.MAINFORM.X103_RECCHGAMT_71G, "P");
            document.MAINFORM.X103_RECCHGAMT_71G.value = SYT_AmtFormat(document.MAINFORM.X103_RECCHGCCY_71G.value, document.MAINFORM.X103_RECCHGAMT_71G.value);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "M");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN, "O");
            if (document.MAINFORM.AUTO_CREATED.value != "Yes") {
                document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = SYS_LOCAL_CCY;
            }
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'onchange');
            swift_chg.unprotectChargeAt();
            PymtCommChg.unprotectChargeAt();
            RecChgsObj = Chg.Screen.getTrxChargeByCommCode('OTT_71GCHG');
            RecChgsObj.protectChargeAt();
        } else if (sDetChg == "SHA") {
            SYM_PYMT_setRecChgs();
            swift_chg.unprotectChargeAt();
            PymtCommChg.unprotectChargeAt();
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'L';
            swift_chg.setChargeFor("L");
            PymtCommChg.setChargeFor("L");
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'onchange');
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGCCY71F);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_SENDCHGAMT71F);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGCCY_71G);
            SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGAMT_71G);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "M");
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "M");
            SYM_PYMT_enableField(document.MAINFORM.CHG_GETAC_BTN, "O");
            if (document.MAINFORM.AUTO_CREATED.value != "Yes") {
                document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = SYS_LOCAL_CCY;
            }
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'onchange');
        } else if (sDetChg == "BEN") {
            Chg.Screen.mapForeignCust("FOR_CHG_ID", "FOR_CHG_NAME", "CR_CCY", "FOR_CHG_AC");
            if (!OTT_MIN_FLAG) {
                SYM_PYMT_setRecChgs();
                if (document.MAINFORM.AUTO_CREATED.value != "Yes") {
                    document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = SYS_LOCAL_CCY;
                }
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, "P");
                document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, "P");
                SYM_PYMT_disableField(document.MAINFORM.CHG_GETAC_BTN);
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'onchange');
                collectCcy = Chg.Screen.getCollectCcy();
                foreignCustCcy = Chg.Screen.getNostroCcy();
                SYT_calForeignColl2PayRate(collectCcy, foreignCustCcy);


                document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'F';
                EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'onchange');
                if (swift_chg.getChargeAt() == "3") {
                    swift_chg.setChargeFor("F");
                    swift_chg.setChargeAt("0");
                    Chg.calculate(['SWIFT_CHG_PYT']);
                }

                swift_chg.setChargeFor("F");
                swift_chg.setChargeAt("0");
                PymtCommChg.setChargeFor("F");
                PymtCommChg.setChargeAt("0");

                if ((SYS_FUNCTION_TYPE == 'KP' || SYS_FUNCTION_TYPE == 'EC') && SYS_FUNCTION_NAME != "Cancel_OTT") {
                    if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
                        Chg.calculate([chargeCode1], document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
                    } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
                        Chg.calculate([chargeCode1], document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
                    }
                }

                ChgSend = Chg.Screen.getForeignPayTotalAmt();
                document.MAINFORM.X103_SENDCHGCCY71F.value = document.MAINFORM.CR_CCY.value;
                SYM_PYMT_disableField(document.MAINFORM.X103_SENDCHGCCY71F);
                SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, "P");
                SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGCCY_71G);
                SYM_PYMT_clsdisableField(document.MAINFORM.X103_RECCHGAMT_71G);
                document.MAINFORM.X103_SENDCHGAMT71F.value = SYT_AmtFormat(document.MAINFORM.X103_SENDCHGCCY71F.value, ChgSend);
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
                swift_chg.protectChargeAt();
                PymtCommChg.protectChargeAt();
            } else {
                alert("The BEN option is not allowed,since the Payment Amount is less."); // Utility Auto Fix Comments
                document.MAINFORM.X103_DET_CHG_71A.value = "SHA";
                EEHtml.fireEvent(document.MAINFORM.X103_DET_CHG_71A, "onchange");
            }
        }

        SYM_PYMT_Set_ChgCashInd();
        SYT_Audit_Update_Charges();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var AccountType; // Utility Auto Fix Comments
        var CFCComplianceCheck; // Utility Auto Fix Comments
        var Cash_chkMult; // Utility Auto Fix Comments
        var _Paymentdetail; // Utility Auto Fix Comments
        var Field72Line; // Utility Auto Fix Comments
        var Int_Acct_Ccy_Loc; // Utility Auto Fix Comments
        var Int_Acct_Loc; // Utility Auto Fix Comments
        var Int_Amt_Loc; // Utility Auto Fix Comments
        var Int_Cash_Ind_Loc; // Utility Auto Fix Comments
        var Int_Override_Ind_Loc; // Utility Auto Fix Comments
        var PymtCommChg; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var bkeFlag; // Utility Auto Fix Comments
        var bkeFlag202; // Utility Auto Fix Comments
        var counterT; // Utility Auto Fix Comments
        var crAmt; // Utility Auto Fix Comments
        var dup; // Utility Auto Fix Comments
        var existingAccount; // Utility Auto Fix Comments
        var gapi_ind; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var indexArr; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var overDra_chkMult; // Utility Auto Fix Comments
        var sDetChg; // Utility Auto Fix Comments
        var sResult; // Utility Auto Fix Comments
        var swiftChg; // Utility Auto Fix Comments
        if (!SYS_Batch_CheckFieldValue()) {
            return false;
        }
        if (!SYM_PYMT_match_trn_and_settlement_amts()) {
            return false;
        }
        if (document.MAINFORM.X103_VALUE_DT_32A.value == '') {
            alert("The transaction cannot be processed without the value date");
            return false;
        } else {
            sResult = SYM_PYMT_Chk_ValueDate_CutOffTime();
            if (sResult == false) {
                return false;
            }
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
        if (((document.MAINFORM.CR_CCY.value == "MUR" || document.MAINFORM.CR_CCY.value == "TZS") && (document.MAINFORM.AC_WT_INST_CNTY_CODE.value == document.MAINFORM.CR_CCY.value.substring(0, 2))) == false) {
            SYM_PYMT_chk_CrAcctNo();
        }
        SYF_PYMT_Chk_ChrgAcctNo();
        SYT_Chk_FormAdv_CashInd();
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
        }
        if (document.MAINFORM.X103_DET_CHG_71A.value == "BEN" || parseInt(Chg.Screen.getLocalPayChgTotalAmt(), 0) == 0) {
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
            document.MAINFORM.INT_AC_IDENTIFIER.value = document.MAINFORM.INT_AC_IDENTIFIER.value + document.MAINFORM.CHG_OVERRIDE_IND.value + ";";
        }
        document.MAINFORM.INT_ACCOUNTCOUNT.value = Records.length + 1;
        document.MAINFORM.CPYT_DR_AC_TYPE.value = document.MAINFORM.CPYT_DR_AC_TYPE.value + "CUSTOMER" + ";";
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
        document.MAINFORM.INT_FOR_BANK_SW.value = document.MAINFORM.X103_BK2BK_INF1_72.value;
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
        if (document.MAINFORM.CHG_OVERRIDE_IND.value == 'No' && document.MAINFORM.CHG_CASH_IND.value == 'No' && parseInt(Chg.Screen.getLocalPayChgTotalAmt(), 0) > 0) {
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
        document.MAINFORM.GAPI_IND_FLG.value = gapi_ind;
        if (document.MAINFORM.X103_INSTRCODE1_23E.value != '' && document.MAINFORM.X103_INSTRCODE2_23E.value != '') {
            document.MAINFORM.X103_INSTRCODE_23E.value = document.MAINFORM.X103_INSTRCODE1_23E.value + '/' + document.MAINFORM.X103_INSTRCODE2_23E.value;
        } else {
            document.MAINFORM.X103_INSTRCODE_23E.value = document.MAINFORM.X103_INSTRCODE1_23E.value;
        }
        SYM_PYMT_Set_Mt103Amt();
        SYM_PYMT_Set_OverrideFlag();
        crAmt = document.MAINFORM.CR_AMT.value;
        crAmt = crAmt.replace(/,/g, '');
        if (crAmt.length > 15) {
            alert("The Length of Credit Amount is over the limit of SWIFT Standard");
            return false;
        }
        swiftChg = Chg.Screen.getTrxChargeByCommCode('SWIFT_CHG_PYT');
        PymtCommChg = Chg.Screen.getTrxChargeByCommCode(chargeCode1);
        document.MAINFORM.SWT_COMM_TMP.value = swiftChg.getCollectAmt();
        document.MAINFORM.PAY_COMM_TMP.value = PymtCommChg.getCollectAmt();
        sDetChg = document.MAINFORM.X103_DET_CHG_71A.value;
        if (sDetChg == "OUR") {
            document.MAINFORM.X103_SETT_AMT_32A.value = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value) + SYS_BeFloat(document.MAINFORM.X103_RECCHGAMT_71G.value);
            document.MAINFORM.TOT_DB_AMT.value = SYS_BeFloat(document.MAINFORM.DB_AMT.value) + SYS_BeFloat(document.MAINFORM.SWT_COMM_TMP.value) + SYS_BeFloat(document.MAINFORM.PAY_COMM_TMP.value);
        } else if (sDetChg == "SHA") {
            document.MAINFORM.TOT_DB_AMT.value = SYS_BeFloat(document.MAINFORM.DB_AMT.value);
            document.MAINFORM.TOT_CHRG_AMT.value = SYS_BeFloat(document.MAINFORM.SWT_COMM_TMP.value) + SYS_BeFloat(document.MAINFORM.PAY_COMM_TMP.value);
        } else if (sDetChg == "BEN") {
            document.MAINFORM.X103_SETT_AMT_32A.value = SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value) - SYS_BeFloat(document.MAINFORM.X103_SENDCHGAMT71F.value);
            document.MAINFORM.TOT_DB_AMT.value = SYS_BeFloat(document.MAINFORM.DB_AMT.value);
            document.MAINFORM.TOT_CHRG_AMT.value = SYS_BeFloat(document.MAINFORM.SWT_COMM_TMP.value) + SYS_BeFloat(document.MAINFORM.PAY_COMM_TMP.value);
        }
        SYM_PYMT_Chk_SwiftTags_103();
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value != "") {
            SYM_PYMT_Set_202Values();
            SYM_PYMT_Set_SwiftTags_202();
        }
        document.MAINFORM.CURRNT_STATUS.value = 'OTT_CAPTURE';
        document.MAINFORM.NXT_STATUS.value = 'OTT_RELEASE';
        document.MAINFORM.TOT_DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.TOT_DB_AMT.value);
        dup = SYM_PYMT_Chk_Duplicate_Capt('14');
        if (dup == false) {
            return false;
        }
        document.MAINFORM.REMIT_INFO_TMP_70.value = '';
        document.MAINFORM.REMIT_INFO_TMP_70.value = document.MAINFORM.X103_REMIT_INF1_70.value + document.MAINFORM.X103_REMIT_INF2_70.value + document.MAINFORM.X103_REMIT_INF3_70.value + document.MAINFORM.X103_REMIT_INF4_70.value;
        document.MAINFORM.CHG_VALUE_DATE.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        document.MAINFORM.X103_TAG_50A.value = 'F';
        SYM_PYMT_Copy50Fvalues();
        SYM_PYMT_set50FValues();
        SYM_PYMT_move_notes_to_history();
        if (SYS_BANK_COUNTRY == "ZA") {
            CFCComplianceCheck = SYF_PYMT_CFCCompliancy();
            if (!CFCComplianceCheck) {
                return false;
            } else {
                for (k = 1; k < 6; k++) {
                    Field72Line = "X103_BK2BK_INF" + k + "_72";
                    if (k == 1) {
                        Field72Line = "X103_BK2BK_INF1_72A";
                    }
                    SYF_PYMT_Field72ADCAppend(Field72Line, k);
                }
                if (EEHtml.getElementById("X103_BK2BK_INF1_72A").options[EEHtml.getElementById("X103_BK2BK_INF1_72A").selectedIndex].text != "") {
                    EEHtml.getElementById("X103_BK2BK_INF1_72").value = EEHtml.getElementById("X103_BK2BK_INF1_72A").options[EEHtml.getElementById("X103_BK2BK_INF1_72A").selectedIndex].text;
                }
            }
        }
        return true;
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        var arr;
        var code;
        var i;
        var objLocPymtChrgs;
        var splitSettVal;
        SYM_PYMT_REF_20();
        if (document.MAINFORM.AUTO_CREATED.value != "Yes") {
            document.MAINFORM.NOTES.value = "";
        } else {
            arr = document.MAINFORM.SETT_DET_INFO_AUTO.value;
            document.MAINFORM.TMP_PURPOSE.value = "";
            splitSettVal = arr.split("|");
            for (i = 0; i < splitSettVal.length; i++) {
                if (splitSettVal[i].substring(0, splitSettVal[i].indexOf(":")) == "CRAFRICA_PURPS_DESC") {
                    code = splitSettVal[i].substring(splitSettVal[i].indexOf(":") + 1);
                    if (code != "null" && code != "") {
                        document.MAINFORM.TMP_PURPOSE.value = code;
                    } else {
                        document.MAINFORM.TMP_PURPOSE.value = "";
                    }
                }
            }
        }
        SYT_ChangeFldClass(document.MAINFORM.X103_50_BTN, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_50_ADD_BTN, "P");
        document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.X103_INSTR_AMT_33B.value = DecimalFormat(document.MAINFORM.X103_INSTR_AMT_33B.value, findDecFromCCY(document.MAINFORM.X103_INSTR_CCY_33B.value));
        document.MAINFORM.X103_SETT_AMT_32A.value = DecimalFormat(document.MAINFORM.X103_SETT_AMT_32A.value, findDecFromCCY(document.MAINFORM.X103_SETT_CCY_32A.value));
        //document.MAINFORM.X202_AMT_32A.value = DecimalFormat(document.MAINFORM.X202_AMT_32A.value,findDecFromCCY(document.MAINFORM.X202_CCY_32A.value));
        Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
        Chg.init('TT Selling', 'TT Selling', 'TT Selling', 'TT Selling');
        Chg.calculate(['SWIFT_CHG_PYT']);
        Chg.calculate(['PYMT_OT_LOC_CHG']);
        objLocPymtChrgs = Chg.Screen.getTrxChargeByCommCode('PYMT_OT_LOC_CHG');
        objLocPymtChrgs.reset();
        objLocPymtChrgs.hide();
        SYM_PYMT_Get_CutOff();
        SYM_PYMT_Chg_CPYT_PAY_COV_MSG();
        //CR_CCY_onchange();
        document.MAINFORM.SYS_BUSI_UNIT.value = SYS_BUSI_UNIT;
        //SYS_GetCUBK('BU_SWIFTADD', 'SYS_BUSI_UNIT', 'SYF_PYMT_Get_OrdInsDetails()', '', 'TRUE');

        if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
            document.MAINFORM.LC_AMT.value = document.MAINFORM.DB_CALC_AMT.value;
            document.MAINFORM.LC_CCY.value = document.MAINFORM.DB_CCY.value;
        } else {
            document.MAINFORM.LC_AMT.value = document.MAINFORM.CR_CALC_AMT.value;
            document.MAINFORM.LC_CCY.value = document.MAINFORM.CR_CCY.value;
        }
        document.MAINFORM.LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_OrdInsDetails = function() {
    try {

        document.MAINFORM.AVAL_WT_BK_ID.value = "";
        SYT_getIdFromBIC(document.MAINFORM.X103_ORD_BKSW_52A, document.MAINFORM.AVAL_WT_BK_ID);
        document.MAINFORM.X103_ORD_BKID_52A.value = document.MAINFORM.AVAL_WT_BK_ID.value;
        document.MAINFORM.AVAL_WT_BK_ID.value = "";
        document.MAINFORM.X103_TAG_52A.value = 'A';
        SYM_PYMT_Chg_X103_ORD_BKID_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Init_EC = function() {
    try {

        if (document.MAINFORM.AUTO_CREATED.value != "Yes") {
            document.MAINFORM.NOTES.value = "";
        }

        SYT_ChangeFldClass(document.MAINFORM.X103_50_BTN, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_50_ADD_BTN, "P");
        document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.X103_INSTR_AMT_33B.value = DecimalFormat(document.MAINFORM.X103_INSTR_AMT_33B.value, findDecFromCCY(document.MAINFORM.X103_INSTR_CCY_33B.value));
        document.MAINFORM.X103_SETT_AMT_32A.value = DecimalFormat(document.MAINFORM.X103_SETT_AMT_32A.value, findDecFromCCY(document.MAINFORM.X103_SETT_CCY_32A.value));
        //document.MAINFORM.X202_AMT_32A.value = DecimalFormat(document.MAINFORM.X202_AMT_32A.value,findDecFromCCY(document.MAINFORM.X202_CCY_32A.value));
        Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
        Chg.init('TT Selling', 'TT Selling', 'TT Selling', 'TT Selling');
        //Chg.calculate(['SWIFT_CHG_PYT']);
        SYM_PYMT_Get_CutOff();
        SYM_PYMT_Chg_CPYT_PAY_COV_MSG();
        document.MAINFORM.SYS_BUSI_UNIT.value = SYS_BUSI_UNIT;
        SYS_GetCUBK('BU_SWIFTADD', 'SYS_BUSI_UNIT', 'SYF_PYMT_Get_OrdInsDetails()', '', 'TRUE');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
        if (SYS_BANK_COUNTRY == 'MU') {
            SYT_Charge_Assign('OT');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'OTT_CAPTURE';
        document.MAINFORM.NXT_STATUS.value = 'OTT_RELEASE';

        SYM_PYMT_move_notes_to_history();
        if (document.MAINFORM.AUTO_CREATED.value != "Yes") {
            document.MAINFORM.NOTES.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chk_ChrgAcctNo = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        document.MAINFORM.C_CUST_ID.value = '';
        if (document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value != '') {
            if (document.MAINFORM.X103_DET_CHG_71A.value != "BEN") {
                if (document.MAINFORM.CHG_CASH_IND.value != "Yes") {
                    if (document.MAINFORM.RECORDER_TYPE.value == "Customer") {
                        //Sql_Cond = "C_CURRENCY=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value + "'" + " AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_AC_NUMBER=" + "'" + document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value + "'";
                        //Field_List = "C_CUST_ID";
                        //Mapping_List = "C_CUST_ID";
                        SYS_GetTableDataByRule_S('SYF_PYMT_CompOutPmt_SYF_PYMT_Chk_ChrgAcctNo_1', '1', 'TRUE');
                        if (document.MAINFORM.C_CUST_ID.value != document.MAINFORM.X103_ORDCU_ID_50A.value) {
                            alert('The Charges Account number is invalid ');
                            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
                            return false;
                        }
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYT_Audit_value_assign_WithSett();
        SYT_Audit_Main();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_OrdCustForForm = function() {
    try {

        /*document.MAINFORM.FORM_CUST_ACNO.value = document.MAINFORM.X103_ORDCUACNO_50A.value.substring(1);
document.MAINFORM.FORM_CUST_NM.value = document.MAINFORM.X103_ORDCU_NM_50A.value.substring(2);
document.MAINFORM.FORM_CUST_ADD1.value = document.MAINFORM.X103_ORDCUADD1_50A.value.substring(2);
document.MAINFORM.FORM_CUST_ADD2.value = document.MAINFORM.X103_ORDCUADD2_50A.value.substring(2);
document.MAINFORM.FORM_CUST_ADD3.value = document.MAINFORM.X103_ORDCUADD3_50A.value.substring(5);	
*/
        document.MAINFORM.FORM_CUST_ACNO.value = document.MAINFORM.X103_ORDCUACNO_50A.value;
        document.MAINFORM.FORM_CUST_NM.value = document.MAINFORM.X103_ORDCU_NM_50A.value;
        document.MAINFORM.FORM_CUST_ADD1.value = document.MAINFORM.X103_ORDCUADD1_50A.value;
        document.MAINFORM.FORM_CUST_ADD2.value = document.MAINFORM.X103_ORDCUADD2_50A.value;
        document.MAINFORM.FORM_CUST_ADD3.value = document.MAINFORM.X103_ORDCUADD3_50A.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_InitValues = function() {
    try {

        if (document.MAINFORM.AUTO_CREATED.value != "Yes") {
            document.MAINFORM.BENE_AC_TYPE.value = 'Other';
            document.MAINFORM.BENE_CNTY_RES.value = '';
            document.MAINFORM.X103_DET_CHG_71A.value = 'SHA';
        }

        document.MAINFORM.X103_BKOP_CODE_23B.value = 'CRED';

        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'EC') {
            return;
        } else {
            SYF_PYMT_Chg_X103_DET_CHG_71A();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_CFCCompliancy = function() {
    try {

        var CrAmt; // Utility Auto Fix Comments
        var DbAmt; // Utility Auto Fix Comments
        var Int_Acct_Ccy_Loc; // Utility Auto Fix Comments
        var Int_Acct_Loc; // Utility Auto Fix Comments
        var Int_Amt_Loc; // Utility Auto Fix Comments
        var Int_Cash_Ind_Loc; // Utility Auto Fix Comments
        var Int_Override_Ind_Loc; // Utility Auto Fix Comments
        var Int_Pay_Ccy; // Utility Auto Fix Comments
        var Int_Sett_Ccy; // Utility Auto Fix Comments
        var Pay_Curr; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var SWIFTAddressCntyCode; // Utility Auto Fix Comments
        var Sett_Curr; // Utility Auto Fix Comments
        var _Paymentdetail; // Utility Auto Fix Comments
        var bIsCustomerAccCFC; // Utility Auto Fix Comments
        var counterT; // Utility Auto Fix Comments
        var existingAccount; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var indexArr; // Utility Auto Fix Comments
        var objectField72Line1; // Utility Auto Fix Comments
        var objectSwiftAddress; // Utility Auto Fix Comments
        objectField72Line1 = EEHtml.getElementById("X103_BK2BK_INF1_72A");
        SWIFTAddressCntyCode = "";

        if (document.MAINFORM.X103_ACC_BKSW_57A.value != '') {
            objectSwiftAddress = EEHtml.getElementById("X103_ACC_BKSW_57A");
            SWIFTAddressCntyCode = objectSwiftAddress.value.substring(4, 6);
        }

        bIsCustomerAccCFC = SYF_PYMT_IsCustomerAccCFC();

        if (document.MAINFORM.APP_TYPE.value == "CUSTOMER" && SWIFTAddressCntyCode == "ZA" && bIsCustomerAccCFC) {
            if (document.MAINFORM.MLT_STLMT.value == "No") {
                _Paymentdetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
                Records = SYS_getRecords(_Paymentdetail); // Utility Auto Fix Comments

                Int_Sett_Ccy = new Array();
                Int_Pay_Ccy = new Array();
                Record = Records[0];

                Int_Sett_Ccy[0] = SYS_getValFromRec(Record, "SETT_CCY");
                Int_Pay_Ccy[0] = SYS_getValFromRec(Record, "PAY_CCY");

                if (Int_Sett_Ccy[0] == null || Int_Pay_Ccy[0] == null) {
                    alert("CFC Compliance error, Settlement not captured.");
                    return false;
                }
                if (objectField72Line1.value == "") {
                    alert("CFC Compliance error, Field [72] Line 1 can't be empty."); // Utility Auto Fix Comments

                    return false;
                }

                if (Int_Pay_Ccy != "ZAR" && Int_Sett_Ccy[0] == "ZAR") {
                    if (objectField72Line1.value == "/REC/SPOT" || objectField72Line1.value == "/REC/HEDGE" || objectField72Line1.value == "/REC/EXCON APPROVAL") {
                        CrAmt = 0;
                        DbAmt = 0;
                    }

                    CrAmt = SYS_BeFloat(EEHtml.getElementById("CR_CALC_AMT").value);
                    DbAmt = SYS_BeFloat(EEHtml.getElementById("DB_CALC_AMT").value);

                    if (objectField72Line1.value == "/REC/SPOT" || objectField72Line1.value == "/REC/HEDGE") {
                        if (SYS_BeFloat(CrAmt) > 0) {
                            EEHtml.getElementById("X103_BK2BK_INF1_72").value = EEHtml.getElementById("X103_BK2BK_INF1_72A").value + ' ' + EEHtml.getElementById("CR_CCY").value + ' ' + EEHtml.getElementById("CR_CALC_AMT").value;
                        } else {
                            EEHtml.getElementById("X103_BK2BK_INF1_72").value = EEHtml.getElementById("X103_BK2BK_INF1_72A").value + ' ' + EEHtml.getElementById("DB_CCY").value + ' ' + EEHtml.getElementById("DB_CALC_AMT").value;
                        }
                    }

                    if (!EEHtml.getElementById("X103_BK2BK_72_ORD_CUST_BEN").checked && (objectField72Line1.value == "/REC/SPOT" || objectField72Line1.value == "/REC/HEDGE" || objectField72Line1.value == "/REC/EXCON APPROVAL")) {
                        alert("CFC Compliance error, " + objectField72Line1.value + " applicable when the Ordering Customer and Beneficiary are the same.");
                        return false;
                    } else {
                        if (EEHtml.getElementById("X103_BK2BK_72_ORD_CUST_BEN").checked && (objectField72Line1.value == "/REC/TRF 4 FREIGHT" || objectField72Line1.value == "/REC/TRF 4 COMMODITIES" || objectField72Line1.value == "/REC/EXCON APPROVAL" || objectField72Line1.value == "/REC/DTCUS")) {
                            alert("CFC Compliance error, " + objectField72Line1.value + " applicable when the Ordering Customer and Beneficiary are not the same.");
                            return false;
                        }
                    }
                }

                if (Int_Sett_Ccy[0] != "ZAR") {
                    if (!EEHtml.getElementById("X103_BK2BK_72_ORD_CUST_BEN").checked && (objectField72Line1.value == "/REC/TRF FROM ABROAD" || objectField72Line1.value == "/REC/EXCON APPROVAL")) {
                        alert("CFC Compliance error, " + objectField72Line1.value + " applicable when the Ordering Customer and Beneficiary are the same.");
                        return false;
                    }
                    if (EEHtml.getElementById("X103_BK2BK_72_ORD_CUST_BEN").checked && (objectField72Line1.value == "/REC/EXCON APPROVAL" || objectField72Line1.value == "/REC/TRF 4 FREIGHT" || objectField72Line1.value == "/REC/TRF 4 COMMODITIES" || objectField72Line1.value == "/REC/NTNRC" || objectField72Line1.value == "/REC/NTNRB" || objectField72Line1.value == "/REC/DTCUS")) {
                        alert("CFC Compliance error, " + objectField72Line1.value + " applicable when the Ordering Customer and Beneficiary are not the same.");
                        return false;
                    }
                }
            }

            //Multiple Settlements RUles
            if (document.MAINFORM.MLT_STLMT.value == "Yes") {

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

                if (objectField72Line1.value == "") {
                    alert("CFC Compliance error, Field [72] Line 1 can't be empty."); // Utility Auto Fix Comments
                    SYF_PYMT_Field72Checker();
                    return false;
                }

                for (i = 0; i < Records.length; i++) {
                    Record = Records[i];
                    Int_Acct_Loc[i] = SYS_getValFromRec(Record, "CPYT_DR_AC");
                    Int_Amt_Loc[i] = SYS_getValFromRec(Record, "SETT_AMT");
                    Int_Acct_Ccy_Loc[i] = SYS_getValFromRec(Record, "SETT_CCY");
                    Int_Cash_Ind_Loc[i] = SYS_getValFromRec(Record, "MUL_CASH_IND");
                    Int_Override_Ind_Loc[i] = SYS_getValFromRec(Record, "MUL_OVRIDE");
                }

                Sett_Curr = "";
                Pay_Curr = "";

                CrAmt = 0;
                DbAmt = 0;

                if (Records.length == 0) {
                    alert("CFC Compliance error, Settlements not captured.");
                    return false;

                } else {
                    for (i = 0; i < Records.length; i++) {
                        Record = Records[i];

                        Sett_Curr = SYS_getValFromRec(Record, "SETT_CCY");
                        Pay_Curr = SYS_getValFromRec(Record, "PAY_CCY");

                        if (Sett_Curr == null || Pay_Curr == null) {
                            alert("CFC Compliance error, Settlements not captured.");
                            return false;
                        }

                        CrAmt = SYS_BeFloat(EEHtml.getElementById("CR_CALC_AMT").value);
                        DbAmt = SYS_BeFloat(EEHtml.getElementById("DB_CALC_AMT").value);

                        if (EEHtml.getElementById("X103_BK2BK_72_ORD_CUST_BEN").checked) {
                            if (Sett_Curr == "ZAR" && Pay_Curr != "ZAR") {
                                if (EEHtml.getElementById("X103_BK2BK_INF1_72A").value == "/REC/SPOT") {
                                    if (SYS_BeFloat(CrAmt) > 0) {
                                        EEHtml.getElementById("X103_BK2BK_INF1_72").value = EEHtml.getElementById("X103_BK2BK_INF1_72A").value + ' ' + EEHtml.getElementById("CR_CCY").value + ' ' + EEHtml.getElementById("CR_CALC_AMT").value;
                                    } else {
                                        EEHtml.getElementById("X103_BK2BK_INF1_72").value = EEHtml.getElementById("X103_BK2BK_INF1_72A").value + ' ' + EEHtml.getElementById("DB_CCY").value + ' ' + EEHtml.getElementById("DB_CALC_AMT").value;
                                    }
                                } else {
                                    alert("CFC Compliance rule failed, Field [72] must be /REC/SPOT");
                                    return false;
                                }
                            }

                            if (Sett_Curr != "ZAR" && Pay_Curr != "ZAR") {
                                if (EEHtml.getElementById("X103_BK2BK_INF1_72A").value == "/REC/SPOT") {
                                    if (SYS_BeFloat(CrAmt) > 0) {
                                        EEHtml.getElementById("X103_BK2BK_INF1_72").value = EEHtml.getElementById("X103_BK2BK_INF1_72A").value + ' ' + EEHtml.getElementById("CR_CCY").value + ' ' + EEHtml.getElementById("CR_CALC_AMT").value;
                                    } else {
                                        EEHtml.getElementById("X103_BK2BK_INF1_72").value = EEHtml.getElementById("X103_BK2BK_INF1_72A").value + ' ' + EEHtml.getElementById("DB_CCY").value + ' ' + EEHtml.getElementById("DB_CALC_AMT").value;
                                    }
                                    if (EEHtml.getElementById("X103_BK2BK_INF1_72A").value != "/REC/TRF FROM ABROAD") {
                                        alert('CFC Compliance error, Line-2 on Field [72] must be /REC/TRF FROM ABROAD.');
                                        return false;
                                    }
                                } else {
                                    EEHtml.getElementById("X103_BK2BK_INF1_72").value = EEHtml.getElementById("X103_BK2BK_INF1_72A").value;
                                }
                            }
                        } else {
                            if (EEHtml.getElementById("X103_BK2BK_INF1_72A").value == "/REC/SPOT" || EEHtml.getElementById("X103_BK2BK_INF1_72A").value == "/REC/TRF FROM ABROAD" || EEHtml.getElementById("X103_BK2BK_INF1_72A").value == "/REC/HEDGE") {
                                alert("CFC Compliance error, Only following options can selected on Line 1 Field [72]: " + '\n' + "/REC/EXCON APPROVAL" + '\n' + "/REC/TRF 4 FREIGHT" + '\n' + "/REC/TRF 4 COMMODITIES" + '\n' + "/REC/NTNRC" + '\n' + "/REC/NTNRB" + '\n' + "/REC/DTCUS");
                                return false;
                            } else {
                                EEHtml.getElementById("X103_BK2BK_INF1_72").value = EEHtml.getElementById("X103_BK2BK_INF1_72A").value;
                            }
                        }
                    }
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Field72ADCAppend = function(Field72Line, FieldCount) {
    try {

        var CrAmt; // Utility Auto Fix Comments
        var DbAmt; // Utility Auto Fix Comments
        var objectField72Line; // Utility Auto Fix Comments
        CrAmt = 0;
        DbAmt = 0;
        objectField72Line = EEHtml.getElementById(Field72Line).value;

        if ((objectField72Line == '') || (objectField72Line == '/REC/EXCON APPROVAL' || objectField72Line == '/REC/SPOT' || objectField72Line == '/REC/HEDGE')) {
            if (objectField72Line == '') {
                if (FieldCount == 1 && Field72Line == "X103_BK2BK_INF1_72A") {

                    Field72Line = "X103_BK2BK_INF1_72";
                    objectField72Line = EEHtml.getElementById(Field72Line).value;
                }

                if (objectField72Line == '/REC/SPOT' || objectField72Line == '/REC/HEDGE') {
                    CrAmt = SYS_BeFloat(EEHtml.getElementById("CR_CALC_AMT").value);
                    DbAmt = SYS_BeFloat(EEHtml.getElementById("DB_CALC_AMT").value);

                    if (SYS_BeFloat(CrAmt) > 0) {
                        EEHtml.getElementById(Field72Line).value = EEHtml.getElementById(Field72Line).value + ' ' + EEHtml.getElementById("CR_CCY").value + ' ' + EEHtml.getElementById("CR_CALC_AMT").value;
                    } else {
                        EEHtml.getElementById(Field72Line).value = EEHtml.getElementById(Field72Line).value + ' ' + EEHtml.getElementById("DB_CCY").value + ' ' + EEHtml.getElementById("DB_CALC_AMT").value;
                    }
                }
            } else {
                if (Field72Line == "X103_BK2BK_INF1_72A") {
                    if (objectField72Line == '/REC/EXCON APPROVAL') {
                        EEHtml.getElementById(Field72Line).options[EEHtml.getElementById(Field72Line).selectedIndex].text = EEHtml.getElementById(Field72Line).value + ' ADC ' + ' ' + EEHtml.getElementById("X103_BK2BK_72_AUTH_DEALER_CD").value + ' ' + EEHtml.getElementById("X103_BK2BK_72_APPROVAL_NO").value;
                    } else {
                        CrAmt = SYS_BeFloat(EEHtml.getElementById("CR_CALC_AMT").value);
                        DbAmt = SYS_BeFloat(EEHtml.getElementById("DB_CALC_AMT").value);

                        if (SYS_BeFloat(CrAmt) > 0) {
                            if (EEHtml.getElementById(Field72Line).options[EEHtml.getElementById(Field72Line).selectedIndex].text != "") {
                                EEHtml.getElementById(Field72Line).options[EEHtml.getElementById(Field72Line).selectedIndex].text = EEHtml.getElementById(Field72Line).value + ' ' + EEHtml.getElementById("CR_CCY").value + ' ' + EEHtml.getElementById("CR_CALC_AMT").value;
                            } else {
                                EEHtml.getElementById(Field72Line).value = EEHtml.getElementById(Field72Line).value + ' ' + EEHtml.getElementById("DB_CCY").value + ' ' + EEHtml.getElementById("DB_CALC_AMT").value;
                            }
                        } else {
                            if (EEHtml.getElementById(Field72Line).options[EEHtml.getElementById(Field72Line).selectedIndex].text != "") {
                                EEHtml.getElementById(Field72Line).options[EEHtml.getElementById(Field72Line).selectedIndex].text = EEHtml.getElementById(Field72Line).value + ' ' + EEHtml.getElementById("DB_CCY").value + ' ' + EEHtml.getElementById("DB_CALC_AMT").value;
                            } else {
                                EEHtml.getElementById(Field72Line).value = EEHtml.getElementById(Field72Line).value + ' ' + EEHtml.getElementById("DB_CCY").value + ' ' + EEHtml.getElementById("DB_CALC_AMT").value;
                            }
                        }
                    }
                } else {
                    if (objectField72Line == '/REC/EXCON APPROVAL') {
                        EEHtml.getElementById(Field72Line).value = EEHtml.getElementById(Field72Line).value + ' ADC ' + ' ' + EEHtml.getElementById("X103_BK2BK_72_AUTH_DEALER_CD").value + ' ' + EEHtml.getElementById("X103_BK2BK_72_APPROVAL_NO").value;
                    }
                    if (FieldCount == 1 && Field72Line == "X103_BK2BK_INF1_72A") {

                        Field72Line = "X103_BK2BK_INF1_72";
                        objectField72Line = EEHtml.getElementById(Field72Line).value;
                    }

                    if (objectField72Line == '/REC/SPOT' || objectField72Line == '/REC/HEDGE') {
                        CrAmt = SYS_BeFloat(EEHtml.getElementById("CR_CALC_AMT").value);
                        DbAmt = SYS_BeFloat(EEHtml.getElementById("DB_CALC_AMT").value);

                        if (SYS_BeFloat(CrAmt) > 0) {
                            EEHtml.getElementById(Field72Line).value = EEHtml.getElementById(Field72Line).value + ' ' + EEHtml.getElementById("CR_CCY").value + ' ' + EEHtml.getElementById("CR_CALC_AMT").value;
                        } else {
                            EEHtml.getElementById(Field72Line).value = EEHtml.getElementById(Field72Line).value + ' ' + EEHtml.getElementById("DB_CCY").value + ' ' + EEHtml.getElementById("DB_CALC_AMT").value;
                        }
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function(PaymentMultipleDebits) {
    try {

        var Records; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
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
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_X103_ORDCUACNO_50A = function() {
    try {

        if (document.MAINFORM.X103_ORDCU_ID_50A.value.trim() == '') {
            if (document.MAINFORM.X103_ORDCUACNO_50A.value != "") {
                if (document.MAINFORM.APP_TYPE.value.toUpperCase() == 'CUSTOMER') {
                    SYS_GetCUBK('X103_ORDCUACNO_50A', 'X103_ORDCUACNO_50A', 'SYM_PYMT_Chg_X103_ORDCU_ID_50A()', '', 'TRUE');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_F72_EXCON_APP = function() {
    try {

        if (document.MAINFORM.X103_BK2BK_INF1_72A.value == "/REC/EXCON APPROVAL") {
            SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_72_AUTH_DEALER_CD, "M");
            SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_72_APPROVAL_NO, "M");
            SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_72_XPIR_DATE, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_72_AUTH_DEALER_CD, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_72_APPROVAL_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_72_XPIR_DATE, "P");

            document.MAINFORM.X103_BK2BK_72_XPIR_DATE.value = "";
            document.MAINFORM.X103_BK2BK_72_AUTH_DEALER_CD.value = "";
            document.MAINFORM.X103_BK2BK_72_APPROVAL_NO.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Field72Checker = function() {
    try {

        var SWIFTAddressCntyCode;
        var bIsCustomerAccCFC;
        var objectSwiftAddress;
        if (SYS_BANK_COUNTRY == "ZA") {
            SWIFTAddressCntyCode = "";
            if (EEHtml.getElementById("X103_ACC_BKSW_57A").value != '') {
                objectSwiftAddress = EEHtml.getElementById("X103_ACC_BKSW_57A");
                SWIFTAddressCntyCode = objectSwiftAddress.value.substring(4, 6);
            }
            bIsCustomerAccCFC = SYF_PYMT_IsCustomerAccCFC();
            if (document.MAINFORM.APP_TYPE.value == "CUSTOMER" && SWIFTAddressCntyCode == "ZA" && bIsCustomerAccCFC && document.MAINFORM.AC_WT_INST_CNTY_CODE.value.trim() == "ZA") {
                document.MAINFORM.X103_BK2BK_INF1_72.value = "";
                EEHtml.getElementById("INF1_72AA").style.visibility = 'visible';
                EEHtml.getElementById("INF1_A2").style.visibility = 'visible';
                document.MAINFORM.X103_BK2BK_INF1_72.style.visibility = 'hidden';
                EEHtml.getElementById("INF1_A1").style.visibility = 'hidden';
                EEHtml.getElementById("ORD_CUST").style.display = "block";
                EEHtml.getElementById("XPIR_DT").style.display = "none";
                EEHtml.getElementById("APPROVAL_NO").style.display = "block";
                EEHtml.getElementById("AUTH_CD").style.display = "block";
                SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_INF1_72A, "M");
                SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_INF1_72, "P");
                EEHtml.getElementById("ORD_CUST").style.display = "none";
            } else {
                EEHtml.getElementById("INF1_72AA").style.visibility = 'hidden';
                EEHtml.getElementById("INF1_A2").style.visibility = 'hidden';
                EEHtml.getElementById("ORD_CUST").style.display = "none";
                EEHtml.getElementById("XPIR_DT").style.display = "none";
                EEHtml.getElementById("APPROVAL_NO").style.display = "none";
                EEHtml.getElementById("AUTH_CD").style.display = "none";
                document.MAINFORM.X103_BK2BK_INF1_72.style.visibility = 'visible';
                EEHtml.getElementById("INF1_A1").style.visibility = 'visible';
                SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_INF1_72A, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_INF1_72, "O");
                EEHtml.getElementById("X103_BK2BK_INF1_72A").value = "";
                SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_72_AUTH_DEALER_CD, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_72_APPROVAL_NO, "P");
                SYT_ChangeFldClass(document.MAINFORM.X103_BK2BK_72_XPIR_DATE, "P");
            }
        } else {
            EEHtml.getElementById("INF1_A2").style.visibility = 'hidden';
            EEHtml.getElementById("INF1_72AA").style.visibility = 'hidden';
            EEHtml.getElementById("ORD_CUST").style.display = "none";
            EEHtml.getElementById("XPIR_DT").style.display = "none";
            EEHtml.getElementById("APPROVAL_NO").style.display = "none";
            EEHtml.getElementById("AUTH_CD").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_For_Swift_Mapping = function() {
    try {

        if (document.MAINFORM.CPYT_PAY_COV_MSG.value != '') {
            if (document.MAINFORM.X103TRDREIMADD155A.value != '') {
                document.MAINFORM.X202MEDIBKADD1_56A.value = document.MAINFORM.X103_RECCORADD154A.value;
                document.MAINFORM.X202MEDIBKADD2_56A.value = document.MAINFORM.X103_RECCORADD254A.value;
                document.MAINFORM.X202MEDIBKADD3_56A.value = document.MAINFORM.X103_RECCORADD354A.value;
                document.MAINFORM.X202_MEDIBKACNO56A.value = document.MAINFORM.X103RECCORRACNO54A.value;
                document.MAINFORM.X202_MEDI_BKID_56A.value = document.MAINFORM.X103_RECCORRID_54A.value;
                document.MAINFORM.X202_MEDI_BKNM_56A.value = document.MAINFORM.X103_RECCORRNM_54A.value;
                document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.X103_RECCORRSW_54A.value;
                document.MAINFORM.X202_TAG_56A.value = document.MAINFORM.X103_TAG_54A.value;

                document.MAINFORM.X202_ACCBKADD1_57A.value = document.MAINFORM.X103TRDREIMADD155A.value;
                document.MAINFORM.X202_ACCBKADD2_57A.value = document.MAINFORM.X103TRDREIMADD255A.value;
                document.MAINFORM.X202_ACCBKADD3_57A.value = document.MAINFORM.X103TRDREIMADD355A.value;
                document.MAINFORM.X202_ACC_BKACNO57A.value = document.MAINFORM.X103TRDREIMACNO55A.value;
                document.MAINFORM.X202_ACC_BKID_57A.value = document.MAINFORM.X103_TRDREIMID_55A.value;
                document.MAINFORM.X202_ACC_BKNM_57A.value = document.MAINFORM.X103_TRDREIMNM_55A.value;
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X103_TRDREIMSW_55A.value;
                document.MAINFORM.X202_TAG_57A.value = document.MAINFORM.X103_TAG_55A.value;
            } else {
                document.MAINFORM.X202_ACCBKADD1_57A.value = document.MAINFORM.X103_RECCORADD154A.value;
                document.MAINFORM.X202_ACCBKADD2_57A.value = document.MAINFORM.X103_RECCORADD254A.value;
                document.MAINFORM.X202_ACCBKADD3_57A.value = document.MAINFORM.X103_RECCORADD354A.value;
                document.MAINFORM.X202_ACC_BKACNO57A.value = document.MAINFORM.X103RECCORRACNO54A.value;
                document.MAINFORM.X202_ACC_BKID_57A.value = document.MAINFORM.X103_RECCORRID_54A.value;
                document.MAINFORM.X202_ACC_BKNM_57A.value = document.MAINFORM.X103_RECCORRNM_54A.value;
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X103_RECCORRSW_54A.value;
                document.MAINFORM.X202_TAG_57A.value = document.MAINFORM.X103_TAG_54A.value;
            }


            document.MAINFORM.X202_ADV_BKADD1_B2.value = document.MAINFORM.X103SENDCORADD153A.value;
            document.MAINFORM.X202_ADV_BKADD2_B2.value = document.MAINFORM.X103SENDCORADD253A.value;
            document.MAINFORM.X202_ADV_BKADD3_B2.value = document.MAINFORM.X103SENDCORADD353A.value;
            document.MAINFORM.X202_ADV_BKID_B2.value = document.MAINFORM.X103_SENDCORRID53A.value;
            document.MAINFORM.X202_ADV_BKNM_B2.value = document.MAINFORM.X103_SENDCORRNM53A.value;
            document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X103_SENDCORRSW53A.value;


            document.MAINFORM.X202_BENEBKACNO58A.value = document.MAINFORM.CPYT_CR_BK_AC.value;
            document.MAINFORM.X202_BENE_BKID_58A.value = document.MAINFORM.X103_ADV_BKID_B2.value;
            document.MAINFORM.X202_BENE_BKNM_58A.value = document.MAINFORM.X103_ADV_BKNM_B2.value;
            document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X103_ADV_BKSW_B2.value;
            document.MAINFORM.X202BENEBKADD1_58A.value = document.MAINFORM.X103_ADV_BKADD1_B2.value;
            document.MAINFORM.X202BENEBKADD2_58A.value = document.MAINFORM.X103_ADV_BKADD2_B2.value;
            document.MAINFORM.X202BENEBKADD3_58A.value = document.MAINFORM.X103_ADV_BKADD3_B2.value;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_REF_20 = function(ref) {
    try {

        var nLc_no; // Utility Auto Fix Comments
        var nSeq; // Utility Auto Fix Comments
        var sys_dt; // Utility Auto Fix Comments
        var yr; // Utility Auto Fix Comments
        nLc_no = ref.substr(0, 6);
        nSeq = ref.substr(6, 10);
        sys_dt = SYS_BUSI_DATE;
        yr = sys_dt.toString().substr(2, 2);
        document.MAINFORM.RELATED_REF.value = nLc_no + nSeq;
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_OT_Clr_Ord_Cust_RegDD = function() {
    try {

        SYM_PYMT_Clr_Ord_Cust_RegDD();

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYT_Charge_Set_Types("OT");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_OT_ProtOrdCust = function() {
    try {

        SYM_PYMT_ProtOrdCust();

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYT_Charge_Set_Types("OT");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_ProtectFieldsForNBOL = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_ID_59A, "P");
        SYM_PYMT_clsdisableField(document.MAINFORM.X103_ID_59_BTN);
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_NM_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD1_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD2_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103BENECUADD3_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECU_SW_59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_TYPE, "P");
        SYT_ChangeFldClass(document.MAINFORM.X103_BENECUACNO59A, "P");
        SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_RES, "P");
        SYT_ChangeFldClass(document.MAINFORM.CUST_REF, "P");
        if (document.MAINFORM.BENE_AC_TYPE.value == null || document.MAINFORM.BENE_AC_TYPE.value == "") {
            document.MAINFORM.BENE_AC_TYPE.value = "Other";
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_IsCustomerAccCFC = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var sSQL; // Utility Auto Fix Comments
        //sSQL = "";
        if (document.MAINFORM.X103_ORDCUACNO_50A.value.trim() != "") {
            //sSQL = "C_CNTY_CODE = " + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_AC_NUMBER = " + "'" + document.MAINFORM.X103_ORDCUACNO_50A.value.trim() + "'" + " AND " + "C_AC_DESC = 'CFC' AND " + "C_UNIT_CODE = " + "'" + SYS_BUSI_UNIT + "'";
            //Field_List = "C_AC_DESC";
            //Mapping_List = "CUSTOMER_CFC_GROUPING";

            SYS_GetTableDataByRule_S('SYF_PYMT_CompOutPmt_SYF_PYMT_IsCustomerAccCFC_2', '1', true);
            if (document.MAINFORM.CUSTOMER_CFC_GROUPING.value != "") {
                return true;
            } else {
                return false;
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_OT_Chg_ORDCU_ID_50A = function() {
    try {

        SYM_PYMT_Chg_ORDCU_ID_50A();

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYT_Charge_Set_Types("OT");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_MERGE_FLAG_103 = function() {
    try {

        if (document.MAINFORM.MERGE_FLAG_103.value == 'YES') {
            document.MAINFORM.MERGE_FLAG_202.value = 'YES';
            SYT_ChangeFldClass(document.MAINFORM.MERGE_FLAG_202, 'P');
        }

        if (document.MAINFORM.MERGE_FLAG_103.value == 'NO') {
            document.MAINFORM.MERGE_FLAG_202.value = 'NO';
            SYT_ChangeFldClass(document.MAINFORM.MERGE_FLAG_202, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_guid = function() {
    try {

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_CNTY_CODE_onchange = function(event) {
    try {
        SYM_PYMT_Chg_AC_WT_INST_CNTY_CODE();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_BENE_AC_TYPE_onchange = function(event) {
    try {
        SYM_PYMT_Chg_BENE_AC_TYPE();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_BK_AC_onchange = function(event) {
    try {
        // If the transaction is not a TIS/MUP Payment, Validate Account
        if (((document.MAINFORM.CR_CCY.value == "MUR" || document.MAINFORM.CR_CCY.value == "TZS") && (document.MAINFORM.AC_WT_INST_CNTY_CODE.value == document.MAINFORM.CR_CCY.value.substring(0, 2))) == false) {
            SYM_PYMT_chk_CrAcctNo();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_PAY_ADV_MSG_onchange = function(event) {
    try {
        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == 'MT103') {
            document.MAINFORM.X102_TAG_119.value = '';
        }
        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == 'MT103+') {
            document.MAINFORM.X102_TAG_119.value = 'STP';

        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_PAY_COV_MSG_onchange = function(event) {
    try {
        SYM_PYMT_Chg_CPYT_PAY_COV_MSG();
        For_Swift_Mapping2();
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value !== '') {
            FLD_PYMT_X202_MEDI_BKSW_56A_onchange(); //added
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_IS_GPI_MEMBER_onchange = function(event) {
    try {
        var IS_GPI = document.MAINFORM.IS_GPI_MEMBER.value;

        if (IS_GPI == 'YES') {
            document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '001';
        } else if (IS_GPI == 'NO') {
            document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_MERGE_FLAG_103_onchange = function(event) {
    try {
        MERGE_FALG_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_SEND_TO_ID_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_AC_WT_INST_CNTY_CODE_Lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_SG_BIN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Trd_Reim_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_TEMP_TAG25_onclick = function(event) {
    try {
        if (document.MAINFORM.TEMP_TAG25.value == 'P') {

            SYT_ChangeFldClass(document.MAINFORM.X9N0_25P_IDENTIFIER, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X9N0_25P_IDENTIFIER, "P");

        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_51_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Send_Ins_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_52A_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Ord_Ins_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_53A_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Send_Corr_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_54A_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Rec_Corr_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_56A_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_IntIns_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_57A_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_AWI_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD1_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD1_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD2_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD2_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACCBKADD3_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ACCBKADD3_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKACNO57A_onchange = function(event) {
    try {
        //SYM_PYMT_Chg_X103_ACC_BKACNO57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKID_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKNM_57A_onchange = function(event) {
    try {
        //SYM_PYMT_Chg_X103_ACC_BKNM_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ACC_BKSW_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ACC_BKSW_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ADV_BKID_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ADV_BKSW_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_ADD_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.CR_CCY.value != SYS_LOCAL_CCY) {
            document.MAINFORM.C_CLEAR_TYPE_TEMP.value = "NOSTRO";
            SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '4');
        } else {
            document.MAINFORM.C_CLEAR_TYPE_TEMP.value = "VOSTRO";
            SYS_InqCUBK_byCondition('CPYT_CR_BK_AC_INQ', '4');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_B2_lookup1();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECUACNO59A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_BENECUACNO59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_BENECU_ID_59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_NM_59A_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_BENECU_NM_59A.value != 1)
            alert("The first line must start with number 1 !");
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_SW_59A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_BENECU_SW_59A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF1_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF2_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF3_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF4_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF5_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BK2BK_INF6_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SND_TO_REC_103();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BKOP_CODE_23B_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_BKOP_CODE_23B();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_DET_CHG_71A_onchange = function(event) {
    try {
        SYF_PYMT_Chg_X103_DET_CHG_71A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ENV_CONT_77T_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ENV_CONT_77T();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_59_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_Ben_Cust_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKID_56A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_MEDI_BKID_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_MEDI_BKSW_56A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_MEDI_BKSW_56A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUACNO_50A_onchange = function(event) {
    try {
        SYF_PYMT_IsCustomerAccCFC();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKID_52A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ORD_BKID_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORD_BKSW_52A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_ORD_BKSW_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCHGAMT_71G_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_RECCHGAMT_71G();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCORRID_54A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_RECCORRID_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_RECCORRSW_54A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_RECCORRSW_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP1_77B_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP2_77B_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REG_REP3_77B_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REG_REPORTING();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF1_70_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF2_70_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF3_70_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_REMIT_INF4_70_onchange = function(event) {
    try {
        SYM_PYMT_Chg_REMIT_INFO();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCHGAMT71F_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_SENDCHGAMT71F();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRID53A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_SENDCORRID53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SENDCORRSW53A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_SENDCORRSW53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SEND_BKID_51A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_SEND_BKID_51A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SEND_BKSW_51A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_SEND_BKSW_51A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TRDREIMID_55A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_TRDREIMID_55A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_TRDREIMSW_55A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_TRDREIMSW_55A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X103_VALUE_DT_32A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_52_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup5();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_53_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup6();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_54_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup7();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_56_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup8();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_57_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup9();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_58_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup4();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ACC_BKSW_57A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ACC_BKSW_57A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ADV_BKID_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ADV_BKSW_B2();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_B2_BTN_onclick = function(event) {
    try {
        SYM_PYMT_Clk_X202_lookup3();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BENE_BKID_58A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BENE_BKSW_58A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BENE_BKSW_58A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF1_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF1_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF2_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF2_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF3_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF3_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF4_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF4_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF5_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF5_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_BK2BK_INF6_72_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_BK2BK_INF6_72();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_MEDI_BKID_56A();
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_MEDI_BKID_56A, "P"); //added
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_MEDI_BKSW_56A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_MEDI_BKSW_56A();
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.X202_MEDI_BKID_56A, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_MEDI_BKID_56A, "O");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ORDBK_ID_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_ORDBK_SW_52A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_ORDBK_SW_52A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_RECCORRID_54A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_RECCORRID_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_RECCORRSW_54A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_RECCORRSW_54A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_SENDCORRID53A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_SENDCORRID53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X202_SENDCORRSW53A_onchange = function(event) {
    try {
        SYM_PYMT_Chg_X202_SENDCORRSW53A();
    } catch (e) {
        DisExcpt("SYF_PYMT_CompOutPmt.js", e);
    }
}