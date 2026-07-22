DV.writeLog("===========RP ELOAN======START======");



DV.writeLog("-------ACC start-------");
DV.appendField("RPFM_FinanceEstablishment_ACC", "FinanceEstablishment", "CFNC_N_AMT_LCCCY > 0 && CFNC_C_INT_PAYABLE == 'In Arrears'");
DV.writeLog("-------ACC end-------");



DV.writeLog("===========RP ELOAN======end======");


if (DV.getFieldValue("PART_TYPE") == 'Funded'){
DV.appendField("RPFM_Takedown_Part");
}