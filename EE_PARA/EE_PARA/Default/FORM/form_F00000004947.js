DV.appendField("PYMT_DI_PYMT_RE_PURC_ADV");

var cas_ind1 = DV.getFieldValue("TEMP_CASH_IND");
var chg_cas_ind = DV.getFieldValue("CHG_CASH_IND");
var chg_tot_amt = DV.getFieldValue("CHG_FLD_LOCAL_TOTAL_AMT");

if (cas_ind1 == "Yes") {
    DV.appendField("PYMT_DI_SETT_CASH_VOUCH");
}

if ((chg_cas_ind == "Yes") && (chg_tot_amt > 0)) {
    DV.appendField("PYMT_DI_CHG_CASH_VOUCH");
}