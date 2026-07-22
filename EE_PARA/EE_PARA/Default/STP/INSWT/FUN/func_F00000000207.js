stp.setAutoProcess(true);

stp.updateFieldValue("CURRNT_STATUS", "Receive MT416");

/* for TAG 23E */
var TAG_23E = stp.getSWIFTTagValue("23E");
var nIndx = TAG_23E.indexOf("/");
if (nIndx > -1) {
    stp.updateFieldValue("ADV_TYPE", TAG_23E.substring(0, nIndx));
    stp.updateFieldValue("ADV_TXT", TAG_23E.substring(nIndx + 1));
} else {
    stp.updateFieldValue("ADV_TYPE", TAG_23E);
}

stp.setEventTimesFromTable("EXCO_MASTER");