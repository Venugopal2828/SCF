var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
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
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_RPFM_Cal_NO_OF_AMD();
        document.MAINFORM.RECV_CCY.value = document.MAINFORM.PART_RISK_CCY.value;
        document.MAINFORM.RECV_AMT.value = document.MAINFORM.PART_RISK_AMT.value;
        if (document.MAINFORM.PART_RISK_CCY.value == 'US') {
            SYS_GetTableDataByRule_S('GET_OOPE_FEE_L', '1', true);
        } else {
            SYS_GetTableDataByRule_S('GET_OOPE_FEE_F', '1', true);
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Chg_OOPE_Fee = function() {
    try {

        //var arr = ['RPFM_OOPE_FEE'];

        var arr;
        if (document.MAINFORM.PART_RISK_CCY.value == 'IDR') {
            arr = ['RPFM_OOPE_FEE_L'];
        } else {
            arr = ['RPFM_OOPE_FEE_F'];
        }
        var amt = document.getElementById('PART_RISK_AMT').value;
        var ccy = document.getElementById('PART_RISK_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_RPFM_Parties_P();
        SYF_RPFM_Cal_UDLY_TYPE();
        if (document.MAINFORM.RISK_FLAG.value == 'No' && document.MAINFORM.RISK_FLAG.value == '') {
            SYM_RPFM_addPaymentRecord();
        }
        Chg.Screen.mapLocalCust("GRANTOR_ID", "GRANTOR_NM");
        Chg.Screen.mapForeignCust("OBLG_ID", "OBLG_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {}
        SYF_RPFM_Functions_For_Chg();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.C_MAIN_REF.value;
        var AMT2 = SYS_BeFloat(document.MAINFORM.TEMP_OOPE_FEE.value);
        document.MAINFORM.PART_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.PART_RISK_CCY.value, AMT2);
        SYF_RPFM_HiddenFinanceRepay();
        SYF_RPFM_CAL_CHARGE_AT_BY();
        Chg.attchEvent("SYF_RPFM_CAL_CHARGE_AT_BY");
        SYT_ChangeFldClass(document.MAINFORM.SYND_OBLG_TYPE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.UDLY_TYPE2, 'P');
        CHG_DefCharge_chargeAtOnchange();
        if (document.MAINFORM.RISK_FLAG.value == 'No') {
            EEHtml.fireEvent(document.MAINFORM.RISK_FLAG, "onchange");
        }
        var provisionCommForeign = Chg.Screen.getDefChargeByCommCode('RPFM_PROV_FEE_F');
        var provisionCommLocal = Chg.Screen.getDefChargeByCommCode('RPFM_PROV_FEE_L');
        var oopeChgForeign = Chg.Screen.getDefChargeByCommCode('RPFM_OOPE_FEE_F');
        var oopeChgLocal = Chg.Screen.getDefChargeByCommCode('RPFM_OOPE_FEE_L');
        var otherCharge = Chg.Screen.getDefChargeByCommCode('RPFM_OTHER_CHG');
        var paymentFee = Chg.Screen.getDefChargeByCommCode('RPFM_PYMT_FEE');
        if (provisionCommForeign != null) {
            provisionCommForeign[0]._protectDiscAmt(); // Utility Auto Fix Comments
            provisionCommForeign[0]._protectDiscRate(); // Utility Auto Fix Comments
        }
        if (provisionCommLocal != null) {
            provisionCommLocal[0]._protectDiscAmt(); // Utility Auto Fix Comments
            provisionCommLocal[0]._protectDiscRate(); // Utility Auto Fix Comments
        }
        if (oopeChgForeign != null) {
            oopeChgForeign[0]._protectDiscAmt(); // Utility Auto Fix Comments
            oopeChgForeign[0]._protectDiscRate(); // Utility Auto Fix Comments
        }
        if (oopeChgLocal != null) {
            oopeChgLocal[0]._protectDiscAmt(); // Utility Auto Fix Comments
            oopeChgLocal[0]._protectDiscRate(); // Utility Auto Fix Comments
        }
        if (otherCharge != null) {
            otherCharge[0]._protectDiscAmt(); // Utility Auto Fix Comments
            otherCharge[0]._protectDiscRate(); // Utility Auto Fix Comments
        }
        if (paymentFee != null) {
            paymentFee[0]._protectDiscAmt(); // Utility Auto Fix Comments
            paymentFee[0]._protectDiscRate(); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
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
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
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
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            if (document.MAINFORM.PART_TYPE.value == 'Funded') {
                if (document.MAINFORM.RISK_FLAG.value == 'No') {
                    SYF_RPFM_set_chg_fee_to_PAYMENT_CREDIT();
                    SYF_RPFM_set_chg_fee_to_PAYMENT_DEBIT();
                    SYF_RPFM_set_repayamt_to_PAYMENT_DEBIT();
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
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
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_GetExchangeRate = function() {
    try {

        var recvccy;
        var bmccy;
        bmccy = "IDR";
        recvccy = document.MAINFORM.PART_RISK_CCY.value;
        if (recvccy != "" && bmccy != "") {
            SYS_GetExchangeRate_S(recvccy, bmccy, 'Booking Rate', 'RPFM_EXC_RATE');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
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
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_CPYT_N_PAY_AMT = function() {
    try {

        document.MAINFORM.CPYT_N_PAY_AMT.value = SYS_getValueFromMain('PART_CHG_AMT');
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_FEE_Debit_AC = function() {
    try {

        var fee = document.MAINFORM.PART_CHG_AMT.value;
        SYS_getRecords(_do);
        if (document.MAINFORM.RECV_CCY.value != 'IDR') {
            var ACTYPE = 'N';
        } else {
            var ACTYPE = 'N';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_HiddenFinanceRepay = function() {
    try {

        var financeRE = EEHtml.getElementById('C');
        var financeRE_1 = EEHtml.getElementById('C_1');
        var finance_SEPARE = EEHtml.getElementById('C_div');

        if (document.MAINFORM.PART_TYPE.value == "Funded") {

            //finance_SEPARE.style.display = 'block';
            financeRE.style.display = 'block';
            financeRE_1.style.display = 'block';
            SYT_EnableDivClass('C_div');
            //SYM_RPFM_addPaymentRecord();
        } else {
            finance_SEPARE.style.display = 'none';
            financeRE.style.display = 'none';
            financeRE_1.style.display = 'none';
            SYT_DisableDiv('C_div');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_getchargefee = function() {
    try {

        //document.MAINFORM.PART_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.PART_RISK_CCY.value, (Chg.Screen.getTrxChargeByCommCode('RPFM_RPOV_FEE')).getActiveAmt());
        document.MAINFORM.PART_CHG_AMT.value = Chg.Screen.getLocalChgCustPayTotalAmt() + Chg.Screen.getLocalVatCustPayTotalAmt();
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Chg_OOPE_Fee_F = function() {
    try {

        var arr = ['RPFM_OOPE_FEE_F'];
        var amt = document.getElementById('PART_RISK_AMT').value;
        var ccy = document.getElementById('PART_RISK_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_set_chg_fee_to_PAYMENT_CREDIT = function() {
    try {

        /* var Creditheader; // Utility Auto Fix Comments
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
            if (document.MAINFORM.PART_TYPE.value == 'Funded') {
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
                    if (payfeeccy != "IDR") {
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
*/
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_set_chg_fee_to_PAYMENT_DEBIT = function() {
    try {

        /*var Creditheader; // Utility Auto Fix Comments
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
            doObject.deleteDoObj("PaymentDebit");
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
*/
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_set_repayamt_to_PAYMENT_DEBIT = function() {
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
        if (SYS_MODULE_NAME == "RPFM" && SYS_FUNCTION_NAME == "SettleParticipant" || SYS_ORG_FUNCTION_NAME == "ProcessParticipant") {
            targetDo = SYS_GetObjByDoName("PaymentDealer");
        }
        if (targetDo == null) {
            return;
        }
        if (targetDo.length > 0) {
            doObject = targetDo[0];
            doObject.deleteDoObj("PaymentDebit");
            if (document.MAINFORM.RISK_FLAG.value == 'No' && document.MAINFORM.PART_TYPE.value == "Funded") {
                document.MAINFORM.CPYT_NO_DR.value = "1";
                newRecord = SYS_AddOneDoRecord("PaymentDebit", doObject);
                Debitheader = newRecord.parentObj;
                Creditheader = SYS_GetObjByDoName("PaymentCreditHeader");
                SYS_UpdateFldValueByDo(Debitheader, 'CPYT_NO_DR', "1");
                SYS_UpdateFldValueByDo(Debitheader, "CPYT_DR_TTL_CCY", document.MAINFORM.CFNC_C_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_PER', '100');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_CCY', document.MAINFORM.RECV_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_BUY_RATE', 1.000000);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', document.MAINFORM.CFNC_N_PAY_AMT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', document.MAINFORM.CFNC_N_PAY_AMT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_VAL_DATE', SYS_BUSI_DATE);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_BR', '99118');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'INTERNAL');
                var payfeeccy = document.MAINFORM.CFNC_C_CCY.value;
                if (payfeeccy == "IDR") {
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'RTGS');
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '19511609');
                } else {
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'NOSTRO');
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '12011101');
                }
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_ID', document.MAINFORM.GRANTOR_ID.value);
                SYS_RefreshDoGrid(newRecord);
            }
            if (document.MAINFORM.RISK_FLAG.value == 'Yes' && document.MAINFORM.PART_TYPE.value == "Funded") {
                if (targetDo.length > 0) {
                    doObject = targetDo[0];
                    doObject.deleteDoObj("PaymentCredit");
                }
            }
            if (document.MAINFORM.RISK_FLAG.value == 'No' && document.MAINFORM.PART_TYPE.value == "Unfunded") {
                if (targetDo.length > 0) {
                    doObject = targetDo[0];
                    doObject.deleteDoObj("PaymentCredit");
                }
            }
            if (document.MAINFORM.RISK_FLAG.value == 'Yes' && document.MAINFORM.PART_TYPE.value == "Unfunded") {
                document.MAINFORM.CPYT_NO_DR.value = "1";
                newRecord = SYS_AddOneDoRecord("PaymentDebit", doObject);
                Debitheader = newRecord.parentObj;
                Creditheader = SYS_GetObjByDoName("PaymentCreditHeader");
                SYS_UpdateFldValueByDo(Debitheader, 'CPYT_NO_DR', "1");
                SYS_UpdateFldValueByDo(Debitheader, "CPYT_DR_TTL_CCY", document.MAINFORM.PART_RISK_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_PER', '100');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_CCY', document.MAINFORM.RECV_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_BUY_RATE', 1.000000);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', document.MAINFORM.PART_RISK_AMT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', document.MAINFORM.PART_RISK_AMT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_VAL_DATE', SYS_BUSI_DATE);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_BR', '99118');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'INTERNAL');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '15611401');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_ID', document.MAINFORM.GRANTOR_ID.value);
                SYS_RefreshDoGrid(newRecord);
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_cal_for_charge = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("OBLG_ID", "OBLG_NM");
        Chg.Screen.mapForeignCust("GRANTOR_ID", "GRANTOR_NM");
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {

            var ID = document.MAINFORM.GRANTOR_BK_SW.value;
            var IDIQ = ID.substr(4, 2);
            if (document.MAINFORM.BENE_CNTY_CD.value == 'ID') {
                arr = ['BM_SWIFT_LONG_LOCAL'];
                amt = EEHtml.getElementById('PART_RISK_AMT').value;
                ccy = EEHtml.getElementById('PART_RISK_CCY').value;
            } else if (document.MAINFORM.BENE_CNTY_CD.value != '') {
                arr = ['BM_SWIFT_LONG'];
                amt = EEHtml.getElementById('PART_RISK_AMT').value;
                ccy = EEHtml.getElementById('PART_RISK_CCY').value;
                Chg.calculate(arr, ccy, amt);
            }
            if (IDIQ == 'ID') {
                arr = ['BM_SWIFT_LONG_LOCAL'];
                amt = EEHtml.getElementById('PART_RISK_AMT').value;
                ccy = EEHtml.getElementById('PART_RISK_CCY').value;
                Chg.calculate(arr, ccy, amt);
                //SYF_RPFM_Chg_Comm_Fee();
                //SYF_RPFM_Chg_OOPE_Fee();
            } else {
                //SYF_RPFM_Chg_Comm_Fee_F();
                //SYF_RPFM_Chg_OOPE_Fee_F();
                arr = ['BM_SWIFT_LONG'];
                amt = EEHtml.getElementById('PART_RISK_AMT').value;
                ccy = EEHtml.getElementById('PART_RISK_CCY').value;
                Chg.calculate(arr, ccy, amt);
            }




        }





        document.MAINFORM.CHG_BANK_FLG.value = 'Foreign';
        document.MAINFORM.STL_CHG_AC_TYPE.value = 'NOSTRO';
        document.MAINFORM.STL_CHG_ACNO.value = '12011101';
        document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = document.MAINFORM.STL_CHG_ACNO.value;
        SYT_ChangeFldClass(document.MAINFORM.STL_CHG_AC_TYPE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.STL_CHG_ACNO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_BANK_FLG, 'P');
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_CAL_CHARGE_AT_BY = function() {
    try {

        var charge; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var strChgFor; // Utility Auto Fix Comments
        strChgFor = document.MAINFORM.CHG_BANK_FLG.value;
        if (strChgFor == "Local") {
            strChgFor = "L";
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'L';
        }
        if (strChgFor == "Foreign") {
            strChgFor = "F";
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'F';
        }

        defChgArr = Chg.Screen.getAllTrxCharge();
        for (i = 0; i < defChgArr.length; i++) { // Utility Auto Fix Comments
            charge = defChgArr[i];
            if (strChgFor == 'L') {
                charge.setChargeAt("0");
                charge.setChargeFor('L');
                charge.chargeAtOnchange();
            } else {
                charge.setChargeAt("0");
                charge.setChargeFor('F');
                //charge.chargeAtOnchange();
            }
        }

        //for deferred prov charge 
        var arrDefObj = Chg.Screen.getAllDefCharge();
        for (i = 0; i < arrDefObj.length; i++) {
            var chgfor = arrDefObj[i].getChargeFor();
            if (chgfor == 'L') {
                arrDefObj[i].setChargeAt(Chg.AT_DEFERRED);
                //EEHtml.fireEvent($(arrDefObj[i]._getFldId(Chg.FLD_CHARGE_AT)), "onchange");
                arrDefObj[i].protectChargeAt();
                arrDefObj[i].protectChargeFor();

            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        if (SYF_RPFM_isCheckCreditAmt()) {
            document.MAINFORM.SET_BAL.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, SYS_BeFloat(document.MAINFORM.CFNC_N_BAL.value));
        }
        document.MAINFORM.E_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.E_FUNCTION_ID.value = SYS_ORG_FUNCTION_ID;
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_isCheckCreditAmt = function() {
    try {

        var arrCredit; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var tempSum; // Utility Auto Fix Comments
        var ttlAmt; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentInstructionDealer");
        if (targetDo.length > 0 && document.MAINFORM.CPYT_C_SDA_FLAG.value != "Sight") {
            return true;
        } else {
            if (SYS_FUNCTION_NAME === "FinanceEstablish") {
                if (document.MAINFORM.CFNC_PAYMENT_FLAG.value === 'No') {
                    return true;
                }
            }
            arrCredit = SYS_GetObjByDoName('PaymentCredit');
            ttlAmt = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value);
            tempSum = 0;
            len = arrCredit.length;
            credit = null;
            for (i = 0; i < len; i++) { // Utility Auto Fix Comments
                credit = arrCredit[i];
                tempSum += SYS_BeFloat(credit.getDoValueByName(document.MAINFORM.CPYT_CR_AMT_TXCCY.name));
            }
            if (tempSum != ttlAmt) {
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_set_repayamt_to_PAYMENT_CREDIT = function() {
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
        if (SYS_MODULE_NAME == "RPFM" && SYS_FUNCTION_NAME == "SettleParticipant") {
            targetDo = SYS_GetObjByDoName("PaymentDealer");
        }
        if (targetDo == null) {
            return;
        }
        if (targetDo.length > 0) {
            doObject = targetDo[0];
            doObject.deleteDoObj("PaymentCredit");
            if (document.MAINFORM.RISK_FLAG.value == 'No' && document.MAINFORM.PART_TYPE.value == "Funded") {
                newRecord = SYS_AddOneDoRecord("PaymentCredit", doObject);
                Debitheader = newRecord.parentObj;
                SYS_RefreshDoGrid(newRecord);
            }
            if (document.MAINFORM.RISK_FLAG.value == 'Yes' && document.MAINFORM.PART_TYPE.value == "Unfunded") {
                newRecord = SYS_AddOneDoRecord("PaymentCredit", doObject);
                Debitheader = newRecord.parentObj;
                SYS_RefreshDoGrid(newRecord);
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_GRANTOR_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('Grantor_ID', 'GRANTOR_ID');
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_OBLG_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('OBLG_ID', 'OBLG_ID');
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_RISK_FLAG_onchange = function(event) {
    try {
        //SYF_RPFM_HiddenFinanceRepay();
        Cal_CPYT_N_PAY_AMT();
        getCPYT_DR_TTL_AMT_TTLCCY();
        getCPYT_CR_TTL_AMT_TTLCCY();



        SYF_RPFM_set_repayamt_to_PAYMENT_DEBIT();
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_UDLY_TYPE_onchange = function(event) {
    try {
        SYF_RPFM_Cal_UDLY_TYPE();
    } catch (e) {
        DisExcpt("SYF_RPFM_SettleParticipant.js", e);
    }
}