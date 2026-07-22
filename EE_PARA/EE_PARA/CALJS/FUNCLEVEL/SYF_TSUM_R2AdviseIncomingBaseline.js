var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_GAPI_CE = function() {
    try {

        var goods_node = parent.SYS_getNodeByXpath('R2Goods');

        record = parent.SYS_getRecord(goods_node, 0);
        if (record != null) {
            var ngoods = record.TSU_GOODS_DESC;
            var TSU_PO_ID = record.TSU_PO_ID;
            var TSU_PO_DT = record.TSU_PO_DT;
            var TSU_LINE_TTL_AMT = record.TSU_LINE_TTL_AMT;
            var TSU_CCY = record.TSU_CCY;
            var TSU_LATST_SHIP_DT = record.TSU_LATST_SHIP_DT;
            document.MAINFORM.TSU_GOODS_DESC.value = ngoods;
            document.MAINFORM.TSU_PO_DT.value = TSU_PO_DT;
            document.MAINFORM.TSU_PO_ID.value = TSU_PO_ID;
            document.MAINFORM.TSU_LINE_TTL_AMT.value = SYT_CCY_AMT(TSU_CCY, TSU_LINE_TTL_AMT);
            document.MAINFORM.TSU_LATST_SHIP_DT.value = TSU_LATST_SHIP_DT;

        }
        //Add on 2014/04/30 for send BPO info to CE SIDE;
        var BPO_node = parent.SYS_getNodeByXpath('R2PaymentObligation');

        record = parent.SYS_getRecord(BPO_node, 0);
        if (record != null) {
            var TSU_OBLGR_BK = record.TSU_OBLGR_BK;
            var TSU_OBLGRBK_NAME = record.TSU_OBLGRBK_NAME;
            var TSU_PMTOBLGR_AMT = record.TSU_PMTOBLGR_AMT;
            var TSU_PMT_XPRY_DT = record.TSU_PMT_XPRY_DT;
            document.MAINFORM.TSU_OBLGR_BK.value = TSU_OBLGR_BK;
            document.MAINFORM.TSU_OBLGRBK_NAME.value = TSU_OBLGRBK_NAME;
            document.MAINFORM.TSU_PMTOBLGR_AMT.value = TSU_PMTOBLGR_AMT;
            document.MAINFORM.TSU_PMT_XPRY_DT.value = TSU_PMT_XPRY_DT;


        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AdviseIncomingBaseline.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_TSUM_Show_SilentConfirmation();
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('getdata_tsu012');
            parent.getDOdataFromSes('N');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AdviseIncomingBaseline.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_Get_C_MSG_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AdviseIncomingBaseline.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        SYF_TSUM_GAPI_CE();
        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AdviseIncomingBaseline.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Get_C_MSG_ID = function() {
    try {

        var TSU_TID = SYT_getFldValue("TSU_TID");
        var C_UNIT_CODE = SYS_BUSI_UNIT;
        var C_MSG_TYPE = "tsmt.018.001.03";
        var sTableName = "EXIMSYS.TSU_MSGS";
        var sSQLWhere = "C_TID=\'" + TSU_TID + "\' AND C_MSG_TYPE=\'" + C_MSG_TYPE + "\' AND C_UNIT_CODE=\'" + C_UNIT_CODE + "\'";
        var sFieldList = "C_MSG_ID";
        var sMappingList = "C_MSG_ID";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        SYS_GetTableData(sTableName, sSQLWhere, sFieldList, sMappingList);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AdviseIncomingBaseline.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_Show_SilentConfirmation = function() {
    try {

        //Add for CommerzBank POC 20131012
        if (SYS_ORG_FUNCTION_SHORT_NAME == "Send018ToCoE") {
            SYT_DisObj("B_div");
            SYT_ChangeFldClass(document.MAINFORM.TSU_SILENT_CONFM, 'M', 'N');
        } else {
            SYT_hideObj("B_div");
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AdviseIncomingBaseline.js", e);
    }
}