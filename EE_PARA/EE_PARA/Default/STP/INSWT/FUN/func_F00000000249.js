stp.writeLog("incomg mt747 begin");
stp.setAutoProcess(true);

stp.updateFieldValue("CURRNT_STATUS", "ReceiveMT747");
stp.updateFieldValue("NXT_STATUS", "ProcessMT747");
/*
var tag20=stp.getSWIFTTagValue("20");
stp.writeLog("tag20: " + tag20);
stp.SYS_getCUBK("LC_NO","LC_NO");
var ref=stp.getFieldValue("C_MAIN_REF");
stp.writeLog("C_MAIN_REF: " + ref);
stp.SYS_getCUBK("AMD_NO","C_MAIN_REF");
*/
var ref = stp.getFieldValue("C_MAIN_REF");
var sTag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", sTag21);
stp.SYS_getCUBK("AMD_NO", "C_MAIN_REF");

var tempB6 = stp.getSWIFTTagValue("B6");
var vyear = stp.getPartValue(tempB6, "37", "2");
var vmonth = stp.getPartValue(tempB6, "39", "2");
var vdate = stp.getPartValue(tempB6, "41", "2");
var vamd_date = "20" + vyear + "-" + vmonth + "-" + vdate;
stp.updateFieldValue("AMD_DT", vamd_date);
stp.writeLog("vamd_date:" + vamd_date);

var amdno = stp.toInteger(stp.getFieldValue("NO_OF_AMD"));
stp.writeLog("NO_OF_AMD: " + amdno);
if (amdno == '' && amdno == 0) {
    amdno = 1;
} else {
    amdno = amdno + 1;
}
stp.writeLog("amdno: " + amdno);
var amdref;
if (amdno >= 10) {
    amdref = ref + '/' + amdno;
} else {
    amdref = ref + '/0' + amdno;
}
stp.writeLog("AMD_REF: " + amdref);
stp.writeLog("NO_OF_AMD: " + amdno);
stp.updateFieldValue("AMD_REF", amdref);
stp.updateFieldValue("NO_OF_AMD", amdno);