"path:SCRN/DO/TSU_TRN_Goods.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.AddSameDoRecord = function(xpath, attrName) {
    try {
        var curr_node; // Utility Auto Fix Comments
        var currrecords; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var idx; // Utility Auto Fix Comments
        var parent_node; // Utility Auto Fix Comments
        var rNode; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        curr_node = SYS_getNodeByXpath('R2TrnsprtDataset.R2DT_TrnsprtDocRef.R2DT_TrnsprtdGoods');
        currrecords = SYS_getRecords(curr_node);
        if (currrecords.length == 0) {
            parent_node = SYS_getNodeByXpath(xpath);
            records = SYS_getRecords(parent_node);
            for (i = 0; i < records.length; i++) { // Utility Auto Fix Comments
                if (SYS_DO_XPATH == "R2TrnsprtDataset.R2DT_TrnsprtDocRef.R2DT_TrnsprtdGoods") {
                    idx = parent.SYS_getCurrNodeParentValue('R2DT_TrnsprtDocRef', 'TSU_TRAN_DOC_REF');
                    records[i].TSU_TRAN_DOC_REF = idx;
                    records[i].TSU_GOODS_DESC = '';
                }
            }
            rNode = parent.DoFrame.tree.getCurrentTreeNode();
            if (records != "" && parent.DoFrame.tree.getPropertyValue(rNode, attrName) == undefined) {
                parent.DoFrame.tree.setPropertyValue(rNode, attrName, 1);
                SYS_insertRecordsToCurrentDO(records);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_TRN_Goods.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_TRN_Goods.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_TRN_Goods.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_TRN_Goods.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        if (SYS_DO_XPATH == "R2TrnsprtDataset.R2DT_TrnsprtDocRef.R2DT_TrnsprtdGoods") {
            AddSameDoRecord('R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods', 'DT_Goods');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_TRN_Goods.js", e);
    }
}