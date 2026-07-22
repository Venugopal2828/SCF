var sEmailId=NS.createMail("CSBankSupport","EXLC Amendment Advise");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}