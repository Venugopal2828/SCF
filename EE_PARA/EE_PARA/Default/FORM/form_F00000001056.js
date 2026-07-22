var busstype = DV.getFieldValue("FA_BUSI_TYPE");
var msgFlg = DV.getFieldValue("FA_SEND_MSG_FLG");
var status = DV.getFieldValue("FA_DSP_STATUS");
var trxDt = DV.getFieldValue("TRX_DT");
var FA_DSP_DT = DV.getFieldValue("FA_DSP_DT");
var dspDt1 = DV.calDate(FA_DSP_DT, "14");
var dspDt2 = DV.calDate(FA_DSP_DT, "29");
if (busstype == 'EF') {
    if (msgFlg == '2' && status == '2' && trxDt > dspDt1 && trxDt < dspDt2) {
        DV.appendField("FAEF_DisputeSettlementTrace01");
    } else if (msgFlg == '2' && status == '2' && trxDt > dspDt2) {
        DV.appendField("FAEF_DisputeSettlementTrace02");
    }
}