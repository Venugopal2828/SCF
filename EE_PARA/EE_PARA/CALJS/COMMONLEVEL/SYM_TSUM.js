function SYM_TSUM_OnAfterGetData(node) {
    try {

        //moved from SYF_TSUM_R2DataSetSubmission_DO.js ---2009-7-30
        var doName = SYS_getDoName(node);
        if (doName == "R2DT_Goods") {
            var sum_TSU_TTL_NET_AMT = SYS_getFieldSumValue(node, 'TSU_TTL_NET_AMT');

            var pNode = SYS_getParentDo(node);
            pRecord = SYS_getParentRecord(node);
            precorId = pRecord.recordID;
            SYS_setFieldValue(pNode, precorId, "TSU_COMM_AMT", sum_TSU_TTL_NET_AMT);

            Record = SYS_getParentRecord(node);
            var TSU_COMM_REF = Record.TSU_COMM_REF;

            records = SYS_getRecords(node);
            var rlen = records.length;
            for (var i = 0; i < rlen; i++) {
                record = records[i];
                recordId = record.recordID;
                SYS_setFieldValue(node, recordId, "TSU_COMM_REF", TSU_COMM_REF);
            }
        } else if (doName == "R2DT_ComrclDocRef") {
            var mainccy = SYS_getCurrDoScreenValue("TSU_CCY");
            SYS_setValueToMain("TSU_CCY", mainccy);

            var TSU_BYRBK_ID = SYS_getCurrDoScreenValue("TSU_BYRBK_ID");
            SYS_setValueToMain("TSU_BYRBK_ID", TSU_BYRBK_ID);
            var TSU_BYRBK_BIC = SYS_getCurrDoScreenValue("TSU_BYRBK_BIC");
            SYS_setValueToMain("TSU_BYRBK_BIC", TSU_BYRBK_BIC);
            var TSU_BYRBK_NAME = SYS_getCurrDoScreenValue("TSU_BYRBK_NAME");
            SYS_setValueToMain("TSU_BYRBK_NAME", TSU_BYRBK_NAME);

            var TSU_SELLRBK_ID = SYS_getCurrDoScreenValue("TSU_SELLRBK_ID");
            SYS_setValueToMain("TSU_SELLRBK_ID", TSU_SELLRBK_ID);
            var TSU_SELLRBK_BIC = SYS_getCurrDoScreenValue("TSU_SELLRBK_BIC");
            SYS_setValueToMain("TSU_SELLRBK_BIC", TSU_SELLRBK_BIC);
            var TSU_SELLRBK_NAME = SYS_getCurrDoScreenValue("TSU_SELLRBK_NAME");
            SYS_setValueToMain("TSU_SELLRBK_NAME", TSU_SELLRBK_NAME);
            SYS_RefreshGrid();
        }
        //moved from SYF_TSUM_R2DataSetSubmission_DO.js ---2009-7-30
    } catch (e) {
        DisExcpt("SYM_TSUM.js", e);
    }
}

