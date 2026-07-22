/**
 * ptii.pdf 4.1
 */
Ex.mfvr.ruleT10 = function (mt) {
  var repeatCfg;
  if (Ex.in_list(mt, ['935', '203', '110', '201', '210', '410', '412', '420', '422', '450', '456'])) {
    repeatCfg = [
      ['Loop1'], 10
    ];
  } else if ('204' == mt) {
    repeatCfg = [
      ['SeqB'], 10
    ];
  } else if ('300' == mt) {
    if (this.ver < '2017') {
      return;
    }
    repeatCfg = [
      ['SeqA', 'LoopSeqA', 'F14S'], 2
    ];
  } else if ('305' == mt) {
    if (this.ver < '2017') {
      return;
    }
    repeatCfg = [
      ['SeqA', 'Loop1', 'F14S'], 2
    ];
  }
  if (!repeatCfg) {
    return;
  }
  var seqAry = repeatCfg[0];
  var loop = ExSvr.getflds(seqAry, null);
  var counter = 0;
  for (var nd in loop) {
    if (!Ex.isNode(loop[nd])) {
      continue;
    }
    counter++;
  }
  var maxRepeat = repeatCfg[1];
  if (counter > maxRepeat) {
    var errMsg = [];
    errMsg.push('The repetitive sequence occurred more than the maximum number of times permitted. Maximum = ' +
        maxRepeat + ', actual = ' + counter);
    for (var i in seqAry) {
      errMsg.push(seqAry[i]);
    }
    ExSvr.add_err('T10', errMsg);
  }
};

Ex.mfvr.ruleT11 = function(mt) {
  var repeatCfg;
  if ('203' == mt || '201' == mt) {
    repeatCfg = [
      ['Loop1'], 2
    ];
  }
  if (!repeatCfg) {
    return;
  }
  var seqAry = repeatCfg[0];
  var loop = ExSvr.getflds(seqAry, null);
  var counter = 0;
  for (var nd in loop) {
    if (!Ex.isNode(loop[nd])) {
      continue;
    }
    counter++;
  }
  var minRepeat = repeatCfg[1];
  if (counter < minRepeat) {
    var errMsg = [];
    errMsg.push('The repetitive sequence occurred less than the minimum number of times required');
    for (var i in seqAry) {
      errMsg.push(seqAry[i]);
    }
    ExSvr.add_err('T11', errMsg);
  }
};

Ex.mfvr.ruleT12 = function(mt) {
  if (this.ver < '2017') {
    return;
  }

  if (!Ex.in_list(mt, ['300', '305', '306'])) {
    return;
  }

  var field_path;
  if ('300' == mt) {
    field_path = ['SeqE', 'F35B', 'IdentificationOfInstrument'];
  } else if ('305' == mt) {
    field_path = ['SeqB', 'F35B', 'IdentificationOfInstrument'];
  } else if ('306' == mt) {
    field_path = ['SeqM', 'F35B', 'IdentificationOfInstrument'];
  }

  var identification = ExSvr.get_val(field_path, null);
  if (!identification) {
    return;
  }
  if (!identification.startsWith("ISIN")) {
    var errMsg = [];
    errMsg.push('Must start with the code ISIN');
    for (var i = 0; i < field_path.length; i++) {
      errMsg.push(field_path[i]);
    }
    errMsg.push(identification);
    ExSvr.add_err('T12', errMsg);
  }
};

Ex.mfvr.ruleT14 = function(mt) {
  if ('935' == mt) {
    if (this.ver < '2016') {
      return;
    }
    var loop1 = ExSvr.getflds(['Loop1'], null);
    if (!loop1) {
      return;
    }
    for (var i in loop1) {
      if (!Ex.isNode(loop1[i])) {
        continue;
      }
      if (!ExSvr.exist(['Loop2'], loop1[i])) {
        continue;
      }
      var loop2 = ExSvr.getflds(['Loop2'], loop1[i]);
      for (var j in loop2) {
        if (!Ex.isNode(loop2[j])) {
          continue;
        }
        var sign_found = ExSvr.exist(['F37H', 'Sign'], loop2[j]);
        var rate = ExSvr.get_val(['F37H', 'Rate'], loop2[j]);
        if (rate == '0,' && sign_found) {
          ExSvr.add_err('T14', ['Not Allowed', 'F37H', 'Sign']);
        }
      }
    }
  }
};

Ex.mfvr.ruleT17 = function(mt) {
  if (this.ver < '2017') {
    return;
  }

  if (!Ex.in_list(mt, ['300', '305', '306'])) {
    return;
  }

  var field_path;
  if ('300' == mt) {
    field_path = ['SeqE', 'F35B'];
  } else if ('305' == mt) {
    field_path = ['SeqB', 'F35B'];
  } else if ('306' == mt) {
    field_path = ['SeqM', 'F35B'];
  }

  if (ExSvr.exist(field_path, null)) {
    var f35b = ExSvr.get_val(field_path, null);
    var identification = ExSvr.get_val(['IdentificationOfInstrument'], f35b);
    var description = ExSvr.get_val(['DescriptionOfInstrument'], f35b);
    if (!identification && !description) {
      var errMsg = [];
      errMsg.push('At least Identification of Instrument or Description of Instrument must be present');
      for (var i = 0; i < field_path.length; i++) {
        errMsg.push(field_path[i]);
      }
      ExSvr.add_err('T17', errMsg);
    }
  }
};

Ex.mfvr.ruleT18 = function(mt) {
  if (mt.length != 3) return;
  var sMtCode;
  if (mt.substring(1) == '92') {
    sMtCode = ExSvr.get_val(['F11S', 'MTNumber'], null);
  } else if ( mt.substring(1) == '96' || mt.substring(1) == '95' ) {
    sMtCode = ExSvr.get_val(['Choice_11RS', '*', 'MTNumber'], null);
  }
  if (sMtCode) {
    if (sMtCode.length > 3) {
      ExSvr.add_err('T18', ['Invalid Mt Code', 'F11S', 'MTNumber']);
      return;
    }
    var nMtCode = parseInt(sMtCode, 10);
    if (nMtCode < 100 || nMtCode > 999) {
      ExSvr.add_err('T18', ['Invalid Mt Code', 'F11S', 'MTNumber']);
    } else {
    }
  }
};

Ex.mfvr.ruleT22 = function(mt) {
  var vf22c,
      expected_ref_code,
      vf36,
      vf37m_seqb;

  if ('300' == mt) {
    vf22c = ExSvr.get_val(['SeqA', 'F22C'], null);
    vf36 = ExSvr.get_val(['SeqB', 'F36'], null);
    expected_ref_code = Ex.mfvr.get_refcode_from_f36(vf36);
    if (!Ex.mfvr.check_ref_code(vf22c, expected_ref_code)) {
      ExSvr.add_err('T22', ['Invalid Reference Code', 'SeqA', 'F22C']);
    }
  } else if ('303' == mt) {
    vf22c = ExSvr.get_val(['SeqA', 'F22C'], null);
    var vf94A = ExSvr.get_val(['SeqA', 'F94A'], null);
    if ('FORX' == vf94A) {
      vf36 = ExSvr.get_val(['SeqB', 'F36'], null);
    } else if ('FXOP' == vf94A) {
      vf36 = ExSvr.get_val(['SeqC', 'F36A'], null);
    }
    expected_ref_code = Ex.mfvr.get_refcode_from_f36(vf36);
    if (!Ex.mfvr.check_ref_code(vf22c, expected_ref_code)) {
      ExSvr.add_err('T22', ['Invalid Reference Code', 'SeqA', 'F22C']);
    }
  } else if ('306' == mt) {
    vf22c = ExSvr.get_val(['SeqA', 'F22C'], null);
    if (ExSvr.exist('SeqD/F36')) {
      vf36 = ExSvr.get_val(['SeqD', 'F36'], null);
    } else if (this.ver >= '2023' && ExSvr.exist('SeqF/F37J')) {
      vf36 = ExSvr.get_val(['SeqF', 'F37J'], null);
    } else if ( ExSvr.exist('SeqG/F37U') ) {
      vf36 = ExSvr.get_val(['SeqG', 'F37U'], null);
    }
    // ExSvr.debug("T22 for MT306 have't been implemented yet !!!" + vf36 + '  ' + vf22c);
    if (vf36) {
      expected_ref_code = Ex.mfvr.get_refcode_from_f36(vf36);
    } else {
      expected_ref_code = '0000';
    }
    if (!Ex.mfvr.check_ref_code(vf22c, expected_ref_code)) {
      ExSvr.add_err('T22', ['Invalid Reference Code', 'SeqA', 'F22C', vf22c]);
    }
  } else if ('320' == mt || '330' == mt) {
    vf22c = ExSvr.get_val(['SeqA', 'F22C'], null);
    var vf37g_seqb = ExSvr.get_val(['SeqB', 'F37G', 'Rate'], null);
    expected_ref_code = Ex.mfvr.get_refcode_from_f36(vf37g_seqb);
    if (!Ex.mfvr.check_ref_code(vf22c, expected_ref_code)) {
      ExSvr.add_err('T22', ['Invalid Reference Code', 'SeqA', 'F22C']);
    }
  } else if ('340' == mt || '341' == mt) {
    vf22c = ExSvr.get_val(['SeqA', 'F22C'], null);
    vf37m_seqb = ExSvr.get_val(['SeqB', 'F37M', 'Rate'], null);
    expected_ref_code = Ex.mfvr.get_refcode_from_f36(vf37m_seqb);
    if (!Ex.mfvr.check_ref_code(vf22c, expected_ref_code)) {
      ExSvr.add_err('T22', ['Invalid Reference Code', 'SeqA', 'F22C']);
    }
  } else if ('350' == mt) {
    vf22c = ExSvr.get_val(['SeqA', 'F22C'], null);
    vf37m_seqb = ExSvr.get_val(['SeqB', 'F37J'], null);
    expected_ref_code = Ex.mfvr.get_refcode_from_f36(vf37m_seqb);
    if (!Ex.mfvr.check_ref_code(vf22c, expected_ref_code)) {
      ExSvr.add_err('T22', ['Invalid Reference Code', 'SeqA', 'F22C']);
    }
  } else if ('360' == mt || '361' == mt || '362' == mt || '364' == mt || '365' == mt) {
    vf22c = ExSvr.get_val(['SeqA', 'F22C'], null);
    var vf30p = ExSvr.get_val(['SeqA', 'F30P'], null);
    expected_ref_code = vf30p.substring(2, 6);
    if (!Ex.mfvr.check_ref_code(vf22c, expected_ref_code)) {
      ExSvr.add_err('T22', ['Invalid Reference Code', 'SeqA', 'F22C']);
    }
  } else if ('305' == mt) {
    var common_ref = ExSvr.get_val(['SeqA', 'F22', 'CommonReference'], null);
    vf36 = ExSvr.get_val(['SeqA', 'F36'], null);
    expected_ref_code = Ex.mfvr.get_refcode_from_f36(vf36);
    if (!Ex.mfvr.check_ref_code(common_ref, expected_ref_code)) {
      ExSvr.add_err('T22', ['Invalid Reference Code', 'SeqA', 'F22', 'CommonReference']);
    }
  }
};

