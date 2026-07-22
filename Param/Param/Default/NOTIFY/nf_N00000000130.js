var sEmailId=NS.createMail("CSBankSupport","EXLC Document Presentation");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}