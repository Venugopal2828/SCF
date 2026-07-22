var X103_INSTR_CCY_33B = DV.getFieldValue("X103_INSTR_CCY_33B");
DV.writeLog("33B Currency " + X103_INSTR_CCY_33B);
var X103_SETT_CCY_32A = DV.getFieldValue("X103_SETT_CCY_32A");
DV.writeLog("32A currency " + X103_SETT_CCY_32A);

if (X103_INSTR_CCY_33B.equals(X103_SETT_CCY_32A)) {
    var sAmt32 = DV.getFieldValue("X103_SETT_AMT_32A");
    var sAmt33 = DV.getFieldValue("X103_INSTR_AMT_33B");
    DV.writeLog("sAmt32" + sAmt32);
    DV.writeLog("sAmt33" + sAmt33);
    if (parseFloat(sAmt32) == parseFloat(sAmt33)) {} else {
        DV.appendTag("33B");
    }
} else {
    DV.appendTag("33B");
}
var s32Ccy = DV.getFieldValue("X103_SETT_CCY_32A");
var s33Ccy = DV.getFieldValue("X103_INSTR_CCY_33B");
DV.writeLog("s32Ccy=======" + s32Ccy);
DV.writeLog("s33Ccy=======" + s33Ccy);
if (s32Ccy.equals(s33Ccy)) {
    DV.writeLog("s32Ccy^^^^^^^^^^^^^^^^^^^^^^" + s32Ccy);
    DV.writeLog("s33Ccy^^^^^^^^^^^^^^^^^^^^^^" + s33Ccy);
} else {
    DV.appendTag("36");
}
var sDetChg = DV.getFieldValue("X103_DET_CHG_71A");
/*
if (sDetChg == "SHA" || sDetChg == "BEN" ) {
DV.appendTag("71F");
}
*/
if (sDetChg.equals("SHA") || sDetChg.equals("BEN")) {
    DV.appendTag("71F");
}
var sDetChg = DV.getFieldValue("X103_DET_CHG_71A");

if (sDetChg == "OUR") {
    DV.appendTag("71G");
}