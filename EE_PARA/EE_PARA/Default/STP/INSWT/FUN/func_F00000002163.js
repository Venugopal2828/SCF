stp.setAutoProcess(true);

/*for C_MAIN_REF*/
var tag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", tag21);

/* Map RCV_BK_SW_ADD_MT734 from B6 */
var TagB6 = stp.getSWIFTTagValue("B6");
var pre = TagB6.substr(14, 8);
var suf = TagB6.substr(23, 3);
var RCV_BK_SW_ADD_MT734 = pre + suf;
stp.updateFieldValue("RCV_BK_SW_ADD_MT734", RCV_BK_SW_ADD_MT734);


/*for business control */
stp.updateFieldValue("CURRNT_STATUS", "RcvMT734");

/*for Advice Date*/
if (stp.getSWIFTTagValue("B6").substr(1, 3) == "734") {
    var year = stp.getSWIFTTagValue("B6").substr(8, 2);
    var month = stp.getSWIFTTagValue("B6").substr(10, 2);
    var day = stp.getSWIFTTagValue("B6").substr(12, 2);
    var PRES_DT = '20' + year + '-' + month + '-' + day;
    stp.updateFieldValue("PRES_DT", PRES_DT);
}

/*for AC_WT_BK details
var TAG57A = stp.getSWIFTTagValue("57A");
if (TAG57A==""){
	var TAG57D = stp.getSWIFTTagValue("57D");
	if(TAG57D.substr(0,1) == "/"){
	stp.updateFieldValue("AC_WT_BK_NM",stp.getLineValue(TAG57D,2));
	stp.updateFieldValue("AC_WT_BK_ADD1",stp.getLineValue(TAG57D,3));
	stp.updateFieldValue("AC_WT_BK_ADD2",stp.getLineValue(TAG57D,4));
	stp.updateFieldValue("AC_WT_BK_ADD3",stp.getLineValue(TAG57D,5));
	}else{
	stp.updateFieldValue("AC_WT_BK_NM",stp.getLineValue(TAG57D,1));
	stp.updateFieldValue("AC_WT_BK_ADD1",stp.getLineValue(TAG57D,2));
	stp.updateFieldValue("AC_WT_BK_ADD2",stp.getLineValue(TAG57D,3));
	stp.updateFieldValue("AC_WT_BK_ADD3",stp.getLineValue(TAG57D,4));
	}
}else{
	if(TAG57A.substr(0,1) == "/"){
	stp.updateFieldValue("AC_WT_BK_SW_ADD",stp.getLineValue(TAG57A,2));
	}else{
	stp.updateFieldValue("AC_WT_BK_SW_ADD",stp.getLineValue(TAG57A,1));
	}	

}
*/