Ex.mfvr.check_ref_code = function(common_ref, expected_ref_code) {
  if (common_ref.length() != 16) {
    return false;
  }
  var sender = ExSvr.get_val('SENDER', null);
  var p1 = sender.substring(0, 4)+sender.substring(6, 8);
  var recver = ExSvr.get_val('RECVER', null);
  var p2 = recver.substring(0, 4)+recver.substring(6, 8);
  var p3 = common_ref.substring(0, 6);
  var p4 = common_ref.substring(10);
  if ( (p1 == p3 && p2 == p4) || (p1 == p4 && p2 == p3) ) {
    // it is ok
  } else {
    return false;
  }
  // ExSvr.debug("-------------------- " + common_ref + ' - '+ expected_ref_code + ' - '+ sender + ' - '+ recver +' '+ p1 +' '+ p2);
  var ref_code = common_ref.substring(6, 10);
  return Ex.equals(ref_code, expected_ref_code);
};

Ex.mfvr.get_refcode_from_f36 = function(vf36) {
  if (!vf36) {
    return null;
  }
  var expected_ref_code = "";
  var nonZeroFound = false;
  for (var i = vf36.length() - 1; i >= 0; i--) {
    var c = vf36.substring(i, i + 1);
    if (c == "," ) continue;
    if (!nonZeroFound && c != "0") {
      nonZeroFound = true;
    }
    if (!nonZeroFound && c == "0") {
      continue;
    }
    if (expected_ref_code.length < 4) {
      expected_ref_code += c;
    } else {
      break;
    }
  }
  if (expected_ref_code.length < 4) {
    for (var j = 4 - expected_ref_code.length; j > 0; j--) {
      expected_ref_code += '0';
    }
  }

  return expected_ref_code.split("").reverse().join("");
};

Ex.mfvr.ruleT26 = function(mt) {
  // See FinJsonConvert#validT26()
};

Ex.mfvr.ruleT31 = function (mt) {
  if (!ExSvr.exist(['F72'])) {
    return;
  }
  // 72 Narrative - Structured Format
  //  line 1  :  /8c/[additional information]
  //  line 2-6:  [//continuation of additional information]
  //        or:  /8c/[additional information]
  var v72 = ExSvr.get_val(['F72'], null);
  var split_val;
  var r_c = v72.indexOf('\r');
  if (r_c != -1) {
    split_val = v72.split('\r');
  } else {
    split_val = v72.split('\n');
  }
  var i = 0;
  var currRow = split_val.length;
  for (i = 0; i < currRow; i++) {
    var ss = split_val[i].trim();
    if (ss.length < 2) {
      ExSvr.add_err('T31', ['bad line, ', 'F72', ss]);
      continue;
    }
    var ch = ss.substr(0, 1);
    if (ch != '/') {
      ExSvr.add_err('T31', ['bad line, first char must start with "/" ', 'F72 ', ss]);
      continue;
    }
    var pos = ss.indexOf('/', 1);
    if (pos == -1) {
      ExSvr.add_err('T31', ['bad line. second / need', 'F72', ss]);
    } else {
      var code = ss.substr(1, pos - 1);
      var cnt = ss.substr(pos + 1);
      // ExSvr.debug('code [' + code + '], cnt [' + cnt + ']');
      var code_len = code.length;
      if (code_len > 8) {
        ExSvr.add_err('T31', ['bad line. code len ', 'F72', ss]);
      } else if (i === 0 && code_len === 0) {
        ExSvr.add_err('T31', ['first line must have code. ', 'F72', ss]);
      } else if (code_len === 0 && cnt.length === 0) {
        ExSvr.add_err('T31', ['meaningless line. ', 'F72', ss]);
      }
      // check duplicate code
    }
  }
  // T31: The line, subfield or component separator or delimiter (CrLf, blank, slash, or double slash) is missing or incorrect.
};

Ex.mfvr.ruleT38 = function (mt) {
  if (this.ver < '2015') {
    return;
  }

  var nd, timeAndLocation, time;
  if ('300' == mt) {
    if (this.ver < '2017') {
      return;
    }
    var loopSeqA = ExSvr.getflds(['SeqA', 'LoopSeqA'], null);
    for (nd in loopSeqA) {
      if (!Ex.isNode(loopSeqA[nd])) {
        continue;
      }
      timeAndLocation = ExSvr.get_val(['F14S', 'TimeAndLocation'], loopSeqA[nd]);
      if (!timeAndLocation) {
        continue;
      }
      time = timeAndLocation.substring(0, 4);
      if (!ExSvr.checkTime('HHMM', time)) {
        ExSvr.add_err('T38', ['Invalid time (HHMM)', 'SeqA', 'F14S', 'TimeAndLocation', time]);
      }
    }
  } else if ('305' == mt) {
    var loop1 = ExSvr.getflds(['SeqA', 'Loop1'], null);
    for (nd in loop1) {
      if (!Ex.isNode(loop1[nd])) {
        continue;
      }
      timeAndLocation = ExSvr.get_val(['F14S', 'TimeAndLocation'], loop1[nd]);
      if (!timeAndLocation) {
        continue;
      }
      time = timeAndLocation.substring(0, 4);
      if (!ExSvr.checkTime('HHMM', time)) {
        ExSvr.add_err('T38', ['Invalid time (HHMM)', 'SeqA', 'F14S', 'TimeAndLocation', time]);
      }
    }
  } else if ('306' == mt) {
    var loopSeqB = ExSvr.getflds(['SeqB', 'LoopSeqB'], null);
    for (nd in loopSeqB) {
      if (!Ex.isNode(loopSeqB[nd])) continue;
      timeAndLocation = ExSvr.get_val(['F14S', 'TimeAndLocation'], loopSeqB[nd]);
      if (!timeAndLocation) {
        continue;
      }
      time = timeAndLocation.substring(0, 4);
      if (!ExSvr.checkTime('HHMM', time)) {
        ExSvr.add_err('T38', ['Invalid time (HHMM)', 'SeqB', 'F14S', 'TimeAndLocation', time]);
      }
    }

    if (ExSvr.exist(['SeqF', 'SeqF1'], null)) {
      var loopSeqF1 = ExSvr.getflds(['SeqF', 'SeqF1'], null);
      if (loopSeqF1) {
        for (nd in loopSeqF1) {
          if (!Ex.isNode(loopSeqF1[nd])) continue;

          var loopF14s_seqf1 = ExSvr.getflds(['LoopSeqF1'], loopSeqF1[nd]);
          if (!loopF14s_seqf1) {
            continue;
          }
          for (var nd1 in loopF14s_seqf1) {
            if (!Ex.isNode(loopF14s_seqf1[nd1])) continue;
            timeAndLocation = ExSvr.get_val(['F14S', 'TimeAndLocation'], loopF14s_seqf1[nd1]);
            if (!timeAndLocation) {
              continue;
            }
            time = timeAndLocation.substring(0, 4);
            if (!ExSvr.checkTime('HHMM', time)) {
              ExSvr.add_err('T38', ['Invalid time (HHMM)', 'SeqF', 'SeqF1', 'F14S', 'TimeAndLocation', time]);
            }
          }
        }
      }
    }

    if (ExSvr.exist(['SeqG'], null)) {
      var loopSeqG = ExSvr.getflds(['SeqG'], null);
      for (nd in loopSeqG) {
        if (!Ex.isNode(loopSeqG[nd])) {
          continue;
        }

        var loopF14s_seqg = ExSvr.getflds(['LoopSeqG'], loopSeqG[nd]);
        if (!loopF14s_seqg) {
          continue;
        }
        for (var nd2 in loopF14s_seqg) {
          if (!Ex.isNode(loopF14s_seqg[nd2])) {
            continue;
          }
          timeAndLocation = ExSvr.get_val(['F14S', 'TimeAndLocation'], loopF14s_seqg[nd2]);
          if (!timeAndLocation) {
            continue;
          }
          time = timeAndLocation.substring(0, 4);
          if (!ExSvr.checkTime('HHMM', time)) {
            ExSvr.add_err('T38', ['Invalid time (HHMM)', 'SeqG', 'F14S', 'TimeAndLocation', time]);
          }
        }
      }
    }

    var loopSeqH = ExSvr.getflds(['SeqH', 'LoopSeqH'], null);
    if (loopSeqH) {
      for (nd in loopSeqH) {
        if (!Ex.isNode(loopSeqH[nd])) continue;
        timeAndLocation = ExSvr.get_val(['F14S', 'TimeAndLocation'], loopSeqH[nd]);
        if (!timeAndLocation) {
          continue;
        }
        time = timeAndLocation.substring(0, 4);
        if (!ExSvr.checkTime('HHMM', time)) {
          ExSvr.add_err('T38', ['Invalid time (HHMM)', 'SeqH', 'F14S', 'TimeAndLocation', time]);
        }
      }
    }

    var timeAndLocation_seqI = ExSvr.get_val(['SeqI', 'F14S', 'TimeAndLocation'], null);
    if (timeAndLocation_seqI) {
      time = timeAndLocation_seqI.substring(0, 4);
      if (!ExSvr.checkTime('HHMM', time)) {
        ExSvr.add_err('T38', ['Invalid time (HHMM)', 'SeqI', 'F14S', 'TimeAndLocation', time]);
      }
    }

    var timeAndLocation_seqJ = ExSvr.get_val(['SeqJ', 'F14S', 'TimeAndLocation'], null);
    if (timeAndLocation_seqJ) {
      time = timeAndLocation_seqJ.substring(0, 4);
      if (!ExSvr.checkTime('HHMM', time)) {
        ExSvr.add_err('T38', ['Invalid time (HHMM)', 'SeqJ', 'F14S', 'TimeAndLocation', time]);
      }
    }
  }
};

