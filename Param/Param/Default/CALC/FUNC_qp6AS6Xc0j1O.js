var sBusiType = CAL.getOriFieldValue("FA_BUSI_TYPE");
if(sBusiType == 'DF'){
  CAL.setGetDataId("R00000013580");
  var sMainRef = CAL.getOriFieldValue("FA_SBR_REF");
  var mainCriteria = [["OP1",sMainRef]];
}else if(sBusiType == 'EF'){
  CAL.setGetDataId("lTNsf3pMYAZ7");
  var sMainRef = CAL.getOriFieldValue("FA_SBR_REF");
  var mainCriteria = [["OP1",sMainRef],["OP2",sMainRef]];
}
CAL.setCriteria(mainCriteria);
CAL.addGlobalProperty("serviceId", "InqSBRDetailInfo");
CAL.addGlobalProperty("SBRREF", sMainRef);