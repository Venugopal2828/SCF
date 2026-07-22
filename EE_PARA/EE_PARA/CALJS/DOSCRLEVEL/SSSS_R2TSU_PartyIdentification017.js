"path:SCRN/DO/R2TSU_PartyIdentification017.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PartyIdentification017.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PartyIdentification017.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PartyIdentification017.js", e);
    }
}

csDOScreenProto.RETURN_PARTYINFO = function() {
    try {
        // TO GET OTHER FIELDS VALUE ACCORDING THE C_MAIN_REF
        /*var TEMP_CHAR1 = document.MAINFORM.TEMP_CHAR1.value;
var sTableName = "STAT_MASTER";
var sSQLWhere = "C_MAIN_REF=\'" + TEMP_CHAR1 + "\'";*/
        //var sFieldList = "CNTY_CODE;POST_CODE;CUST_CITY;CUST_STREET_NM;CUST_CNTY_SUB_DIVI";
        //var sMappingList = "TSU_PARTY_CNTY;TSU_POST_CODE_ID;TSU_TOWN_NAME;TSU_STREET_NAME;TSU_CNTY_SUB_DIVI";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        var notshowError = true;
        SYS_GetTableDataByRule('SSSS_R2TSU_PartyIdentification017_RETURN_PARTYINFO_0', '1', '', '', notshowError);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PartyIdentification017.js", e);
    }
}

csDOScreenProto.TSU_PARTY_NAME = function() {
    try {
        var sSQLWhere = "SWF_FMT_NM='" + CUST_NM1 + "'";
        //var sFieldList = "C_MAIN_REF";
        //var sMappingList = "TEMP_CHAR1";
        var sSucJsFuncName = "RETURN_PARTYINFO()";
        var sFailJsFuncName = "";
        var notshowError = true;
        SYS_GetTableDataByRule('SSSS_R2TSU_PartyIdentification017_TSU_PARTY_NAME_1', '1', sSucJsFuncName, '', notshowError);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PartyIdentification017.js", e);
    }
}

csDOScreenProto.TSU_PARTY_NM_onchange = function(event) {
    try {
        TSU_PARTY_NAME();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PartyIdentification017.js", e);
    }
}