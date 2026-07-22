var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        // document.MAINFORM.FA_TEMP_AMT13.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) * SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);
        document.MAINFORM.FA_TEMP_AMT13.value = document.MAINFORM.FA_TTL_LOAN_AMT.value;
        /*if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
                var node = SYS_getDoByXpath("POFinance");
                var arrayvalue = SYS_getRecords(node);
                var mData = [];
                var record;
                for (var i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    var po_loan_amt = SYS_getValFromRec(record, 'PO_LOAN_AMT');
                    if (SYS_BeFloat(po_loan_amt) <= 0) {
                        SYS_setValToRec(record, 'recordType', 'C');
                        mData.push(record);
                    }
                    SYS_setValToRec(record, 'FA_DOC_CR_AC', document.MAINFORM.FA_DOC_CR_AC_TEMP.value);
                    mData.push(record);
                }
                SYS_reLoadGrid(node, arrayvalue);
            }*/
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_FAEF_Chk_RecordStatus()) {
            return false;
        }
        if (!SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL()) {
            return false;
        }
        if (!SYT_MLDC_ValidateBalance()) {
            return false;
        }
        if (!SYF_FAEF_Chk_ReqLoanAmt_submit()) {
            return false;
        }
        if (!SYF_FAEF_Check_INV_LOAN()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_LOAN_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'LOAN';
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_INT_CHG_TYPE.value = '2';
        document.MAINFORM.TEMP_TRX_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_SBR_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_TTL_PO_LOAN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TTL_PO_LOAN_AMT.value);
        document.MAINFORM.FA_FIN_TYPE.value = 'PO';
        document.MAINFORM.FA_LOAN_PERC.value = SYS_BeFloat(document.MAINFORM.PO_MAX_LOAN_PERC.value);
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        document.MAINFORM.FA_FIN_INFO.value = '';
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_ExchRate_FIX_PENDING();
        }
        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == 'EC') {
            //SYF_FAEF_MPO_Financing_back('P');
        }


        SYF_FAEF_Cal_FA_LOAN_CCY();
        SYF_FAEF_Get_BaseDay_CCYDec();
        SYF_FAEF_GetExchangeRate();
        //SYF_FAEF_Get_ratetype();
        SYF_FAEF_FA_TEMP_AMT10();
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        exchRateOnLoadFlag = false;

        SYS_GetRefNo('SCF_INV_FINANCE', 'SYF_FAEF_Cal_RefNo');
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_LOAN_CCY = function() {
    try {
        document.MAINFORM.FA_LOAN_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Cal_FA_LOAN_CCY", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_LOAN_INT_RT = function() {
    try {
        var FA_IRT_SPREAD; // Utility Auto Fix Comments
        var FA_LOAN_INT_RT; // Utility Auto Fix Comments
        var XBOR_RT; // Utility Auto Fix Comments
        XBOR_RT = SYS_BeFloat(document.MAINFORM.XBOR_RT.value);
        FA_IRT_SPREAD = SYS_BeFloat(document.MAINFORM.FA_IRT_SPREAD.value);
        FA_LOAN_INT_RT = XBOR_RT + FA_IRT_SPREAD;
        document.MAINFORM.FA_LOAN_INT_RT.value = DecimalFormat(FA_LOAN_INT_RT, 6);
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Cal_FA_LOAN_INT_RT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_SEL_AC_AMT = function() {
    try {
        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value);
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Cal_FA_SEL_AC_AMT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_TTL_LOAN_BAL = function() {
    try {
        document.MAINFORM.FA_TTL_PO_LOAN_BAL.value = document.MAINFORM.FA_TTL_LOAN_AMT.value;
        document.MAINFORM.FA_TTL_LOAN_BAL.value = document.MAINFORM.FA_TTL_LOAN_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Cal_FA_TTL_LOAN_BAL", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_RefNo = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(0, 4);
        document.MAINFORM.FA_LOAN_ID.value = pre + UnitCode + year.substr(2, 4) + ref + 'FIN';
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_LOAN_ID.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Cal_RefNo", e);
    }
}

csFuncLevelProto.SYF_FAEF_Check_INV_LOAN = function() {
    try {
        document.MAINFORM.FA_BPOINV_LOAN_ID.value = '';
        SYS_GetTableDataByRule_S('Get_Loan_Amont_SBR', '1', 'Y');
        if (document.MAINFORM.FA_BPOINV_LOAN_ID.value != null && document.MAINFORM.FA_BPOINV_LOAN_ID.value != '' && document.MAINFORM.FA_BPOINV_LOAN_ID.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_BPOINV_LOAN_ID, "There is invoice uploaded under this PO, PO finance is not allowed.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Check_INV_LOAN", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        var sum; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiDebitSummary");

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiDebitSummary'));
            if (sum != SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value), SYS_BeFloat(document.MAINFORM.FA_REBATE_AMT.value))) {
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }


        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiCreditSummary'));
            if (sum != SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value), SYS_BeFloat(document.MAINFORM.FA_REBATE_AMT.value))) {
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_RecordStatus = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var docNo; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var loanAmt; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_TTL_LOAN_AMT.value == 0) {
            alert('Please do Finance before you confirm the Transaction!');
            return false;

        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Chk_RecordStatus", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_ReqLoanAmt = function() {
    try {
        var reqLoanAmt = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        var LimitBal = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        var ttlLoanAvl = SYS_BeFloat(document.MAINFORM.TTL_LOAN_AVL.value);
        var doc_limt_exch = SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);
        if ((document.MAINFORM.FA_BUSI_TYPE.value == 'POF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RF') && reqLoanAmt * doc_limt_exch > LimitBal) {
            alert('Request Loan Amount cannot more than SBR Limit Balance!');
            return false;
        }
        if (reqLoanAmt > ttlLoanAvl) {
            alert('Request Loan Amount cannot more than Total Available for Finance!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Chk_ReqLoanAmt", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_ReqLoanAmt_submit = function() {
    try {
        var reqLoanAmt = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        var LimitBal = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        var ttlLoanAvl = SYS_BeFloat(document.MAINFORM.TTL_LOAN_AVL.value);
        var doc_limt_exch = SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);
        if ((document.MAINFORM.FA_BUSI_TYPE.value == 'POF') && reqLoanAmt * doc_limt_exch > LimitBal) {
            alert('Request Loan Amount cannot more than SBR Limit Balance!');
            return false;
        }
        if (reqLoanAmt > ttlLoanAvl) {
            alert('Request Loan Amount cannot more than Total Available for Finance!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Chk_ReqLoanAmt_submit", e);
    }
}

csFuncLevelProto.SYF_FAEF_FA_TEMP_AMT10 = function() {
    try {
        document.MAINFORM.FA_TEMP_AMT10.value = SYS_BeFloat(document.MAINFORM.FA_TTL_INV_BAL.value) * SYS_BeFloat(document.MAINFORM.PO_MAX_LOAN_PERC.value) / 100 - SYS_BeFloat(document.MAINFORM.FA_TTL_PO_LOAN_AMT.value);
        document.MAINFORM.FA_TEMP_AMT10.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TEMP_AMT10.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_FA_TEMP_AMT10", e);
    }
}

csFuncLevelProto.SYF_FAEF_GetExchangeRate = function() {
    try {
        if (document.MAINFORM.FA_LMT_CCY.value != '' && document.MAINFORM.FA_DOC_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_LMT_CCY.value, 'Booking Rate', 'EXCH_RT6');
            EEHtml.fireEvent(document.MAINFORM.EXCH_RT6, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_GetExchangeRate", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_AVL_PO4Finance = function() {
    try {
        SYS_InqCUBK_byCondition('Get_AVL_PO4Finance', '1');
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Get_AVL_PO4Finance", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_BaseDay_CCYDec = function() {
    try {
        SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_BaseDay_CCYDec_1', '1', 'Y');
        document.MAINFORM.FA_TEMP6.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Get_BaseDay_CCYDec", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_ratetype = function() {
    try {
        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'M');
            EEHtml.fireEvent(document.MAINFORM.FA_IRT_SPREAD, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_Get_ratetype", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData = function() {
    try {
        var IntSum; // Utility Auto Fix Comments
        var actions; // Utility Auto Fix Comments
        var ccyProtecteFlgs; // Utility Auto Fix Comments
        var comp; // Utility Auto Fix Comments
        var dcFlgs; // Utility Auto Fix Comments
        var descs; // Utility Auto Fix Comments
        var keyindex; // Utility Auto Fix Comments
        var merges; // Utility Auto Fix Comments
        var payAMTs; // Utility Auto Fix Comments
        var payCCYs; // Utility Auto Fix Comments
        var minus_rebate;
        var rebate;
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        IntSum = document.MAINFORM.FA_PAID_INT_SUM.value;
        rebate = document.MAINFORM.FA_REBATE_AMT.value;
        minus_rebate = SYS_FloatSub(IntSum, rebate);
        var rb_ref = document.MAINFORM.C_MAIN_REF.value + 'RB';
        if (IntSum != 0) {
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.FA_PAID_INT_SUM.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            descs = "Total Loan Amt/Upfront Interest Amt/Amount to Seller";
            ccyProtecteFlgs = "N/N/N"; //protected ccy
            actions = "S/S/S"; //save
            merges = "N/N/N";
            comp = "Finance";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        } else if (document.MAINFORM.FA_INT_CHG_TYPE.value == '2') {
            dcFlgs = "D/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            descs = "Total Loan Amt/Amount to Seller";
            ccyProtecteFlgs = "N/N"; //protected ccy
            actions = "S/S"; //save
            merges = "N/N";
            comp = "Finance";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        }

        if (rebate > 0) {
            dcFlgs1 = "D/C"; //debit and credit group
            keyindex1 = rb_ref + "/" + rb_ref;
            payCCYs1 = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
            payAMTs1 = rebate + "/" + rebate;
            descs1 = "Rebate Interest/Rebate Interest";
            ccyProtecteFlgs1 = "N/N"; //protected ccy
            actions1 = "S/S"; //save
            merges1 = "N/N";
            comp1 = "Rebate Interest";
            SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actions1, merges1, comp1);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_MLDC_SetDebitCreditData", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy = function(flag) {
    try {
        if (flag == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'M');
            //  SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_Financing_back = function(tag) {
    try {
        if (tag == 'M') {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'O');
            if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '1') {
                SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'M');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_MPO_Financing_back", e);
    }
}

csFuncLevelProto.SYF_FAEF_getDOdata_POFinance = function() {
    try {
        var arrayvalue;
        var i;
        var id;
        var POref;
        var mData;
        var node;
        var num;
        var record;
        var PO_AMT;
        var ORG_TTL_PO_LOAN_AMT;
        var po_loan_avl;
        document.MAINFORM.FA_TTL_LOAN_AMT.value = 0;
        document.MAINFORM.FA_PAID_INT_SUM.value = 0;
        document.MAINFORM.FA_SEL_AC_AMT.value = 0;
        var intchgtype = document.MAINFORM.FA_INT_CHG_TYPE.value;
        var fintype = document.MAINFORM.FA_FIN_TYPE.value;
        if (fintype == '' || fintype == null) {
            alert('Please input the Financing Type!');
            return;
        }
        if (intchgtype == '' || intchgtype == null) {
            alert('Please input the interest charge type!');
            return;
        }
        //SYS_GetDataForDO_S("POFinance", "A", false, '', "POFinance")
        {
            var para = {
                ruleName: "POFinance",
                status: "A",
                showError: false,
                xpathFordo: "POFinance",
                reqAMTFldNm: "FA_TEMP_AMT8",
                singleAMTFldNm: "PO_AMT",
                percFldNm: "FA_LOAN_PERC"
            };
            SYS_GetDynDataForDO_S(para);
        }
        num = SYS_getcurrRecordCount("POFinance");
        if (num > 0) {
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('1');
        } else {
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2');
        }
        node = SYS_getDoByXpath("POFinance");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            SYS_setFieldValue(node, id, "FA_LOAN_INT_AMT", 0);
            SYS_setFieldValue(node, id, "PO_LOAN_AMT", 0);
            SYS_setFieldValue(node, id, "PO_LOAN_EBAL", 0);
            POref = SYS_getValFromRec(record, 'PO_REF');
            document.MAINFORM.FA_TEMP2.value = POref;
            PO_AMT = SYS_getValFromRec(record, 'PO_AMT');
            ORG_TTL_PO_LOAN_AMT = SYS_getValFromRec(record, 'FA_TEMP_AMT15');
            po_loan_avl = SYS_BeFloat(PO_AMT) * SYS_BeFloat(document.MAINFORM.PO_MAX_LOAN_PERC.value) / 100 - SYS_BeFloat(ORG_TTL_PO_LOAN_AMT);
            SYS_setValToRec(record, "PO_LOAN_AVL", po_loan_avl);
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        document.MAINFORM.FA_TEMP1.value = SYS_getFieldSumValue(node, 'PO_LOAN_AVL', document.MAINFORM.FA_TEMP6.value);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP1.value);
        document.MAINFORM.TTL_LOAN_AVL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
        document.MAINFORM.TTL_LOAN_AVL.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
        document.MAINFORM.FA_TTL_LOAN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*SYF_FAEF_getDOdata_POFinance", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DOC_CCY_onchange = function(event) {
    try {
        SYF_FAEF_Get_ratetype();
        SYF_FAEF_Cal_FA_LOAN_CCY();
        SYF_FAEF_Get_BaseDay_CCYDec();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_CCY, 'onChange');
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
        SYF_FAEF_GetExchangeRate();
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*FLD_FAEF_FA_DOC_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*FLD_FAEF_FA_PAID_INT_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TEMP_AMT8_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) > SYS_BeFloat(document.MAINFORM.PO_AVAL_FOR_FUNDING.value)) {
            alert('Request Financing Amount cannot be larger than Available Amount for Finance!');
            document.MAINFORM.FA_TEMP_AMT8.value = 0;
        }
        var aa = SYS_getDoByXpath('POFinance');
        aa.clearAll(true);
        document.MAINFORM.FA_TTL_LOAN_AMT.value = 0;
        document.MAINFORM.FA_PAID_INT_SUM.value = 0;
        document.MAINFORM.FA_REBATE_AMT.value = 0;
        document.MAINFORM.FA_SEL_AC_AMT.value = 0;
        SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TEMP_AMT8.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*FLD_FAEF_FA_TEMP_AMT8_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_LOAN_AMT_onchange = function(event) {
    try {
        SYF_FAEF_Chk_ReqLoanAmt();
        SYF_FAEF_Cal_FA_TTL_LOAN_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_PO_LOAN_BAL, 'onchange');
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*FLD_FAEF_FA_TTL_LOAN_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_PO_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.PO_NO.value != '') {
            SYS_GetCUBK_S('Get_AVL_PO4Finance', document.MAINFORM.PO_NO.name);
            document.MAINFORM.FA_BPOINV_LOAN_ID.value = '';
            SYS_GetTableDataByRule_S('Get_Loan_Amont_SBR', '1', 'Y');
            if (document.MAINFORM.FA_BPOINV_LOAN_ID.value != null && document.MAINFORM.FA_BPOINV_LOAN_ID.value != '' && document.MAINFORM.FA_BPOINV_LOAN_ID.value != 'null') {
                SYS_CheckError(document.MAINFORM.FA_BPOINV_LOAN_ID, "There is invoice upload under this PO, PO finance is not allowed.");

                document.MAINFORM.PO_NO.value = '';
                var aa = SYS_getDoByXpath('POFinance');
                aa.clearAllDataSets(true);
                return false;
            } else {

                SYS_GetCUBK_S('Get_PO_REF', document.MAINFORM.PO_REF.name + ";" + document.MAINFORM.FA_SBR_REF.name);

                SYS_GetDataForDO_S("PODetail_1PO", "A", false, '', "POFinance");
                num = SYS_getcurrRecordCount("POFinance");
                if (num > 0) {
                    SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('1');
                } else {
                    SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2');
                }
                node = SYS_getDoByXpath("POFinance");
                arrayvalue = SYS_getRecords(node);
                mData = [];
                for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                    record = arrayvalue[i];
                    id = SYS_getRecID(record);
                    SYS_setFieldValue(node, id, "FA_LOAN_INT_AMT", 0);
                    SYS_setFieldValue(node, id, "PO_LOAN_AMT", 0);
                    SYS_setFieldValue(node, id, "PO_LOAN_EBAL", 0);
                    POref = SYS_getValFromRec(record, 'PO_REF');
                    document.MAINFORM.FA_TEMP2.value = POref;
                    PO_AMT = SYS_getValFromRec(record, 'PO_AMT');
                    ORG_TTL_PO_LOAN_AMT = SYS_getValFromRec(record, 'FA_TEMP_AMT15');
                    po_loan_avl = SYS_BeFloat(PO_AMT) * SYS_BeFloat(document.MAINFORM.PO_MAX_LOAN_PERC.value) / 100 - SYS_BeFloat(ORG_TTL_PO_LOAN_AMT);
                    //SYS_setValToRec(record, "PO_LOAN_AVL", po_loan_avl);
                    // SYS_setValToRec(record, "TSU_TTL_NET_AMT", po_loan_avl);
                    SYS_setValToRec(record, "FA_LOAN_DUE_DT", SYS_getValFromRec(record, 'PO_DUE_DT'));
                    SYS_setValToRec(record, "FA_LOAN_VAL_DT", SYS_getValueFromMain('FA_LOAN_VAL_DT'));
                    SYS_setValToRec(record, "FA_LOAN_INT_RT", SYS_getValueFromMain('FA_LOAN_INT_RT'));
                    //SYS_setValToRec(record, "PO_LOAN_ID", SYS_getValueFromMain('FA_LOAN_ID')); 
                    SYS_setValToRec(record, "FA_TEMP3", SYS_getValueFromMain('FA_TEMP3')); //FOR ELOAN BU;
                    SYS_setValToRec(record, "FA_TEMP7", SYS_getValueFromMain('FA_TEMP7')); //FOR ELOAN BASE DAYS;
                    SYS_setValToRec(record, "FA_TEMP6", SYS_getValueFromMain('FA_TEMP6')); //FOR ELOAN CCY DESC;
                    mData.push(record);
                }
                SYS_reLoadGrid(node, mData);
                document.MAINFORM.FA_TEMP1.value = SYS_getFieldSumValue(node, 'PO_LOAN_AVL', document.MAINFORM.FA_TEMP6.value);
                document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP1.value);
                document.MAINFORM.TTL_LOAN_AVL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
                document.MAINFORM.TTL_LOAN_AVL.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*FLD_FAEF_PO_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_XBOR_RT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*FLD_FAEF_XBOR_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_button6_onclick = function(event) {
    try {
        SYF_FAEF_Get_AVL_PO4Finance();
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancing.js*FLD_FAEF_button6_onclick", e);
    }
}