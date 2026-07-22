/**
 * $Id$
 *
 * Get main trx data by product name and related reference number
 */
DV.writeLog("Start Server Side Script: getMainData");
var sPdctNm = DV.getParamFieldValue("PDCT_NM");
var sRltdNb = DV.getParamFieldValue("RLTD_NO");
var sBkGrpId = DV.getBankGroupID();
//getBusiUnit is used to get company group
//getSysUnit is used to get current record's unit code
//var sCompId = DV.getBusiUnit(); 
var sCompId = DV.getSysUnit();
var sRltdNbFldNm = "";
var sSrcTb = null;
var sSQLCond = null;
var sFlds = null;
var RS = null;

if (sPdctNm == "Import Letters of Credit") {
    sRltdNbFldNm = "LC_NO";
    sSrcTb = "IMLC_EM_ISSUE";
} else if (sPdctNm == "Export Letters of Credit") {
    sRltdNbFldNm = "ADV_NO";
    sSrcTb = "EXLC_EM_ADV";
} else if (sPdctNm == "Import Collections") {
    sRltdNbFldNm = "COLL_NO";
    sSrcTb = "IMCO_EM_TRXN";
} else if (sPdctNm == "Export Collections") {
    sRltdNbFldNm = "COLL_NO";
    sSrcTb = "EXCO_EM_CREATE";
} else if (sPdctNm == "Outward Guarantees") {
    sRltdNbFldNm = "GTEE_NO";
    sSrcTb = "OWGT_EM_GTEE";
} else if (sPdctNm == "Inward Guarantees") {
    sRltdNbFldNm = "ADV_NO";
    sSrcTb = "IWGT_EM_GTEE";
}

if (sSrcTb != null) {
    sFlds = DV.addFieldList(sFlds, "PARENT_MAIN_REF");

    sSQLCond = DV.addSQLCondition(sSQLCond, "C_BK_GROUP_ID",sBkGrpId);
    sSQLCond = DV.addSQLCondition(sSQLCond, "C_UNIT_CODE",sCompId);
    sSQLCond = DV.addSQLCondition(sSQLCond, sRltdNbFldNm,sRltdNb);

    RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);
    var sParentMainRef = String(DV.getDBFieldValue(RS, "PARENT_MAIN_REF"));

    DV.updateTrxFieldValue("RLTD_NO", sRltdNb);
    DV.updateTrxFieldValue("PARENT_MAIN_REF", sParentMainRef);
}

DV.writeLog("End Server Side Script: getMainData");