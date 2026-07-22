stp.writeLog("STP START: Start Payment 10x Received ");

stp.setAutoProcess(true);

function SYT_getDOY() {
    var reqDate = stp.getSysBusiDate();
    var intMonth = stp.toInteger(reqDate.toString().substring(5, 7));
    intMonth = intMonth - 1;
    var thisDate = new Date(reqDate.toString().substring(0, 4), intMonth, reqDate.toString().substring(8, 10));
    var onejan = new Date(reqDate.toString().substr(0, 4), 0, 0);
    var retDate = Math.ceil((thisDate - onejan) / 86400000);
    if (retDate.toString().length == 1) {
        retDate = '00' + retDate;
    } else if (retDate.toString().length == 2) {
        retDate = '0' + retDate;
    }
    return retDate;
}

var seq = stp.SYS_getRefNo("PYMT_INW");
var reqDate = stp.getSysBusiDate();
var juldate = String(reqDate.toString().substr(2, 2) + String(SYT_getDOY()));
var sCntyCode = stp.getBusiUnit().substr(0, 4);
var prod = seq.substr(0, 2);
//var seqNumber = seq.substr(2,5);
var seqNumber = seq.substr(2, 9);
//var ss = prod+juldate+sCntyCode+seqNumber;//Edit by amy in 20141118 for control ref no length
var ss = prod + juldate + seqNumber;

stp.updateFieldValue("C_MAIN_REF", ss);
stp.writeLog("STP: New Ref No is " + ss);
var reprReason = "";
var X103_BENECUACNO59A = "";
var LoginBIC = "";

stp.updateFieldValue("CURRNT_STATUS", "RcvMT103");

function checkSwiftLength(rawSwiftName, rawSwiftValue) {
    if (rawSwiftValue.length() == 8) {
        rawSwiftValue += "XXX";
        stp.updateFieldValue(rawSwiftName, rawSwiftValue);
        stp.writeLog("STP: " + rawSwiftName + " MODIFIED TO " + rawSwiftValue);
    }
    return rawSwiftValue;
}

function getBankId(swAdd, fldName) {
    var fld = fldName;
    var fld_list = stp.addFieldList(null, "C_MAIN_REF");
    var sql_cond = stp.addSQLCondition(null, "ROUT_CODE", swAdd);
    var result = stp.executeQuery("EXIMTRX.BANK_ROUTCODES", fld_list, sql_cond);
    var C_MAIN_REF = stp.getDBFieldValue(result, "C_MAIN_REF");
    stp.updateFieldValue(fldName, C_MAIN_REF);
    return C_MAIN_REF;
}

function getBU_BIC() {
    var unitcode = ss.substring(7, 11);
    stp.writeLog("STP: unitcode is " + unitcode);
    var fld_list = stp.addFieldList(null, "C_BIC");
    var sql_cond = stp.addSQLCondition(null, "C_UNIT_CODE", stp.getBusiUnit());
    var result = stp.executeQuery("EXIMUSER.SEC_BUSINESS_UNIT", fld_list, sql_cond);
    LoginBIC = stp.getDBFieldValue(result, "C_BIC");
    stp.writeLog("STP: Login BIC is " + LoginBIC);
}

function changeBenAcctNum() {
    var BENECUACNO59A = stp.getFieldValue("INW_X103_BENECUACNO59A");
    BENECUACNO59A = String(BENECUACNO59A)
    var NumArr = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    for (i = 0; i < BENECUACNO59A.length; i++) {
        for (j = 0; j < NumArr.length; j++) {
            if (BENECUACNO59A.charAt(i) == NumArr[j]) {
                X103_BENECUACNO59A = X103_BENECUACNO59A + BENECUACNO59A.charAt(i);
            }
        }
    }
}

