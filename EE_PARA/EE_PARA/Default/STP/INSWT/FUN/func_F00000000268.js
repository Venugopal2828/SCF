stp.writeLog("Receive 750 begin");
stp.setAutoProcess(true);

/* for DRAWING_REF && NO_OF_DRAW */
var C_MAIN_REF = stp.getFieldValue("C_MAIN_REF");
stp.writeLog("C_MAIN_REF = " + C_MAIN_REF);
stp.SYS_getCUBK("NO_OF_DRAW", "C_MAIN_REF");
var NO_OF_DRAW = stp.toInteger(stp.getFieldValue("NO_OF_DRAW")) + 1;
/*
var sB2 = stp.getSWIFTTagValue("B2");
var ssb2 = sB2.substring(13,8);
stp.updateFieldValue("PRES_BK_SW_ADD",ssb2);
*/

/* Map PRES_BK_SW_ADD from B6 */
var TagB6 = stp.getSWIFTTagValue("B6");
var pre = TagB6.substr(14, 8);
var suf = TagB6.substr(23, 3);
var PRES_BK_SW_ADD = pre + suf;
stp.updateFieldValue("PRES_BK_SW_ADD", PRES_BK_SW_ADD);

var ref = C_MAIN_REF + "/0" + NO_OF_DRAW;
stp.updateFieldValue("DRAWING_REF", ref);
stp.updateFieldValue("NO_OF_DRAW", NO_OF_DRAW);

stp.updateFieldValue("CURRNT_STATUS", "ReceiveMT750");
stp.updateFieldValue("REC750_FLAG", "Yes");
/*stp.writeLog("Receive 750 end");*/