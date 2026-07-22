stp.setAutoProcess(true);
var sTag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", sTag21);


/* for ISSUE_DT */
var sB6TAG = stp.getSWIFTTagValue("B6");
var year = sB6TAG.substr(8, 2);
var month = sB6TAG.substr(10, 2);
var day = sB6TAG.substr(12, 2);
var ISS_DT = '20' + year + '-' + month + '-' + day;
stp.updateFieldValue("ACK_DT", ISS_DT);

stp.writeLog("11111111111111111111111");