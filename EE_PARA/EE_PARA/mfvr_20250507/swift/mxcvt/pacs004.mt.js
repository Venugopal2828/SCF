// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx


function merge(){
  // reformat_class='test.cs.esp.restRS.SzbaMxReformater';
	var b4 = msg.get("TEXT");
  var mt = '' + stp.json(msg, '/B2/MT', null);

  var orgn_mx = '';
  if ('202' === mt) {
    orgn_mx = 'pacs.009.001.08';
    stp.setData( "/PmtRtr/TxInf/OrgnlEndToEndId", b4.get('F21'));  // 'NOTPROVIDED'
  } else if ('103' === mt) {
    orgn_mx = 'pacs.008.001.08';
    // need F21 mapping to <OrgnlEndToEndId>VA060327/0123</OrgnlEndToEndId>
    stp.setData( "/PmtRtr/TxInf/OrgnlEndToEndId", 'NOTPROVIDED');
  }else{
    stp.log('-- ' + mt);
  }
  stp.setData( "/PmtRtr/TxInf/RtrId", b4.get('F20'));
  // stp.setData( "/PmtRtr/TxInf/OrgnlGrpInf/OrgnlMsgNmId",orgn_mx);
  // stp.setData( "/PmtRtr/TxInf/OrgnlGrpInf/OrgnlMsgId",'');

    var now = new Date();
	var t = now.toMxString();
	stp.setData("/PmtRtr/GrpHdr/CreDtTm", t);
	//
	SttlmTmIndctn(true);
	SttlmMtd(true);
	ChrgsInf(true);

  if ('103' === mt) {
    Mxcvt.pty("/PmtRtr/TxInf/RtrChain/Dbtr", b4, 'Choice_50AFK', 'mix')
    Mxcvt.acc("/PmtRtr/TxInf/RtrChain/DbtrAcct", b4, 'Choice_50AFK')
    Mxcvt.pty("/PmtRtr/TxInf/OrgnlTxRef/Cdtr", b4, 'Choice_50AFK', 'mix')
    Mxcvt.acc("/PmtRtr/TxInf/OrgnlTxRef/CdtrAcct", b4, 'Choice_50AFK')
    // PmtRtr/TxInf/OrgnlTxRef/DbtrAcct
    if (stp.has(b4, "Choice_52AD") ) {
      Mxcvt.fin("/PmtRtr/TxInf/RtrChain/DbtrAgt", msg, 'TEXT/Choice_52AD')
      Mxcvt.acc("/PmtRtr/TxInf/RtrChain/DbtrAgtAcct", msg, 'TEXT/Choice_52AD')
    } else {
      stp.setData("/PmtRtr/TxInf/RtrChain/DbtrAgt/FinInstnId/BICFI", stp.getSender() )
    }
    Mxcvt.pty("/PmtRtr/TxInf/RtrChain/Cdtr", b4, 'Choice_59AF','mix')
    Mxcvt.acc("/PmtRtr/TxInf/RtrChain/CdtrAcct", b4, 'Choice_59AF')
    Mxcvt.pty("/PmtRtr/TxInf/OrgnlTxRef/Dbtr", b4, 'Choice_59AF', 'mix')
    Mxcvt.acc("/PmtRtr/TxInf/OrgnlTxRef/DbtrAcct", b4, 'Choice_59AF')
  } else if ('202' === mt || '205' === mt){
    if (stp.has(b4, "Choice_52AD") ) {
      Mxcvt.pty("/PmtRtr/TxInf/RtrChain/Dbtr", msg, 'TEXT/Choice_52AD', 'mix')
      Mxcvt.acc("/PmtRtr/TxInf/RtrChain/DbtrAcct", msg, 'TEXT/Choice_52AD')
    } else {
      stp.setData("/PmtRtr/TxInf/RtrChain/Dbtr/Agt/FinInstnId/BICFI", stp.getSender() )
    }
    Mxcvt.pty("/PmtRtr/TxInf/RtrChain/Cdtr", b4, 'Choice_58AD','mix')
    Mxcvt.acc("/PmtRtr/TxInf/RtrChain/CdtrAcct", b4, 'Choice_58AD')
  }
  Mxcvt.fin("/PmtRtr/TxInf/RtrChain/IntrmyAgt1", b4, 'Choice_56ACD')
	Mxcvt.acc("/PmtRtr/TxInf/RtrChain/IntrmyAgt1Acct", b4, 'Choice_56ACD')

  if (stp.has(b4, "Choice_57ABCD") ) {
  // Mxcvt.mt2mxParty('Choice_57ABCD', b4, "/FIToFICstmrCdtTrf/CdtTrfTxInf/CdtrAgt", "/FIToFICstmrCdtTrf/CdtTrfTxInf/CdtrAgtAcct", 'fin' );
	  Mxcvt.fin("/PmtRtr/TxInf/RtrChain/CdtrAgt", msg, 'TEXT/Choice_57ABCD')
	  Mxcvt.acc("/PmtRtr/TxInf/RtrChain/CdtrAgtAcct", msg, 'TEXT/Choice_57ABCD')
	} else {
	  stp.setData("/PmtRtr/TxInf/RtrChain/CdtrAgt/FinInstnId/BICFI", stp.getReceiver() )
	}

  if (stp.has(b4, "SeqB") && '202' === mt ) {
    // 202 COV
    var seqb = b4.get("SeqB");
    Mxcvt.pty("/PmtRtr/TxInf/OrgnlTxRef/Cdtr", seqb, 'Choice_50AFK', 'mix')
    Mxcvt.acc("/PmtRtr/TxInf/OrgnlTxRef/CdtrAcct", seqb, 'Choice_50AFK')
    Mxcvt.fin("/PmtRtr/TxInf/OrgnlTxRef/DbtrAgt", seqb, 'Choice_52AD')
    Mxcvt.acc("/PmtRtr/TxInf/OrgnlTxRef/DbtrAgtAcct", seqb, 'Choice_52AD')
    Mxcvt.fin("/PmtRtr/TxInf/OrgnlTxRef/IntrmyAgt1", seqb, 'Choice_56ACD')
    Mxcvt.acc("/PmtRtr/TxInf/OrgnlTxRef/IntrmyAgt1Acct", seqb, 'Choice_56ACD')
    Mxcvt.fin("/PmtRtr/TxInf/OrgnlTxRef/CdtrAgt", seqb, 'Choice_57ABCD')
    Mxcvt.acc("/PmtRtr/TxInf/OrgnlTxRef/CdtrAgtAcct", seqb, 'Choice_57ABCD')
    Mxcvt.pty("/PmtRtr/TxInf/OrgnlTxRef/Dbtr", seqb, 'Choice_59AF','mix')
    Mxcvt.acc("/PmtRtr/TxInf/OrgnlTxRef/DbtrAcct", seqb, 'Choice_59AF')
  //
	  var f33Amt = stp.json(seqb, 'F33B/Amount', null);
	  var f33Ccy = stp.json(seqb, 'F33B/Currency', null);

	  stp.setData("/PmtRtr/TxInf/OrgnlTxRef/Amt/InstdAmt", stp.toMxAmt( f33Amt) )
	  stp.setData("/PmtRtr/TxInf/OrgnlTxRef/Amt/InstdAmt@Ccy", f33Ccy  )
  }
//	if (stp.has(b4, "Choice_52AD") ) {
//	  Mxcvt.fin("/PmtRtr/TxInf/OrgnlTxRef/Dbtr", msg, 'TEXT/Choice_52AD');
//	  Mxcvt.acc("/PmtRtr/TxInf/OrgnlTxRef/DbtrAcct", msg, 'TEXT/Choice_52AD')
//	} else {
//	  stp.setData("/PmtRtr/TxInf/OrgnlTxRef/Dbtr/FinInstnId/BICFI", stp.json(msg, "B1/BIC", null) )
//	}
//	Mxcvt.fin("/PmtRtr/TxInf/OrgnlTxRef/Cdtr/Agt", msg, 'TEXT/Choice_58AD')
//	Mxcvt.acc("/PmtRtr/TxInf/OrgnlTxRef/CdtrAcct", msg, 'TEXT/Choice_58AD')
	//
	var infos = [];
	var lines = stp.strd(b4.get('F72'));
	var line;
	var code;
	var narr;
	if (lines.size() === 0) {
	  if ( stp.has(b4, "SeqB") ){
	    var b72 = stp.json(b4, 'SeqB/F72', null);
	    lines = stp.strd(b72);
	  }
	}
	// line 1:
	if (lines.size() > 0) {
   //  stp.log('-1- ' + b4.get('F72') );
	  line = lines.get(0);
   // stp.log('-2- ' + line);
	  code = String(line.get('code'))  // ACC BNF INS INT PHON PHONBEN PHONIBK   TELE TELEBEN TELEIBK TSU
	  narr = String(line.get('narr'));
	if (code !== 'RETN' && code !== 'DTROF') {
	  stp.log('ERROR!!! ' + code)
	  // add error
	  // stp.error('ERROR!!! ' + code)
	}
	}
	// line 2
	if (lines.size() > 1) {
	line = lines.get(1);
	code = String(line.get('code'));
	narr = String(line.get('narr'));
  //  stp.log('-2- ' + line + '   ' + code);
	if (stp.inExtCode(code, "ExternalReturnReason1Code")) {
	  if (narr) {
	  infos.push( narr )
	  }
	} else {
	  infos.push( code +'/'+narr );
	  code = 'NARR';
	}
	stp.setData("/PmtRtr/TxInf/RtrRsnInf/Rsn/Cd",  code);
	}else{
	stp.setData("/PmtRtr/TxInf/RtrRsnInf/Rsn/Cd",  'NARR');
	infos.push( narr );
	}
	// line 3
	if (lines.size() > 2) {
	line = lines.get(2);
	stp.setData("/PmtRtr/TxInf/OrgnlInstrId",  String(line.get('narr')));
	// stp.log('F72: 3 '+ line.get('code') )
	}
	// optional
	for (var i = 3; i < lines.size(); i++) {
	  var line = lines.get(i);
	  var code = String(line.get('code'))  // ACC BNF INS INT PHON PHONBEN PHONIBK   TELE TELEBEN TELEIBK TSU
	  var narr = String(line.get('narr'))
	  switch (code) {
	  case 'TREF':
	    stp.setData("/PmtRtr/TxInf/OrgnlEndToEndId", narr)
	    break;
	  case 'CHGS':
	    if (stp.has(b4, "F71G") || stp.has(b4, "Loop3/F71F") ) {
	      stp.log(' t: ' + code + narr.substring(3) + '  ' + narr.substring(0, 3))
	    } else {
	      // var chrgs = {"./Amt":stp.toMxAmt(amt), "./Amt@Ccy": ccy, "Agt/FinInstnId/Nm": chrgAgt, "Agt/FinInstnId/PstlAdr/AdrLine": chrgAgt };
	      // stp.setData("/PmtRtr/TxInf/ChrgsInf", { "Amt":stp.toMxAmt(narr.substring(3)), "Amt@Ccy": narr.substring(0, 3)} )
	    	stp.setData('/PmtRtr/TxInf/ChrgsInf/Amt',stp.toMxAmt(narr.substring(3)));
	    	stp.setData('/PmtRtr/TxInf/ChrgsInf/Amt@Ccy',narr.substring(0, 3) );
	    	stp.setData('/PmtRtr/TxInf/ChrgsInf/Agt/FinInstnId/Nm','NOTPROVIDED');
      	stp.setData("/PmtRtr/TxInf/ChrgsInf/Agt/FinInstnId/PstlAdr/AdrLine",['NOTPROVIDED'] );
	    }
//	    var f32Amt = stp.json(b4, 'F32A/Amount', null);
//	    var f32Ccy = stp.json(b4, 'F32A/Currency', null);
//	    var f32Dt = stp.json(b4, 'F32A/Date', null);
//	    stp.log(' t f32a: ' + f32Amt +  '  ' + f32Ccy )
	    // stp.setData("/PmtRtr/TxInf", { "RtrdInstdAmt":stp.toMxAmt( f32Amt), "RtrdInstdAmt@Ccy": f32Ccy } )
	    // < Ccy="USD">1110</RtrdIntrBkSttlmAmt>
        //   <>2012-06-29</IntrBkSttlmDt>
//	    stp.setData("/PmtRtr/TxInf/RtrdIntrBkSttlmAmt", stp.toMxAmt( f32Amt) )
//	    stp.setData("/PmtRtr/TxInf/RtrdIntrBkSttlmAmt@Ccy", f32Ccy  )
//	    stp.setData("/PmtRtr/TxInf/IntrBkSttlmDt", f32Dt  )
//	    stp.setData("/PmtRtr/TxInf/RtrdInstdAmt", stp.toMxAmt( f32Amt) )
//	    stp.setData("/PmtRtr/TxInf/RtrdInstdAmt@Ccy", f32Ccy  )
	    break;
	  case 'TEXT':
	    infos.push( narr )
        break;
      default:
        stp.log(' t: ' + code + narr)
  	  }
	}
	stp.setData("/PmtRtr/TxInf/RtrRsnInf/AddtlInf",  infos)

	var svcLvl = []
  if (stp.has(msg, "B3/111")){
    svcLvl.push({"Cd": 'G'+stp.json(msg,"B3/111", null) });
    stp.setData("/PmtRtr/TxInf/OrgnlTxRef/PmtTpInf/SvcLvl", svcLvl);
  }
  // 70
  //    /ULTB   /ULTD  UltimateCreditor  UltimateDebtor  /Document/PmtRtr/TxInf/RtrChain/UltmtDbtr/Pty/Nm  UltmtCdtr
  // 77B: /BENEFRES/   /ORDERRES/
}

