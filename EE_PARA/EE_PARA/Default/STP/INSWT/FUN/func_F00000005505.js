stp.setbAutoProcess(true);

stp.writeLog("STP START: Start 910 Received--------");
var RelateRef = stp.getSWIFTTagValue("21");
stp.updateFieldValue("INW_X910_RELATED_REF_21", RelateRef);


stp.SYS_getCUBK("Get_910_C_MAIN_REF", "INW_X910_RELATED_REF_21");
stp.updateFieldValue("CURRNT_STATUS", "RcvMT910afterMT103");

var INW_X910_RELATED_REF_21 = stp.getFieldValue("INW_X910_RELATED_REF_21");
stp.writeLog("INW_X910_RELATED_REF_21--------" + INW_X910_RELATED_REF_21);


var C_MAIN_REF = stp.getFieldValue("C_MAIN_REF");
stp.writeLog("C_MAIN_REF--------" + C_MAIN_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);


stp.writeLog("STP END: END 910 Received======== ");