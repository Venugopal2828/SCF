var sEmailId=NS.createMail("CSBankSupport","Response For Amend Decision");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}