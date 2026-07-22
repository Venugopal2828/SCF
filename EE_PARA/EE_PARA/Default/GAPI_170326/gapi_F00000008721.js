DV.writeLog("Create Limits STATR******");
DV.appendField("ABLF_Customer_Limits_Create");
DV.writeLog("Create Limits END******");

var CUST_TYPE = DV.getFieldValue("CUST_TYPE");
if(CUST_TYPE=='T1')
{
DV.appendField("ABLF_AGM_SEND_CE_ANCHOR");
}