var s32Ccy = DV.getFieldValue("X102_32B_CCY");
var s33Ccy = DV.getFieldValue("X102_33B_CCY");
if (s32Ccy.equals(s33Ccy)) {} else {
    DV.appendTag("36");
}