function demerge(){
  var orgn_mx = ''+stp.xml(root, "./TxInf/OrgnlGrpInf/OrgnlMsgNmId",null);
  var rsn = ''+stp.xml(root, "TxInf/RtrRsnInf/Rsn/Cd",null);

  stp.log('mx: '+ orgn_mx)

  if (orgn_mx.startsWith('pacs.009') || orgn_mx.startsWith('MT202')) {
    rule="fin.202.ESP";
  } else if (orgn_mx.startsWith('pacs.008') || orgn_mx.startsWith('MT103')) {
      rule="fin.103.ESP";
  } else {
    stp.log("ERROR! " + orgn_mx +' fall to 103')
     rule="fin.103.ESP";
//    rule="fin.202.ESP";
  }
  // cal 13C
	var loop23e=[];
		var sls = stp.findMulti(root, "TxInf/OrgnlTxRef/PmtTpInf/SvcLvl");
    for (var i=0; i < sls.size(); i++) {
      var info = sls.get(i);
      var cd = ''+stp.xml(info, "Cd", null);
      var s = ''+stp.xml(info, "Prtry", null);
      if ('SDVA' == cd){
        loop23e.push({'F23E':{'InstructionCode':'SDVA'}})
      } else if (/^G00[0-9]$/.test(cd)){
        stp.setData("B3/111", cd.substring(1));
      } else if (cd != '') {
        // f72 += '/SVCLVL/'+cd+'\r\n';
      } else if (s != '') {
        // f72 += '/SVCLVL/'+s+'\r\n';
      }
    }

	//var cd = ''+stp.xml(root, "TxInf/OrgnlTxRef/PmtTpInf/SvcLvl/Cd","4c");
  // party


   Mxcvt.mx2mtParty('Choice_57ABCD', root, "TxInf/RtrChain/CdtrAgt", "TxInf/RtrChain/CdtrAgtAcct", 'fin')
   Mxcvt.mx2mtParty('Choice_56ACD', root, "TxInf/RtrChain/IntrmyAgt1", "TxInf/RtrChain/IntrmyAgt1Acct", 'fin')


   if (rule=="fin.202.ESP"){
     Mxcvt.mx2mtParty("Choice_58AD", root, "TxInf/RtrChain/Cdtr", "TxInf/RtrChain/CdtrAcct", "pty");
     Mxcvt.mx2mtParty("Choice_52AD", root, "TxInf/RtrChain/Dbtr", "TxInf/RtrChain/DbtrAcct", "pty");
   }else{
     Mxcvt.mx2mtParty("Choice_52AD", root, "TxInf/RtrChain/DbtrAgt", "TxInf/RtrChain/DbtrAgtAcct", "fin")
    // no acct in RtrChain, so try use in OrgnlTxRef
    if (stp.has(root, "TxInf/OrgnlTxRef/Cdtr")) {
     Mxcvt.mx2mtParty("Choice_50AFK", root, "TxInf/OrgnlTxRef/Cdtr", "TxInf/OrgnlTxRef/CdtrAcct", "pty")
    } else {
     Mxcvt.mx2mtParty("Choice_50AFK", root, "TxInf/RtrChain/Dbtr", "TxInf/OrgnlTxRef/CdtrAcct", "pty")
    }
    if (stp.has(root, "TxInf/OrgnlTxRef/Dbtr")) {
     Mxcvt.mx2mtParty("Choice_59AF", root, "TxInf/OrgnlTxRef/Dbtr", "TxInf/OrgnlTxRef/DbtrAcct", "pty")
     } else {
     Mxcvt.mx2mtParty("Choice_59AF", root, "TxInf/RtrChain/Cdtr", "TxInf/OrgnlTxRef/DbtrAcct", "pty")
     }
   }

	SttlmMtd(false);
  ChrgsInfDemerge();
	var f72="";
	var f72txt = '';
    // line 1: /RETN|REJT/tagcode
	f72="/RETN/99"+'\r\n';
	// line 2 /reason code/text
	var st = ''+stp.xml_info(root, "TxInf/RtrRsnInf/AddtlInf", 'notagname');
	st = st.replace('\r\n', ' ').trim();
	if (rsn == 'NARR'){
	  var reg = /^(AC0[1-6]|AM0[1-8]|BE0[1-5]|AG0[1-2]|DT01|MS01|PY01|RF01|RC0[1-3]|RR0[1-3]|TM01)|(X[0-9A-Z]{1}[0-9]{2})\/(.*)$/
    if (reg.test(st) ){
      if (st.length > 35){
      f72txt = st.substring(35);
      st = st.substring(0,35);
      }
      f72 += '/'+st+'\r\n';
    } else {
      if (st.length > 29){
      f72txt = st.substring(29);
      st = st.substring(0,29);
      }
      f72 += '/XT99/'+st+'\r\n';
    }
	} else {
	  if (st.length > 29){
	  // stp.log(' st long ' + st)
	  f72txt = st.substring(29);
	  st = st.substring(0,29);
	  }
	  f72 += '/'+rsn+'/'+st+'\r\n';
	}
	// line 3 /MREF/16x
	var mref = ''+stp.xml(root, "TxInf/OrgnlInstrId",null);
	f72 += '/MREF/'+mref+'\r\n';
	// line 4 /TREF/16x
	var tref = ''+stp.xml(root, "TxInf/OrgnlEndToEndId",null);
	if (tref && tref != 'NOTPROVIDED') {
	f72 += '/TREF/'+tref+'\r\n';
	}
	// line 5 /CHGS/ccyAmt
	// TxInf/ChrgsInf
//	var infos = stp.findMulti(root, "TxInf/ChrgsInf");
//	for (var i=0; i < infos.size(); i++) {
//	  var info = infos.get(i);
//	  stp.log(' ChrgsInf ' + info)
//	  f72 += '/CHGS/'+stp.xml(info, "Amt/@Ccy","3!a")+stp.xml(info, "Amt","15d")+'\r\n';
//	}
	// lines /TEXT/29x
//	infos = stp.findMulti(root, "TxInf/RtrRsnInf/AddtlInf");
//	for (var i=0; i < infos.size(); i++) {
//	  var info = infos.get(i);
//	  f72 += '/TEXT/'+info+'\r\n';
//	}
  if (f72txt != '') {
      if (f72txt.length > 29){
  	  f72txt = f72txt.substring(0,28)+'+';
  	  }
     f72 += '/TEXT/'+f72txt+'\r\n';
  }
	// var f72 = stp.fmt( cd1 + cd2+cd3, "6*35x")
	// var f72 = stp.fmt(f72,'FMT72');
	stp.setData("TEXT/F72", f72);
	//stp.log('test');
	  	// 23B,
    	if (!stp.has(root, "CdtTrfTxInf/PmtTpInf/LclInstrm/Prtry")) {
    	    stp.setData("TEXT/F23B", 'CRED');
    	} else {
    	  var lpty = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/LclInstrm/Prtry","4c");
    	  if ('CRED|CRTS|SPAY|SPRI|SSTD|'.indexOf(lpty) < 0 ){
          stp.setData("TEXT/F23B", 'CRED');
          // f72 += '/LOCINS/'+lpty+'\r\n';
    	  }
    	  // var lcd = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/LclInstrm/Cd","4c");
    	}
	// stp.fmt( "YYMMDD")
// stp.fmt( "15d")
	// load schema from /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtjson/2020/fin.103.json
}


