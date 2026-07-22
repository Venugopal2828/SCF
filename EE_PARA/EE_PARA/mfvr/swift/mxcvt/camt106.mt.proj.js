function merge_proj(){
 //
 	var b4 = msg.get("TEXT");
 	// stp.log('has 53a 3 ? ' + stp.has(b4, "Choice_53ABD/F53A/IdentifierCode"))
 	// msgid
 	var b3 = msg.get("B3");
 //	if (!stp.has(b3, "108")) {
 //	  stp.setData("/FIToFICstmrCdtTrf/GrpHdr/MsgId", b4.get("F20"));
 //	}
 	// stp.setData("/FIToFICstmrCdtTrf/GrpHdr/MsgId",b4.get('F20'));
 	if (b3.get('103') == 'ZDS') {
 //	  reformat_class='test.cs.esp.restRS.SzbaMxReformater';
 	} else if (b3.get('103') == 'EBA') {
 //    reformat_class='test.cs.esp.swift.mx.ShbMt2MxReformater';
  }
  stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/UndrlygTx/AcctSvcrRef", 'PROJ0001' )
  stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/DbtrAgt/FinInstnId/PstlAdr/Ctry", 'CN');
  stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/DbtrAgt/FinInstnId/PstlAdr/TwnNm", 'NANJING');
  console.log('PROJ merge');
}