var sEmailId=NS.createMail("CSBankSupport","Claim Payment Instructions");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}