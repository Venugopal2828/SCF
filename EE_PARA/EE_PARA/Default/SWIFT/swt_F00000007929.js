var send103 = DV.getFieldValue("CPYT_C_SEND_103");
var send202 = DV.getFieldValue("CPYT_C_SEND_202");
if (send103 == 'YES') {
    DV.appendField("SSSS_CPYTMT103");
}
if (send202 == 'YES') {
    DV.appendField("SSSS_CPYTMT202");
}