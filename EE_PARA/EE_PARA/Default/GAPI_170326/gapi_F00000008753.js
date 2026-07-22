var TSU_SEL_NM = DV.getFieldValue("TSU_SEL_NM");
DV.writeLog("TSU_SEL_NM");
if (TSU_SEL_NM == 'AURIC PACIFIC MARKETING P AURIC PACIFIC MARKETING') {
    DV.appendField("TSUM_CoreSolutiAdviseIncomingBaseline");
    DV.writeLog("core");
} else {
    DV.appendField("TSUM_R2SIBOSAdviseIncomingBaseline");
    DV.writeLog("advise");
}