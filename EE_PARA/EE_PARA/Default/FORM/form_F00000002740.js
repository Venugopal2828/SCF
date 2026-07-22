if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    /*Advice Tab */
    DV.appendField("SSSS_ALL_GenAdv_Ben_Eng", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail' && SEND_TO_CUST_LANG = 'English'");
    DV.appendField("SSSS_ALL_GenAdv_Bank_Eng", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail' && SEND_TO_BANK_LANG = 'English'");

}