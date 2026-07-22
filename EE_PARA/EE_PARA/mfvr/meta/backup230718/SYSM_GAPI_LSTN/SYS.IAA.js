// stp.dump();
//var mt = smms.mttype();
//var f20 = smms.tag('.//F20');
//stp.log(mt);
//stp.log(f20);
//if (mt == 'MT103') {
//  var f50a = smms.tag('.//F50*');
//  stp.log(f50a);
//}

function isMxPymt(txt) {
  var re20z = /[\r\n]+:20Z:(.)*/;
  var reMt = /\{2:I(103|202)/;
  return (re20z.test(txt) && reMt.test(txt));
}

function main() {
  var txt = stp.raw();
  stp.log('raw text is ' + txt );
  if (txt.indexOf("urn:iso:std:iso:20022:tech:xsd:") > 0){
	  stp.log('native mx, fileact mode swift ');
	  stp.responseGAPI('PTMX.X2AA', true);
	  return;
  }

  var ext_sys = stp.getData("gapi_ext_sys");
  if ("VOLTRON" == ext_sys) {
    stp.responseGAPI('PTMP.MTAA');
    return;
  }

  var re_non = /[\r\n]+:7020:/
  if (re_non.test(txt) ){
    stp.responseGAPI('PTMP.MTAA', true);
    stp.log('non standars swift ');
    return;
  }
  // stp.convert("com.cs.esp.mt798.Pseudo798Convert");
  // dispatch to protocol, true means use original received data.
  var reFact = /[\r\n]+:12:(.)*AF/
  var reDoc = /\{2:IDOC/
  var reblr = /[\r\n]+:10A:(.)*/
  var reOxx = /\{2:O(.)*/
  stp.dump();
if (reblr.test(txt) ){
  stp.log('bolero mode ');
  stp.convert("com.cs.esp.bolero.BoleroMsgConvert");
  stp.responseGAPI('PTBLR.BYK');
  // com.cs.esp.mt798.Pseudo798Convert
} else if (reDoc.test(txt) ){
  stp.log('attach doc mode ');
  stp.setData("fatt", "PTMP.FMAA");
  // stp.convert("com.cs.esp.swift.convert.PseudoMtConvert")
  stp.convert("com.cs.esp.mt798.Pseudo798Convert");
  stp.responseGAPI('PTMP.X2AA');
}else if (reFact.test(txt) ){
  stp.log('fileact mode swift ');
  stp.convert("com.cs.esp.swift.convert.PseudoMtConvert");
  stp.responseGAPI('PTMP.X2AA');
}else if (reOxx.test(txt) ){
  stp.log('FIN mode Oxx swift ');
  stp.convert("com.cs.esp.swift.convert.PseudoMtConvert");
  stp.responseGAPI('SYS.REST');
} else if (isMxPymt(txt) ) {
  stp.log('mx pymt mode ');
  // stp.setData("fatt", "PTMP.FMAA");
  // stp.setData("laukey.send","11111111111111111111111111111111");
  stp.convert("com.cs.esp.swift.convert.PseudoMtConvert")
  // stp.convert("com.cs.esp.mt798.Pseudo798Convert");
  stp.responseGAPI('PTMX.X2AA');
} else {
  stp.log('FIN mode swift ');
  if (/[\r\n]+:20Z:_SYS_VOLTRON_/.test(txt) ) {
    stp.convert("com.cs.esp.gapi.VoltronConvert");
    stp.responseGAPI('PT0.VOLTRON');
  } else {
    stp.convert("com.cs.esp.swift.convert.PseudoMtConvert");
    // stp.setData("laukey.send","11111111111111111111111111111111");
    // stp.setData("header.send","yyMMddHHmmss");
    stp.responseGAPI('PTMP.MTAA');
    // stp.responseGAPI('PTFTP001');
    // stp.responseGAPI('PTSFTP01');
  }
}
}
main();
