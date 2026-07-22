var field = DV.getFieldValue("FA_SEND_MSG_FLG");
var busitype = DV.getFieldValue("FA_BUSI_TYPE");
if (field == '2' && busitype == 'EF') {
    DV.appendField("FAEF_DisputeAdvice");
}

if (field == '2' && busitype == 'IF') {
    DV.appendField("FAEF_IF_Dispute");
}