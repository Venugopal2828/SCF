var sEmailId=NS.createMail("CSBankSupport","Discrepancy Notification");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}