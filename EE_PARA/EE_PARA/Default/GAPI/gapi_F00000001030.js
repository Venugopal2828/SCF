var baFlg = DV.getFieldValue("FA_BA_FLG");
var FA_MSG_FUNC = DV.getFieldValue("FA_MSG_FUNC");
var FA_LMT_AMT = DV.getFieldValue("FA_LMT_AMT");
var FA_INCO_ID = DV.getFieldValue("FA_INCO_ID");
if (baFlg == '1' && FA_MSG_FUNC == '8' && FA_LMT_AMT > 0) {
    DV.appendField("FADA_CreditCoverResponse_TakeDown");

}
/*
if(FA_INCO_ID!=''){
	DV.appendField("FAEF_CreditCoverResponseInsu_TakeDown");
	
}
*/