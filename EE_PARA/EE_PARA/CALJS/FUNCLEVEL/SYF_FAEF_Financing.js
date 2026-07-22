var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var bFirstFinance = true;

csFuncLevelProto.SYF_FAEF_Get_ratetype = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_REMI_CCY1.value) {
                document.MAINFORM.FA_LOAN_IRATE_TYPE.value = document.MAINFORM.FA_TEMP_RT_TYPE1.value;
            } else if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_REMI_CCY2.value) {
                document.MAINFORM.FA_LOAN_IRATE_TYPE.value = document.MAINFORM.FA_TEMP_RT_TYPE2.value;
            } else if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_REMI_CCY3.value) {
                document.MAINFORM.FA_LOAN_IRATE_TYPE.value = document.MAINFORM.FA_TEMP_RT_TYPE3.value;
            } else if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_REMI_CCY4.value) {
                document.MAINFORM.FA_LOAN_IRATE_TYPE.value = document.MAINFORM.FA_TEMP_RT_TYPE4.value;
            } else if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_REMI_CCY5.value) {
                document.MAINFORM.FA_LOAN_IRATE_TYPE.value = document.MAINFORM.FA_TEMP_RT_TYPE5.value;
            }
        }

        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            document.MAINFORM.FA_IRT_SPREAD.value = 0;
            document.MAINFORM.XBOR_RT.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'M'); // Utility Auto Fix Comments
            if (SYS_FUNCTION_TYPE == 'PM' && document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
                //FOR HISTORICAL DATA
                document.MAINFORM.FA_IRT_SPREAD.value = document.MAINFORM.FA_TEMP5.value;
            }
            EEHtml.fireEvent(document.MAINFORM.FA_IRT_SPREAD, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Get_ratetype", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy = function(flag) {
    try {

        if (flag == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_FIN_TYPE, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'M');
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
                SYT_ChangeFldClass(document.MAINFORM.FA_FIN_TYPE, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy", e);
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
        if (fintype == '' || fintype == null) {
            alert('Please input the Financing Type!');
            return;
        }
        if (intchgtype == '' || intchgtype == null) {
            alert('Please input the interest charge type!');
            return;
        }
        SYS_GetDataForDO_S("InvFinance", "A", false, '', "InvFinance")
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
            invref = SYS_getValFromRec(record, 'FA_DOC_REF');
            DocBal = SYS_getValFromRec(record, 'FA_DOC_BAL');
            CRNBal = SYS_getValFromRec(record, 'FA_CRN_BAL');
            OrgttlLoanAmt = SYS_getValFromRec(record, 'FA_TEMP_AMT15');
            document.MAINFORM.FA_TEMP2.value = invref;
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
                SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_getDOdata_InvFinance_0', '1', 'Y');
                LMTAPPRV = (SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) - SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value)) / SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);
                SYS_setValToRec(record, "FA_INV_LMT_APPRV", LMTAPPRV);
                InvLoanAvl = LMTAPPRV * SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) / 100 - SYS_BeFloat(OrgttlLoanAmt);
            } else {
                InvLoanAvl = (SYS_BeFloat(DocBal) - SYS_BeFloat(CRNBal)) * SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) / 100 - SYS_BeFloat(OrgttlLoanAmt);
            }
            SYS_setValToRec(record, "INV_LOAN_AVL", InvLoanAvl);
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        document.MAINFORM.FA_TEMP1.value = SYS_getFieldSumValue(node, 'INV_LOAN_AVL', document.MAINFORM.FA_TEMP6.value);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP1.value);
        //if(ttlPOLoanAvl>0){
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            if (SYS_BeFloat(document.MAINFORM.FA_TTL_INV_BAL.value) >= (SYS_BeFloat(document.MAINFORM.FA_TTL_PO_LOAN_AMT.value) * 100 / SYS_BeFloat(document.MAINFORM.PO_MAX_LOAN_PERC.value))) {
                document.MAINFORM.TTL_LOAN_AVL.value = Math.min(SYS_BeFloat(document.MAINFORM.FA_TEMP1.value), SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT10.value) / SYS_BeFloat(document.MAINFORM.EXCH_RT6.value));
            } else {
                document.MAINFORM.TTL_LOAN_AVL.value = 0;
            }
        } else {
            document.MAINFORM.TTL_LOAN_AVL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
        }
        //}
        /*if(ttlPOLoanAvl==0){
	if(document.MAINFORM.FA_BUSI_TYPE.value == 'POF')
	document.MAINFORM.TTL_LOAN_AVL.value=Math.min(SYS_BeFloat(document.MAINFORM.FA_TEMP1.value),SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT10.value)/SYS_BeFloat(document.MAINFORM.EXCH_RT6.value));
	else
	document.MAINFORM.TTL_LOAN_AVL.value=SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
}*/
        document.MAINFORM.TTL_LOAN_AVL.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
        document.MAINFORM.AMT_AVAL_FOR_FUNDING.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.AMT_AVAL_FOR_FUNDING.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_getDOdata_InvFinance", e);
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
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Chk_FA_LOAN_PERC", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_BaseDay_CCYDec = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_BaseDay_CCYDec_1', '1', 'Y');
        document.MAINFORM.FA_TEMP6.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Get_BaseDay_CCYDec", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_Pricing = function() {
    try {

        var dTrxDate; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            dTrxDate = document.MAINFORM.TRX_DT.value;
            //mark by echo for test getTableData
            //document.MAINFORM.TRX_DT.value = getDate(SYS_DATE_FORMAT, document.MAINFORM.TRX_DT.value);
            //sFieldList = "FA_FIN_INFO;FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5;FA_LOAN_RT_TYPE1;FA_LOAN_RT_TYPE2;FA_LOAN_RT_TYPE3;FA_LOAN_RT_TYPE4;FA_LOAN_RT_TYPE5;FA_MAX_LOAN_PERC;FA_IRT_SPREAD";
            //sMappingList = "FA_FIN_INFO;FA_REMI_CCY1;FA_REMI_CCY2;FA_REMI_CCY3;FA_REMI_CCY4;FA_REMI_CCY5;FA_TEMP_RT_TYPE1;FA_TEMP_RT_TYPE2;FA_TEMP_RT_TYPE3;FA_TEMP_RT_TYPE4;FA_TEMP_RT_TYPE5;FA_MAX_LOAN_PERC;FA_TEMP5";
            SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_Pricing_2', '1', 'Y');
            document.MAINFORM.TRX_DT.value = dTrxDate;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Get_Pricing", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_SEL_AC_AMT = function() {
    try {

        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value);
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Cal_FA_SEL_AC_AMT", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_Financing_back = function(tag) {
    try {

        if (tag == 'M') {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'O');
            //SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_PERC, 'M');
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
            //SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_PERC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_MPO_Financing_back", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        var arrOptionV; // Utility Auto Fix Comments
        exchRateOnLoadFlag = false;

        SYS_GetRefNo('FAEF_FINANCE', 'SYF_FAEF_Cal_RefNo');

        arrOptionV = ['1', '2', '4'];
        SYS_FilterOptions('FA_LOAN_IRATE_TYPE', arrOptionV);
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*PreconditionOnInit", e);
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
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'PUR';
        document.MAINFORM.FA_LOAN_ID.value = pre + UnitCode + year + month + ref + sub
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_LOAN_ID.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Cal_RefNo", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_LOAN_INT_RT = function() {
    try {

        var FA_IRT_SPREAD; // Utility Auto Fix Comments
        var FA_LOAN_INT_RT; // Utility Auto Fix Comments
        var XBOR_RT; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value != '1') {
            XBOR_RT = SYS_BeFloat(document.MAINFORM.XBOR_RT.value);
            FA_IRT_SPREAD = SYS_BeFloat(document.MAINFORM.FA_IRT_SPREAD.value);
            FA_LOAN_INT_RT = XBOR_RT + FA_IRT_SPREAD;
            document.MAINFORM.FA_LOAN_INT_RT.value = DecimalFormat(FA_LOAN_INT_RT, 6);
            EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Cal_FA_LOAN_INT_RT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_LOAN_CCY = function() {
    try {

        document.MAINFORM.FA_LOAN_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Cal_FA_LOAN_CCY", e);
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

        SYF_FAEF_Chk_Busi_Type();
        SYF_FAEF_Get_DOC_CCY();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        SYF_FAEF_Cal_FA_LOAN_CCY();
        SYF_FAEF_Get_BaseDay_CCYDec();
        SYF_FAEF_Get_Pricing();
        SYF_FAEF_GetSBRLimitBal();
        SYF_FAEF_GetExchangeRate();
        SYF_FAEF_Get_ratetype();
        if (document.MAINFORM.FA_TTL_LOAN_AMT.value != 0 && document.MAINFORM.FA_TTL_LOAN_AMT.value != '') {
            SYF_FAEF_MPO_Financing_back('P');
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('1');
        } else {
            SYF_FAEF_MPO_Financing_back('M');
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2');
        }

        //SYF_FAEF_FA_TEMP_AMT9();
        SYF_FAEF_FA_TEMP_AMT10();
        SYF_FAEF_TTL_PO_LOAN_AVL();

        if (document.MAINFORM.FA_BUSI_TYPE.value === 'CD' || document.MAINFORM.FA_BUSI_TYPE.value === 'DD') {
            document.getElementById('CD1').innerHTML = 'Insurance Company ID';
            document.getElementById('CD2').innerHTML = 'Medical Provider ID';
            document.getElementById('CD3').innerHTML = 'Insurance Company Name';
            document.getElementById('CD4').innerHTML = 'Medical Provider Name';
            document.getElementById('CD5').innerHTML = 'Amount to Medical Provider';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.LM_CSL_DESC.value = 'Factoring';
        SYF_FAEF_FA_BPOINV_LOAN_ID();
        document.MAINFORM.FA_TEMP_AMT13.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) * SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);
        if (document.MAINFORM.FA_FIN_TYPE.value == 'PO') {
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
            }
            SYS_reLoadGrid(node, arrayvalue);
        }
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
            }
            SYS_reLoadGrid(node, arrayvalue);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_LOAN_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'LOAN';
        document.MAINFORM.FA_LOAN_STATUS.value = 'Normal';
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.TEMP_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.TEMP_AC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.TEMP_TRX_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_TTL_LOAN_BAL = function() {
    try {

        document.MAINFORM.FA_TTL_LOAN_BAL.value = document.MAINFORM.FA_TTL_LOAN_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Cal_FA_TTL_LOAN_BAL", e);
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
        if (document.MAINFORM.FA_FIN_TYPE.value == 'PO' && !SYT_checkFactoringChildRecord('POFinance')) {
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
        DisExcpt("SYF_FAEF_Financing.js*ConfirmBusinessCheck", e);
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
        /*_do = SYS_getDoByXpath('InvFinance'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("InvFinance");
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                loanAmt = SYS_getValFromRec(record, 'FA_INV_LOAN_AMT');
                docNo = SYS_getValFromRec(record, 'FA_DOC_NO');
                if (SYS_BeFloat(loanAmt) == 0) {
                    alert("Please Edit " + docNo + " to finance it.");
                    return false;
                }
            }
        }*/
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Chk_RecordStatus", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DOC_CCY = function() {
    try {

        var ccy; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        ccy = document.MAINFORM.FA_SEL_AC_CCY.value;
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        sMappingList = "FA_DOC_CCY";
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            //sFieldList = "FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5";
            SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_DOC_CCY_3', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
                EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
            }
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            document.MAINFORM.FA_DOC_CCY.options.add(new Option(SYS_LOCAL_CCY, SYS_LOCAL_CCY));
            document.MAINFORM.FA_DOC_CCY.value = SYS_LOCAL_CCY;
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P');
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DISC' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'CD' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_DOC_CCY_4', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
                EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
            }
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            if (document.MAINFORM.FA_FIN_TYPE.value == 'PO') {
                SYS_GetTableDataByRule_S('Get_PO_CCY_For_Finance', '1', null, 'Y', "Y");
                SYM_FAEF_RefreshOptions(sMappingList);
            }
            if (document.MAINFORM.FA_FIN_TYPE.value == 'INV') {
                SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_DOC_CCY_4', '1', null, 'Y', "Y");
                SYM_FAEF_RefreshOptions(sMappingList);
            }
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
                EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
            }
        }
        /*For BPOM Module
else if (document.MAINFORM.FA_BUSI_TYPE.value == 'BPO') {
            document.MAINFORM.FA_DOC_CCY.options.add(new Option(SYS_LOCAL_CCY, SYS_LOCAL_CCY));
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_INV_CCY.value;
}
*/
        if (ccy != '' && ccy != null) {
            document.MAINFORM.FA_DOC_CCY.value = ccy;
        }
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Get_DOC_CCY", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_Busi_Type = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            EEHtml.getElementById('EF1').style.display = "";
            EEHtml.getElementById('EF2').style.display = "";
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            EEHtml.getElementById('DF1').style.display = "";
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            EEHtml.getElementById('POF1').style.display = "";
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
                EEHtml.getElementById('POFRF1').style.display = "";
            }
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            SYT_ChangeFldClass(document.MAINFORM.FA_FIN_TYPE, 'M');
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value != 'POF') {
            document.MAINFORM.FA_FIN_TYPE.value = 'INV';
            SYT_ChangeFldClass(document.MAINFORM.FA_FIN_TYPE, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Chk_Busi_Type", e);
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
        if (IntSum != 0) {
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.FA_PAID_INT_SUM.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            descs = "Total Loan Amt/Upfront Interest Amt/Amount to Seller";
            ccyProtecteFlgs = "N/N/N"; //protected ccy
            actions = "S/S/S"; //save
            merges = "N/N/N";
        } else {
            dcFlgs = "D/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            descs = "Total Loan Amt/Amount to Seller";
            ccyProtecteFlgs = "N/N"; //protected ccy
            actions = "S/S"; //save
            merges = "N/N";
        }
        comp = "Finance";
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_MLDC_SetDebitCreditData", e);
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
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = record['N_MLDC_AMT'];
                if (SYS_BeFloat(recordTypeTemp) != SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value)) {
                    alert('Multi Debit Amount is not equal to Payment Amount!');
                    return false;
                }
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
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL", e);
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
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Chk_MAX_LOAN_PERC", e);
    }
}

