function merge() {
	stp.log('js merge mx pacs.009cov');
	var j1 = stp.xml(source, "domData/X202_ADV_BKSW_B2");
	stp.setData("/AppHdr/Fr/FIId/FinInstnId/BICFI", "PTSABMAAXXX");
	stp.setData("/AppHdr/To/FIId/FinInstnId/BICFI", j1);
  
    var f20 = stp.xml(source, "domData/C_MAIN_REF");
	stp.setData("/AppHdr/BizMsgIdr", f20);

    stp.setData("/FICdtTrf/GrpHdr/MsgId", f20);
    stp.setData("/FICdtTrf/CdtTrfTxInf/PmtId/InstrId", f20);
    stp.setData("/FICdtTrf/CdtTrfTxInf/PmtId/EndToEndId", f20);

    var now = new Date();
	var t = now.toMxString();
	stp.setData("/FICdtTrf/GrpHdr/CreDtTm", t);
  
    stp.setData("/AppHdr/BizSvc", "swift.cbprplus.cov.02");
    bizsvc='swift.cbprplus.cov.02';
    stp.log('js bizsvc mx pacs.009   swift.cbprplus.cov.02');
}
function demerge() {

}