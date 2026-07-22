if ((DV.getFieldValue("FUND_FLAG")) == "Funded") {
    DV.writeLog("++++++vouchar recv part fund+++++");
    DV.appendField("RPFM_ReceivingParticipationFund");
}


if ((DV.getFieldValue("FUND_FLAG")) == "Unfunded") {
    DV.writeLog("++++++vouchar Cash Collateral+++++");
    DV.appendField("RPFM_CashCollateral");
}