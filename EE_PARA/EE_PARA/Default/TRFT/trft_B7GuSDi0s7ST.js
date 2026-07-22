DV.writeLog("== start transfer to==");
var EE_CUSTOMER = DV.getFieldValue("EE_CUSTOMER");
var ACPT_RJCT = DV.getFieldValue("ACCEPT_REJECT");
var CMAIN = DV.getFieldValue("C_MAIN_REF");
var TEMP = DV.getFieldValue("TEMP_REF");
var REFUSE_REASON = DV.getFieldValue("C_REFUSE_REASON");

DV.writeLog("Logs are generatingj:::::::"+EE_CUSTOMER);
DV.writeLog("CMAIN   generating"+CMAIN);
DV.writeLog("TEMP    GEnerating"+TEMP);

if (EE_CUSTOMER == 'YES' && ACPT_RJCT == 'ACCEPT'){
DV.writeLog("TEST"+ACPT_RJCT);
DV.appendField("STAT_EECustomer");
}
