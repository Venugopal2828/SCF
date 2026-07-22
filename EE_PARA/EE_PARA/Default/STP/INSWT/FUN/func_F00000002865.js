stp.setAutoProcess(true);
/*stp.setEventTimes(0);*/

/* create C_MAIN_REF */
var ref = stp.SYS_getRefNo("IPLC");
stp.setMainRef(ref);
stp.writeLog("C_MAIN_REF=====" + ref);

var Tag12 = stp.getSWIFTTagValue("12");
if (Tag12 != '') {
    stp.updateFieldValue("SUB_MESS_TYPE", Tag12);
}

/* for business control */
stp.updateFieldValue("CURRNT_STATUS", "IPLC_RECV_MT700");
stp.updateFieldValue("NXT_STATUS", "IPLC_ISS_LC798");
stp.updateFieldValue("CLS_FLG", "No");


var TagB6 = stp.getSWIFTTagValue("B6");
var pre = TagB6.substr(14, 8);
var suf = TagB6.substr(23, 3);
var ISSUE_BK_SW_ADD = pre + suf;
stp.updateFieldValue("ISSUE_BK_SW_ADD", ISSUE_BK_SW_ADD);





var PARTIAL_SHIP = stp.getSWIFTTagValue("43P");
if (PARTIAL_SHIP == "ALLOWED" || PARTIAL_SHIP == "NOT ALLOWED") {
    stp.updateFieldValue("PARTIAL_SHIP", PARTIAL_SHIP);
} else {
    stp.updateFieldValue("PARTIAL_SHIP", "OTHER");
    stp.updateFieldValue("PARTIAL_SHIP_NARR", PARTIAL_SHIP);
}

var TNSHIP = stp.getSWIFTTagValue("43T");
if (TNSHIP == "ALLOWED" || TNSHIP == "NOT ALLOWED") {
    stp.updateFieldValue("TNSHIP", TNSHIP);
} else {
    stp.updateFieldValue("TNSHIP", "OTHER");
    stp.updateFieldValue("TNSHIP_NARR", TNSHIP);
}


/*var TAG_40E =stp.getSWIFTTagValue("40E");
var nIndx =TAG_40E.indexOf("/");
if(nIndx>-1){
	stp.updateFieldValue("APLB_RULE",TAG_40E.substring(0,nIndx));
	stp.updateFieldValue("APLB_RULE_NARR",TAG_40E.substring(nIndx+1));	
}else{
	stp.updateFieldValue("APLB_RULE",TAG_40E);
}*/


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

/* tag13E */

stp.writeLog("tag13E----------START-----------");
var Tag13E = stp.getSWIFTTagValue("13E");
var s13EDATE = Tag13E.substr(0, 8);
var s13ETIME = Tag13E.substr(8, 4);
stp.updateFieldValue("X798_CRE_DATE", s13EDATE);
stp.updateFieldValue("X798_CRE_TIME", s13ETIME);
stp.writeLog("tag13E------------END----------");