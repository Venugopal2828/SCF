var sEmailId=NS.createMail("CSBankSupport","EXLC Received Amendment");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}