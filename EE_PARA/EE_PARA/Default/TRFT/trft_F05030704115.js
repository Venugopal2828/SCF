var org = DV.getFieldValue("ORIG_FA_COUNTER_TYPE");
var new_tp = DV.getFieldValue("FA_COUNTER_TYPE");
DV.writeLog("counter up============");
if(org != new_tp){
   DV.writeLog("counter up start============");
 DV.appendField("FADA_COUNTER_TP_UPDATE");
DV.writeLog("counter up end============");
}