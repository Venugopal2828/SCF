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

var card = DV.getFieldValue("TEMP_FLG3");


if ((sA1 > 0) && (sA != '')) {
    DV.appendField("FFIT_FFIT_DebitAdvice_settle(R1)");
}
if ((sB1 > 0) && (sB != '')) {
    DV.appendField("FFIT_FFIT_DebitAdvice_settle(R2)");
}
if ((sC1 > 0) && (sC != '')) {
    DV.appendField("FFIT_FFIT_DebitAdvice_settle(R3)");
}
if ((sD1 > 0) && (sD != '')) {
    DV.appendField("FFIT_FFIT_DebitAdvice_settle(R4)");
}
if ((sE1 > 0) && (sE != '')) {
    DV.appendField("FFIT_FFIT_DebitAdvice_settle(R5)");
}

if ((sa1 > 0) && (sa != '')) {
    DV.appendField("FFIT_FFIT_Crdit_Adv_settle(R1)");
}
if ((sb1 > 0) && (sb != '')) {
    DV.appendField("FFIT_FFIT_Crdit_Adv_settle(R2)");
}
if ((sc1 > 0) && (sc != '')) {
    DV.appendField("FFIT_FFIT_Crdit_Adv_settle(R3)");
}
if ((sd1 > 0) && (sd != '')) {
    DV.appendField("FFIT_FFIT_Crdit_Adv_settle(R4)");
}
if ((se1 > 0) && (se != '')) {
    DV.appendField("FFIT_FFIT_Crdit_Adv_settle(R5)");
}
var ffttype = DV.getFieldValue("FFT_TYPE");
var shortreason = DV.getFieldValue("SHORT_REASON");
var langflag = DV.getFieldValue("CR_LONG_FLG");
var langamt = DV.getFieldValue("LONG_AMT");
var trfshortflg = DV.getFieldValue("TRF_SHORT_FLG");
var trflangflg = DV.getFieldValue("TRF_LONG_FLG");
var trfguazhangamt = DV.getFieldValue("TRF_CUAZHANG_AMT");
var amt54 = DV.getFieldValue("TEMP_AMT54");
var amt34 = DV.getFieldValue("TEMP_AMT34");
if (ffttype == '2' && (shortreason != '2' || shortreason != '3') && (amt54 > 0)) {
    DV.appendField("FFIT_Card842Debit");
}
if (ffttype == '2' && langflag == '1' && (langamt > 0)) {
    DV.appendField("FFIT_Card842Credit_Settle");
}
if (ffttype == '1' && trfshortflg != '2' && (amt34 > 0)) {
    DV.appendField("FFIT_Card842Debit");
}
if (ffttype == '1' && (trfshortflg == '2' || trflangflg == '2') && (trfguazhangamt > 0)) {
    DV.appendField("FFIT_Card842Credit_Settlezhuan");
}
if (ffttype == '1' && trfshortflg == '3' && (trfguazhangamt > 0)) {
    DV.appendField("FFIT_Card842Debit_guazhang");
}

if (card == '5') {
    DV.appendField("FFIT_Card842");
}




var sTEMP_AMT = DV.getFieldValue("LONG_AMT");
var sTEMP_FLG2 = DV.getFieldValue("TEMP_FLG2");
var sTEMP_CHAR11 = DV.getFieldValue("CR_ACNO");
if (sTEMP_AMT > 0 && sTEMP_FLG2 == '3' && sTEMP_CHAR11 != '') {
    DV.appendField("FFIT_Credit802_Settle");
}