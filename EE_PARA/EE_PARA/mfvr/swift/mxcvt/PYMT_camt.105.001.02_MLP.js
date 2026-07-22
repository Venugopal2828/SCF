function merge() {
	stp.log('js merge mx camt.105_mlp');
	var j1 = 'BKCHCNBJXXX';
	stp.setData("/AppHdr/Fr/FIId/FinInstnId/BICFI", "CITIUS33XXX");
	stp.setData("/AppHdr/To/FIId/FinInstnId/BICFI", j1);
	stp.setData("/AppHdr/BizMsgIdr", stp.xml(source, "domData/C_MAIN_REF"));
    stp.setData("/AppHdr/BizSvc", "swift.cbprplus.mlp.02");
	bizsvc='swift.cbprplus.mlp.02';
	stp.log('js bizsvc mx camt.105   swift.cbprplus.mlp.02');
}

function demerge() {
	stp.log('js: demerge mx camt.105_mlp');
}