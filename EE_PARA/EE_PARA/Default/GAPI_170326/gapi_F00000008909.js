var intType = DV.getFieldValue("FA_INT_CHG_TYPE");
var Type = DV.getFieldValue("FA_BUSI_TYPE");
var FA_INV_LOAN_AMT = DV.getFieldValue("FA_INV_LOAN_AMT");
var records;
DV.writeLog("FA_INV_LOAN_AMT=======" + FA_INV_LOAN_AMT);
    DV.writeLog("FA_INV_LOAN_ID=======" + DV.getFieldValue("FA_INV_LOAN_ID"));
    DV.writeLog("intType=======" + intType);
    if (intType == '1') {
        if (FA_INV_LOAN_AMT != 0) {
            DV.writeLog("=====1=======FAEF_AMZ_TakeDown=======");
            DV.appendField("FAEF_FAEF_AMZ_TakeDown_AutoFin")
        }
    } else {
        if (FA_INV_LOAN_AMT != 0) {
            DV.writeLog("=====2=======Financing_Takedown=======");
            DV.appendField("FAEF_Financing_Takedown_AutoFin");
        }
    }

DV.appendField("FAEF_Finance_AnchorLimit_Auto");