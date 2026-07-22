var sMark = stp.getSWIFTTagValue("21").substr(0, 4);

if (sMark == "EXCO") {
    stp.setFunc("EXCO_ReceiveMT416");
}