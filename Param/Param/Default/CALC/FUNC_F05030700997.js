var sFuncId = CAL.getOriFuncId();
CAL.writeLog("sFuncId==================="+sFuncId);
var MSG_FIELD_NAME = "";
if(sFuncId == "F05030700990"){
  var sStatus = CAL.getOriFieldValue("CURRNT_STATUS");
  if(sStatus == "Request Purchase Order Amendment"){
	MSG_FIELD_NAME = "C_XML_DATA_009";
  } else if(sStatus == "Resubmitted Purchase Order"){
	MSG_FIELD_NAME = "C_XML_DATA_012";
  } else {
  	MSG_FIELD_NAME = "C_XML_DATA_019";
  }
  CAL.addGlobalProperty("MSG_FIELD_NAME",MSG_FIELD_NAME);
} else if(sFuncId == "F05030700992"){
  var sDecision = CAL.getOriFieldValue("ACPT_REJ");
  if(sDecision == "ACCEPTED"){
	MSG_FIELD_NAME = "C_XML_DATA_012";
  	CAL.addGlobalProperty("MSG_FIELD_NAME",MSG_FIELD_NAME);
  }
} else if(sFuncId == "F05030701033"){
  var sDecision = CAL.getOriFieldValue("ACPT_REJ");
  if(sDecision == "ACCEPTED"){
      MSG_FIELD_NAME = "C_XML_DATA_005";
  } else {
      MSG_FIELD_NAME = "C_XML_DATA_007";
  } 
  CAL.addGlobalProperty("MSG_FIELD_NAME",MSG_FIELD_NAME); 
} else if(sFuncId == "F05030701019"){
      MSG_FIELD_NAME = "C_XML_DATA_019";
      CAL.addGlobalProperty("MSG_FIELD_NAME",MSG_FIELD_NAME);
} else if(sFuncId == "F05030701042"){
      MSG_FIELD_NAME = "C_XML_DATA_012";
      CAL.addGlobalProperty("MSG_FIELD_NAME",MSG_FIELD_NAME);
} else if(sFuncId == "F05030701039"){
      MSG_FIELD_NAME = "C_XML_DATA_009";
      CAL.addGlobalProperty("MSG_FIELD_NAME",MSG_FIELD_NAME);
} else if(sFuncId == "F05030701046"){
      MSG_FIELD_NAME = "C_XML_DATA_009";
      CAL.addGlobalProperty("MSG_FIELD_NAME",MSG_FIELD_NAME);
}
  CAL.addGlobalProperty("FTP_ID","FTP_CE");
  CAL.addGlobalProperty("GAPI_RULE","TsuOutgoingReformat");