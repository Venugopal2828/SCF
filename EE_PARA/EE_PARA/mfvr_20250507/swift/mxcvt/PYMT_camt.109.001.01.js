function merge() {
	stp.log('js merge mx camt.109');
	var j1 = 'BKCHCNBJXXX';
	stp.setData("/AppHdr/Fr/FIId/FinInstnId/BICFI", "CITIUS33XXX");
	stp.setData("/AppHdr/To/FIId/FinInstnId/BICFI", j1);
	stp.setData("/AppHdr/BizMsgIdr", stp.xml(source, "domData/C_MAIN_REF"));
    stp.setData("/AppHdr/BizSvc", "swift.cbprplus.03");
	bizsvc='swift.cbprplus.03';
	stp.log('js bizsvc mx camt.109   swift.cbprplus.03');
}

function demerge() {
	stp.log('js: demerge mx camt.109');
}