var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_PYMT_ref = function() {
    try {

        var seq = stp.SYS_getRefNo("PYMT_INW");
        var reqDate = stp.getSysBusiDate();
        var juldate = String(reqDate.toString().substr(2, 2) + String(SYT_getDOY()));
        var sCntyCode = stp.getBusiUnit().substr(0, 4);
        var prod = seq.substr(0, 2);
        var seqNumber = seq.substr(2, 5);
        var ss = prod + juldate + sCntyCode + seqNumber;

        stp.updateFieldValue("C_MAIN_REF", ss);
    } catch (e) {
        DisExcpt("SYF_PYMT_Incoming_MT910.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Incoming_MT910.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Incoming_MT910.js", e);
    }
}