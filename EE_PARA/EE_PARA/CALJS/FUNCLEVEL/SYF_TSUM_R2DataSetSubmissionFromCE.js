var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_AutoLoadData = function() {
    try {

        var TSU_DS_ID = "";
        var ref = SYT_getFldValue('C_MAIN_REF');
        var Length = ref.length;
        Length = Length - 10;
        var DataIdSuf = ref.substr(10, Length);
        TSU_DS_ID = SYS_LOGIN_BIC + "COMM" + DataIdSuf;

        var data = {};
        data["R2ComrclDataset"] = {
            attributes: {
                isDO: "T",
                Type: "A"
            }
        };
        data["R2ComrclDataset"]["data"] = [{
            "C_MAIN_REF": SYT_getFldValue("C_MAIN_REF"),
            "TSU_DS_ID": TSU_DS_ID,
            "TSU_DS_VRSN": 1,
            "TSU_SUBMITR_BIC": SYS_LOGIN_BIC,
            "R2DT_ComrclDocRef": {
                attributes: {
                    isDO: "T",
                    Type: "A"
                },
                data: [{
                    "C_MAIN_REF": SYT_getFldValue("C_MAIN_REF"),
                    "TSU_COMM_REF": SYT_getFldValue("TSU_COMM_REF"),
                    "TSU_COMM_DT": SYT_getFldValue("TSU_COMM_DT"),
                    "TSU_COMM_AMT": SYT_getFldValue("TSU_COMM_AMT"),
                    "TSU_CCY": SYT_getFldValue("TSU_CCY"),
                    "TSU_BUYER_BK_ID": SYT_getFldValue("TSU_BUYER_BK_ID"),
                    "TSU_BUYER_BK_BIC": SYT_getFldValue("TSU_BUYER_BK_BIC"),
                    "TSU_BUYER_BK_NM": SYT_getFldValue("TSU_BUYER_BK_NM"),
                    "TSU_SEL_BK_ID": SYT_getFldValue("TSU_SEL_BK_ID"),
                    "TSU_SEL_BK_BIC": SYT_getFldValue("TSU_SEL_BK_BIC"),
                    "TSU_SEL_BK_NM": SYT_getFldValue("TSU_SEL_BK_NM")
                }]
            }
        }];
        parent.SYS_TSU_loadDataForTreeAndDO(data);
        parent.SYF_TSUM_getDOdata_R2ComrclDataset_R2DT_ComrclDocRef();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmissionFromCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TSU_MESSAGE_ID.value = document.MAINFORM.C_MAIN_REF.value + String(SYS_I_EVENT_TIMES);
        document.MAINFORM.TSU_CMON_SUB_REF.value = document.MAINFORM.C_MAIN_REF.value;
        SYF_TSUM_AutoLoadData();
        SYS_GetTableData_Boc('BANK_MASTER', "C_MAIN_REF='" + document.MAINFORM.TSU_BUYER_BK_ID.value + "'", 'NARR_NM,SW_ADD', 'TSU_BUYER_BK_NM,TSU_BUYER_BK_BIC');
        SYS_GetTableData_Boc('BANK_MASTER', "C_MAIN_REF='" + document.MAINFORM.TSU_SEL_BK_ID.value + "'", 'NARR_NM,SW_ADD', 'TSU_SEL_BK_NM,TSU_SEL_BK_BIC');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmissionFromCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        document.MAINFORM.TSU_TRX_DTTM.value = document.MAINFORM.TSU_COMM_DT.value;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmissionFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        /*Add by huyechao for ANB Demo 20130801*/
        var RltdTxRefs_node = parent.SYS_getNodeByXpath('R2RltdTxRefs');
        var records = parent.SYS_getRecords(RltdTxRefs_node);
        var TSU_TID = records.length > 0 ? records[0].TSU_TID : "";
        var sSQLWhere = "TSU_TID=\'" + TSU_TID + "\'";
        var sFieldList = "TSU_MTCH_ENGINE";
        var sMappingList = "TSU_MTCH_ENGINE";
        SYS_GetTableData_S('TSUM_MASTER', sSQLWhere, sFieldList, sMappingList);
        /*Add by huyechao for ANB Demo 20130801*/
        document.MAINFORM.TSU_INV_STAT.value = "PROP";
        document.MAINFORM.TSU_POST_FIN.value = 'Y';
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmissionFromCE.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_AddDORecord = function() {
    try {

        //SYS_AppendRecord();
        var DT_Goods = parent.SYS_getRecords('R2ComrclDataset');
        var len = DT_Goods.length;
        if (len = '0') {

            SYS_changeGridRowsByXpath('R2ComrclDataset', 1);

        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2DataSetSubmissionFromCE.js", e);
    }
}