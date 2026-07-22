var IntChgTp = DV.getFieldValue("FA_INT_CHG_TYPE");
var PmtDt = DV.getFieldValue("FA_PMT_DT");
var LoanDueDt = DV.getFieldValue("FA_LOAN_DUE_DT");
if (IntChgTp == '2' || (IntChgTp == '1' && PmtDt > LoanDueDt)) {
    DV.writeLog("===========Acc Payment start==========");
    DV.appendField("ABLF_Acc_Payment_8036");
    DV.writeLog("===========Acc Payment end==========");
}
if (IntChgTp == '1' && (PmtDt < LoanDueDt || PmtDt == LoanDueDt)) {
    DV.writeLog("===========Amz Payment start==========");
    DV.appendField("ABLF_Amz_Payment_8063");
    DV.writeLog("===========Amz Payment end==========");
}
DV.writeLog("===========Pay Limit start==========");
var lmtType = DV.getFieldValue("FA_LMT_TYPE");
var DeductLmt = DV.getFieldValue("REG_DEDUCT_LMT");
var Type = DV.getFieldValue("FA_BUSI_TYPE");
if (lmtType == '1' && DeductLmt == '1') {
    DV.appendField("ABLF_ABLF_PayCustInspectLimit");
} else if (lmtType == '1' && DeductLmt == '2') {
    DV.appendField("ABLF_ABLF_PayCustLimit");
} else if (lmtType == '2' && DeductLmt == '1') {
    DV.appendField("ABLF_ABLF_PayInspectLimit");
}
DV.writeLog("===========Pay Limit end==========");