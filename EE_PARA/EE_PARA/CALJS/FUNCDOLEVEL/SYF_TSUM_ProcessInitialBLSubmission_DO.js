function R2DatasetRequired_CertificateDataSetRequired(node, recordId, status) {
    try {
        var Consignee = SYS_getNodeByXpath("R2InvolvedPartyInfo.Consignee");
        var record = SYS_getRecord(Consignee, 0);
        var TSU_PARTY_NAME = record.TSU_PARTY_NM;
        if (TSU_PARTY_NAME == undefined || TSU_PARTY_NAME == '') {
            alert("The consignee must be defined when the match consignee flag is set.");
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_R2DataSetReqrdSubmitr_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_R2DataSetReqrdSubmitr_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_R2LineItmId_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_R2LineItmId_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_CommercialDataSetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_CommercialDataSetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_CommercialDataSetRequired_R2DataSetReqrdSubmitr_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_CommercialDataSetRequired_R2DataSetReqrdSubmitr_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_R2ClausesReqrd_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_R2ClausesReqrd_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_R2DataSetReqrdSubmitr_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_R2DataSetReqrdSubmitr_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_OtherCertificateDataSetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_OtherCertificateDataSetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_OtherCertificateDataSetRequired_R2DataSetReqrdSubmitr_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_OtherCertificateDataSetRequired_R2DataSetReqrdSubmitr_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_TransportDataSetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_TransportDataSetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_TransportDataSetRequired_R2DataSetReqrdSubmitr(node, recordId, status) {
    try {
        var Goods = SYS_getNodeByXpath("R2Goods");
        var record = SYS_getRecord(Goods, 0);
        var TSU_TRNS_SHIPMNT = record.TSU_TRNS_SHIPMNT;
        if (TSU_TRNS_SHIPMNT == '') {
            alert("A TransShipment element must be present in the goods section");
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_TransportDataSetRequired_R2DataSetReqrdSubmitr_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2DatasetRequired_TransportDataSetRequired_R2DataSetReqrdSubmitr_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_CertificateDataSetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_CertificateDataSetRequired_R2DataSetReqrdSubmitr() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_CertificateDataSetRequired_R2LineItmId() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_CommercialDataSetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_CommercialDataSetRequired_R2DataSetReqrdSubmitr() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_InsuranceDataSetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_InsuranceDataSetRequired_R2ClausesReqrd() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_InsuranceDataSetRequired_R2DataSetReqrdSubmitr() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_OtherCertificateDataSetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_OtherCertificateDataSetRequired_R2DataSetReqrdSubmitr() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_TransportDataSetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_TransportDataSetRequired_R2DataSetReqrdSubmitr() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}


function R2Goods(node, recordId, status) {
    try {
        var mainccy = SYS_getCurrDoScreenValue("TSU_CCY");
        SYS_setValueToMain("TSU_CCY", mainccy);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_Adjustmtents_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_Adjustmtents_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_FrghtChrgs_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_FrghtChrgs_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_Incoterms1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_Incoterms1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7(node, recordId, status) {
    try {
        if (status == 'A') {
            LineItmDtls_add(node);
        } {
            LineItmDtls_Edit(node, recordId);

        } else {
            LineItmDtls_Delete(node);
        }
        if (status == 'D') {

            var nTSU_TTL_AMT = SYS_getFieldSumByDoName('TSU_TTL_AMT');
            var sum_TempAmt = 0;
            var records = SYS_getRecords(node);
            var len = records.length;
            for (var i = 0; i < len; i++) {
                record = records[i];
                id = record.recordID;
                rtype = record.recordType;
                var amt = record.TSU_TTL_AMT;
                if (rtype == 'D') {

                    sum_TempAmt = SYS_BeFloat(sum_TempAmt) + SYS_BeFloat(amt);
                }
            }
            var TSU_TTL_AMT_sum = SYS_BeFloat(nTSU_TTL_AMT) - sum_TempAmt;
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);
            //Get Sum of child DOs 
            var nSumAdjust = 0;
            var nSumFreight = 0;
            var nSumTax = 0;
            var nAdjust_node = SYS_getBrotherDo(node, 'Adjustmtents');
            var sum_Adjust = SYS_getFieldSumValue(nAdjust_node, 'TSU_IAFT_AMT_CAL');
            var nFreight_node = SYS_getBrotherDo(node, 'FrghtChrgs');
            var sum_Freight = SYS_getFieldSumValue(nFreight_node, 'TSU_IAFT_AMT_CAL');
            var nTax_node = SYS_getBrotherDo(node, 'Tax3');
            var sum_Tax = SYS_getFieldSumValue(nTax_node, 'TSU_IAFT_AMT_CAL');
            var sum = SYS_BeFloat(sum_Tax) + SYS_BeFloat(sum_Adjust) + SYS_BeFloat(sum_Freight);
            if (sum != 0) {
                //GET Adjust sum   
                var nAdjust_node = SYS_getBrotherDo(node, 'Adjustmtents');
                records = SYS_getRecords(nAdjust_node);
                var rlen = records.length;
                for (var i = 0; i < rlen; i++) {
                    record = records[i];
                    var nRate = record.TSU_IAFT_RT;
                    var cADJUST_DRCTN = record.TSU_ADJUST_DRCTN;
                    if (nRate != 0 || nRate != '') {
                        if (cADJUST_DRCTN == 'ADDD') {
                            nRate = parseFloat(nRate);
                        }
                        if (cADJUST_DRCTN == 'SUBS') {
                            nRate = '-' + nRate;
                            nRate = parseFloat(nRate);
                        }
                        var fRate = SYS_BeFloat(nRate) / 100;
                        var aTSU_IAFT_AMT_CAL = TSU_TTL_AMT_sum * SYS_BeFloat(fRate);
                        SYS_setFieldValue(nAdjust_node, i, 'TSU_IAFT_AMT_CAL', aTSU_IAFT_AMT_CAL);
                    }
                    if (nRate == 0) {
                        //aTSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                        var a1TSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                        SYS_setFieldValue(nAdjust_node, i, 'TSU_IAFT_AMT_CAL', a1TSU_IAFT_AMT_CAL);
                    }
                    nSumAdjust = SYS_getFieldSumValue(nAdjust_node, 'TSU_IAFT_AMT_CAL');
                }
                //Get Freight Chg
                var nFreight_node = SYS_getBrotherDo(node, 'FrghtChrgs');
                records = SYS_getRecords(nFreight_node);
                var rlen = records.length;
                for (var j = 0; j < rlen; j++) {
                    record = records[j];
                    var nRate = record.TSU_IAFT_RT;
                    if (nRate != 0 || nRate != '') {
                        var fRate = SYS_BeFloat(nRate) / 100;
                        //@author Mia Huang @Date 20091021 Start--Freight Charge base on LineItem Total Net Amount and Adjustment
                        var aTSU_IAFT_AMT_CAL = (SYS_BeFloat(TSU_TTL_AMT_sum) + SYS_BeFloat(nSumAdjust)) * SYS_BeFloat(fRate);
                        //@author Mia Huang @Date 20091021 End
                        SYS_setFieldValue(nFreight_node, j, 'TSU_IAFT_AMT_CAL', aTSU_IAFT_AMT_CAL);
                    }
                    if (nRate == 0) {
                        //aTSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                        var a1TSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                        SYS_setFieldValue(nFreight_node, j, 'TSU_IAFT_AMT_CAL', a1TSU_IAFT_AMT_CAL);

                    }
                    nSumFreight = SYS_getFieldSumValue(nFreight_node, 'TSU_IAFT_AMT_CAL');
                }
                //Get Tax
                var nTax_node = SYS_getBrotherDo(node, 'Tax3');
                records = SYS_getRecords(nTax_node);
                var rlen = records.length;
                for (var k = 0; k < rlen; k++) {
                    record = records[k];
                    var nRate = record.TSU_IAFT_RT;
                    if (nRate != 0 || nRate != '') {
                        var fRate = SYS_BeFloat(nRate) / 100;
                        //@author Mia Huang @Date 20091021 Start--Tax Charge base on LineItem Total Net Amount and Adjustment
                        var aTSU_IAFT_AMT_CAL = (SYS_BeFloat(TSU_TTL_AMT_sum) + SYS_BeFloat(nSumAdjust)) * SYS_BeFloat(fRate);
                        //@author Mia Huang @Date 20091021 End
                        SYS_setFieldValue(nTax_node, k, 'TSU_IAFT_AMT_CAL', aTSU_IAFT_AMT_CAL);
                    }
                    if (nRate == 0) {
                        //aTSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                        var a1TSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                        SYS_setFieldValue(nTax_node, k, 'TSU_IAFT_AMT_CAL', a1TSU_IAFT_AMT_CAL);
                    }
                    nSumTax = SYS_getFieldSumValue(nTax_node, 'TSU_IAFT_AMT_CAL');
                }

                nSumTTLAmt = SYS_BeFloat(TSU_TTL_AMT_sum) + SYS_BeFloat(nSumAdjust) + SYS_BeFloat(nSumFreight) + SYS_BeFloat(nSumTax);
                var pNode = SYS_getParentDo(node);
                pRecord = SYS_getParentRecord(node);
                recorId = pRecord.recordID;
                SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", nSumTTLAmt);
                SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_OUAMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_OUAMT", nSumTTLAmt);
                SYS_RefreshGrid();
                SYS_setValueToMain("TSU_TTL_NET_AMT", nSumTTLAmt);
                EEHtml.fireEvent(SYS_getMainObj("TSU_TTL_NET_AMT"), 'onchange');
            } else { //the LineItem's sum of brother' value is null
                var pNode = SYS_getParentDo(node);
                pRecord = SYS_getParentRecord(node);
                recorId = pRecord.recordID;
                SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_OUAMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_OUAMT", TSU_TTL_AMT_sum);
                SYS_RefreshGrid();
                SYS_setValueToMain("TSU_TTL_NET_AMT", TSU_TTL_AMT_sum);
                EEHtml.fireEvent(SYS_getMainObj("TSU_TTL_NET_AMT"), 'onchange');
            }

        } else if (status == 'A') {
            // for sum of TSU_TTL_AMT in current page and set the value to parent 
            var nTSU_QTY_VAL = SYS_getCurrDoScreenValue('TSU_QTY_VAL');
            SYS_setFieldValue(node, recordId, 'TSU_QTY_OUVAL', nTSU_QTY_VAL);
            var nTSU_UNITPRIC_AMT = SYS_getCurrDoScreenValue('TSU_UNITPRIC_AMT');
            var nAMT = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);
            var nTSU_TTL_AMT = SYS_getCurrDoScreenValue('TSU_TTL_AMT');
            SYS_setFieldValue(node, recordId, 'TSU_TTL_OUAMT', nTSU_TTL_AMT);
            var TSU_TTL_AMT_sum = SYS_getFieldSumByDoName('TSU_TTL_AMT');
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);
            var nSumAdjust = 0;
            var nSumFreight = 0;
            var nSumTax = 0;
            var nAdjust_node = SYS_getBrotherDo(node, 'Adjustmtents');
            var sum_Adjust = SYS_getFieldSumValue(nAdjust_node, 'TSU_IAFT_AMT_CAL');
            var nFreight_node = SYS_getBrotherDo(node, 'FrghtChrgs');
            var sum_Freight = SYS_getFieldSumValue(nFreight_node, 'TSU_IAFT_AMT_CAL');
            var nTax_node = SYS_getBrotherDo(node, 'Tax3');
            var sum_Tax = SYS_getFieldSumValue(nTax_node, 'TSU_IAFT_AMT_CAL');
            var sum = SYS_BeFloat(sum_Tax) + SYS_BeFloat(sum_Adjust) + SYS_BeFloat(sum_Freight);
            if (sum != 0) {
                var nAdjust_node = SYS_getBrotherDo(node, 'Adjustmtents');
                records = SYS_getRecords(nAdjust_node);
                var rlen = records.length;
                for (var i = 0; i < rlen; i++) {
                    record = records[i];
                    var nRate = record.TSU_IAFT_RT;
                    var cADJUST_DRCTN = record.TSU_ADJUST_DRCTN;
                    if (nRate != 0 || nRate != '') {
                        if (cADJUST_DRCTN == 'ADDD') {
                            nRate = parseFloat(nRate);
                        }
                        if (cADJUST_DRCTN == 'SUBS') {
                            nRate = '-' + nRate;
                            nRate = parseFloat(nRate);
                        }
                        var fRate = SYS_BeFloat(nRate) / 100;
                        var aTSU_IAFT_AMT_CAL = SYS_BeFloat(TSU_TTL_AMT_sum) * SYS_BeFloat(fRate);
                        SYS_setFieldValue(nAdjust_node, i, 'TSU_IAFT_AMT_CAL', aTSU_IAFT_AMT_CAL);
                    }
                    if (nRate == 0) {

                        var a1TSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                        SYS_setFieldValue(nAdjust_node, i, 'TSU_IAFT_AMT_CAL', a1TSU_IAFT_AMT_CAL);
                    }

                    nSumAdjust = SYS_getFieldSumValue(nAdjust_node, 'TSU_IAFT_AMT_CAL');


                }
                //Get Freight Chg sum
                var nFreight_node = SYS_getBrotherDo(node, 'FrghtChrgs');
                records = SYS_getRecords(nFreight_node);
                var rlen = records.length;
                for (var j = 0; j < rlen; j++) {
                    record = records[j];
                    var nRate = record.TSU_IAFT_RT;
                    if (nRate != 0 || nRate != '') {
                        var fRate = SYS_BeFloat(nRate) / 100;
                        //@author Mia Huang @Date 20091021 Start--Freight Charge base on LineItem Total Net Amount and Adjustment
                        var aTSU_IAFT_AMT_CAL = (SYS_BeFloat(TSU_TTL_AMT_sum) + SYS_BeFloat(nSumAdjust)) * SYS_BeFloat(fRate);
                        //@author Mia Huang @Date 20091021 End
                        SYS_setFieldValue(nFreight_node, j, 'TSU_IAFT_AMT_CAL', aTSU_IAFT_AMT_CAL);
                    }
                    if (nRate == 0) {
                        var a1TSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                        SYS_setFieldValue(nFreight_node, j, 'TSU_IAFT_AMT_CAL', a1TSU_IAFT_AMT_CAL);
                    }
                    nSumFreight = SYS_getFieldSumValue(nFreight_node, 'TSU_IAFT_AMT_CAL');


                }
                //Get Tax
                var nTax_node = SYS_getBrotherDo(node, 'Tax3');
                records = SYS_getRecords(nTax_node);
                var rlen = records.length;
                for (var k = 0; k < rlen; k++) {
                    record = records[k];
                    var nRate = record.TSU_IAFT_RT;
                    if (nRate != 0 || nRate != '') {
                        var fRate = SYS_BeFloat(nRate) / 100;
                        //@author Mia Huang @Date 20091021 Start--Tax Charge base on LineItem Total Net Amount and Adjustment
                        var aTSU_IAFT_AMT_CAL = (SYS_BeFloat(TSU_TTL_AMT_sum) + SYS_BeFloat(nSumAdjust)) * SYS_BeFloat(fRate);
                        //@author Mia Huang @Date 20091021 End
                        SYS_setFieldValue(nTax_node, k, 'TSU_IAFT_AMT_CAL', aTSU_IAFT_AMT_CAL);
                    }
                    if (nRate == 0) {
                        var a1TSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                        SYS_setFieldValue(nTax_node, k, 'TSU_IAFT_AMT_CAL', a1TSU_IAFT_AMT_CAL);
                    }
                    nSumTax = SYS_getFieldSumValue(nTax_node, 'TSU_IAFT_AMT_CAL');


                }

                nSumTTLAmt = SYS_BeFloat(TSU_TTL_AMT_sum) + SYS_BeFloat(nSumAdjust) + SYS_BeFloat(nSumFreight) + SYS_BeFloat(nSumTax);
                var pNode = SYS_getParentDo(node);
                pRecord = SYS_getParentRecord(node);
                recorId = pRecord.recordID;
                SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", nSumTTLAmt);
                SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_OUAMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_OUAMT", nSumTTLAmt);
                SYS_RefreshGrid();
                SYS_setValueToMain("TSU_TTL_NET_AMT", nSumTTLAmt);
                EEHtml.fireEvent(SYS_getMainObj("TSU_TTL_NET_AMT"), 'onchange');
            } else {
                var pNode = SYS_getParentDo(node);
                pRecord = SYS_getParentRecord(node);
                recorId = pRecord.recordID;
                SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_OUAMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_OUAMT", TSU_TTL_AMT_sum);
                SYS_RefreshGrid();
                SYS_setValueToMain("TSU_TTL_NET_AMT", TSU_TTL_AMT_sum);
                EEHtml.fireEvent(SYS_getMainObj("TSU_TTL_NET_AMT"), 'onchange');
            }

        } else if (status == 'E') {
            // Get the changed TSU_TTL_AMT VALUE
            var nTSU_QTY_VAL = SYS_getFieldValue(node, recordId, 'TSU_QTY_VAL');
            SYS_setFieldValue(node, recordId, 'TSU_QTY_OUVAL', nTSU_QTY_VAL);
            var nTSU_UNITPRIC_AMT = SYS_getFieldValue(node, recordId, 'TSU_UNITPRIC_AMT');
            var nAmt = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);
            var nSumAdjust = 0;
            var nSumFreght = 0;
            var nSumTax = 0;
            var nSumTTLAmt = 0;

            var nodes = SYS_getChildNodes(node, recordId);
            var len = nodes.length;
            for (var i = 0; i < len; i++) {
                _node = nodes[i];
                doName = SYS_getDoName(_node);
                // get sum of LineitemAdjust	
                if (doName == "Adjustmtents") {
                    records = SYS_getRecords(_node);
                    var rlen = records.length;
                    for (var j = 0; j < rlen; j++) {
                        record = records[j];
                        var nRate = record.TSU_IAFT_RT;
                        var cADJUST_DRCTN = record.TSU_ADJUST_DRCTN;
                        if (nRate != 0 || nRate != '') {
                            if (cADJUST_DRCTN == 'ADDD') {
                                nRate = parseFloat(nRate);
                            }
                            if (cADJUST_DRCTN == 'SUBS') {
                                nRate = '-' + nRate;
                                nRate = parseFloat(nRate);
                            }
                            var fRate = SYS_BeFloat(nRate) / 100;
                            var aTSU_IAFT_AMT_CAL = nAmt * SYS_BeFloat(fRate);
                            SYS_setFieldValue(_node, j, 'TSU_IAFT_AMT_CAL', aTSU_IAFT_AMT_CAL);
                        }
                        if (nRate == 0) {
                            //aTSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                            var a1TSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                            SYS_setFieldValue(_node, j, 'TSU_IAFT_AMT_CAL', a1TSU_IAFT_AMT_CAL);
                        }
                        nSumAdjust = SYS_getFieldSumValue(_node, 'TSU_IAFT_AMT_CAL');

                    }
                }
                //for get sum of LineItemFreightChg
                if (doName == "FrghtChrgs") {
                    records = SYS_getRecords(_node);
                    var rlen = records.length;
                    for (var f = 0; f < rlen; f++) {
                        record = records[f];
                        var nRate = record.TSU_IAFT_RT;
                        if (nRate != 0 || nRate != '') {
                            var fRate = SYS_BeFloat(nRate) / 100;
                            //@author Mia Huang @Date 20091021 Start--Freight Charge base on LineItem Total Net Amount and Adjustment
                            var fTSU_IAFT_AMT_CAL = (nAmt + SYS_BeFloat(nSumAdjust)) * SYS_BeFloat(fRate);
                            //@author Mia Huang @Date 20091021 End
                            SYS_setFieldValue(_node, f, 'TSU_IAFT_AMT_CAL', fTSU_IAFT_AMT_CAL);
                        }
                        if (nRate == 0) {
                            var f1TSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                            SYS_setFieldValue(_node, f, 'TSU_IAFT_AMT_CAL', f1TSU_IAFT_AMT_CAL);
                        }
                        nSumFreght = SYS_getFieldSumValue(_node, 'TSU_IAFT_AMT_CAL');

                    }
                }
                // for get sum of LineItemTax
                if (doName == "Tax3") {
                    records = SYS_getRecords(_node);
                    var rlen = records.length;
                    for (var k = 0; k < rlen; k++) {
                        record = records[k];
                        var nRate = record.TSU_IAFT_RT;
                        if (nRate != 0 || nRate != '') {
                            var fRate = SYS_BeFloat(nRate) / 100;
                            //@author Mia Huang @Date 20091021 Start--Tax Charge base on LineItem Total Net Amount and Adjustment
                            var tTSU_IAFT_AMT_CAL = (nAmt + SYS_BeFloat(nSumAdjust)) * SYS_BeFloat(fRate);
                            //@author Mia Huang @Date 20091021 End
                            SYS_setFieldValue(_node, k, 'TSU_IAFT_AMT_CAL', tTSU_IAFT_AMT_CAL);
                        }
                        if (nRate == 0) {
                            var t1TSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                            SYS_setFieldValue(_node, k, 'TSU_IAFT_AMT_CAL', t1TSU_IAFT_AMT_CAL);
                        }
                        nSumTax = SYS_getFieldSumValue(_node, 'TSU_IAFT_AMT_CAL');
                    }
                }
            }

            nSumTTLAmt = SYS_BeFloat(nAmt) + SYS_BeFloat(nSumAdjust) + SYS_BeFloat(nSumFreght) + SYS_BeFloat(nSumTax);
            SYS_setFieldValue(node, recordId, 'TSU_TTL_AMT', nSumTTLAmt);
            SYS_setFieldValue(node, recordId, 'TSU_TTL_OUAMT', nSumTTLAmt);
            //var  TSU_TTL_AMT_sum = SYS_getFieldSumByDoName('TSU_TTL_AMT');
            var TSU_TTL_AMT_sum = SYS_getFieldSumValue(node, 'TSU_TTL_AMT');
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);
            //Get sum of the total	

            SYS_setCurrNodeParentValue('R2Goods', "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
            SYS_setCurrNodeParentValue('R2Goods', "TSU_LINE_TTL_OUAMT", TSU_TTL_AMT_sum);

            // get sum of brother
            var node_xpath = SYS_getNodeByXpath("R2Goods.Adjustmtents");
            var gridIdx = DoFrame.tree.getPropertyValue(node_xpath, 'gridIndex');
            if (gridIdx != "-1") {
                var Arecords = DoFrame.main.getRecords(gridIdx);
                var record;
                var TSU_IAFT_AMT_CAL = 0;
                var sum_Adjust = 0;
                for (var i = 0; i < Arecords.length; i++) {
                    record = Arecords[i];
                    var Amount_A = record["TSU_IAFT_AMT"];
                    var rate = record["TSU_IAFT_RT"];
                    var drctn = record["TSU_ADJUST_DRCTN"];
                    rate = SYS_BeFloat(rate);
                    if ("ADDD" == drctn) {
                        TSU_IAFT_AMT_CAL = SYS_BeFloat(Amount_A) + parseFloat(rate / 100) * TSU_TTL_AMT_sum;
                    } else if ("SUBS" == drctn) {
                        TSU_IAFT_AMT_CAL = -SYS_BeFloat(Amount_A) - parseFloat(rate / 100) * TSU_TTL_AMT_sum;
                    }
                    sum_Adjust = SYS_BeFloat(sum_Adjust) + SYS_BeFloat(TSU_IAFT_AMT_CAL);
                    TSU_TTL_AMT_sum = TSU_TTL_AMT_sum + SYS_BeFloat(sum_Adjust);
                    TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);
                }
            }

            var node_xpathF = SYS_getNodeByXpath("R2Goods.FrghtChrgs");
            var gridIdxF = DoFrame.tree.getPropertyValue(node_xpathF, 'gridIndex');
            if (gridIdxF != "-1") {
                var Frecords = DoFrame.main.getRecords(gridIdxF);
                var recordF;
                var TSU_IAFT_AMT_CAL = 0;
                var sum_Frght = 0;
                for (var i = 0; i < Frecords.length; i++) {
                    recordF = Frecords[i];
                    var Amount_F = recordF["TSU_IAFT_AMT"];
                    var rateF = recordF["TSU_IAFT_RT"];
                    rateF = SYS_BeFloat(rateF);
                    TSU_IAFT_AMT_CAL = SYS_BeFloat(Amount_F) + parseFloat(rateF / 100) * TSU_TTL_AMT_sum;
                    sum_Frght = SYS_BeFloat(sum_Frght) + SYS_BeFloat(TSU_IAFT_AMT_CAL);
                }
            }

            var node_xpathT = SYS_getNodeByXpath("R2Goods.Tax3");
            var gridIdxT = DoFrame.tree.getPropertyValue(node_xpathT, 'gridIndex');
            if (gridIdxT != "-1") {
                var Trecords = DoFrame.main.getRecords(gridIdxT);
                var recordT;
                var TSU_IAFT_AMT_CAL = 0;
                var sum_Tax = 0;
                for (var i = 0; i < Trecords.length; i++) {
                    recordT = Trecords[i];
                    var Amount_F = recordT["TSU_IAFT_AMT"];
                    var rateF = recordT["TSU_IAFT_RT"];
                    rateF = SYS_BeFloat(rateF);
                    TSU_IAFT_AMT_CAL = SYS_BeFloat(Amount_F) + parseFloat(rateF / 100) * TSU_TTL_AMT_sum;
                    sum_Tax = SYS_BeFloat(sum_Tax) + SYS_BeFloat(TSU_IAFT_AMT_CAL);
                }
            }

            var nSumTTLNetAmt = SYS_BeFloat(TSU_TTL_AMT_sum) + SYS_BeFloat(sum_Frght) + SYS_BeFloat(sum_Tax);
            SYS_setCurrNodeParentValue('R2Goods', "TSU_TTL_NET_AMT", nSumTTLNetAmt);
            SYS_setCurrNodeParentValue('R2Goods', "TSU_TTL_NET_OUAMT", TSU_TTL_AMT_sum);
            SYS_RefreshGrid();
            SYS_setValueToMain("TSU_TTL_NET_AMT", nSumTTLNetAmt);
            EEHtml.fireEvent(SYS_getMainObj("TSU_TTL_NET_AMT"), 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Adjustmtents_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Adjustmtents_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_FrghtChrgs_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_FrghtChrgs_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Incoterms1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Incoterms1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductCategory_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductCategory_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductCharacteristics_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductCharacteristics_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductIdentifier_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductIdentifier_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductOrigin_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductOrigin_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2MltmdlTrnsprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2MltmdlTrnsprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntDtRg_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntDtRg_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntSubSchdl_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntSubSchdl_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Tax3_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Tax3_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2MltmdlTrnsprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2MltmdlTrnsprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_Tax3_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2Goods_Tax3_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_Adjustmtents() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_FrghtChrgs() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_Incoterms1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_Adjustmtents() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_FrghtChrgs() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_Incoterms1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_ProductCategory() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_ProductCharacteristics() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_ProductIdentifier() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_ProductOrigin() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2MltmdlTrnsprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2ShipmntSchdl() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntDtRg() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntSubSchdl() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_Tax3() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2MltmdlTrnsprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_Tax3() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}


function R2InvolvedPartyInfo_BillTo(node, recordId, status) {
    try {
        var CUST_ID = SYS_getCurrDoScreenValue('CUST_ID');
        var TSU_PARTY_NAME = SYS_getCurrDoScreenValue('TSU_PARTY_NM');
        var TSU_PARTY_CNTY = SYS_getCurrDoScreenValue('TSU_PARTY_CNTY');
        var record = [DoFrame.tree.getDONameFunction(node, '_') + recordId, "Bill To", CUST_ID, '', TSU_PARTY_NAME, TSU_PARTY_CNTY, 'A'];
        SYS_DistillInfo(node, recordId, status, record);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BillTo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BillTo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Buyer(node, recordId, status) {
    try {
        var Buyer = SYS_getCurrDoScreenValue("TSU_PARTY_NM");
        SYS_setValueToMain("TSU_BUYER_NM", Buyer);

        var CUST_ID = SYS_getCurrDoScreenValue('CUST_ID');
        var TSU_PARTY_NAME = SYS_getCurrDoScreenValue('TSU_PARTY_NM');
        var TSU_PARTY_CNTY_obj = SYS_getCurrDoScreenObj('TSU_PARTY_CNTY');
        if (TSU_PARTY_CNTY_obj.selectedIndex == -1) {
            _value = "";
        } else TSU_PARTY_CNTY = TSU_PARTY_CNTY_obj.options[TSU_PARTY_CNTY_obj.selectedIndex].text;
        var index = DoFrame.tree.getDONameFunction(node, '_');
        var record = [index + recordId, "Buyer", CUST_ID, '', TSU_PARTY_NAME, TSU_PARTY_CNTY, 'A'];
        SYS_DistillInfo(node, recordId, status, record);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyerBank(node, recordId, status) {
    try {
        var BuyerBankNm = SYS_getCurrDoScreenValue("TSU_BUYER_BK_NM");
        SYS_setValueToMain("TSU_BUYER_BK_NM", BuyerBankNm);
        var TSU_BYRBK_ID = SYS_getCurrDoScreenValue('TSU_BUYER_BK_ID');
        SYS_setValueToMain("TSU_BUYER_BK_ID", TSU_BYRBK_ID);
        var TSU_BYRBK_BIC = SYS_getCurrDoScreenValue('TSU_BUYER_BK_BIC');
        SYS_setValueToMain("TSU_BUYER_BK_BIC", TSU_BYRBK_BIC);
        var TSU_BYRBK_NAME = SYS_getCurrDoScreenValue('TSU_BUYER_BK_NM');
        var TSU_PARTY_CNTY = SYS_getCurrDoScreenValue('TSU_PARTY_CNTY');
        var record = [DoFrame.tree.getDONameFunction(node, '_') + recordId, "Buyer Bank", TSU_BYRBK_ID, TSU_BYRBK_BIC, TSU_BYRBK_NAME, TSU_PARTY_CNTY, 'A'];
        SYS_DistillInfo(node, recordId, status, record);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyerBank_ContactIdentification1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyerBank_ContactIdentification1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyerBank_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyerBank_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Buyer_ContactIdentification1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Buyer_ContactIdentification1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Buyer_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Buyer_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyrSdSubmitgBk_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyrSdSubmitgBk_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Consignee(node, recordId, status) {
    try {
        var CUST_ID = SYS_getCurrDoScreenValue('CUST_ID');
        var TSU_PARTY_NAME = SYS_getCurrDoScreenValue('TSU_PARTY_NM');
        var TSU_PARTY_CNTY = SYS_getCurrDoScreenValue('TSU_PARTY_CNTY');
        var record = [DoFrame.tree.getDONameFunction(node, '_') + recordId, "Consignee", CUST_ID, '', TSU_PARTY_NAME, TSU_PARTY_CNTY, 'A'];
        SYS_DistillInfo(node, recordId, status, record);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Consignee_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Consignee_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_OtherBk_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_OtherBk_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Seller(node, recordId, status) {
    try {
        var Seller = SYS_getCurrDoScreenValue("TSU_PARTY_NM");
        SYS_setValueToMain("TSU_SEL_NM", Seller);

        var CUST_ID = SYS_getCurrDoScreenValue('CUST_ID');
        var TSU_PARTY_NAME = SYS_getCurrDoScreenValue('TSU_PARTY_NM');
        var TSU_PARTY_CNTY = SYS_getCurrDoScreenValue('TSU_PARTY_CNTY');
        var record = [DoFrame.tree.getDONameFunction(node, '_') + recordId, "Seller", CUST_ID, '', TSU_PARTY_NAME, TSU_PARTY_CNTY, 'A'];
        SYS_DistillInfo(node, recordId, status, record);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellerBank(node, recordId, status) {
    try {
        var SellerBankNm = SYS_getCurrDoScreenValue("TSU_SEL_BK_NM");
        SYS_setValueToMain("TSU_SEL_BK_NM", SellerBankNm);
        var TSU_SELLRBK_ID = SYS_getCurrDoScreenValue('TSU_SEL_BK_ID');
        SYS_setValueToMain("TSU_SEL_BK_ID", TSU_SELLRBK_ID);
        var TSU_SELLRBK_BIC = SYS_getCurrDoScreenValue('TSU_SEL_BK_BIC');
        SYS_setValueToMain("TSU_SEL_BK_BIC", TSU_SELLRBK_BIC);
        var TSU_SELLRBK_NAME = SYS_getCurrDoScreenValue('TSU_SEL_BK_NM');
        var record = [DoFrame.tree.getDONameFunction(node, '_') + recordId, "Seller Bank", TSU_SELLRBK_ID, TSU_SELLRBK_BIC, TSU_SELLRBK_NAME, '', 'A'];
        SYS_DistillInfo(node, recordId, status, record);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellerBank_ContactIdentification1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellerBank_ContactIdentification1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellerBank_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellerBank_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Seller_ContactIdentification1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Seller_ContactIdentification1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Seller_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Seller_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellrSdSubmitgBk_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellrSdSubmitgBk_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_ShipTo(node, recordId, status) {
    try {
        var CUST_ID = SYS_getCurrDoScreenValue('CUST_ID');
        var TSU_PARTY_NAME = SYS_getCurrDoScreenValue('TSU_PARTY_NM');
        var TSU_PARTY_CNTY = SYS_getCurrDoScreenValue('TSU_PARTY_CNTY');
        var record = [DoFrame.tree.getDONameFunction(node, '_') + recordId, "Ship To", CUST_ID, '', TSU_PARTY_NAME, TSU_PARTY_CNTY, 'A'];
        SYS_DistillInfo(node, recordId, status, record);
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_ShipTo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2InvolvedPartyInfo_ShipTo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_BillTo() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_Buyer() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_BuyerBank() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_BuyerBank_ContactIdentification1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_Buyer_ContactIdentification1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_BuyrSdSubmitgBk() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_Consignee() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_OtherBk() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_Seller() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_SellerBank() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_SellerBank_ContactIdentification1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_Seller_ContactIdentification1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_SellrSdSubmitgBk() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_ShipTo() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}


function R2PaymentObligation(node, recordId, status) {
    try {
        var TSU_PMT_XPRY_DT = SYS_getCurrDoScreenValue("TSU_PMT_XPRY_DT");
        SYS_setValueToMain("TEMP_DATE1", TSU_PMT_XPRY_DT);
        EEHtml.fireEvent(SYS_getMainObj("TEMP_DATE1"), 'onchange');
    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2PaymentObligation_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2PaymentObligation_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2PaymentObligation_PaymentTerms1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2PaymentObligation_PaymentTerms1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2PaymentObligation_R2SettlementTerms2_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2PaymentObligation_R2SettlementTerms2_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2PaymentObligation() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2PaymentObligation_PaymentTerms1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2PaymentObligation_R2SettlementTerms2() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}


function R2PaymentTerms_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2PaymentTerms_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2PaymentTerms() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}


function R2SettlementTerms_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function R2SettlementTerms_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2SettlementTerms() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}


function SYF_TSUM_getDOdata_UserDefinedInformation() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_UserDefinedInformation_BuyerDefined() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_UserDefinedInformation_SellerDefined() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function UserDefinedInformation_BuyerDefined_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function UserDefinedInformation_BuyerDefined_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function UserDefinedInformation_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function UserDefinedInformation_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function UserDefinedInformation_SellerDefined_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}

function UserDefinedInformation_SellerDefined_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_ProcessInitialBLSubmission_DO.js", e);
    }
}