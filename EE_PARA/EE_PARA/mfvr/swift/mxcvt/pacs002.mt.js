// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx


function merge(){
  if (g_swiftver >= '2025'){
    bizsvc='swift.cbprplus.03';
  }
  var b4 = msg.get("TEXT");
  var mt = '' + stp.json(msg, '/B2/MT', null);
  var b111=''+stp.json(msg, 'B3/111', null);
  var b2bic=''+stp.json(msg, 'B2/BIC', null);
  var orgn_mx = '';
  if ('299' === mt) {
    orgn_mx = 'pacs.009';
  } else if ('199' === mt) {
    orgn_mx = 'pacs.008';
    // need F21 mapping to <OrgnlEndToEndId>VA060327/0123</OrgnlEndToEndId>
    stp.setData( "/FIToFIPmtStsRpt/TxInfAndSts/OrgnlEndToEndId", b4.get('F20'));
  }
  stp.setData( "/FIToFIPmtStsRpt/TxInfAndSts/OrgnlGrpInf/OrgnlMsgNmId",orgn_mx);

  var now = new Date();
  var t = now.toMxString();
  stp.setData("/FIToFIPmtStsRpt/GrpHdr/CreDtTm", t);
	//
	if (stp.has(b4, "Choice_52AD") ) {
	  Mxcvt.fin("/FIToFIPmtStsRpt/TxInfAndSts/OrgnlTxRef/Dbtr", msg, 'TEXT/Choice_52AD');
	  Mxcvt.acc("/FIToFIPmtStsRpt/TxInfAndSts/OrgnlTxRef/DbtrAcct", msg, 'TEXT/Choice_52AD')
	} else {
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/OrgnlTxRef/Dbtr/FinInstnId/BICFI", stp.getSender() )
	}
	// Mxcvt.fin("/FIToFIPmtStsRpt/TxInfAndSts/OrgnlTxRef/Cdtr/Agt", msg, 'TEXT/Choice_58AD')
	// Mxcvt.acc("/FIToFIPmtStsRpt/TxInfAndSts/OrgnlTxRef/CdtrAcct", msg, 'TEXT/Choice_58AD')
	//
  var f79 = ''+b4.get('F79');
  var lines = f79.split('\r\n');
  var line;
  var idx = 0;
  if (b111=='001'){
	// line 1: //date and time YYMMDDHHMM+ZZZZ  //1601121515+1300
	line = lines[idx++];
	var dttm = Mxcvt.toISODate(line.substring(2,8)) + 'T' + Mxcvt.toISOTime(line.substring(8) )
	stp.log('dttm :  ' + dttm + '       ' + line.substring(2,8))
	// //status code [/reason code]
	line = lines[idx++];
    var pos = line.indexOf('/', 2);
    var sts;
    if (pos > 0) {
      sts = line.substring(2, pos);
	  var code = line.substring( pos+1 );
	  if (stp.inExtCode(code, "ExternalStatusReason1Code")) {
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/Rsn/Cd", code );
	  } else {
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/Rsn/Prtry", code );
	  }
    } else {
      sts = line.substring(2);
    }
	stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/TxSts", sts  );
	if ('RJCT' != sts) {
	stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/FctvIntrBkSttlmDt/DtTm", dttm );
	}
	// line 3 //status originator/forward
	line = lines[idx++];
	pos = line.indexOf('/', 2);
	if (pos > 0) {
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/Orgtr/Id/OrgId/AnyBIC",  line.substring(2, pos)  );
	} else {
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/Orgtr/Id/OrgId/AnyBIC",  line.substring(2)  );
	}
	// // line 4 //Currency and amount
  }else if (b111=='002'){
	// //status code [/reason code]
	line = lines[idx++];
    var pos = line.indexOf('/', 2);
    if (pos > 0) {
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/TxSts",  line.substring(1, pos) );
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/Rsn/Cd",  line.substring( pos+1 ));
    } else {
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/TxSts",  line.substring(1) );
    }
	// line 3 status originator/forward
	line = lines[idx++];
	pos = line.indexOf('/', 2);
	if (pos > 0) {
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/Orgtr/Id/OrgId/AnyBIC",  line.substring(0, pos)  );
	} else {
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/Orgtr/Id/OrgId/AnyBIC",  line.substring(0)  );
	}
  }
  // optional
  var infos = [];
	for (var i = idx; i < lines.length; i++) {
	  line = lines[i];
	  if (line.startsWith('//')){
	    line = line.substring(2);
	  }
	  stp.log('l: '+ line)
	  infos.push(line);
	}
		// /Document/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/AddtlInf

  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/AddtlInf",  infos)
}

