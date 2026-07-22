var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_CDOLimts = function() {
    try {

        var DCMrk; // Utility Auto Fix Comments
        var LmtAmt; // Utility Auto Fix Comments
        var LmtID; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == "1" && (document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DF')) {

            DCMrk = "C";
            _do = SYS_getDoByXpath('CreditNote1'); // Utility Auto Fix Comments
            num = SYS_getcurrRecordCount("CreditNote1");
            if (num > 0) {
                arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    recordTypeTemp = record['FA_DOC_TYPE'];
                    LmtID = record['FA_INV_LINK_REF'];
                    LmtAmt = record['FA_DOC_AMT'];
                    LMTS.Ext.invPayment(LmtID, DCMrk, LmtAmt);
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_CHG_INIT = function() {
    try {

        var type; // Utility Auto Fix Comments
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        type = document.MAINFORM.FA_BUSI_TYPE.value;
        if (type == 'EF' || type == 'DF' || type == 'DISC') {
            Chg.Screen.mapLocalCust("FA_SEL_ID", "FA_SEL_NM");
            Chg.Screen.mapForeignCust("FA_BUYER_ID", "FA_BUYER_NM");
        } else {
            Chg.Screen.mapLocalCust("FA_BUYER_ID", "FA_BUYER_NM");
            Chg.Screen.mapForeignCust("FA_SEL_ID", "FA_SEL_NM");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Change_By_Type = function() {
    try {

        var Desc1; // Utility Auto Fix Comments
        var Desc2; // Utility Auto Fix Comments
        var Desc3; // Utility Auto Fix Comments
        var Desc4; // Utility Auto Fix Comments
        var Desc5; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var val; // Utility Auto Fix Comments
        type = EEHtml.getElementById('FA_BUSI_TYPE');
        Desc2 = EEHtml.getElementById('Desc2');
        Desc3 = EEHtml.getElementById('Desc3');
        Desc5 = EEHtml.getElementById('Desc5');
        val = type.value;
        if (val != 'EF') {

            Desc2.innerHTML = 'Handling Charge Amount';
            Desc3.innerHTML = 'Handling Charge Collected';
            Desc5.innerHTML = 'Total Handling Charges';
            EEHtml.getElementById('EF1').style.display = "none";
            EEHtml.getElementById('EF2').style.display = "none";

        }

        if (val != 'DF') {
            EEHtml.getElementById('DF1').style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_INV_CCY = function() {
    try {

        var ccy; // Utility Auto Fix Comments
        ccy = document.MAINFORM.FA_DOC_CCY.value;
        SYS_refreshChildDoValue("CreditNote1", 'FA_DOC_CCY', ccy);
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FINC_CCY = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            document.MAINFORM.FINC_CCY1.value = document.MAINFORM.FA_DOC_CCY.value;
        }
        document.MAINFORM.FINC_CCY2.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_HAN_CHG_COLL = function() {
    try {

        if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_EF_HAN_CHG_CCY.value) {
            document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
            document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_PAMT.value);
        }

        if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_IF_HAN_CHG_CCY.value) {
            document.MAINFORM.FA_IF_HAN_CHG_PAMT.value = SYS_BeFloat(document.MAINFORM.FA_IF_HAN_CHG_AMT.value);
            document.MAINFORM.FA_IF_HAN_CHG_PAMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_IF_HAN_CHG_PAMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_RefreshOptions = function(mappingList) {
    try {

        var arrayValue; // Utility Auto Fix Comments
        var ary; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var newOption; // Utility Auto Fix Comments
        var objFld; // Utility Auto Fix Comments
        var optionAry; // Utility Auto Fix Comments
        optionAry = new Array();
        newOption = new Array();
        try {
            for (i = 0; i < SYS_MULTI_DATA.length; i++) {
                arrayValue = SYS_MULTI_DATA[i][1];
                for (j = 0; j < arrayValue.length; j++) {
                    optionAry.push(arrayValue[j]);
                }
            }
            while (true) {
                ary = optionAry.pop();
                if (!ary) {
                    break;
                }
                if (optionAry.contains(ary)) {
                    optionAry.splice(optionAry.indexOf(ary), 1, ary);
                } else {
                    newOption.push(ary);
                }
            }
            objFld = EEHtml.getElementById(mappingList);
            if (objFld) {
                objFld.options[0] = new Option("", "");
                for (i = 0; i < newOption.length; i++) {
                    fldValue = newOption[i];
                    objFld.options.add(new Option(fldValue, fldValue));
                }
            }
        } catch (e1) {
            alert("[RefreshOptions Error]: " + e1.expression);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_cableChargeCCYReload = function() {
    try {

        var FA_CB_FEE_CCY; // Utility Auto Fix Comments
        var FA_DOC_CCY; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        FA_DOC_CCY = EEHtml.getElementById('FA_DOC_CCY');
        FA_CB_FEE_CCY = EEHtml.getElementById('FA_CB_FEE_CCY');
        len = FA_CB_FEE_CCY.options.length;
        i = 0;
        for (i = len - 1; i >= 0; i--) {
            FA_CB_FEE_CCY.options.remove(i);
        }
        FA_CB_FEE_CCY.options.add(new Option('', ''));
        if (document.MAINFORM.FA_DOC_CCY.value != SYS_LOCAL_CCY && document.MAINFORM.FA_DOC_CCY.value != 'USD' && document.MAINFORM.FA_DOC_CCY.value != '') {
            FA_CB_FEE_CCY.options.add(new Option(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_CCY.value));
        }
        FA_CB_FEE_CCY.options.add(new Option('USD', 'USD'));
        document.MAINFORM.FA_CB_FEE_CCY.value = 'USD';
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forChildtoMainScreen = function(node, recordId, status) {
    try {

        var commvat; // Utility Auto Fix Comments
        var crnamtsum; // Utility Auto Fix Comments
        var crnnosum; // Utility Auto Fix Comments
        var efhandalsum; // Utility Auto Fix Comments
        var finRetsum; // Utility Auto Fix Comments
        var ifhandalsum; // Utility Auto Fix Comments
        var newfinRetsum; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var ttlCommAmt; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        SYF_FAEF_Cal_forChildtoMainScreen(node, recordId, status);
        crnnosum = SYS_getFieldSumValue(node, "FA_TEMP_AMT8", 0);
        SYS_setValueToMain('FA_TTL_CRN_NO', crnnosum);

        crnamtsum = SYS_getFieldSumValue(node, "FA_DOC_AMT", 2);
        SYS_setValueToMain('FA_TTL_CRN_AMT', crnamtsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_CRN_AMT'), 'onchange');

        type = document.MAINFORM.FA_BUSI_TYPE.value;
        if (type == 'IF') {
            ifhandalsum = SYS_getFieldSumValue(node, "FA_IF_HAN_CHG_PAMT", 2);
            SYS_setValueToMain('FA_IF_HAN_CHG_SUM', ifhandalsum);
            EEHtml.fireEvent(SYS_getMainObj('FA_IF_HAN_CHG_SUM'), 'onchange');
        } else {
            ifhandalsum = 0;
        }
        efhandalsum = SYS_getFieldSumValue(node, "FA_EF_HAN_CHG_PAMT", 2);
        SYS_setValueToMain('FA_EF_HAN_CHG_SUM', efhandalsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_EF_HAN_CHG_SUM'), 'onchange');


        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYS_BeFloat(ifhandalsum);
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_IF_CHG_AMT, 'onchange');
        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_TTL_IF_CHG_AMT.value);

        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_TTL_IF_CHG_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);

        document.MAINFORM.FA_BUY_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
        EEHtml.fireEvent(document.MAINFORM.FA_BUY_AC_AMT, 'onchange');
        document.MAINFORM.FA_BUY_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_BUY_AC_AMT.value);

        ttlCommAmt = SYS_BeFloat(document.MAINFORM.FA_TTL_IF_CHG_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
        commvat = (ttlCommAmt * 1000 * VATRate / 100) / 1000;



        if ('D' != status) {
            finRetsum = SYS_getFieldSumValue(node, "TEMP_AMT18", 2); // sum of FA_FIN_RET_AMT
            newfinRetsum = SYS_BeFloat(finRetsum) + SYS_BeFloat(document.MAINFORM.TEMP_AMT14.value); //TEMP_AMT14=Original TTL_FIN_RET_BAL 
            SYS_setValueToMain('FA_TTL_FIN_RET_BAL', newfinRetsum);
            document.MAINFORM.FA_TTL_FIN_RET_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, SYS_BeFloat(newfinRetsum));
            a = document.MAINFORM.FA_TTL_FIN_RET_BAL.value;
            document.MAINFORM.FA_TTL_FIN_RET_BAL.value = SYS_BeFloat(a);
        }
        if ('D' == status) {
            num = SYS_getcurrRecordCount("CreditNote1");
            if (num == 0) {
                SYF_FAEF_Cal_forControlDocCcy('2');
            } else {
                SYF_FAEF_Cal_forControlDocCcy('1');
            }
        } else {
            if (num == 0) {
                SYF_FAEF_Cal_forControlDocCcy('2');
            } else {
                SYF_FAEF_Cal_forControlDocCcy('1');
            }
        }
        SYF_FAEF_Set_charge();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forControlDocCcy = function(flag) {
    try {

        if (flag == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forGridtoMainScreen = function() {
    try {

        SYF_FAEF_Chk_vch();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forRealChgRT = function() {
    try {

        var docCcy; // Utility Auto Fix Comments
        var efPAMT; // Utility Auto Fix Comments
        var efPrice; // Utility Auto Fix Comments
        var exRt; // Utility Auto Fix Comments
        var ifPAMT; // Utility Auto Fix Comments
        var ifPrice; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var priCcy; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        docCcy = document.MAINFORM.FA_DOC_CCY.value;
        priCcy = document.MAINFORM.FA_EF_HAN_CHG_CCY.value;
        efPrice = document.MAINFORM.FA_EF_HAN_CHG_AMT.value;
        ifPrice = document.MAINFORM.FA_IF_HAN_CHG_AMT.value;
        type = document.MAINFORM.FA_BUSI_TYPE.value;
        if (docCcy == priCcy) {
            document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = efPrice;
            if (type == 'IF') {
                document.MAINFORM.FA_IF_HAN_CHG_PAMT.value = ifPrice;
            }
        } else {
            exRt = SYS_BeFloat(document.MAINFORM.EXCH_RT5.value);
            if (exRt != '') {
                efPAMT = SYS_BeFloat(efPrice) / exRt;
                document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = SYT_CCY_AMT(priCcy, efPAMT);
                if (type == 'IF') {
                    ifPAMT = SYS_BeFloat(ifPrice) / exRt;
                    document.MAINFORM.FA_IF_HAN_CHG_PAMT.value = SYT_CCY_AMT(priCcy, ifPAMT);
                }
                num = SYS_getcurrRecordCount("InvTRF");
                if (num > 0) {
                    EEHtml.fireEvent(document.MAINFORM.FA_EF_HAN_CHG_PAMT, "onchange");
                    EEHtml.fireEvent(document.MAINFORM.FA_IF_HAN_CHG_PAMT, "onchange");
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_FinanceReturnforDocument = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var doc_bal; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var loan_bal; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('CreditNote1'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("CreditNote1");
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
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_BAL = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var payBamt; // Utility Auto Fix Comments
        var paySamt; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiDebitSummary");
        paySamt = SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_CB_FEE.value);
        payBamt = SYS_BeFloat(document.MAINFORM.FA_BUY_AC_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_CB_FEE.value);
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];

                recordTypeTemp = SYS_getFieldSumValue(_do, "N_MLDC_AMT", 2); // Utility Auto Fix Comments
                SYS_setValueToMain('FA_TEMP1', recordTypeTemp);
            }
        }
        if (SYS_BeFloat(document.MAINFORM.FA_TEMP1.value) != paySamt && SYS_BeFloat(document.MAINFORM.FA_TEMP1.value) != payBamt) {
            alert('Multi Debit Amount is not equal to Payment Amount!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_vch = function() {
    try {

        var amt1; // Utility Auto Fix Comments
        var amt2; // Utility Auto Fix Comments
        var amt3; // Utility Auto Fix Comments
        amt1 = SYS_BeFloat(document.MAINFORM.FA_IF_HAN_CHG_SUM.value);
        amt2 = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
        amt3 = amt1 + amt2;
        document.MAINFORM.FA_SEL_AC_AMT.value = amt3;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_FAEF_Chk_FinanceReturnforDocument();
        SYF_FAEF_CDOLimts();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {


        if (!SYT_checkFactoringChildRecord('CreditNote1')) {
            return false;
        }

        if (!SYF_FAEF_Chk_MultiDebit_BAL()) {
            return false;
        }
        if (!SYT_MLDC_ValidateBalance()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_EXCH_RT5 = function() {
    try {


        if (document.MAINFORM.FA_EF_HAN_CHG_CCY.value != '' && document.MAINFORM.FA_DOC_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_CCY.value, 'Booking Rate', 'EXCH_RT5');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_EXCH_RT6 = function() {
    try {

        var exRt4; // Utility Auto Fix Comments
        var exRt5; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_LMT_CCY.value != '' && document.MAINFORM.FA_DOC_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_LMT_CCY.value, 'Booking Rate', 'EXCH_RT6');
            EEHtml.fireEvent(document.MAINFORM.EXCH_RT6, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_FA_DOC_CCY_OPTION = function() {
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
            SYT_ChangeFldClass_New('FA_DOC_CCY', 'P');
            document.MAINFORM.FA_DOC_CCY.value = SYS_LOCAL_CCY;
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            SYT_ChangeFldClass_New('FA_DOC_CCY', 'P');
            if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

                window_onload.toString().match(/fv\(\'FA_DOC_CCY\'\,\'(.*)\'\);/mg);
                tempFA_DOC_CCY = RegExp.$1;
                document.MAINFORM.FA_DOC_CCY.value = tempFA_DOC_CCY;
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_Pricing_Info = function() {
    try {

        var dTRF_DT; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            dTRF_DT = document.MAINFORM.FA_TRF_DT.value;
            document.MAINFORM.FA_TRF_DT.value = getDate(SYS_DATE_FORMAT, document.MAINFORM.FA_TRF_DT.value);

            SYS_GetTableDataByRule_S('SYF_FAEF_CreditNotesTransfer_SYF_FAEF_Get_Pricing_Info_0', '1', 'Y');
            document.MAINFORM.FA_TRF_DT.value = dTRF_DT;
            EEHtml.fireEvent(document.MAINFORM.FA_IF_HAN_CHG_AMT, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.FA_EF_HAN_CHG_AMT, 'onchange');


        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'TRF';
        document.MAINFORM.FA_DOC_TYPE.value = '2';
        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        document.MAINFORM.FA_TRF_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FINC_CCY1.value = '';
        document.MAINFORM.FINC_CCY2.value = '';
        document.MAINFORM.FA_TTL_CRN_NO.value = 0;
        document.MAINFORM.FA_IF_CHG_PAID_FLG.value = 'N';
        document.MAINFORM.FA_CB_FEE_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.TEMP_AMT14.value = document.MAINFORM.FA_TTL_FIN_RET_BAL.value;
        document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.TEMP_FA_LAST_AMT.value = document.MAINFORM.AMT_AVAL_FOR_FUNDING.value;
        document.MAINFORM.AMT_AVAL_FOR_FUNDING.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.AMT_AVAL_FOR_FUNDING.value);
        document.MAINFORM.FA_TTL_CRN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_CRN_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Init_Loan_DO = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('CreditNote1'); // Utility Auto Fix Comments
        recs = SYS_getRecords(_do); // Utility Auto Fix Comments
        mData = [];


        if (recs.length > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                fldValue = SYS_getValFromRec(record, 'FA_TEMP_AMT12');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_TEMP_AMT12', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_TEMP_AMT11');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_TEMP_AMT11', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_FIN_LOAN_AMT');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_FIN_LOAN_AMT', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_TEMP_LOAN_IBAL');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_TEMP_LOAN_IBAL', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_DOC_AMT');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_DOC_AMT', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_DOC_BAL');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_DOC_BAL', 0);
                }
                mData.push(record);
            }
            SYS_reLoadGrid(_do, mData); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYS_GetDataForDO_S("GET_CREDIT_NOTE", "N", false, '', "CreditNote1");
        SYF_FAEF_Sum_DO_Data();
        var efhandalsum = 0;
        var _do = SYS_getDoByXpath('CreditNote1');
        var recs = SYS_getRecords(_do);
        if (recs.length > 0) {
            var arrayvalue = SYS_getRecords(_do);
            for (var i = 0, len = arrayvalue.length; i < len; i++) {
                var record = arrayvalue[i];
                record = SYS_setValToRec(record, 'FA_EF_HAN_CHG_PAMT', document.MAINFORM.FA_EF_HAN_CHG_PAMT.value);
                var chgpamt = SYS_getValFromRec(record, 'FA_EF_HAN_CHG_PAMT');
                efhandalsum = SYS_BeFloat(efhandalsum) + SYS_BeFloat(chgpamt);
                document.MAINFORM.FA_EF_HAN_CHG_SUM.value = efhandalsum;
            }
        }
        var arrayvalue; // Utility Auto Fix Comments
        var chgEntry; // Utility Auto Fix Comments
        var commList1; // Utility Auto Fix Comments
        var commList2; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("ChgDoTrx");
        type = document.MAINFORM.FA_BUSI_TYPE.value;
        if (xDO) {
            commList1 = "FAEF_EF_CHG,FAEF_IF_CHG,FAEF_CABLE_CHG";
            commList2 = "FAEF_EF_CHG,FAEF_CABLE_CHG";

            if (type == 'IF') {
                Chg.LoadCommission(commList1, 'MAINREF', '', null, '', '', 'false');
            } else {
                Chg.LoadCommission(commList2, 'MAINREF', '', null, '', '', 'false');
            }
        }
        arrayvalue = SYS_getRecords(xDO);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            chgEntry = new Chg.Entry(record);
            Chg.Screen.putOrignalTrxChg(chgEntry);
        }
        SYF_FAEF_Init_Loan_DO();
        SYF_FAEF_Set_charge();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {


        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FAEF_Get_Pricing_Info();
        }

        SYF_FAEF_Cal_forControlDocCcy();
        SYF_FAEF_Get_FA_DOC_CCY_OPTION();
        SYF_FAEF_Cal_FINC_CCY();
        SYF_FAEF_Cal_Change_By_Type();
        SYF_FAEF_CHG_INIT();
        SYF_FAEF_Cal_forRealChgRT();
        SYF_FAEF_Cal_cableChargeCCYReload();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {


        SYS_GetRefNo('SCF_INV_TRF', 'SYF_FAEF_SetRefNo', '', '', '', 'FA_TRF_REF');
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
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
        UnitCode = UnitCode.substr(0, 4);
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        day = date.substr(8, 2);
        var date1 = new Date(year, month, day);
        var date2 = new Date(year, 1, 1);
        var day = date1 - date2;
        var day = (date1 - date2) / 1000 / 60 / 60 / 24 + 1;
        sub = 'CNT';
        document.MAINFORM.FA_TRF_REF.value = pre + year + day + UnitCode + ref;
        // document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_TRF_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Set_charge = function() {
    try {

        var COMM; // Utility Auto Fix Comments
        var cbccy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var invccy; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("ChgDoTrx");
        if (xDO) {
            invccy = document.MAINFORM.FA_DOC_CCY.value;
            cbccy = document.MAINFORM.FA_CB_FEE_CCY.value;
            type = document.MAINFORM.FA_BUSI_TYPE.value;
            records = SYS_getRecords(xDO);
            COMM = new Array();
            for (i = 0; i < records.length; i++) {
                COMM[0] = SYS_getValFromRec(records[i], "CHG_COMMISSION_CODE");
                id = SYS_getRecID(records[i]);
                if (COMM[0] == 'FAEF_EF_CHG') {
                    if (type != 'IF') {
                        SYS_setFieldValue(xDO, id, "CHG_COMMISSION_DESC", 'Total Handling Charges');
                    }
                    Chg.Screen.setChargeValue(COMM, invccy, document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", invccy);
                } else if (COMM[0] == 'FAEF_CABLE_CHG') {
                    Chg.Screen.setChargeValue(COMM, cbccy, document.MAINFORM.FA_CB_FEE.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_CB_FEE.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", cbccy);
                } else if (COMM[0] == 'FAEF_IF_CHG' && type == 'IF') {
                    Chg.Screen.setChargeValue(COMM, invccy, document.MAINFORM.FA_IF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_IF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", invccy);
                }
            }
            Chg_MultiDebitInvoker();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Sum_DO_Data = function() {
    try {

        var ccy;
        var ttlamt = 0;
        var docamt = 0;
        var _do;
        var arrayvalue;
        var i;
        var id;
        var mData;
        var num;
        var record;
        _do = SYS_getDoByXpath('CreditNote1');
        num = SYS_getcurrRecordCount("CreditNote1");
        document.MAINFORM.FA_TTL_CRN_NO.value = num;
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do);
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                ccy = SYS_getValFromRec(record, 'FA_DOC_CCY');
                docamt = SYS_getValFromRec(record, 'FA_DOC_AMT');
                ttlamt = SYS_BeFloat(ttlamt) + SYS_BeFloat(docamt);
                document.MAINFORM.FA_DOC_CCY.value = ccy;
                document.MAINFORM.FA_TTL_CRN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, ttlamt);

            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_EXCH_RT6_onchange = function(event) {
    try {
        SYF_FAEF_Cal_forRealChgRT();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_CB_FEE_onchange = function(event) {
    try {
        SYF_FAEF_Set_charge();
        document.MAINFORM.FA_CB_FEE.value = SYT_AmtFormat(document.MAINFORM.FA_CB_FEE_CCY.value, document.MAINFORM.FA_CB_FEE.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DOC_CCY_onchange = function(event) {
    try {
        SYF_FAEF_Get_EXCH_RT6();
        SYF_FAEF_Get_EXCH_RT5();
        SYF_FAEF_Cal_forRealChgRT();
        SYF_FAEF_Cal_cableChargeCCYReload();
        document.MAINFORM.FA_TTL_CRN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_CRN_AMT.value);
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
        SYF_FAEF_Cal_HAN_CHG_COLL();
        SYF_FAEF_Cal_FINC_CCY();
        SYF_FAEF_Cal_FA_INV_CCY();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_EF_HAN_CHG_CCY_onchange = function(event) {
    try {
        GetTrxCcyExchRt(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_SEL_ID.value);
        if (event.srcElement.name == document.MAINFORM.FA_EF_HAN_CHG_CCY.name) {
            document.MAINFORM.EXCH_RT1.value = document.MAINFORM.SELLING_RT.value;
        }
        SYF_FAEF_Cal_HAN_CHG_COLL();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_EF_HAN_CHG_PAMT_onchange = function(event) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var value1; // Utility Auto Fix Comments
        SYF_FAEF_Cal_HAN_CHG_COLL();
        node = SYS_getDoByXpath('CreditNote1');
        arrayvalue = SYS_getRecords(node);
        num = SYS_getcurrRecordCount('CreditNote1');
        if (num > 0) {
            for (i = 0, len = arrayvalue.length; i < len; i++) {

                record = arrayvalue[i];

                id = SYS_getRecID(record);

                value1 = SYS_getValFromRec(record, 'FA_EF_HAN_CHG_PAMT');

                SYS_setFieldValue(node, id, "FA_EF_HAN_CHG_PAMT", value1);
            }
        }

        SYS_refreshChildDoValue("CreditNote1", 'FA_EF_HAN_CHG_PAMT', document.MAINFORM.FA_EF_HAN_CHG_PAMT.value);
        SYF_FAEF_Cal_forGridtoMainScreen();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_EF_HAN_CHG_SUM_onchange = function(event) {
    try {
        //SYF_FAEF_Cal_HAN_CHG_COLL();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IF_HAN_CHG_AMT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_forRealChgRT();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IF_HAN_CHG_CCY_onchange = function(event) {
    try {
        GetTrxCcyExchRt(document.MAINFORM.FA_IF_HAN_CHG_CCY.value, document.MAINFORM.FA_SEL_ID.value);
        if (event.srcElement.name == document.MAINFORM.FA_IF_HAN_CHG_CCY.name) {
            document.MAINFORM.EXCH_RT2.value = document.MAINFORM.BUYING_RT.value;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IF_HAN_CHG_PAMT_onchange = function(event) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var value1; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_IF_HAN_CHG_CCY.value) {
            // alert('can not change!'); 
            SYF_FAEF_Cal_HAN_CHG_COLL();
        }
        if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FINC_CCY1.value) {
            node = SYS_getDoByXpath('CreditNote1');
            arrayvalue = SYS_getRecords(node);
            num = SYS_getcurrRecordCount('CreditNote1');
            if (num > 0) {
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    id = SYS_getRecID(record);
                    value1 = SYS_getValFromRec(record, 'FA_IF_HAN_CHG_PAMT');
                    SYS_setFieldValue(node, id, "FA_IF_HAN_CHG_PAMT", value1);
                }
            }
            SYS_refreshChildDoValue("CreditNote1", 'FA_IF_HAN_CHG_PAMT', document.MAINFORM.FA_IF_HAN_CHG_PAMT.value);
            SYF_FAEF_Cal_forGridtoMainScreen();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IF_HAN_CHG_SUM_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TRF_DT_onchange = function(event) {
    try {
        SYF_FAEF_Get_Pricing_Info();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransferFromCE_ME.js", e);
    }
}