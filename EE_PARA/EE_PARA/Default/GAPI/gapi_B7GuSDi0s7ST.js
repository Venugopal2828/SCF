DV.writeLog("EE To CE Gapi started 1" );
//Added by sangeetha//
var ACCEPT_REJECT = DV.getFieldValue("ACCEPT_REJECT"); 
DV.writeLog("ACCEPT_REJECT="+ACCEPT_REJECT); 
if(ACCEPT_REJECT == "ACCEPT"){
DV.writeLog("EE To CE Gapi Accept"); 
DV.appendField("STAT_CP_EEToCE");
DV.appendField("STAT_CP_AddSignRec");
//Added by venu
}else{
DV.writeLog("EE To CE Gapi REJECT");
DV.appendField("STAT_EEToCE");
}

//Added by sangeetha//
DV.writeLog("EE To CE Gapi ended"); 


