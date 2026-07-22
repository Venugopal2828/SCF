CAL.setGetDataId("R00000012656");
var SbuyerID = CAL.getOriFieldValue("FA_BUYER_ID");
var SsellerID = CAL.getOriFieldValue("FA_SEL_ID");
var Sccy = CAL.getOriFieldValue("FA_DOC_CCY");
var mainCriteria = [["OP1",SbuyerID],["OP2",SsellerID],["OP3",Sccy]];
CAL.setCriteria(mainCriteria);