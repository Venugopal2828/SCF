var sEmailId=NS.createMail("CSBankSupport","EXLC Received Settlement");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}