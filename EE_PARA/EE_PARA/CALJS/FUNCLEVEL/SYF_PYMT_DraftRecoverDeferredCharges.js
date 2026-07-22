var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
            Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
            Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM", 'AC5_CCY', 'AC5_NO');
            EEHtml.fireEvent(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_forChildtoMainScreen = function(node, recordId, status) {
    try {

        var docCCY; // Utility Auto Fix Comments
        var efcommsum; // Utility Auto Fix Comments
        var efhandalsum; // Utility Auto Fix Comments
        var ifcommsum; // Utility Auto Fix Comments
        var ifhandalsum; // Utility Auto Fix Comments
        var incocommsum; // Utility Auto Fix Comments
        var invamtForBA; // Utility Auto Fix Comments
        var invamtsum; // Utility Auto Fix Comments
        var invnosum; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        invnosum = SYS_getcurrRecordCount("InvTRF1");
        docCCY = SYS_getValueFromMain('FA_DOC_CCY');
        type = SYS_getValueFromMain('FA_BUSI_TYPE');
        SYS_setValueToMain('FA_TTL_INV_NO', invnosum);

        invamtsum = SYS_getFieldSumValue(node, "FA_DOC_AMT", 2);
        efhandalsum = SYS_getFieldSumValue(node, "FA_EF_HAN_CHG_PAMT", 2);
        if (type == 'IF') {
            ifhandalsum = SYS_getFieldSumValue(node, "FA_IF_HAN_CHG_PAMT", 2);
            EEHtml.fireEvent(document.MAINFORM.FA_IF_HAN_CHG_SUM, 'onchange');
            document.MAINFORM.FA_IF_HAN_CHG_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_IF_HAN_CHG_CCY.value, document.MAINFORM.FA_IF_HAN_CHG_SUM.value);
        } else {
            ifhandalsum = 0;
        }
        invamtForBA = SYS_getFieldSumValue(node, "FA_INVAMT_IN_LMT", 2); //for inv amount within limits
        SYS_setValueToMain('FA_TTL_AMT_BA', invamtForBA); //for inv amt within limits
        SYS_setValueToMain('FA_TTL_INV_AMT', invamtsum);
        document.MAINFORM.FA_TTL_INV_AMT.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_TTL_INV_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_INV_AMT, 'onchange');

        SYS_setValueToMain('FA_IF_HAN_CHG_SUM', ifhandalsum);
        SYS_setValueToMain('FA_EF_HAN_CHG_SUM', efhandalsum);
        EEHtml.fireEvent(document.MAINFORM.FA_EF_HAN_CHG_SUM, 'onchange');
        document.MAINFORM.FA_EF_HAN_CHG_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_SUM.value);

        efcommsum = SYS_BeFloat(SYS_getValueFromMain('FA_TTL_INV_AMT')) * SYS_BeFloat(SYS_getValueFromMain('FA_EF_COMM_RT')) / 100;
        if (type == 'IF') {
            ifcommsum = SYS_BeFloat(SYS_getValueFromMain('FA_TTL_INV_AMT')) * SYS_BeFloat(SYS_getValueFromMain('FA_IF_COMM_RT')) / 100;
            document.MAINFORM.FA_IF_COMM_SUM.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_IF_COMM_SUM.value);
            EEHtml.fireEvent(document.MAINFORM.FA_IF_COMM_SUM, 'onchange');
        } else {
            ifcommsum = 0;
        }
        SYS_setValueToMain('FA_IF_COMM_SUM', ifcommsum);
        SYS_setValueToMain('FA_EF_COMM_SUM', efcommsum);
        document.MAINFORM.FA_EF_COMM_SUM.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_EF_COMM_SUM.value);
        EEHtml.fireEvent(document.MAINFORM.FA_EF_COMM_SUM, 'onchange');

        document.MAINFORM.FA_TEMP_AMT9.value = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_EF_COMM_SUM.value);
        if (type == 'IF') {
            document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYS_BeFloat(ifhandalsum) + SYS_BeFloat(ifcommsum);
            EEHtml.fireEvent(document.MAINFORM.FA_TTL_IF_CHG_AMT, 'onchange');
            document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_TTL_IF_CHG_AMT.value);
        } else {
            document.MAINFORM.FA_TTL_IF_CHG_AMT.value = 0;
        }
        if (type == 'DF' && document.MAINFORM.FA_SERVICE_APPRVD.value == '1') {
            incocommsum = SYS_BeFloat(SYS_getValueFromMain('FA_TTL_INV_AMT')) * SYS_BeFloat(SYS_getValueFromMain('FA_INCO_COMM_RT')) / 100;
            document.MAINFORM.FA_INCO_COMM_SUM.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_INCO_COMM_SUM.value);
            EEHtml.fireEvent(document.MAINFORM.FA_INCO_COMM_SUM, 'onchange');
        } else {
            incocommsum = 0;
        }
        SYS_setValueToMain('FA_INCO_COMM_SUM', incocommsum);

        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT9.value) + SYS_BeFloat(document.MAINFORM.FA_TTL_IF_CHG_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_SEL_AC_AMT.value);

        document.MAINFORM.FA_BUY_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT9.value);
        EEHtml.fireEvent(document.MAINFORM.FA_BUY_AC_AMT, 'onchange');
        document.MAINFORM.FA_BUY_AC_AMT.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_BUY_AC_AMT.value);
        SYF_FAEF_Set_charge();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYT_ExchRate_FIX_PENDING();
        }

        SYF_FAEF_Get_FA_DOC_CCY_OPTION();
        SYF_FAEF_Get_Princing_Info();
        //SYM_FAEF_setDocCCY(); 
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        }
        //SYF_FAEF_Cal_CCY_AMT1();


        SYF_FAEF_MPO_cableChargeCCYReload();
        SYF_FAEF_Get_EXCH_RT4();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, 'onchange');


        SYF_FAEF_Cal_CCY_AMT1();

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            SYF_FAEF_Get_FA_IF_COMM_RT();
        }
        SYF_FAEF_Get_FA_LMT_BAL();
        SYF_FAEF_Get_EXCH_RT6();
        SYF_FAEF_CHG_INIT();

        SYF_FAEF_Cal_Change_By_Type();
        SYF_FAEF_Change_Obligation_Tab();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_ImportedInvRef = function(ref) {
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
        sub = 'INV';
        document.MAINFORM.FA_TEMP3.value = pre + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_CCY_AMT1 = function() {
    try {

        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
        document.MAINFORM.FA_EF_HAN_CHG_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
        document.MAINFORM.FA_IF_HAN_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_IF_HAN_CHG_CCY.value, document.MAINFORM.FA_IF_HAN_CHG_AMT.value);
        document.MAINFORM.FA_IF_HAN_CHG_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_IF_HAN_CHG_CCY.value, document.MAINFORM.FA_IF_HAN_CHG_SUM.value); //1212
        document.MAINFORM.FA_EF_COMM_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_EF_COMM_SUM.value);
        document.MAINFORM.FA_IF_COMM_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_IF_COMM_SUM.value);
        document.MAINFORM.FA_CB_FEE.value = SYT_CCY_AMT(document.MAINFORM.FA_CB_FEE_CCY.value, document.MAINFORM.FA_CB_FEE.value);
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_TTL_IF_CHG_AMT.value);
        document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_PAMT.value); //1212
        document.MAINFORM.FA_IF_HAN_CHG_PAMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_IF_HAN_CHG_PAMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo_S('FAEF_INV_TRF', 'SYF_FAEF_Cal_Ref');
        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_Ref = function(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'IVT';
        document.MAINFORM.FA_TRF_REF.value = UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FA_TRF_FX_RT.value = document.MAINFORM.EXCH_RT6.value;

        SYF_FAEF_invAllocation();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverDeferredCharges.js", e);
    }
}