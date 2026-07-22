var sEmailId=NS.createMail("CSBankSupport","Import Collection Advice");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}