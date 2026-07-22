// Initialise 

stp.writeLog("STP START: Start incomming XML Received ");

stp.setAutoProcess(true);

//create trn number

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

var seq = stp.SYS_getRefNo("AT");
var reqDate = stp.getSysBusiDate();
var juldate = String(reqDate.toString().substr(2, 2) + String(SYT_getDOY()));
var sCntyCode = stp.getBusiUnit().substr(0, 4);
var prod = seq.substr(0, 2);
var seqNumber = seq.substr(2, 5);
var ss = prod + juldate + sCntyCode + seqNumber;

stp.updateFieldValue("C_MAIN_REF", ss);
stp.writeLog("STP: New Ref No is " + ss);

// map fields to transaction
stp.updateFieldValue("CHANNEL", stp.getXMLNodeValue("CHANNEL").toUpperCase());
stp.updateFieldValue("CUST_REF", stp.getXMLNodeValue("CUST_REF"));
stp.updateFieldValue("APP_TYPE", stp.getXMLNodeValue("APP_TYPE"));
stp.updateFieldValue("APPL_CNTY_RES", stp.getXMLNodeValue("APPL_CNTY_RES"));
stp.updateFieldValue("BENE_AC_TYPE", stp.getXMLNodeValue("BENE_AC_TYPE"));
stp.updateFieldValue("BENE_CNTY_RES", stp.getXMLNodeValue("BENE_CNTY_RES"));
stp.updateFieldValue("DB_CALC_AMT", stp.getXMLNodeValue("DB_AMT"));
stp.updateFieldValue("DB_AMT", stp.getXMLNodeValue("DB_AMT"));
stp.updateFieldValue("DB_CALC_AMT", stp.getXMLNodeValue("DB_AMT"));
stp.updateFieldValue("DB_CCY", stp.getXMLNodeValue("DB_CCY"));
stp.updateFieldValue("CR_CALC_AMT", stp.getXMLNodeValue("CR_AMT"));
stp.updateFieldValue("CR_AMT", stp.getXMLNodeValue("CR_AMT"));
stp.updateFieldValue("CR_CALC_AMT", stp.getXMLNodeValue("CR_AMT"));
stp.updateFieldValue("CR_CCY", stp.getXMLNodeValue("CR_CCY"));

stp.updateFieldValue("X103_ORDCUACNO_50A", stp.getXMLNodeValue("X103_ORDCUACNO_50A"));
stp.updateFieldValue("X103_BENECUACNO59A", stp.getXMLNodeValue("X103_BENECUACNO59A"));

if (stp.getXMLNodeValue("BENE_AC_TYPE").toUpperCase() == "CUSTOMER") {
    stp.SYS_getCUBK("X103_BENECUACNO59A", "X103_BENECUACNO59A");
    stp.SYS_getCUBK("X103_BENECU_ID_59A_INTTRF", "X103_BENECU_ID_59A");
} else {
    stp.SYS_getCUBK("X103_BENECUACNO59A_NONCUST", "X103_BENECUACNO59A");
    stp.SYS_getCUBK("X103_BENECU_ID_59A_BANK", "X103_BENECU_ID_59A");
}

stp.writeLog("APP_TYPE=" + stp.getXMLNodeValue("APP_TYPE"));
stp.writeLog("X103_ORDCUACNO_50A=" + stp.getXMLNodeValue("X103_ORDCUACNO_50A"));

if (stp.getXMLNodeValue("APP_TYPE").toUpperCase() == "CUSTOMER") {
    stp.SYS_getCUBK("X103_ORDCUACNO_50A", "X103_ORDCUACNO_50A");
    stp.SYS_getCUBK("X103_ORDCU_ID_50A_INTRF", "X103_ORDCU_ID_50A");
} else {
    stp.SYS_getCUBK("X103_ORDCUACNO_50A_NONCUST", "X103_ORDCUACNO_50A");
    stp.SYS_getCUBK("X103_ORDCU_ID_50A_BANK", "X103_ORDCU_ID_50A");
}

stp.updateFieldValue("RELATED_REF_NO", stp.getXMLNodeValue("RELATED_REF_NO"));

stp.updateFieldValue("COV_NO", stp.getXMLNodeValue("COV_NO"));
stp.updateFieldValue("X103_EXCH_RT_36", stp.getXMLNodeValue("X103_EXCH_RT_36"));
stp.updateFieldValue("X103_VALUE_DT_32A", stp.getXMLNodeValue("X103_VALUE_DT_32A"));
stp.updateFieldValue("DB_CASH_IND", stp.getXMLNodeValue("DB_CASH_IND"));
stp.updateFieldValue("CR_CASH_IND", stp.getXMLNodeValue("CR_CASH_IND"));

stp.updateFieldValue("CHG_CASH_IND", stp.getXMLNodeValue("CHG_CASH_IND"));
stp.updateFieldValue("CHG_FLD_LOCAL_CUST_CCY", stp.getXMLNodeValue("CHG_FLD_LOCAL_CUST_CCY"));
stp.updateFieldValue("CHG_FLD_LOCAL_CUST_AC_NO", stp.getXMLNodeValue("ACNO"));
stp.updateFieldValue("CHG_FLD_ALL_CHARGE_AT", stp.getXMLNodeValue("CHG_FLD_ALL_CHARGE_AT"));
stp.updateFieldValue("TRX_HISTORY", stp.getXMLNodeValue("TRX_HISTORY"));

stp.updateFieldValue("NOTES", stp.getXMLNodeValue("NOTES"));

stp.updateFieldValue("INW_CUST_REF", stp.getXMLNodeValue("INW_CUST_REF"));

stp.writeLog("STP: Fields Mapping Complete");

// assign next and current status
// This will put the trasaction in "AT Capture" state
stp.updateFieldValue("CURRNT_STATUS", "INTERNAL_TRANSFER");
stp.updateFieldValue("NXT_STATUS", "INTERNAL_TRANSFER_RELEASE");

stp.updateFieldValue("FDS_AVAL", "Yes");
stp.updateFieldValue("OVRIDE", "No");

// Standard Fields Mapping
stp.updateFieldValue("CANCEL_FLG", "No");
stp.updateFieldValue("AUTO_CREATED", "Yes");