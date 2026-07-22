stp.writeLog("Incoming SWIFT Set BU Begin");
var sMsgType = stp.getSWIFTTagValue("B6").substr(1, 3);
stp.writeLog("sMsgType:" + sMsgType);
var sTagB5 = stp.getSWIFTTagValue("B5");
stp.writeLog("sTagB5:" + sTagB5);
var sBIC1 = sTagB5.substr(3, 8);
var CNTY = sBIC1.substr(6, 2);
stp.writeLog("CNTY:" + CNTY);
if (CNTY == 'GB') {
    stp.setBU("GBR");
} else {
    if (CNTY == 'KC') {
        stp.setBU("AUH");
    } else {
        stp.setBU("CSBANK");
    }
}