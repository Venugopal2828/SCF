CAL.setGetDataId("R00000012560");
var sMainRef = CAL.getOriFieldValue("C_MAIN_REF");
var sRegNo = CAL.getOriFieldValue("REG_NO");
var mainCriteria = [["OP1",sMainRef],["OP2",sRegNo]];
CAL.setCriteria(mainCriteria);
CAL.addGlobalProperty("serviceId", "InqRegDetail");