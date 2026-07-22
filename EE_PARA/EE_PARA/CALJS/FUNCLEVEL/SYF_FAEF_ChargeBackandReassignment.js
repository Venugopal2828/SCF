var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_Chk_FinanceReturnforDocument = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var doc_bal; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var loan_bal; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('ChgBack'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("ChgBack");
        //flag = false;
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                doc_bal = SYS_getValFromRec(record, 'FA_DOC_BAL');
                loan_bal = SYS_getValFromRec(record, 'FA_INV_LOAN_BAL');
                if (doc_bal < loan_bal) {
                    document.MAINFORM.FA_FIN_RETURN_REQ.value = '1';
                    return;
                }
            }
        }
        document.MAINFORM.FA_FIN_RETURN_REQ.value = '2';
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forFSBCBal = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_PMO_Field_Class = function(type) {
    try {

        if (type == '1') {
            SYT_ChangeFldClass_New('FA_DOC_CCY', 'P');
            SYT_ChangeFldClass_New('FA_MSG16_TYPE', 'P');
            SYT_ChangeFldClass_New('FA_CBK_DT', 'P');
        } else {
            SYT_ChangeFldClass_New('FA_DOC_CCY', 'M');
            SYT_ChangeFldClass_New('FA_MSG16_TYPE', 'M');
            SYT_ChangeFldClass_New('FA_CBK_DT', 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('FAEF_CBK_REF', 'SYF_FAEF_setCBKref');
        document.MAINFORM.FA_BUSI_STATUS.value = 'CBK';
        document.MAINFORM.FA_MSG_TEXT.value = '';

        SYF_FAEF_Get_DOC_CCY();
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var DCMrk; // Utility Auto Fix Comments
        var LmtAmt1; // Utility Auto Fix Comments
        var LmtAmt2; // Utility Auto Fix Comments
        var LmtID; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        SYF_FAEF_Chk_FinanceReturnforDocument();
        /*LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == "1" && document.MAINFORM.FA_LMT_TYPE.value == '1') {
            DCMrk = "";
            _do = SYS_getDoByXpath('ChgBack'); // Utility Auto Fix Comments
            num = SYS_getcurrRecordCount("ChgBack");
            if (num > 0) {
                arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    recordTypeTemp = record['FA_DOC_TYPE'];
                    LmtID = record['FA_INV_LINK_REF'];
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
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_getDOdata_ChgBack = function() {
    try {

        var num; // Utility Auto Fix Comments
        SYS_GetDataForDO_S('ChgBack');
        num = SYS_getcurrRecordCount("ChgBack");
        if (num > 0 && document.MAINFORM.FA_MSG16_TYPE.value != '') {
            SYF_FAEF_PMO_Field_Class('1');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_setCBKref = function(ref) {
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
        sub = 'CBK';
        document.MAINFORM.FA_CBK_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_CBK_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('ChgBack'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("ChgBack");
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = record['FA_CBK_AMT']; // Utility Auto Fix Comments
                if (recordTypeTemp == 0) {
                    alert('Please edit the records before confirm the transaction!');
                    return false;
                }
            }
        }
        if (!SYT_checkFactoringChildRecord('ChgBack')) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if ((SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') && SYS_BeFloat(document.MAINFORM.FA_TTL_CBK_AMT.value) != 0) {
            SYF_FAEF_PMO_Field_Class('1');
        }
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DOC_CCY = function() {
    try {

        var sMappingList; // Utility Auto Fix Comments
        var tempFA_DOC_CCY; // Utility Auto Fix Comments
        sMappingList = "FA_DOC_CCY";
        SYS_GetTableDataByRule_S('SYF_FAEF_ChargeBackandReassignment_SYF_FAEF_Get_DOC_CCY_0', '1', null, 'Y', "Y");
        SYM_FAEF_RefreshOptions(sMappingList);
        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

            window_onload.toString().match(/fv\(\'FA_DOC_CCY\'\,\'(.*)\'\);/mg);
            tempFA_DOC_CCY = RegExp.$1;
            document.MAINFORM.FA_DOC_CCY.value = tempFA_DOC_CCY;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
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
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        dcFlgs = "D/C"; //debit and credit group
        keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value;
        payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
        payAMTs = document.MAINFORM.FA_TTL_CBK_AMT.value + "/" + document.MAINFORM.FA_TTL_CBK_AMT.value;
        descs = "Invoice Payable/Invoice Receivable";
        ccyProtecteFlgs = "N/N"; //protected ccy
        actions = "S/S"; //save
        merges = "N/N";
        comp = "Payment";
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DOC_CCY_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_CBK_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_CBK_AMT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_forFSBCBal();
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment.js", e);
    }
}