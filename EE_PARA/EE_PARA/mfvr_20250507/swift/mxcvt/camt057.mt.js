// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx


function merge(){
  var b4 = msg.get("TEXT");
  var now = new Date();
  var t = now.toMxString();
  stp.setData("/NtfctnToRcv/GrpHdr/CreDtTm", t);
  stp.setData("/NtfctnToRcv/Ntfctn/Id",b4.get('F20'));
  stp.log(' TBD: Loop1 Choice_50CF, Choice_52AD Choice_56AD')
  var loop2 = b4.get("Loop1");
  for (var i = 0; i < loop2.length(); i++) {
    var item = loop2.get(i);
	if (stp.has(item, "Choice_50CF") ) {
	  Mxcvt.acc("/NtfctnToRcv/Ntfctn/Itm["+i+"]/DbtrAcct", item, 'Choice_50CF');
	  Mxcvt.pty("/NtfctnToRcv/Ntfctn/Itm["+i+"]/Dbtr", item, 'Choice_50CF','mix');
	}
	if (stp.has(item, "Choice_52AD") ) {
	  //  /Document/NtfctnToRcv/Ntfctn/Itm/DbtrAgt
	  Mxcvt.pty("/NtfctnToRcv/Ntfctn/Itm["+i+"]/Dbtr", item, 'Choice_52AD','fin');
	  Mxcvt.acc("/NtfctnToRcv/Ntfctn/Itm["+i+"]/DbtrAcct", item, 'Choice_52AD');
	}
	if (stp.has(item, "Choice_56AD") ) {
	  Mxcvt.fin("/NtfctnToRcv/Ntfctn/Itm["+i+"]/DbtrAgt", item, 'Choice_52AD');
	  Mxcvt.acc("/NtfctnToRcv/Ntfctn/Itm["+i+"]/DbtrAgtAcct", item, 'Choice_52AD');
	  Mxcvt.fin("/NtfctnToRcv/Ntfctn/Itm["+i+"]/IntrmyAgt", item, 'Choice_56AD');
	  Mxcvt.acc("/NtfctnToRcv/Ntfctn/Itm["+i+"]/IntrmyAgtAcct", item, 'Choice_56AD');
	}
  }
	// mx rule:
	//  Either Debtor or Item/Debtor must be present, but not both.
	//  If IntermediaryAgent is present then DebtorAgent must be present.
	if (stp.has(b4, "Choice_50CF") ) {
	  Mxcvt.acc("/NtfctnToRcv/Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/DbtrAcct", msg, 'TEXT/Choice_50CF');
	  Mxcvt.pty("/NtfctnToRcv/Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/Dbtr", msg, 'TEXT/Choice_50CF','mix');
	}
	if (stp.has(b4, "Choice_52AD") ) {
	  Mxcvt.pty("/NtfctnToRcv/Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/Dbtr", msg, 'TEXT/Choice_52AD','mix');
	  Mxcvt.acc("/NtfctnToRcv/Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/DbtrAcct", msg, 'TEXT/Choice_52AD');
	}
	if (stp.has(b4, "Choice_56AD") ) {
	  Mxcvt.fin("/NtfctnToRcv/Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/IntrmyAgt1", msg, 'TEXT/Choice_56AD');
	  Mxcvt.acc("/NtfctnToRcv/Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/IntrmyAgt1Acct", msg, 'TEXT/Choice_56AD');
	}
	// Mxcvt.fin("/NtfctnToRcv/TxInfAndSts/OrgnlTxRef/Cdtr/Agt", msg, 'TEXT/Choice_58AD')
	// Mxcvt.acc("/NtfctnToRcv/TxInfAndSts/OrgnlTxRef/CdtrAcct", msg, 'TEXT/Choice_58AD')
	//
	// F25 to IBAN
//  if (acc_no!= ''){
//    if (acc_no.startsWith('//CH')) {
//      stp.setData( "/NtfctnToRcv/Ntfctn/Acct/Id/Othr/Id",acc_no.substring(4));
//      stp.setData( '/NtfctnToRcv/Ntfctn/Acct/Id/Othr/SchmeNm/Cd', 'CUID');
//    } else if (stp.isIBANCode(acc_no) ) {
//      stp.setData( "/NtfctnToRcv/Ntfctn/Acct/Id/IBAN",acc_no);
//    } else {
//      stp.setData( "/NtfctnToRcv/Ntfctn/Acct/Id/Othr/Id",acc_no);
//    }
//  }
}

function demerge(){
  rule="fin.210.ESP";
}
