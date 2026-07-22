var txt = stp.getSWIFTBody();
if(txt.indexOf("urn:iso:std:iso:20022:tech:xsd:") > 0){
 stp.writeLog('native mx, fileact mode swift ');
}
stp.setFunc("Incoming pacs008");