function demerge(){
  var orgn_mx = ''+stp.xml(root, "./TxInfAndSts/OrgnlGrpInf/OrgnlMsgNmId",null);

  stp.log('mx: '+ orgn_mx)

  if (orgn_mx.startsWith('pacs.009') || orgn_mx.startsWith('pacs.010') ) {
    rule="fin.299.ESP";
  } else if (orgn_mx.startsWith('pacs.008') || orgn_mx.startsWith('pacs.003') ) {
      // rule="fin.199.ESP";
      rule="fin.199.ESP";
  }else{
    var reg = /^MT10[0-9]{1}$/
    if (reg.test(orgn_mx) ){
      rule="fin.199";
      mttp = orgn_mx.substring(2)
    } else if ( /^MT20[0-9]{1}$/.test(orgn_mx) ){
      rule="fin.299";
      mttp = orgn_mx.substring(2)
    } else {
      stp.log(' TBD:  mxtp: ' + orgn_mx);
      rule="fin.299";
    }
  }
  var instg = ''+stp.xml(root, "TxInfAndSts/InstgAgt/FinInstnId/BICFI", 'BIC' )
  if (instg.startsWith('TRCKC')) {
  // gpi mode 79 TRCKCHZZ TRCKCN
    demerge_gpi()
  } else {
    demerge_rejt()
  }
}
function demerge_gpi(){
    // GPI: line1: //date and time
  stp.log('DDD 2 '+stp.xml(root, "TxInfAndSts/FctvIntrBkSttlmDt/DtTm", '13D' ))
  var dttm = ''+stp.xml(root, "TxInfAndSts/FctvIntrBkSttlmDt/DtTm", '13D' );
  if (dttm.length < 10){
    dttm = ''+stp.xml(root, "GrpHdr/CreDtTm", '13D' );
  }
	var f72="//"+dttm+'\r\n';
	// GPI: line 2 /reason code/text
  var sts = '//'+stp.xml(root, "TxInfAndSts/TxSts",null);
  var rsn = ''+stp.xml(root, "TxInfAndSts/StsRsnInf/Rsn/Cd",null);
  var rsn2 = ''+stp.xml(root, "TxInfAndSts/StsRsnInf/Rsn/Prtry",null);
	f72 += sts+(rsn?'/'+rsn:'')+(rsn2?'/'+rsn2:'')+'\r\n';
	// GPI: line 3 //status originator/forward
	var orgtr = ''+stp.xml(root, "TxInfAndSts/StsRsnInf/Orgtr/Id/OrgId/AnyBIC", null);
	if (orgtr.length < 10){
      orgtr = ''+stp.xml(root, "TxInfAndSts/InstgAgt/FinInstnId/BICFI", null );
    }
	if (orgtr.length < 10){
      orgtr = ''+stp.xml(root, "TxInfAndSts/InstgAgt/FinInstnId/Nm", null );
    }
	f72 += '//'+orgtr+'\r\n';
	// GPI line 4 //Currency and amount
	// GPI [line 5] //EXCH/ccy/ccy/rate
	// GPI [charges] //:71F:USD20   TxInfAndSts/ChrgsInf
	var infos = stp.findMulti(root, "TxInfAndSts/ChrgsInf");
	for (var i=0; i < infos.size(); i++) {
	  var info = infos.get(i);
	  stp.log(' ChrgsInf ' + info)
	  f72 += '/CHGS/'+stp.xml(info, "Amt/@Ccy","3!a")+stp.xml(info, "Amt","15d")+'\r\n';
	}
	infos = stp.findMulti(root, "TxInfAndSts/StsRsnInf/AddtlInf");
	// lines /TEXT/29x
	// infos = stp.findMulti(root, "TxInfAndSts/RtrRsnInf/AddtlInf");
	for (var i=0; i < infos.size(); i++) {
	  var info = infos.get(i);
	  // f72 += '/TEXT/'+info+'\r\n';
	  f72 += '//'+stp.xml(info, ".", null) +'\r\n';
	}
	// var f72 = stp.fmt( cd1 + cd2+cd3, "6*35x")
	stp.setData("TEXT/F79", f72);
	stp.log('test');
	// stp.fmt( "YYMMDD")
// stp.fmt( "15d")
	// load schema from /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtjson/2020/fin.103.json
}
function demerge_rejt(){
    // Payment Guideline: line 1: /RETN|REJT/tagcode
  var sts = ''+stp.xml(root, "TxInfAndSts/TxSts",null);
  if (sts == 'RJCT') {
    sts = 'REJT'
  } else {
    // error
  }
	var f72="/"+sts+'/99\r\n';
    //                    line2 /code/
  var rsn = ''+stp.xml(root, "TxInfAndSts/StsRsnInf/Rsn/Cd",null);
  var rsn2 = ''+stp.xml(root, "TxInfAndSts/StsRsnInf/Rsn/Prtry",null);
  if (rsn == '' && rsn2 == '') rsn = 'XX99';
  f72 += (rsn?'/'+rsn:'')+(rsn2?'/'+rsn2:'')+'/\r\n';
    //                    line3 /MREF/
  var ref = ''+stp.xml(root, "TxInfAndSts/OrgnlGrpInf/OrgnlMsgId",null);
	f72 += '/MREF/'+ref+'\r\n';
    //                          /TREF/16x
  if (stp.has(root, '')){
    var ref = ''+stp.xml(root, "TxInfAndSts/OrgnlEndToEndId",null);
    if ('NOTPROVIDED' != ref) f72 += '/TREF/'+ref+'\r\n';
  }
    //                    line  /CHGS/ccyAmt
	var infos = stp.findMulti(root, "TxInfAndSts/ChrgsInf");
	for (var i=0; i < infos.size(); i++) {
	  var info = infos.get(i);
	  stp.log(' ChrgsInf ' + info)
	  f72 += '/CHGS/'+stp.xml(info, "Amt/@Ccy","3!a")+stp.xml(info, "Amt","15d")+'\r\n';
	}
    //                    line 6 /TEXT/
	infos = stp.findMulti(root, "TxInfAndSts/StsRsnInf/AddtlInf");
	// lines /TEXT/29x
	// infos = stp.findMulti(root, "TxInfAndSts/RtrRsnInf/AddtlInf");
	for (var i=0; i < infos.size(); i++) {
	  var info = infos.get(i);
	  f72 += '/TEXT/'+info+'\r\n';
	  // f72 += '//'+stp.xml(info, ".", null) +'\r\n';
	}
	// var f72 = stp.fmt( cd1 + cd2+cd3, "6*35x")
	stp.setData("TEXT/F79", f72);

}
