var DEC_AMT = DV.getFieldValue("DEC_AMT");
var INC_AMT = DV.getFieldValue("INC_AMT");
var NEW_EXPIRY_DT = DV.getFieldValue("NEW_EXPIRY_DT");
if ((DEC_AMT != "" && DEC_AMT != "0.00") || (INC_AMT != "" && INC_AMT != "0.00") || (NEW_EXPIRY_DT != "")) {
    ///DV.appendField("IPLC_Amd1STEP_Amd_OPEN_eLoan"); marked for wrong condition
}
var DETRMNTL_FLG = DV.getFieldValue("DETRMNTL_FLG");
if (DETRMNTL_FLG == 'Yes') {
    DV.appendField("IPLC_IMLC_009_BnfcryConsent");
}
if (DETRMNTL_FLG == 'No') {
    DV.appendField("IPLC_IMLC_008_Amd");
}