function chkIBAN() {
    var BENECUACNO59A = stp.getFieldValue("INW_X103_BENECUACNO59A");
    BENECUACNO59A = String(BENECUACNO59A) + '';
    X103_BENECUACNO59A = "";
    var NumArr = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    for (i = 0; i < BENECUACNO59A.length; i++) {
        for (j = 0; j < NumArr.length; j++) {
            if (BENECUACNO59A.charAt(i) == NumArr[j]) {
                X103_BENECUACNO59A = X103_BENECUACNO59A + BENECUACNO59A.charAt(i);
            }
        }
    }
    var CleanedAccNum = X103_BENECUACNO59A;
    var Res1 = "";
    var Res2 = "";
    if (CleanedAccNum.length == 30) {
        var recCCY = X103_BENECUACNO59A.substring(27);
        var fld_list = stp.addFieldList(null, "FIELD_1_X");
        var sql_cond = stp.addSQLCondition(null, "ITEM_C", '014');
        stp.addSQLCondition(sql_cond, "ITEM_NAME", recCCY);
        stp.addSQLCondition(sql_cond, "CNTY_CODE", stp.getBusiUnit().substr(0, 2));
        var result = stp.executeQuery("EXIMTRX.DATA_MASTER", fld_list, sql_cond);
        Res1 = stp.getDBFieldValue(result, "FIELD_1_X");
        Res2 = X103_BENECUACNO59A.substring(12, 23);
        X103_BENECUACNO59A = Res1 + Res2;
        chkCustAccNum();
    } else if (CleanedAccNum.length == 24) {
        Res1 = CleanedAccNum.substring(12);
        X103_BENECUACNO59A = Res1.substring(0, 4) + '0' + Res1.substring(4);
        chkCustAccNum();
    } else {
        stp.updateFieldValue("NXT_STATUS", "ITT_REPAIR");
    }
}

function chkCustAccNum() {
    var fld_list = stp.addFieldList(null, "C_CUST_ID");
    var sql_cond = stp.addSQLCondition(null, "C_AC_NUMBER", X103_BENECUACNO59A);
    stp.addSQLCondition(sql_cond, "C_CNTY_CODE", stp.getBusiUnit().substr(0, 2));
    var result = stp.executeQuery("EXIMSYS.STD_AC_NUMBER", fld_list, sql_cond);
    var custId = stp.getDBFieldValue(result, "C_CUST_ID");
    stp.writeLog("STP: result is " + custId);
    if (custId != "") {
        var fld_list1 = stp.addFieldList(null, "RECORDER_TYPE");
        var sql_cond1 = stp.addSQLCondition(null, "C_MAIN_REF", custId);
        var result1 = stp.executeQuery("EXIMTRX.STAT_MASTER", fld_list1, sql_cond1);
        var RECORDER_TYPE1 = stp.getDBFieldValue(result1, "RECORDER_TYPE");
        stp.writeLog("STP: CUSTOMER TYPE is " + RECORDER_TYPE1);
        if (RECORDER_TYPE1.equals('Customer')) {
            stp.updateFieldValue("X103_BENECU_ID_59A", custId);
            //stp.updateFieldValue("TRX_HISTORY","Demerging : Incoming Beneficiary Account Number   "+  INW_X103_BENECUACNO59A  +"  has been changed to "+X103_BENECUACNO59A);
            stp.updateFieldValue("NXT_STATUS", "ITT_PROCESS");
            stp.SYS_getCUBK("X103_BENECU_ID_59A_ITT", "X103_BENECU_ID_59A");
            stp.updateFieldValue("X103_BENECUACNO59A", X103_BENECUACNO59A);
        } else {
            stp.updateFieldValue("NXT_STATUS", "ITT_REPAIR");
        }
    } else {
        stp.updateFieldValue("NXT_STATUS", "ITT_REPAIR");
    }
}

stp.updateFieldValue("CANCEL_FLG", "No");
stp.updateFieldValue("NXT_STATUS", "ITT_PROCESS");
var INW_X103_SENDCORRSW53A = stp.getFieldValue("INW_X103_SENDCORRSW53A");
var INW_X103_RECCORRSW_54A = stp.getFieldValue("INW_X103_RECCORRSW_54A");
var INW_X103_ACC_BKSW_57A = stp.getFieldValue("INW_X103_ACC_BKSW_57A");
stp.writeLog("111"+INW_X103_ACC_BKSW_57A);
var INW_X103_SENDCORRSW53A = checkSwiftLength(INW_X103_SENDCORRSW53A, INW_X103_SENDCORRSW53A);
var INW_X103_RECCORRSW_54A = checkSwiftLength(INW_X103_RECCORRSW_54A, INW_X103_RECCORRSW_54A);
var INW_X103_ACC_BKSW_57A = checkSwiftLength(INW_X103_ACC_BKSW_57A, INW_X103_ACC_BKSW_57A);
//add
var INW_X103_ORD_BKSW_52A = stp.getFieldValue("INW_X103_ORD_BKSW_52A");
var INW_X103_ORD_BKSW_52A = checkSwiftLength(INW_X103_ORD_BKSW_52A, INW_X103_ORD_BKSW_52A);

getBU_BIC();

