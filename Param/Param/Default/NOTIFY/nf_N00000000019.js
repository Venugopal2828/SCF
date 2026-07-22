var sEmailId=NS.createMail("CSBankSupport","OWGT Bank Decision Guarantee App");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}