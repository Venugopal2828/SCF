// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx


function merge(){
  var b4 = msg.get("TEXT");
  var b111 = ''+stp.json(msg,"B3/111", null);
  var mt = '' + stp.json(msg, '/B2/MT', null);
  stp.setData( "/PmtStsTrckrUpd/TrckrStsAndTx/Tx/PmtTpInf/SvcLvl/Cd", 'G'+ b111);

  var orgn_mx = '';
  if ('299' === mt) {
    if ( '004' == b111){
    bizsvc='swift.gpi.gfit.01';
    stp.setData( "/PmtStsTrckrUpd/TrckrStsAndTx/Tx/PmtScnro", 'FCTR');
    }else{
    bizsvc='swift.gpi.gcov.01';
    stp.setData( "/PmtStsTrckrUpd/TrckrStsAndTx/Tx/PmtScnro", 'COVE');
    }

    var e2eId = b4.has('F21') ? b4.get('F21') : 'NOTPROVIDED';
    stp.setData( "/PmtStsTrckrUpd/TrckrStsAndTx/Tx/PmtId/EndToEndId", e2eId);
    orgn_mx = 'pacs.009';
  } else if ('199' === mt) {
    stp.setData( "/PmtStsTrckrUpd/TrckrStsAndTx/Tx/PmtScnro", 'CCTR');
    if ( '' == b111){
      bizsvc='swift.uc.01';
      stp.setData( "/PmtStsTrckrUpd/TrckrStsAndTx/Tx/PmtTpInf/SvcLvl/Cd", null);
    } else {
      bizsvc='swift.gpi.gcct.01';
    }
    orgn_mx = 'pacs.008';
    // need F21 mapping to <OrgnlEndToEndId>VA060327/0123</OrgnlEndToEndId>
    stp.setData( "/PmtStsTrckrUpd/TrckrStsAndTx/OrgnlEndToEndId", b4.get('F20'));
  }
  stp.setData( "/PmtStsTrckrUpd/TrckrStsAndTx/OrgnlGrpInf/OrgnlMsgNmId",orgn_mx);

  if (stp.has(b4, "Choice_52AD") ) {
	  Mxcvt.fin("/PmtStsTrckrUpd/TrckrStsAndTx/OrgnlTxRef/Dbtr", msg, 'TEXT/Choice_52AD');
	  Mxcvt.acc("/PmtStsTrckrUpd/TrckrStsAndTx/OrgnlTxRef/DbtrAcct", msg, 'TEXT/Choice_52AD')
  } else {
	  stp.setData("/PmtStsTrckrUpd/TrckrStsAndTx/OrgnlTxRef/Dbtr/FinInstnId/BICFI", stp.getSender() )
  }
	// Mxcvt.fin("/PmtStsTrckrUpd/TrckrStsAndTx/OrgnlTxRef/Cdtr/Agt", msg, 'TEXT/Choice_58AD')
	// Mxcvt.acc("/PmtStsTrckrUpd/TrckrStsAndTx/OrgnlTxRef/CdtrAcct", msg, 'TEXT/Choice_58AD')
	//
  var f79 = ''+b4.get('F79');
  var lines = f79.split('\r\n');
	// line 1: //date and time YYMMDDHHMM+ZZZZ  //1601121515+1300
	  var line = lines[0];
	  var dttm = Mxcvt.toISODate(line.substring(2,8)) + 'T' + Mxcvt.toISOTime(line.substring(8) )
	  stp.log('dttm :  ' + dttm + '       ' + line.substring(2,8))
    var now = new Date();
	var t = now.toMxString();
	stp.setData("/PmtStsTrckrUpd/TrckrStsAndTx/Tx/TrckrData/ConfdDt/DtTm", t );
	// //status code [/reason code]
	  line = lines[1];
      var pos = line.indexOf('/', 2);
      if (pos > 0) {
	stp.setData("/PmtStsTrckrUpd/TrckrStsAndTx/TxSts/Sts",  line.substring(2, pos) );
	stp.setData("/PmtStsTrckrUpd/TrckrStsAndTx/StsRsn/Rsn/Cd",  line.substring( pos+1 ));
      } else {
	stp.setData("/PmtStsTrckrUpd/TrckrStsAndTx/TxSts/Sts",  line.substring(2) );
      }
	// line 3 //status originator/forward
	line = lines[2];
	pos = line.indexOf('/', 2);
	if (pos > 0) {
	  stp.setData("/PmtStsTrckrUpd/TrckrStsAndTx/StsRsnInf/Orgtr/Id/OrgId/AnyBIC",  line.substring(2, pos)  );
	} else {
	  stp.setData("/PmtStsTrckrUpd/TrckrStsAndTx/StsRsnInf/Orgtr/Id/OrgId/AnyBIC",  line.substring(2)  );
	}
	// // line 4 //Currency and amount
	line = lines[3];
	pos = line.indexOf('/', 2);
  var amt = stp.toMxAmt( line.substring(5) );
  var ccy = line.substring(2, 5);

  stp.setData("/PmtStsTrckrUpd/TrckrStsAndTx/Tx/TrckrData/ConfdAmt", amt )
  stp.setData("/PmtStsTrckrUpd/TrckrStsAndTx/Tx/TrckrData/ConfdAmt@Ccy", ccy )

	// optional
	var infos = [];
	for (var i = 4; i < lines.length; i++) {
	  line = lines[i];
	  if (line.startsWith('//')){
	    line = line.substring(2);
	  }
	  stp.log('l: '+ line)
	  infos.push(line);
	}
		// /Document/PmtStsTrckrUpd/TrckrStsAndTx/StsRsnInf/AddtlInf

	stp.setData("/PmtStsTrckrUpd/TrckrStsAndTx/StsRsnInf/AddtlInf",  infos)
}

