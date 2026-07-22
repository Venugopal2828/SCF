// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx


function merge(){
  if (g_swiftver >= '2025'){
    bizsvc='swift.cbprplus.03';
  }
  var b4 = msg.get("TEXT");
  var mt = '' + stp.json(msg, '/B2/MT', null);
  var orgn_mx = '';
  if ('910' === mt) {
    orgn_mx = 'CRDT';
  } else if ('900' === mt) {
    orgn_mx = 'DBIT';
  }
  stp.setData("/BkToCstmrDbtCdtNtfctn/Ntfctn/Id",b4.get('F20'));
  var ccy = ''+stp.json(msg, '/TEXT/F32A/Currency', null);
  stp.setData("/BkToCstmrDbtCdtNtfctn/Ntfctn/Acct/Ccy",ccy);
  stp.setData("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/CdtDbtInd",orgn_mx);
  stp.setData("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/CdtDbtInd",orgn_mx);
  stp.setData("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/Sts/Cd",'BOOK');
  stp.setData("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/BkTxCd/Prtry/Cd", 'NOTPROVIDED');
  stp.setData("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/BkTxCd/Prtry/Issr", 'NOTPROVIDED');
//  stp.setData("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/BkTxCd/Domn/Cd", 'PMNT');
//  stp.setData("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/BkTxCd/Domn/Fmly/Cd", 'ICDT');
//  stp.setData("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/BkTxCd/Domn/Fmly/SubFmlyCd", 'XBCT');

  var now = new Date();
	var t = now.toMxString();
	stp.setData("/BkToCstmrDbtCdtNtfctn/GrpHdr/CreDtTm", t);

  if (stp.has(b4, 'F13D')) {
    // var dttm = Mxcvt.toISODate(line.substring(2,8)) + 'T' + Mxcvt.toISOTime(line.substring(8) )
    // var dttm=stp.json_date(null, b4, "F13D", "yyyy-MM-dd'T'HH:mm:ssXXX");
    var dt = Mxcvt.toISODate(String(stp.json(b4,"F13D/Date", null)));
    var tm = ''+stp.json(b4,'F13D/Time', null)+stp.json(b4,'F13D/Sign', null)+ stp.json(b4,'F13D/Offset', null)
    tm = Mxcvt.toISOTime(String(tm))
    var dttm= dt+'T'+tm;
    // stp.log(' ddd ' + dttm)
    stp.setData("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/BookgDt/DtTm", dttm );
	}
  // F25
  var acc_no='';
  if (stp.has(b4, 'F25')) {
    acc_no = ''+b4.get('F25');
  } else if (stp.has(b4, 'Choice_25P/F25')) {
    acc_no = ''+stp.json(b4, 'Choice_25P/F25', null);
  } else if (stp.has(b4, 'Choice_25P/F25P')) {
    acc_no = ''+stp.json(b4, 'Choice_25P/F25P/Account', null);
    var acc_iss=''+stp.json(b4, 'Choice_25P/F25P/IdentifierCode', null);
    stp.setData( "/BkToCstmrDbtCdtNtfctn/Ntfctn/Acct/Id/Othr/Issr",acc_iss);
  }
  if (acc_no!= ''){
    if (acc_no.startsWith('//CH')) {
      stp.setData( "/BkToCstmrDbtCdtNtfctn/Ntfctn/Acct/Id/Othr/Id",acc_no.substring(4));
      stp.setData( '/BkToCstmrDbtCdtNtfctn/Ntfctn/Acct/Id/Othr/SchmeNm/Cd', 'CUID');
    } else if (stp.isIBANCode(acc_no) ) {
      stp.setData( "/BkToCstmrDbtCdtNtfctn/Ntfctn/Acct/Id/IBAN",acc_no);
    } else {
      stp.setData( "/BkToCstmrDbtCdtNtfctn/Ntfctn/Acct/Id/Othr/Id",acc_no);
    }
  }
	//Mxcvt.acc("/BkToCstmrDbtCdtNtfctn/Ntfctn/Acct", msg, 'TEXT/Choice_25P')
	//Mxcvt.fin("/BkToCstmrDbtCdtNtfctn/Ntfctn/Acct/Svcr", msg, 'TEXT/Choice_25P');
	//
	if (stp.has(b4, "Choice_50AFK") ) {
	  Mxcvt.acc("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/DbtrAcct", msg, 'TEXT/Choice_50AFK');
	  Mxcvt.pty("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/Dbtr", msg, 'TEXT/Choice_50AFK','mix');
    Mxcvt.fin("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/DbtrAgt", msg, 'TEXT/Choice_52AD');
    Mxcvt.acc("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/DbtrAgtAcct", msg, 'TEXT/Choice_52AD');
	}else{
    Mxcvt.pty("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/Dbtr", msg, 'TEXT/Choice_52AD','mix');
    Mxcvt.acc("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/DbtrAcct", msg, 'TEXT/Choice_52AD');
	}
	if (stp.has(b4, "Choice_56AD") ) {
	  Mxcvt.fin("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/IntrmyAgt1", msg, 'TEXT/Choice_56AD');
	  Mxcvt.acc("/BkToCstmrDbtCdtNtfctn/Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/IntrmyAgt1Acct", msg, 'TEXT/Choice_56AD');
	}
	// Mxcvt.fin("/BkToCstmrDbtCdtNtfctn/TxInfAndSts/OrgnlTxRef/Cdtr/Agt", msg, 'TEXT/Choice_58AD')
	// Mxcvt.acc("/BkToCstmrDbtCdtNtfctn/TxInfAndSts/OrgnlTxRef/CdtrAcct", msg, 'TEXT/Choice_58AD')
	//
}

