// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx


function merge(){
  if (g_swiftver >= '2025'){
    bizsvc='swift.cbprplus.03';
  }
  var b4 = msg.get("TEXT");
  var mt = ''+ stp.json(msg, '/B2/MT', null);
  var orgn_mx;

  if ('299' === mt || '202' === mt || '205' === mt) {
    orgn_mx = 'pacs.009';
  } else if ('199' === mt || '103' === mt ) {
    orgn_mx = 'pacs.008';
    // need F21 mapping to <OrgnlEndToEndId>VA060327/0123</OrgnlEndToEndId>
  } else {
    orgn_mx = 'MT' + mt;
    if ('COV' == ''+stp.json(msg, "B3/119", null)){
      orgn_mx +=' COVE';
    }
  }
  stp.setData( "/FIToFIPmtStsRpt/TxInfAndSts/OrgnlEndToEndId", 'NOTPROVIDED');
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
	var lines = stp.strd(b4.get('F72'));
	// line 1:
	  var line = lines.get(0);
	  var code = String(line.get('code'))  // ACC BNF INS INT PHON PHONBEN PHONIBK   TELE TELEBEN TELEIBK TSU
	  var narr = String(line.get('narr'));
	if (code !== 'REJT') {
	  stp.log('ERROR!!! ' + code)
	}
	code = 'RJCT';
	stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/TxSts",  code );
	// line 2
	line = lines.get(1);
	code = String(line.get('code'));
    if (stp.inExtCode(code, "ExternalStatusReason1Code")) {
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/Rsn/Cd", code );
    } else {
	  stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/Rsn/Prtry", code );
	  }
	// stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/Rsn/Prtry",  String(line.get('code')) );
	// line 3
	line = lines.get(2);
	stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/OrgnlGrpInf/OrgnlMsgId",  String(line.get('narr')));
	// stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/OrgnlInstrId",  String(line.get('narr')));
	stp.log('F72: 3 '+ line.get('code') )
	// optional
	var infos = [];
	for (var i = 0; i < lines.size(); i++) {
	  var line = lines.get(i);
	  var code = String(line.get('code'))  // ACC BNF INS INT PHON PHONBEN PHONIBK   TELE TELEBEN TELEIBK TSU
	  var narr = String(line.get('narr'))
	  switch (code) {
	  case 'TREF':
	    stp.setData( "/FIToFIPmtStsRpt/TxInfAndSts/OrgnlEndToEndId", narr);
	    break;
	  case 'CHGS':
	    break;
	  case 'TEXT':
	    infos.push( narr )
      break;
    default:
        stp.log(' t: ' + code + narr)
  	}
	}
	stp.setData("/FIToFIPmtStsRpt/TxInfAndSts/StsRsnInf/AddtlInf",  infos)
}

function demerge(){
  var orgn_mx = ''+stp.xml(root, "./TxInfAndSts/OrgnlGrpInf/OrgnlMsgNmId",null);

  stp.log('mx: '+ orgn_mx)

  if (orgn_mx.startsWith('pacs.009')) {
    rule="fin.299.ESP";
  } else if (orgn_mx.startsWith('pacs.008')) {
      // rule="fin.199.ESP";
      rule="fin.199.ESP";
  } else {
    stp.log("ERROR! " + orgn_mx )
    rule="fin.103.ESP";
  }
    // Payment Guideline: line 1: /RETN|REJT/tagcode
    //                    line2 /code/
    //                    line3 /MREF/
    //                          /TREF/16x
    //                    line  /CHGS/ccyAmt
    //                    line 6 /TEXT/
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
	f72 += sts+(rsn?'/'+rsn:'')+'\r\n';
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
