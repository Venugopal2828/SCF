"path:SCRN/Library/ABLF/ABLF_CollateralInfo.lbi";

var csLbiCompProto = {};

csLbiCompProto.GetInspectInfo = function() {
    try {
        var sTableName = "EXIMTRX.ABLF_INSPEC_SCOPE";
        var sSQLWhere = "C_MAIN_REF= '" + C_MAIN_REF + "' AND FA_CNTR_REF= '" + FA_CNTR_REF + "'";
        var sFieldList = "INSPEC_ID;INSPEC_NM;INSPEC_TP;DEDUCT_LMT;INSPEC_ARG_NO";
        var sMappingList = "REG_INSPEC_ID;REG_INSPEC_NM;REG_INSPEC_TP;REG_DEDUCT_LMT;REG_INSPEC_NO";
        SYS_GetTableData_S(sTableName, sSQLWhere, sFieldList, sMappingList, true);
    } catch (e) {
        DisExcpt("ABLF_SRC_ABLF_CollateralInfo.js", e);
    }
}

csLbiCompProto.FLD_ABLF_CCY_onchange = function(event) {
    try {
        if (document.MAINFORM.CCY.value == document.MAINFORM.FA_LMT_CCY.value) {
            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, 'M');
            alert("Please input Exchange Rate.");
        }
    } catch (e) {
        DisExcpt("ABLF_SRC_ABLF_CollateralInfo.js", e);
    }
}

csLbiCompProto.FLD_ABLF_INSPECT_BT_onclick = function(event) {
    try {
        /*var sql = "1=1";
sql = sql + " AND C_MAIN_REF = '<--C_MAIN_REF-->'";
SYS_InqCUBK_Sql('REG_INSPEC_ID', sql);*/
        SYS_InqCUBK_byCondition('REG_INSPEC_ID', '1');
    } catch (e) {
        DisExcpt("ABLF_SRC_ABLF_CollateralInfo.js", e);
    }
}

csLbiCompProto.FLD_ABLF_REG_INSPEC_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.REG_INSPEC_ID.value != '') {
            SYS_GetCUBK('REG_INSPEC_ID', document.MAINFORM.REG_INSPEC_ID.name + ";" + document.MAINFORM.FA_CNTR_REF.name, '', '', true);
        } else {
            document.MAINFORM.REG_INSPEC_NM.value = '';
            document.MAINFORM.REG_INSPEC_NO.value = '';
            document.MAINFORM.REG_INSPEC_TP.value = '';
            document.MAINFORM.REG_DEDUCT_LMT.value = '';
        }
    } catch (e) {
        DisExcpt("ABLF_SRC_ABLF_CollateralInfo.js", e);
    }
}

csLbiCompProto.FLD_ABLF_WAREHOUSE_onchange = function(event) {
    try {
        if (document.MAINFORM.WAREHOUSE.value != '') {
            SYS_GetCUBK('WAREHS_ID_REG', document.MAINFORM.WAREHOUSE.name, '', '', true);
        } else {
            document.MAINFORM.WAREHOUSE_NM.value = '';
            document.MAINFORM.WAREHOUSE_ADDRESS.value = '';
            document.MAINFORM.WAREHOUSE_MAN.value = '';
        }
    } catch (e) {
        DisExcpt("ABLF_SRC_ABLF_CollateralInfo.js", e);
    }
}

csLbiCompProto.FLD_ABLF_WARE_BT_onclick = function(event) {
    try {
        /*var sql = "1=1";
sql = sql + " AND INSPEC_ID = '<--REG_INSPEC_ID-->'";
SYS_InqCUBK_Sql('WAREHS_ID_REG', sql);*/
        SYS_InqCUBK_byCondition('WAREHS_ID_REG', '1');
    } catch (e) {
        DisExcpt("ABLF_SRC_ABLF_CollateralInfo.js", e);
    }
}