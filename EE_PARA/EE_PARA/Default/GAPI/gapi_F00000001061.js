var FinType = DV.getFieldValue("FA_FIN_TYPE");
if (FinType == 'INV') {
    DV.writeLog("Smiletest*******" + DV.getValue("FA_INT_CHG_TYPE", "ReturnFin.Settle_loan", ""));
    DV.appendField("FAEF_FAEF_ReturnFin_Return", "ReturnFin.Settle_loan", "FA_INT_CHG_TYPE='2' or (FA_INT_CHG_TYPE='1' and ReturnFin.FA_PMT_VAL_DT > FA_LOAN_DUE_DT)");
    DV.appendField("FAEF_FAEF_AMZ_Return", "ReturnFin.Settle_loan", "FA_INT_CHG_TYPE='1' and (ReturnFin.FA_PMT_VAL_DT < FA_LOAN_DUE_DT or ReturnFin.FA_PMT_VAL_DT = FA_LOAN_DUE_DT)");
}
if (FinType == 'PO') {
    DV.writeLog("Smiletest*******" + DV.getValue("FA_INT_CHG_TYPE", "POReturnFin.Settle_loan_po", ""));
    DV.appendField("FAEF_FAEF_ReturnFin_Return_POF", "POReturnFin.Settle_loan_po", "FA_INT_CHG_TYPE='2' or (FA_INT_CHG_TYPE='1' and POReturnFin.FA_PMT_VAL_DT > FA_LOAN_DUE_DT)");
    DV.appendField("FAEF_FAEF_AMZ_Return_POF", "POReturnFin.Settle_loan_po", "FA_INT_CHG_TYPE='1' and (POReturnFin.FA_PMT_VAL_DT < FA_LOAN_DUE_DT or POReturnFin.FA_PMT_VAL_DT = FA_LOAN_DUE_DT)");

}
var lmtType = DV.getFieldValue("FA_LMT_TYPE");
var Type = DV.getFieldValue("FA_BUSI_TYPE");
if (lmtType == '1' && Type == 'POF') {
    DV.writeLog("===========PayBackSeller GAPI start==========");
    DV.appendField("FAEF_PaybackSellerLimitsForPOF");
    DV.writeLog("===========PayBackSeller GAPI end==========");
}
if (lmtType == '1' && Type != 'POF') {
    DV.appendField("FAEF_ReturnSellerLimitsForEF");
}
DV.appendField("FAEF_BKTS_FAEF_008_FINRTN");