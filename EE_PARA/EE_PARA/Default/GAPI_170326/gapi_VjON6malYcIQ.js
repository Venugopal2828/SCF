var intType = DV.getFieldValue("FA_INT_CHG_TYPE");
var Type = DV.getFieldValue("FA_BUSI_TYPE");
var FA_SERVICE_REQ = DV.getFieldValue("FA_SERVICE_REQ");
            DV.writeLog("intType=======" + intType);
            if (intType == '1') {
                DV.writeLog("=====1=======FAEF_AMZ_TakeDown=======");
                DV.appendField("FAEF_Pool_AMZ_Takedown");
            } else {
                DV.writeLog("=====2=======Financing_Takedown=======");
                DV.appendField("FAEF_Pool_ACR_Takedown");
            }

if(Type == 'RD' && FA_SERVICE_REQ == '1' )
{
DV.appendField("FAEF_Finance_CounterLimit");	
}
else if(Type == 'RD'||Type == 'PF')
{
DV.appendField("FAEF_Finance_AnchorLimit");
}