Ex.mfvr.ruleT49 = function(mt) {
  if (this.ver < '2016') {
    return;
  }

  var path;
  if ('300' == mt) {
    path = ['SeqC', 'F72'];
  } else if ('305' == mt) {
    path = ['SeqA', 'F72'];
  } else if ('306' == mt) {
    path = ['SeqK', 'F72'];
  }

  var invalidCodes = ['UTI', 'PUTI', 'USI', 'PUSI'];

  if ('300' == mt || '305' == mt || '306' == mt) {
    var f72 = ExSvr.get_val(path, null);
    if (!f72) {
      return;
    }
    var lines = f72.split("\n");
    var i, j;
    for (i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (line.substring(0, 1) != '/') {
        continue;
      }
      var secondSlashIdx = line.indexOf("/", 1);
      if (secondSlashIdx == -1) {
        continue;
      }
      var code = line.substring(1, secondSlashIdx);
      for (j = 0; j < invalidCodes.length; j++) {
        if (invalidCodes[j] == code) {
          var errDesc = ['Invalid code'];
          for (var k = 0; k < path.length; k++) {
            errDesc.push(path[k]);
          }
          errDesc.push(code);
          ExSvr.add_err('T49', errDesc);
        }
      }
    }
  }
};

Ex.mfvr.ruleT50 = function (mt, flds) {
  // valid date time
  var v = ExSvr.get_val(flds, null);
  // mmdd, yymmdd, yymm, yyyymmdd
  // yyyy, 0000
  var yy = v.substr(0, 2);
  var year;
  if (yy > '79') {
    year = '19' + yy;
  } else {
    year = '20' + yy;
  }
  if (year > 2060) {
    ExSvr.add_err('T50', ['Invalid date', flds]);
  }
};

Ex.mfvr.ruleT50B = function (mt) {
  // valid date time
  if (Ex.in_list(mt, ['101', '102', '102.STP', '103','103.STP','103.REMIT', '104','107', '110','111','112',
   '200','201','202','202.COV','203','204','205', '205.COV', '210', '910'])) {
  var fldGroups = ['F32A/Date', 'F30'];
  for (var grpIdx in fldGroups) {
    var flds = fldGroups[grpIdx];
    var v = ExSvr.get_val(flds, null);
    if (Ex.isEmpty(v))
      continue;
    // mmdd, yymmdd, yymm, yyyymmdd
    var yy = Number(v.substr(0, 2));
    if (yy > 60 || yy < 1) {
      ExSvr.add_err('T50B', ['Invalid value date', flds, v]);
    }
  }
  }
};

Ex.mfvr.ruleT51 = function (mt, flds) {
  // T51: <DC> ‘D’ | ‘C’ the debit/credit code (Error Code T51)
  // T61: <DM> ‘D’ | ‘M’ the days/months code (Error Code T61)
  // T52: <CUR> 3!a = must be a valid ISO 4217 currency code, e.g., USD for the United States dollar. (Error Code T52)
  // All code words (e.g., ’D’, ’C’, ’PCT’, ’OUR’, ’BEN’, etc) including currency codes (’USD’, ‘EUR’, ’BEF’, etc.) must be in upper case format
  // T50: 'YYYY' must not consist entirely of zeroes, e.g. '0000' is rejected "T50".
  // T50: The valid range of value dates implemented on the SWII system is from 1980 to 2060

  var pass = ExSvr.chk_ccy(flds, null, null);
  if (!pass) {
    ExSvr.add_err('Sw.Stds.D00005', ['Invalid currency code', flds]);
  }
};

Ex.mfvr.ruleT52 = function(mt) {
  if (mt == '300' || mt == '305') {
    if (this.ver < '2017') {
      return;
    }
    var v32e = ExSvr.get_val(['SeqA', 'F32E'], null);
    if (v32e) {
      var passed = ExSvr.checkCcyCode(v32e);
      if (!passed) {
        ExSvr.add_err('T52', ['Invalid currency code', 'SeqA', 'F32E', v32e]);
      }
    }
  }
};

/**
 * This check applies to Subfield 1, component 1:
 * field 50F in MTs 101, 102, 102 STP, 103, 103 REMIT, 103 STP, 202 COV, 205 COV, 210, 910
 *
 * This check applies to all MTs containing field 50F, when appended to Common Group MTs n92, n95, n96.
 */
Ex.mfvr.ruleT54 = function (mt) {
  // The format of the first line of Field 50F is invalid.
  // line1: /34x         (Account)
  //    or: 4!a/2!a/27x  (Code)(Country Code)(Identifier)
  // line 2-5: 1!n/33x   (Number)(detail)

  if (Ex.in_list(mt, ['101'])) {
    var partyIdentifier_seqa = ExSvr.get_val(['SeqA', 'Choice_50FGH', 'F50F', 'PartyIdentifier'], null);
    if (partyIdentifier_seqa && !Ex.mfvr.checkFmtOfPtyIdInF50F(partyIdentifier_seqa)) {
      ExSvr.add_err('T54', ['Invalid PartyIdentifier', 'SeqA', '50a', 'F50F', 'PartyIdentifier', partyIdentifier_seqa]);
    }

    var loop_seqb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop_seqb) {
      if (!Ex.isNode(loop_seqb[nd])) {
        continue;
      }
      var partyIdentifier_seqb = ExSvr.get_val(['Choice_50FGH', 'F50F', 'PartyIdentifier'], loop_seqb[nd]);
      if (partyIdentifier_seqb && !Ex.mfvr.checkFmtOfPtyIdInF50F(partyIdentifier_seqb)) {
        ExSvr.add_err('T54', ['Invalid PartyIdentifier', 'SeqB', '50a', 'F50F', 'PartyIdentifier', partyIdentifier_seqb]);
      }
    }

  } else if (Ex.in_list(mt, ['103'])) {
    var partyIdentifier = ExSvr.get_val(['Choice_50AFK', 'F50F', 'PartyIdentifier'], null);
    if (partyIdentifier && !Ex.mfvr.checkFmtOfPtyIdInF50F(partyIdentifier)) {
      ExSvr.add_err('T54', ['Invalid PartyIdentifier', '50a', 'F50F', 'PartyIdentifier', partyIdentifier]);
    }
  }
};

Ex.mfvr.checkFmtOfPtyIdInF50F = function(partyIdentifier) {
  if (!partyIdentifier || partyIdentifier.length === 0) {
    return false;
  }
  // ExSvr.debug(partyIdentifier);
  // ExSvr.debug('len: '+ partyIdentifier.length());
  var isValid = true;
  if (partyIdentifier.substring(0, 1) == '/') { // /34x ?
    if (partyIdentifier.length() > 35) {
      isValid = false;
    }
  } else { // 4!a/2!a/27x ?
    if (partyIdentifier.length() < 9 || partyIdentifier.substring(4, 5) != '/' ||
        partyIdentifier.substring(7, 8) != '/') {
      isValid = false;
    }
  }

  return isValid;
};

/**
 * This check applies to Subfield 1, component 1:
 * field 50F in MTs 101, 102, 102 STP, 103, 103 REMIT, 103 STP, 110, 202 COV, 205 COV, 210, 910
 *
 * This check applies to all MTs containing field 50F, when appended to Common Group MTs n92, n95, n96.
 */
Ex.mfvr.ruleT55 = function(mt) {
  var i;
  if (Ex.in_list(mt, ['101'])) {
    var party_identifier_seqa = ExSvr.get_val(['SeqA', 'Choice_50FGH', 'F50F', 'PartyIdentifier'], null);
    if (!Ex.mfvr.checkCodesOfF50F(party_identifier_seqa)) {
      ExSvr.add_err('T55', ['Invalid Code', 'SeqA', '50a', 'F50F', 'PartyIdentifier', party_identifier_seqa]);
    }

    var loop_seqb = ExSvr.getflds(['SeqB'], null);
    for (i in loop_seqb) {
      if (!Ex.isNode(loop_seqb[i])) {
        continue;
      }
      var party_identifier_seqb = ExSvr.get_val(['Choice_50FGH', 'F50F', 'PartyIdentifier'], loop_seqb[i]);
      if (!Ex.mfvr.checkCodesOfF50F(party_identifier_seqb)) {
        ExSvr.add_err('T55', ['Invalid Code', 'SeqB', '50a', 'F50F', 'PartyIdentifier', party_identifier_seqb]);
      }
    }

  } else if (Ex.in_list(mt, ['103'])) {
    var partyIdentifier = ExSvr.get_val(['Choice_50AFK', 'F50F', 'PartyIdentifier'], null);
    if (partyIdentifier && partyIdentifier.indexOf('/') > 0 && !Ex.mfvr.checkCodesOfF50F(partyIdentifier)) {
      ExSvr.add_err('T55', ['Invalid Code', 'Choice_50AFK', 'F50F', 'PartyIdentifier', 'Code', partyIdentifier]);
    }

  } else if (Ex.in_list(mt, ['110'])) {
    if (this.ver < '2017') {
      return;
    }

    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (i in loop1) {
      if (!Ex.isNode(loop1[i])) {
        continue;
      }
      var party_identifier = ExSvr.get_val(['Choice_50AFK', 'F50F', 'PartyIdentifier'], loop1[i]);
      if (!Ex.mfvr.checkCodesOfF50F(party_identifier)) {
        ExSvr.add_err('T55', ['Invalid Code', '50a', 'F50F', 'PartyIdentifier', 'Code', party_identifier]);
      }
    }
  }
};

// Format of the expected Party Identifier: 4!a/2!a/27x  (Code)(Country Code)(Identifier)
Ex.mfvr.isCodeCountryIdentifierFmt = function(party_identifier) {
  if (!party_identifier || party_identifier.length() < 9) {
    return false;
  }
  var i, c;
  for (i = 0; i < 8; i++) {
    c = party_identifier.charAt(i);
    if ((i == 4 || i == 7) && c != 47) { // 47 = '/'
      return false;
    } else {
      if (c < 65 && c > 90) { // 65 = 'A', 90 = 'Z'
        return false;
      }
    }
  }
  return true;
};

Ex.mfvr.checkCodesOfF50F = function(party_identifier) {
  if (!Ex.mfvr.isCodeCountryIdentifierFmt(party_identifier)) {
    return true;
  }

  var code = party_identifier.substring(0, 4);
  return Ex.in_list(code, ['ARNU', 'CCPT', 'CUST', 'DRLC', 'EMPL', 'NIDN', 'SOSE', 'TXID']);
};

/**
 * This check applies to Subfield 2, Lines 2-5:
 * field 50F in MTs 101, 102, 102 STP, 103, 103 REMIT, 103 STP, 110, 202 COV, 205 COV, 210, 910
 *
 * This check applies to all MTs containing field 50F, when appended to Common Group MTs n92, n95, n96.
 */
