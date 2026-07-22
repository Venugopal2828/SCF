"path:SCRN/DO/R2TSU_DTGoods.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DTGoods.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DTGoods.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DTGoods.js", e);
    }
}

csDOScreenProto.Enquire_PO = function() {
    try {
        /*var SQL;// Utility Auto Fix Comments
//Enquire the actv,estd POS ordered by the buyer,seller 
        document.MAINFORM.TSU_COMM_REF.value = '';
        SQL = "(TSUR2_TRX_STATUS=\'ACTV\' OR TSUR2_TRX_STATUS=\'ESTD\') AND TSU_SEL_NM='" + encodeURIComponent(document.MAINFORM.TSU_SEL_NM.value) + "' AND TSU_BUYER_NM='" + encodeURIComponent(document.MAINFORM.TSU_BUYER_NM.value) + "'";;
        SYS_InqCUBK_Sql('TSU_PO_ID_GET1', SQL);*/
        SYS_InqCUBK_byCondition('TSU_PO_ID_GET1', '1');
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DTGoods.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        TSU_CCY();
        document.MAINFORM.TSU_BUYER_NM.value = parent.SYS_getValueFromMain('TSU_BUYER_NM');
        document.MAINFORM.TSU_SEL_NM.value = parent.SYS_getValueFromMain('TSU_SEL_NM');
        TSU_PO_ID();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DTGoods.js", e);
    }
}

csDOScreenProto.OnSelected = function(node, recId) {
    try {
        var ccy; // Utility Auto Fix Comments
        getChildsFreightTPValue();
        ccy = parent.SYS_getCurrDoScreenValue("TSU_CCY");
        document.MAINFORM.TSU_CCY_EXT.value = ccy;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DTGoods.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.TSU_SEL_NM.value = parent.SYS_getValueFromMain('TSU_SEL_NM');
        document.MAINFORM.TSU_BUYER_NM.value = parent.SYS_getValueFromMain('TSU_BUYER_NM');

    } catch (e) {
        DisExcpt("SSSS_R2TSU_DTGoods.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var mainccy; // Utility Auto Fix Comments
        mainccy = parent.SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_CCY.value = mainccy;
        document.MAINFORM.TSU_CCY_EXT.value = mainccy;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DTGoods.js", e);
    }
}

csDOScreenProto.TSU_PO_ID = function() {
    try {
        var vTSU_PO_ID; // Utility Auto Fix Comments
        vTSU_PO_ID = document.MAINFORM.TSU_PO_ID.value;
        vTSU_PO_ID = "%" + vTSU_PO_ID + "%";
        parent.SYS_setValueToMain("TSU_PO_ID_TEMP", vTSU_PO_ID.toLowerCase());
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DTGoods.js", e);
    }
}

csDOScreenProto.getChildsFreightTPValue = function(node, recId) {
    try {
        var childPath; // Utility Auto Fix Comments
        var curChildDo; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var nFREIGHT; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var rlen; // Utility Auto Fix Comments
        childPath = "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.R2DT_ComrclLineItms";
        curChildDo = parent.SYS_getChildDo(node, recId, "R2DT_ComrclLineItms");
        records = parent.SYS_getRecords(curChildDo);

        rlen = records.length;
        document.MAINFORM.TSU_FRGHT_TP.className = 'CHAR_O';
        for (i = 0; i < rlen; i++) { // Utility Auto Fix Comments
            record = records[i];
            nFREIGHT = record.TSU_FRGHT_TP;

            if (nFREIGHT != '') {
                document.MAINFORM.TSU_FRGHT_TP.className = 'CHAR_P';
                break;
            } else {
                document.MAINFORM.TSU_FRGHT_TP.className = 'CHAR_O';

            }
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DTGoods.js", e);
    }
}

csDOScreenProto.TSU_PO_ID_onchange = function(event) {
    try {
        TSU_PO_ID();
        notshowError = true;
        SYS_GetCUBK('TSU_PO_ID_GET1', 'TSU_PO_ID', '', '', notshowError);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DTGoods.js", e);
    }
}