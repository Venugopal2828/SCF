var sType = DV.getFieldValue("FA_BUSI_TYPE");
if(sType == "SF" || sType == "DD"){
DV.appendDOMsg("RFSignAgreementRequest","/root/domData/XDO_SA_RF");
} else if(sType == "RD"){
DV.appendDOMsg("DFSignAgreementRequest","/root/domData/XDO_SA_DF");
}
