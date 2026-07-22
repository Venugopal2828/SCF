// refer: /home/swift/mtmx_map.json
// mt2mx

function merge(){
  if ('COV' == ''+stp.json(msg, "B3/119", null)){
    if (g_swiftver >= '2025'){
    bizsvc='swift.cbprplus.cov.03';
    } else {
    bizsvc='swift.cbprplus.cov.02';
    }
  }
  var b4 = msg.get("TEXT");
  var now = new Date();
  var t = now.toMxString();
  stp.setData("/FICdtTrf/GrpHdr/CreDtTm", t);
  var mode = ''+stp.scenario(source);
  stp.setData("/FICdtTrf/CdtTrfTxInf/PmtId/TxId",b4.get('F20'));
  SttlmMtd(true);

  ClrChanl(true);
  SttlmTmIndctn(true);
  //
  if (stp.has(b4, "Choice_52AD") ) {
    Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/Dbtr", b4, 'Choice_52AD')
    Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/DbtrAcct", b4, 'Choice_52AD')
  } else {
    stp.setData("/FICdtTrf/CdtTrfTxInf/Dbtr/FinInstnId/BICFI", stp.getSender() )
  }
  Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/CdtrAgt", b4, 'Choice_57ABD')
  Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/CdtrAgtAcct", b4, 'Choice_57ABD')
  Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/Cdtr", b4, 'Choice_58AD')
  Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/CdtrAcct", b4, 'Choice_58AD')
  //
  Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/IntrmyAgt1", b4, 'Choice_56AD')
  Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/IntrmyAgt1Acct", b4, 'Choice_56AD')
  // IntrmyAgt1Acct

  var svcLvl = []
  if (stp.has(msg, "B3/111")){
    svcLvl.push({"Cd": 'G'+stp.json(msg,"B3/111", null) });
  }
  var lines = stp.strd(b4.get('F72'));
  var instg = 1;
  var inta = 1;
  if (stp.has(b4, 'Choice_56AD')){
    inta = 2;
  }
  var infoCdt = []
  var infoNxt = []
  var infoRmt = ''; // [];
  if (stp.getData('FIN53') != null){
    var info = ''+stp.getData('FIN53');
    info =info.replace(/[\{|\}|\"]/g,' ' ).replace(/[\s]+$/g,'');
    infoNxt.push({InstrInf:  info} );
  }

  for (var i = 0; i < lines.size(); i++) {
    var line = lines.get(i);
    var code = String(line.get('code'))  // ACC BNF INS INT PHON PHONBEN PHONIBK   TELE TELEBEN TELEIBK TSU
    var narr = String(line.get('narr'))
    var narrary = null;
    if (narr.length > 140) {
      narrary = stp.fmt(narr, '2*140x').split('\r\n');
    }
    switch (code) {
    case 'INTA':
	  // stp.setData("/FICdtTrf/CdtTrfTxInf/IntrmyAgt2/FinInstnId/BICFI", narr)
      if (narr.isBic()) {
	    stp.setData("/FICdtTrf/CdtTrfTxInf/IntrmyAgt"+inta+"/FinInstnId/BICFI", narr);
      } else {
	    stp.setData("/FICdtTrf/CdtTrfTxInf/IntrmyAgt"+inta+"/FinInstnId/Nm", stp.fmt(narr, '140x'));
	    stp.setData("/FICdtTrf/CdtTrfTxInf/IntrmyAgt"+inta+"/FinInstnId/PstlAdr/AdrLine", ['NOTPROVIDED']);
      }
      inta++;
      break;
    case 'SVCLVL':
	    // stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtTpInf/SvcLvl/Cd",  narr)
	    svcLvl.push({"Cd": narr });
	    break;
    case 'LOCINS':
	    stp.setData("/FICdtTrf/CdtTrfTxInf/PmtTpInf/LclInstrm/Prtry",  narr)
	    break;
    case 'CATPURP':
	    stp.setData("/FICdtTrf/CdtTrfTxInf/PmtTpInf/CtgyPurp/Prtry",  narr)
	    break;
    case 'PURP':
      if (stp.inExtCode( narr, 'ExternalPurpose1Code')) {
      stp.setData("/FICdtTrf/CdtTrfTxInf/Purp/Cd",  narr)
      } else {
      stp.setData("/FICdtTrf/CdtTrfTxInf/Purp/Prtry",  narr)
      }
	    break;
    case 'CLSTIME':
	    stp.setData("/FICdtTrf/CdtTrfTxInf/SttlmTmReq/CLSTm", narr)
	    break;
    case 'INS':
      if (narr.isBic()) {
	    stp.setData("/FICdtTrf/CdtTrfTxInf/PrvsInstgAgt"+instg+"/FinInstnId/BICFI", narr);
      } else {
	    stp.setData("/FICdtTrf/CdtTrfTxInf/PrvsInstgAgt"+instg+"/FinInstnId/Nm", stp.fmt(narr, '140x'));
	    stp.setData("/FICdtTrf/CdtTrfTxInf/PrvsInstgAgt"+instg+"/FinInstnId/PstlAdr/AdrLine", ['NOTPROVIDED']);
      }
      instg++;
      break;
    case 'PHONBEN':
      if (narrary != null) {
        infoCdt.push({Cd: 'PHOB', InstrInf: narrary[0]} );
        infoCdt.push({ InstrInf: narrary[1]} );
      } else {
        infoCdt.push({Cd: 'PHOB', InstrInf: narr} )
      }
      break;
    case 'TELEBEN':
      if (narrary != null) {
      infoCdt.push({Cd: 'TELB', InstrInf: narrary[0]} );
      infoCdt.push({ InstrInf: narrary[1]} );
      } else {
      infoCdt.push({Cd: 'TELB', InstrInf: narr} )
      }
      break;
    case 'ACC':
    case 'UDLC':
      if (narrary != null) {
      infoCdt.push({ InstrInf: narrary[0]} );
      infoCdt.push({ InstrInf: narrary[1]} );
      } else {
      infoCdt.push({ InstrInf: narr} )
      }
      //infoCdt.push({ InstrInf: '/UDLC/'+stp.fmt(narr, '134x')} )
      break;
    case 'REC':
    case 'PHON':
    case 'PHONIBK':
    case 'TELEIBK':
    case 'TELE':
      if (narr.length > 35) {
        var narrary6 = stp.fmt(narr, '6*35x').split('\r\n');
        for (var j = 0; j < narrary6.length; j++) {
          infoNxt.push({ InstrInf: narrary6[j] } )  //
        }
      } else {
        infoNxt.push( { InstrInf: narr} ); // Cd: 'PHOA',
      }
      break;
    case 'BNF':
    case 'TSU':
      infoRmt += '/'+code+'/'+narr;
      break;
    default:
      var s = '/'+code+'/'+narr;
      if (s.length > 35) {
        var s1 = stp.fmt(s, '6*35x')
        var ss = s1.split('\r\n');
        for (var j = 0; j < ss.length; j++) {
	        infoNxt.push({ InstrInf: ss[j] } )  //
        }
      } else {
	      infoNxt.push({ InstrInf: '/'+code+'/'+narr} )  //
      }
      // infoNxt.push({InstrInf: '/'+code+'/'+narr} ); // Cd: 'TELA',
      // infoRmt.push('/'+code+'/'+narr);  // cbpr not all repeat
      // infoRmt.concat('/', code, '/', narr)
      // stp.log(' t: ' + infoRmt + code + narr)
      break;
    }
  }
  stp.setData("/FICdtTrf/CdtTrfTxInf/InstrForCdtrAgt",  infoCdt)
  while (infoNxt.length > 6) {
    // var missAry = infoNxt.splice(6);
    infoNxt.pop();
	  // stp.info('T20068 miss: /FIToFICstmrCdtTrf/CdtTrfTxInf/InstrForCdtrAgt: ' + missAry.join() );
  }
  stp.setData("/FICdtTrf/CdtTrfTxInf/InstrForNxtAgt",  infoNxt)
  if (infoRmt) {
    infoRmt = stp.fmt(infoRmt, "140x");
    stp.setData("/FICdtTrf/CdtTrfTxInf/RmtInf/Ustrd",  infoRmt)
  }
  stp.setData("/FICdtTrf/CdtTrfTxInf/PmtTpInf/SvcLvl", svcLvl);
	 // stp.log(' t: ' + stp.json(msg, "B3/111", null) +'  -- '+ bizsvc)
  if (stp.has(b4, 'SeqB')){
    var seqB = b4.get('SeqB');
    Mxcvt.pty("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/Dbtr", seqB, 'Choice_50AFK')
    Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAcct", seqB, 'Choice_50AFK')
    if (stp.has(seqB, "Choice_52AD")) {
	  Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAgt", seqB, 'Choice_52AD')
      Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAgtAcct", seqB, 'Choice_52AD')
    } else if (stp.has(b4, "Choice_52AD")){
	  Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAgt", b4, 'Choice_52AD')
      Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAgtAcct", b4, 'Choice_52AD')
    }else {
	  stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAgt/FinInstnId/BICFI", stp.getSender());
    }

	Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/IntrmyAgt1", seqB, 'Choice_56ACD')
    Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/IntrmyAgt1Acct", seqB, 'Choice_56ACD')

    if (stp.has(seqB, "Choice_57ABCD")) {
	  Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAgt", seqB, 'Choice_57ABCD')
      Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAgtAcct", seqB, 'Choice_57ABCD')
    } else if (stp.has(b4, "Choice_58AD")) {
	  Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAgt", b4, 'Choice_58AD')
      Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAgtAcct", b4, 'Choice_58AD')
    } else {
	  stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAgt/FinInstnId/BICFI", stp.getReceiver());
      //
    }
    Mxcvt.pty("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/Cdtr", seqB, 'Choice_59AF')
    Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAcct", seqB, 'Choice_59AF')
    mergeF70(seqB);
    	// TEXT/SeqB/F33B/Currency
    // stp.setData("/FICdtTrf/CdtTrfTxInf/PmtTpInf/SvcLvl", svcLvl);
    var f33Amt = stp.json(seqB, 'F33B/Amount', null);
    var f33Ccy = stp.json(seqB, 'F33B/Currency', null);
    stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/InstdAmt", stp.toMxAmt( f33Amt) )
    stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/InstdAmt@Ccy", f33Ccy  )
  }
}

function demerge(){
  rule="fin.202.ESP";
  if (stp.has(root, 'CdtTrfTxInf/UndrlygCstmrCdtTrf')){
    rule="fin.202.COV.ESP";
//    stp.setData("B3/119", 'COV');
    Mxcvt.mx2mtParty("SeqB/Choice_50AFK", root, "CdtTrfTxInf/UndrlygCstmrCdtTrf/Dbtr", "CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAcct", "pty");
    Mxcvt.mx2mtParty("SeqB/Choice_52AD", root, "CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAgt", "CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAgtAcct", "fin");
    Mxcvt.mx2mtParty("SeqB/Choice_56ACD", root, "CdtTrfTxInf/UndrlygCstmrCdtTrf/IntrmyAgt1", "CdtTrfTxInf/UndrlygCstmrCdtTrf/IntrmyAgt1Acct", "fin");
    Mxcvt.mx2mtParty("SeqB/Choice_57ABCD", root, "CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAgt", "CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAgtAcct", "fin");
    Mxcvt.mx2mtParty("SeqB/Choice_59AF", root, "CdtTrfTxInf/UndrlygCstmrCdtTrf/Cdtr", "CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAcct", "pty");
    demergeF70();
  }
  // cal 13C
  SttlmTmIndctnDemerge();
  // party
  Mxcvt.mx2mtParty("Choice_52AD", root, "CdtTrfTxInf/Dbtr", "CdtTrfTxInf/DbtrAcct", "fin")
  Mxcvt.mx2mtParty("Choice_53ABD", root, "CdtTrfTxInf/DbtrAgt", "CdtTrfTxInf/DbtrAgtAcct", "fin")
  Mxcvt.mx2mtParty('Choice_57ABD', root, "CdtTrfTxInf/CdtrAgt", "CdtTrfTxInf/CdtrAgtAcct", 'fin')
  Mxcvt.mx2mtParty('Choice_58AD', root, "CdtTrfTxInf/Cdtr", "CdtTrfTxInf/CdtrAcct", 'fin')
  Mxcvt.mx2mtParty('Choice_56AD', root, "CdtTrfTxInf/IntrmyAgt1", "CdtTrfTxInf/IntrmyAgt1Acct", 'fin')
	//
	var f72="";
	var infos = stp.findMulti(root, "CdtTrfTxInf/InstrForCdtrAgt");
	for (var i=0; i < infos.size(); i++) {
	  var info = infos.get(i);
	  var cd = stp.xml(info, "Cd", null);
	  if (!cd || cd == ''){
	    cd = 'ACC'
	  }else if ('PHOB' == cd) {
	    cd = 'PHONBEN'
	  }else if ('TELB' == cd) {
	    cd = 'TELEBEN'
	  }
	  var s = stp.xml(info, "InstrInf", null)
	  f72 += '/'+cd+'/'+s+'\r\n';
	}
    infos = stp.findMulti(root, "CdtTrfTxInf/InstrForNxtAgt");
    for (var i=0; i < infos.size(); i++) {
      var info = infos.get(i);
      var cd = stp.xml(info, "Cd", null);
      if (!cd || cd == ''){
        cd = 'PHON'
      }
      var s = stp.xml(info, "InstrInf", null)
      f72 += '/'+cd+'/'+s+'\r\n';
    }
    infos = stp.findMulti(root, "CdtTrfTxInf/RmtInf/Ustrd");
    for (var i=0; i < infos.size(); i++) {
      var info = infos.get(i);
      var s = stp.xml(info, null, null)
      if (s.startsWith('/')){
        f72 += s+'\r\n';
      } else {
        f72 += '//'+s+'\r\n';
      }
      // stp.log('F72 -- ' +s)
    }
	// var f72 = stp.fmt( cd1 + cd2+cd3, "6*35x")
	stp.setData("TEXT/F72", stp.fmt(f72,'FMT72'));
	// stp.log('test');
	// stp.fmt( "YYMMDD")
// stp.fmt( "15d")
	// load schema from /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtjson/2020/fin.103.json
}

function SttlmMtd(isMerge){
	if (!isMerge) return;
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
  var ptyid = '';
  var b4 = msg.get("TEXT");
  if (stp.has(b4, "Choice_53ABD")) {
	  // Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/DbtrAgt", b4, 'Choice_53ABD')
	var nd = stp.findNode(b4, 'Choice_53ABD' );
	var nm = ''+nd.get("@nm");  // 56C
	if (stp.has(nd, "PartyIdentifier")) {
      ptyid =  String(stp.json(nd,"PartyIdentifier", null)) ;
      if (Mxcvt.isClrSysMmbId(ptyid)) {
        ptyid = '';
      }
	}
    if (ptyid.startsWith("/C/")) {
        cd = 'INGA'
    }
    if (nm == 'F53A'){
      var f53a = ''+stp.json(b4, 'Choice_53ABD/F53A/IdentifierCode', null);
      if (stp.has(b4, "Choice_54ABD/F54A")) {
      	var f54a = ''+stp.json(b4, 'Choice_54ABD/F54A/IdentifierCode', null);
       	if (f53a.substring(0, 8) == send_bic.substring(0, 8)  &&  f54a.substring(0, 8) == recv_bic.substring(0, 8)) {
        	  cd = 'INDA';
        	  ptyid = '';
       	} else {
          if ( f53a.substring(0, 6) == send_bic.substring(0, 6) && (ptyid != '') ){
          } else {
              ptyid = '';
          }
        }
      }else if (stp.has(b4, "Choice_54ABD")) {
      } else if (ptyid != '') {
          stp.setData("FIN53", '/FIN53/'+f53a);
      } else{
          if (f53a.substring(0, 6) == send_bic.substring(0, 6) || f53a.substring(0, 6) == recv_bic.substring(0, 6)) {
        	  cd = 'INDA';
        	  ptyid = '';
        	  stp.setData("FIN53", '/FIN53/'+f53a);
          }
      }
    } else {
      //stp.info('T20070 miss: TEXT/Choice_53ABD' + nd );
    }
	    // Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/DbtrAgtAcct", b4, 'Choice_53ABD')
  }else if (stp.has(b4, "Choice_54ABD")) {
	 // stp.info('T20070 miss: TEXT/Choice_54ABD ' +stp.findNode(b4, 'Choice_54ABD' ));
  }
  if (ptyid != '') {
    if ( ptyid.startsWith("/C/"))  cd = 'INGA';
    Mxcvt.acc("/FICdtTrf/GrpHdr/SttlmInf/SttlmAcct", b4, 'Choice_53ABD');
  }
  stp.setData("/FICdtTrf/GrpHdr/SttlmInf/SttlmMtd", cd);
	// The PartyIdentifier subfield of field 53B is translated to the SettlementAccount indicating the account (relationship)
	// between Sender and Receiver for settlement of the transaction.
	// Mxcvt.mx2mtParty("Choice_53ABD", root, "CdtTrfTxInf/DbtrAgt", "CdtTrfTxInf/DbtrAgtAcct", "fin")
	// Mxcvt.acc("/FICdtTrf/GrpHdr/SttlmInf/SttlmAcct", b4, 'Choice_53ABD')
	// Mxcvt.fin("/FICdtTrf/GrpHdr/SttlmInf/InstgRmbrsmntAgt", b4, 'Choice_53ABD')
	// Mxcvt.fin("/FICdtTrf/GrpHdr/SttlmInf/InstdRmbrsmntAgt", b4, 'Choice_54ABD')
    // stp.log(obj)
//	  if (stp.has(b4, "Choice_53ABD/F53A/IdentifierCode") || stp.has(b4, "Choice_53ABD/F53D/IdentifierCode")
//	    || stp.has(b4, "Choice_54ABD")) {
//		// cd = 'COVE';
//		// cov should use by 119:COV
//	  } else if (stp.has(b4, "Choice_53ABD/F53B/PartyIdentifier")) {
//		var s = String(stp.json(b4,"Choice_53ABD/F53B/PartyIdentifier", null) );
//		if (s.startsWith("/C/")) {
//		 cd = 'INGA'
//		}
//	  }
  return cd;
}

function ClrChanl(isMerge){
	// If "//RT" or "//FW" or "//TA" are present in different PartyIdentifier subfields of the same MT source message
	// (for example in field 56a, 57a and 58a), then only the first occurrence is translated to the ClearingChannel element (if context for translation is met).
	var clr;
	var b4 = msg.get("TEXT");
	var parties = ["Choice_56AD", "Choice_57ABD", "Choice_58AD"];
	for (var i = 0; i < parties.length; i++) {
        var nd = stp.findNode(b4, parties[i] );
        var obj = stp.json(nd,"PartyIdentifier", null);
        var s = ''+obj;
        if (s && ( s.startsWith("//RT") || s.startsWith("//FW") ) ) {
          clr = 'RTGS';
          stp.setData("/FICdtTrf/CdtTrfTxInf/PmtTpInf/ClrChanl", clr)
          break;
        }
	}
}

/**
Field 13C: Time Indication
TimeOffset encompasses Time, Sign and Offset. For ease of spreadsheet reading they have been kept together, but the parameters are passed as separate variables in the function.
The date for the target element is obtained from MT field 32A.
*/
function SttlmTmIndctnDemerge(){
  var DbtDtTm = stp.xml(root, "CdtTrfTxInf/SttlmTmIndctn/DbtDtTm","13C");
  var CdtDtTm = stp.xml(root, "CdtTrfTxInf/SttlmTmIndctn/CdtDtTm","13C");
  var CLSTm = stp.xml(root, "CdtTrfTxInf/SttlmTmReq/CLSTm","13C");
  // stp.log(' DbtDtTm ' + DbtDtTm + '  ' +  CdtDtTm + ' ' + CLSTm);
  var loop1 = [];
  if (stp.has(root, "CdtTrfTxInf/SttlmTmIndctn/DbtDtTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmIndctn/DbtDtTm",null);
      var f13c = {Code: 'SNDTIME', TimeIndication:stp.fmt(dt.substring(11,16),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(20),'HHMM') }
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmIndctn/CdtDtTm")) {
  //2015-09-06T15:15:00+08:00
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmIndctn/CdtDtTm",null);
      var f13c = {Code: 'RNCTIME', TimeIndication:stp.fmt(dt.substring(11,16),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(20),'HHMM') }
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmReq/CLSTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmReq/CLSTm",null);
      // 19:15:00+08:00
      var f13c = {Code: 'CLSTIME', TimeIndication:stp.fmt(dt.substring(0,5),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(9),'HHMM') }
      loop1.push({'F13C':f13c})
  }
  stp.setData("TEXT/Loop1", loop1 );
}
function SttlmTmIndctn(isMerge){
  var b4 = msg.get("TEXT");
  if (!b4.has("Loop1")) return;
  var loop = b4.get("Loop1");
  // stp.log(' ----- 13c --- ')
  // stp.log(loop)
  var dt = Mxcvt.toISODate(String(stp.json(b4,"F32A/Date", null)));
  // 2020-04-15T02:37:09+00:00
  for (var i = 0; i < loop.length(); i++) {
    var item = loop.get(i);
    // stp.log(item, true)
    var code = '' + stp.json(item, 'F13C/Code', null);
    var tm = ''+stp.json(item,'F13C/TimeIndication', null)+stp.json(item,'F13C/Sign', null)+ stp.json(item,'F13C/TimeOffset', null)
    tm = Mxcvt.toISOTime(String(tm))
    // stp.log(' ' + code + ' ' + dt + ' ' + tm)
    if ('SNDTIME' == code) {
    // 32A\Date TranslateTo CreditTransferTransactionInformation[1]\SettlementTimeIndication\DebitDateTime
    // 13C TranslateTo CreditTransferTransactionInformation[1]\SettlementTimeIndication\DebitDateTime
    // DbtDtTm
      stp.setData("/FICdtTrf/CdtTrfTxInf/SttlmTmIndctn/DbtDtTm", dt+'T'+tm)
    } else if ('RNCTIME' == code) {
      stp.setData("/FICdtTrf/CdtTrfTxInf/SttlmTmIndctn/CdtDtTm", dt+'T'+tm)
    } else if ('CLSTIME' == code) {
      stp.setData("/FICdtTrf/CdtTrfTxInf/SttlmTmReq/CLSTm", dt+'T'+tm)
    } else if ('TILTIME' == code) {
      stp.setData("/FICdtTrf/CdtTrfTxInf/SttlmTmReq/TillTm", dt+'T'+tm)
    } else if ('FROTIME' == code) {
      stp.setData("/FICdtTrf/CdtTrfTxInf/SttlmTmReq/FrTm", dt+'T'+tm)
    } else if ('REJTIME' == code) {
      stp.setData("/FICdtTrf/CdtTrfTxInf/SttlmTmReq/RjctTm", dt+'T'+tm)
    } else {
      stp.log(' tbd: ' + code + '  ' + item)
    }
  }
  // stp.log(' ----- 13c --- end ')
}
// TS40: The use of a CLS pay-in time indication in field 72 is widespread.
// CLSTIME in field 72 is translated on condition CLSTIME is not present in field 13C.
// For the MX_To_MT direction, translation is only foreseen towards 13C.  
function SttlmTmReq(){
}


function demergeF70(){
	var f72="";
    var infos = stp.findMulti(root, "CdtTrfTxInf/UndrlygCstmrCdtTrf/InstrForCdtrAgt");
    for (var i=0; i < infos.size(); i++) {
      var info = infos.get(i);
      var cd = stp.xml(info, "Cd", null);
      var s = stp.xml(info, "InstrInf", null)
      if (!cd || cd == ''){
        cd = 'ACC'
      } else if ('TELB' == cd){
        //loop23e.push({'F23E':{'InstructionCode':cd, 'AdditionalInformation':s}})
        // continue;
      }
      f72 += '/'+cd+'/'+s+'\r\n';
    }
    infos = stp.findMulti(root, "CdtTrfTxInf/UndrlygCstmrCdtTrf/InstrForNxtAgt");
    for (var i=0; i < infos.size(); i++) {
      var info = infos.get(i);
      var cd = stp.xml(info, "Cd", null);
      if (!cd || cd == ''){
        cd = 'PHON'
      }
      var s = stp.xml(info, "InstrInf", null)
      f72 += '/'+cd+'/'+s+'\r\n';
    }
	f72 = stp.fmt(f72, "6*35x")
	stp.setData("TEXT/SeqB/F72", f72);
    var f70='';
    infos = stp.findMulti(root, "CdtTrfTxInf/UndrlygCstmrCdtTrf/RmtInf/Ustrd");
    for (var i=0; i < infos.size(); i++) {
      var info = infos.get(i);
      var s = stp.xml(info, null, null)
      if (s.startsWith('/')){
        f70 += s+'\r\n';
      } else {
        f70 += s+'\r\n';
        // f70 += '//'+s+'\r\n';
      }
    }
    var st = stp.xml_info(root, "CdtTrfTxInf/UndrlygCstmrCdtTrf/RmtInf/Strd", 'notagname');
    if (st.startsWith('/') ) {
      f70 += st +'\r\n';
    }
    // stp.log(' Strd: ' + st)
    //
    var e2eId = ''+stp.xml(root, "CdtTrfTxInf/UndrlygCstmrCdtTrf/PmtId/EndToEndId", "35x");
    if (e2eId) {
    f70 += '/ROC/'+e2eId;
    // stp.log('e2e: [' +  e2eId + ']');
    }

    stp.setData("TEXT/SeqB/F70", stp.fmt(f70, "4*35x"));
}

function mergeF70(seqB){
  if (seqB.has('F70')){
    var uri = '';
    var f70 = ''+seqB.get('F70');
    var lines70 = stp.strd(f70);
    for (var i = 0; i < lines70.size(); i++) {
	  var line = lines70.get(i);
      var code = String(line.get('code'))  // ACC INS INT
      var narr = String(line.get('narr'))
      uri += '/'+code + '/'+narr;
    }
    if (lines70.size() == 0 && f70 != ''){
      uri = f70.replace(/\r/g,'');
      if (uri.length > 140) {
        uri = uri.replace(/\n/g,'');
      }
    }
  	stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/RmtInf/Ustrd", stp.fmt(uri, "140x") );
  }

  var infoCdtAgt = []
	var infoNxtAgt = [];
	var lines = stp.strd(seqB.get('F72'));
	var instg = 1;
	var inta = 1;
	if (stp.has(seqB, 'Choice_56ACD')){
	  inta = 2;
	}
  // stp.log('F72: 0 '+ lines.size() )
  for (var i = 0; i < lines.size(); i++) {
    var line = lines.get(i);
    var code = String(line.get('code'))  // ACC INS INT
    var narr = String(line.get('narr'));
    var narrary = null;
    if (narr.length > 140) {
      narrary = stp.fmt(narr, '2*140x').split('\r\n');
    }
    switch (code) {
    case 'INS':
      if (narr.isBic()) {
	    stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/PrvsInstgAgt"+instg+"/FinInstnId/BICFI", narr);
      } else {
	    stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/PrvsInstgAgt"+instg+"/FinInstnId/Nm", stp.fmt(narr, '140x'));
	    stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/PrvsInstgAgt"+instg+"/FinInstnId/PstlAdr/AdrLine", ['NOTPROVIDED']);
      }
	    instg++;
      break;
    case 'INTA':
      if (narr.isBic()) {
	    stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/IntrmyAgt"+inta+"/FinInstnId/BICFI", narr);
      } else {
	    stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/IntrmyAgt"+inta+"/FinInstnId/Nm", stp.fmt(narr, '140x'));
	    stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/IntrmyAgt"+inta+"/FinInstnId/PstlAdr/AdrLine", ['NOTPROVIDED']);
      }
	    inta++;
      break;
    case 'ACC':
      //infoCdtAgt.push({InstrInf: narr} )  // Cd: code,
      if (narrary != null) {
        infoCdtAgt.push({ InstrInf: narrary[0]} );
        infoCdtAgt.push({ InstrInf: narrary[1]} );
      } else {
        infoCdtAgt.push({ InstrInf: narr} )
      }
      break;
    case 'INT':
      //infoNxtAgt.push({ InstrInf: narr} )  // Cd: code,
      if (narr.length > 35) {
        var narrary6 = stp.fmt(narr, '6*35x').split('\r\n');
        for (var j = 0; j < narrary6.length; j++) {
          infoNxtAgt.push({ InstrInf: narrary6[j] } )  //
        }
      } else {
        infoNxtAgt.push( { InstrInf: narr} ); // Cd: 'PHOA',
      }
      break;
    default:
      var s = '/'+code+'/'+narr;
      if (s.length > 35) {
        var s1 = stp.fmt(s, '6*35x')
        var ss = s1.split('\r\n');
        for (var j = 0; j < ss.length; j++) {
	        infoNxtAgt.push({ InstrInf: ss[j] } )  //
	      }
	    } else {
	      infoNxtAgt.push({ InstrInf: '/'+code+'/'+narr} )  //
	    }
      break;
    }
  }
  stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/InstrForCdtrAgt",  infoCdtAgt)
  stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/InstrForNxtAgt",  infoNxtAgt)
}