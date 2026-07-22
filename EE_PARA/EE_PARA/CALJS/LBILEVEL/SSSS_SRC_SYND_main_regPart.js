"path:SCRN/Library/SYND/SYND_main_regPart.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_LEAD_BK_ADD = function() {
    try {
        SYS_InqCUBK('LEAD_BK_ADD', document.MAINFORM.LEAD_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_regPart.js", e);
    }
}

csLbiCompProto.Cal_LEAD_BK_ADD_ORDER_NO = function() {
    try {
        //var LEAD_BK_ADD_ORDER_NO = document.MAINFORM.LEAD_BK_ADD_ORDER_NO.value;
        //var LEAD_BK_ID = document.MAINFORM.LEAD_BK_ID.value;
        //var sSQLWhere = "ORDER_NO = " + LEAD_BK_ADD_ORDER_NO + " AND C_MAIN_REF = '" + LEAD_BK_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "LEAD_BK_NM;LEAD_BK_ADD1;LEAD_BK_ADD2;LEAD_BK_ADD3";
        SYS_GetTableDataByRule_S('SSSS_SRC_SYND_main_regPart_Cal_LEAD_BK_ADD_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_regPart.js", e);
    }
}

csLbiCompProto.Cal_LEAD_MAIL_ADD = function() {
    try {
        SYS_InqCUBK('LEAD_MAIL_ADD', document.MAINFORM.LEAD_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_regPart.js", e);
    }
}

csLbiCompProto.Cal_LEAD_MAIL_ADD_ORDER_NO = function() {
    try {
        //var LEAD_MAIL_ADD_ORDER_NO = document.MAINFORM.LEAD_MAIL_ADD_ORDER_NO.value;
        //var LEAD_BK_ID = document.MAINFORM.LEAD_BK_ID.value;
        //var sSQLWhere = "ORDER_NO = " + LEAD_MAIL_ADD_ORDER_NO + " AND C_MAIN_REF = '" + LEAD_BK_ID + "'";
        //var sTableName = "POST_ADD_DO";
        //var sFieldList = "POSTAL_FMT_ADD";
        //var sMappingList = "LEAD_MAIL_ADD";
        SYS_GetTableDataByRule_S('SSSS_SRC_SYND_main_regPart_Cal_LEAD_MAIL_ADD_ORDER_NO_1', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_regPart.js", e);
    }
}

csLbiCompProto.Clear_MASTER_DETAILS = function() {
    try {
        document.MAINFORM.MAST_END_DT.value = '';
        document.MAINFORM.MAST_LC_AMT.value = '';
        document.MAINFORM.MAST_LC_CCY.value = '';
        document.MAINFORM.MAST_RISK_AMT.value = '';
        document.MAINFORM.MAST_START_DT.value = '';
        document.MAINFORM.MAST_TRX_DESC.value = '';
        document.MAINFORM.POS_TOL.value = '';
        document.MAINFORM.SOURCE_REF.value = '';
        document.MAINFORM.NEG_TOL.value = '';
        document.MAINFORM.AMT_SPEC.value = '';
        document.MAINFORM.TRX_TYPE.value = '';
        document.MAINFORM.LOAD_PLACE.value = '';
        document.MAINFORM.DEST_PLACE.value = '';
        document.MAINFORM.LTST_SHIP_DT.value = '';
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_regPart.js", e);
    }
}

csLbiCompProto.HIDDEN_SHOW_LC_LG_BTN = function() {
    try {
        var MODULE_SELECT = document.MAINFORM.MODULE_SELECT.value;
        switch (MODULE_SELECT) {
            case 'EPLC':
            case 'IPLC':
            case 'EXCO':
                EEHtml.getElementById('MASTER_LC_BTN').style.display = "block";
                EEHtml.getElementById('MASTER_LG_BTN').style.display = "none";
                break;
            case 'GTEE':
            case 'IWGT':
                EEHtml.getElementById('MASTER_LG_BTN').style.display = "block";
                EEHtml.getElementById('MASTER_LC_BTN').style.display = "none";
                break;
            default:
                EEHtml.getElementById('MASTER_LG_BTN').style.display = "none";
                EEHtml.getElementById('MASTER_LC_BTN').style.display = "none";
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_regPart.js", e);
    }
}

csLbiCompProto.Inq_MASTER_DETAILS = function() {
    try {
        var RULE_NM = document.MAINFORM.MODULE_SELECT.value + "_MASTER";
        if (RULE_NM == "EPLC_MASTER") {
            //SYS_InqCUBK_Sql(RULE_NM, "CONF_BAL > 0 AND (SYND_FLG <> 'YES' OR SYND_FLG IS NULL) AND  ISSUE_BK_NM IS NOT NULL");
            SYS_InqCUBK_byCondition('EPLC_MASTER', '1');
        } else {
            SYS_InqCUBK(RULE_NM, 'SOURCE_REF');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_regPart.js", e);
    }
}