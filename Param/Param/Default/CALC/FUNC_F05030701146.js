CAL.setGetDataId("R00000012564");
var sContractRef = CAL.getOriFieldValue("FA_CNTR_REF");
var sLoanId = CAL.getOriFieldValue("FA_LOAN_ID");
var mainCriteria = [["OP1",sContractRef],["OP2",sLoanId]];
CAL.setCriteria(mainCriteria);
CAL.addGlobalProperty("serviceId", "InqLoanDetailABL");