var sEmailId=NS.createMail("CSBankSupport","Received Non Payment Acceptance");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}