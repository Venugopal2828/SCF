var E_INT_COMM_AMT = DV.getFieldValue("E_INT_COMM_AMT");
var E_DEC_COMM_AMT = DV.getFieldValue("E_DEC_COMM_AMT");
var E_ORG_OUR_ENG_ADV_LC = DV.getFieldValue("E_ORG_OUR_ENG_ADV_LC");
if ((E_INT_COMM_AMT > 0 || E_DEC_COMM_AMT > 0) && E_ORG_OUR_ENG_ADV_LC == "CONFIRMATION") {
    DV.appendField("EPLC_AdviseAmd_AmzAmd_Confirm_eLoan");
}