csFuncLevelProto.SYF_FAEF_Init_For_BPO = function() {
    try {

        /*for BPOM Module
if (document.MAINFORM.FA_BUSI_TYPE.value == 'BPO') {
            document.MAINFORM.FA_LOAN_PERC.value = 100;
            document.MAINFORM.FA_MAX_LOAN_PERC.value = 100;
            document.MAINFORM.FA_INT_CHG_TYPE.value = '1';
            document.MAINFORM.FA_LOAN_IRATE_TYPE.value = '1';
        }
*/
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Init_For_BPO", e);
    }
}

csFuncLevelProto.SYF_FAEF_Post_For_BPO = function() {
    try {

        /*for BPOM Module
if (document.MAINFORM.FA_BUSI_TYPE.value == 'BPO') {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_PERC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'P');
        }
*/
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Post_For_BPO", e);
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
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_FA_BPOINV_LOAN_ID", e);
    }
}

csFuncLevelProto.SYF_FAEF_Check_FIN_TYPE = function() {
    try {

        if (document.MAINFORM.FA_FIN_TYPE.value == 'PO') {
            document.MAINFORM.FA_LOAN_PERC.value = SYS_BeFloat(document.MAINFORM.PO_MAX_LOAN_PERC.value);
            SYS_enableButton('POFinance', 'GetData');
            SYS_enableButton('POFinance', 'Finance');
            SYS_disableButton('InvFinance', 'GetData');
            SYS_disableButton('InvFinance', 'Finance');
        } else {
            document.MAINFORM.FA_LOAN_PERC.value = SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value);
            SYS_disableButton('POFinance', 'GetData');
            SYS_disableButton('POFinance', 'Finance');
            SYS_enableButton('InvFinance', 'GetData');
            SYS_enableButton('InvFinance', 'Finance');

        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Check_FIN_TYPE", e);
    }
}

