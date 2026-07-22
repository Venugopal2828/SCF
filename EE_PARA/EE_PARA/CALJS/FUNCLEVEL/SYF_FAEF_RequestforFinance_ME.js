var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('SCF_INV_FIN_REQ', 'SYF_FAEF_Cal_RefNo');
        document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_FIN_TYPE.value = 'INV';


    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_ExchRate_FIX_PENDING();
        }
        document.MAINFORM.FA_INT_CHG_TYPE.value = '1';
        SYF_FAEF_Get_ratetype();
        SYF_FAEF_SYF_FAEF_Get_BaseDay_CCYDec();

    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_REQ_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_LOAN_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.TEMP_TRX_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_BUSI_STATUS.value = 'FINREQ';
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var reqamt;
        var ttlavl;
        reqamt = SYS_BeFloat(document.MAINFORM.FIN_REQD_AMT.value);
        ttlavl = SYS_BeFloat(document.MAINFORM.TTL_LOAN_AVL.value);
        if (reqamt > ttlavl) {
            alert('Request Loan Amount cannot more than Total Available for Finance!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var node = SYS_getDoByXpath('InvFinReq');
        var mData = [];
        var arrayvalue = SYS_getRecords(node);
        for (var i = 0, len = arrayvalue.length; i < len; i++) {
            var record = arrayvalue[i];
            SYS_setValToRec(record, "FA_DOC_STATUS", 'Finance Requested');
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);

    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
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
        document.MAINFORM.FA_REQ_FIN_NO.value = pre + year + month + UnitCode + ref;
        document.MAINFORM.C_MAIN_REF.value = pre + year + month + UnitCode + ref;

    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
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
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_SEL_AC_AMT = function() {
    try {

        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FIN_REQD_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value);
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
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
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
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
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_ratetype = function() {
    try {

        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            document.MAINFORM.FA_IRT_SPREAD.value = 0;
            document.MAINFORM.XBOR_RT.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'M');
            EEHtml.fireEvent(document.MAINFORM.FA_IRT_SPREAD, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_getDOdata_InvFinReq = function() {
    try {

        var LMTAPPRV; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var intchgtype; // Utility Auto Fix Comments
        var invref; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var dueDateMain;
        var FA_LOAN_VAL_DT; // Utility Auto Fix Comments
        var FA_LOAN_INT_RATE; // Utility Auto Fix Comments
        var iaYReaccInt; // Utility Auto Fix Comments
        intchgtype = document.MAINFORM.FA_INT_CHG_TYPE.value;
        if (intchgtype == '' || intchgtype == null) {
            alert('Please input the interest charge type!');
            return;
        }
        SYS_GetDataForDO_S("Get_INV_ForFinReq_ME", "A", false, '', "InvFinReq");
        FA_LOAN_VAL_DT = SYS_BUSI_DATE;
        FA_LOAN_INT_RATE = document.MAINFORM.FA_LOAN_INT_RT.value;
        num = SYS_getcurrRecordCount("InvFinReq");
        node = SYS_getDoByXpath("InvFinReq");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            SYS_setValToRec(record, "FA_LOAN_INT_AMT", 0);
            SYS_setValToRec(record, "FA_INV_LOAN_AMT", 0);
            SYS_setValToRec(record, "FA_INV_LOAN_EBAL", 0);
            SYS_setValToRec(record, "FA_INT_CHG_TYPE", intchgtype);
            SYS_setValToRec(record, "FA_LOAN_INT_RT", FA_LOAN_INT_RATE);
            SYS_setValToRec(record, "FA_LOAN_VAL_DT", FA_LOAN_VAL_DT);
            invref = SYS_getValFromRec(record, 'FA_DOC_REF');
            DocBal = SYS_getValFromRec(record, 'FA_DOC_BAL');
            CRNBal = SYS_getValFromRec(record, 'FA_CRN_BAL');
            OrgttlLoanAmt = SYS_getValFromRec(record, 'FA_TEMP_AMT15');
            dueDateMain = SYS_getValFromRec(record, 'FA_DOC_DUE_DT');
            SYS_setValToRec(record, "FA_LOAN_DUE_DT", dueDateMain);
            InvLoanAvl = (SYS_BeFloat(DocBal) - SYS_BeFloat(CRNBal)) * SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) / 100 - SYS_BeFloat(OrgttlLoanAmt);
            InvLoanAvl = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, InvLoanAvl);
            SYS_setValToRec(record, "INV_LOAN_AVL", InvLoanAvl);
            SYS_setValToRec(record, "FA_INV_LOAN_AMT", InvLoanAvl);
            //FOR eLAON
            document.MAINFORM.IA_Y_TRX_AMT.value = InvLoanAvl;
            document.MAINFORM.IA_D_TRX_VALDATE.value = FA_LOAN_VAL_DT;
            //add by sandy 20120410 - marked.
            //SYS_FormatDate('IA_D_DUE_DATE');
            //end by sandy 20120410.
            SYS_setValToRec(record, "IA_D_DUE_DATE", document.MAINFORM.IA_D_DUE_DATE.value);
            document.MAINFORM.IA_I_DISCOUNT_DAYS.value = SYS_GetSubDays('FA_LOAN_VAL_DT', 'FA_LOAN_DUE_DT');
            document.MAINFORM.FA_LOAN_CCY.value = SYS_getValFromRec(record, 'FA_DOC_CCY');
            document.MAINFORM.IA_C_CCY_CODE.value = document.MAINFORM.FA_LOAN_CCY.value;
            SYS_setValToRec(record, "FA_LOAN_CCY", document.MAINFORM.FA_LOAN_CCY.value);
            document.MAINFORM.IA_I_CCY_DEC.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);
            // for get interest
            document.MAINFORM.IA_D_DUE_DATE.value = dueDateMain;
            // document.MAINFORM.FA_TEMP7.value = '365';
            document.MAINFORM.IA_N_DISCOUNT_RATE.value = document.MAINFORM.FA_LOAN_INT_RT.value;
            // for get interest end
            if (document.MAINFORM.FA_INT_CHG_TYPE.value == '1') {
                iaYReaccInt = -1;
                if (SYS_BeFloat(InvLoanAvl) > 0) {
                    SYS_InqGapi_S('FAEF_AmtInquireInterest');
                    iaYReaccInt = SYS_BeFloat(document.MAINFORM.IA_Y_REACC_INT.value);
                } else {
                    iaYReaccInt = 0;
                }
                SYS_setValToRec(record, "FA_LOAN_INT_AMT", iaYReaccInt);
            }
            document.MAINFORM.FA_TEMP2.value = invref;

            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        document.MAINFORM.FA_TEMP1.value = SYS_getFieldSumValue(node, 'INV_LOAN_AVL', document.MAINFORM.FA_TEMP6.value);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP1.value);
        document.MAINFORM.TTL_LOAN_AVL.value = document.MAINFORM.FA_TEMP1.value;
        document.MAINFORM.FA_PAID_INT_SUM.value = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_SUM, 'onchange');
        document.MAINFORM.FA_PAID_INT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PAID_INT_SUM.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_ReqLoanAmt = function() {
    try {

        var reqLoanAmt = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        var LimitBal = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        var ttlLoanAvl = SYS_BeFloat(document.MAINFORM.TTL_LOAN_AVL.value);
        var doc_limt_exch = SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);
        if (reqLoanAmt * doc_limt_exch > LimitBal) {
            alert('Request Loan Amount cannot more than SBR Limit Balance!');
            return false;
        }
        if (reqLoanAmt > ttlLoanAvl) {
            alert('Request Loan Amount cannot more than Total Available for Finance!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_SYF_FAEF_Get_BaseDay_CCYDec = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_BaseDay_CCYDec_1', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IRT_SPREAD_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_PERC_onchange = function(event) {
    try {
        SYF_FAEF_Chk_MAX_LOAN_PERC();
        SYF_FAEF_Chk_FA_LOAN_PERC();
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_REQ_DT_onchange = function(event) {
    try {
        document.MAINFORM.FA_LOAN_VAL_DT.value = document.MAINFORM.FA_REQ_DT.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FIN_REQD_AMT_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_BAL, 'onchange');
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_XBOR_RT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_RequestforFinance_ME.js", e);
    }
}