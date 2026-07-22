var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {


        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'PMT';
        document.MAINFORM.FA_PMT_AMT_SUM.value = 0;
        document.MAINFORM.FA_TTL_AMT_DEDUCT.value = 0;
        document.MAINFORM.FA_TTL_AMT_CLEARED.value = 0;
        document.MAINFORM.FA_PMT_AMT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_PMT_AMT_SUM.value);
        document.MAINFORM.FA_TTL_AMT_DEDUCT.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_TTL_AMT_DEDUCT.value);
        document.MAINFORM.FA_TTL_AMT_CLEARED.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_TTL_AMT_CLEARED.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("FA_SEL_ID", "FA_SEL_NM");
        Chg.Screen.mapForeignCust("FA_BUYER_ID", "FA_BUYER_NM");
        SYF_FAEF_MPO_cableChargeCCYReload();
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_FAEF_MLDC_SetDebitCreditData();
            SYF_FAEF_Cal_103_info();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
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
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        descs = "Payment by buyer";
        dcFlgs = "D/C"; //debit and credit group
        keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value;
        payCCYs = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
        payAMTs = document.MAINFORM.FA_PMT_AMT_SUM.value + "/" + document.MAINFORM.FA_PMT_AMT_SUM.value;
        descs += "/Payment to Seller Bank";
        ccyProtecteFlgs = "N/N"; //protected ccy
        actions = "S/S"; //save
        merges = "N/N";
        comp = "Payment";
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
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
        document.MAINFORM.X103_ORDCU_ID_OP.value = 'Customer';
        ref = document.MAINFORM.C_MAIN_REF.value;
        tag20 = ref.substr(0, 2) + ref.substr(8, 10);
        document.MAINFORM.X103_SEND_NO_20.value = tag20;
        document.MAINFORM.X103_INSTR_AMT_33B.value = SYT_AmtFormat(document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.X103_INSTR_AMT_33B.value);
        document.MAINFORM.X103_SETT_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.X103_SETT_CCY_32A.value, document.MAINFORM.X103_SETT_AMT_32A.value);
        document.MAINFORM.X103_ORDCU_ID_50A.value = document.MAINFORM.FA_BUYER_ID.value;
        document.MAINFORM.X103_ORDCU_NM_50A.value = document.MAINFORM.FA_BUYER_NM.value;
        EEHtml.fireEvent(document.MAINFORM.X103_ORDCU_ID_50A, 'onchange');
        document.MAINFORM.X103_BENECU_ID_59A.value = document.MAINFORM.FA_SEL_ID.value;
        document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.FA_SEL_NM.value;
        EEHtml.fireEvent(document.MAINFORM.X103_BENECU_ID_59A, 'onchange');

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
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
        DisExcpt("SYF_FAEF_Payment.js", e);
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

        if (!SYT_checkFactoringChildRecord('BuyPayment')) {
            return false;
        }

        _do = SYS_getDoByXpath('BuyPayment'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("BuyPayment");

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

        /*if (!SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL()) {
            return false;
        }*/
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
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
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forChildtoMainScreen = function(node, recordId, status) {
    try {

        var pmtCCY; // Utility Auto Fix Comments
        var ifcommsum; // Utility Auto Fix Comments
        var ifhandalsum; // Utility Auto Fix Comments
        var invpmtsum; // Utility Auto Fix Comments
        var invnosum; // Utility Auto Fix Comments
        invnosum = SYS_getcurrRecordCount("BuyPayment");
        SYS_setValueToMain('FA_TTL_INV_NO', invnosum);
        pmtCCY = SYS_getValueFromMain('FA_PMT_CCY');

        invpmtsum = SYS_getFieldSumValue(node, "FA_PMT_AMT", 2);
        SYS_setValueToMain('FA_PMT_AMT_SUM', invpmtsum);
        document.MAINFORM.FA_PMT_AMT_SUM.value = SYT_CCY_AMT(pmtCCY, document.MAINFORM.FA_PMT_AMT_SUM.value);
        EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT_SUM, 'onchange');

        ifhandalsum = SYS_BeFloat(document.MAINFORM.FA_IF_HAN_CHG_AMT.value) * invnosum;
        document.MAINFORM.FA_IF_HAN_CHG_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_IF_HAN_CHG_CCY.value, document.MAINFORM.FA_IF_HAN_CHG_SUM.value);
        EEHtml.fireEvent(document.MAINFORM.FA_IF_HAN_CHG_SUM, 'onchange');
        SYS_setValueToMain('FA_IF_HAN_CHG_SUM', ifhandalsum);

        ifcommsum = SYS_BeFloat(SYS_getValueFromMain('FA_PMT_AMT_SUM')) * SYS_BeFloat(SYS_getValueFromMain('FA_IF_COMM_RT')) / 100;
        document.MAINFORM.FA_IF_COMM_SUM.value = SYT_CCY_AMT(pmtCCY, document.MAINFORM.FA_IF_COMM_SUM.value);
        EEHtml.fireEvent(document.MAINFORM.FA_IF_COMM_SUM, 'onchange');
        SYS_setValueToMain('FA_IF_COMM_SUM', ifcommsum);

        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYS_BeFloat(ifhandalsum) + SYS_BeFloat(ifcommsum);
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_IF_CHG_AMT, 'onchange');
        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_IF_HAN_CHG_CCY.value, document.MAINFORM.FA_TTL_IF_CHG_AMT.value);

        SYF_FAEF_Set_charge();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Set_charge = function() {
    try {

        var COMM; // Utility Auto Fix Comments
        var cbccy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var pmtccy; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("ChgDoTrx");
        if (xDO) {
            pmtccy = document.MAINFORM.FA_PMT_CCY.value;
            cbccy = document.MAINFORM.FA_CB_FEE_CCY.value;
            records = SYS_getRecords(xDO);
            COMM = new Array();
            for (i = 0; i < records.length; i++) {
                COMM[0] = SYS_getValFromRec(records[i], "CHG_COMMISSION_CODE");
                id = SYS_getRecID(records[i]);
                if (COMM[0] == 'FAEF_CABLE_CHG') {
                    Chg.Screen.setChargeValue(COMM, cbccy, document.MAINFORM.FA_CB_FEE.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_CB_FEE.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", cbccy);
                } else if (COMM[0] == 'FAEF_EF_COMM') {
                    SYS_setFieldValue(xDO, id, "CHG_COMMISSION_DESC", 'Total Commissions');
                    Chg.Screen.setChargeValue(COMM, pmtccy, document.MAINFORM.FA_IF_COMM_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_IF_COMM_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", pmtccy);
                } else if (COMM[0] == 'FAEF_EF_CHG') {
                    SYS_setFieldValue(xDO, id, "CHG_COMMISSION_DESC", 'Total Handling Charges');
                    Chg.Screen.setChargeValue(COMM, pmtccy, document.MAINFORM.FA_IF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_IF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", pmtccy);
                }
            }
            Chg_MultiDebitInvoker();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        var faPmtCcy; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var tmpCcy; // Utility Auto Fix Comments

        SYS_GetTableDataByRule_S('SYF_FAEF_Payment_Get_FA_PMT_CCY', '1', "Y");

        tmpCcy = document.MAINFORM.ACC_CCY.value;
        document.MAINFORM.FA_IF_HAN_CHG_CCY.value = document.MAINFORM.ACC_CCY.value;
        if (tmpCcy != null && tmpCcy != "") {
            faPmtCcy = document.MAINFORM.FA_PMT_CCY;
            faPmtCcy.options.add(new Option(tmpCcy, tmpCcy));
        }



    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

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
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_cableChargeCCYReload = function() {
    try {

        var FA_CB_FEE_CCY; // Utility Auto Fix Comments
        var FA_PMT_CCY; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        FA_PMT_CCY = EEHtml.getElementById('FA_PMT_CCY');
        FA_CB_FEE_CCY = EEHtml.getElementById('FA_CB_FEE_CCY');
        len = FA_CB_FEE_CCY.options.length;
        i = 0;
        for (i = len - 1; i >= 0; i--) {
            FA_CB_FEE_CCY.options.remove(i);
        }
        FA_CB_FEE_CCY.options.add(new Option('', ''));
        if (document.MAINFORM.FA_PMT_CCY.value != 'USD' && document.MAINFORM.FA_PMT_CCY.value != '') {
            FA_CB_FEE_CCY.options.add(new Option(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_PMT_CCY.value));
        }
        FA_CB_FEE_CCY.options.add(new Option('USD', 'USD'));
        document.MAINFORM.FA_CB_FEE_CCY.value = 'USD';
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.TEMP_X103_BENECUACNO59A.value = document.MAINFORM.X103_BENECUACNO59A.value
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_CB_FEE_onchange = function(event) {
    try {
        SYF_FAEF_Set_charge();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IF_COMM_RT_onchange = function(event) {
    try {
        var pmtCCY; // Utility Auto Fix Comments
        var ifcommsum; // Utility Auto Fix Comments
        var ifhandalsum; // Utility Auto Fix Comments
        var invnosum; // Utility Auto Fix Comments
        invnosum = document.MAINFORM.FA_TTL_INV_NO.value;
        pmtCCY = document.MAINFORM.FA_PMT_CCY.value;
        ifhandalsum = document.MAINFORM.FA_IF_HAN_CHG_SUM.value;
        ifcommsum = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) * SYS_BeFloat(document.MAINFORM.FA_IF_COMM_RT.value) / 100;
        document.MAINFORM.FA_IF_COMM_SUM.value = SYT_CCY_AMT(pmtCCY, ifcommsum);
        EEHtml.fireEvent(document.MAINFORM.FA_IF_COMM_SUM, 'onchange');

        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYS_BeFloat(ifhandalsum) + SYS_BeFloat(ifcommsum);
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_IF_CHG_AMT, 'onchange');
        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_IF_HAN_CHG_CCY.value, document.MAINFORM.FA_TTL_IF_CHG_AMT.value);

        SYF_FAEF_Set_charge();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IF_HAN_CHG_AMT_onchange = function(event) {
    try {
        var pmtCCY; // Utility Auto Fix Comments
        var ifcommsum; // Utility Auto Fix Comments
        var ifhandalsum; // Utility Auto Fix Comments
        var invpmtsum; // Utility Auto Fix Comments
        var invnosum; // Utility Auto Fix Comments
        invnosum = document.MAINFORM.FA_TTL_INV_NO.value;
        pmtCCY = document.MAINFORM.FA_PMT_CCY.value;
        ifcommsum = document.MAINFORM.FA_IF_COMM_SUM.value;

        ifhandalsum = SYS_BeFloat(document.MAINFORM.FA_IF_HAN_CHG_AMT.value) * invnosum;
        document.MAINFORM.FA_IF_HAN_CHG_SUM.value = SYT_CCY_AMT(pmtCCY, ifhandalsum);
        EEHtml.fireEvent(document.MAINFORM.FA_IF_HAN_CHG_SUM, 'onchange');

        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYS_BeFloat(ifhandalsum) + SYS_BeFloat(ifcommsum);
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_IF_CHG_AMT, 'onchange');
        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_IF_HAN_CHG_CCY.value, document.MAINFORM.FA_TTL_IF_CHG_AMT.value);

        SYF_FAEF_Set_charge();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_AMT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_MLDC_SetDebitCreditData();
        SYF_FAEF_Cal_103_info();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_DT_onchange = function(event) {
    try {
        SYF_FAEF_chk_FA_PMT_DT();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_VAL_DT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_103_info();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103MEDIBKADD1_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103MEDIBKADD2_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103MEDIBKADD3_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103SENDCORADD153A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103SENDCORADD253A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103SENDCORADD353A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ACC_BKACNO57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ACC_BKID_57A_onchange = function(event) {
    try {
        X103_ACC_BKID_57A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ACC_BKNM_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ACC_BKSW_57A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ADV_BKADD1_B2_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ADV_BKADD2_B2_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ADV_BKADD3_B2_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        X103_ADV_BKID_B2_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_BENECU_ID_59A_onchange = function(event) {
    try {
        X103_BENECU_ID_59A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_MEDIBKACNO56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_MEDI_BKID_56A_onchange = function(event) {
    try {
        X103_MEDI_BKID_56A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_MEDI_BKNM_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_MEDI_BKSW_56A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDBKADD1_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDBKADD2_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDBKADD3_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCUADD1_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCUADD2_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCUADD3_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        X103_ORDCU_ID_50A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCU_NM_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORDCU_SW_50A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORD_BKID_52A_onchange = function(event) {
    try {
        X103_ORD_BKID_52A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORD_BKNM_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_ORD_BKSW_52A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORADD154A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORADD254A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORADD354A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORRID_54A_onchange = function(event) {
    try {
        X103_RECCORRID_54A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORRNM_54A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_RECCORRSW_54A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_SENDCORRID53A_onchange = function(event) {
    try {
        X103_SENDCORRID53A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_SENDCORRNM53A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_SENDCORRSW53A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_SEND_BKID_51A_onchange = function(event) {
    try {
        X103_SEND_BKID_51A_GetCUBK();
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_X103_SEND_BKSW_51A_onchange = function(event) {
    try {
        Set_SwiftTags_103();
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment.js", e);
    }
}