csFuncLevelProto.SYF_FAEF_GetExchangeRate = function() {
    try {

        if (document.MAINFORM.FA_LMT_CCY.value != '' && document.MAINFORM.FA_DOC_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_LMT_CCY.value, 'Booking Rate', 'EXCH_RT6');
            EEHtml.fireEvent(document.MAINFORM.EXCH_RT6, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_GetExchangeRate", e);
    }
}

csFuncLevelProto.SYF_FAEF_getDOdata_POFinance = function() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var POref; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var PO_AMT; // Utility Auto Fix Comments
        var ORG_TTL_PO_LOAN_AMT; // Utility Auto Fix Comments
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
        SYS_GetDataForDO_S("POFinance", "A", false, '', "POFinance")
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
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_getDOdata_POFinance", e);
    }
}

csFuncLevelProto.SYF_FAEF_GetSBRLimitBal = function() {
    try {

        var lmtbal;
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            SYS_GetTableDataByRule_S('Get_SBR_Limit_Balance_RF', '1', 'Y');
            lmtbal = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
            document.MAINFORM.FA_LMT_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, lmtbal);
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            SYS_GetTableDataByRule_S('Get_SBR_Limit_Balance_POF', '1', 'Y');
            lmtbal = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
            document.MAINFORM.FA_LMT_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, lmtbal);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_GetSBRLimitBal", e);
    }
}

