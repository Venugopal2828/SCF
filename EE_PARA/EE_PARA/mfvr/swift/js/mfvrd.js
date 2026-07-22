Ex.mfvr.rule100 = function (mt) {
  // not used
};

Ex.mfvr.rule101 = function (mt) {
  if (mt != '303') {
    return;
  }
  if (!ExSvr.exist(['SeqC', 'F39P'], null))
    return;
  var type = ExSvr.get_val(['SeqC', 'F39P', 'Type'], null);
  if ('CURR' == type) {
    var pass = ExSvr.chk_ccy(['SeqC', 'F39P', 'Currency'], ['SeqC', 'F39P', 'Amount'], null);
    if (!pass) {
      ExSvr.add_err('D01', ['Number of digits exceeds the maximum allowed', 'SeqC', 'F39P', 'Amount']);
    }
  }
};

Ex.mfvr.rule102 = function (mt) {
  var f22a;
  if (Ex.in_list(mt, ['304', '360', '361', '362', '364', '365'])) {
    f22a = ExSvr.get_val(['SeqA', 'F22A'], null);
    var ary;
    if (this.ver >= '2025' && '304' == mt) {
      ary = ['AACO','ACUS','AMND','CAMN','CACO','CANC','CCAN','CCUS'];
    } else {
      ary = ['AMND','CANC','CAMN','CCAN'];
    }
    if ((Ex.in_list(f22a, ary) ) && !ExSvr.exist(['SeqA', 'F21'])) {
      ExSvr.add_err('D02', ['Mandatory', 'SeqA', 'F21']);
    }
  } else if (mt == '306' || mt == '340') {
    f22a = ExSvr.get_val(['SeqA', 'F22A'], null);
    if ('AMND' == f22a || 'CANC' == f22a) {
      if (!ExSvr.exist(['SeqA', 'F21'])) {
        ExSvr.add_err('D02', ['Mandatory', 'SeqA', 'F21']);
      }
    }
  } else if (mt == '341') {
    f22a = ExSvr.get_val(['SeqA', 'F22A'], null);
    if ('AMND' == f22a || 'CANC' == f22a) {
      if (!ExSvr.exist(['SeqA', 'F21'])) {
        ExSvr.add_err('D02', ['Mandatory', 'SeqA', 'F21']);
      }
    }
  } else if (mt == '350') {
    f22a = ExSvr.get_val(['SeqA', 'F22A'], null);
    if ('ADVC' != f22a) {
      if (!ExSvr.exist(['SeqA', 'F21'])) {
        ExSvr.add_err('D02', ['Mandatory', 'SeqA', 'F21']);
      }
    }
  }
};

Ex.mfvr.rule103 = function (mt) {
  if (mt == '304') {
    applyRule103ToMt304();
  } else if (mt == '535') {
    applyRule103ToMt305();
  }
};

function applyRule103ToMt304() {
  var f94a = ExSvr.get_val(['SeqA', 'F94A'], null);
  if (!f94a)
    return;
  var f17o = ExSvr.get_val(['SeqA', 'F17O'], null);
  var f17n = ExSvr.get_val(['SeqA', 'F17N'], null);

  if ('ASET' == f94a) {
    if (f17o != null) {
      ExSvr.add_err('D03', ['Not Allowed', 'SeqA', 'F17O']);
    }
    if (f17n != null) {
      ExSvr.add_err('D03', ['Not Allowed', 'SeqA', 'F17N']);
    }
  } else if ('AFWD' == f94a) {
    if (f17o == null) {
      ExSvr.add_err('D03', ['Mandatory', 'SeqA', 'F17O']);
    }
    if (f17n == null) {
      ExSvr.add_err('D03', ['Mandatory', 'SeqA', 'F17N']);
    }
  }
}

function applyRule103ToMt305() {
  var bseqb = ExSvr.exist(['SeqB'], null);
  if (!bseqb)
    return;
  var loop = ExSvr.getflds(['SeqB'], null);
  for (var i in loop) {
    if (!Ex.isNode(loop[i]))
      continue;
    var b94a = ExSvr.exist(['Choice_94BCF'], loop[i]);
    if (!b94a)
      continue;
    if (!ExSvr.exist(['SeqB1'], loop[i]))
      continue;
    var loopB1 = ExSvr.getflds(['SeqB1'], loop[i]);
    for (var j in loopB1) {
      if (!Ex.isNode(loopB1[j]))
        continue;
      if (!ExSvr.exist(['SeqB1b'], loopB1[j]))
        continue;
      var loopB1b = ExSvr.getflds(['SeqB1b'], loopB1[j]);
      for (var k in loopB1b) {
        if (!Ex.isNode(loopB1b[k]))
          continue;
        if (!ExSvr.exist(['Loop16'], loopB1b[k]))
          continue;
        var loop16 = ExSvr.getflds(['Loop16'], loopB1b[k]);
        var l;
        for (l in loop16) {
          if (!Ex.isNode(loop16[l]))
            continue;
          var v93b = ExSvr.get_val(['Choice_93BC', 'F93B', 'Qualifier'], loop[l]);
          if (b94a && 'AGGR' == v93b)
            ExSvr.add_err('D03', ['Not Allowed', 'SeqB', 'SeqB1', 'SeqB1b', '93B::AGGR']);
        }
        if (!ExSvr.exist(['Loop17'], loopB1b[k]))
          continue;
        var loop17 = ExSvr.getflds(['Loop17'], loopB1b[k]);
        for (l in loop17) {
          if (!Ex.isNode(loop17[l]))
            continue;
          var v94b = ExSvr.get_val(['Choice_94BCF', 'F94B', 'Qualifier'], loop[l]);
          if (b94a && 'SAFE' == v94b)
            ExSvr.add_err('D03', ['Not Allowed', 'SeqB', 'SeqB1', 'SeqB1b', '94B::SAFE']);
        }
      }
    }
  }
}

Ex.mfvr.rule104 = function (mt) {
  if (mt == '304') {
    applyRule104ToMt104();
  } else if (mt == '535') {
    applyRule104ToMt535();
  }
};

function applyRule104ToMt104() {
  var f17o = ExSvr.get_val(['SeqA', 'F17O'], null);
  var f17f = ExSvr.get_val(['SeqA', 'F17F'], null);
  if ((f17o == null || 'Y' == f17o) && f17f != null) {
    ExSvr.add_err('D04', ['Not Allowed', 'SeqA', 'F17F']);
  } else if ('N' == f17o && f17f == null) {
    ExSvr.add_err('D04', ['Mandatory', 'SeqA', 'F17F']);
  }
}

function applyRule104ToMt535() {
  if (!ExSvr.exist(['SeqB'], null))
    return;
  var loop_seqB = ExSvr.getflds(['SeqB'], null);
  for (var i in loop_seqB) {
    if (!Ex.isNode(loop_seqB[i]))
      continue;
    if (!ExSvr.exist(['SeqB1'], loop_seqB[i]))
      continue;
    var loop_seqB1 = ExSvr.getflds(['SeqB1'], loop_seqB[i]);
    for (var j in loop_seqB1) {
      if (!Ex.isNode(loop_seqB1[j]))
        continue;
      if (!Ex.exist(['SeqB1b'], loop_seqB1[j]))
        continue;
      var loop_seqB1b = ExSvr.getflds(['SeqB1b'], loop_seqB1[j]);
      for (var k in loop_seqB1b) {
        if (!Ex.isNode(loop_seqB1b[k]))
          continue;
        if (!ExSvr.exist(['Loop16'], loop_seqB1b[k]))
          continue;
        var loop16 = ExSvr.getflds(['Loop16'], loop_seqB1b[k]);
        var f93b = null;
        for (var l in loop16) {
          if (!Ex.isNode(loop16[l]))
            continue;
          if ('AGGR' == ExSvr.get_val(['Choice_93BC', 'F93B', 'Qualifier'], loop16[l])) {
            f93b = 'AGGR';
            break;
          }
        }
        if (!ExSvr.exist(['Loop17'], loop_seqB1b[k]))
          continue;
        var loop17 = ExSvr.getflds(['Loop17'], loop_seqB1b[k]);
        var f94b = null;
        for (var l in loop17) {
          if (!Ex.isNode(loop17[l]))
            continue;
          if ('SAFE' == ExSvr.get_val(['Choice_94BCF', 'F94B', 'Qualifier'], loop17[l])) {
            f94b = 'SAFE';
            break;
          }
        }
        if ('AGGR' == f93b && 'SAFE' != f94b)
          ExSvr.add_err('D04', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1b', ':94a::SAFE']);
      }
    }
  }
}

Ex.mfvr.rule105 = function (mt) {
  if (mt == '535') {
    if (!ExSvr.exist(['SeqB'], null))
      return;
    var loop_seqB = ExSvr.getflds(['SeqB'], null);
    for (var i in loop_seqB) {
      if (!Ex.isNode(loop_seqB[i]))
        continue;
      if (!ExSvr.exist(['SeqB1'], loop_seqB[i]))
        continue;
      var loop_seqB1 = ExSvr.getflds(['SeqB1'], loop_seqB[i]);
      for (var j in loop_seqB1) {
        if (!Ex.isNode(loop_seqB1[j]))
          continue;
        if (!Ex.exist(['SeqB1b'], loop_seqB1[j]))
          continue;
        var loop_seqB1b = ExSvr.getflds(['SeqB1b'], loop_seqB1[j]);
        for (var k in loop_seqB1b) {
          if (!Ex.isNode(loop_seqB1b[k]))
            continue;
          if (!ExSvr.exist(['Loop16'], loop_seqB1b[k]))
            continue;
          var loop16 = ExSvr.getflds(['Loop16'], loop_seqB1b[k]);
          var avai_found = false;
          var navl_found = false;
          var aggr_found = false;
          for (var l in loop16) {
            if (!Ex.isNode(loop16[l]))
              continue;
            var value = ExSvr.get_val(['Choice_93BC', 'F93B', 'Qualifier'], loop16[l]);
            if ('AVAI' == value) {
              avai_found = true;
            }
            if ('NAVL' == value) {
              navl_found = true;
            }
            if ('AGGR' == value) {
              aggr_found = true;
            }
          }

          if ((avai_found || navl_found) && !aggr_found)
            ExSvr.add_err('D05', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1b', ':94a::AGGR']);
        }
      }
    }
  }

  if (Ex.in_list(mt, ['700', '705', '707', '710', '720', '740', '747'])) {
    if (this.ver >= '2018') {
      return;
    }
    if (ExSvr.exist(['F39A'], null) && ExSvr.exist(['F39B'], null)) {
      ExSvr.add_err('D05', ['Not both', 'F39A', 'F39B']);
    }
  }
};

Ex.mfvr.rule106 = function (mt) {
  if (Ex.in_list(mt, ['700', '705', '707', '710', '720'])) {
    if (ExSvr.exist(['F44C'], null) && ExSvr.exist(['F44D'], null)) {
      ExSvr.add_err('D06', ['Not both', 'F44C', 'F44D']);
    }
  }
};

Ex.mfvr.rule107 = function (mt) {
  if (this.ver < '1205') return;
  if ('600' == mt) {
    var v26c = ExSvr.get_val(['SeqA', 'F26C', 'Type'], null);
    var b = ExSvr.exist(['SeqB'], null);
    var c = ExSvr.exist(['SeqC'], null);
    if (b) {
      var f32f = ExSvr.get_val(['SeqB', 'F32F', 'Unit'], null);
      if ('GOLD' == v26c) {
        if ('GOZ' == f32f || 'TOZ' == f32f) {
          ExSvr.add_err('D07', ['Not allowed', 'SeqB', 'F32F', 'Unit', f32f]);
        }
      }
    } else if (c) {
      var f32f = ExSvr.get_val(['SeqC', 'F32F', 'Unit'], null);
      if ('GOLD' == v26c) {
        if ('GOZ' == f32f || 'TOZ' == f32f) {
          ExSvr.add_err('D07', ['Not allowed', 'SeqC', 'F32F', 'Unit', f32f]);
        }
      }
    }
  } else if (Ex.in_list(['601', '606', '607'])) {
    var v26c = ExSvr.get_val(['F26C', 'Type'], null);
    var f32f = ExSvr.get_val(['F32F', 'Unit'], null);
    if ('GOLD' == v26c) {
      if ('GOZ' == f32f || 'TOZ' == f32f) {
        ExSvr.add_err('D07', ['Not allowed', 'F32F', 'Unit', f32f]);
      }
    }
  } else if ('604' == mt || '605' == mt) {
    var v26c = ExSvr.get_val(['F26C', 'Type'], null);
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var f32f = ExSvr.get_val(['F32F', 'Unit'], loop1[nd]);
      if ('GOLD' == v26c) {
        if ('GOZ' == f32f || 'TOZ' == f32f) {
          ExSvr.add_err('D07', ['Not allowed', 'Loop1', 'F32F', 'Unit', f32f]);
        }
      }
    }
  } else if ('608' == mt) {
    var v26c = ExSvr.get_val(['F26C', 'Type'], null);
    if ('GOLD' == v26c) {
      var f60a = ExSvr.get_val(['Choice_60FM', '*', 'Unit'], null);
      if ('GOZ' == f60a || 'TOZ' == f60a) {
        ExSvr.add_err('D07', ['Not allowed', '60a', 'Unit', f60a]);
      }
      var f62a = ExSvr.get_val(['Choice_62FM', '*', 'Unit'], null);
      if ('GOZ' == f62a || 'TOZ' == f62a) {
        ExSvr.add_err('D07', ['Not allowed', '62a', 'Unit', f62a]);
      }
      var f64 = ExSvr.get_val(['F64', 'Unit'], null);
      if ('GOZ' == f64 || 'TOZ' == f64) {
        ExSvr.add_err('D07', ['Not allowed', 'F64', 'Unit', f64]);
      }
      var loop2 = ExSvr.getflds(['Loop2'], null);
      for (var nd in loop2) {
        if (!Ex.isNode(loop2[nd])) continue;
        var f65 = ExSvr.get_val(['F65', 'Unit'], loop2[nd]);
        if ('GOZ' == f65 || 'TOZ' == f65) {
          ExSvr.add_err('D07', ['Not allowed', 'Loop2', 'F65', 'Unit', f65]);
        }
      }
    }
  } else if ('609' == mt) {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var loop2 = ExSvr.getflds(['Loop2'], loop1[nd]);
      for (var nd in loop2) {
        if (!Ex.isNode(loop2[nd])) continue;
        var v26c = ExSvr.get_val(['F26C', 'Type'], loop2[nd]);
        if ('GOLD' == v26c) {
          var loop3 = ExSvr.getflds(['Loop3'], loop2[nd]);
          for (var nd in loop3) {
            var f68a = ExSvr.get_val(['Choice_68BC', '*', 'Unit'], loop3[nd]);
            if ('GOZ' == f68a || 'TOZ' == f68a) {
              ExSvr.add_err('D07', ['Not allowed', 'Loop3', '68a', 'Unit', f68a]);
            }
          }
        }
      }
    }
  } else if ('620' == mt) {
    var v26c = ExSvr.get_val(['SeqA', 'Type'], null);
    var f32f = ExSvr.get_val(['SeqB', 'Choice_32BF', 'F32F', 'Unit'], null);
    var f32r = ExSvr.get_val(['SeqB', 'Choice_32HR', 'F32R', 'Unit'], null);
    var f34j = ExSvr.get_val(['SeqB', 'Choice_34EJ', 'F34J', 'Unit'], null);
    var f33j_g1 = ExSvr.get_val(['SeqG', 'SeqG1', 'Choice_33BJ', 'F33J', 'Unit'], null);
    var f33j_g2 = ExSvr.get_val(['SeqG', 'SeqG2', 'Choice_33EJ', 'F33J', 'Unit'], null);
    if ('GOLD' == v26c) {
      if ('GOZ' == f32f || 'TOZ' == f32f) {
        ExSvr.add_err('D07', ['Not allowed', 'SeqB', 'F32F', 'Unit', f32f]);
      }
      if ('GOZ' == f32r || 'TOZ' == f32r) {
        ExSvr.add_err('D07', ['Not allowed', 'SeqB', 'F32R', 'Unit', f32r]);
      }
      if ('GOZ' == f34j || 'TOZ' == f34j) {
        ExSvr.add_err('D07', ['Not allowed', 'SeqB', 'F34J', 'Unit', f34j]);
      }
      if ('GOZ' == f33j_g1 || 'TOZ' == f33j_g1) {
        ExSvr.add_err('D07', ['Not allowed', 'SeqG', 'SeqG1', 'F33J', 'Unit', f33j_g1]);
      }
      if ('GOZ' == f33j_g2 || 'TOZ' == f33j_g2) {
        ExSvr.add_err('D07', ['Not allowed', 'SeqG', 'SeqG2', 'F33J', 'Unit', f33j_g2]);
      }
    }
  }
};

Ex.mfvr.rule108 = function (mt) {
  if (this.ver < '1105') return;
  if ('670' == mt) {
    var b95p = ExSvr.exist(['SeqA', 'SeqA2', 'F95P[Qualifier=\'SSIR\']'], null) ? 1 : 0;
    var b94c = ExSvr.exist(['SeqA', 'SeqA2', 'F94C[Qualifier=\'SSIR\']'], null) ? 1 : 0;
    var b22 = ExSvr.exist(['SeqA', 'SeqA2', 'F22H[Qualifier=\'SSIR\']'], null) ? 1 : 0;
    if (b95p + b94c + b22 != 1) {
      ExSvr.add_err('D08', ['Either one', 'F95P', 'F94C', 'F22H']);
    }
  }
};

