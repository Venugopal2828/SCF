CAL.setGetDataId("R00000012346");
var sMainRef = CAL.getOriFieldValue("FA_SBR_REF");
var sDocNo = CAL.getOriFieldValue("PO_NO");
var mainCriteria = [["OP1",sMainRef],["OP2",sDocNo]];
CAL.setCriteria(mainCriteria);