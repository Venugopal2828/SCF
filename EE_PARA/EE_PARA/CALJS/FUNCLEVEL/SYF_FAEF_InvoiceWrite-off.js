var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        if (!SYT_checkFactoringChildRecord('writeoff')) {
            return false;
        }
        _do = SYS_getDoByXpath('writeoff'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("writeoff");
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                recordTypeTemp = record['FA_DOC_STATUS']; // Utility Auto Fix Comments
                if (recordTypeTemp != 'CLOSED') {
                    alert('Please edit the records before confirm the transaction!');
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Ref = function(ref) {
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
        sub = 'WTO';
        document.MAINFORM.FA_PMT_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_PMT_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

/*        var DCMrk; // Utility Auto Fix Comments
        var LmtAmt; // Utility Auto Fix Comments
        var LmtID; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == "1" && document.MAINFORM.FA_LMT_TYPE.value == '1') {
            DCMrk = "";
            _do = SYS_getDoByXpath('writeoff'); // Utility Auto Fix Comments
            num = SYS_getcurrRecordCount("writeoff");
            if (num > 0) {
                arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    recordTypeTemp = record['FA_DOC_TYPE'];
                    LmtID = record['FA_DOC_REF'];
                    LmtAmt = record['FA_PMT_AMT'];
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
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('FAEF_WRITE_OFF', 'SYF_FAEF_Cal_Ref');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'WTO';
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_MSG_TEXT.value = '';
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        SYF_FAEF_Get_WriteOff_CCY();
        SYF_FAEF_BUSI_TYPE_FIELD();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_WriteOff_CCY = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var tempFA_DOC_CCY; // Utility Auto Fix Comments
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        sMappingList = "FA_DOC_CCY";
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'IF') {
            //sFieldList = "FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5";
            SYS_GetTableDataByRule_S('SYF_FAEF_InvoiceWrite-off_SYF_FAEF_Get_WriteOff_CCY_0', '1', null, 'Y', "Y");
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
            SYS_GetTableDataByRule_S('SYF_FAEF_InvoiceWrite-off_SYF_FAEF_Get_WriteOff_CCY_1', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
            if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

                window_onload.toString().match(/fv\(\'FA_DOC_CCY\'\,\'(.*)\'\);/mg);
                tempFA_DOC_CCY = RegExp.$1;
                document.MAINFORM.FA_DOC_CCY.value = tempFA_DOC_CCY;
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_BUSI_TYPE_FIELD = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            EEHtml.getElementById('EF').style.display = "none";
            EEHtml.getElementById('IF').style.display = "";
            EEHtml.getElementById('DF').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'IF') {
            EEHtml.getElementById('EF').style.display = "";
            EEHtml.getElementById('IF').style.display = "none";
            EEHtml.getElementById('DF').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            EEHtml.getElementById('EF').style.display = "none";
            EEHtml.getElementById('IF').style.display = "none";
            EEHtml.getElementById('DF').style.display = "";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            EEHtml.getElementById('EF').style.display = "none";
            EEHtml.getElementById('IF').style.display = "none";
            EEHtml.getElementById('DF').style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off.js", e);
    }
}