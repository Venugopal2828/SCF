var intType = DV.getFieldValue("FA_INT_CHG_TYPE");
var Type = DV.getFieldValue("FA_BUSI_TYPE");
var balance = DV.getFieldValue("TEMP_BP_AMT9");

var FA_SERVICE_REQ = DV.getFieldValue("FA_SERVICE_REQ");

var records;
DV.writeLog("Type=======" + Type);
            records = DV.getRecords("InvFinance");
            DV.writeLog("intType=======" + intType);
            if (intType == '1') {
                DV.writeLog("=====1=======FAEF_AMZ_TakeDown=======");
                //DV.appendField("FAEF_FAEF_AMZ_TakeDown_ME", "InvFinance", "FA_INV_LOAN_AMT!=0");
                DV.appendField("FAEF_FAEF_AMZ_TakeDown_MERbt", "InvFinance", "FA_INV_LOAN_AMT!=0");
            } else {
                DV.writeLog("=====2=======Financing_Takedown=======");
                DV.appendField("FAEF_Financing_Takedown_ME", "InvFinance", "FA_INV_LOAN_AMT!=0");
            }

if(Type == 'POF' && balance > 0 )
{ 
 DV.appendField("FAEF_POFInvLoan_AnchorLimit"); 
}
else if(Type == 'RD' && FA_SERVICE_REQ == '1' )
{
DV.appendField("FAEF_Finance_CounterLimit");	
}
else if(Type == 'POF'|| Type == 'RD'||Type == 'PF')
{
DV.appendField("FAEF_Finance_AnchorLimit");
}
if(Type == 'DD')
{
//DV.appendField("FAEF_Acc_Payment_8036_SCF","InvFinance","FA_INT_CHG_TYPE='2'");
} 