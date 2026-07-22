var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
        var TSU_OUR_REF = document.MAINFORM.TSU_OUR_REF.value;
        var TSU_BASELN_ID = document.MAINFORM.TSU_BASELN_ID.value;
        if (TSU_OUR_REF != '') {
            SYF_TSUM_TSUM_TSU_TID();
        }
        if (TSU_BASELN_ID != '') {
            SYF_TSUM_GET_TID_ERR();
        }
        document.MAINFORM.TSU_ERR_STATUS.value = 'Arranged';
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessErrorReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSUM_TSU_TID = function() {
    try {

        var sFieldList = "TSU_TID";
        var sMappingList = "TSU_ERR_TID";
        SYS_GetTableData_SvrSql("GET_TSU_TID", "TSU_OUR_REF", sFieldList, sMappingList, '', '', 'Y');
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessErrorReport.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('getdata_tsu017R2'); //set an empty get date to this function.
            parent.getDOdataFromSes('N');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessErrorReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_GET_TID_ERR = function() {
    try {

        var sFieldList = "TSU_TID";
        var sMappingList = "TSU_ERR_TID2";
        SYS_GetTableData_SvrSql("GET_TSU_TID_ERR", "TSU_BASELN_ID", sFieldList, sMappingList, '', '', 'Y');
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessErrorReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Get_I_EVENT_TIMES = function() {
    try {

        var sFieldList = "I_EVENT_TIMES";
        var sMappingList = "I_EVENT_TIMES";
        SYS_GetTableData_SvrSql("GET_I_EVENT_TIMES", "C_MAIN_REF", sFieldList, sMappingList, '', '', 'Y');
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessErrorReport.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessErrorReport.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessErrorReport.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_TSUM_Get_I_EVENT_TIMES();
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessErrorReport.js", e);
    }
}