// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx


function merge(){
    var now = new Date();
	var t = now.toMxString();
	stp.setData("/BkToCstmrStmt/GrpHdr/CreDtTm", t);
	var b4 = msg.get("TEXT");
	stp.setData("/BkToCstmrStmt/GrpHdr/MsgId",b4.get('F20'));
  var mt = '' + stp.json(msg, '/B2/MT', null);
  var last_ind = 'true';
  var ccy = ''+stp.json(msg, 'TEXT/Choice_60FM/*/Currency', null);
  // chrgAgt = stp.json(msg, 'TEXT/Choice_52AD/*/IdentifierCode');
  stp.log('      ccy is  ' + ccy)
  stp.setData("/BkToCstmrStmt/Stmt/Acct/Ccy", ccy)
  if (stp.has(b4, 'Choice_60FM/F60M')) {
    last_ind = 'false';
  }
  	if ('940' === mt) {
  	stp.setData( "/BkToCstmrStmt/Stmt/StmtPgntn/PgNb",''+stp.json(b4, 'F28C/StatementNumber', null));
  	}

  stp.setData( "/BkToCstmrStmt/Stmt/StmtPgntn/LastPgInd",last_ind);
  // F25
  var acc_no;
  if (stp.has(b4, 'F25')) {
    acc_no = ''+b4.get('F25');
  } else if (stp.has(b4, 'Choice_25P/F25')) {
    acc_no = ''+stp.json(b4, 'Choice_25P/F25', null);
  } else if (stp.has(b4, 'Choice_25P/F25P')) {
    acc_no = ''+stp.json(b4, 'Choice_25P/F25P/Account', null);
    var acc_iss=''+stp.json(b4, 'Choice_25P/F25P/IdentifierCode', null);
    stp.setData( "/BkToCstmrStmt/Stmt/Acct/Id/Othr/Issr",acc_iss);
  }
  if (acc_no){
  stp.setData( "/BkToCstmrStmt/Stmt/Acct/Id/Othr/Id",acc_no);
  }
  // bal
  var loopBal = [];
  var loopCd = [];
    loopBal.push(stp.findNode(b4, 'Choice_60FM/F60F'))
    loopCd.push('PRCD')
    loopBal.push(stp.findNode(b4, 'Choice_60FM/F60M'))
    loopCd.push('PRCD') // ITBD
  loopBal.push(stp.findNode(b4, 'Choice_62FM/F62F'))
    loopCd.push('CLBD')
  loopBal.push(stp.findNode(b4, 'Choice_62FM/F62M'))
    loopCd.push('CLBD')  // ITBD
  loopBal.push(stp.findNode(b4, 'F64'))
    loopCd.push('CLAV')
  if (b4.has('Loop2')){
    var lp2 = b4.get('Loop2');
    for (var i=0; i <lp2.length(); i++){
      var item = lp2.get(i);
      loopBal.push(stp.findNode(item, 'F65'))
    loopCd.push('FWAV')
    }
  }
  var bals = [];
  for (var i = 0; i < loopBal.length; i++)  {
    var bal = loopBal[i]
    stp.log(' in loop  ' + bal)
    if (!bal) continue;
    var cd = loopCd[i];
     var amt = stp.toMxAmt( bal.get('Amount'));
     // CRDT, DBIT
     var cd_ind = bal.get('DCMark') == 'C' ? 'CRDT' : 'DBIT';
     var dt = Mxcvt.toISODate(''+bal.get('Date'));
      bals.push({'Tp/CdOrPrtry/Cd': cd, 'Amt': amt, 'Amt@Ccy': bal.get('Currency'), 'CdtDbtInd': cd_ind, 'Dt/Dt': dt } )
  }

  stp.setData("/BkToCstmrStmt/Stmt/Bal",  bals)
  // loop 1 convert
      var lp1 = b4.get('Loop1');
      for (var i=0; i <lp1.length(); i++){
        var item = lp1.get(i);
        var f61 = stp.findNode(item, 'F61')
        stp.log(f61)
        var dc = ''+f61.get('DebitCreditMark');
        if (dc.length === 2) {
          f61.put("RvslInd", 'True');
          dc = dc.substring(1);
        }
        var cd_ind = dc == 'C' ? 'CRDT' : 'DBIT';
        f61.put("DCMark", cd_ind);
        // EntryDate mmdd shoud get yy from ValueDate
        if (f61.has('EntryDate')){
          var valDt = ''+f61.get('ValueDate')
          f61.put("EntryDate", valDt.substring(0, 2) + f61.get('EntryDate'));
        }

        // format
        // var f61 = stp.findNode(item, 'F61')
      }
}

