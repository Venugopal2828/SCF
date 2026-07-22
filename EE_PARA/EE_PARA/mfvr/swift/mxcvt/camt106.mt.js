// stp.require('camt106.mt.proj.js');

function merge(){
//  if ('function' == typeof merge_proj) {
//    merge_proj();
//  }
  var b4 = msg.get("TEXT");
  if (g_swiftver >= '2025'){
    bizsvc='swift.cbprplus.02';
  } else {
    bizsvc='swift.cbprplus.01';
  }
  var now = new Date();
  var t = now.toMxString();
  stp.setData("/ChrgsPmtReq/GrpHdr/CreDtTm", t);
  stp.setData("/ChrgsPmtReq/GrpHdr/ChrgsRqstr/FinInstnId/BICFI", stp.getSender());
  //stp.setData("/ChrgsPmtReq/GrpHdr/ChrgsAcct/Id", b4.get('F25'));
  var mt = '' + stp.json(msg, '/B2/MT', null);
  if ('191'==mt){
    mt = 'pacs.008';
  } else {
    mt = 'pacs.009';
  }
  stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/UndrlygTx/MsgNmId", mt )

  // Mxcvt.acc("/ChrgsPmtReq/GrpHdr/ChrgsAcct", b4, 'F25')
  Mxcvt.fin("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/DbtrAgt", msg, 'TEXT/Choice_52AD')
  Mxcvt.acc("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/DbtrAgtAcct", msg, 'TEXT/Choice_52AD')
  // /Document/ChrgsPmtReq/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt/Ccy
  //
  var amt = stp.toMxAmt(stp.json(b4, "F32B/Amount", null));
  var ccy = stp.json(b4, "F32B/Currency", null);
  var date = stp.json(b4, "F32B/Date", null);
  // if ('F32C'==nm) amt = 0-amt;

  stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt", amt )
  stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt@Ccy", ccy )
  stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/CdtDbtInd", 'DBIT');
  var lines = stp.strd(b4.get('F71B'));
  var infos = [];
  var items = lines.size();
  stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/NbOfChrgsBrkdwnItms",''+items);
  for (var i = 0; i < items; i++) {
	  var line = lines.get(i);
	  var code = String(line.get('code'))  // ACC BNF INS INT PHON PHONBEN PHONIBK   TELE TELEBEN TELEIBK TSU
	  var narr = String(line.get('narr'))
	  var chrgs = {"Amt":stp.toMxAmt(amt), "Amt@Ccy": ccy, "CdtDbtInd":"DBIT","Tp": {"Cd":code} };
	  infos.push(chrgs)
	}
	stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/ChrgsBrkdwn",  infos)
}
function demerge(){
  var orgn_mx = ''+stp.xml(root, "./Chrgs/PerTx/Rcrd/UndrlygTx/MsgNmId",null); //  "/ChrgsPmtReq/"
  if (orgn_mx.startsWith('pacs.008') || orgn_mx.startsWith('MT103')) {
    rule="fin.191.ESP";
  } else {
    rule="fin.291.ESP";
  }
  if (stp.has(root, "Chrgs/PerTx/Rcrd/UndrlygTx/InstrId") ) {
    // mapping in json
  } else if (stp.has(root, "Chrgs/PerTx/Rcrd/UndrlygTx/EndToEndId") ) {
    stp.setData("TEXT/F21", stp.has(root, "Chrgs/PerTx/Rcrd/UndrlygTx/EndToEndId") );
  } else if (stp.has(root, "Chrgs/PerTx/Rcrd/UndrlygTx/MsgId") ) {
    stp.setData("TEXT/F21", stp.has(root, "Chrgs/PerTx/Rcrd/UndrlygTx/MsgId") );
  } else if (stp.has(root, "Chrgs/PerTx/Rcrd/UndrlygTx/AcctSvcrRef") ) {
    stp.setData("TEXT/F21", stp.has(root, "Chrgs/PerTx/Rcrd/UndrlygTx/AcctSvcrRef") );
  } else {
    stp.setData("TEXT/F21", 'NOTPROVIDED')
  }
//  var acct = ''+Mxcvt.mx2mtAcc(null, root, "GrpHdr/ChrgsAcct", null);
//  stp.setData("TEXT/F25", f72);
  var cd = ''+stp.xml(root, "Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/CdtDbtInd");
  var mtpath =  "TEXT/F32B";
//  stp.setData(mtpath+"/Date", ''+stp.xml(root, "Chrgs/PerTx/Rcrd/ValDt/Dt",null));
  stp.setData(mtpath+"/Currency", ''+stp.xml(root, "Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt/@Ccy","3!a"));
  stp.setData(mtpath+"/Amount", ''+stp.xml(root, "Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt","15d"));

  Mxcvt.mx2mtParty('Choice_52AD', root, "GrpHdr/ChrgsAcctAgt", "GrpHdr/ChrgsAcctAgtAcct", 'fin' );
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
//  stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt", amt )
//  stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/TtlChrgsPerRcrd/TtlChrgsAmt@Ccy", ccy )
//  stp.setData("/ChrgsPmtReq/Chrgs/PerTx/Rcrd/ValDt/Dt", date);
  //console.log(' demerge test...');
    var f72;
    var ultb = ''+Mxcvt.mx2mtUltPty(root, "GrpHdr/ChrgsRqstr/FinInstnId", "CHRQ");
    f72 = ultb;
    if (stp.has(root, "Chrgs/PerTx/Rcrd/InstrForInstdAgt") ) {
      f72 += '\r\n'+ '/'+stp.xml(root, "Chrgs/PerTx/Rcrd/InstrForInstdAgt/Cd") + '/' + stp.xml(root, "Chrgs/PerTx/Rcrd/InstrForInstdAgt/InstrInf");
    }
    stp.setData("TEXT/F72", stp.fmt(f72,'FMT72'));

}
