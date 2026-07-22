stp.setAutoProcess(true);
var sTag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", sTag21);

var TagB6 = stp.getSWIFTTagValue("B6");
var pre = TagB6.substr(14, 8);
var suf = TagB6.substr(23, 3);
var CLM_BK_SW_ADD = pre + suf;
stp.updateFieldValue("CLM_BK_SW_ADD", CLM_BK_SW_ADD);

var SWadd = stp.getFieldValue("CLM_BK_SW_ADD");
var fid_list = stp.addFieldList(null, "C_MAIN_REF");
var sql_cond = stp.addSQLCondition(null, "SW_ADD", SWadd);
var result = stp.executeQuery("EXIMTRX.BANK_MASTER", fid_list, sql_cond);
var BankID = stp.getDBFieldValue(result, "C_MAIN_REF");
stp.updateFieldValue("CLM_BK_ID", BankID);
stp.SYS_getCUBK("CLM_BK_ID", "CLM_BK_ID");

var clmref;
var ref;
var clmno;
ref = stp.getFieldValue("C_MAIN_REF");
stp.writeLog("C_MAIN_REF: " + ref);
stp.SYS_getCUBK("CLM_CNTR", "C_MAIN_REF");
clmno = stp.toInteger(stp.getFieldValue("CLM_CNTR"));
stp.writeLog("CLM_CNTR_FROM TABLE: " + clmno);
if (clmno == 0 || clmno == '') {
    clmno = 1;
} else {
    clmno = clmno + 1;

}
stp.writeLog("CLM_CNTR: " + clmno);

if (clmno >= 10) {
    clmref = ref + '/' + clmno;
} else {
    clmref = ref + '/0' + clmno;
}
stp.writeLog("CLM_REF: " + clmref);
stp.updateFieldValue("CLM_CNTR", clmno);
stp.updateFieldValue("CLM_REF", clmref);
/* for TAG 73R and 73S */
var TAG_73R = stp.getSWIFTTagValue("73R");
var nIndx = TAG_73R.indexOf("/");
if (nIndx > -1) {
    stp.updateFieldValue("REASON_FOR_NONPAY", TAG_73R.substring(0, nIndx));
    stp.updateFieldValue("REASON_FOR_NONPAY_NARR", TAG_73R.substring(nIndx + 1));
} else {
    stp.updateFieldValue("REASON_FOR_NONPAY", TAG_73R);
}
var TAG_73S = stp.getSWIFTTagValue("73S");
var nIndx73S = TAG_73S.indexOf("/");
if (nIndx73S > -1) {
    stp.updateFieldValue("DISP_OF_CLM", TAG_73S.substring(0, nIndx));
    stp.updateFieldValue("DISP_OF_CLM_NARR", TAG_73S.substring(nIndx + 1));
} else {
    stp.updateFieldValue("DISP_OF_CLM", TAG_73S);
}
stp.updateFieldValue("CANCEL_CLM_FLG", 'No');