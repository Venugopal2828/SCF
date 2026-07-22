"path:SCRN/DO/TSU_Freight_Chrgs.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.CheckAmt = function() {
    try {
        var TSU_IAFT_AMT; // Utility Auto Fix Comments
        var TSU_IAFT_RT; // Utility Auto Fix Comments
        var chec; // Utility Auto Fix Comments
        TSU_IAFT_AMT = document.MAINFORM.TSU_IAFT_AMT.value;
        TSU_IAFT_RT = document.MAINFORM.TSU_IAFT_RT.value;
        chec = document.getElementsByName("RadioGroup2");
        if (TSU_IAFT_AMT != 0) {
            SwitchDsplay(0);
            chec[0].checked = true;
        } else if (TSU_IAFT_RT != 0) {
            SwitchDsplay(1);
            chec[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.CheckChargTp = function() {
    try {
        var TSU_IAFT_OT_TP; // Utility Auto Fix Comments
        var TSU_IAFT_TP; // Utility Auto Fix Comments
        var ches; // Utility Auto Fix Comments
        TSU_IAFT_TP = document.MAINFORM.TSU_IAFT_TP.value;
        TSU_IAFT_OT_TP = document.MAINFORM.TSU_IAFT_OT_TP.value;
        ches = document.getElementsByName("RadioGroup1");
        if (TSU_IAFT_TP != '') {
            SwitchDsp(0);
            ches[0].checked = true;
        } else if (TSU_IAFT_OT_TP != '') {
            SwitchDsp(1);
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.DO_XPATH = function() {
    try {
        if (SYS_DO_XPATH == "R2Goods.FrghtChrgs") {
            document.MAINFORM.TSU_LNITMNB.value = 0;
            SYS_checkDoAdd('R2Goods.R2LineItemDetails7.FrghtChrgs');
        }
        if (SYS_DO_XPATH == "R2Goods.R2LineItemDetails7.FrghtChrgs") {
            SYS_checkDoAdd('R2Goods.FrghtChrgs');
        }
        if (SYS_DO_XPATH == "R2GoodsRe.FrghtChrgs") {
            document.MAINFORM.TSU_LNITMNB.value = 0;
            SYS_checkDoAdd('R2GoodsRe.R2LineItemDetails7.FrghtChrgs');
        }
        if (SYS_DO_XPATH == "R2GoodsRe.R2LineItemDetails7.FrghtChrgs") {
            SYS_checkDoAdd('R2GoodsRe.FrghtChrgs');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var TSU_UNITPRIC_AMT; // Utility Auto Fix Comments
        EEHtml.getElementById('RadioGroup0').checked = true;
        EEHtml.getElementById('RadioGroup2').checked = true;
        DO_XPATH();
        if (EEHtml.getElementById('RadioGroup0').checked == true) {
            SwitchDsp(0);
        }
        if (EEHtml.getElementById('RadioGroup2').checked == true) {
            SwitchDsplay(0);
        }
        if (SYS_DO_XPATH == "R2Goods.R2LineItemDetails7.FrghtChrgs" || SYS_DO_XPATH == "R2GoodsRe.R2LineItemDetails7.FrghtChrgs") {
            TSU_UNITPRIC_AMT = SYS_BeFloat(parent.SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_UNITPRIC_AMT'));
            if (TSU_UNITPRIC_AMT == 0 || TSU_UNITPRIC_AMT == null) {
                alert("Please input Unit Price in LineItem first");
            }
        }
        SYS_checkDoAdd('Goods.LineItemDetails4.LineItemFreightChg');
        TSU_CCY();
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        CheckChargTp();
        CheckAmt();
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.SwitchDsp = function(intType) {
    try {
        switch (intType) {
            case 0:
                EEHtml.getElementById("TSU_IAFT_OT_TP").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_TP, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_OT_TP, 'P', 'Y');
                break;
            case 1:
                EEHtml.getElementById("TSU_IAFT_TP").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_TP, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_OT_TP, 'M', 'Y');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.SwitchDsplay = function(intTp) {
    try {
        switch (intTp) {
            case 0:

                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_AMT, 'M', 'N');
                EEHtml.getElementById("TSU_IAFT_RT").value = "0";
                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_RT, 'P', 'N');
                break;
            case 1:
                EEHtml.getElementById("TSU_IAFT_AMT").value = "0";
                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_AMT, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_RT, 'M', 'N');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var MainCCY; // Utility Auto Fix Comments
        MainCCY = parent.SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_CCY.value = MainCCY;
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.TSU_IAFT_AMT = function() {
    try {
        var obj; // Utility Auto Fix Comments
        obj = EEHtml.getElementById('RadioGroup2').checked;
        if (obj == true) {
            document.MAINFORM.TSU_IAFT_AMT_CAL.value = document.MAINFORM.TSU_IAFT_AMT.value;
            document.MAINFORM.TSU_IAFT_RT.value = '0';

        }
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.TSU_IAFT_RT_AMT = function() {
    try {
        var absnLineTMAMT; // Utility Auto Fix Comments
        var absnLineTMAMT_LR2; // Utility Auto Fix Comments
        var absnLineTMAMT_R2; // Utility Auto Fix Comments
        var fRate; // Utility Auto Fix Comments
        var n1LineTMAMT; // Utility Auto Fix Comments
        var n1LineTMAMT_R2; // Utility Auto Fix Comments
        var nAdjust; // Utility Auto Fix Comments
        var nAdjust_R2; // Utility Auto Fix Comments
        var nLineTMAMT; // Utility Auto Fix Comments
        var nLineTMAMT_LR2; // Utility Auto Fix Comments
        var nLineTMAMT_R2; // Utility Auto Fix Comments
        var nTSU_QTY_VAL; // Utility Auto Fix Comments
        var nTSU_UNITPRIC_AMT; // Utility Auto Fix Comments
        var obj; // Utility Auto Fix Comments
        obj = EEHtml.getElementById('RadioGroup3').checked;
        if (obj == true) {
            if (SYS_DO_XPATH == "Goods.FrghtChrgs") {
                n1LineTMAMT = parent.SYS_getCurrNodeParentValue('Goods', 'TSU_LINE_TTL_AMT');
                nAdjust = parent.SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'Goods.Adjustmtents');
                nLineTMAMT = SYS_BeFloat(n1LineTMAMT) + SYS_BeFloat(nAdjust);
                absnLineTMAMT = Math.abs(SYS_BeFloat(nLineTMAMT));
                document.MAINFORM.TSU_IAFT_AMT.value = 0;
                fRate = Math.abs(document.MAINFORM.TSU_IAFT_RT.value);
                document.MAINFORM.TSU_IAFT_AMT_CAL.value = SYS_BeFloat(fRate / 100) * absnLineTMAMT;
            }
            //FOR R2 GOODS_FREIGHT
            else if (SYS_DO_XPATH == "R2Goods.FrghtChrgs") {
                n1LineTMAMT_R2 = parent.SYS_getCurrNodeParentValue('R2Goods', 'TSU_LINE_TTL_AMT');
                nAdjust_R2 = parent.SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.Adjustmtents');
                nLineTMAMT_R2 = SYS_BeFloat(n1LineTMAMT_R2) + SYS_BeFloat(nAdjust_R2);
                absnLineTMAMT_R2 = Math.abs(SYS_BeFloat(nLineTMAMT_R2));
                document.MAINFORM.TSU_IAFT_AMT.value = 0;
                fRate = Math.abs(document.MAINFORM.TSU_IAFT_RT.value);
                document.MAINFORM.TSU_IAFT_AMT_CAL.value = SYS_BeFloat(fRate / 100) * absnLineTMAMT_R2;

            } else if (SYS_DO_XPATH == "R2GoodsRe.FrghtChrgs") {
                n1LineTMAMT_R2 = parent.SYS_getCurrNodeParentValue('R2GoodsRe', 'TSU_LINE_TTL_AMT'); // Utility Auto Fix Comments
                nAdjust_R2 = parent.SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2GoodsRe.Adjustmtents'); // Utility Auto Fix Comments
                nLineTMAMT_R2 = SYS_BeFloat(n1LineTMAMT_R2) + SYS_BeFloat(nAdjust_R2); // Utility Auto Fix Comments
                absnLineTMAMT_R2 = Math.abs(SYS_BeFloat(nLineTMAMT_R2)); // Utility Auto Fix Comments
                document.MAINFORM.TSU_IAFT_AMT.value = 0;
                fRate = Math.abs(document.MAINFORM.TSU_IAFT_RT.value);
                document.MAINFORM.TSU_IAFT_AMT_CAL.value = SYS_BeFloat(fRate / 100) * absnLineTMAMT_R2;
            }
            // FOR R2 GOODS_LINE_FREIGHT
            else if (SYS_DO_XPATH == "R2Goods.R2LineItemDetails7.FrghtChrgs") {
                nTSU_QTY_VAL = SYS_BeFloat(parent.SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_QTY_VAL'));
                nTSU_UNITPRIC_AMT = SYS_BeFloat(parent.SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_UNITPRIC_AMT'));
                nLineTMAMT_LR2 = nTSU_QTY_VAL * nTSU_UNITPRIC_AMT;
                nAdjust_R2 = parent.SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.R2LineItemDetails7.Adjustmtents');
                nLineTMAMT = SYS_BeFloat(nLineTMAMT_LR2) + SYS_BeFloat(nAdjust_R2); // Utility Auto Fix Comments
                absnLineTMAMT_LR2 = Math.abs(SYS_BeFloat(nLineTMAMT));
                document.MAINFORM.TSU_IAFT_AMT.value = '0';
                fRate = Math.abs(document.MAINFORM.TSU_IAFT_RT.value);
                document.MAINFORM.TSU_IAFT_AMT_CAL.value = SYS_BeFloat(fRate / 100) * absnLineTMAMT_LR2;
            } else if (SYS_DO_XPATH == "R2GoodsRe.R2LineItemDetails7.FrghtChrgs") {
                nTSU_QTY_VAL = SYS_BeFloat(parent.SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_QTY_VAL')); // Utility Auto Fix Comments
                nTSU_UNITPRIC_AMT = SYS_BeFloat(parent.SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_UNITPRIC_AMT')); // Utility Auto Fix Comments
                nLineTMAMT_LR2 = nTSU_QTY_VAL * nTSU_UNITPRIC_AMT; // Utility Auto Fix Comments
                nAdjust_R2 = parent.SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2GoodsRe.R2LineItemDetails7.Adjustmtents');
                nLineTMAMT = SYS_BeFloat(nLineTMAMT_LR2) + SYS_BeFloat(nAdjust_R2);
                absnLineTMAMT_LR2 = Math.abs(SYS_BeFloat(nLineTMAMT)); // Utility Auto Fix Comments
                document.MAINFORM.TSU_IAFT_AMT.value = '0';
                fRate = Math.abs(document.MAINFORM.TSU_IAFT_RT.value);
                document.MAINFORM.TSU_IAFT_AMT_CAL.value = SYS_BeFloat(fRate / 100) * absnLineTMAMT_LR2;
            }

        }
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.TSU_IAFT_AMT_onchange = function(event) {
    try {
        TSU_IAFT_AMT();
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}

csDOScreenProto.TSU_IAFT_RT_onchange = function(event) {
    try {
        TSU_IAFT_RT_AMT();
    } catch (e) {
        DisExcpt("SSSS_TSU_Freight_Chrgs.js", e);
    }
}