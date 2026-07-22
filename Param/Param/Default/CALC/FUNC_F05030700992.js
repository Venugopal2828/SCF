var sDecision = CAL.getFieldValue("ACPT_REJ");
if(sDecision == "ACCEPTED"){
CAL.addGlobalProperty("CUST_XSL_KEY","srn.tsmt.012");
CAL.addGlobalProperty("MSG_FIELD_NAME","C_XML_DATA_012");
}