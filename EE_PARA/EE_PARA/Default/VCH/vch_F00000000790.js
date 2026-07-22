var nGTEE_BAL = DV.getFieldValue("GTEE_BAL");
var cMTHD_OF_ISS = DV.getFieldValue("MTHD_OF_ISS");
if (nGTEE_BAL > 0 && cMTHD_OF_ISS == 'Issue') {

    DV.appendField("SSSS_Liability_Voucher");

}