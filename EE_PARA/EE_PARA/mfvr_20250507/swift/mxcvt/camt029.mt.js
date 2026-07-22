// THIS DONE by ben.pan
// refer: /benpan/eedocker/esp_src/com.cs.esphome/home/swift/mtmx_map.json
// mt2mx

function merge(){
	var b4 = msg.get("TEXT");
	var f76 = b4.get('F76');
	if (f76.startsWith('/CNCL/') || f76.startsWith('/PDCR/') || f76.startsWith('/RJCR/')  ) {
	  stp.log('  ' )
	} else {
	  // add error
	  stp.error('ERROR!!! T20087' )
	  return;
	  // throw "ddd";
	}
	// default value
	stp.setData("/RsltnOfInvstgtn/Assgnmt/Id",b4.get('F20'));
	stp.setData('/RsltnOfInvstgtn/CxlDtls/TxInfAndSts/RslvdCase/Cretr/Agt/FinInstnId/Nm','NOTPROVIDED');
	stp.setData("/RsltnOfInvstgtn/CxlDtls/TxInfAndSts/RslvdCase/Cretr/Agt/FinInstnId/PstlAdr/AdrLine",['NOTPROVIDED'] );
	stp.setData('/RsltnOfInvstgtn/CxlDtls/TxInfAndSts/OrgnlGrpInf/OrgnlMsgId','NOTPROVIDED');
  var now = new Date();
	var t = now.toMxString();
	stp.setData("/RsltnOfInvstgtn/Assgnmt/CreDtTm", t);
	// condition map
	if (stp.has(b4, 'Choice_11RS/F11R')) {
	  var orgn_mx;
	  var mttp = ''+stp.json(b4, 'Choice_11RS/F11R/MTNumber', null);
	  var mm = {'103':'pacs.008','104':'pacs.003', '202':'pacs.009', '205':'pacs.009', '204':'pacs.010'}
    orgn_mx = mm[mttp];
    if (!orgn_mx) {orgn_mx = 'MT'+mttp}
    stp.setData('/RsltnOfInvstgtn/CxlDtls/TxInfAndSts/OrgnlGrpInf/OrgnlMsgNmId',orgn_mx);
    mttp = stp.json(b4, 'Choice_11RS/F11R/Date', null);
    stp.setData('/RsltnOfInvstgtn/CxlDtls/TxInfAndSts/OrgnlGrpInf/OrgnlCreDtTm',mttp);
	} else {
    stp.setData('/RsltnOfInvstgtn/CxlDtls/TxInfAndSts/OrgnlGrpInf/OrgnlMsgNmId','NOTPROVIDED');
	}
  // F76
  var lines = stp.strd(b4.get('F76'));
  for (var i = 0; i < lines.size(); i++) {
	  var line = lines.get(i);
	  var code = String(line.get('code'))  // ROC
	  var narr = String(line.get('narr'))
	  stp.log('  '+ code + '  -- ' + narr)
	  if (i == 0){
	  stp.setData('/RsltnOfInvstgtn/Sts/Conf', code);
	  // NOOR|NOAS|ARDT|CUST|AGNT|LEGL|AC04|AM04|PTNA|RQDA|INDM|NARR|
	  var rsn = narr.substring(0, 4);
	  if ('NOOR|NOAS|ARDT|CUST|AGNT|LEGL|AC04|AM04|PTNA|RQDA|INDM|NARR|'.indexOf(rsn) != -1) {
	    stp.setData('/RsltnOfInvstgtn/CxlDtls/TxInfAndSts/CxlStsRsnInf/Rsn/Cd', narr.substring(0,4));
	    stp.setData('/RsltnOfInvstgtn/CxlDtls/TxInfAndSts/CxlStsRsnInf/AddtlInf', narr.substring(4));
	  } else {
	  stp.setData('/RsltnOfInvstgtn/CxlDtls/TxInfAndSts/CxlStsRsnInf/AddtlInf', narr);
	  }
  }
}
}