function SYM_TSUM_RecalFreiTax(node) {
    try {

        var gridId = DoFrame.tree.getPropertyValue(node, 'gridIndex');
        var curFrame = DoFrame.main.getSelectedFrame(gridId);
        var SYS_DO_XPATH = curFrame.SYS_DO_XPATH;
        if (SYS_DO_XPATH == "R2Goods.R2LineItemDetails7.Adjustmtents") {
            var nTSU_QTY_VAL = SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_QTY_VAL');
            var nTSU_UNITPRIC_AMT = SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_UNITPRIC_AMT');
            var nAMT = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);
            var TSU_IAFT_AMT_CAL_sum = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');

            var nFreight_node = SYS_getBrotherDo(node, 'FrghtChrgs');
            var gridIdx_F = DoFrame.tree.getPropertyValue(nFreight_node, 'gridIndex');
            if (gridIdx_F != "-1") {
                var records_F = DoFrame.main.getRecords(gridIdx_F);
                var record_F;
                for (var i = 0; i < records_F.length; i++) {
                    record_F = records_F[i];
                    var recorId_F = record_F.recordID;
                    var TSU_IAFT_AMT = record_F["TSU_IAFT_AMT"];
                    var TSU_IAFT_AMT_CAL_F;
                    if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                        var TSU_IAFT_RT = record_F["TSU_IAFT_RT"];
                        TSU_IAFT_AMT_CAL_F = (nAMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;
                    } else {
                        TSU_IAFT_AMT_CAL_F = TSU_IAFT_AMT;
                    }
                    SYS_setFieldValue(nFreight_node, recorId_F, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_F);
                }
            }
            var nTax_node = SYS_getBrotherDo(node, 'Tax3');
            var gridIdx_T = DoFrame.tree.getPropertyValue(nTax_node, 'gridIndex');
            if (gridIdx_T != "-1") {
                var records_T = DoFrame.main.getRecords(gridIdx_T);
                var record_T;
                for (var i = 0; i < records_T.length; i++) {
                    record_T = records_T[i];
                    var recorId_T = record_T.recordID;
                    var TSU_IAFT_AMT = record_T["TSU_IAFT_AMT"];
                    var TSU_IAFT_AMT_CAL_T;
                    if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                        var TSU_IAFT_RT = record_T["TSU_IAFT_RT"];
                        TSU_IAFT_AMT_CAL_T = (nAMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;

                    } else {
                        TSU_IAFT_AMT_CAL_T = TSU_IAFT_AMT;
                    }
                    SYS_setFieldValue(nTax_node, recorId_T, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_T);
                }
            }
        }
        if (SYS_DO_XPATH == "R2Goods.Adjustmtents") {
            var nTSU_LINE_TTL_AMT = SYS_getCurrNodeParentValue('R2Goods', 'TSU_LINE_TTL_AMT');
            nTSU_LINE_TTL_AMT = SYS_BeFloat(nTSU_LINE_TTL_AMT);
            var TSU_IAFT_AMT_CAL_sum = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            var nFreight_node = SYS_getBrotherDo(node, 'FrghtChrgs');
            var gridIdx_F = DoFrame.tree.getPropertyValue(nFreight_node, 'gridIndex');
            if (gridIdx_F != "-1") {
                var records_F = DoFrame.main.getRecords(gridIdx_F);
                var record_F;
                for (var i = 0; i < records_F.length; i++) {
                    record_F = records_F[i];
                    var recorId_F = record_F.recordID;
                    var TSU_IAFT_AMT = record_F["TSU_IAFT_AMT"];
                    var TSU_IAFT_AMT_CAL_F;
                    if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                        var TSU_IAFT_RT = record_F["TSU_IAFT_RT"];
                        TSU_IAFT_AMT_CAL_F = (nTSU_LINE_TTL_AMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;
                    } else {
                        TSU_IAFT_AMT_CAL_F = TSU_IAFT_AMT;
                    }
                    SYS_setFieldValue(nFreight_node, recorId_F, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_F);
                }
            }
            var nTax_node = SYS_getBrotherDo(node, 'Tax3');
            var gridIdx_T = DoFrame.tree.getPropertyValue(nTax_node, 'gridIndex');
            if (gridIdx_T != "-1") {
                var records_T = DoFrame.main.getRecords(gridIdx_T);
                var record_T;
                for (var i = 0; i < records_T.length; i++) {
                    record_T = records_T[i];
                    var recorId_T = record_T.recordID;
                    var TSU_IAFT_AMT = record_T["TSU_IAFT_AMT"];
                    var TSU_IAFT_AMT_CAL_T;
                    if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                        var TSU_IAFT_RT = record_T["TSU_IAFT_RT"];
                        TSU_IAFT_AMT_CAL_T = (nTSU_LINE_TTL_AMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;
                    } else {
                        TSU_IAFT_AMT_CAL_T = TSU_IAFT_AMT;
                    }
                    SYS_setFieldValue(nTax_node, recorId_T, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_T);
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_TSUM.js", e);
    }
}

function SYM_TSUM_RecalAdjustTaxFreiW(node) {
    try {

        var nTSU_LINE_TTL_AMT = SYS_getCurrNodeParentValue('R2Goods', 'TSU_LINE_TTL_AMT');
        nTSU_LINE_TTL_AMT = SYS_BeFloat(nTSU_LINE_TTL_AMT);
        var TSU_IAFT_AMT_CAL_sum = 0;
        var ParentNode = SYS_getParentDo(node);
        var nAdjust_node = SYS_getBrotherDo(ParentNode, 'Adjustmtents');
        var gridIdx_A = DoFrame.tree.getPropertyValue(nAdjust_node, 'gridIndex');
        if (gridIdx_A != "-1") {
            var records_A = DoFrame.main.getRecords(gridIdx_A);
            var record_A;
            for (var i = 0; i < records_A.length; i++) {
                record_A = records_A[i];
                var recorId_A = record_A.recordID;
                var TSU_IAFT_AMT = record_A["TSU_IAFT_AMT"];
                var drctn = record_A["TSU_ADJUST_DRCTN"];
                var TSU_IAFT_RT = record_A["TSU_IAFT_RT"];
                var TSU_IAFT_AMT_CAL_A;
                if ("ADDD" == drctn) {
                    TSU_IAFT_AMT_CAL_A = SYS_BeFloat(TSU_IAFT_AMT) + nTSU_LINE_TTL_AMT * SYS_BeFloat(TSU_IAFT_RT) / 100;
                } else if ("SUBS" == drctn) {
                    TSU_IAFT_AMT_CAL_A = -SYS_BeFloat(TSU_IAFT_AMT) - nTSU_LINE_TTL_AMT * SYS_BeFloat(TSU_IAFT_RT) / 100;
                }
                SYS_setFieldValue(nAdjust_node, recorId_A, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_A);
            }
            TSU_IAFT_AMT_CAL_sum = SYS_getFieldSumValue(nAdjust_node, 'TSU_IAFT_AMT_CAL');
        }

        var nTax_node = SYS_getBrotherDo(ParentNode, 'Tax3');
        var gridIdx_T = DoFrame.tree.getPropertyValue(nTax_node, 'gridIndex');
        if (gridIdx_T != "-1") {
            var records_T = DoFrame.main.getRecords(gridIdx_T);
            var record_T;
            for (var i = 0; i < records_T.length; i++) {
                record_T = records_T[i];
                var recorId_T = record_T.recordID;
                var TSU_IAFT_AMT = record_T["TSU_IAFT_AMT"];
                var TSU_IAFT_RT = record_T["TSU_IAFT_RT"];
                var TSU_IAFT_AMT_CAL_T;
                if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                    TSU_IAFT_AMT_CAL_T = (nTSU_LINE_TTL_AMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;
                } else {
                    TSU_IAFT_AMT_CAL_T = TSU_IAFT_AMT;
                }
                SYS_setFieldValue(nTax_node, recorId_T, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_T);
            }
        }
        var nFreight_node = SYS_getBrotherDo(ParentNode, 'FrghtChrgs');
        var gridIdx_F = DoFrame.tree.getPropertyValue(nFreight_node, 'gridIndex');
        if (gridIdx_F != "-1") {
            var records_F = DoFrame.main.getRecords(gridIdx_F);
            var record_F;
            for (var i = 0; i < records_F.length; i++) {
                record_F = records_F[i];
                var recorId_F = record_F.recordID;
                var TSU_IAFT_AMT = record_F["TSU_IAFT_AMT"];
                var TSU_IAFT_RT = record_F["TSU_IAFT_RT"];
                var TSU_IAFT_AMT_CAL_F;
                if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                    TSU_IAFT_AMT_CAL_F = (nTSU_LINE_TTL_AMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;
                } else {
                    TSU_IAFT_AMT_CAL_F = TSU_IAFT_AMT;
                }
                SYS_setFieldValue(nFreight_node, recorId_F, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_F);
            }
        }
    } catch (e) {
        DisExcpt("SYM_TSUM.js", e);
    }
}

function SYM_TSUM_RecalFreiTaxRe(node) {
    try {

        var gridId = DoFrame.tree.getPropertyValue(node, 'gridIndex');
        var curFrame = DoFrame.main.getSelectedFrame(gridId);
        var SYS_DO_XPATH = curFrame.SYS_DO_XPATH;
        if (SYS_DO_XPATH == "R2GoodsRe.R2LineItemDetails7.Adjustmtents") {
            var nTSU_QTY_VAL = SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_QTY_VAL');
            var nTSU_UNITPRIC_AMT = SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_UNITPRIC_AMT');
            var nAMT = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);
            var TSU_IAFT_AMT_CAL_sum = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');

            var nFreight_node = SYS_getBrotherDo(node, 'FrghtChrgs');
            var gridIdx_F = DoFrame.tree.getPropertyValue(nFreight_node, 'gridIndex');
            if (gridIdx_F != "-1") {
                var records_F = DoFrame.main.getRecords(gridIdx_F);
                var record_F;
                for (var i = 0; i < records_F.length; i++) {
                    record_F = records_F[i];
                    var recorId_F = record_F.recordID;
                    var TSU_IAFT_AMT = record_F["TSU_IAFT_AMT"];
                    var TSU_IAFT_AMT_CAL_F;
                    if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                        var TSU_IAFT_RT = record_F["TSU_IAFT_RT"];
                        TSU_IAFT_AMT_CAL_F = (nAMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;
                    } else {
                        TSU_IAFT_AMT_CAL_F = TSU_IAFT_AMT;
                    }
                    SYS_setFieldValue(nFreight_node, recorId_F, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_F);
                }
            }
            var nTax_node = SYS_getBrotherDo(node, 'Tax3');
            var gridIdx_T = DoFrame.tree.getPropertyValue(nTax_node, 'gridIndex');
            if (gridIdx_T != "-1") {
                var records_T = DoFrame.main.getRecords(gridIdx_T);
                var record_T;
                for (var i = 0; i < records_T.length; i++) {
                    record_T = records_T[i];
                    var recorId_T = record_T.recordID;
                    var TSU_IAFT_AMT = record_T["TSU_IAFT_AMT"];
                    var TSU_IAFT_AMT_CAL_T;
                    if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                        var TSU_IAFT_RT = record_T["TSU_IAFT_RT"];
                        TSU_IAFT_AMT_CAL_T = (nAMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;
                    } else {
                        TSU_IAFT_AMT_CAL_T = TSU_IAFT_AMT;
                    }
                    SYS_setFieldValue(nTax_node, recorId_T, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_T);
                }
            }
        }
        if (SYS_DO_XPATH == "R2GoodsRe.Adjustmtents") {
            var nTSU_LINE_TTL_AMT = SYS_getCurrNodeParentValue('R2GoodsRe', 'TSU_LINE_TTL_AMT');
            nTSU_LINE_TTL_AMT = SYS_BeFloat(nTSU_LINE_TTL_AMT);
            var TSU_IAFT_AMT_CAL_sum = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            var nFreight_node = SYS_getBrotherDo(node, 'FrghtChrgs');
            var gridIdx_F = DoFrame.tree.getPropertyValue(nFreight_node, 'gridIndex');
            if (gridIdx_F != "-1") {
                var records_F = DoFrame.main.getRecords(gridIdx_F);
                var record_F;
                for (var i = 0; i < records_F.length; i++) {
                    record_F = records_F[i];
                    var recorId_F = record_F.recordID;
                    var TSU_IAFT_AMT = record_F["TSU_IAFT_AMT"];
                    var TSU_IAFT_AMT_CAL_F;
                    if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                        var TSU_IAFT_RT = record_F["TSU_IAFT_RT"];
                        TSU_IAFT_AMT_CAL_F = (nTSU_LINE_TTL_AMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;
                    } else {
                        TSU_IAFT_AMT_CAL_F = TSU_IAFT_AMT;
                    }
                    SYS_setFieldValue(nFreight_node, recorId_F, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_F);
                }
            }
            var nTax_node = SYS_getBrotherDo(node, 'Tax3');
            var gridIdx_T = DoFrame.tree.getPropertyValue(nTax_node, 'gridIndex');
            if (gridIdx_T != "-1") {
                var records_T = DoFrame.main.getRecords(gridIdx_T);
                var record_T;
                for (var i = 0; i < records_T.length; i++) {
                    record_T = records_T[i];
                    var recorId_T = record_T.recordID;
                    var TSU_IAFT_AMT = record_T["TSU_IAFT_AMT"];
                    var TSU_IAFT_AMT_CAL_T;
                    if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                        var TSU_IAFT_RT = record_T["TSU_IAFT_RT"];
                        TSU_IAFT_AMT_CAL_T = (nTSU_LINE_TTL_AMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;
                    } else {
                        TSU_IAFT_AMT_CAL_T = TSU_IAFT_AMT;
                    }
                    SYS_setFieldValue(nTax_node, recorId_T, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_T);
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_TSUM.js", e);
    }
}

function SYM_TSUM_RecalAdjustTaxFreiWRe(node) {
    try {

        var nTSU_LINE_TTL_AMT = SYS_getCurrNodeParentValue('R2GoodsRe', 'TSU_LINE_TTL_AMT');
        nTSU_LINE_TTL_AMT = SYS_BeFloat(nTSU_LINE_TTL_AMT);
        var TSU_IAFT_AMT_CAL_sum = 0;
        var ParentNode = SYS_getParentDo(node);
        var nAdjust_node = SYS_getBrotherDo(ParentNode, 'Adjustmtents');
        var gridIdx_A = DoFrame.tree.getPropertyValue(nAdjust_node, 'gridIndex');
        if (gridIdx_A != "-1") {
            var records_A = DoFrame.main.getRecords(gridIdx_A);
            var record_A;
            for (var i = 0; i < records_A.length; i++) {
                record_A = records_A[i];
                var recorId_A = record_A.recordID;
                var TSU_IAFT_AMT = record_A["TSU_IAFT_AMT"];
                var drctn = record_A["TSU_ADJUST_DRCTN"];
                var TSU_IAFT_RT = record_A["TSU_IAFT_RT"];
                var TSU_IAFT_AMT_CAL_A;
                if ("ADDD" == drctn) {
                    TSU_IAFT_AMT_CAL_A = SYS_BeFloat(TSU_IAFT_AMT) + nTSU_LINE_TTL_AMT * SYS_BeFloat(TSU_IAFT_RT) / 100;
                } else if ("SUBS" == drctn) {
                    TSU_IAFT_AMT_CAL_A = -SYS_BeFloat(TSU_IAFT_AMT) - nTSU_LINE_TTL_AMT * SYS_BeFloat(TSU_IAFT_RT) / 100;
                }
                SYS_setFieldValue(nAdjust_node, recorId_A, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_A);
            }
            TSU_IAFT_AMT_CAL_sum = SYS_getFieldSumValue(nAdjust_node, 'TSU_IAFT_AMT_CAL');
        }

        var nTax_node = SYS_getBrotherDo(ParentNode, 'Tax3');
        var gridIdx_T = DoFrame.tree.getPropertyValue(nTax_node, 'gridIndex');
        if (gridIdx_T != "-1") {
            var records_T = DoFrame.main.getRecords(gridIdx_T);
            var record_T;
            for (var i = 0; i < records_T.length; i++) {
                record_T = records_T[i];
                var recorId_T = record_T.recordID;
                var TSU_IAFT_AMT = record_T["TSU_IAFT_AMT"];
                var TSU_IAFT_RT = record_T["TSU_IAFT_RT"];
                var TSU_IAFT_AMT_CAL_T;
                if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                    TSU_IAFT_AMT_CAL_T = (nTSU_LINE_TTL_AMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;
                } else {
                    TSU_IAFT_AMT_CAL_T = TSU_IAFT_AMT;
                }
                SYS_setFieldValue(nTax_node, recorId_T, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_T);
            }
        }
        var nFreight_node = SYS_getBrotherDo(ParentNode, 'FrghtChrgs');
        var gridIdx_F = DoFrame.tree.getPropertyValue(nFreight_node, 'gridIndex');
        if (gridIdx_F != "-1") {
            var records_F = DoFrame.main.getRecords(gridIdx_F);
            var record_F;
            for (var i = 0; i < records_F.length; i++) {
                record_F = records_F[i];
                var recorId_F = record_F.recordID;
                var TSU_IAFT_AMT = record_F["TSU_IAFT_AMT"];
                var TSU_IAFT_RT = record_F["TSU_IAFT_RT"];
                var TSU_IAFT_AMT_CAL_F;
                if (TSU_IAFT_AMT == "undifined" || TSU_IAFT_AMT == null || TSU_IAFT_AMT == "null" || TSU_IAFT_AMT == "0") {
                    TSU_IAFT_AMT_CAL_F = (nTSU_LINE_TTL_AMT + SYS_BeFloat(TSU_IAFT_AMT_CAL_sum)) * SYS_BeFloat(TSU_IAFT_RT) / 100;
                } else {
                    TSU_IAFT_AMT_CAL_F = TSU_IAFT_AMT;
                }
                SYS_setFieldValue(nFreight_node, recorId_F, "TSU_IAFT_AMT_CAL", TSU_IAFT_AMT_CAL_F);
            }
        }
    } catch (e) {
        DisExcpt("SYM_TSUM.js", e);
    }
}

function SYM_TSUM_Show_ChargeAndSilent() {
    try {

        if (SYS_ORG_FUNCTION_SHORT_NAME == "Send012ToCoE&TSU") {
            document.getElementById("B").style.display = "";
            document.getElementById("C").style.display = "";
        } else {
            document.getElementById("B").style.display = "none";
            document.getElementById("C").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYM_TSUM.js", e);
    }
}