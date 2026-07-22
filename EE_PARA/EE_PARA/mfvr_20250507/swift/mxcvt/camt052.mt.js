// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx

function merge(){
	var b4 = msg.get("TEXT");
var mt = '' + stp.json(msg, '/B2/MT', null);
    var now = new Date();
	var t = now.toMxString();
	stp.setData("/BkToCstmrAcctRpt/GrpHdr/CreDtTm", t);
	if ('942' === mt) {
	stp.setData( "/BkToCstmrAcctRpt/Rpt/RptPgntn/PgNb",''+stp.json(b4, 'F28C/StatementNumber', null));
	}

  // F25
  var acc_no;
  if (stp.has(b4, 'F25')) {
    acc_no = ''+b4.get('F25');
  } else if (stp.has(b4, 'Choice_25P/F25')) {
    acc_no = ''+stp.json(b4, 'Choice_25P/F25', null);
  } else if (stp.has(b4, 'Choice_25P/F25P')) {
    acc_no = ''+stp.json(b4, 'Choice_25P/F25P/Account', null);
    var acc_iss=''+stp.json(b4, 'Choice_25P/F25P/IdentifierCode', null);
    stp.setData( "/BkToCstmrAcctRpt/Rpt/Acct/Svcr/FinInstnId/BICFI",acc_iss);
  }
  if (acc_no){
    if (stp.isIBANCode(acc_no) ) {
      stp.setData( "/BkToCstmrAcctRpt/Rpt/Acct/Id/IBAN",acc_no);
    } else {
      stp.setData( "/BkToCstmrAcctRpt/Rpt/Acct/Id/Othr/Id",acc_no);
    }
  }
  stp.log(' f25 ok');
  // 13D
  if (b4.has("F13D")) {
  var dt = ''+stp.json(b4, 'F13D/Date', null);
  stp.log(' dt -- ' + dt);
  var tm = ''+stp.json(b4,'F13D/Time', null)+stp.json(b4,'F13D/Sign', null)+ stp.json(b4,'F13D/Offset', null)
  stp.log(' tm -- ' + tm);
      stp.setData("/BkToCstmrAcctRpt/Rpt/CreDtTm", Mxcvt.toISODate(String(dt)) + 'T' + Mxcvt.toISOTime(String(tm)));
      stp.log(' f13d ok');
  }
    // bal
    var loopBal = [];
    var loopCd = [];
      loopBal.push(stp.findNode(b4, 'F60F'))
      loopCd.push('PRCD')
      loopBal.push(stp.findNode(b4, 'F62F'))
      loopCd.push('CLBD')
  loopBal.push(stp.findNode(b4, 'F64'))
    loopCd.push('CLAV')
  if ('941' === mt && b4.has('Loop1')){
    var lp2 = b4.get('Loop1');
    for (var i=0; i <lp2.length(); i++){
      var item = lp2.get(i);
      loopBal.push(stp.findNode(item, 'F65'))
    loopCd.push('FWAV')
    }
    // remove for mapping confilct with 942
    b4.remove('Loop1');
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

  stp.setData("/BkToCstmrAcctRpt/Rpt/Bal",  bals)

  if ('942' === mt) {
    // F34F:
    // Loop1/ 61, 86
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
}

function demerge(){
  if (stp.has(root, 'Rpt/Ntry')){
    rule="fin.942.ESP";
  } else {
  rule="fin.941.ESP";
  }

  var cd_ind = {'CRDT':'C','DBIT':'D'}
  var last_ind = ''+stp.xml(root, "./Rpt/StmtPgntn/LastPgInd",null);
  var acc_iss = ''+stp.xml(root, "./Rpt/Acct/Id/Othr/Issr",null);
  if (!acc_iss) {
    // Rpt/Acct/Svcr/FinInstnId/BICFI
    acc_iss = ''+stp.xml(root, "./Rpt/Acct/Svcr/FinInstnId/BICFI",null);
  }
  var acc_no = Mxcvt.mx2mtAcc("Choice_25P", root, "Rpt/Acct", null)
  if (acc_iss) {
    stp.setData("TEXT/Choice_25P/F25P/IdentifierCode", acc_iss);
    stp.setData("TEXT/Choice_25P/F25P/Account", acc_no);
  } else {
    stp.setData("TEXT/Choice_25P/F25", acc_no);
    stp.log("ERROR! " + acc_iss )
  }
    // 13D

    if (stp.has(root, "Rpt/CreDtTm")) {
    var dt = ''+stp.xml(root, 'Rpt/CreDtTm', null);
    stp.log(' dt -- ' + dt);  // 2002-10-31T08:52:00+08:00
    var f13d = {Date: stp.fmt(dt.substring(0,10),'YYMMDD'),Time:stp.fmt(dt.substring(11,16),'HHMM'),Sign:'+',Offset: stp.fmt(dt.substring(20),'HHMM') }
    stp.log(' dt 2 -- ' + dt.substring(0,10) + stp.fmt(dt.substring(0,10),'YYMMDD') );
    stp.log(' dt 2 -- ' + dt.substring(11,16) +' ' + stp.fmt(dt.substring(11,16),'HHMM') );
    stp.log(' dt 2 -- ' + dt.substring(20) +' ' + stp.fmt(dt.substring(20),'HHMM') );

        stp.setData("TEXT/F13D", f13d );
        stp.log(' f13d ok');
    } else if (rule==="fin.942.ESP") {
      var dt = ''+stp.xml(root, 'GrpHdr/CreDtTm', null);
      stp.log(' dt -- ' + dt);  // 2002-10-31T08:52:00+08:00
      var f13d = {Date: stp.fmt(dt.substring(0,10),'YYMMDD'),Time:stp.fmt(dt.substring(11,16),'HHMM'),Sign:'+',Offset: stp.fmt(dt.substring(20),'HHMM') }
      stp.setData("TEXT/F13D", f13d );
    }
    var trxccy;
  // bal
    var loop2 = [];
    var bals = stp.findMulti(root, "Rpt/Bal");
    for (var i=0; i < bals.size(); i++) {
          var item = bals.get(i);
          var type = stp.xml(item, "Tp/CdOrPrtry/Cd", null);
          var cd = stp.xml(item, "CdtDbtInd", null);
          var dt = stp.xml(item, "Dt/Dt", 'YYMMDD');
          var ccy = stp.xml(item, "Amt/@Ccy","3!a")
          if (ccy) {
          trxccy = ccy;
          }
          var amt = stp.xml(item, "Amt","15d");
          var bal = {'DCMark': cd.substring(0, 1), 'Date':dt, 'Currency':ccy, 'Amount':amt };
          if ('FWAV' == type) {
          loop2.push({'F65': bal});
          } else if ('CLAV' == type){
           stp.setData("TEXT/F64", bal)
          } else if ('CLBD' == type){
           stp.setData("TEXT/F62F", bal)
          } else if ('PRCD' == type){
           stp.setData("TEXT/F60F", bal)
           } else {
           stp.log('----- ' + type  + ', bal: ' + bal)
          }
          // loop1.push({'F61':{'DebitCreditMark': cd.substring(0, 1) }});
    }
    stp.setData("TEXT/Loop1", loop2);

    // f61
    var loop1 = [];
    var ntries = stp.findMulti(root, "Rpt/Ntry");
    for (var i=0; i < ntries.size(); i++) {
          var item = ntries.get(i);
          var cd = stp.xml(item, "CdtDbtInd", null);
          var ccy = stp.xml(item, "Amt/@Ccy","3!a")
          if (ccy) {
            trxccy = ccy;
          }
          // SupplementaryDetails dtl
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
    }
    stp.setData("TEXT/Loop1", loop1);

    if (rule==="fin.942.ESP") {
      var stmt = ''+stp.xml(root,"Rpt/RptPgntn/PgNb",null);
      if (!stmt) {
        stmt = '0';
      }
    stp.setData( 'TEXT/F28C/StatementNumber', stmt);
    stp.setData( 'TEXT/F34F/Amount', '0,');
    }


        // 90C 90D ccy:
        if (stp.has(root, 'Rpt/TxsSummry/TtlDbtNtries')){
        stp.setData("TEXT/F90D/Currency", trxccy);
        }
        if (stp.has(root, 'Rpt/TxsSummry/TtlCdtNtries')){
        stp.setData("TEXT/F90C/Currency", trxccy);
        }
}
