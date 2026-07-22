var vCORR_CUST_BANK = DV.getFieldValue("CORR_CUST_BANK");
var vMESG_TYPE = DV.getFieldValue("MESG_TYPE");

if (vCORR_CUST_BANK == "Customer" && (vMESG_TYPE == "Mail" || vMESG_TYPE == "Email" || vMESG_TYPE == "Fax")) {
    DV.appendField("SSSS_ALL_GenCorr_Customer_E");
}
if (vCORR_CUST_BANK == "Bank" && (vMESG_TYPE == "Mail" || vMESG_TYPE == "Email" || vMESG_TYPE == "Fax")) {
    DV.appendField("SSSS_ALL_GenCorr_Bank_E");
}