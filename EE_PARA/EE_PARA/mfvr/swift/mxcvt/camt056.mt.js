// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx


function merge(){
  var b4 = msg.get("TEXT");
  if (g_swiftver >= '2025'){
    bizsvc='swift.cbprplus.03';
  }

  var now = new Date();
  var t = now.toMxString();
  stp.setData("/FIToFIPmtCxlReq/Assgnmt/CreDtTm", t);
  // FIToFIPmtCxlReq/Undrlyg/TxInf/Case/Cretr/Agt/FinInstnId is Mandatory
  stp.setData("/FIToFIPmtCxlReq/Assgnmt/Id",b4.get('F20'));
  stp.setData("/FIToFIPmtCxlReq/Undrlyg/TxInf/OrgnlGrpInf/OrgnlMsgId", b4.get('F21'));
  stp.setData("/FIToFIPmtCxlReq/Undrlyg/TxInf/Case/Cretr/Agt/FinInstnId/BICFI",''+stp.getSender());
//  stp.setData("/FIToFIPmtCxlReq/Undrlyg/TxInf/Case/Cretr/Agt/FinInstnId/Nm",'NOTPROVIDED');
//  stp.setData("/FIToFIPmtCxlReq/Undrlyg/TxInf/Case/Cretr/Agt/FinInstnId/PstlAdr/AdrLine",['NOTPROVIDED'] );
  var mttp = stp.json(b4, 'F11S/MTNumber', null);
  var mxtp = 'pacs.008';
  if ('103' == mttp) {
    mxtp = 'pacs.008';
  } else if ('104' == mttp) {
    mxtp = 'pacs.003';
  } else if ('202' == mttp || '205' == mttp) {
    mxtp = 'pacs.009';
  } else if ('204' == mttp) {
    mxtp = 'pacs.010';
  }else{
    mxtp = 'MT' + mttp;
    stp.log(' mxtp: ' + mttp)
  }
  stp.setData("/FIToFIPmtCxlReq/Undrlyg/TxInf/OrgnlGrpInf/OrgnlMsgNmId", mxtp);
  stp.setData("/FIToFIPmtCxlReq/Undrlyg/TxInf/OrgnlEndToEndId",b4.get('F21') );
  // 79
  var cxlRsn;
  var cxlCd;
  if (stp.has(b4, 'F79')){
    var f79 = String(stp.json(b4, 'F79', null));
    if (f79.charAt(0)=='/' && f79.charAt(5)=='/' && stp.inExtCode(f79.substring(1, 5), 'ExternalCancellationReason1Code')){
      cxlCd = f79.substring(1, 5);
      f79 = f79.substring(6).replace(/\/\//g, '').split('\r\n').join(' ');
    } else {
      cxlCd='NARR';
      f79 = f79.split('\r\n').join(' ');
    }
    cxlRsn =[];
    if (f79.length == 0) {
      // cxlRsn = null;
    } else if (f79.length > 210){
      cxlRsn.push(f79.substring(0, 105));
      cxlRsn.push(f79.substring(105, 209)+'+');
    } else if (f79.length > 105){
      cxlRsn.push(f79.substring(0, 105));
      cxlRsn.push(f79.substring(105));
    } else {
      cxlRsn.push(f79);
    }
  } else {
    cxlRsn = 'NOTPROVIDED';
    cxlCd='NARR';
  }
  stp.setData("/FIToFIPmtCxlReq/Undrlyg/TxInf/CxlRsnInf/Rsn/Cd",cxlCd);
  stp.setData("/FIToFIPmtCxlReq/Undrlyg/TxInf/CxlRsnInf/AddtlInf",cxlRsn);
  // NOTAG
  var notag = stp.json(b4, 'NOTAG', null);
  var lines = notag.split('\n');
  var tmp;
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.startsWith(':32A:')){
      tmp = ''+line.substring(5, 11);
      stp.setData("/FIToFIPmtCxlReq/Undrlyg/TxInf/OrgnlIntrBkSttlmDt", Mxcvt.toISODate(tmp) );
      stp.setData("/FIToFIPmtCxlReq/Undrlyg/TxInf/OrgnlIntrBkSttlmAmt", line.substring(14) );
      stp.setData("/FIToFIPmtCxlReq/Undrlyg/TxInf/OrgnlIntrBkSttlmAmt@Ccy", line.substring(11, 14) );
    }
  }
}

function demerge(){
  stp.setData("B3/111", '002');
  //
  var mxtp = ''+stp.xml(root, "Undrlyg/TxInf/OrgnlGrpInf/OrgnlMsgNmId","35c");
  if (mxtp.length > 8) {
    mxtp = mxtp.substring(0,8);
  }
  var mttp = '103';
  if ('pacs.008' == mxtp ) {
    rule="fin.192";
    mttp = '103';
  } else if ( 'pacs.003' == mxtp) {
    mttp = '104';
    rule="fin.192";
  } else if ('pacs.009' == mxtp) {
    mttp = '202';
    rule="fin.292";
  } else if ( 'pacs.010' == mxtp) {
    mttp = '204';
    rule="fin.292";
  }else{
    var reg = /^MT10[0-9]{1}$/
    if (reg.test(mxtp) ){
      rule="fin.192";
      mttp = mxtp.substring(2)
    } else if ( /^MT20[0-9]{1}$/.test(mxtp) ){
      rule="fin.292";
      mttp = mxtp.substring(2)
    } else {
      stp.log(' TBD:  mxtp: ' + mxtp);
      mttp='202';
      rule="fin.292";
      mxtp = '';
    }
  }
//    if ('NOTPROVIDED' != mxtp){
      var mxtm = ''+stp.xml(root, "Undrlyg/TxInf/OrgnlGrpInf/OrgnlCreDtTm",null);
      // stp.log('-6-  ' + mxtm);
      if (mxtm != '' && mxtm.length > 6) {
      // stp.log('-7-  ' + mxtm);
      stp.setData("TEXT/F11S/MTNumber", mttp);
      stp.setData("TEXT/F11S/Date", mxtm);
      } else  {  // if (mxtp !='')
      // stp.log('-8-  ' + mxtm);
      stp.setData("TEXT/F11S/MTNumber", mttp);
      stp.setData("TEXT/F11S/Date", '2059-12-31');
      }
//    }
  // 21
  if (!stp.has(root, 'Undrlyg/TxInf/OrgnlGrpInf/OrgnlMsgId') && !stp.has(root, 'Undrlyg/TxInf/OrgnlInstrId') ){
    stp.setData("TEXT/F21", 'NOTPROVIDED');
  }
  // 79
  var v79 ='';
  var cd = ''+ stp.xml(root, "Undrlyg/TxInf/CxlRsnInf/Rsn/Cd",'35x');
  if (cd) {
    v79 = '/'+cd+'/';
  }
  var st = stp.xml_info(root, "Undrlyg/TxInf/CxlRsnInf/AddtlInf", 'notagname');
  if (st) v79+= st;
  v79 = stp.fmt(v79,'FMT79')
  stp.setData("TEXT/F79", v79);

  // NOTAG
  var v32a = ':32A:'+stp.xml(root, "Undrlyg/TxInf/OrgnlIntrBkSttlmDt","YYMMDD")
    +stp.xml(root, "Undrlyg/TxInf/OrgnlIntrBkSttlmAmt/@Ccy","3!c")
    +stp.xml(root, "Undrlyg/TxInf/OrgnlIntrBkSttlmAmt","15d");
  if (v32a.length > 14) {
    stp.setData("TEXT/NOTAG", v32a);
  }
}
