var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

var bFirstFinance = true;

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.LM_CSL_DESC.value = 'SCF';
        SYF_FAEF_FA_BPOINV_LOAN_ID();
        document.MAINFORM.FA_TEMP_AMT13.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) * SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);
        document.MAINFORM.FA_TTL_LOAN_BAL.value = document.MAINFORM.FA_TTL_LOAN_AMT.value;
        var busi_tp = document.MAINFORM.FA_BUSI_TYPE.value;
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
        SYF_FAEF_Chk_PO_LOAN_BAL();
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*ConfirmBusinessCall", e);
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

     if (!SYF_FAEF_Check_PO_LOAN_REC()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_LOAN_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'LOAN APPROVE';
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        //  document.MAINFORM.TEMP_AC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.TEMP_TRX_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_SBR_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_FIN_TYPE.value = 'INV';
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        document.MAINFORM.FA_FIN_INFO.value = '';
        document.MAINFORM.FA_PMT_GRC_DAY.value =  document.MAINFORM.GRACE_DAYS.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*InitValues", e);
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
        /*if (document.MAINFORM.FA_BUSI_TYPE.value == 'PF') {
                    EEHtml.getElementById('SF').style.display = "";
                    EEHtml.getElementById('SF1').style.display = "";
                    document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '001';
                }*/
        //add on 20220127 for POF Inv Financing  -S;
        SYF_FAEF_CHECK_BUSI_TYPE_FIELD();
        //add on 20220127 for POF Inv Financing  -E;
        SYF_FAEF_Get_DOC_CCY();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        SYF_FAEF_Cal_FA_LOAN_CCY();
        SYF_FAEF_Get_BaseDay_CCYDec();
        SYF_FAEF_GetExchangeRate();
        SYF_FAEF_Get_ratetype();
        if (document.MAINFORM.FA_TTL_LOAN_AMT.value != 0 && document.MAINFORM.FA_TTL_LOAN_AMT.value != '') {
            SYF_FAEF_MPO_Financing_back('P');
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('1');
        } else {
            SYF_FAEF_MPO_Financing_back('M');
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2');
        }
        SYF_FAEF_FA_TEMP_AMT10();
        FLD_FAEF_CPYT_PAY_COV_MSG_onchange();
		if(document.MAINFORM.FA_BUSI_TYPE.value == "DD")
		{
			document.MAINFORM.FA_INT_CHG_TYPE.value = 2;
			SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'P');
			document.MAINFORM.FA_PMT_VAL_DT.value = document.MAINFORM.TRX_DT.value;
		}
		else
		{
			SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'M');
		}
		
		
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        exchRateOnLoadFlag = false;

        SYS_GetRefNo('SCF_INV_FINANCE', 'SYF_FAEF_Cal_RefNo');
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_CHECK_BUSI_TYPE_FIELD = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            EEHtml.getElementById('POs').style.display = "";
            SYT_ChangeFldClass_New('PO_NO', 'M');

        } else {
            EEHtml.getElementById('POs').style.display = "none";
            SYT_ChangeFldClass_New('PO_NO', 'B');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_CHECK_BUSI_TYPE_FIELD", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_LOAN_CCY = function() {
    try {
        document.MAINFORM.FA_LOAN_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Cal_FA_LOAN_CCY", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Cal_FA_LOAN_INT_RT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_SEL_AC_AMT = function() {
    try {
 
        var busi_tp = document.MAINFORM.FA_BUSI_TYPE.value;
        var PO_LOAN_BAL = SYS_BeFloat(document.MAINFORM.PO_LOAN_BAL.value);
        if (busi_tp == 'POF' &&PO_LOAN_BAL > 0) {

            var acc_amt;
            acc_amt = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value) - SYS_BeFloat(document.MAINFORM.PO_LOAN_BAL.value);
            if (acc_amt > 0) {
                document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, acc_amt);
                return true;
            } else {
                alert("Invoice Financing Amount should be greater than PO loan balance.");
                document.MAINFORM.FA_SEL_AC_AMT.value = 0;
                document.MAINFORM.FA_PAID_INT_SUM.value=0;
                document.MAINFORM.FA_TTL_LOAN_AMT.value = 0;
               var aa = SYS_getDoByXpath('InvFinance');
                     aa.clearAllDataSets(true);
               var bb = SYS_getDoByXpath('MultiCreditSummary');
                     bb.clearAllDataSets(true);
               var cc = SYS_getDoByXpath('MultiDebitSummary');
                     cc.clearAllDataSets(true);     
             // SYS_highTrxButton("_cancel");
              return false;
            }
        } else {
            document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value);
            document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
        }
        
  
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Cal_FA_SEL_AC_AMT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_TTL_LOAN_BAL = function() {
    try {
        document.MAINFORM.FA_TTL_LOAN_BAL.value = document.MAINFORM.FA_TTL_LOAN_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Cal_FA_TTL_LOAN_BAL", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Cal_RefNo", e);
    }
}