Ex.mfvr.ruleT56 = function(mt) {
  if (this.ver < '2015') {
    return;
  }
  if (mt == '110' && this.ver < '2017') {
    return;
  }

  var nm_and_addr, name_and_dddr_detail;
  if (Ex.in_list(mt, ['101', '102', '102.STP', '110', '202.COV', '205.COV', '210'])) {
    if (Ex.in_list(mt, ['101'])) {
      nm_and_addr = ExSvr.get_val(['SeqA', 'Choice_50FGH', 'F50F', 'NameAndAddress'], null);
      if (nm_and_addr) {
        Ex.mfvr.validateNmAndAddrOfF50F(nm_and_addr, ['SeqA', 'Choice_50FGH', 'F50F', 'NameAndAddress']);
      }
    }

    var loop_name;
    var choice_name;
    if (mt == '110' ) {
      loop_name = 'Loop1';
      // choice_name = 'Choice_50FGH';
      choice_name = 'Choice_50AFK';
    } else if ( mt == '210') {
      loop_name = 'Loop1';
      choice_name = 'Choice_50CF';
    } else {
      loop_name = 'SeqB';
      choice_name = 'Choice_50AFK';
    }
    var loop = ExSvr.getflds([loop_name], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i])) {
        continue;
      }
      nm_and_addr = ExSvr.get_val([choice_name, 'F50F', 'NameAndAddress'], loop[i]);
      if (nm_and_addr) {
        Ex.mfvr.validateNmAndAddrOfF50F(nm_and_addr, [loop_name, choice_name, 'F50F', 'NameAndAddress']);
      }

      name_and_dddr_detail = ExSvr.get_val(['Choice_59AF', 'F59F', 'NameAndAddressDetails'], loop[i]);
      if (!name_and_dddr_detail) {
        name_and_dddr_detail = ExSvr.get_val(['Choice_59F', 'F59F', 'NameAndAddressDetails'], loop[i]);
      }
      if (name_and_dddr_detail) {
        Ex.mfvr.validateNmAndAddrOfF59F(name_and_dddr_detail, mt, [loop_name, 'Choice_59AF', 'F59F', 'NameAndAddressDetails']);
      }
    }

  } else if (Ex.in_list(mt, ['103', '103.REMIT', '103.STP'])) {
    nm_and_addr = ExSvr.get_val(['Choice_50AFK', 'F50F', 'NameAndAddress'], null);
    if (nm_and_addr) {
      Ex.mfvr.validateNmAndAddrOfF50F(nm_and_addr, ['Choice_50AFK', 'F50F', 'NameAndAddress']);
    }

    name_and_dddr_detail = ExSvr.get_val(['Choice_59AF', 'F59F', 'NameAndAddressDetails'], null);
    if (name_and_dddr_detail) {
      Ex.mfvr.validateNmAndAddrOfF59F(name_and_dddr_detail, mt, ['Choice_59AF', 'F59F', 'NameAndAddressDetails']);
    }
  }
};

Ex.mfvr.validateNmAndAddrOfF50F = function(nm_and_addr, field_path) {
  var lines = nm_and_addr.split('\n');
  if (!lines && lines.length === 0) {
    return;
  }

  var errPath = [];
  var i, numbers = [];
  var prev_n, cur_n, cur_val;
  var times = 1;
  for (i = 0; i < lines.length; i++) {
    // ExSvr.debug('D --  ');
    // ExSvr.debug('D --  ' + lines[i] + ', ' + (typeof lines[i]) );
    var line = ''+lines[i].trim();
    if (line.length < 2) {
        errmsg = Ex.mfvr.resolveMsg('Each line must start with number '+ line.length + '] ' + line, field_path);
        ExSvr.add_err('T56', errmsg);
        return;
    }
    var initialChar = line.substring(0, 1);
    if ('12345678'.indexOf(initialChar) === -1){
        errmsg = Ex.mfvr.resolveMsg('Each line must start with number' + line, field_path);
        ExSvr.add_err('T56', errmsg);
        return;
    }
    if (line.substring(1,2) != "/"){
        errmsg = Ex.mfvr.resolveMsg('Each line must start with number and followed by a slash [' + line+']', field_path);
        ExSvr.add_err('T56', errmsg);
        return;
    }
    cur_n = parseInt(initialChar);
    if (numbers.length == 0){
      if (cur_n != 1) {
        errPath = ['The first line must start with number 1'].concat(field_path).concat(line);
        ExSvr.add_err('T56', errPath);
        return;
      }
      numbers.push(cur_n);
      continue;
    }
    prev_n = numbers[numbers.length-1];
    if ( cur_n < prev_n){
      errPath = ['Numbers must appear in numerical order'].concat(field_path);
      ExSvr.add_err('T56', errPath);
    } else if ( cur_n == prev_n && cur_n > 3 ) {
        errPath = ['Numbers 4, 5, 6, 7 and 8 must not be repeated'].concat(field_path);
        ExSvr.add_err('T56', errPath);
    }
    if (this.ver < '2021') {
      if (prev_n == 2 && cur_n != 3 && cur_n != 2) {
        errPath = ['Number 2 must not be used without number 3'].concat(field_path);
        ExSvr.add_err('T56', errPath);
      }  
    }
    if (prev_n == 4 && cur_n != 5) {
      errPath = ['Number 4 must not be used without number 5'].concat(field_path);
      ExSvr.add_err('T56', errPath);
    }
    if (prev_n != 4 && cur_n == 5) {
      errPath = ['Number 5 must not be used without number 4'].concat(field_path);
      ExSvr.add_err('T56', errPath);
    }
    if (cur_n == 4 ){
      if (!ExSvr.checkDate('YYYYMMDD',line.substring(2) ) ){
      errPath = ['Bad date format'].concat(field_path);
      ExSvr.add_err('T50', errPath);
      }
    }
    if (( cur_n == 3 && prev_n != 3) || cur_n == 5 || cur_n == 6 || cur_n == 7){
      // ISO cnty code
      // ExSvr.debug('len: '+line.length + ' ' + line);
      if (line.length > 4 && line.indexOf('/', 2) != 4){
         ExSvr.add_err('T56', ['Bad country code'].concat(field_path));
         return;
      }
      var countryCode = line.substring(2, 4);
      if (!ExSvr.checkCountryCode(countryCode)) {
         ExSvr.add_err('T73', ['Bad country code'].concat(field_path));
         return;
      }
    }
      if (this.ver >= '2021'){
        if (prev_n < 3 && cur_n > 3 ) {
        errPath = ['Number 3 must be present. '].concat(field_path);
        ExSvr.add_err('T56', errPath);
        }
        if (prev_n == cur_n) {
        times++;
        // ExSvr.debug('i: '+ prev_n + " " + cur_n + " " + times);
        }else {
        times = 1;
        }
        if (times > 2){
            ExSvr.add_err('T56', ['The same number must not occur than 2 times. '].concat(field_path));
        }
      }
    numbers.push(cur_n);
  }
  // for (var i =0; i < numbers.length; i++){
     // ExSvr.debug('i: '+ numbers[i] );
  // }
  if (this.ver >= '2021'){
    if (cur_n < 3) {
    errPath = ['Number 3 must be present. '].concat(field_path);
    ExSvr.add_err('T56', errPath);
    }
  } else
  if (cur_n == 2) {
      errPath = ['Number 2 must not be used without number 3'].concat(field_path);
      ExSvr.add_err('T56', errPath);
  }
  if (cur_n == 4) {
      errPath = ['Number 4 must not be used without number 5 and vice versa'].concat(field_path);
      ExSvr.add_err('T56', errPath);
  }
  if (cur_n == 8) {
    if (prev_n != 6 && prev_n !=7) {
    // may need check id
      var partyIdentifier = ExSvr.get_val(['Choice_50AFK', 'F50F', 'PartyIdentifier'], null);
      if (partyIdentifier && partyIdentifier.startsWith('/')) {
      errPath = ['Number 8 validate error.'].concat(field_path);
      ExSvr.add_err('T56', errPath);
      }
    }
  }
};

Ex.mfvr.hasCtryCdAndAdditional = function(line) {
  if (line.length < 6) {
    return false;
  }
  if (line.substring(1, 2) != '/' || line.substring(4, 5) != '/') {
    return false;
  }
  var firstSlashIdx = line.indexOf('/');
  var secondSlashIdx = line.indexOf('/', 2);
  var countryCode = line.substring(firstSlashIdx + 1, secondSlashIdx);
  if (!ExSvr.checkCountryCode(countryCode)) {
    return false;
  }

  return true;
};

Ex.mfvr.validateNmAndAddrOfF59F = function(name_and_dddr_detail, mt, field_path) {
  var lines = name_and_dddr_detail.split('\n');
  if (!lines && lines.length === 0) {
    return;
  }

  var i, errmsg;
  var first_line = lines[0].trim();
  if (first_line.substring(0, 2) != "1/") {
    //errmsg = Ex.mfvr.resolveMsg('The first line must start with number 1', field_path, first_line);
    // ExSvr.add_err('T56', errmsg);
  }

  var numbers = [];
  var prev_n=0, cur_n=0;
  var times = 1;
  for (i = 0; i < lines.length; i++) {
    var line = ''+lines[i].trim();
    if (line.length < 2) {
        errmsg = Ex.mfvr.resolveMsg('Each line must start with number '+ line.length + '] ' + line, field_path);
        ExSvr.add_err('T56', errmsg);
        return;
    }
    var initialChar = line.substring(0, 1);
    // ExSvr.debug('F59F: l ' + i + ';  ' + initialChar + ';  ' + lines[i] )
    if ('123'.indexOf(initialChar) === -1){
      errmsg = Ex.mfvr.resolveMsg('Each line must start with number', field_path);
      ExSvr.add_err('T56', errmsg);
      return;
    }
    if (line.substring(1,2) != "/"){
        errmsg = Ex.mfvr.resolveMsg('Each line must start with number and followed by a slash [' + line+']', field_path);
        ExSvr.add_err('T56', errmsg);
        return;
    }
    cur_n = parseInt(initialChar, 10);
    if (prev_n == 0){
      if (cur_n != 1) {
        errPath = ['The first line must start with number 1'].concat(field_path).concat(line);
        ExSvr.add_err('T56', errPath);
        return;
      }
      prev_n = cur_n;
      continue;
    }
    if ( cur_n < prev_n){
      errPath = ['Numbers must appear in numerical order'].concat(field_path);
      ExSvr.add_err('T56', errPath);
    }
    if (cur_n == 3 && prev_n != 3){
      // first line of 3/
      if (line.length > 4 && line.indexOf('/', 2) != 4){
         ExSvr.add_err('T56', ['Bad country code'].concat(field_path));
         return;
      }
      var countryCode = line.substring(2, 4);
      if (!ExSvr.checkCountryCode(countryCode)) {
         ExSvr.add_err('T73', ['Bad country code'].concat(field_path));
         return;
      }
    }
    if (this.ver >= '2021'){
      if (prev_n == cur_n) {
            times++;
      }else {
            times = 1;
      }
            if (times > 2){
                ExSvr.add_err('T56', ['The same number must not occur than 2 times. '].concat(field_path));
            }
    }
    prev_n = cur_n;
  }
  if (this.ver >= '2021'){
    if ( cur_n != 3 ) {
      errPath = ['Number 3 must be present. '].concat(field_path);
      ExSvr.add_err('T56', errPath);
    }
  } else
  if (cur_n == 2) {
      errPath = ['Number 2 must not be used without number 3'].concat(field_path);
      ExSvr.add_err('T56', errPath);
  }
};

