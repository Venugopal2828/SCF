"path:SCRN/Library/CFNC/Risk.lbi";

var csLbiCompProto = {};

csLbiCompProto.FLD_SSSS_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*
var SQL="C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY+ "\' AND C_AC_IDENTIFIER=\'C\'";
SYS_InqCUBK_Sql('LIAB_ACNO' ,SQL);
*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_Risk.js", e);
    }
}

csLbiCompProto.FLD_SSSS_ASSET_ACNO_BTN_onclick = function(event) {
    try {

        /*
var SQL="C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY+ "\' AND C_AC_IDENTIFIER<>\'C\'";
SYS_InqCUBK_Sql('ASSET_ACNO',SQL);
*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_Risk.js", e);
    }
}