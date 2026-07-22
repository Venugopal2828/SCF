var lmtType = DV.getFieldValue("FA_LMT_TYPE");
DV.writeLog("***********" + lmtType);
//if(lmtType=='1'){
//	DV.appendField("FAEF_Credit_Cover_Payment","IndirectPmt","FA_BA_FLG='1'");
//	DV.appendField("FAEF_Credit_Cover_Release","IndirectPmt","FA_BA_FLG='1'");
//}
DV.writeLog("interest charge type*******" + DV.getValue("FA_INT_CHG_TYPE", "IndirectPmt.Settle_loan", ""));
DV.writeLog("payment value date*******" + DV.getValue("FA_PMT_VAL_DT", "IndirectPmt", ""));
DV.writeLog("loan due date*******" + DV.getValue("FA_LOAN_DUE_DT", "IndirectPmt", ""));
DV.writeLog("---------------GAPI 1----------------");
DV.appendField("FAEF_FAEF_ReturnFin_IndirectPay", "IndirectPmt.Settle_loan", "FA_INT_CHG_TYPE='2' or (FA_INT_CHG_TYPE='1' and IndirectPmt.FA_LAST_PINT_DT > FA_LOAN_DUE_DT)");
DV.writeLog("---------------GAPI 2----------------");
DV.appendField("FAEF_FAEF_AMZ_IndirectPayment", "IndirectPmt.Settle_loan", "FA_INT_CHG_TYPE='1' and (IndirectPmt.FA_LAST_PINT_DT < FA_LOAN_DUE_DT or IndirectPmt.FA_LAST_PINT_DT = FA_LOAN_DUE_DT)");
DV.writeLog("---------------GAPI 3----------------");
if (lmtType == '1') {
    DV.writeLog("---------------GAPI 4----------------");
    DV.appendField("FAEF_ReturnSellerLimitsForEF");
    DV.writeLog("---------------GAPI 5----------------");
}


var CE_REF = DV.getFieldValue("FA_CE_MAIN_REF");
if (CE_REF != " " && CE_REF != null && CE_REF != "") {
    DV.appendField("FAEF_BKTS_FAEF_010_INPAY");

}