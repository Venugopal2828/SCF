/**
 * $Id$
 *
 * Get standing data by type
 */
DV.writeLog("Start Server Side Script: getStanData");
var sStanType = DV.getParamFieldValue("sInqStanType");
var sSubType = DV.getParamFieldValue("sInqSubType");
var sTerType = DV.getParamFieldValue("sInqTerType");
var sDataId = DV.getParamFieldValue("sInqDataId");
var sBkGrpId = DV.getBankGroupID();
var sCntyCode = DV.getCountryCode();
//getBusiUnit is used to get company group
//getSysUnit is used to get current record's unit code
//var sCompId = DV.getBusiUnit(); 
var sCompId = DV.getSysUnit();
var sSrcTb = null;
var sSQLCond = null;
var sFlds = null;
var RS = null;

if (sStanType == "PARTY" && sSubType != "BANK") {
    sSrcTb = "STD_PARTY";
    sSQLCond = DV.addSQLCondition(sSQLCond, "C_BK_GROUP_ID",sBkGrpId);
    sSQLCond = DV.addSQLCondition(sSQLCond, "C_CNTY_CODE",sCntyCode);
    sSQLCond = DV.addSQLCondition(sSQLCond, "C_UNIT_CODE",sCompId);
    sSQLCond = DV.addSQLCondition(sSQLCond, "PARTY_ID",sDataId);

    if (sSubType == "BENE") {
        sSQLCond = DV.addSQLCondition(sSQLCond, "PARTY_TYPE", "BENEFICIARY");
    } else if (sSubType == "FORACOF") {
        sSQLCond = DV.addSQLCondition(sSQLCond, "PARTY_TYPE", "FOR ACCOUNT OF");
    }

    sFlds = DV.addFieldList(sFlds, "PARTY_ID");
    sFlds = DV.addFieldList(sFlds, "PARTY_NM");
    sFlds = DV.addFieldList(sFlds, "PARTY_ADD1");
    sFlds = DV.addFieldList(sFlds, "PARTY_ADD2");
    sFlds = DV.addFieldList(sFlds, "PARTY_ADD3");

    RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);
    var sId = String(DV.getDBFieldValue(RS, "PARTY_ID"));
    var sNm = String(DV.getDBFieldValue(RS, "PARTY_NM"));
    var sAdd1 = String(DV.getDBFieldValue(RS, "PARTY_ADD1"));
    var sAdd2 = String(DV.getDBFieldValue(RS, "PARTY_ADD2"));
    var sAdd3 = String(DV.getDBFieldValue(RS, "PARTY_ADD3"));

    DV.updateTrxFieldValue(sSubType+"_ID", sId);
    DV.updateTrxFieldValue(sSubType+"_NM", sNm);
    DV.updateTrxFieldValue(sSubType+"_ADD1", sAdd1);
    DV.updateTrxFieldValue(sSubType+"_ADD2", sAdd2);
    DV.updateTrxFieldValue(sSubType+"_ADD3", sAdd3);
} else if (sStanType == "AC") {
    sSrcTb = "STD_CUST_AC";

    sSQLCond = DV.addSQLCondition(sSQLCond, "C_BK_GROUP_ID",sBkGrpId);
    sSQLCond = DV.addSQLCondition(sSQLCond, "C_CNTY_CODE",sCntyCode);
    sSQLCond = DV.addSQLCondition(sSQLCond, "C_UNIT_CODE",sCompId);
    sSQLCond = DV.addSQLCondition(sSQLCond, "CUST_AC",sDataId);

    sFlds = DV.addFieldList(sFlds, "CUST_AC");
    sFlds = DV.addFieldList(sFlds, "CUST_AC_CCY");

    RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);
    var sId = String(DV.getDBFieldValue(RS, "CUST_AC"));
    var sCcy = String(DV.getDBFieldValue(RS, "CUST_AC_CCY"));

    DV.updateTrxFieldValue(sSubType+"_AC", sId);
    DV.updateTrxFieldValue(sSubType+"_AC_CCY", sCcy);
} else if ((sStanType == "BANK") || (sStanType == "PARTY" && sSubType == "BANK")) {
    sSrcTb = "STD_BANK";
    sSQLCond = DV.addSQLCondition(sSQLCond, "BK_ID",sDataId);

    sFlds = DV.addFieldList(sFlds, "BK_ID");
    sFlds = DV.addFieldList(sFlds, "BK_NM");
    sFlds = DV.addFieldList(sFlds, "BK_SW_ADD");
    sFlds = DV.addFieldList(sFlds, "BK_ADD1");
    sFlds = DV.addFieldList(sFlds, "BK_ADD2");
    sFlds = DV.addFieldList(sFlds, "BK_ADD3");

    RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);
    var sBkId = String(DV.getDBFieldValue(RS, "BK_ID"));
    var sBkNm = String(DV.getDBFieldValue(RS, "BK_NM"));
    var sBkSwAdd = String(DV.getDBFieldValue(RS, "BK_SW_ADD"));
    var sBkAdd1 = String(DV.getDBFieldValue(RS, "BK_ADD1"));
    var sBkAdd2 = String(DV.getDBFieldValue(RS, "BK_ADD2"));
    var sBkAdd3 = String(DV.getDBFieldValue(RS, "BK_ADD3"));

    if (sStanType == "BANK") {
        if (sSubType == "PARTY" || sSubType == "PARTY_BK") {
            DV.updateTrxFieldValue(sSubType+"_ID", sBkId);
            DV.updateTrxFieldValue(sSubType+"_NM", sBkNm);
            DV.updateTrxFieldValue(sSubType+"_SW_ADD", sBkSwAdd);
            DV.updateTrxFieldValue(sSubType+"_ADD1", sBkAdd1);
            DV.updateTrxFieldValue(sSubType+"_ADD2", sBkAdd2);
            DV.updateTrxFieldValue(sSubType+"_ADD3", sBkAdd3);
        } else {
            DV.updateTrxFieldValue(sSubType+"_BK_ID", sBkId);
            DV.updateTrxFieldValue(sSubType+"_BK_NM", sBkNm);
            DV.updateTrxFieldValue(sSubType+"_BK_SW_ADD", sBkSwAdd);
            DV.updateTrxFieldValue(sSubType+"_BK_ADD1", sBkAdd1);
            DV.updateTrxFieldValue(sSubType+"_BK_ADD2", sBkAdd2);
            DV.updateTrxFieldValue(sSubType+"_BK_ADD3", sBkAdd3);
        }
    } else if (sStanType == "PARTY" && sSubType == "BANK") {
        DV.updateTrxFieldValue(sSubType+"_BK_ID", sBkId);
        DV.updateTrxFieldValue(sTerType+"_BK_NM", sBkNm);
        DV.updateTrxFieldValue(sTerType+"_BK_SW_ADD", sBkSwAdd);
        DV.updateTrxFieldValue(sTerType+"_BK_ADD1", sBkAdd1);
        DV.updateTrxFieldValue(sTerType+"_BK_ADD2", sBkAdd2);
        DV.updateTrxFieldValue(sTerType+"_BK_ADD3", sBkAdd3);
    }
}

DV.updateTrxFieldValue("sInqStanType", "");
DV.updateTrxFieldValue("sInqSubType", "");
DV.updateTrxFieldValue("sInqTerType", "");
DV.updateTrxFieldValue("sInqDataId", "");

DV.writeLog("End Server Side Script: getStanData");