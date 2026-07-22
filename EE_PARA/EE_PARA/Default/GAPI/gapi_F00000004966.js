var CHG_CASH_IND = DV.getFieldValue("CHG_CASH_IND");
var CUST_ACC_TYPE = DV.getFieldValue("CHG_FLD_ALL_CHARGE_FOR");
if (CHG_CASH_IND == "No") {
    if (CUST_ACC_TYPE == "L") {
        DV.writeLog("BalaceCheck Block===========");
        DV.appendField("PYMT_BalanceCheck");
        DV.appendField("PYMT_BalanceCheckRel");
    }
}
DV.appendField("PYMT_EE2BRDG");