var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_Cal_amt_to_sel = function() {
    try {

        var selamt; // Utility Auto Fix Comments
        selamt = SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_OVDUE_INT_SUM.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value);
        document.MAINFORM.FA_SEL_AC_AMT.value = (SYS_BeFloat(selamt) * 1000) / 1000;
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('IndirectPmt'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("IndirectPmt");
        flag = false;
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                recordTypeTemp = record['FA_PAID_PRIN_AMT']; // Utility Auto Fix Comments
                if (recordTypeTemp == '' && recordTypeTemp == null && recordTypeTemp == 0) {
                    flag = true;
                }
            }
        }
        if (flag) {
            alert('Please edit the records before confirm the transaction!');
            return false;
        }

        if (!SYT_checkFactoringChildRecord('IndirectPmt')) {
            return false;
        }
        if (!SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

/*        var DCMrk; // Utility Auto Fix Comments
        var LmtAmt1; // Utility Auto Fix Comments
        var LmtAmt2; // Utility Auto Fix Comments
        var LmtID; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == "1" && document.MAINFORM.FA_LMT_TYPE.value == "1") {
            DCMrk = "";
            _do = SYS_getDoByXpath('IndirectPmt'); // Utility Auto Fix Comments
            recs = SYS_getRecords(_do); // Utility Auto Fix Comments
            if (recs.length > 0) {
                arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    recordTypeTemp = record['FA_DOC_TYPE'];
                    LmtID = record['FA_DOC_REF'];
                    LmtAmt1 = record['FA_TEMP_INV_BA'];
                    LmtAmt2 = record['FA_TEMP_CRN_BA'];
                    if (recordTypeTemp == "1") {
                        DCMrk = "C";
                        LMTS.Ext.invPayment(LmtID, DCMrk, LmtAmt1);
                    } else if (recordTypeTemp == "2") {
                        DCMrk = "D";
                        LMTS.Ext.invPayment(LmtID, DCMrk, LmtAmt2);
                    }
                }
            }
        }*/
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_CHEAR_MSG = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'RE') {
            document.MAINFORM.FA_MSG_TEXT02.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('FAEF_PMT_INP', 'SYF_FAEF_Cal_RefNo');
        SYF_FAEF_Cal_CHEAR_MSG();
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
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
        sub = 'INP';
        document.MAINFORM.FA_PMT_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_PMT_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_getDOdata_IndirectPmt = function() {
    try {

        if (document.MAINFORM.EXPIRY_DT_CONF.value == '' || document.MAINFORM.EXPIRY_DT_CONF.value == null) {
            alert('Last Due Date cannot be empty, please input it!');
        } else {
            //SYS_GetDataForDO_S('IndirectPmt');
            SYS_GetDataForDO_S("IndirectPmt", "N", false, '', "IndirectPmt");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_SEL_AC_AMT.value = DecimalFormat(document.MAINFORM.FA_SEL_AC_AMT.value, 2);
        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;

        document.MAINFORM.FA_BUSI_STATUS.value = 'INP';
        document.MAINFORM.FA_PMT_TYPE.value = 'INP';
        document.MAINFORM.FA_INDR_PMT_FLG.value = '1';
        document.MAINFORM.FA_MSG_TEXT02.value = '';
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;
        document.MAINFORM.FA_TEMP_TRX_DT.value = document.MAINFORM.TRX_DT.value;
        if (document.MAINFORM.FA_PMT_VAL_DT.value != '') {
            document.MAINFORM.FA_TEMP_TRX_DT.value = document.MAINFORM.FA_PMT_VAL_DT.value;
        } else {
            document.MAINFORM.FA_PMT_VAL_DT.value = document.MAINFORM.TRX_DT.value;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        var FA_PMT_CCY; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        FA_PMT_CCY = document.MAINFORM.FA_PMT_CCY.value;
        document.MAINFORM.FA_PMT_CCY.value = '';
        document.MAINFORM.FA_PMT_CCY.options.length = 0;
        //sFieldList = "FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5";
        sMappingList = "FA_PMT_CCY";
        SYS_GetTableDataByRule_S('SYF_FAEF_IndirectPayment_PreInitValues_0', '1', null, 'Y', "Y");
        SYM_FAEF_RefreshOptions(sMappingList);
        if (FA_PMT_CCY != '') {
            document.MAINFORM.FA_PMT_CCY.value = FA_PMT_CCY;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.FA_TEMP_TRX_DT.value = SYS_BUSI_DATE;
        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYF_FAEF_CreditCover_FSB_Inq();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_CreditCover_FSB_Inq = function() {
    try {

        var FA_LMT_APPRV; // Utility Auto Fix Comments
        var FA_LMT_BAL; // Utility Auto Fix Comments
        var FA_LMT_EXTRA; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "LM_BASE_CCY;LM_CRED_LMT;LM_CRED_LMT;LM_OUTC_APL;LM_OUTC_APV;LM_OUTD_APL;LM_OUTD_APV;LM_OUTD_APLO;LM_OUTD_APVO;LM_OUTC_APLO;LM_OUTC_APVO";
        //sMappingList = "FA_LMT_CCY;FA_LMT_APPRV;LM_CRED_LMT;LM_OUTC_APL;LM_OUTC_APV;LM_OUTD_APL;LM_OUTD_APV;LM_OUTD_APLO;LM_OUTD_APVO;LM_OUTC_APLO;LM_OUTC_APVO";
        SYS_GetTableDataByRule_S('SYF_FAEF_IndirectPayment_SYF_FAEF_CreditCover_FSB_Inq_1', '1', 'Y');
        FA_LMT_BAL = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APL.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value);
        FA_LMT_EXTRA = SYS_BeFloat(document.MAINFORM.LM_OUTD_APLO.value) - SYS_BeFloat(document.MAINFORM.LM_OUTC_APLO.value) + SYS_BeFloat(document.MAINFORM.LM_OUTD_APVO.value) - SYS_BeFloat(document.MAINFORM.LM_OUTC_APVO.value);
        FA_LMT_APPRV = SYS_BeFloat(document.MAINFORM.FA_LMT_APPRV.value);
        document.MAINFORM.FA_LMT_APPRV.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_APPRV);
        document.MAINFORM.FA_LMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_BAL);
        document.MAINFORM.FA_LMT_EXTRA.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_EXTRA);
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_FA_TXT_REFUNDINT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value) > 0) {
            SYT_ChangeFldClass_New('FA_TXT_REFUNDINT', 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData = function() {
    try {

        var actions; // Utility Auto Fix Comments
        var ccyProtecteFlgs; // Utility Auto Fix Comments
        var comp; // Utility Auto Fix Comments
        var dcFlgs; // Utility Auto Fix Comments
        var descs; // Utility Auto Fix Comments
        var keyindex; // Utility Auto Fix Comments
        var merges; // Utility Auto Fix Comments
        var payAMTs; // Utility Auto Fix Comments
        var payCCYs; // Utility Auto Fix Comments
        var pmttype; // Utility Auto Fix Comments
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        pmttype = document.MAINFORM.FA_PMT_TYPE.value;
        descs = "Payment";
        dcFlgs = "D/C"; //debit and credit group
        keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value;
        payCCYs = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
        payAMTs = document.MAINFORM.FA_SEL_AC_AMT.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
        descs += "/Payment";
        ccyProtecteFlgs = "N/N"; //protected ccy
        actions = "S/S"; //save
        merges = "N/N";
        comp = "Payment";
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);

        if (SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value) > 0) {
            descs1 = "Refund Interest";
            dcFlgs1 = "D/C"; //debit and credit group
            keyindex1 = document.MAINFORM.FA_SEL_ID.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs1 = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
            payAMTs1 = document.MAINFORM.FA_TTL_REFUND_INT.value + "/" + document.MAINFORM.FA_TTL_REFUND_INT.value;
            descs1 += "/Refund Interest";
            ccyProtecteFlgs1 = "N/N"; //protected ccy
            actions1 = "S/S"; //save
            merges1 = "N/N";
            comp1 = "Refund Interest";
            SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actions1, merges1, comp1);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sum; // Utility Auto Fix Comments
        var payamt; // Utility Auto Fix Comments
        payamt = SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value);
        _do = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiDebitSummary");
        arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
        if (num > 0) {
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                sum = SYS_BeFloat(SYS_getFieldSumValue(_do, "N_MLDC_AMT", 2)); // Utility Auto Fix Comments
                if (sum != payamt) {
                    alert('Multi Debit Amount is not equal to Payment Amount!');
                    return false;
                }
            }
        }

        _do = SYS_getDoByXpath('MultiCreditSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiCreditSummary");
        arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
        if (num > 0) {
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                sum = SYS_BeFloat(SYS_getFieldSumValue(_do, "N_MLDC_AMT", 2)); // Utility Auto Fix Comments
                if (sum != payamt) {
                    alert('Multi Credit Amount is not equal to Payment Amount!');
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_OVDUE_INT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_amt_to_sel();
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_amt_to_sel();
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_PRIN_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_amt_to_sel();
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_CCY_onchange = function(event) {
    try {
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_DT_onchange = function(event) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('IndirectPmt');
        arrayvalue = SYS_getRecords(node);
        mData = [];
        num = SYS_getcurrRecordCount("IndirectPmt");
        if (num > 0) {
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                SYS_setValToRec(record, "FA_PMT_DT", document.MAINFORM.FA_PMT_DT.value);
                mData.push(record);
            }
            SYS_reLoadGrid(node, mData);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_TYPE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_VAL_DT_onchange = function(event) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('IndirectPmt');
        arrayvalue = SYS_getRecords(node);
        mData = [];
        num = SYS_getcurrRecordCount("IndirectPmt");
        if (num > 0) {
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                SYS_setValToRec(record, "FA_PMT_VAL_DT", document.MAINFORM.FA_PMT_VAL_DT.value);
                mData.push(record);
            }
            SYS_reLoadGrid(node, mData);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_SEL_AC_AMT_onchange = function(event) {
    try {
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_REFUND_INT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_amt_to_sel();
        SYF_FAEF_MPO_FA_TXT_REFUNDINT();
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment.js", e);
    }
}