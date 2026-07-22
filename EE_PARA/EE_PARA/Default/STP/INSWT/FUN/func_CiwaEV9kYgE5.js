stp.writeLog("STP START: Start Incoming pain001");

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

var UETR = stp.getXMLNodeValue("CstmrCdtTrfInitn/PmtInf/PmtInfId");
stp.writeLog("UETR=============" + UETR);
stp.updateFieldValue("UETR_GPI_121", UETR);
stp.updateFieldValue("CURRNT_STATUS", "RcvPain001");

stp.writeLog("Start Incoming pain001!");