Ex.mfvr.rule109 = function (mt) {
  if (this.ver < '1105') return;
  if ('670' == mt) {
    ExSvr.debug("TBD 109 " + mt);
  }
};

Ex.mfvr.rule110 = function (mt) {
};

Ex.mfvr.rule111 = function (mt) {
  if (this.ver < '1105') return;
  if ('670' == mt || '671' == mt) {
    ExSvr.debug("TBD 111 " + mt);
  }
};

Ex.mfvr.rule112 = function (mt) {
  if (this.ver < '1105') return;
  if ('670' == mt || '671' == mt) {
    ExSvr.debug("TBD 112 " + mt);
  }
};

Ex.mfvr.rule113 = function (mt) {
  if ('380' == mt || '381' == mt) {
    if (this.ver < '1105') return;
    ExSvr.debug("TBD 113 " + mt);
  }
  if ('503' == mt || '504' == mt || '506' == mt) {
    ExSvr.debug("TBD 113 " + mt);
  }
  if ('670' == mt || '671' == mt) {
    if (this.ver < '1105') return;
    ExSvr.debug("TBD 113 " + mt);
  }
};

Ex.mfvr.rule114 = function (mt) {
  if (this.ver < '1105') return;
  if ('670' == mt || '671' == mt) {
    ExSvr.debug("TBD 114 " + mt);
  }
};

Ex.mfvr.rule115 = function (mt) {
  if (this.ver < '1105') return;
  if ('670' == mt || '671' == mt) {
    ExSvr.debug("TBD 115 " + mt);
  }
};

Ex.mfvr.rule116 = function (mt) {
  if ('306' == mt) {
    var v22k = ExSvr.get_val(['SeqA', 'F22K', 'TypeOfEvent'], null);
    var vB1 = ExSvr.exist(['SeqB', 'SeqB1'], null);
    var vC = ExSvr.exist(['SeqC'], null);
    if ('CONF' == v22k) {
      if (!vB1) ExSvr.add_err('D16', ['Mandatory', 'SeqB1']);
      if (!vC) ExSvr.add_err('D16', ['Mandatory', 'SeqC']);
    } else if (Ex.in_list(v22k, ['KNIN', 'KNOT', 'TRIG'])) {
      if (vB1) ExSvr.add_err('D16', ['Not Allowed', 'SeqB1']);
      if (vC) ExSvr.add_err('D16', ['Not Allowed', 'SeqC']);
    }
  }
};

Ex.mfvr.rule117 = function (mt) {
  if ('102' != mt && '102.STP' != mt) {
    return;
  }
  var b_seqa_50 = ExSvr.exist(['SeqA', 'Choice_50AFK'], null);
  var loopb = ExSvr.getflds(['SeqB'], null);
  for (var nd in loopb) {
    if (!Ex.isNode(loopb[nd]))
      continue;
    var b1 = ExSvr.exist(['Choice_50AFK'], loopb[nd]);
    if (b_seqa_50 && b1) {
      ExSvr.add_err('D17', ['Not both', 'SeqA&SeqB', '50a']);
    } else if (!b_seqa_50 && !b1) {
      ExSvr.add_err('D17', ['At least one', 'SeqA&SeqB', '50a']);
    }
  }
};

Ex.mfvr.rule118 = function (mt) {
  if ('102' == mt || '102.STP' == mt) {
    var fld_52 = '102' == mt ? 'Choice_52ABC' : 'F52A';
    var b_seqa_52 = ExSvr.exist(['SeqA', fld_52], null);
    var b_seqa_26 = ExSvr.exist(['SeqA', 'F26T'], null);
    var b_seqa_77 = ExSvr.exist(['SeqA', 'F77B'], null);
    if (b_seqa_26 || b_seqa_52 || b_seqa_77) {
      var loop1 = ExSvr.getflds(['SeqB'], null);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd]))
          continue;
        if (b_seqa_52 && ExSvr.exist([fld_52], loop1[nd])) {
          ExSvr.add_err('D18', ['Not Allowed', 'SeqB', fld_52]);
        }
        if (b_seqa_26 && ExSvr.exist(['F26T'], loop1[nd])) {
          ExSvr.add_err('D18', ['Not Allowed', 'SeqB', 'F26T']);
        }
        if (b_seqa_77 && ExSvr.exist(['F77B'], loop1[nd])) {
          ExSvr.add_err('D18', ['Not Allowed', 'SeqB', 'F77B']);
        }
      }
    }
  }
};

Ex.mfvr.rule119 = function (mt) {
  if ('102.STP' != mt && '103.STP' != mt)
    return;
  var d19_cc = ['AD', 'AT', 'BE', 'BG', 'BV', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR',
    'GB', 'GF', 'GI', 'GP', 'GR', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MQ', 'MT',
    'NL', 'NO', 'PL', 'PM', 'PT', 'RE', 'RO', 'SE', 'SI', 'SJ', 'SK', 'SM', 'TF', 'VA'
  ];
  if (this.ver >= '2013') { // added in 2013 Version
    d19_cc.push('IL');
  }
  if (this.ver >= '2015') { // added in 2015 version
    d19_cc.push('HR');
  }

  var sender = ExSvr.get_val('SENDER', null);
  var recver = ExSvr.get_val('RECVER', null);
  var sender_cnty = sender.substr(4, 2);
  var recver_cnty = recver.substr(4, 2);
  if (!Ex.in_list(sender_cnty, d19_cc) || !Ex.in_list(recver_cnty, d19_cc))
    return;
  if ('102.STP' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd]))
        continue;
      var v57 = ExSvr.get_val(['F57A', 'IdentifierCode'], loopb[nd]);
      if (Ex.isEmpty(v57)
          || (!Ex.isEmpty(v57) && Ex.in_list(v57.substring(4, 6), d19_cc))) {
        var v59 = ExSvr.get_val(['Choice_59A', '*', 'Account'], loopb[nd]);
        if (!ExSvr.chk_iban_val(v59)) {
          ExSvr.add_err('D19', ['Invalid IBAN', 'SeqB', 'F59a', 'Account']);
        }
      }
    }
  } else if ('103.STP' == mt) {
    var v57 = ExSvr.get_val(['Choice_57ABCD', 'F57A', 'IdentifierCode'], null);
    if (Ex.isEmpty(v57)
        || (!Ex.isEmpty(v57) && Ex.in_list(v57.substring(4, 6), d19_cc))) {
      var v59 = ExSvr.get_val(['Choice_59AF', '*', 'Account'], null);
      if (!ExSvr.chk_iban_val(v59)) {
        ExSvr.add_err('D19', ['Invalid IBAN', 'F59a', 'Account']);
      }
    }
  }
};

Ex.mfvr.rule120 = function (mt) {
  if ('102' == mt || '102.STP' == mt) {
    var b71a = ExSvr.exist(['SeqA', 'F71A'], null);
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd]))
        continue;
      var b71b = ExSvr.exist(['F71A'], loopb[nd]);
      if (b71a && b71b) {
        ExSvr.add_err('D20', ['Not both', 'SeqA&SeqB', 'F71A']);
      }
      if (!b71a && !b71b) {
        ExSvr.add_err('D20', ['At least one', 'SeqA&SeqB', 'F71A']);
      }
    }
  }
};

Ex.mfvr.rule121 = function (mt) {
  if ('104' == mt || '107' == mt) {
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd]))
        continue;
      var b33 = ExSvr.exist(['F33B'], loop1[nd]);
      if (b33) {
        var v33b_ccy = ExSvr.get_val(['F33B', 'Currency'], loop1[nd]);
        var v32b_ccy = ExSvr.get_val(['F32B', 'Currency'], loop1[nd]);
        if (Ex.equals(v33b_ccy, v32b_ccy)) {
          var v33b_amt = ExSvr.get_val(['F33B', 'Amount'], loop1[nd]);
          var v32b_amt = ExSvr.get_val(['F32B', 'Amount'], loop1[nd]);
          if (Ex.equals(v33b_amt, v32b_amt)) {
            ExSvr.add_err('D21', ['Must be different between fields F33B and F32B', 'SeqB', 'F33B']);
          }
        }
      }
    }
  }
};

Ex.mfvr.rule122 = function (mt) {
  if ('102' != mt && '102.STP' != mt) {
    return;
  }
  var b36f_seqA = ExSvr.exist(['SeqA', 'F36'], null);
  var loop1 = ExSvr.getflds(['SeqB'], null);
  if (b36f_seqA) {
    var b33b_found = false;
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd]))
        continue;
      var b36f_seqB = ExSvr.exist(['F36'], loop1[nd]);
      if (b36f_seqB)
        ExSvr.add_err('D22', ['Not Allowed', 'SeqB', 'F36'])
      var b33b = ExSvr.exist(['F33B'], loop1[nd]);
      if (b33b)
        b33b_found = true;
      else
        continue;
      var ccy_f33b = ExSvr.get_val(['F33B', 'Currency'], loop1[nd]);
      var ccy_f32b = ExSvr.get_val(['F32B', 'Currency'], loop1[nd]);
      if (Ex.equals(ccy_f32b, ccy_f33b))
        ExSvr.add_err('D22', ['Must be different', 'SeqB', 'F32B&F33B', 'Currency']);
    }
    if (!b33b_found)
      ExSvr.add_err('D22', ['Minimum one occurrence', 'SeqB', 'F33B']);
  } else {
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd]))
        continue;
      var ccy_f32b = ExSvr.get_val(['F32B', 'Currency'], loop1[nd]);
      var b33b = ExSvr.exist(['F33B'], loop1[nd]);
      var b36f_seqB = ExSvr.exist(['F36'], loop1[nd]);
      if (b33b) {
        var ccy_f33b = ExSvr.get_val(['F33B', 'Currency'], loop1[nd]);
        if (Ex.equals(ccy_f32b, ccy_f33b)) {
          if (b36f_seqB)
            ExSvr.add_err('D22', ['Not Allowed', 'SeqB', 'F36'])
        } else {
          if (!b36f_seqB)
            ExSvr.add_err('D22', ['Mandatory', 'SeqB', 'F36'])
        }
      } else {
        if (b36f_seqB)
          ExSvr.add_err('D22', ['Not Allowed', 'SeqB', 'F36'])
      }
    }
  }
};

Ex.mfvr.rule123 = function (mt) {
  if (mt != '304')
    return;
  var f17o = ExSvr.get_val(['SeqA', 'F17O'], null);
  var f94a = ExSvr.get_val(['SeqA', 'F94A'], null);
  var seqD_exist = ExSvr.exist(['SeqD'], null);
  if ((f17o == null || f17o == 'Y') && seqD_exist) {
//    ExSvr.add_err('D23', ['Not Allowed', 'SeqD']);
  } else if ('AFWD' == f94a && f17o == 'N' && !seqD_exist) {
    ExSvr.add_err('D23', ['Mandatory', 'SeqD']);
  }
};

Ex.mfvr.rule124 = function (mt) {
  if (mt != '306')
    return;
  var f12f = ExSvr.get_val(['SeqA', 'F12F'], null);
  var f17a = ExSvr.get_val(['SeqA', 'F17A'], null);
  var f17f = ExSvr.get_val(['SeqA', 'F17F'], null);
  if ('VANI' == f12f && 'N' == f17a && 'N' == f17f) {
    ExSvr.add_err('D24', ['Combination NOT Allowed']);
  }
};

Ex.mfvr.rule125 = function (mt) {
};

Ex.mfvr.rule126 = function (mt) {
  if (mt != '306')
    return;
  var f12f = ExSvr.get_val(['SeqA', 'F12F'], null);
  var f12e = ExSvr.get_val(['SeqA', 'F12E'], null);
  if (this.ver >= '2024'){
    if (Ex.in_list(f12f, ['BINA','AVFF','AVSF','DAVF']) ) {
      if (f12e) {ExSvr.add_err('D26', ['NOT Allowed', 'SeqA', 'F12E']);}
    } else {
      if (!f12e) {ExSvr.add_err('D26', ['Mandatory', 'SeqA', 'F12E']);}
    }
    return;
  }
  if (this.ver == '2023'){
    if ('BINA' == f12f) {
      if (f12e) {ExSvr.add_err('D26', ['NOT Allowed', 'SeqA', 'F12E']);}
    } else {
      if (!f12e) {ExSvr.add_err('D26', ['Mandatory', 'SeqA', 'F12E']);}
    }
    return;
  }
  var hm = {
    'BINA': ['AMER', 'EURO'],
    'DIGI': ['EURO'],
    'NOTO': ['EURO'],
    'VANI': ['AMER', 'ASIA', 'BERM', 'EURO']
  };
  if (hm.hasOwnProperty(f12f)) {
    if (!Ex.in_list(f12e, hm[f12f])) {
      ExSvr.add_err('D26', ['Value NOT Allowed', 'SeqA', 'F12E']);
    }
  }

  //	if (('BINA' == f12f && 'AMER' != f12e && 'EURO' != f12e)
  //			|| ('DIGI' == f12f && 'EURO' != f12e)
  //			|| ('NOTO' == f12f && 'EURO' != f12e)
  //			|| ('VANI' == f12f && 'AMER' != f12e && 'BERM' != f12e && 'EURO' != f12e) ) {
  //		ExSvr.add_err('D26', ['Value NOT Allowed', 'SeqA', 'F12E']);
  //	}
};

Ex.mfvr.rule127 = function (mt) {
  if (mt != '306')
    return;
  var f12f = ExSvr.get_val(['SeqA', 'F12F'], null);
  var f17a = ExSvr.get_val(['SeqA', 'F17A'], null);
  var typeOfEvent = ExSvr.get_val(['SeqA', 'F22K', 'TypeOfEvent'], null);
  if (this.ver >= '2025') {
    if ('VANI' == f12f && f17a == 'N' ) {
      if (!Ex.in_list(typeOfEvent, ['CONF', 'CLST', 'OTHR'])) {
      ExSvr.add_err('D27', ['Value NOT Allowed', 'SeqA', 'F22K', 'TypeOfEvent']);
      }
    } else if (Ex.in_list(f12f, ['AVFF','AVSF','AVSS','AVSO','DAVF','DAVO']) && f17a == 'N' ) {
      if (!Ex.in_list(typeOfEvent, ['AVAR','CONF', 'CLST', 'OTHR'])) {
      ExSvr.add_err('D27', ['Value NOT Allowed', 'SeqA', 'F22K', 'TypeOfEvent']);
      }
    }
    return;
  }
  if (this.ver >= '2024'){
    if (Ex.in_list(f12f, ['AVFF','AVSF','AVSS','AVSO','DAVF','DAVO','VANI']) && f17a == 'N' ) {
      if (!Ex.in_list(typeOfEvent, ['CONF', 'CLST', 'OTHR'])) {
      ExSvr.add_err('D27', ['Value NOT Allowed', 'SeqA', 'F22K', 'TypeOfEvent']);
      }
    }
    return;
  }
  if ('VANI' == f12f) {
    if ('N' == f17a && !Ex.in_list(typeOfEvent, ['CONF', 'CLST', 'OTHR'])) {
      ExSvr.add_err('D27', ['Value NOT Allowed', 'SeqA', 'F22K', 'TypeOfEvent']);
    } else if ('Y' == f17a && !Ex.in_list(typeOfEvent, ['CONF', 'CLST', 'KNIN', 'KNOT', 'OTHR'])) {
      ExSvr.add_err('D27', ['Value NOT Allowed', 'SeqA', 'F22K', 'TypeOfEvent']);
    }
  } else {
    if ('N' == f17a && !Ex.in_list(typeOfEvent, ['CONF', 'CLST', 'TRIG', 'OTHR'])) {
      ExSvr.add_err('D27', ['Value NOT Allowed', 'SeqA', 'F22K', 'TypeOfEvent']);
    } else if ('Y' == f17a && !Ex.in_list(typeOfEvent, ['CONF', 'CLST', 'KNIN', 'KNOT', 'TRIG', 'OTHR'])) {
      ExSvr.add_err('D27', ['Value NOT Allowed', 'SeqA', 'F22K', 'TypeOfEvent']);
    }
  }
};

Ex.mfvr.rule128 = function (mt) {
  if (mt != '306')
    return;
  var typeOfEvent = ExSvr.get_val(['SeqA', 'F22K', 'TypeOfEvent'], null);
  var f30u_exist = ExSvr.exist(['SeqA', 'F30U'], null);
  var f29h_exist = ExSvr.exist(['SeqA', 'F29H'], null);
  if ('CONF' == typeOfEvent || 'CLST' == typeOfEvent) {
    if (f30u_exist) {
      ExSvr.add_err('D28', ['Not Allowed', 'SeqA', 'F30U']);
    }
    if (f29h_exist) {
      ExSvr.add_err('D28', ['Not Allowed', 'SeqA', 'F20H']);
    }
  } else {
    if (!f30u_exist) {
      ExSvr.add_err('D28', ['Mandatory', 'SeqA', 'F30U']);
    }
  }
};

Ex.mfvr.rule129 = function (mt) {
  if (mt == '304') {
    var f17f = ExSvr.get_val(['SeqA', 'F17F'], null);
    var f17n = ExSvr.get_val(['SeqA', 'F17N'], null);
    var seqE_exists = ExSvr.exist(['SeqE']);
    if ('Y' == f17f && 'Y' == f17n && !seqE_exists) {
      ExSvr.add_err('D29', ['Mandatory', 'SeqE']);
    } else if ('Y' == f17f && 'N' == f17n && seqE_exists) {
      ExSvr.add_err('D29', ['Not Allowed', 'SeqE']);
    } else if ('N' == f17f && ('Y' == f17n || 'N' == f17n) && seqE_exists) {
      ExSvr.add_err('D29', ['Not Allowed', 'SeqE']);
    } else if (f17f == null && ((null == f17n || 'Y' == f17n || 'N' == f17n)) && seqE_exists) {
      ExSvr.add_err('D29', ['Not Allowed', 'SeqE']);
    }
  } else if ('507' == mt) {
    ExSvr.debug('TBD 129 ' + mt);
  } else if ('567' == mt) {
    ExSvr.debug('TBD 129 ' + mt);
  }

};

