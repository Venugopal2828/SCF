var sStatus = CAL.getFieldValue("CURRNT_STATUS");
CAL.writeLog("sStatus===================="+sStatus);
if(sStatus == "Request Purchase Order Amendment"){
CAL.addGlobalProperty("CUST_XSL_KEY","srn.tsmt.009");
CAL.addGlobalProperty("MSG_FIELD_NAME","C_XML_DATA_009");
} else if(sStatus == "Resubmitted Purchase Order"){
CAL.addGlobalProperty("CUST_XSL_KEY","srn.tsmt.012");
CAL.addGlobalProperty("MSG_FIELD_NAME","C_XML_DATA_012");
} else {
CAL.addGlobalProperty("CUST_XSL_KEY","srn.tsmt.019");
CAL.addGlobalProperty("MSG_FIELD_NAME","C_XML_DATA_019");
}