function demerge(){
  rule="fin.940.ESP";
  var cd_ind = {'CRDT':'C','DBIT':'D'}
  var last_ind = ''+stp.xml(root, "./Stmt/StmtPgntn/LastPgInd",null);
  if (!last_ind) {
    // default is true
    last_ind = 'true';
  }
  var acc_iss = ''+stp.xml(root, "./Stmt/Acct/Id/Othr/Issr",null);
  if (!acc_iss) {
    acc_iss = ''+stp.xml(root, "./Stmt/Acct/Svcr/FinInstnId/BICFI",null);
  }
  var acc_no = ''+Mxcvt.mx2mtAcc("Choice_25P", root, "Stmt/Acct", null)
  if (acc_no.startsWith('/')) acc_no = acc_no.substring(1);
  if (acc_iss) {
    stp.setData("TEXT/Choice_25P/F25P/IdentifierCode", acc_iss);
    stp.setData("TEXT/Choice_25P/F25P/Account", acc_no);
  } else {
    stp.setData("TEXT/Choice_25P/F25", acc_no);
    stp.log("no acc iss:  " + acc_iss )
  }
    var stmt = ''+stp.xml(root,"Stmt/LglSeqNb",null);
    if (!stmt) {
      stmt = ''+stp.xml(root,"Stmt/StmtPgntn/PgNb",null);
      if (!stmt) stmt = '0';
    }
    stp.setData( 'TEXT/F28C/StatementNumber', stmt);

  // bal
  var loop2 = [];
  var bals = stp.findMulti(root, "Stmt/Bal");
  for (var i=0; i < bals.size(); i++) {
        var item = bals.get(i);
        var type = stp.xml(item, "Tp/CdOrPrtry/Cd", null);
        var cd = stp.xml(item, "CdtDbtInd", null);
        var dt = stp.xml(item, "Dt/Dt", 'YYMMDD');
        var ccy = stp.xml(item, "Amt/@Ccy","3!a")
        var amt = stp.xml(item, "Amt","15d");
        var bal = {'DCMark': cd.substring(0, 1), 'Date':dt, 'Currency':ccy, 'Amount':amt };
          stp.log("set bal  " + type + ':  ' + amt)
        if ('FWAV' == type) {
        loop2.push({'F65': bal});
        } else if ('CLAV' == type){
         stp.setData("TEXT/F64", bal)
        } else if ('CLBD' == type){
         stp.setData(last_ind == 'true' ? "TEXT/Choice_62FM/F62F" : "TEXT/Choice_62FM/F62M", bal)
         if (last_ind != 'true'){
         // clear F62F because field mapping
         stp.setData("TEXT/Choice_62FM/F62F/Currency", '');
         }
        } else if ('PRCD' == type){
         stp.setData(last_ind == 'true' ? "TEXT/Choice_60FM/F60F": "TEXT/Choice_60FM/F60M", bal)
        } else if ('OPBD' == type){
         stp.setData(last_ind == 'true' ? "TEXT/Choice_60FM/F60F": "TEXT/Choice_60FM/F60M", bal)
        } else {
         stp.log('----- ' + bal)
        }
        // loop1.push({'F61':{'DebitCreditMark': cd.substring(0, 1) }});
  }
  stp.setData("TEXT/Loop2", loop2);
  // f61
  var loop1 = [];
  var ntries = stp.findMulti(root, "Stmt/Ntry");
  for (var i=0; i < ntries.size(); i++) {
        var item = ntries.get(i);
        var cd = stp.xml(item, "CdtDbtInd", null);
          var dtl = '';
          var txdtls = stp.findMulti(item, "NtryDtls/TxDtls");
          for (var j=0; j < txdtls.size(); j++) {
             var txdtl = txdtls.get(j);
             dtl += stp.xml(txdtl, "Refs/UETR", null);
          }
        if (!stp.has(item, "BkTxCd/Prtry/Cd")) {
              // IdentificationCode  / BkTxCd/Domn/Fmly/SubFmlyCd
              var txcd = stp.xml(item, "BkTxCd/Domn/Cd", null);
              var txfmcd = stp.xml(item, "BkTxCd/Domn/Fmly/Cd", null);
              var txsubfmcd = stp.xml(item, "BkTxCd/Domn/Fmly/SubFmlyCd", null);
              stp.log(' INFO  convert ' + txcd + ', ' + txfmcd + ' ' + txsubfmcd );
              var idcd = 'TRF';
              loop1.push({'F61':{'DebitCreditMark': cd.substring(0, 1), 'TransactionType':'N', 'IdentificationCode': idcd, 'SupplementaryDetails': dtl }});
        } else {
            loop1.push({'F61':{'DebitCreditMark': cd.substring(0, 1), 'TransactionType':'N' }});
        }
        // loop1.push({'F61':{'DebitCreditMark': cd.substring(0, 1) }});
        // loop1.push({'F61':{'DebitCreditMark': cd.substring(0, 1) }});
  }
  stp.setData("TEXT/Loop1", loop1);
  stp.log('test');
	// load schema from /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtjson/2020/fin.103.json
}