Ex.mfvr.rule130 = function (mt) {
  if (mt != '306')
    return;
  var f12f = ExSvr.get_val(['SeqA', 'F12F'], null);
  if ('BINA' == f12f) {
    if (ExSvr.exist(['SeqD'], null)) {
      ExSvr.add_err('D30', ['Not Allowed', 'SeqD']);
    }
    if (this.ver < '2023' && !ExSvr.exist(['SeqG'], null)) {
      ExSvr.add_err('D30', ['Mandatory', 'SeqG']);
    }
  } else {
    if (!ExSvr.exist(['SeqD'], null)) {
      ExSvr.add_err('D30', ['Mandatory', 'SeqD']);
    }
    if (this.ver < '2023' && ExSvr.exist(['SeqG'], null)) {
      ExSvr.add_err('D30', ['Not Allowed', 'SeqG']);
    }
  }
};

Ex.mfvr.rule131 = function (mt) {
  if (mt != '306') {
    return;
  }
  var f12f = ExSvr.get_val(['SeqA', 'F12F'], null);
  if ('VANI' != f12f) {
    return;
  }
  var f12e = ExSvr.get_val(['SeqA', 'F12E'], null);
  var f30p_exist = ExSvr.exist(['SeqD', 'F30P'], null);
  var f30q_exist = false;
  var loop = ExSvr.getflds(['SeqD', 'Loop1'], null);
  for (var i in loop) {
    if (!Ex.isNode(loop[i]))
      continue;
    if (ExSvr.exist(['F30Q'], loop[i])) {
      f30q_exist = true;
      break;
    }
  }
  if ('AMER' == f12e) {
    if (!f30p_exist) {
      ExSvr.add_err('D31', ['Mandatory', 'SeqD', 'F30P']);
    }
    if (f30q_exist) {
      ExSvr.add_err('D31', ['Not Allowed', 'SeqD', 'Loop1', 'F30Q']);
    }
  } else if ('BERM' == f12e) {
    if (f30p_exist) {
      ExSvr.add_err('D31', ['Not Allowed', 'SeqD', 'F30P']);
    }
    if (!f30q_exist) {
      ExSvr.add_err('D31', ['Mandatory', 'SeqD', 'Loop1', 'F30Q']);
    }
  } else if ('EURO' == f12e) {
    if (f30p_exist) {
      ExSvr.add_err('D31', ['Not Allowed', 'SeqD', 'F30P']);
    }
    if (f30q_exist) {
      ExSvr.add_err('D31', ['Not Allowed', 'SeqD', 'Loop1', 'F30Q']);
    }
  }
};

Ex.mfvr.rule132 = function (mt) {
  if (mt != '306')
    return;
  var f12f = ExSvr.get_val(['SeqA', 'F12F'], null);
  var seqE_exists = ExSvr.exist(['SeqE'], null);
  if (this.ver >= '2023'){
    if ('BINA' == f12f) {
      if (!seqE_exists) {ExSvr.add_err('D32', ['Mandatory', 'SeqE']);}
    } else {
      if (seqE_exists) {ExSvr.add_err('D32', ['NOT Allowed', 'SeqE']);}
    }
    return;
  }

  if ('VANI' == f12f && seqE_exists) {
    ExSvr.add_err('D32', ['Not Allowed', 'SeqE']);
  } else if (('BINA' == f12f || 'DIGI' == f12f) && !seqE_exists) {
    ExSvr.add_err('D32', ['Mandatory', 'SeqE']);
  } else if ('NOTO' == f12f) {
    var typeOfEvent = ExSvr.get_val(['SeqA', 'F22K', 'TypeOfEvent'], null);
    if ('TRIG' == typeOfEvent && seqE_exists) {
      ExSvr.add_err('D32', ['Not Allowed', 'SeqE']);
    } else if ('TRIG' != typeOfEvent && !seqE_exists) {
      ExSvr.add_err('D32', ['Mandatory', 'SeqE']);
    }
  }
};

Ex.mfvr.rule133 = function (mt) {
  if (mt != '306')
    return;
  var f12f = ExSvr.get_val(['SeqA', 'F12F'], null);
  if ('VANI' != f12f)
    return;
  var f17f = ExSvr.get_val(['SeqA', 'F17F'], null);
  var f26f = ExSvr.get_val(['SeqD', 'F26F'], null);
  if ('Y' == f17f) {
    if ('NETCASH' != f26f) {
      ExSvr.add_err('D33', ['Value NOT Allowed', 'SeqD', 'F26F']);
    }
  } else if ('N' == f17f) {
    if ('NETCASH' != f26f && 'PRINCIPAL' != f26f) {
      ExSvr.add_err('D33', ['Value NOT Allowed', 'SeqD', 'F26F']);
    }
  }
};

Ex.mfvr.rule134 = function (mt) {
  if (mt != '306')
    return;
  if (!ExSvr.exist(['SeqE'], null))
    return;
  var typeOfEvent = ExSvr.get_val(['SeqA', 'F22K', 'TypeOfEvent'], null);
  var f12e = ExSvr.get_val(['SeqA', 'F12E'], null);
  var f30H_exist = ExSvr.exist(['SeqE', 'F30H'], null);
  if (this.ver >= '2023'){
    if ('KNIN' == typeOfEvent || 'KNOT' == typeOfEvent ) {
      if ( !f30H_exist) ExSvr.add_err('D34', ['Mandatory', 'SeqE', 'F30H']);
    } else {
      if(f30H_exist) ExSvr.add_err('D34', ['Not Allowed', 'SeqE', 'F30H']);
    }
    return;
  }
  if ('TRIG' == typeOfEvent && 'AMER' == f12e && !f30H_exist) {
    ExSvr.add_err('D34', ['Mandatory', 'SeqE', 'F30H']);
  } else if ('TRIG' != typeOfEvent && ('AMER' == f12e || 'EURO' == f12e) && f30H_exist) {
    ExSvr.add_err('D34', ['Not Allowed', 'SeqE', 'F30H']);
  }
};

Ex.mfvr.rule135 = function (mt) {
  if (!Ex.in_list(mt, ['360', '361']))
    return;
  var f14 = ExSvr.get_val(['SeqA', 'F14A'], null);
  if ('OTHER' == f14 && !ExSvr.exist(['SeqA', 'F77D'], null)) {
    ExSvr.add_err('D35', ['Mandatory', 'SeqA', 'F77D']);
  }
};

Ex.mfvr.rule136 = function (mt) {
  if ('340' == mt) {
    var f14f = ExSvr.get_val(['SeqB', 'F14F'], null);
    if ('OTHER' == f14f) {
      if (!ExSvr.exist(['SeqE'], null)) {
        ExSvr.add_err('D36', ['Mandatory', 'SeqE']);
        return;
      }
      if (!ExSvr.exist(['SeqE', 'F72'], null)) {
        ExSvr.add_err('D36', ['Mandatory', 'SeqE', 'F72']);
      }
    }
  } else if (Ex.in_list(mt, ['306', '360', '361'])) {
    var subf1_name = null;
    if ('306' == mt) {
      subf1_name = 'TypeOfAgreement';
    } else if ('360' == mt || '361' == mt) {
      subf1_name = 'Type';
    }
    var subf1_value = ExSvr.get_val(['SeqA', 'F77H', subf1_name], null);
    if ('OTHER' == subf1_value && !ExSvr.exist(['SeqA', 'F77D'], null)) {
      ExSvr.add_err('D36', ['Mandatory', 'SeqA', 'F77D']);
    }
  } else if ('600' == mt) {
    var subf1 = ExSvr.get_val(['SeqA', 'F77H', 'Type'], null);
    if ('OTHER' == subf1 && !ExSvr.exist(['SeqA', 'F77D'], null)) {
      ExSvr.add_err('D36', ['Mandatory', 'SeqA', 'F77D']);
    }
  } else if ('601' == mt) {
    var subf1 = ExSvr.get_val(['F77H', 'Type'], null);
    if ('OTHER' == subf1 && !ExSvr.exist(['F77D'], null)) {
      ExSvr.add_err('D36', ['Mandatory', 'F77D']);
    }
  }
};

Ex.mfvr.rule137 = function (mt) {
  if ('340' == mt) {
    var f14d = ExSvr.get_val(['SeqB', 'SeqB2', 'F14D'], null);
    if ('OTHER' == f14d) {
      if (!ExSvr.exist(['SeqE'], null)) {
        ExSvr.add_err('D37', ['Mandatory', 'SeqE']);
        return;
      }
      var loop = ExSvr.getflds(['SeqE'], null);
      for (var i in loop) {
        var seq = loop[i];
        if (!Ex.isNode(seq))
          continue;
        if (!ExSvr.exist(['F72'], seq)) {
          ExSvr.add_err('D37', ['Mandatory', 'SeqE', 'F72']);
        }
      }
    }
  } else if ('360' == mt || '361' == mt) {
    var seqNames = ['SeqB', 'SeqC', 'SeqE', 'SeqF'];
    for (var index in seqNames) {
      var name = seqNames[index];
      //  ExSvr.debug('loop  137 a - ' + index + name );
      if (!ExSvr.exist([name], null))
        continue;
      var loop = ExSvr.getflds([name], null);
      for (var i in loop) {
        var seq = loop[i];
        if (!Ex.isNode(seq))
          continue;
        var f14d = ExSvr.get_val(name + '1/F14D', seq);
        //ExSvr.debug('loop  137 - ' + i  );
        if ('OTHER' == f14d && !ExSvr.exist('F37N', seq)) {
          //ExSvr.debug('loop  137 c - ' + i  + '  ' + f14d);
          ExSvr.add_err('D37', ['Mandatory', name, 'F37N']);
        }
      }
    }
  }
};

Ex.mfvr.rule138 = function (mt) {
  if ('360' != mt && '361' != mt) {
    return;
  }
  var seqNames = ['SeqC', 'SeqF'];
  for (var index in seqNames) {
    var name = seqNames[index];
    if (!ExSvr.exist([name], null))
      continue;
    var loop = ExSvr.getflds([name], null);
    for (var i in loop) {
      var seq = loop[i];
      if (!Ex.isNode(seq))
        continue;
      var f14f = ExSvr.get_val(['F14F'], seq);
      if ('OTHER' == f14f && !ExSvr.exist(['F37N'], seq)) {
        ExSvr.add_err('D38', ['Mandatory', name, 'F37N']);
      }
    }
  }
};

Ex.mfvr.rule139 = function (mt) {
  if ('360' != mt && '361' != mt) {
    return;
  }
  var seqNames = ['SeqC', 'SeqF'];
  for (var index in seqNames) {
    var name = seqNames[index];
    if (!ExSvr.exist([name], null))
      continue;
    var loop = ExSvr.getflds([name], null);
    for (var i in loop) {
      var seq = loop[i];
      if (!Ex.isNode(seq))
        continue;
      var f14j = ExSvr.get_val([name + '1', 'F14J'], seq);
      if ('OTHER' == f14j && !ExSvr.exist(['F37N'], seq)) {
        ExSvr.add_err('D39', ['Mandatory', name, 'F37N']);
      }
    }
  }
};

Ex.mfvr.rule140 = function (mt) {
  if ('360' != mt && '361' != mt) {
    return;
  }
  var seqNames = ['SeqC', 'SeqF'];
  for (var index in seqNames) {
    var name = seqNames[index];
    if (!ExSvr.exist([name], null))
      continue;
    var loop = ExSvr.getflds([name], null);
    for (var i in loop) {
      var seq = loop[i];
      if (!Ex.isNode(seq))
        continue;
      var subf1 = ExSvr.get_val([name + '1', 'F14G', 'Frequency'], seq);
      if ('O' == subf1 && !ExSvr.exist(['F37N'], seq)) {
        ExSvr.add_err('D40', ['Mandatory', name, 'F37N']);
      }
    }
  }
};

Ex.mfvr.rule141 = function (mt) {
  if ('360' != mt && '361' != mt) {
    return;
  }
  var seqNames = ['SeqC', 'SeqF'];
  for (var index in seqNames) {
    var name = seqNames[index];
    if (!ExSvr.exist([name], null))
      continue;
    var loop = ExSvr.getflds([name], null);
    for (var i in loop) {
      var seq = loop[i];
      if (!Ex.isNode(seq))
        continue;
      var subf2 = ExSvr.get_val([name + '1', 'F38E', 'Period'], seq);
      if ('O' == subf2 && !ExSvr.exist(['F37N'], seq)) {
        ExSvr.add_err('D41', ['Mandatory', name, 'F37N']);
      }
    }
  }
};

Ex.mfvr.rule142 = function (mt) {
  if ('340' == mt) {
    var periodFrom = ExSvr.get_val(['SeqB', 'SeqB2', 'F38G', 'PeriodFrom'], null);
    if ('O' == periodFrom) {
      if (!ExSvr.exist(['SeqE'], null)) {
        ExSvr.add_err('D42', ['Mandatory', 'SeqE']);
      }
      if (!ExSvr.exist(['SeqE', 'F72'], null)) {
        ExSvr.add_err('D42', ['Mandatory', 'SeqE', 'F72']);
      }
    }
  } else if ('360' == mt || '361' == mt) {
    if (ExSvr.exist(['SeqC'], null) && !ExSvr.exist(['SeqC', 'F37N'], null)) {
      var tags = ['F38G', 'F38H'];
      for (var i in tags) {
        var vsubf2 = ExSvr.get_val(['SeqC', 'SeqC3', tags[i], 'PeriodFrom'], null);
        if ('O' == vsubf2) {
          ExSvr.add_err('D42', ['Mandatory', 'SeqC', 'F37N']);
          break;
        }
        var vsubf4 = ExSvr.get_val(['SeqC', 'SeqC3', tags[i], 'PeriodTo'], null);
        if ('O' == vsubf4) {
          ExSvr.add_err('D42', ['Mandatory', 'SeqC', 'F37N']);
          break;
        }
      }
    }
    if (ExSvr.exist(['SeqF'], null) && !ExSvr.exist(['SeqF', 'F37N'], null)) {
      var tags = ['F38G', 'F38H'];
      for (var i in tags) {
        var vsubf2 = ExSvr.get_val(['SeqF', 'SeqF3', tags[i], 'PeriodFrom'], null);
        if ('O' == vsubf2) {
          ExSvr.add_err('D42', ['Mandatory', 'SeqF', 'F37N']);
          break;
        }
        var vsubf4 = ExSvr.get_val(['SeqF', 'SeqF3', tags[i], 'PeriodTo'], null);
        if ('O' == vsubf4) {
          ExSvr.add_err('D42', ['Mandatory', 'SeqF', 'F37N']);
          break;
        }
      }
    }
  }
};

Ex.mfvr.rule143 = function (mt) {
  if ('306' != mt)
    return;
  var f17a = ExSvr.get_val(['SeqA', 'F17A'], null);
  var seqF_exist = ExSvr.exist(['SeqF'], null);
  if ('Y' == f17a && !seqF_exist) {
    ExSvr.add_err('D43', ['Mandatory', 'SeqF']);
  } else if ('N' == f17a && seqF_exist) {
    ExSvr.add_err('D43', ['Not Allowed', 'SeqF']);
  } else {
    if (this.ver >='2023' && !f17a && !seqF_exist) {
    ExSvr.add_err('D43', ['Mandatory', 'SeqF']);
    }
  }
};

Ex.mfvr.rule144 = function (mt) {
  if ('306' != mt)
    return;
  var f22g = ExSvr.get_val(['SeqF', 'F22G'], null);
  var f37l = ExSvr.exist(['SeqF', 'F37L'], null);
  var notlist = ['SKIN', 'DIKI','DOKO','UIKI','UOKO'];
  var madlist = ['DKIN','DKOT','DUKI','DUKO','KIKO','KOKI']
  if (Ex.in_list(f22g, notlist) ) {
    if (f37l) {
      ExSvr.add_err('D44', ['Not Allowed', 'SeqF', 'F37F']);
    }
  } else if ( Ex.in_list(f22g, madlist) ) {
    if (!f37l) {
      ExSvr.add_err('D44', ['Mandatory', 'SeqF', 'F37F']);
    }
  }
};

