CAL.setGetDataId("QGit5Q6atB2k");
var sDocRef = CAL.getOriFieldValue("PO_REF");
var mainCriteria = [["OP1",sDocRef]];
CAL.setCriteria(mainCriteria);
CAL.addGlobalProperty("serviceId", "InqPODetailInfo");