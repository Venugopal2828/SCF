DV.writeLog("----------Transfer To111----------");
var DETRMNTL_FLG = DV.getFieldValue("DETRMNTL_FLG");
DV.writeLog(DETRMNTL_FLG);
if(DETRMNTL_FLG =='No')
{
DV.writeLog("----------Transfer To222----------");
	DV.appendField("IPLC_IssueLCAmdFrCE_toMaster");
}
DV.writeLog("----------Transfer To333----------");