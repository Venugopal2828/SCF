/*
var cancel = DV.getFieldValue("CANCEL_FLG");
if(cancel != "Yes")
{
DV.appendField("PYMT_OTT_PYMT_ADV_SBA");
var cas_ind1=DV.getFieldValue("TEMP_CASH_IND");
var cas_ind=DV.getFieldValue("CASH_CCY_IND");
var chg_cas_ind=DV.getFieldValue("CHG_CASH_IND");
DV.writeLog("------cas_ind1-----"+cas_ind1);
DV.writeLog("------cas_ind-----"+cas_ind);
DV.writeLog("------chg_cas_ind-----"+chg_cas_ind);
if(cas_ind=="Yes" && cas_ind1 == "Yes" && chg_cas_ind == "Yes"){
DV.writeLog("------inside-----"+cas_ind);
DV.appendField("PYMT_OTT_PYMT_CASH_VOUH");
}else 
	{if(cas_ind1=="Yes"){
DV.appendField("PYMT_OTT_SETT_CASH_VOUH");
}
if(chg_cas_ind=="Yes"){
DV.appendField("PYMT_OTT_CHG_CASH_VOUH");
}
}
}
*/