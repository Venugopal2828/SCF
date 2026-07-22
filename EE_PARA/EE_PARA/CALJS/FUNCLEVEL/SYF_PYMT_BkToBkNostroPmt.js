var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        //AAA
    } catch (e) {
        DisExcpt("SYF_PYMT_BkToBkNostroPmt.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_BkToBkNostroPmt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_BkToBkNostroPmt.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_BkToBkNostroPmt.js", e);
    }
}