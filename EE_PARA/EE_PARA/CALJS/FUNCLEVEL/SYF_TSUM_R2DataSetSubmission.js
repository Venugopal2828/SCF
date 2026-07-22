var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_TSU_BYRBK_ID = function() {
    try {

        SYS_GetCUBK('TSU_BYRBK_ID', 'TSU_BUYER_BK_ID');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_SELLRBK_ID = function() {
    try {

        SYS_GetCUBK('TSU_SELLRBK_ID', 'TSU_SEL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_CMON_SUBM_REF = function() {
    try {

        SYS_GetCUBK('TSU_CMON_SUBM_REF', 'TSU_CMON_SUB_REF');
        SYT_ChangeFldClass(document.MAINFORM.TSU_CMON_SUB_REF, 'M', 'N');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setDOCMRef = function(ref) {
    try {

        var C_MAIN_REF = "";
        var TSU_MESSAGE_ID = "";

        C_MAIN_REF = SYS_LOGIN_BIC + "DS" + ref;
        TSU_MESSAGE_ID = C_MAIN_REF + String(SYS_I_EVENT_TIMES);
        SYT_setFldValue("C_MAIN_REF", C_MAIN_REF);
        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TSU_TRX_STATUS.value = "DataSetSubmission";
        SYF_TSUM_getDOCMRef();
        document.MAINFORM.TSU_TRX_DTTM.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_CCY = function() {
    try {

        var DT_Goods_node = parent.SYS_getNodeByXpath('R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods');
        var records = parent.SYS_getRecords(DT_Goods_node);
        var len = records.length;
        var i = 0;
        record = records[i];
        var TSU_CCY = record.TSU_CCY;
        document.MAINFORM.TSU_CCY.value = TSU_CCY;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_TSUM_TSU_COMM_REF();
        SYT_genTsuSeqNum();

        /*Add by huyechao for ANB Demo 20130801*/
        /*
        var RltdTxRefs_node = parent.SYS_getNodeByXpath('R2RltdTxRefs');
        var records = parent.SYS_getRecords(RltdTxRefs_node);
        var TSU_TID = records.length > 0 ? records[0].TSU_TID : "";
        document.MAINFORM.TEMP_CHAR1.value = TSU_TID;
        var sSQLWhere = "TSU_TID=\'" + TSU_TID + "\'";
        var sFieldList = "TSU_MTCH_ENGINE";
        var sMappingList = "TSU_MTCH_ENGINE";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        SYS_GetTableData_SvrSql("GetMatchENG_014", "TEMP_CHAR1", sFieldList, sMappingList, sSucJsFuncName, '', 'Y');
		*/
        /*Add by huyechao for ANB Demo 20130801*/
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_COMM_REF = function() {
    try {

        var ComrclDocRef_node = parent.SYS_getNodeByXpath('R2ComrclDataset.R2DT_ComrclDocRef');
        var records = parent.SYS_getRecords(ComrclDocRef_node);
        var len = records.length;
        for (var i = 0; i < len; i++) {
            record = records[i];
            var TSU_COMM_REF = record.TSU_COMM_REF;
        }
        document.MAINFORM.TSU_COMM_REF.value = TSU_COMM_REF;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_new = function() {
    try {

        document.MAINFORM.TSU_CMON_SUB_REF.value = document.MAINFORM.C_MAIN_REF.value;
        SYT_ChangeFldClass(document.MAINFORM.TSU_CMON_SUB_REF, 'P', 'N');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getDOCMRef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setDOCMRef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_BUYER_BK_ID_onchange = function(event) {
    try {
        SYF_TSUM_TSU_BYRBK_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_CMON_SUB_REF_onchange = function(event) {
    try {
        SYF_TSUM_TSU_CMON_SUBM_REF();
        document.MAINFORM.TSU_COMM_DATA_ID.value = '';
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_SEL_BK_ID_onchange = function(event) {
    try {
        SYF_TSUM_TSU_SELLRBK_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmission.js", e);
    }
}