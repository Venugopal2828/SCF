"path:SCRN/DO/R2TSU_RltdTxRefs.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.AddSameDoRecord = function(xpath, attrName) {
    try {
        var curr_node = SYS_getNodeByXpath('R2RltdTxRefs');
        var currrecords = SYS_getRecords(curr_node);
        if (currrecords.length == 0) {
            var parent_node = SYS_getNodeByXpath(xpath);
            var records = SYS_getRecords(parent_node);
            /*for(var i=0;i<records.length;i++)
	{
	    if(SYS_DO_XPATH =="R2TrnsprtDataset.DT_Buyer"||SYS_DO_XPATH =="R2TrnsprtDataset.DT_Seller")
	    {
	    	var idx = parent.SYS_getCurrNodeParentValue('R2TrnsprtDataset','TSU_TRNS_INF');
	    	records[i].TSU_IDX = idx;
             }
	}*/
            var rNode = parent.DoFrame.tree.getCurrentTreeNode();
            if (records != "" && parent.DoFrame.tree.getPropertyValue(rNode, attrName) == undefined) {
                parent.DoFrame.tree.setPropertyValue(rNode, attrName, 1);
                SYS_insertRecordsToCurrentDO(records);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RltdTxRefs.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RltdTxRefs.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RltdTxRefs.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RltdTxRefs.js", e);
    }
}