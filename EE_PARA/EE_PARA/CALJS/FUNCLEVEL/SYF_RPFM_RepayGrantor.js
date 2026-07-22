var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.RISK_FLAG.value = 'No';
        document.MAINFORM.FUND_CCY.value = document.MAINFORM.SYND_PART_CCY.value;
        if (document.MAINFORM.IS_SETTLED.value == 'E') {
            SYT_RemoveOptionAll(document.MAINFORM.RISK_FLAG);
            SYT_AddOptions(document.MAINFORM.RISK_FLAG, ["No"], ["Yes"]);
            SYT_ChangeFldClass(document.MAINFORM.RISK_FLAG, 'P');
            EEHtml.fireEvent(document.MAINFORM.RISK_FLAG, "onchange");

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var SET_BAL = SYS_BeFloat(document.MAINFORM.SET_BAL.value); //added
        if (SET_BAL > 0) {
            document.MAINFORM.CURRNT_STATUS.value = "ProcessGrantor"; //added
        } else {
            document.MAINFORM.CURRNT_STATUS.value = "RepayGrantor"; //added
        }
        document.MAINFORM.E_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.E_DUE_DATE.value = EEHtml.getElementById("MAST_END_DT").value;
        document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = document.MAINFORM.RECV_CCY.value;
        document.MAINFORM.E_IA_Y_PAID_INT.value = document.MAINFORM.PART_CHG_AMT.value;
        //document.MAINFORM.E_I_DECIMAL.value = Cal_CCY_Decimal(document.MAINFORM.RECV_CCY.value);
        document.MAINFORM.E_TRX_DT.value = SYS_BUSI_DATE;
        // document.MAINFORM.E_IA_C_ORIGIN_MODULE.value = SYS_MODULE_NAME;
        document.MAINFORM.E_FUNCTION_ID.value = SYS_ORG_FUNCTION_ID;
        document.MAINFORM.E_BORROWER_ID.value = document.MAINFORM.SYND_PART_ID.value;
        document.MAINFORM.E_ACCOUNT_TYPE.value = "RGA";
        document.MAINFORM.SET_BAL.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, SYS_BeFloat(document.MAINFORM.CFNC_N_BAL.value));
        if (document.MAINFORM.FUND_FLAG.value == "Funded" && document.MAINFORM.RISK_FLAG.value == "Yes") {
            document.MAINFORM.SET_BAL.value = 0;
        }
        if (document.MAINFORM.FUND_FLAG.value == "Unfunded" && document.MAINFORM.RISK_FLAG.value == "No" || document.MAINFORM.RISK_FLAG.value == "Yes") {
            document.MAINFORM.SET_BAL.value = 0;
        }
        document.MAINFORM.RPFM_RISKCLM_FLAG.value = "NO";
        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        document.MAINFORM.CFNC_C_CCY.value = document.MAINFORM.SYND_PART_CCY.value; //ADDED
        document.MAINFORM.CFNC_N_BAL.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, SYS_BeFloat(0)); //added
        FLD_RPFM_DIARY_NARRATIVE_onchange();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        if (document.MAINFORM.RISK_FLAG.value == 'No' && document.MAINFORM.RISK_FLAG.value == '') {
            SYM_RPFM_addPaymentRecord();
        }
        var payment = EEHtml.getElementById('P');
        if (document.MAINFORM.RISK_FLAG.value == 'No' && document.MAINFORM.FUND_FLAG.value == "Unfunded") {
            payment.style.display = 'none';
        }
        document.getElementById('DTL1').innerHTML = 'Credit Details';
        document.getElementById('DTL2').innerHTML = 'Debit Details';
        SYF_RPFM_HiddenFinanceRepay();
        SYF_RPFM_HiddenCollaTab();
        SYT_ChangeFldClass(document.MAINFORM.MAST_LC_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.MAST_LC_BAL_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.MAST_RISK_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.MAST_RISK_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.FUND_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.FUND_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SYND_PART_DISCLS, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SYND_PART_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CFNC_N_PAY_AMT, 'O');
        if (document.MAINFORM.RISK_FLAG.value == 'No') {
            EEHtml.fireEvent(document.MAINFORM.RISK_FLAG, "onchange");
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_HiddenFinanceRepay = function() {
    try {

        var financeRE = EEHtml.getElementById('B');
        var finance_SEPARE = EEHtml.getElementById('B_SEPA');
        if (document.MAINFORM.RISK_FLAG.value == "Yes") {
            finance_SEPARE.style.display = 'none';
            financeRE.style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, "P");
            SYT_DisableDivClass('B_div');
        } else {
            if (document.MAINFORM.FUND_FLAG.value == "Funded") {
                finance_SEPARE.style.display = '';
                financeRE.style.display = '';
                SYT_EnableDivClass('B_div');
            } else {
                finance_SEPARE.style.display = 'none';
                financeRE.style.display = 'none';
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, "P");
                SYT_DisableDivClass('B_div');
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_HiddenCollaTab = function() {
    try {
        var finance = EEHtml.getElementById('E');
        var finance_SEPA = EEHtml.getElementById('E_SEPA');
        if (document.MAINFORM.FUND_FLAG.value == "Funded") {
            finance_SEPA.style.display = 'none';
            finance.style.display = 'none';
            //SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, "P");
            SYT_DisableDivClass('E_div');
        }else{
        	  SYT_ChangeFldClass(document.MAINFORM.RP_DR_AC_TYPE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RP_DR_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RP_DR_AC, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RP_CR_AC_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RP_CR_AC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COLL_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CASH_PERCENT, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_HiddenCollaTab", e);
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
        if (SYS_MODULE_NAME == "RPFM" && SYS_ORG_FUNCTION_NAME == "RepayGrantor") {
            targetDo = SYS_GetObjByDoName("PaymentDealer");
        }
        if (targetDo == null) {
            return;
        }
        if (targetDo.length > 0) {
            doObject = targetDo[0];
            doObject.deleteDoObj("PaymentDebit");
            if (document.MAINFORM.FUND_FLAG.value == "Funded") {
                if (SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value) > 0) {
                    if (document.MAINFORM.RISK_FLAG.value == 'No') {
                        document.MAINFORM.CPYT_NO_DR.value = "1";
                        newRecord = SYS_AddOneDoRecord("PaymentDebit", doObject);
                        Debitheader = newRecord.parentObj;
                        Creditheader = SYS_GetObjByDoName("PaymentCreditHeader");
                        if (SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_INT.value) > 0) { //OUTSTANGDING INT
                            if (document.MAINFORM.CFNC_N_PAY_AMT.value <= SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_INT.value)) {
                                var debitamt = SYS_BeFloat(document.MAINFORM.CFNC_N_BAL_TEMP.value) - SYS_BeFloat(document.MAINFORM.CFNC_N_BAL.value)
                                SYS_UpdateFldValueByDo(Debitheader, 'CPYT_NO_DR', "1");
                                SYS_UpdateFldValueByDo(Debitheader, "CPYT_DR_TTL_CCY", document.MAINFORM.CFNC_C_CCY.value);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_PER', 100);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_CCY', document.MAINFORM.CFNC_C_CCY.value);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_BUY_RATE', 1.000000);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value));
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value));
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_VAL_DATE', SYS_BUSI_DATE);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'INTERNAL');
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '27511101');
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_BR', '99118');
                                SYS_RefreshDoGrid(newRecord);
                                document.MAINFORM.CPYT_NO_DR.value = "1";
                                document.MAINFORM.CFNC_N_PAID_INT.value = document.MAINFORM.CFNC_N_PAY_AMT.value;
                                document.MAINFORM.CFNC_PAID_PRIN_SUM.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, 0);
                            } else {
                                var percent = Math.round(SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_INT.value) / SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value) * 100 * 100) / 100;
                                SYS_UpdateFldValueByDo(Debitheader, 'CPYT_NO_DR', "1");
                                SYS_UpdateFldValueByDo(Debitheader, "CPYT_DR_TTL_CCY", document.MAINFORM.CFNC_C_CCY.value);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_PER', percent);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_CCY', document.MAINFORM.CFNC_C_CCY.value);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_BUY_RATE', 1.000000);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_INT.value)));
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_INT.value)));
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_VAL_DATE', SYS_BUSI_DATE);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'INTERNAL');
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '27511101');
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_BR', '99118');
                                SYS_RefreshDoGrid(newRecord);
                                document.MAINFORM.CPYT_NO_DR.value = "2";
                                newRecord = SYS_AddOneDoRecord("PaymentDebit", doObject);
                                Debitheader = newRecord.parentObj;
                                Creditheader = SYS_GetObjByDoName("PaymentCreditHeader");
                                var percent = Math.round(SYS_FloatSub(document.MAINFORM.CFNC_N_PAY_AMT.value, document.MAINFORM.CFNC_N_PAY_INT.value) / SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value) * 100 * 100) / 100;
                                SYS_UpdateFldValueByDo(Debitheader, 'CPYT_NO_DR', "1");
                                SYS_UpdateFldValueByDo(Debitheader, "CPYT_DR_TTL_CCY", document.MAINFORM.CFNC_C_CCY.value);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_PER', percent);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_CCY', document.MAINFORM.CFNC_C_CCY.value);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_BUY_RATE', 1.000000);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value) - SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_INT.value)));
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value) - SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_INT.value)));
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_VAL_DATE', SYS_BUSI_DATE);
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'INTERNAL');
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '23611301');
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_BR', '99118');
                                SYS_RefreshDoGrid(newRecord);
                                document.MAINFORM.CFNC_N_PAID_INT.value = document.MAINFORM.CFNC_N_PRE_INT.value;
                                document.MAINFORM.CFNC_PAID_PRIN_SUM.value = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value);
                            }
                        } else {
                            var percent = Math.round((SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value) - SYS_BeFloat(document.MAINFORM.CFNC_N_PRE_INT.value)) / SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value) * 100 * 100) / 100;
                            SYS_UpdateFldValueByDo(Debitheader, 'CPYT_NO_DR', "1");
                            SYS_UpdateFldValueByDo(Debitheader, "CPYT_DR_TTL_CCY", document.MAINFORM.CFNC_C_CCY.value);
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_PER', 100);
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_CCY', document.MAINFORM.CFNC_C_CCY.value);
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_BUY_RATE', 1.000000);
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value));
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value));
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_VAL_DATE', SYS_BUSI_DATE);
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'INTERNAL');
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '23611301');
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_BR', '99118');
                            SYS_RefreshDoGrid(newRecord);
                            document.MAINFORM.CFNC_N_PAID_INT.value = document.MAINFORM.CFNC_N_PRE_INT.value;
                            document.MAINFORM.CFNC_PAID_PRIN_SUM.value = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value);
                        }
                    }
                    if (document.MAINFORM.RISK_FLAG.value == 'Yes') {
                        /* newRecord = SYS_AddOneDoRecord("PaymentDebit", doObject);
				Debitheader = newRecord.parentObj;	
				SYS_UpdateFldValueByDo(Debitheader, 'CPYT_NO_DR', "1");
				SYS_UpdateFldValueByDo(Debitheader, "CPYT_DR_TTL_CCY", document.MAINFORM.CFNC_C_CCY.value);
				SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_PER', "1");
				SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_CCY', document.MAINFORM.CFNC_C_CCY.value);
				SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_BUY_RATE', 1.000000);
				SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', document.MAINFORM.CFNC_N_UNPAID_INT.value);
				SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', document.MAINFORM.CFNC_N_UNPAID_INT.value);
				SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_VAL_DATE', SYS_BUSI_DATE);
				SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'INTERNAL');
				SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '27511101');
				SYS_RefreshDoGrid(newRecord); */
                    }
                }
            } else if (document.MAINFORM.FUND_FLAG.value == "Unfunded" && document.MAINFORM.RISK_FLAG.value == 'Yes') {
                newRecord = SYS_AddOneDoRecord("PaymentDebit", doObject);
                Debitheader = newRecord.parentObj;
                Creditheader = SYS_GetObjByDoName("PaymentCreditHeader");
                SYS_UpdateFldValueByDo(Debitheader, "CPYT_DR_TTL_CCY", document.MAINFORM.SYND_PART_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_PER', 100);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_CCY', document.MAINFORM.SYND_PART_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_BUY_RATE', 1.000000);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', document.MAINFORM.LMT_AMT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', document.MAINFORM.LMT_AMT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_VAL_DATE', SYS_BUSI_DATE);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'INTERNAL');
                var payccy = document.MAINFORM.SYND_PART_CCY.value;
                if (payccy == "IDR") {
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '11511101');
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_BR', '99999');
                } else {
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '12011101');
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_BR', '99120');
                }
                SYS_RefreshDoGrid(newRecord);
                document.MAINFORM.CPYT_NO_DR.value = "1";
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_set_repayamt_to_PAYMENT_CREDIT = function() {
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

            doObject.deleteDoObj("PaymentCredit");
            if (document.MAINFORM.RISK_FLAG.value == 'No') {
                if (SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value) > 0) {
                    if (document.MAINFORM.FUND_FLAG.value == "Funded") {
                        //SYS_DisableDoButton("PaymentCredit", "ADD", "DEL", true);
                        newRecord = SYS_AddOneDoRecord("PaymentCredit", Creditheader);
                        document.MAINFORM.CPYT_NO_CR.value = "1";
                        // var CPYT_CR_PER = Math.round((((SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value) / (SYS_BeFloat(document.MAINFORM.CFNC_N_NET_AMT.value) + SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value))) * 100) * 100) / 100);
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_PER', '100');
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_CCY', document.MAINFORM.CFNC_C_CCY.value);
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_BUY_RATE', 1.000000);
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AMT_CRCCY', document.MAINFORM.CFNC_N_PAY_AMT.value);
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AMT_TXCCY', document.MAINFORM.CFNC_N_PAY_AMT.value);
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_VAL_DATE', SYS_BUSI_DATE);
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_TRX_CCY', document.MAINFORM.CFNC_C_CCY.value);
                        document.MAINFORM.CPYT_NO_CR.value = "1";
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_ASSGN_ID', document.MAINFORM.SYND_PART_ID.value);
                        SYS_UpdateFldValueByDo(newRecord, 'CPYT_ASSGN_NM', document.MAINFORM.SYND_PART_NM.value);
                        //SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_TYPE', 'INTERNAL');			
                        SYS_RefreshDoGrid(newRecord);
                        if (SYS_ORG_FUNCTION_NAME == "RepayGrantor") {
                            var payfeeccy = document.MAINFORM.CFNC_C_CCY.value;
                            if (payfeeccy == "IDR") {
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_TYPE', 'RTGS');
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC', '19511609');
                            } else {
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_TYPE', 'NOSTRO');
                                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC', '12011101');
                            }
                        }
                        SYS_RefreshDoGrid(newRecord);
                    }
                }
            } else if (document.MAINFORM.FUND_FLAG.value == "Unfunded" && document.MAINFORM.RISK_FLAG.value == 'Yes') {
                newRecord = SYS_AddOneDoRecord("PaymentCredit", Creditheader);
                document.MAINFORM.CPYT_NO_CR.value = "1";
                // var CPYT_CR_PER = Math.round((((SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value) / (SYS_BeFloat(document.MAINFORM.CFNC_N_NET_AMT.value) + SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value))) * 100) * 100) / 100);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_PER', '100');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_CCY', document.MAINFORM.SYND_PART_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_BUY_RATE', 1.000000);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AMT_CRCCY', document.MAINFORM.LMT_AMT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AMT_TXCCY', document.MAINFORM.LMT_AMT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_VAL_DATE', SYS_BUSI_DATE);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_TRX_CCY', document.MAINFORM.SYND_PART_CCY.value);
                document.MAINFORM.CPYT_NO_CR.value = "1";
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_ASSGN_ID', document.MAINFORM.SYND_PART_ID.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_ASSGN_NM', document.MAINFORM.SYND_PART_NM.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_TYPE', 'INTERNAL');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC', '23611301');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_BR', '99118');
                SYS_RefreshDoGrid(newRecord);
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var CR_TYPE; // Utility Auto Fix Comments
        var RTGS_BENE_NM;
        var RTGS_CD;
        var SKN_BENE_NM;
        var Crlen; // Utility Auto Fix Comments
        var DR_TYPE; // Utility Auto Fix Comments
        var Drlen; // Utility Auto Fix Comments
        var _Cr; // Utility Auto Fix Comments
        var _Dr; // Utility Auto Fix Comments
        var cr_desc; // Utility Auto Fix Comments
        var dr_desc; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var ntype; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentDealer");
        len = targetDo.length;
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            _Cr = targetDo[i].getDoByName("PaymentCredit"); // Utility Auto Fix Comments
            Crlen = _Cr.length; // Utility Auto Fix Comments
            for (k = 0; k < Crlen; k++) {
                CR_TYPE = _Cr[k].getDoValueByName("CPYT_CR_AC_TYPE"); // Utility Auto Fix Comments
                RTGS_CD = _Cr[k].getDoValueByName("RTGS_CD"); // Utility Auto Fix Comments
                RTGS_BENE_NM = _Cr[k].getDoValueByName("RTGS_BENE_NM"); // Utility Auto Fix Comments	
                SKN_BENE_NM = _Cr[k].getDoValueByName("SKN_BENE_NM");
                if (CR_TYPE == "RTGS") {
                    if (RTGS_CD == '' || RTGS_BENE_NM == '') {
                        alert("Please make sure the RTGS Info is fill in the Payment Tab before confirm the transaction!! ");
                        return false;
                    }
                }
                if (CR_TYPE == "SKN") {
                    if (SKN_BENE_NM == '') {
                        alert("Please make sure the SKN Info is fill in the Payment Tab before confirm the transaction!! ");
                        return false;
                    }
                }

            }


        }
        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            if (document.MAINFORM.FUND_FLAG.value == 'Funded') {
                if (document.MAINFORM.RISK_FLAG.value == 'No') {
                    SYF_RPFM_set_repayamt_to_PAYMENT_DEBIT();
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_RISK_FLAG_onchange = function(event) {
    try {
        document.MAINFORM.CFNC_N_BAL.value = document.MAINFORM.CFNC_N_BAL_TEMP.value;
        SYF_RPFM_HiddenFinanceRepay();
        var payment = EEHtml.getElementById('P');
        payment.style.display = 'block';
        if (document.MAINFORM.RISK_FLAG.value == 'Yes') {
            document.MAINFORM.CFNC_N_PAY_AMT.value = 0;
            CFNC_N_PAY_AMT_onchange();
        } else {
            InitFinancePayment();
            if (document.MAINFORM.FUND_FLAG.value == "Unfunded") {
                payment.style.display = 'none';
            }
        }
        Cal_CPYT_N_PAY_AMT();
        getCPYT_DR_TTL_AMT_TTLCCY();
        getCPYT_CR_TTL_AMT_TTLCCY();
        SYF_RPFM_set_repayamt_to_PAYMENT_DEBIT();
        SYM_RPFM_Delete_credit_record();
    } catch (e) {
        DisExcpt("SYF_RPFM_RepayGrantor.js", e);
    }
}