var sType = DV.getFieldValue("FA_BUSI_TYPE");
if(sType == "SF" || sType == "DD"){
DV.appendDOMsg("RFAmendAgreementRequest","/root/domData/XDO_SA_RF");
} else if(sType == "RD"){
DV.appendDOMsg("DFAmendAgreementRequest","/root/domData/XDO_SA_DF");
}
