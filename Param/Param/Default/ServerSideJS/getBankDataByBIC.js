/**
 * $Id$
 *
 * Get bank data by SWIFT Address
 */
DV.writeLog("Start Server Side Script: getBankDataByBIC");
var sBkType = DV.getParamFieldValue("sBkType");
var sSwAdd = DV.getParamFieldValue("sSwAdd");
//var sSwAdd = DV.getTrxFieldValue(sBkType+"_BK_SW_ADD");
//var sSwAdd = DV.getTrxFldVal(sBkType+"_BK_SW_ADD");

//DV.writeLog("Bank Type: " + sBkType);
//DV.writeLog("SWIFT Address Field Name: " + sBkType+"_BK_SW_ADD");
//DV.writeLog("SWIFT Address: " + sSwAdd);

var sSQLCond = DV.addSQLCondition(null, "BK_SW_ADD",sSwAdd);

var sFlds = DV.addFieldList(null, "BK_ID");
sFlds = DV.addFieldList(sFlds, "BK_NM");
sFlds = DV.addFieldList(sFlds, "BK_ADD1");
sFlds = DV.addFieldList(sFlds, "BK_ADD2");
sFlds = DV.addFieldList(sFlds, "BK_ADD3");

var sSrcTb = "STD_BANK";
var RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);

var sBkId = String(DV.getDBFieldValue(RS, "BK_ID"));
var sBkNm = String(DV.getDBFieldValue(RS, "BK_NM"));
var sBkAdd1 = String(DV.getDBFieldValue(RS, "BK_ADD1"));
var sBkAdd2 = String(DV.getDBFieldValue(RS, "BK_ADD2"));
var sBkAdd3 = String(DV.getDBFieldValue(RS, "BK_ADD3"));

DV.updateTrxFieldValue(sBkType+"_BK_ID", sBkId);
DV.updateTrxFieldValue(sBkType+"_BK_NM", sBkNm);
DV.updateTrxFieldValue(sBkType+"_BK_ADD1", sBkAdd1);
DV.updateTrxFieldValue(sBkType+"_BK_ADD2", sBkAdd2);
DV.updateTrxFieldValue(sBkType+"_BK_ADD3", sBkAdd3);
DV.updateTrxFieldValue("sBkType", "");
DV.updateTrxFieldValue("sSwAdd", "");

DV.writeLog("End Server Side Script: getBankDataByBIC");