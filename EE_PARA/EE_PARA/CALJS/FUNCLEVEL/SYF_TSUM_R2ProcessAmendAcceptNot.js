var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'MM') {
            SYS_GetDataForDO_S('GetGoodsR2_ProAACP');
        }
        if (SYS_FUNCTION_TYPE == 'MM' || SYS_FUNCTION_TYPE == 'EC') {
            parent.getDOdataFromSes('RA');
        }
        if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
            initEC();
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessAmendAcceptNot.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var prefix = 'BAR';
        var TSU_MESSAGE_ID = "";
        var TSU_SUB_B_BIC = SYT_getFldValue("TSU_SUB_B_BIC");

        C_MAIN_REF = TSU_SUB_B_BIC + "BL" + ref;
        TSU_MESSAGE_ID = prefix + C_MAIN_REF + String(SYS_I_EVENT_TIMES);
        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessAmendAcceptNot.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessAmendAcceptNot.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TSU_TRX_STATUS.value = "Empty";
        SYF_TSUM_getTSURef();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessAmendAcceptNot.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessAmendAcceptNot.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessAmendAcceptNot.js", e);
    }
}