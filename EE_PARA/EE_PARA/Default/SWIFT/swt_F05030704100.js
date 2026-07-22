var PAY_COV_MSG = DV.getFieldValue("PAY_COV_MSG");
var ouput_103 = "";
var ouput_202 = "";
if (PAY_COV_MSG == "103") {
    ouput_103 = "103";
} else if (PAY_COV_MSG == "202") {
    ouput_202 = "202";
} else if (PAY_COV_MSG == "103+202") {
    ouput_202 = "202";
    ouput_103 = "103";
}

DV.writeLog("ouput_202 =========" + ouput_202);
DV.writeLog("ouput_103 =========" + ouput_103);

if (ouput_103 == "103") {
    DV.appendSWIFT("");
}
if (ouput_202 == "202") {
    DV.appendSWIFT("");
}