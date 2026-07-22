var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_RPFM_Cal_NO_OF_AMD();
        document.MAINFORM.RECV_CCY.value = document.MAINFORM.PART_RISK_CCY.value;
        document.MAINFORM.RECV_AMT.value = document.MAINFORM.PART_RISK_AMT.value;
        document.MAINFORM.FUND_FLAG.value = document.MAINFORM.PART_TYPE.value;
        //document.MAINFORM.PART_AMT.value = document.MAINFORM.PART_RISK_AMT.value;

        if (document.MAINFORM.PART_RISK_CCY.value == 'USD') {
            SYS_GetTableDataByRule_S('GET_CHG_RATE_L', '1', true);
            SYS_GetTableDataByRule_S('GET_OOPE_FEE_L', '1', true);
        } else {
            SYS_GetTableDataByRule_S('GET_CHG_RATE_F', '1', true);
            SYS_GetTableDataByRule_S('GET_OOPE_FEE_F', '1', true);
        }
        var AMT1 = SYS_BeFloat(document.MAINFORM.PART_RISK_AMT.value) * ((document.MAINFORM.TEMP_CHG_RATE.value) / 100);
        var AMT2 = SYS_BeFloat(document.MAINFORM.TEMP_OOPE_FEE.value);
        document.MAINFORM.PART_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.PART_RISK_CCY.value, AMT1 + AMT2);
        setRelateRef();
        document.MAINFORM.TRACER_NO.value = 0;
        var days = SYS_GetSubDays(document.MAINFORM.PART_START_DT.name, document.MAINFORM.PART_MAT_DT.name);
        days = SYS_FloatSub(days, 3);
        SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.PART_START_DT.value, days, "SYF_RPFM_TRACER_DT_RESULT", "A", "N", "N");
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var nTEMP_COMM_FEE = SYS_BeFloat(SYS_BeFloat(document.MAINFORM.PART_RISK_AMT.value) * ((document.MAINFORM.TEMP_CHG_RATE.value) / 100));
        var nRPFM_EXC_RATE = SYS_BeFloat(document.MAINFORM.RPFM_EXC_RATE.value);
        document.MAINFORM.TEMP_COMM_FEE.value = nTEMP_COMM_FEE * nRPFM_EXC_RATE;
        document.MAINFORM.CURRNT_STATUS.value = 'ProcessParticipant';
        document.MAINFORM.IS_SETTLED.value = 'N';
        if (document.MAINFORM.FUND_FLAG.value == 'Funded') {
            document.MAINFORM.SET_BAL.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
        }
        if (document.MAINFORM.FUND_FLAG.value == 'Unfunded') {
            document.MAINFORM.CFNC_N_PCT.value = 0;
            document.MAINFORM.SET_BAL.value = document.MAINFORM.RECV_AMT.value;
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DUE_DT, "P");

        }
        document.MAINFORM.E_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.E_DUE_DATE.value = EEHtml.getElementById("PART_MAT_DT").value;
        document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = document.MAINFORM.RECV_CCY.value;
        document.MAINFORM.E_IA_Y_PAID_INT.value = document.MAINFORM.PART_CHG_AMT.value;
        //document.MAINFORM.E_I_DECIMAL.value = Cal_CCY_Decimal(document.MAINFORM.RECV_CCY.value);
        document.MAINFORM.E_TRX_DT.value = SYS_BUSI_DATE;
        // document.MAINFORM.E_IA_C_ORIGIN_MODULE.value = SYS_MODULE_NAME;
        document.MAINFORM.E_FUNCTION_ID.value = SYS_ORG_FUNCTION_ID;
        document.MAINFORM.E_BORROWER_ID.value = document.MAINFORM.GRANTOR_ID.value;
        document.MAINFORM.E_ACCOUNT_TYPE.value = "RPA";
        document.MAINFORM.ISSUE_FLAG.value = "N";
        SYT_CHG_VOUCHER();
        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_GetExchangeRate = function() {
    try {

        var recvccy;
        var bmccy;
        bmccy = "USD";
        recvccy = document.MAINFORM.PART_RISK_CCY.value;
        if (recvccy != "" && bmccy != "") {
            SYS_GetExchangeRate_S(recvccy, bmccy, 'Booking Rate', 'RPFM_EXC_RATE');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_FEE_Debit_AC = function() {
    try {

        var fee = document.MAINFORM.PART_CHG_AMT.value;
        SYS_getRecords(_do);
        if (document.MAINFORM.RECV_CCY.value != 'USD') {
            var ACTYPE = 'N';
        } else {
            var ACTYPE = 'N';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            if (document.MAINFORM.FUND_FLAG.value == 'Funded') {
                //SYF_RPFM_set_chg_fee_to_PAYMENT_CREDIT();
                setFinanceAMTtoPaymentCredit();

            }
            //SYF_RPFM_set_chg_fee_to_PAYMENT_DEBIT();
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_getchargefee = function() {
    try {

        document.MAINFORM.PART_CHG_AMT.value = Chg.Screen.getLocalChgCustPayTotalAmt() + Chg.Screen.getLocalVatCustPayTotalAmt();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_GET_RPFM_NOSTRO_DR_AC = function() {
    try {

        if (document.MAINFORM.RPFM_DR_AC_TYPE.value == 'NOSTRO') {
            document.MAINFORM.RPFM_NOSTRO_DR_AC.value = '12011101';
        } else {
            document.MAINFORM.RPFM_NOSTRO_DR_AC.value = '11511101';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_RPFM_Parties_P();
        SYF_RPFM_Cal_UDLY_TYPE();
        SYF_RPFM_GetExchangeRate();
        SYF_RPFM_HiddenFinanceTab();
        Chg.Screen.mapLocalCust("GRANTOR_ID", "GRANTOR_NM");
        Chg.Screen.mapForeignCust("OBLG_ID", "OBLG_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (document.MAINFORM.FUND_FLAG.value == 'Funded') {
            document.MAINFORM.CFNC_C_PAY_BY.value = 'Grantor';
        }
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            var ID = document.MAINFORM.GRANTOR_BK_SW.value;
            var IDIQ = ID.substr(4, 2);
            if (IDIQ == 'US') {
                SYF_RPFM_Chg_OOPE_Fee();
            } else {
                SYF_RPFM_Chg_OOPE_Fee_F();
            }
            var arr = ['RPFM_OTHER_CHG'];
            var amt = document.getElementById('PART_RISK_AMT').value;
            var ccy = document.getElementById('PART_RISK_CCY').value;
            Chg.calculate(arr, ccy, amt);
        }
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            if (document.MAINFORM.PART_RISK_CCY.value == 'USD') {
                SYF_RPFM_Chg_Comm_Fee();
            } else {
                SYF_RPFM_Chg_Comm_Fee_F();
            }
        }
        //for charge
        SYF_RPFM_Functions_For_Chg();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.C_MAIN_REF.value;
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
        if (document.MAINFORM.UDLY_TYPE.value == 'LC/SKBDN Issuance' || document.MAINFORM.UDLY_TYPE.value == 'LC/SKBDN Confirmation' || document.MAINFORM.UDLY_TYPE.value == 'LC/SKBDN Negotiation' || document.MAINFORM.UDLY_TYPE.value == 'LC/SKBDN UPAS' || document.MAINFORM.UDLY_TYPE.value == "Bankers' Acceptance") {
            document.MAINFORM.RPFM_FACI_TP.value = 'Import';
        } else if (document.MAINFORM.UDLY_TYPE.value == 'Bank Guarantee' || document.MAINFORM.UDLY_TYPE.value == 'Counter Guarantee') {
            document.MAINFORM.RPFM_FACI_TP.value = 'Guarantee';
        } else if (document.MAINFORM.UDLY_TYPE.value == 'Export Bills Discounting' || document.MAINFORM.UDLY_TYPE.value == 'Forfaiting') {
            document.MAINFORM.RPFM_FACI_TP.value = 'Export/AR Financing';
        } else if (document.MAINFORM.UDLY_TYPE.value == 'Others') {
            document.MAINFORM.RPFM_FACI_TP.value = 'Trade/AP Financing';
        }
        //CHG_FLD_ALL_CHARGE_FOR
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'P');
        document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'P');
        SYF_RPFM_Cal_Grantor_SW_TAG();
        SYT_ChangeFldClass(document.MAINFORM.SYND_OBLG_TYPE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.UDLY_TYPE2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GRANTOR_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.OBLG_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CFNC_N_PCT, 'P');
        CHG_DefCharge_chargeAtOnchange();
        var sCommCodeArr = new Array('RPFM_OOPE_FEE_F'); //added
        for (var i = 0; i < sCommCodeArr.length; i++) { //added
            SYT_RESET_COMM(sCommCodeArr[i]); //added
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ACTIVE_AMT_4, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_ID_DETAILS = function() {
    try {

        SYS_InqCUBK('AC_BANK_ID');
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_AC_DETAILS = function() {
    try {

        SYS_InqCUBK_byCondition('DR_BANK_AC');
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_BANK_DETAILS = function() {
    try {

        SYS_InqCUBK_byCondition('CR_BANK_AC');
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_get_Finance_Ref = function(ref) {
    try {

        var NO_OF_AMD; // Utility Auto Fix Comments
        NO_OF_AMD = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);

        if (NO_OF_AMD < 10) {
            ref = '0' + NO_OF_AMD;
        } else {
            ref = NO_OF_AMD;
        }
        document.MAINFORM.TEMP_TRX_REF.value = document.MAINFORM.C_MAIN_REF.value + ref;
        document.MAINFORM.PART_CNTR.value = ref;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Functions_For_Chg = function() {
    try {

        if ("PM||MM||KP".indexOf(SYS_FUNCTION_TYPE) > -1) {
            CHG_setAllCollCcy(SYS_LOCAL_CCY);
            SYT_Set_TRXCCY2CHG();
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE;
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Chg_Comm_Fee = function() {
    try {

        var arr = ['RPFM_PROV_FEE_L'];
        var amt = document.getElementById('PART_RISK_AMT').value;
        var ccy = document.getElementById('PART_RISK_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_UDLY_TYPE = function() {
    try {

        if (document.MAINFORM.UDLY_TYPE.value == 'Others') {
            SYT_ChangeFldClass(document.MAINFORM.UDLY_TYPE2, 'M');
            EEHtml.getElementById('UDLY_TYPE2').style.display = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.UDLY_TYPE, 'P');
            EEHtml.getElementById('UDLY_TYPE2').style.display = 'none';

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Parties_P = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.GRANTOR_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GRANTOR_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GRANTOR_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GRANTOR_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GRANTOR_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GRANTOR_BK_SW, 'P');
        SYT_ChangeFldClass(document.MAINFORM.OBLG_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.OBLG_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.OBLG_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.OBLG_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.OBLG_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GRANT_SW_TAG, 'P');
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Chg_OOPE_Fee = function() {
    try {

        var arr = ['RPFM_OOPE_FEE_L'];
        var amt = document.getElementById('PART_RISK_AMT').value;
        var ccy = document.getElementById('PART_RISK_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_CPYT_N_PAY_AMT = function() {
    try {

        //document.MAINFORM.CPYT_N_PAY_AMT.value = SYS_getValueFromMain('PART_CHG_AMT');
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Chg_Comm_Fee_F = function() {
    try {

        var arr = ['RPFM_PROV_FEE_F'];
        var amt = document.getElementById('PART_RISK_AMT').value;
        var ccy = document.getElementById('PART_RISK_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Chg_OOPE_Fee_F = function() {
    try {

        var arr = ['RPFM_OOPE_FEE_F'];
        var amt = document.getElementById('PART_RISK_AMT').value;
        var ccy = document.getElementById('PART_RISK_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_loadDoDataComplete = function() {
    try {

        /*if (SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            if (document.MAINFORM.FUND_FLAG.value != 'Funded') {
                SYF_RPFM_set_chg_fee_to_PAYMENT_CREDIT();
            }else{
				setFinanceAMTtoPaymentCredit();

			}
            SYF_RPFM_set_chg_fee_to_PAYMENT_DEBIT();

        }*/
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_set_chg_fee_to_PAYMENT_DEBIT = function() {
    try {

        var Creditheader; // Utility Auto Fix Comments
        var Debitheader; // Utility Auto Fix Comments
        var doObject; // Utility Auto Fix Comments
        var newRecord; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        targetDo = null;
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "IQ") {
            return;
        }
        if (SYS_MODULE_NAME == "RPFM" && SYS_FUNCTION_NAME == "ProcessParticipant") {
            targetDo = SYS_GetObjByDoName("PaymentDealer");
        }
        if (targetDo == null) {
            return;
        }
        if (targetDo.length > 0) {
            doObject = targetDo[0];
            //doObject.deleteDoObj("PaymentDebit");
            newRecord = SYS_AddOneDoRecord("PaymentDebit", doObject);
            Debitheader = newRecord.parentObj;
            Creditheader = SYS_GetObjByDoName("PaymentCreditHeader");
            SYS_UpdateFldValueByDo(Debitheader, 'CPYT_NO_DR', "1");
            SYS_UpdateFldValueByDo(Debitheader, "CPYT_DR_TTL_CCY", document.MAINFORM.CFNC_C_CCY.value);
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_PER', '100');
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_CCY', document.MAINFORM.RECV_CCY.value);
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_BUY_RATE', 1.000000);
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', document.MAINFORM.PART_CHG_AMT.value);
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', document.MAINFORM.PART_CHG_AMT.value);
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_VAL_DATE', SYS_BUSI_DATE);
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'INTERNAL');
            //check chg fee
            var rpfmchgfee;
            var rpfmchgrate;
            rpfmchgrate = SYS_BeFloat(document.MAINFORM.RPFM_EXC_RATE.value);
            rpfmchgfee = SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value);
            rpfmchgfee = rpfmchgfee * rpfmchgrate;
            if (rpfmchgfee > 50000000) {
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '27551106');
            } else {
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '43011503');
            }
            SYS_RefreshDoGrid(newRecord);
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_set_chg_fee_to_PAYMENT_CREDIT = function() {
    try {

        var Creditheader; // Utility Auto Fix Comments
        var Creditheaders; // Utility Auto Fix Comments
        //var doObject; // Utility Auto Fix Comments
        var newRecordD; // Utility Auto Fix Comments
        var targetDoC; // Utility Auto Fix Comments
        //Add by jane for set credit amount from discount tab
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "IQ") {
            return;
        }
        targetDo = null;
        targetDo = SYS_GetObjByDoName("PaymentDealer");
        if (targetDo == null) {
            return;
        }

        if (targetDo.length > 0) {
            doObject = targetDo[0];
            Creditheaders = SYS_GetObjByDoName("PaymentCreditHeader");
            Creditheader = Creditheaders[0];
            if (document.MAINFORM.FUND_FLAG.value == 'Funded') {
                newRecord = SYS_AddOneDoRecord("PaymentCredit", Creditheader);
                document.MAINFORM.CPYT_NO_CR.value = "1";
                var CPYT_CR_PER = Math.round((((SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value) / (SYS_BeFloat(document.MAINFORM.CFNC_N_NET_AMT.value) + SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value))) * 100) * 100) / 100);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_PER', CPYT_CR_PER);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_CCY', document.MAINFORM.RECV_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_BUY_RATE', 1.000000);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AMT_CRCCY', document.MAINFORM.PART_CHG_AMT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AMT_TXCCY', document.MAINFORM.PART_CHG_AMT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_VAL_DATE', SYS_BUSI_DATE);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_TRX_CCY', document.MAINFORM.CFNC_C_CCY.value);

                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_TYPE', 'INTERNAL');
                SYS_RefreshDoGrid(newRecord);
                if (SYS_FUNCTION_NAME == "ProcessParticipant") {
                    var payfeeccy = document.MAINFORM.SYND_PART_CCY.value
                    if (payfeeccy != "USD") {
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_TYPE', 'NOSTRO');
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC', '12011101');
                    } else {
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_TYPE', 'RTGS');
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC', '11511101');
                    }
                }
                SYS_RefreshDoGrid(newRecord);
            }

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_HiddenFinanceTab = function() {
    try {

        var finance = EEHtml.getElementById('W');
        var finance_SEPA = EEHtml.getElementById('W_SEPA');
        var PAYMENT = EEHtml.getElementById('P');
        if (document.MAINFORM.FUND_FLAG.value == "Unfunded") {
            finance_SEPA.style.display = 'none';
            finance.style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, "P");
            SYT_DisableDivClass('W_div');
            SYT_DisableDivClass('P_div');
            PAYMENT.style.display = 'none';
            //TEST _S
document.MAINFORM.CFNC_C_REF.orivalue = document.MAINFORM.CFNC_C_REF.value;
document.MAINFORM.CFNC_C_REF.value = "";
//TEST _E
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_CLLimitFaciType = function() {
    try {

        if (document.MAINFORM.MODULE_SELECT.value == 'EPLC') {
            document.MAINFORM.RPFM_FACI_TP.value = 'Expor/AR Financing';
        } else if (document.MAINFORM.MODULE_SELECT.value == 'GTEE') {
            document.MAINFORM.RPFM_FACI_TP.value = 'Bank Guarantee';
        } else if (document.MAINFORM.MODULE_SELECT.value == 'IPLC') {
            document.MAINFORM.RPFM_FACI_TP.value = 'Import';
        } else if (document.MAINFORM.MODULE_SELECT.value == 'Others') {
            document.MAINFORM.RPFM_FACI_TP.value = 'Trade/AP Financing';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_Grantor_SW_TAG = function() {
    try {

        if (document.MAINFORM.GRANTOR_BK_SW.value != '') {
            document.MAINFORM.GRANT_SW_TAG.value = 'A';
        } else if (document.MAINFORM.GRANTOR_NM.value != '' || document.MAINFORM.GRANTOR_ADD1.value != '' || document.MAINFORM.GRANTOR_ADD2.value != '' || document.MAINFORM.GRANTOR_ADD3.value != '') {
            document.MAINFORM.GRANT_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.GRANT_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_TRACER_DT_RESULT = function(MAT_DT) {
    try {

        document.MAINFORM.TRACER_DATE.value = MAT_DT;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_FLD_COLLECT_CCY_onclick = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_GRANTOR_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('Grantor_ID', 'GRANTOR_ID');
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_OBLG_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('OBLG_ID', 'OBLG_ID');
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_RPFM_NOSTRO_DR_AC_onchange = function(event) {
    try {
        if (document.MAINFORM.RPFM_DR_AC_TYPE.value == 'NOSTRO') {
            document.MAINFORM.RPFM_NOSTRO_DR_AC.value = '12011101';
        } else {
            document.MAINFORM.RPFM_NOSTRO_DR_AC.value = '11511101';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_UDLY_TYPE_onchange = function(event) {
    try {
        SYF_RPFM_Cal_UDLY_TYPE();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessParticipant.js", e);
    }
}