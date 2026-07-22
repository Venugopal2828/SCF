var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAAReminder.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        /**byMaria20080930
var arrOptionV=['3','4'];
SYS_FilterOptions('FA_MSG_FUNC',arrOptionV);
var arrOptionV2=['5','6','7','8','9','10'];
SYS_FilterOptions('FA_REQ_CODE',arrOptionV2);
**/
        document.MAINFORM.FA_BUSI_STATUS.value = 'CAA';
        document.MAINFORM.FA_MSG_FUNC.value = '4';
        SYF_FADA_Get_IF_LIMT();
    } catch (e) {
        DisExcpt("SYF_FADA_CAAReminder.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_IF_LIMT = function() {
    try {

        //var sFieldList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_BASE_CCY;LM_DUE_DAY";
        //var sMappingList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_BASE_CCY;LM_DUE_DAY";
        SYS_GetTableDataByRule_S('SYF_FADA_CAAReminder_SYF_FADA_Get_IF_LIMT_0', '1', 'Y');
        var TEMP_AMT5 = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
        document.MAINFORM.TEMP_DATE4.value = document.MAINFORM.LM_DUE_DAY.value;
        document.MAINFORM.FA_TEMP3.value = document.MAINFORM.LM_BASE_CCY.value;
        document.MAINFORM.FA_TEMP1.value = SYT_AmtFormat(document.MAINFORM.LM_BASE_CCY.value, TEMP_AMT5);
    } catch (e) {
        DisExcpt("SYF_FADA_CAAReminder.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAReminder.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAReminder.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAReminder.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAReminder.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAReminder.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAAReminder.js", e);
    }
}