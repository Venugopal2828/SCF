var FA_FUNC = DV.getFieldValue("FA_MSG_FUNC");
var APPD_AMT = DV.getFieldValue("FA_LMT_AMT");
var FA_INCR_AMT = DV.getFieldValue("FA_INCR_AMT");
var FA_DECR_AMT = DV.getFieldValue("FA_DECR_AMT");
if (APPD_AMT > 0 && FA_FUNC == '8') {
    DV.writeLog("START");
    if (FA_INCR_AMT > 0) {
        DV.writeLog("DDDDD");
        DV.writeLog(FA_INCR_AMT);

        DV.appendField("FADA_InEDI06_D");
    }
    if (FA_DECR_AMT > 0) {
        DV.writeLog("CCCCC");
        DV.writeLog(FA_DECR_AMT);
        DV.appendField("FADA_InEDI06_C");
    }
    DV.writeLog("END");
}
var CE_REF = DV.getFieldValue("FA_CE_MAIN_REF");
DV.writeLog("CE_REF=" + CE_REF);
if (CE_REF != " " && CE_REF != null && CE_REF != "") {
    DV.writeLog("$$$$$$$$$");
    DV.appendField("FADA_BKTS_FAEF_002_CCR");

}
var CUST_TYPE = DV.getFieldValue("CUST_TYPE");
if(CUST_TYPE=='T1'){
DV.appendField("FADA_SBR_TO_CE");
} 
DV.writeLog("###############");