function SttlmMtd(isMerge){
	if (isMerge){
	//  FIToFICstmrCdtTrf/
	// The settlement method in the MT source message is implicit and can be deduced from the presence and/or value of other fields:
    // - the presence of a field 53a Sender's Correspondent carrying a financial institution identification (option A or D)
    //   or a field 54a Receiver's Correspondent indicates that the payment is a cover payment (SettlementMethod "COVE")
    // - the presence of a field 53B\Sender's Correspondent\PartyIdentifier indicates that the account relationship between Sender
    //   and Receiver will be used to settle the payment.
    //   A field starting with "/C/" indicates that the Sender will settle in his books (SettlementMethod "INGA"),
    //   otherwise ("/D/" or "/") settlement will be done by the Receiver (SettlementMethod "INDA").
    // - for all cases different from those described above, the default "INDA" will be assigned as SettlementMethod.
    var send_bic = ''+stp.getSender();
    var recv_bic = ''+stp.getReceiver();
	  var cd = 'INDA';
	  var mt = '' + stp.json(msg, '/B2/MT', null);
	  var ptyid = null;
	  var b4 = msg.get("TEXT");
//	  if (stp.has(b4, "SeqB") && '202' === mt ) {
//	   cd = 'INDA';
//	  }
	  if (stp.has(b4, "Choice_53ABD")) {
	    if (stp.has(b4, "Choice_54ABD")){
	      if (stp.has(b4, "Choice_53ABD/F53B")) {
	        if (!stp.has(b4, "Choice_53ABD/F53B/PartyIdentifier")) {
	          cd = 'COVE';
	        } else {
	        ptyid = String(stp.json(b4,"Choice_53ABD/F53B/PartyIdentifier", null) );
	        }
	      } else if (stp.has(b4, "Choice_53ABD/F53A") && stp.has(b4, "Choice_54ABD/F54A")) {
	        var f53a = ''+stp.json(b4, 'Choice_53ABD/F53A/IdentifierCode', null);
	        var f54a = ''+stp.json(b4, 'Choice_54ABD/F54A/IdentifierCode', null);
	        if (f53a.substring(0, 8) != send_bic.substring(0, 8)  &&  f54a.substring(0, 8) != recv_bic.substring(0, 8)) {
	          cd = 'COVE';
	        } else {
	          ptyid = String(stp.json(b4,"Choice_53ABD/F53A/PartyIdentifier", null) );
	          if ( Mxcvt.isClrSysMmbId(ptyid) ){
	            cd = 'COVE';
	            ptyid = null; // not account
	          }
	        }
	      } else {
	        cd = 'COVE';
	      }
	    } else {
	      // no 54a
	      if (stp.has(b4, "Choice_53ABD/F53D")) {
	        cd = 'COVE';
	        ptyid =  String(stp.json(b4,"Choice_53ABD/F53B/PartyIdentifier", null) );
	      } else if (stp.has(b4, "Choice_53ABD/F53A")) {
	        var f53a = ''+stp.json(b4, 'Choice_53ABD/F53A/IdentifierCode', null);
	        if (f53a.substring(0, 6) != send_bic.substring(0, 6)  &&  f53a.substring(0, 6) != recv_bic.substring(0, 6)) {
	        cd = 'COVE';
	        } else {
	        ptyid = String(stp.json(b4,"Choice_53ABD/F53A/PartyIdentifier", null) );
	        }
	      } else {
	        // 53B
	        ptyid = String(stp.json(b4,"Choice_53ABD/F53B/PartyIdentifier", null) );
	      }
	    }
	    if (ptyid ) {
	    if ( ptyid.startsWith("/C/"))  cd = 'INGA';
	    Mxcvt.acc("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/SttlmAcct", b4, 'Choice_53ABD')
	    }
	  } else {
	    // no 53a
	  }
//	  if (stp.has(b4, "Choice_53ABD/F53A/IdentifierCode") || stp.has(b4, "Choice_53ABD/F53D")
//	    || stp.has(b4, "Choice_54ABD")) {
//		cd = 'COVE';
//	  } else if (stp.has(b4, "Choice_53ABD/F53B/PartyIdentifier")) {
//		var s = String(stp.json(b4,"Choice_53ABD/F53B/PartyIdentifier", null) );
//		if (s.startsWith("/C/")) {
//		 cd = 'INGA'
//		}
//	  }
	// stp.log('test ' + code);
	stp.setData("/PmtRtr/GrpHdr/SttlmInf/SttlmMtd", cd);
	// The PartyIdentifier subfield of field 53B is translated to the SettlementAccount indicating the account (relationship)
	// between Sender and Receiver for settlement of the transaction.

	} else {
	// demerge mx to mt
      var mtd = ''+stp.xml(root, "GrpHdr/SttlmInf/SttlmMtd",null);
	  if (stp.has(root, "GrpHdr/SttlmInf/SttlmAcct")) {
          var acct = null;
          if ('INGA' == mtd) {
            acct = '/C/'+Mxcvt.mx2mtAcc(null, root, "GrpHdr/SttlmInf/SttlmAcct", null);

          } else if ('INDA' == mtd) {
            acct = '/'+Mxcvt.mx2mtAcc(null, root, "GrpHdr/SttlmInf/SttlmAcct", null);
          }
          stp.log(' acct ' + acct + ' - method - ' + mtd );
          if (acct) stp.setData("TEXT/Choice_53ABD/F53B/PartyIdentifier", acct);
          // Mxcvt.mx2mtParty('Choice_53ABD', root, "GrpHdr/SttlmInf/InstgRmbrsmntAgt", "GrpHdr/SttlmInf/InstgRmbrsmntAgtAcct", 'fin' );
      }
	}
}


