stp.setAutoProcess(true);

/* for business control */
stp.updateFieldValue("CURRNT_STATUS", "RcvMT752");

/*Get C_MAIN_REF*/
var tag21 = stp.getSWIFTTagValue("21");
var tag20 = stp.getSWIFTTagValue("20");
stp.updateFieldValue("DRAWING_REF", tag21);
stp.updateFieldValue("C_MAIN_REF", tag20);
/*
var c_main = stp.SYS_getCUBK("C_MAIN_REF","DRAWING_REF");

MATCH CLOSE FLAG
var fid_list1 = stp.addFieldList(null,"C_MAIN_REF");
var sql_cond1 = stp.addSQLCondition(null,"DRAWING_REF",tag21);
var result1 = stp.executeQuery("EXIMTRX.EPLC_EM_NEGO",fid_list1,sql_cond1);
var c_main = stp.getDBFieldValue(result1,"C_MAIN_REF");
stp.updateFieldValue("C_MAIN_REF",c_main);

var fid_list2 = stp.addFieldList(null,"CLS_FLG");
var sql_cond2 = stp.addSQLCondition(null,"C_MAIN_REF",c_main);
var result2 = stp.executeQuery("EXIMTRX.EPLC_MASTER",fid_list2,sql_cond2);
var cls_flg = stp.getDBFieldValue(result2,"CLS_FLG");
stp.updateFieldValue("CLS_FLG",cls_flg);
stp.writeLog("cls_flg:'"+ cls_flg +"'");
stp.writeLog("tag21:'"+ tag21+"'");
if (cls_flg =="YES"){
stp.cancelTrx("The close flag is yes");
}
*/

/*for Sender's Correspondent details*/
var TAG53A = stp.getSWIFTTagValue("53A");
if (TAG53A == "") {
    var TAG53D = stp.getSWIFTTagValue("53D");
    if (TAG53D.substr(0, 1) == "/") {
        stp.updateFieldValue("SEND_CORR_BK_NM", stp.getLineValue(TAG53D, 2));
        stp.updateFieldValue("SEND_CORR_BK_ADD1", stp.getLineValue(TAG53D, 3));
        stp.updateFieldValue("SEND_CORR_BK_ADD2", stp.getLineValue(TAG53D, 4));
        stp.updateFieldValue("SEND_CORR_BK_ADD3", stp.getLineValue(TAG53D, 5));
    } else {
        stp.updateFieldValue("SEND_CORR_BK_NM", stp.getLineValue(TAG53D, 1));
        stp.updateFieldValue("SEND_CORR_BK_ADD1", stp.getLineValue(TAG53D, 2));
        stp.updateFieldValue("SEND_CORR_BK_ADD2", stp.getLineValue(TAG53D, 3));
        stp.updateFieldValue("SEND_CORR_BK_ADD3", stp.getLineValue(TAG53D, 4));
    }
} else {
    if (TAG53A.substr(0, 1) == "/") {
        stp.updateFieldValue("SEND_CORR_BK_SW_ADD", stp.getLineValue(TAG53A, 2));
    } else {
        stp.updateFieldValue("SEND_CORR_BK_SW_ADD", stp.getLineValue(TAG53A, 1));
    }

}

/*for Receiver's Correspondent details*/
var TAG54A = stp.getSWIFTTagValue("54A");
if (TAG54A == "") {
    var TAG54D = stp.getSWIFTTagValue("54D");
    if (TAG54D.substr(0, 1) == "/") {
        stp.updateFieldValue("RCV_CORR_BK_NM", stp.getLineValue(TAG54D, 2));
        stp.updateFieldValue("RCV_CORR_BK_ADD1", stp.getLineValue(TAG54D, 3));
        stp.updateFieldValue("RCV_CORR_BK_ADD2", stp.getLineValue(TAG54D, 4));
        stp.updateFieldValue("RCV_CORR_BK_ADD3", stp.getLineValue(TAG54D, 5));
    } else {
        stp.updateFieldValue("RCV_CORR_BK_NM", stp.getLineValue(TAG54D, 1));
        stp.updateFieldValue("RCV_CORR_BK_ADD1", stp.getLineValue(TAG54D, 2));
        stp.updateFieldValue("RCV_CORR_BK_ADD2", stp.getLineValue(TAG54D, 3));
        stp.updateFieldValue("RCV_CORR_BK_ADD3", stp.getLineValue(TAG54D, 4));
    }
} else {
    if (TAG54A.substr(0, 1) == "/") {
        stp.updateFieldValue("RCV_CORR_BK_SW_ADD", stp.getLineValue(TAG54A, 2));
    } else {
        stp.updateFieldValue("RCV_CORR_BK_SW_ADD", stp.getLineValue(TAG54A, 1));
    }

}

stp.setEventTimesFromTable("EPLC_MASTER");