var sEmailId=NS.createMail("CSBankSupport","OWGT Bank Decision on Amendment");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}