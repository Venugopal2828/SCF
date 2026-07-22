function check_mfvr() {
  // ExSvr.debug('-------------check 737 ------');
  var v77j = ExSvr.get_val(['F77J'], null);
  if (v77j) {
  // ExSvr.debug(v77j);
  var lines = v77j.split('\n'); // v77j.split(/\r|\n/);
  var i = 0;
  for (i = 0; i < lines.length; i++) {
  // ExSvr.debug(lines[i]);
    var line = lines[i].trim();
    if (line.length < 2) {
      ExSvr.add_err('T31', ['bad line, ', 'F77J', ss]);
      continue;
    }
    var re = i == 0 ? /^(\/[A-Z]{1,8}\/(.){0,40})$/ :  /^(\/[A-Z]{1,8}\/(.){0,40})|(\/\/(.){0,48})$/ ;
    // ExSvr.debug(' ' + i + '  '  + re + ' - ' + line + ' - ');
    if (re.test(line)){}
    else{
      ExSvr.add_err('T31', ['bad line, ', 'F77J', line]);
    }
  }
  }

  var v12d = ExSvr.get_val(['F12D'], null);
  // ExSvr.debug(v12d);
  if ('REFU' == v12d && !ExSvr.exist(['F77J'])){
  ExSvr.add_err('A01', ['77J must be present if 12D is REFU']);
  }

  // Ex.check('737', ['002', '003', '005', '017', '276']);
}