function ChrgsInf(isMerge){
  var b4 = msg.get("TEXT");
  var chgby = ''+stp.json(b4, 'F71A', null);  // BEN,OUR,SHA
//  stp.log('set chgby ' + chgby )
	switch (chgby) {
	case 'BEN':
	  stp.setData("/PmtRtr/TxInf/ChrgBr", 'CRED')
    break;
	case 'OUR':
	  //stp.setData("/PmtRtr/TxInf/ChrgBr", 'DEBT')  // remove in finplus 2.1
	  stp.setData("/PmtRtr/TxInf/ChrgBr", 'SHAR')
    break;
  case 'SHA':
  default:
    stp.setData("/PmtRtr/TxInf/ChrgBr", 'SHAR')
  }
  if(chgby == 'OUR' && stp.has(b4, "F71G")){
      stp.setData("/PmtRtr/TxInf/ChrgsInf/Agt/FinInstnId/BICFI", stp.getReceiver() )
      stp.setData("/PmtRtr/TxInf/ChrgsInf/Amt", stp.toMxAmt(stp.json(msg, "TEXT/F71G/Amount", null)) )
      stp.setData("/PmtRtr/TxInf/ChrgsInf/Amt@Ccy", stp.json(msg, "TEXT/F71G/Currency", null) )
  } else if(chgby == 'BEN' || (chgby == 'SHA' && b4.has("Loop3"))){
      var loop = b4.get("Loop3");
//      stp.log(' ----- 71F --- ')
//      stp.log(loop)
      var chrgAgt = 'NOTPROVIDED';
//        if(stp.has(b4, "Choice_52AD")){
//          chrgAgt = stp.json(msg, 'TEXT/Choice_52AD/*/IdentifierCode', null);
//        }else{
//          chrgAgt = stp.json(msg, "B1/BIC", null)
//        }
      var loopChrgs = [];
      for (var i = 0; i < loop.length(); i++) {
        var item = loop.get(i);
        var amt = stp.json(item, "F71F/Amount", null);
        var ccy = stp.json(item, "F71F/Currency", null)
        // var chrgs = {"Amt":stp.toMxAmt(amt), "Amt@Ccy": ccy, "Agt/FinInstnId/BICFI": chrgAgt };
        var chrgs = {"./Amt":stp.toMxAmt(amt), "./Amt@Ccy": ccy, "Agt/FinInstnId/Nm": chrgAgt, "Agt/FinInstnId/PstlAdr/AdrLine": chrgAgt };
        // var chrgs = {"Amt":stp.toMxAmt(amt), "Amt@Ccy": ccy, "Agt":{"FinInstnId": {"Nm": chrgAgt, "PstlAdr":{"AdrLine":chrgAgt}} }};
        // console.log(JSON.stringify(chrgs) );
        // console.log('chrgs: ' + chrgs);
        loopChrgs.push(chrgs)
      }
      stp.setData("/PmtRtr/TxInf/ChrgsInf", loopChrgs )
    }
}

