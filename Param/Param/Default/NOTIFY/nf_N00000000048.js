var sEmailId=NS.createMail("CSBankSupport","Document Presentation");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}