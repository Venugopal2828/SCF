var flg = DV.getFieldValue("FA_PRICE_DOC_FLG");
if (flg == '1') {
    DV.appendField("FADA_PRICING_PCA");
} else if (flg == '2') {
    DV.appendField("FADA_PRICING_CCR");
} else if (flg == '3') {
    DV.appendField("FADA_PRICING_CC_CHANGE");
};