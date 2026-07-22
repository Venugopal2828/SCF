var sType = CAL.getFieldValue("PROCESS_TYPE"); 
if(sType == "BYPO"){
CAL.addGlobalProperty("CUST_XSL_KEY","srn.tsmt.044PO");
CAL.addGlobalProperty("MSG_FIELD_NAME","C_XML_DATA_044");
}else {
CAL.addGlobalProperty("CUST_XSL_KEY","srn.tsmt.044Invoice");
CAL.addGlobalProperty("MSG_FIELD_NAME","C_XML_DATA_044");
}