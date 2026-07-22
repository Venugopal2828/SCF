//sSourceFieldLists ="CUST_ID;RCUST_ID;SUB_DESC;FACI_TYPE";
//SYS_GetDataBySSS_S('FAEF_GET_FACI_BAL_TRX',sSourceFieldLists);

var sCust = DV.getParamFieldValue("CUST_ID");
var sRCust = DV.getParamFieldValue("RCUST_ID");
var sSubDs = DV.getParamFieldValue("SUB_DESC");
var sFaciTp = DV.getParamFieldValue("FACI_TYPE");

var sqlCond = DV.addSQLCondition(null, "LM_CUST_ID", sCust);
DV.addSQLCondition(sqlCond, "LM_RCUST_ID", sRCust);
DV.addSQLCondition(sqlCond, "LM_CSL_DESC", sSubDs);
var sFldList = DV.addFieldList(null, "LM_CSL_ID");
sFldList = DV.addFieldList(sFldList, "LM_SUB_CCY");
var recData = DV.executeQuery("STDS_CSL", sFldList, sqlCond);
var sSubId = DV.getDBFieldValue(recData, "LM_CSL_ID");
var sCCY = DV.getDBFieldValue(recData, "LM_SUB_CCY");
DV.writeLog("Sublimit ID is: " + sSubId);

sqlCond = DV.addSQLCondition(null, "LM_FACI_TP", sFaciTp);
sFldList = DV.addFieldList(null, "LM_FACI_ID");
recData = DV.executeQuery("STDS_FACI", sFldList, sqlCond);
var sFaciId = DV.getDBFieldValue(recData, "LM_FACI_ID");
DV.writeLog("Facility ID is: " + sFaciId);

sqlCond = DV.addSQLCondition(null, "LM_CUST_ID", sCust);
DV.addSQLCondition(sqlCond, "LM_RCUST_ID", sRCust);
DV.addSQLCondition(sqlCond, "LM_CSL_ID", sSubId);
DV.addSQLCondition(sqlCond, "LM_FACI_ID", sFaciId);
sFldList = DV.addFieldList(null, "LM_CRED_LMT-LM_OVER_OUT-LM_OUTD_APV-LM_OUTD_APL+LM_OUTC_APV AS LM_BAL");
sFldList = DV.addFieldList(sFldList, "LM_DUE_DAY");
recData = DV.executeQuery("STDS_CSFL", sFldList, sqlCond);
var sBal = DV.getDBFieldValue(recData, "LM_BAL");
var sDueDay = DV.getDBFieldValue(recData, "LM_DUE_DAY");
DV.writeLog("Balance is: " + sBal);

DV.updateTrxFieldValue("FACI_BAL", sBal);
DV.updateTrxFieldValue("FA_REMI_CCY1", sCCY);
DV.updateTrxFieldValue("FA_LMT_DUE_DT2", sDueDay);