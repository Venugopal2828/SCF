DV.writeLog("**********GAPILOG STATR");
var lmttype=DV.getFieldValue("FA_LMT_TYPE");
DV.writeLog("FA_LMT_TYPE="+lmttype);
if(lmttype=='1'){
DV.appendField("FAEF_IF_Payment");
DV.writeLog("#########END");
}