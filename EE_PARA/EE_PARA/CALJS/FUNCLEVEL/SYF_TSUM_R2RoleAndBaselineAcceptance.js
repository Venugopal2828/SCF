var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_get_TSU_SUB_B_BIC = function() {
    try {

        var TSU_SUB_B_BIC = "";
        TSU_SUB_B_BIC = SYS_LOGIN_BIC;
        SYT_setFldValue("TSU_SUB_B_BIC", TSU_SUB_B_BIC);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2RoleAndBaselineAcceptance.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2RoleAndBaselineAcceptance.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_getTSURef();
        //SYS_GetTableData_Boc('TSUM_EM_BASELINE',"C_MAIN_REF='"+document.MAINFORM.C_MAIN_REF.value+"'",'TSU_TID,TSU_MESSAGE_ID,TSU_TRX_DT','TSU_TID,TSU_RL_MSG_ID,TSU_RL_MSG_ID_DT');
        document.MAINFORM.TSU_ROLE_BASELN_DT.value = SYS_DATE;
        var TSU_TRX_STATUS = document.MAINFORM.TSU_TRX_STATUS.value;
        if (TSU_TRX_STATUS == "AMRQ") {
            document.MAINFORM.TSU_TRX_AMD.value = "049";
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2RoleAndBaselineAcceptance.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var MAIN_REF = "";
        var TSU_MESSAGE_ID = "";

        MAIN_REF = SYS_LOGIN_BIC + "RBA" + ref;
        TSU_MESSAGE_ID = MAIN_REF + String(SYS_I_EVENT_TIMES);
        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2RoleAndBaselineAcceptance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2RoleAndBaselineAcceptance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2RoleAndBaselineAcceptance.js", e);
    }
}