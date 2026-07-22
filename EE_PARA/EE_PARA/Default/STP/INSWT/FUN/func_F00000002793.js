stp.setAutoProcess(true);

/*for C_MAIN_REF*/
var tag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", tag21);

/* Map PRES_BK_SW_ADD from B6 */
var TagB6 = stp.getSWIFTTagValue("B6");
var pre = TagB6.substr(14, 8);
var suf = TagB6.substr(23, 3);
var PRES_BK_SW_ADD = pre + suf;
stp.updateFieldValue("PRES_BK_SW_ADD", PRES_BK_SW_ADD);

/*for Drawing Ref*/
stp.SYS_getCUBK("NO_OF_DRAW", "C_MAIN_REF");
var drawNo = stp.getFieldValue("NO_OF_DRAW");
if (drawNo == '' || drawNo == null || isNaN(drawNo)) {
    drawNo = 1;
} else {
    drawNo = parseInt(drawNo) + 1;
}
stp.updateFieldValue("NO_OF_DRAW", drawNo);
var Draw_Ref;
if (drawNo < 10) {
    Draw_Ref = tag21 + '-0' + drawNo;
} else {
    Draw_Ref = tag21 + '-' + drawNo;
}
stp.updateFieldValue("DRAWING_REF", Draw_Ref);


/*for business control */
stp.updateFieldValue("CURRNT_STATUS", "RcvMT754");

/*for Advice Date*/
if (stp.getSWIFTTagValue("B6").substr(1, 3) == "754") {
    var year = stp.getSWIFTTagValue("B6").substr(8, 2);
    var month = stp.getSWIFTTagValue("B6").substr(10, 2);
    var day = stp.getSWIFTTagValue("B6").substr(12, 2);
    var PRES_DT = '20' + year + '-' + month + '-' + day;
    stp.updateFieldValue("PRES_DT", PRES_DT);
}
/*for AC_WT_BK details*/
var TAG57A = stp.getSWIFTTagValue("57A");
if (TAG57A == "") {
    var TAG57D = stp.getSWIFTTagValue("57D");
    if (TAG57D.substr(0, 1) == "/") {
        stp.updateFieldValue("AC_WT_BK_NM", stp.getLineValue(TAG57D, 2));
        stp.updateFieldValue("AC_WT_BK_ADD1", stp.getLineValue(TAG57D, 3));
        stp.updateFieldValue("AC_WT_BK_ADD2", stp.getLineValue(TAG57D, 4));
        stp.updateFieldValue("AC_WT_BK_ADD3", stp.getLineValue(TAG57D, 5));
    } else {
        stp.updateFieldValue("AC_WT_BK_NM", stp.getLineValue(TAG57D, 1));
        stp.updateFieldValue("AC_WT_BK_ADD1", stp.getLineValue(TAG57D, 2));
        stp.updateFieldValue("AC_WT_BK_ADD2", stp.getLineValue(TAG57D, 3));
        stp.updateFieldValue("AC_WT_BK_ADD3", stp.getLineValue(TAG57D, 4));
    }
} else {
    if (TAG57A.substr(0, 1) == "/") {
        stp.updateFieldValue("AC_WT_BK_SW_ADD", stp.getLineValue(TAG57A, 2));
    } else {
        stp.updateFieldValue("AC_WT_BK_SW_ADD", stp.getLineValue(TAG57A, 1));
    }

}
/*for BENE_BK details*/
var TAG58A = stp.getSWIFTTagValue("58A");
if (TAG58A == "") {
    var TAG58D = stp.getSWIFTTagValue("58D");
    if (TAG58D.substr(0, 1) == "/") {
        stp.updateFieldValue("BENE_BK_NM", stp.getLineValue(TAG58D, 2));
        stp.updateFieldValue("BENE_BK_ADD1", stp.getLineValue(TAG58D, 3));
        stp.updateFieldValue("BENE_BK_ADD2", stp.getLineValue(TAG58D, 4));
        stp.updateFieldValue("BENE_BK_ADD3", stp.getLineValue(TAG58D, 5));
    } else {
        stp.updateFieldValue("BENE_BK_NM", stp.getLineValue(TAG58D, 1));
        stp.updateFieldValue("BENE_BK_ADD1", stp.getLineValue(TAG58D, 2));
        stp.updateFieldValue("BENE_BK_ADD2", stp.getLineValue(TAG58D, 3));
        stp.updateFieldValue("BENE_BK_ADD3", stp.getLineValue(TAG58D, 4));
    }
} else {
    if (TAG58A.substr(0, 1) == "/") {
        stp.updateFieldValue("BENE_BK_SW_ADD", stp.getLineValue(TAG58A, 2));
    } else {
        stp.updateFieldValue("BENE_BK_SW_ADD", stp.getLineValue(TAG58A, 1));
    }
}
stp.setEventTimesFromTable("EPLC_MASTER");