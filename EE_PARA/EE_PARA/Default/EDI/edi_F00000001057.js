var sendflag = DV.getFieldValue("FA_SEND_MSG_FLG");
var busstype = DV.getFieldValue("FA_BUSI_TYPE");
if (sendflag == '1' && busstype == 'EF') {
    DV.appendField("DisputeSettl_Out");
}
if (sendflag == '1' && busstype == 'IF') {
    DV.appendField("IFDisputeSettl_Out");
}