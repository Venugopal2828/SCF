var sFuncId = CAL.getOriFuncId();
CAL.writeLog("sFuncId==================="+sFuncId);
var MSG_FIELD_NAME = "";
if(sFuncId == "F05030701011"){
    MSG_FIELD_NAME = "C_XML_DATA_014";
    CAL.addGlobalProperty("MSG_FIELD_NAME",MSG_FIELD_NAME);
} else if(sFuncId == "F05030701010"){
    MSG_FIELD_NAME = "C_XML_DATA_014";
    CAL.addGlobalProperty("MSG_FIELD_NAME",MSG_FIELD_NAME);
} else if(sFuncId == "F05030701008"){
  var sDecision = CAL.getOriFieldValue("ACPT_REJ");
  if(sDecision == "ACCEPTED"){
    MSG_FIELD_NAME = "C_XML_DATA_020";
  } else {
    MSG_FIELD_NAME = "C_XML_DATA_022";
  }
  CAL.addGlobalProperty("MSG_FIELD_NAME",MSG_FIELD_NAME);
}
CAL.addGlobalProperty("FTP_ID","FTP_CE");
CAL.addGlobalProperty("GAPI_RULE","TsuOutgoingReformat");