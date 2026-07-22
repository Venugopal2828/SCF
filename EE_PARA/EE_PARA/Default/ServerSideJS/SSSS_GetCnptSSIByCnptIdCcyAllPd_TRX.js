var CNPT_ID = DV.getParamFieldValue("CNPT_ID");
var CNPT_SSI_CCY = DV.getParamFieldValue("CNPT_SSI_CCY");
DV.writeLog("GET CONTERPARTY SSI" );
var sSqlCond = DV.addSQLCondition(null, "CNPT_ID", CNPT_ID);
sSqlCond = DV.addSQLCondition(sSqlCond, "NS_CCY", CNPT_SSI_CCY);
sSqlCond = DV.addSQLCondition(sSqlCond, "PROD_CD", "All");

var sFldList = DV.addFieldList(null, "CNPT_SWADD");
sFldList = DV.addFieldList(sFldList, "SSI_ATTR");
sFldList = DV.addFieldList(sFldList, "PROD_CD");
sFldList = DV.addFieldList(sFldList, "NS_CCY");
sFldList = DV.addFieldList(sFldList, "EFFCV_DT");
sFldList = DV.addFieldList(sFldList, "AC_WT_BK_NM");
sFldList = DV.addFieldList(sFldList, "AC_WT_BK_SW_ADD");
sFldList = DV.addFieldList(sFldList, "AC_WT_BK_AC_NO");
sFldList = DV.addFieldList(sFldList, "BENE_BK_NM");
sFldList = DV.addFieldList(sFldList, "BENE_BK_SWADD");
sFldList = DV.addFieldList(sFldList, "BENE_BK_AC_NO");
sFldList = DV.addFieldList(sFldList, "INTMEDI_BK_NM");
sFldList = DV.addFieldList(sFldList, "INTMED_BK_SWADD");
sFldList = DV.addFieldList(sFldList, "INTMEDI_BK_ACNO");
sFldList = DV.addFieldList(sFldList, "WHT_SEND_MT202_FLG");
sFldList = DV.addFieldList(sFldList, "SEND_TO_RCV_INFO");

var sOrderBy = "ORDER BY EFFCV_DT DESC";
DV.writeLog("sOrderBy = " + sOrderBy);

var result1 = DV.getTableMultiDataToArray("TRCP_SSI_DO", sFldList, sSqlCond, sOrderBy);