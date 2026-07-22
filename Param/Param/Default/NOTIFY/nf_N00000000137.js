var sEmailId=NS.createMail("CSBankSupport","EXCO Payment Instructions");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}