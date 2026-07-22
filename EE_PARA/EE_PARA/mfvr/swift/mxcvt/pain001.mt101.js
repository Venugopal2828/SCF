// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx


function merge(){
  if (g_swiftver >= '2025'){
    bizsvc='swift.cbprplus.03';
  }
  var b4 = msg.get("TEXT");
  var SeqA = b4.get("SeqA");
  if (b4.get("SeqB").length() > 1) {
    stp.error('T20053: SeqB occur more than once' );
    return;
  }
  if (!msg.has("B3") || !msg.get("B3").has("121")) {
    stp.error('T20087: Block 3 121 UETR is mandatory' );
    return;
  }
  var SeqB = b4.get("SeqB").get(0);
  var now = new Date();
  var t = now.toMxString();
  stp.setData("/CstmrCdtTrfInitn/GrpHdr/CreDtTm", t);
  var infoCdtAgt = []
  var svcLvl = []
  var infoDbtAgt ='';
  var CtgyPurp ='';
  //Field 23E: Instruction Code
  if (SeqB.has("Loop1")) {
    var loop2 = SeqB.get("Loop1");
    // stp.log(' ----- 23E --- ')
    // stp.log(loop2)
    var preCd = '';
    for (var i = 0; i < loop2.length(); i++) {
      var item = loop2.get(i);
      var cd = ''+stp.json(item, 'F23E/InstructionCode', null);  // CHQB,CORT,HOLD,INTC,PHOB,PHOI,PHON,REPA,SDVA,TELB,TELE,TELI
      var info = ''+stp.json(item, 'F23E/AdditionalInformation', null);
	    // stp.log('cd:'+ cd )
      // stp.log('info:'+ info )
      switch (cd) {
      case 'CHQB':
        stp.info('Warning: CHQB SettlementMethod = CHK' );
        infoCdtAgt.push({Cd: cd, InstrInf: info} )
        break;
      case 'PHON':
        infoCdtAgt.push({Cd: 'PHOB', InstrInf: info} )
        break;
      case 'CMSW': CtgyPurp='SWEP';break;
      case 'CMTO': CtgyPurp='TOPG';break;
      case 'CMZB': CtgyPurp='ZABA';break;
      case 'CORT': CtgyPurp='CORT';break;
      case 'INTC':CtgyPurp='INTC';break;
      case 'NETS':svcLvl.push({"Cd": 'NURG' });break;
      case 'URGP': if (preCd=='') svcLvl.push({"Cd": 'URGP' }); preCd = 'URGP';break;
      case 'RTGS': if (preCd=='')svcLvl.push({"Cd": 'URGP' });preCd = 'URGP';break;
      case 'REPA':
        break;
      default:
        infoDbtAgt += '/'+cd+'/'+info;
  	  }
    }
  }
  if (stp.has(SeqA, "Choice_50CL") ) {
  	Mxcvt.pty("/CstmrCdtTrfInitn/GrpHdr/InitgPty", SeqA, 'Choice_50CL')
    //stp.setData("/CstmrCdtTrfInitn/GrpHdr/FwdgAgt/FinInstnId/BICFI", stp.getSender() )
  	//Mxcvt.pty("/CstmrCdtTrfInitn/PmtInf/UltmtDbtr", SeqA, 'Choice_50CL')
  	//Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/UltmtDbtrAcct", SeqA, 'Choice_50CL')
  } else if (stp.has(SeqB, "Choice_50CL") ){
  	Mxcvt.pty("/CstmrCdtTrfInitn/GrpHdr/InitgPty", SeqB, 'Choice_50CL')
    //stp.setData("/CstmrCdtTrfInitn/GrpHdr/FwdgAgt/FinInstnId/BICFI", stp.getSender() )
  	//Mxcvt.pty("/CstmrCdtTrfInitn/PmtInf/UltmtDbtr", SeqB, 'Choice_50CL')
  	//Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/UltmtDbtrAcct", SeqB, 'Choice_50CL')
  } else {
    stp.setData("/CstmrCdtTrfInitn/GrpHdr/InitgPty/Id/OrgId/AnyBIC", stp.getSender() )
  }

  if (stp.has(SeqA, "Choice_50FGH") ) {
  	Mxcvt.pty("/CstmrCdtTrfInitn/PmtInf/Dbtr", SeqA, 'Choice_50FGH')
  	Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/DbtrAcct", SeqA, 'Choice_50FGH')
  } else if (stp.has(SeqB, "Choice_50FGH") ){
  	Mxcvt.pty("/CstmrCdtTrfInitn/PmtInf/Dbtr", SeqB, 'Choice_50FGH')
  	Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/DbtrAcct", SeqB, 'Choice_50FGH')
  } else {
    // dbtr is mana
  }

  if (stp.has(SeqA, "Choice_52AC") ) {
    Mxcvt.fin("/CstmrCdtTrfInitn/PmtInf/DbtrAgt", SeqA, 'Choice_52AC')
    Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/DbtrAgtAcct", SeqA, 'Choice_52AC')
  } else if (stp.has(SeqB, "Choice_52AC") ){
    Mxcvt.fin("/CstmrCdtTrfInitn/PmtInf/DbtrAgt", SeqB, 'Choice_52AC')
    Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/DbtrAgtAcct", SeqB, 'Choice_52AC')
  }else{
    stp.setData("/CstmrCdtTrfInitn/PmtInf/DbtrAgt/FinInstnId/BICFI", stp.getReceiver() )
  }
  Mxcvt.fin("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/IntrmyAgt1", SeqB, 'Choice_56ACD')
  Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/IntrmyAgt1Acct", SeqB, 'Choice_56ACD')
  Mxcvt.fin("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/CdtrAgt", SeqB, 'Choice_57ACD')
  Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/CdtrAgtAcct", SeqB, 'Choice_57ACD')
//
  Mxcvt.pty("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/Cdtr", SeqB, 'Choice_59AF')
  Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/CdtrAcct", SeqB, 'Choice_59AF')

  Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/ChrgsAcct", SeqB, 'F25A')

  var e2eId = null;
  var uri =''
  var f70 = ''+SeqB.get('F70');
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
      Mxcvt.mt2mxUltPty("/CstmrCdtTrfInitn/PmtInf/UltmtCdtr", narr70);
    }else if (code70 == 'ULTD') {
      Mxcvt.mt2mxUltPty("/CstmrCdtTrfInitn/PmtInf/UltmtDbtr", narr70);
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
  stp.log('F70 uri: 0 '+ uri +' -- '+ f70 )
  if (uri != ''){
    stp.setData("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/RmtInf/Ustrd", stp.fmt(uri, "140x")  );
  }
  if (!e2eId) {
	e2eId = 'NOTPROVIDED'; // stp.json(msg, "TEXT/F20", null);
  }
  stp.setData("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/PmtId/EndToEndId", e2eId);

  var chgby = ''+stp.json(SeqB, 'F71A', null);  // BEN,OUR,SHA
  switch (chgby) {
  case 'BEN':
    stp.setData("/CstmrCdtTrfInitn/PmtInf/ChrgBr", 'CRED')
    break;
  case 'OUR':
    stp.setData("/CstmrCdtTrfInitn/PmtInf/ChrgBr", 'DEBT')
    break;
  case 'SHA':
    stp.setData("/CstmrCdtTrfInitn/PmtInf/ChrgBr", 'SHAR')
  }
// 71A
  var f77b = stp.json(SeqB, "F77B", null);
  if (f77b) {
  	console.log('77b: [' + f77b);
    stp.setData("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/RgltryRptg/Dtls/Inf", f77b.split('\r\n'));
  }
  // 33B no translate
  stp.setData("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/InstrForCdtrAgt",  infoCdtAgt)
  stp.setData("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/InstrForDbtrAgt",  infoDbtAgt)
  stp.setData("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/PmtTpInf/SvcLvl", svcLvl)
  stp.setData("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/PmtTpInf/CtgyPurp/Cd", CtgyPurp);

}

