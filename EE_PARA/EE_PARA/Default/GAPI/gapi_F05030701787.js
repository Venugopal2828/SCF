//for Suang limit testing  
var APPL_ID = DV.getFieldValue("APPL_ID");
if (APPL_ID. substr(-5)==='_LMTS') {
DV.appendField("GTEE_paymentlimit");
}  