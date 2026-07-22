function check_mfvr() {
  ExSvr.debug('-------------check 798 ------');
  var mt = ExSvr.get_val(['B2','MT'], null);
  var v12 = ExSvr.get_val(['F12'], null);
  ExSvr.debug('' + mt+ ', ' +v12);
  var nm = 'if (typeof Ex.mfvr.csmt' + v12 +' == "function") Ex.mfvr.csmt' + v12 + '("' + mt + '");';
  try {
    // ExSvr.debug('' + mt+ ', ' + (typeof Ex.mfvr.csmt770) );
    eval(nm);
  } catch (e) {
    if (typeof alert == 'function') {
      alert('!' + nm);
    } else {
      ExSvr.add_err('SYS', [nm, e.message]);
    }
  }
}
Ex.mfvr.csmt700 = function (mt) {
  // Tag78, For MT 798<700> this field is not used.
}

Ex.mfvr.csmt719 = function (mt) {
  var b25g = ExSvr.exist(['F25G']);
  var b77j = ExSvr.exist(['F77J']);
  if (b25g && b77j){
    ExSvr.add_err('A71925', ['Field 25G or field 77J must be present, but not both.']);
  } else if (!b25g && !b77j){
    ExSvr.add_err('A71925', ['Field 25G or field 77J must be present, but not both.']);
  }
}
Ex.mfvr.csmt723 = function (mt) {
  var v12e = ExSvr.get_val(['F12E'], null);
  if (ExSvr.exist(['F31N'])){
    if ('TRNF' != v12e ) {
      ExSvr.add_err('A72331N', ['Field 31N is mandatory if field 12E is TRNF, otherwise not used.']);
    }
  } else {
    if ('TRNF' == v12e ) {
      ExSvr.add_err('A72331N', ['Field 31N is mandatory if field 12E is TRNF, otherwise not used.']);
    }
  }
}

Ex.mfvr.csmt737 = function (mt) {
  // Ex.check('737', ['002', '003', '005', '017', '276']);
  ExSvr.debug('-------------check 737 ------');
  var b77j = ExSvr.exist(['F77J']);
  if (b77j) {
    var v77j = ExSvr.get_val(['F77J'], null);
    var lines = v77j.split(/\r|\n/);
    var i = 0;
    for (i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (line.length < 2) {
        ExSvr.add_err('T31', ['bad line, ', 'F77J', ss]);
        continue;
      }
      var re = i == 0 ? /^(\/[A-Z]{1,8}\/(.){0,40})$/ :  /^(\/[A-Z]{1,8}\/(.){0,40})|(\/\/(.){0,48})$/ ;
      if (re.test(line)){}
      else{
        ExSvr.add_err('T31', ['bad line, ', 'F77J', line]);
      }
    }
  } else {
    var v12d = ExSvr.get_val(['F12D'], null);
    if ('REFU' == v12d ){
      ExSvr.add_err('A01', ['77J must be present if 12D is REFU']);
    }
  }
}
Ex.mfvr.csmt757 = function (mt) {
  var v12r = ExSvr.get_val(['F12R'], null);
  if (('PAYM' == v12r || 'BOTH' == v12r) && !ExSvr.exist(['F34D'])){
  ExSvr.add_err('A75734', ['34D must be present if 12R is PAYM or BOTH']);
  }

  // Ex.check('737', ['002', '003', '005', '017', '276']);
}


Ex.mfvr.csmt770 = function (mt) {
  var v24d_code = ExSvr.get_val(['F24D', 'Code'], null);
  ExSvr.debug('' + ExSvr.get_val(['F24D', 'AdditionalInformation'], null) + ', ' +v24d_code);
  if ('COUP' != v24d_code && 'COUW' != v24d_code) {
    if (ExSvr.exist(['F24D', 'AdditionalInformation']) ){
      ExSvr.add_err('A77024', ['24D AdditionalInformation may only be used when method is COUP or COUW']);
    }
  }
  if ('OTH' == ExSvr.get_val(['F71A'], null) ){
    if (!ExSvr.exist(['F73A']) ){
      ExSvr.add_err('A77073', ['73A must be used when code is OTH']);
    }
  } else if (ExSvr.exist(['F73A']) ){
      ExSvr.add_err('A77073', ['73A only be used when code is OTH']);
  }
  if ('OTHR' != ExSvr.get_val(['F29T','Code'], null) ) {
    if (ExSvr.exist(['F29T', 'Narrative']) ){
      ExSvr.add_err('A77029', ['29T Narrative may only be used when code is OTHR']);
    }
  }
}

Ex.mfvr.csmt771 = function (mt) {
  // MT 798.771, if field 25F is FINAL, this field 20 is mandatory otherwise this field must not be used.
}

Ex.mfvr.csmt772 = function (mt) {
  var v24d_code = ExSvr.get_val(['F24D', 'Code'], null);
  ExSvr.debug('' + ExSvr.get_val(['F24D', 'AdditionalInformation'], null) + ', ' +v24d_code);
  if ('COUW' != v24d_code) {
    if (ExSvr.exist(['F24D', 'AdditionalInformation']) ){
      ExSvr.add_err('A77024', ['24D AdditionalInformation may only be used when method is COUP or COUW']);
    }
  }
  if ('OTH' == ExSvr.get_val(['F71A'], null) ){
    if (!ExSvr.exist(['F73A']) ){
      ExSvr.add_err('A77073', ['73A must be used when code is OTH']);
    }
  } else if (ExSvr.exist(['F73A']) ){
      ExSvr.add_err('A77073', ['73A only be used when code is OTH']);
  }
}
