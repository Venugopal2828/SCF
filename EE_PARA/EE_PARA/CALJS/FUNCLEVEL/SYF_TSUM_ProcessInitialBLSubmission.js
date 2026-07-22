var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        /*Add by huyechao for ANB Demo 20130801*/
        /*
        var BuyerBank_node = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.BuyerBank');
        var TSU_BYRBK_ID = parent.SYS_getFieldValue(BuyerBank_node, 0, "TSU_BUYER_BK_ID");
        document.MAINFORM.TSU_BUYER_BK_ID.value = TSU_BYRBK_ID;

        var SellerBank_node = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.SellerBank');
        var TSU_SELLRBK_ID = parent.SYS_getFieldValue(SellerBank_node, 0, "TSU_SEL_BK_ID");
        document.MAINFORM.TSU_SEL_BK_ID.value = TSU_SELLRBK_ID;

        var Buyer_node = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.Buyer');
        var TSU_BUYR_ID = parent.SYS_getFieldValue(Buyer_node, 0, "CUST_ID");
        document.MAINFORM.TSU_BUYER_ID.value = TSU_BUYR_ID;

        var Seller_node = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.Seller');
        var TSU_SELLR_ID = parent.SYS_getFieldValue(Seller_node, 0, "CUST_ID");
        document.MAINFORM.TSU_SEL_ID.value = TSU_SELLR_ID;
        var sFieldList = "TSU_MTCH_ENGINE";
        var sMappingList = "TSU_MTCH_ENGINE";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        var notshowError = true;

        SYS_GetTableData_SvrSql("TSU_MTCH_ENGINE", "TSU_BUYER_BK_ID;TSU_SEL_BK_ID;TSU_BUYER_ID;TSU_SEL_ID;TSU_INSTR_TP", sFieldList, sMappingList, sSucJsFuncName, '', notshowError);
*/
        /*Add by huyechao for ANB Demo 20130801*/

        SYT_genTsuSeqNum();
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_GET_SUB_B_BIC_ID = function() {
    try {

        var sFieldList = "C_MAIN_REF,NARR_NM";
        var sMappingList = "TSU_SUB_B_ID;TSU_SUB_B_NM";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        var notshowError = true;

        SYS_GetTableData_SvrSql("TSU_SUB_B_BIC", "TSU_SUB_B_BIC", sFieldList, sMappingList, sSucJsFuncName, '', notshowError);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_get_TSU_SUB_B_BIC();
        SYF_TSUM_GET_SUB_B_BIC_ID();
        SYF_TSUM_getTSURef();
        document.MAINFORM.TSU_SUBMIT_BASELN_VRSN.value = 1;
        document.MAINFORM.TSUR2_TRX_STATUS.value = "INIT";
        document.MAINFORM.TSU_COE_STS.value = 'B2C';
        document.MAINFORM.TSU_TRX_DTTM.value = SYS_BUSI_DATE;
        document.MAINFORM.TSU_SEND_COE.value = 'Y';
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_IntentToPay = function() {
    try {

        var TSU_INSTR_TYPE = document.MAINFORM.TSU_INSTR_TP.value;
        if (TSU_INSTR_TYPE == 'LODG') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_INTT_TO_PAY, 'P', 'N');
            document.MAINFORM.TSU_INTT_TO_PAY.value = "false";
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TSU_INTT_TO_PAY, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('getdata_tsu012');
            parent.getDOdataFromSes('N');
            SYF_TSUM_Check_Adju();
            var PaymentObligation_node = parent.SYS_getNodeByXpath('R2PaymentObligation');
            var records = parent.SYS_getRecords(PaymentObligation_node);
            var TSU_PMT_XPRY_DT = records.length > 0 ? records[0].TSU_PMT_XPRY_DT : "";
            document.MAINFORM.TEMP_DATE1.value = TSU_PMT_XPRY_DT;
            var Goods_node = parent.SYS_getNodeByXpath('R2Goods');
            var records = parent.SYS_getRecords(Goods_node);
            document.MAINFORM.TSU_TTL_NET_AMT.value = records.length > 0 ? records[0].TSU_TTL_NET_AMT : "";
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSUM_TSU_SUB_B_ID = function() {
    try {

        SYS_GetCUBK('TSU_SUB_B_ID', 'TSU_SUB_B_ID');
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_OUR_ROLE = function() {
    try {

        var TSU_OUR_ROLE = parent.SYS_getValueFromMain('TSU_OUR_ROLE');
        var TSU_SUB_B_ID = parent.SYS_getValueFromMain('TSU_SUB_B_ID');
        var TSU_SUB_B_BIC = parent.SYS_getValueFromMain('TSU_SUB_B_BIC');
        var TSU_SUB_B_NAME = parent.SYS_getValueFromMain('TSU_SUB_B_NM');
        parent.SYS_refreshChildDoValue('R2Goods', "TSU_PO_INITIATOR", TSU_OUR_ROLE);
        if (TSU_OUR_ROLE == "Buyer Bank") {
            parent.SYS_refreshChildDoValue('R2InvolvedPartyInfo.BuyerBank', "TSU_BUYER_BK_ID", TSU_SUB_B_ID);
            parent.SYS_refreshChildDoValue('R2InvolvedPartyInfo.BuyerBank', "TSU_BUYER_BK_BIC", TSU_SUB_B_BIC);
            parent.SYS_refreshChildDoValue('R2InvolvedPartyInfo.BuyerBank', "TSU_BUYER_BK_NM", TSU_SUB_B_NAME);
        } else if (TSU_OUR_ROLE == "Supplier Bank") {
            parent.SYS_refreshChildDoValue('R2InvolvedPartyInfo.SellerBank', "TSU_SEL_BK_ID", TSU_SUB_B_ID);
            parent.SYS_refreshChildDoValue('R2InvolvedPartyInfo.SellerBank', "TSU_SEL_BK_BIC", TSU_SUB_B_BIC);
            parent.SYS_refreshChildDoValue('R2InvolvedPartyInfo.SellerBank', "TSU_SEL_BK_NM", TSU_SUB_B_NAME);
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_PO_ID = function() {
    try {

        var tsu_po_id = document.MAINFORM.TSU_PO_ID.value;
        parent.SYS_refreshChildDoValue('R2Goods', "TSU_PO_ID", tsu_po_id);
        if ('EC' == SYS_FUNCTION_TYPE) {
            parent.SYS_refreshChildDoValue('R2Goods', "recordType", "E");
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef()");
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_get_TSU_SUB_B_BIC = function() {
    try {

        var TSU_SUB_B_BIC = "";
        TSU_SUB_B_BIC = SYS_LOGIN_BIC;
        SYT_setFldValue("TSU_SUB_B_BIC", TSU_SUB_B_BIC);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var C_MAIN_REF = "";
        var TSU_MESSAGE_ID = "";
        var TSU_SUBMIT_BASELN_ID = "";
        var TSU_SUBMIT_BASELN_VRSN = SYT_getFldValue("TSU_SUBMIT_BASELN_VRSN");
        var TSU_SUB_B_BIC = SYT_getFldValue("TSU_SUB_B_BIC");

        C_MAIN_REF = TSU_SUB_B_BIC + "BL" + ref;
        TSU_MESSAGE_ID = C_MAIN_REF + String(SYS_I_EVENT_TIMES);
        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_BPO_Onchange = function() {
    try {

        node = parent.SYS_getNodeByXpath('R2PaymentObligation');
        var Count = parent.DoFrame.tree.getPropertyValue(node, 'recordCount');
        if (Count > 0) {
            parent.SYS_DeleteRecordByXpath('R2PaymentObligation');
        }
        var TSU_BK_BPO = document.MAINFORM.TSU_BK_BPO_FLG.value;
        var TSU_BPO_OBL_BK = document.MAINFORM.TSU_BPO_OBL_BK.value;

        if (TSU_BK_BPO == 'true') {
            if (TSU_BPO_OBL_BK == 'true') {
                var mappingfiledObj_BuyerBank = {
                    TSU_BUYER_BK_ID: 'TSU_OBLGRBK_ID',
                    TSU_BUYER_BK_BIC: 'TSU_OBLGR_BK',
                    TSU_BUYER_BK_NM: 'TSU_OBLGRBK_NM'
                }
            }
            var mappingfiledObj_SellerBank = {
                TSU_SEL_BK_ID: 'TSU_RCPTBK_ID',
                TSU_SEL_BK_BIC: 'TSU_RCPT_BK',
                TSU_SEL_BK_NM: 'TSU_RCPTBK_NM'
            }
            var mappingfiledObj_Goods = {
                TSU_CCY: 'TSU_CCY',
                TSU_TTL_NET_AMT: 'TSU_PMTOBLGR_AMT'
            };
            var nBuyerBank = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.BuyerBank');
            var nSellerBank = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.SellerBank');
            var nGoods = parent.SYS_getNodeByXpath('R2Goods');
            var nR2PaymentObligation = parent.SYS_getNodeByXpath('R2PaymentObligation');

            var mappingValueObj = {};
            records1 = parent.SYS_getRecords(nBuyerBank, 0);
            var rlen1 = records1.length;
            if (rlen1 > 0) {
                record1 = records1[rlen1 - 1];
                for (var name in mappingfiledObj_BuyerBank) {
                    var toFiled = mappingfiledObj_BuyerBank[name];
                    mappingValueObj[toFiled] = record1[name];
                }
            }
            records2 = parent.SYS_getRecords(nSellerBank, 0);
            var rlen2 = records2.length;
            if (rlen2 > 0) {
                record2 = records2[rlen2 - 1];
                for (var name in mappingfiledObj_SellerBank) {
                    var toFiled = mappingfiledObj_SellerBank[name];
                    mappingValueObj[toFiled] = record2[name];
                }
            }
            records3 = parent.SYS_getRecords(nGoods, 0);
            var rlen3 = records3.length;
            var rlen3 = records3.length;
            if (rlen3 > 0) {
                record3 = records3[rlen3 - 1];
                for (var name in mappingfiledObj_Goods) {
                    var toFiled = mappingfiledObj_Goods[name];
                    mappingValueObj[toFiled] = record3[name];
                }
            }
            // var dateMain = document.MAINFORM.DATANAME.value;
            mappingValueObj['TSU_PMT_XPRY_DT'] = '2013-10-30';
            parent.DoFrame.appendRecordByNode(nR2PaymentObligation, mappingValueObj);
            //R2PaymentObligation.PaymentTerms1
            var R2PaymentTerms = parent.SYS_getNodeByXpath('R2PaymentTerms');
            var R2PaymentObligation_PaymentTerms1 = parent.SYS_getNodeByXpath('R2PaymentObligation.PaymentTerms1');
            records4 = parent.SYS_getRecords(R2PaymentTerms, 0);
            var rlen1 = records4.length;
            if (rlen1 > 0) {
                record4 = records4[rlen1 - 1];
            }
            parent.DoFrame.appendRecordByNode(R2PaymentObligation_PaymentTerms1, record4);
            parent.SYS_setFieldValue(R2PaymentObligation_PaymentTerms1, 0, 'TSU_IAFT_NO', 'OBLGNO');
        }
        parent.DoFrame.updateNodeTitleByNode(node);

        var DT_Party_node = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.Buyer');
        var TSU_BUYR_ID = parent.SYS_getFieldValue(DT_Party_node, 0, "CUST_ID");
        document.MAINFORM.TSU_BUYER_ID.value = TSU_BUYR_ID;

        var DT_R2Goods_node = parent.SYS_getNodeByXpath('R2Goods');
        var TSU_TTL_NET_AMT = parent.SYS_getFieldValue(DT_R2Goods_node, 0, "TSU_TTL_NET_AMT");
        document.MAINFORM.TSU_TTL_NET_AMT.value = TSU_TTL_NET_AMT;
        var TSU_CCY = parent.SYS_getFieldValue(DT_R2Goods_node, 0, "TSU_CCY");
        document.MAINFORM.TSU_CCY.value = TSU_CCY;
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
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

            if (GTSU_IAFT_RT != 0 || GTSU_IAFT_RT != '') {
                var fRate = SYS_BeFloat(GTSU_IAFT_RT) / 100;
                var aTSU_IAFT_AMT_CAL = SYS_BeFloat(TSU_LINE_TTL_AMT) * SYS_BeFloat(fRate);
                parent.SYS_setFieldValue(AdjNode, j, 'TSU_IAFT_AMT_CAL', aTSU_IAFT_AMT_CAL);
            }
            if (GTSU_IAFT_RT == 0) {
                var a1TSU_IAFT_AMT_CAL = AdjNoderecd.TSU_IAFT_AMT_CAL;
                parent.SYS_setFieldValue(AdjNode, j, 'TSU_IAFT_AMT_CAL', a1TSU_IAFT_AMT_CAL);
            }
            //Recalculate Adjustment Outside LineItems -Start.
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_BK_BPO_FLG_onchange = function(event) {
    try {
        SYF_TSUM_BPO_Onchange();
        if (document.MAINFORM.TSU_BK_BPO_FLG.value == 'false') {
            document.MAINFORM.TSU_BPO_OBL_BK.value = '';
            document.MAINFORM.TSU_BPO_OBL_BK.className = 'CHAR_P';
            document.MAINFORM.TSU_BPO_OBL_BK.disabled = true;
        } else {
            document.MAINFORM.TSU_BPO_OBL_BK.className = 'CHAR_M';
            document.MAINFORM.TSU_BPO_OBL_BK.disabled = false;
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_BPO_OBL_BK_onchange = function(event) {
    try {
        SYF_TSUM_BPO_Onchange();
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_INSTR_TP_onchange = function(event) {
    try {
        SYF_TSUM_IntentToPay();
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_OUR_ROLE_onchange = function(event) {
    try {
        SYF_TSUM_TSU_OUR_ROLE();
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_PO_ID_onchange = function(event) {
    try {
        SYF_TSUM_TSU_PO_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_SUB_B_ID_onchange = function(event) {
    try {
        SYF_TSUM_TSUM_TSU_SUB_B_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission.js", e);
    }
}