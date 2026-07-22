// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx


function merge(){
	var b4 = msg.get("TEXT");
	var SeqA = b4.get("SeqA");
	var SeqB = b4.get("SeqB").get(0);
  var now = new Date();
	var t = now.toMxString();
	stp.setData("/CstmrCdtTrfInitn/GrpHdr/CreDtTm", t);
	var infoCdtAgt = []
	var infoNxtAgt = []
	var infoDbtAgt ='';
  //Field 23E: Instruction Code
  if (SeqB.has("Loop1")) {
    var loop2 = SeqB.get("Loop1");
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
	      infoNxtAgt.push({Cd: cd, InstrInf: info} )
        break;
      case 'SDVA':
        // stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtTpInf/SvcLvl/Cd", cd)
        svcLvl.push({"Cd": cd });
        break;
      default:
        // stp.setData("/FIToFICstmrCdtTrf/CdtTrfTxInf/PmtTpInf/CtgyPurp/Cd", cd)
        infoDbtAgt += '/'+cd+'/'+info;
  	  }
    }
  }
	if (stp.has(SeqA, "Choice_50CL") ) {
  	Mxcvt.pty("/CstmrCdtTrfInitn/GrpHdr/InitgPty", SeqA, 'Choice_50CL')
	  stp.setData("/CstmrCdtTrfInitn/GrpHdr/FwdgAgt/FinInstnId/BICFI", stp.getSender() )
	} else if (stp.has(SeqA, "Choice_50FGH") ){
  	Mxcvt.pty("/CstmrCdtTrfInitn/GrpHdr/InitgPty", SeqA, 'Choice_50FGH')
	  stp.setData("/CstmrCdtTrfInitn/GrpHdr/FwdgAgt/FinInstnId/BICFI", stp.getSender() )
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
	if (stp.has(SeqA, "Choice_50CL") ) {
  	Mxcvt.pty("/CstmrCdtTrfInitn/PmtInf/UltmtDbtr", SeqA, 'Choice_50CL')
  	Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/UltmtDbtrAcct", SeqA, 'Choice_50CL')
	} else if (stp.has(SeqB, "Choice_50CL") ){
  	Mxcvt.pty("/CstmrCdtTrfInitn/PmtInf/UltmtDbtr", SeqB, 'Choice_50CL')
  	Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/UltmtDbtrAcct", SeqB, 'Choice_50CL')
	}
//  var f25a = ''+stp.json(SeqB, 'F25A', null);
//  if (f25a){
//	stp.setData("/CstmrCdtTrfInitn/PmtInf/ChrgsAcct/Id/Othr/Id", f25a)
//  }
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
	Mxcvt.fin("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/IntrmyAgt1", SeqB, 'Choice_56ACD')
	Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/IntrmyAgt1Acct", SeqB, 'Choice_56ACD')
	Mxcvt.fin("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/CdtrAgt", SeqB, 'Choice_57ACD')
	Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/CdtrAgtAcct", SeqB, 'Choice_57ACD')
	//
  Mxcvt.pty("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/Cdtr", SeqB, 'Choice_59AF')
  Mxcvt.acc("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/CdtrAcct", SeqB, 'Choice_59AF')
  var f77b = stp.json(SeqB, "F77B", null);
  if (f77b) {
  	console.log('77b: [' + f77b);
    stp.setData("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/RgltryRptg/Dtls/Inf", f77b.split('\r\n'));
  }
  stp.setData("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/InstrForCdtrAgt",  infoCdtAgt)
  stp.setData("/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/InstrForDbtrAgt",  infoDbtAgt)
}

function demerge(){
  rule="fin.101.ESP";
  stp.setData("TEXT/SeqA/F28D", {'MessageIndex':'1', "Total":"1"});
  // party
  Mxcvt.mx2mtParty('SeqA/Choice_50CL', hdr, "InitgPty", null, 'pty')
  Mxcvt.mx2mtParty('SeqA/Choice_50FGH', root, "PmtInf/Dbtr", "PmtInf/DbtrAcct", 'pty')
  Mxcvt.mx2mtParty('SeqA/Choice_52AC', root, "PmtInf/DbtrAgt", "PmtInf/DbtrAgtAcct", 'fin')
	//
  Mxcvt.mx2mtParty('SeqB/Choice_56ACD', source, "PmtInf/CdtTrfTxInf/IntrmyAgt1", "PmtInf/CdtTrfTxInf/IntrmyAgt1Acct", 'fin')
  Mxcvt.mx2mtParty('SeqB/Choice_57ACD', source, "PmtInf/CdtTrfTxInf/CdtrAgt", "PmtInf/CdtTrfTxInf/CdtrAgtAcct", 'fin')
  Mxcvt.mx2mtParty('SeqB/Choice_59AF', source, "PmtInf/CdtTrfTxInf/Cdtr", "PmtInf/CdtTrfTxInf/CdtrAcct", 'pty')
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
      } else if (chgby == 'SHAR' || chgby == 'SLEV'){
        stp.setData("TEXT/SeqB/F71A", 'SHA');
      }
      // Mxcvt.mx2mtAcc('TEXT/SeqB/F25A', source, "/PmtInf/ChrgsAcct", 'fin' )

	var f77b = stp.xml(root, "PmtInf/CdtTrfTxInf/RgltryRptg/Dtls/Inf","3*35x");
	stp.setData("TEXT/SeqB/F77B", f77b);
	stp.log('test');
}


