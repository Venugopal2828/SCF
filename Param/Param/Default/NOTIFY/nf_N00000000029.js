var sEmailId=NS.createMail("CSBankSupport","IMCO Received Settlement");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}