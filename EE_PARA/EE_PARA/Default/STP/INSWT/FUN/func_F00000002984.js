stp.setAutoProcess(true);
/*stp.setEventTimes(0);*/

/* create C_MAIN_REF */
var ref = stp.SYS_getRefNo("EPLC");
stp.setMainRef(ref);

/* Map ISSUE_BK_SW_ADD from B6 */
var TagB6 = stp.getSWIFTTagValue("B6");
var TagB5 = stp.getSWIFTTagValue("B5");
stp.writeLog("TagB6" + TagB6);
stp.writeLog("TagB5" + TagB5);
var pre = TagB6.substr(14, 8);
var suf = TagB6.substr(23, 3);
var ISSUE_BK_SW_ADD = pre + suf;
stp.updateFieldValue("ISSUE_BK_SW_ADD", ISSUE_BK_SW_ADD);

/*B2*/
var TagB2 = stp.getSWIFTTagValue("B2");
stp.writeLog("TagB2");
var swift_type = TagB2.substr(1, 3);
stp.writeLog("swift_type");
/* for business control */
stp.updateFieldValue("CURRNT_STATUS", "RcvMT700X");

/*for MESG_TYPE*/
var MESG_TYPE = stp.getSWIFTTagValue("B6").substr(1, 3);
if (MESG_TYPE == "700") {
    stp.updateFieldValue("MESG_TYPE", "MT700");
}
if (MESG_TYPE == "710") {
    stp.updateFieldValue("MESG_TYPE", "MT710");
}
if (MESG_TYPE == "720") {
    stp.updateFieldValue("MESG_TYPE", "MT720");
}

/*for Tag 43p mapping*/
/*
var PARTIAL_SHIP = stp.getSWIFTTagValue("43P");
if (PARTIAL_SHIP=="ALLOWED"||PARTIAL_SHIP=="NOT ALLOWED"){
stp.updateFieldValue("PARTIAL_SHIP",PARTIAL_SHIP);
}else{
stp.updateFieldValue("PARTIAL_SHIP","OTHER");
stp.updateFieldValue("PARTIAL_SHIP_NARR",PARTIAL_SHIP);
}
*/
/*for Tag 43T mapping*/
/*
var TNSHIP = stp.getSWIFTTagValue("43T");
if (TNSHIP=="ALLOWED"||TNSHIP=="NOT ALLOWED"){
stp.updateFieldValue("TNSHIP",TNSHIP);
}else{
stp.updateFieldValue("TNSHIP","OTHER");
stp.updateFieldValue("TNSHIP_NARR",TNSHIP);
}
*/
/* for TAG 40E */
var TAG_40E = stp.getSWIFTTagValue("40E");
var nIndx = TAG_40E.indexOf("/");
if (nIndx > -1) {
    stp.updateFieldValue("APLB_RULE", TAG_40E.substring(0, nIndx));
    stp.updateFieldValue("APLB_RULE_NARR", TAG_40E.substring(nIndx + 1));
} else {
    stp.updateFieldValue("APLB_RULE", TAG_40E);
}

/*for BENE details*/
var TAG59 = stp.getSWIFTTagValue("59");
if (TAG59.substr(0, 1) == "/") {
    stp.updateFieldValue("BENE_ACNO", stp.getLineValue(TAG59, 1));
    stp.updateFieldValue("BENE_NM", stp.getLineValue(TAG59, 2));
    stp.updateFieldValue("BENE_ADD1", stp.getLineValue(TAG59, 3));
    stp.updateFieldValue("BENE_ADD2", stp.getLineValue(TAG59, 4));
    stp.updateFieldValue("BENE_ADD3", stp.getLineValue(TAG59, 5));
} else {
    stp.updateFieldValue("BENE_NM", stp.getLineValue(TAG59, 1));
    stp.updateFieldValue("BENE_ADD1", stp.getLineValue(TAG59, 2));
    stp.updateFieldValue("BENE_ADD2", stp.getLineValue(TAG59, 3));
    stp.updateFieldValue("BENE_ADD3", stp.getLineValue(TAG59, 4));
}

