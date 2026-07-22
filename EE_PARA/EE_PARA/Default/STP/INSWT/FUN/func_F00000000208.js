stp.writeLog("Assgin Incoming MT740 Begin");
var ref = stp.SYS_getRefNo('REIM');
stp.setMainRef(ref);

stp.setAutoProcess(true);
var TagB6 = stp.getSWIFTTagValue("B6");
var pre = TagB6.substr(14, 8);
var suf = TagB6.substr(23, 3);
var ISSUE_BK_SW_ADD = pre + suf;
stp.updateFieldValue("ISSUE_BK_SW_ADD", ISSUE_BK_SW_ADD);

stp.updateFieldValue("CURRNT_STATUS", "ReceiveMT740");
stp.updateFieldValue("NXT_STATUS", "ProcessMT740");
stp.updateFieldValue("CLS_FLG", "NO");

var TAG42A = stp.getSWIFTTagValue("42A");
if (TAG42A == "") {
    var TAG42D = stp.getSWIFTTagValue("42D");
    if (TAG42D.substr(0, 1) == "/") {
        stp.updateFieldValue("DRWE_NM", stp.getLineValue(TAG42D, 2));
        stp.updateFieldValue("DRWE_ADD1", stp.getLineValue(TAG42D, 3));
        stp.updateFieldValue("DRWE_ADD2", stp.getLineValue(TAG42D, 4));
        stp.updateFieldValue("DRWE_ADD3", stp.getLineValue(TAG42D, 5));
    } else {
        stp.updateFieldValue("DRWE_NM", stp.getLineValue(TAG42D, 1));
        stp.updateFieldValue("DRWE_ADD1", stp.getLineValue(TAG42D, 2));
        stp.updateFieldValue("DRWE_ADD2", stp.getLineValue(TAG42D, 3));
        stp.updateFieldValue("DRWE_ADD3", stp.getLineValue(TAG42D, 4));
    }
} else {
    if (TAG42A.substr(0, 1) == "/") {
        stp.updateFieldValue("DRWE_SW_ADD", stp.getLineValue(TAG42A, 2));
    } else {
        stp.updateFieldValue("DRWE_SW_ADD", stp.getLineValue(TAG42A, 1));
    }

}

var TAG58A = stp.getSWIFTTagValue("58A");
if (TAG58A == "") {
    var TAG58D = stp.getSWIFTTagValue("58D");
    if (TAG58D.substr(0, 1) == "/") {
        stp.updateFieldValue("PRES_BK_NM", stp.getLineValue(TAG58D, 2));
        stp.updateFieldValue("PRES_BK_ADD1", stp.getLineValue(TAG58D, 3));
        stp.updateFieldValue("PRES_BK_ADD2", stp.getLineValue(TAG58D, 4));
        stp.updateFieldValue("PRES_BK_ADD3", stp.getLineValue(TAG58D, 5));
    } else {
        stp.updateFieldValue("PRES_BK_NM", stp.getLineValue(TAG58D, 1));
        stp.updateFieldValue("PRES_BK_ADD1", stp.getLineValue(TAG58D, 2));
        stp.updateFieldValue("PRES_BK_ADD2", stp.getLineValue(TAG58D, 3));
        stp.updateFieldValue("PRES_BK_ADD3", stp.getLineValue(TAG58D, 4));
    }
} else {
    if (TAG58A.substr(0, 1) == "/") {
        stp.updateFieldValue("PRES_BK_SW_ADD", stp.getLineValue(TAG58A, 2));
    } else {
        stp.updateFieldValue("PRES_BK_SW_ADD", stp.getLineValue(TAG58A, 1));
    }

}


var TAG59 = stp.getSWIFTTagValue("59");

if (TAG59.substr(0, 1) == "/") {
    stp.updateFieldValue("BENE_ACNO", stp.getLineValue(TAG59, 1).substr(1));
    stp.updateFieldValue("BENE_NM", stp.getLineValue(TAG59, 2));
    stp.updateFieldValue("BENE_ADD1", stp.getLineValue(TAG59, 3));
    stp.updateFieldValue("BENE_ADD2", stp.getLineValue(TAG59, 4));
    stp.updateFieldValue("BENE_ADD3", stp.getLineValue(TAG59, 5));
} else {
    stp.updateFieldValue("BENE_NM", stp.getLineValue(TAG59, 1));
    stp.updateFieldValue("BENE_ADD1", stp.getLineValue(TAG59, 2));
    stp.updateFieldValue("BENE_ADD2", stp.getLineValue(TAG59, 3));
    stp.updateFieldValue("BENE_ADD3", stp.getLineValue(TAG59, 4));
}

var APLB_RULE = stp.getSWIFTTagValue("40F");
if (APLB_RULE != "") {
    stp.updateFieldValue("APLB_RULE", APLB_RULE);
}

stp.writeLog("Assgin Incoming MT740 end");