var busstype = DV.getFieldValue("FA_BUSI_TYPE");
var status = DV.getFieldValue("FA_DSP_STATUS");
var trxDt = DV.getFieldValue("TRX_DT");
var FA_DSP_DT = DV.getFieldValue("FA_DSP_DT");
var MaxdspDt1 = DV.calDate(FA_DSP_DT, "14");
var MaxdspDt2 = DV.calDate(FA_DSP_DT, "29");
DV.writeLog("MaxdspDt2");
if (busstype == 'EF') {
    if (status == '2' && trxDt > MaxdspDt2) {
        DV.appendField("FAEF_DisputeSettlementTrace02");
    } else if (status == '2' && trxDt > MaxdspDt1 && trxDt < MaxdspDt2) {
        DV.appendField("FAEF_DisputeSettlementTrace01");
    }
}