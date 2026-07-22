var msgFlg = DV.getFieldValue("FA_MSG16_TYPE");
if (msgFlg == '2') {
    DV.appendField("FAEF_ReassignmentAdvice");
} else if (msgFlg == '1') {
    DV.appendField("FAEF_ChargeBackAdvice");
}
var ReturnFlg = DV.getFieldValue("FA_FIN_RETURN_REQ");
if (ReturnFlg == '1') {
    DV.appendField("FAEF_FinancingReturnAdvice");
}