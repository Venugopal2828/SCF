DV.appendField("PYMT_DI_PYMT_RE_ISSUE_FORG_ADV");

var chg_cas_ind = DV.getFieldValue("CHG_CASH_IND");
var chg_tot_amt = DV.getFieldValue("CHG_FLD_LOCAL_TOTAL_AMT");


if ((chg_cas_ind == "Yes") && (chg_tot_amt > 0)) {
    DV.appendField("PYMT_DI_CHG_CASH_VOUCH");
}
DV.appendField("PYMT_DI_PYMT_TEMPLATE");