function ChrgsInfDemerge(){
  var chgby = ''+stp.xml(root, "TxInf/ChrgBr","");
  if (chgby == 'CRED'){
    stp.setData("TEXT/F71A", 'BEN');
  } else if (chgby == 'DEBT'){
    stp.setData("TEXT/F71A", 'OUR');
  } else if (chgby == 'SHAR' || chgby == 'SLEV'){
    stp.setData("TEXT/F71A", 'SHA');
  }
  var loop71f = []
  var infos = stp.findMulti(root, "TxInf/ChrgsInf");
      for (var i=0; i < infos.size(); i++) {
        var info = infos.get(i);
        var ccy = stp.xml(info, "Amt/@Ccy","3!a")
        var amt = stp.xml(info, "Amt","15d");
//        stp.log(' 71f ' + ccy + ' ' + amt)
        if (chgby == 'DEBT') {
          if (''+amt != '0,'){
          stp.setData("TEXT/F71G", {'Currency':ccy,'Amount': amt} );
          }
        } else {
          loop71f.push({'F71F':{'Currency':ccy,'Amount': amt}})
        }
      }
      // stp.setData("TEXT/F71G", {});
//      stp.log(' 71f ' + loop71f)
      stp.setData("TEXT/Loop3", loop71f);

}

function SttlmTmIndctn(isMerge){
  var b4 = msg.get("TEXT");
  if (!b4.has("Loop1")) return;
  var loop = b4.get("Loop1");
//  stp.log(' ----- 13c --- ')
//  stp.log(loop)
  var dt = Mxcvt.toISODate(String(stp.json(b4,"F32A/Date", null)));
  // 2020-04-15T02:37:09+00:00
  for (var i = 0; i < loop.length(); i++) {
    var item = loop.get(i);
    // stp.log(item, true)
    var code = '' + stp.json(item, 'F13C/Code', null);
    var tm = ''+stp.json(item,'F13C/TimeIndication', null)+stp.json(item,'F13C/Sign', null)+ stp.json(item,'F13C/TimeOffset', null)
    tm = Mxcvt.toISOTime(String(tm))
//    stp.log(' ' + code + ' ' + dt + ' ' + tm)
    if ('SNDTIME' == code) {
      stp.setData("/PmtRtr/TxInf/SttlmTmIndctn/DbtDtTm", dt+'T'+tm)
    } else if ('RNCTIME' == code) {
      stp.setData("/PmtRtr/TxInf/SttlmTmIndctn/CdtDtTm", dt+'T'+tm)
    } else {
      stp.log(' tbd: ' + code + '  ' + item)
    }
  }
}