CAL.setGetDataId("DbPDxNYcbkw3");
var sMainRef = CAL.getOriFieldValue("FA_SBR_REF");
var sDocRef = CAL.getOriFieldValue("PO_REF");
var mainCriteria = [["OP1",sMainRef],["OP2",sDocRef]];
CAL.setCriteria(mainCriteria);
CAL.addGlobalProperty("serviceId", "InqPODetailInfo");
