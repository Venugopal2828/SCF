  var txt = stp.raw();
  if (txt.indexOf("2:O08") > 0){
	  stp.log('082 to none ');
	  stp.responseGAPI('PT082', true);
  } else {
    stp.convert("com.cs.esp.swift.convert.PseudoMtConvert");
    stp.responseGAPI('SYS.REST');
  }
