var sEmailId=NS.createMail("CSBankSupport","Claim Response Settlement Inst");
var sEmailto = NS.getFieldValue("EMAIL_TO");
if (sEmailto != null) {
    NS.setReleaseSend(sEmailId,true);
}