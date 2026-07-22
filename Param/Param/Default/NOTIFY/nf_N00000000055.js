var sEmailId=NS.createMail("CSBankSupport","Decision on Discrepancies");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}