
var BUYER_APR_FLG = DV.getFieldValue("FA_REQ_BUYER_APR_FLG");

if(BUYER_APR_FLG=="2")
{
	DV.appendField("FAEF_Update_Total_PO_Amount_ME");
}