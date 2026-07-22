CAL.setGetDataId("R00000013584");
//var sMainRef = CAL.getOriFieldValue("FA_SBR_REF");
var sDocRef = CAL.getOriFieldValue("FA_DOC_REF");
//var mainCriteria = [["OP1",sMainRef],["OP2",sDocNo]];
var mainCriteria = [["OP1",sDocRef]];
CAL.setCriteria(mainCriteria);
CAL.addGlobalProperty("serviceId", "InqInvDetailInfo");