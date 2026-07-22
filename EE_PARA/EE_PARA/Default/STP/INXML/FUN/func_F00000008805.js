/*****Receive REMM IMT From CE Function Start******/
stp.writeLog("**Receive REMM IMT From CE Function Start****");
stp.setEventTimes("0");
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

var seq = stp.SYS_getRefNo("PYMT1");
var reqDate = stp.getSysBusiDate();
var juldate = String(reqDate.toString().substr(2, 2) + String(SYT_getDOY()));
stp.writeLog("juldate is " + juldate);
var prod = seq.substr(0, 2);
stp.writeLog("prod is " + prod);
var seqNumber = seq.substr(3, 9);
stp.writeLog("seqNumber is " + seqNumber);
var ss = prod + juldate + seqNumber;

stp.updateFieldValue("C_MAIN_REF", ss);
stp.writeLog("STP: New Ref No is " + ss);

var APPL_ID = stp.getXMLNodeValue("APPL_ID");
stp.writeLog("STP: APPL_ID is " + APPL_ID);
stp.updateFieldValue("X103_ORDCU_ID_50A", APPL_ID);

var C_IS_BANK = stp.getXMLNodeValue("C_IS_BANK");
stp.writeLog("STP: C_IS_BANK is " + C_IS_BANK);
stp.updateFieldValue("C_IS_BANK", C_IS_BANK);

var APPL_ACCT = stp.getXMLNodeValue("APPL_ACCT");
stp.writeLog("STP: APPL_ACCT is " + APPL_ACCT);
stp.updateFieldValue("X103_ORDCUACNO_50A", APPL_ACCT);
if (C_IS_BANK !== "") {
    if (C_IS_BANK == "F") {
        stp.updateFieldValue("APP_TYPE", "CUSTOMER");
        //stp.SYS_getCUBK("X103_ORDCUACNO_50A", "X103_ORDCUACNO_50A");
        stp.SYS_getCUBK("X103_ORDCU_ID_50A", "X103_ORDCU_ID_50A");
    } else {
        stp.updateFieldValue("APP_TYPE", "BANK");
        //stp.SYS_getCUBK("X103_ORDCUACNO_50A_BANK", "X103_ORDCUACNO_50A");
        stp.SYS_getCUBK("X103_ORDCU_ID_50A_BANK", "X103_ORDCU_ID_50A");
    }
}

var PAY_CCY = stp.getXMLNodeValue("PAY_CCY");
stp.writeLog("STP: PAY_CCY is " + PAY_CCY);
stp.updateFieldValue("DB_CCY", PAY_CCY);
stp.updateFieldValue("CR_CCY", PAY_CCY);

var TTL_PAY_AMT = stp.getXMLNodeValue("TTL_PAY_AMT");
stp.writeLog("STP: TTL_PAY_AMT is " + TTL_PAY_AMT);
stp.updateFieldValue("CR_AMT", TTL_PAY_AMT);
stp.updateFieldValue("DB_AMT", TTL_PAY_AMT);
stp.updateFieldValue("DB_CALC_AMT", TTL_PAY_AMT);
stp.updateFieldValue("CR_CALC_AMT", TTL_PAY_AMT);

var CUST_C_MAIN_REF = stp.getXMLNodeValue("C_MAIN_REF");
stp.writeLog("STP: CUST_C_MAIN_REF is " + CUST_C_MAIN_REF);
stp.updateFieldValue("CUST_REF", CUST_C_MAIN_REF);
stp.updateFieldValue("RELATED_REF", CUST_C_MAIN_REF);
stp.writeLog("**Receive REMM IMT From CE Function End****");

/*****Receive REMM IMT From CE Function End******/