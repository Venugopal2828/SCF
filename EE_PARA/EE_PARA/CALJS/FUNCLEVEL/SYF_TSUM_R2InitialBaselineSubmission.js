var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
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
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
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
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSUM_TSU_SUB_B_ID = function() {
    try {

        SYS_GetCUBK('TSU_SUB_B_ID', 'TSU_SUB_B_ID');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
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
        TSU_SUBMIT_BASELN_ID = C_MAIN_REF + TSU_SUBMIT_BASELN_VRSN;
        SYT_setFldValue("C_MAIN_REF", C_MAIN_REF);
        SYT_setFldValue("TSU_OUR_REF", C_MAIN_REF);
        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
        SYT_setFldValue("TSU_SUBMIT_BASELN_ID", TSU_SUBMIT_BASELN_ID);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
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
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_get_TSU_SUB_B_BIC();
        SYF_TSUM_GET_SUB_B_BIC_ID();
        SYF_TSUM_getTSURef();
        document.MAINFORM.TSU_SUBMIT_BASELN_VRSN.value = 1;
        document.MAINFORM.TSUR2_TRX_STATUS.value = "INIT";
        //document.MAINFORM.TSU_CUST_BPO_FLG.value="Y";
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef()");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_get_TSU_SUB_B_BIC = function() {
    try {

        var TSU_SUB_B_BIC = "";
        TSU_SUB_B_BIC = SYS_LOGIN_BIC;
        SYT_setFldValue("TSU_SUB_B_BIC", TSU_SUB_B_BIC);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_ORG_FUNCTION_SHORT_NAME == "Send019ToCoE&TSU") {
            SYT_DisObj("B_div");
        } else {
            SYT_hideObj("B_div");
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

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
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_GET_SUB_B_BIC_ID = function() {
    try {

        var sFieldList = "C_MAIN_REF;NARR_NM";
        var sMappingList = "TSU_SUB_B_ID;TSU_SUB_B_NM";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        var notshowError = true;

        SYS_GetTableData_SvrSql("TSU_SUB_B_BIC", "TSU_SUB_B_BIC", sFieldList, sMappingList, sSucJsFuncName, '', notshowError);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
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
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_BK_BPO_FLG_onchange = function(event) {
    try {
        SYF_TSUM_CAL_FA_BUSI_TYPE();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_INSTR_TP_onchange = function(event) {
    try {
        SYF_TSUM_IntentToPay();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_OUR_ROLE_onchange = function(event) {
    try {
        SYF_TSUM_TSU_OUR_ROLE();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_PO_ID_onchange = function(event) {
    try {
        SYF_TSUM_TSU_PO_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_SUB_B_ID_onchange = function(event) {
    try {
        SYF_TSUM_TSUM_TSU_SUB_B_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InitialBaselineSubmission.js", e);
    }
}