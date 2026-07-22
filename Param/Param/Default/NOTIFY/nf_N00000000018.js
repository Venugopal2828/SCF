var sEmailId=NS.createMail("CSBankSupport","IMCO Received Acceptance");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}