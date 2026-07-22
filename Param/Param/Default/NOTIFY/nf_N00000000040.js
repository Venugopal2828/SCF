var sEmailId=NS.createMail("CSBankSupport","IMLC Bank Decision");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}