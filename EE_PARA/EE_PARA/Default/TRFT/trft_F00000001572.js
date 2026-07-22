var FLG = DV.getFieldValue("DISCNT_FLG");
if (FLG == 'YES') {
    DV.appendField("EPLC_FinanceAmount");
    DV.appendField("EPLC_EPLC_FOR_BENE_CHARGES");
}

var nAVAL_BY = DV.getFieldValue("AVAL_BY");
var nSDA_FLAG = DV.getFieldValue("MIX_PAYMENT_SDA_FLAG");
var nPMT_FLG = DV.getFieldValue("PMT_FLG");
if (nAVAL_BY == 'BY MIXED PYMT' && nSDA_FLAG == 'Sight') {
    DV.appendField("EPLC_EPLC_FOR_APPL_CHARGES");
    DV.appendField("EPLC_EPLC_FOR_BENE_CHARGES");
}

/*if(nAVAL_BY=='BY PAYMENT' || (nAVAL_BY=='BY NEGOTIATION' && nPMT_FLG=='SIGHT') || (nAVAL_BY == 'BY MIXED PYMT' && nSDA_FLAG == 'Sight'))
{
DV.appendField("EPLC_EPLC_LCBAL_toMaster");
}*/ //Unique update;
//DV.appendField("EPLC_SET_PAYMENT_DT");
/*if(nAVAL_BY=='BY PAYMENT' || (nAVAL_BY=='BY NEGOTIATION' && nPMT_FLG=='SIGHT'))
{
var conf_bal=DV.getFieldValue("CONF_BAL");
if(conf_bal>0){
DV.appendField("EPLC_EPLC_CONFBAL_toMaster");
}
}*/


/*SYND
var vOLD_CONF_BAL = DV.getFieldValue("SYND_ACT_OLD_CONF_BAL");
var vNEW_CONF_BAL = DV.getFieldValue("SYND_ACT_NEW_CONF_BAL");
var vSYND_FLG =  DV.getFieldValue("SYND_FLG");
if(vOLD_CONF_BAL != vNEW_CONF_BAL && vSYND_FLG == "YES"){
DV.appendField("SSSS_SYND_ACTION");
}
*/