DV.appendField("PYMT_INT_TRFR_ADV");

var chg_cas_ind = DV.getFieldValue("CHG_CASH_IND");
var sett_cash_ind = DV.getFieldValue("DB_CASH_IND");
var cr_ind = DV.getFieldValue("CR_CASH_IND");

var chg_tot_amt = DV.getFieldValue("CHG_FLD_LOCAL_TOTAL_AMT");

if ((chg_cas_ind == "Yes") && (chg_tot_amt > 0)) {
    DV.appendField("PYMT_INT_TRFR_CHG_CASH_VOUCH");
}

// Commented out - Brian - See Defect #452
//if(chg_cas_ind=="Yes"){
//	DV.appendField("PYMT_INT_TRFR_CHG_CASH_VOUCH");
//}

if (sett_cash_ind == "Yes" || cr_ind == "Yes") {
    DV.appendField("PYMT_INT_TRFR_SETT_CASH_VOUCH");
}