stp.setAutoProcess(true);

/* for C_MAIN_REF 
var tag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF",tag21);*/

/* MATCH CLOSE FLAG*/
var TAG21 = stp.getSWIFTTagValue("21")
var fid_list = stp.addFieldList(null, "CLS_FLG");
var sql_cond = stp.addSQLCondition(null, "C_MAIN_REF", TAG21);
var result = stp.executeQuery("EXIMTRX.EPLC_MASTER", fid_list, sql_cond);
var cls_flg = stp.getDBFieldValue(result, "CLS_FLG");
stp.updateFieldValue("CLS_FLG", cls_flg);
stp.writeLog("cls_flg:'" + cls_flg + "'");
stp.writeLog("TAG21:'" + TAG21 + "'");
if (cls_flg == "YES") {
    stp.cancelTrx("The close flag is yes");
}

/* for business control */
stp.updateFieldValue("CURRNT_STATUS", "RcvMT730");

/*parse ACK_DT of MT730*/
if (stp.getSWIFTTagValue("B6").substr(1, 3) == "730") {
    var year = stp.getSWIFTTagValue("B6").substr(8, 2);
    var month = stp.getSWIFTTagValue("B6").substr(10, 2);
    var day = stp.getSWIFTTagValue("B6").substr(12, 2);
    var ACK_DT = '20' + year + '-' + month + '-' + day;
    stp.updateFieldValue("ACK_DT", ACK_DT);
}


/*for test EE-10484 */
var tag32b = '' + stp.getSWIFTTagValue("32B");

if (tag32b !== '') {
    var ccy = tag32b.substring(0, 3);
    var amt = tag32b.substring(3, tag32b.length);
    stp.writeLog("Advice Bank Charge" + "=" + amt);
    stp.updateFieldValue("ADV_BK_CHG_TRX_CCY", amt);
}

stp.setEventTimesFromTable("EPLC_MASTER");