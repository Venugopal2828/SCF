var sType = DV.getFieldValue("FA_BUSI_TYPE");
if(sType == "RF"){
DV.appendDOMsg("RFAmendAgreementRequest","/root/domData/XDO_SA_RF");
} else if(sType == "DF"){
DV.appendDOMsg("DFAmendAgreementRequest","/root/domData/XDO_SA_DF");
}else if(sType == "POF"){
DV.appendDOMsg("DFAmendAgreementRequest","/root/domData/XDO_SA_DF");
}else {
DV.appendField("AmendAgreementRequest");
}
