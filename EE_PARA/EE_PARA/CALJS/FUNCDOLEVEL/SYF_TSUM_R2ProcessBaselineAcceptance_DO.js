function R2DatasetRequired(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired(node, recordId, status) {
    try {
        var Consignee = SYS_getNodeByXpath("R2InvolvedPartyInfo.Consignee");
        var record = SYS_getRecord(Consignee, 0);
        var TSU_PARTY_NM = record.TSU_PARTY_NM;
        if (TSU_PARTY_NM == undefined) {

            alert("The consignee must be defined when the match consignee flag is set.");
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_R2DataSetReqrdSubmitr(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_R2DataSetReqrdSubmitr_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_R2DataSetReqrdSubmitr_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_R2LineItmId(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_R2LineItmId_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CertificateDataSetRequired_R2LineItmId_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CommercialDataSetRequired(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CommercialDataSetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CommercialDataSetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CommercialDataSetRequired_R2DataSetReqrdSubmitr(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CommercialDataSetRequired_R2DataSetReqrdSubmitr_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_CommercialDataSetRequired_R2DataSetReqrdSubmitr_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_R2ClausesReqrd(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_R2ClausesReqrd_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_R2ClausesReqrd_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_R2DataSetReqrdSubmitr(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_R2DataSetReqrdSubmitr_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_InsuranceDataSetRequired_R2DataSetReqrdSubmitr_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_OtherCertificateDataSetRequired(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_OtherCertificateDataSetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_OtherCertificateDataSetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_OtherCertificateDataSetRequired_R2DataSetReqrdSubmitr(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_OtherCertificateDataSetRequired_R2DataSetReqrdSubmitr_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_OtherCertificateDataSetRequired_R2DataSetReqrdSubmitr_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_TransportDataSetRequired(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_TransportDataSetRequired_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_TransportDataSetRequired_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_TransportDataSetRequired_R2DataSetReqrdSubmitr(node, recordId, status) {
    try {
        var Goods = SYS_getNodeByXpath("R2Goods");
        var record = SYS_getRecord(Goods, 0);
        var TSU_TRAN_SHIPMNT = record.TSU_TRAN_SHIPMNT;
        if (TSU_TRAN_SHIPMNT == '') {

            alert("A TransShipment element must be present in the goods section");
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_TransportDataSetRequired_R2DataSetReqrdSubmitr_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2DatasetRequired_TransportDataSetRequired_R2DataSetReqrdSubmitr_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_CertificateDataSetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_CertificateDataSetRequired_R2DataSetReqrdSubmitr() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_CertificateDataSetRequired_R2LineItmId() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_CommercialDataSetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_CommercialDataSetRequired_R2DataSetReqrdSubmitr() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_InsuranceDataSetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_InsuranceDataSetRequired_R2ClausesReqrd() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_InsuranceDataSetRequired_R2DataSetReqrdSubmitr() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_OtherCertificateDataSetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_OtherCertificateDataSetRequired_R2DataSetReqrdSubmitr() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_TransportDataSetRequired() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2DatasetRequired_TransportDataSetRequired_R2DataSetReqrdSubmitr() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}


function R2Goods(node, recordId, status) {
    try {
        var mainccy = SYS_getCurrDoScreenValue("TSU_CCY");
        SYS_setValueToMain("TSU_CCY", mainccy);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_Adjustmtents(node, recordId, status) {
    try {
        if (status == 'A') {
            Adjust_add();

        } else if (status == 'E') {
            Adjust_add();

        } else if (status == 'D') {
            Adjust_Delete(node);
        }

        function Adjust_Delete(node) {
            //get sum of Adjust value after delete the adjust records
            var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            var sum_TempAmt = 0;
            var records = SYS_getRecords(node);
            var len = records.length;
            for (var i = 0; i < len; i++) {
                record = records[i];
                id = record.recordID;
                rtype = record.recordType;
                var amt = record.TSU_IAFT_AMT_CAL;
                if (rtype == 'D') {
                    sum_TempAmt = SYS_BeFloat(sum_TempAmt) + SYS_BeFloat(amt);
                }
            }
            var sum_Adjust = SYS_BeFloat(nTSU_IAFT_AMT_CAL) - sum_TempAmt;
            //Get brothers' sum 
            var nTax_node = SYS_getBrotherDo(node, 'Tax3');
            var sum_Tax = SYS_getFieldSumValue(nTax_node, 'TSU_IAFT_AMT_CAL');
            var nFrghtChrgs_node = SYS_getBrotherDo(node, 'FrghtChrgs');
            var sum_FrghtChrgs = SYS_getFieldSumValue(nFrghtChrgs_node, 'TSU_IAFT_AMT_CAL');

            // get TSU_LINE_TTL_AMT'value in main page;

            var TSU_TTL_AMT_sum = SYS_getFieldSumByXpath('TSU_TTL_AMT', 'R2Goods.R2LineItemDetails7');
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);

            var TSU_TTL_NET_AMT = SYS_BeFloat(TSU_TTL_AMT_sum) + SYS_BeFloat(sum_FrghtChrgs) + SYS_BeFloat(sum_Tax) + SYS_BeFloat(sum_Adjust);
            TSU_TTL_NET_AMT = SYS_BeFloat(TSU_TTL_NET_AMT);

            //Get Sum of TSU_TTL_AMT
            var pNode = SYS_getParentDo(node);
            pRecord = SYS_getParentRecord(node);
            recorId = pRecord.recordID;
            SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
            SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", TSU_TTL_NET_AMT);

        }

        function Adjust_add() {
            // get sum of TSU_IAFT_AMT in current page;

            var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            nTSU_IAFT_AMT_CAL = SYS_BeFloat(nTSU_IAFT_AMT_CAL);

            // get TSU_LINE_TTL_AMT'value in parent page;
            var nTSU_LINE_TTL_AMT = SYS_getCurrNodeParentValue('R2Goods', 'TSU_LINE_TTL_AMT');
            nTSU_LINE_TTL_AMT = SYS_BeFloat(nTSU_LINE_TTL_AMT);

            // get Adjust sibling's sum 
            var nTax = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'Tax3');
            var nFrieghtChg = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'FrghtChrgs');

            // get sum of TSU_TTL_NET_AMT and return value to main page;
            var nTSU_TTL_NET_AMT = SYS_BeFloat(nTSU_IAFT_AMT_CAL) + SYS_BeFloat(nTSU_LINE_TTL_AMT) + SYS_BeFloat(nTax) + SYS_BeFloat(nFrieghtChg);
            nTSU_TTL_NET_AMT = SYS_BeFloat(nTSU_TTL_NET_AMT);
            var pNode = SYS_getParentDo(node);
            pRecord = SYS_getParentRecord(node);
            recorId = pRecord.recordID;

            SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", nTSU_TTL_NET_AMT);
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_Adjustmtents_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_Adjustmtents_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_FrghtChrgs(node, recordId, status) {
    try {
        if (status == 'A') {
            FrghtChrgs_add();
        } else if (status == 'E') {
            FrghtChrgs_add();
        } else if (status == 'D') {
            FrghtChrgs_Delete(node);
        }

        function FrghtChrgs_Delete(node) {

            //get sum of Adjust value after delete the adjust records
            var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            var sum_TempAmt = 0;
            var records = SYS_getRecords(node);
            var len = records.length;
            for (var i = 0; i < len; i++) {
                record = records[i];
                id = record.recordID;
                rtype = record.recordType;
                var amt = record.TSU_IAFT_AMT_CAL;
                if (rtype == 'D') {
                    sum_TempAmt = SYS_BeFloat(sum_TempAmt) + SYS_BeFloat(amt);
                }
            }
            var sum_Freight = SYS_BeFloat(nTSU_IAFT_AMT_CAL) - sum_TempAmt;
            //Get brothers' sum 
            var nTax_node = SYS_getBrotherDo(node, 'Tax3');
            var sum_Tax = SYS_getFieldSumValue(nTax_node, 'TSU_IAFT_AMT_CAL');
            var nAdjust_node = SYS_getBrotherDo(node, 'Adjustmtents');
            var sum_Adjust = SYS_getFieldSumValue(nAdjust_node, 'TSU_IAFT_AMT_CAL');

            // get TSU_LINE_TTL_AMT'value in main page;
            var TSU_TTL_AMT_sum = SYS_getFieldSumByXpath('TSU_TTL_AMT', 'R2Goods.R2LineItemDetails7');
            var TSU_TTL_NET_AMT = SYS_BeFloat(TSU_TTL_AMT_sum) + SYS_BeFloat(sum_Freight) + SYS_BeFloat(sum_Tax) + SYS_BeFloat(sum_Adjust);
            TSU_TTL_NET_AMT = SYS_BeFloat(TSU_TTL_NET_AMT);

            //Get Sum of TSU_TTL_AMT
            var pNode = SYS_getParentDo(node);
            pRecord = SYS_getParentRecord(node);
            recorId = pRecord.recordID;
            SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
            SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", TSU_TTL_NET_AMT);
        }

        function FrghtChrgs_add() {
            // get sum of TSU_IAFT_AMT in current page;
            var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            nTSU_IAFT_AMT_CAL = SYS_BeFloat(nTSU_IAFT_AMT_CAL);

            // get TSU_LINE_TTL_AMT'value in parent page;
            var nTSU_LINE_TTL_AMT = SYS_getCurrNodeParentValue('R2Goods', 'TSU_LINE_TTL_AMT');
            nTSU_LINE_TTL_AMT = SYS_BeFloat(nTSU_LINE_TTL_AMT);

            // get Adjust sibling's sum 
            var nTax = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'Tax3');
            var nAdjust = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'Adjustmtents');

            // get sum of TSU_TTL_NET_AMT and return value to main page;
            var nTSU_TTL_NET_AMT = nTSU_IAFT_AMT_CAL + nTSU_LINE_TTL_AMT + SYS_BeFloat(nTax) + SYS_BeFloat(nAdjust);
            nTSU_TTL_NET_AMT = SYS_BeFloat(nTSU_TTL_NET_AMT);
            var pNode = SYS_getParentDo(node);
            pRecord = SYS_getParentRecord(node);
            recorId = pRecord.recordID;
            SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", nTSU_TTL_NET_AMT);
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_FrghtChrgs_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_FrghtChrgs_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_Incoterms1(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_Incoterms1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_Incoterms1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7(node, recordId, status) {
    try {
        if (status == 'A') {
            LineItmDtls_add(node);
        } else if (status == 'E') {
            LineItmDtls_Edit(node, recordId);

        } else if (status == 'D') {
            LineItmDtls_Delete(node);
        }

        function LineItmDtls_Delete(node) {
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
                        var aTSU_IAFT_AMT_CAL = TSU_TTL_AMT_sum * SYS_BeFloat(fRate);
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
                        var aTSU_IAFT_AMT_CAL = TSU_TTL_AMT_sum * SYS_BeFloat(fRate);
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
            } else { //the LineItem's sum of brother' value is null
                var pNode = SYS_getParentDo(node);
                pRecord = SYS_getParentRecord(node);
                recorId = pRecord.recordID;
                SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", TSU_TTL_AMT_sum);
            }

        }

        function LineItmDtls_add(node) {
            // for sum of TSU_TTL_AMT in current page and set the value to parent 
            var nTSU_QTY_VAL = SYS_getCurrDoScreenValue('TSU_QTY_VAL');
            var nTSU_UNITPRIC_AMT = SYS_getCurrDoScreenValue('TSU_UNITPRIC_AMT');
            var nAMT = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);
            var nTSU_TTL_AMT = SYS_getCurrDoScreenValue('TSU_TTL_AMT');
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
                        var aTSU_IAFT_AMT_CAL = TSU_TTL_AMT_sum * SYS_BeFloat(fRate);
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
                        var aTSU_IAFT_AMT_CAL = TSU_TTL_AMT_sum * SYS_BeFloat(fRate);
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
                        var aTSU_IAFT_AMT_CAL = TSU_TTL_AMT_sum * SYS_BeFloat(fRate);
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
            } else {
                var pNode = SYS_getParentDo(node);
                pRecord = SYS_getParentRecord(node);
                recorId = pRecord.recordID;
                SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
                SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", TSU_TTL_AMT_sum);



            }
        }

        function LineItmDtls_Edit(node, editedRecordId) {
            var nAdjust_node = SYS_getBrotherDo(node, 'Adjustmtents');
            var sum_Adjust = SYS_getFieldSumValue(nAdjust_node, 'TSU_IAFT_AMT_CAL');
            var nFreight_node = SYS_getBrotherDo(node, 'FrghtChrgs');
            var sum_Freight = SYS_getFieldSumValue(nFreight_node, 'TSU_IAFT_AMT_CAL');
            var nTax_node = SYS_getBrotherDo(node, 'Tax3');
            var sum_Tax = SYS_getFieldSumValue(nTax_node, 'TSU_IAFT_AMT_CAL');
            var sum = SYS_BeFloat(sum_Tax) + SYS_BeFloat(sum_Adjust) + SYS_BeFloat(sum_Freight);

            // Get the changed TSU_TTL_AMT VALUE
            var nTSU_QTY_VAL = SYS_getFieldValue(node, editedRecordId, 'TSU_QTY_VAL');
            var nTSU_UNITPRIC_AMT = SYS_getFieldValue(node, editedRecordId, 'TSU_UNITPRIC_AMT');
            var nAmt = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);
            var nSumAdjust = 0;
            var nSumFreght = 0;
            var nSumTax = 0;
            var nSumTTLAmt = 0;

            var nodes = SYS_getChildNodes(node, editedRecordId);
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
                        record = records[j];
                        var nRate = record.TSU_IAFT_RT;
                        if (nRate != 0 || nRate != '') {
                            var fRate = SYS_BeFloat(nRate) / 100;
                            var fTSU_IAFT_AMT_CAL = nAmt * SYS_BeFloat(fRate);
                            SYS_setFieldValue(_node, f, 'TSU_IAFT_AMT_CAL', fTSU_IAFT_AMT_CAL);
                        }
                        if (nRate == 0) {
                            //fTSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
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
                        record = records[j];
                        var nRate = record.TSU_IAFT_RT;
                        if (nRate != 0 || nRate != '') {
                            var fRate = SYS_BeFloat(nRate) / 100;
                            var tTSU_IAFT_AMT_CAL = nAmt * SYS_BeFloat(fRate);
                            SYS_setFieldValue(_node, k, 'TSU_IAFT_AMT_CAL', tTSU_IAFT_AMT_CAL);
                        }
                        if (nRate == 0) {
                            //tTSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                            var t1TSU_IAFT_AMT_CAL = record.TSU_IAFT_AMT_CAL;
                            SYS_setFieldValue(_node, k, 'TSU_IAFT_AMT_CAL', t1TSU_IAFT_AMT_CAL);
                        }
                        nSumTax = SYS_getFieldSumValue(_node, 'TSU_IAFT_AMT_CAL');
                    }
                }
            }

            nSumTTLAmt = SYS_BeFloat(nAmt) + SYS_BeFloat(nSumAdjust) + SYS_BeFloat(nSumFreght) + SYS_BeFloat(nSumTax);
            SYS_setFieldValue(node, editedRecordId, 'TSU_TTL_AMT', nSumTTLAmt);
            var TSU_TTL_AMT_sum = SYS_getFieldSumByDoName('TSU_TTL_AMT');
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);

            //Get sum of the total
            var nSumTTLAmt = SYS_BeFloat(TSU_TTL_AMT_sum) + SYS_BeFloat(sum);

            SYS_setCurrNodeParentValue('R2Goods', "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
            SYS_setCurrNodeParentValue('R2Goods', "TSU_TTL_NET_AMT", nSumTTLAmt);
            SYS_RefreshGrid();
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Adjustmtents(node, recordId, status) {
    try {
        if (status == 'A') {
            LineitemAdjust_add();
        } else if (status == 'E') {
            LineitemAdjust_add();
        } else if (status == 'D') {
            LineitemAdjust_Delete(node);
        }

        function LineitemAdjust_Delete(node) {
            //get sum of Adjust value after delete the adjust records
            var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            var sum_TempAmt = 0;
            var records = SYS_getRecords(node);
            var len = records.length;
            for (var i = 0; i < len; i++) {
                record = records[i];
                id = record.recordID;
                rtype = record.recordType;
                var amt = record.TSU_IAFT_AMT_CAL;
                if (rtype == 'D') {
                    sum_TempAmt = SYS_BeFloat(sum_TempAmt) + SYS_BeFloat(amt);
                }
            }
            var nAdjust_sum = SYS_BeFloat(nTSU_IAFT_AMT_CAL) - sum_TempAmt;

            //Get brothers' sum 
            var nFreight_node = SYS_getBrotherDo(node, 'FrghtChrgs');
            var sum_Freight = SYS_getFieldSumValue(nFreight_node, 'TSU_IAFT_AMT_CAL');
            var nTax_node = SYS_getBrotherDo(node, 'Tax3');
            var sum_Tax = SYS_getFieldSumValue(nTax_node, 'TSU_IAFT_AMT_CAL');

            //Get parent's DO TSU_TTL_AMT after delete child DO		
            var nParent_record = SYS_getParentRecord(node);
            var nTSU_QTY_VAL = nParent_record.TSU_QTY_VAL;
            var nTSU_UNITPRIC_AMT = nParent_record.TSU_UNITPRIC_AMT;
            var nAMT = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);

            var TSU_TTL_AMT_sum = SYS_BeFloat(nAMT) + SYS_BeFloat(nAdjust_sum) + SYS_BeFloat(sum_Freight) + SYS_BeFloat(sum_Tax);
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);

            // get uncle's sum
            var nUFrieghtChg = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.FrghtChrgs'); //Get sum of TSU_IAFT_AMT_CAL in freightchg 
            var nUTax = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.Tax3'); //Get sum of TSU_IAFT_AMT_CAL Tax
            var nUTSU_TTL_AMT = SYS_BeFloat(nUFrieghtChg) + SYS_BeFloat(nUTax);


            //Set TSU_TTL_AMT_sum to the field TSU_TTL_AMT
            SYS_setCurrNodeParentValue('R2LineItemDetails7', 'TSU_TTL_AMT', TSU_TTL_AMT_sum);

            //Get Sum of TSU_TTL_AMT
            var TSU_TTL_AMT_sum = SYS_getFieldSumByXpath('TSU_TTL_AMT', 'R2Goods.R2LineItemDetails7');
            var nUTSU_TTL_AMT_sum = SYS_BeFloat(nUTSU_TTL_AMT) + TSU_TTL_AMT_sum;
            SYS_setCurrNodeParentValue('R2Goods', "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
            SYS_setCurrNodeParentValue('R2Goods', "TSU_TTL_NET_AMT", nUTSU_TTL_AMT_sum);

        }

        function LineitemAdjust_add() {
            // for sum of TSU_IAFT_AMT_CAL_sum field in currenct page
            var TSU_IAFT_AMT_CAL_sum = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');

            // for get parent's amout 
            var nTSU_QTY_VAL = SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_QTY_VAL');
            var nTSU_UNITPRIC_AMT = SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_UNITPRIC_AMT');
            var nAMT = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);

            //for get brothers' sum
            var nTax = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'Tax3') //Get sum of TSU_IAFT_AMT_CAL in LineItmDtls->LineitemAdjust 
            var nFrieghtChg = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'FrghtChrgs') //Get sum of TSU_IAFT_AMT_CAL in LineItmDtls->LineItemTax 

            var nTSU_TTL_AMT = SYS_BeFloat(TSU_IAFT_AMT_CAL_sum) + nAMT + nTax + nFrieghtChg;
            nTSU_TTL_AMT = SYS_BeFloat(nTSU_TTL_AMT);

            SYS_setCurrNodeParentValue('R2LineItemDetails7', 'TSU_TTL_AMT', nTSU_TTL_AMT);

            // get uncle's sum
            var nUFrieghtChg = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.FrghtChrgs'); //Get sum of TSU_IAFT_AMT_CAL in freightchg 
            var nUTax = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.Tax3'); //Get sum of TSU_IAFT_AMT_CAL Tax
            var nUTSU_TTL_AMT = SYS_BeFloat(nUFrieghtChg) + SYS_BeFloat(nUTax);

            // for sum of TSU_TTL_AMT field in parent page and cal
            var TSU_TTL_AMT_sum = SYS_getFieldSumByXpath('TSU_TTL_AMT', 'R2Goods.R2LineItemDetails7');
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);
            var nUTSU_TTL_AMT_sum = SYS_BeFloat(nUTSU_TTL_AMT) + TSU_TTL_AMT_sum;
            SYS_setCurrNodeParentValue('R2Goods', "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
            SYS_setCurrNodeParentValue('R2Goods', "TSU_TTL_NET_AMT", nUTSU_TTL_AMT_sum);

        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Adjustmtents_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Adjustmtents_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_FrghtChrgs(node, recordId, status) {
    try {
        if (status == 'A') {
            LineItemFreightChg_add();
        } else if (status == 'E') {
            LineItemFreightChg_add();
        } else if (status == 'D') {
            LineItemFreightChg_Delete(node);
        }

        function LineItemFreightChg_Delete(node) {
            //get sum of Adjust value after delete the LineItemFreightChg records
            var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            var sum_TempAmt = 0;
            var records = SYS_getRecords(node);
            var len = records.length;
            for (var i = 0; i < len; i++) {
                record = records[i];
                id = record.recordID;
                rtype = record.recordType;
                var amt = record.TSU_IAFT_AMT_CAL;
                if (rtype == 'D') {
                    sum_TempAmt = SYS_BeFloat(sum_TempAmt) + SYS_BeFloat(amt);
                }
            }
            var sum_Freight = SYS_BeFloat(nTSU_IAFT_AMT_CAL) - sum_TempAmt;

            //Get brothers' sum 
            var nTax_node = SYS_getBrotherDo(node, 'Tax3');
            var sum_Tax = SYS_getFieldSumValue(nTax_node, 'TSU_IAFT_AMT_CAL');
            var nAdjust_node = SYS_getBrotherDo(node, 'Adjustmtents');
            var sum_Adjust = SYS_getFieldSumValue(nAdjust_node, 'TSU_IAFT_AMT_CAL');

            //Get parent's DO TSU_TTL_AMT after delete child DO		
            var nParent_record = SYS_getParentRecord(node);

            var nTSU_QTY_VAL = nParent_record.TSU_QTY_VAL;
            var nTSU_UNITPRIC_AMT = nParent_record.TSU_UNITPRIC_AMT;
            var nAMT = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);

            var TSU_TTL_AMT_sum = SYS_BeFloat(nAMT) + SYS_BeFloat(sum_Tax) + SYS_BeFloat(sum_Freight) + SYS_BeFloat(sum_Adjust);
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);

            //Set TSU_TTL_AMT_sum to the field TSU_TTL_AMT
            SYS_setCurrNodeParentValue('R2LineItemDetails7', 'TSU_TTL_AMT', TSU_TTL_AMT_sum);
            // get uncle's sum
            var nUAdjust = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.Adjustmtents'); //Get sum of TSU_IAFT_AMT_CAL in Adjust 
            var nUTax = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.Tax3'); //Get sum of TSU_IAFT_AMT_CAL Tax
            var nUTSU_TTL_AMT = SYS_BeFloat(nUAdjust) + SYS_BeFloat(nUTax);


            //Get Sum of TSU_TTL_AMT
            var TSU_TTL_AMT_sum = SYS_getFieldSumByXpath('TSU_TTL_AMT', 'R2Goods.R2LineItemDetails7');
            var nUTSU_TTL_AMT_sum = SYS_BeFloat(nUTSU_TTL_AMT) + TSU_TTL_AMT_sum;
            SYS_setCurrNodeParentValue('R2Goods', "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
            SYS_setCurrNodeParentValue('R2Goods', "TSU_TTL_NET_AMT", nUTSU_TTL_AMT_sum);

        }

        function LineItemFreightChg_add() {
            // for sum of TSU_IAFT_AMT field in currenct page
            var TSU_IAFT_AMT_CAL_sum = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            var nTSU_QTY_VAL = SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_QTY_VAL');
            var nTSU_UNITPRIC_AMT = SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_UNITPRIC_AMT');
            var nAMT = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);

            //for get brothers' sum
            var nAdjust = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'Adjustmtents'); //Get sum of TSU_IAFT_AMT_CAL in LineItmDtls->LineitemAdjust 
            var nTax = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'Tax3'); //Get sum of TSU_IAFT_AMT_CAL in LineItmDtls->LineItemTax 

            var nTSU_TTL_AMT = SYS_BeFloat(TSU_IAFT_AMT_CAL_sum) + nAMT + SYS_BeFloat(nAdjust) + SYS_BeFloat(nTax);
            nTSU_TTL_AMT = SYS_BeFloat(nTSU_TTL_AMT);
            SYS_setCurrNodeParentValue('R2LineItemDetails7', 'TSU_TTL_AMT', nTSU_TTL_AMT);

            // get uncle's sum
            var nUAdjust = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.Adjustmtents'); //Get sum of TSU_IAFT_AMT_CAL in Adjust 
            var nUTax = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.Tax3'); //Get sum of TSU_IAFT_AMT_CAL Tax
            var nUTSU_TTL_AMT = SYS_BeFloat(nUAdjust) + SYS_BeFloat(nUTax);


            // for sum of TSU_TTL_AMT field in parent page and cal
            var TSU_TTL_AMT_sum = SYS_getFieldSumByXpath('TSU_TTL_AMT', 'R2Goods.R2LineItemDetails7');
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);
            var nUTSU_TTL_AMT_sum = SYS_BeFloat(nUTSU_TTL_AMT) + TSU_TTL_AMT_sum;
            SYS_setCurrNodeParentValue('R2Goods', "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
            SYS_setCurrNodeParentValue('R2Goods', "TSU_TTL_NET_AMT", nUTSU_TTL_AMT_sum);
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_FrghtChrgs_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_FrghtChrgs_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Incoterms1(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Incoterms1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Incoterms1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductCategory(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductCategory_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductCategory_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductCharacteristics(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductCharacteristics_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductCharacteristics_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductIdentifier(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductIdentifier_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductIdentifier_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductOrigin(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductOrigin_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_ProductOrigin_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary(node, recordId, status) {
    try {
        var selectValue = SYS_getCurrDoScreenValue("selectobj");
        if (selectValue == "0") {
            SYS_setChildDoDisabled("R2MltmdlTrnsprt", recordId);
            SYS_setChildDoEnabled("R2IndvTrnsprt", recordId);
        } else {
            SYS_setChildDoEnabled("R2MltmdlTrnsprt", recordId);
            SYS_setChildDoDisabled("R2IndvTrnsprt", recordId);
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2MltmdlTrnsprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2RoutingSummary_R2MltmdlTrnsprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntDtRg(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntDtRg_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntDtRg_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntSubSchdl(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntSubSchdl_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntSubSchdl_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Tax3(node, recordId, status) {
    try {
        if (status == 'A') {
            LineItemTax_add();
        } else if (status == 'E') {
            LineItemTax_add();
        } else if (status == 'D') {
            LineItemTax_Delete(node);
        }

        function LineItemTax_Delete(node) {
            //get sum of Tax value after delete the tax records
            var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            var sum_TempAmt = 0;
            var records = SYS_getRecords(node);
            var len = records.length;
            for (var i = 0; i < len; i++) {
                record = records[i];
                id = record.recordID;
                rtype = record.recordType;
                var amt = record.TSU_IAFT_AMT_CAL;
                if (rtype == 'D') {
                    sum_TempAmt = SYS_BeFloat(sum_TempAmt) + SYS_BeFloat(amt);
                }
            }
            var nTax_sum = SYS_BeFloat(nTSU_IAFT_AMT_CAL) - sum_TempAmt;

            //Get brothers' sum 
            var nFreight_node = SYS_getBrotherDo(node, 'FrghtChrgs');
            var sum_Freight = SYS_getFieldSumValue(nFreight_node, 'TSU_IAFT_AMT_CAL');
            var nAdjust_node = SYS_getBrotherDo(node, 'Adjustmtents');
            var sum_Adjust = SYS_getFieldSumValue(nAdjust_node, 'TSU_IAFT_AMT_CAL');

            //Get parent's DO TSU_TTL_AMT after delete child DO		
            var nParent_record = SYS_getParentRecord(node);

            var nTSU_QTY_VAL = nParent_record.TSU_QTY_VAL;
            var nTSU_UNITPRIC_AMT = nParent_record.TSU_UNITPRIC_AMT;
            var nAMT = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);

            var TSU_TTL_AMT_sum = SYS_BeFloat(nAMT) + SYS_BeFloat(nTax_sum) + SYS_BeFloat(sum_Freight) + SYS_BeFloat(sum_Adjust);
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);

            //Set TSU_TTL_AMT_sum to the field TSU_TTL_AMT
            SYS_setCurrNodeParentValue('R2LineItemDetails7', 'TSU_TTL_AMT', TSU_TTL_AMT_sum);
            // get uncle's sum
            var nUAdjust = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.Adjustmtents'); //Get sum of TSU_IAFT_AMT_CAL in Adjust 
            var nUFrieghtChg = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.FrghtChrgs'); //Get sum of TSU_IAFT_AMT_CAL Freightchg
            var nUTSU_TTL_AMT = SYS_BeFloat(nUAdjust) + SYS_BeFloat(nUFrieghtChg);


            //Get Sum of TSU_TTL_AMT
            var TSU_TTL_AMT_sum = SYS_getFieldSumByXpath('TSU_TTL_AMT', 'R2Goods.R2LineItemDetails7');
            var nUTSU_TTL_AMT_sum = SYS_BeFloat(nUTSU_TTL_AMT) + TSU_TTL_AMT_sum;
            var pNode = SYS_getParentDo(node);
            pRecord = SYS_getParentRecord(node);
            recorId = pRecord.recordID;
            SYS_setCurrNodeParentValue('R2Goods', "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
            SYS_setCurrNodeParentValue('R2Goods', "TSU_TTL_NET_AMT", nUTSU_TTL_AMT_sum);
        }

        function LineItemTax_add() {
            // for sum of TSU_IAFT_AMT field in currenct page
            var TSU_IAFT_AMT_CAL_sum = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            // for get parent's amout 
            var nTSU_QTY_VAL = SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_QTY_VAL');
            var nTSU_UNITPRIC_AMT = SYS_getCurrNodeParentValue('R2LineItemDetails7', 'TSU_UNITPRIC_AMT');
            var nAMT = SYS_BeFloat(nTSU_QTY_VAL) * SYS_BeFloat(nTSU_UNITPRIC_AMT);
            //for get brothers' sum
            var nAdjust = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'Adjustmtents'); //Get sum of TSU_IAFT_AMT_CAL in LineItmDtls->LineitemAdjust 
            var nFrieghtChg = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'FrghtChrgs'); //Get sum of TSU_IAFT_AMT_CAL in LineItmDtls->LineItemTax 
            var nTSU_TTL_AMT = SYS_BeFloat(TSU_IAFT_AMT_CAL_sum) + SYS_BeFloat(nAMT) + SYS_BeFloat(nAdjust) + SYS_BeFloat(nFrieghtChg);

            SYS_setCurrNodeParentValue('R2LineItemDetails7', 'TSU_TTL_AMT', nTSU_TTL_AMT);
            // get uncle's sum
            var nUAdjust = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.Adjustmtents'); //Get sum of TSU_IAFT_AMT_CAL in Adjust 
            var nUFrieghtChg = SYS_getFieldSumByXpath('TSU_IAFT_AMT_CAL', 'R2Goods.FrghtChrgs'); //Get sum of TSU_IAFT_AMT_CAL Freightchg
            var nUTSU_TTL_AMT = SYS_BeFloat(nUAdjust) + SYS_BeFloat(nUFrieghtChg);

            // for sum of TSU_TTL_AMT field in Grandpa page and cal

            var TSU_TTL_AMT_sum = SYS_getFieldSumByXpath('TSU_TTL_AMT', 'R2Goods.R2LineItemDetails7');
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);
            var nUTSU_TTL_AMT_sum = SYS_BeFloat(nUTSU_TTL_AMT) + TSU_TTL_AMT_sum;
            SYS_setCurrNodeParentValue('R2Goods', "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
            SYS_setCurrNodeParentValue('R2Goods', "TSU_TTL_NET_AMT", nUTSU_TTL_AMT_sum);
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Tax3_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2LineItemDetails7_Tax3_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary(node, recordId, status) {
    try {
        var selectValue = SYS_getCurrDoScreenValue("selectobj");
        if (selectValue == "0") {
            SYS_setChildDoDisabled("R2MltmdlTrnsprt", recordId);
            SYS_setChildDoEnabled("R2IndvTrnsprt", recordId);
        } else {
            SYS_setChildDoEnabled("R2MltmdlTrnsprt", recordId);
            SYS_setChildDoDisabled("R2IndvTrnsprt", recordId);
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2MltmdlTrnsprt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_R2RoutingSummary_R2MltmdlTrnsprt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_Tax3(node, recordId, status) {
    try {
        if (status == 'A') {
            Tax_add();
        } else if (status == 'E') {
            Tax_add();
        } else if (status == 'D') {
            Tax_Delete(node);
        }

        function Tax_Delete(node) {

            //get sum of Tax value after delete the tax records
            var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            var sum_TempAmt = 0;
            var records = SYS_getRecords(node);
            var len = records.length;
            for (var i = 0; i < len; i++) {
                record = records[i];
                id = record.recordID;
                rtype = record.recordType;
                var amt = record.TSU_IAFT_AMT_CAL;
                if (rtype == 'D') {
                    sum_TempAmt = SYS_BeFloat(sum_TempAmt) + SYS_BeFloat(amt);
                }
            }
            var sum_Tax = SYS_BeFloat(nTSU_IAFT_AMT_CAL) - sum_TempAmt;

            //Get brothers' sum 
            var nAdjust_node = SYS_getBrotherDo(node, 'Adjustmtents');
            var sum_Adjust = SYS_getFieldSumValue(nAdjust_node, 'TSU_IAFT_AMT_CAL');
            var nFrghtChrgs_node = SYS_getBrotherDo(node, 'FrghtChrgs');
            var sum_FrghtChrgs = SYS_getFieldSumValue(nFrghtChrgs_node, 'TSU_IAFT_AMT_CAL');

            // get TSU_LINE_TTL_AMT'value in parent page;
            var TSU_TTL_AMT_sum = SYS_getFieldSumByXpath('TSU_TTL_AMT', 'R2Goods.LineItemDetails7');
            TSU_TTL_AMT_sum = SYS_BeFloat(TSU_TTL_AMT_sum);

            var TSU_TTL_NET_AMT = SYS_BeFloat(TSU_TTL_AMT_sum) + SYS_BeFloat(sum_FrghtChrgs) + SYS_BeFloat(sum_Tax) + SYS_BeFloat(sum_Adjust);
            TSU_TTL_NET_AMT = SYS_BeFloat(TSU_TTL_NET_AMT);

            //Get Sum of TSU_TTL_AMT		
            var pNode = SYS_getParentDo(node);
            pRecord = SYS_getParentRecord(node);
            recorId = pRecord.recordID;
            SYS_setFieldValue(pNode, recorId, "TSU_LINE_TTL_AMT", TSU_TTL_AMT_sum);
            SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", TSU_TTL_NET_AMT);

        }

        function Tax_add() {
            // get sum of TSU_IAFT_AMT in current page;
            var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');
            nTSU_IAFT_AMT_CAL = SYS_BeFloat(nTSU_IAFT_AMT_CAL);

            // get TSU_LINE_TTL_AMT'value in parent page;
            var nTSU_LINE_TTL_AMT = SYS_getCurrNodeParentValue('R2Goods', 'TSU_LINE_TTL_AMT');
            nTSU_LINE_TTL_AMT = SYS_BeFloat(nTSU_LINE_TTL_AMT);
            // get Adjust sibling's sum 
            var nFrghtChrgs = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'FrghtChrgs');
            var nAdjust = SYS_getCurrNodeSiblingDOSum('TSU_IAFT_AMT_CAL', 'Adjustmtents');


            // get sum of TSU_TTL_NET_AMT and return value to main page;
            var nTSU_TTL_NET_AMT = nTSU_IAFT_AMT_CAL + nTSU_LINE_TTL_AMT + SYS_BeFloat(nFrghtChrgs) + SYS_BeFloat(nAdjust);
            nTSU_TTL_NET_AMT = SYS_BeFloat(nTSU_TTL_NET_AMT);
            var pNode = SYS_getParentDo(node);
            pRecord = SYS_getParentRecord(node);
            recorId = pRecord.recordID;

            SYS_setFieldValue(pNode, recorId, "TSU_TTL_NET_AMT", nTSU_TTL_NET_AMT);
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_Tax3_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2Goods_Tax3_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_Adjustmtents() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_FrghtChrgs() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_Incoterms1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_Adjustmtents() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_FrghtChrgs() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_Incoterms1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_ProductCategory() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_ProductCharacteristics() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_ProductIdentifier() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_ProductOrigin() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2RoutingSummary_R2MltmdlTrnsprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2ShipmntSchdl() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntDtRg() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_R2ShipmntSchdl_R2ShipmntSubSchdl() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2LineItemDetails7_Tax3() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DprtureAirprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByAir_DstnAirprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfDlvry() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRail_PlcOfRct() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfDlvry() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportByRoad_PlcOfRct() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfDschrge() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2IndvTrnsprt_R2TransportBySea_PortOfLoadng() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_R2RoutingSummary_R2MltmdlTrnsprt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2Goods_Tax3() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}


function R2InvolvedPartyInfo(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BillTo(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BillTo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BillTo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Buyer(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyerBank(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyerBank_ContactIdentification1(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyerBank_ContactIdentification1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyerBank_ContactIdentification1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyerBank_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyerBank_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Buyer_ContactIdentification1(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Buyer_ContactIdentification1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Buyer_ContactIdentification1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Buyer_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Buyer_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyrSdSubmitgBk(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyrSdSubmitgBk_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_BuyrSdSubmitgBk_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Consignee(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Consignee_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Consignee_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_OtherBk(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_OtherBk_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_OtherBk_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Seller(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellerBank(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellerBank_ContactIdentification1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellerBank_ContactIdentification1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellerBank_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellerBank_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Seller_ContactIdentification1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Seller_ContactIdentification1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Seller_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_Seller_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellrSdSubmitgBk(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellrSdSubmitgBk_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_SellrSdSubmitgBk_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_ShipTo(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_ShipTo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2InvolvedPartyInfo_ShipTo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_BillTo() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_Buyer() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_BuyerBank() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_BuyerBank_ContactIdentification1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_Buyer_ContactIdentification1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_BuyrSdSubmitgBk() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_Consignee() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_OtherBk() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_Seller() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_SellerBank() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_SellerBank_ContactIdentification1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_Seller_ContactIdentification1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_SellrSdSubmitgBk() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2InvolvedPartyInfo_ShipTo() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}


function R2PaymentObligation(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2PaymentObligation_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2PaymentObligation_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2PaymentObligation_PaymentTerms1(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2PaymentObligation_PaymentTerms1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2PaymentObligation_PaymentTerms1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2PaymentObligation_R2SettlementTerms2(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2PaymentObligation_R2SettlementTerms2_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2PaymentObligation_R2SettlementTerms2_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2PaymentObligation() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2PaymentObligation_PaymentTerms1() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2PaymentObligation_R2SettlementTerms2() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}


function R2PaymentTerms(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2PaymentTerms_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2PaymentTerms_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2PaymentTerms() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}


function R2SettlementTerms(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2SettlementTerms_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function R2SettlementTerms_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_R2SettlementTerms() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}


function SYF_TSUM_getDOdata_UserDefinedInformation() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_UserDefinedInformation_BuyerDefined() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_UserDefinedInformation_SellerDefined() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function UserDefinedInformation(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function UserDefinedInformation_BuyerDefined(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function UserDefinedInformation_BuyerDefined_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function UserDefinedInformation_BuyerDefined_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function UserDefinedInformation_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function UserDefinedInformation_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function UserDefinedInformation_SellerDefined(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function UserDefinedInformation_SellerDefined_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}

function UserDefinedInformation_SellerDefined_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2ProcessBaselineAcceptance_DO.js", e);
    }
}