/*for APPL_BK details*/
var TAG51A = stp.getSWIFTTagValue("51A");
if (TAG51A == "") {
    var TAG51D = stp.getSWIFTTagValue("51D");
    if (TAG51D.substr(0, 1) == "/") {
        stp.updateFieldValue("APPL_BK_PARTY_ID", stp.getLineValue(TAG51D, 1));
        stp.updateFieldValue("APPL_BK_NM", stp.getLineValue(TAG51D, 2));
        stp.updateFieldValue("APPL_BK_ADD1", stp.getLineValue(TAG51D, 3));
        stp.updateFieldValue("APPL_BK_ADD2", stp.getLineValue(TAG51D, 4));
        stp.updateFieldValue("APPL_BK_ADD3", stp.getLineValue(TAG51D, 5));
    } else {
        stp.updateFieldValue("APPL_BK_NM", stp.getLineValue(TAG51D, 1));
        stp.updateFieldValue("APPL_BK_ADD1", stp.getLineValue(TAG51D, 2));
        stp.updateFieldValue("APPL_BK_ADD2", stp.getLineValue(TAG51D, 3));
        stp.updateFieldValue("APPL_BK_ADD3", stp.getLineValue(TAG51D, 4));
    }
} else {
    if (TAG51A.substr(0, 1) == "/") {
        stp.updateFieldValue("APPL_BK_PARTY_ID", stp.getLineValue(TAG51A, 1));
        stp.updateFieldValue("APPL_BK_SW_ADD", stp.getLineValue(TAG51A, 2));
    } else {
        stp.updateFieldValue("APPL_BK_SW_ADD", stp.getLineValue(TAG51A, 1));
    }
}

/*for DRWE details*/
var TAG42A = stp.getSWIFTTagValue("42A");
if (TAG42A == "") {
    var TAG42D = stp.getSWIFTTagValue("42D");
    if (TAG42D.substr(0, 1) == "/") {
        stp.updateFieldValue("DRWE_PARTY_ID", stp.getLineValue(TAG42D, 1));
        stp.updateFieldValue("DRWE_NM", stp.getLineValue(TAG42D, 2));
        stp.updateFieldValue("DRWE_ADD1", stp.getLineValue(TAG42D, 3));
        stp.updateFieldValue("DRWE_ADD2", stp.getLineValue(TAG42D, 4));
        stp.updateFieldValue("DRWE_ADD3", stp.getLineValue(TAG42D, 5));
    } else {
        stp.updateFieldValue("DRWE_NM", stp.getLineValue(TAG42D, 1));
        stp.updateFieldValue("DRWE_ADD1", stp.getLineValue(TAG42D, 2));
        stp.updateFieldValue("DRWE_ADD2", stp.getLineValue(TAG42D, 3));
        stp.updateFieldValue("DRWE_ADD3", stp.getLineValue(TAG42D, 4));
    }
} else {
    if (TAG42A.substr(0, 1) == "/") {
        stp.updateFieldValue("DRWE_PARTY_ID", stp.getLineValue(TAG42A, 1));
        stp.updateFieldValue("DRWE_SW_ADD", stp.getLineValue(TAG42A, 2));
    } else {
        stp.updateFieldValue("DRWE_SW_ADD", stp.getLineValue(TAG42A, 1));
    }

}


