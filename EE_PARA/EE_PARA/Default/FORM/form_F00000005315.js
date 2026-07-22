DV.appendField("PYMT_ITT_PYMT_ADV_REVERSAL");
var cash_ind = DV.getFieldValue("TEMP_CASH_IND");
if (cash_ind == "Yes") {
    DV.appendField("PYMT_ITT_REV_SETT_CASH_VOUCH");
}