csFuncLevelProto.SYF_FAEF_Check_FIN_TYPE = function() {
    try {
        document.MAINFORM.FA_LOAN_PERC.value = SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value);
        SYS_enableButton('InvFinance', 'GetData');
        SYS_enableButton('InvFinance', 'Finance');
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Check_FIN_TYPE", e);
    }
}

csFuncLevelProto.SYF_FAEF_Check_PO_LOAN_REC = function() {
    try {
        document.MAINFORM.FA_BPOINV_LOAN_ID.value = '';
        SYS_GetTableDataByRule_S('Get_Pending_PO', '1', 'Y');
        if (document.MAINFORM.FA_BPOINV_LOAN_ID.value != null && document.MAINFORM.FA_BPOINV_LOAN_ID.value != '' && document.MAINFORM.FA_BPOINV_LOAN_ID.value != 'null') {
            alert("There is pending PO finance under processing, please finish it first.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Check_PO_LOAN_REC", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Chk_FA_LOAN_PERC", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Chk_MAX_LOAN_PERC", e);
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
            //  if (sum != SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value),SYS_BeFloat(document.MAINFORM.FA_REBATE_AMT.value))) {
            if (sum != SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value)) { //zoe
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }


        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiCreditSummary'));
            //  if (sum != SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value),SYS_BeFloat(document.MAINFORM.FA_REBATE_AMT.value))) {
            if (sum != SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value)) { //zoe
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_PO_LOAN_BAL = function() {
    try {
        var PO_LOAN_BAL = SYS_BeFloat(document.MAINFORM.PO_LOAN_BAL.value);
        if (PO_LOAN_BAL > 0) {
            alert('Kindly reminder, the related PO loan blance need to be returned manually after this transaction.');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Chk_PO_LOAN_BAL", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Chk_RecordStatus", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Chk_ReqLoanAmt", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Chk_ReqLoanAmt_submit", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_FA_BPOINV_LOAN_ID", e);
    }
}

csFuncLevelProto.SYF_FAEF_FA_TEMP_AMT10 = function() {
    try {
        document.MAINFORM.FA_TEMP_AMT10.value = (SYS_BeFloat(document.MAINFORM.FA_TTL_INV_BAL.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_CRN_BAL.value)) * SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) / 100 - SYS_BeFloat(document.MAINFORM.FA_TTL_INV_LOAN_AMT.value);
        document.MAINFORM.FA_TEMP_AMT10.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TEMP_AMT10.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_FA_TEMP_AMT10", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_GUID", e);
    }
}

csFuncLevelProto.SYF_FAEF_GetExchangeRate = function() {
    try {
        if (document.MAINFORM.FA_LMT_CCY.value != '' && document.MAINFORM.FA_DOC_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_LMT_CCY.value, 'Booking Rate', 'EXCH_RT6');
            EEHtml.fireEvent(document.MAINFORM.EXCH_RT6, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_GetExchangeRate", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_BaseDay_CCYDec = function() {
    try {
        SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_BaseDay_CCYDec_1', '1', 'Y');
        document.MAINFORM.FA_TEMP6.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Get_BaseDay_CCYDec", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DOC_CCY = function() {
    try {
        var ccy;
        var sFieldList;
        var sMappingList;
        ccy = document.MAINFORM.FA_SEL_AC_CCY.value;
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        sMappingList = "FA_DOC_CCY";
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'PF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            SYS_GetTableDataByRule_S('GET_LOAN_CCY_FROM_INV', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
                EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
            }
        }
        if (ccy != '' && ccy != null) {
            document.MAINFORM.FA_DOC_CCY.value = ccy;
        }
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Get_DOC_CCY", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_PO_NO = function() {
    try {
        SYS_InqCUBK_byCondition('Get_PO_NO_INVFIN', '1');
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Get_PO_NO", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_Get_ratetype", e);
    }
}

csFuncLevelProto.SYF_FAEF_LoadDoComplete = function() {
    try {
        SYF_FAEF_Check_FIN_TYPE();
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_LoadDoComplete", e);
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
        minus_rebate = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, SYS_FloatSub(IntSum, rebate)); //zoe
        var rb_ref = document.MAINFORM.C_MAIN_REF.value + 'RB';
        if (IntSum != 0) {
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + minus_rebate + "/" + document.MAINFORM.FA_SEL_AC_AMT.value; //zoe
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

        if (SYS_BeFloat(rebate) > 0) { //zoe add befloat
            dcFlgs1 = "C"; //debit and credit group
            keyindex1 = rb_ref;
            payCCYs1 = document.MAINFORM.FA_DOC_CCY.value;
            payAMTs1 = rebate;
            descs1 = "Rebate Interest";
            ccyProtecteFlgs1 = "N"; //protected ccy
            actions1 = "S"; //save
            merges1 = "N";
            comp1 = "Rebate Interest";
            SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actions1, merges1, comp1);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_MLDC_SetDebitCreditData", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData_POF = function() {
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
        var po_loan_bal;
        var FA_TTL_LOAN_AMT;
        var amt_to_seller;
        var aPara;
        var amt_to_temp_acc;
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        amt_to_seller = "";
        po_loan_bal = document.MAINFORM.PO_LOAN_BAL.value;
        FA_TTL_LOAN_AMT = document.MAINFORM.FA_TTL_LOAN_AMT.value;
        IntSum = document.MAINFORM.FA_PAID_INT_SUM.value;
        rebate = document.MAINFORM.FA_REBATE_AMT.value;
        minus_rebate = SYS_FloatSub(IntSum, rebate);
        var rb_ref = document.MAINFORM.C_MAIN_REF.value + 'RB';
        var aPara;
        var _cRecords;
        var cRecord;
        var mCRef = new HashMap();
        var C_LEN = 0;
        var strCCY;
        var currDo;
        /*   currDo = SYS_getDoByXpath('MultiCreditSummary');
          if (currDo != null) {
     	_cRecords = SYS_getRecords(currDo); 
     	C_LEN = _cRecords.length;
         }
        if(C_LEN > 0){
     	            for (i = 0; i < _cRecords.length; i++) { // Utility Auto Fix Comments
                    cRecord = _cRecords[i]; // Utility Auto Fix Comments
                    var aPara = SYS_getValFromRec(cRecord, "I_MLDC_SEQ");
                     var strCCY = SYS_getValFromRec(cRecord, 'C_MLDC_CCY');
                  }
                  mCRef.put(strCCY,aPara);
     	       SYT_MLDC_DeleteSummaryRec(currDo,'MultiCreditSummary.MultiCredit',mCRef);
        }*/

        if (IntSum != 0) {
            if (SYS_BeFloat(FA_TTL_LOAN_AMT) <= SYS_BeFloat(po_loan_bal)) {
                amt_to_temp_acc = SYS_FloatSub(SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value), SYS_BeFloat(IntSum));
                document.MAINFORM.TEMP_AMT18.value = amt_to_temp_acc;
                dcFlgs = "D/C/C"; //debit and credit group
                keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.TSU_TEMP.value;
                payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
                payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + IntSum + "/" + amt_to_temp_acc;
                descs = "Total Loan Amt/Upfront Interest Amt/Amount to Temporary Account";
                ccyProtecteFlgs = "N/N/N"; //protected ccy
                actions = "S/S/S"; //save
                actionA = "D/D/D"; //save
                merges = "N/N/N";
                comp = "Finance";
                SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actionA, merges, comp);
                SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
            } else if (SYS_BeFloat(FA_TTL_LOAN_AMT) > SYS_BeFloat(po_loan_bal)) {
                document.MAINFORM.TEMP_BP_AMT9.value = SYS_FloatSub(SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value), SYS_BeFloat(po_loan_bal));
                amt_to_seller = Math.max(SYS_FloatSub(SYS_BeFloat(document.MAINFORM.TEMP_BP_AMT9.value), SYS_BeFloat(IntSum)), 0);

                //document.MAINFORM.FA_SEL_AC_AMT.value = SYS_FloatSub(SYS_BeFloat(document.MAINFORM.TEMP_BP_AMT9.value) , SYS_BeFloat(IntSum));
                //document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
                if (amt_to_seller > 0) {
                    document.MAINFORM.TEMP_AMT18.value = po_loan_bal;
                    dcFlgs = "D/C/C/C"; //debit and credit group
                    keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value + "/" + document.MAINFORM.TSU_TEMP.value;
                    payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
                    payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + IntSum + "/" + amt_to_seller + "/" + po_loan_bal;
                    descs = "Total Loan Amt/Upfront Interest Amt/Amount to Seller/Amount to Temporary Account ";
                    ccyProtecteFlgs = "N/N/N/N"; //protected ccy
                    actions = "S/S/S/S"; //save
                    actionA = "D/D/D/D"; //delete
                    merges = "N/N/N/N";
                    comp = "Finance";
                    SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actionA, merges, comp);
                    SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
                }
            }
        } else if (document.MAINFORM.FA_INT_CHG_TYPE.value == '2') {
            if (FA_TTL_LOAN_AMT <= po_loan_bal) {
                document.MAINFORM.TEMP_AMT18.value = document.MAINFORM.FA_SEL_AC_AMT.value;
                dcFlgs = "D/C"; //debit and credit group
                keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.TSU_TEMP.value;
                payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
                payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
                descs = "Total Loan Amt/Amount to Temporary Account";
                ccyProtecteFlgs = "N/N"; //protected ccy
                actions = "S/S"; //save
                actionA = "D/D"; //delete
                merges = "N/N";
                comp = "Finance";
                SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actionA, merges, comp);
                SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
            } else if (FA_TTL_LOAN_AMT > po_loan_bal) {
                document.MAINFORM.TEMP_BP_AMT9.value = SYS_FloatSub(SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value), SYS_BeFloat(po_loan_bal));
                document.MAINFORM.TEMP_AMT18.value = po_loan_bal;
                // 	  document.MAINFORM.FA_SEL_AC_AMT.value = SYS_FloatSub(SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value), SYS_BeFloat(po_loan_bal));
                //  document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
                dcFlgs = "D/C/C"; //debit and credit group
                keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value + "/" + document.MAINFORM.TSU_TEMP.value;
                payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
                payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.TEMP_BP_AMT9.value + "/" + po_loan_bal;
                descs = "Total Loan Amt/Amount to Seller/Amount to Temporary Account";
                ccyProtecteFlgs = "N/N/N"; //protected ccy
                actions = "S/S/S"; //save
                actionA = "D/D/D"; //delete
                merges = "N/N/N";
                comp = "Finance";
                SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actionA, merges, comp);
                SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
            }
        }

        /*if (rebate > 0) {
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
        }*/
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_MLDC_SetDebitCreditData_POF", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy = function(flag) {
    try {
        if (flag == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_MPO_Financing_back", e);
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

        // SYS_GetDataForDO_S("GET_InvFinance_SCF", "A", false, '', "InvFinance");
        if (document.MAINFORM.FA_TEMP_AMT8.value == 0) {
            alert('Please input the Request Financing Amount first!');
            return;
        } else {
            if (busi_tp == 'RD' || busi_tp == 'PF' || busi_tp == 'DD') {
                var para = {
                    

                    ruleName: "GET_InvFinance_SCF",
                    status: "A",
                    showError: false,
                    xpathFordo: "InvFinance",
                    reqAMTFldNm: "FA_TEMP_AMT8",
                    singleAMTFldNm: "FA_ADJ_AMT",
                    percFldNm: "FA_LOAN_PERC"
                };
                SYS_GetDynDataForDO_S(para);
            } else if (busi_tp == 'POF') {
                var para = {
                    ruleName: "GET_InvFin_POF",
                    status: "A",
                    showError: false,
                    xpathFordo: "InvFinance",
                    reqAMTFldNm: "FA_TEMP_AMT8",
                    singleAMTFldNm: "FA_ADJ_AMT",
                    percFldNm: "FA_LOAN_PERC"
                };
                SYS_GetDynDataForDO_S(para);

            }
        }
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
            SYS_setFieldValue(node, id, "FA_REBATE_AMT", 0);
            SYS_setFieldValue(node, id, "FA_LOAN_INT_SM_AMT", 0);
            invref = SYS_getValFromRec(record, 'FA_DOC_REF');
            DocBal = SYS_getValFromRec(record, 'FA_ADJ_BAL');
            OrgttlLoanAmt = SYS_getValFromRec(record, 'FA_TEMP_AMT15');
            document.MAINFORM.FA_TEMP2.value = invref;
            InvLoanAvl = SYS_FloatSub(SYS_BeFloat(DocBal) * SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) / 100, SYS_BeFloat(OrgttlLoanAmt));
            SYS_setValToRec(record, "INV_LOAN_AVL", InvLoanAvl);
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        document.MAINFORM.FA_TEMP1.value = SYS_getFieldSumValue(node, 'INV_LOAN_AVL', document.MAINFORM.FA_TEMP6.value);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP1.value);
        document.MAINFORM.TTL_LOAN_AVL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
        document.MAINFORM.TTL_LOAN_AVL.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
        document.MAINFORM.FA_TTL_LOAN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);

       EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*SYF_FAEF_getDOdata_InvFinance", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_CPYT_PAY_COV_MSG_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DOC_CCY_onchange = function() {
    try {
        SYF_FAEF_Get_ratetype();
        SYF_FAEF_Cal_FA_LOAN_CCY();
        SYF_FAEF_Get_BaseDay_CCYDec();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_CCY, 'onChange');
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
        SYF_FAEF_GetExchangeRate();
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_FA_DOC_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_FIN_TYPE_onchange = function() {
    try {
        SYF_FAEF_Check_FIN_TYPE();
        var sMappingList = "FA_DOC_CCY";;
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        if (document.MAINFORM.FA_FIN_TYPE.value == 'INV') {
            SYS_GetTableDataByRule_S('GET_LOAN_CCY_FROM_INV', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);

        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_FA_FIN_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IRT_SPREAD_onchange = function() {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_FA_IRT_SPREAD_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_CCY_onchange = function() {
    try {
        SYF_FAEF_Get_BaseDay_CCYDec();
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_FA_LOAN_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_PERC_onchange = function() {
    try {
        SYF_FAEF_Chk_MAX_LOAN_PERC();
        SYF_FAEF_Chk_FA_LOAN_PERC();
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_FA_LOAN_PERC_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function() {
    try {
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_FA_PAID_INT_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_GRC_DAY_onchange = function() {
    try {
        if (document.MAINFORM.FA_PMT_GRC_DAY.value == '') {
            document.MAINFORM.FA_PMT_GRC_DAY.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_FA_PMT_GRC_DAY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TEMP_AMT8_onchange = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) > SYS_BeFloat(document.MAINFORM.AMT_AVAL_FOR_FUNDING.value)) {
            alert('Request Financing Amount cannot be larger than Available Amount for Finance!');
            document.MAINFORM.FA_TEMP_AMT8.value = 0;
        }
        var aa = SYS_getDoByXpath('InvFinance');
        aa.clearAll(true);
        document.MAINFORM.FA_TTL_LOAN_AMT.value = 0;
        document.MAINFORM.FA_PAID_INT_SUM.value = 0;
        document.MAINFORM.FA_REBATE_AMT.value = 0;
        document.MAINFORM.FA_SEL_AC_AMT.value = 0;
        SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TEMP_AMT8.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_FA_TEMP_AMT8_onchange", e);
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
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_FA_TTL_LOAN_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_PO_NO_onchange = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {

            SYS_GetCUBK('Get_PO_FIN', document.MAINFORM.PO_NO.name);

        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_PO_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_XBOR_RT_onchange = function() {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_XBOR_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_lookup1_onclick = function() {
    try {
        SYF_FAEF_Get_PO_NO();
    } catch (e) {
        DisExcpt("SYF_FAEF_Finance_appr.js*FLD_FAEF_lookup1_onclick", e);
    }
}