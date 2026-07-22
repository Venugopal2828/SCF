var FinType = DV.getFieldValue("FA_FIN_TYPE");

if (FinType == 'INV') {
    DV.appendField("FAEF_Update_TTL_INV_LOAN_AMT_ME");
}