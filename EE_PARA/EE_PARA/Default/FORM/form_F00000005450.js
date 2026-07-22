var sA = DV.getFieldValue("PMT_CUST_AC_NO1");
var sA1 = DV.getFieldValue("PMT_AC_AMT1");
var sB = DV.getFieldValue("PMT_CUST_AC_NO2");
var sB1 = DV.getFieldValue("PMT_AC_AMT2");
var sC = DV.getFieldValue("PMT_CUST_AC_NO3");
var sC1 = DV.getFieldValue("PMT_AC_AMT3");
var sD = DV.getFieldValue("PMT_CUST_AC_NO4");
var sD1 = DV.getFieldValue("PMT_AC_AMT4");
var sE = DV.getFieldValue("PMT_CUST_AC_NO5");
var sE1 = DV.getFieldValue("PMT_AC_AMT5");

var sa = DV.getFieldValue("SETT_CUST_AC_NO1");
var sa1 = DV.getFieldValue("SETT_AC_AMT1");
var sb = DV.getFieldValue("SETT_CUST_AC_NO2");
var sb1 = DV.getFieldValue("SETT_AC_AMT2");
var sc = DV.getFieldValue("SETT_CUST_AC_NO3");
var sc1 = DV.getFieldValue("SETT_AC_AMT3");
var sd = DV.getFieldValue("SETT_CUST_AC_NO4");
var sd1 = DV.getFieldValue("SETT_AC_AMT4");
var se = DV.getFieldValue("SETT_CUST_AC_NO5");
var se1 = DV.getFieldValue("SETT_AC_AMT5");

if ((sA1 > 0) && (sA != '')) {
    DV.appendField("FFIT_RefoundCollectionD1");
}
if ((sB1 > 0) && (sB != '')) {
    DV.appendField("FFIT_RefoundCollectionD2");
}
if ((sC1 > 0) && (sC != '')) {
    DV.appendField("FFIT_RefoundCollectionD3");
}
if ((sD1 > 0) && (sD != '')) {
    DV.appendField("FFIT_RefoundCollectionD4");
}
if ((sE1 > 0) && (sE != '')) {
    DV.appendField("FFIT_RefoundCollectionD5");
}

if ((sa1 > 0) && (sa != '')) {
    DV.appendField("FFIT_RefoundCollectionC1");
}
if ((sb1 > 0) && (sb != '')) {
    DV.appendField("FFIT_RefoundCollectionC2");
}
if ((sc1 > 0) && (sc != '')) {
    DV.appendField("FFIT_RefoundCollectionC3");
}
if ((sd1 > 0) && (sd != '')) {
    DV.appendField("FFIT_RefoundCollectionC4");
}
if ((se1 > 0) && (se != '')) {
    DV.appendField("FFIT_RefoundCollectionC5");
}
var amt = DV.getFieldValue("TEMP_AMT3");
if (amt > 0) {
    DV.appendField("FFIT_Card842DebitRefund");
}

var sTEMP_AMT = DV.getFieldValue("TEMP_AMT");
var sTEMP_FLG2 = DV.getFieldValue("TEMP_FLG2");
var sTEMP_CHAR11 = DV.getFieldValue("TEMP_CHAR11");
if (sTEMP_AMT > 0 && sTEMP_FLG2 == '3' && sTEMP_CHAR11 != '') {
    DV.appendField("FFIT_Credit802_Refund");
}