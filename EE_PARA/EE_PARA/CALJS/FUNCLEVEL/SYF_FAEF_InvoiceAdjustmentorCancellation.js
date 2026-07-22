var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var DCMrk; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var LmtAmt; // Utility Auto Fix Comments
        var LmtID; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        SYF_FAEF_Cal_BusiStatus();
        _do = SYS_getDoByXpath('EFIncAjustCancel'); // Utility Auto Fix Comments
        var num = SYS_getcurrRecordCount("EFIncAjustCancel");
        if (document.MAINFORM.FA_MSG_FUNC.value == '9') {
            var ccydec = findDecFromCCY(document.MAINFORM.FA_DOC_CCY.value);
            SYS_GetExchangeRate_S(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_LMT_CCY.value, 'Booking Rate', 'EXCH_RT5');
            var ttlInvBal = SYS_getFieldSumValue(_do, "FA_TEMP_AMT16", ccydec);
            document.MAINFORM.FA_TEMP5.value = SYS_BeFloat(ttlInvBal) * SYS_BeFloat(document.MAINFORM.EXCH_RT5.value);
        }
/*        LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == "1" && document.MAINFORM.FA_LMT_TYPE.value == "1" && (document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'IF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DF') && document.MAINFORM.FA_MSG_FUNC.value == '9') {
            DCMrk = "";
            if (num > 0) {
                arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
                for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                    record = arrayvalue[i];
                    recordTypeTemp = record['FA_DOC_TYPE'];
                    LmtID = record['FA_DOC_REF'];
                    LmtAmt = record['FA_TEMP_AMT16'];
                    if (recordTypeTemp == "1") {
                        DCMrk = "C";
                        LMTS.Ext.invPayment(LmtID, DCMrk, LmtAmt);
                    } else if (recordTypeTemp == "2") {
                        DCMrk = "D";
                        LMTS.Ext.invPayment(LmtID, DCMrk, LmtAmt);
                    }
                }
            }
        }*/
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_BusiStatus = function() {
    try {

        if (document.MAINFORM.FA_MSG_FUNC.value == '10') {
            document.MAINFORM.FA_BUSI_STATUS.value = 'ADJ';
        }
        if (document.MAINFORM.FA_MSG_FUNC.value == '9') {
            document.MAINFORM.FA_BUSI_STATUS.value = 'IVC';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        var arrOptionV; // Utility Auto Fix Comments
        arrOptionV = ['9', '10'];
        SYS_FilterOptions('FA_MSG_FUNC', arrOptionV);
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'IQ') {
            document.MAINFORM.TRX_VAL_DT.value = SYS_BUSI_DATE;
        }
        SYF_FAEF_Hidden_EF_IF_INCO_Info();
        SYF_FAEF_GET_DOC_CCY();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('EFIncAjustCancel'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("EFIncAjustCancel");

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = record['FA_MSG_FUNC']; // Utility Auto Fix Comments
                if (recordTypeTemp == '') {
                    alert('Please eidt the records before confirm the transaction!');
                    return false;
                }
            }
        }


        if (!SYT_checkFactoringChildRecord('EFIncAjustCancel')) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Hidden_EF_IF_INCO_Info = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value != 'IF') {
            EEHtml.getElementById('EFInfo').style.display = "none";
            EEHtml.getElementById('EFInfo1').style.display = "none";
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value != 'EF') {
            EEHtml.getElementById('IFInfo').style.display = "none";
            EEHtml.getElementById('IFInfo1').style.display = "none";
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value != 'DF') {
            EEHtml.getElementById('INCOInfo').style.display = "none";
            EEHtml.getElementById('INCOInfo1').style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_GET_DOC_CCY = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var tempFA_DOC_CCY; // Utility Auto Fix Comments
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        sMappingList = "FA_DOC_CCY";
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'IF') {
            //sFieldList = "FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5";
            SYS_GetTableDataByRule_S('SYF_FAEF_InvoiceAdjustmentorCancellation_SYF_FAEF_GET_DOC_CCY_0', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
            if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

                window_onload.toString().match(/fv\(\'FA_DOC_CCY\'\,\'(.*)\'\);/mg);
                tempFA_DOC_CCY = RegExp.$1;
                document.MAINFORM.FA_DOC_CCY.value = tempFA_DOC_CCY;
            }
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            document.MAINFORM.FA_DOC_CCY.options.add(new Option(SYS_LOCAL_CCY, SYS_LOCAL_CCY));
            document.MAINFORM.FA_DOC_CCY.value = SYS_LOCAL_CCY;
            SYT_ChangeFldClass_New('FA_DOC_CCY', 'P');
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYS_GetTableDataByRule_S('SYF_FAEF_InvoiceAdjustmentorCancellation_SYF_FAEF_GET_DOC_CCY_1', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
            if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

                window_onload.toString().match(/fv\(\'FA_DOC_CCY\'\,\'(.*)\'\);/mg);
                tempFA_DOC_CCY = RegExp.$1;
                document.MAINFORM.FA_DOC_CCY.value = tempFA_DOC_CCY;
            }
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_DOC_CCY_4', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        var arrOptionV; // Utility Auto Fix Comments
        arrOptionV = ['9', '10'];
        SYS_FilterOptions('FA_MSG_FUNC', arrOptionV);
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYS_GetRefNo_S('FAEF_INV_TRF', 'SYF_FAEF_Cal_Ref');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Ref = function(ref) {
    try {

        var UnitCode;
        var pre; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        UnitCode = SYS_BUSI_UNIT;
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'IAC';
        document.MAINFORM.C_MAIN_REF.value = pre + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation.js", e);
    }
}