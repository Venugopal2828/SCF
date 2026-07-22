var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

var bFirstFinance = true;

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.LM_CSL_DESC.value = 'Factoring';
        SYF_FAEF_FA_BPOINV_LOAN_ID();
        document.MAINFORM.FA_TEMP_AMT13.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        document.MAINFORM.FA_TTL_LOAN_BAL.value = document.MAINFORM.FA_TTL_LOAN_AMT.value;
        var busi_tp= document.MAINFORM.FA_BUSI_TYPE.value;
        if (document.MAINFORM.FA_FIN_TYPE.value == 'INV') {
            var node = SYS_getDoByXpath("InvFinance");
            var arrayvalue = SYS_getRecords(node);
            var mData = [];
            var record;
            for (var i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                var inv_loan_amt = SYS_getValFromRec(record, 'FA_INV_LOAN_AMT');
                if (SYS_BeFloat(inv_loan_amt) <= 0) {
                    SYS_setValToRec(record, 'recordType', 'C');
                    mData.push(record);
                }
                SYS_setValToRec(record, 'FA_DOC_CR_AC', document.MAINFORM.FA_DOC_CR_AC_TEMP.value);
                mData.push(record);
            }
            SYS_reLoadGrid(node, arrayvalue);
        }
        
        document.MAINFORM.FA_TEMP5.value = '';
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_FAEF_Chk_MAX_LOAN_PERC()) {
            return false;
        }
        if (document.MAINFORM.FA_FIN_TYPE.value == 'INV' && !SYT_checkFactoringChildRecord('InvFinance')) {
            return false;
        }
        if (!SYF_FAEF_Chk_RecordStatus()) {
            return false;
        }

        if (!SYM_FAEF_checkDspInvoice()) {
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
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_LOAN_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'LOAN';
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        //  document.MAINFORM.TEMP_AC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.TEMP_TRX_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_SBR_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_FIN_TYPE.value = 'INV';
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        document.MAINFORM.FA_FIN_INFO.value = '';
        if(document.MAINFORM.FA_BUSI_TYPE.value=='EF'){
        	document.MAINFORM.FA_LOAN_IRATE_TYPE.value='1';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*InitValues", e);
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
            SYF_FAEF_MPO_Financing_back('P');
        }
      if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            EEHtml.getElementById('EF1').style.display = "";
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'M');
        }
        SYF_FAEF_Cal_FA_LOAN_CCY();
        SYF_FAEF_Get_BaseDay_CCYDec();
        SYF_FAEF_Get_ratetype();
        if (document.MAINFORM.FA_TTL_LOAN_AMT.value != 0 && document.MAINFORM.FA_TTL_LOAN_AMT.value != '') {
            SYF_FAEF_MPO_Financing_back('P');
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('1');
        } else {
            SYF_FAEF_MPO_Financing_back('M');
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2');
        }
        SYF_FAEF_FA_TEMP_AMT10();
        //SYF_FAEF_FA_TEMP_AMT10();
        FLD_FAEF_CPYT_PAY_COV_MSG_onchange();
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        exchRateOnLoadFlag = false;

        SYS_GetRefNo('SCF_INV_FINANCE', 'SYF_FAEF_Cal_RefNo');
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_LOAN_CCY = function() {
    try {
        document.MAINFORM.FA_LOAN_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Cal_FA_LOAN_CCY", e);
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
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Cal_FA_LOAN_INT_RT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_SEL_AC_AMT = function() {
    try {
    	document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value) ;
    	document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);      
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Cal_FA_SEL_AC_AMT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_TTL_LOAN_BAL = function() {
    try {
        document.MAINFORM.FA_TTL_LOAN_BAL.value = document.MAINFORM.FA_TTL_LOAN_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Cal_FA_TTL_LOAN_BAL", e);
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
        document.MAINFORM.FA_LOAN_ID.value = pre + UnitCode+ year.substr(2, 4) + ref + 'FIN';
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_LOAN_ID.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Cal_RefNo", e);
    }
}

csFuncLevelProto.SYF_FAEF_Check_FIN_TYPE = function() {
    try {
        document.MAINFORM.FA_LOAN_PERC.value = SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value);
        SYS_enableButton('InvFinance', 'GetData');
        SYS_enableButton('InvFinance', 'Finance');
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Check_FIN_TYPE", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_FA_LOAN_PERC = function() {
    try {
        var loanprec; // Utility Auto Fix Comments
        var temprate; // Utility Auto Fix Comments
        loanprec = SYS_BeFloat(document.MAINFORM.FA_LOAN_PERC.value);
        temprate = SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value);
        if (loanprec > temprate) {
            alert('Financing Percentage cannot be more than' + document.MAINFORM.FA_MAX_LOAN_PERC.value + '% please have a check!');
            if (document.MAINFORM.FA_MAX_LOAN_PERC.value != '') {
                document.MAINFORM.FA_LOAN_PERC.value = document.MAINFORM.FA_MAX_LOAN_PERC.value;
            } else {
                document.MAINFORM.FA_LOAN_PERC.value = 0;
            }
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Chk_FA_LOAN_PERC", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MAX_LOAN_PERC = function() {
    try {
        if (document.MAINFORM.FA_MAX_LOAN_PERC.value == 0 || document.MAINFORM.FA_MAX_LOAN_PERC.value == null) {
            alert('Max. Loan Percentage and Interest Rate Type cannot  be null, please check  your Pricing Info.');
            document.MAINFORM.FA_LOAN_PERC.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Chk_MAX_LOAN_PERC", e);
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
            if (sum != SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value)) {
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }


        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiCreditSummary'));
            if (sum != SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value)) {
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL", e);
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
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Chk_RecordStatus", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_ReqLoanAmt = function() {
    try {
        var reqLoanAmt = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        var LimitBal = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        var ttlLoanAvl = SYS_BeFloat(document.MAINFORM.TTL_LOAN_AVL.value);
        var doc_limt_exch = SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' && reqLoanAmt * doc_limt_exch > LimitBal) {
            alert('Request Loan Amount cannot more than SBR Limit Balance!');
            return false;
        }
        if (reqLoanAmt > ttlLoanAvl) {
            alert('Request Loan Amount cannot more than Total Available for Finance!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Chk_ReqLoanAmt", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_ReqLoanAmt_submit = function() {
    try {
        var reqLoanAmt = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        var LimitBal = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        var ttlLoanAvl = SYS_BeFloat(document.MAINFORM.TTL_LOAN_AVL.value);
        var doc_limt_exch = SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);
        if ((document.MAINFORM.FA_BUSI_TYPE.value == 'POF' || document.MAINFORM.FA_BUSI_TYPE.value == 'SF') && reqLoanAmt * doc_limt_exch > LimitBal) {
            alert('Request Loan Amount cannot more than SBR Limit Balance!');
            return false;
        }
        if (reqLoanAmt > ttlLoanAvl) {
            alert('Request Loan Amount cannot more than Total Available for Finance!');
            return false;
        }
        var _do;
        var ttlLoanAmt;
        if (document.MAINFORM.FA_FIN_TYPE.value == 'INV') {
            _do = SYS_getDoByXpath('InvFinance');
            ttlLoanAmt = SYS_getFieldSumValue(_do, "FA_INV_LOAN_AMT", document.MAINFORM.FA_TEMP6.value);
        }
        if (reqLoanAmt != ttlLoanAmt) {
            alert('Please re-Finance after modify Request Loan Amount!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Chk_ReqLoanAmt_submit", e);
    }
}

csFuncLevelProto.SYF_FAEF_FA_BPOINV_LOAN_ID = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('InvFinance'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("InvFinance");
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                document.MAINFORM.FA_BPOINV_LOAN_ID.value = SYS_getValFromRec(record, 'FA_INV_LOAN_ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_FA_BPOINV_LOAN_ID", e);
    }
}

csFuncLevelProto.SYF_FAEF_FA_TEMP_AMT10 = function() {
    try {
        document.MAINFORM.FA_TEMP_AMT10.value = (SYS_BeFloat(document.MAINFORM.FA_TTL_INV_BAL.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_CRN_BAL.value)) * SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) / 100 - SYS_BeFloat(document.MAINFORM.FA_TTL_INV_LOAN_AMT.value);
        document.MAINFORM.FA_TEMP_AMT10.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TEMP_AMT10.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_FA_TEMP_AMT10", e);
    }
}

csFuncLevelProto.SYF_FAEF_GUID = function() {
    try {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        /* FOR GENERATE guid FOR DIFFERENT MT WITH SAME VALUE*/
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_GUID", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_BaseDay_CCYDec = function() {
    try {
        SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_BaseDay_CCYDec_1', '1', 'Y');
        document.MAINFORM.FA_TEMP6.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Get_BaseDay_CCYDec", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_ratetype = function() {
    try {
        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            //document.MAINFORM.FA_IRT_SPREAD.value = 0;
            //document.MAINFORM.XBOR_RT.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'M'); // Utility Auto Fix Comments
            EEHtml.fireEvent(document.MAINFORM.FA_IRT_SPREAD, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_Get_ratetype", e);
    }
}

csFuncLevelProto.SYF_FAEF_LoadDoComplete = function() {
    try {
        SYF_FAEF_Check_FIN_TYPE();
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_LoadDoComplete", e);
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
        var rb_ref = document.MAINFORM.C_MAIN_REF.value + 'RB';
        if (IntSum != 0) {
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_LMT_CCY.value + "/" + document.MAINFORM.FA_LMT_CCY.value + "/" + document.MAINFORM.FA_LMT_CCY.value;
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
            payCCYs = document.MAINFORM.FA_LMT_CCY.value + "/" + document.MAINFORM.FA_LMT_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            descs = "Total Loan Amt/Amount to Seller";
            ccyProtecteFlgs = "N/N"; //protected ccy
            actions = "S/S"; //save
            merges = "N/N";
            comp = "Finance";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        }        
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_MLDC_SetDebitCreditData", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy = function(flag) {
    try {
        if (flag == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_CCY, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_CCY, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy", e);
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
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_MPO_Financing_back", e);
    }
}

csFuncLevelProto.SYF_FAEF_getDOdata_InvFinance = function() {
    try {
        var LMTAPPRV; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var invref; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var DocBal;
        var CRNBal;
        var OrgttlLoanAmt;
        var InvLoanAvl;
        document.MAINFORM.FA_TTL_LOAN_AMT.value = 0;
        document.MAINFORM.FA_PAID_INT_SUM.value = 0;
        document.MAINFORM.FA_SEL_AC_AMT.value = 0;
        var intchgtype = document.MAINFORM.FA_INT_CHG_TYPE.value;
        var fintype = document.MAINFORM.FA_FIN_TYPE.value;
        var busi_tp = document.MAINFORM.FA_BUSI_TYPE.value;
        if (fintype == '' || fintype == null) {
            alert('Please input the Financing Type!');
            return;
        }
        if (intchgtype == '' || intchgtype == null) {
            alert('Please input the interest charge type!');
            return;
        }

        SYS_GetDataForDO_S("GET_InvFinance_EFCE", "A", false, '', "InvFinance");
        num = SYS_getcurrRecordCount("InvFinance");
        if (num > 0) {
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('1');
        } else {
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2');
        }
        node = SYS_getDoByXpath("InvFinance");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            SYS_setFieldValue(node, id, "FA_LOAN_INT_AMT", 0);
            SYS_setFieldValue(node, id, "FA_INV_LOAN_AMT", 0);
            SYS_setFieldValue(node, id, "FA_INV_LOAN_EBAL", 0);
            SYS_setFieldValue(node, id, "FA_LOAN_INT_SM_AMT", 0);
            invref = SYS_getValFromRec(record, 'FA_DOC_REF');
            DocBal = SYS_getValFromRec(record, 'FA_DOC_BAL');
            OrgttlLoanAmt = SYS_getValFromRec(record, 'FA_TEMP_AMT15');
            document.MAINFORM.FA_TEMP2.value = invref;
            InvLoanAvl = SYS_FloatSub(SYS_BeFloat(DocBal) * SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) / 100, SYS_BeFloat(OrgttlLoanAmt));
            SYS_setValToRec(record, "INV_LOAN_AVL", InvLoanAvl);
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        document.MAINFORM.FA_TEMP1.value = SYS_getFieldSumValue(node, 'INV_LOAN_AVL', document.MAINFORM.FA_TEMP6.value);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TEMP1.value);
        document.MAINFORM.TTL_LOAN_AVL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
        document.MAINFORM.TTL_LOAN_AVL.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
        document.MAINFORM.FA_TTL_LOAN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
        
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*SYF_FAEF_getDOdata_InvFinance", e);
    }
}

csFuncLevelProto.FLD_FAEF_CPYT_PAY_COV_MSG_onchange = function() {
    try {
        var cov = document.MAINFORM.CPYT_PAY_COV_MSG.value;
        if (cov == '103') {
            EEHtml.getElementById('J').style.display = "block";
            EEHtml.getElementById('K').style.display = "none";
            enable103();
            disable202();
        } else if (cov == '202') {
            EEHtml.getElementById('J').style.display = "none";
            EEHtml.getElementById('K').style.display = "block";
            enable202();
            disable103();
        } else if (cov == '103+202') {
            EEHtml.getElementById('J').style.display = "block";
            EEHtml.getElementById('K').style.display = "block";
            enable103();
            enable202();
        } else {
            EEHtml.getElementById('J').style.display = "none";
            EEHtml.getElementById('K').style.display = "none";
            disable103();
            disable202();
        }
        document.MAINFORM.UETR_GPI_121.value = SYF_FAEF_GUID();
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*FLD_FAEF_CPYT_PAY_COV_MSG_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_FIN_TYPE_onchange = function() {
    try {
        SYF_FAEF_Check_FIN_TYPE();
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*FLD_FAEF_FA_FIN_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IRT_SPREAD_onchange = function() {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*FLD_FAEF_FA_IRT_SPREAD_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_CCY_onchange = function() {
    try {
        SYF_FAEF_Get_BaseDay_CCYDec();
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*FLD_FAEF_FA_LOAN_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_PERC_onchange = function() {
    try {
        SYF_FAEF_Chk_MAX_LOAN_PERC();
        SYF_FAEF_Chk_FA_LOAN_PERC();
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*FLD_FAEF_FA_LOAN_PERC_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function() {
    try {
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*FLD_FAEF_FA_PAID_INT_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_GRC_DAY_onchange = function() {
    try {
        if (document.MAINFORM.FA_PMT_GRC_DAY.value == '') {
            document.MAINFORM.FA_PMT_GRC_DAY.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*FLD_FAEF_FA_PMT_GRC_DAY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TEMP_AMT8_onchange = function() {
    try {
    	if (SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) > SYS_BeFloat(document.MAINFORM.AMT_AVAL_FOR_FUNDING.value)) {
            alert('Request Financing Amount cannot be larger than Available Amount for Finance!');
            document.MAINFORM.FA_TEMP_AMT8.value=0;
        }
        var aa = SYS_getDoByXpath('InvFinance');
        aa.clearAll(true);
        document.MAINFORM.FA_TTL_LOAN_AMT.value=0;
        document.MAINFORM.FA_PAID_INT_SUM.value=0;
        document.MAINFORM.FA_SEL_AC_AMT.value=0;
        SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TEMP_AMT8.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*FLD_FAEF_FA_TEMP_AMT8_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_LOAN_AMT_onchange = function() {
    try {
        SYF_FAEF_Chk_ReqLoanAmt();
       // SYF_FAEF_Cal_FA_TTL_LOAN_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_BAL, 'onchange');
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*FLD_FAEF_FA_TTL_LOAN_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_XBOR_RT_onchange = function() {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_DFFinancingFromCE.js*FLD_FAEF_XBOR_RT_onchange", e);
    }
}

