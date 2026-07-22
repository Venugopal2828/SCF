var sType = DV.getFieldValue("MSG_TYPE");
DV.writeLog("Message type is : "+sType);
if(sType == "Counterparty.SCF75"){
	DV.appendField("SendEDI075toEE");
}else if(sType == "Invoice.SCF79") {
	DV.appendField("SendEDI079toEE");
}else if(sType == "PO.SCF59"){
    DV.appendField("SendEDI059toEE");
}else{
	DV.appendField("SendMsgtoEE");
}
