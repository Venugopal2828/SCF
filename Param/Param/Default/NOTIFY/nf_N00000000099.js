var sEmailId=NS.createMail("CSBankSupport","OWGT Beneficiary Consent");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setAutoSend(sEmailId,true);
}