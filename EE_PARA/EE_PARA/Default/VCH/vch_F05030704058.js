if ((DV.getFieldValue("FUND_FLAG")) == "Unfunded" && (DV.getFieldValue("RISK_FLAG")) == "No") {
    DV.writeLog("++++++vouchar Cash CollateralRepay+++++");
    DV.appendField("RPFM_CashCollateepay");
}