var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        //  PO_STATUS(); 
        document.MAINFORM.FA_PMT_AMT.value = SYS_FloatAdd(document.MAINFORM.FA_PAID_INT_SUM.value, document.MAINFORM.FA_PAID_PRIN_SUM.value);
        document.MAINFORM.FA_PAID_PRIN_AMT.value = document.MAINFORM.FA_PAID_PRIN_SUM.value;
        document.MAINFORM.FA_PAID_INT_AMT.value = document.MAINFORM.FA_PAID_INT_SUM.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        var _do;
        var arrayvalue;
        var flag;
        var i;
        var record;
        var recordTypeTemp;
        var num
        _do = SYS_getDoByXpath('Settle_loan_po');
        flag = false;

        num = SYS_getcurrRecordCount("Settle_loan_po");
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do);
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = record['FA_LOAN_PAID_AMT'];
                if (recordTypeTemp == '' && recordTypeTemp == null && recordTypeTemp == 0) {
                    flag = true;
                }
            }
        }
        if (flag) {
            alert('Please edit the records before confirm the transaction!');
            return false;
        }

        if (!SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL()) {
            return false;
        }
        if (!SYT_MLDC_ValidateBalance()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        document.MAINFORM.FA_BUSI_STATUS.value = 'REP';
        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_TEMP_TRX_DT.value = document.MAINFORM.FA_PMT_VAL_DT.value;
        document.MAINFORM.TEMP_AMT14.value = document.MAINFORM.FA_TTL_FIN_RET_BAL.value;
        document.MAINFORM.TEMP_AMT40.value = document.MAINFORM.PO_LOAN_BAL.value;
        document.MAINFORM.TEMP_AMT4.value = document.MAINFORM.CPYT_STL_AMT.value;
        document.MAINFORM.FA_SEL_AC_AMT.value = '';
        document.MAINFORM.FA_PAID_INT_SUM.value = '';
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.PO_CCY.value;
        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.PO_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        if ("PM".indexOf(SYS_FUNCTION_TYPE) > -1) {

            SYS_GetDataForDO_S("POReturnFin_1PO", "N", false, '', "Settle_loan_po");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PO_STATUS = function() {
    try {
        var po_loan_avl = SYS_BeFloat(document.MAINFORM.PO_LOAN_AVL.value);
        var po_loan_bal = SYS_BeFloat(document.MAINFORM.PO_LOAN_BAL.value);
        if (po_loan_avl == 0 && po_loan_bal == 0) {
            document.MAINFORM.PO_STATUS.value = 'Closed';

        } else if (po_loan_bal > 0) {
            document.MAINFORM.PO_STATUS.value = 'Partially Paid';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*PO_STATUS", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_FIN_TYPE.value = 'PO';
        //SYT_ChangeFldClass(document.MAINFORM.FA_FIN_TYPE, 'P', 'N');
        SYT_RELE_CREA_BY();
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        SYF_FAEF_POF_INVLOAN_PEND_chk();
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo('FAEF_FINANCE_RETURN', 'SYF_FAEF_Cal_RefNo');
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_SEL_AC_AMT = function() {
    try {
        var FA_SEL_AC_AMT;
        FA_SEL_AC_AMT = Math.max(SYS_FloatSub(SYS_FloatAdd(document.MAINFORM.FA_PAID_INT_SUM.value, document.MAINFORM.FA_PAID_PRIN_SUM.value), document.MAINFORM.TEMP_AMT30.value), 0);

        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_SEL_AC_CCY.value, FA_SEL_AC_AMT);

        document.MAINFORM.PO_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_SEL_AC_CCY.value, SYS_FloatSub(document.MAINFORM.TEMP_AMT40.value, document.MAINFORM.FA_PAID_PRIN_SUM.value));
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*SYF_FAEF_Cal_FA_SEL_AC_AMT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_RefNo = function(ref) {
    try {
        var UnitCode;
        var date;
        var pre;
        var sub;
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'REP';
        document.MAINFORM.FA_PMT_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_PMT_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*SYF_FAEF_Cal_RefNo", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL = function() {
    try {
        var _do;
        var arrayvalue;
        var i;
        var record;
        var recordTypeTemp;
        var sum;
        _do = SYS_getDoByXpath('MultiDebitSummary');
        num = SYS_getcurrRecordCount("MultiDebitSummary");

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do);
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiDebitSummary'));
                if (sum != SYS_FloatAdd(document.MAINFORM.FA_PAID_PRIN_SUM.value, document.MAINFORM.FA_PAID_INT_SUM.value, document.MAINFORM.FA_TTL_REFUND_INT.value)) {
                    alert('Multi Debit Amount is not equal to Payment Amount!');
                    return false;
                }
            }
        }


        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiCreditSummary'));
            if (sum != SYS_FloatAdd(document.MAINFORM.FA_PAID_PRIN_SUM.value, document.MAINFORM.FA_PAID_INT_SUM.value, document.MAINFORM.FA_TTL_REFUND_INT.value)) {
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData = function() {
    try {
        var IntSum;
        var actions;
        var ccyProtecteFlgs;
        var comp;
        var dcFlgs;
        var descs;
        var keyindex;
        var merges;
        var payAMTs;
        var payCCYs;
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "Payment";
        IntSum = document.MAINFORM.FA_PAID_INT_SUM.value;
        var RFN_ref = document.MAINFORM.FA_SEL_ID.value + 'RFT';
        var PRN_REF = document.MAINFORM.C_MAIN_REF.value + 'PRN';
        var INT_REF = document.MAINFORM.C_MAIN_REF.value + 'INT';
        document.MAINFORM.TEMP_BP_AMT9.value = SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value);
        if (IntSum != 0) {
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + INT_REF + "/" + PRN_REF;
            payCCYs = document.MAINFORM.FA_SEL_AC_CCY.value + "/" + document.MAINFORM.FA_SEL_AC_CCY.value + "/" + document.MAINFORM.FA_SEL_AC_CCY.value;
            payAMTs = document.MAINFORM.FA_SEL_AC_AMT.value + "/" + document.MAINFORM.FA_PAID_INT_SUM.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value;
            descs = "Seller AC Amount/Interest Receivable/Loan Principal";
            ccyProtecteFlgs = "N/N/N"; //protected ccy
            actions = "S/S/S"; //save
            merges = "N/N/N";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        } else {
            dcFlgs = "D/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + PRN_REF;
            payCCYs = document.MAINFORM.FA_SEL_AC_CCY.value + "/" + document.MAINFORM.FA_SEL_AC_CCY.value;
            payAMTs = document.MAINFORM.FA_SEL_AC_AMT.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value;
            descs = "Seller AC Amount/Payment Amount";
            ccyProtecteFlgs = "N/N"; //protected ccy
            actions = "S/S"; //save
            merges = "N/N";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);

            if (SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value) > 0) {
                descs1 = "Refund Interest";
                dcFlgs1 = "D/C"; //debit and credit group
                keyindex1 = document.MAINFORM.FA_SEL_ID.value + "/" + RFN_ref;
                payCCYs1 = document.MAINFORM.FA_SEL_AC_CCY.value + "/" + document.MAINFORM.FA_SEL_AC_CCY.value;
                payAMTs1 = document.MAINFORM.FA_TTL_REFUND_INT.value + "/" + document.MAINFORM.FA_TTL_REFUND_INT.value;
                descs1 += "/Refund Interest";
                ccyProtecteFlgs1 = "N/N"; //protected ccy
                actions1 = "S/S"; //save
                merges1 = "N/N";
                comp1 = "Refund Interest";
                SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actions1, merges1, comp1);
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*SYF_FAEF_MLDC_SetDebitCreditData", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData_INV = function() {
    try {
        var IntSum;
        var actions;
        var ccyProtecteFlgs;
        var comp;
        var dcFlgs;
        var descs;
        var keyindex;
        var merges;
        var payAMTs;
        var payCCYs;
        var TEMP_AMT30;
        var debit;
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        var TEMP_AMT30 = SYS_BeFloat(document.MAINFORM.TEMP_AMT30.value);
        comp = "SUSPEND";
        IntSum = document.MAINFORM.FA_PAID_INT_SUM.value;
        var RFN_ref = document.MAINFORM.FA_SEL_ID.value + 'RFT';
        var PRN_REF = document.MAINFORM.C_MAIN_REF.value + 'PRN';
        var INT_REF = document.MAINFORM.C_MAIN_REF.value + 'INT';
        if (TEMP_AMT30 > 0) {
            //debit = SYS_FloatSub(SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value), SYS_BeFloat(TEMP_AMT30));
            document.MAINFORM.TEMP_BP_AMT9.value = SYS_FloatSub(SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value), SYS_BeFloat(TEMP_AMT30));
            if (IntSum != 0) {
                dcFlgs = "D/D/C/C"; //debit and credit group
                keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value + "/" + INT_REF + "/" + PRN_REF;
                payCCYs = document.MAINFORM.FA_SEL_AC_CCY.value + "/" + document.MAINFORM.FA_SEL_AC_CCY.value + "/" + document.MAINFORM.FA_SEL_AC_CCY.value + "/" + document.MAINFORM.FA_SEL_AC_CCY.value;
                payAMTs = document.MAINFORM.TEMP_AMT30.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value + "/" + document.MAINFORM.FA_PAID_INT_SUM.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value;
                descs = "Amount from temporary Account/Seller AC Amount/Interest Receivable/Loan Principal";
                ccyProtecteFlgs = "N/N/N/N"; //protected ccy
                actions = "S/S/S/S"; //save
                actionA = "D/D/D/D"; //save
                merges = "N/N/N/N";
                SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actionA, merges, comp);
                SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
            } else {
                if (SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value) > 0) {
                    dcFlgs = "D/D/C"; //debit and credit group
                    keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value + "/" + PRN_REF;
                    payCCYs = document.MAINFORM.FA_SEL_AC_CCY.value + "/" + document.MAINFORM.FA_SEL_AC_CCY.value + "/" + document.MAINFORM.FA_SEL_AC_CCY.value;
                    payAMTs = document.MAINFORM.TEMP_AMT30.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value;
                    descs = "Amount from temporary Account/Seller AC Amount/Payment Amount";
                    ccyProtecteFlgs = "N/N"; //protected ccy
                    actions = "S/S/S"; //save
                    actionA = "D/D/D"; //save
                    merges = "N/N/N";
                    SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actionA, merges, comp);
                    SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
                }
                if (SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value) == 0) {
                    dcFlgs = "D/C"; //debit and credit group
                    keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + PRN_REF;
                    payCCYs = document.MAINFORM.FA_SEL_AC_CCY.value + "/" + document.MAINFORM.FA_SEL_AC_CCY.value;
                    payAMTs = document.MAINFORM.TEMP_AMT30.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value;
                    descs = "Amount from temporary Account/Payment Amount";
                    ccyProtecteFlgs = "N/N"; //protected ccy
                    actions = "S/S"; //save
                    actionA = "D/D"; //save
                    merges = "N/N";
                    SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actionA, merges, comp);
                    SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);

                }

                if (SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value) > 0) {
                    descs1 = "Refund Interest";
                    dcFlgs1 = "D/C"; //debit and credit group
                    keyindex1 = RFN_ref + "/" + RFN_ref;
                    payCCYs1 = document.MAINFORM.FA_SEL_AC_CCY.value + "/" + document.MAINFORM.FA_SEL_AC_CCY.value;
                    payAMTs1 = document.MAINFORM.FA_TTL_REFUND_INT.value + "/" + document.MAINFORM.FA_TTL_REFUND_INT.value;
                    descs1 += "/Refund Interest";
                    ccyProtecteFlgs1 = "N/N"; //protected ccy
                    actions1 = "S/S"; //save
                    merges1 = "N/N";
                    comp1 = "Refund Interest";
                    SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actions1, merges1, comp1);
                }
            }

        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*SYF_FAEF_MLDC_SetDebitCreditData_INV", e);
    }
}

csFuncLevelProto.SYF_FAEF_POF_INVLOAN_PEND_chk = function() {
    try {
        SYS_GetTableDataByRule_S('POF_INVLOAN_PEND_chk', '1', 'Y', "Y");
        if (SYS_MULTI_DATA.length > 0) {
            SYS_highTrxButton("_cancel");
            alert("Invoice Financing belongs to this PO is in processing! \n Please release it first!");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*SYF_FAEF_POF_INVLOAN_PEND_chk", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*FLD_FAEF_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*FLD_FAEF_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*FLD_FAEF_FA_PAID_INT_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_PRIN_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
        // SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*FLD_FAEF_FA_PAID_PRIN_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn.js*FLD_FAEF_view_1_onclick", e);
    }
}