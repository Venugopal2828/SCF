var sEmailId=NS.createMail("CSBankSupport","OWGT Apply for Amendment");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}