Ex.mfvr.rule145 = function (mt) {
  if (!Ex.in_list(mt, ['360', '361']))
    return;
  if (!ExSvr.exist(['SeqB', 'SeqB1'], null))
    return;
  if (ExSvr.exist(['SeqB', 'F37M'], null)) {
    if (ExSvr.exist(['SeqB', 'SeqB1', 'Loop1'], null)) {
      var loop = ExSvr.getflds(['SeqB', 'SeqB1', 'Loop1'], null);
      for (var i in loop) {
        var loop1 = loop[i];
        if (!Ex.isNode(loop1))
          continue;
        if (ExSvr.exist(['F32M'], loop1)) {
          ExSvr.add_err('D45', ['Not Allowed', 'SeqB', 'SeqB1', 'Loop1', 'F32M']);
        }
      }
    }
    if (!ExSvr.exist(['SeqB', 'SeqB1', 'F17F'], null)) {
      ExSvr.add_err('D45', ['Mandatory', 'SeqB', 'SeqB1', 'F17F']);
    }
    if (!ExSvr.exist(['SeqB', 'SeqB1', 'F14D'], null)) {
      ExSvr.add_err('D45', ['Mandatory', 'SeqB', 'SeqB1', 'F14D']);
    }
  } else {
    if (ExSvr.exist(['SeqB', 'SeqB1', 'Loop1'], null)) {
      var loop = ExSvr.getflds(['SeqB', 'SeqB1', 'Loop1'], null);
      for (var i in loop) {
        var loop1 = loop[i];
        if (!Ex.isNode(loop1))
          continue;
        if (!ExSvr.exist(['F32M'], loop1)) {
          ExSvr.add_err('D45', ['Mandatory', 'SeqB', 'SeqB1', 'Loop1', 'F32M']);
        }
      }
    }
    if (ExSvr.exist(['SeqB', 'SeqB1', 'F17F'], null)) {
      ExSvr.add_err('D45', ['Not Allowed', 'SeqB', 'SeqB1', 'F17F']);
    }
    if (ExSvr.exist(['SeqB', 'SeqB1', 'F14D'], null)) {
      ExSvr.add_err('D45', ['Not Allowed', 'SeqB', 'SeqB1', 'F14D']);
    }
  }
};

Ex.mfvr.rule146 = function (mt) {
  if ('306' != mt) {
    return;
  }
  if (this.ver >= '2023') {
      var f12f = ExSvr.get_val('SeqA/F12F', null);
      var f17a = ExSvr.exist('SeqA/F17A', null);
      if ('BINA' == f12f) {
        if (f17a) ExSvr.add_err('D46', ['Not Allowed', 'SeqA', 'F17A']);
      } else {
        if (!f17a) ExSvr.add_err('D46', ['Mandatory', 'SeqA', 'F17A']);
      }
  } else if (this.ver >= '2015') {
    var loop = ExSvr.getflds(['SeqG'], null);
    for (var i in loop) {
      var loop1 = loop[i];
      if (!Ex.isNode(loop1)) {
        continue;
      }
      var f22j = ExSvr.get_val(['F22J'], loop1);
      var f37p = ExSvr.get_val(['F37P'], loop1);
      if ('SITR' == f22j && f37p) {
        ExSvr.add_err('D46', ['Not Allowed', 'SeqG', 'F37P']);
      } else if ('DBTR' == f22j && !f37p) {
        ExSvr.add_err('D46', ['Mandatory', 'SeqG', 'F37P']);
      }
    }
  } else {
    var f22j = ExSvr.get_val(['SeqG', 'F22J'], null);
    var f37p = ExSvr.get_val(['SeqG', 'F37P'], null);
    if ('SITR' == f22j && f37p) {
      ExSvr.add_err('D46', ['Not Allowed', 'SeqG', 'F37P']);
    } else if ('DBTR' == f22j && !f37p) {
      ExSvr.add_err('D46', ['Mandatory', 'SeqG', 'F37P']);
    }
  }
};

Ex.mfvr.rule147 = function (mt) {
  if ('306' != mt)
    return;
  var f17f = ExSvr.get_val(['SeqA', 'F17F'], null);
  var seqH_exist = ExSvr.exist(['SeqH'], null);
  if ('Y' == f17f && !seqH_exist) {
    ExSvr.add_err('D47', ['Mandatory', 'SeqH']);
  } else if ('N' == f17f && seqH_exist) {
    ExSvr.add_err('D47', ['Not Allowed', 'SeqH']);
  }
};

Ex.mfvr.rule148 = function (mt) {
  if (this.ver >= '2023' && '306' == mt){
    if (ExSvr.exist(['SeqF'], null)){
      var f14m = ExSvr.get_val(['SeqF', 'F14M'], null);
      if ('DISC' == f14m){
        var b1 = ExSvr.exist('SeqF/F29J', null);
        var b2 = ExSvr.exist('SeqF/F14O', null);
        if (b1 && b2) {
          ExSvr.add_err('D48', ['Not allowed both']);
        } else if (b1 || b2) {
        } else {
          ExSvr.add_err('D48', ['Mandatory']);
        }
      }
    }
  }
  if (!Ex.in_list(mt, ['360', '361']))
    return;
  var seqNames ;
  if (mt == '360'){
  seqNames = ['SeqL', 'SeqM'];
  } else if (mt == '361'){
  seqNames = ['SeqM', 'SeqN'];
  }
  for (var index in seqNames) {
    var name = seqNames[index];
    var loop = ExSvr.getflds(name, null);
    for (var idx in loop) {
      var seq = loop[idx];
      if (!Ex.isNode(seq))
        continue;
      if (!ExSvr.exist(['Choice_57AD'], seq)) {
        if (ExSvr.exist(['Choice_53AD'], seq)) {
          ExSvr.add_err('D48', ['Not Allowed', name, '53a']);
        }
        if (ExSvr.exist(['Choice_56AD'], seq)) {
          ExSvr.add_err('D48', ['Not Allowed', name, '56a']);
        }
      }
    }
  }
};

Ex.mfvr.rule149 = function (mt) {
  if (this.ver >= '2023' && '306' == mt){
    if (ExSvr.exist(['SeqF'], null)){
        var b1 = ExSvr.exist('SeqF/F33Z', null);
        var b2 = ExSvr.exist('SeqF/Choice_30FJ', null);
        if (!b1 && b2) {
          ExSvr.add_err('D49', ['Not allowed']);
        }
    }
  }
  if (Ex.in_list(mt, ['103', '103.STP', '102', '102.STP'])) {
    var d49_cc = ['AD', 'AT', 'BE', 'BG', 'BV', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GF', 'GI', 'GP', 'GR',
      'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MQ', 'MT', 'NL', 'NO', 'PL', 'PM', 'PT', 'RE', 'RO', 'SE', 'SI',
      'SJ', 'SK', 'SM', 'TF', 'VA'
    ];
    var sender = ExSvr.get_val('SENDER', null);
    var receiver = ExSvr.get_val('RECVER', null);
    var sender_cnty = sender.substring(4, 6);
    var receiver_cnty = receiver.substring(4, 6);
    if (Ex.in_list(sender_cnty, d49_cc) && Ex.in_list(receiver_cnty, d49_cc)) {
      if (Ex.in_list(mt, ['103', '103.STP'])) {
        if (!ExSvr.exist(['F33B'])) {
          ExSvr.add_err('D49', ['Mandatory', 'F33B']);
        }
      } else if (Ex.in_list(mt, ['102', '102.STP'])) {
        var seqB = ExSvr.getflds(['SeqB'], null);
        for (var nd in seqB) {
          if (!Ex.isNode(seqB[nd]))
            continue;
          if (!ExSvr.exist(['F33B'], seqB[nd])) {
            ExSvr.add_err('D49', ['Mandatory', 'SeqB', 'F33B']);
          }
        }
      }
    }

  } else if ('504' == mt) {
    var b_seqd = ExSvr.exist('SeqD');
    var loop = ExSvr.getflds(['SeqC'], null);
    var c1_found = false;
    var c1a_found = false;
    var c1a_all = true;
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      if (ExSvr.exist(['SeqC1'], loop[i]))
        c1_found = true;
      if (ExSvr.exist(['SeqC1', 'SeqC1a'], loop[i]))
        c1a_found = true;
      else
        c1a_all = false;
    }
    if (!c1_found && b_seqd)
      ExSvr.add_err('D50', ['Not Allowed', 'SeqD']);
    else if (c1a_found && c1a_all && b_seqd)
      ExSvr.add_err('D50', ['Not Allowed', 'SeqD']);

  } else if ('505' == mt) {
    var b_seqc = ExSvr.exist('SeqC');
    var loop = ExSvr.getflds(['SeqB'], null);
    var b1_found = false;
    var b1a_found = false;
    var b1a_all = true;
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      if (ExSvr.exist(['SeqB1'], loop[i]))
        b1_found = true;
      if (ExSvr.exist(['SeqB1', 'SeqB1a'], loop[i]))
        b1a_found = true;
      else
        b1a_all = false;
    }
    if (!b1_found && b_seqc)
      ExSvr.add_err('D50', ['Not Allowed', 'SeqC']);
    else if (b1a_found && b1a_all && b_seqc)
      ExSvr.add_err('D50', ['Not Allowed', 'SeqC']);
  }
};

Ex.mfvr.rule150 = function (mt) {
  if (this.ver >= '2023' && '306' == mt){
    if (ExSvr.exist(['SeqF'], null)){
      var f14m = ExSvr.get_val(['SeqF', 'F14M'], null);
      if ('CONT' == f14m){
        var b1 = ExSvr.exist('SeqF/F29O', null);
        var b2 = ExSvr.exist('SeqF/F14N', null);
        if (b1 && b2) {
          ExSvr.add_err('D50', ['Not allowed both']);
        } else if (b1 || b2) {
        } else {
          // ExSvr.add_err('D50', ['Mandatory']);
        }
      }
    }
  }
  if (Ex.in_list(mt, ['103', '103.STP'])) {
    var f71a = ExSvr.get_val(['F71A'], null);
    if ('SHA' == f71a) {
      if (ExSvr.exist(['F71G'])) {
        ExSvr.add_err('D50', ['Not Allowed', 'F71G']);
      }
    }
  } //end of 103,103.STP
  else if (Ex.in_list(mt, ['102', '102.STP'])) {
    var f71a = ExSvr.get_val(['SeqA', 'F71A'], null);
    if ('SHA' == f71a) {
      var seqB = ExSvr.getflds(['SeqB'], null);
      for (var nd in seqB) {
        if (!Ex.isNode(seqB[nd]))
          continue;
        if (ExSvr.exist(['F71G'], seqB[nd])) {
          ExSvr.add_err('D50', ['Not Allowed', 'SeqB', 'F71G']);
        }
      }
    } else {
      var seqB = ExSvr.getflds(['SeqB'], null);
      for (var nd in seqB) {
        if (!Ex.isNode(seqB[nd]))
          continue;
        var f71b = ExSvr.get_val(['F71A'], seqB[nd])
        if ('SHA' == f71b && ExSvr.exist(['F71G'], seqB[nd])) {
          ExSvr.add_err('D50', ['Not Allowed', 'SeqB', 'F71G']);
        }
      }
    }
  } //end of 102,102.STP
  else if ('504' == mt) {
    var b_seqe = ExSvr.exist('SeqE');
    var loop = ExSvr.getflds(['SeqC'], null);
    var c2_found = false;
    var c2a_found = false;
    var c2a_all = true;
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      if (ExSvr.exist(['SeqC2'], loop[i]))
        c2_found = true;
      if (ExSvr.exist(['SeqC2', 'SeqC2a'], loop[i]))
        c2a_found = true;
      else
        c2a_all = false;
    }
    if (!c2_found && b_seqe)
      ExSvr.add_err('D50', ['Not Allowed', 'SeqE']);
    else if (c2a_found && c2a_all && b_seqe)
      ExSvr.add_err('D50', ['Not Allowed', 'SeqE']);

  } else if ('505' == mt) {
    var b_seqd = ExSvr.exist('SeqD');
    var loop = ExSvr.getflds(['SeqB'], null);
    var b2_found = false;
    var b2a_found = false;
    var b2a_all = true;
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      if (ExSvr.exist(['SeqB2'], loop[i]))
        b2_found = true;
      if (ExSvr.exist(['SeqB2', 'SeqB2a'], loop[i]))
        b2a_found = true;
      else
        b2a_all = false;
    }
    if (!b2_found && b_seqd)
      ExSvr.add_err('D50', ['Not Allowed', 'SeqD']);
    else if (b2a_found && b2a_all && b_seqd)
      ExSvr.add_err('D50', ['Not Allowed', 'SeqD']);
  }
};

Ex.mfvr.rule151 = function (mt) {
  if (this.ver >= '2023' && '306' == mt){
    var bSeqG = ExSvr.exist('SeqG') ;
    if ('BINA' == ExSvr.get_val(['SeqA', 'F12F'], null)) {
      if (!bSeqG){
      ExSvr.add_err('D51', ['Mandatory', 'SeqG']);
      }
    } else if (this.ver >= '2025' && bSeqG) {
      ExSvr.add_err('D51', ['Not allowed', 'SeqG']);
    }
  }
  if (Ex.in_list(mt, ['103', '103.STP'])) {
    var f71f = ExSvr.exist(['Loop3', 'F71F']);
    var f71g = ExSvr.exist(['F71G']);
    if (f71f && f71g) {
      ExSvr.add_err('D51', ['Rejected']);
    } else if (f71f || f71g) {
      if (!ExSvr.exist(['F33B'])) {
        ExSvr.add_err('D51', ['Mandatory', 'F33B']);
      }
    }
  } else if (Ex.in_list(mt, ['102', '102.STP'])) {
    var seqB = ExSvr.getflds(['SeqB'], null);
    for (var nd in seqB) {
      if (!Ex.isNode(seqB[nd]))
        continue;
      var b71f = ExSvr.exist(['Loop1', 'F71F'], seqB[nd]);
      var b71g = ExSvr.exist(['F71G'], seqB[nd]);
      if (b71f && b71g) {
        ExSvr.add_err('D51', ['Rejected']);
      } else if (b71f || b71g) {
        if (!ExSvr.exist(['F33B'], seqB[nd])) {
          ExSvr.add_err('D51', ['Mandatory', 'SeqB', 'F33B']);
        }
      }
    }
  }
};

Ex.mfvr.rule152 = function (mt) {
  if ('507' != mt)
    return;
  var counter = 0;
  //Mandatory Repetitive Subsequence A2
  var loop = ExSvr.getflds(['SeqA', 'SeqA2'], null);
  for (var i in loop) {
    var seqA2 = loop[i];
    if (!Ex.isNode(seqA2))
      continue;
    var f13a_exist = ExSvr.exist(['Choice_13AB'], seqA2);
    if (f13a_exist)
      counter++;
  }
  if (counter > 1) {
    ExSvr.add_err('D52', ['Must be present in one and only one occurrence', 'SeqA', 'SeqA2', '13a']);
  }
};

Ex.mfvr.rule153 = function (mt) {
  if (this.ver >= '2025' && '306' == mt){
    var b12d = ExSvr.exist('SeqA/F12D');
    if (Ex.in_list(ExSvr.get_val(['SeqA', 'F12F'], null), ['AVSO', 'AVSS','DAVO','VANI'])  ) {
      if (!b12d){
      ExSvr.add_err('D53', ['Mandatory', 'SeqA', 'F12D']);
      }
    } else if (b12d) {
      ExSvr.add_err('D53', ['Not allowed', 'SeqA', 'F12D']);
    }
    return;
  }
  if ('507' != mt)
    return;
  //Mandatory Repetitive Subsequence A2
  var loop = ExSvr.getflds(['SeqA', 'SeqA2'], null);
  for (var i in loop) {
    var seqA2 = loop[i];
    if (!Ex.isNode(seqA2))
      continue;
    var f13a_exist = ExSvr.exist(['Choice_13AB'], seqA2);
    var qualifier = ExSvr.get_val(['F20C', 'Qualifier'], seqA2);
    if (f13a_exist && 'RELA' != qualifier) {
      ExSvr.add_err('D53', ['Mandatory', 'SeqA', 'SeqA2', ':20C::RELA']);
    }
  }
};

Ex.mfvr.rule154 = function (mt) {
  if ('101' != mt)
    return;
  var loop = ExSvr.getflds(['SeqB'], null);
  for (var i in loop) {
    var seqb = loop[i];
    if (!Ex.isNode(seqb))
      continue;
    var f36_exist = ExSvr.exist(['F36'], seqb);
    var f21f_exist = ExSvr.exist(['F21F'], seqb);
    if (f36_exist && !f21f_exist) {
      ExSvr.add_err('D54', ['Mandatory', 'SeqB', 'F21F']);
    }
  }
};

Ex.mfvr.rule155 = function (mt) {
  if (this.ver >= '2025' && '306' == mt){
    var f12f = ExSvr.get_val('SeqA/F12F');
    var f17a = ExSvr.get_val('SeqA/F17A');
    var f17f = ExSvr.get_val('SeqA/F17F');
    if ('Y'==f17a && Ex.in_list(f12f, ['AVFF','AVSF','AVSS','AVSO', 'DAVO','DAVF'])  ) {
      ExSvr.add_err('D55', [f12f, f17a]);
    }
    if ('N'==f17f && Ex.in_list(f12f, ['AVSF','DAVF'])  ) {
      ExSvr.add_err('D55', [f12f, f17f]);
    }
    return;
  }
  if ('360' != mt && '361' != mt)
    return;

  var seqNames = ['SeqB', 'SeqC', 'SeqE', 'SeqF'];
  for (var index in seqNames) {
    var name = seqNames[index];
    if (!ExSvr.exist([name], null))
      continue;
    var loop = ExSvr.getflds([name], null);
    for (var i in loop) {
      var seq = loop[i];
      if (!Ex.isNode(seq))
        continue;
      var f14a = ExSvr.get_val([name + '1', 'F14A'], seq);
      if ('OTHER' == f14a && !ExSvr.exist(['F37N'], seq)) {
        ExSvr.add_err('D55', ['Mandatory', name, 'F37N']);
      }
    }
  }
};

