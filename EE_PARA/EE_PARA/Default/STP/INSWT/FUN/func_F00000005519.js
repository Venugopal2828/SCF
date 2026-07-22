stp.setAutoProcess(true);
var s21TAG = stp.getSWIFTTagValue("21");
stp.writeLog("s21TAG:" + s21TAG);
stp.updateFieldValue('C_MAIN_REF', s21TAG);
stp.setEventTimesFromTable('FFIT_MASTER');

var sMsgType = stp.getSWIFTTagValue("B6").substr(1, 3);
stp.writeLog("sMsgType:" + sMsgType);
if (sMsgType == '799') {
    stp.updateFieldValue('TEMP_N90_REF_21', s21TAG);
}
if (sMsgType == '499') {
    stp.updateFieldValue('TEMP_N90_REF_21', s21TAG);
}
if (sMsgType == '202') {
    stp.updateFieldValue('X202_RELATEDNO_21', s21TAG);
}


var sB6TAG = stp.getSWIFTTagValue("B6");
stp.writeLog("Birdie-B6:" + sB6TAG);