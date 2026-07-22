if ((DV.getFieldValue("RISK_FLAG")) == "No") {
    DV.appendField("RPFM_FincSinglePayment_ACC", "FincSinglePayment", "CFNC_N_PAY_AMT > 0 && CFNC_C_INT_PAYABLE == 'In Arrears'");
}


if((DV.getFieldValue("FUND_FLAG")) == "Unfunded") {
         DV.writeLog("++++++vouchar return part fund+++++");
         DV.appendField("RPFM_REPAYCL101104");
}