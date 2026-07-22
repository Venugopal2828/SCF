var sEmailId=NS.createMail("CSBankSupport","EXLC Received Doc Presentation");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}