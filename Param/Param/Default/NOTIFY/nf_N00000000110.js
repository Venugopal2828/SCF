var sEmailId=NS.createMail("CSBankSupport","Export LC Advise");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}