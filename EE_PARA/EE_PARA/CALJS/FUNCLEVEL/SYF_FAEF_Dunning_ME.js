var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_BUSI_TYPE_FIELD = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') {
            EEHtml.getElementById('TRAC1').style.display = "";
            SYT_EnableDivClass('TRAC1');
            EEHtml.getElementById('TRAC2').style.display = "";
            SYT_EnableDivClass('TRAC2');
            EEHtml.getElementById('BYSEL1').style.display = "";
            SYT_EnableDivClass('BYSEL1');
        }
        EEHtml.getElementById('INCO1').style.display = "none";
        EEHtml.getElementById('INCO2').style.display = "none";

    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_FAEF_BUSI_TYPE_FIELD();

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_TRAC_DAYS = function() {
    try {

        if (document.MAINFORM.TEMP_FLG16.value == '1') {
            SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, SYS_BUSI_DATE, '-5', 'TEMP_DATE9', 'A', 'N', 'N');
            SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, SYS_BUSI_DATE, '-15', 'TEMP_DATE10', 'A', 'N', 'N');
            document.MAINFORM.FA_DUNNING_FLG.value = '1';
        } else if (document.MAINFORM.TEMP_FLG16.value == '2') {
            SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, SYS_BUSI_DATE, '-16', 'TEMP_DATE9', 'A', 'N', 'N');
            SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, SYS_BUSI_DATE, '-30', 'TEMP_DATE10', 'A', 'N', 'N');
            document.MAINFORM.FA_DUNNING_FLG.value = '2';
        } else if (document.MAINFORM.TEMP_FLG16.value == '3') {
            SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, SYS_BUSI_DATE, '-30', 'TEMP_DATE10', 'A', 'N', 'N');
            document.MAINFORM.FA_DUNNING_FLG.value = '3';
        } else if (document.MAINFORM.TEMP_FLG16.value == '4') {
            SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, SYS_BUSI_DATE, '-5', 'TEMP_DATE10', 'A', 'N', 'N');
            document.MAINFORM.FA_DUNNING_FLG.value = '4';
        }

    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_setMAINref = function(ref) {
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
        document.MAINFORM.C_MAIN_REF.value = pre + year + month + UnitCode + ref;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('SCF_DUNN', 'SYF_FAEF_setMAINref()');
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'DUN';
        document.MAINFORM.FA_MSG_TEXT.value = '';
        SYF_FAEF_Get_Seller_Buyer_Add();



    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_IF_RECP_INFO = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value != 'DISC') {
            SYS_GetTableDataByRule_S('SYF_FAEF_Dunning_SYF_FAEF_Get_IF_RECP_INFO_0', '1', null, null, false);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_Seller_Buyer_Add = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FAEF_Dunning_SYF_FAEF_Get_Seller_Buyer_Add_1', '1', null, null, false);
        SYS_GetTableDataByRule_S('SYF_FAEF_Dunning_SYF_FAEF_Get_Seller_Buyer_Add_2', '1', null, null, false);
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var FA_DUNNING_FLG;
        var arrayvalue;
        var duedt;
        var i;
        var id;
        var mData;
        var node;
        var record;
        var subdays;
        var trxdt;

        node = SYS_getDoByXpath("Tracing");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            trxdt = document.MAINFORM.TRX_DT.value;
            duedt = SYS_getValFromRec(record, 'FA_DOC_DUE_DT');
            document.MAINFORM.TEMP_DATE1.value = duedt;
            subdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE1.name, document.MAINFORM.TRX_DT.name);
            record = SYS_setValToRec(record, 'FA_TEMP2', subdays);
            FA_DUNNING_FLG = document.MAINFORM.FA_DUNNING_FLG.value;
            record = SYS_setValToRec(record, 'FA_DUNNING_FLG', FA_DUNNING_FLG);
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);

    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Check_TracingDays = function() {
    try {

        if (document.MAINFORM.TEMP_FLG16.value == '0') {
            alert('Please put the tracing days type');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FAEF_Check_TracingDays()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {

        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_FLD_FAEF_view_1_onclick = function(event) {
    try {

        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_BUSI_TYPE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_TEMP_FLG16_onchange = function(event) {
    try {
        SYF_FAEF_TRAC_DAYS();
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning_ME.js", e);
    }
}