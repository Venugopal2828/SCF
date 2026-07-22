var FLG = DV.getFieldValue("DISCNT_FLG");
if (FLG == 'YES') {
    DV.appendField("EPLC_FinanceAmount_1");

}
DV.appendField("EPLC_EPLC_FOR_APPL_CHARGES");
DV.appendField("EPLC_EPLC_FOR_BENE_CHARGES");
//DV.appendField("EPLC_SET_PAYMENT_DT");

//DV.appendField("EPLC_EPLC_LCBAL_toMaster");
//DV.appendField("EPLC_EPLC_CONFBAL_toMaster");