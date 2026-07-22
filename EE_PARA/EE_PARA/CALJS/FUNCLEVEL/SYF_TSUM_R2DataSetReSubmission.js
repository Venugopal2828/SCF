var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            //SYS_GetDataForDO_S('getdata_tsu014');
            SYS_GetDataForDO_TSU_S('getdata_tsu014', null, null, null, null, {
                "TSU_MERGE_DONAMES": ["R2ComrclDataset*R2TrnsprtDataset*R2InsrncDataset*R2CertDataset*R2OthrCertDataset*R2RltdTxRefs"]
            });

            parent.getDOdataFromSes('N');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_BYRBK_ID = function() {
    try {

        SYS_GetCUBK('TSU_BYRBK_ID', 'TSU_BUYER_BK_ID');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_SELLRBK_ID = function() {
    try {

        SYS_GetCUBK('TSU_SELLRBK_ID', 'TSU_SEL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        var TSU_MESSAGE_ID = SYT_getFldValue("TSU_MESSAGE_ID");
        var Length = TSU_MESSAGE_ID.length;
        Length = Length - 10;
        var msgIdPre = TSU_MESSAGE_ID.substr(0, 10);
        var msgIdSuf = TSU_MESSAGE_ID.substr(10, Length);
        msgIdSuf = SYS_BeFloat(msgIdSuf) + 1;
        TSU_MESSAGE_ID = msgIdPre + String(msgIdSuf);
        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_CMON_SUBM_REF = function() {
    try {

        SYS_GetCUBK('TSU_CMON_SUBM_REF', 'TSU_CMON_SUB_REF');
        SYT_ChangeFldClass(document.MAINFORM.TSU_CMON_SUB_REF, 'M', 'N');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_TSUM_TSU_COMM_REF();
        SYF_TSUM_TSU_CCY();
        SYT_genTsuSeqNum();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
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
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
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
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_new = function() {
    try {

        document.MAINFORM.TSU_CMON_SUB_REF.value = document.MAINFORM.C_MAIN_REF.value;
        SYT_ChangeFldClass(document.MAINFORM.TSU_CMON_SUB_REF, 'P', 'N');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_BUYER_BK_ID_onchange = function(event) {
    try {
        SYF_TSUM_TSU_BYRBK_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_CMON_SUB_REF_onchange = function(event) {
    try {
        SYF_TSUM_TSU_CMON_SUBM_REF();
        document.MAINFORM.TSU_COMM_DATA_ID.value = '';
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_SEL_BK_ID_onchange = function(event) {
    try {
        SYF_TSUM_TSU_SELLRBK_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetReSubmission.js", e);
    }
}