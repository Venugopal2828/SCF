stp.setAutoProcess(true);
var sB6TAG = stp.getSWIFTTagValue("B6");
stp.writeLog("Birdie-B6:" + sB6TAG);
var s21TAG = stp.getSWIFTTagValue("21");
stp.writeLog("s21TAG:" + s21TAG);
stp.updateFieldValue('C_MAIN_REF', s21TAG);
stp.setEventTimesFromTable('PYMT_MASTER');

var tag121 = stp.getSWIFTTagValue("121");
var tag20 = stp.getSWIFTTagValue("20");
var tag76 = stp.getSWIFTTagValue("76");
var tag79 = stp.getSWIFTTagValue("79");
var trxdate = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", trxdate);
stp.writeLog("trxdate:" + trxdate);
stp.updateFieldValue("SENDER_REF", tag20);
stp.updateFieldValue("UETR_GPI_121", tag121);
stp.updateFieldValue("SERVICE_TYPE_ID_GPI_111", "002");
stp.updateFieldValue("GSRP_STRC_TYPE", "REST");
if (tag76 != '' && tag76 != null) {
    stp.updateFieldValue("GSRP_STRC_CODE", tag76);
}
if (tag79 != '' && tag79 != null) {
    stp.updateFieldValue("GSRP_STRC_CODE", tag79);
}
var commFieldList6 = stp.addFieldList(null, "VALUE_DT");
var commCondition6 = stp.addSQLCondition(null, "C_MAIN_REF", s21TAG);
var commResult6 = stp.executeQuery("PYMT_STRC", commFieldList6, commCondition6);
var CancelDate = stp.getDBFieldValue(commResult6, "VALUE_DT");
stp.updateFieldValue("VALUE_DT", CancelDate);