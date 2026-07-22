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
	    stp.setData("laukey.send","0123456789Abcdef0123456789Abcdef");  
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
  }else if (/[\r\n]+:20Z:NON-REGULAR/.test(txt) ){
	stp.log('non regular 700 contain :20Z:  ');
	stp.convert("com.cs.esp.swift.convert.FinSimpleConvert");
	stp.responseGAPI('PT02.MTAA', true);
	return;
}
  var reFact = /[\r\n]+:12:(.)*AF/
  var reDoc = /\{2:IDOC/
  var reblr = /[\r\n]+:10A:(.)*/
  var reOxx = /\{2:O(.)*/
  stp.dump();
if (reblr.test(txt) ){
  stp.log('bolero mode ');
  stp.convert("com.cs.esp.bolero.BoleroMsgConvert");
  stp.responseGAPI('PTBLR.BYK');
} else if (reDoc.test(txt) ){
  stp.log('attach doc mode ');
  //stp.setData("fatt", "PTMP.FMAA");
  stp.setData("fatt", "PTEE.XFAA");
  stp.convert("com.cs.esp.mt798.Pseudo798Convert");
  stp.responseGAPI('PTMP.X2AA');
}else if (reFact.test(txt) ){
  stp.log('fileact mode swift ');
  stp.convert("com.cs.esp.swift.convert.PseudoMtConvert");
  stp.setData("laukey.send","0123456789Abcdef0123456789Abcdef");  
  stp.responseGAPI('PTMP.X2AA');
}else if (reOxx.test(txt) ){
  stp.log('FIN mode Oxx swift ');
  stp.convert("com.cs.esp.swift.convert.PseudoMtConvert");
  stp.responseGAPI('SYS.REST');
} else if (isMxPymt(txt) ) {
  stp.log('mx pymt mode ');
  stp.convert("com.cs.esp.swift.convert.PseudoMtConvert")
  stp.setData("laukey.send","0123456789Abcdef0123456789Abcdef");  
  //stp.responseGAPI('PTMX.X2AA'); susie test for mt-mx conversion
  stp.responseGAPI('PTHB.MXAA'); 
} else {
  stp.log('FIN mode swift ');
  if (/[\r\n]+:20Z:_SYS_VOLTRON_/.test(txt) ) {
    stp.convert("com.cs.esp.gapi.VoltronConvert");
    stp.responseGAPI('PT0.VOLTRON');
  } else {
    stp.convert("com.cs.esp.swift.convert.PseudoMtConvert");
    stp.log('FIN mode swift ');
    stp.setData("laukey.send","0123456789Abcdef0123456789Abcdef");    
   stp.responseGAPI('PTHB.MT.AA');  
  }
}
}
main();