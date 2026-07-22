CAL.setGetDataId("R00000013586");
var sMainRef = CAL.getOriFieldValue("FA_SBR_REF");
var sDocRef = CAL.getOriFieldValue("FA_DOC_REF");
var mainCriteria = [["OP1",sMainRef],["OP2",sDocRef]];
CAL.setCriteria(mainCriteria);
CAL.addGlobalProperty("serviceId", "InqInvDetailInfo");
