var CHG_CASH_IND = DV.getFieldValue("CHG_CASH_IND");
if (CHG_CASH_IND == "No") {
    DV.writeLog("gOING FOR bALANCE CHECK");
    DV.appendField("PYMT_BalanceCheck");
    DV.appendField("PYMT_BalanceCheckRel");
}
DV.appendField("PYMT_EE2BRDG");