var intType = DV.getFieldValue("FA_INT_CHG_TYPE");
var Type = DV.getFieldValue("FA_BUSI_TYPE");
DV.writeLog("intType=======" + intType);
if (intType == '1') {
    DV.writeLog("=====1=======FAEF_AMZ_TakeDown=======");
    DV.appendField("ABLF_ABLF_AMZ_TakeDown");
} else {
    DV.writeLog("=====2=======Financing_Takedown=======");
    DV.appendField("ABLF_ABLF_Financing_Takedown");
}

var DeductLmt = DV.getFieldValue("REG_DEDUCT_LMT");
if (DeductLmt == '1') {
    DV.writeLog("============Financing_limit_ABLF=======");
    DV.appendField("ABLF_ABLF_Finance_Limit");
} else {
    DV.writeLog("============CustFinancing_limit_ABLF=======");
    DV.appendField("ABLF_ABLF_CustFinance_Limit");
}