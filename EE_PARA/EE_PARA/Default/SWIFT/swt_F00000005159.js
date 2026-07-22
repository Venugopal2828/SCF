var SendMT191 = DV.getFieldValue("MT191_Flag");
var MT191SENT_NO = DV.getFieldValue("MT191SENT_NO");
var merge_flag_103 = DV.getFieldValue("MERGE_FLAG_103");
var merge_flag_202 = DV.getFieldValue("MERGE_FLAG_202");
if (SendMT191 == "Yes") {
    DV.writeLog("MT191SENT_NO" + MT191SENT_NO);
    if (MT191SENT_NO.equals("1")) {
        DV.writeLog("&&&&&&&&&&&&&& 191 &&&&&&&&&&&&&&&&");
        DV.appendSWIFT("PYMT_PYTMT191");
    }
}
var SendMT190 = DV.getFieldValue("MT190_Flag");
if (SendMT190 == "Yes") {
    DV.writeLog("&&&&&&&&&&&&&& 190 &&&&&&&&&&&&&&&&");
    DV.appendSWIFT("PYMT_PYTMT190");
}
var Pyt_103 = DV.getFieldValue("CPYT_PAY_ADV_MSG");
var Cov_Pyt = DV.getFieldValue("CPYT_PAY_COV_MSG");
var Corr_Msg = DV.getFieldValue("CORR_MSG");
DV.writeLog("corres msg in in103 is " + Corr_Msg);
var Distribution = DV.getFieldValue("MT103_DISTRBN");
if (Distribution == "Forward Funds") {
    if (Pyt_103 == "MT103" && merge_flag_103 == "NO") {
        if (Cov_Pyt == "MT202" && merge_flag_202 == "NO") {
            DV.writeLog("&&&&&&&&&&&&&& 103 + 202 &&&&&&&&&&&&&&&&");
            DV.appendSWIFT("PYMT_PYTMT103");
            DV.appendSWIFT("PYMT_PYTMT202COV");
        } else {
            DV.writeLog("&&&&&&&&&&&&&& 103 &&&&&&&&&&&&&&&&");
            DV.appendSWIFT("PYMT_PYTMT103");
        }
    }
}
if (Distribution == "Return of Funds") {
    if (Cov_Pyt == "MT202") {
        DV.writeLog("&&&&&&&&&&&&&& 202 &&&&&&&&&&&&&&&&");
        DV.appendSWIFT("PYMT_PYTMT202");
    }
    if (Corr_Msg == "MT195") {
        DV.writeLog("return 195");
        DV.appendSWIFT("PYMT_PYTMT195");
        DV.writeLog("END 195");
    } else if (Corr_Msg == "MT196") {
        DV.writeLog("return 196");
        DV.appendSWIFT("PYMT_PYT MT196");
        DV.writeLog("END 196");
    }
}
DV.writeLog("=============start 900=========");
var MT103_DISTRBN = DV.getFieldValue("MT103_DISTRBN");
var VOSTRO_NOSTRO_FLAG = DV.getFieldValue("VOSTRO_NOSTRO_FLAG");
if (MT103_DISTRBN == 'Single Settlement' && VOSTRO_NOSTRO_FLAG == 'VOSTRO') {
    DV.appendSWIFT("PYMT_PYMT900");
}
DV.writeLog("=============end 900=========");

var SendMT199 = DV.getFieldValue("MSG_TYPE");
if (SendMT199 == '1') {
    DV.appendSWIFT("PYMT_MT199_toTracker");
}