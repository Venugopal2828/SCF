var reg_amt = DV.getFieldValue("REG_AMT");
var reg_low_amt = DV.getFieldValue("REG_LOWEST_VAL");
var PRICE_ADJ_FLG = DV.getFieldValue("PRICE_ADJ_FLG");
var VAL_FLG = DV.getFieldValue("VAL_FLG");
if (PRICE_ADJ_FLG == '1') {
    DV.appendField("ABLF_PriceAdjustAdvice");
}
//if(VAL_FLG =='1'){
if (DV.toFloat(reg_low_amt) > DV.toFloat(reg_amt)) {
    DV.appendField("ABLF_ValueCompensationAdvice");
} else if (DV.toFloat(reg_low_amt) < DV.toFloat(reg_amt)) {
    DV.appendField("ABLF_ValueReleaseAdvice");
}
//}