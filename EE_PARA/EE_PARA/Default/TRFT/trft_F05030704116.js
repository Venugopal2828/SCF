var ORG_AMT= DV.getFieldValue("FA_ORG_LMT_AMT");
var ORG_DT= DV.getFieldValue("FA_ORG_DUE_DT");
var NEW_AMT = DV.getFieldValue("ORIG_FA_COUNTER_TYPE");
var NEW_DT = DV.getFieldValue("ORIG_FA_COUNTER_TYPE");
if(ORG_AMT !=NEW_AMT ||  ORG_DT !=NEW_DT ){
	   DV.writeLog("counter limit up start============");
 DV.appendField("FADA_COUNTER_LMT_UP");
    DV.writeLog("counter limit up end============");
}