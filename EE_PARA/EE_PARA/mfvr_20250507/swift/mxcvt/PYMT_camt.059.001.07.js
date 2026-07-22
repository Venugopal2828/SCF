function merge() {
	stp.log('js merge mx camt.059.001.07');
	// var agt = stp.xml(source, "domData/MX_DBTRAGT");
	//console.log(agt); // {"FinInstnId":{"BICFI":"CITIUS33XXX"}}
	//var j = eval('(' + agt + ')'); // JSON.parse(agr);
	//var j1 = j.FinInstnId.BICFI;
	//console.log(j1);
	//if (!j1) {
	// var j1 = 'LOYDGB21002';
	var j1 = 'BKCHCNBJXXX';
	//}
	// mx sender bic via B1 BIC part from MT config: `/Param/Default/SWIFT/swttag_CSBANK.xml`
	stp.setData("/AppHdr/Fr/FIId/FinInstnId/BICFI", "CITIUS33XXX");
	stp.setData("/AppHdr/To/FIId/FinInstnId/BICFI", j1);
	stp.setData("/AppHdr/BizMsgIdr", stp.xml(source, "domData/C_MAIN_REF"));

}
function demerge() {
	stp.log('js: demerge mx camt.059.001.07');

}
