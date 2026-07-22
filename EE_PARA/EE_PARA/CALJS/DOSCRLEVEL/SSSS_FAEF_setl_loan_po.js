"path:SCRN/o2m/FAEF_setl_loan_po.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CHECK_FA_LOAN_PPAID_AMT = function() {
    try {
        var PMT_AMT;
        var FA_TEMP_AMT19;
        FA_TEMP_AMT19 = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT19.value);
        FA_LOAN_PPAID_AMT = SYS_BeFloat(document.MAINFORM.FA_LOAN_PPAID_AMT.value);
        if (FA_TEMP_AMT19 < FA_LOAN_PPAID_AMT) {
            SYS_CheckError(document.MAINFORM.FA_LOAN_PPAID_AMT, 'Principal Paid cannot exceed Financing Balance!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_loan_po.js*CHECK_FA_LOAN_PPAID_AMT", e);
    }
}

csDOScreenProto.Cal_PO_LOAN_BAL = function() {
    try {
        var FA_LOAN_PPAID_AMT;
        var FA_TEMP_AMT19;
        FA_LOAN_PPAID_AMT = document.MAINFORM.FA_LOAN_PPAID_AMT.value;
        FA_TEMP_AMT19 = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT19.value);
        if (FA_LOAN_PPAID_AMT == '') {
            document.MAINFORM.PO_LOAN_BAL.value = FA_TEMP_AMT19;
        } else {
            document.MAINFORM.PO_LOAN_BAL.value = SYS_FloatSub(FA_TEMP_AMT19, FA_LOAN_PPAID_AMT);
            document.MAINFORM.FA_LOAN_IPAID_AMT.value = document.MAINFORM.FA_LOAN_INT_AMT.value;
            document.MAINFORM.FA_PAID_INT_AMT.value = document.MAINFORM.FA_LOAN_INT_AMT.value;
            document.MAINFORM.FA_LOAN_PAID_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, SYS_FloatAdd(document.MAINFORM.FA_LOAN_IPAID_AMT.value, FA_LOAN_PPAID_AMT));
        }
        document.MAINFORM.PO_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.PO_LOAN_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_loan_po.js*Cal_PO_LOAN_BAL", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!CHECK_FA_LOAN_PPAID_AMT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_loan_po.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_PMT_DT.value = SYS_getValueFromMain('TRX_DT');
        document.MAINFORM.FA_PMT_REF.value = SYS_getValueFromMain('FA_PMT_REF');
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE');
        document.MAINFORM.TRX_DT.value = SYS_getValueFromMain('TRX_DT');
        document.MAINFORM.TEMP_LOAN_ID.value = document.MAINFORM.PO_LOAN_ID.value;
       // document.MAINFORM.FA_TEMP_AMT10.value = document.MAINFORM.PO_LOAN_BAL.value;
        geteLOANBaseDay();
        SYS_GetCUBK('Get_POLoan_PaidTimes', 'PO_LOAN_ID','','','N');
       Inquire_INT();

    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_loan_po.js*PostconditionOnInit", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_loan_po.js*PreconditionOnInit", e);
    }
}

csDOScreenProto.geteLOANBaseDay = function() {
    try {
        SYS_GetTableDataByRule_S('GetLoanBaseDays', '1', true);
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_loan_po.js*geteLOANBaseDay", e);
    }
}

csDOScreenProto.FA_LOAN_PPAID_AMT_onchange = function() {
    try {
    	
    	document.MAINFORM.FA_LOAN_PPAID_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value,document.MAINFORM.FA_LOAN_PPAID_AMT.value);
        if (CHECK_FA_LOAN_PPAID_AMT()) {
            Cal_PO_LOAN_BAL();
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_loan_po.js*FA_LOAN_PPAID_AMT_onchange", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
    	        document.MAINFORM.FA_LAST_PINT_DT.value =SYS_BUSI_DATE;
    	        document.MAINFORM.TEMP_PMT_TIMES.value = SYS_BeInt(document.MAINFORM.TEMP_TIMES.value) + 1;
    	            } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib_PO.js", e);
    }
}


csDOScreenProto.Inquire_INT = function() {
    try {
    	
        var _do; // Utility Auto Fix Comments
        var checkamt; // Utility Auto Fix Comments
        var days; // Utility Auto Fix Comments
        var intamtcheck; // Utility Auto Fix Comments
        var intchgtype; // Utility Auto Fix Comments
        var overintamt; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        var refundintamt; // Utility Auto Fix Comments
        var loanduedt;
        var subday;
        _do = SYS_getDoByXpath('Settle_loan_po'); // Utility Auto Fix Comments
        recs = SYS_getRecords(_do); // Utility Auto Fix Comments
        if (recs.length > 0) {
        	  SYS_InqGapi_S('FAEF_Settle_Inquire_ACC');
        	  document.MAINFORM.FA_LOAN_INT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value,document.MAINFORM.FA_TEMP_AMT11.value);
            document.MAINFORM.FA_OVD_INT_AMT.value =  SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value,document.MAINFORM.FA_TEMP_AMT12.value);
            intamtcheck =document.MAINFORM.FA_LOAN_INT_AMT.value; 
            intchgtype = document.MAINFORM.FA_INT_CHG_TYPE.value;
            loanduedt = document.MAINFORM.FA_LOAN_DUE_DT.value;
            if (intamtcheck == 0 && intchgtype == '2') {
                alert('No interest amount get back,can not Return!');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib_PO.js", e);
    }
}