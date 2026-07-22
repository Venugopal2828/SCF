var sEmailId=NS.createMail("CSBankSupport","IMLC Amended");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
    //NS.attachImage(sEmailId,"STP_IN_IMG");
    NS.appendAllImage(sEmailId);
}