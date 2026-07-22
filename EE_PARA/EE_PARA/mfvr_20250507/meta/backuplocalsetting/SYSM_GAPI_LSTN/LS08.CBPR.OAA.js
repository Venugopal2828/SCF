function main() {
  var txt = stp.raw();
  stp.dump();
  stp.log('raw text is ' + txt );
  var ext_sys = stp.getData("gapi_ext_sys");
  stp.log('1 ' + stp.getMxTag(txt, "X1", "Sender")  );
  stp.log('2 ' + stp.getMxTag(txt, "X1", "Receiver")  );
  stp.log('3 ' + stp.getMxTag(txt, "MessageIdentifier", null)  );
  var FrBic = stp.getMxTag(txt, "BICFI", "Fr");
  stp.log('from ' + FrBic );
  if (FrBic == 'CITIUS33' || FrBic == 'CITIUS33XXX' ) {
      stp.log('MX mode Oxx swift ');
      stp.setData("native","true");
  } else {
      stp.log('MX mode Oxx swift, default will convert to MT ');
  }
  stp.convert("com.cs.esp.mtmx.PseudoMxConvert");
  stp.responseGAPI('SYS.REST');
}
main();
