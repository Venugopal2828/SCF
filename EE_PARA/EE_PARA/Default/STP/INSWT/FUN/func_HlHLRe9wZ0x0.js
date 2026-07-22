stp.setAutoProcess(true);
var seq = stp.SYS_getRefNo("PYMT_INW"); 
var reqDate =stp.getSysBusiDate();
var juldate = String(reqDate.toString().substr(2, 2));
var sCntyCode = stp.getBusiUnit().substr(0,4);
var prod = seq.substr(0,2);
var seqNumber = seq.substr(2,9);
var ss = prod+juldate+seqNumber;

stp.updateFieldValue("C_MAIN_REF",ss);