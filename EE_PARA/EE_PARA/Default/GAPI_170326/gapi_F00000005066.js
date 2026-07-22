var CHG_CASH_IND = DV.getFieldValue("CHG_CASH_IND");
var CUST_ACC_TYPE = DV.getFieldValue("CHG_FLD_ALL_CHARGE_FOR");
var CHG_OVERRIDE_IND = DV.getFieldValue("CHG_OVERRIDE_IND");
DV.writeLog("CHG_CASH_IND===" + CHG_CASH_IND);
DV.writeLog("CUST_ACC_TYPE===" + CUST_ACC_TYPE);
if (CHG_OVERRIDE_IND == "No") {
    if (CHG_CASH_IND == "No") {
        if (CUST_ACC_TYPE == "L") {
            DV.writeLog("BalanceCheck=====================");
            DV.appendField("PYMT_BalanceCheck");
            //DV.appendField("PYMT_BalanceCheckRel");
        }
    }
}
DV.appendField("PYMT_EE2BRDG");