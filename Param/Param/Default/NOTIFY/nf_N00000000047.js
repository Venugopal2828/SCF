var sEmailId=NS.createMail("CSBankSupport","Received Document Presentation");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}