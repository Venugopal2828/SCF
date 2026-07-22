//for charge
var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));
if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}

//for Confirmation Balance
DV.appendField("REIM_REIM_CONFIRMATION_RETIRE");
DV.appendField("REIM_REIM_CONFIRMATION_CREATION");

//for Cash Cover
var TEMP_CASH_COV_FLG = DV.getFieldValue("TEMP_CASH_COV_FLG");
var CASH_COV_HELD = DV.getFieldValue("CASH_COV_HELD");
if (TEMP_CASH_COV_FLG == "true") {
    DV.appendField("REIM_REIM_CASHCOV_REVERSE");
    if (CASH_COV_HELD == 'Yes') {
        DV.appendField("REIM_REIM_CASH_COVER_CREATION");
    }
}