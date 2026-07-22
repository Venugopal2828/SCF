var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ReceiveAmtFromCE.js", e);
    }
}