DV.writeLog("Start Server Side Script: getBuyerNm.js");
  var sUnitCode = DV.getParamFieldValue("SYS_CHILD_UNIT");
  DV.writeLog("============sUnitCode: "+sUnitCode);
  var sSQLCond = null;
  var sSQLCond = DV.addSQLCondition(sSQLCond, "C_UNIT_CODE",sUnitCode);
  var sFlds = DV.addFieldList(null, "DISTINCT(C_UNIT_NAME)");
  DV.setSecuModule();
  var sSrcTb = "SEC_BUSINESS_UNIT";
  var RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);
  DV.writeLog("============RS: "+RS);
  var glbCompNm = String(DV.getDBFieldValue(RS, "C_UNIT_NAME"));
  DV.writeLog("============glbCompNm: "+glbCompNm);
	DV. setTrxFieldValue ("TSU_BUYER_NM", glbCompNm, glbCompNm,1);

DV.writeLog("Start Server Side Script: getBuyerNm.js End");