var tag57A = stp.getSWIFTTagValue("57A");
var tag57B = stp.getSWIFTTagValue("57B");
var tag57C = stp.getSWIFTTagValue("57C");
var tag57D = stp.getSWIFTTagValue("57D");
if (tag57A != '') {
    stp.updateFieldValue("INW_X103_TAG_57A", "A");
    var val57A = stp.getPartValue(tag57A, "1", "1");
    if (val57A != '/') {
        stp.updateFieldValue("INW_X103_ACC_BKACNO57A", "");
    }
} else if (tag57B != '') {
    stp.updateFieldValue("INW_X103_TAG_57A", "B");
} else if (tag57C != '') {
    stp.updateFieldValue("INW_X103_TAG_57A", "C");
} else if (tag57D != '') {
    stp.updateFieldValue("INW_X103_TAG_57A", "D");
} else {
    stp.updateFieldValue("INW_X103_TAG_57A", "A");
    INW_X103_ACC_BKSW_57A = LoginBIC;
    stp.updateFieldValue("INW_X103_ACC_BKSW_57A", INW_X103_ACC_BKSW_57A);
}

if (INW_X103_ACC_BKSW_57A.equals(LoginBIC)) {
    var INW_X103_BENECUACNO59A = stp.getFieldValue("INW_X103_BENECUACNO59A");
    if (INW_X103_BENECUACNO59A != "") {
        changeBenAcctNum();
        chkCustAccNum();
    } else {
        stp.updateFieldValue("NXT_STATUS", "ITT_REPAIR");
        stp.updateFieldValue("TRX_HISTORY", "No Beneficiary Account Number");
    }
    if (stp.getBusiUnit().substr(0, 2) == "MU") {
        if (stp.getFieldValue("NXT_STATUS") != 'ITT_PROCESS') {
            chkIBAN();
        }
    }
    /*else{
		stp.updateFieldValue("NXT_STATUS","ITT_REPAIR");
		stp.updateFieldValue("TRX_HISTORY","No Beneficiary Account Number");
	}*/
} else {
    stp.updateFieldValue("NXT_STATUS", "ITT_PROCESS");
}

var INW_SNDBK_SW = stp.getFieldValue("INW_SNDBK_SW");
var INW_SNDBK_ID = getBankId(INW_SNDBK_SW, INW_SNDBK_ID);
stp.updateFieldValue("INW_SNDBK_ID", INW_SNDBK_ID);
stp.SYS_getCUBK("INW_SNDBK_ID", "INW_SNDBK_ID");

stp.updateFieldValue("INW_X103_SENDCORRSW53A", INW_X103_SENDCORRSW53A);
var INW_X103_SENDCORRID53A = getBankId(INW_X103_SENDCORRSW53A, INW_X103_SENDCORRID53A);
stp.updateFieldValue("INW_X103_SENDCORRID53A", INW_X103_SENDCORRID53A);

stp.updateFieldValue("INW_X103_ACC_BKSW_57A", INW_X103_ACC_BKSW_57A);
stp.writeLog(INW_X103_ACC_BKSW_57A);
var INW_X103_ACC_BKID_57A = getBankId(INW_X103_ACC_BKSW_57A, INW_X103_ACC_BKID_57A);
stp.updateFieldValue("INW_X103_ACC_BKID_57A", INW_X103_ACC_BKID_57A);

stp.updateFieldValue("INW_X103_RECCORRSW_54A", INW_X103_RECCORRSW_54A);
var INW_X103_RECCORRID_54A = getBankId(INW_X103_RECCORRSW_54A, INW_X103_RECCORRID_54A);
stp.updateFieldValue("INW_X103_RECCORRID_54A", INW_X103_RECCORRID_54A);

//add
stp.updateFieldValue("INW_X103_ORD_BKSW_52A", INW_X103_ORD_BKSW_52A);
var INW_X103_ORD_BKID_52A = getBankId(INW_X103_ORD_BKSW_52A, INW_X103_ORD_BKID_52A);
stp.updateFieldValue("INW_X103_ORD_BKID_52A", INW_X103_ORD_BKID_52A);
stp.SYS_getCUBK("INW_X103_ORD_BKID_52A", "INW_X103_ORD_BKID_52A");

stp.SYS_getCUBK("INW_X103_SENDCORRID53A", "INW_X103_SENDCORRID53A");
stp.SYS_getCUBK("INW_X103_RECCORRID_54A", "INW_X103_RECCORRID_54A");
stp.SYS_getCUBK("INW_X103_ACC_BKID_57A", "INW_X103_ACC_BKID_57A");

