"path:SCRN/Library/SYND/SYND_charge.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_SYND_ACWTBK_ADD_ORDER_NO = function() {
    try {
        //var SYND_ACWTBK_ADD_ORDER_NO = document.MAINFORM.SYND_ACWTBK_ADD_ORDER_NO.value;
        //var SYND_AC_WT_BK_ID = document.MAINFORM.SYND_AC_WT_BK_ID.value;
        //var sSQLWhere = "ORDER_NO = " + SYND_ACWTBK_ADD_ORDER_NO + " AND C_MAIN_REF = '" + SYND_AC_WT_BK_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "SYND_AC_WT_BK_NM;SYND_AC_WT_BK_ADD1;SYND_AC_WT_BK_ADD2;SYND_AC_WT_BK_ADD3";
        SYS_GetTableDataByRule_S('SSSS_SRC_SYND_charge_Cal_SYND_ACWTBK_ADD_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_charge.js", e);
    }
}

csLbiCompProto.Cal_SYND_AC_WT_BK_ADD1 = function() {
    try {
        SYS_InqCUBK('SYND_AC_WT_BK_ADD', 'SYND_AC_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_charge.js", e);
    }
}