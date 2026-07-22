var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo_S('FAEF_INV_TRF', 'SYF_FAEF_Cal_Ref');
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'REG';
        document.MAINFORM.FA_MSG_TEXT.value = '';
        document.MAINFORM.FA_TTL_PO_NO.value = 0;
        document.MAINFORM.FA_TTL_PO_AMT.value = 0;
        document.MAINFORM.FA_CB_FEE_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.FA_TEMP4.value = document.MAINFORM.FA_PMT_TERMS.value;
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.PO_CCY.value;
        document.MAINFORM.FINC_CCY2.value = document.MAINFORM.PO_CCY.value;

        SYF_FAEF_Get_BuyerInfo_Discount();
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Ref = function(ref) {
    try {

        var buditype;
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        buditype = document.MAINFORM.FA_BUSI_TYPE.value
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'POR';
        document.MAINFORM.C_MAIN_REF.value = buditype + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_PO_LMT_RT = function() {
    try {

        if (document.MAINFORM.FA_LMT_CCY.value != '' && document.MAINFORM.PO_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.PO_CCY.value, document.MAINFORM.FA_LMT_CCY.value, 'Booking Rate', 'FA_TRF_FX_RT');
            EEHtml.fireEvent(document.MAINFORM.FA_TRF_FX_RT, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("FA_SEL_ID", "FA_SEL_NM");
        Chg.Screen.mapForeignCust("FA_BUYER_ID", "FA_BUYER_NM");
        SYF_FAEF_MPO_cableChargeCCYReload();
        SYF_FAEF_Cal_PO_LMT_RT();
        SYF_FAEF_Cal_PO_CHG_RT();
        SYF_FAEF_Cal_forRealChgRT();
        document.MAINFORM.FA_TTL_PO_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.FA_TTL_PO_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_FAEF_Cal_TotalPOAmountinlimit()
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_PO_CHG_RT = function() {
    try {

        if (document.MAINFORM.FA_EF_HAN_CHG_CCY.value != '' && document.MAINFORM.PO_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.PO_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_CCY.value, 'Booking Rate', 'EXCH_RT4');
            EEHtml.fireEvent(document.MAINFORM.EXCH_RT4, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_cableChargeCCYReload = function() {
    try {

        var FA_CB_FEE_CCY; // Utility Auto Fix Comments
        var PO_CCY; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        PO_CCY = EEHtml.getElementById('PO_CCY');
        FA_CB_FEE_CCY = EEHtml.getElementById('FA_CB_FEE_CCY');
        len = FA_CB_FEE_CCY.options.length;
        i = 0;
        for (i = len - 1; i >= 0; i--) {
            FA_CB_FEE_CCY.options.remove(i);
        }
        FA_CB_FEE_CCY.options.add(new Option('', ''));
        if (document.MAINFORM.PO_CCY.value != 'USD' && document.MAINFORM.PO_CCY.value != '') {
            FA_CB_FEE_CCY.options.add(new Option(document.MAINFORM.PO_CCY.value, document.MAINFORM.PO_CCY.value));
        }
        FA_CB_FEE_CCY.options.add(new Option('USD', 'USD'));
        document.MAINFORM.FA_CB_FEE_CCY.value = 'USD';
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forRealChgRT = function() {
    try {

        var poCcy; // Utility Auto Fix Comments
        var efPAMT; // Utility Auto Fix Comments
        var efPrice; // Utility Auto Fix Comments
        var exRt; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var priCcy; // Utility Auto Fix Comments
        poCcy = document.MAINFORM.PO_CCY.value;
        priCcy = document.MAINFORM.FA_EF_HAN_CHG_CCY.value;
        efPrice = document.MAINFORM.FA_EF_HAN_CHG_AMT.value;
        if (poCcy == priCcy) {
            document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = efPrice;
        } else {
            exRt = SYS_BeFloat(document.MAINFORM.EXCH_RT4.value);
            if (exRt != '') {
                efPAMT = SYS_BeFloat(efPrice) / exRt;
                document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = SYT_CCY_AMT(priCcy, efPAMT);
                num = SYS_getcurrRecordCount("ProcessPO");
                if (num > 0) {
                    EEHtml.fireEvent(document.MAINFORM.FA_EF_HAN_CHG_PAMT, "onchange");
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_TotalPOAmountinlimit = function() {
    try {

        var poCCY = document.MAINFORM.PO_CCY.value;
        var ttlpoamt = SYS_BeFloat(document.MAINFORM.FA_TTL_PO_AMT.value);
        var rate = SYS_BeFloat(document.MAINFORM.FA_TRF_FX_RT.value);
        document.MAINFORM.FA_TTL_AMT_IN_LMT.value = SYT_CCY_AMT(poCCY, ttlpoamt * rate);
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Set_charge = function() {
    try {

        var COMM; // Utility Auto Fix Comments
        var cbccy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var poccy; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("ChgDoTrx");
        if (xDO) {
            poccy = document.MAINFORM.PO_CCY.value;
            cbccy = document.MAINFORM.FA_CB_FEE_CCY.value;
            records = SYS_getRecords(xDO);
            COMM = new Array();
            for (i = 0; i < records.length; i++) {
                COMM[0] = SYS_getValFromRec(records[i], "CHG_COMMISSION_CODE");
                id = SYS_getRecID(records[i]);
                if (COMM[0] == 'FAEF_EF_COMM') {
                    SYS_setFieldValue(xDO, id, "CHG_COMMISSION_DESC", 'Total Commissions');
                    Chg.Screen.setChargeValue(COMM, poccy, document.MAINFORM.FA_EF_COMM_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_EF_COMM_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", poccy);
                } else if (COMM[0] == 'FAEF_EF_CHG') {
                    SYS_setFieldValue(xDO, id, "CHG_COMMISSION_DESC", 'Total Handling Charges');
                    Chg.Screen.setChargeValue(COMM, poccy, document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", poccy);
                } else if (COMM[0] == 'FAEF_CABLE_CHG') {
                    Chg.Screen.setChargeValue(COMM, cbccy, document.MAINFORM.FA_CB_FEE.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_CB_FEE.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", cbccy);
                }
            }
            Chg_MultiDebitInvoker();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYS_GetDataForDO_S("Get_PO", "N", false, '', "ProcessPO");
        }
        SYF_FAEF_Sum_DO_Data();
        var arrayvalue; // Utility Auto Fix Comments
        var chgEntry; // Utility Auto Fix Comments
        var commList; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("ChgDoTrx");
        if (xDO) {
            commList = "FAEF_EF_COMM,FAEF_EF_CHG,FAEF_CABLE_CHG";
            Chg.LoadCommission(commList, 'MAINREF', '', null, '', '', 'false');
        }
        arrayvalue = SYS_getRecords(xDO);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            chgEntry = new Chg.Entry(record);
            Chg.Screen.putOrignalTrxChg(chgEntry);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_PmtTerms = function() {
    try {

        var pmtTerms; // Utility Auto Fix Comments
        pmtTerms = SYS_BeFloat(document.MAINFORM.FA_TEMP4.value);
        if (pmtTerms > 180) {
            alert("Payment Terms are more than 180 days!");
        }
        if (pmtTerms > SYS_BeFloat(document.MAINFORM.FA_PMT_TERMS.value)) {
            alert("Payment Terms exceed limit set at the FSBC level!");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_ValDuplicate = function(_do, fieldName) {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordNext; // Utility Auto Fix Comments
        var valueF; // Utility Auto Fix Comments
        var valueN; // Utility Auto Fix Comments
        arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
        len = arrayvalue.length;
        for (i = 0; i < len; i++) {
            record = arrayvalue[i];
            valueF = SYS_getValFromRec(record, fieldName);
            for (j = 0; j < len; j++) {
                if (j == i) {
                    continue;
                }
                recordNext = arrayvalue[j];
                valueN = SYS_getValFromRec(recordNext, fieldName);
                if (valueF == valueN) {
                    alert("PO No [" + valueF + "] cannot be duplicated!");
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FAEF_CheckDOEdit()) {
            return false;
        }
        if (!SYT_checkFactoringChildRecord('ProcessPO')) {
            return false;
        }
        doObj_PO = SYS_getDoByXpath('ProcessPO');
        if (SYS_FUNCTION_TYPE == 'PM') {
            if (!SYF_FAEF_Chk_ValDuplicate(doObj_PO, 'PO_NO')) {
                return false;
            }
        }
        if (!SYF_FAEF_Chk_MultiDebit_BAL()) {
            return false;
        }
        if (!SYT_MLDC_ValidateBalance()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_BAL = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var paySamt; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiDebitSummary");
        paySamt = SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_CB_FEE.value);

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = SYS_getFieldSumValue(_do, "N_MLDC_AMT", 2); // Utility Auto Fix Comments
                //recordTypeTemp = record['N_MLDC_AMT'];
                SYS_setValueToMain('FA_TEMP1', recordTypeTemp);
            }
        }
        if (SYS_BeFloat(document.MAINFORM.FA_TEMP1.value) != paySamt) {
            alert('Multi Debit Amount is not equal to Payment Amount!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Sum_DO_Data = function() {
    try {

        var ccy;
        var ttlamt = 0;
        var poamt = 0;
        var _do;
        var arrayvalue;
        var i;
        var id;
        var mData;
        var num;
        var record;
        _do = SYS_getDoByXpath('ProcessPO');
        num = SYS_getcurrRecordCount("ProcessPO");
        document.MAINFORM.FA_TTL_PO_NO.value = num;
        var hanfee = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do);
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                ccy = SYS_getValFromRec(record, 'PO_CCY');
                poamt = SYS_getValFromRec(record, 'PO_AMT');
                ttlamt = SYS_BeFloat(ttlamt) + SYS_BeFloat(poamt);
                document.MAINFORM.PO_CCY.value = ccy;
                document.MAINFORM.FA_TTL_PO_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, ttlamt);
                record = SYS_setValToRec(record, 'FA_EF_HAN_CHG_PAMT', hanfee)
                mData.push(record);
            }
            SYS_reLoadGrid(_do, mData);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_CheckDOEdit = function() {
    try {

        var _do;
        var arrayvalue;
        var i;
        var mData;
        var num;
        var record;
        var type;
        _do = SYS_getDoByXpath('ProcessPO');
        num = SYS_getcurrRecordCount("ProcessPO");
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do);
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                type = SYS_getRecState(record);
                if ('E' == type) {
                    return true;
                } else {
                    alert("Should edit the PO DO first!");
                    return false;
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forChildtoMainScreen = function(node, recordId, status) {
    try {

        var poCCY; // Utility Auto Fix Comments
        var efcommsum; // Utility Auto Fix Comments
        var efhandalsum; // Utility Auto Fix Comments
        var poamtsum; // Utility Auto Fix Comments
        var ponosum; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        ponosum = SYS_getcurrRecordCount("ProcessPO");
        poCCY = SYS_getValueFromMain('PO_CCY');
        type = SYS_getValueFromMain('FA_BUSI_TYPE');
        SYS_setValueToMain('FA_TTL_PO_NO', ponosum);

        poamtsum = SYS_getFieldSumValue(node, "PO_AMT", 2);
        efhandalsum = SYS_getFieldSumValue(node, "FA_EF_HAN_CHG_PAMT", 2);

        SYS_setValueToMain('FA_TTL_PO_AMT', poamtsum);
        document.MAINFORM.FA_TTL_PO_AMT.value = SYT_CCY_AMT(poCCY, document.MAINFORM.FA_TTL_PO_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_PO_AMT, 'onchange');

        SYS_setValueToMain('FA_EF_HAN_CHG_SUM', efhandalsum);
        EEHtml.fireEvent(document.MAINFORM.FA_EF_HAN_CHG_SUM, 'onchange');
        document.MAINFORM.FA_EF_HAN_CHG_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_SUM.value);

        efcommsum = SYS_BeFloat(SYS_getValueFromMain('FA_TTL_PO_AMT')) * SYS_BeFloat(SYS_getValueFromMain('FA_EF_COMM_RT')) / 100;

        SYS_setValueToMain('FA_EF_COMM_SUM', efcommsum);
        document.MAINFORM.FA_EF_COMM_SUM.value = SYT_CCY_AMT(poCCY, document.MAINFORM.FA_EF_COMM_SUM.value);
        EEHtml.fireEvent(document.MAINFORM.FA_EF_COMM_SUM, 'onchange');

        document.MAINFORM.FA_TEMP_AMT9.value = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_EF_COMM_SUM.value);


        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT9.value);
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(poCCY, document.MAINFORM.FA_SEL_AC_AMT.value);

        SYF_FAEF_Set_charge();
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_BuyerInfo_Discount = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            document.getElementById('disbuyer').style.display = '';
            document.getElementById('buyer').style.display = 'none';
            SYT_ChangeFldClass_New('TEMP_BUYER_ID', 'M');
            var FA_SBR_REF = document.MAINFORM.FA_SBR_REF.value;
            var FA_SEL_ID = document.MAINFORM.FA_SEL_ID.value;
            var sTableName = "EXIMTRX.FADA_BUYER_INFO";
            var sSQLWhere = "FA_SBR_REF='" + FA_SBR_REF + "'" + " AND " + "FA_SEL_ID='" + FA_SEL_ID + "'";
            var sFieldList = "FA_BUYER_ID";
            var sMappingList = "TEMP_BUYER_ID"
            SYS_GetMultiValueRefreshOptions_S(sTableName, sSQLWhere, sFieldList, sMappingList, '', '', true);
        } else {
            document.getElementById('buyer').style.display = '';
            document.getElementById('disbuyer').style.display = 'none';
            SYT_DisableField("FA_BUYER_ID");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_BUSI_TYPE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_CB_FEE_onchange = function(event) {
    try {
        SYF_FAEF_Set_charge();
        document.MAINFORM.FA_CB_FEE.value = SYT_AmtFormat(document.MAINFORM.FA_CB_FEE_CCY.value, document.MAINFORM.FA_CB_FEE.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_CB_FEE_CCY_onchange = function(event) {
    try {
        SYF_FAEF_Set_charge();
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_EF_HAN_CHG_AMT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_forRealChgRT();
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TEMP4_onchange = function(event) {
    try {
        SYF_FAEF_Chk_PmtTerms();
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TRF_FX_RT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_TotalPOAmountinlimit();
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_PO_CCY_onchange = function(event) {
    try {
        SYF_FAEF_MPO_cableChargeCCYReload();
        SYF_FAEF_Cal_PO_LMT_RT();
        SYF_FAEF_Cal_PO_CHG_RT();
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.PO_CCY.value;
        SYF_FAEF_Cal_forRealChgRT();
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_TEMP_CHAR6_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE.js", e);
    }
}