var ac_no = DV.getFieldValue("CHG_FLD_LOCAL_CUST_AC_NO");

var paid_by = DV.getFieldValue("CHG_FLD_ALL_CHARGE_FOR");


if (ac_no != '' && paid_by == 'L') {
    DV.appendField("SBLC_SBLC_AMEND_DEBIT_ADVICE");
}