function demerge(){
  rule="fin.101.ESP";
  stp.setData("TEXT/SeqA/F28D", {'MessageIndex':'1', "Total":"1"});
  // party
  Mxcvt.mx2mtParty('SeqA/Choice_50CL', root, "GrpHdr/InitgPty", null, 'pty')
  var loop23e = [];
  var infos = stp.findMulti(root, "PmtInf/PmtTpInf/SvcLvl");
  if (infos.size() == 0) {
    infos = stp.findMulti(root, "PmtInf/CdtTrfTxInf/PmtTpInf/SvcLvl");
  stp.log(' --1-- ');
  } else{
  stp.log(' --13-- ' );
  }
  for (var i=0; i < infos.size(); i++) {
      var info = infos.get(i);
      var cd = stp.xml(info, "Cd", null);
      var s = ''+stp.xml(info, "InstrInf", null)
      if (!cd || cd == ''){
        cd = 'OTHR'
      } else if ( 'NURG' == cd ){
        cd = 'NETS';
        loop23e.push({'F23E':{'InstructionCode':cd, 'AdditionalInformation':s}})
      } else if ( 'CHQB|TELB|HOLD|PHOB'.indexOf(cd) > -1  ){
        // if ('CHQB' == cd) s = ''
        s = stp.fmt(s, '30x');
        loop23e.push({'F23E':{'InstructionCode':cd, 'AdditionalInformation':s}})
        continue;
      } else {
        loop23e.push({'F23E':{'InstructionCode':cd, 'AdditionalInformation':s}})
      }
  }
  var ctgyCd = ''+stp.xml(root, 'PmtInf/PmtTpInf/CtgyPurp/Cd', '4x');
  if (ctgyCd == ''){
    ctgyCd = ''+stp.xml(root, 'PmtInf/CdtTrfTxInf/PmtTpInf/CtgyPurp/Cd', '4x');
  }
  if (ctgyCd != ''){
    var CtgyPurp;
    var s = '';
    switch (ctgyCd) {
        case 'SWEP': CtgyPurp='CMSW';break;
        case 'TOPG': CtgyPurp='CMTO';break;
        case 'ZABA': CtgyPurp='CMZB';break;
        case 'CORT': CtgyPurp='CORT';break;
        case 'INTC': CtgyPurp='INTC';break;
        default: CtgyPurp='OTHR'; s = ctgyCd; break;
    }
    loop23e.push({'F23E':{'InstructionCode':CtgyPurp,'AdditionalInformation':s}})
  }
  infos = stp.findMulti(root, "PmtInf/CdtTrfTxInf/InstrForCdtrAgt");
  for (var i=0; i < infos.size(); i++) {
      var info = infos.get(i);
      var cd = stp.xml(info, "Cd", null);
      var s = ''+stp.xml(info, "InstrInf", null);
      if ('PHOB' == cd) cd = 'PHON';
      loop23e.push({'F23E':{'InstructionCode':cd, 'AdditionalInformation':s}})
  }
  ctgyCd = ''+stp.xml(root, 'PmtInf/CdtTrfTxInf/InstrForDbtrAgt', '35x');
  if (ctgyCd != ''){
    if (ctgyCd.startsWith('/OTHR/')) ctgyCd = ctgyCd.substring(6) ;
    loop23e.push({'F23E':{'InstructionCode':'OTHR', 'AdditionalInformation':ctgyCd}})
  }
  if (stp.has(root, 'PmtInf/CdtTrfTxInf/Amt/EqvtAmt/CcyOfTrf')) {
    var ccy32 = '' +stp.xml(root, 'PmtInf/CdtTrfTxInf/Amt/EqvtAmt/Amt/@Ccy', '3c');
    var ccy33 = '' +stp.xml(root, 'PmtInf/CdtTrfTxInf/Amt/EqvtAmt/CcyOfTrf', '3c');
    var amt33 = ''+stp.xml(root, "PmtInf/CdtTrfTxInf/Amt/EqvtAmt/Amt","15d");
    loop23e.push({'F23E':{'InstructionCode':'EQUI'}})
    stp.setData("TEXT/SeqB/F32B", {'Currency':ccy32,'Amount':  '0,' } );
    stp.setData("TEXT/SeqB/F33B", {'Currency':ccy33,'Amount':  stp.fmt(amt33,'15d') } );
  }
  // loop23e.push({'F23E':f13c})
  stp.setData("TEXT/SeqB/Loop1", loop23e);
  Mxcvt.mx2mtParty('SeqA/Choice_50FGH', root, "PmtInf/Dbtr", "PmtInf/DbtrAcct", 'pty')
  Mxcvt.mx2mtParty('SeqA/Choice_52AC', root, "PmtInf/DbtrAgt", "PmtInf/DbtrAgtAcct", 'fin')
	//
  Mxcvt.mx2mtParty('SeqB/Choice_56ACD', root, "PmtInf/CdtTrfTxInf/IntrmyAgt1", "PmtInf/CdtTrfTxInf/IntrmyAgt1Acct", 'fin')
  Mxcvt.mx2mtParty('SeqB/Choice_57ACD', root, "PmtInf/CdtTrfTxInf/CdtrAgt", "PmtInf/CdtTrfTxInf/CdtrAgtAcct", 'fin')
  Mxcvt.mx2mtParty('SeqB/Choice_59AF', root, "PmtInf/CdtTrfTxInf/Cdtr", "PmtInf/CdtTrfTxInf/CdtrAcct", 'pty')
  //
  var chgby = ''+stp.xml(root, "PmtInf/ChrgBr","");
  if (!chgby){
    chgby = ''+stp.xml(root, "PmtInf/CdtTrfTxInf/ChrgBr","");
  }
  stp.log('chgby   ' + chgby)
  if (chgby == 'CRED'){
        stp.setData("TEXT/SeqB/F71A", 'BEN');
  } else if (chgby == 'DEBT'){
        stp.setData("TEXT/SeqB/F71A", 'OUR');
  } else{
        stp.setData("TEXT/SeqB/F71A", 'SHA');
  }
  var acc25 = Mxcvt.mx2mtAcc('TEXT/SeqB/F25A', root, "PmtInf/ChrgsAcct", 'fin' );
  stp.setData('TEXT/SeqB/F25A', acc25);
  var f70='';
  var uri = '';
  infos = stp.findMulti(root, "PmtInf/CdtTrfTxInf/RmtInf/Ustrd");
  for (var i=0; i < infos.size(); i++) {
      var info = infos.get(i);
      var s = stp.xml(info, null, null);
      uri += s+'\r\n';
  }
  if (uri !='' ){
      if(!uri.startsWith('/') ){
        f70+='/URI/'
      }
      f70 += uri+'\r\n';
  }

  var e2eId = ''+stp.xml(root, "PmtInf/CdtTrfTxInf/PmtId/EndToEndId", "35x");
  if (e2eId && e2eId != 'NOTPROVIDED') {
    f70 += '/ROC/'+e2eId +'\r\n';
  }
  var ultb = ''+Mxcvt.mx2mtUltPty(root, "PmtInf/UltmtCdtr", "ULTB");
  if (ultb == ''){
  ultb = ''+Mxcvt.mx2mtUltPty(root, "PmtInf/CdtTrfTxInf/UltmtCdtr", "ULTB");
  }
  if (ultb != ''){
    f70 += ultb +'\r\n';
  }
  var ultd = Mxcvt.mx2mtUltPty(root, "PmtInf/UltmtDbtr", "ULTD");
  if (ultd == ''){
  ultd = ''+Mxcvt.mx2mtUltPty(root, "PmtInf/CdtTrfTxInf/UltmtDbtr", "ULTD");
  }
  if (ultd != ''){
    f70 += ultd +'\r\n';
  }
  var st = stp.xml_info(root, "CdtTrfTxInf/RmtInf/Strd", 'notagname');
  if (st.startsWith('/') ) {
      f70 += '/SRI/+'+st +'\r\n';
  }

  stp.setData("TEXT/SeqB/F70", stp.fmt(f70, "4*35x"));

  var f77b = stp.xml(root, "PmtInf/CdtTrfTxInf/RgltryRptg/Dtls/Inf","3*35x");
  stp.setData("TEXT/SeqB/F77B", f77b);
}


