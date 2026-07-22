var sA = DV.getFieldValue("PMT_AC_NO");
var sA1 = DV.getFieldValue("PMT_AMT");
var sB = DV.getFieldValue("PMT_CUST_AC_NO1");
var sB1 = DV.getFieldValue("PMT_EQ_AMT1");
var sC = DV.getFieldValue("PMT_CUST_AC_NO2");
var sC1 = DV.getFieldValue("PMT_EQ_AMT2");
var sD = DV.getFieldValue("PMT_CUST_AC_NO3");
var sD1 = DV.getFieldValue("PMT_EQ_AMT3");
var sE = DV.getFieldValue("PMT_CUST_AC_NO4");
var sE1 = DV.getFieldValue("PMT_EQ_AMT4");
var sF = DV.getFieldValue("PMT_CUST_AC_NO5");
var sF1 = DV.getFieldValue("PMT_EQ_AMT5");
if ((sA != '') && (sA1 > 0)) {
    if ((sB != '6201') && (sB != '') && (sB1 > 0)) {
        DV.appendField("FFIT_DebitAdvice_cableout1");
    }
    if ((sC != '6201') && (sC != '') && (sC1 > 0)) {
        DV.appendField("FFIT_DebitAdvice_cableout2");
    }
    if ((sD != '6201') && (sD != '') && (sD1 > 0)) {
        DV.appendField("FFIT_DebitAdvice_cableout3");
    }
    if ((sE != '6201') && (sE != '') && (sE1 > 0)) {
        DV.appendField("FFIT_DebitAdvice_cableout4");
    }
    if ((sF != '6201') && (sF != '') && (sF1 > 0)) {
        DV.appendField("FFIT_DebitAdvice_cableout5");
    }
}

var sCABLE_TYPE = DV.getFieldValue("CABLE_TYPE");
var sTEMP_FLG1 = DV.getFieldValue("TEMP_FLG1");
var sTEMP_CHAR11 = DV.getFieldValue("TEMP_CHAR11");
if (sCABLE_TYPE == '6' && sTEMP_FLG1 == '3' && sTEMP_CHAR11 != '') {
    DV.appendField("FFIT_Credit802_CableOut");
}