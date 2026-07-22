function merge() {
	stp.log('js merge mx pacs.008');
	// var agt = stp.xml(source, "domData/MX_DBTRAGT");
	//console.log(agt); // {"FinInstnId":{"BICFI":"CITIUS33XXX"}}
	//var j = eval('(' + agt + ')'); // JSON.parse(agr);
	//var j1 = j.FinInstnId.BICFI;
	//console.log(j1);
	//if (!j1) {
	// var j1 = 'LOYDGB21002';
	var j1 = 'ABNANL2AXXX';
	//}
	// mx sender bic via B1 BIC part from MT config: `/Param/Default/SWIFT/swttag_CSBANK.xml`
	stp.setData("/AppHdr/Fr/FIId/FinInstnId/BICFI", "CHASUS33XXX");
	stp.setData("/AppHdr/To/FIId/FinInstnId/BICFI", j1);
	stp.setData("/AppHdr/BizMsgIdr", stp.xml(source, "domData/C_MAIN_REF"));
    
    stp.setData("/AppHdr/BizSvc", "swift.cbprplus.03");
    bizsvc='swift.cbprplus.03';
}
function demerge() {
	stp.setData("F72_NODOM", " from esp script. ");
	stp.log('js: demerge mx pacs.008');

}
