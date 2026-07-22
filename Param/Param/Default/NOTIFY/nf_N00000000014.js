var sEmailId=NS.createMail("CSBankSupport","IMCO Payment Instructions");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}