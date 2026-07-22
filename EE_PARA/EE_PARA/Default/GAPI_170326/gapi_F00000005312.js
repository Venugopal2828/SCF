var GAPI_CHECK = DV.getFieldValue("GAPI_IND_FLG");

DV.writeLog("GAPI_IND_FLG ------------------------" + GAPI_CHECK);
if (GAPI_CHECK == "false") {
    DV.appendField("PYMT_BalanceCheck");
    //DV.appendField("PYMT_BalanceCheckRel");
}
DV.appendField("PYMT_EE2BRDG");