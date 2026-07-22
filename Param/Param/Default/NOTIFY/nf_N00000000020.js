var sEmailId=NS.createMail("CSBankSupport","Guarantee Issued");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}