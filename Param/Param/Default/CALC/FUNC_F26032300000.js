CAL.setGetDataId("R00000013580");
var sMainRef = CAL.getOriFieldValue("FA_SBR_REF");
var mainCriteria = [["OP1",sMainRef]];
CAL.setCriteria(mainCriteria);
CAL.addGlobalProperty("serviceId", "InqSBRDetailInfo");
CAL.addGlobalProperty("SBRREF", sMainRef);
