CAL.setGetDataId("R00000011870");
var sMainRef = CAL.getOriFieldValue("FA_SBR_REF");
var sDocNo = CAL.getOriFieldValue("FA_DOC_NO");
var mainCriteria = [["OP1",sMainRef],["OP2",sDocNo]];
CAL.setCriteria(mainCriteria);