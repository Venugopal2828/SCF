function merge(){
  var b4 = msg.get("TEXT");
  if (g_swiftver >= '2025'){
    bizsvc='swift.cbprplus.02';
  } else {
    bizsvc='swift.cbprplus.01';
  }
  var now = new Date();
  var t = now.toMxString();
  stp.setData("/ChrgsPmtNtfctn/GrpHdr/CreDtTm", t);
  stp.setData("/ChrgsPmtNtfctn/GrpHdr/ChrgsRqstr/FinInstnId/BICFI", stp.getSender());
  //stp.setData("/ChrgsPmtNtfctn/GrpHdr/ChrgsAcct/Id", b4.get('F25'));

  Mxcvt.acc("/ChrgsPmtNtfctn/GrpHdr/ChrgsAcct", b4, 'F25')
  Mxcvt.fin("/ChrgsPmtNtfctn/Chrgs/PerTx/Rcrd/DbtrAgt", msg, 'TEXT/Choice_52AD')
  Mxcvt.acc("/ChrgsPmtNtfctn/Chrgs/PerTx/Rcrd/DbtrAgtAcct", msg, 'TEXT/Choice_52AD')
  // /Document/ChrgsPmtNtfctn/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt/Ccy
  //
  var nd = stp.findNode(msg, 'TEXT/Choice_32CD');
  var nm = ''+nd.get("@nm");
  stp.log(nm);
  var amt = stp.toMxAmt(stp.json(nd, "Amount", null));
  var ccy = stp.json(nd, "Currency", null);
  var date = stp.json(nd, "Date", null);
  // if ('F32C'==nm) amt = 0-amt;
  stp.setData("/ChrgsPmtNtfctn/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt", amt )
  stp.setData("/ChrgsPmtNtfctn/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt@Ccy", ccy )
  stp.setData("/ChrgsPmtNtfctn/Chrgs/PerTx/Rcrd/ValDt/Dt", date);
  var lines = stp.strd(b4.get('F71B'));
  var infos = [];
  var items = lines.size();
  stp.setData("/ChrgsPmtNtfctn/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/NbOfChrgsBrkdwnItms",''+items);
  for (var i = 0; i < items; i++) {
	  var line = lines.get(i);
	  var code = String(line.get('code'))  // ACC BNF INS INT PHON PHONBEN PHONIBK   TELE TELEBEN TELEIBK TSU
	  var narr = String(line.get('narr'))
	  var chrgs = {"Amt":stp.toMxAmt(amt), "Amt@Ccy": ccy, "CdtDbtInd":"DBIT","Tp": {"Cd":code} };
	  infos.push(chrgs)
	}
	stp.setData("/ChrgsPmtNtfctn/Chrgs/PerTx/Rcrd/ChrgsBrkdwn",  infos)
}
function demerge(){
  var orgn_mx = ''+stp.xml(root, "./Chrgs/PerTx/Rcrd/UndrlygTx/MsgNmId",null); //  "/ChrgsPmtNtfctn/"
  if (orgn_mx.startsWith('pacs.008') || orgn_mx.startsWith('MT103')) {
    rule="fin.190.ESP";
  } else {
    rule="fin.290.ESP";
  }
  var acct = ''+Mxcvt.mx2mtAcc(null, root, "GrpHdr/ChrgsAcct", null);
  if (acct.startsWith('/')) acct = acct.substring(1);
  stp.setData("TEXT/F25", acct);
  var f72="";
  var bizsvc = ''+stp.xml(hdr, "BizSvc",null);
  if (bizsvc.indexOf(".mlp.") > 0) {
    var cd = ''+stp.xml(root, "GrpHdr/TtlChrgs/CdtDbtInd");
    var mtpath = 'DBIT'== cd ? "TEXT/Choice_32CD/F32D" : "TEXT/Choice_32CD/F32C";
    stp.setData(mtpath+"/Currency", ''+stp.xml(root, "GrpHdr/TtlChrgs/TtlChrgsAmt/@Ccy","3!a"));
    stp.setData(mtpath+"/Amount", ''+stp.xml(root, "GrpHdr/TtlChrgs/TtlChrgsAmt","15d"));
    var rcrds = stp.findMulti(root, "Chrgs/PerTx/Rcrd");
    for (var i0=0; i0 < rcrds.size(); i0++) {
      var rcrd = rcrds.get(i0);
      stp.setData(mtpath+"/Date", ''+stp.xml(rcrd, "ValDt/Dt",null));
      var agt = Mxcvt.mx2mtUltPty(rcrd, "ChrgsRqstr/FinInstnId", "CHRQ");
//      stp.log('')
      if (f72.indexOf(agt) < 0) {
      f72 += agt+"\r\n";
      }
      // var cd = stp.xml(rcrd, "ChrgsRqstr/FinInstnId", null);
    }
  }else{
    var ultb = Mxcvt.mx2mtUltPty(root, "GrpHdr/ChrgsRqstr/FinInstnId", "CHRQ");
    f72 = ultb;
    var cd = ''+stp.xml(root, "Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/CdtDbtInd");
    var mtpath = 'DBIT'== cd ? "TEXT/Choice_32CD/F32D" : "TEXT/Choice_32CD/F32C";
    stp.setData(mtpath+"/Date", ''+stp.xml(root, "Chrgs/PerTx/Rcrd/ValDt/Dt",null));
    stp.setData(mtpath+"/Currency", ''+stp.xml(root, "Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt/@Ccy","3!a"));
    stp.setData(mtpath+"/Amount", ''+stp.xml(root, "Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt","15d"));
  }
  stp.setData("TEXT/F72", f72);

  Mxcvt.mx2mtParty('Choice_52AD', root, "Chrgs/PerTx/Rcrd/DbtrAgt", "Chrgs/PerTx/Rcrd/DbtrAgtAcct", 'fin' );

  var f71b='';
  var infos = stp.findMulti(root, "Chrgs/PerTx/Rcrd/ChrgsBrkdwn");
  for (var i=0; i < infos.size(); i++) {
    var info = infos.get(i);
    var cd = stp.xml(info, "Tp/Cd", null);
    var s1 = ''+ stp.xml(info, "Amt/@Ccy", "3!a")+stp.xml(info, "Amt", "15d");
    var s = ''+stp.xml(info, "CdtDbtInd", null);
    if ('CRDT'==s){s='/C'}else{s='/D'}
    f71b += '/'+cd+'/'+s1+s+'\r\n';
  }
  stp.setData("TEXT/F71B", stp.fmt(f71b,'FMT72'));
//  stp.setData("/ChrgsPmtNtfctn/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt", amt )
//  stp.setData("/ChrgsPmtNtfctn/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt@Ccy", ccy )
//  stp.setData("/ChrgsPmtNtfctn/Chrgs/PerTx/Rcrd/ValDt/Dt", date);
  //console.log(' demerge test...');
}
