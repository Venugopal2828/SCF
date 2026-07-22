function main() {
  var txt = stp.raw();
  stp.log('raw text is ' + txt );
  var re_non = /[\r\n]+:7020:/
  if (re_non.test(txt) ){
    // dispatch to protocol, true means use original received data.
     stp.responseGAPI('PTXX.MTAA', true);
     stp.log('non standars swift, forward origin format directly');
     return;
  }
  stp.convert("com.cs.esp.swift.convert.PseudoMtConvert");
  var re = /[\r\n]+:12:(.)*AF/
  if (re.test(txt) ){
    stp.log('fileact mode swift ');
    stp.responseGAPI('PTMP.X2.AA'); 
  } else {
    stp.log('FIN mode swift ');
   stp.responseGAPI('PTHB.MT.AA');  
  }
}
main();
