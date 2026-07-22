var sEmailId=NS.createMail("CSBankSupport","OWGT Beneficiary Decision");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}