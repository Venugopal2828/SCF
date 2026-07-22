"path:SCRN/DO/R2TSU_Goods.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.CheckCurrFreight = function(node, recId) {
    try {
        var nFreight_node; // Utility Auto Fix Comments
        var nFreight_recordsNo; // Utility Auto Fix Comments
        //add by wj 20100104 -s for bugtrack TSU-60
        nFreight_node = parent.SYS_getNodeByXpath(SYS_DO_XPATH + '.FrghtChrgs');
        nFreight_records = parent.SYS_getRecords(nFreight_node);
        nFreight_recordsNo = nFreight_records.length;
        if (nFreight_recordsNo == 0) {
            document.MAINFORM.TSU_FRGHT_TP.className = 'CHAR_O';
        } else {
            document.MAINFORM.TSU_FRGHT_TP.className = 'CHAR_M';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.Check_R2ShipmntDtRg_Records = function(node, recId) {
    try {
        var Ship_node2; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var nDTE; // Utility Auto Fix Comments
        var nDTL; // Utility Auto Fix Comments
        var rlen; // Utility Auto Fix Comments
        //Add by hattie on 2013/10/11 for check the shipment date range records;
        Ship_node2 = "";
        if (SYS_DO_XPATH == "R2GoodsRe") {
            Ship_node2 = parent.SYS_getNodeByXpath('R2GoodsRe.R2LineItemDetails7.R2ShipmntSchdl.R2ShipmntDtRg');
        } else {
            Ship_node2 = parent.SYS_getNodeByXpath('R2Goods.R2LineItemDetails7.R2ShipmntSchdl.R2ShipmntDtRg');
        }
        if (Ship_node2 != null) {
            records = parent.SYS_getRecords(Ship_node2);
            rlen = records.length;
            for (i = 0; i < rlen; i++) { // Utility Auto Fix Comments
                record = records[i];
                nDTE = record.TSU_EARLST_SHIP_DT;
                nDTL = record.TSU_LATST_SHIP_DT;
                if (nDTE != '' || nDTL != '') {
                    document.MAINFORM.TSU_LATST_SHIP_DT.className = 'DATE_P';
                    document.MAINFORM.TSU_LATST_SHIP_DT.value = "";
                    document.MAINFORM.TSU_EARLST_SHIP_DT.value = "";
                    document.MAINFORM.TSU_EARLST_SHIP_DT.className = 'DATE_P';
                    break;
                } else {
                    document.MAINFORM.TSU_EARLST_SHIP_DT.className = 'DATE_O';
                    document.MAINFORM.TSU_LATST_SHIP_DT.className = 'DATE_O';
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.Check_R2ShipmntSubSchdl_Record = function(node, recId) {
    try {
        var Ship_node; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var nQTY; // Utility Auto Fix Comments
        var rlen; // Utility Auto Fix Comments
        Ship_node = "";
        if (SYS_DO_XPATH == "R2GoodsRe") {
            Ship_node = parent.SYS_getNodeByXpath('R2GoodsRe.R2LineItemDetails7.R2ShipmntSchdl.R2ShipmntSubSchdl');
        } else {
            Ship_node = parent.SYS_getNodeByXpath('R2Goods.R2LineItemDetails7.R2ShipmntSchdl.R2ShipmntSubSchdl');
        }
        if (Ship_node != null) {
            records = parent.SYS_getRecords(Ship_node);
            rlen = records.length;
            for (i = 0; i < rlen; i++) {
                record = records[i];
                nQTY = record.TSU_SUB_QTY;
                if (nQTY != '') {
                    document.MAINFORM.TSU_EARLST_SHIP_DT.className = 'DATE_P';
                    document.MAINFORM.TSU_LATST_SHIP_DT.value = "";
                    document.MAINFORM.TSU_EARLST_SHIP_DT.value = "";
                    document.MAINFORM.TSU_LATST_SHIP_DT.className = 'DATE_P';
                    break;
                } else {
                    document.MAINFORM.TSU_EARLST_SHIP_DT.className = 'DATE_O';
                    document.MAINFORM.TSU_LATST_SHIP_DT.className = 'DATE_O';

                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        Show_011();
        TSU_CCY();
        TSU_NET_CCY();
        document.MAINFORM.TSU_PO_INITIATOR.value = '1';
        TSU_PO_ID();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "Send019TSUSIBOS" || SYS_ORG_FUNCTION_SHORT_NAME == "tsmt.019.001.03A") {
            document.MAINFORM.TSU_PO_INITIATOR.value = parent.SYS_getValueFromMain('TSU_OUR_ROLE');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.OnSelected = function(node, recId) {
    try {
        Show_011();
        if (SYS_FUNCTION_TYPE != 'IQ' && SYS_ORG_FUNCTION_SHORT_NAME != 'GenerateCommInv') {
            TSU_CCY();
            TSU_NET_CCY();
            getChildsTSU_FRGHT_TPValue();
            Check_R2ShipmntSubSchdl_Record();
            Check_R2ShipmntDtRg_Records();
            TSU_PO_ID();
            if (SYS_ORG_FUNCTION_SHORT_NAME == "Send019TSUSIBOS" || SYS_ORG_FUNCTION_SHORT_NAME == "tsmt.019.001.03A" ||
                SYS_ORG_FUNCTION_SHORT_NAME == "Send019ToCoE&TSU") {
                document.MAINFORM.TSU_PO_INITIATOR.value = parent.SYS_getValueFromMain('TSU_OUR_ROLE');
            }
        }
        if (SYS_FUNCTION_TYPE == 'IQ') {
            TSU_NET_CCY();
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.Show_011 = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME != "tsmt.011.001.03A" && SYS_ORG_FUNCTION_SHORT_NAME != "tsmt.011.001.03B") {
            SYT_hideObj("011 Amount");
        } else {
            SYT_DisObj("011 Amount");
            SYT_hideObj("A_div");
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var vTSU_CCY; // Utility Auto Fix Comments
        vTSU_CCY = parent.SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_TTL_CCY.value = vTSU_CCY;
        document.MAINFORM.TSU_NET_CCY.value = vTSU_CCY;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.TSU_NET_CCY = function() {
    try {
        var TSU_CCY; // Utility Auto Fix Comments
        TSU_CCY = document.MAINFORM.TSU_CCY.value;
        document.MAINFORM.TSU_NET_CCY.value = TSU_CCY;
        document.MAINFORM.TSU_TTL_CCY.value = TSU_CCY;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.TSU_PO_ID = function() {
    try {
        document.MAINFORM.TSU_PO_ID.value = parent.SYS_getValueFromMain('TSU_PO_ID');
        parent.SYS_RefreshGrid();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.getChildsTSU_FRGHT_TPValue = function(node, recId) {
    try {
        var i; // Utility Auto Fix Comments
        var nFREIGHT; // Utility Auto Fix Comments
        var nLineitem_node; // Utility Auto Fix Comments
        var rlen; // Utility Auto Fix Comments
        if (SYS_DO_XPATH == "R2GoodsRe") {
            nLineitem_node = parent.SYS_getNodeByXpath('R2GoodsRe.R2LineItemDetails7');
        } else {
            nLineitem_node = parent.SYS_getNodeByXpath('R2Goods.R2LineItemDetails7');
        }
        records = parent.SYS_getRecords(nLineitem_node);

        rlen = records.length;
        for (i = 0; i < rlen; i++) {
            record = records[i];
            nFREIGHT = record.TSU_FRGHT_TP;

            if (nFREIGHT != '') {
                document.MAINFORM.TSU_FRGHT_TP.className = 'CHAR_P';
                break;
            } else {
                //document.MAINFORM.TSU_FRGHT_TP.className='CHAR_O';
                CheckCurrFreight(node, recId);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}

csDOScreenProto.TSU_CCY_onchange = function(event) {
    try {
        TSU_NET_CCY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Goods.js", e);
    }
}