Ex.mfvr.resolveMsg = function(errmsg, field_path, field_value) {
  var msg = [];
  msg.push(errmsg);

  for (var i = 0; i < field_path.length; i++) {
    msg.push(field_path[i]);
  }

  if (field_value) {
    msg.push(field_value);
  }

  return msg;
};

Ex.mfvr.ruleT60 = function(mt) {
  if (this.ver < '2021') {
    return;
  }
  var fld = "F77B";
  if (ExSvr.exist(fld, null)) {
        var v = ExSvr.get_val(fld, null);
        var lines = v.split('\r\n');
        // check lines
        for (var j = 0; j < lines.length; j++) {
          var line = lines[j];
           // line.indexOf('/') !== 0
          if (line.indexOf('/') !== 0){
            ExSvr.add_err('T60', ['Bad format ', fld, 'line ' + (j + 1), line]);
            break;
          }
          var pos = line.indexOf('/', 1);
          if (pos === -1) {
            ExSvr.add_err('T60', ['Bad format 2', fld, 'line ' + (j + 1), line]);
            break;
          }
         // ExSvr.debug(line + '  '  + j  + ' ' + pos);
          if (j == 0) {
          var code = line.substring(1, pos);
         // ExSvr.debug(line + '  '  + j  + ' ' + code);
                    if (!Ex.in_list(code, ['HOLD', 'NOTIFY', 'PREVINST','RETURN'])) {
                      ExSvr.add_err('T60', ['Bad code', fld, 'line ' + (j + 1), line]);
                      break;
                    }
          } else if (pos != 1) {
          ExSvr.add_err('T60', ['Bad format', fld, 'line ' + (j + 1), line]);
          }
        }
  }
};

Ex.mfvr.ruleT70 = function(mt) {
  if (this.ver < '2017') {
    return;
  }

  var lines, i;

  if (mt == '300') {
    var narrative = ExSvr.get_val(['SeqA', 'F77D'], null);
    if (narrative) {
      lines = narrative.split('\n');
      for (i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('/FIX/') ||
            lines[i].startsWith('/SETC/') ||
            lines[i].startsWith('/SRCE/') ||
            lines[i].startsWith('/VALD/')) {
          ExSvr.add_err('T70', ['Invalid code', 'SeqA', 'F77D', lines[i]]);
        }
      }
    }
  }

  var path, invalidCodes;
  if ('300' == mt) {
    path = ['SeqC', 'F72'];
    invalidCodes = ['FIX', 'SETC', 'SRCE', 'VALD'];
  } else if ('305' == mt) {
    path = ['SeqA', 'F72'];
    invalidCodes = ['SETC', 'VALD'];
  }

  if (!path || !invalidCodes) {
    return;
  }
  var f72 = ExSvr.get_val(path, null);
  if (!f72) {
    return;
  }
  lines = f72.split("\n");
  for (i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (!line.startsWith('/')) {
      continue;
    }
    var secondSlashIdx = line.indexOf("/", 1);
    if (secondSlashIdx == -1) {
      continue;
    }
    var code = line.substring(1, secondSlashIdx);
    for (var j = 0; j < invalidCodes.length; j++) {
      if (invalidCodes[j] != code) {
        continue;
      }
      var errDesc = ['Invalid code'];
      for (var k = 0; k < path.length; k++) {
        errDesc.push(path[k]);
      }
      errDesc.push(code);
      ExSvr.add_err('T70', errDesc);
    }
  }
};



// TODO
Ex.mfvr.ruleT73 = function (mt) {
  if (this.ver < '2015') {
    return;
  }
  if (mt == '110' && this.ver < '2017') {
    return;
  }

  var countryCode, checkResult, nameAndAddrDetail;
  if (Ex.in_list(mt, ['101', '102', '102.STP', '110', '202.COV', '205.COV'])) {
    var loop_names, f50a_choice_name, f59a_choice_name;
    if (Ex.in_list(mt, ['101', '102', '102.STP'])) {
      loop_names = ['SeqA', 'SeqB'];
    } else if (mt == '110') {
      loop_names = ['Loop1'];
    } else {
      loop_names = ['SeqB'];
    }
    for (var loopIdx = 0; loopIdx < loop_names.length; loopIdx++) {
      var loop_name = loop_names[loopIdx];
      var loop = ExSvr.getflds([loop_name], null);
      for (var i in loop) {
        if (!Ex.isNode(loop[i])) {
          continue;
        }

        // Checks 50a
        if (Ex.in_list(mt, ['101'])) {
          f50a_choice_name = 'Choice_50FGH';
        } else {
          f50a_choice_name = 'Choice_50AFK';
        }
        if (mt == '110') {
          var party_identifier = ExSvr.get_val(['Choice_50AFK', 'F50F', 'PartyIdentifier'], loop[i]);
          if (Ex.mfvr.isCodeCountryIdentifierFmt(party_identifier)) {
            countryCode = party_identifier.substring(5, 7);
            if (!ExSvr.checkCountryCode(countryCode)) {
              ExSvr.add_err('T73', ['Invalid country code', loop_name, f50a_choice_name, 'F50F',
                  'PartyIdentifier', 'CountryCode', countryCode]);
            }
          }
        }
        var nm_and_addr = ExSvr.get_val([f50a_choice_name, 'F50F', 'NameAndAddress'], loop[i]);
        checkResult = Ex.mfvr.checkCountryCode(nm_and_addr);
        if (!checkResult.isValid) {
          ExSvr.add_err('T73', ['Invalid country code', loop_name, f50a_choice_name, 'F50F',
                'NameAndAddress', 'CountryAndTown', checkResult.countryCode]);
        }

        // Checks 59a
        f59a_choice_name = 'Choice_59AF';
        nameAndAddrDetail = ExSvr.get_val([f59a_choice_name, 'F59F', 'NameAndAddressDetails'], loop[i]);
        checkResult = Ex.mfvr.checkCountryCode(nameAndAddrDetail);
        if (!checkResult.isValid) {
          ExSvr.add_err('T73', ['Invalid country code', loop_name, f59a_choice_name, 'F59F',
                'NameAndAddressDetails', 'CountryAndTown', checkResult.countryCode]);
        }
      }
    }

  } else if (Ex.in_list(mt, ['103', '103.REMIT', '103.STP', '910'])) {
    // Checks PartyIdentifier
    if (ExSvr.exist(['Choice_50AFK', 'F50F'], null)) {
      // When Party Identifier is used with the (Code)(Country Code)(Identifier) format
      // Relative message: 103, 103.REMIT, 103.STP
      var partyIdentifier = ExSvr.get_val(['Choice_50AFK', 'F50F', 'PartyIdentifier'], null);
      if (partyIdentifier &&
          partyIdentifier.length() >= 9 &&
          partyIdentifier.substring(4, 5) == '/' &&
          partyIdentifier.substring(7, 8) == '/') {
        countryCode = partyIdentifier.substring(5, 7);
        if (!ExSvr.checkCountryCode(countryCode)) {
          ExSvr.add_err('T73', ['Invalid country code', 'Choice_50AFK', 'F50F', 'PartyIdentifier', 'CountryCode', countryCode]);
        }
      }

      var f50f_nm_and_addr = ExSvr.get_val(['Choice_50AFK', 'F50F', 'NameAndAddress'], null);
      checkResult = Ex.mfvr.checkCountryCode(f50f_nm_and_addr);
      if (!checkResult.isValid) {
        ExSvr.add_err('T73', ['Invalid country code', 'Choice_50AFK', 'F50F', 'NameAndAddress', 'CountryAndTown', checkResult.countryCode]);
      }
    }

    // check NameAndAddress
    nameAndAddrDetail = ExSvr.get_val(['Choice_59AF', 'F59F', 'NameAndAddressDetails'], null);
    checkResult = Ex.mfvr.checkCountryCode(nameAndAddrDetail);
    if (!checkResult.isValid) {
      ExSvr.add_err('T73', ['Invalid country code', 'Choice_59AF', 'F59F', 'NameAndAddressDetails', 'CountryAndTown', checkResult.countryCode]);
    }
  } else if ('760' == mt){
    // ExSvr.debug('t73 -- 760 ' + ExSvr.get_val([ 'F44J', 'Country'], null) + '  --- ' + ExSvr.get_val('F44J/Country', null)  );
    var cnty_code = ExSvr.get_val('SeqC/F44H/Country', null);
    if (cnty_code && !ExSvr.checkCountryCode(cnty_code) ){
      ExSvr.add_err('T73', ['Invalid country code', 'SeqC', 'F44H', 'Country', cnty_code]);
    }
    cnty_code = ExSvr.get_val('SeqC/F44J/Country', null);
    if (cnty_code && !ExSvr.checkCountryCode(cnty_code) ){
      ExSvr.add_err('T73', ['Invalid country code', 'SeqC', 'F44J', 'Country', cnty_code]);
    }
    cnty_code = ExSvr.get_val('F44H/Country', null);
    if (cnty_code && !ExSvr.checkCountryCode(cnty_code) ){
      ExSvr.add_err('T73', ['Invalid country code', 'SeqB', 'F44H', 'Country', cnty_code]);
    }
    cnty_code = ExSvr.get_val('F44J/Country', null);
    if (cnty_code && !ExSvr.checkCountryCode(cnty_code) ){
      ExSvr.add_err('T73', ['Invalid country code', 'SeqB', 'F44J', 'Country', cnty_code]);
    }
  } else if ('361' == mt){
    var cnty_code = ExSvr.get_val(['SeqA', 'F39M'], null);
    if (cnty_code && !ExSvr.checkCountryCode(cnty_code) ){
      ExSvr.add_err('T73', ['Invalid country code', 'SeqA', 'F39M', cnty_code]);
    }
  }
};

