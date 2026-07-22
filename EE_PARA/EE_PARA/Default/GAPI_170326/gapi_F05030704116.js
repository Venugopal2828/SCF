DV.writeLog("AMDSBR GAPI STATR******");
var busi_type = DV.getFieldValue("FA_BUSI_TYPE");
var incramt = DV.toFloat(DV.getFieldValue("FA_INCR_AMT"));
var dectamt = DV.toFloat(DV.getFieldValue("FA_DECR_AMT"));
var ServiceApproved = DV.getFieldValue("FA_SERVICE_APPRVD");
var ServiceRequired = DV.getFieldValue("FA_SERVICE_REQ");
DV.writeLog("Business Type=" + busi_type);
/*if (busi_type == 'SF') { 
    DV.appendField("FADA_SBR_Limits_Create_ME");
}
if (busi_type == 'POF') {
    DV.appendField("FADA_PO_Limits_Create_ME");
}
if (busi_type == 'RD' && ServiceApproved == '2') {
    DV.appendField("FADA_SBR_Limits_Create_RD_ME");
}
if (busi_type == 'RD' && ServiceApproved == '1') { 
    DV.appendField("FADA_SBR_Limits_Create_RDNR_ME");
}*/
if(incramt>0 || dectamt>0)
{
  	if (busi_type == 'RD' && ServiceRequired == '1') 
    { 
    	DV.appendField("FADA_SCF_SBR_LMT_AMD_COUNTER");
	}
  	else
    {
    	DV.appendField("FADA_CSSCF_SBR_Limits_Amend");
    }
}
DV.appendField("FADA_AmendAgreement_EE2CE_Buyer_ME");
DV.appendField("FADA_AmendAgreement_EE2CE_Seller_ME");
DV.writeLog("AMDSBR GAPI END******");