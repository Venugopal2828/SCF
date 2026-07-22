var sType = DV.getFieldValue("FA_BUSI_TYPE");
if(sType == "RF"){
DV.appendDOMsg("RFSignAgreementRequest","/root/domData/XDO_SA_RF");
} else if(sType == "DF"){
DV.appendDOMsg("DFSignAgreementRequest","/root/domData/XDO_SA_DF");
}else if(sType == "POF"){
DV.appendDOMsg("DFSignAgreementRequest","/root/domData/XDO_SA_DF");
}else if(sType == "RCF"){
DV.appendDOMsg("DFSignAgreementRequest","/root/domData/XDO_SA_DF");//20190523;
}else {
DV.appendField("SignAgreementRequest");
}
