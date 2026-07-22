var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_BUSI_TYPE_FIELD = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            EEHtml.getElementById('IF').style.display = "";
            SYT_EnableDivClass('IF');
            EEHtml.getElementById('IFDEC').style.display = "";
            SYT_EnableDivClass('IFDEC');
            EEHtml.getElementById('DFDEC').style.display = "none";
            SYT_DisableDiv('DFDEC');
            EEHtml.getElementById('EF1').style.display = "";
            SYT_EnableDivClass('EF1');
            EEHtml.getElementById('EF2').style.display = "";
            SYT_EnableDivClass('EF2');
            EEHtml.getElementById('SENDRECP1').style.display = "";
            SYT_EnableDivClass('SENDRECP1');
            EEHtml.getElementById('SENDRECP2').style.display = "";
            SYT_EnableDivClass('SENDRECP2');
            EEHtml.getElementById('SENDRECP3').style.display = "";
            SYT_EnableDivClass('SENDRECP3');
            EEHtml.getElementById('TRINCO').style.display = "none";
            SYT_DisableDiv('TRINCO');
            EEHtml.getElementById('BYSEL1').style.display = "none";
            SYT_DisableDiv('BYSEL1');
            EEHtml.getElementById('BYSEL2').style.display = "none";
            SYT_DisableDiv('BYSEL2');
            EEHtml.getElementById('BYSEL3').style.display = "none";
            SYT_DisableDiv('BYSEL3');
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'IF') {
            EEHtml.getElementById('IF').style.display = "";
            SYT_EnableDivClass('IF');
            EEHtml.getElementById('IFDEC').style.display = "";
            SYT_EnableDivClass('IFDEC');
            EEHtml.getElementById('DFDEC').style.display = "none";
            SYT_DisableDiv('DFDEC');
            EEHtml.getElementById('EF1').style.display = "";
            SYT_EnableDivClass('EF1');
            EEHtml.getElementById('EF2').style.display = "";
            SYT_EnableDivClass('EF2');
            EEHtml.getElementById('TRINCO').style.display = "";
            SYT_EnableDivClass('TRINCO');
            EEHtml.getElementById('SENDRECP1').style.display = "none";
            SYT_DisableDiv('SENDRECP1');
            EEHtml.getElementById('SENDRECP2').style.display = "none";
            SYT_DisableDiv('SENDRECP2');
            EEHtml.getElementById('SENDRECP3').style.display = "none";
            SYT_DisableDiv('SENDRECP3');
            EEHtml.getElementById('SELL1').style.display = "none";
            SYT_DisableDiv('SELL1');
            EEHtml.getElementById('SELL2').style.display = "none";
            SYT_DisableDiv('SELL2');
            EEHtml.getElementById('SELL3').style.display = "none";
            SYT_DisableDiv('SELL3');
            EEHtml.getElementById('SELL4').style.display = "none";
            SYT_DisableDiv('SELL4');
            EEHtml.getElementById('BY1').style.display = "";
            SYT_EnableDivClass('BY1');
            EEHtml.getElementById('BY2').style.display = "";
            SYT_EnableDivClass('BY2');
            EEHtml.getElementById('BY3').style.display = "";
            SYT_EnableDivClass('BY3');
            EEHtml.getElementById('BY4').style.display = "";
            SYT_EnableDivClass('BY4');
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            EEHtml.getElementById('IF').style.display = "";
            SYT_EnableDivClass('IF');
            EEHtml.getElementById('IFDEC').style.display = "none";
            SYT_DisableDiv('IFDEC');
            EEHtml.getElementById('DFDEC').style.display = "";
            SYT_EnableDivClass('DFDEC');
            EEHtml.getElementById('EF1').style.display = "none";
            SYT_DisableDiv('EF1');
            EEHtml.getElementById('EF2').style.display = "none";
            SYT_DisableDiv('EF2');
            EEHtml.getElementById('INCO1').style.display = "none";
            SYT_DisableDiv('INCO1');
            EEHtml.getElementById('INCO2').style.display = "none";
            SYT_DisableDiv('INCO2');
            EEHtml.getElementById('SENDRECP1').style.display = "none";
            SYT_DisableDiv('SENDRECP1');
            EEHtml.getElementById('SENDRECP2').style.display = "none";
            SYT_DisableDiv('SENDRECP2');
            EEHtml.getElementById('SENDRECP3').style.display = "none";
            SYT_DisableDiv('SENDRECP3');
            EEHtml.getElementById('TRAC1').style.display = "";
            SYT_EnableDivClass('TRAC1');
            EEHtml.getElementById('TRAC2').style.display = "";
            SYT_EnableDivClass('TRAC2');
            EEHtml.getElementById('BYSEL1').style.display = "";
            SYT_EnableDivClass('BYSEL1');
            EEHtml.getElementById('BYSEL2').style.display = "";
            SYT_EnableDivClass('BYSEL2');
            EEHtml.getElementById('BYSEL3').style.display = "";
            SYT_EnableDivClass('BYSEL3');
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            EEHtml.getElementById('IFEF').style.display = "none";
            SYT_DisableDiv('IFEF');
            EEHtml.getElementById('INCO1').style.display = "none";
            SYT_DisableDiv('INCO1');
            EEHtml.getElementById('INCO2').style.display = "none";
            SYT_DisableDiv('INCO2');
            EEHtml.getElementById('SENDRECP1').style.display = "none";
            SYT_DisableDiv('SENDRECP1');
            EEHtml.getElementById('SENDRECP2').style.display = "none";
            SYT_DisableDiv('SENDRECP2');
            EEHtml.getElementById('SENDRECP3').style.display = "none";
            SYT_DisableDiv('SENDRECP3');
            EEHtml.getElementById('TRAC1').style.display = "";
            SYT_EnableDivClass('TRAC1');
            EEHtml.getElementById('TRAC2').style.display = "";
            SYT_EnableDivClass('TRAC2');
            EEHtml.getElementById('BYSEL1').style.display = "";
            SYT_EnableDivClass('BYSEL1');
            EEHtml.getElementById('BYSEL2').style.display = "";
            SYT_EnableDivClass('BYSEL2');
            EEHtml.getElementById('BYSEL3').style.display = "";
            SYT_EnableDivClass('BYSEL3');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
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
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_TRAC_DAYS = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value != 'EF') {
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
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_setEDIref = function(ref) {
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
        sub = 'EDI';
        document.MAINFORM.FA_EDI_MSG_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_EDI_MSG_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('FAEF_EDI_MSG_REF', 'SYF_FAEF_setEDIref');
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'DUN';
        document.MAINFORM.FA_MSG_TEXT.value = '';

        SYF_FAEF_Get_IF_RECP_INFO();
        SYF_FAEF_Get_Seller_Buyer_Add();
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_IF_RECP_INFO = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value != 'DISC') {
            SYS_GetTableDataByRule_S('SYF_FAEF_Dunning_SYF_FAEF_Get_IF_RECP_INFO_0', '1', null, null, false);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_Seller_Buyer_Add = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FAEF_Dunning_SYF_FAEF_Get_Seller_Buyer_Add_1', '1', null, null, false);
        SYS_GetTableDataByRule_S('SYF_FAEF_Dunning_SYF_FAEF_Get_Seller_Buyer_Add_2', '1', null, null, false);
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var FA_DUNNING_FLG; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var duedt; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var subdays; // Utility Auto Fix Comments
        var trxdt; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value != 'EF') {
            node = SYS_getDoByXpath("Tracing");
            arrayvalue = SYS_getRecords(node);
            mData = [];
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
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
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Check_TracingDays = function() {
    try {

        if (document.MAINFORM.TEMP_FLG16.value == '0') {
            alert('Please put the dunning days type');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FAEF_Check_TracingDays()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_TEMP_FLG16_onchange = function(event) {
    try {
        SYF_FAEF_TRAC_DAYS();
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_Dunning.js", e);
    }
}