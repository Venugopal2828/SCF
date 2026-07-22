DV.appendField("CFNC_CFNC_MAIN");
var FINC_TYPE = DV.getFieldValue("FINC_TYPE");
DV.writeLog("==========Transfer to begin===========");
if (FINC_TYPE == 'EXCO') {
    DV.writeLog("CFNC_EXCO_FinanceRepay begin");
    DV.appendField("CFNC_CFNC_EXCO_FinanceRepay");
    DV.writeLog("CFNC_EXCO_FinanceRepay end");
} else if (FINC_TYPE == 'IMCO') {
    DV.writeLog("CFNC_IMCO_FinanceRepay begin");
    DV.appendField("CFNC_CFNC_IMCO_FinanceRepay");
    DV.writeLog("CFNC_IMCO_FinanceRepay end");
} else if (FINC_TYPE == 'EPLC') {
    DV.writeLog("CFNC_EPLC_FinanceRepay begin");
    DV.appendField("CFNC_CFNC_EPLC_DRAWING_FinanceRepay");
    DV.appendField("CFNC_CFNC_EPLC_FinanceRepay");
    DV.writeLog("CFNC_EPLC_FinanceRepay end");
} else if (FINC_TYPE == 'IPLC') {
    DV.writeLog("CFNC_IPLC_FinanceRepay begin");
    DV.appendField("CFNC_CFNC_IPLC_DRAWING_FinanceRepay");
    DV.appendField("CFNC_CFNC_IPLC_FinanceRepay");
    DV.writeLog("CFNC_IPLC_FinanceRepay end");
}