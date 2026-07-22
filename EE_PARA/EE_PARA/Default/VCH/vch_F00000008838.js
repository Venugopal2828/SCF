var nAmt_Local = DV.toFloat(DV.getFieldValue("CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT"));
var nAmt_Foreign = DV.toFloat(DV.getFieldValue("CHG_FLD_FOREIGN_CHG_TOTAL_CUST_PAY_AMT"));
DV.writeLog("nAmt_Local=" + nAmt_Local);
DV.writeLog("nAmt_Foreign=" + nAmt_Foreign);
if (nAmt_Local > 0 || nAmt_Foreign > 0) {
    DV.appendField("SSSS_ChgVoucher");
}