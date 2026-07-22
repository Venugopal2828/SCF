// Initialise 

stp.writeLog("STP START: Start incomming XML Received ");

stp.setAutoProcess(true);

stp.writeLog("STP START: stp.setAutoProcess Setup ");

function SYT_getDOY() {
    var reqDate = stp.getSysBusiDate();
    stp.writeLog("STP START: reqDate Setup " + reqDate);
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

stp.updateFieldValue("C_UNIT_CODE", stp.getXMLNodeValue("buCode"));
stp.writeLog("STP START: stp.SYS_getRefNo Start " + stp.getXMLNodeValue("buCode"));

var seq = stp.SYS_getRefNo("PYMT1");
stp.writeLog("STP START: stp.SYS_getRefNo Done ");
var reqDate = stp.getSysBusiDate();
var juldate = String(reqDate.toString().substr(2, 2) + String(SYT_getDOY()));
var sCntyCode = stp.getBusiUnit().substr(0, 4);
var prod = seq.substr(0, 2);
var seqNumber = seq.substr(2, 5);
var ss = prod + juldate + sCntyCode + seqNumber;

stp.updateFieldValue("C_MAIN_REF", ss);
stp.writeLog("STP: New Ref No is " + ss);

// map fields to transaction 
stp.updateFieldValue("X103_VALUE_DT_32A", stp.getXMLNodeValue("CPYT_DR_VAL_DATE"));
stp.updateFieldValue("CHANNEL", stp.getXMLNodeValue("CHANNEL").toUpperCase());
stp.updateFieldValue("CUST_REF", stp.getXMLNodeValue("CUST_REF"));
stp.updateFieldValue("APP_TYPE", stp.getXMLNodeValue("APP_TYPE"));
stp.updateFieldValue("APPL_CNTY_RES", stp.getXMLNodeValue("APPL_CNTY_RES"));
stp.updateFieldValue("DB_AMT", stp.getXMLNodeValue("DB_AMT"));
stp.updateFieldValue("DB_CALC_AMT", stp.getXMLNodeValue("DB_AMT"));
stp.updateFieldValue("DB_CCY", stp.getXMLNodeValue("DB_CCY"));
stp.updateFieldValue("CR_AMT", stp.getXMLNodeValue("CR_AMT"));
stp.updateFieldValue("CR_CALC_AMT", stp.getXMLNodeValue("CR_AMT"));
stp.updateFieldValue("CR_CCY", stp.getXMLNodeValue("CR_CCY"));
stp.updateFieldValue("RELATED_REF_NO", stp.getXMLNodeValue("RELATED_REF_NO"));
stp.updateFieldValue("X103_EXCH_RT_36", stp.getXMLNodeValue("X103_EXCH_RT_36"));
stp.updateFieldValue("CPYT_DR_VAL_DATE", stp.getXMLNodeValue("CPYT_DR_VAL_DATE"));
stp.updateFieldValue("X103_VALUE_DT_32A", stp.getXMLNodeValue("X103_VALUE_DT_32A"));
stp.updateFieldValue("X103_ORDCUACNO_50A", stp.getXMLNodeValue("X103_ORDCUACNO_50A"));
stp.updateFieldValue("DB_CASH_IND", stp.getXMLNodeValue("DB_CASH_IND"));
stp.updateFieldValue("OVRIDE", "No");
stp.updateFieldValue("MLT_STLMT", "No");
stp.updateFieldValue("APP_TYPE", "CUSTOMER");
stp.updateFieldValue("X103_SEND_NO_20", ss);

//------------START Beneficiary Customer Details----------------------//
stp.updateFieldValue("BENE_AC_TYPE", stp.getXMLNodeValue("BENE_AC_TYPE"));
stp.updateFieldValue("BENE_CNTY_RES", stp.getXMLNodeValue("BENE_CNTY_RES"));
stp.updateFieldValue("X103_BENECU_NM_59A", stp.getXMLNodeValue("X103_BENECU_NM_59A"));
stp.updateFieldValue("X103BENECUADD1_59A", stp.getXMLNodeValue("X103BENECUADD1_59A"));
stp.updateFieldValue("X103BENECUADD2_59A", stp.getXMLNodeValue("X103BENECUADD2_59A"));
stp.updateFieldValue("X103BENECUADD3_59A", stp.getXMLNodeValue("X103BENECUADD3_59A"));
stp.updateFieldValue("X103_BENECUACNO59A", stp.getXMLNodeValue("X103_BENECUACNO59A"));
//------------END Beneficiary Customer Details----------------------//

stp.writeLog("STP: Fields Mapping Complete");
//assign next and current status
//This will put the trasaction in "OTT Capture" stateAccount Number
stp.updateFieldValue("CURRNT_STATUS", "OTT_DUE_DILIGENCE");
stp.updateFieldValue("NXT_STATUS", "OTT_CAPTURE");

if (stp.getXMLNodeValue("APP_TYPE") == "CUSTOMER") {
    stp.SYS_getCUBK("X103_ORDCUACNO_50A", "X103_ORDCUACNO_50A");
} else {
    stp.SYS_getCUBK("X103_ORDCUACNO_50A_BANK", "X103_ORDCUACNO_50A");
}

//------------START Standard Fields Mapping---------------------------------//
stp.updateFieldValue("CANCEL_FLG", "No");
//------------END Standard Fields Mapping-----------------------------------//


//------------START Settle Banks 103 Tab Fields Mapping-------------------//
stp.updateFieldValue("X103_ACC_BKSW_57A", stp.getXMLNodeValue("X103_ACC_BKSW_57A"));
stp.updateFieldValue("AC_WT_INST_CNTY_CODE", stp.getXMLNodeValue("AC_WT_INST_CNTY_CODE"));
//------------END Settle Banks 103 Tab Fields Mapping-------------------//


//------------START Others 103 Fields Mapping----------------------------//
stp.updateFieldValue("X103_REMIT_INF1_70", stp.getXMLNodeValue("X103_REMIT_INF1_70"));
stp.updateFieldValue("X103_REMIT_INF2_70", stp.getXMLNodeValue("X103_REMIT_INF2_70"));
stp.updateFieldValue("X103_REMIT_INF3_70", stp.getXMLNodeValue("X103_REMIT_INF3_70"));
stp.updateFieldValue("X103_REMIT_INF4_70", stp.getXMLNodeValue("X103_REMIT_INF4_70"));

stp.updateFieldValue("X103_INSTRCODE1_23E", stp.getXMLNodeValue("X103_INSTRCODE_23E"));

//------------END Charges Fields Mapping-------------------------------//

//------------START Charges Fields Mapping-------------------------------//
stp.updateFieldValue("X103_DET_CHG_71A", stp.getXMLNodeValue("X103_DET_CHG_71A"));
stp.updateFieldValue("CHG_CASH_IND", stp.getXMLNodeValue("CHG_CASH_IND"));

stp.updateFieldValue("CHG_FLD_LOCAL_CUST_CCY", stp.getXMLNodeValue("CHG_FLD_LOCAL_CUST_CCY"));


//if(stp.getXMLNodeValue("X103_DET_CHG_71A") == "OUR" | stp.getXMLNodeValue("X103_DET_CHG_71A") == "SHA"){
//	stp.updateFieldValue("CHG_FLD_LOCAL_CUST_AC_NO",stp.getXMLNodeValue("CHG_FLD_LOCAL_CUST_AC_NO"));
//}else{
stp.updateFieldValue("CHG_FLD_LOCAL_CUST_AC_NO", stp.getXMLNodeValue("CHG_FLD_LOCAL_CUST_AC_NO"));
//}

stp.updateFieldValue("CHG_FLD_ALL_CHARGE_AT", stp.getXMLNodeValue("CHG_FLD_ALL_CHARGE_AT"));
//------------END Charges Fields Mapping-------------------------------//

//------------START Settlements Tab Fields Mapping---------------------//

var Sett_Info = 'EX_RATE:' + stp.getXMLNodeValue("X103_EXCH_RT_36") +
    '|PAY_AMT:' + stp.getXMLNodeValue("PAY_AMT") +
    '|PAY_CCY:' + stp.getXMLNodeValue("PAY_CCY") +
    '|CPYT_DR_AC:' + stp.getXMLNodeValue("CPYT_DR_AC") +
    '|SETT_AMT:' + stp.getXMLNodeValue("SETT_AMT") +
    '|SETT_CCY:' + stp.getXMLNodeValue("SETT_CCY") +
    '|COV_NO:' + stp.getXMLNodeValue("COV_NO") +
    '|MUL_CASH_IND:' + stp.getXMLNodeValue("MUL_CASH_IND") +
    '|CRAFRICA_PURPS_DESC:' + stp.getXMLNodeValue("CRAFRICA_PURPS_DESC");
stp.updateFieldValue("SETT_DET_INFO_AUTO", Sett_Info);

stp.updateFieldValue("CPYT_DR_AC_TYPE", "CUSTOMER");
stp.updateFieldValue("CPYT_DR_AC", stp.getXMLNodeValue("CPYT_DR_AC"));
stp.updateFieldValue("MUL_CASH_IND", stp.getXMLNodeValue("MUL_CASH_IND"));
stp.updateFieldValue("EXCH_RATE", stp.getXMLNodeValue("EXCH_RATE"));
stp.updateFieldValue("MUL_FDS_AVAL", stp.getXMLNodeValue("MUL_FDS_AVAL"));
stp.updateFieldValue("PAY_CCY", stp.getXMLNodeValue("PAY_CCY"));
stp.updateFieldValue("PAY_AMT", stp.getXMLNodeValue("PAY_AMT"));
stp.updateFieldValue("SETT_AMT", stp.getXMLNodeValue("SETT_AMT"));
// stp.updateFieldValue("NOTES", stp.getXMLNodeValue("NOTES"));
//------------END Settlements Tab Fields Mapping-----------------------//

stp.updateFieldValue("INW_CUST_REF", stp.getXMLNodeValue("INW_CUST_REF"));
stp.updateFieldValue("AUTO_CREATED", "Yes");
stp.updateFieldValue("TRX_HISTORY", stp.getXMLNodeValue("TRX_HISTORY"));

stp.updateFieldValue("PRIORITY", stp.getXMLNodeValue("PRIORITY"));

stp.writeLog("STP: Field 1 Mapping Complete - " + stp.getXMLNodeValue("X103_ORDCU_ID_50A"));
stp.writeLog("STP: Field 2 Mapping Complete - " + stp.getXMLNodeValue("X103_ORDCU_NM_50A"));
stp.writeLog("STP: Field 3 Mapping Complete - " + stp.getXMLNodeValue("X103_ORDCUADD1_50A"));
stp.writeLog("STP: Field 4 Mapping Complete - " + stp.getXMLNodeValue("X103_ORDCUADD2_50A"));
stp.writeLog("STP: Field 5 Mapping Complete - " + stp.getXMLNodeValue("X103_ORDCUADD3_50A"));
stp.writeLog("STP: Field 6 Mapping Complete - " + stp.getXMLNodeValue("X103_ORDCUACNO_50A"));

stp.updateFieldValue("X103_ORDCU_ID_50A", stp.getXMLNodeValue("X103_ORDCU_ID_50A"));
stp.updateFieldValue("X103_ORDCU_NM_50A", stp.getXMLNodeValue("X103_ORDCU_NM_50A"));
stp.updateFieldValue("X103_ORDCUADD1_50A", stp.getXMLNodeValue("X103_ORDCUADD1_50A"));
stp.updateFieldValue("X103_ORDCUADD2_50A", stp.getXMLNodeValue("X103_ORDCUADD2_50A"));
stp.updateFieldValue("X103_ORDCUADD3_50A", stp.getXMLNodeValue("X103_ORDCUADD3_50A"));
stp.updateFieldValue("X103_ORDCU_SW_50A", stp.getXMLNodeValue("X103_ORDCU_SW_50A"));
stp.updateFieldValue("X103_ORDCUACNO_50A", stp.getXMLNodeValue("X103_ORDCUACNO_50A"));