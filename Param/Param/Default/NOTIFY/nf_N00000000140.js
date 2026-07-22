var sEmailId=NS.createMail("CSBankSupport","EXCO Received Payment");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}