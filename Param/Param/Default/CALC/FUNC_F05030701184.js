CAL.setGetDataId("R00000013181");
var acCode = CAL.getOriFieldValue("I_AC_CODE");
var startDate = CAL.getOriFieldValue("START_DATE");
var endDate = CAL.getOriFieldValue("END_DATE");
var mainCriteria = [["OP1",acCode],["OP2",startDate],["OP3",endDate]];
CAL.setCriteria(mainCriteria);