var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            //Get baseline info from 019 
            SYS_GetDataForDO_TSU_S('GetGoodsR2Am1', 'RA', null, null, null, {
                "TSU_MERGE_DONAMES": ["R2InvolvedPartyInfo*R2Goods",
                    "R2PaymentTerms",
                    "R2SettlementTerms",
                    "R2PaymentObligation",
                    "R2DatasetRequired",
                    "UserDefinedInformation"
                ]
            });
            SYF_TSUM_Check_Adju();
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRequest.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_TSU_AMD_TIMES();
        SYF_TSUM_TSU_AMD_REF();
        SYF_TSUM_getTSURef();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var prefix = 'BAR';
        var TSU_MESSAGE_ID = "";
        var TSU_SUB_B_BIC = document.MAINFORM.TSU_SUB_B_BIC.value;

        C_MAIN_REF = TSU_SUB_B_BIC + "BL" + ref;
        TSU_MESSAGE_ID = prefix + C_MAIN_REF + String(SYS_I_EVENT_TIMES);
        document.MAINFORM.TSU_MESSAGE_ID.value = TSU_MESSAGE_ID;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_AMD_REF = function() {
    try {

        var C_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        var TSU_AMD_TIMES = document.MAINFORM.TSU_AMD_TIMES.value;
        document.MAINFORM.TSU_AMD_REF.value = C_MAIN_REF + '_' + TSU_AMD_TIMES;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_AMD_TIMES = function() {
    try {

        var TSU_AMD_TIMES = document.MAINFORM.TSU_AMD_TIMES.value;
        document.MAINFORM.TSU_AMD_TIMES.value = SYS_BeFloat(TSU_AMD_TIMES) + SYS_BeFloat(1);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Check_Adju = function() {
    try {

        //Recalculate Adjustment Outside LineItems -Start.
        var GoodsNode = parent.SYS_getNodeByXpath('R2GoodsRe');
        var TSU_LINE_TTL_AMT = parent.SYS_getFieldSumValue(GoodsNode, 'TSU_LINE_TTL_AMT');
        var AdjNode = parent.SYS_getNodeByXpath('R2GoodsRe.Adjustmtents');
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
            /*Recalculate Adjustment Outside LineItems -End.*/
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_genTsuSeqNum();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_AMD_TIMES_onchange = function(event) {
    try {
        SYF_TSUM_TSU_AMD_REF();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AmendmentRequest.js", e);
    }
}