/*for Reimbursing details*/
var TAG53A = stp.getSWIFTTagValue("53A");
if (TAG53A == "") {
    var TAG53D = stp.getSWIFTTagValue("53D");
    if (TAG53D.substr(0, 1) == "/") {
        stp.updateFieldValue("REIM_BK_PARTY_ID", stp.getLineValue(TAG53D, 1));
        stp.updateFieldValue("REIM_BK_NM", stp.getLineValue(TAG53D, 2));
        stp.updateFieldValue("REIM_BK_ADD1", stp.getLineValue(TAG53D, 3));
        stp.updateFieldValue("REIM_BK_ADD2", stp.getLineValue(TAG53D, 4));
        stp.updateFieldValue("REIM_BK_ADD3", stp.getLineValue(TAG53D, 5));
    } else {
        stp.updateFieldValue("REIM_BK_NM", stp.getLineValue(TAG53D, 1));
        stp.updateFieldValue("REIM_BK_ADD1", stp.getLineValue(TAG53D, 2));
        stp.updateFieldValue("REIM_BK_ADD2", stp.getLineValue(TAG53D, 3));
        stp.updateFieldValue("REIM_BK_ADD3", stp.getLineValue(TAG53D, 4));
    }
} else {
    if (TAG53A.substr(0, 1) == "/") {
        stp.updateFieldValue("REIM_BK_PARTY_ID", stp.getLineValue(TAG53A, 1));
        stp.updateFieldValue("REIM_BK_SW_ADD", stp.getLineValue(TAG53A, 2));
    } else {
        stp.updateFieldValue("REIM_BK_SW_ADD", stp.getLineValue(TAG53A, 1));
    }

}
/*for ADV_THU_BK details*/
var TAG57A = stp.getSWIFTTagValue("57A");
if (TAG57A == "") {
    var TAG57D = stp.getSWIFTTagValue("57D");
    if (TAG57D.substr(0, 1) == "/") {
        stp.updateFieldValue("ADV_THU_BK_PARTY_ID", stp.getLineValue(TAG57D, 1));
        stp.updateFieldValue("ADV_THU_BK_NM", stp.getLineValue(TAG57D, 2));
        stp.updateFieldValue("ADV_THU_BK_ADD1", stp.getLineValue(TAG57D, 3));
        stp.updateFieldValue("ADV_THU_BK_ADD2", stp.getLineValue(TAG57D, 4));
        stp.updateFieldValue("ADV_THU_BK_ADD3", stp.getLineValue(TAG57D, 5));
    } else {
        stp.updateFieldValue("ADV_THU_BK_NM", stp.getLineValue(TAG57D, 1));
        stp.updateFieldValue("ADV_THU_BK_ADD1", stp.getLineValue(TAG57D, 2));
        stp.updateFieldValue("ADV_THU_BK_ADD2", stp.getLineValue(TAG57D, 3));
        stp.updateFieldValue("ADV_THU_BK_ADD3", stp.getLineValue(TAG57D, 4));
    }
} else {
    if (TAG57A.substr(0, 1) == "/") {
        stp.updateFieldValue("ADV_THU_BK_PARTY_ID", stp.getLineValue(TAG57A, 1));
        stp.updateFieldValue("ADV_THU_BK_SW_ADD", stp.getLineValue(TAG57A, 2));
    } else {
        stp.updateFieldValue("ADV_THU_BK_SW_ADD", stp.getLineValue(TAG57A, 1));
    }

}

/*for 52 details*/
var TAG52A = stp.getSWIFTTagValue("52A");
if (TAG52A == "") {
    var TAG52D = stp.getSWIFTTagValue("52D");
    if (TAG52D.substr(0, 1) == "/") {
        stp.updateFieldValue("ISSUE_BK_52_NM", stp.getLineValue(TAG52D, 2));
        stp.updateFieldValue("ISSUE_BK_52_ADD1", stp.getLineValue(TAG52D, 3));
        stp.updateFieldValue("ISSUE_BK_52_ADD2", stp.getLineValue(TAG52D, 4));
        stp.updateFieldValue("ISSUE_BK_52_ADD3", stp.getLineValue(TAG52D, 5));
    } else {
        stp.updateFieldValue("ISSUE_BK_52_NM", stp.getLineValue(TAG52D, 1));
        stp.updateFieldValue("ISSUE_BK_52_ADD1", stp.getLineValue(TAG52D, 2));
        stp.updateFieldValue("ISSUE_BK_52_ADD2", stp.getLineValue(TAG52D, 3));
        stp.updateFieldValue("ISSUE_BK_52_ADD3", stp.getLineValue(TAG52D, 4));
    }
} else {
    if (TAG52A.substr(0, 1) == "/") {
        stp.updateFieldValue("ISSUE_BK_52_SW_ADD", stp.getLineValue(TAG52A, 2));
    } else {
        stp.updateFieldValue("ISSUE_BK_52_SW_ADD", stp.getLineValue(TAG52A, 1));
    }

}
var TAG42CMP = stp.getSWIFTTagValue("42C") + stp.getSWIFTTagValue("42M") + stp.getSWIFTTagValue("42P");
var TAG42CMP_TENOR_DAYS = parseInt(TAG42CMP);
var TAG42CMP_TENOR_TYPE = TAG42CMP.substr(parseInt(TAG42CMP_TENOR_DAYS.toString().length) + 1, TAG42CMP.length - parseInt(TAG42CMP_TENOR_DAYS.toString().length) - 1);
stp.writeLog("TAG42CMP====" + TAG42CMP.length);
stp.writeLog("TAG42CMP_TENOR_DAYS====" + TAG42CMP_TENOR_DAYS);
stp.writeLog("TAG42CMP_TENOR_TYPE====" + TAG42CMP_TENOR_TYPE);
if (TAG42CMP != "") {
    stp.updateFieldValue("TENOR_DAYS", TAG42CMP_TENOR_DAYS);
    stp.updateFieldValue("TENOR_TYPE", TAG42CMP_TENOR_TYPE);
}