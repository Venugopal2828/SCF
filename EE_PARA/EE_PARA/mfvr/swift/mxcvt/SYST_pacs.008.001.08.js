function merge() {
	stp.log('js merge mx pacs.008');
	//var j1 = 'CITIUS33XXX';
	// mx sender bic via B1 BIC part from MT config: `/Param/Default/SWIFT/swttag_CSBANK.xml`
	
    var agt = stp.xml(source, "domData/MX_INSTDAGT"); 
    // temp changed by ben pan 20241112 -s
    var lines = agt.split('\n');
    agt = lines[0];
    // temp changed by ben pan 20241112 -e
    stp.log('agt is' + agt); 
    var j = eval('(' + agt + ')');
	stp.log('j is' + j);
    var j1 = j.FinInstnId.BICFI; 
    stp.log('j1 is'+ j1); 
    stp.setData("/AppHdr/Fr/FIId/FinInstnId/BICFI", "PTSABMAAXXX"); 
    stp.setData("/AppHdr/To/FIId/FinInstnId/BICFI", j1); 
    
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
