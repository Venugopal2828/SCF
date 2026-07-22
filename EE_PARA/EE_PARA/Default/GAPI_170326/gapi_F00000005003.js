 var GAPI_CHECK = DV.getFieldValue("GAPI_IND_FLG");
 var CUST_TYPE = DV.getFieldValue("APP_TYPE");
 DV.writeLog("GAPI_IND_FLG ------------------------" + GAPI_CHECK);

 if (GAPI_CHECK == "false") {
     if (CUST_TYPE == "CUSTOMER") {
         DV.appendField("PYMT_BalanceCheck");
         DV.appendField("PYMT_BalanceCheckRel");
     }
 }
 DV.appendField("PYMT_EE2BRDG");