function demerge(){
  var orgn_mx = ''+stp.xml(root, "./Ntfctn/Ntry/CdtDbtInd",null);
  if (orgn_mx.startsWith('CRDT')) {
    rule="fin.910.ESP";
  } else if (orgn_mx.startsWith('DBIT')) {
      rule="fin.900.ESP";
  } else {
    stp.log("ERROR! orgn_mx " + orgn_mx )
  }
  var acc_iss = ''+stp.xml(root, "Ntfctn/Acct/Svcr/FinInstnId/BICFI",null);
  var acc_no = ''+stp.xml(root, "Ntfctn/Acct/Id/Othr/Id",null);
  if (acc_no == ''){
    acc_no = ''+stp.xml(root, "Ntfctn/Acct/Id/IBAN",null);
  }
  if (acc_iss) {
      stp.setData("TEXT/Choice_25P/F25P/IdentifierCode", acc_iss);
      stp.setData("TEXT/Choice_25P/F25P/Account", acc_no);
  } else {
      stp.setData("TEXT/Choice_25P/F25", acc_no);
  }
  // Mxcvt.mx2mtParty('Choice_25P', root, "Ntfctn/Acct/Svcr", "Ntfctn/Acct", '25p')
    // line 1: /RETN|REJT/tagcode
  var dttm=''+stp.xml(root, "./Ntfctn/Ntry/BookgDt/DtTm", "13D");
  if (dttm != ''){
    stp.log("f13d: " + dttm )
    var f13d = {Date: dttm.substring(0,6),Time:dttm.substring(6,10),Sign:dttm.substring(10,11),Offset: dttm.substring(11) }
    stp.setData("TEXT/F13D", f13d);
  }

  //
  if (rule == "fin.910.ESP" ) {
    if (stp.has(root, 'Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/DbtrAgt')){
      Mxcvt.mx2mtParty('Choice_52AD', root, "Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/DbtrAgt", null, 'fin' );
    	Mxcvt.mx2mtParty('Choice_50AFK', root, "Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/Dbtr", "Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/DbtrAcct", 'pty' );
    } else if (stp.has(root, 'Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/Dbtr')){
    	Mxcvt.mx2mtParty('Choice_52AD', root, "Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/Dbtr", "Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/DbtrAcct", 'pty' );
    } else {
      stp.setData("TEXT/Choice_52AD/F52D/NameAndAddress", 'NOTPROVIDED');
    }
  	Mxcvt.mx2mtParty('Choice_56AD', root, "Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/IntrmyAgt1","Ntfctn/Ntry/NtryDtls/TxDtls/RltdAgts/IntrmyAgt1Acct", 'fin' );
  } else {
    Mxcvt.mx2mtParty('Choice_52AD', root, "Ntfctn/Ntry/NtryDtls/TxDtls/RltdPties/Dbtr", null, 'pty' );
  }

  if (!stp.has(root, 'Ntfctn/Ntry/NtryDtls/TxDtls/Refs/EndToEndId') &&
      !stp.has(root, 'Ntfctn/Ntry/NtryDtls/TxDtls/Refs/InstrId')
  ){
    stp.setData("TEXT/F21", 'NOTPROVIDED');
  }
}
