"path:SCRN/Library/SYND/SYND_Main_Amdpart.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_LEAD_BK_ADD = function() {
    try {
        SYS_InqCUBK('LEAD_BK_ADD', document.MAINFORM.LEAD_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_Main_Amdpart.js", e);
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
        SYS_GetTableDataByRule_S('SSSS_SRC_SYND_Main_Amdpart_Cal_LEAD_BK_ADD_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_Main_Amdpart.js", e);
    }
}

csLbiCompProto.Cal_LEAD_MAIL_ADD = function() {
    try {
        SYS_InqCUBK('LEAD_MAIL_ADD', document.MAINFORM.LEAD_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_Main_Amdpart.js", e);
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
        SYS_GetTableDataByRule_S('SSSS_SRC_SYND_Main_Amdpart_Cal_LEAD_MAIL_ADD_ORDER_NO_1', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_Main_Amdpart.js", e);
    }
}