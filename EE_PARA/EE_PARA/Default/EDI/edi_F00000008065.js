var sendflag = DV.getFieldValue("FA_SEND_MSG_FLG");
var busitype = DV.getFieldValue("FA_BUSI_TYPE");
if (sendflag == '1' && busitype == 'EF') {
    DV.appendField("DisputeReg_Out");
}
if (sendflag == '1' && busitype == 'IF') {
    DV.appendField("IFDisputeReg_Out");
}