Ex.mfvr.checkCountryCode = function(name_and_addr) {
  var ret = {
    isValid: true,
    countryCode: null
  };
  if (!name_and_addr) {
    return ret;
  }

  var lines = name_and_addr.split('\n');
  var cnty_and_town, i;
  for (i = 0; i < lines.length; i++) {
    if (lines[i].indexOf("3/") >= 0) {
      cnty_and_town = lines[i];
      if (cnty_and_town.length < 4) {
        ret.isValid = false;
        ret.countryCode = cnty_and_town;
      } else {
        var cnty_code;
        var second_slash_idx = cnty_and_town.indexOf('/', 2);
        if (second_slash_idx > 2) {
          cnty_code = cnty_and_town.substring(2, second_slash_idx);
        } else {
          cnty_code = cnty_and_town.substring(2);
          cnty_code = cnty_code.trim();
        }
        ret.isValid = ExSvr.checkCountryCode(cnty_code);
        ret.countryCode = cnty_code;
      }
      break;
    }
  }
  return ret;
};

Ex.mfvr.ruleT75 = function(mt) {
  if (this.ver < '2018') {
    return;
  }
  var num = Ex.to_num(ExSvr.get_val(['F27', 'Number'], null));
  var total = Ex.to_num(ExSvr.get_val(['F27', 'Total'], null));
  if (mt === '700' || mt === '707' || mt === '710'|| mt === '720'){
    if (num != 1 || total > 8 || total < 1 ) {
      ExSvr.add_err('T75', ['Bad format F27']);
    }
  } else if (mt === '701' || mt === '708' || mt === '711' || mt === '721' || mt === '761'|| mt === '775'){
    if (num < 2 || total > 8 || total < num ) {
      ExSvr.add_err('T75', ['Bad format F27']);
    }
  } else if (mt === '759'){
    if (num < 1 || total > 8 || total < num ) {
      ExSvr.add_err('T75', ['Bad format F27']);
    }
  } else if (mt === '760' || mt === '767'){
    if (this.ver < '2021') {
      if (num < 1 || total > 8 || total < num ) {
        ExSvr.add_err('T75', ['Bad format F27']);
      }
    } else {
      if (num != 1 || total > 8 || total < num ) {
        ExSvr.add_err('T75', ['Bad format F27']);
      }
    }
  }
};

Ex.mfvr.ruleT67 = function(mt) {
  if (this.ver < '2018') {
    return;
  }
  var flds;
  if (Ex.in_list(mt, ['707', '708'])) {
    flds = ['F45B', 'F46B', 'F47B', 'F49M', 'F49N'];
  } else if (Ex.in_list(mt, ['767'])) {
    // see fin.767.2019 SeqA SeqB is mandatory, so I ignore the group for easy maintain
    if (this.ver < '2021')
      return;
    flds = ['F45C', 'F77U', 'SeqC/F45C', 'SeqC/F77L'];
  } else if (Ex.in_list(mt, ['775'])) {
    if (this.ver < '2021')
      return;
    flds = ['F45C', 'F77U', 'F77L'];
  } else {
    flds = [];
  }
  // var regex = /\/([^\/]+)\//;
  // see http://www.regexplained.co.uk/
  for (var i in flds) {
    var fld = flds[i];
    if (ExSvr.exist(fld, null)) {
      var v = ExSvr.get_val(fld, null);
      var lines = v.split('\r\n');
      // check lines
      var pre_code = '';
      for (var j = 0; j < lines.length; j++) {
        var line = lines[j];
//        ExSvr.debug('line ' + j + ' ' + line + ', ' + line.indexOf('/') )
        if (line.indexOf('/') !== 0) {
          if (j === 0) {
            // first line must start with /6c/
            ExSvr.add_err('T67', ['Bad format 1', fld, 'line ' + (j + 1), line]);
            break;
          } else {
            // other line is valid
            continue;
          }
        }
        var pos = line.indexOf('/', 1);
        if (pos === -1) {
          ExSvr.add_err('T67', ['Bad format 2', fld, 'line ' + (j + 1), line]);
          break;
        }
        if (pos === 1) {
//          if (j === 0) {
            // first line must contain code
            ExSvr.add_err('T67', ['Bad format 3', fld, 'line ' + (j + 1), line]);
//            break;
//          }
          // other line is ok
        } else {
          var code = line.substring(1, pos);
          if (!Ex.in_list(code, ['ADD', 'DELETE', 'REPALL'])) {
            ExSvr.add_err('T67', ['Bad code', fld, 'line ' + (j + 1), line]);
            break;
          }
          if (this.ver >= '2021') {
            // ExSvr.debug('111 TBD ' + code + ', ' + pre_code + ' '+ this.ver);
            if (code == 'REPALL' || pre_code == 'REPALL' ){
              if (pre_code != '') {
                ExSvr.add_err('D06A', [ fld, 'line ' + (j + 1), line]);
              }
            }
            pre_code = code;

          }
        }
      }
    }
  }
};
Ex.mfvr.ruleT78 = function(mt, flds) {
  // ExSvr.debug(' rule T78 ' + mt + ' ' + flds );
  // 300 82J
  var flds = ['F53J', 'F56J', 'F57J', 'F58J','F81J','F82J','F83J','F84J','F85J','F86J','F87J','F88J','F89J','F91J','F96J'];
  var codes = {'ABIC':'BIC','ACCT':'34x','ADD1':'34x','ADD2':'34x','CITY':'34x','CLRC':'2!a[32x]','LEIC':'18!c2!n',
  'NAME':'34x',
  'SVBY':'4!a','NOSI':'4!a', 'GBSC':'6!n','USCH':'6!n','USFW':'6!n',
  'TXID':'34x'};
  for (var f in flds) {
    var loop = ExSvr.getflds(['*',flds[f]], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i])) {
        continue;
      }
      var v = ExSvr.get_val(flds[f], loop[i]);
      // ExSvr.debug('v: ' +flds[f] + ' ' + v )
      var lines = v.split('/');
      if (lines.length == 0 || (''+lines[0]).length != 0) {
        // ExSvr.debug('error: ' + lines.length + ' ' + (''+lines[0]).length );
        ExSvr.add_err('T78', [flds[f], v]);
      } else {
        for (var j = 1; j < lines.length; j++) {
          var code = lines[j];
          j++;
          if (j < lines.length) {
            var val = lines[j];
            var re = codes[code]
            if (!re) {
            ExSvr.add_err('T78', [flds[f], v]);
            }
            // ExSvr.debug(' - ' +code +  ': ' + re+ ' ' + val)
          } else {
            ExSvr.add_err('T78', [flds[f], v]);
          }
        }
      }
    }
  }
};
Ex.mfvr.ruleT79 = function(mt, flds) {
  if ('744' == mt) {
    if ('HOLD' == ExSvr.get_val(['F73S', 'Code'], null) ){
      if (!ExSvr.exist(['F73S', 'Narrative'] ) ) {
      ExSvr.add_err('T79', ['Invalid F73S']);
      }
    }
  }
};

// see https://www2.swift.com/knowledgecentre/publications/usug_20180720/2.0?topic=con_34021.htm
Ex.mfvr.ruleT80 = function (mt) {
  var cnt = null;
  if (ExSvr.exist('F72')) {
    cnt = ExSvr.get_val('F72', null);
  } else if (ExSvr.exist('F79')) {
    cnt = ExSvr.get_val('F79', null);
  }
  if (cnt && (cnt.startsWith('/REJT/') || cnt.startsWith('/RETN/'))){
  } else {
    return;
  }
  var lines = cnt.split('\r\n');
  if (lines.length < 3) {
    ExSvr.add_err('T80', ['Bad format.', cnt ]);
    return;
  }
  // line1: 2!n[1!a][/2c]
  var reg = /^\/(REJT|RETN)\/[0-9]{2}[A-Z]{0,1}([\/][0-9A-Z]{0,2})?$/
  if (!reg.test(lines[0]) ){
    ExSvr.add_err('T80', ['Bad line.', lines[0] ]);
  }
  // line 2 /2!c2!n/[29x|44x]
  // code: AC01-06 AM01-08 BE01-05 AG01-02 DT01 MS01 PY01 RF01 RC01-04 RR01-03 TM01 X1!c2!n
  reg = /^\/(AC0[1-6]|AM0[1-8]|BE0[1-5]|AG0[1-2]|DT01|MS01|PY01|RF01|RC0[1-3]|RR0[1-3]|TM01)|(X[0-9A-Z]{1}[0-9]{2})\/(.*)$/
  if (!reg.test(lines[1]) ){
    ExSvr.add_err('T80', ['Bad line.', lines[1] ]);
  }
  // line 3 /MREF/16x
  reg = /^\/MREF\/(.{0,16})$/
  if (!reg.test(lines[2]) ){
    ExSvr.add_err('T80', ['Bad line.', lines[2] ]);
  }
  var lineno = 3;
  // line 4 O  /TREF/16x
  if (lines.length > lineno ) {
    ExSvr.debug(' tref' + lines[lineno]);
    if (lines[lineno].startsWith('/TREF')) {
      reg = /^\/(TREF)\/(.{0,16})$/
      if (!reg.test(lines[lineno]) ){
        ExSvr.add_err('T80', ['Bad line.', lines[lineno] ]);
      }
      lineno++;
    }
  }
  // line 5 O  /CHGS/3!a15d
  if (lines.length > lineno ) {
    ExSvr.debug('chge' + lines[lineno]);
    if (lines[lineno].startsWith('/CHGS')) {
      reg = /^\/(CHGS)\/([A-Z]{3})([0-9]+,[0-9]*)$/
      if (!reg.test(lines[lineno]) ){
        ExSvr.add_err('T80', ['Bad line.', lines[lineno] ]);
      } else {
        var grp = lines[lineno].match(reg);
    ExSvr.debug('chge' + grp[2] +  grp[3] );
        if ( !ExSvr.checkCcyAmt(grp[2], grp[3]) ) {
          ExSvr.add_err('T43', ['Bad format line '+(lineno+1), lines[lineno] ]);
        }
      }
      lineno++;
    }
  }
  // line 6 O  /TEXT/29x 44x
  if (lines.length > lineno ) {
    ExSvr.debug('text ' + lines[lineno]);
    reg = /^\/TEXT\/(.*)$/
    if (!reg.test(lines[lineno]) ){
      ExSvr.add_err('T80', ['Bad line.', lines[lineno] ]);
    }
  }
}

