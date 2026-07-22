var sDecision = CAL.getFieldValue("ACPT_REJ");
if(sDecision == "ACCEPTED"){
CAL.addGlobalProperty("CUST_XSL_KEY","srn.tsmt.005");
CAL.addGlobalProperty("MSG_FIELD_NAME","C_XML_DATA_005");
}else {
CAL.addGlobalProperty("CUST_XSL_KEY","srn.tsmt.007");
CAL.addGlobalProperty("MSG_FIELD_NAME","C_XML_DATA_007");
}