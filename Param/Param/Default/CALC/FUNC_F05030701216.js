var sFuncId = CAL.getOriFuncId();
if(sFuncId == "Fsr5rNiaoOOv"){
  CAL.updateFieldValue("C_MSG_SET", "Invoice");
  CAL.updateFieldValue("C_MSG_TYPE", "SCF79");
  CAL.updateFieldValue("XSLID", "SCF79_INV");
}else{
  CAL.addGlobalProperty("serviceId", "BuyerApv");
}
