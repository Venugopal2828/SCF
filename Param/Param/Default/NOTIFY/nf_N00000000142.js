var sEmailId=NS.createMail("CSBankSupport","Received Export LC Advise");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}