Ex.mfvr.rule156 = function (mt) {
  if ('320' == mt) {
    var v22b = ExSvr.get_val(['SeqA', 'F22B'], null);
    var b32h = ExSvr.exist(['SeqB', 'F32H'], null);
    var b30x = ExSvr.exist(['SeqB', 'F30X'], null);
    if ('CONF' == v22b) {
      if (b32h)
        ExSvr.add_err('D56', ['Not Allowed', 'SeqB', 'F32H']);
      if (!b30x)
        ExSvr.add_err('D56', ['Mandatory', 'SeqB', 'F30X']);
    } else if ('MATU' == v22b) {
      if (!b32h)
        ExSvr.add_err('D56', ['Mandatory', 'SeqB', 'F32H']);
      if (b30x)
        ExSvr.add_err('D56', ['Not Allowed', 'SeqB', 'F30X']);
    } else if ('ROLL' == v22b) {
      if (!b32h)
        ExSvr.add_err('D56', ['Mandatory', 'SeqB', 'F32H']);
      if (!b30x)
        ExSvr.add_err('D56', ['Mandatory', 'SeqB', 'F30X']);
    }
  } else if ('330' == mt) {
    var v22b = ExSvr.get_val(['SeqA', 'F22B'], null);
    var b32b = ExSvr.exist(['SeqB', 'F32B'], null);
    var b32h = ExSvr.exist(['SeqB', 'F32H'], null);
    var b30x = ExSvr.exist(['SeqB', 'F30X'], null);
    if ('CHNG' == v22b || 'CINT' == v22b) {
      if (!b32b)
        ExSvr.add_err('D56', ['Mandatory', 'SeqB', 'F32B']);
      if (!b32h)
        ExSvr.add_err('D56', ['Mandatory', 'SeqB', 'F32H']);
    } else if ('CONF' == v22b) {
      if (!b32b)
        ExSvr.add_err('D56', ['Mandatory', 'SeqB', 'F32B']);
      if (b32h)
        ExSvr.add_err('D56', ['Not Allowed', 'SeqB', 'F32H']);
      if (b30x)
        ExSvr.add_err('D56', ['Not Allowed', 'SeqB', 'F30X']);
    } else if ('SETT' == v22b) {
      if (b32b)
        ExSvr.add_err('D56', ['Not Allowed', 'SeqB', 'F32B']);
      if (!b32h)
        ExSvr.add_err('D56', ['Mandatory', 'SeqB', 'F32H']);
      if (!b30x)
        ExSvr.add_err('D56', ['Mandatory', 'SeqB', 'F30X']);
    }
  } else if ('620' == mt) {
    ExSvr.debug('TBD 156 ' + mt);
  }
};

Ex.mfvr.rule157 = function (mt) {
  if (Ex.in_list(mt, ['103', '103.STP'])) {
    if (ExSvr.exist(['F71G'])) {
      var f71g = ExSvr.get_val(['F71G', 'Amount'], null);
      if (0 == Ex.to_num(f71g)) {
        ExSvr.add_err('D57', ['Must not equal 0', 'F71G', 'Amount']);
      }
    }
  } else if (Ex.in_list(mt, ['102', '102.STP', '104', '107'])) {
    if (!ExSvr.exist(['SeqC', 'F71G'], null))
      return;
    var amount = ExSvr.get_val(['SeqC', 'F71G', 'Amount'], null);
    if (0 == Ex.to_num(amount))
      ExSvr.add_err('D57', ['Must not equal 0', 'SeqC', 'F71G', 'Amount']);
  } else if ('320' == mt || '330' == mt) {
    var value;
    if ('320' == mt)
      value = 'MATU';
    else
      value = 'SETT';
    var v22b = ExSvr.get_val(['SeqA', 'F22B'], null);
    if (Ex.equals(value, v22b)) {
      var v32h = ExSvr.get_val(['SeqB', 'F32H', 'Amount'], null);
      var n = Ex.to_num(v32h);
      var sign = ExSvr.get_val(['SeqB', 'F32H', 'Sign'], null);
      if (!v32h)
        return;
      var v17r = ExSvr.get_val(['SeqB', 'F17R'], null);
      if ('L' == v17r) {
        if (n == 0 && 'N' == sign) {
          ExSvr.add_err('D57', ['Letter N is not allowed', 'SeqB', 'F32H', 'Sign', 'when 32H amount is 0']);
        } else if (n != 0 && 'N' != sign) {
          ExSvr.add_err('D57', ['Negative or zero', 'SeqB', 'F32H']);
        }
      } else if ('B' == v17r) {
        if (n == 0 && 'N' == sign) {
          ExSvr.add_err('D57', ['Letter N is not allowed', 'SeqB', 'F32H', 'Sign', 'when 32H amount is 0']);
        } else if (n != 0 && 'N' == sign) {
          ExSvr.add_err('D57', ['Positive or zero', 'SeqB', 'F32H']);
        }
      }
    }
  } else if ('620' == mt) {
    ExSvr.debug('TBD 157 ' + mt);
  }
};