var cust_tag_50 = stp.getSWIFTTagValue("50A");
var cust_tag_50K = stp.getSWIFTTagValue("50K");
var cust_tag_50F = stp.getSWIFTTagValue("50F");
if (cust_tag_50 != '') {
    stp.updateFieldValue("INW_X103_TAG_50A", "A");
} else if (cust_tag_50K != '') {
    stp.updateFieldValue("INW_X103_TAG_50A", "K");
} else if (cust_tag_50F != '') {
    stp.updateFieldValue("INW_X103_TAG_50A", "F");
}

var Ord_Cust_FullName = stp.getFieldValue("INW_X103_ORDCU_NM_50A");
if (Ord_Cust_FullName.length() > 14) {
    charLength = 14;
} else {
    charLength = Ord_Cust_FullName.length();
}
var Ord_Cust_Name = Ord_Cust_FullName.substring(0, charLength);
stp.updateFieldValue("INW_CUST_REF", Ord_Cust_Name);

var tag53A = stp.getSWIFTTagValue("53A");
var tag53B = stp.getSWIFTTagValue("53B");
var tag53D = stp.getSWIFTTagValue("53D");
if (tag53A != '') {
    stp.updateFieldValue("INW_X103_TAG_53A", "A");
    var val53A = stp.getPartValue(tag53A, "1", "1");
    if (val53A != '/') {
        stp.updateFieldValue("INW_X103SENDCORACNO53A", "");
    }
} else if (tag53B != '') {
    stp.updateFieldValue("INW_X103_TAG_53A", "B");
} else if (tag53D != '') {
    stp.updateFieldValue("INW_X103_TAG_53A", "D");
}

var tag54A = stp.getSWIFTTagValue("54A");
var tag54B = stp.getSWIFTTagValue("54B");
var tag54D = stp.getSWIFTTagValue("54D");
if (tag54A != '') {
    stp.writeLog("tag54A ----" + tag54A);

    stp.updateFieldValue("INW_X103_TAG_54A", "A");
    var val54A = stp.getPartValue(tag54A, "1", "1");
    if (val54A != '/') {
        stp.updateFieldValue("INW_X103RECCORRACNO54A", "");
    }
} else if (tag54B != '') {
    stp.updateFieldValue("INW_X103_TAG_54A", "B");
} else if (tag54D != '') {
    stp.updateFieldValue("INW_X103_TAG_54A", "D");
}

var tag52A = stp.getSWIFTTagValue("52A");
var tag52D = stp.getSWIFTTagValue("52D");
if (tag52A != '') {
    stp.writeLog("tag52A ----" + tag52A);

    stp.updateFieldValue("INW_X103_TAG_52A", "A");
    var val52A = stp.getPartValue(tag52A, "1", "1");
    if (val52A != '/') {
        stp.updateFieldValue("INW_X103_ORDBKACNO_52A", "");
    }
} else if (tag52D != '') {
    stp.updateFieldValue("INW_X103_TAG_52A", "D");
    var val52D = stp.getPartValue(tag52D, "1", "1");
    if (val52D != '/') {
        stp.updateFieldValue("INW_X103_ORDBKACNO_52A", "");
    }

}

var tag71A = stp.getSWIFTTagValue("71A");
stp.writeLog("tag71A #############" + tag71A);

var tag111 = stp.getSWIFTTagValue("111");
stp.updateFieldValue("SERVICE_TYPE_ID_GPI_111", tag111);
stp.writeLog("tag111========" + tag111);

var tag121 = stp.getSWIFTTagValue("121");
stp.updateFieldValue("UETR_GPI_121", tag121);
stp.writeLog("tag121========" + tag121);

//stp.SYS_getCUBK("INW_X103_ACC_BKSW_59","INW_X103_BENECU_SW_59A");
stp.setEventTimes(0);
//stp.writeLog("=========================================!");
//stp.writeLog("INW_X103BENECUADD1_59A===================");
//stp.SYS_getCUBK("INW_X103_SENDCORRSW53A","INW_X103_SENDCORRSW53A");
//stp.SYS_getCUBK("INW_X103_RECCORRSW_54A","INW_X103_RECCORRSW_54A");
//stp.SYS_getCUBK("INW_X103_ACC_BKSW_57A","INW_X103_ACC_BKSW_57A");
//stp.updateFieldValue('REPAIR_REASON', reprReason);
//stp.updateFieldValue('CURRENT_STATUS', "MT103");
//stp.inqGAPI("PYMT_ROUTING");
stp.writeLog("Start Payment Received Completed!");