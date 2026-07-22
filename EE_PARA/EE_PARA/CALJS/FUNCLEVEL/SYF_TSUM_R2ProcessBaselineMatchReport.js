var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_Get_C_MSG_ID = function() {
    try {

        var TSU_TID = SYT_getFldValue("TSU_TID");
        var C_UNIT_CODE = SYS_BUSI_UNIT;
        var C_MSG_TYPE = "tsmt.010.001.03";
        var sTableName = "EXIMSYS.TSU_MSGS";
        var sSQLWhere = "C_TID=\'" + TSU_TID + "\' AND C_MSG_TYPE=\'" + C_MSG_TYPE + "\' AND C_UNIT_CODE=\'" + C_UNIT_CODE + "\'";
        var sFieldList = "C_MSG_ID";
        var sMappingList = "C_MSG_ID";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineMatchReport.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (document.MAINFORM.C_MAIN_REF.value != '') {
            SYS_GetTableData_Boc('EXIMTRX.TSUM_GOODS_R2', "C_MAIN_REF='" + document.MAINFORM.C_MAIN_REF.value + "'", 'TSU_PO_DT,TSU_LINE_TTL_AMT', 'TSU_PO_DT,TSU_LINE_TTL_AMT');
            document.MAINFORM.TSU_LINE_TTL_AMT.value = SYT_CCY_AMT(document.MAINFORM.TSU_CCY.value, document.MAINFORM.TSU_LINE_TTL_AMT.value);
        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('getdata_tsu010');
            parent.getDOdataFromSes('N');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineMatchReport.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_Get_C_MSG_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineMatchReport.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var C_UNIT_CODE = "";
        C_UNIT_CODE = SYS_BUSI_UNIT;
        SYT_setFldValue("FINC_UNIT_CODE", SYS_BUSI_UNIT);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineMatchReport.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineMatchReport.js", e);
    }
}