Ex.mfvr.ruleT96 = function (mt) {
  if (Ex.in_list(mt, ['300', '303', '306', '320', '330', '340', '341', '350', '360', '361', '362', '364', '365'])) {
    var vf22c = ExSvr.get_val(['SeqA', 'F22C'], null);
    if (Ex.mfvr.check_bank_code(vf22c) > 0) {
      ExSvr.add_err('T96', ['Invalid bank code order', 'SeqA', 'F22C']);
    }
  } else if ('305' == mt) {
    var common_ref = ExSvr.get_val(['SeqA', 'F22', 'CommonReference'], null);
    if (Ex.mfvr.check_bank_code(common_ref) > 0) {
      ExSvr.add_err('T96', ['Invalid bank code order', 'SeqA', 'F22', 'CommonReference']);
    }
  }
};

Ex.mfvr.check_bank_code = function(common_ref) {
  if (common_ref.length() != 16) {
    return false;
  }
  var left = common_ref.substring(0, 6);
  var right = common_ref.substring(10);

  if (left && !right) {
    return 1;
  } else if (!left && right) {
    return -1;
  } else if (Ex.equals(left, right)) {
    return 0;
  } else {
    var left_length = left.length();
    var right_length = right.length();
    if (left_length != right_length) {
      return left_length - right_length > 0 ? 1 : -1;
    }

    var valid = true;
    for (var i = 0; i < left_length; i++) {
      var left_char = left.charAt(i);
      var right_char = right.charAt(i);
      if (!ExSvr.isLetterOrDigit(left_char) || !ExSvr.isLetterOrDigit(right_char)) {
        valid = false;
        break;
      }

      if ((left_char == right_char)) {
        continue;
      } else {
        if (ExSvr.isDigit(left_char) && ExSvr.isLetter(right_char)) {
          valid = false;
        } else if (ExSvr.isLetter(left_char) && ExSvr.isDigit(right_char)) {
          valid = true;
        } else {
          valid = left_char < right_char;
        }
        break;
      }

    }

    return valid ? -1 : 1;
  }
};



Ex.mfvr.ruleTnn = function (mt, flds) {
  // Sequence of Total, Number must
  var number = Ex.to_num(ExSvr.get_val(['F27', 'Number'], null));
  var total = Ex.to_num(ExSvr.get_val(['F27', 'Total'], null));
  if (total <= 0){
    ExSvr.add_err('Tnn', ['Bad total.', 'F27', total]);
  }
  if (mt == '700') {
    if (number != 1)  ExSvr.add_err('Tnn', ['Bad number.', 'F27', number ]);
  }
};

Ex.mfvr.ruleU12 = function (mt, flds) {
  if (this.ver < '2018')
    return;
  if (ExSvr.exist(['B3', '111'])) {
    if (ExSvr.exist(['B3', '121'])) {
      var f111 = ExSvr.get_val(['B3', '111'], null);
      var reg = /^[0-9]{3}$/;
      if (!reg.test(f111)){
        ExSvr.add_err('U12', ['Bad format field 111.', f111]);
      }
    } else {
      ExSvr.add_err('U12', ['Field 111 is present without 121.']);
    }
  }
};

Ex.mfvr.ruleU13 = function (mt, flds) {
  if (this.ver < '2018')
    return;
  // Sequence of Total, Number must
  var f108 = ExSvr.get_val(['B3', '108'], null);
  var f121 = ExSvr.get_val(['B3', '121'], null);
  // ExSvr.debug(f108 + ', ' + f121 + ', ' + this.ver);
  if (f121 === null) {
    if (Ex.in_list(mt, ['103', '103.STP','103.REMIT', '202', '202.COV', '205', '205.COV'])){
    ExSvr.add_err('U13', ['Mandatory field tag 121.']);
    }
    return;
  }
  var reg = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
  if (! reg.test(f121) ){
    ExSvr.add_err('U13', ['Bad format field tag 121.', f121]);
  }
};

Ex.mfvr.ruleSRP = function (mt, flds) {
  if ('199' == mt) {
    if (!ExSvr.exist(['F21'])) {
      ExSvr.add_err('GPI', ['Mandatory F21.' ]);
    }
    var f79 = ExSvr.get_val(['F79'], null);
    var lines = f79.split('\r\n');
    if (lines.length < 1) {
      ExSvr.add_err('GPI', ['Bad format F79.', f79 ]);
      return;
    }
    var reg;
    if (this.ver == '2018') {
      reg = /^\/(AGNT|AMNT|COVR|CURR|CUST|CUTA|DUPL|FRAD|TECH|UPAY|CNCL|PDCR|RJCR)\/([\w]{0,4})$/;
    } else {
      // (AC04|AGNT|AM04|ARDT|CUST|INDM|LEGL|NOAS|NOOR|PTNA|RQDA)?
      reg = /^\/(AGNT|AM09|COVR|CURR|CUST|CUTA|DUPL|FRAD|TECH|UPAY|CNCL|PDCR|RJCR)\/([\w]{0,4})$/;
    }
    if (! reg.test(lines[0]) ){
      ExSvr.add_err('GPI', ['Bad format F79.', f79 ]);
    } else {
      var grp = lines[0].match(reg);
      ExSvr.debug('' + grp[1] + ', ' + grp[2])
      var code = grp[1];
      if (code == 'CNCL'){
        if (!Ex.isEmpty(grp[2]) ) {
          ExSvr.add_err('D10', ['Bad format F79.', lines[0] ]);
        }
        if (lines.length != 2){
         ExSvr.add_err('D10', ['Bad format F79.', f79 ]);
        }
      } else if (code == 'RJCR'){
        if (!Ex.in_list(grp[2], ['AC04','AGNT','AM04','ARDT','CUST','INDM','LEGL','NOAS','NOOR','FRNA']) ) {
         ExSvr.add_err('D10', ['Bad format F79.', lines[0] ]);
       }
        if (lines.length != 2){
         ExSvr.add_err('D10', ['Bad format F79.',f79 ]);
        }
      } else if (code == 'PDCR' ) {
        if (!Ex.in_list(grp[2], ['','INDM','PTNA','RQDA','S000','S001','S002','S003','S004']) ) {
         ExSvr.add_err('D10', ['Bad format F79.', lines[0] ]);
        }
        if (Ex.in_list(grp[2], ['S000','S001','S002','S004'] ) ){
          // see gpi_sup page 18/23
        } else if (lines.length != 2){
         ExSvr.add_err('D10', ['Bad format F79.', f79 ]);
        }
      } else {
        if (!Ex.in_list(grp[2], ['','INDM']) ) {
         ExSvr.add_err('D10', ['Bad format F79.', lines[0] ]);
        }
        if (!Ex.isEmpty(lines[1])){
         ExSvr.add_err('D10', ['Bad format F79. 1575', lines[1] ]);
        }
      }
    }
    if (lines.length > 1) {
      var reg = /^([A-Z0-9]{8,11})(\/[0-9A-Z]{8,11})?$/
      // bic/bic
      var grp = lines[1].match(reg);
      ExSvr.debug('need bic check ' + grp[1]);
      if (grp.length > 2 && grp[2]){
        ExSvr.debug('need bic check ' + grp[2].substr(1));
      }
    }
  } else if ('192' == mt) {
    if (!ExSvr.exist(['F21'])) {
      ExSvr.add_err('GPI', ['Mandatory F21.' ]);
    }
    var f79 = ExSvr.get_val(['F79'], null);
    var reg;
    if (this.ver == '2018') {
      reg = /^\/(AGNT|AMNT|COVR|CURR|CUST|CUTA|DUPL|FRAD|TECH|UPAY)\/(INDM)*$/;
    } else {
      reg = /^\/(AGNT|AM09|COVR|CURR|CUST|CUTA|DUPL|FRAD|TECH|UPAY)\/(INDM)*$/;
    }
    if (! reg.test(f79) ){
      ExSvr.add_err('GPI', ['Bad format F79.', f79 ]);
    }
  } else if ('196' == mt) {
    if (ExSvr.exist(['F77']) || ExSvr.exist(['F11']) || ExSvr.exist(['F79'])) {
      ExSvr.add_err('GPI', ['Not allowed F77, F11, F79.' ]);
    }
    var f76 = ExSvr.get_val(['F76'], null);
    var lines = f76.split('\r\n');
    if (lines.length < 1) {
      ExSvr.add_err('GPI', ['Bad format F76.', f76 ]);
      return;
    }
    var reg = /^\/(CNCL\/|RJCR\/(AC04|AGNT|AM04|ARDT|CUST|INDM|LEGL|NOAS|NOOR)|PDCR\/(INDM|PTNA|RQDA)?)$/;
    if (! reg.test(lines[0]) ){
      ExSvr.add_err('GPI', ['Bad format F76.', f76 ]);
    }
    // BIC/BIC
  }
};

