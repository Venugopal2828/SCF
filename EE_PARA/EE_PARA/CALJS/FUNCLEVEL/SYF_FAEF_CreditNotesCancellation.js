var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_getDOdata_EFIncAjustCancel = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        SYS_GetDataForDO_S("CRNCancel", "N", false, '', "EFIncAjustCancel");
        _do = SYS_getDoByXpath('EFIncAjustCancel'); // Utility Auto Fix Comments
        recs = SYS_getRecords(_do); // Utility Auto Fix Comments
        mData = [];


        arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'TEMP_AMT18', 0);
            mData.push(record);
        }
        SYS_reLoadGrid(_do, mData); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

       var DCMrk; // Utility Auto Fix Comments
        var LmtAmt; // Utility Auto Fix Comments
        var LmtID; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        //SYF_FAEF_setDOCref();
        /*
if(document.MAINFORM.FA_MSG_FUNC.value=='9'){
	SYM_FAEF_forBAFields();
}
*/
/*         LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == '1' && (document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DF')) {
            DCMrk = "";
            _do = SYS_getDoByXpath('EFIncAjustCancel'); // Utility Auto Fix Comments
            num = SYS_getcurrRecordCount("EFIncAjustCancel");
            if (num > 0) {
                arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    recordTypeTemp = record['FA_DOC_TYPE'];
                    LmtID = record['FA_INV_LINK_REF'];
                    LmtAmt = record['FA_DOC_AMT'];
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
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var h; // Utility Auto Fix Comments
        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        h = EEHtml.getElementById('hide');
        if (document.MAINFORM.FA_BUSI_TYPE.value != 'EF') {
            h.style.display = 'none';
        } else {
            h.style.display = '';
        }
        SYS_GetRefNo('FAEF_INV_TRF', 'SYF_FAEF_SetRefNo', '', '', '', 'C_MAIN_REF');
        SYF_FAEF_Get_DocCCY();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_setDOCref = function() {
    try {

        document.MAINFORM.FA_DOC_NO.value = document.MAINFORM.FA_DOC_NO.value + 'CAL';
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'CNC';
        document.MAINFORM.FA_MSG_FUNC.value = '9';
        //document.MAINFORM.FA_TEMP4.value=document.MAINFORM.FA_DOC_NO.value;
        document.MAINFORM.TEMP_AMT14.value = document.MAINFORM.FA_TTL_FIN_RET_BAL.value; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DocCCY = function() {
    try {

        var FA_DOC_CCY; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sSelects1; // Utility Auto Fix Comments
        var tempFA_DOC_CCY; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            document.MAINFORM.FA_DOC_CCY.options.length = 0;
            sSelects1 = [
                [document.MAINFORM.FA_INV_CCY1.value, document.MAINFORM.FA_INV_CCY1.value],
                [document.MAINFORM.FA_INV_CCY2.value, document.MAINFORM.FA_INV_CCY2.value],
                [document.MAINFORM.FA_INV_CCY3.value, document.MAINFORM.FA_INV_CCY3.value],
                [document.MAINFORM.FA_INV_CCY4.value, document.MAINFORM.FA_INV_CCY4.value],
                [document.MAINFORM.FA_INV_CCY5.value, document.MAINFORM.FA_INV_CCY5.value]
            ];
            FA_DOC_CCY = document.MAINFORM.FA_DOC_CCY.value;
            for (i = 0; i < sSelects1.length; ++i) {
                if (sSelects1[i][0] == '') {
                    continue;
                }
                document.MAINFORM.FA_DOC_CCY.options.add(new Option(sSelects1[i][0], sSelects1[i][1]));
                if (FA_DOC_CCY != '') {
                    document.MAINFORM.FA_DOC_CCY.value = FA_DOC_CCY;
                }
            }
            if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

                window_onload.toString().match(/fv\(\'FA_DOC_CCY\'\,\'(.*)\'\);/mg);
                tempFA_DOC_CCY = RegExp.$1;
                document.MAINFORM.FA_DOC_CCY.value = tempFA_DOC_CCY;
            }
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            document.MAINFORM.FA_DOC_CCY.options.add(new Option(SYS_LOCAL_CCY, SYS_LOCAL_CCY));
            document.MAINFORM.FA_DOC_CCY.value = SYS_LOCAL_CCY;
            SYT_ChangeFldClass_New('FA_DOC_CCY', 'P');
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            SYT_ChangeFldClass_New('FA_DOC_CCY', 'M');
            document.MAINFORM.FA_DOC_CCY.options.length = 0;
            //sSQLWhere="C_MAIN_REF='"+document.MAINFORM.C_MAIN_REF.value+"'";
            ////sFieldList="DISTINCT(FA_DOC_CCY) AS FA_DOC_CCY";
            sMappingList = "FA_DOC_CCY";
            //SYS_GetTableMultiDataToArray_S("FAEF_INV_TRF",sSQLWhere,sFieldList);
            SYS_GetTableDataByRule_S("Get_DocCCY_0", "1", true, true);
            SYM_FAEF_RefreshOptions(sMappingList);
            if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

                window_onload.toString().match(/fv\(\'FA_DOC_CCY\'\,\'(.*)\'\);/mg);
                tempFA_DOC_CCY = RegExp.$1;
                document.MAINFORM.FA_DOC_CCY.value = tempFA_DOC_CCY;
            }
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            sMappingList = "FA_DOC_CCY";
            SYS_GetTableDataByRule_S('Get_DocCCY_1', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_TotalCreditNoteamountforcancel = function() {
    try {

        var docAmt; // Utility Auto Fix Comments
        docAmt = SYS_BeFloat(SYS_getFieldSumValue(node, "FA_DOC_AMT", 2));
        document.MAINFORM.TEMP_AMT60.value = docAmt;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
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
                    alert('Please eidt the Credit Notes records before confirm the transaction!');
                    return false;
                }
            }
        }
        if (!SYT_checkFactoringChildRecord('EFIncAjustCancel')) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_SetRefNo = function(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        UnitCode = UnitCode.substr(0, 5);
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'CNC';
        document.MAINFORM.C_MAIN_REF.value = pre + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_BUSI_TYPE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation.js", e);
    }
}