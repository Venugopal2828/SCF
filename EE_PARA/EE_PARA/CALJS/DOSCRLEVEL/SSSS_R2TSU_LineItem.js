"path:SCRN/DO/R2TSU_LineItem.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.CheckCurrFreight = function() {
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
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.FreightType = function() {
    try {
        var Freight; // Utility Auto Fix Comments
        Freight = null;
        if (SYS_DO_XPATH == "R2GoodsRe.R2LineItemDetails7") {
            Freight = parent.SYS_getCurrNodeParentValue('R2GoodsRe', 'TSU_FRGHT_TP');
        } else {
            Freight = parent.SYS_getCurrNodeParentValue('R2Goods', 'TSU_FRGHT_TP');
        }
        if (Freight != '' && Freight != undefined) {
            SYT_ChangeFldClass(document.MAINFORM.TSU_FRGHT_TP, 'P', 'N');
        } else {
            CheckCurrFreight();
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        Show_011();
        TSU_QTY_OTUNIT();
        TSUR2_UNTPRIC_CD();
        TSU_UNTPRIC_OTUNIT();
        FreightType();
        TSU_CCY();
        TSU_LNITMNB();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.OnSelected = function(node, recId) {
    try {
        var TsuQtyOtunit; // Utility Auto Fix Comments
        Show_011();
        TsuQtyOtunit = document.MAINFORM.TSU_QTY_OTUNIT.value;
        //Modify by hattie on 2014/03/17;
        if (TsuQtyOtunit != '') {
            document.MAINFORM.TSU_QTY_OTUNIT.className = 'CHAR_M';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.className = 'CHAR_O';
            document.MAINFORM.TSU_QTY_OTUNIT.style.visibility = "visible";
        }
        TSU_UNTPRIC_OTUNIT();
        //TSUR2_UNTPRIC_CD();
        //TSU_QTY_OTUNIT();
        //Modify end;
        TSU_CCY();
        FreightType();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.Show_011 = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME != "tsmt.011.001.03A" && SYS_ORG_FUNCTION_SHORT_NAME != "tsmt.011.001.03B" && SYS_ORG_FUNCTION_SHORT_NAME != "tsmt.011.001.03C") {
            SYT_hideObj("011 Amount");

        } else {
            SYT_DisObj("011 Amount");
            SYT_hideObj("A_div");
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.TSUR2_UNTPRIC_CD = function() {
    try {
        //document.MAINFORM.TSUR2_UNTPRIC_CD.value =document.MAINFORM.TSUR2_QTY_UNIT_CD.value;
        if (document.MAINFORM.TSUR2_QTY_UNIT_CD.value == '1') {
            document.MAINFORM.TSUR2_UNTPRIC_CD.value = '';
        } else {
            document.MAINFORM.TSUR2_UNTPRIC_CD.value = document.MAINFORM.TSUR2_QTY_UNIT_CD.value;
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var vTSU_CCY; // Utility Auto Fix Comments
        if (SYS_DO_XPATH == "R2GoodsRe.R2LineItemDetails7") {
            vTSU_CCY = parent.SYS_getCurrNodeParentValue('R2GoodsRe', 'TSU_CCY');
        } else {
            vTSU_CCY = parent.SYS_getCurrNodeParentValue('R2Goods', 'TSU_CCY'); // Utility Auto Fix Comments
        }
        document.MAINFORM.TSU_NET_CCY.value = vTSU_CCY;
        document.MAINFORM.TSU_CCY.value = vTSU_CCY;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.TSU_LNITMNB = function() {
    try {
        var i; // Utility Auto Fix Comments
        var maximum; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        records = parent.SYS_getGrpDataByFldNm('TSU_LNITMNB');
        maximum = 0;
        for (i = 0; i < records.length; i++) { // Utility Auto Fix Comments
            if (records[i] < records[i + 1]) {
                maximum = records[i + 1];
            } else {
                maximum = records[i];
            }
        }
        document.MAINFORM.TSU_LNITMNB.value = parseInt(maximum, 0) + 1;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.TSU_QTY_OTUNIT = function() {
    try {
        var TSUR2_QTY_UNIT_CD; // Utility Auto Fix Comments
        TSUR2_QTY_UNIT_CD = document.MAINFORM.TSUR2_QTY_UNIT_CD.options[document.MAINFORM.TSUR2_QTY_UNIT_CD.selectedIndex].text;
        if (TSUR2_QTY_UNIT_CD == 'Other') {
            document.MAINFORM.TSU_QTY_OTUNIT.className = 'CHAR_M';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.className = 'CHAR_O';
            document.MAINFORM.TSU_QTY_OTUNIT.style.visibility = "visible";
            document.MAINFORM.TSUR2_QTY_UNIT_CD.value = '';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.disp = 'Other';
        } else {
            document.MAINFORM.TSU_QTY_OTUNIT.className = 'CHAR_O';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.className = 'CHAR_M';
            document.MAINFORM.TSU_QTY_OTUNIT.style.visibility = "hidden";
            document.MAINFORM.TSU_QTY_OTUNIT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.TSU_TTL_AMT = function() {
    try {
        var TSU_QTY_VAL; // Utility Auto Fix Comments
        var TSU_UNITPRIC_AMT; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var nAMT; // Utility Auto Fix Comments
        ccy = document.MAINFORM.TSU_NET_CCY.value;
        TSU_QTY_VAL = document.MAINFORM.TSU_QTY_VAL.value;
        TSU_UNITPRIC_AMT = document.MAINFORM.TSU_UNITPRIC_AMT.value;
        nAMT = SYS_BeFloat(TSU_QTY_VAL) * SYS_BeFloat(TSU_UNITPRIC_AMT);
        document.MAINFORM.TSU_TTL_AMT.value = SYT_CCY_AMT(ccy, nAMT);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.TSU_UNTPRIC_OTUNIT = function() {
    try {
        document.MAINFORM.TSU_UNTPRIC_OTUNIT.value = document.MAINFORM.TSU_QTY_OTUNIT.value;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.TSUR2_QTY_UNIT_CD_onchange = function(event) {
    try {
        TSUR2_UNTPRIC_CD();
        TSU_QTY_OTUNIT();
        TSU_UNTPRIC_OTUNIT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.TSU_QTY_OTUNIT_onchange = function(event) {
    try {
        TSU_UNTPRIC_OTUNIT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.TSU_QTY_VAL_onchange = function(event) {
    try {
        TSU_TTL_AMT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}

csDOScreenProto.TSU_UNITPRIC_AMT_onchange = function(event) {
    try {
        TSU_TTL_AMT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem.js", e);
    }
}