var sEmailId=NS.createMail("CSBankSupport","IMCO Received Amendment");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}