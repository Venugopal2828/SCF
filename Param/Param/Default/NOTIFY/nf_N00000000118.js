var sEmailId=NS.createMail("CSBankSupport","EXLC Disposal Instructions");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}