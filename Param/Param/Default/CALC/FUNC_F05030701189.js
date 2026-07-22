CAL.setGetDataId("R00000013589");
var sMainRef = CAL.getOriFieldValue("C_MAIN_REF");
var mainCriteria = [["OP1",sMainRef]];
CAL.setCriteria(mainCriteria);
CAL.addGlobalProperty("serviceId", "InqAgmDetailInfo");
//CAL.addGlobalProperty("SBRREF", sMainRef);