var intType = DV.getFieldValue("FA_INT_CHG_TYPE");
var Type = DV.getFieldValue("FA_BUSI_TYPE");
var FinType = DV.getFieldValue("FA_FIN_TYPE");
var Clm_disc_tp = DV.getFieldValue("FA_CLM_DISC_TYPE");
var records;
DV.writeLog("Type=======" + Type);
DV.writeLog("FinType=======" + FinType);
if (FinType == 'INV') {
    records = DV.getRecords("InvFinance");
    for (var i = 0; i < records.length; i++) {
        FA_INV_LOAN_ID = DV.getDOValue(records[i], "FA_INV_LOAN_ID");
    }
    DV.writeLog("FA_INV_LOAN_ID=======" + FA_INV_LOAN_ID);
    DV.writeLog("intType=======" + intType);
    if (intType == '1') {
        DV.writeLog("=====1=======FAEF_AMZ_TakeDown=======");
        DV.appendField("FAEF_FAEF_AMZ_TakeDown", "InvFinance", "FA_INV_LOAN_AMT!=0");
    } else {
        DV.writeLog("=====2=======Financing_Takedown=======");
        DV.appendField("FAEF_Financing_Takedown", "InvFinance", "FA_INV_LOAN_AMT!=0");
    }
}
if (FinType == 'PO') {
    records = DV.getRecords("POFinance");
    for (var i = 0; i < records.length; i++) {
        PO_LOAN_ID = DV.getDOValue(records[i], "PO_LOAN_ID");
    }
    DV.writeLog("PO_LOAN_ID=======" + PO_LOAN_ID);
    DV.writeLog("intType=======" + intType);
    if (intType == '1') {
        DV.writeLog("=====1=======FAEF_AMZ_TakeDown=======");
        DV.appendField("FAEF_FAEF_AMZ_TakeDown_POF", "POFinance", "PO_LOAN_AMT!=0");
    } else {
        DV.writeLog("=====2=======Financing_Takedown=======");
        DV.appendField("FAEF_Financing_Takedown_POF", "POFinance", "PO_LOAN_AMT!=0");
    }
}
if (Type == 'RF') {
    DV.writeLog("============Financing_limit_RF=======");
    DV.appendField("FAEF_Finance_limit_RF");
} else if (Type == 'POF') {
    DV.writeLog("============Financing_limit_POF=======");
    DV.appendField("FAEF_Finance_limit_POF");
} else if ((Type == 'RD' || (Type == 'CD' && Clm_disc_tp == 'MEDPRD')) && ServiceType == '1') {
    DV.writeLog("============Financing_limit_RD With non recource=======");
    DV.appendField("FAEF_Finance_limit_RD_WTR");
} else if ((Type == 'RD' || (Type == 'CD' && Clm_disc_tp == 'MEDPRD')) && ServiceType == '2') {
    DV.writeLog("============Financing_limit_RD With recource=======");
    DV.appendField("FAEF_Finance_limit_RD_WR");
} else if (Type == 'DISC') {
    DV.writeLog("============Financing_limit_DISC=======");
} else {
    DV.writeLog("============Financing_limit_Other=======");
    DV.appendField("FAEF_Finance_limit_Other");
}
if (Type != 'POF') {
    DV.writeLog("============BKTS_FAEF_007_FINR=======");
    DV.appendField("FAEF_BKTS_FAEF_007_FINR");
}