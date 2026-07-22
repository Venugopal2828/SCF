var sEmailId=NS.getMail("CSBankSupport","Apply for Guarantee");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}