var sIntInsBIC = DV.getFieldValue("X200_MEDI_BKSW_56A");
DV.writeLog(sIntInsBIC);

if (sIntInsBIC != '') {
    DV.writeLog(sIntInsBIC + "1");
    DV.appendTag("56A");
}
var sIntInsBIC = DV.getFieldValue("X200_MEDI_BKSW_56A");

if (sIntInsBIC == '') {
    DV.appendTag("56D");
}
var sAcctWithInsBIC = DV.getFieldValue("X200_ACC_BKSW_57A");

if (sAcctWithInsBIC != '') {
    DV.appendTag("57A");
}
var sAcctWithInsBIC = DV.getFieldValue("X200_ACC_BKSW_57A");
var sAcctWithInsTag = DV.getFieldValue("X200_TAG_57A");

if (sAcctWithInsBIC == '' && sAcctWithInsTag.equals('B')) {
    DV.appendTag("57B");
}
var sAcctWithInsBIC = DV.getFieldValue("X200_ACC_BKSW_57A");
var sAcctWithInsTag = DV.getFieldValue("X200_TAG_57A");

if (sAcctWithInsBIC == '' && sAcctWithInsTag.equals('D')) {
    DV.appendTag("57D");
}