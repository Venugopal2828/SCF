var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_TSU_CCY = function() {
    try {

        var Goods_node = parent.SYS_getNodeByXpath('R2Goods');
        record = parent.SYS_getRecord(Goods_node, 0);
        if (record != null) {
            var nccy = record.TSU_CCY;
            if (nccy != '') {
                document.MAINFORM.TSU_CCY.value = nccy;
            }
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var Buyer_node = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.Buyer');
        var TSU_BUYER_ID = parent.SYS_getFieldValue(Buyer_node, 0, "CUST_ID");
        document.MAINFORM.TSU_BUYER_ID.value = TSU_BUYER_ID;

        var DT_R2Goods_node = parent.SYS_getNodeByXpath('R2Goods');
        var TSU_TTL_NET_AMT = parent.SYS_getFieldValue(DT_R2Goods_node, 0, "TSU_TTL_NET_AMT");
        document.MAINFORM.TSU_TTL_NET_AMT.value = TSU_TTL_NET_AMT;
        var TSU_CCY = parent.SYS_getFieldValue(DT_R2Goods_node, 0, "TSU_CCY");
        document.MAINFORM.TSU_CCY.value = TSU_CCY;
        document.MAINFORM.TEMP_CHAR33.value = SYS_BUSI_DATE;

        /*Add by huyechao for ANB Demo 20130801*/
        var BuyerBank_node = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.BuyerBank');
        var TSU_BUYER_BK_ID = parent.SYS_getFieldValue(BuyerBank_node, 0, "TSU_BUYER_BK_ID");
        document.MAINFORM.TSU_BUYER_BK_ID.value = TSU_BUYER_BK_ID;

        var SellerBank_node = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.SellerBank');
        var TSU_SEL_BK_ID = parent.SYS_getFieldValue(SellerBank_node, 0, "TSU_SEL_BK_ID");
        document.MAINFORM.TSU_SEL_BK_ID.value = TSU_SEL_BK_ID;

        var Seller_node = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.Seller');
        var TSU_SEL_ID = parent.SYS_getFieldValue(Seller_node, 0, "CUST_ID");
        document.MAINFORM.TSU_SEL_ID.value = TSU_SEL_ID;

        var instr_tp = document.MAINFORM.TSU_INSTR_TP.value;
        var sSQLWhere = "TSU_BUYER_BK_ID='" + TSU_BUYER_BK_ID + "' AND TSU_SEL_BK_ID=\'" + TSU_SEL_BK_ID + "\' AND TSU_BUYER_ID=\'" + TSU_BUYER_ID + "\' AND TSU_SEL_ID=\'" + TSU_SEL_ID + "\' AND TSU_BASELN_MODE=\'" + instr_tp + "\'";
        var sFieldList = "TSU_MTCH_ENGINE";
        var sMappingList = "TSU_MTCH_ENGINE";
        SYS_GetTableData_S('STD_MATCH_ENGINE', sSQLWhere, sFieldList, sMappingList);
        /*Add by huyechao for ANB Demo 20130801*/
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef()");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var TSU_MESSAGE_ID = "";
        var TSU_SUB_B_BIC = SYT_getFldValue("TSU_SUB_B_BIC");
        var TSU_SUBMIT_BASELN_ID = SYT_getFldValue("TSU_SUBMIT_BASELN_ID");
        var length;
        var TSU_TRX_STATUS = "INIT";

        REF = TSU_SUB_B_BIC + "BL" + ref;
        C_MAIN_REF = SYT_getFldValue("C_MAIN_REF");
        TSU_MESSAGE_ID = REF + String(SYS_I_EVENT_TIMES);
        length = TSU_SUBMIT_BASELN_ID.length;
        TSU_SUBMIT_BASELN_ID = TSU_SUB_B_BIC + TSU_SUBMIT_BASELN_ID.substr(8, length);

        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
        SYT_setFldValue("TSU_SUBMIT_BASELN_ID", TSU_SUBMIT_BASELN_ID);
        SYT_setFldValue("TSUR2_TRX_STATUS", TSU_TRX_STATUS);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_BPO_Onchange = function() {
    try {

        node = parent.SYS_getNodeByXpath('R2PaymentObligation');
        var Count = parent.DoFrame.tree.getPropertyValue(node, 'recordCount');
        if (Count > 0) {
            parent.SYS_DeleteRecordByXpath('R2PaymentObligation');
        }
        var TSU_BK_BPO_FLG = document.MAINFORM.TSU_BK_BPO_FLG.value;
        var TSU_BPO_OBL_BK = document.MAINFORM.TSU_BPO_OBL_BK.value;

        if (TSU_BK_BPO_FLG == 'true') {
            if (TSU_BPO_OBL_BK == 'true') {
                var mappingfiledObj_BuyerBank = {
                    TSU_BUYER_BK_ID: 'TSU_OBLGRBK_ID',
                    TSU_BUYER_BK_BIC: 'TSU_OBLGR_BK',
                    TSU_BUYER_BK_NM: 'TSU_OBLGRBK_NAME'
                }
            }
            var mappingfiledObj_SellerBank = {
                TSU_SEL_BK_ID: 'TSU_RCPTBK_ID',
                TSU_SEL_BK_BIC: 'TSU_RCPTBK',
                TSU_SEL_BK_NM: 'TSU_RCPTBK_NAME'
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
            mappingValueObj['TSU_PMT_XPRY_DT'] = SYS_BUSI_DATE;
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
        var TSU_BUYER_ID = parent.SYS_getFieldValue(DT_Party_node, 0, "CUST_ID");
        document.MAINFORM.TSU_BUYER_ID.value = TSU_BUYER_ID;

        var DT_R2Goods_node = parent.SYS_getNodeByXpath('R2Goods');
        var TSU_TTL_NET_AMT = parent.SYS_getFieldValue(DT_R2Goods_node, 0, "TSU_TTL_NET_AMT");
        document.MAINFORM.TSU_TTL_NET_AMT.value = TSU_TTL_NET_AMT;
        var TSU_CCY = parent.SYS_getFieldValue(DT_R2Goods_node, 0, "TSU_CCY");
        document.MAINFORM.TSU_CCY.value = TSU_CCY;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_get_TSU_SUB_B_BIC = function() {
    try {

        var TSU_SUB_B_BIC = "";
        TSU_SUB_B_BIC = SYS_LOGIN_BIC;
        SYT_setFldValue("TSU_SUB_B_BIC", TSU_SUB_B_BIC);
        SYT_setFldValue("TSU_SUB_B_ID", "8000000001");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYT_setFldValue("TEMP_CHAR33", SYS_DATE);
        SYT_setFldValue("TSU_INSTR_TP", "FPTR");
        SYF_TSUM_TSU_CCY();
        SYF_TSUM_getTSURef();
        SYF_TSUM_get_TSU_SUB_B_BIC();
        SYT_setFldValue("TSU_OUR_ROLE", "Buyer Bank");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_ORG_FUNCTION_SHORT_NAME == "Send019ToCoE&TSU") {
            SYT_DisObj("B_div");
        } else {
            SYT_hideObj("B_div");
        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('getdata_tsu012');
            parent.getDOdataFromSes('N');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_CAL_FA_BUSI_TYPE = function() {
    try {

        if (document.MAINFORM.TSU_BK_BPO_FLG.value == 'true') {
            SYT_ChangeFldClass_New('FA_BUSI_TYPE', 'M');
        } else {
            SYT_ChangeFldClass_New('FA_BUSI_TYPE', 'P');
            document.MAINFORM.FA_BUSI_TYPE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
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
        SYF_TSUM_CAL_FA_BUSI_TYPE();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_BPO_OBL_BK_onchange = function(event) {
    try {
        SYF_TSUM_BPO_Onchange();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessOutgoingBaselineRequest.js", e);
    }
}