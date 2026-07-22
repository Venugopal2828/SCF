// convert MT103 to pacs.008
function merge(){
	var b4 = msg.get("TEXT");
	// stp.log('has 53a 3 ? ' + stp.has(b4, "Choice_53ABD/F53A/IdentifierCode"))
	// msgid
	var b3 = msg.get("B3");
//	if (!stp.has(b3, "108")) {
//	  stp.setData("/FIToFICstmrCdtTrf/GrpHdr/MsgId", b4.get("F20"));
//	}
	stp.setData("/FIToFICstmrCdtTrf/GrpHdr/MsgId",b4.get('F20'));
	if (b3.get('103') == 'ZDS') {
//	  reformat_class='test.cs.esp.restRS.SzbaMxReformater';
	} else if (b3.get('103') == 'EBA') {
//    reformat_class='test.cs.esp.swift.mx.ShbMt2MxReformater';
  }

  var now = new Date();
	var t = now.toMxString();
	stp.setData("/FIToFICstmrCdtTrf/GrpHdr/CreDtTm", t);
	SttlmMtdMerge();
  ClrChanl(true);
  SttlmTmIndctn(true);
  
  //In the MT 103 field 70 Remittance Information optionally can contain a code "/ROC/" followed by the Reference of the Ordering Customer.
  //If field 70 does not carry this optional reference, then field 20 Sender's Reference is copied as a workaround.

  var e2eId = null;
  var uri =''
  var f70 = ''+b4.get('F70');
  var lines70 = stp.strd(f70);
  stp.log('F70: 0 '+ lines70.size() )
  for (var i = 0; i < lines70.size(); i++) {
	  var line70 = lines70.get(i);
	  stp.log('F70:  '+ line70 )
	  var code70 = String(line70.get('code'))  // ROC 
	  var narr70 = String(line70.get('narr'))
    if (code70 == 'ROC'){
      e2eId = narr70;
      // break;
    }else if (code70 == 'ULTB') {
      Mxcvt.mt2mxUltPty("/FIToFICstmrCdtTrf/CdtTrfTxInf/UltmtCdtr", narr70);
    }else if (code70 == 'ULTD') {
      Mxcvt.mt2mxUltPty("/FIToFICstmrCdtTrf/CdtTrfTxInf/UltmtDbtr", narr70);
    }else if (code70 == 'PURP') {
      stp.setData('/FIToFICstmrCdtTrf/CdtTrfTxInf/Purp/Prtry', narr70)
    }else if (code70 == 'URI') {
      uri += narr70 + ' ';
    }else if (code70 == 'RELID') {
      stp.setData('/FIToFICstmrCdtTrf/CdtTrfTxInf/RltdRmtInf/RmtId', narr70)
    }else if (code70 == 'SRI') {
      stp.setData('/FIToFICstmrCdtTrf/CdtTrfTxInf/RmtInf/Strd/AddtlRmtInf', narr70)
    } else {
      uri += '/'+code70 + '/'+narr70;
    }
  }
  if (lines70.size() == 0 && f70 != ''){
    uri = f70.replace(/\r/g,'');
    if (uri.length > 140) {
      uri = uri.replace(/\n/g,'');
    }
  }
  if (uri != ''){
    stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/RmtInf/Ustrd", stp.fmt(uri, "140x")  )
  }
  if (!e2eId) {
	e2eId = 'NOTPROVIDED'; // stp.json(msg, "TEXT/F20", null);
  }
  stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtId/EndToEndId", e2eId)
  stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtId/TxId", b4.get('F20'));
  if (b4.has('F26T')){
    stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/Purp/Prtry", ':26T:'+b4.get('F26T'));
  }

	var infoCdtAgt = []
	var infoNxtAgt = []
	var svcLvl = []
	if (stp.has(msg, "B3/111")){
    	svcLvl.push({"Cd": 'G'+stp.json(msg,"B3/111", null) });
  }

  //Field 23E: Instruction Code
  if (b4.has("Loop2")) {
    var loop2 = b4.get("Loop2");
    // stp.log(' ----- 23E --- ')
    // stp.log(loop2)
    for (var i = 0; i < loop2.length(); i++) {
      var item = loop2.get(i);
      var cd = ''+stp.json(item, 'F23E/InstructionCode', null);  // CHQB,CORT,HOLD,INTC,PHOB,PHOI,PHON,REPA,SDVA,TELB,TELE,TELI
      var info = ''+stp.json(item, 'F23E/AdditionalInformation', null);
	    // stp.log('cd:'+ cd )
      // stp.log('info:'+ info )
	    switch (cd) {
	    case 'CHQB':
      case 'HOLD':
	    case 'PHOB':
	    case 'TELB':
	      infoCdtAgt.push({Cd: cd, InstrInf: info} )
        break;
	    case 'PHON':
      case 'TELE':
      case 'PHOI':
      case 'REPA':
      case 'TELI':
	      infoNxtAgt.push({InstrInf: cd +'/'+ info} )
        break;
      case 'SDVA':
        // stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtTpInf/SvcLvl/Cd", cd)
        svcLvl.push({"Cd": cd });
        break;
      default:
        stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtTpInf/CtgyPurp/Cd", cd)
  	  }
    }
  }

  if (stp.has(b4, "Choice_53ABD") ) {
//        Mxcvt.fin("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstgRmbrsmntAgt", b4, 'Choice_53ABD')
//        Mxcvt.acc("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstgRmbrsmntAgtAcct", b4, 'Choice_53ABD')
//        Mxcvt.fin("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstdRmbrsmntAgt", b4, 'Choice_54ABD')
//        Mxcvt.acc("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstdRmbrsmntAgtAcct", b4, 'Choice_54ABD')
  } else if (stp.has(b4, "Choice_54ABD") ){
      // no 53a, put 54 to
      // var f54a = ''+stp.json(b4, 'Choice_54ABD/F54A/IdentifierCode', null);
      // info = '/FIN54/'+ f54a; //  b4.get("Choice_54ABD");
      // /[\s\uFEFF\xA0]+$/g
      // [0-9a-zA-Z/\-\?:\(\)\.,'\+ ]+  max:140
      // stp.log(' ----- FIN54 --- ' + info)
	  //  infoNxtAgt.push({InstrInf: info.replace(/[\{|\}|\"]/g,' ' ).replace(/[\s]+$/g,'') } );
  }
  if (stp.getData('FIN53') != null){
      // FIN53
      info = ''+stp.getData('FIN53');
      infoNxtAgt.push({InstrInf: info.replace(/[\{|\}|\"]/g,' ' ).replace(/[\s]+$/g,'') } );
  }
	//
  Mxcvt.pty("/FIToFICstmrCdtTrf/CdtTrfTxInf/Dbtr", b4, 'Choice_50AFK')
	Mxcvt.acc("/FIToFICstmrCdtTrf/CdtTrfTxInf/DbtrAcct", b4, 'Choice_50AFK')
  
	if (stp.has(b4, "Choice_52AD") ) {
	  Mxcvt.fin("/FIToFICstmrCdtTrf/CdtTrfTxInf/DbtrAgt", msg, 'TEXT/Choice_52AD')
	  Mxcvt.acc("/FIToFICstmrCdtTrf/CdtTrfTxInf/DbtrAgtAcct", msg, 'TEXT/Choice_52AD')
	} else {
	  stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/DbtrAgt/FinInstnId/BICFI", stp.getSender() )
	}
  Mxcvt.fin("/FIToFICstmrCdtTrf/CdtTrfTxInf/IntrmyAgt1", b4, 'Choice_56ACD')
	Mxcvt.acc("/FIToFICstmrCdtTrf/CdtTrfTxInf/IntrmyAgt1Acct", b4, 'Choice_56ACD')
  
  if (stp.has(b4, "Choice_57ABCD") ) {
  // Mxcvt.mt2mxParty('Choice_57ABCD', b4, "/FIToFICstmrCdtTrf/CdtTrfTxInf/CdtrAgt", "/FIToFICstmrCdtTrf/CdtTrfTxInf/CdtrAgtAcct", 'fin' );
	  Mxcvt.fin("/FIToFICstmrCdtTrf/CdtTrfTxInf/CdtrAgt", msg, 'TEXT/Choice_57ABCD')
	  Mxcvt.acc("/FIToFICstmrCdtTrf/CdtTrfTxInf/CdtrAgtAcct", msg, 'TEXT/Choice_57ABCD')
	} else {
	  stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/CdtrAgt/FinInstnId/BICFI", stp.getReceiver() )
	}
	
  Mxcvt.pty("/FIToFICstmrCdtTrf/CdtTrfTxInf/Cdtr", b4, 'Choice_59AF')
	Mxcvt.acc("/FIToFICstmrCdtTrf/CdtTrfTxInf/CdtrAcct", b4, 'Choice_59AF')
  
	//Field 71A: Details of Charges&71F&71G
  ChrgsInf(true);

      
	var lines = stp.strd(b4.get('F72'));
	// stp.log('F72: 0 '+ lines.size() )
	var instg = 1;
	for (var i = 0; i < lines.size(); i++) {
	  var line = lines.get(i);
	  var code = String(line.get('code'))  // ACC INS INT 
	  var narr = String(line.get('narr'))
	  switch (code) {
	  case 'INTA':
	    stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/IntrmyAgt2/FinInstnId/BICFI", narr)
	    break;
	  case 'SVCLVL':
	    // stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtTpInf/SvcLvl/Cd",  narr)
	    svcLvl.push({"Cd": narr });
	    break;
	  case 'LOCINS':
	    stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtTpInf/LclInstrm/Prtry",  narr)
	    break;
	  case 'CATPURP':
	    stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtTpInf/CtgyPurp/Prtry",  narr)
	    break;
	  case 'INS':
      if (narr.isBic()) {
	    stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PrvsInstgAgt"+instg+"/FinInstnId/BICFI", narr);
      } else {
	    stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PrvsInstgAgt"+instg+"/FinInstnId/Nm", stp.fmt(narr, '140x')  );
	    stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PrvsInstgAgt"+instg+"/FinInstnId/PstlAdr/AdrLine", ['NOTPROVIDED']);
      }
	    instg++;
	    break;
	  case 'ACC':
      if (narr.length > 140) {
        var narrary6 = stp.fmt(narr, '2*140x').split('\r\n');
        for (var j = 0; j < narrary6.length; j++) {
          infoCdtAgt.push({ InstrInf: narrary6[j] } )  //
        }
      } else {
	      infoCdtAgt.push({InstrInf: narr} )  // Cd: code,
	    }
      break;
	  case 'INT':
      if (narr.length > 35) {
        var narrary6 = stp.fmt(narr, '6*35x').split('\r\n');
        for (var j = 0; j < narrary6.length; j++) {
          infoNxtAgt.push({ InstrInf: narrary6[j] } )  //
        }
      } else {
	      infoNxtAgt.push({ InstrInf: narr} )  // Cd: code,
	    }
      break;
    default:
      var s = '/'+code+'/'+narr;
      if (s.length > 35) {
      // stp.log('dd'+ s)
        var s1 = stp.fmt(s, '6*35x')
        var ss = s1.split('\r\n');
        // stp.log('fmt '+ s + '  to: ' + ss)
        for (var j = 0; j < ss.length; j++) {
          // stp.log('J: '  + j + ' = ' + ss[j])
	        infoNxtAgt.push({ InstrInf: ss[j] } )  //
	      }
	    } else {
	      infoNxtAgt.push({ InstrInf: '/'+code+'/'+narr} )  //
	    }
      break;
  	}
	}
	stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/InstrForCdtrAgt",  infoCdtAgt)
	if (infoNxtAgt.length > 6) {
	  var missAry = infoNxtAgt.splice(6);
	  // stp.info('T20068 miss: /FIToFICstmrCdtTrf/CdtTrfTxInf/InstrForCdtrAgt: ' + missAry.join() );
	}
  stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/InstrForNxtAgt",  infoNxtAgt)
	stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtTpInf/SvcLvl", svcLvl);
  var f77b = ''+b4.get('F77B');
  if (f77b.startsWith('/CD/')) {
    var i = f77b.indexOf('\n');
    var cd = f77b.substring(4, i);
    if (cd){
      b4.put('F77B', f77b.substring(i+1) );
      stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/RgltryRptg/Dtls/Cd",  cd)
    }
  }
}


// convert pacs.008 to MT103
function demerge(){
	rule="fin.103.ESP";
	// root is <FIToFICstmrCdtTrf> node
	// load schema from /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtjson/2020/fin.103.json
	SttlmTmIndctnDemerge();
	SttlmMtdDemerge(false);
	var f72="";
	// f72 order: INTA SVCLVL LOCINS CATPURP 23e FIN53 INS
	if (stp.has(root, "CdtTrfTxInf/IntrmyAgt2") ) {
	  f72 += Mxcvt.mx2mtUltPty(root, "CdtTrfTxInf/IntrmyAgt2/FinInstnId", "INTA") + '\r\n';
	}
	if (stp.has(root, "CdtTrfTxInf/IntrmyAgt3") ) {
	  f72 += Mxcvt.mx2mtUltPty(root, "CdtTrfTxInf/IntrmyAgt3/FinInstnId", "INTA") + '\r\n';
	}
	// 23E
	var loop23e=[];
	var sls = stp.findMulti(root, "CdtTrfTxInf/PmtTpInf/SvcLvl");
  for (var i=0; i < sls.size(); i++) {
    var info = sls.get(i);
    var cd = ''+stp.xml(info, "Cd", null);
    var s = ''+stp.xml(info, "Prtry", null);
    if ('SDVA' == cd){
      loop23e.push({'F23E':{'InstructionCode':'SDVA'}})
    } else if (/^G00[0-9]$/.test(cd)){
      stp.setData("B3/111", cd.substring(1));
    } else if (cd != '') {
      f72 += '/SVCLVL/'+cd+'\r\n';
    } else if (s != '') {
      f72 += '/SVCLVL/'+s+'\r\n';
    }
  }
	// var cd = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/SvcLvl/Cd","4c");
	// 23B,
	var lpty = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/LclInstrm/Cd",null);
	if (lpty == ''){
	  lpty = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/LclInstrm/Prtry", null);
	}
	stp.setData("TEXT/F23B", 'CRED');
	if (lpty == '') {
	} else {
	  if ('CRED|CRTS|SPAY|SPRI|SSTD|'.indexOf(lpty) < 0 ){
//      stp.setData("TEXT/F23B", 'CRED');
    f72 += '/LOCINS/'+lpty+'\r\n';
	  }
	  // var lcd = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/LclInstrm/Cd","4c");
	}

	// CdtTrfTxInf/PmtTpInf/CtgyPurp/Cd
	cd = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/CtgyPurp/Cd","4c");
	if (cd == ''){
	  cd = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/CtgyPurp/Prtry",null);
	}
  //  stp.log('CtgyPurp cd: '+  cd)
  if ('INTC' == cd){
    loop23e.push({'F23E':{'InstructionCode':'INTC'}})
  }else if ('CORT' == cd){
    loop23e.push({'F23E':{'InstructionCode':'CORT'}})
  }else if ('INTC CORT' == cd){
    loop23e.push({'F23E':{'InstructionCode':'INTC'}})
    loop23e.push({'F23E':{'InstructionCode':'CORT'}})
  } else if (cd != ''){
    f72 += '/CATPURP/'+cd+'\r\n';
    //loop23e.push({'F23E':{'InstructionCode':cd}})
    // loop23e.push({'F23E':{'InstructionCode':'TEST', 'AdditionalInformation':'Add infotmation'}})
  }
	// 50a
	Mxcvt.mx2mtParty('Choice_50AFK', root, "CdtTrfTxInf/Dbtr", "CdtTrfTxInf/DbtrAcct", 'pty' );
	Mxcvt.mx2mtParty('Choice_59AF', root, "CdtTrfTxInf/Cdtr", "CdtTrfTxInf/CdtrAcct", 'pty' );
	Mxcvt.mx2mtParty('Choice_57ABCD', root, "CdtTrfTxInf/CdtrAgt", "CdtTrfTxInf/CdtrAgtAcct", 'fin.clr' );
	Mxcvt.mx2mtParty('Choice_52AD', root, "CdtTrfTxInf/DbtrAgt", "CdtTrfTxInf/DbtrAgtAcct", 'fin' );
	Mxcvt.mx2mtParty('Choice_53ABD', root, "GrpHdr/SttlmInf/InstgRmbrsmntAgt", "GrpHdr/SttlmInf/InstgRmbrsmntAgtAcct", 'fin' );
	Mxcvt.mx2mtParty('Choice_54ABD', root, "GrpHdr/SttlmInf/InstdRmbrsmntAgt", "GrpHdr/SttlmInf/InstdRmbrsmntAgtAcct", 'fin' );
	Mxcvt.mx2mtParty('Choice_55ABD', root, "GrpHdr/SttlmInf/ThrdRmbrsmntAgt", "GrpHdr/SttlmInf/ThrdRmbrsmntAgtAcct", 'fin' );
	Mxcvt.mx2mtParty('Choice_56ACD', root, "CdtTrfTxInf/IntrmyAgt1", "CdtTrfTxInf/IntrmyAgt1Acct", 'fin.clr' );
    // 71A
  ChrgsInfDemerge();

  var infos = stp.findMulti(root, "CdtTrfTxInf/InstrForCdtrAgt");
  for (var i=0; i < infos.size(); i++) {
    var info = infos.get(i);
    var cd = stp.xml(info, "Cd", null);
    var s = ''+stp.xml(info, "InstrInf", null)
    if (!cd || cd == ''){
      cd = 'ACC'
    } else if ( 'CHQB' == cd && s != ''){
      s = 'CHQB/'+s;
      cd = 'ACC';
    } else if ( 'CHQB|TELB|HOLD|PHOB'.indexOf(cd) > -1  ){
      // if ('CHQB' == cd) s = ''
      s = stp.fmt(s, '30x');
      loop23e.push({'F23E':{'InstructionCode':cd, 'AdditionalInformation':s}})
      continue;
    }
    f72 += '/'+cd+'/'+s+'\r\n';
  }
  //add by boc (SubfunctionInstructionforCreditorAgentAndJP) s
  //if (stp.has(root, "CdtTrfTxInf/InstrForCdtrAgt") || stp.has(root, "CdtTrfTxInf/CdtrAgt/BrnchId") ) {
  //	var _TempVal = Mxcvt.SubfunctionInstructionforCreditorAgentAndJP(root);
  //	if (_TempVal!='') {
  //		 f72 +=_TempVal+'\r\n';
  //	}
  //}
  //add by boc (SubfunctionInstructionforCreditorAgentAndJP) e
  infos = stp.findMulti(root, "CdtTrfTxInf/InstrForNxtAgt");
//  var reg72 = /^\/[A-Z]{0,8}\/(.{0,32})$/;
  for (var i=0; i < infos.size(); i++) {
    var info = infos.get(i);
    var cd = ''+stp.xml(info, "Cd", null);
    var s = stp.xml(info, "InstrInf", null)
    if (s.startsWith('/FIN53/')){
      var mtd = ''+stp.xml(root, "GrpHdr/SttlmInf/SttlmMtd",null);
      var v53 = s.substring(7);
      if (v53.isBic() && (mtd == 'INGA' || mtd == 'INDA') ) {
        if (stp.getData("f53a_PartyIdentifier") != null ) {
          stp.setData("TEXT/Choice_53ABD/F53A/PartyIdentifier", stp.getData("f53a_PartyIdentifier"));
          stp.setData("f53a_PartyIdentifier", null);
        }
        stp.setData("TEXT/Choice_53ABD/F53A/IdentifierCode", v53);
        continue;
      } else {
        stp.log('  fin53  ' + cd + ', s ' + s + ' ] ' + v53.isBic() )
      }
    }
    if (!cd || cd == ''){
      if (s.startsWith('/FIN53/')){
        f72 += s+'\r\n';
      } else if (/^\/[A-Z]{0,8}\/.{0,32}$/.test(s)) {
        f72 += s+'\r\n';
      } else if (f72 == '') {
        f72 += '/ACC/'+s+'\r\n';
      } else {
        f72 += '/REC/'+s+'\r\n';
      }
    } else {
      f72 += '/'+cd+'/'+s+'\r\n';
    }
  }
	var ins = ''+stp.xml(root, "CdtTrfTxInf/PrvsInstgAgt1/FinInstnId/BICFI","35x");
	if (ins) {
	 f72 += '/INS/'+ins+'\r\n';
	}
	ins = ''+stp.xml(root, "CdtTrfTxInf/PrvsInstgAgt2/FinInstnId/BICFI","35x");
	if (ins) {
	 f72 += '/INS/'+ins+'\r\n';
	}
	ins = ''+stp.xml(root, "CdtTrfTxInf/PrvsInstgAgt3/FinInstnId/BICFI","35x");
	if (ins) {
	 f72 += '/INS/'+ins+'\r\n';
	}
  stp.log('f72: ' + f72);
	stp.setData("TEXT/F72", stp.fmt(f72,'FMT72'));
  var f70='';
  var ultb = Mxcvt.mx2mtUltPty(root, "CdtTrfTxInf/UltmtCdtr", "ULTB");
  if (ultb != ''){
    f70 += ultb +'\r\n';
  }
  var ultd = Mxcvt.mx2mtUltPty(root, "CdtTrfTxInf/UltmtDbtr", "ULTD");
  if (ultd != ''){
    f70 += ultd +'\r\n';
  }
  if (stp.has(root, 'CdtTrfTxInf/Purp')) {
    var purp = ''+stp.xml(root, "CdtTrfTxInf/Purp/Cd", "35x") + stp.xml(root, "CdtTrfTxInf/Purp/Prtry", "35x");
    if ((/^:26T:[A-Z0-9]{3}$/.test(purp)) ){
      stp.setData("TEXT/F26T", purp.substring(5));
    } else {
      f70 += '/PURP/'+purp +'\r\n';
    }
  }
  var uri = '';
  infos = stp.findMulti(root, "CdtTrfTxInf/RmtInf/Ustrd");
  if (infos.size() > 0){
   // f70 = '/URI/'
  }
  for (var i=0; i < infos.size(); i++) {
      var info = infos.get(i);
      var s = stp.xml(info, null, null);
      uri += s+'\r\n';
  }
  var e2eId = ''+stp.xml(root, "CdtTrfTxInf/PmtId/EndToEndId", "35x");
  if (e2eId && e2eId != 'NOTPROVIDED') {
      if (uri.indexOf('/ROC/'+e2eId) == -1){
      f70 += '/ROC/'+e2eId +'\r\n';
      }
  }
  if (uri !='' ){
      if(!uri.startsWith('/') ){
        f70+='/URI/'
      }
      f70 += uri+'\r\n';
  }
  if (stp.has(root, 'CdtTrfTxInf/RltdRmtInf/RmtId')) {
    f70 += '/RELID/'+stp.xml(root, 'CdtTrfTxInf/RltdRmtInf/RmtId', '35x') +'\r\n';
  }
  var st = stp.xml_info(root, "CdtTrfTxInf/RmtInf/Strd", 'notagname');
  if (st.startsWith('/') ) {
      f70 += '/SRI/+'+st +'\r\n';
  }
  // stp.log(' Strd: ' + st)
  //

  stp.setData("TEXT/F70", stp.fmt(f70, "4*35x"));
  // 23E order
  var f23eorder = 'SDVA|INTC|REPA|CORT|HOLD|CHQB|PHOB|TELB|PHON|TELE|PHOI|TELI';
  loop23e.sort(function(a, b) {
    var ia = f23eorder.indexOf(a.F23E.InstructionCode);
    var ib = f23eorder.indexOf(b.F23E.InstructionCode);
    stp.log(' sort ' + a.F23E.InstructionCode + '  ' + ia + '  ' + ib )
    return ia - ib;
  });
  stp.setData("TEXT/Loop2", loop23e);
// stp.setData("TEXT/F20Z", "TEST");
	//var ccy = stp.xml(root, "CdtTrfTxInf/IntrBkSttlmAmt/@Ccy", "3c");
	// stp.log('test');
	// stp.fmt( "YYMMDD")
// stp.fmt( "15d")
  if (stp.getData("f53a_PartyIdentifier") != null ) {
       stp.setData("TEXT/Choice_53ABD/F53B/PartyIdentifier", stp.getData("f53a_PartyIdentifier"));
       // stp.setData("f53a_PartyIdentifier", acct);
        stp.setData("f53a_PartyIdentifier", null);
  }
  if (stp.has(root, 'CdtTrfTxInf/RgltryRptg/Dtls/Cd')) {
    var cd ='' +stp.xml(root, 'CdtTrfTxInf/RgltryRptg/Dtls/Cd', '35x');
    if (cd != '') {
    var f77b = '/CD/'+cd +'\r\n'
      +stp.xml(root, 'CdtTrfTxInf/RgltryRptg/Dtls/Inf', '2*35x');
    stp.setData("TEXT/F77B", f77b);
    }
  }
  // user code
	var bizsvc = ''+stp.xml(hdr, "BizSvc",null);
	console.log('biz svc: ' + bizsvc);
	if (bizsvc.startsWith('sarb.samos')){
  	samos_demerge()
	}
}

function samos_demerge(){
  console.log(' samos demerge js ');
  // reformat_class='test.cs.esp.swift.mx.SzbaMx2MtReformater';
  // or use js directly
//  stp.setData("B3/103", 'ZDS');
//  stp.setData("TEXT/F32A/Date", ''+stp.xml(source, "GrpHdr/IntrBkSttlmDt",null));
  // clear 23E
//  stp.setData("TEXT/Loop2", null);
}

function SttlmMtdMerge(isMerge){
	//  FIToFICstmrCdtTrf/
	// The settlement method in the MT source message is implicit and can be deduced from the presence and/or value of other fields:
  // - the presence of a field 53a Sender's Correspondent carrying a financial institution identification (option A or D)
  //   or a field 54a Receiver's Correspondent indicates that the payment is a cover payment (SettlementMethod "COVE")
  // - the presence of a field 53B\Sender's Correspondent\PartyIdentifier indicates that the account relationship between Sender
  //   and Receiver will be used to settle the payment.
  //   A field starting with "/C/" indicates that the Sender will settle in his books (SettlementMethod "INGA"),
  //   otherwise ("/D/" or "/") settlement will be done by the Receiver (SettlementMethod "INDA").
  // - for all cases different from those described above, the default "INDA" will be assigned as SettlementMethod.
  // var io = ''+stp.json(msg, 'B2/IO', null);
  var send_bic = ''+stp.getSender();
  var recv_bic = ''+stp.getReceiver();
  var cd = 'INDA';
  var ptyid = '';
  var b4 = msg.get("TEXT");
  var has53a = stp.has(b4, "Choice_53ABD");
  var has54a = stp.has(b4, "Choice_54ABD");
  if (has53a && has54a){
	  // 53a and 54a
	  if (stp.has(b4, "Choice_53ABD/F53B")) {
	    if (stp.has(b4, "Choice_53ABD/F53B/PartyIdentifier")) {
	          ptyid = ''+stp.json(b4,"Choice_53ABD/F53B/PartyIdentifier", null) ;
	    } else {
	          // cd = 'COVE';
	    }
	  } else if (stp.has(b4, "Choice_53ABD/F53D") ) {
	    // 53
	    if (stp.has(b4, "Choice_53ABD/F53D/PartyIdentifier")) {
	      ptyid = ''+stp.json(b4,"Choice_53ABD/F53D/PartyIdentifier", null) ;
	      if (Mxcvt.isClrSysMmbId(ptyid)) {
	        ptyid='';
	      }
	    }
	    if (ptyid=='') {
	       cd = 'COVE';
	    }
	  } else if (stp.has(b4, "Choice_54ABD/F54A")) {
	    var f53a = ''+stp.json(b4, 'Choice_53ABD/F53A/IdentifierCode', null);
	    var f54a = ''+stp.json(b4, 'Choice_54ABD/F54A/IdentifierCode', null);
	    if (f53a.substring(0, 8) == send_bic.substring(0, 8)  &&  f54a.substring(0, 8) == recv_bic.substring(0, 8)) {
	          cd = 'INDA';
	          stp.log('1')
	    } else {
	      if (stp.has(b4, "Choice_53ABD/F53A/PartyIdentifier")) {
	        ptyid = ''+stp.json(b4,"Choice_53ABD/F53A/PartyIdentifier", null) ;
	      }
	      if ( f53a.substring(0, 6) == send_bic.substring(0, 6) && (ptyid != '')  && !Mxcvt.isClrSysMmbId(ptyid)  ){
	        //
	        stp.log('2 ' + ptyid + '   - ' + (ptyid != '')  )
	      } else {
	        cd = 'COVE';
	        ptyid = ''; // not account
	        stp.log('3')
	      }
	      //
	    }
    } else {
	    // 53A with 54B or 54D
	    var f53a = ''+stp.json(b4, 'Choice_53ABD/F53A/IdentifierCode', null);
	    ptyid = ''+stp.json(b4,"Choice_53ABD/F53A/PartyIdentifier", null) ;
	    if (Mxcvt.isClrSysMmbId(ptyid)) {
	      ptyid='';
	    }
      if ( f53a.substring(0, 6) == send_bic.substring(0, 6) && ptyid!='' ){
      } else {
        cd = 'COVE';
      }
    }

    if (cd == 'COVE'){
      Mxcvt.fin("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstgRmbrsmntAgt", b4, 'Choice_53ABD')
      Mxcvt.acc("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstgRmbrsmntAgtAcct", b4, 'Choice_53ABD')
      Mxcvt.fin("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstdRmbrsmntAgt", b4, 'Choice_54ABD')
      Mxcvt.acc("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstdRmbrsmntAgtAcct", b4, 'Choice_54ABD')
    } else if (ptyid != '') {
      if ( ptyid.startsWith("/C/"))  cd = 'INGA';
      Mxcvt.acc("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/SttlmAcct", b4, 'Choice_53ABD');
    }
  } else if (has53a ) {
	      // 53a,  no 54a
	  stp.log(' has 53, no 54a' );
	  if (stp.has(b4, "Choice_53ABD/F53D")) {
	        // cd = 'COVE';
	      ptyid =  ''+stp.json(b4,"Choice_53ABD/F53D/PartyIdentifier", null) ;
	  } else if (stp.has(b4, "Choice_53ABD/F53A")) {
	    var f53a = ''+stp.json(b4, 'Choice_53ABD/F53A/IdentifierCode', null);
	     //var l0 = Mxcvt.getMtAcc(b4, "Choice_53ABD");
	     //var l1 = Mxcvt.getMtAcc(b4, "Choice_53ABD/F53A");
	     //var l2 = Mxcvt.getMtAcc(b4, "Choice_53ABD/F53A/PartyIdentifier");
	     //stp.log('------------- ' + l0 + ' -  ' + l1 + ' - ' + l2);
      if (stp.has(b4, "Choice_53ABD/F53A/PartyIdentifier") ) {
	      ptyid = ''+stp.json(b4,"Choice_53ABD/F53A/PartyIdentifier", null) ;
	      if (Mxcvt.isClrSysMmbId(ptyid)) {
	        ptyid='';
	      }
	    }
	    if (ptyid=='' && f53a.substring(0, 6) != send_bic.substring(0, 6)  &&  f53a.substring(0, 6) != recv_bic.substring(0, 6)) {
	      cd = 'COVE';
	    } else {
	      stp.setData("FIN53", '/FIN53/'+f53a);
	    }
	  } else {
	    // 53B
	    ptyid = ''+stp.json(b4,"Choice_53ABD/F53B/PartyIdentifier", null) ;
	  }
	  if (Mxcvt.isClrSysMmbId(ptyid)) {
	    ptyid='';
	  }

	  if (ptyid != '') {
	    if ( ptyid.startsWith("/C/"))  cd = 'INGA';
	    Mxcvt.acc("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/SttlmAcct", b4, 'Choice_53ABD')
	  }
	  if (cd == 'COVE'){
      Mxcvt.fin("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstgRmbrsmntAgt", b4, 'Choice_53ABD')
      Mxcvt.acc("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstgRmbrsmntAgtAcct", b4, 'Choice_53ABD')
    }
  } else if (has54a){
	  // no 53a, but has 54a
	  if (stp.has(b4, "Choice_54ABD/F54D")) {
	     cd = 'COVE';
	     ptyid =  ''+stp.json(b4,"Choice_54ABD/F54D/PartyIdentifier", null) ;
	  } else if (stp.has(b4, "Choice_54ABD/F54A")) {
	    var f54a = ''+stp.json(b4, 'Choice_54ABD/F54A/IdentifierCode', null);
	    if (f54a.substring(0, 8) == send_bic.substring(0, 8)  ||  f54a.substring(0, 8) == recv_bic.substring(0, 8)) {
	       cd = 'INDA';
	    } else {
	       cd = 'COVE';
	       ptyid = ''+stp.json(b4,"Choice_54ABD/F54A/PartyIdentifier", null) ;
	    }
	  } else {
	        // 53B
	        cd = 'COVE';
	        ptyid = ''+stp.json(b4,"Choice_54ABD/F54B/PartyIdentifier", null) ;
	  }
	  if (cd == 'COVE'){
        Mxcvt.fin("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstdRmbrsmntAgt", b4, 'Choice_54ABD')
        Mxcvt.acc("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/InstdRmbrsmntAgtAcct", b4, 'Choice_54ABD')
    }
	} else {
	   // no 53 no 54
	}
  stp.log(' final method: ' + cd)
	stp.setData("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/SttlmMtd", cd);
	if (cd == 'COVE' && stp.has(b4, "Choice_55ABD") ){
    Mxcvt.fin("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/ThrdRmbrsmntAgt", b4, 'Choice_55ABD')
    Mxcvt.acc("/FIToFICstmrCdtTrf/GrpHdr/SttlmInf/ThrdRmbrsmntAgtAcct", b4, 'Choice_55ABD')
  }
}


function SttlmMtdDemerge(isMerge){
	// demerge mx to mt
  var mtd = ''+stp.xml(root, "GrpHdr/SttlmInf/SttlmMtd",null);
	if (stp.has(root, "GrpHdr/SttlmInf/SttlmAcct")) {
    var acct = null;
    if ('INGA' == mtd) {
          acct = '/C'+Mxcvt.mx2mtAcc(null, root, "GrpHdr/SttlmInf/SttlmAcct", null);
    } else if ('INDA' == mtd) {
          acct = ''+Mxcvt.mx2mtAcc(null, root, "GrpHdr/SttlmInf/SttlmAcct", null);
    }
    stp.log(' acct ' + acct + ' - method - ' + mtd );
    if (acct){
       // stp.setData("TEXT/Choice_53ABD/F53B/PartyIdentifier", acct);
       stp.setData("f53a_PartyIdentifier", acct);
    }
          // Mxcvt.mx2mtParty('Choice_53ABD', root, "GrpHdr/SttlmInf/InstgRmbrsmntAgt", "GrpHdr/SttlmInf/InstgRmbrsmntAgtAcct", 'fin' );
  }
}

function ClrChanl(isMerge){
    // If "//RT" or "//FW" or "//TA" are present in different PartyIdentifier subfields of the same MT source message 
    // (for example in field 56a and 57a), then only the first occurrence is translated to the ClearingChannel element (if context for translation is met). 
	var clr;
	var b4 = msg.get("TEXT");
	var parties = ["Choice_56ACD", "Choice_57ABCD"];
	for (var i = 0; i < parties.length; i++) {
        var nd = stp.findNode(b4, parties[i] );
        if (!nd) continue;
        var s = '';
        var nm = ''+nd.get("@nm");
        var acd = nm.charAt(nm.length-1);
        if (nd.has('PartyIdentifier')) {
            s = ''+nd.get('PartyIdentifier')
        } else if (acd == 'C'){
            s = ''+nd.get(nm);
        }
        if (s && ( s.startsWith("//RT") || ('A' ==acd && s.startsWith("//FW") ) ) ) {
          clr = 'RTGS';
          stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtTpInf/ClrChanl", clr)
          if (nd.has(nm)) nd.remove(nm);
          break;
        }
	}
}
function SttlmTmIndctnDemerge(){
//  var DbtDtTm = stp.xml(root, "CdtTrfTxInf/SttlmTmIndctn/DbtDtTm","13C");
//  var CdtDtTm = stp.xml(root, "CdtTrfTxInf/SttlmTmIndctn/CdtDtTm","13C");
//  var CLSTm = stp.xml(root, "CdtTrfTxInf/SttlmTmReq/CLSTm","13C");
//  stp.log(' DbtDtTm ' + DbtDtTm + '  ' +  CdtDtTm + ' ' + CLSTm);
  var loop1 = [];
  if (stp.has(root, "CdtTrfTxInf/SttlmTmIndctn/DbtDtTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmIndctn/DbtDtTm",null);
  // stp.log(' DbtDtTm ' + dt + '  ' +  (new Date(dt) ).toMxString() );
      // var f13c = {Code: 'SNDTIME', TimeIndication:stp.fmt(dt.substring(11,16),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(20),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('SNDTIME', dt);
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmIndctn/CdtDtTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmIndctn/CdtDtTm",null);
      // var f13c = {Code: 'RNCTIME', TimeIndication:stp.fmt(dt.substring(11,16),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(20),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('RNCTIME', dt);
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmReq/CLSTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmReq/CLSTm",null);
      // var f13c = {Code: 'CLSTIME', TimeIndication:stp.fmt(dt.substring(0,5),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(9),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('CLSTIME', dt);
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmReq/TillTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmReq/TillTm",null);
      // var f13c = {Code: 'TILTIME', TimeIndication:stp.fmt(dt.substring(0,5),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(9),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('TILTIME', dt);
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmReq/FrTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmReq/FrTm",null);
      // var f13c = {Code: 'FROTIME', TimeIndication:stp.fmt(dt.substring(0,5),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(9),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('FROTIME', dt);
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmReq/RjctTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmReq/RjctTm",null);
      // var f13c = {Code: 'REJTIME', TimeIndication:stp.fmt(dt.substring(0,5),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(9),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('REJTIME', dt);
      loop1.push({'F13C':f13c})
  }
  stp.setData("TEXT/Loop1", loop1 );
//  stp.log(' f13c ok');
}
/**
Field 13C: Time Indication
TimeOffset encompasses Time, Sign and Offset. For ease of spreadsheet reading they have been kept together, but the parameters are passed as separate variables in the function.
The date for the target element is obtained from MT field 32A.
*/
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
    // 32A\Date TranslateTo CreditTransferTransactionInformation[1]\SettlementTimeIndication\DebitDateTime
    // 13C TranslateTo CreditTransferTransactionInformation[1]\SettlementTimeIndication\DebitDateTime
    // DbtDtTm
      stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/SttlmTmIndctn/DbtDtTm", dt+'T'+tm)
    } else if ('RNCTIME' == code) {
      stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/SttlmTmIndctn/CdtDtTm", dt+'T'+tm)
    } else if ('CLSTIME' == code) {
      stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/SttlmTmReq/CLSTm", dt+'T'+tm)
    } else if ('TILTIME' == code) {
      stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/SttlmTmReq/TillTm", dt+'T'+tm)
    } else if ('FROTIME' == code) {
      stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/SttlmTmReq/FrTm", dt+'T'+tm)
    } else if ('REJTIME' == code) {
      stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/SttlmTmReq/RjctTm", dt+'T'+tm)
    } else {
      stp.log(' tbd: ' + code + '  ' + item)
    }
  }
//  stp.log(' ----- 13c --- end ')
}

function ChrgsInf(isMerge){
  var b4 = msg.get("TEXT");
  var chgby = ''+stp.json(b4, 'F71A', null);  // BEN,OUR,SHA
//  stp.log('set chgby ' + chgby )
	switch (chgby) {
	  case 'BEN':
	    stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/ChrgBr", 'CRED')
        break;
	  case 'OUR':
	    stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/ChrgBr", 'DEBT')
        break;
      case 'SHA':
        stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/ChrgBr", 'SHAR')
  	  }
    if(chgby == 'OUR' && stp.has(b4, "F71G")){
      stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/ChrgsInf/Agt/FinInstnId/BICFI", stp.getReceiver() )
      stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/ChrgsInf/Amt", stp.toMxAmt(stp.json(msg, "TEXT/F71G/Amount", null)) )
      stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/ChrgsInf/Amt@Ccy", stp.json(msg, "TEXT/F71G/Currency", null) )
    } else if(chgby == 'BEN' || (chgby == 'SHA' && b4.has("Loop3"))){
      var loop = b4.get("Loop3");
//      stp.log(' ----- 71F --- ')
//      stp.log(loop)
      var chrgAgt = '';
        if(stp.has(b4, "Choice_52AD")){
          // chrgAgt = stp.json(msg, 'TEXT/Choice_52AD/*/IdentifierCode', null);
          var nd = stp.findNode(msg, 'TEXT/Choice_52AD');
          var bicfi = String(nd.get('IdentifierCode'));
          var nmAddr = String(nd.get('NameAndAddress'));
          if (bicfi) {
            chrgAgt = {'FinInstnId':{'BICFI': bicfi}};
          } else if (nmAddr) {
            var lines = nmAddr.split('\r\n');
            var nm = lines.shift();
            chrgAgt = {'FinInstnId':{'Nm': nm, 'PstlAdr':{'AdrLine': lines } } };
          } else {
            chrgAgt = {'FinInstnId':{'BICFI': 'NOTPROVIDED'}};
          }
          stp.log('chrgAgt: ' + chrgAgt + ' nmAddr ' + nmAddr );
        }else{
          // chrgAgt = stp.getSender()
          chrgAgt = {'FinInstnId':{'BICFI': stp.getSender() } };
        }
      var loopChrgs = [];
      for (var i = 0; i < loop.length(); i++) {
        var item = loop.get(i);
        var amt = stp.json(item, "F71F/Amount", null);
        var ccy = stp.json(item, "F71F/Currency", null)
        var chrgs = {"Amt":stp.toMxAmt(amt), "Amt@Ccy": ccy, "Agt": chrgAgt };
        loopChrgs.push(chrgs)
      }
      stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/ChrgsInf", loopChrgs )
    }
}

function ChrgsInfDemerge(){
  var chgby = ''+stp.xml(root, "CdtTrfTxInf/ChrgBr","");
  if (chgby == 'CRED'){
    stp.setData("TEXT/F71A", 'BEN');
  } else if (chgby == 'DEBT'){
    stp.setData("TEXT/F71A", 'OUR');
  } else if (chgby == 'SHAR' || chgby == 'SLEV'){
    stp.setData("TEXT/F71A", 'SHA');
  }
  var loop71f = []
  var f71g = 0;
  var f71ccy ='';//+stp.xml(root, "CdtTrfTxInf/IntrBkSttlmAmt/@Ccy","3!a");
  var infos = stp.findMulti(root, "CdtTrfTxInf/ChrgsInf");
  var tofi = ''+stp.xml(hdr, "To/FIId/FinInstnId/BICFI","BICT");
  var frfi = ''+stp.xml(hdr, "Fr/FIId/FinInstnId/BICFI","BICT");
      for (var i=0; i < infos.size(); i++) {
        var info = infos.get(i);
        var ccy = stp.xml(info, "Amt/@Ccy","3!a");
        if (f71ccy == '') f71ccy=ccy;
        var amt = ''+stp.xml(info, "Amt","15d");
        var fi = ''+stp.xml(info, "Agt/FinInstnId/BICFI","BICT");
        if (chgby == 'DEBT') {
          var amtX = ''+stp.xml(info, "Amt","");
          if (ccy != f71ccy || amtX.length > 15){
            stp.log('--- BAD ' + (ccy != f71ccy)  + '  ' +  amtX.length )
            // stp.info('T20039 CdtTrfTxInf/ChrgsInf:' + ccy + amtX );
          } else if (fi == tofi){
            f71g += Number(amtX);
          } else {
            stp.log('ignore 71g ' + ccy + ' ' + amtX + '   ' + f71ccy + ' ' + fi + ' - ' + tofi );
  //           f71g += Number(amtX);
          }
        } else {
          // need check frbic same as fi.
          loop71f.push({'F71F':{'Currency':ccy,'Amount': amt}})
        }
      }
      if (chgby == 'DEBT' && f71g > 0) {
          stp.setData("TEXT/F71G", {'Currency':f71ccy,'Amount':  stp.fmt(f71g,'15d') } );
      }
      // stp.setData("TEXT/F71G", {});
//      stp.log(' 71f ' + loop71f)
      stp.setData("TEXT/Loop3", loop71f);

}