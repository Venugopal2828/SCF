"path:SCRN/DO/R2TSU_DT_LineItem.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.FreightType = function(node, recId) {
    try {
        var tsuFrghtTp = "";
        tsuFrghtTp = SYS_getCurrNodeParentValue('R2DT_Goods', 'TSU_FRGHT_TP');
        if (node == null || (typeof node == "undefined")) {
            tsuFrghtTp = SYS_getCurrNodeParentValue('R2DT_Goods', 'TSU_FRGHT_TP');
        } else {
            var record = SYS_getParentRecord(node);
            tsuFrghtTp = record.TSU_FRGHT_TP;
        }

        if (tsuFrghtTp != '' && tsuFrghtTp != undefined) {
            document.MAINFORM.TSU_FRGHT_TP.className = 'CHAR_P';
        } else {
            document.MAINFORM.TSU_FRGHT_TP.className = 'CHAR_O';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        TSU_CCY();
        TSU_LNITMNB();
        TSU_UNTPRIC_OTUNIT();
        TSU_UNTPRIC_CD();
        TSU_QTY_OTUNIT();
        FreightType();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.OnSelected = function(node, recId) {
    try {
        var TsuQtyOtunit = document.MAINFORM.TSU_QTY_OTUNIT.value;
        if (TsuQtyOtunit != '') {
            document.MAINFORM.TSUR2_QTY_UNIT_CD.disp = "Other";
        }
        TSU_UNTPRIC_OTUNIT();
        TSU_UNTPRIC_CD();
        TSU_QTY_OTUNIT();
        FreightType(node, recId);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var mainccy = parent.SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_CCY.value = mainccy;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.TSU_LNITMNB = function() {
    try {
        var records = parent.SYS_getGrpDataByFldNm('TSU_LNITMNB');
        var maximum = 0;
        for (var i = 0; i < records.length; i++) {
            if (records[i] < records[i + 1]) {
                maximum = records[i + 1];
            } else {
                maximum = records[i];
            }
        }
        document.MAINFORM.TSU_LNITMNB.value = parseInt(maximum) + 1;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.TSU_QTY_OTUNIT = function() {
    try {
        var TSUR2_QTY_UNIT_CD = document.MAINFORM.TSUR2_QTY_UNIT_CD.options[document.MAINFORM.TSUR2_QTY_UNIT_CD.selectedIndex].text;
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
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.TSU_TTL_AMT = function() {
    try {
        var ccy = document.MAINFORM.TSU_CCY.value;
        var TSU_QTY_VAL = document.MAINFORM.TSU_QTY_VAL.value;
        var TSU_UNITPRIC_AMT = document.MAINFORM.TSU_UNITPRIC_AMT.value;
        var nAMT = SYS_BeFloat(TSU_QTY_VAL) * SYS_BeFloat(TSU_UNITPRIC_AMT);
        document.MAINFORM.TSU_TTL_AMT.value = SYT_CCY_AMT(ccy, nAMT);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.TSU_UNTPRIC_CD = function() {
    try {
        document.MAINFORM.TSUR2_UNTPRIC_CD.value = document.MAINFORM.TSUR2_QTY_UNIT_CD.value;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.TSU_UNTPRIC_OTUNIT = function() {
    try {
        document.MAINFORM.TSU_UNTPRIC_OTUNIT.value = document.MAINFORM.TSU_QTY_OTUNIT.value;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.TSUR2_QTY_UNIT_CD_onchange = function(event) {
    try {
        TSU_QTY_OTUNIT();
        TSU_UNTPRIC_CD();
        TSU_UNTPRIC_OTUNIT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.TSU_QTY_OTUNIT_onchange = function(event) {
    try {
        TSU_UNTPRIC_OTUNIT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.TSU_QTY_VAL_onchange = function(event) {
    try {
        TSU_TTL_AMT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}

csDOScreenProto.TSU_UNITPRIC_AMT_onchange = function(event) {
    try {
        TSU_TTL_AMT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_LineItem.js", e);
    }
}