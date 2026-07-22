// refer: /home/swift/mtmx_map.json
// mt2mx

function merge(){
  if ('COV' == ''+stp.json(msg, "B3/119", null)){
    bizsvc='swift.cbprplus.cov.02';
  }
  var mode = ''+stp.scenario(source);
  if (mode == 'COVE') {
    bizsvc='swift.cbprplus.adv.02';
  }
  // stp.log(mode)
  var mt = '' + stp.json(msg, '/B2/MT', null);
  var orgn_mx = '';
  if ('200' === mt) {
    stp.setData("/FICdtTrf/CdtTrfTxInf/PmtId/EndToEndId", 'NOTPROVIDED');
    stp.setData("/FICdtTrf/CdtTrfTxInf/Cdtr/FinInstnId/BICFI", stp.getReceiver() )
  }

  var b4 = msg.get("TEXT");
  var now = new Date();
  var t = now.toMxString();
  stp.setData("/FICdtTrf/GrpHdr/CreDtTm", t);
  stp.setData("/FICdtTrf/GrpHdr/MsgId",b4.get('F20'));
  stp.setData("/FICdtTrf/CdtTrfTxInf/PmtId/TxId",b4.get('F20'));
  if ('COVE' == mode) {
    stp.setData("/FICdtTrf/GrpHdr/SttlmInf/SttlmMtd", 'COVE');
    Mxcvt.fin("/FICdtTrf/GrpHdr/SttlmInf/InstgRmbrsmntAgt", b4, 'Choice_53ABD')
    Mxcvt.acc("/FICdtTrf/GrpHdr/SttlmInf/InstgRmbrsmntAgtAcct", b4, 'Choice_53ABD')
    Mxcvt.fin("/FICdtTrf/GrpHdr/SttlmInf/InstdRmbrsmntAgt", b4, 'Choice_54ABD')
    Mxcvt.acc("/FICdtTrf/GrpHdr/SttlmInf/InstdRmbrsmntAgtAcct", b4, 'Choice_54ABD')
  } else {
    SttlmMtd(true);
  }

  ClrChanl(true);
  SttlmTmIndctn(true);
  //
  if (stp.has(b4, "Choice_52AD") ) {
    Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/Dbtr", msg, 'TEXT/Choice_52AD')
    Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/DbtrAcct", msg, 'TEXT/Choice_52AD')
  } else {
    stp.setData("/FICdtTrf/CdtTrfTxInf/Dbtr/FinInstnId/BICFI", stp.getSender() )
  }
  Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/CdtrAgt", b4, 'Choice_57ABD')
  Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/CdtrAgtAcct", b4, 'Choice_57ABD')
  Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/Cdtr", msg, 'TEXT/Choice_58AD')
  Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/CdtrAcct", msg, 'TEXT/Choice_58AD')
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
    infoNxt.push({InstrInf: info.replace(/[\{|\}|\"]/g,' ' ).replace(/[\s]+$/g,'') } );
  }
  for (var i = 0; i < lines.size(); i++) {
    var line = lines.get(i);
    var code = String(line.get('code'))  // ACC BNF INS INT PHON PHONBEN PHONIBK   TELE TELEBEN TELEIBK TSU
    var narr = String(line.get('narr'));
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
      stp.setData("/FICdtTrf/CdtTrfTxInf/Purp",  narr)
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
//      stp.setData("/FICdtTrf/CdtTrfTxInf/PrvsInstgAgt1/FinInstnId/BICFI", stp.getSender() )  /FinInstnId/Nm
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
      // infoCdt.push({ InstrInf: '/UDLC/'+stp.fmt(narr, '134x')} )
      break;
    // case 'REC':
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
      // infoNxt.push({InstrInf: stp.fmt(narr, '140x')} ); // Cd: 'TELA',
      // break;
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
	if (infoNxt.length > 6) {
	  var missAry = infoNxt.splice(6);
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
    Mxcvt.pty("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/Dbtr", b4, 'SeqB/Choice_50AFK')
    Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAcct", b4, 'SeqB/Choice_50AFK')
    Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAgt", b4, 'SeqB/Choice_52AD')
    Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/DbtrAgtAcct", b4, 'SeqB/Choice_52AD')

    Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/IntrmyAgt1", b4, 'SeqB/Choice_56ACD')
    Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/IntrmyAgt1Acct", b4, 'SeqB/Choice_56ACD')

    Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAgt", b4, 'SeqB/Choice_57ABCD')
    Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAgtAcct", b4, 'SeqB/Choice_57ABCD')
    Mxcvt.pty("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/Cdtr", b4, 'SeqB/Choice_59AF')
    Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/CdtrAcct", b4, 'SeqB/Choice_59AF')
      mergeF70(seqB);
      // TEXT/SeqB/F33B/Currency
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
    if (stp.has(root, 'CdtTrfTxInf/UndrlygCstmrCdtTrf/InstdAmt')){
    var f33Amt = ''+stp.xml(root, "CdtTrfTxInf/UndrlygCstmrCdtTrf/InstdAmt");
    var f33Ccy = ''+stp.xml(root, 'CdtTrfTxInf/UndrlygCstmrCdtTrf/InstdAmt/@Ccy');
    stp.setData("TEXT/SeqB/F33B/Amount", f33Amt )
    stp.setData("TEXT/SeqB/F33B/Currency", f33Ccy  )
    }
  }
  // cal 13C
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
    var sls = stp.findMulti(root, "CdtTrfTxInf/PmtTpInf/SvcLvl");
    for (var i=0; i < sls.size(); i++) {
      var info = sls.get(i);
      var cd = ''+stp.xml(info, "Cd", null);
      var s = ''+stp.xml(info, "Prtry", null);
      if (/^G00[0-9]$/.test(cd)){
        stp.setData("B3/111", cd.substring(1));
      } else if (cd != '') {
        f72 += '/SVCLVL/'+cd+'\r\n';
      } else if (s != '') {
        f72 += '/SVCLVL/'+s+'\r\n';
      }
    }

  var lpty = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/LclInstrm/Cd",null);
  if (lpty == ''){
    lpty = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/LclInstrm/Prtry", null);
  }
  if (lpty == '') {
  } else {
    if ('CRED|CRTS|SPAY|SPRI|SSTD|'.indexOf(lpty) < 0 ){
    f72 += '/LOCINS/'+lpty+'\r\n';
    }
    // var lcd = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/LclInstrm/Cd","4c");
  }
  var cd = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/CtgyPurp/Cd","4c");
  if (cd == ''){
    cd = ''+stp.xml(root, "CdtTrfTxInf/PmtTpInf/CtgyPurp/Prtry",null);
  }
  if ('INTC CORT'.indexOf(cd) >= 0 ){
  } else if (cd != ''){
    f72 += '/CATPURP/'+cd+'\r\n';
  }

  // party
  Mxcvt.mx2mtParty("Choice_52AD", root, "CdtTrfTxInf/Dbtr", "CdtTrfTxInf/DbtrAcct", "fin")
  // Mxcvt.mx2mtParty("Choice_53ABD", root, "CdtTrfTxInf/DbtrAgt", "CdtTrfTxInf/DbtrAgtAcct", "fin")
  Mxcvt.mx2mtParty('Choice_57ABD', root, "CdtTrfTxInf/CdtrAgt", "CdtTrfTxInf/CdtrAgtAcct", 'fin.clr')
  Mxcvt.mx2mtParty('Choice_58AD', root, "CdtTrfTxInf/Cdtr", "CdtTrfTxInf/CdtrAcct", 'fin.clr')
  Mxcvt.mx2mtParty('Choice_56AD', root, "CdtTrfTxInf/IntrmyAgt1", "CdtTrfTxInf/IntrmyAgt1Acct", 'fin.clr')
  //

  var infos = stp.findMulti(root, "CdtTrfTxInf/InstrForCdtrAgt");
  for (var i=0; i < infos.size(); i++) {
    var info = infos.get(i);
    var cd = stp.xml(info, "Cd", null);
    var s = stp.xml(info, "InstrInf", null)
    if (!cd || cd == ''){
      if (/^\/[A-Z]{0,8}\/.{0,32}$/.test(s)) {
        f72 += s+'\r\n';
      } else if (f72 == '') {
        f72 += '/ACC/'+s+'\r\n';
      } else {
        f72 += '//'+s+'\r\n';
      }
    }else if ('PHOB' == cd) {
      cd = 'PHONBEN'
      f72 += '/'+cd+'/'+s+'\r\n';
    }else if ('TELB' == cd) {
      cd = 'TELEBEN'
      f72 += '/'+cd+'/'+s+'\r\n';
    } else{
      f72 += '/'+cd+'/'+s+'\r\n';
    }
  }
  //add by boc (CdtTrfTxInf/Purp to 72) s
  if (stp.has(root, 'CdtTrfTxInf/Purp')) {
    var purp = ''+stp.xml(root, "CdtTrfTxInf/Purp/Cd", "35x") + stp.xml(root, "CdtTrfTxInf/Purp/Prtry", "35x");
    if (purp != '') {
      f72 += '/PURP/'+purp +'\r\n';
    }
  }
  //add by boc (CdtTrfTxInf/Purp to 72) e
  infos = stp.findMulti(root, "CdtTrfTxInf/InstrForNxtAgt");
  for (var i=0; i < infos.size(); i++) {
    var info = infos.get(i);
    var cd = ''+stp.xml(info, "Cd", null);
    var s = ''+stp.xml(info, "InstrInf", null)
    if (s.startsWith('/FIN53/')){
      var mtd = ''+stp.xml(root, "GrpHdr/SttlmInf/SttlmMtd",null);
      var v53 = s.substring(7);
      if (v53.isBic() && (mtd == 'INGA' || mtd == 'INDA') ) {
        if (stp.getData("f53a_PartyIdentifier") != null ) {
          stp.setData("TEXT/Choice_53ABD/F53A/PartyIdentifier", stp.getData("f53a_PartyIdentifier"));
          stp.setData("f53a_PartyIdentifier", null);
        }
        stp.setData("TEXT/Choice_53ABD/F53A/IdentifierCode", s.substring(7));
        continue;
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
        f72 += '//'+s+'\r\n';
      }
    } else {
      f72 += '/'+cd+'/'+s+'\r\n';
    }
  }
  //add by boc (DebtorAgent to 72) s
  if (stp.has(root, "CdtTrfTxInf/DbtrAgt") ) {
    f72 += Mxcvt.mx2mtUltPtyNoCnty(root, "CdtTrfTxInf/DbtrAgt/FinInstnId", "INS") + '\r\n';
  }
  //add by boc (DebtorAgent to 72) e

//  var ins = ''+stp.xml(root, "CdtTrfTxInf/PrvsInstgAgt1/FinInstnId/BICFI","35x");
//  if (ins) {
//    f72 += '/INS/'+ins+'\r\n';
//  }
//  ins = ''+stp.xml(root, "CdtTrfTxInf/PrvsInstgAgt2/FinInstnId/BICFI","35x");
//  if (ins) {
//    f72 += '/INS/'+ins+'\r\n';
//  }
//  ins = ''+stp.xml(root, "CdtTrfTxInf/PrvsInstgAgt3/FinInstnId/BICFI","35x");
//  if (ins) {
//    f72 += '/INS/'+ins+'\r\n';
//  }
  if (stp.has(root, "CdtTrfTxInf/PrvsInstgAgt1") ) {
    f72 += Mxcvt.mx2mtUltPtyNoCnty(root, "CdtTrfTxInf/PrvsInstgAgt1/FinInstnId", "INS") + '\r\n';
  }
  if (stp.has(root, "CdtTrfTxInf/PrvsInstgAgt2") ) {
    f72 += Mxcvt.mx2mtUltPtyNoCnty(root, "CdtTrfTxInf/PrvsInstgAgt2/FinInstnId", "INS") + '\r\n';
  }
  if (stp.has(root, "CdtTrfTxInf/PrvsInstgAgt3") ) {
    f72 += Mxcvt.mx2mtUltPtyNoCnty(root, "CdtTrfTxInf/PrvsInstgAgt3/FinInstnId", "INS") + '\r\n';
  }
//  infos = stp.findMulti(root, "CdtTrfTxInf/RmtInf/Ustrd");
//  for (var i=0; i < infos.size(); i++) {
//    var info = infos.get(i);
//    var s = ''+stp.xml(info, null, null);
//    if (/^\/[A-Z]{0,8}\/.{0,32}$/.test(s)) {
//      if (f72 == '' && s.charAt(1) == '/'){
//        f72 += '/BNF/'+s.substring(2)+'\r\n';
//      } else {
//        f72 += s+'\r\n';
//      }
//    } else {
//      if (f72 == ''){
//        f72 += '/BNF/'+s+'\r\n';
//      } else {
//        f72 += '//'+s+'\r\n';
//      }
//    }
//    // stp.log('F72 -- ' +s)
//  }
  var rmtInfUstrd =stp.xml(root, "CdtTrfTxInf/RmtInf/Ustrd",null);
  var rmtInf = [];
  var idx =0;
  if (rmtInfUstrd !='') {
  	var bnfIdx = rmtInfUstrd.indexOf('/BNF/');

  	if (bnfIdx == 0) {
  		var tsuIdx = rmtInfUstrd.indexOf('/TSU/');

  		if (tsuIdx > 0) {
  			idx++;
  			var _obj = {'code':'/BNF/','Info':''};
  			_obj.Info = rmtInfUstrd.substring(bnfIdx+5,tsuIdx);
  			rmtInf.push(_obj);
  			rmtInfUstrd = rmtInfUstrd.substring(tsuIdx);


  		} else {
  			idx++;
  			var _obj = {'code':'/BNF/','Info':''};
  			_obj.Info = rmtInfUstrd.substring(bnfIdx+5);
  			rmtInf.push(_obj);
  			rmtInfUstrd = "";
  		}
  	}
  	var tsuIdx = rmtInfUstrd.indexOf('/TSU/');

  	if (tsuIdx == 0) {
  		var bnfIdx = rmtInfUstrd.indexOf('/BNF/');
  		if (bnfIdx > 0) {
  			idx++;
  			var _obj = {'code':'/TSU/','Info':''};
  			_obj.Info = rmtInfUstrd.substring(tsuIdx+5,bnfIdx);
  			rmtInf.push(_obj);
  			rmtInfUstrd = rmtInfUstrd.substring(bnfIdx+5);
  		} else {
  			idx++;
  			var _obj = {'code':'/TSU/','Info':''};
  			_obj.Info = rmtInfUstrd.substring(tsuIdx+5);
  			rmtInf.push(_obj);
  			rmtInfUstrd = "";
  		}
  	}
  	var bnfFlg = false;
  	if (rmtInfUstrd!='') {
  		if (idx > 0) {
  			for (var j=0;j<rmtInf.length;j++) {
  				if(rmtInf[j].code == '/BNF/'){
  					rmtInf[j].Info = rmtInf[j].Info+" "+rmtInfUstrd;
  					bnfFlg = true;
  				}
  			}

  		} else {
  			if (!bnfFlg){
		  		var _obj = {'code':'/BNF/','Info':''};
		  			_obj.Info = rmtInfUstrd;
		  			rmtInf.push(_obj);
		  	}
  		}
  	}
  	if (rmtInf.length > 0) {
  		for (var j=0;j<rmtInf.length;j++) {
  			f72 += rmtInf[j].code+rmtInf[j].Info+'\r\n';
			}
  	}
  }
  //add by boc (CdtTrfTxInf/RmtInf/Ustrd to 72) e
  // var f72 = stp.fmt( cd1 + cd2+cd3, "6*35x")
  stp.setData("TEXT/F72", stp.fmt(f72,'FMT72') );
  // stp.log('test');
  // stp.fmt( "YYMMDD")
// stp.fmt( "15d")
  // load schema from /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtjson/2020/fin.103.json
  // reformat_class='test.cs.esp.swift.mx.SzbaMx2MtReformater';
  if (stp.getData("f53a_PartyIdentifier") != null ) {
    stp.setData("TEXT/Choice_53ABD/F53B/PartyIdentifier", stp.getData("f53a_PartyIdentifier"));
    // stp.setData("f53a_PartyIdentifier", acct);
    stp.setData("f53a_PartyIdentifier", null);
  }
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
	var has53a = stp.has(b4, "Choice_53ABD");
	var has54a = stp.has(b4, "Choice_54ABD");
  if (has53a&&has54a) {
    var nd = stp.findNode(b4, 'Choice_53ABD' );
    if (stp.has(nd, "PartyIdentifier")) {
      ptyid =  String(stp.json(nd,"PartyIdentifier", null)) ;
      if (Mxcvt.isClrSysMmbId(ptyid)) {
        ptyid = '';
      }
    }
    if (stp.has(b4, "Choice_53ABD/F53A")) {
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
      } else {
	        if ( f53a.substring(0, 6) == send_bic.substring(0, 6) && (ptyid != '') ){
          } else {
            ptyid = '';
          }
      }
    }
    // stp.info('T20068 miss: TEXT/Choice_53ABD' + nd );
    // stp.info('T20068 miss: TEXT/Choice_54ABD' + stp.findNode(b4, 'Choice_54ABD' ) );
  } else if (has53a) {
    var nd = stp.findNode(b4, 'Choice_53ABD' );
    if (stp.has(nd, "PartyIdentifier")) {
      ptyid =  String(stp.json(nd,"PartyIdentifier", null)) ;
      if (Mxcvt.isClrSysMmbId(ptyid)) {
        ptyid = '';
      }
    }
    if (stp.has(b4, "Choice_53ABD/F53A")) {
	    var f53a = ''+stp.json(b4, 'Choice_53ABD/F53A/IdentifierCode', null);
      if (ptyid != '') {
        stp.setData("FIN53", '/FIN53/'+f53a);
      }else{
	      if (f53a.substring(0, 6) == send_bic.substring(0, 6) || f53a.substring(0, 6) == recv_bic.substring(0, 6)) {
	        cd = 'INDA';
	        ptyid = '';
	        // stp.info('T20068 miss: TEXT/Choice_53ABD' + nd );
	        stp.setData("FIN53", '/FIN53/'+f53a);
        }
      }
    } else {
      // stp.info('T20070 miss: TEXT/Choice_53ABD' + nd );
    }
  } else if (has54a) {
    // stp.info('T20068 miss: TEXT/Choice_54ABD' + stp.findNode(b4, 'Choice_54ABD' ) );
  } else {
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
    // stp.log(' acct ' + acct + ' - method - ' + mtd );
    if (acct){
       // stp.setData("TEXT/Choice_53ABD/F53B/PartyIdentifier", acct);
       stp.setData("f53a_PartyIdentifier", acct);
    }
          // Mxcvt.mx2mtParty('Choice_53ABD', root, "GrpHdr/SttlmInf/InstgRmbrsmntAgt", "GrpHdr/SttlmInf/InstgRmbrsmntAgtAcct", 'fin' );
  }
}
function ClrChanl(isMerge){
  // If "//RT" or "//FW" or "//TA" are present in different PartyIdentifier subfields of the same MT source message
  // (for example in field 56a, 57a and 58a), then only the first occurrence is translated to the ClearingChannel element (if context for translation is met).
  var clr;
  var b4 = msg.get("TEXT");
  var parties = ["Choice_56AD", "Choice_57ABD", "Choice_58AD"];
  for (var i = 0; i < parties.length; i++) {
        var nd = stp.findNode(b4, parties[i] );
        if (!nd) continue;
        var acd = ''+nd.get("@nm");
        acd = acd.charAt(acd.length-1);
        var obj = stp.json(nd,"PartyIdentifier", null);
        var s = ''+obj;
        if (s && ( s.startsWith("//RT") || ('A' == acd && s.startsWith("//FW") ) ) ) {
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
//      var f13c = {Code: 'SNDTIME', TimeIndication:stp.fmt(dt.substring(11,16),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(20),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('SNDTIME', dt);
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmIndctn/CdtDtTm")) {
  //2015-09-06T15:15:00+08:00
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmIndctn/CdtDtTm",null);
//      var f13c = {Code: 'RNCTIME', TimeIndication:stp.fmt(dt.substring(11,16),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(20),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('RNCTIME', dt);
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmReq/CLSTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmReq/CLSTm",null);
      // 19:15:00+08:00
//      var f13c = {Code: 'CLSTIME', TimeIndication:stp.fmt(dt.substring(0,5),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(9),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('CLSTIME', dt);
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmReq/TillTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmReq/TillTm",null);
      // 19:15:00+08:00
//      var f13c = {Code: 'TILTIME', TimeIndication:stp.fmt(dt.substring(0,5),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(9),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('TILTIME', dt);
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmReq/FrTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmReq/FrTm",null);
      // 19:15:00+08:00
//      var f13c = {Code: 'FROTIME', TimeIndication:stp.fmt(dt.substring(0,5),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(9),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('FROTIME', dt);
      loop1.push({'F13C':f13c})
  }
  if (stp.has(root, "CdtTrfTxInf/SttlmTmReq/RjctTm")) {
      var dt = ''+stp.xml(root, "CdtTrfTxInf/SttlmTmReq/RjctTm",null);
      // 19:15:00+08:00
//      var f13c = {Code: 'REJTIME', TimeIndication:stp.fmt(dt.substring(0,5),'HHMM'),Sign:'+',TimeOffset: stp.fmt(dt.substring(9),'HHMM') }
      var f13c = Mxcvt.mx2mt13cd('REJTIME', dt);
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
      var s = stp.xml(info, "InstrInf", null)
      if (!cd || cd == ''){
        if (/^\/[A-Z]{0,8}\/.{0,32}$/.test(s)) {
          f72 += ' '+s;
        } else if (f72 == '') {
          f72 += '/PHON/'+s;
        } else {
          f72 += ' '+s;
        }
        // cd = 'PHON'
      } else {
        f72 += '/'+cd+'/'+s+'\r\n';
      }
    }
  f72 = stp.fmt(f72, "FMT72")
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
    stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/RmtInf/Ustrd",  ''+seqB.get('F70'));
  }

  var infoCdtAgt = []
  var infoNxtAgt = [];
  var lines = stp.strd(seqB.get('F72'));
    // stp.log('F72: 0 '+ lines.size() )
  for (var i = 0; i < lines.size(); i++) {
    var line = lines.get(i);
    var code = String(line.get('code'))  // ACC INS INT
    var narr = String(line.get('narr'))
    switch (code) {
      // case 'INS':
      //  stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PrvsInstgAgt1/FinInstnId/BICFI", narr)
      //  break;
    case 'ACC':
      infoCdtAgt.push({InstrInf: narr} )  // Cd: code,
      break;
    case 'INT':
      infoNxtAgt.push({ InstrInf: narr} )  // Cd: code,
      break;
    default:
      infoCdtAgt.push({ InstrInf: code+'/'+narr} )  //
      break;
    }
  }
  stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/InstrForCdtrAgt",  infoCdtAgt)
  stp.setData("/FICdtTrf/CdtTrfTxInf/UndrlygCstmrCdtTrf/InstrForNxtAgt",  infoNxtAgt)
}