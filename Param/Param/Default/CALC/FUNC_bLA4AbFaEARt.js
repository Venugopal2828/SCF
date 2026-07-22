CAL.setGetDataId("ct7cFDApPYWy");
var sLoanId = CAL.getOriFieldValue("FA_LOAN_ID");
var mainCriteria = [["OP1",sLoanId]];
CAL.setCriteria(mainCriteria);
CAL.addGlobalProperty("serviceId", "InqLoanDetail");