function demerge(){
  var mxtp = ''+stp.xml(root, "CxlDtls/TxInfAndSts/OrgnlGrpInf/OrgnlMsgNmId","35c");
  if (mxtp.length > 8) {
    mxtp = mxtp.substring(0,8);
  }
  var mttp = '299';
  if ('pacs.008' == mxtp ) {
    rule="fin.196";
    mttp = '103';
  } else if ( 'pacs.003' == mxtp ) {
    rule="fin.196";
    mttp = '104';
  } else if ('pacs.009' == mxtp ) {
    rule="fin.296";
    mttp = '202';
  } else if ( 'pacs.010' == mxtp ) {
    rule="fin.296";
    mttp = '204';
  }else{
    var reg = /^MT10[0-9]{1}$/
    if (reg.test(mxtp) ){
      rule="fin.196";
      mttp = mxtp.substring(2)
    } else if ( /^MT20[0-9]{1}$/.test(mxtp) ){
      rule="fin.296";
      mttp = mxtp.substring(2)
    } else {
      stp.log(' TBD:  mxtp: ' + mxtp);
      rule="fin.296";
      mttp = '202';
      mxtp = '';
    }
  }
  if ('NOTPROVIDED' != mxtp){
    var mxtm = ''+stp.xml(root, "CxlDtls/TxInfAndSts/OrgnlGrpInf/OrgnlCreDtTm",null);
    if (mxtm != '') {
    stp.setData("TEXT/Choice_11RS/F11R/MTNumber", mttp);
    stp.setData("TEXT/Choice_11RS/F11R/Date", mxtm);
    } else if (mxtp !='') {
    stp.setData("TEXT/Choice_11RS/F11R/MTNumber", mttp);
    stp.setData("TEXT/Choice_11RS/F11R/Date", '2059-12-31');
    }
  }

  var v76 = '/'+ stp.xml(source, 'Sts/Conf', '4c')+'/';
  var rsn = ''+stp.xml(source, 'CxlDtls/TxInfAndSts/CxlStsRsnInf/Rsn/Cd', null);
  if (rsn != ''){
   v76 += rsn + ' ';
   v76 += '\r\n';
  }

  // stp.log('-------1-- ');
  var info = v76 + stp.xml(source, 'CxlDtls/TxInfAndSts/CxlStsRsnInf/AddtlInf', null);
  // info = stp.fmt(info,'999*33x')
  // console.log(info);
	// v76 += ;
	var v77 = '';
	v76='';
	var ss = info.split(/\r\n|\r|\n/); //
	var idx = 0;
	var idx76 = 0;
  while (idx < ss.length && idx76 < 6){
     var s0 = ''+stp.fmt(ss[idx],'FMT72');
      console.log('['+s0+']   ' + ss[idx] )
     var ss0 = s0.replace(/\r/g, "").split(/\n/);
     if (ss0.length> 1){
       // idx76+=ss0.length;
       if (idx76+ss0.length > 6) {
        //console.log('long '  + idx76+ '  '+ss0.length + ' = ' + ss[idx] + '   ' + ss0.join('---'))
         v76 +=ss0.slice(0, 6-idx76).join('\r\n')+'\r\n';
         v77 += ss0.slice(6-idx76).join('\r\n')+'\r\n';
         // console.log('76: ' + v76 + ',  v77: ' + v77);
       } else {
       v76 +=s0+'\r\n';
       }
         idx76+=ss0.length;
       // ss[idx]= ss0;
     }else {
       idx76++;
       v76 +=s0+'\r\n';
     }
     idx++;
  }
	if (idx < ss.length) {
	  //v76 += ss.slice(0, 5).join('\r\n');
	  //console.log(v76);
	  v77 += ss.slice(idx).join('\r\n');
	  console.log(v77);
	} else {
	  // v76 += info;
	}
  // stp.log('info '+  info)
  // stp.log('-------2-- ');
  // v76 = stp.fmt(v76,'FMT72')
  stp.setData("TEXT/F76", v76);
  v77 = stp.fmt(v77,'20*35x')
  stp.setData("TEXT/F77A", v77);


}