function demerge(){
  rule="fin.199.ESP";
  var gcd = ''+stp.xml(root, "TrckrStsAndTx/Tx/PmtTpInf/SvcLvl/Cd", null);
  if (/^G00[0-9]$/.test(gcd)){
    stp.setData("B3/111", gcd.substring(1));
  }
  // GPI: line1: //date and time
  stp.log('DDD 2 '+stp.xml(root, "TrckrStsAndTx/TxSts/Dt/DtTm", null ))
  var dttm = ''+stp.xml(root, "TrckrStsAndTx/TxSts/Dt/DtTm", '13D' );
  if (dttm.length < 10){
    dttm = ''+stp.xml(root, "GrpHdr/CreDtTm", '13D' );
  }
  var f72="//"+dttm+'\r\n';
	// GPI: line 2 /reason code/text
  var sts = '//'+stp.xml(root, "TrckrStsAndTx/TxSts/Sts",null);
  var rsn = ''+stp.xml(root, "TrckrStsAndTx/TxSts/StsRsn/Rsn/Cd",null);
  var rsn2 = ''+stp.xml(root, "TrckrStsAndTx/TxSts/RjctRtrRsn/Rsn/Cd",null);
  if (rsn =='') rsn = rsn2;
  f72 += sts+(rsn?'/'+rsn:'')+'\r\n';
  // GPI: line 3 //status originator/forward
  var orgtr = ''+stp.xml(root, "TrckrStsAndTx/Tx/TrckrInfrmgPty/Id/FinInstnId/BICFI", null);
  var fwtr = ''+stp.xml(root, "TrckrStsAndTx/Tx/InstdAgt/FinInstnId/BICFI", null );
  f72 += '//'+orgtr + (fwtr? '/'+fwtr : '')+'\r\n';
  // GPI line 4 //Currency and amount
  var amt;
  if (stp.has(root, "TrckrStsAndTx/Tx/IntrBkSttlmAmt") ) {
    amt = '//'+stp.xml(root, "TrckrStsAndTx/Tx/IntrBkSttlmAmt/@Ccy",null)+stp.xml(root, "TrckrStsAndTx/Tx/IntrBkSttlmAmt","15d");
  } else {
    amt = '//'+stp.xml(root, "TrckrStsAndTx/Tx/TrckrData/ConfdAmt/@Ccy","3!a")+stp.xml(tooy, "TrckrStsAndTx/Tx/TrckrData/ConfdAmt","15d");
  }
  f72 += amt+'\r\n';
	// GPI [line 5] //EXCH/ccy/ccy/rate
	// GPI [charges] //:71F:USD20   TxInfAndSts/ChrgsInf
  var infos = stp.findMulti(root, "TrckrStsAndTx/Tx/ChrgsInf");
  for (var i=0; i < infos.size(); i++) {
    var info = infos.get(i);
    stp.log(' ChrgsInf ' + info)
    f72 += '/CHGS/'+stp.xml(info, "Amt/@Ccy","3!a")+stp.xml(info, "Amt","15d")+'\r\n';
  }
  // f72 += rsn2?'//'+rsn2:'';
	// var f72 = stp.fmt( cd1 + cd2+cd3, "6*35x")
	stp.setData("TEXT/F79", f72);
	stp.log('test');
	// stp.fmt( "YYMMDD")
// stp.fmt( "15d")
	// load schema from /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtjson/2020/fin.103.json
}

