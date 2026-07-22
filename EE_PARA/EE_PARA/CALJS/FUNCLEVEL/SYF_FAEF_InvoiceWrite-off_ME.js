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
                //val = 'CLOSED';
                //record = SYS_setValToRec(record, 'FA_DOC_STATUS', val);
                recordTypeTemp = record['FA_DOC_STATUS']; // Utility Auto Fix Comments
                if (recordTypeTemp != 'CLOSE') {
                    alert('Please edit the records before confirm the transaction!');
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Ref = function(ref) {
    try {

        /*var UnitCode; // Utility Auto Fix Comments
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

        var LC = SYS_MODULE_NAME;
        //var Sequence = ref.substr(5, 10);
        var Sequence = ref;
        var BANKCNTY = SYS_BANK_COUNTRY;
        var BranchID = SYS_USER_ID.substr(0, 3);
        var d = new Date();
        var ys = d.getFullYear();
        var sys = ys.toString();
        var code = 'WO';
        var ss = sys.substr(2, 4) + LC + BranchID + Sequence + code;
        document.MAINFORM.FA_PMT_REF.value = ss;
	 document.MAINFORM.C_MAIN_REF.value = ss;*/
        //MODIFY FOR SCF
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        UnitCode = SYS_BUSI_UNIT.substr(0, 4);
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        day = date.substr(8, 2);
        var date1 = new Date(year, month, day);
        var date2 = new Date(year, 1, 1);
        var day = date1 - date2;
        var day = (date1 - date2) / 1000 / 60 / 60 / 24 + 1;
        document.MAINFORM.FA_PMT_REF.value = pre + year + day + UnitCode + ref;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_PMT_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        //modify for scf
        var arrayvalue; // Utility Auto Fix Comments
        var doctype; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var pmtamt; // Utility Auto Fix Comments
        var pmtamtsum; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var _do;
        var mData = [];
        var val;
        num = SYS_getcurrRecordCount("writeoff");
        _do = SYS_getDoByXpath('writeoff');
        pmtamtsum = 0;
        arrayvalue = SYS_getRecords(_do);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            val = 'CLOSE';
            record = SYS_setValToRec(record, 'FA_DOC_STATUS', val);
            id = SYS_getRecID(record);
            pmtamt = SYS_getValFromRec(record, 'FA_PMT_AMT');
            doctype = SYS_getValFromRec(record, 'FA_DOC_TYPE');
            if (doctype == '1') {
                pmtamtsum = SYS_BeFloat(pmtamtsum) + SYS_BeFloat(pmtamt);
            } else if (doctype == '2') {
                pmtamtsum = SYS_BeFloat(pmtamtsum) - SYS_BeFloat(pmtamt);
            }
            mData.push(record);
        }
        document.MAINFORM.FA_PMT_AMT_SUM.value = SYS_BeFloat(pmtamtsum);
        document.MAINFORM.FA_PMT_AMT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT_SUM.value);
        SYS_reLoadGrid(_do, mData);
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        //SYS_GetRefNo('FAEF_WRITE_OFF', 'SYF_FAEF_Cal_Ref');
        SYS_GetRefNo('SCF_INV_CLOSE', 'SYF_FAEF_Cal_Ref');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        //modify for scf
        //document.MAINFORM.FA_BUSI_STATUS.value = 'WTO';
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_MSG_TEXT.value = '';
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
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
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_WriteOff_CCY = function() {
    try {

        var ccy;
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var tempFA_DOC_CCY; // Utility Auto Fix Comments
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        sMappingList = "FA_DOC_CCY";
        //var Sql_Cond = "FSBC_REF = '" + document.MAINFORM.FA_SBR_REF.value + "'";
        //var Field_List = "FA_DOC_CCY";
        //SYS_GetTableMultiDataToArray_S("INVC_MASTER", Sql_Cond, Field_List, 'false');
        SYS_GetTableDataByRule_S('SYF_FAEF_InvoiceWrite-off_SYF_FAEF_Get_WriteOff_CCY_1', '1', null, 'Y', "Y");
        SYM_FAEF_RefreshOptions(sMappingList);
        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {
            window_onload.toString().match(/fv\(\'FA_DOC_CCY\'\,\'(.*)\'\);/mg);
            tempFA_DOC_CCY = RegExp.$1;
            document.MAINFORM.FA_DOC_CCY.value = tempFA_DOC_CCY;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_BUSI_TYPE_FIELD = function() {
    try {

        EEHtml.getElementById('EF').style.display = "none";
        EEHtml.getElementById('IF').style.display = "none";
        EEHtml.getElementById('DF').style.display = "none";
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {

        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_FLD_FAEF_view_1_onclick = function(event) {
    try {

        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_ME.js", e);
    }
}