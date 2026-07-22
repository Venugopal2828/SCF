var intType = DV.getFieldValue("FA_INT_CHG_TYPE");
var Type = DV.getFieldValue("FA_BUSI_TYPE");
var records;
DV.writeLog("Type=======" + Type);
            records = DV.getRecords("InvFinance");
            DV.writeLog("intType=======" + intType);
            if (intType == '1') {
                DV.writeLog("=====1=======FAEF_AMZ_TakeDown=======");
                DV.appendField("FAEF_FAEF_AMZ_TakeDown_ME", "InvFinance", "FA_INV_LOAN_AMT!=0");
            } else {
                DV.writeLog("=====2=======Financing_Takedown=======");
                DV.appendField("FAEF_Financing_Takedown_ME", "InvFinance", "FA_INV_LOAN_AMT!=0");
            }


DV.appendField("FAEF_Finance_AnchorLimit");