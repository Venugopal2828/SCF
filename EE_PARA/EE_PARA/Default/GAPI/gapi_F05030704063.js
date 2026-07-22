if ((DV.getFieldValue("PART_TYPE")) == "Funded") {
    if ((DV.getFieldValue("RISK_FLAG")) == "No") {
        DV.writeLog("++++++vouchar return part fund+++++");
        DV.appendField("RPFM_Repay_Part");
    }
}
DV.appendField("RPFM_FincSinglePayment_ACC", "FincSinglePayment", "CFNC_N_PAY_AMT > 0 && CFNC_N_PAY_INT > 0 && CFNC_C_INT_PAYABLE = 'In Arrears'");