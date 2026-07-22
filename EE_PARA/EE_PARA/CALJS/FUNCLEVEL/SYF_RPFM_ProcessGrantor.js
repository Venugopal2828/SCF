var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.CURRNT_STATUS.value = 'ProcessGrantor';
        if (document.MAINFORM.FUND_FLAG.value == 'Funded') {
            document.MAINFORM.SET_BAL.value = document.MAINFORM.CFNC_N_BAL.value;
        }
        if (document.MAINFORM.FUND_FLAG.value == 'Unfunded') {
            document.MAINFORM.SET_BAL.value = document.MAINFORM.RECV_AMT.value;
            document.MAINFORM.CFNC_N_PCT.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DUE_DT, "P"); //Add by Miya 
        }
        document.MAINFORM.LMT_AMT.value = SYS_FloatSub(SYS_BeFloat(document.MAINFORM.RECV_AMT.value), SYS_BeFloat(document.MAINFORM.COLL_LCY_AMT.value));
        document.MAINFORM.TEMP_COMM_FEE.value = SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value) * SYS_BeFloat(document.MAINFORM.RPFM_EXC_RATE.value);
        document.MAINFORM.E_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.E_DUE_DATE.value = EEHtml.getElementById("SYND_PART_EXP_DT").value;
        document.MAINFORM.E_IA_C_DIS_LOCALCCY.value = document.MAINFORM.RECV_CCY.value;
        document.MAINFORM.E_IA_Y_PAID_INT.value = document.MAINFORM.PART_CHG_AMT.value;
        document.MAINFORM.E_TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.E_FUNCTION_ID.value = SYS_ORG_FUNCTION_ID;
        document.MAINFORM.E_BORROWER_ID.value = document.MAINFORM.SYND_PART_ID.value;
        document.MAINFORM.E_ACCOUNT_TYPE.value = "CH8";
        document.MAINFORM.RPFM_RISKCLM_FLAG.value = "NO";
        if (document.MAINFORM.FUND_FLAG.value == 'Unfunded') {
            document.MAINFORM.RPFM_RISKCLM_FLAG.value = "YES";
        }
        if (document.MAINFORM.FUND_FLAG.value == 'Funded') {
            if (SYS_BeFloat(document.MAINFORM.RECV_AMT.value) == SYS_BeFloat(document.MAINFORM.FUND_AMT.value)) {
                return true;
            } else {
                alert("The Receive Amount Should Be Equal To The Funded Amount !")
                return false;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.PART_CHG_CCY.value = document.MAINFORM.SYND_PART_CCY.value;
        document.MAINFORM.RECV_CCY.value = document.MAINFORM.SYND_PART_CCY.value;
        document.MAINFORM.RECV_AMT.value = document.MAINFORM.SYND_PART_AMT.value;
        document.MAINFORM.COLLAT_CCY.value = document.MAINFORM.SYND_PART_CCY.value;
        SYF_RPFM_FUNC_FLAG_FLD();
        SYF_RPFM_GET_RPFM_NOSTRO_DR_AC();
        SYF_RPFM_GET_RP_NOSTRO_DR_AC();
        SYF_RPFM_GetExchangeRate();
        //for charge fee cal++++
        SYS_GetTableDataByRule_S('CHG_FEE_RATE', '1', true);
        // SYS_GetTableData_SvrSql_S("CHG_FEE_RATE", "RPFM_PYMT_FEE", 'F_BASE_PRECENTAGE', 'RPFM_CHG_RATE', 'Y');


        document.MAINFORM.COMM_FLG.value = 'Yes';
        document.MAINFORM.FUND_CCY.value = document.MAINFORM.SYND_PART_CCY.value;
        if (document.MAINFORM.FUND_FLAG.value == "Funded") {
            document.MAINFORM.COMM_FLG.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.COMM_FLG, 'O');
            EEHtml.fireEvent(document.MAINFORM.COMM_FLG, "onchange");
        } else {
            document.MAINFORM.COMM_FLG.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.COMM_FLG, 'M');
            EEHtml.fireEvent(document.MAINFORM.COMM_FLG, "onchange");
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            //if (document.MAINFORM.FUND_FLAG.value != 'Funded') {


            //SYF_RPFM_set_chg_fee_to_PAYMENT_CREDIT();
            //SYF_RPFM_set_chg_fee_to_PAYMENT_DEBIT();
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        FLD_RPFM_DIARY_NARRATIVE_onchange();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        SYF_RPFM_HiddenFinanceTab();
        SYF_RPFM_HiddenRecvTab();
        SYF_RPFM_HiddenCollaTab();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.MT400_TAG_32K.value = 'B';
        if (document.MAINFORM.FUND_FLAG.value == 'Funded') {
            document.MAINFORM.CFNC_C_PAY_BY.value = 'Grantor';
        }
        SYT_ChangeFldClass(document.MAINFORM.SUB_LMT_ID, 'P');
        var finance = EEHtml.getElementById('W');
        var finance_SEPA = EEHtml.getElementById('W_SEPA');
        if (document.MAINFORM.FUND_FLAG.value == "Funded") {
            SYT_ChangeFldClass(document.MAINFORM.COMM_FLG, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.COMM_FLG, 'M');
        }
        EEHtml.fireEvent(document.MAINFORM.COMM_FLG, "onchange");
        SYT_ChangeFldClass(document.MAINFORM.RPFM_DR_AC, 'P');
        SYT_ChangeFldClass(document.MAINFORM.RPFM_CR_AC, 'P');
        SYT_ChangeFldClass(document.MAINFORM.RECV_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SOURCE_REF_BTN2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PART_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.OBLG_ID_BTN, 'P');

        if (SYS_BeFloat(document.MAINFORM.COLL_LCY_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.RP_DR_AC_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RP_DR_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RP_DR_AC, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RP_CR_AC_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RP_CR_AC, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_CPYT_N_PAY_AMT = function() {
    try {
        document.MAINFORM.CPYT_N_PAY_AMT.value = SYS_getValueFromMain('PART_CHG_AMT');
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_Cal_CPYT_N_PAY_AMT", e);
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
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_Cal_FEE_Debit_AC", e);
    }
}

csFuncLevelProto.SYF_RPFM_FUNC_FLAG_FLD = function() {
    try {
        if (document.MAINFORM.FUND_FLAG.value == 'Unfunded') {
            SYT_ChangeFldClass(document.MAINFORM.RPFM_DR_AC_TYPE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPFM_DR_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPFM_DR_AC, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPFM_CR_AC_TYPE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RPFM_CR_AC, 'O');
        } else {
            document.MAINFORM.RPFM_CR_AC.value = '23611301';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_FUNC_FLAG_FLD", e);
    }
}

csFuncLevelProto.SYF_RPFM_GET_RPFM_NOSTRO_DR_AC = function() {
    try {
        if (document.MAINFORM.RPFM_DR_AC_TYPE.value == 'NOSTRO') {
            document.MAINFORM.RPFM_DR_AC.value = '12011101';
        } else {
            document.MAINFORM.RPFM_DR_AC.value = '11511101';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_GET_RPFM_NOSTRO_DR_AC", e);
    }
}

csFuncLevelProto.SYF_RPFM_GET_RP_NOSTRO_DR_AC = function() {
    try {
        if (document.MAINFORM.RP_DR_AC_TYPE.value == 'NOSTRO') {
            document.MAINFORM.RP_DR_AC.value = '12011101';
        } else {
            document.MAINFORM.RP_DR_AC.value = '11511101';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_GET_RP_NOSTRO_DR_AC", e);
    }
}

csFuncLevelProto.SYF_RPFM_GetExchangeRate = function() {
    try {
        var recvccy;
        var bmccy;
        bmccy = "USD";
        recvccy = document.MAINFORM.SYND_PART_CCY.value;
        if (recvccy != "" && bmccy != "") {
            SYS_GetExchangeRate_S(recvccy, bmccy, 'Booking Rate', 'RPFM_EXC_RATE');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_GetExchangeRate", e);
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


        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_HiddenCollaTab", e);
    }
}

csFuncLevelProto.SYF_RPFM_HiddenFinanceTab = function() {
    try {
        var finance = EEHtml.getElementById('W');
        var finance_SEPA = EEHtml.getElementById('W_SEPA');
        if (document.MAINFORM.FUND_FLAG.value == "Unfunded") {
            finance_SEPA.style.display = 'none';
            finance.style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DUE_DT, "P");
            SYT_DisableDivClass('W_div');
            //TEST _S
document.MAINFORM.CFNC_C_REF.orivalue = document.MAINFORM.CFNC_C_REF.value;
document.MAINFORM.CFNC_C_REF.value = "";
//TEST _E

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_HiddenFinanceTab", e);
    }
}

csFuncLevelProto.SYF_RPFM_HiddenRecvTab = function() {
    try {
        var finance = EEHtml.getElementById('B');
        var finance_SEPA = EEHtml.getElementById('B_SEPA');
        if (document.MAINFORM.FUND_FLAG.value == "Unfunded") {
            finance_SEPA.style.display = 'none';
            finance.style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, "P");
            SYT_DisableDivClass('B_div');


        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_HiddenRecvTab", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_AC_DETAILS = function() {
    try {
        //SYS_InqCUBK_byCondition('DR_BANK_AC');
        if (document.MAINFORM.RPFM_DR_ID.value != '') {
            SYS_InqCUBK_byCondition('DR_BANK_AC', '1');

        } else {
            //SYS_InqCUBK('DR_BANK_AC');

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_Inq_AC_DETAILS", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_BANK_DETAILS = function() {
    try {
        SYS_InqCUBK_byCondition('CR_BANK_AC');
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_Inq_BANK_DETAILS", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_ID_DETAILS = function() {
    try {
        var RPFM_DR_AC_TYPE = document.MAINFORM.RPFM_DR_AC_TYPE.value;
        if (RPFM_DR_AC_TYPE == "NOSTRO") {
            SYS_InqCUBK('AC_BANK_ID');
        } else if (RPFM_DR_AC_TYPE == "RTGS" || RPFM_DR_AC_TYPE == "SKN") {
            SYS_InqCUBK('AC_CUST_ID');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_Inq_ID_DETAILS", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_ID_DTLS = function() {
    try {
        var RPFM_DR_AC_TYPE = document.MAINFORM.RP_DR_AC_TYPE.value;
        if (RPFM_DR_AC_TYPE == "NOSTRO") {
            SYS_InqCUBK('RP_AC_BANK_ID');
        } else if (RPFM_DR_AC_TYPE == "RTGS" || RPFM_DR_AC_TYPE == "SKN") {
            SYS_InqCUBK('RP_AC_CUST_ID');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_Inq_ID_DTLS", e);
    }
}

csFuncLevelProto.SYF_RPFM_getchargefee = function() {
    try {
        document.MAINFORM.PART_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, (Chg.Screen.getTrxChargeByCommCode('RPFM_PYMT_FEE')).getActiveAmt());
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_getchargefee", e);
    }
}

csFuncLevelProto.SYF_RPFM_loadDoDataComplete = function() {
    try {
        if (SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {


            //SYF_RPFM_set_chg_fee_to_PAYMENT_CREDIT();
            //          SYF_RPFM_set_chg_fee_to_PAYMENT_DEBIT();

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_loadDoDataComplete", e);
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
        var targetDo = SYS_GetObjByDoName("PaymentDealer");
        if (targetDo == null) {
            return;
        }

        if (targetDo.length > 0) {

            doObject = targetDo[0];
            var Creditheader = doObject.getChildByName("PaymentCreditHeader")[0];
            if (Creditheader == null || Creditheader == "undefined") {
                Creditheader = DoRoot.getTemplate("PaymentCreditHeader").getTempObj(doObject); //create array PaymentInstruction.PaymentDebitHeader
            }
            var orgDebitDoObjs = Creditheader.getChildByName("PaymentCredit");
            for (var i = 0; i < orgDebitDoObjs.length; i++) {
                DoRoot.deleteDoObj(orgDebitDoObjs[i]);
            }
            if (document.MAINFORM.COMM_FLG.value == 'Yes') {
                if (document.MAINFORM.CFNC_C_CCY.value == 'IDR' && (SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value) > 50000000)) {
                    var percent = Math.round(((35000 / SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value)) * 100) * 100) / 100;
                    var percent2 = 100 - SYS_BeFloat(percent);
                    var newRecord1 = SYS_AddOneDoRecord("PaymentCredit", Creditheader);
                    SYS_UpdateFldValueByDo(Creditheader, "CPYT_CR_TTL_CCY", document.MAINFORM.CFNC_C_CCY.value);
                    SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_PER', percent);
                    SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_CCY', document.MAINFORM.CFNC_C_CCY.value);
                    SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_BUY_RATE', 1.000000);
                    SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_AMT_CRCCY', SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, 35000));
                    SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_AMT_TXCCY', SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, 35000));
                    SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_VAL_DATE', SYS_BUSI_DATE);
                    SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_AC_TYPE', 'INTERNAL');
                    SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_AC', '19511609');
                    SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_TRX_CCY', document.MAINFORM.CFNC_C_CCY.value);
                    SYS_UpdateFldValueByDo(newRecord1, 'CPYT_ASSGN_ID', document.MAINFORM.SYND_PART_ID.value);
                    SYS_UpdateFldValueByDo(newRecord1, 'CPYT_ASSGN_NM', document.MAINFORM.SYND_PART_NM.value);
                    document.MAINFORM.CPYT_NO_CR.value = "2";
                    var newRecord2 = SYS_AddOneDoRecord("PaymentCredit", Creditheader);
                    SYS_UpdateFldValueByDo(Creditheader, "CPYT_CR_TTL_CCY", document.MAINFORM.CFNC_C_CCY.value);
                    SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_PER', percent2);
                    SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_CCY', document.MAINFORM.RECV_CCY.value);
                    SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_BUY_RATE', 1.000000);
                    SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AMT_CRCCY', SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value) - 35000));
                    SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AMT_TXCCY', SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value) - 35000));
                    SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_VAL_DATE', SYS_BUSI_DATE);
                    SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_TRX_CCY', document.MAINFORM.CFNC_C_CCY.value);
                    SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AC_TYPE', 'INTERNAL');
                    SYS_UpdateFldValueByDo(newRecord2, 'CPYT_ASSGN_ID', document.MAINFORM.SYND_PART_ID.value);
                    SYS_UpdateFldValueByDo(newRecord2, 'CPYT_ASSGN_NM', document.MAINFORM.SYND_PART_NM.value);
                    if (SYS_FUNCTION_NAME == "ProcessGrantor") {
                        var payfeeccy = document.MAINFORM.SYND_PART_CCY.value
                        if (payfeeccy != "IDR") {
                            SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AC_TYPE', 'NOSTRO');
                            SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AC', '12011101');
                            SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AC_BR', '99120');
                        } else {
                            SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AC_TYPE', 'RTGS');
                            SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AC', '19511609');
                            SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AC_BR', '99999');
                            SYS_UpdateFldValueByDo(newRecord2, 'RTGS_BK_NM', document.MAINFORM.SYND_PART_NM.value);
                            SYS_UpdateFldValueByDo(newRecord2, 'RTGS_BK_ID', document.MAINFORM.SYND_PART_ID.value);
                            SYS_UpdateFldValueByDo(newRecord2, 'RTGS_BENE_NM', document.MAINFORM.SYND_PART_NM.value);
                        }
                    }
                    var arrDO = [];
                    arrDO[0] = newRecord1;
                    arrDO[1] = newRecord2;
                    SYS_RefreshDoGrid(arrDO);

                } else {
                    var percent = 100;
                    //SYS_DisableDoButton("PaymentCredit", "ADD", "DEL", true);
                    var newRecord = SYS_AddOneDoRecord("PaymentCredit", Creditheader);
                    document.MAINFORM.CPYT_NO_CR.value = "1";
                    //var CPYT_CR_PER = Math.round((((SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value) / (SYS_BeFloat(document.MAINFORM.CFNC_N_NET_AMT.value) + SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value))) * 100) * 100) / 100);
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_PER', percent);
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_CCY', document.MAINFORM.RECV_CCY.value);
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_BUY_RATE', 1.000000);
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AMT_CRCCY', document.MAINFORM.PART_CHG_AMT.value);
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AMT_TXCCY', document.MAINFORM.PART_CHG_AMT.value);
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_VAL_DATE', SYS_BUSI_DATE);
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_TRX_CCY', document.MAINFORM.CFNC_C_CCY.value);
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_ASSGN_ID', document.MAINFORM.SYND_PART_ID.value);
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_ASSGN_NM', document.MAINFORM.SYND_PART_NM.value);
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_TYPE', 'INTERNAL');
                    SYS_RefreshDoGrid(newRecord);
                    if (SYS_FUNCTION_NAME == "ProcessGrantor") {
                        var payfeeccy = document.MAINFORM.SYND_PART_CCY.value
                        if (payfeeccy != "IDR") {
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_TYPE', 'NOSTRO');
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC', '12011101');
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_BR', '99120');
                        } else {
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_TYPE', 'RTGS');
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC', '19511609');
                            SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC_BR', '99999');
                            SYS_UpdateFldValueByDo(newRecord, 'RTGS_BK_NM', document.MAINFORM.SYND_PART_NM.value);
                            SYS_UpdateFldValueByDo(newRecord, 'RTGS_BK_ID', document.MAINFORM.SYND_PART_ID.value);
                            SYS_UpdateFldValueByDo(newRecord, 'RTGS_BENE_NM', document.MAINFORM.SYND_PART_NM.value);

                        }

                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_set_chg_fee_to_PAYMENT_CREDIT", e);
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
        if (SYS_MODULE_NAME == "RPFM" && SYS_FUNCTION_NAME == "ProcessGrantor") {
            targetDo = SYS_GetObjByDoName("PaymentDealer");
        }
        if (targetDo == null) {
            return;
        }
        if (targetDo.length > 0) {
            doObject = targetDo[0];
            doObject.deleteDoObj("PaymentDebit");
            if (document.MAINFORM.COMM_FLG.value == 'Yes') {

                newRecord = SYS_AddOneDoRecord("PaymentDebit", doObject);
                Debitheader = newRecord.parentObj;
                Creditheader = SYS_GetObjByDoName("PaymentCreditHeader");
                SYS_UpdateFldValueByDo(Debitheader, 'CPYT_NO_DR', "1");
                SYS_UpdateFldValueByDo(Debitheader, "CPYT_DR_TTL_CCY", document.MAINFORM.CFNC_C_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_PER', '100');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_CCY', document.MAINFORM.RECV_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_BUY_RATE', 1.000000);
                //SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', document.MAINFORM.PART_CHG_AMT.value);
                //SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', document.MAINFORM.PART_CHG_AMT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_VAL_DATE', SYS_BUSI_DATE);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'INTERNAL');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_BR', '99118');
                document.MAINFORM.CPYT_NO_DR.value = "1";

                //check chg fee
                var rpfmchgfee;
                var rpfmchgrate;
                rpfmchgrate = SYS_BeFloat(document.MAINFORM.RPFM_EXC_RATE.value);
                rpfmchgfee = SYS_BeFloat(document.MAINFORM.PART_CHG_AMT.value);
                rpfmchgfee = rpfmchgfee * rpfmchgrate;
                if (rpfmchgfee > 50000000) {
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '19511109');
                } else {
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', '52021104');
                }
                var rpfmchgflg;
                rpfmchgflg = document.MAINFORM.COMM_FLG.value;
                if (rpfmchgflg == 'Yes') {
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', document.MAINFORM.PART_CHG_AMT.value);
                    SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', document.MAINFORM.PART_CHG_AMT.value);
                }
                SYS_RefreshDoGrid(newRecord);
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*SYF_RPFM_set_chg_fee_to_PAYMENT_DEBIT", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_RPFM_COMM_FLG_onchange = function() {
    try {
        //check fund funded flag
        if (document.MAINFORM.FUND_FLAG.value == 'Unfunded' && document.MAINFORM.COMM_FLG.value == 'No') {
            alert("Commission must Required for unfunded transaction");
            document.MAINFORM.COMM_FLG.value = 'Yes';
        }
        //check fee flag
        if (document.MAINFORM.COMM_FLG.value == 'No') {
            document.MAINFORM.PART_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, 0);
        } else {
            document.MAINFORM.PART_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) * ((document.MAINFORM.RPFM_CHG_RATE.value) / 100));
        }
        Cal_CPYT_N_PAY_AMT();
        getCPYT_DR_TTL_AMT_TTLCCY();
        getCPYT_CR_TTL_AMT_TTLCCY();
        //SYF_RPFM_set_chg_fee_to_PAYMENT_CREDIT();
        SYF_RPFM_set_chg_fee_to_PAYMENT_DEBIT();
        SYM_RPFM_Delete_credit_record();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*FLD_RPFM_COMM_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*FLD_RPFM_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_PART_CHG_AMT_onchange = function() {
    try {
        SYF_RPFM_set_chg_fee_to_PAYMENT_CREDIT();
        SYF_RPFM_set_chg_fee_to_PAYMENT_DEBIT();
        SYF_RPFM_Cal_CPYT_N_PAY_AMT();
        getCPYT_DR_TTL_AMT_TTLCCY();
        getCPYT_CR_TTL_AMT_TTLCCY();
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*FLD_RPFM_PART_CHG_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_CASH_PERCENT_onchange = function() {
    try {
        var amt = SYS_FloatMul(SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value), SYS_BeFloat(document.MAINFORM.CASH_PERCENT.value)) / 100;
        document.MAINFORM.COLL_LCY_AMT.value = SYT_AmtFormat(document.MAINFORM.COLLAT_CCY.value, amt);


        if (amt > 0) {
            SYT_ChangeFldClass(document.MAINFORM.RP_DR_AC_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RP_DR_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RP_DR_AC, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RP_CR_AC_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RP_CR_AC, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*FLD_RPFM_CASH_PERCENT_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_RECV_DT_onchange = function() {
    try {
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'RECV_DT');
        if (SYS_GetSubDays(document.MAINFORM.MAST_START_DT.name, document.MAINFORM.RECV_DT.name) < 0) {
            alert("Receive Date is not allowed in the past times!");
            document.MAINFORM.RECV_DT.value = '';
        }
        if (SYS_GetSubDays(document.MAINFORM.SYND_PART_EXP_DT.name, document.MAINFORM.RECV_DT.name) > 0) { //Added
            alert("Receive Date is not allowed more than expiry date!");
            document.MAINFORM.RECV_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*FLD_RPFM_RECV_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_RPFM_DR_AC_TYPE_onchange = function() {
    try {
        if (document.MAINFORM.RPFM_DR_AC_TYPE.value == 'NOSTRO') {
            document.MAINFORM.RPFM_DR_ID.value = '';
            document.MAINFORM.RPFM_NOSTRO_DR_AC.value = '12011101';
            document.MAINFORM.RPFM_DR_AC.value = '12011101';
            document.MAINFORM.TEMP_ACC_BRANCH.value = '99120';
        } else if (document.MAINFORM.RPFM_DR_AC_TYPE.value == 'RTGS' || document.MAINFORM.RPFM_DR_AC_TYPE.value == 'SKN') {
            document.MAINFORM.RPFM_DR_ID.value = '';
            document.MAINFORM.RPFM_NOSTRO_DR_AC.value = '19511609';
            document.MAINFORM.RPFM_DR_AC.value = '19511609';
            document.MAINFORM.TEMP_ACC_BRANCH.value = '99999';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*FLD_RPFM_RPFM_DR_AC_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_RPFM_DR_ID_onchange = function() {
    try {
        /*if (document.MAINFORM.RPFM_DR_ID.value == "") {
                                document.MAINFORM.RPFM_DR_AC.value = '';
                        }else {
                               SYS_GetCUBK('DR_BANK_AC', document.MAINFORM.RPFM_DR_ID.name);
                        }*/
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*FLD_RPFM_RPFM_DR_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_RP_DR_AC_TYPE_onchange = function() {
    try {
        if (document.MAINFORM.RP_DR_AC_TYPE.value == 'NOSTRO') {
            document.MAINFORM.RP_DR_ID.value = '';
            document.MAINFORM.RPFM_NOSTRO_DR_AC.value = '12011101';
            document.MAINFORM.RP_DR_AC.value = '12011101';
            document.MAINFORM.TEMP_ACC_BRANCH.value = '99120';
        } else if (document.MAINFORM.RP_DR_AC_TYPE.value == 'RTGS' || document.MAINFORM.RP_DR_AC_TYPE.value == 'SKN') {
            document.MAINFORM.RP_DR_ID.value = '';
            document.MAINFORM.RPFM_NOSTRO_DR_AC.value = '19511609';
            document.MAINFORM.RP_DR_AC.value = '19511609';
            document.MAINFORM.TEMP_ACC_BRANCH.value = '99999';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_ProcessGrantor.js*FLD_RPFM_RP_DR_AC_TYPE_onchange", e);
    }
}