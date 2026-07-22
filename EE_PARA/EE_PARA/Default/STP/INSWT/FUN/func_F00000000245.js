stp.writeLog("Assgin Incoming MT742 Begin");

stp.setAutoProcess(true);
stp.updateFieldValue("CURRNT_STATUS", "ReceiveMT742");
stp.updateFieldValue("NXT_STATUS", "ProcessMT742");
/* for C_MAIN_REF*/

var tag21 =stp.getSWIFTTagValue("21");
stp.SYS_getCUBK("LC_NO","LC_NO");

/*
var sTag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", sTag21);
*/

var TagB6 = stp.getSWIFTTagValue("B6");
var pre = TagB6.substr(14, 8);
var suf = TagB6.substr(23, 3);
var CLM_BK_SW_ADD = pre + suf;
stp.updateFieldValue("CLM_BK_SW_ADD", CLM_BK_SW_ADD);

var clmref;
var ref;
var clmno;
ref = stp.getFieldValue("C_MAIN_REF");
stp.writeLog("C_MAIN_REF: " + ref);
stp.SYS_getCUBK("CLM_CNTR", "C_MAIN_REF");
clmno = stp.toInteger(stp.getFieldValue("CLM_CNTR"));
stp.writeLog("CLM_CNTR_FROM TABLE: " + clmno);
if (clmno == 0 || clmno == '') {
    clmno = 1;
} else {
    clmno = clmno + 1;

}
stp.writeLog("CLM_CNTR: " + clmno);

if (clmno >= 10) {
    clmref = ref + '/' + clmno;
} else {
    clmref = ref + '/0' + clmno;
}
stp.writeLog("CLM_REF: " + clmref);
stp.updateFieldValue("CLM_CNTR", clmno);
stp.updateFieldValue("CLM_REF", clmref);


var TAG57A = stp.getSWIFTTagValue("57A");
var TAG57B = stp.getSWIFTTagValue("57B");
if (TAG57A == "" && TAG57B == "") {
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
} else if (TAG57A == "") {
    if (TAG57B.substr(0, 1) == "/") {
        stp.updateFieldValue("AC_WT_BK_ADD2", stp.getLineValue(TAG57B, 2));
    } else {
        stp.updateFieldValue("AC_WT_BK_ADD2", stp.getLineValue(TAG57B, 1));
    }

} else {
    if (TAG57A.substr(0, 1) == "/") {
        stp.updateFieldValue("AC_BK_SW_ADD", stp.getLineValue(TAG57A, 2));
    } else {
        stp.updateFieldValue("AC_BK_SW_ADD", stp.getLineValue(TAG57A, 1));
    }
}

var TAG52A = stp.getSWIFTTagValue("52A");
var TAG52D = stp.getSWIFTTagValue("52D");
if (TAG52A == "") {
    if (TAG52D.substr(0, 1) == "/") {
        stp.updateFieldValue("ISSUE_BK_AC_NO", stp.getLineValue(TAG52A, 1).substr(1));
        stp.updateFieldValue("ISSUE_BK_NM", stp.getLineValue(TAG52D, 2));
        stp.updateFieldValue("ISSUE_BK_ADD1", stp.getLineValue(TAG52D, 3));
        stp.updateFieldValue("ISSUE_BK_ADD2", stp.getLineValue(TAG52D, 4));
        stp.updateFieldValue("ISSUE_BK_ADD3", stp.getLineValue(TAG52D, 5));
    } else {
        stp.updateFieldValue("ISSUE_BK_NM", stp.getLineValue(TAG52D, 1));
        stp.updateFieldValue("ISSUE_BK_ADD1", stp.getLineValue(TAG52D, 2));
        stp.updateFieldValue("ISSUE_BK_ADD2", stp.getLineValue(TAG52D, 3));
        stp.updateFieldValue("ISSUE_BK_ADD3", stp.getLineValue(TAG52D, 4));
    }
} else {
    if (TAG52A.substr(0, 1) == "/") {
        stp.updateFieldValue("ISSUE_BK_AC_NO", stp.getLineValue(TAG52A, 1));
        stp.updateFieldValue("ISSUE_BK_SW_ADD", stp.getLineValue(TAG52A, 2));
    } else {
        stp.updateFieldValue("ISSUE_BK_SW_ADD", stp.getLineValue(TAG52A, 1));
    }

}


var TAG58A = stp.getSWIFTTagValue("58A");
var TAG58D = stp.getSWIFTTagValue("58D");
if (TAG58A == "") {
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

stp.writeLog("Assgin Incoming MT742 end");