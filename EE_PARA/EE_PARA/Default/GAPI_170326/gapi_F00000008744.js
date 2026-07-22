DV.writeLog("----------019 GAPI-----------");
var TSU_TTL_NET_AMT = DV.getFieldValue("TSU_TTL_NET_AMT");
DV.writeLog("TSU_TTL_NET_AMT=======" + TSU_TTL_NET_AMT);
if (TSU_TTL_NET_AMT > 0) {
    DV.writeLog("----------LMTS GAPI-----------");
    DV.appendField("TSUM_TSU_CL_Takedown");
}