/*
DV.appendField("FADA_DF_BUYER_LMT","DFAgreement","FA_SERVICE_APPRVD='1'");
*/
var FA_BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
if (FA_BUSI_TYPE == 'EF') {

    DV.appendField("FADA_FADA_SEL_INFO");
}
if (FA_BUSI_TYPE == 'DISC' || FA_BUSI_TYPE == 'BPO') {
    DV.appendField("FADA_FADA_PRE_CREDIT");
}

//delete by susie because of Barclays demo's para on 200730
/*
DV.appendField("FADA_FA_BUYER_ID","DFAgreement","FA_TEMP2='NOCUST'");
//DV.appendField("FADA_FA_BUYER_ID_POST","DFAgreement","FA_TEMP2='NOCUST'");
//DV.appendField("FADA_FA_BUYER_ID_SWF","DFAgreement","FA_TEMP2='NOCUST'");
*/