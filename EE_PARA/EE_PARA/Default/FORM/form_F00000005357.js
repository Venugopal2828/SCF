var ttlChgAmt = DV.getFieldValue("TTL_CUST_CHG_AMT");
var custchgacno = DV.getFieldValue("CUST_CHG_ACNO");
if ((ttlChgAmt > 0) && (custchgacno != '')) {
    DV.appendField("FFIT_FFIT_DebitAdvice_close");
}