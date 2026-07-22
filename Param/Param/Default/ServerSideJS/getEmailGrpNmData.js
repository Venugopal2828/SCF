/**
 * $Id: 
 *
 * Get EMAIL_LIST from STD_EMAIL table by EMAILTRX_TYPE='N'
 */ 
DV.writeLog("Start Server Side Script: getEmailGrpNmData.js");

var sEmailTrxType = "N";
var sCompId = DV.getSysUnit();

var sSQLCond = null;

 		sSQLCond = DV.addSQLCondition(sSQLCond, "EMAILTRX_TYPE",sEmailTrxType);
		sSQLCond = DV.addSQLCondition(sSQLCond, "C_UNIT_CODE",sCompId);
		
var sFlds = DV.addFieldList(null, "EMAIL_LIST");

var sSrcTb = "STD_EMAIL";
var RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);

var sEmailList = String(DV.getDBFieldValue(RS, "EMAIL_LIST"));

DV.updateTrxFieldValue("sEmailGrpName", sEmailList);

DV.writeLog("End Server Side Script: getEmailGrpNmData.js");