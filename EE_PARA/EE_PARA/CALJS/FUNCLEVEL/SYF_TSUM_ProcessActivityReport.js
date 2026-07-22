var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_I_EVENT_TIMES = function() {
    try {

        var C_MAIN_REF = SYT_getFldValue("C_MAIN_REF");
        var C_UNIT_CODE = SYS_BUSI_UNIT;
        var sTableName = "EXIMTRX.TSUM_MASTER";
        var sSQLWhere = "C_MAIN_REF=\'" + C_MAIN_REF + "\' AND C_UNIT_CODE=\'" + C_UNIT_CODE + "\'";
        var sFieldList = "I_EVENT_TIMES";
        var sMappingList = "I_EVENT_TIMES";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessActivityReport.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('getdata_tsu003A');
            parent.getDOdataFromSes('N');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessActivityReport.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_COMM_REF = function() {
    try {

        SYS_GetCUBK('TSU_COMM_REF', 'TSU_COMM_REF');
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessActivityReport.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.TSU_ERR_STATUS.value = 'Arranged';
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessActivityReport.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        EEHtml.getFrameWindow("toolbar").SYS_MakeButtonShow("_cancel");
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessActivityReport.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessActivityReport.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessActivityReport.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_TSUM_I_EVENT_TIMES();
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessActivityReport.js", e);
    }
}