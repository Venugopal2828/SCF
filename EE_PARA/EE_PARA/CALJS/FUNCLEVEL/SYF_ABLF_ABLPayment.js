var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_LOAN_STATUS.value = 'SETL';
        document.MAINFORM.FA_PMT_CCY.value = document.MAINFORM.FA_LOAN_CCY.value;
        SYS_GetRefNo_S('ABLF_PMT', 'SYF_ABLF_SetPmtRef()');
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP1.value = SYS_BeFloat(document.MAINFORM.TTL_PMT_AMT.value);
        document.MAINFORM.FA_TEMP5.value = SYS_BeFloat(document.MAINFORM.LOAN_BAL.value);
        document.MAINFORM.FA_TEMP6.value = SYS_BeFloat(document.MAINFORM.LOAN_BAL_LMT.value);
        document.MAINFORM.FA_TEMP7.value = SYS_BeFloat(document.MAINFORM.REG_LOAN_BAL.value);
        document.MAINFORM.FA_TEMP_AMT7.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_BAL.value);
        document.MAINFORM.FA_TEMP_AMT8.value = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        document.MAINFORM.FA_TEMP_AMT9.value = SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_AMT.value);
        document.MAINFORM.FA_TEMP_DT1.value = document.MAINFORM.FA_LAST_PINT_DT.value;


    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_SetPmtRef = function(ref) {
    try {

        var UnitCode = SYS_BUSI_UNIT;
        var dt = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = dt.substr(2, 2);
        document.MAINFORM.FA_PMT_REF.value = 'ABLF' + UnitCode + year + ref + 'PMT';
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_TtlPmtAmt = function() {
    try {

        document.MAINFORM.TTL_PMT_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value) + SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_LoanBal = function() {
    try {

        document.MAINFORM.LOAN_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP5.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value);
        document.MAINFORM.LOAN_BAL_LMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP6.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) * SYS_BeFloat(document.MAINFORM.FA_LOAN_EXCH.value);
        document.MAINFORM.LOAN_BAL.value = Math.max(0, SYS_BeFloat(document.MAINFORM.LOAN_BAL.value));
        document.MAINFORM.LOAN_BAL_LMT.value = Math.max(0, SYS_BeFloat(document.MAINFORM.LOAN_BAL_LMT.value));

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_TtlLoanBal = function() {
    try {

        document.MAINFORM.FA_TTL_LOAN_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT7.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) * SYS_BeFloat(document.MAINFORM.FA_LOAN_EXCH.value);
        document.MAINFORM.REG_LOAN_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP7.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) * SYS_BeFloat(document.MAINFORM.FA_LOAN_EXCH.value);
        document.MAINFORM.FA_TTL_LOAN_BAL.value = Math.max(0, SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_BAL.value));
        document.MAINFORM.REG_LOAN_BAL.value = Math.max(0, SYS_BeFloat(document.MAINFORM.REG_LOAN_BAL.value));
        document.MAINFORM.REG_LOWEST_VAL.value = SYS_BeFloat(document.MAINFORM.REG_LOAN_BAL.value) * 100 / SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value);
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FA_LAST_PINT_DT.value = SYS_BUSI_DATE;
        SYF_ABLF_Cal_LoanBal();
        SYF_ABLF_Cal_TtlLoanBal();
        SYF_ABLF_Cal_TtlPmtAmt();
        SYF_ABLF_Cal_LimitBal();
        //document.MAINFORM.FA_LOAN_INT_AMT.value=SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT9.value)+SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_AMT.value);

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_PAID_PRIN_SUM = function() {
    try {

        if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '1') {
            document.MAINFORM.FA_PAID_PRIN_SUM.value = document.MAINFORM.LOAN_BAL.value;
            SYT_ChangeFldClass(document.MAINFORM.FA_PAID_PRIN_SUM, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_PAID_PRIN_SUM, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Check_PAID_PRIN_SUM = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) > SYS_BeFloat(document.MAINFORM.LOAN_BAL.value)) {
            document.MAINFORM.FA_PAID_PRIN_SUM.value = 0;
            alert('Total Principal Paid cannot be more than Loan Balance.');
        }
        if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '2' && SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) == SYS_BeFloat(document.MAINFORM.LOAN_BAL.value)) {
            document.MAINFORM.FA_PAID_PRIN_SUM.value = 0;
            alert('Unclear payment, Total Principal Paid cannot be equal to Loan Balance.');
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_PmtAmt = function() {
    try {

        var PaidPrinandIntAmt = SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value);
        document.MAINFORM.FA_PMT_AMT.value = PaidPrinandIntAmt;
        /*if(document.MAINFORM.FA_INT_CHG_TYPE.value=='1'){
	if(document.MAINFORM.FA_PMT_CLEAR_TYPE.value=='1'){
		document.MAINFORM.FA_PMT_AMT.value=SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value);
	}
	else if(SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value)<SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value)){
		document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value);
	}
}
else{
	if(document.MAINFORM.FA_PMT_CLEAR_TYPE.value=='1'){
		document.MAINFORM.FA_PMT_AMT.value=PaidPrinandIntAmt;
	}
	else if(SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value)<SYS_BeFloat(PaidPrinandIntAmt)){
		document.MAINFORM.FA_PMT_AMT.value = PaidPrinandIntAmt;
	}
}*/
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_InquireInterest_eLoan = function() {
    try {

        var invint;
        var overDueInt;
        var intChgType = document.MAINFORM.FA_INT_CHG_TYPE.value;
        var subdays1 = SYS_GetSubDays(document.MAINFORM.FA_LOAN_DUE_DT.name, document.MAINFORM.TRX_DT.name);
        if (subdays1 < 0 && intChgType == '1') { //For upfront and before due date            	
            SYS_InqGapi_S('ABLF_Settle_Inquire_AMZ');
            document.MAINFORM.FA_TTL_REFUND_INT.value = document.MAINFORM.IA_Y_REFUND_INT.value;
            EEHtml.fireEvent(document.MAINFORM.FA_TTL_REFUND_INT, "onchange");
        } else { //for upfront and after due date
            SYS_InqGapi_S('ABLF_Settle_Inquire_ACC');
            document.MAINFORM.FA_PAID_INT_SUM.value = document.MAINFORM.FA_TEMP_AMT11.value;
            document.MAINFORM.FA_OVDUE_INT_SUM.value = document.MAINFORM.FA_TEMP_AMT12.value;
            EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_SUM, "onchange");
            EEHtml.fireEvent(document.MAINFORM.FA_OVDUE_INT_SUM, "onchange");
        }
        SYF_ABLF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_AmtToCust = function() {
    try {

        document.MAINFORM.CUST_AC_AMT1.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) - (SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value));
        document.MAINFORM.CUST_AC_AMT1.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.CUST_AC_AMT1.value);
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Check_PmtAmt = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.CUST_AC_AMT1.value) < 0) {
            alert("Payment Amount is not enough to pay loan principal and interest");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_ABLF_Check_PmtAmt()) {
            return false;
        }
        if (!SYF_ABLF_Chk_MultiDebit_MultiCredit_BAL()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_MLDC_SetDebitCreditData = function() {
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
        IntSum = SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value);
        var CustCRAmt = SYS_BeFloat(document.MAINFORM.CUST_AC_AMT1.value);
        if (IntSum > 0 && document.MAINFORM.FA_INT_CHG_TYPE.value == '2') {
            if (CustCRAmt > 0) {
                dcFlgs = "D/C/C/C"; //debit and credit group
                keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_PMT_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_CUST_ID.value;
                payCCYs = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
                payAMTs = document.MAINFORM.FA_PMT_AMT.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value + "/" + document.MAINFORM.FA_PAID_INT_SUM.value + "/" + document.MAINFORM.CUST_AC_AMT1.value;
                descs = "Payment Amount/Loan Principal/Interest Receivable/Amount to Customer";
                ccyProtecteFlgs = "N/N/N/N"; //protected ccy
                actions = "S/S/S/S"; //save
                merges = "N/N/N/N";
            } else {
                dcFlgs = "D/C/C"; //debit and credit group
                keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_PMT_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value;
                payCCYs = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
                payAMTs = document.MAINFORM.FA_PMT_AMT.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value + "/" + document.MAINFORM.FA_PAID_INT_SUM.value;
                descs = "Payment Amount/Loan Principal/Interest Receivable";
                ccyProtecteFlgs = "N/N/N"; //protected ccy
                actions = "S/S/S"; //save
                merges = "N/N/N";
            }
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        } else {
            if (CustCRAmt > 0) {
                dcFlgs = "D/C/C"; //debit and credit group
                keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_PMT_REF.value + "/" + document.MAINFORM.FA_CUST_ID.value;
                payCCYs = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
                payAMTs = document.MAINFORM.FA_PMT_AMT.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value + "/" + document.MAINFORM.CUST_AC_AMT1.value;
                descs = "Payment Amount/Loan Principal/Amount to Customer";
                ccyProtecteFlgs = "N/N/N"; //protected ccy
                actions = "S/S/S"; //save
                merges = "N/N/N";
            } else {
                dcFlgs = "D/C"; //debit and credit group
                keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_PMT_REF.value;
                payCCYs = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
                payAMTs = document.MAINFORM.FA_PMT_AMT.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value;
                descs = "Payment Amount/Loan Principal";
                ccyProtecteFlgs = "N/N"; //protected ccy
                actions = "S/S"; //save
                merges = "N/N";
            }

            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);

            if (SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value) > 0) {
                descs1 = "Refund Interest";
                dcFlgs1 = "D/C"; //debit and credit group
                keyindex1 = document.MAINFORM.FA_CUST_ID.value + "/" + document.MAINFORM.C_MAIN_REF.value;
                payCCYs1 = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
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
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Chk_MultiDebit_MultiCredit_BAL = function() {
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
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                //recordTypeTemp = record['N_MLDC_AMT'];
                sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiDebitSummary'));
                if (sum != (SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value), SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value)))) {
                    alert('Multi Debit Amount is not equal to Payment Amount!');
                    return false;
                }
            }
        }


        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiCreditSummary'));
            if (sum != (SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value), SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value)))) {
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_LimitBal = function() {
    try {

        if (document.MAINFORM.FA_LMT_TYPE.value == '1') {
            document.MAINFORM.FA_LMT_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) + SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) * SYS_BeFloat(document.MAINFORM.FA_LOAN_EXCH.value);
            document.MAINFORM.FA_LMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_BAL.value);
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_PAID_INT_SUM_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_PAID_PRIN_SUM_onchange = function(event) {
    try {
        SYF_ABLF_Check_PAID_PRIN_SUM();
        SYF_ABLF_InquireInterest_eLoan();
        SYF_ABLF_Cal_PmtAmt();
        EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT, 'onchange');
        SYF_ABLF_Cal_AmtToCust();
        SYF_ABLF_MLDC_SetDebitCreditData();


    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_PMT_AMT_onchange = function(event) {
    try {
        SYF_ABLF_Cal_AmtToCust();
        SYF_ABLF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_PMT_CLEAR_TYPE_onchange = function(event) {
    try {
        SYF_ABLF_Cal_PAID_PRIN_SUM();
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_PRIN_SUM, 'onchange');
        SYF_ABLF_Cal_PmtAmt();
        EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT, 'onchange');

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLPayment.js", e);
    }
}