function merge() {
	stp.log('js merge mx pacs.008');
	//var j1 = 'PTSABMABXXX';
    var j1 = stp.xml(source, "domData/X103_ADV_BKSW_B2");
	stp.setData("/AppHdr/Fr/FIId/FinInstnId/BICFI", "PTSABMAAXXX");
	stp.setData("/AppHdr/To/FIId/FinInstnId/BICFI", j1);
	stp.log('j1 is' + j1);
    
	var f20 = stp.xml(source, "domData/C_MAIN_REF");
	stp.setData("/AppHdr/BizMsgIdr", f20);

  stp.setData("/FIToFICstmrCdtTrf/GrpHdr/MsgId", f20);
  stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtId/InstrId", f20);
  stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtId/EndToEndId", f20);

  var now = new Date();
	var t = now.toMxString();
	stp.setData("/FIToFICstmrCdtTrf/GrpHdr/CreDtTm", t);
	    
}
function demerge() {

}