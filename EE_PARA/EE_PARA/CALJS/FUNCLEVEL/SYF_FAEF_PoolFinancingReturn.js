var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        document.MAINFORM.FA_BUSI_STATUS.value = 'REP';
        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_TEMP_TRX_DT.value = document.MAINFORM.FA_PMT_VAL_DT.value;
        document.MAINFORM.TEMP_AMT14.value = document.MAINFORM.FA_TTL_FIN_RET_BAL.value;
        document.MAINFORM.TEMP_AMT40.value = document.MAINFORM.FA_TTL_LOAN_BAL.value;
        document.MAINFORM.FA_PAID_INT_SUM.value =''; 
        document.MAINFORM.FA_SEL_AC_AMT.value = '';

    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancingReturn.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_PMT_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancingReturn.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo('FAEF_FINANCE_RETURN', 'SYF_FAEF_Cal_RefNo');
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancingReturn.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_SEL_AC_AMT = function() {
    try {
        var FA_SEL_AC_AMT;
        FA_SEL_AC_AMT = SYS_FloatAdd(document.MAINFORM.FA_PAID_INT_SUM.value, document.MAINFORM.FA_PAID_PRIN_SUM.value);

        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, FA_SEL_AC_AMT);
        document.MAINFORM.FA_TTL_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, SYS_FloatSub(document.MAINFORM.TEMP_AMT40.value, document.MAINFORM.FA_PAID_PRIN_SUM.value));

    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancingReturn.js*SYF_FAEF_Cal_FA_SEL_AC_AMT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Interest = function() {
    try {
        var subdays1;
        var loanDueDt;
        var intChgType = document.MAINFORM.FA_INT_CHG_TYPE.value
        subdays1 = SYS_GetSubDays(document.MAINFORM.FA_LOAN_DUE_DT.name, document.MAINFORM.TRX_DT.name);
        if (subdays1 < 0 && intChgType == '1') { //For upfront and before due date            	
            SYS_InqGapi_S('Pool_FinReturn_Inq_AMZ');
            document.MAINFORM.FA_TTL_REFUND_INT.value = document.MAINFORM.IA_Y_REFUND_INT.value;
        }
        else{
        	SYS_InqGapi_S('Pool_FinReturn_Inq_ACC');
        	
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancingReturn.js*SYF_FAEF_Cal_Interest", e);
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
        DisExcpt("SYF_FAEF_PoolFinancingReturn.js*SYF_FAEF_Cal_RefNo", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_PMT_AMT = function() {
    try {
        var PMT_AMT;
        var TEMP_AMT40;
        TEMP_AMT40 = SYS_BeFloat(document.MAINFORM.TEMP_AMT40.value);
        PMT_AMT = SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value);
        if (TEMP_AMT40 < PMT_AMT) {
            SYS_CheckError(document.MAINFORM.FA_PAID_PRIN_SUM, 'Return Amount cannot exceed Financing Balance!');
            document.MAINFORM.FA_PAID_PRIN_SUM.value= '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancingReturn.js*SYF_FAEF_Chk_PMT_AMT", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_PRIN_SUM_onchange = function() {
    try {
        SYF_FAEF_Chk_PMT_AMT();
        SYF_FAEF_Cal_Interest();
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancingReturn.js*FLD_FAEF_FA_PAID_PRIN_SUM_onchange", e);
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
        rebate = document.MAINFORM.FA_REBATE_AMT.value;//zoe
        var rb_ref = document.MAINFORM.C_MAIN_REF.value + 'RB';//zoe
        var RFN_ref = document.MAINFORM.FA_SEL_ID.value + 'RFT';
        var PRN_REF = document.MAINFORM.C_MAIN_REF.value + 'PRN';
        var INT_REF = document.MAINFORM.C_MAIN_REF.value + 'INT';
        if (IntSum != 0) {
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + INT_REF + "/" + PRN_REF;
            payCCYs = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
            payAMTs = document.MAINFORM.FA_SEL_AC_AMT.value + "/" + document.MAINFORM.FA_PAID_INT_SUM.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value;
            descs = "Seller AC Amount/Interest Receivable/Loan Principal";
            ccyProtecteFlgs = "N/N/N"; //protected ccy
            actions = "S/S/S"; //save
            merges = "N/N/N";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        } else {
            dcFlgs = "D/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + PRN_REF;
            payCCYs = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
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
        
         if (SYS_BeFloat(rebate) > 0 && SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_BAL.value) ==0) {//zoe         	
            dcFlgs1 = "D/C"; //debit and credit group
            keyindex1 = rb_ref + "/" + rb_ref;
            payCCYs1 = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
            payAMTs1 = rebate + "/" + rebate;
            descs1 = "Rebate Interest/Rebate Interest";
            ccyProtecteFlgs1 = "N/N"; //protected ccy
            actions1 = "S/S"; //save            
            merges1 = "N/N";
            comp1 = "Rebate Interest";
            SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actions1, merges1, comp1);
        }
         
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancingReturn.js*SYF_FAEF_MLDC_SetDebitCreditData", e);
    }
}
