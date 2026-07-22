stp.writeLog("Incoming SWIFT 101 Function level Begin");
stp.setAutoProcess(true);
stp.setEventTimes(0);

/* create C_MAIN_REF */
var ref = stp.SYS_getRefNo("PYMT_INW");
//stp.setMainRef(ref);
stp.updateFieldValue("C_MAIN_REF", ref);
stp.writeLog("C_MAIN_REF= " + ref);

/*for 28D*/
var TAG_28D = stp.getSWIFTTagValue("28D");
var nIndx = TAG_28D.indexOf("/");
stp.updateFieldValue("MSG_INDEX", TAG_28D.substring(0, nIndx));
stp.updateFieldValue("MSG_TOTAL", TAG_28D.substring(nIndx + 1));

stp.writeLog("Incoming SWIFT 101 Function level End");



/*for 50 details*/
var TAG50C = stp.getSWIFTTagValue("50C");
if (TAG50C == "") {
    stp.updateFieldValue("X203_52_TAG", "L");
    var TAG50L = stp.getSWIFTTagValue("50L");
    stp.updateFieldValue("X203_58_PARTY_IDENTIFIER", stp.getLineValue(TAG50L, 1));
} else {
    stp.updateFieldValue("X203_52_TAG", "C");
    stp.updateFieldValue("X203_58A_IDENTIFIER", stp.getLineValue(TAG50C, 1));
}


/*for 50 details*/
var TAG50G = stp.getSWIFTTagValue("50G");
var TAG50H = stp.getSWIFTTagValue("50H");
if (TAG50G == "") {
    if (TAG50H == "") {
        stp.updateFieldValue("X102_50_TAG", "F");
        var TAG50F = stp.getSWIFTTagValue("50F");
        if (TAG50F.substr(0, 1) == "/") {
            stp.updateFieldValue("X102_50A_ACCOUNT", stp.getLineValue(TAG50F, 1));
            stp.updateFieldValue("X102_50F_PARTY_NAME", stp.getLineValue(TAG50F, 2));
            stp.updateFieldValue("X102_50F_PARTY_ADD1", stp.getLineValue(TAG50F, 3));
            stp.updateFieldValue("X102_50F_PARTY_ADD2", stp.getLineValue(TAG50F, 4));
            stp.updateFieldValue("X102_50F_PARTY_ADD3", stp.getLineValue(TAG50F, 5));
        } else {
            stp.updateFieldValue("X102_50F_PARTY_NAME", stp.getLineValue(TAG50F, 1));
            stp.updateFieldValue("X102_50F_PARTY_ADD1", stp.getLineValue(TAG50F, 2));
            stp.updateFieldValue("X102_50F_PARTY_ADD2", stp.getLineValue(TAG50F, 3));
            stp.updateFieldValue("X102_50F_PARTY_ADD3", stp.getLineValue(TAG50F, 4));
        }
    } else {
        stp.updateFieldValue("X102_50_TAG", "H");
        var TAG50H = stp.getSWIFTTagValue("50H");
        if (TAG50H.substr(0, 1) == "/") {
            stp.updateFieldValue("X102_50A_ACCOUNT", stp.getLineValue(TAG50H, 1));
            stp.updateFieldValue("X102_50F_PARTY_NAME", stp.getLineValue(TAG50H, 2));
            stp.updateFieldValue("X102_50F_PARTY_ADD1", stp.getLineValue(TAG50H, 3));
            stp.updateFieldValue("X102_50F_PARTY_ADD2", stp.getLineValue(TAG50H, 4));
            stp.updateFieldValue("X102_50F_PARTY_ADD3", stp.getLineValue(TAG50H, 5));
        } else {
            stp.updateFieldValue("X102_50F_PARTY_NAME", stp.getLineValue(TAG50H, 1));
            stp.updateFieldValue("X102_50F_PARTY_ADD1", stp.getLineValue(TAG50H, 2));
            stp.updateFieldValue("X102_50F_PARTY_ADD2", stp.getLineValue(TAG50H, 3));
            stp.updateFieldValue("X102_50F_PARTY_ADD3", stp.getLineValue(TAG50H, 4));
        }
    }
} else {
    stp.updateFieldValue("X102_50_TAG", "G");
    if (TAG50G.substr(0, 1) == "/") {
        stp.updateFieldValue("X102_50A_ACCOUNT", stp.getLineValue(TAG50G, 1));
        stp.updateFieldValue("X102_50A_IDENTIFIER", stp.getLineValue(TAG50G, 2));
    } else {
        stp.updateFieldValue("X102_50A_IDENTIFIER", stp.getLineValue(TAG50G, 1));
    }

}

/*for 52 details*/
var TAG52C = stp.getSWIFTTagValue("52C");
if (TAG52C == "") {
    stp.updateFieldValue("X102_52_TAG", "A");
    var TAG52A = stp.getSWIFTTagValue("52A");
    stp.updateFieldValue("X102_52A_PARTY_IDENTIFIER", stp.getLineValue(TAG52A, 1));
    stp.updateFieldValue("X102_52A_IDENTIFIER", stp.getLineValue(TAG52A, 2));
} else {
    stp.updateFieldValue("X102_52_TAG", "C");
    stp.updateFieldValue("X102_52A_PARTY_IDENTIFIER", stp.getLineValue(TAG52C, 1));
}

/*for Do 50 details
var TAG50C = stp.getSWIFTTagValue("50C");
if (TAG50C == "") {
    stp.updateFieldValue("X103_TAG_50A", "L");
    var TAG50L = stp.getSWIFTTagValue("50L");
    stp.updateFieldValue("X203_58_PARTY_IDENTIFIER", stp.getLineValue(TAG50L, 1));
} else {
    stp.updateFieldValue("X103_TAG_50A", "C");
    stp.updateFieldValue("X203_58A_IDENTIFIER", stp.getLineValue(TAG50C, 1));
}
*/