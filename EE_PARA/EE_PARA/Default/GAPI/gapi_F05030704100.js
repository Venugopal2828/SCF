
DV.writeLog("=====1=======FAEF_AMZ_TakeDown=======");
//DV.appendField("FAEF_FAEF_AMZ_TakeDown_ME");
DV.appendField("FAEF_FAEF_AMZ_TakeDown_MERbt");

var Type = DV.getFieldValue("FA_BUSI_TYPE");
var FA_SERVICE_REQ = DV.getFieldValue("FA_SERVICE_REQ");


if(Type == 'RD' && FA_SERVICE_REQ == '1' )
{
DV.appendField("FAEF_Finance_CounterLimit_Auto");	
}
else 
{
DV.appendField("FAEF_Finance_AnchorLimit_Auto");
}