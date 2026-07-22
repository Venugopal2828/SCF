var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {
        SYF_FAEF_Get_RefNo();
        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = document.MAINFORM.FA_PMT_TYPE.value;
        document.MAINFORM.FA_MSG_TEXT02.value = '';
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        document.MAINFORM.FA_PMT_TYPE.remove(2);
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_FAEF_MLDC_SetDebitCreditData();
            SYF_FAEF_Cal_103_info();
            SYF_FAEF_Cal_202_info();
        }
        SYF_FAEF_Disable103Tab();
        SYF_FAEF_Disable202Tab();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Set_RefNo_PMT = function(refpmt) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'PMT';
        document.MAINFORM.FA_PMT_REF.value = pre + UnitCode + year + month + refpmt + sub;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_PMT_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Set_RefNo_PUG = function(refpug) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'PUG';
        document.MAINFORM.FA_PMT_REF.value = pre + UnitCode + year + month + refpug + sub;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_PMT_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_RefNo = function() {
    try {

        if (document.MAINFORM.FA_PMT_TYPE.value == 'PMT') {
            SYS_GetRefNo_S('FAEF_PMT_BURER', 'SYF_FAEF_Set_RefNo_PMT');
        } else if (document.MAINFORM.FA_PMT_TYPE.value == 'PUG') {
            SYS_GetRefNo_S('FAEF_PMT_GUR', 'SYF_FAEF_Set_RefNo_PUG');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var tempFA_PMT_CCY; // Utility Auto Fix Comments
        //sFieldList = "FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5";
        sMappingList = "FA_PMT_CCY";
        SYS_GetTableDataByRule_S('SYF_FAEF_IFPayment_PreInitValues_0', '1', null, 'Y', "Y");
        SYM_FAEF_RefreshOptions(sMappingList);
        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

            window_onload.toString().match(/fv\(\'FA_PMT_CCY\'\,\'(.*)\'\);/mg);
            //window_onload.toString().match(/document\.MAINFORM\.FA_DOC_CCY\.value="(.*)";/mg);
            tempFA_PMT_CCY = RegExp.$1;
            document.MAINFORM.FA_PMT_CCY.value = tempFA_PMT_CCY;
            EEHtml.fireEvent(document.MAINFORM.FA_PMT_CCY, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_chk_FA_PMT_DT = function() {
    try {

        var subdays; // Utility Auto Fix Comments
        subdays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_PMT_DT.name);
        if (subdays < 0) {
            SYS_CheckError(document.MAINFORM.FA_PMT_DT, "Payment date can not be early than transaction date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        if (!SYF_FAEF_chk_FA_PMT_DT()) {
            return false;
        }

        if (!SYT_checkFactoringChildRecord('PaymentReg')) {
            return false;
        }

        _do = SYS_getDoByXpath('PaymentReg'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("PaymentReg");

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                recordTypeTemp = record['FA_PMT_AMT']; // Utility Auto Fix Comments
                if (recordTypeTemp == 0) {
                    alert('Please eidt the records before confirm the transaction!');
                    return false;
                }
            }
        }

        if (!SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
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
        if (pmttype == 'PMT') {
            descs = "Payment by buyer";
        } else if (pmttype == 'PUG') {
            descs = "Payment under guarantee";
        }
        dcFlgs = "D/C"; //debit and credit group
        keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value;
        payCCYs = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
        payAMTs = document.MAINFORM.FA_PMT_AMT_SUM.value + "/" + document.MAINFORM.FA_PMT_AMT_SUM.value;
        descs += "/Payment to EF";
        ccyProtecteFlgs = "N/N"; //protected ccy
        actions = "S/S"; //save
        merges = "N/N";
        comp = "Payment";
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var CrnAmt; // Utility Auto Fix Comments
        var DCMrk; // Utility Auto Fix Comments
        var InvAmt; // Utility Auto Fix Comments
        var LmtID; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        SYF_FAEF_Cal_103_info();
        SYF_FAEF_Cal_202_info();
        SYF_FAEF_For_GAPI_Fields();

        LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == "1" && document.MAINFORM.FA_LMT_TYPE.value == "1") {
            DCMrk = "";
            _do = SYS_getDoByXpath('PaymentReg'); // Utility Auto Fix Comments
            num = SYS_getcurrRecordCount("PaymentReg");
            if (num > 0) {
                arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    recordTypeTemp = record['FA_DOC_TYPE'];
                    LmtID = record['FA_DOC_REF'];
                    InvAmt = record['FA_TEMP_INV_BA'];
                    CrnAmt = record['FA_TEMP_CRN_BA'];
                    if (recordTypeTemp == "1") {
                        DCMrk = "C";
                        LMTS.Ext.invPayment(LmtID, DCMrk, InvAmt);
                    } else if (recordTypeTemp == "2") {
                        DCMrk = "D";
                        LMTS.Ext.invPayment(LmtID, DCMrk, CrnAmt);
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_103_info = function() {
    try {

        var ref; // Utility Auto Fix Comments
        var tag20; // Utility Auto Fix Comments
        document.MAINFORM.X103_INSTR_AMT_33B.value = document.MAINFORM.FA_PMT_AMT_SUM.value;
        document.MAINFORM.X103_INSTR_CCY_33B.value = document.MAINFORM.FA_PMT_CCY.value;
        document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.FA_PMT_CCY.value;
        document.MAINFORM.X103_SETT_AMT_32A.value = document.MAINFORM.FA_PMT_AMT_SUM.value;
        document.MAINFORM.X103_VALUE_DT_32A.value = document.MAINFORM.FA_PMT_VAL_DT.value;
        if (document.MAINFORM.FA_PMT_TYPE.value == 'PMT') {
            document.MAINFORM.X103_ORDCU_ID_OP.value = 'Customer';
        } else if (document.MAINFORM.FA_PMT_TYPE.value == 'PUG') {
            document.MAINFORM.X103_ORDCU_ID_OP.value = 'Bank';
        }
        ref = document.MAINFORM.C_MAIN_REF.value;
        tag20 = ref.substr(0, 2) + ref.substr(8, 10);
        document.MAINFORM.X103_SEND_NO_20.value = tag20;
        document.MAINFORM.X103_INSTR_AMT_33B.value = SYT_AmtFormat(document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.X103_INSTR_AMT_33B.value);
        document.MAINFORM.X103_SETT_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.X103_SETT_CCY_32A.value, document.MAINFORM.X103_SETT_AMT_32A.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_202_info = function() {
    try {

        var ref; // Utility Auto Fix Comments
        document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.FA_PMT_AMT_SUM.value;
        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.FA_PMT_CCY.value;
        document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.FA_PMT_VAL_DT.value;
        ref = document.MAINFORM.FA_PMT_REF.value;
        document.MAINFORM.X202_TRX_REF_NO_20.value = ref.substr(0, 2) + ref.substr(8, 13);
        document.MAINFORM.X202_RELATEDNO_21.value = document.MAINFORM.X103_SEND_NO_20.value;
        document.MAINFORM.X202_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.X202_CCY_32A.value, document.MAINFORM.X202_AMT_32A.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiDebitSummary");

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = record['N_MLDC_AMT']; // Utility Auto Fix Comments
                if (SYS_BeFloat(recordTypeTemp) != SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value)) {
                    alert('Multi Debit Amount is not equal to Payment Amount!');
                    return false;
                }
            }
        }

        _do = SYS_getDoByXpath('MultiCreditSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = record['N_MLDC_AMT']; // Utility Auto Fix Comments
                if (SYS_BeFloat(recordTypeTemp) != SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value)) {
                    alert('Multi Credit Amount is not equal to Payment Amount!');
                    return false;
                }
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Disable103Tab = function() {
    try {

        if (document.MAINFORM.CPYT_C_SEND_103.value == 'NO') {
            EEHtml.getElementById('C').style.display = "none";
            SYT_DisableDiv('C_div');
        } else {
            EEHtml.getElementById('C').style.display = "block";
            SYT_EnableDivClass('C_div');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Disable202Tab = function() {
    try {

        if (document.MAINFORM.CPYT_C_SEND_202.value == 'NO') {
            EEHtml.getElementById('D').style.display = "none";
            SYT_DisableDiv('D_div');
        } else {
            EEHtml.getElementById('D').style.display = "block";
            SYT_EnableDivClass('D_div');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_For_GAPI_Fields = function() {
    try {

        var pmtamt; // Utility Auto Fix Comments
        pmtamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value);
        if (pmtamt > 0) {
            document.MAINFORM.FA_TEMP2.value = 'C';
            document.MAINFORM.FA_TEMP_AMT11.value = document.MAINFORM.FA_PMT_AMT_SUM.value;
        } else {
            document.MAINFORM.FA_TEMP2.value = 'D';
            document.MAINFORM.FA_TEMP_AMT11.value = Math.abs(document.MAINFORM.FA_PMT_AMT_SUM.value);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_CPYT_C_SEND_103_onchange = function(event) {
    try {
        SYF_FAEF_Disable103Tab();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_CPYT_C_SEND_202_onchange = function(event) {
    try {
        SYF_FAEF_Disable202Tab();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_AMT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_MLDC_SetDebitCreditData();
        SYF_FAEF_Cal_103_info();
        SYF_FAEF_Cal_202_info();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_CCY_onchange = function(event) {
    try {
        SYF_FAEF_MLDC_SetDebitCreditData();
        SYF_FAEF_Cal_103_info();
        SYF_FAEF_Cal_202_info();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_DT_onchange = function(event) {
    try {
        SYF_FAEF_chk_FA_PMT_DT();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_REF_onchange = function(event) {
    try {
        SYF_FAEF_Cal_202_info();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_TYPE_onchange = function(event) {
    try {
        document.MAINFORM.FA_BUSI_STATUS.value = document.MAINFORM.FA_PMT_TYPE.value;
        SYF_FAEF_Get_RefNo();
        SYF_FAEF_MLDC_SetDebitCreditData();
        EEHtml.fireEvent(document.MAINFORM.FA_PMT_REF, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_VAL_DT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_103_info();
        SYF_FAEF_Cal_202_info();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103MEDIBKADD1_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103MEDIBKADD2_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103MEDIBKADD3_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103SENDCORADD153A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103SENDCORADD253A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103SENDCORADD353A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ACCBKADD1_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ACCBKADD2_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ACCBKADD3_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ACC_BKACNO57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ACC_BKID_57A_onchange = function(event) {
    try {
        X103_ACC_BKID_57A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ACC_BKNM_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ACC_BKSW_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        X103_ADV_BKID_B2_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        X103_BENECU_ID_59A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_MEDIBKACNO56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_MEDI_BKID_56A_onchange = function(event) {
    try {
        X103_MEDI_BKID_56A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_MEDI_BKNM_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_MEDI_BKSW_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDBKADD1_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDBKADD2_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDBKADD3_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCUADD1_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCUADD2_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCUADD3_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        X103_ORDCU_ID_50A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCU_NM_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCU_SW_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORD_BKID_52A_onchange = function(event) {
    try {
        X103_ORD_BKID_52A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORD_BKNM_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORD_BKSW_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORADD154A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORADD254A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORADD354A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORRID_54A_onchange = function(event) {
    try {
        X103_RECCORRID_54A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORRNM_54A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORRSW_54A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_SENDCORRID53A_onchange = function(event) {
    try {
        X103_SENDCORRID53A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_SENDCORRNM53A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_SENDCORRSW53A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_SEND_BKID_51A_onchange = function(event) {
    try {
        X103_SEND_BKID_51A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_SEND_BKSW_51A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        X202_ACC_BKID_57A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        X202_ADV_BKID_B2_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        X202_BENE_BKID_58A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        X202_MEDI_BKID_56A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        X202_ORDBK_ID_52A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X202_RECCORRID_54A_onchange = function(event) {
    try {
        X202_RECCORRID_54A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X202_SENDCORRID53A_onchange = function(event) {
    try {
        X202_SENDCORRID53A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment.js", e);
    }
}