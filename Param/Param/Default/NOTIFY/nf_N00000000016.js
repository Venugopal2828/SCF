var sEmailId=NS.createMail("CSBankSupport","Received Import Collection");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}