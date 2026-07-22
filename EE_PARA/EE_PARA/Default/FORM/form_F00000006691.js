var format_Type = DV.getFieldValue("MESG_TYPE");
//var charge = DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT");
var ac_no = DV.getFieldValue("CHG_FLD_LOCAL_CUST_AC_NO");
var paid_by = DV.getFieldValue("CHG_FLD_ALL_CHARGE_FOR");

DV.writeLog("INSIDE -----> TRX");
if (format_Type == 'MAIL') {
    DV.writeLog("MAIL FORMAT CHOSEN----->");
    DV.appendField("SBLC_SBLC_MAIL_REPORT");
}

if (ac_no != "" && paid_by == 'L') {
    DV.writeLog("CHOSEN--------> CHARGES");
    DV.appendField("SBLC_SBLC_ISSUE_DEBIT_ADVICE");
}