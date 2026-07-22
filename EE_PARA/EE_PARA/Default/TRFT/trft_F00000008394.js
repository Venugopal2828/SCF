DV.appendField("IPLC_IPLC_LCBAL_toMaster");
DV.appendField("IPLC_IPLC_PRES_BAL_toMaster");

var nCHG_TRANSFER_TO_FLAG = DV.getFieldValue("CHG_TRANSFER_TO_FLAG");
if (nCHG_TRANSFER_TO_FLAG != 'YES') {
    DV.appendField("IPLC_IPLC_FOR_ADDITIONAL_CHANGES");
}

DV.appendField("IPLC_Pay_PRES_BAL_toMaster");