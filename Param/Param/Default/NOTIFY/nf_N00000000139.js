var sEmailId=NS.createMail("CSBankSupport","EXCO Amended");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}