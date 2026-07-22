"path:SCRN/DO/R2TSU_ShipmntSubSchdl.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ShipmntSubSchdl.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ShipmntSubSchdl.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ShipmntSubSchdl.js", e);
    }
}

csDOScreenProto.DATE_CHECK = function() {
    try {
        var earliest; // Utility Auto Fix Comments
        var latest; // Utility Auto Fix Comments
        earliest = document.MAINFORM.TSU_EARLST_SHIP_DT.value;
        latest = document.MAINFORM.TSU_LATST_SHIP_DT.value;
        if (earliest != '' && latest != '') {

            if (!SYS_Day1MustbeLaterThanDay2('TSU_LATST_SHIP_DT', 'TSU_EARLST_SHIP_DT')) {
                return false;
            }

        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ShipmntSubSchdl.js", e);
    }
}

csDOScreenProto.DO_XPATH = function() {
    try {
        var Ship_node; // Utility Auto Fix Comments
        var nDate; // Utility Auto Fix Comments
        var nRate; // Utility Auto Fix Comments
        // Add on 2013/10/9 by Hattie;
        if (SYS_DO_XPATH == "R2Goods.R2LineItemDetails7.R2ShipmntSchdl.R2ShipmntSubSchdl") {
            SYS_checkDoAdd('R2Goods.R2LineItemDetails7.R2ShipmntSchdl.R2ShipmntDtRg');
            Ship_node = parent.SYS_getNodeByXpath('R2Goods');
            record = parent.SYS_getRecord(Ship_node, 0);
            if (record != null) {
                nRate = record.TSU_LATST_SHIP_DT;
                nDate = record.TSU_EARLST_SHIP_DT;

                if (nRate != '' || nDate != '') {
                    //document.MAINFORM.TSU_LATST_SHIP_DT.className='DATE_P';
                    SYS_checkDoAdd('R2Goods');
                }
            }
        }
        if (SYS_DO_XPATH == "R2GoodsRe.R2LineItemDetails7.R2ShipmntSchdl.R2ShipmntSubSchdl") {
            SYS_checkDoAdd('R2GoodsRe.R2LineItemDetails7.R2ShipmntSchdl.R2ShipmntDtRg');
            Ship_node = parent.SYS_getNodeByXpath('R2GoodsRe'); // Utility Auto Fix Comments
            record = parent.SYS_getRecord(Ship_node, 0);
            if (record != null) {
                nRate = record.TSU_LATST_SHIP_DT; // Utility Auto Fix Comments
                nDate = record.TSU_EARLST_SHIP_DT; // Utility Auto Fix Comments

                if (nRate != '' || nDate != '') {
                    //document.MAINFORM.TSU_LATST_SHIP_DT.className='DATE_P';
                    SYS_checkDoAdd('R2GoodsRe');
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ShipmntSubSchdl.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        TSU_LATST_SHIP_DT();
        DO_XPATH();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ShipmntSubSchdl.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        TSU_LATST_SHIP_DT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ShipmntSubSchdl.js", e);
    }
}

csDOScreenProto.TSU_LATST_SHIP_DT = function() {
    try {
        var Ship_node; // Utility Auto Fix Comments
        var nDate; // Utility Auto Fix Comments
        var nRate; // Utility Auto Fix Comments
        //modify on 2013/10/9 by hattie
        Ship_node = "";
        //if(SYS_DO_XPATH =="R2GoodsRe.R2LineItemDetails7.R2ShipmntSchdl")
        if (SYS_DO_XPATH == "R2GoodsRe.R2LineItemDetails7.R2ShipmntSchdl.R2ShipmntSubSchdl") {
            Ship_node = parent.SYS_getNodeByXpath('R2GoodsRe');
        } else {
            Ship_node = parent.SYS_getNodeByXpath('R2Goods');
        }
        record = parent.SYS_getRecord(Ship_node, 0);
        if (record != null) {
            nRate = record.TSU_LATST_SHIP_DT;
            nDate = record.TSU_EARLST_SHIP_DT;
            if (nRate != '' || nDate != '') {
                //document.MAINFORM.TSU_LATST_SHIP_DT.className='DATE_P';
                SYS_checkDoAdd('R2Goods');
                SYS_checkDoAdd('R2GoodsRe');
            } else {
                document.MAINFORM.TSU_LATST_SHIP_DT.className = 'DATE_O';
            }

        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ShipmntSubSchdl.js", e);
    }
}

csDOScreenProto.TSU_LATST_SHIP_DT_onchange = function(event) {
    try {
        DATE_CHECK();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ShipmntSubSchdl.js", e);
    }
}