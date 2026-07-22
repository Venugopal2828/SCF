/*stp.setFunc("Received Incoming MT700");*/
/*
var sMARK = stp.getSWIFTTagValue("23").substr(0,6);

if (sMARK=="PREADV"){
stp.setFunc("EPLC_ReceiveMT700AfterMT705");
}else{
stp.setFunc("EPLC_ReceiveMT700MT710MT720");
}
*/

var sMark = stp.getSWIFTTagValue("12");
if (sMark != '') {
    stp.writeLog("sMark====================" + sMark);
    stp.writeLog("MT700S");
    stp.setFunc("IPLC_ReceiveMT700P");
    stp.writeLog("MT700E");
} else {
    var sMARK = stp.getSWIFTTagValue("23").substr(0, 6);
    if (sMARK == "PREADV") {
        stp.setFunc("EPLC_ReceiveMT700AfterMT705");
    } else {
        stp.setFunc("EPLC_ReceiveMT700");
    }

}