Ex.mfvr.ruleGPI = function (mt, flds) {
  if (this.ver < '2018')
    return;
  var f111 = ExSvr.get_val(['B3', '111'], null);
  if ('002' == f111){
    // ExSvr.debug('not 001 skip ' + f111);
    return this.ruleSRP(mt, flds);
  }
  // Sequence of Total, Number must
  var f79 = ExSvr.get_val(['F79'], null);
  // ExSvr.debug(f79 );
  var lines = f79.split('\r\n');
  if (lines.length < 4) {
    ExSvr.add_err('GPI', ['Bad format F79.', f79 ]);
    return;
  } else if ('299' == mt && lines.length != 4){
    ExSvr.add_err('GPI', ['Bad format F79.', f79 ]);
    return;
  }
  // line 1 //date and time YYMMDDHHMM+ZZZZ  //1601121515+1300
  var reg = /^\/\/[0-9]{10}(\+|\-)[0-9]{4}$/;
  if (! reg.test(lines[0]) ){
    ExSvr.add_err('GPI', ['Bad format line 1.', lines[0] ]);
  }
  // line 2 //status code [/reason code]
  if (this.ver == '2018')
    reg = /^\/\/(ACSC|ACSP\/(.){4}|RJCT)$/;
  else if ('299' == mt && '004' == f111)
    reg = /^\/\/ACSP(\/(G001|G006))$/;
  else
    reg = /^\/\/(ACCC|ACSP(\/G00[0-9])?|RJCT(\/[A-Z0-9]{4})?|RETN)$/;
  if (! reg.test(lines[1]) ){
    ExSvr.add_err('GPI', ['Bad format line 2.', lines[1] ]);
  }
  // line 3 //status originator/forward
  reg = /^\/\/([A-Z0-9]{8,11})(\/([0-9A-Z]{8,11})?(\/(CLRG|COVE|INDA|INGA))?(\/[0-9A-Z]{3})?)?$/;
  if (! reg.test(lines[2]) ){
    ExSvr.add_err('GPI', ['Bad format line 3.', lines[2] ]);
  } else {
    var grp = lines[2].match(reg);
    ExSvr.debug('need check BIC: '+ grp.length + ', '+ grp[1]);
    if (grp.length > 2 && grp[2]) {
      ExSvr.debug('need check BIC: '+ grp.length + ', '+ grp[2]);
    }
  }
  // line 4 //Currency and amount
  var ccy199 = '';
  var chgmode;
  reg = /^\/\/([A-Z]{3})([0-9,]{1,15})?(\/(BEN|SHA|OUR))?$/;
  if (! reg.test(lines[3]) ){
    ExSvr.add_err('GPI', ['Bad format line 4.', lines[3] ]);
  } else {
    var grp = lines[3].match(reg);
    if ( !ExSvr.checkCcyAmt(grp[1], grp[2]) ) {
      ExSvr.add_err('T43', ['Bad format line 4.', lines[3] ]);
    }
    ccy199 = grp[1];
    ExSvr.debug(' chg mode :  ' + grp.length + ', ' );
    if (grp.length > 3 && grp[3] ) {
      ExSvr.debug(' chg ' + grp[3] + '] ' + lines[3]);
      chgmode = grp[3].substr(1);
    }
  }
  var idx = 4;
  // line 5 exchange rate
  if (lines.length > 4 && lines[idx].startsWith('//EXCH') ) {
    reg = /^\/\/EXCH\/\/([A-Z]{3})\/([A-Z]{3})\/([0-9,]{1,12})$/;
    if (! reg.test(lines[4]) ){
      ExSvr.add_err('GPI', ['Bad format line 5.', lines[4] ]);
    } else {
      var grp = lines[4].match(reg);
      ExSvr.debug('need check ccy: '+ ccy199 + ', '+ grp[1] + ', '+ grp[2]);
      if ( !ExSvr.checkCcyAmt(grp[2], grp[3]) ) {
        ExSvr.add_err('T43', ['Bad format line 4.', lines[3] ]);
      }
      if (ccy199 != grp[2]){
        ExSvr.add_err('C29', ['GPI/ Bad format line 5.', lines[4] ]);
      }
    }
    idx++;
  }
  // next
  if (chgmode == 'BEN' && lines.length == idx) {
    ExSvr.add_err('C36', ['GPI Need line 6 '+(idx) +'/'+ lines.length ]);
  }
  reg = /^\/\/:71F:([A-Z]{3})([0-9,]{1,15})$/;
  for (; idx < lines.length; idx++) {
    if (chgmode == 'OUR') {
      ExSvr.add_err('C36', ['GPI Bad format line '+(idx+1), lines[idx] ]);
    }
    if (! reg.test(lines[idx]) ){
      ExSvr.add_err('GPI', ['Bad format line '+(idx+1), lines[idx] ]);
    } else {
      var grp = lines[idx].match(reg);
      if ( !ExSvr.checkCcyAmt(grp[1], grp[2]) ) {
        ExSvr.add_err('T43', ['Bad format line '+(idx+1), lines[idx] ]);
      }
    }
  }
};

// return true if pass check.
Ex.mfvr.chkDup = function(s, cd1, cd2){
  // ExSvr.debug('chkDup [' + s + '], [' + cd1 + ']');
  if (!s || !cd1) return true;
  var p1 = s.indexOf(cd1);
  if (p1 == -1) return true;
  var p2 = cd2 ? s.indexOf(cd2) : s.indexOf(cd1, p1+2);
  // ExSvr.debug('chkDup [' + p1 + '], [' + p2 + ']');
  if ( p2 > p1) {
    ExSvr.add_err('T99C', cd1);
  }
}
Ex.mfvr.chkT74 = function(strd70, fmt74){
  for(var i in strd70 ) {
    var item = strd70[i];
    var key = item.cd;
    var val = item.narr;
    var re = fmt74[key]
    // ExSvr.debug('T74: ' + key +':' + val);
    if (re) {
      if (!re.test(val)) {
        ExSvr.add_err('T74C', key +':' + val);
      }
    }
  }
}
// The first code in field 70 starts with a single "/" and additional codes start with a triple "///".
Ex.mfvr.strdOne = function(s, ary){
  if (s.length < 2) return;
  var start = 1; var end= 1;
  var cd; var narr;
  while ( end != -1 ) {
    end = s.indexOf('/', start);
    if(end < 0)
      break;
    cd = s.substring(start, end);
    end++;
    var next = s.indexOf('///', end);
    if (next == -1) {
      narr = s.substring(end);
      end = -1;
    } else {
      narr = s.substring(end, next);
      start = next+3;
    }
    ary.push({'cd':cd, 'narr':narr});
  }
}
Ex.mfvr.strd = function(s, mode){
  var ary = [];
  if (s.length < 4) return ary;
  var lines = s.split('\r\n');
  var line='';
  for (var i = 0; i < lines.length; i++) {
    var curline = lines[i];
    if (curline.length == 0) continue;
    if (curline.charAt(0) == '/' ) {
      // process p
      if (curline.charAt(1) != '/') {
        Ex.mfvr.strdOne(line, ary);
        line ='';
      } else {
        curline = curline.substring(2);
      }
    }
    line += curline;
  }
  Ex.mfvr.strdOne(line, ary);
  return ary;
}
Ex.mfvr.ruleICM = function (mt, flds) {
  if (this.ver < '2025') return;
  var f70 = '\r\n' + ExSvr.get_val('F70', null);
  var strd70 = Ex.mfvr.strd(f70);
  var f72 = '\r\n' + ExSvr.get_val('F72', null);
  //var strd72 = Ex.mfvr.strd(f72);
  var f70b = '';
  if (Ex.in_list(mt, ['202.COV', '205.COV']) ){
    f70b = '\r\n' + ExSvr.get_val('/SeqB/F70', null);
  }
  //var strd70b = Ex.mfvr.strd(f70b);
  // ExSvr.debug(' ' + mt + '\n f70 ' + f70 + '\n f72 ' + f72 + '\n seqb 70:' + f70b  );
  if (Ex.in_list(mt, ['103', '103.STP']) && f70 != '\r\n' ) {
    var uri = f70.indexOf('/URI/') > -1 ? 1 : 0 ;
    var sri = f70.indexOf('/SRI/') > -1 ? 1 : 0 ;
    var rli = f70.indexOf('/RELID/') > -1 ? 1 : 0 ;
    if (uri + sri + rli > 1) {
      ExSvr.add_err('C44', f70);
    }
    // T99
    var ary = ['PURP','RELID','ROC', 'SRI','UTLB','UTLD','URI'];
    for (var i in  ary) {
      Ex.mfvr.chkDup(f70, '/'+ary[i]+'/');
    }
    // T72 T74
    var fmt74 = {'BNF':/^(.{1,135})$/,'PURP':/^(.{1,35})$/,'RELID':/^(.{1,35})$/,'ROC':/^(.{1,35})$/, 'SRI':/^\+$/,'UTLB':/^(.{1,35})$/,'UTLD':/^(.{1,35})$/,'URI':/^(.{1,35})$/};
//    for (var i in  ary) {
    Ex.mfvr.chkT74(strd70, fmt74);
//    }
  }
  if (Ex.in_list(mt, ['202.COV', '205.COV']) && f70b != '\r\n' ) {
    var uri = f70b.indexOf('/URI/') > -1 ? 1 : 0 ;
    var sri = f70b.indexOf('/SRI/') > -1 ? 1 : 0 ;
    if (uri + sri  > 1) {
      ExSvr.add_err('C44', f70b);
    }
    if (f70b.indexOf('/RELID/') > -1 ){
      ExSvr.add_err('C47', f70b);
    }
    var ary = ['SRI','UTLB','UTLD','URI'];
    for (var i in  ary) {
      Ex.mfvr.chkDup(f70b, '/'+ary[i]+'/');
    }
  }
  if (Ex.in_list(mt, ['200','202','202.COV','205', '205.COV']) && f72 != '\r\n' ) {
    if ( f72.indexOf('\n/ULTB/') > -1 || f72.indexOf('\n/ULTD/') > -1 ) {
      ExSvr.add_err('C48', f72);
    }
    var ary = ['BNF','PURP'];
    for (var i in  ary) {
      Ex.mfvr.chkDup(f72, '/'+ary[i]+'/');
    }
  }
  if ('103' == mt && f72.indexOf('\r\n/RETN/' ) == 0 ) {
    if (f70.indexOf('\n/URI/') > -1  || f70.indexOf('\n/SRI/') > -1
     || f70.indexOf('\n/RELID/') > -1  || f70.indexOf('\n/PURP/') > -1 ) {
      ExSvr.add_err('C46', f70);
    }
    if (f72.indexOf('\r\n/CHGS/' ) > 0  ||  ExSvr.exist('Loop3/F71F') || ExSvr.exist('F71G') ) {
      if (!ExSvr.exist('F33B') ) {
        ExSvr.add_err('E31', null);
      }
    }
  }
  if (Ex.in_list(mt, ['202','205','202.COV', '205.COV']) && f72.indexOf('\r\n/RETN/' ) == 0 ) {
    if (f72.indexOf('\r\n/CHGS/' ) > 0) {
      ExSvr.add_err('E31', null);
    }
  }

  if (Ex.in_list(mt, ['200', '202','205','202.COV', '205.COV']) && f72 != '\r\n' ) {
    if (f72.indexOf('\n/URI/') > -1  || f72.indexOf('\n/SRI/') > -1
     || f72.indexOf('\n/RELID/') > -1 ) {
      ExSvr.add_err('C46', f72);
     }
  }
  // C51 XT99 C53 C54

  // /INTA/bic  /INS/bic; only once
  if (Ex.in_list(mt, ['103', '103.STP','200','202','205']) &&  f72.indexOf('\n/INTA/') > -1) {
    if (!ExSvr.exist(['Choice_56ACD']) ) {
      ExSvr.add_err('E30', []);
    }
  }
  if (Ex.in_list(mt, ['202.COV','205.COV']) &&  f72.indexOf('\n/INTA/') > -1) {
    if (ExSvr.exist('SeqB/Choice_56ACD') || ExSvr.exist('Choice_56AD') ) {}
    else {
      ExSvr.add_err('E30', []);
    }
  }
  //
};