csFuncLevelProto.SYF_FAEF_FA_TEMP_AMT9 = function() {
    try {

        document.MAINFORM.FA_TEMP_AMT9.value = SYS_BeFloat(document.MAINFORM.FA_TTL_PO_LOAN_AMT.value) * 100 / SYS_BeFloat(document.MAINFORM.PO_MAX_LOAN_PERC.value) * (SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) - SYS_BeFloat(document.MAINFORM.PO_MAX_LOAN_PERC.value)) / 100 + (SYS_BeFloat(document.MAINFORM.FA_TTL_INV_BAL.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_PO_LOAN_AMT.value) * 100 / SYS_BeFloat(document.MAINFORM.PO_MAX_LOAN_PERC.value)) * SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) / 100;
        document.MAINFORM.FA_TEMP_AMT9.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TEMP_AMT9.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_FA_TEMP_AMT9", e);
    }
}

csFuncLevelProto.SYF_FAEF_FA_TEMP_AMT10 = function() {
    try {

        document.MAINFORM.FA_TEMP_AMT10.value = (SYS_BeFloat(document.MAINFORM.FA_TTL_INV_BAL.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_CRN_BAL.value)) * SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) / 100 - SYS_BeFloat(document.MAINFORM.FA_TTL_PO_LOAN_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_INV_LOAN_AMT.value);
        document.MAINFORM.FA_TEMP_AMT10.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TEMP_AMT10.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_FA_TEMP_AMT10", e);
    }
}

