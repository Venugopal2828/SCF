var sEmailId=NS.createMail("CSBankSupport","IWGT Amendment Decision");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}