Ex.mfvr.rule158 = function (mt) {
  if ('360' != mt)
    return;
  var typeOfSwap = ExSvr.get_val(['SeqA', 'F23A', 'TypeOfSwap'], null);
  var seqb_exist = ExSvr.exist(['SeqB'], null);
  var seqc_exist = ExSvr.exist(['SeqC'], null);
  var seqe_exist = ExSvr.exist(['SeqE'], null);
  var seqf_exist = ExSvr.exist(['SeqF'], null);

  if ('FIXEDFIXED' == typeOfSwap) {
    if (!seqb_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqB']);
    if (seqc_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqC']);
    if (!seqe_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqE']);
    if (seqf_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqF']);

  } else if ('FLOATFLOAT' == typeOfSwap) {
    if (seqb_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqB']);
    if (!seqc_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqC']);
    if (seqe_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqE']);
    if (!seqf_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqF']);

  } else if ('FLOATFIXED' == typeOfSwap) {
    if (!seqb_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqB']);
    if (seqc_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqC']);
    if (seqe_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqE']);
    if (!seqf_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqF']);

  } else if ('FIXEDFLOAT' == typeOfSwap) {
    if (seqb_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqB']);
    if (!seqc_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqC']);
    if (!seqe_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqE']);
    if (seqf_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqF']);

  } else if ('CAPBUYER' == typeOfSwap) {
    if (seqb_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqB']);
    if (!seqc_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqC']);
    if (seqe_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqE']);
    if (seqf_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqF']);

  } else if ('CAPSELLER' == typeOfSwap) {
    if (seqb_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqB']);
    if (seqc_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqC']);
    if (seqe_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqE']);
    if (!seqf_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqF']);

  } else if ('FLOORBUYER' == typeOfSwap) {
    if (seqb_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqB']);
    if (!seqc_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqC']);
    if (seqe_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqE']);
    if (seqf_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqF']);

  } else if ('FLOORSLLER' == typeOfSwap) {
    if (seqb_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqB']);
    if (seqc_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqC']);
    if (seqe_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqE']);
    if (!seqf_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqF']);

  } else if ('COLLARBYER' == typeOfSwap || 'COLLARSLLR' == typeOfSwap) {
    if (seqb_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqB']);
    if (!seqc_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqC']);
    if (seqe_exist) ExSvr.add_err('D58', ['Not Allowed', 'SeqE']);
    if (!seqf_exist) ExSvr.add_err('D58', ['Mandatory', 'SeqF']);
  }
};

Ex.mfvr.rule159 = function (mt) {
  if ('360' != mt && '361' != mt)
    return;
  if (!ExSvr.exist(['SeqE'], null) || !ExSvr.exist(['SeqE', 'SeqE1'], null))
    return;
  var bf37u = ExSvr.exist(['SeqE', 'F37M'], null);
  var loop = ExSvr.getflds(['SeqE', 'SeqE1', 'Loop6'], null);
  for (var i in loop) {
    if (!Ex.isNode(loop[i]))
      continue;
    var bf32m = ExSvr.exist(['F32M'], loop[i]);
    if (bf37u && bf32m) {
      ExSvr.add_err('D59', ['Not Allowed', 'SeqE', 'SeqE1', 'Loop6', 'F32M']);
    } else if (!bf37u && !bf32m) {
      ExSvr.add_err('D59', ['Mandatory', 'SeqE', 'SeqE1', 'Loop6', 'F32M']);
    }
  }
  var b17f = ExSvr.exist(['SeqE', 'SeqE1', 'F17F'], null);
  var b14d = ExSvr.exist(['SeqE', 'SeqE1', 'F14D'], null);
  if (bf37u) {
    if (!b17f)
      ExSvr.add_err('D59', ['Mandatory', 'SeqE', 'SeqE1', 'F17F']);
    if (!b14d)
      ExSvr.add_err('D59', ['Mandatory', 'SeqE', 'SeqE1', 'F14D']);
  } else {
    if (b17f)
      ExSvr.add_err('D59', ['Not Allowed', 'SeqE', 'SeqE1', 'F17F']);
    if (b14d)
      ExSvr.add_err('D59', ['Not Allowed', 'SeqE', 'SeqE1', 'F14D']);
  }
};

Ex.mfvr.rule160 = function (mt) {
  if ('101' == mt) {
    var loop = ExSvr.getflds(['SeqB'], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      var b33b = ExSvr.exist(['F33B'], loop[i]);
      var v32b = ExSvr.get_val(['F32B', 'Amount'], loop[i]);
      var n32b = Ex.to_num(v32b);
      var b36 = ExSvr.exist(['F36'], loop[i]);
      if (b33b && n32b == 0 && b36) {
        ExSvr.add_err('D60', ['Not Allowed', 'SeqB', 'F36']);
      } else if (b33b && n32b != 0 && !b36) {
        ExSvr.add_err('D60', ['Mandatory', 'SeqB', 'F36']);
      }
    }
  } else if (Ex.in_list(mt, ['320', '330', '620'])) {
    var b30f = ExSvr.exist(['SeqB', 'F30F']);
    var b38j = ExSvr.exist(['SeqB', 'F38J']);
    if (b30f && !b38j) {
      ExSvr.add_err('D60', ['Mandatory', 'SeqB', 'F38J']);
    } else if (!b30f && b38j) {
      ExSvr.add_err('D60', ['Not Allowed', 'SeqB', 'F38J']);
    }
  } else if ('341' == mt) {
    if (!ExSvr.exist(['SeqB', 'SeqB1'], null))
      return;
    var b30v = ExSvr.exist(['SeqB', 'SeqB1', 'F30V'], null);
    var b38d = ExSvr.exist(['SeqB', 'SeqB1', 'F38D'], null);
    if (b30v && !b38d)
      ExSvr.add_err('D60', ['Mandatory', 'SeqB', 'SeqB1', 'F38D']);
    else if (!b30v && b38d)
      ExSvr.add_err('D60', ['Not Allowed', 'SeqB', 'SeqB1', 'F38D']);
  }
};

Ex.mfvr.rule161 = function (mt) {
  if ('101' != mt)
    return;
  var c50a_idx_5_exist = ExSvr.exist(['SeqA', 'Choice_50FGH'], null);
  var loop = ExSvr.getflds('SeqB', null);
  for (var i in loop) {
    var seqb = loop[i];
    if (!Ex.isNode(seqb))
      continue;
    var c50a_idx_15_exist = ExSvr.exist(['Choice_50FGH'], seqb);
    if (c50a_idx_5_exist && c50a_idx_15_exist) {
      ExSvr.add_err('D61', ['Not Allowed', 'SeqB', 'Choice_50FGH']);
    } else if (!c50a_idx_5_exist && !c50a_idx_15_exist) {
      ExSvr.add_err('D61', ['Mandatory', 'SeqB', 'Choice_50FGH']);
    }
  }
};

Ex.mfvr.rule162 = function (mt) {
  if ('101' != mt)
    return;
  var c50a_idx_4_exist = ExSvr.exist(['SeqA', 'Choice_50CL'], null);
  var loop = ExSvr.getflds('SeqB', null);
  for (var i in loop) {
    var seqb = loop[i];
    if (!Ex.isNode(seqb))
      continue;
    var c50a_idx_14_exist = ExSvr.exist(['Choice_50CL'], seqb);
    if (c50a_idx_4_exist && c50a_idx_14_exist) {
      ExSvr.add_err('D62', ['Not Allowed', 'SeqB', 'Choice_50CL']);
    }
  }
};

Ex.mfvr.rule163 = function (mt) {
  // Field 51A is only valid in FileAct
  if (Ex.in_list(mt, ['101', '102', '103', '104', '107', '405', '416'])) {
  }
};

Ex.mfvr.rule164 = function (mt) {
  if ('101' != mt)
    return;
  var c52a_idx_6_exist = ExSvr.exist(['SeqA', 'Choice_52AC'], null);
  var loop = ExSvr.getflds('SeqB', null);
  for (var i in loop) {
    var seqb = loop[i];
    if (!Ex.isNode(seqb))
      continue;
    var c52a_idx_16_exist = ExSvr.exist(['Choice_52AC'], seqb);
    if (c52a_idx_6_exist && c52a_idx_16_exist) {
      ExSvr.add_err('D64', ['Not Allowed', 'SeqB', 'Choice_52AC']);
    }
  }
};

Ex.mfvr.rule165 = function (mt) {
  if ('101' != mt && '207' != mt) {
    return;
  }
  var c56aNm;
  if ('101' == mt) {
    c56aNm = 'Choice_56ACD';
  } else if ('207' == mt) {
    c56aNm = 'Choice_56AD';
  }
  var loop = ExSvr.getflds(['SeqB'], null);
  for (var i in loop) {
    var seqb = loop[i];
    if (!Ex.isNode(seqb)) {
      continue;
    }
    var c56a_exist = ExSvr.exist([c56aNm], seqb);
    var c57a_exist = ExSvr.exist(['Choice_57ACD'], seqb);
    if (c56a_exist && !c57a_exist) {
      ExSvr.add_err('D65', ['Mandatory', 'SeqB', 'Choice_57ACD']);
    }
  }
};

Ex.mfvr.rule166 = function (mt) {
  if ('101' != mt && '207' != mt)
    return;
  var values;
  if ('101' == mt)
    values = ['CMTO', 'PHON', 'OTHR', 'REPA'];
  else
    values = ['CMTO', 'PHON', 'OTHR'];
  var loop = ExSvr.getflds(['SeqB'], null);
  for (var i in loop) {
    var seqb = loop[i];
    if (!Ex.isNode(seqb))
      continue;
    if (!ExSvr.exist(['Loop1'], seqb))
      continue;
    var loop2 = ExSvr.getflds(['Loop1'], seqb);
    for (var j in loop2) {
      if (!Ex.isNode(loop2[j]))
        continue;
      var subf1 = ExSvr.get_val(['F23E', 'InstructionCode'], loop2[j]);
      var subf2_exist = ExSvr.exist(['F23E', 'AdditionalInformation'], loop2[j]);
      if (!Ex.in_list(subf1, values) && subf2_exist)
        ExSvr.add_err('D66', ['Not Allowed', 'SeqB', 'Loop1', 'F23E', 'AdditionalInformation']);
    }
  }
};

Ex.mfvr.rule167 = function (mt) {
  if ('103' == mt || '103.STP' == mt) {
    var combs;
    if ('103' == mt) {
      combs = [
        ['SDVA', 'HOLD'],
        ['SDVA', 'CHQB'],
        ['INTC', 'HOLD'],
        ['INTC', 'CHQB'],
        ['REPA', 'HOLD'],
        ['REPA', 'CHQB'],
        ['REPA', 'CORT'],
        ['CORT', 'HOLD'],
        ['CORT', 'CHQB'],
        ['HOLD', 'CHQB'],
        ['PHOB', 'TELB'],
        ['PHON', 'TELE'],
        ['PHOI', 'TELI']
      ];
    } else {
      combs = [
        ['REPA', 'CORT']
      ];
    }
    var loop2 = ExSvr.getflds(['Loop2'], null);
    var codes = '';
    for (var i in loop2) {
      if (!Ex.isNode(loop2[i]))
        continue;
      var subf1 = ExSvr.get_val(['F23E', 'InstructionCode'], loop2[i]);
      if (subf1) {
        if (codes.length > 0)
          codes += ',';
        codes += subf1;
      }
    }
    if (codes.length <= 4)
      return;
    for (var cidx in combs) {
      var first = combs[cidx][0];
      var second = combs[cidx][1];
      if (codes.indexOf(first) >= 0 && codes.indexOf(second) >= 0) {
        ExSvr.add_err('D67', ['Invalid Combination:' + first + '-' + second, 'SeqB', 'F23E', 'InstructionCode']);
      }
    }

  } else if ('101' == mt || '207' == mt) {
    var combs;
    if ('101' == mt) {
      combs = [
        ['CHQB', 'CMSW'],
        ['CHQB', 'CMTO'],
        ['CHQB', 'CMZB'],
        ['CHQB', 'CORT'],
        ['CHQB', 'URGP'],
        ['CHQB', 'REPA'],
        ['CHQB', 'RTGS'],
        ['CHQB', 'NETS'],
        ['CHQB', 'PHON'],
        ['CMSW', 'CMTO'],
        ['CMSW', 'CMZB'],
        ['CMTO', 'CMZB'],
        ['CORT', 'CMSW'],
        ['CORT', 'CMTO'],
        ['CORT', 'CMZB'],
        ['CORT', 'REPA'],
        ['EQUI', 'CMSW'],
        ['EQUI', 'CMTO'],
        ['EQUI', 'CMZB'],
        ['NETS', 'RTGS']
      ];
    } else {
      combs = [
        ['CMSW', 'CMTO'],
        ['CMSW', 'CMZB'],
        ['CMTO', 'CMZB'],
        ['CORT', 'CMSW'],
        ['CORT', 'CMTO'],
        ['CORT', 'CMZB'],
        ['NETS', 'RTGS']
      ];
    }
    var seqs = ExSvr.getflds(['SeqB'], null);
    for (var i in seqs) {
      var seqB = seqs[i];
      if (!Ex.isNode(seqB))
        continue;
      var loops = ExSvr.getflds(['Loop1'], seqB);
      var codes = '';
      for (var idx in loops) {
        var loop = loops[idx];
        if (!Ex.isNode(loop))
          continue;
        var subf1 = ExSvr.get_val(['F23E', 'InstructionCode'], loop);
        if (subf1) {
          if (codes.length > 0)
            codes += ',';
          codes += subf1;
        }
      }
      if (codes.length <= 4)
        continue;
      for (var cidx in combs) {
        var first = combs[cidx][0];
        var second = combs[cidx][1];
        if (codes.indexOf(first) >= 0 && codes.indexOf(second) >= 0) {
          ExSvr.add_err('D67', ['Invalid Combination:' + first + '-' + second, 'SeqB', 'F23E', 'InstructionCode']);
        }
      }
    }
  }
};

Ex.mfvr.rule168 = function (mt) {
  if ('101' != mt)
    return;
  var loop = ExSvr.getflds(['SeqB'], null);
  for (var i in loop) {
    if (!Ex.isNode(loop[i]))
      continue;
    var f33b_ccy = ExSvr.get_val(['F33B', 'Currency'], loop[i]);
    if (!f33b_ccy)
      continue;
    var f32b_ccy = ExSvr.get_val(['F32B', 'Currency'], loop[i]);
    if (Ex.equals(f32b_ccy, f33b_ccy)) {
      ExSvr.add_err('D68', ['Must be different from the currency code in field 32B', 'SeqB', 'F33B', 'Currency']);
    }
  }
};

Ex.mfvr.rule169 = function (mt) {
  if ('320' == mt || '620' == mt) {
    var v22b = ExSvr.get_val(['SeqA', 'F22B'], null);
    if ('MATU' == v22b && ExSvr.exist(['SeqB', 'F30F'])) {
      ExSvr.add_err('D69', ['Not Allowed', 'SeqB', 'F30F']);
    }
  } else if ('330' == mt) {
    var v22b = ExSvr.get_val(['SeqA', 'F22B'], null);
    if ('SETT' == v22b && ExSvr.exist(['SeqB', 'F30F'])) {
      ExSvr.add_err('D69', ['Not Allowed', 'SeqB', 'F30F']);
    }
  } else if ('340' == mt) {
    var loop = ExSvr.getflds(['SeqB', 'SeqB2', 'Loop1'], null);
    var counter = 0;
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      var v22b = ExSvr.get_val(['F22B'], loop[i]);
      if ('OTHER' == v22b) {
        counter++;
      }
    }
    if (counter > 0) {
      if (!ExSvr.exist(['SeqE'], null)) {
        ExSvr.add_err('D69', ['Mandatory', 'SeqE']);
        return;
      }
      if (!ExSvr.exist(['SeqE', 'F72'], null)) {
        ExSvr.add_err('D69', ['Mandatory', 'SeqE', 'F72']);
      }
    }

  }
};

Ex.mfvr.rule170 = function (mt) {
  if ('300' == mt) {
    var v22A = ExSvr.get_val(['SeqA', 'F22A'], null);
    if ('AMND' == v22A || 'CANC' == v22A) {
      var bf21 = ExSvr.exist(['SeqA', 'F21']);
      if (!bf21) {
        ExSvr.add_err('D70', ['Mandatory', 'SeqA', 'F21']);
      }
    }
  }
  // When field 23E is used more than once, the following combination is not allowed
  if (Ex.in_list(mt, ['320', '330', '620'])) {
    var v22B = ExSvr.get_val(['SeqA', 'F22B'], null);
    var v22A = ExSvr.get_val(['SeqA', 'F22A'], null);
    if (('CONF' == v22B && 'NEWT' != v22A) || ('CONF' != v22B)) {
      if (!ExSvr.exist(['SeqA', 'F21'])) {
        ExSvr.add_err('D70', ['Mandatory', 'SeqA', 'F21']);
      }
    }
  }
};

Ex.mfvr.rule171 = function (mt) {
  if ('502' == mt || '514' == mt || '518' == mt || '513' == mt || '513' == mt) {
    var seqNames = [];
    var loopNames = [];
    if ('502' == mt || '514' == mt) {
      seqNames = ['SeqC', 'SeqD'];
      loopNames = ['Loop23', 'Loop30'];
    } else if ('518' == mt) {
      seqNames = ['SeqC', 'SeqD'];
      loopNames = ['Loop21', 'Loop28'];
    } else if ('513' == mt) {
      seqNames = ['SeqD', 'SeqE'];
      loopNames = ['Loop23', 'Loop30'];
    } else if ('515' == mt) {
      seqNames = ['SeqD', 'SeqE'];
      loopNames = ['Loop24', 'Loop31'];
    }

    if (!ExSvr.exist(seqNames[0], null))
      return;
    var specified_f22f_found = false;
    var loop = ExSvr.getflds([seqNames[0], loopNames[0]], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      if (ExSvr.exist(['F22F', 'DataSourceScheme'], loop[i])) {
        //if the Data Source Schema is present in field :22F::DBNM//VEND then the conditional rule does not apply
        continue;
      }
      var qualifier = ExSvr.get_val(['F22F', 'Qualifier'], loop[i]);
      var indicator = ExSvr.get_val(['F22F', 'Indicator'], loop[i]);
      if ('DBNM' == qualifier && 'VEND' == indicator) {
        specified_f22f_found = true;
        break;
      }
    }
    if (!specified_f22f_found) {
      return;
    }
    if (!ExSvr.exist([seqNames[1]], null)) {
      ExSvr.add_err('D71', ['Mandatory', seqNames[1]]);
      return;
    }
    var counter = 0;
    var loop = ExSvr.getflds([seqNames[1], loopNames[1]], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      if ('VEND' == ExSvr.get_val(['Choice_95PQRS', 'F95P', 'Qualifier'], loop[i]))
        counter++;
      if ('VEND' == ExSvr.get_val(['Choice_95PQRS', 'F95Q', 'Qualifier'], loop[i]))
        counter++;
      if ('VEND' == ExSvr.get_val(['Choice_95PQRS', 'F95R', 'Qualifier'], loop[i]))
        counter++;
    }
    if (counter == 0) {
      ExSvr.add_err('D71', ['Mandatory', seqNames[1], loopNames[1], ':95a::VEND']);
    }

  } else if (Ex.in_list(mt, ['540', '541', '542', '543'])) {
    var specified_f22f_found = false;
    var loop = ExSvr.getflds(['SeqE', 'Loop25'], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      if (ExSvr.exist(['F22F', 'DataSourceScheme'], loop[i])) {
        //if the Data Source Schema is present in field :22F::DBNM//VEND then the conditional rule does not apply
        continue;
      }
      var qualifier = ExSvr.get_val(['F22F', 'Qualifier'], loop[i]);
      var indicator = ExSvr.get_val(['F22F', 'Indicator'], loop[i]);
      if ('DBNM' == qualifier && 'VEND' == indicator) {
        specified_f22f_found = true;
        break;
      }
    }
    if (!specified_f22f_found)
      return;
    if (!ExSvr.exist(['SeqF'], null)) {
      ExSvr.add_err('D71', ['Mandatory', 'SeqF']);
      return;
    }
    var counter = 0;
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      if ('VEND' == ExSvr.get_val(['Choice_95PQRS', 'F95P', 'Qualifier'], loop[i]))
        counter++;
      if ('VEND' == ExSvr.get_val(['Choice_95PQRS', 'F95Q', 'Qualifier'], loop[i]))
        counter++;
      if ('VEND' == ExSvr.get_val(['Choice_95PQRS', 'F95R', 'Qualifier'], loop[i]))
        counter++;
    }
    if (counter == 0) {
      ExSvr.add_err('D71', ['Mandatory', 'SeqF', 'Loop33', ':95a::VEND']);
    }
  }
};

Ex.mfvr.rule172 = function (mt) {
  if ('320' == mt || '620' == mt || '330' == mt || '350' == mt) {
    var v94A = ExSvr.get_val(['SeqA', 'F94A'], null);
    if ('AGNT' == v94A) {
      if (!ExSvr.exist(['SeqA', 'F21N'])) {
        ExSvr.add_err('D72', ['Mandatory', 'SeqA', 'F21N']);
      }
    }
  }
};

Ex.mfvr.rule173 = function (mt) {
  if ('104' != mt && '107' != mt) {
    return;
  }
  var f26t_exist = ExSvr.exist(['SeqA', 'F26T'], null);
  var f77b_exist = ExSvr.exist(['SeqA', 'F77B'], null);
  var f71a_exist = ExSvr.exist(['SeqA', 'F71A'], null);
  var f52a_exist = ExSvr.exist(['SeqA', 'Choice_52ACD'], null);
  var f21e_exist = ExSvr.exist(['SeqA', 'F21E'], null);
  var f50a_exist = ExSvr.exist(['SeqA', 'Choice_50CL'], null);
  var loop = ExSvr.getflds(['SeqB'], null);
  for (var i in loop) {
    var seqb = loop[i];
    if (!Ex.isNode(seqb))
      continue;
    if (f26t_exist && ExSvr.exist(['F26T'], seqb))
      ExSvr.add_err('D73', ['Not Allowed', 'SeqB', 'F26T']);
    if (f77b_exist && ExSvr.exist(['F77B'], seqb))
      ExSvr.add_err('D73', ['Not Allowed', 'SeqB', 'F77B']);
    if (f71a_exist && ExSvr.exist(['F71A'], seqb))
      ExSvr.add_err('D73', ['Not Allowed', 'SeqB', 'F71A']);
    if (f52a_exist && ExSvr.exist(['Choice_52ACD'], seqb))
      ExSvr.add_err('D73', ['Not Allowed', 'SeqB', 'Choice_52ACD']);
    if (f21e_exist && ExSvr.exist(['F21E'], seqb))
      ExSvr.add_err('D73', ['Not Allowed', 'SeqB', 'F21E']);
    if (f50a_exist && ExSvr.exist(['Choice_50CL'], seqb))
      ExSvr.add_err('D73', ['Not Allowed', 'SeqB', 'Choice_50CL']);
  }
};

Ex.mfvr.rule174 = function (mt) {
  if ('300' == mt) {
    var v94A = ExSvr.get_val(['SeqA', 'F94A'], null);
    var seqc_exist = ExSvr.exist(['SeqC'], null);
    if (!v94A || 'AGNT' == v94A || 'BILA' == v94A) {
      if (seqc_exist && ExSvr.exist(['SeqC', 'F71F'], null))
        ExSvr.add_err('D74', ['Not Allowed', 'SeqC', 'F71F'])
    } else if ('BROK' == v94A) {
      if (!seqc_exist) {
        ExSvr.add_err('D74', ['Mandatory', 'SeqC'])
        return;
      }
      if (!ExSvr.exist(['SeqC', 'Choice_88ADJ'], null)) {
        ExSvr.add_err('D74', ['Mandatory', 'SeqC', 'F88a']);
      }
    }

  } else if ('306' == mt) {
    if (this.ver < '2015') {
      var v94A = ExSvr.get_val(['SeqA', 'F94A'], null);
      var seqi_exist = ExSvr.exist(['SeqI'], null);
      if (!v94A || 'BROK' != v94A) {
        if (seqi_exist && ExSvr.exist(['SeqI', 'F71F'], null)) {
          ExSvr.add_err('D74', ['Not Allowed', 'SeqI', 'F71F'])
        }
      } else if ('BROK' == v94A) {
        if (!seqi_exist) {
          ExSvr.add_err('D74', ['Mandatory', 'SeqI'])
          return;
        }
        if (!ExSvr.exist(['SeqI', 'Choice_88AD'], null)) {
          ExSvr.add_err('D74', ['Mandatory', 'SeqI', 'F88a']);
        }
      }
    } else {
      var v94A = ExSvr.get_val(['SeqA', 'F94A'], null);
      var seqi_exist = ExSvr.exist(['SeqK'], null);
      if (!v94A || 'BROK' != v94A) {
        if (seqi_exist && ExSvr.exist(['SeqK', 'F71F'], null)) {
          ExSvr.add_err('D74', ['Not Allowed', 'SeqK', 'F71F'])
        }
      } else if ('BROK' == v94A) {
        if (!seqi_exist) {
          ExSvr.add_err('D74', ['Mandatory', 'SeqK'])
          return;
        }
        if (!ExSvr.exist(['SeqK', 'Choice_88AD'], null)) {
          ExSvr.add_err('D74', ['Mandatory', 'SeqK', 'F88a']);
        }
      }
    }
  } else if ('320' == mt || '620' == mt) {
    var v94A = ExSvr.get_val(['SeqA', 'F94A'], null);
    var seqh_exist = ExSvr.exist(['SeqH'], null);
    if (!v94A || 'AGNT' == v94A || 'BILA' == v94A) {
      if (seqh_exist && ExSvr.exist(['SeqH', 'F71F'], null))
        ExSvr.add_err('D74', ['Not Allowed', 'SeqH', 'F71F'])
    } else if ('BROK' == v94A) {
      if (!seqh_exist) {
        ExSvr.add_err('D74', ['Mandatory', 'SeqH'])
        return;
      }
      if (!ExSvr.exist(['SeqH', 'Choice_88ADJ'], null)) {
        ExSvr.add_err('D74', ['Mandatory', 'SeqH', 'F88a']);
      }
    }

  } else if ('340' == mt) {
    var v94A = ExSvr.get_val(['SeqA', 'F94A'], null);
    var seqe_exist = ExSvr.exist(['SeqE'], null);
    if (!v94A || 'BROK' != v94A) {
      if (seqe_exist && ExSvr.exist(['SeqE', 'F71F'], null))
        ExSvr.add_err('D74', ['Not Allowed', 'SeqE', 'F71F'])
    } else if ('BROK' == v94A) {
      if (!seqe_exist) {
        ExSvr.add_err('D74', ['Mandatory', 'SeqE'])
        return;
      }
      if (!ExSvr.exist(['SeqE', 'Choice_88AD'], null)) {
        ExSvr.add_err('D74', ['Mandatory', 'SeqE', 'F88a']);
      }
    }

  } else if ('360' == mt || '361' == mt) {
    var seqno = '360' == mt ? 'SeqN' : 'SeqO';
    var v94A = ExSvr.get_val(['SeqA', 'F94A'], null);
    var seqn_exist = ExSvr.exist([seqno], null);
    if (!v94A || 'AGNT' == v94A || 'BILA' == v94A) {
      if (seqn_exist && ExSvr.exist([seqno, 'F71F'], null))
        ExSvr.add_err('D74', ['Not Allowed', seqno, 'F71F'])
    } else if ('BROK' == v94A) {
      if (!seqn_exist) {
        ExSvr.add_err('D74', ['Mandatory', seqno])
        return;
      }
      if (!ExSvr.exist([seqno, 'Choice_88AD'], null)) {
        ExSvr.add_err('D74', ['Mandatory', seqno, 'F88a']);
      }
    }

  }
};

Ex.mfvr.rule175 = function (mt) {
  if (Ex.in_list(mt, ['103', '103.REMIT', '103.STP'])) {
    var bf36 = ExSvr.exist(['F36']);
    if (ExSvr.exist(['F33B'])) {
      var v33b = ExSvr.get_val(['F33B', 'Currency'], null);
      var v32a = ExSvr.get_val(['F32A', 'Currency'], null);
      if (Ex.equals(v33b, v32a)) {
        if (bf36) {
          ExSvr.add_err('D75', ['Not Allowed', 'F36']);
        }
      } else {
        if (!bf36) {
          ExSvr.add_err('D75', ['Mandatory', 'F36']);
        }
      }
    } else {
      if (bf36) {
        ExSvr.add_err('D75', ['Not Allowed', 'F36']);
      }
    }
  } else if ('104' == mt || '107' == mt) {
    var loop = ExSvr.getflds(['SeqB'], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i])) {
        continue;
      }
      var bf36 = ExSvr.exist(['F36'], loop[i]);
      if (ExSvr.exist(['F33B'], loop[i])) {
        var v33b = ExSvr.get_val(['F33B', 'Currency'], loop[i]);
        var v32b = ExSvr.get_val(['F32B', 'Currency'], loop[i]);
        if (Ex.equals(v33b, v32b)) {
          if (bf36)
            ExSvr.add_err('D75', ['Not Allowed', 'F36']);
        } else {
          if (!bf36)
            ExSvr.add_err('D75', ['Mandatory', 'F36']);
        }
      } else {
        if (bf36)
          ExSvr.add_err('D75', ['Not Allowed', 'F36']);
      }
    }
  }
};

Ex.mfvr.rule176 = function (mt) {
  if ('300' == mt) {
    var v17u = ExSvr.get_val(['SeqA', 'F17U'], null);
    var b = ExSvr.exist(['SeqD']);
    if ('Y' == v17u) {
      if (!b) {
        ExSvr.add_err('D76', ['Mandatory', 'SeqD']);
      }
    } else {
      if (b) {
        ExSvr.add_err('D76', ['Not Allowed', 'SeqD']);
      }
    }
  }
};

Ex.mfvr.rule177 = function (mt) {
  if ('104' != mt && '107' != mt) {
    return;
  }
  var bf21e_seqa = ExSvr.exist(['SeqA', 'F21E'], null);
  if (bf21e_seqa && !ExSvr.exist(['SeqA', 'Choice_50AK'], null)) {
    ExSvr.add_err('D77', ['Mandatory', 'SeqA', 'Choice_50AK']);
  }
  var loop = ExSvr.getflds(['SeqB'], null);
  for (var i in loop) {
    if (!Ex.isNode(loop[i]))
      continue;
    var b21e_seqb = ExSvr.exist(['F21E'], loop[i]);
    if (b21e_seqb && !ExSvr.exist(['Choice_50AK'], loop[i])) {
      ExSvr.add_err('D77', ['Mandatory', 'SeqB', 'Choice_50AK']);
    }
  }
};

Ex.mfvr.rule178 = function (mt) {
  if ('416' != mt)
    return;
  var bf23e_seqa = ExSvr.exist(['SeqA', 'F23E'], null);
  var f23e_seqb_found = false;
  var loop = ExSvr.getflds(['SeqB'], null);
  for (var i in loop) {
    if (!Ex.isNode(loop[i]))
      continue;
    var bf23e_seqb = ExSvr.exist(['F23E'], loop[i]);
    if (bf23e_seqb)
      f23e_seqb_found = true;
    if (bf23e_seqa && bf23e_seqb)
      ExSvr.add_err('D78', ['Not Allowed', 'SeqB', 'F23E']);
    else if (!bf23e_seqa && !bf23e_seqb)
      ExSvr.add_err('D78', ['Mandatory', 'SeqB', 'F23E']);
  }
  if (!bf23e_seqa && !f23e_seqb_found)
    ExSvr.add_err('D78', ['Mandatory in SeqA or each occurrence of SeqB', 'F23E']);
};

Ex.mfvr.rule179 = function (mt) {
  if ('102' == mt || '102.STP' == mt) {
    var loop = ExSvr.getflds(['SeqB'], null);
    var bf71G = false;
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      if (ExSvr.exist(['F71G'], loop[i])) {
        bf71G = true;
        break;
      }
    }
    if (bf71G && !ExSvr.exist(['SeqC', 'F71G'], null))
      ExSvr.add_err('D79', ['Mandatory', 'SeqC', 'F71G']);
  } else if ('104' == mt || '107' == mt) {
    var loop = ExSvr.getflds(['SeqB'], null);
    var bf71F = false;
    var bf71G = false;
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      if (!bf71F && ExSvr.exist(['F71F'], loop[i])) {
        bf71F = true;
      }
      if (!bf71G && ExSvr.exist(['F71G'], loop[i])) {
        bf71G = true;
      }
    }
    var bf71f_seqc = ExSvr.exist(['SeqC', 'F71F'], null);
    if (bf71F && !bf71f_seqc)
      ExSvr.add_err('D79', ['Mandatory', 'SeqC', 'F71F']);
    else if (!bf71F && bf71f_seqc)
      ExSvr.add_err('D79', ['Not Allowed', 'SeqC', 'F71F']);

    var b71g_seqc = ExSvr.exist(['SeqC', 'F71G'], null);
    if (bf71G && !b71g_seqc)
      ExSvr.add_err('D79', ['Mandatory', 'SeqC', 'F71G']);
    else if (!bf71G && b71g_seqc)
      ExSvr.add_err('D79', ['Not Allowed', 'SeqC', 'F71G']);

  }
};

Ex.mfvr.rule180 = function (mt) {
  if ('104' == mt || '107' == mt) {
    if (!ExSvr.exist(['SeqC'], null))
      return;
    var loop = ExSvr.getflds(['SeqB'], null);
    var total = 0;
    for (var i in loop) {
      if (!Ex.isNode(loop[i])) {
        continue;
      }
      var amount = ExSvr.get_val(['F32B', 'Amount'], loop[i]);
      if (amount)
        total += Ex.to_num(amount);
    }
    var amount_seqc = ExSvr.get_val(['SeqC', 'F32B', 'Amount'], null);
    var bf19 = ExSvr.exist(['SeqC', 'F19'], null);
    if (total == Ex.to_num(amount_seqc)) {
      if (bf19)
        ExSvr.add_err('D80', ['Not Allowed', 'SeqC', 'F19'])
    } else {
      if (!bf19)
        ExSvr.add_err('D80', ['Mandatory', 'SeqC', 'F19'])
    }
  } else if ('256' == mt) {
    var loop = ExSvr.getflds(['SeqB'], null);
    var total = 0;
    for (var i in loop) {
      if (!Ex.isNode(loop[i])) {
        continue;
      }
      var amount = ExSvr.get_val(['F32J'], loop[i]);
      if (amount)
        total += Ex.to_num(amount);
    }
    var amount_seqc = ExSvr.get_val(['SeqC', 'F32A', 'Amount'], null);
    var bf19 = ExSvr.exist(['SeqC', 'F19'], null);
    if (total == Ex.to_num(amount_seqc)) {
      if (bf19)
        ExSvr.add_err('D80', ['Not Allowed', 'SeqC', 'F19'])
    } else {
      if (!bf19)
        ExSvr.add_err('D80', ['Mandatory', 'SeqC', 'F19'])
    }
  }
};

Ex.mfvr.rule181 = function (mt) {
  if (Ex.in_list(mt, ['104', '107', '256'])) {
    var subf_names;
    if ('104' == mt || '107' == mt) {
      subf_names = ['Type', 'AdditionalInformation'];
    } else if ('256' == mt) {
      subf_names = ['Code', 'Narrative'];
    }
    var loop = ExSvr.getflds(['SeqB'], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      var subf1 = ExSvr.get_val(['F23E', subf_names[0]], loop[i]);
      if ('OTHR' != subf1 && ExSvr.exist(['F23E', subf_names[1]], loop[i]))
        ExSvr.add_err('D81', ['Not Allowed', 'SeqB', 'F23E', subf_names[1]]);
    }
  } else if ('416' == mt) {
    var vsubf1;
    vsubf1 = ExSvr.get_val(['SeqA', 'F23E', 'Type'], null);
    if ('OTHR' != vsubf1 && ExSvr.exist(['SeqA', 'F23E', 'Narrative'], null))
      ExSvr.add_err('D81', ['Not Allowed', 'SeqA', 'F23E', 'Narrative']);

    var loop = ExSvr.getflds(['SeqB'], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      vsubf1 = ExSvr.get_val(['F23E', 'Type'], loop[i]);
      if ('OTHR' != vsubf1 && ExSvr.exist(['F23E', 'Narrative'], loop[i]))
        ExSvr.add_err('D81', ['Not Allowed', 'SeqB', 'F23E', 'Narrative']);
    }
  } else if ('306' == mt) {
    var subf1 = ExSvr.get_val(['SeqA', 'F22K', 'TypeOfEvent'], null);
    if ('OTHR' == subf1) {
      if (!ExSvr.exist(['SeqA', 'F22K', 'Narrative'], null))
        ExSvr.add_err('D81', ['Mandatory', 'SeqA', 'F22K', 'Narrative']);
    } else {
      if (ExSvr.exist(['SeqA', 'F22K', 'Narrative'], null))
        ExSvr.add_err('D81', ['Not Allowed', 'SeqA', 'F22K', 'Narrative']);
    }
  } else if (Ex.in_list(mt, ['700', '710', '720','707'])) {
    var subf1 = ExSvr.get_val(['F40E', 'ApplicableRules'], null);
    if ('OTHR' != subf1) {
      if (ExSvr.exist(['F40E', 'Narrative'], null))
        ExSvr.add_err('D81', ['Not Allowed', 'F40E', 'Narrative']);
    }
  } else if ('760' == mt) {
     var subf1 = ExSvr.get_val('F40C/Type', null);
     var subf2;
     if ('OTHR' != subf1) {
      if (ExSvr.exist('F40C/Narrative', null))
        ExSvr.add_err('D81', ['Not Allowed', 'F40C', 'Narrative', subf1 ]);
     }
     subf1 = ExSvr.get_val('SeqC/F40C/Type', null);
      if ('OTHR' != subf1) {
       if (ExSvr.exist('SeqC/F40C/Narrative', null))
         ExSvr.add_err('D81', ['Not Allowed', 'SeqC', 'F40C', 'Narrative', subf1 ]);
      }
     subf1 = ExSvr.get_val('F23F/Code', null);
     subf2 = ExSvr.exist('F23F/Period', null);
     // ExSvr.debug( '181: exist 23F ' + subf1 + '  ' +  subf2);
     if ('DAYS' == subf1) {
       var v23f =  ExSvr.get_val('F23F/Period', null);
        // ExSvr.debug( '181: error 0  23F ' + subf1 + '  ' +  v23f);
       if (/^[0-9]{3}$/.test(v23f)){}
       else {
        ExSvr.add_err('D81A', ['If Period is DAYS, then Details is mandatory and must consist of exactly 3 digits.', 'F23F', subf1 ]);
        // ExSvr.debug( '181: error  23F ' + subf1 + '  ' +  v23f);
       }
     }
     else if ('OTHR' == subf1 ) {
       if (!subf2) ExSvr.add_err('D81A', ['If Period is OTHR, then Details is mandatory.', 'F23F', subf1 ]);

     }
     else if ('ONEY' == subf1 ) {
        if (subf2)  ExSvr.add_err('D81A', ['If Period is ONEY, then Details is not allowed.', 'F23F', subf1 ]);
     }
          subf1 = ExSvr.get_val(['SeqC','F23F', 'Code'], null);
          subf2 = ExSvr.exist(['SeqC','F23F', 'Period'], null);
          if ('DAYS' == subf1) {
            var v23f =  ExSvr.get_val(['SeqC','F23F', 'Period'], null);
            if (/^[0-9]{3}$/.test(v23f)){}
            else {
             ExSvr.add_err('D81A', ['If Period is DAYS, then Details is mandatory and must consist of exactly 3 digits.', 'SeqC','F23F', subf1 ]);
            }
          }
          else if ('OTHR' == subf1 ) {
            if (!subf2) ExSvr.add_err('D81A', ['If Period is OTHR, then Details is mandatory.','SeqC', 'F23F', subf1 ]);

          }
          else if ('ONEY' == subf1 ) {
             if (subf2)  ExSvr.add_err('D81A', ['If Period is ONEY, then Details is not allowed.', 'SeqC','F23F', subf1 ]);
          }

  }
};

Ex.mfvr.rule182 = function (mt) {
  if (!Ex.in_list(mt, ['104', '107', '207']))
    return;
  var vf72 = ExSvr.get_val(['SeqA', 'F72'], null);
  if (!vf72)
    return;
  var first_line = '';
  //Note: vf72 is an object, not string
  for (var i = 0; i < vf72.length(); i++) {
    var c = vf72.charAt(i);
    // '\r' = 13, '\n' = 10
    if (c == 10 || c == 13) {
      first_line = vf72.substring(0, i);
      break;
    }
  }
  if (!first_line)
    first_line = vf72;
  if (first_line.indexOf('/RETN/') < 0 && first_line.indexOf('/REJT/') < 0) {
    ExSvr.add_err('D82', ['Invalid Line 1', 'SeqA', 'F72']);
  }
};

Ex.mfvr.rule183 = function (mt) {
  if ('416' != mt)
    return;
  var bf71f_seqa = ExSvr.exist(['SeqA', 'F71F'], null);
  var bf71a_seqa = ExSvr.exist(['SeqA', 'F71A'], null);
  var bf71f_seqb = false;
  var bf71a_seqb = false;
  var loop = ExSvr.getflds(['SeqB'], null);
  for (var i in loop) {
    if (!Ex.isNode(loop[i])) {
      continue;
    }
    if (!bf71f_seqb && ExSvr.exist(['F71F'], loop[i])) {
      bf71f_seqb = true;
    }
    if (!bf71a_seqb && ExSvr.exist(['F71A'], loop[i])) {
      bf71a_seqb = true;
    }
  }
  if (bf71f_seqa && bf71f_seqb)
    ExSvr.add_err('D83', ['Not Allowed', 'SeqB', '71F']);
  if (bf71a_seqa && bf71a_seqb)
    ExSvr.add_err('D83', ['Not Allowed', 'SeqB', '71A']);
};

Ex.mfvr.rule184 = function (mt) {
  if ('740' != mt)
    return;
  var b58a = ExSvr.exist(['Choice_58AD'], null);
  var b59 = ExSvr.exist(['F59'], null);
  if (b58a && b59)
    ExSvr.add_err('D84', ['Cannot be both present', '58a/59']);
};

Ex.mfvr.rule185 = function (mt) {
  if ('330' != mt)
    return;
  var b30x = ExSvr.exist(['SeqB', 'F30X'], null);
  var b34e = ExSvr.exist(['SeqB', 'F34E'], null);
  if (b30x && !b34e) {
    ExSvr.add_err('D85', ['Mandatory', 'SeqB', 'F34E']);
  } else if (!b30x && b34e) {
    ExSvr.add_err('D85', ['Not Allowed', 'SeqB', 'F34E']);
  }
};

Ex.mfvr.rule186 = function (mt) {
  if ('107' != mt)
    return;
  var b23e_seqa = ExSvr.exist(['SeqA', 'F23E'], null);
  var b50a_seqa = ExSvr.exist(['SeqA', 'Choice_50AK'], null);
  var loop = ExSvr.getflds(['SeqB'], null);
  for (var i in loop) {
    if (!Ex.isNode(loop[i])) {
      continue;
    }
    var b23e_seqb = ExSvr.exist(['F23E'], loop[i]);
    var b50a_seqb = ExSvr.exist(['Choice_50AK'], loop[i]);
    if (b23e_seqa && b23e_seqb) {
      ExSvr.add_err('D86', ['Not Allowed', 'SeqB', 'F23E']);
    } else if (!b23e_seqa && !b23e_seqb) {
      ExSvr.add_err('D86', ['Mandatory', 'SeqB', 'F23E']);
    }
    if (b50a_seqa && b50a_seqb) {
      ExSvr.add_err('D86', ['Not Allowed', 'SeqB', 'Choice_50AK']);
    } else if (!b50a_seqa && !b50a_seqb) {
      ExSvr.add_err('D86', ['Mandatory', 'SeqB', 'Choice_50AK']);
    }
  }
};

Ex.mfvr.rule187 = function (mt) {
  var f23h = ExSvr.get_val(['F23H'], null);
  var f22d = ExSvr.get_val(['F22D'], null);
  if (Ex.in_list(f23h, ['CLSVOPEN','CLSVCLOS','FRAUDMSG','GENINFAD','OTHERFNC','REIMBURS','REQFINAN'])) {
    // DGAR|DOCR|STBY|UNDK
  } else if (Ex.in_list(f23h, ['ISSAMEND','ISSUANCE', 'REQAMEND','REQISSUE'])) {
    if (f22d != 'UNDK'){
      ExSvr.add_err('D87', ['Invalid', 'F22D', f22d]);
    }
  } else if (Ex.in_list(f23h, ['TRANSFER'])) {
    if (!Ex.in_list(f22d, ['DGAR','STBY','UNDK']) ){
      ExSvr.add_err('D87', ['Invalid', 'F22D', f22d]);
    }
  }
};

Ex.mfvr.rule188 = function (mt) {
};

Ex.mfvr.rule189 = function (mt) {
};

Ex.mfvr.rule190 = function (mt) {
};

Ex.mfvr.rule191 = function (mt) {
};

Ex.mfvr.rule192 = function (mt) {
  if ('321' == mt) {
    if (!ExSvr.exist(['SeqB', 'SeqB3'], null))
      return;
    var found = false;
    var loop = ExSvr.getflds(['SeqB', 'SeqB3', 'Loop7'], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      if (ExSvr.exist(['Choice_95PQR'], loop[i])) {
        found = true;
        break;
      }
    }
    if (!found) {
      ExSvr.add_err('D92', ['Must occur once.', 'SeqB', 'SeqB3', '59a']);
    }
  }

  if (Ex.in_list(mt, ['527', '558'])) {
    if (this.ver < '1205') {
      return;
    }
    var f98a;
    var loop2 = ExSvr.getflds(['SeqA', 'Loop2'], null);
    for (var nd in loop2) {
      if (!Ex.isNode(loop2[nd]))
        continue;
      f98a = ExSvr.get_val(['Choice_98ACE', '*', 'Qualifier'], loop2[nd]);
    }
    if (!f98a) {
      ExSvr.add_err('D92', ['Mandatory', 'SeqA', '98a', 'Qualifier']);
    }
  }

  if ('530' == mt) {
    var found = false;
    var loop = ExSvr.getflds(['SeqB'], null);
    for (var i in loop) {
      if (found)
        break;
      if (!Ex.isNode(loop[i]))
        continue;
      if (ExSvr.exist(['Loop1'], loop[i])) {
        var loop1 = ExSvr.getflds(['Loop1'], loop[i]);
        for (var nd in loop1) {
          if (!Ex.isNode(loop1[nd]))
            continue;
          if (ExSvr.exist(['F20C'], loop1[nd])) {
            found = true;
            break;
          }
        }
      }
      if (found)
        break;
      if (ExSvr.exist(['SeqB1'], loop[i])) {
        var loop2 = ExSvr.getflds(['SeqB1'], loop[i]);
        for (var nd in loop2) {
          if (!Ex.isNode(loop2[nd]))
            continue;
          if (ExSvr.exist(['F20C'], loop2[nd])) {
            found = true;
            break;
          }
        }
      }
    }
    if (!found)
      ExSvr.add_err('D92', ['Must occur once.', 'SeqB', 'F20C']);
  }

  if ('568' == mt) {
    var found = false;
    var loop = ExSvr.getflds(['SeqC', 'Loop6'], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i])) {
        continue;
      }
      if (ExSvr.exist(['Choice_70EF'], loop[i])) {
        found = true;
        break;
      }
    }
    if (!found)
      ExSvr.add_err('D92', ['Must occur once.', 'SeqC', '70a']);
  }
};

Ex.mfvr.rule193 = function (mt) {
  if ('102' == mt) {
    var f23 = ExSvr.get_val(['SeqA', 'F23'], null);
    var loop = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop) {
      if (!Ex.isNode(loop[nd]))
        continue;
      var choice_59a_acct = ExSvr.get_val(['Choice_59A', '*', 'Account'], loop[nd]);
      if ('CHQB' == f23) {
        if (choice_59a_acct != null) {
          ExSvr.add_err('D93', ['Not Allowed', 'SeqB', 'Choice_59A', '59a', 'Account']);
        }
      } else {
        if (choice_59a_acct == null) {
          ExSvr.add_err('D93', ['Mandatory', 'SeqB', 'Choice_59A', '59a', 'Account']);
        }
      }
    }
  }

  if ('530' == mt) {
    var found = false;
    var loop = ExSvr.getflds(['SeqB'], null);
    for (var i in loop) {
      if (found)
        break;
      if (!Ex.isNode(loop[i]))
        continue;
      if (ExSvr.exist(['Loop2'], loop[i])) {
        var loop2 = ExSvr.getflds(['Loop2'], loop[i]);
        for (var nd in loop2) {
          if (!Ex.isNode(loop2[nd]))
            continue;
          if (ExSvr.exist(['F22F'], loop2[nd])) {
            found = true;
            break;
          }
        }
      }
      if (found)
        break;
      if (ExSvr.exist(['SeqB1'], loop[i])) {
        var loop2 = ExSvr.getflds(['SeqB1'], loop[i]);
        for (var nd in loop2) {
          if (!Ex.isNode(loop2[nd]))
            continue;
          if (ExSvr.exist(['F22F'], loop2[nd])) {
            found = true;
            break;
          }
        }
      }
    }
    if (!found)
      ExSvr.add_err('D93', ['Mandatory', 'SeqB', 'F22F']);
  }
};

Ex.mfvr.rule194 = function (mt) {
};

Ex.mfvr.rule195 = function (mt) {
};

Ex.mfvr.rule196 = function (mt) {
  if (mt == '300') {
    if (!ExSvr.exist(['SeqD'])) {
      return;
    }
    var loop_count = 0;
    var loop = ExSvr.getflds(['SeqD', 'Loop1'], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      loop_count++;
    }
    var v16a = ExSvr.get_val(['SeqD', 'F16A'], null);
    if (loop_count != Ex.to_num(v16a)) {
      ExSvr.add_err('D96', ['Must be equal to the number of internal repetitions in SeqD', 'SeqD', '16A']);
    }
  } else if (Ex.in_list(mt, ['306', '320', '360', '361', '362'])) {
    // Field 18A must be equal to the number of repetitions that immediately follows.
    var tagArray;
    if ('306' == mt) {
      if (this.ver < '2015') {
        tagArray = [
          ['SeqJ', 'SeqJ,Loop2', 'SeqJ,F18A']
        ];
      } else {
        tagArray = [
          ['SeqL', 'SeqL,Loop4', 'SeqL,F18A']
        ];
      }
    } else if ('320' == mt) {
      tagArray = [
        ['SeqI', 'SeqI,Loop1', 'SeqI,F18A']
      ];
    } else if ('340' == mt) {
      tagArray = [
        ['SeqB,SeqB2', 'SeqB,SeqB2,Loop1', 'SeqB,SeqB2,F18A'],
        ['SeqF', 'SeqF,Loop2', 'SeqF,F18A']
      ];
    } else if ('360' == mt) {
      tagArray = [
        ['SeqB,SeqB1', 'SeqB,SeqB1,Loop1', 'SeqB,SeqB1,F18A'],
        ['SeqB,SeqB1', 'SeqB,SeqB1,Loop2', 'SeqB,SeqB1,F18A_32'],
        ['SeqC,SeqC1', 'SeqC,SeqC1,Loop3', 'SeqC,SeqC1,F18A'],
        ['SeqC,SeqC1', 'SeqC,SeqC1,Loop4', 'SeqC,SeqC1,F18A_47'],
        ['SeqC,SeqC2', 'SeqC,SeqC2,Loop5', 'SeqC,SeqC2,F18A'],
        ['SeqE,SeqE1', 'SeqE,SeqE1,Loop6', 'SeqE,SeqE1,F18A'],
        ['SeqE,SeqE1', 'SeqE,SeqE1,Loop7', 'SeqE,SeqE1,F18A_69'],
        ['SeqF,SeqF1', 'SeqF,SeqF1,Loop8', 'SeqF,SeqF1,F18A'],
        ['SeqF,SeqF1', 'SeqF,SeqF1,Loop9', 'SeqF,SeqF1,F18A_84'],
        ['SeqF,SeqF2', 'SeqF,SeqF2,Loop10', 'SeqF,SeqF2,F18A'],
        ['SeqH', 'SeqH,Loop11', 'SeqH,F18A'],
        ['SeqH', 'SeqH,Loop12', 'SeqH,F18A_102'],
        ['SeqL', 'SeqL,Loop13', 'SeqL,F18A'],
        ['SeqL', 'SeqL,Loop14', 'SeqL,F18A_110'],
        ['SeqM', 'SeqM,Loop15', 'SeqM,F18A'],
        ['SeqM', 'SeqM,Loop16', 'SeqM,F18A_122']
      ];
    } else if ('361' == mt) {
      tagArray = [
        ['SeqB,SeqB1', 'SeqB,SeqB1,Loop1', 'SeqB,SeqB1,F18A_1'],
        ['SeqB,SeqB1', 'SeqB,SeqB1,Loop2', 'SeqB,SeqB1,F18A_2'],
        ['SeqC,SeqC1', 'SeqC,SeqC1,Loop3', 'SeqC,SeqC1,F18A_3'],
        ['SeqC,SeqC1', 'SeqC,SeqC1,Loop4', 'SeqC,SeqC1,F18A_4'],
        ['SeqC,SeqC2', 'SeqC,SeqC2,Loop5', 'SeqC,SeqC2,F18A_5'],
        ['SeqE,SeqE1', 'SeqE,SeqE1,Loop6', 'SeqE,SeqE1,F18A_6'],
        ['SeqE,SeqE1', 'SeqE,SeqE1,Loop7', 'SeqE,SeqE1,F18A_7'],
        ['SeqF,SeqF1', 'SeqF,SeqF1,Loop8', 'SeqF,SeqF1,F18A_8'],
        ['SeqF,SeqF1', 'SeqF,SeqF1,Loop9', 'SeqF,SeqF1,F18A_9'],
        ['SeqF,SeqF2', 'SeqF,SeqF2,Loop10', 'SeqF,SeqF2,F18A_10'],
        ['SeqI', 'SeqI,Loop11', 'SeqI,F18A_11'],
        ['SeqI', 'SeqI,Loop12', 'SeqI,F18A_12'],
        ['SeqJ', 'SeqJ,Loop13', 'SeqJ,F18A_13'],
        ['SeqJ', 'SeqJ,Loop14', 'SeqJ,F18A_14'],
        ['SeqK', 'SeqK,Loop15', 'SeqK,F18A_15'],
        ['SeqK', 'SeqK,Loop16', 'SeqK,F18A_16'],
        ['SeqL', 'SeqL,Loop17', 'SeqL,F18A_17'],
        ['SeqL', 'SeqL,Loop18', 'SeqL,F18A_18'],
        ['SeqM', 'SeqM,Loop19', 'SeqM,F18A_19'],
        ['SeqM', 'SeqM,Loop20', 'SeqM,F18A_20'],
        ['SeqN', 'SeqN,Loop21', 'SeqN,F18A'],
        ['SeqN', 'SeqN,Loop22', 'SeqN,F18A_22']
      ];
    } else if ('362' == mt) {
      tagArray = [
        ['SeqC', 'SeqC,Loop1', 'SeqC,F18A'],
        ['SeqE', 'SeqE,Loop2', 'SeqE,F18A']
      ];
    }
    for (var idx = 0; idx < tagArray.length; idx++) {
      var tags = tagArray[idx];
      if (!ExSvr.exist(tags[0].split(","), null)) {
        continue;
      }
      var loop_count = 0;
      var loop = ExSvr.getflds(tags[1].split(","), null);
      for (var i in loop) {
        if (!Ex.isNode(loop[i]))
          continue;
        loop_count++;
      }
      var f18a_path = tags[2].split(",");
      var v18a = ExSvr.get_val(f18a_path, null);
      if (loop_count != Ex.to_num(v18a)) {
        var errMsg = new Array();
        errMsg[0] = 'Must be equal to the number of repetitions';
        for (var i = 0; i < f18a_path.length; i++) {
          errMsg.push(f18a_path[i]);
        }
        ExSvr.add_err('D96', errMsg);
      }
    }

  }
};

Ex.mfvr.rule197 = function (mt) {
  if ('760' == mt || '767' == mt){
    var f1 = ExSvr.get_val('F24E/Code', null);
    var f2 = ExSvr.exist('F24E/AdditionalInformation', null);
    if (f2 && 'COUR' != f1 && 'OTHR' != f1) {
        ExSvr.add_err('D97', ['Not Allowed', 'F24E', 'AdditionalInformation']);
    }
    f1 = ExSvr.get_val('SeqC/F24E/Code', null);
    f2 = ExSvr.exist('SeqC/F24E/AdditionalInformation', null);
    if (f2 && 'COUR' != f1 && 'OTHR' != f1) {
        ExSvr.add_err('D97', ['Not Allowed', 'F24E', 'AdditionalInformation']);
    }
    f1 = ExSvr.get_val('SeqC/F24G/Code', null);
    f2 = ExSvr.exist('SeqC/F24G/NameAndAddress', null);
    if (!f2 && 'OTHR' == f1) {
        ExSvr.add_err('D97', ['Mandatory', 'SeqC', 'F24G', 'NameAndAddress']);
    }
    f1 = ExSvr.get_val('F24G/Code', null);
    f2 = ExSvr.exist('F24G/NameAndAddress', null);
    // ExSvr.debug(' 197:  ' + mt + '  ' + f1 + '  ' + f2);
    if (!f2 && 'OTHR' == f1) {
        ExSvr.add_err('D97', ['Mandatory', 'F24G', 'NameAndAddress']);
    }
  }
  if (!Ex.in_list(mt, ['103', '103.STP'])) {
    return;
  }
  var lst = (mt == '103') ? ['PHON', 'PHOB', 'PHOI', 'TELE', 'TELB', 'TELI', 'HOLD', 'REPA'] : ['REPA'];
  var loop2 = ExSvr.getflds(['Loop2'], null);
  for (var nd in loop2) {
    if (!Ex.isNode(loop2[nd]))
      continue;
    var f23e_subfield1 = ExSvr.get_val(['F23E', 'InstructionCode'], loop2[nd]);
    var f23e_subfield2 = ExSvr.get_val(['F23E', 'AdditionalInformation'], loop2[nd]);
    if (!Ex.isEmpty(f23e_subfield2) && !Ex.in_list(f23e_subfield1, lst)) {
      ExSvr.add_err('D97', ['AdditionalInformation is Not Allowed', 'Loop2', 'F23E', 'AdditionalInformation']);
    }
  }
};

Ex.mfvr.rule198 = function (mt) {
  if (Ex.in_list(mt, ['103', '103.STP'])) {
    var order;
    if ('103' == mt) {
      order = ['SDVA', 'INTC', 'REPA', 'CORT', 'HOLD', 'CHQB', 'PHOB', 'TELB', 'PHON', 'TELE', 'PHOI', 'TELI'];
    } else {
      order = ['SDVA', 'INTC', 'REPA', 'CORT'];
    }
    var actureOrder = new Array();
    var loop = ExSvr.getflds(['Loop2'], null);
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      var code = ExSvr.get_val(['F23E', 'InstructionCode'], loop[i]);
      for (var j in order) {
        if (order[j] == code) {
          actureOrder.push(j);
          break;
        }
      }
    }
    if (actureOrder.length < 2)
      return;
    for (var i = 0; i < actureOrder.length; i++) {
      for (var j = i + 1; j < actureOrder.length; j++) {
        if (Ex.to_num(actureOrder[i]) > Ex.to_num(actureOrder[j])) {
          ExSvr.add_err('D98', ['Invalid Order', 'Loop2', 'F23E', 'InstructionCode']);
          return;
        }
      }
    }

  } else if ('101' == mt) {
    if (!ExSvr.exist(['SeqA', 'F21R'], null))
      return;
    var loop = ExSvr.getflds(['SeqB'], null);
    var last_ccy = '';
    for (var i in loop) {
      if (!Ex.isNode(loop[i]))
        continue;
      var ccy = ExSvr.get_val(['F32B', 'Currency'], loop[i]);
      if ('' == last_ccy) {
        last_ccy = ccy;
        continue;
      }
      if (!Ex.equals(ccy, last_ccy)) {
        ExSvr.add_err('D98', ['The currency code in fields 32B must be the same in each occurrence of sequence B', 'SeqB', 'F32B', 'Currency']);
        return;
      }
    }
  }
};

Ex.mfvr.rule199 = function (mt) {
  if ('564' == mt) {
    if (!ExSvr.exist(['SeqD'], null))
      return;
    var loop20 = ExSvr.getflds(['SeqD', 'Loop20'], null);
    var f70e_name_found = false;
    for (var i in loop20) {
      if (!Ex.isNode(loop20[i]))
        continue;
      var qualifier = ExSvr.get_val(['Choice_70EG', 'F70E', 'Qualifier'], loop20[i]);
      if ('NAME' == qualifier) {
        f70e_name_found = true;
        break;
      }
    }
    if (!f70e_name_found)
      return;

    var sepcified_f22f_a_fnd = false;
    var loop2 = ExSvr.getflds(['SeqD', 'Loop2'], null);
    for (var i in loop2) {
      if (!Ex.isNode(loop2[i]))
        continue;
      var qualifier = ExSvr.get_val(['F22F', 'Qualifier'], loop2[i]);
      var dss = ExSvr.get_val(['F22F', 'DataSourceScheme'], loop2[i]);
      var indicator = ExSvr.get_val(['F22F', 'Indicator'], loop2[i]);
      if ('CAEV' == qualifier && dss == null && 'CHAN' == indicator) {
        sepcified_f22f_a_fnd = true;
        break;
      }
    }
    if (!sepcified_f22f_a_fnd)
      ExSvr.add_err('D99', ['Mandatory', 'SeqA', ':22F::CAEV//CHAN']);

    var sepcified_f22f_d_fnd = false;
    var loop18 = ExSvr.getflds(['SeqD', 'Loop18'], null);
    for (var i in loop18) {
      if (!Ex.isNode(loop18[i]))
        continue;
      var qualifier = ExSvr.get_val(['F22F', 'Qualifier'], loop18[i]);
      var dss = ExSvr.get_val(['F22F', 'DataSourceScheme'], loop18[i]);
      var indicator = ExSvr.get_val(['F22F', 'Indicator'], loop18[i]);
      if ('CHAN' == qualifier && dss == null && 'NAME' == indicator) {
        sepcified_f22f_d_fnd = true;
        break;
      }
    }
    if (!sepcified_f22f_d_fnd)
      ExSvr.add_err('D99', ['Mandatory', 'SeqD', ':22F::CHAN//NAME']);
  }

  if ('566' == mt) {
    if (!ExSvr.exist(['SeqC'], null))
      return;
    var loop14 = ExSvr.getflds(['SeqC', 'Loop14'], null);
    var f70e_name_found = false;
    for (var i in loop14) {
      if (!Ex.isNode(loop14[i]))
        continue;
      var qualifier = ExSvr.get_val(['F70E', 'Qualifier'], loop14[i]);
      if ('NAME' == qualifier) {
        f70e_name_found = true;
        break;
      }
    }
    if (!f70e_name_found)
      return;

    var sepcified_f22f_a_fnd = false;
    var qualifier = ExSvr.get_val(['SeqA', 'F22F', 'Qualifier'], null);
    var dss = ExSvr.get_val(['SeqA', 'F22F', 'DataSourceScheme'], null);
    var indicator = ExSvr.get_val(['SeqA', 'F22F', 'Indicator'], null);
    if ('CAEV' == qualifier && dss == null && 'CHAN' == indicator) {
      sepcified_f22f_a_fnd = true;
    }
    if (!sepcified_f22f_a_fnd)
      ExSvr.add_err('D99', ['Mandatory', 'SeqA', ':22F::CAEV//CHAN']);

    var sepcified_f22f_c_fnd = false;
    var loop13 = ExSvr.getflds(['SeqC', 'Loop13'], null);
    for (var i in loop13) {
      if (!Ex.isNode(loop13[i]))
        continue;
      var qualifier = ExSvr.get_val(['F22F', 'Qualifier'], loop13[i]);
      var dss = ExSvr.get_val(['F22F', 'DataSourceScheme'], loop13[i]);
      var indicator = ExSvr.get_val(['F22F', 'Indicator'], loop13[i]);
      if ('CHAN' == qualifier && dss == null && 'NAME' == indicator) {
        sepcified_f22f_c_fnd = true;
        break;
      }
    }
    if (!sepcified_f22f_c_fnd)
      ExSvr.add_err('D99', ['Mandatory', 'SeqC', ':22F::CHAN//NAME']);
  }

};