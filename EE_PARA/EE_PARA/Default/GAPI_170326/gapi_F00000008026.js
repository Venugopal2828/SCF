var intType = DV.getFieldValue("FA_INT_CHG_TYPE");
var records = DV.getRecords("InvFinance");
for (var i = 0; i < records.length; i++) {
    FA_INV_LOAN_ID = DV.getDOValue(records[i], "FA_INV_LOAN_ID");
}
DV.writeLog("FA_INV_LOAN_ID=======" + FA_INV_LOAN_ID);
DV.writeLog("intType=======" + intType);
if (intType == '1') {
    DV.writeLog("=====1=======FAEF_AMZ_TakeDown=======");
    DV.appendField("FAEF_FAEF_AMZ_TakeDown");
} else {
    DV.writeLog("=====2=======Financing_Takedown=======");
    DV.appendField("FAEF_Financing_Takedown");
}


var Type = DV.getFieldValue("FA_BUSI_TYPE");

if (Type == 'RF') {
    DV.writeLog("============Financing_limit_RF=======");
    DV.appendField("FAEF_Finance_limit_RF");
} else {
    DV.writeLog("============Financing_limit_Other=======");
    DV.appendField("FAEF_Finance_limit_Other");
}


DV.appendField("FAEF_BKTS_FAEF_007_FINR");