csFuncLevelProto.SYF_FAEF_TTL_PO_LOAN_AVL = function() {
    try {

        document.MAINFORM.TTL_PO_LOAN_AVL.value = SYS_BeFloat(document.MAINFORM.FA_TTL_PO_AMT.value) * SYS_BeFloat(document.MAINFORM.PO_MAX_LOAN_PERC.value) / 100 - SYS_BeFloat(document.MAINFORM.FA_TTL_PO_LOAN_AMT.value);
        document.MAINFORM.TTL_PO_LOAN_AVL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.TTL_PO_LOAN_AVL.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_TTL_PO_LOAN_AVL", e);
    }
}

csFuncLevelProto.SYF_FAEF_LoadDoComplete = function() {
    try {

        SYF_FAEF_Check_FIN_TYPE();
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_LoadDoComplete", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_ReqLoanAmt = function() {
    try {

        var reqLoanAmt = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        var LimitBal = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        var ttlLoanAvl = SYS_BeFloat(document.MAINFORM.AMT_AVAL_FOR_FUNDING.value);
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
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Chk_ReqLoanAmt", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_ReqLoanAmt_submit = function() {
    try {

        var reqLoanAmt = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        var LimitBal = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        var ttlLoanAvl = SYS_BeFloat(document.MAINFORM.AMT_AVAL_FOR_FUNDING.value);
        var doc_limt_exch = SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);
        if ((document.MAINFORM.FA_BUSI_TYPE.value == 'POF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RF') && reqLoanAmt * doc_limt_exch > LimitBal) {
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
        if (document.MAINFORM.FA_FIN_TYPE.value == 'PO') {
            _do = SYS_getDoByXpath('POFinance');
            ttlLoanAmt = SYS_getFieldSumValue(_do, "PO_LOAN_AMT", document.MAINFORM.FA_TEMP6.value);
        }
        if (reqLoanAmt != ttlLoanAmt) {
            alert('Please do Finance after modify Request Loan Amount!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*SYF_FAEF_Chk_ReqLoanAmt_submit", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*CancelCheck", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*addRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*editRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DOC_CCY_onchange = function(event) {
    try {
        SYF_FAEF_Get_ratetype();
        SYF_FAEF_Cal_FA_LOAN_CCY();
        SYF_FAEF_Get_BaseDay_CCYDec();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_CCY, 'onChange');
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
        //GetTrxCcyExchRt(document.MAINFORM.FA_DOC_CCY.value,document.MAINFORM.FA_SEL_ID.value);
        SYF_FAEF_GetExchangeRate();
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_FA_DOC_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_FIN_TYPE_onchange = function(event) {
    try {
        SYF_FAEF_Check_FIN_TYPE();
        var sMappingList = "FA_DOC_CCY";;
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        if (document.MAINFORM.FA_FIN_TYPE.value == 'PO') {
            SYS_GetTableDataByRule_S('Get_PO_CCY_For_Finance', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
        }
        if (document.MAINFORM.FA_FIN_TYPE.value == 'INV') {
            SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_DOC_CCY_4', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);

        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_FA_FIN_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IRT_SPREAD_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_FA_IRT_SPREAD_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_CCY_onchange = function(event) {
    try {
        SYF_FAEF_Get_BaseDay_CCYDec();
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_FA_LOAN_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_INT_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_FA_LOAN_INT_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_IRATE_TYPE_onchange = function(event) {
    try {
        //20080731
        //();
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_FA_LOAN_IRATE_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_PERC_onchange = function(event) {
    try {
        SYF_FAEF_Chk_MAX_LOAN_PERC();
        SYF_FAEF_Chk_FA_LOAN_PERC();
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_FA_LOAN_PERC_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_FA_PAID_INT_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_GRC_DAY_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_PMT_GRC_DAY.value == '') {
            document.MAINFORM.FA_PMT_GRC_DAY.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_FA_PMT_GRC_DAY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_SEL_AC_AMT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_FA_SEL_AC_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_LOAN_AMT_onchange = function(event) {
    try {
        SYF_FAEF_Chk_ReqLoanAmt();
        SYF_FAEF_Cal_FA_TTL_LOAN_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_BAL, 'onchange');
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_FA_TTL_LOAN_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_XBOR_RT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_XBOR_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_Financing.js*FLD_FAEF_view_1_onclick", e);
    }
}