var FA_PMT_VAL_DT = DV.getFieldValue("FA_PMT_VAL_DT");
var FA_LOAN_DUE_DT = DV.getFieldValue("FA_LOAN_DUE_DT");
var FA_INT_CHG_TYPE = DV.getFieldValue("FA_INT_CHG_TYPE");
var Type = DV.getFieldValue("FA_BUSI_TYPE");
var FA_SERVICE_REQ = DV.getFieldValue("FA_SERVICE_REQ");
DV.writeLog("Smiletest*******" + FA_INT_CHG_TYPE);
DV.writeLog("Smiletes3*******" + FA_LOAN_DUE_DT);
DV.writeLog("Smiletest4*******" + FA_PMT_VAL_DT);

if(Type == 'RD' && FA_SERVICE_REQ == '1' )
	{
		DV.appendField("FAEF_Settlement_CounterLimit");
	}
	else
	{
		DV.appendField("FAEF_Settlement_AnchorLimit");
	}
  
if(FA_INT_CHG_TYPE=='2' || (FA_INT_CHG_TYPE=='1' && FA_PMT_VAL_DT > FA_LOAN_DUE_DT)){
   DV.appendField("FAEF_PoolFianReturn_1");
}
if(FA_INT_CHG_TYPE=='1') {
	if (FA_PMT_VAL_DT <= FA_LOAN_DUE_DT){

 DV.appendField("FAEF_PoolFianReturn_AMZ");
}

}
