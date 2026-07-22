var sEmailId=NS.createMail("CSBankSupport","Apply for Amendment");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}