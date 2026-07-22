var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var TSU_MESSAGE_ID = "";
        var TSU_SUB_B_BIC = document.MAINFORM.TSU_SUB_B_BIC.value;
        var TSU_SUBMIT_BASELN_ID = document.MAINFORM.TSU_SUBMIT_BASELN_ID.value;
        var length;

        REF = TSU_SUB_B_BIC + "BL" + ref;
        TSU_MESSAGE_ID = REF + String(SYS_I_EVENT_TIMES);
        length = TSU_SUBMIT_BASELN_ID.length;
        TSU_SUBMIT_BASELN_ID = TSU_SUBMIT_BASELN_ID + String(SYS_I_EVENT_TIMES);
        document.MAINFORM.TSU_MESSAGE_ID.value = TSU_MESSAGE_ID;
        document.MAINFORM.TSU_SUBMIT_BASELN_ID.value = TSU_SUBMIT_BASELN_ID;


        var sFieldList = "C_FUNC_SHORT_NAME;TSU_BASELN_RP_TP";
        var sMappingList = "FUNC_SHORT_NAME;BASELN_RP_TP";
        SYS_GetTableData_SvrSql_S("GET_SUBMIT_BASELN_ID", "C_MAIN_REF", sFieldList, sMappingList, 'Y');
        SYF_TSUM_Set_Baseline_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ReSubmitBaseline.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_SUB_B_BIC = function() {
    try {

        var TSU_SUB_B_BIC = "";
        TSU_SUB_B_BIC = SYS_LOGIN_BIC;
        document.MAINFORM.TSU_SUB_B_BIC.value = TSU_SUB_B_BIC;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ReSubmitBaseline.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ReSubmitBaseline.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_getTSURef();
        SYF_TSUM_TSU_SUB_B_BIC();
        document.MAINFORM.TSU_LMT_TRIL.value = '6';
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ReSubmitBaseline.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            //SYS_GetDataForDO_S('getdata_tsu012'); 
            SYS_GetDataForDO_TSU_S('getdata_tsu012', null, null, null, null, {
                "TSU_MERGE_DONAMES": ["R2InvolvedPartyInfo*R2Goods*R2PaymentTerms*R2SettlementTerms*R2PaymentObligation*R2DatasetRequired*UserDefinedInformation"]
            });
            parent.getDOdataFromSes('N');
            SYF_TSUM_Check_Adju();
            document.MAINFORM.TSU_CUR_TRIL.value = SYS_BeFloat(document.MAINFORM.TSU_CUR_TRIL.value) + 1;
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ReSubmitBaseline.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Set_Baseline_ID = function() {
    try {

        if (document.MAINFORM.FUNC_SHORT_NAME.value == 'tsmt.018.001.03B' && document.MAINFORM.BASELN_RP_TP.value == 'FWIS') {
            document.MAINFORM.TSU_SUBMIT_BASELN_ID.value = document.MAINFORM.TSU_MESSAGE_ID.value;
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ReSubmitBaseline.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Check_Adju = function() {
    try {

        //Recalculate Adjustment Outside LineItems -Start.
        var GoodsNode = parent.SYS_getNodeByXpath('R2Goods');
        var TSU_LINE_TTL_AMT = parent.SYS_getFieldSumValue(GoodsNode, 'TSU_LINE_TTL_AMT');
        var AdjNode = parent.SYS_getNodeByXpath('R2Goods.Adjustmtents');
        var AdjNoderec = parent.SYS_getRecords(AdjNode);
        var AdjNodeLen = AdjNoderec.length;
        var AdjPct = 0;
        var AdjAmt = 0;
        for (var j = 0; j < AdjNodeLen; j++) {
            AdjNoderecd = AdjNoderec[j];
            var GTSU_ADJUST_DRCTN = AdjNoderecd.TSU_ADJUST_DRCTN;
            var GTSU_IAFT_AMT = AdjNoderecd.TSU_IAFT_AMT;
            var GTSU_IAFT_RT = AdjNoderecd.TSU_IAFT_RT;

            if (GTSU_ADJUST_DRCTN == 'ADDD') {
                var GTSU_IAFT_AMT = SYS_BeFloat(GTSU_IAFT_AMT);
                var GTSU_IAFT_RT = SYS_BeFloat(GTSU_IAFT_RT);
            }
            if (GTSU_ADJUST_DRCTN == 'SUBS') {
                var GTSU_IAFT_AMT = 0 - SYS_BeFloat(GTSU_IAFT_AMT);
                var GTSU_IAFT_RT = 0 - SYS_BeFloat(GTSU_IAFT_RT);
            }

            if (GTSU_IAFT_RT != 0 && GTSU_IAFT_RT != '') {
                var fRate = SYS_BeFloat(GTSU_IAFT_RT) / 100;
                var aTSU_IAFT_AMT_CAL = SYS_BeFloat(TSU_LINE_TTL_AMT) * SYS_BeFloat(fRate);
                parent.SYS_setFieldValue(AdjNode, j, 'TSU_IAFT_AMT_CAL', aTSU_IAFT_AMT_CAL);
            }
            if (GTSU_IAFT_RT == 0 || GTSU_IAFT_RT == '') {
                var a1TSU_IAFT_AMT_CAL = AdjNoderecd.TSU_IAFT_AMT_CAL;
                parent.SYS_setFieldValue(AdjNode, j, 'TSU_IAFT_AMT_CAL', a1TSU_IAFT_AMT_CAL);
            }
            //Recalculate Adjustment Outside LineItems -Start.
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ReSubmitBaseline.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_genTsuSeqNum();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ReSubmitBaseline.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ReSubmitBaseline.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ReSubmitBaseline.js", e);
    }
}