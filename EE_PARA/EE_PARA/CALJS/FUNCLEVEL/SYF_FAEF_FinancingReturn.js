var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_getDOdata_ReturnFin = function() {
    try {

        var num; // Utility Auto Fix Comments
        if (document.MAINFORM.EXPIRY_DT_CONF.value == '' || document.MAINFORM.EXPIRY_DT_CONF.value == null) {
            alert('Last Due Date cannot be empty, please input it!');
        } else {
            SYS_GetDataForDO_S("ReturnFin", "N", false, '', "ReturnFin");
        }
        num = SYS_getcurrRecordCount("ReturnFin");
        if (num > 0) {
            SYF_FAEF_MPO_Field_Class('1');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var _do;
        var arrayvalue;
        var flag;
        var i;
        var record;
        var recordTypeTemp;
        _do = SYS_getDoByXpath('ReturnFin');
        var num = SYS_getcurrRecordCount("ReturnFin");
        flag = false;

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                recordTypeTemp = record['FA_PMT_AMT']; // Utility Auto Fix Comments
                if (recordTypeTemp == '' && recordTypeTemp == null && recordTypeTemp == 0) {
                    flag = true;
                }
            }
        }
        num = SYS_getcurrRecordCount("POReturnFin");
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                recordTypeTemp = record['FA_PMT_AMT']; // Utility Auto Fix Comments
                if (recordTypeTemp == '' && recordTypeTemp == null && recordTypeTemp == 0) {
                    flag = true;
                }
            }
        }
        if (flag) {
            alert('Please edit the records before confirm the transaction!');
            return false;
        }

        if (document.MAINFORM.FA_FIN_TYPE.value == 'INV' && !SYT_checkFactoringChildRecord('ReturnFin')) {
            return false;
        }
        if (document.MAINFORM.FA_FIN_TYPE.value == 'PO' && !SYT_checkFactoringChildRecord('POReturnFin')) {
            return false;
        }
        if (!SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL()) {
            return false;
        }
        /*if (!SYT_MLDC_ValidateBalance()) {
	return false;
}*/
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_SEL_AC_AMT = function() {
    try {

        var FA_SEL_AC_AMT; // Utility Auto Fix Comments
        FA_SEL_AC_AMT = SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value);
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, FA_SEL_AC_AMT);
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('FAEF_FINANCE_RETURN', 'SYF_FAEF_Cal_RefNo');
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_baseDays = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FAEF_FinancingReturn_SYF_FAEF_Get_baseDays_0', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
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
        sub = 'REP';
        document.MAINFORM.FA_PMT_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_PMT_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_Field_Class = function(type) {
    try {

        if (type == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        //SYM_FAEF_setDocCCY();
        //if(SYS_FUNCTION_TYPE == 'PM' ){
        SYF_FAEF_Get_DOC_CCY();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        //}
        SYF_FAEF_Chk_Busi_Type();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYM_FAEF_setDocCCY();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        document.MAINFORM.FA_BUSI_STATUS.value = 'REP';
        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_TEMP_TRX_DT.value = document.MAINFORM.FA_PMT_VAL_DT.value;
        document.MAINFORM.TEMP_AMT14.value = document.MAINFORM.FA_TTL_FIN_RET_BAL.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DOC_CCY = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var tempFA_DOC_CCY; // Utility Auto Fix Comments
        var ccy = document.MAINFORM.FA_SEL_AC_CCY.value;
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        sMappingList = "FA_DOC_CCY";
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            //sFieldList = "FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5";
            SYS_GetTableDataByRule_S('SYF_FAEF_FinancingReturn_SYF_FAEF_Get_DOC_CCY_1', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
                EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
            }
            if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

                window_onload.toString().match(/fv\(\'FA_DOC_CCY\'\,\'(.*)\'\);/mg);
                tempFA_DOC_CCY = RegExp.$1;
                document.MAINFORM.FA_DOC_CCY.value = tempFA_DOC_CCY;
            }
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYT_ChangeFldClass_New('FA_DOC_CCY', 'P');
            document.MAINFORM.FA_DOC_CCY.options.add(new Option(SYS_LOCAL_CCY, SYS_LOCAL_CCY));
            document.MAINFORM.FA_DOC_CCY.value = SYS_LOCAL_CCY;
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_DOC_CCY_4', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
                EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
            }
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            if (document.MAINFORM.FA_FIN_TYPE.value == 'PO') {
                SYS_GetTableDataByRule_S('Get_PO_CCY_For_Finance', '1', null, 'Y', "Y");
                SYM_FAEF_RefreshOptions(sMappingList);
            }
            if (document.MAINFORM.FA_FIN_TYPE.value == 'INV') {
                SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_DOC_CCY_4', '1', null, 'Y', "Y");
                SYM_FAEF_RefreshOptions(sMappingList);
            }
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
                EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
            }
        }
        if (ccy != '' && ccy != null) {
            document.MAINFORM.FA_DOC_CCY.value = ccy;
        }
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
        document.MAINFORM.FA_PMT_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData = function() {
    try {

        var IntSum; // Utility Auto Fix Comments
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
        comp = "Payment";
        IntSum = document.MAINFORM.FA_PAID_INT_SUM.value;
        if (IntSum != 0) {
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
            payAMTs = document.MAINFORM.FA_SEL_AC_AMT.value + "/" + document.MAINFORM.FA_PAID_INT_SUM.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value;
            descs = "Seller AC Amount/Interest Receivable/Loan Principal";
            ccyProtecteFlgs = "N/N/N"; //protected ccy
            actions = "S/S/S"; //save
            merges = "N/N/N";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        } else {
            dcFlgs = "D/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value;
            payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
            payAMTs = document.MAINFORM.FA_SEL_AC_AMT.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value;
            descs = "Seller AC Amount/Loan Principal";
            ccyProtecteFlgs = "N/N"; //protected ccy
            actions = "S/S"; //save
            merges = "N/N";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);

            if (SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value) > 0) {
                descs1 = "Refund Interest";
                dcFlgs1 = "D/C"; //debit and credit group
                keyindex1 = document.MAINFORM.FA_SEL_ID.value + "/" + document.MAINFORM.FA_SEL_ID.value;
                payCCYs1 = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
                payAMTs1 = document.MAINFORM.FA_TTL_REFUND_INT.value + "/" + document.MAINFORM.FA_TTL_REFUND_INT.value;
                descs1 += "/Refund Interest";
                ccyProtecteFlgs1 = "N/N"; //protected ccy
                actions1 = "S/S"; //save
                merges1 = "N/N";
                comp1 = "Refund Interest";
                SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actions1, merges1, comp1);
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        var sum; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiDebitSummary");

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                //recordTypeTemp = record['N_MLDC_AMT'];
                sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiDebitSummary'));
                if (sum != (SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value))) {
                    alert('Multi Debit Amount is not equal to Payment Amount!');
                    return false;
                }
            }
        }


        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiCreditSummary'));
            if (sum != (SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value))) {
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_Busi_Type = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value != 'POF') {
            document.MAINFORM.FA_FIN_TYPE.value = 'INV';
            SYT_ChangeFldClass(document.MAINFORM.FA_FIN_TYPE, 'P');
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            SYT_ChangeFldClass(document.MAINFORM.FA_FIN_TYPE, 'M');
        }

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Check_FIN_TYPE = function() {
    try {

        if (document.MAINFORM.FA_FIN_TYPE.value == 'PO') {
            SYS_enableButton('POReturnFin', 'GetData');
            SYS_enableButton('POReturnFin', 'Finance');
            SYS_disableButton('ReturnFin', 'GetData');
            SYS_disableButton('ReturnFin', 'Finance');
        } else {
            SYS_disableButton('POReturnFin', 'GetData');
            SYS_disableButton('POReturnFin', 'Finance');
            SYS_enableButton('ReturnFin', 'GetData');
            SYS_enableButton('ReturnFin', 'Finance');

        }


    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_LoadDoComplete = function() {
    try {

        SYF_FAEF_Check_FIN_TYPE();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_getDOdata_POReturnFin = function() {
    try {

        var num;
        if (document.MAINFORM.EXPIRY_DT_CONF.value == '' || document.MAINFORM.EXPIRY_DT_CONF.value == null) {
            alert('Last Due Date cannot be empty, please input it!');
        } else {
            SYS_GetDataForDO_S("POReturnFin", "N", false, '', "POReturnFin");
        }
        num = SYS_getcurrRecordCount("POReturnFin");
        if (num > 0) {
            SYF_FAEF_MPO_Field_Class('1');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DOC_CCY_onchange = function(event) {
    try {
        SYF_FAEF_Get_baseDays();
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
        document.MAINFORM.FA_PMT_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_FIN_TYPE_onclick = function(event) {
    try {
        SYF_FAEF_Check_FIN_TYPE();
        var sMappingList = "FA_DOC_CCY";;
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        if (document.MAINFORM.FA_FIN_TYPE.value == 'PO') {
            SYS_GetTableDataByRule_S('Get_PO_CCY_For_Finance', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
        }
        if (document.MAINFORM.FA_FIN_TYPE.value == 'INV') {
            SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_DOC_CCY_4', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);

        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        }

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_PRIN_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn.js", e);
    }
}