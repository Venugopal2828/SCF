/*
DV.appendField("FADA_BuyerTakeDown");
*/

var FA_BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
DV.writeLog("FA_BUSI_TYPE=" + FA_BUSI_TYPE);
if (FA_BUSI_TYPE == 'DF') {

    DV.appendField("FADA_BuyerTakeDown", "SelReq", "FA_SERVICE_REQ='1'");
}

/*else if(FA_BUSI_TYPE=='DF'){

DV.appendField("FADA_InsuranceTakeDown","SelReq","FA_SERVICE_REQ='1' && FA_INSU_COMP_FLAG='1'");
}*/