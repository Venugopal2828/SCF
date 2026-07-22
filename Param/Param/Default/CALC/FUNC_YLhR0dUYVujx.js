CAL.setGetDataId("MEVETDf6z7uW");
var sDocRef = CAL.getOriFieldValue("PO_REF");
var mainCriteria = [["OP1",sDocRef]];
CAL.setCriteria(mainCriteria);
CAL.addGlobalProperty("serviceId", "InqPODetailInfo");