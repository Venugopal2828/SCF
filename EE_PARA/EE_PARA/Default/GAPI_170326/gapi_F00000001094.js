var lmtType = DV.getFieldValue("FA_LMT_TYPE");
var busitype = DV.getFieldValue("FA_BUSI_TYPE");
var prinamt = DV.getFieldValue("FA_PAID_PRIN_SUM");
var Clm_disc_tp = DV.getFieldValue("FA_CLM_DISC_TYPE");
DV.writeLog("***********" + lmtType);
DV.writeLog("***********" + busitype);
if (prinamt > 0) {
    if (lmtType == '1' && (busitype == 'RF' || (busitype == 'CD' && Clm_disc_tp == 'INSURCO'))) {
        DV.appendField("FAEF_PaybackBuyerLimits");
    }

    if (lmtType == '1' && (busitype == 'EF' || busitype == 'DF')) {
        //DV.appendField("FAEF_PaybackSellerLimits");
        DV.appendField("FAEF_ReturnSellerLimitsForEF");
    }

    if (busitype == 'DISC') {
        //DV.appendField("FAEF_PaybackSellerLimits");
        //DV.appendField("FAEF_ReturnSellerLimitsForEF");
    }

    if ((busitype == 'RD' || (busitype == 'CD' && Clm_disc_tp == 'MEDPRD')) && serviceReq == '1') {
        DV.appendField("FAEF_ReturnSellerLimitsForRDWTR");
    }

    if ((busitype == 'RD' || (busitype == 'CD' && Clm_disc_tp == 'MEDPRD')) && serviceReq == '2') {
        DV.appendField("FAEF_ReturnSellerLimitsForRDWR");
    }

    if (lmtType == '1' && busitype == 'POF') {
        DV.appendField("FAEF_PaybackSellerLimitsForPOF");
    }
}
DV.writeLog("INVOICE PAY LOAN STATR********************");
/*var records = DV.getRecords("Settle_New");
for(var i = 0;i < records.length;i++){
	FA_INV_LOAN_ID= DV.getDOValue(records[i],"FA_INV_LOAN_ID");
}
DV.writeLog("FA_INV_LOAN_ID======="+FA_INV_LOAN_ID);*/
DV.appendField("FAEF_Acc_Payment_8036", "Settle_New.Settle_loan", "(FA_INT_CHG_TYPE='2' or (FA_INT_CHG_TYPE='1' and FA_LAST_PINT_DT > FA_LOAN_DUE_DT)) and FA_LOAN_PPAID_AMT!=0");
DV.appendField("FAEF_Amz_Payment_8063", "Settle_New.Settle_loan", "FA_INT_CHG_TYPE='1' and (FA_LAST_PINT_DT < FA_LOAN_DUE_DT or FA_LAST_PINT_DT = FA_LOAN_DUE_DT) and FA_LOAN_PPAID_AMT!=0");
DV.writeLog("INVOICE PAY LOAN END###############");

DV.writeLog("PO PAY LOAN STATR********************");
/*var records = DV.getRecords("Settle_pmt_po");
for(var i = 0;i < records.length;i++){
	PO_LOAN_ID= DV.getDOValue(records[i],"PO_LOAN_ID");
}
DV.writeLog("PO_LOAN_ID======="+PO_LOAN_ID);*/
DV.appendField("FAEF_Acc_Payment_8036_PO", "Settle_pmt_po.Settle_loan_po", "(FA_INT_CHG_TYPE='2' or (FA_INT_CHG_TYPE='1' and FA_LAST_PINT_DT > FA_LOAN_DUE_DT)) and FA_LOAN_PPAID_AMT!=0");
DV.appendField("FAEF_Amz_Payment_8063_PO", "Settle_pmt_po.Settle_loan_po", "FA_INT_CHG_TYPE='1' and (FA_LAST_PINT_DT < FA_LOAN_DUE_DT or FA_LAST_PINT_DT = FA_LOAN_DUE_DT) and FA_LOAN_PPAID_AMT!=0");
DV.writeLog("PO PAY LOAN END###############");

if (busitype != 'POF') {
    DV.appendField("FAEF_BKTS_FAEF_009_STL");
}