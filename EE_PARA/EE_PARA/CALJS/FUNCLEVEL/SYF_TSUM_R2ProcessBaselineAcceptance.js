var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var TSU_MESSAGE_ID = "";
        var TSU_SUB_B_BIC = SYT_getFldValue("TSU_SUB_B_BIC");
        var TSU_SUBMIT_BASELN_ID = SYT_getFldValue("TSU_SUBMIT_BASELN_ID");
        var length;

        C_MAIN_REF = TSU_SUB_B_BIC + "BL" + ref;
        TSU_MESSAGE_ID = C_MAIN_REF + String(SYS_I_EVENT_TIMES);
        length = TSU_SUBMIT_BASELN_ID.length;
        TSU_SUBMIT_BASELN_ID = TSU_SUB_B_BIC + TSU_SUBMIT_BASELN_ID.substr(8, length);

        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
        SYT_setFldValue("TSU_SUBMIT_BASELN_ID", TSU_SUBMIT_BASELN_ID);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef()");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_get_TSU_SUB_B_BIC = function() {
    try {

        var TSU_SUB_B_BIC = "";
        TSU_SUB_B_BIC = SYS_LOGIN_BIC;
        SYT_setFldValue("TSU_SUB_B_BIC", TSU_SUB_B_BIC);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_getTSURef();
        SYF_TSUM_get_TSU_SUB_B_BIC();
        SYT_setFldValue("TSU_INSTR_TP", "FPTR");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_TSUM_Show_ChargeAndSilent();
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('getdata_tsu012');
            parent.getDOdataFromSes('N');
            if (SYS_BUSI_UNIT == "BUYERBANK") {
                node = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.SellerBank.ContactIdentification1');
                var Count = parent.DoFrame.tree.getPropertyValue(node, 'recordCount');
                if (Count > 0) {
                    parent.SYS_DeleteRecordByXpath('R2InvolvedPartyInfo.SellerBank.ContactIdentification1');
                }
            }
            if (SYS_BUSI_UNIT == "CSBANK") {
                node = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.BuyerBank.ContactIdentification1');
                var Count = parent.DoFrame.tree.getPropertyValue(node, 'recordCount');
                if (Count > 0) {
                    parent.SYS_DeleteRecordByXpath('R2InvolvedPartyInfo.BuyerBank.ContactIdentification1');
                }
            }

        }
        if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
            initEC();
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance.js", e);
    }
}