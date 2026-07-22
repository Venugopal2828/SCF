Ex.mfvr.rule000 = function (mt) {
  ExSvr.debug('rule 000 ');
  var total_32b = 0;
  var amt_19 = 1;
  var amt_32b = new Number('3');
  ExSvr.debug('rule 32b ' + (typeof amt_32b) + ', t ' + (typeof total_32b) + ', 19 ' + (typeof amt_19));
};
Ex.mfvr.rule999 = function (mt) {
  ExSvr.debug('TBD ' + mt + ', ' + this.ver);
}
Ex.mfvr.rule001 = function (mt) {
  if (Ex.in_list(mt, ['102', '102.STP', '104', '107'])) {
    if (ExSvr.exist(['SeqC', 'F19'])) {
      var amt_19 = Ex.to_num(ExSvr.get_val(['SeqC', 'F19'], null));
      var loop1 = ExSvr.getflds(['SeqB'], null);
      var total_32b = 0;
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd]))
          continue;
        var amt_32b = Ex.to_num(ExSvr.get_val(['F32B', 'Amount'], loop1[nd]));
        total_32b += amt_32b;
      }
      if (!Ex.equalsNum(amt_19, total_32b)) {
        ExSvr.add_err('C01', ['Not equal.', 'F19', total_32b]);
      }
    }
  } else if (Ex.in_list(mt, ['201', '203', '204', '559'])) {
    var f19_path = ('204' == mt) ? ['SeqA', 'F19'] : ['F19'];
    var parent_tag = ('204' == mt) ? 'SeqB' : 'Loop1';
    var amt_19 = Ex.to_num(ExSvr.get_val(f19_path, null));
    var loop1 = ExSvr.getflds([parent_tag], null);
    var total_32b = 0;
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd]))
        continue;
      var amt_32b = Ex.to_num(ExSvr.get_val(['F32B', 'Amount'], loop1[nd]));
      total_32b += amt_32b;
      var amt_34a = Ex.to_num(ExSvr.get_val(['F34A', 'Amount'], loop1[nd]));
      total_32b += amt_34a;
    }
    if (!Ex.equalsNum(amt_19, total_32b)) {
      ExSvr.add_err('C01', ['Not equal.', 'F19', total_32b]);
    }
  } else if ('256' == mt) {
    if (ExSvr.exist(['SeqC', 'F19'])) {
      var amt_19 = Ex.to_num(ExSvr.get_val(['SeqC', 'F19'], null));
      var loop1 = ExSvr.getflds(['SeqB'], null);
      var total_32b = 0;
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd]))
          continue;
        var amt_32b = Ex.to_num(ExSvr.get_val(['F32J'], loop1[nd]));
        total_32b += amt_32b;
      }
      if (!Ex.equalsNum(amt_19, total_32b)) {
        ExSvr.add_err('C01', ['Not equal.', 'F19', amt_19, total_32b]);
      }
    }
  } else if ('824' == mt) {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var amt_19 = Ex.to_num(ExSvr.get_val(['F19'], loop1[nd]));
      var total_32b = 0;
      var loop2 = ExSvr.getflds(['Loop2'], loop1[nd]);
      for (var nd2 in loop2) {
        if (!Ex.isNode(loop2[nd2])) continue;
        var amt_32b = Ex.to_num(ExSvr.get_val(['F68A', 'Number'], loop2[nd2]));
        var amt_34a = Ex.to_num(ExSvr.get_val(['F68A', 'Denomination'], loop2[nd2]));
        total_32b += amt_32b * amt_34a;
      }
      if (!Ex.equalsNum(amt_19, total_32b)) {
        ExSvr.add_err('C01', ['Not equal.', 'F19', amt_19, total_32b]);
      }
    }
  }
  if (Ex.in_list(mt, ['820', '821', '823'])) {
    if (this.ver >= '1005') { // depeated after 201005
      return;
    }
  }

};

Ex.mfvr.rule002 = function (mt) {
  var fldGroups = [];
  if ('102' == mt || '102.STP' == mt) {
    var group = [
      ['F71G'],
      ['F32B'],
      ['F32A']
    ];
    fldGroups.push(group);
  } else if ('103' == mt || '103.STP' == mt) {
    var group = [
      ['F71G'],
      ['F32A']
    ];
    fldGroups.push(group);
  } else if ('104' == mt || '107' == mt) {
    var group = [
      ['SeqB', 'F32B'],
      ['SeqB', 'F71G'],
      ['SeqC', 'F32B'],
      ['SeqC', 'F71G']
    ];
    fldGroups.push(group);
    group = [
      ['SeqB', 'F71F'],
      ['SeqC', 'F71F']
    ];
    fldGroups.push(group);
  } else if ('110' == mt) {
    var group = [
      ['//Choice_32AB']
    ];
    fldGroups.push(group);
  } else if ('203' == mt || '210' == mt) {
    var group = [
      ['//F32B']
    ];
    fldGroups.push(group);
  } else if ('207' == mt) {
    var group = [
      ['F32B']
    ];
    fldGroups.push(group);
  } else if ('321' == mt) {
    var group = [
      ['F19A']
    ];
    fldGroups.push(group);
  } else if ('320' == mt) {
    var group = [
      ['SeqB', 'F32B'],
      ['SeqB', 'F32H'],
      ['SeqB', 'F34E'],
      ['SeqH', 'F71F']
    ];
    fldGroups.push(group);
  } else if ('360' == mt) {
    var group = [
      ['//F32B'], ["//F32M"], ["//F32U"], ["//F71F"],["//F34C"]
    ];
    fldGroups.push(group);
    // ExSvr.debug('loop  002 a - ' + mt );
  } else if ('410' == mt) {
    var group = [
      ['//Choice_32ABK']
    ];
    fldGroups.push(group);
  } else if ('412' == mt) {
    var group = [
      ['//F32A']
    ];
    fldGroups.push(group);
  } else if ('420' == mt) {
    var group = [
      ['//Choice_32ABK']
    ];
    fldGroups.push(group);
  } else if ('450' == mt) {
    var group = [
      ['//F32A']
    ];
    fldGroups.push(group);
  } else if ('455' == mt) {
    var group = [
      ['F32A'],
      ['Choice_33CD','*']
    ];
    fldGroups.push(group);
  } else if ('456' == mt) {
    var group = [
      ['//F33D'],
      ['//Choice_32AB','*']
    ];
    fldGroups.push(group);
  } else if ('620' == mt) {
    var group = [
      ['SeqB', 'Choice_32HR', 'F32H'],
      ['SeqB', 'Choice_32BF', 'F32B']
    ];
    fldGroups.push(group);
  } else if ('734' == mt) {
    var group = [
      ['F32A'],
      ['Choice_33AB','*']
    ];
    fldGroups.push(group);
  } else if ('747' == mt) {
    var group = [
      ['F32B'],
      ['F33B'],
      ['F34B']
    ];
    fldGroups.push(group);
  } else if ('750' == mt) {
    var group = [
      ['F32B'],
      ['F34B']
    ];
    fldGroups.push(group);
  } else if ('752' == mt) {
    var group = [
      ['F32B'],
      ['Choice_33AB','*']
    ];
    fldGroups.push(group);
  } else if ('754' == mt) {
    var group = [
      ['Choice_32AB','*'],
      ['Choice_34AB','*']
    ];
    fldGroups.push(group);
  } else if ('756' == mt) {
    var group = [
      ['F32B'],
      ['F33A']
    ];
    fldGroups.push(group);
  } else if ('769' == mt) {
    var group = [
      ['F33B'],
      ['F34B']
    ];
    fldGroups.push(group);
  }
  var ccyFldName;
  if ('321' == mt) {
    ccyFldName = 'CurrencyCode';
  } else if ('410' == mt || '420' == mt || '110' == mt) {
    ccyFldName = '*/Currency';
  } else {
    ccyFldName = 'Currency';
  }

  if (!fldGroups || fldGroups.length == 0)
    return;
  for (var grpIdx in fldGroups) {
    var base_ccy = null;
    var group = fldGroups[grpIdx];
    for (var i in group) {
      var ary = group[i];
      //  ExSvr.debug("c02 1" + ary);
      var loop = ExSvr.getflds(ary, null);
      for (var nd in loop) {
        if (!Ex.isNode(loop[nd]))
          continue;
        var ccy = ExSvr.get_val([ccyFldName], loop[nd]);
        // ExSvr.debug("c02 " + ccyFldName + "  " + ccy);
        if (Ex.isEmpty(ccy))
          continue;
        if (base_ccy == null) {
          base_ccy = ccy;
        } else if (!Ex.equals(base_ccy, ccy)) {
          var errArray = ['Not Same CCY'];
          for (var idx in ary) {
            errArray.push(ary[idx]);
            errArray.push('Currency');
          }
          errArray.push( group.join(";") );  // 20210526
          ExSvr.add_err('C02', errArray);
        }
      }
    }
  }
};

Ex.mfvr.rule003 = function (mt) {
  //	ExSvr.debug('this should check by server side Currency Amount !!!  ');
  ExSvr.valid_c03();
  // 19 in 102
  var pass = true;
  if (Ex.in_list(mt, ['102', '102.STP', '104', '107'])) {
    pass = ExSvr.chk_ccy(['F32B', 'Currency'], ['F19'], null); //,'Amount'
    if (!pass) {
      ExSvr.add_err('C03', ['Invaild Currency decimal digits', 'F19']);
    }
  }
  if (Ex.in_list(mt, ['201', '203', '204', '559'])) {
    pass = ExSvr.chk_ccy(['F34A', 'Currency'], ['F19'], null);
    if (!pass) {
      ExSvr.add_err('C03', ['Invaild Currency decimal digits', 'F19']);
    }
  }

  return;
};

Ex.mfvr.rule004 = function (mt) {
  if (Ex.in_list(mt, ['503', '504', '506'])) {
    if (!ExSvr.exist(['SeqB', 'F19B', 'TEXA'])) {
      var b = ExSvr.exist(['SeqB', 'F19B', 'TCRL']);
      if (!b) {
        ExSvr.add_err('C04', ['Mandatory ', 'SeqB', 'F19B', 'TCRL']);
      }
    }
  }
};

Ex.mfvr.rule005 = function (mt) {
  ExSvr.valid_c05();
  return;
  //  this validation rule applies to all types of BICs referenced in a FIN message
  ExSvr.debug('rule 005 TBD, may in server ? ');
  var lst = ['BEID', 'TRCO', 'MCCO', 'SMDP', 'CORP'];
  //   THEN <error:’C05’>
  var flds;
  if (Ex.in_list(mt, ['103', '103.STP', '103.REMIT'])) {
    // 52A, 53A, 54A, 55A, 56A, 57A
    flds = ['F52A', 'F53A', 'F54A', 'F55A', 'F56A', 'F57A'];
  } else if ('101' == mt) {
    flds = [
      ['SeqA', 'F52A'],
      ['SeqB', 'F52A'],
      ['SeqB', 'F56A'],
      ['SeqB', 'F57A']
    ];
  } else if (Ex.in_list(mt, ['102', '102.STP'])) {
    flds = [
      ['SeqA', 'F52A'],
      ['SeqB', 'F52A'],
      ['SeqB', 'F57A'],
      ['SeqC', 'F53A'],
      ['SeqC', 'F54A']
    ];
  } else if (Ex.in_list(mt, ['104', '104.RFDD'])) {
    flds = [
      ['SeqA', 'F52A'],
      ['SeqB', 'F52A'],
      ['SeqB', 'F57A'],
      ['SeqC', 'F53A']
    ];
  } else if (Ex.in_list(mt, ['107'])) {
    flds = [
      ['SeqA', 'F52A'],
      ['SeqB', 'F52A'],
      ['SeqB', 'F57A'],
      ['SeqC', 'F53A']
    ];
  } else if ('110' == mt) {
    flds = ['F52A', 'F53A', 'F54A'];
  } else if ('111' == mt) {
    flds = ['F52A'];
  } else if ('112' == mt) {
    flds = ['F52A'];
  } else if ('200' == mt) {
    flds = ['F56A', 'F57A'];
  } else if ('201' == mt) {
    flds = ['F56A', 'F57A'];
  } else if ('202' == mt) {
    flds = ['F52A', 'F53A', 'F54A', 'F56A', 'F57A', 'F58A'];
  } else if ('202.COV' == mt) {
    flds = [
      ['SeqA', 'F52A'], 'F53A', 'F54A', 'F56A', 'F57A', 'F58A'
    ];
    ExSvr.debug('C05: SeqA, SeqB not used');
  } else if ('203' == mt) {
    flds = ['F52A', 'F53A', 'F54A', 'F56A', 'F57A', 'F58A'];
  } else if ('204' == mt) {
    flds = [
      ['SeqA', 'F57A'],
      ['SeqA', 'F58A'],
      ['SeqB', 'F53A']
    ]
  } else if ('205' == mt) {
    flds = ['F52A', 'F53A', 'F56A', 'F57A', 'F58A'];
  } else if ('205.COV' == mt) {
    flds = ['F52A', 'F53A', 'F56A', 'F57A', 'F58A'];
  } else if ('207' == mt) {
    flds = [
      ['SeqA', 'F51A'], ['SeqA', 'F52G'], ['SeqA', 'F52A'], ['SeqB', 'F56A'], ['SeqB', 'F57A'], ['SeqB', 'F58A']
    ]
  } else if ('210' == mt) {
    flds = ['F52A', 'F56A'];
  } else if ('256' == mt) {
    flds = [
      ['SeqC', 'F57A']
    ];
  } else if ('300' == mt) {
    flds = [
      ['SeqB', 'SeqB1', 'F53A'], ['SeqB', 'SeqB1', 'F53J'], ['SeqB', 'SeqB1', 'F56A'], ['SeqB', 'SeqB1', 'F56J'],
      ['SeqB', 'SeqB1', 'F57A'], ['SeqB', 'SeqB1', 'F57J'], ['SeqB', 'SeqB2', 'F53A'], ['SeqB', 'SeqB2', 'F53J'],
      ['SeqB', 'SeqB2', 'F56A'], ['SeqB', 'SeqB2', 'F56J'], ['SeqB', 'SeqB2', 'F57A'], ['SeqB', 'SeqB2', 'F57J'],
      ['SeqD', 'F53A'], ['SeqD', 'F53J'], ['SeqD', 'F56A'], ['SeqD', 'F56J'], ['SeqD', 'F57A'], ['SeqD', 'F57J']
    ];
  } else if ('303' == mt) {
    flds = [
      ['SeqD', 'SeqD1', 'F53A'], ['SeqD', 'SeqD1', 'F53J'], ['SeqD', 'SeqD1', 'F56A'], ['SeqD', 'SeqD1', 'F56J'],
      ['SeqD', 'SeqD1', 'F57A'], ['SeqD', 'SeqD1', 'F57J'], ['SeqD', 'SeqD2', 'F53A'], ['SeqD', 'SeqD2', 'F53J'],
      ['SeqD', 'SeqD2', 'F56A'], ['SeqD', 'SeqD2', 'F56J'], ['SeqD', 'SeqD2', 'F57A'], ['SeqD', 'SeqD2', 'F57J'],
      ['SeqD', 'SeqD3', 'F53A'], ['SeqD', 'SeqD3', 'F53J'], ['SeqD', 'SeqD3', 'F56A'], ['SeqD', 'SeqD3', 'F56J'],
      ['SeqD', 'SeqD3', 'F57A'],
      ['SeqD', 'SeqD3', 'F57J']
    ];
  } else if ('304' == mt) {
    flds = [
      ['SeqB', 'F53A'], ['SeqB', 'F53J'], ['SeqB', 'F56A'], ['SeqB', 'F56J'], ['SeqB', 'F57A'], ['SeqB', 'F57J'],
      ['SeqE', 'F53A'], ['SeqE', 'F53J'], ['SeqE', 'F56A'], ['SeqE', 'F56J'], ['SeqE', 'F57A'], ['SeqE', 'F57J']
    ];
  } else if ('305' == mt) {
    flds = [['SeqA', 'F53A'], ['SeqA', 'F56A'], ['SeqA', 'F57A']];
  } else if ('306' == mt) {
    flds = [
      ['SeqB', 'F84A'], ['SeqB', 'F84J'], ['SeqC', 'F53A'], ['SeqC', 'F53J'], ['SeqC', 'F86A'], ['SeqC', 'F86J'],
      ['SeqC', 'F56A'], ['SeqC', 'F56J'], ['SeqC', 'F57A'], ['SeqC', 'F57J'], ['SeqE', 'F53A'], ['SeqE', 'F53J'],
      ['SeqE', 'F86A'], ['SeqE', 'F86J'], ['SeqE', 'F56A'], ['SeqE', 'F56J'], ['SeqE', 'F57A'], ['SeqE', 'F57J'],
      ['SeqJ', 'F53A'], ['SeqJ', 'F53J'], ['SeqJ', 'F86A'], ['SeqJ', 'F86J'], ['SeqJ', 'F56A'], ['SeqJ', 'F56J'],
      ['SeqJ', 'F57A'], ['SeqJ', 'F57J']
    ];
  } else if ('320' == mt) {
    flds = [
      ['SeqC', 'F53A'], ['SeqC', 'F53J'], ['SeqC', 'F86A'], ['SeqC', 'F86J'], ['SeqC', 'F56A'], ['SeqC', 'F56J'],
      ['SeqC', 'F57A'], ['SeqC', 'F57J'], ['SeqD', 'F53A'], ['SeqD', 'F53J'], ['SeqD', 'F86A'], ['SeqD', 'F86J'],
      ['SeqD', 'F56A'], ['SeqD', 'F56J'], ['SeqD', 'F57A'], ['SeqD', 'F57J'], ['SeqE', 'F53A'], ['SeqE', 'F53J'],
      ['SeqE', 'F86A'], ['SeqE', 'F86J'], ['SeqE', 'F56A'], ['SeqE', 'F56J'], ['SeqE', 'F57A'], ['SeqE', 'F57J'],
      ['SeqF', 'F53A'], ['SeqF', 'F53J'], ['SeqF', 'F86A'], ['SeqF', 'F86J'], ['SeqF', 'F56A'], ['SeqF', 'F56J'],
      ['SeqF', 'F57A'], ['SeqF', 'F57J'], ['SeqI', 'F53A'], ['SeqI', 'F53J'], ['SeqI', 'F86A'], ['SeqI', 'F86J'],
      ['SeqI', 'F56A'], ['SeqI', 'F56J'], ['SeqI', 'F57A'], ['SeqI', 'F57J']
    ];
  } else if ('330' == mt) {
    flds = [
      ['SeqC', 'F53A'], ['SeqC', 'F53J'], ['SeqC', 'F86A'], ['SeqC', 'F86J'], ['SeqC', 'F56A'], ['SeqC', 'F56J'],
      ['SeqC', 'F57A'], ['SeqC', 'F57J'], ['SeqD', 'F53A'], ['SeqD', 'F53J'], ['SeqD', 'F86A'], ['SeqD', 'F86J'],
      ['SeqD', 'F56A'], ['SeqD', 'F56J'], ['SeqD', 'F57A'], ['SeqD', 'F57J'], ['SeqE', 'F53A'], ['SeqE', 'F53J'],
      ['SeqE', 'F86A'], ['SeqE', 'F86J'], ['SeqE', 'F56A'], ['SeqE', 'F56J'], ['SeqE', 'F57A'], ['SeqE', 'F57J'],
      ['SeqF', 'F53A'], ['SeqF', 'F53J'], ['SeqF', 'F86A'], ['SeqF', 'F86J'], ['SeqF', 'F56A'], ['SeqF', 'F56J'],
      ['SeqF', 'F57A'], ['SeqF', 'F57J']
    ];
  } else if ('340' == mt) {
    flds = [
      ['SeqC', 'F53A'], ['SeqC', 'F53J'], ['SeqC', 'F86A'], ['SeqC', 'F86J'], ['SeqC', 'F56A'], ['SeqC', 'F56J'],
      ['SeqC', 'F57A'], ['SeqC', 'F57J'], ['SeqD', 'F53A'], ['SeqD', 'F53J'], ['SeqD', 'F86A'], ['SeqD', 'F86J'],
      ['SeqD', 'F56A'], ['SeqD', 'F56J'], ['SeqD', 'F57A'], ['SeqD', 'F57J'], ['SeqF', 'F53A'], ['SeqF', 'F53J'],
      ['SeqF', 'F86A'], ['SeqF', 'F86J'], ['SeqF', 'F56A'], ['SeqF', 'F56J'], ['SeqF', 'F57A'], ['SeqF', 'F57J']
    ];
  } else if ('341' == mt || '350' == mt) {
    flds = [
      ['SeqC', 'F53A'], ['SeqC', 'F53J'], ['SeqC', 'F86A'], ['SeqC', 'F86J'], ['SeqC', 'F56A'], ['SeqC', 'F56J'],
      ['SeqC', 'F57A'], ['SeqC', 'F57J']
    ];
  } else if ('360' == mt) {
    flds = [
      ['SeqD', 'F53A'], ['SeqD', 'F56A'], ['SeqD', 'F86A'], ['SeqD', 'F57A'], ['SeqG', 'F53A'], ['SeqG', 'F56A'],
      ['SeqG', 'F86A'], ['SeqG', 'F57A'], ['SeqL', 'F53A'], ['SeqL', 'F56A'], ['SeqL', 'F86A'], ['SeqL', 'F57A'],
      ['SeqM', 'F53A'], ['SeqM', 'F56A'], ['SeqM', 'F86A'], ['SeqM', 'F57A']
    ];
  } else if ('361' == mt) {
    flds = [
      ['SeqD', 'F53A'], ['SeqD', 'F56A'], ['SeqD', 'F86A'], ['SeqD', 'F57A'], ['SeqG', 'F53A'], ['SeqG', 'F56A'],
      ['SeqG', 'F86A'], ['SeqG', 'F57A'], ['SeqJ', 'F53A'], ['SeqJ', 'F56A'], ['SeqJ', 'F86A'], ['SeqJ', 'F57A'],
      ['SeqK', 'F53A'], ['SeqK', 'F56A'], ['SeqK', 'F86A'], ['SeqK', 'F57A'], ['SeqL', 'F53A'], ['SeqL', 'F56A'],
      ['SeqL', 'F86A'], ['SeqL', 'F57A'], ['SeqM', 'F53A'], ['SeqM', 'F56A'], ['SeqM', 'F86A'], ['SeqM', 'F57A']
    ];
  } else if ('362' == mt) {
    flds = [
      ['SeqC', 'F53A'], ['SeqC', 'F56A'], ['SeqC', 'F86A'], ['SeqC', 'F57A'], ['SeqE', 'F53A'], ['SeqE', 'F56A'],
      ['SeqE', 'F86A'], ['SeqE', 'F57A']
    ];
  } else if ('364' == mt) {
    flds = [
      ['SeqL', 'F53A'], ['SeqL', 'F56A'], ['SeqL', 'F86A'], ['SeqL', 'F57A'], ['SeqM', 'F53A'], ['SeqM', 'F56A'],
      ['SeqM', 'F86A'], ['SeqM', 'F57A']
    ];
  } else if ('365' == mt) {
    flds = [
      ['SeqJ', 'F53A'], ['SeqJ', 'F56A'], ['SeqJ', 'F86A'], ['SeqJ', 'F57A'], ['SeqK', 'F53A'], ['SeqK', 'F56A'],
      ['SeqK', 'F86A'], ['SeqK', 'F57A'], ['SeqL', 'F53A'], ['SeqL', 'F56A'], ['SeqL', 'F86A'], ['SeqL', 'F57A'],
      ['SeqM', 'F53A'], ['SeqM', 'F56A'], ['SeqM', 'F86A'], ['SeqM', 'F57A']
    ];
  } else {
    flds = [];
    return;
  }
  for (var i in flds) {
    var ary = flds[i];
    if (typeof(ary) == 'function') continue;
    if (Ex.isArray(ary)) {
      ary.push('IdentifierCode');
    } else {
      var tt = [flds[i], 'IdentifierCode'];
      ary = tt;
    }
    var v = ExSvr.bic_info(ary, null, 'SUBTYPE_INDICATION');
    if (v == null || Ex.in_list(v, lst)) {
      ExSvr.add_err('C05', ary);
    }
  }
};

Ex.mfvr.rule006 = function (mt) {
  if ('210' == mt) {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      // if (typeof loop1[nd] == 'function') continue;
      if (!Ex.isNode(loop1[nd])) continue;
      var b50a = ExSvr.exist(['Choice_50CF'], loop1[nd]);
      var b52a = ExSvr.exist(['Choice_52AD'], loop1[nd]);
      if ((b50a && b52a) || (!b50a && !b52a)) {
        ExSvr.add_err('C06', ['Not both or none.', 'F50a', 'F52a']);
      }
    }
  }
  if ('707' == mt ) {
    // 2018
    var b52a = ExSvr.exist(['Choice_52AD']);
    var b50b = ExSvr.exist(['F50B']);
    if (b52a && b50b) {
      ExSvr.add_err('C06', ['Not both','F52a', 'F50B']);
    } else if (!b52a && !b50b) {
      ExSvr.add_err('C06', ['Either', 'F52a','F50B']);
    }
  }
  if ('710' == mt || '720' == mt) {
    var b52a = ExSvr.exist(['Choice_52AD']);
    var b50b = ExSvr.exist(['F50B']);
    if (b52a && b50b) {
      ExSvr.add_err('C06', ['Not allowed', 'F50B']);
    } else if (!b52a && !b50b) {
      ExSvr.add_err('C06', ['Mandatory', 'F50B']);
    }
  }
  if ('910' == mt) {
    var b52a = ExSvr.exist(['Choice_52AD']);
    var b50b = ExSvr.exist(['Choice_50AFK']);
    if (this.ver >= '2016') {
      if (!b52a && !b50b) {
        ExSvr.add_err('C06', ['Mandatory', 'F50a OR F52a']);
      }
    } else {
      if (b52a && b50b) {
        ExSvr.add_err('C06', ['Not allowed both', 'F50a ADN F52a']);
      } else if (!b52a && !b50b) {
        ExSvr.add_err('C06', ['Mandatory', 'F50a OR F52a']);
      }
    }
  }
};

Ex.mfvr.rule007 = function (mt) {
  if ('516' == mt) {
    var b35a = ExSvr.exist(['F35A']);
    var b35n = ExSvr.exist(['F35N']);
    if (!(b35a || b35n)) {
      ExSvr.add_err('C07', ['Either 35A or 35N', 'F35N']);
    }
  }
};

Ex.mfvr.rule008 = function (mt) {
  if (this.ver < '1105') {
    return;
  }
  // add in 2012 MFVR 20120312 Ben Pan

  if ('300' == mt) {
    Ex.mfvr.rule008_for_mt300();
  } else if ('304' == mt) {
    Ex.mfvr.rule008_for_mt304();
  } else if ('305' == mt) {
    Ex.mfvr.rule008_for_mt305();
  } else if ('306' == mt) {
    Ex.mfvr.rule008_for_mt306();
  }

  // Added by Max Qi on 20150528
  if (this.ver >= '2015') {
    var lst = ['XAU', 'XAG', 'XPD', 'XPT'];
    if ('101' == mt || '207' == mt) {
      var loop = ExSvr.getflds(['SeqB'], null);
      for (var i in loop) {
        if (!Ex.isNode(loop[i]))
          continue;
        var ccy = ExSvr.get_val(['F32B', 'Currency'], loop[i]);
        if (Ex.in_list(ccy, lst)) {
          ExSvr.add_err('C08', ['Currency Code Not allowed', 'SeqB', 'F32B', 'Currency', ccy]);
        }
      }
    } else if ('102' == mt || '102.STP' == mt) {
      var loop = ExSvr.getflds(['SeqB'], null);
      for (var i in loop) {
        if (!Ex.isNode(loop[i]))
          continue;
        var ccy = ExSvr.get_val(['F32B', 'Currency'], loop[i]);
        if (Ex.in_list(ccy, lst)) {
          ExSvr.add_err('C08', ['Currency Code Not allowed', 'SeqB', 'F32B', 'Currency', ccy]);
        }
      }

      loop = ExSvr.getflds(['SeqC'], null);
      for (var i in loop) {
        if (!Ex.isNode(loop[i]))
          continue;
        var ccy = ExSvr.get_val(['F32A', 'Currency'], loop[i]);
        if (Ex.in_list(ccy, lst)) {
          ExSvr.add_err('C08', ['Currency Code Not allowed', 'SeqC', 'F32A', 'Currency', ccy]);
        }
      }
    } else if (Ex.in_list(mt, ['103', '103.REMIT', '103.STP', '200', '202', '202.COV', '205', '205.COV'])) {
      var ccy = ExSvr.get_val(['F32A', 'Currency'], null);
      if (Ex.in_list(ccy, lst)) {
        ExSvr.add_err('C08', ['Currency Code Not allowed', 'F32A', 'Currency', ccy]);
      }
    } else if ('201' == mt || '203' == mt || '210' == mt) {
      var loop1 = ExSvr.getflds(['Loop1'], null);
      for (var i in loop1) {
        if (!Ex.isNode(loop1[i]))
          continue;
        var ccy = ExSvr.get_val(['F32B', 'Currency'], loop1[i]);
        if (Ex.in_list(ccy, lst)) {
          ExSvr.add_err('C08', ['Currency Code Not allowed', 'Loop1', 'F32B', 'Currency', ccy]);
        }
      }
    }
  }
};

Ex.mfvr.rule008_for_mt300 = function() {
  var lst = ['XAU', 'XAG', 'XPD', 'XPT'];
  if (this.ver >= '2017') {
    var v32e = ExSvr.get_val(['SeqA', 'F32E'], null);
    if (v32e) {
      if (Ex.in_list(v32e, lst)) {
        ExSvr.add_err('C08', ['Not allowed', 'SeqA', 'F32E', v32e]);
      }
    }
  }
  var ccy1 = ExSvr.get_val(['SeqB', 'SeqB1', 'F32B', 'Currency'], null);
  if (Ex.in_list(ccy1, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqB', 'SeqB1', 'F32B', 'Currency', ccy1]);
  }
  var ccy2 = ExSvr.get_val(['SeqB', 'SeqB2', 'F33B', 'Currency'], null);
  if (Ex.in_list(ccy2, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqB', 'SeqB2', 'F33B', 'Currency', ccy2]);
  }
  var ccy3 = ExSvr.get_val(['SeqC', 'F71F', 'Currency'], null);
  if (Ex.in_list(ccy3, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqC', 'F71F', 'Currency', ccy3]);
  }
  var loop1 = ExSvr.getflds(['SeqD', 'Loop1'], null);
  for (var nd in loop1) {
    if (!Ex.isNode(loop1[nd])) continue;
    var ccy4 = ExSvr.get_val(['F32B', 'Currency'], loop1[nd]);
    if (Ex.in_list(ccy4, lst)) {
      ExSvr.add_err('C08', ['Not allowed', 'SeqD', 'Loop1', 'F32B', 'Currency', ccy4]);
    }
  }
};

Ex.mfvr.rule008_for_mt304 = function() {
  var lst = ['XAU', 'XAG', 'XPD', 'XPT'];
  var ccy1 = ExSvr.get_val(['SeqB', 'SeqB1', 'F32B', 'Currency'], null);
  if (Ex.in_list(ccy1, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqB', 'SeqB1', 'F32B', 'Currency', ccy1]);
  }
  var ccy2 = ExSvr.get_val(['SeqB', 'SeqB2', 'F33B', 'Currency'], null);
  if (Ex.in_list(ccy2, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqB', 'SeqB2', 'F33B', 'Currency', ccy2]);
  }
  var ccy3 = ExSvr.get_val(['SeqD', 'F32G', 'Currency'], null);
  if (Ex.in_list(ccy3, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqD', 'F32G', 'Currency', ccy3]);
  }
  var ccy4 = ExSvr.get_val(['SeqE', 'F32G', 'Currency'], null);
  if (Ex.in_list(ccy4, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqE', 'F32G', 'Currency', ccy4]);
  }
};

Ex.mfvr.rule008_for_mt305 = function() {
  var lst = ['XAU', 'XAG', 'XPD', 'XPT'];
  if (this.ver >= '2017') {
    var v32e = ExSvr.get_val(['SeqA', 'F32E'], null);
    if (v32e) {
      if (Ex.in_list(v32e, lst)) {
        ExSvr.add_err('C08', ['Not allowed', 'SeqA', 'F32E', v32e]);
      }
    }
  }
  var ccy1 = ExSvr.get_val(['SeqA', 'F32B', 'Currency'], null);
  if (Ex.in_list(ccy1, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqA', 'F32B', 'Currency', ccy1]);
  }
  var ccy2 = ExSvr.get_val(['SeqA', 'F33B', 'Currency'], null);
  if (Ex.in_list(ccy2, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqA', 'F33B', 'Currency', ccy2]);
  }
  var ccy3 = ExSvr.get_val(['Choice_34PR', '*', 'Currency'], null);
  if (Ex.in_list(ccy3, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqA', '34a', 'Currency', ccy3]);
  }
};

Ex.mfvr.rule008_for_mt306 = function() {
  var lst = ['XAU', 'XAG', 'XPD', 'XPT'];
  var ccy1 = ExSvr.get_val(['SeqB', 'SeqB1', 'F34B', 'Currency'], null);
  if (Ex.in_list(ccy1, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqB', 'SeqB1', 'Currency', ccy1]);
  }
  var ccy2 = ExSvr.get_val(['SeqD', 'F32B', 'Currency'], null);
  if (Ex.in_list(ccy2, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqD', 'F32B', 'Currency', ccy2]);
  }
  var ccy3 = ExSvr.get_val(['SeqD', 'F33B', 'Currency'], null);
  if (Ex.in_list(ccy3, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqD', 'F33B', 'Currency', ccy3]);
  }
  var ccy4 = ExSvr.get_val(['SeqE', 'F33E', 'Currency'], null);
  if (Ex.in_list(ccy4, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqE', 'F33E', 'Currency', ccy4]);
  }
  var ccy5 = ExSvr.get_val(['SeqG', 'F32Q', 'Currency1'], null);
  if (Ex.in_list(ccy5, lst)) {
    ExSvr.add_err('CO8', ['Not allowed', 'SeqG', 'F32Q', 'Currency1', ccy5]);
  }
  var ccy6 = ExSvr.get_val(['SeqG', 'F32Q', 'Currency2'], null);
  if (Ex.in_list(ccy6, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqG', 'F32Q', 'Currency2', ccy6]);
  }
  var ccy7 = ExSvr.get_val(['SeqH', 'F32E'], null);
  if (Ex.in_list(ccy7, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqH', 'F32E', ccy7]);
  }
  var ccy8 = ExSvr.get_val(['SeqI', 'F71F', 'Currency'], null);
  if (Ex.in_list(ccy8, lst)) {
    ExSvr.add_err('C08', ['Not allowed', 'SeqI', 'F71F', 'Currency', ccy8]);
  }
  var loop2 = ExSvr.getflds(['SeqJ', 'Loop2'], null);
  for (var nd in loop2) {
    if (!Ex.isNode(loop2[nd])) continue;
    var ccy9 = ExSvr.get_val(['F32H', 'Currency'], loop2[nd]);
    if (Ex.in_list(ccy9, lst)) {
      ExSvr.add_err('C08', ['Not allowed', 'SeqJ', 'Loop2', 'F32H', 'Currency', ccy9]);
    }
  }
};

Ex.mfvr.rule009 = function (mt) {
  if ('430' == mt) {
    var loop1 = ExSvr.getflds(['SeqA'], null);
    for (var nd in loop1) {
      //if (typeof loop1[nd] == 'function') continue;
      if (!Ex.isNode(loop1[nd])) continue;
      var b33a = ExSvr.exist(['Choice_33AK'], loop1[nd]);
      var b32a = ExSvr.exist(['Choice_32AK'], loop1[nd]);
      if (b33a && !b32a) {
        ExSvr.add_err('C09', ['Mandatory.', 'F32a']);
      }
    }
  }
};

Ex.mfvr.rule010 = function (mt) {
  if ('422' == mt) {
    if (!ExSvr.exist(['F72']) && !ExSvr.exist(['F75']) && !ExSvr.exist(['F76'])) {
      ExSvr.add_err('C10', ['At least one.', 'F71/F75/F76']);
    }
  }
};

Ex.mfvr.rule011 = function (mt) {
  if ('400' == mt) {
    if (ExSvr.exist(['Choice_57AD'])) {
      if (!(ExSvr.exist(['Choice_53ABD']) && ExSvr.exist(['Choice_54ABD']))) {
        ExSvr.add_err('C11', ['Mandatory.', 'F53a and F54a']);
      }
    }
  }
};

Ex.mfvr.rule012 = function (mt) {
  if (this.ver >= '2018' && '707' == mt){
    //
    var b_f32b = ExSvr.exist(['F32B']);
    var b_f33b = ExSvr.exist(['F33B']);
    if (b_f32b && b_f33b){
    ExSvr.add_err('C12', ['Not Both.', 'F32B', 'F33B']);
    }
  }else if ('707' == mt || '747' == mt) {
    if (ExSvr.exist(['F32B']) || ExSvr.exist(['F33B'])) {
      if (!ExSvr.exist(['F34B'])) {
        ExSvr.add_err('C12', ['Mandatory.', 'F34B']);
      }
    }
    if (ExSvr.exist(['F34B'])) {
      if (!(ExSvr.exist(['F32B']) || ExSvr.exist(['F33B']))) {
        ExSvr.add_err('C12', ['At lease one.', 'F32B', 'F33B']);
      }
    }
  }
  if (this.ver >= '2021' && '767' == mt) {
    var b_f32b = ExSvr.exist('/F32B');
    var b_f33b = ExSvr.exist('/F33B');
    if (b_f32b && b_f33b){
      ExSvr.add_err('C12', ['Not Both.', 'F32B', 'F33B']);
    }
    if (ExSvr.exist('/SeqC')){
      if (ExSvr.exist('/SeqC/F32B') && ExSvr.exist('/SeqC/F33B')){
        ExSvr.add_err('C12', ['Not Both.', 'SeqC/F32B', 'SeqC/F33B']);
      }
    }
  }
};

Ex.mfvr.rule013 = function (mt) {
  if ('750' == mt) {
    var need_34b;
    if (this.ver >= '2018'){
      need_34b = ExSvr.exist(['F33B']) || ExSvr.exist(['F71D']) || ExSvr.exist(['F73A'])
    } else {
      need_34b = ExSvr.exist(['F33B']) || ExSvr.exist(['F71B']) || ExSvr.exist(['F73'])
    }
    if (need_34b) {
      if (!ExSvr.exist(['F34B'])) {
        ExSvr.add_err('C13', ['Mandatory.', 'F34B']);
      }
    }
  } else if ('765' == mt) {
    var b77 = ExSvr.exist('F77');
    if ('INCP' == ExSvr.get_val('F49A/Code')) {
      if (!b77) {
        ExSvr.add_err('C13', ['Mandatory.', 'F77']);
      }
    } else if (b77) {
      ExSvr.add_err('C13', ['Not allowed.', 'F77']);
    }
  }
};

Ex.mfvr.rule014 = function (mt) {
  if ('559' == mt) {
    if (ExSvr.exist(['Choice_53ACD']) && ExSvr.exist(['Choice_57ABD'])) {
      ExSvr.add_err('C14', ['not both.', 'F53a', 'F57a']);
    }
  }
  if ('754' == mt) {
    if (ExSvr.exist(['Choice_53ABD']) && ExSvr.exist(['Choice_57ABD'])) {
      ExSvr.add_err('C14', ['not both.', 'F53a', 'F57a']);
    }
  }
};

Ex.mfvr.rule015 = function (mt) {
  if ('747' == mt) {
    var flds = ['F31E','F32B','F33B','F34B','F39A','F39B','F39C','F72','F77A'];
    if (this.ver >= '2018'){
      flds = ['F31E','F32B','F33B','F34B','F39A','F39C','F72Z','F77'];
    }
    for (var i in flds ){
      if (ExSvr.exist( [ flds[i]] )) return;
    }
    // if (ExSvr.exist(['F31E']) || ExSvr.exist(['F32B']) || ExSvr.exist(['F33B']) || ExSvr.exist(['F34B']) || ExSvr.exist(['F39A']) || ExSvr.exist(['F39B']) || ExSvr.exist(['F39C']) || ExSvr.exist(['F72']) || ExSvr.exist(['F72A'])) {
    // } else {
      ExSvr.add_err('C15', ['At least one.', '31E, 32B, 33B, 34B, 39A, 39C, 72Z or 77']);
    //}
  }
};

Ex.mfvr.rule016 = function (mt) {
  if ('760' == mt) {
    var b23f = ExSvr.exist('/F23F');
    // ExSvr.debug( 'exist 23F ' + b23f );
    if (!b23f ) {
      if (ExSvr.exist('/F78') || ExSvr.exist('/F26E') || ExSvr.exist('/F31S') ) {
        ExSvr.add_err('C16', ['Not allowed', 'SeqB/F78/26E/31S']);
      }
    }
    b23f = ExSvr.exist('/SeqC/F23F');
    if (!b23f ) {
      if (ExSvr.exist('/SeqC/F78') || ExSvr.exist('/SeqC/F26E') || ExSvr.exist('/SeqC/F31S') ) {
        ExSvr.add_err('C16', ['Not allowed', 'SeqC/F78/26E/31S']);
      }
    }
  }
};

Ex.mfvr.rule017 = function (mt) {
  if ('734' == mt) {
    var fld_73 = 'F73';
    if (this.ver >= '2018'){
      fld_73 = 'F73A';
    }
    if (ExSvr.exist([ fld_73 ])) {
      if (!ExSvr.exist(['Choice_33AB'])) {
        ExSvr.add_err('C17', ['Mandatory.', 'F33a']);
      }
    }
  } else if ('760' == mt) {
    var v22a = ExSvr.get_val('/F22A');
    var b50 = ExSvr.exist('/F50');
    if ('ISSU' == v22a && !b50 ) {
      ExSvr.add_err('C17', ['Mandatory', 'SeqB', v22a, 'F50']);
    }
  }else if ('765' == mt) {
    if ('PAYM' == ExSvr.get_val('F22G')) {
      if (ExSvr.exist('F31E')) {
        ExSvr.add_err('C17', ['Not allowed.', 'F31E']);
      }
      if (ExSvr.exist('F31R')) {
        ExSvr.add_err('C17', ['Not allowed.', 'F31R']);
      }
    }
  }
};

Ex.mfvr.rule018 = function (mt) {
  if ('752' == mt) {
    var need_33;
    if (this.ver >= '2018'){
      need_33 = ExSvr.exist(['F32B']) && ExSvr.exist(['F71D']);
    } else {
      need_33 = ExSvr.exist(['F32B']) && ExSvr.exist(['F71B']);
    }
    if ( need_33 ) {
      if (!ExSvr.exist(['Choice_33AB'])) {
        ExSvr.add_err('C18', ['Mandatory.', 'F33a']);
      }
    }
  }else if ('760' == mt) {
    var v22a = ExSvr.get_val('/F22A');
    var v22d = ExSvr.get_val('/F22D');
    var b49 = ExSvr.exist('/F49');
    if ('ISSU' == v22a && 'STBY' == v22d && !b49 ) {
      ExSvr.add_err('C18', ['Mandatory', 'SeqB', v22d, 'F49']);
    } else if ('DGAR' == v22d && b49) {
      ExSvr.add_err('C18B', ['Not allowed', 'SeqB', v22d, 'F49']);
    }
  }
};

Ex.mfvr.rule019 = function (mt) {
  if ('754' == mt) {
    if (this.ver >= '2018'){
    if (ExSvr.exist(['F72Z']) && ExSvr.exist(['F77'])) {
      ExSvr.add_err('C19', ['not both.', 'F72Z/77']);
    }
    } else {
    if (ExSvr.exist(['F72']) && ExSvr.exist(['F77A'])) {
      ExSvr.add_err('C19', ['not both.', 'F72/77A']);
    }
    }
  }else if ('760' == mt) {
    var v22a = ExSvr.get_val('/F22A');
    var bSeqc = ExSvr.exist('/SeqC');
    if ('ISCO' == v22a || 'ICCO' == v22a ) {
      if (ExSvr.exist('/F48D') || ExSvr.exist('/F24E') || ExSvr.exist('/F24G') ) {
        ExSvr.add_err('C19', ['Not allowed','F48D/24E/24G']);
      }
      if (!bSeqc) {
        ExSvr.add_err('C19B', ['Mandatory', 'SeqC']);
      }
    } else if (bSeqc){
      ExSvr.add_err('C19B', ['Not allowed', 'SeqC']);
    }
  } else if ('761' == mt) {
    if (!(ExSvr.exist(['F77U']) || ExSvr.exist(['F77L'])) ) {
      ExSvr.add_err('C19', ['At least one.', 'F77U/77L']);
    }
  } else if ('767' == mt) {
    var v22a = ExSvr.get_val('/F22A');
    var bSeqc = ExSvr.exist('/SeqC');
    if (this.ver >= '2023' && 'ACNA' != v22a && 'ADVA' != v22a  ) {
      if (ExSvr.exist('/F23') ){
        ExSvr.add_err('C20', ['Not allowed', 'F23']);
      }
    }
    if ('ISCA' == v22a || 'ICCA' == v22a  ) {
      if (!bSeqc) {
        ExSvr.add_err('C19', ['Mandatory', 'SeqC']);
      }
      // 2023
      if (ExSvr.exist('/F24E') ){
        ExSvr.add_err('C19B', ['Not allowed', 'F24E']);
      }
      if (ExSvr.exist('/F24G') ){
        ExSvr.add_err('C19B', ['Not allowed', 'F24G']);
      }
    } else if (bSeqc){
      ExSvr.add_err('C19', ['Not allowed', 'SeqC']);
    }
  }else if ('775' == mt) {
    if (!(ExSvr.exist(['F77U']) || ExSvr.exist(['F77L'])) ) {
      ExSvr.add_err('C19', ['At least one.', 'F77U/77L']);
    }
  }
};

Ex.mfvr.rule020 = function (mt) {
  if ('601' == mt) {
    if (ExSvr.exist(['Choice_53ABD']) && (!ExSvr.exist(['F34P']))) {
      ExSvr.add_err('C20', ['Mandatory', 'F34P']);
    }
  }else if ('760' == mt) {
    var v49 = ExSvr.get_val('/F49');
    var b58a = ExSvr.exist('/Choice_58AD');
    if ('CONFIRM' == v49 || 'MAY ADD' == v49 ) {
      if (!b58a) {
        ExSvr.add_err('C20', ['Mandatory', '58a']);
      }
    } else if (b58a){
      ExSvr.add_err('C20', ['Not allowed', '58a']);
    }
  }
  if (this.ver >= '2016' && '304' == mt) {
    // [MFVR2016] In seq D, field 30F may only be present if field 34B is present
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd1 in loop1) {
      if (!Ex.isNode(loop1[nd1])) continue;
      if (ExSvr.exist(['F30F'], loop1[nd1])) {
        if (!ExSvr.exist(['F34B'], loop1[nd1])) {
          ExSvr.add_err('C20', ['Mandatory', 'F34B']);
        }
      }
    }
  }
};

Ex.mfvr.rule021 = function (mt) {
  if ('506' == mt) {
    if (!ExSvr.exist(['SeqC']))
      if (!ExSvr.exist(['SeqD'])) {
        ExSvr.add_err('C21', ['Mandatory', 'SeqD']);
      }
  }else if ('760' == mt) {
    var v22d = ExSvr.get_val('/F22D');
    if ('DGAR' == v22d ) {
      if (ExSvr.exist('/Choice_41FG')) {
        ExSvr.add_err('C21B', ['Not allowed', '41a']);
      }
    }
    if (ExSvr.exist('/SeqC')) {
      v22d = ExSvr.get_val('/SeqC/F22D');
      if ('DGAR' == v22d || 'DEPU' == v22d ) {
        if (ExSvr.exist('/SeqC/Choice_41FG')) {
          ExSvr.add_err('C21C', ['Not allowed', 'SeqC/41a']);
        }
      }
    }
  }
};

Ex.mfvr.rule022 = function (mt) {
  if ('920' == mt) {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd1 in loop1) {
      if (!Ex.isNode(loop1[nd1])) continue;
      var v12 = ExSvr.get_val(['F12'], loop1[nd1]);
      if (v12 == '942') {
        if (!ExSvr.exist(['F34F'], loop1[nd1])) {
          ExSvr.add_err('C22', ['Mandatory', 'F34F']);
        }
      }
    }
  }
};

Ex.mfvr.rule023 = function (mt) {
  if ('920' == mt) {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd]))
        continue;
      var bf34f = ExSvr.exist(['F34F'], loop1[nd]);
      var bf34f_5 = ExSvr.exist(['F34F_5'], loop1[nd]);
      if (bf34f && !bf34f_5) {
        if (ExSvr.exist(['F34F', 'DCMark'], loop1[nd])) {
          ExSvr.add_err('C23', ['Not Allowed', 'F34F', 'DCMark']);
        }
      } else if (bf34f && bf34f_5) {
        var vf34f_mark = ExSvr.get_val(['F34F', 'DCMark'], loop1[nd]);
        var vf34f_5_mark = ExSvr.get_val(['F34F_5', 'DCMark'], loop1[nd]);
        if (vf34f_mark != 'D' || vf34f_5_mark != 'C') {
          ExSvr.add_err('C23', ['Bad Value', 'F34F', 'DCMark'])
        }
      }
    }
  }
  if ('942' == mt) {
    if (ExSvr.exist(['F34F_6'], null)) {
      if ('C' != ExSvr.get_val(['F34F_6', 'DCMark'], null)) {
        ExSvr.add_err('C23', ['Bad Value', 'F34F', 'DCMark']);
      }
      if ('D' != ExSvr.get_val(['F34F', 'DCMark'], null)) {
        ExSvr.add_err('C23', ['Bad Value', 'F34F', 'DCMark']);
      }
    } else {
      if (ExSvr.exist(['F34F', 'DCMark'], null)) {
        ExSvr.add_err('C23', ['Not allow', 'F34F', 'DCMark']);
      }
    }
  }
};

Ex.mfvr.rule024 = function (mt) {
  if ('940' == mt || '942' == mt) {
    // Loop1 F61, F86
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var v86 = ExSvr.get_val(['F86'], loop1[nd]);
      if (!Ex.isEmpty(v86)) {
        var b61 = ExSvr.exist(['F61'], loop1[nd]);
        if (!b61) {
          ExSvr.add_err('C24', ['Mandatory', 'F61']);
        }
      }
    }
  }
};

Ex.mfvr.rule025 = function (mt) {
  if (mt.substr(1, 2) == '92') {
    if (!ExSvr.exist(['F79'], null)) {
      if (!ExSvr.exist(['NOTAG'], null)) {
        ExSvr.add_err('C25', ['Mandatory', 'Copy of original field']);
      }
    }
  }
};

Ex.mfvr.rule026 = function (mt) {
  // Choice_32AK
  if ('430' == mt) {
    if (ExSvr.exist(['F74'], null) || ExSvr.exist(['Choice_32AK'], null)) {

    } else {
      ExSvr.add_err('C26', ['At least one', 'F74', 'F32a']);
    }
  }
};

Ex.mfvr.rule027 = function (mt) {
  if (Ex.in_list(mt, ['940', '941', '942', '950', '970', '972'])) {
    var list = ['F60F', 'F60M', 'F62F', 'F62M', 'F64']; // Loop2, F65
    if ('942' == mt) {
      list = ['F34F', 'F34F_6', 'F90C', 'F90D'];
    } else if ('941' == mt) {
      list = ['F60F', 'F60M', 'F62F', 'F62M', 'F64', 'F90C', 'F90D'];
    }
    var ccy = null;
    for (var i in list) {
      if (!Ex.isNode(list[i])) continue;
      var v = ExSvr.get_val([list[i], 'Currency'], null);
      if (!Ex.isEmpty(v)) {
        if (Ex.isEmpty(ccy)) {
          ccy = v;
        } else if (!Ex.equals(ccy, v)) {
          ExSvr.add_err('C27', ['Not same CCY.', list[i], 'Currency']);
        }
      }
    }
  }
};

Ex.mfvr.rule028 = function (mt) {
  if (Ex.in_list(mt, ['541', '543', '578'])) {
    var v98a = ExSvr.get_val(['SeqE', 'SeqE3', 'Choice_98AC', 'F98A', 'Qualifier'], null);
    if (Ex.isEmpty(v98a)) {
      v98a = ExSvr.get_val(['SeqE', 'SeqE3', 'Choice_98AC', 'F98C', 'Qualifier'], null);
    }
    if ('VALU' == v98a) {
      // 22F
      var v22 = ExSvr.exist(['SeqE', 'Loop25', 'F22F', 'Qualifier'], null); // STCO//SPST
      if (!v22) {
        ExSvr.add_err('C28', ['Mandatory', ':22F::STCO//SPST']);
      }
      var v19 = ExSvr.exist(['SeqE', 'SeqE3', 'Loop32', 'F19A', 'Qualifier'], null); // SETT
      if (!v19) {
        ExSvr.add_err('C28', ['Mandatory', ':19A::SETT']);
      }
      ExSvr.debug('[TBD] 028 ' + mt);
    }
  }
  if (Ex.in_list(mt, ['544', '545', '546', '547'])) {
    ExSvr.debug('[TBD] 028 ' + mt);
  }
  if (Ex.in_list(mt, ['586'])) {
    ExSvr.debug('[TBD] 028 ' + mt);
  }
};

Ex.mfvr.rule029 = function (mt) {
  //ok
};

Ex.mfvr.rule030 = function (mt) {
  if ('707' == mt) {
    var nms = ''+ExSvr.getChildNames(null);
    var idx = nms.indexOf("F22A");
//    var rest = nms.substring(idx+4);
    if (idx+4+4 > nms.length) {
      ExSvr.add_err('C30', []);
    } else {
//      ExSvr.debug('rest ' + rest)
    }
//    var len = nms.length
//    ExSvr.debug('pos: ' + ( idx +4) +( typeof nms )+ ", has more? " + (idx+4+4 < len) +", [" + nms + "]");
//    if (idx + 4+ 4 >len){
//    }
//    var list = ['F31E', 'F32B', 'F33B', 'F34B', 'F39A', 'F39B', 'F39C', 'F44A', 'F44E', 'F44F', 'F44B', 'F44C', 'F44D', 'F72', 'Loop1'];
//    if (this.ver >= '2018'){
//      list = ['F23S','F40A','F40E','F31D','F50','F59', 'F32B','F33B','F39A','F39C',
//      'Choice_41AD','F41A','F41D','F42C','Choice_42AD','F42A','F42D','F42M','F42P','F43P','F43T','F44A','F44E','F44F','F44B','F44C','F44D',
//      'F45B','F46B','F47B','F49M','F49N','F71D','F48','F49',
//      'Choice_58AD','F58A','F58D','Choice_53AD','F53A','F53D','F78','Choice_57ABD','F57A','F57B','F57D',
//      'F72Z'];
//    }
//    for (var i in list) {
//      if (!Ex.isNode(list[i])) continue;
//      if (ExSvr.exist([list[i]], null)) {
//        return;
//      }
//    }
//    ExSvr.add_err('C30', []);
  }
};

Ex.mfvr.rule031 = function (mt) {
  var mt_2 = mt.substr(1, 2);
  if (mt_2 == '95' || mt_2 == '96') {
    var b79 = ExSvr.exist(['F79'], null);
    var bother = ExSvr.exist(['NOTAG'], null);
    if (b79 && bother) {
      ExSvr.add_err('C31', []);
    } else if (!b79 && !bother){
      // ExSvr.add_err('C31', ['Mandatory', 'Either 79 or copy of fields']);
    }
  }
};

Ex.mfvr.rule032 = function (mt) {
  // THIS HAS DONE IN XSD CHECK.
};

Ex.mfvr.rule033 = function (mt) {
  if ('768' == mt || '769' == mt) {
    var need_32;
    if (this.ver >= '2021'){
      need_32 = ExSvr.exist(['F71D'], null);
    } else {
      need_32 = ExSvr.exist(['F71B'], null)
    }
    // ExSvr.debug(" 033 - " + need_32 + " - "+ExSvr.exist(['Choice_32BD'], null) + " - " +ExSvr.exist(['F71B'], null));
    if (need_32) {
      if (!ExSvr.exist(['Choice_32BD'], null)) {
        ExSvr.add_err('C33', ['Mandatory', 'F32a']);
      }
    }
  }else if ('760' == mt) {
    var b23f = ExSvr.exist('/SeqC/F22Y');
    if (b23f ) {
      if (!ExSvr.exist('/SeqC/F22K'))
      ExSvr.add_err('C33', ['Mandatory', 'SeqC/F22K']);
    }
  }
};

Ex.mfvr.rule034 = function (mt) {
  if ('769' == mt) {
    var b33b = ExSvr.exist(['F33B'], null);
    var b39c = ExSvr.exist(['F39C'], null);
    if ((b33b && b39c) || (!b33b && !b39c)) {
      ExSvr.add_err('C34', ['either but not both', 'F33B', 'F39C']);
    }
  }
};

Ex.mfvr.rule035 = function (mt) {
  if (Ex.in_list(mt, ['643', '644', '646', '649'])) {
    var b33b = ExSvr.exist(['F21'], null);
    var b39c = ExSvr.exist(['F29B'], null);
    if (!(b33b || b39c)) {
      ExSvr.add_err('C35', ['either must be present', 'F33B', 'F39C']);
    }
  }
};

Ex.mfvr.rule036 = function (mt) {
  if (Ex.in_list(mt, ['643', '646'])) {
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      if (!ExSvr.exist(['F31F', 'Date'], loop1[nd])) {
        ExSvr.add_err('C36', ['Mandatory', 'F31F']);
      }
    }
  }
};

Ex.mfvr.rule037 = function (mt) {
  if ('577' == mt) {
    if (ExSvr.exist(['F67A', 'Date2'], null)) {
      ExSvr.add_err('C37', ['Not allow', 'F67A', 'Date2']);
    }
  }
};

Ex.mfvr.rule038 = function (mt) {
  if ('306' != mt) {
    return;
  }

  if (this.ver < '2015') {
    return;

  } else if (this.ver == '2015') {
    var v12e = ExSvr.get_val(['SeqA', 'F12E'], null);
    if ('BERM' == v12e) {
      var bseq_i = ExSvr.exist(['SeqI'], null);
      if (!bseq_i) {
        ExSvr.add_err('C38', ['Mandatory', 'SeqI']);
      }
    }

  } else if (this.ver >= '2016') {
    var v12g = ExSvr.get_val(['SeqI', 'F12G'], null);
    if (!v12g) {
      return;
    }
    if ('BERM' == v12g) {
      if (!ExSvr.exist(['SeqI', 'F30T'], null)) {
        ExSvr.add_err('C38', ['Mandatory', 'SeqI', 'F30T']);
      }
      if (!ExSvr.exist(['SeqI', 'F22Y'], null)) {
        ExSvr.add_err('C38', ['Mandatory', 'SeqI', 'F22Y']);
      }
    }
  }
};

Ex.mfvr.rule039 = function (mt) {
  if ('306' != mt) {
    return;
  }

  if (this.ver < '2015') {
    return;

  } else if (this.ver == '2015') {
    var v12e = ExSvr.get_val(['SeqA', 'F12E'], null);
    if ('AMER' == v12e) {
      var bseq_i = ExSvr.exist(['SeqI'], null);
      if (bseq_i) {
        var b30y = ExSvr.exist(['SeqI', 'F30Y'], null);
        if (!b30y) {
          ExSvr.add_err('C39', ['Mandatory', 'SeqI', 'F30Y']);
        }
      }
    }

  } else if (this.ver >= '2016') {
    var v12g = ExSvr.get_val(['SeqI', 'F12G'], null);
    if (!v12g) {
      return;
    }
    if ('AMER' == v12g) {
      if (!ExSvr.exist(['SeqI', 'F30Y'], null)) {
        ExSvr.add_err('C39', ['Mandatory', 'SeqI', 'F30Y']);
      }
    }
  }
};

Ex.mfvr.rule040 = function (mt) {
  if ('920' == mt) {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      if (ExSvr.exist(['F34F'], loop1[nd]) && ExSvr.exist(['F34F_5'], loop1[nd])) {
        var v34f_ccy = ExSvr.get_val(['F34F', 'Currency'], loop1[nd]);
        var v34f_5_ccy = ExSvr.get_val(['F34F_5', 'Currency'], loop1[nd]);
        if (!Ex.equals(v34f_ccy, v34f_5_ccy)) {
          ExSvr.add_err('C40', ['Must same CCY', 'F34F']);
        }
      }
    }
  }
};

Ex.mfvr.rule041 = function (mt) {
  if (this.ver < '2015') {
    return;
  }
  var v12f = ExSvr.get_val(['SeqA', 'F12F'], null);
  if (!v12f) {
    return;
  }
  var bseq_j = ExSvr.exist(['SeqJ'], null);
  if (Ex.in_list(v12f, ['AVRF', 'AVRO', 'AVSF', 'AVSO', 'DAVF', 'DAVO'])) {
    if (!bseq_j) {
      ExSvr.add_err('C41', ['Mandatory', 'SeqJ']);
    }
    var bsubseq_j1 = ExSvr.exist(['SeqJ', 'SeqJ1'], null);
    var bsubseq_j2 = ExSvr.exist(['SeqJ', 'SeqJ2'], null);
    var b14b = ExSvr.exist(['SeqJ', 'F14B']);
    if ('AVRF' == v12f || 'AVRO' == v12f) {
      if (!bsubseq_j1) {
        ExSvr.add_err('C41', ['Mandatory', 'SeqJ', 'SeqJ1']);
      }
      if (bsubseq_j2) {
        ExSvr.add_err('C41', ['Not allowed', 'SeqJ', 'SeqJ2']);
      }
      if (b14b) {
        ExSvr.add_err('C41', ['Not allowed', 'SeqJ', '14B']);
      }
    } else if ('AVSF' == v12f || 'AVSO' == v12f) {
      if (bsubseq_j1) {
        ExSvr.add_err('C41', ['Not allowed', 'SeqJ', 'SeqJ1']);
      }
      if (!bsubseq_j2) {
        ExSvr.add_err('C41', ['Mandatory', 'SeqJ', 'SeqJ2']);
      }
      if (this.ver < '2016') {
        if (!b14b) {
          ExSvr.add_err('C41', ['Mandatory', 'SeqJ', '14B']);
        }
      }
    } else if ('DAVF' == v12f || 'DAVO' == v12f) {
      if (!bsubseq_j1) {
        ExSvr.add_err('C41', ['Mandatory', 'SeqJ', 'SeqJ1']);
      }
      if (!bsubseq_j2) {
        ExSvr.add_err('C41', ['Mandatory', 'SeqJ', 'SeqJ2']);
      }
      if (this.ver < '2016') {
        if (!b14b) {
          ExSvr.add_err('C41', ['Mandatory', 'SeqJ', '14B']);
        }
      }
    }
  } else {
    if (bseq_j) {
      ExSvr.add_err('C41', ['Not allowed', 'SeqJ']);
    }
  }
};

Ex.mfvr.rule042 = function (mt) {
  if ('824' == mt) {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var loop2 = ExSvr.getflds(['Loop2'], loop1[nd]);
      var ccy = null;
      for (var nd2 in loop2) {
        if (!Ex.isNode(loop2[nd2])) continue;
        var c = ExSvr.get_val(['F68A', 'Currency'], loop2[nd2])
        if (ccy == null) {
          ccy = c;
        } else if (!Ex.equals(ccy, c)) {
          ExSvr.add_err('C42', ['Must same CCY', 'F68A']);
        }
      }
    }
  }
};

Ex.mfvr.rule043 = function (mt) {
  if ('646' == mt) {
    if (ExSvr.exist(['SeqC', 'F32N'], null) || ExSvr.exist(['SeqC', 'F33N'], null)) {
    } else {
      ExSvr.add_err('C43', ['Either', 'F32N', 'F33N']);
    }
  }
};

Ex.mfvr.rule044 = function (mt) {
  if ('646' == mt) {
    if (ExSvr.exist(['SeqC', 'F32N'], null) && ExSvr.exist(['SeqC', 'F33N'], null)) {
      if (!ExSvr.exist(['SeqC', 'Choice_34PR'], null))
        ExSvr.add_err('C44', ['Mandatory', '34a']);
    }
  }
};

Ex.mfvr.rule045 = function (mt) {
  if ('646' == mt) {
    var v23 = ExSvr.get_val(['SeqA', 'F23'], null);
    if ('REPRINC' == v23 || 'PREPRINC' == v23) {
      if (!ExSvr.exist(['SeqC', 'F32N'], null)) {
        ExSvr.add_err('C45', ['Mandatory', 'F32N']);
      }

    }
  }
};

Ex.mfvr.rule046 = function (mt) {
  if ('646' == mt) {
    var v23 = ExSvr.get_val(['SeqA', 'F23'], null);
    if ('INT' == v23) {
      if (!ExSvr.exist(['SeqC', 'F33N'], null)) {
        ExSvr.add_err('C46', ['Mandatory', 'F33N']);
      }
    }
  }
};

Ex.mfvr.rule047 = function (mt) {
  if ('643' == mt) {
    var v23 = ExSvr.get_val(['SeqA', 'F23'], null);
    if ('LOAN/DRAWDOWN' == v23 || 'FINARR/DRAWDOWN' == v23) {
      if (ExSvr.exist(['SeqB'], null)) {
        ExSvr.add_err('C47', ['Not allow', 'SeqB']);
      }
    }
  }

};

Ex.mfvr.rule048 = function (mt) {
  if ('643' == mt) {
    var v23 = ExSvr.get_val(['SeqA', 'F23'], null);
    if ('LOAN/RENEWAL' == v23 || 'FINARR/RENEWAL' == v23) {
      if (!ExSvr.exist(['SeqB'], null)) {
        ExSvr.add_err('C48', ['Mandatory', 'SeqB']);
      }
    }
  }
};

Ex.mfvr.rule049 = function (mt) {
  if ('456' == mt) {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      if (ExSvr.exist(['F71B'], loop1[nd])) {
        var v33d = ExSvr.get_val(['F33D', 'Amount'], loop1[nd]);
        var v32 = null;
        if (ExSvr.exist(['Choice_32AB', 'F32A'], loop1[nd])) {
          v32 = ExSvr.get_val(['Choice_32AB', 'F32A', 'Amount'], loop1[nd]);
        } else {
          v32 = ExSvr.get_val(['Choice_32AB', 'F32B', 'Amount'], loop1[nd]);
        }
        if (Ex.equals(v33d, v32)) {
          ExSvr.add_err('C49', ['Must different', 'F33D', 'F32a']);
        }
      }
    }
  }
};

Ex.mfvr.rule050 = function (mt) {
  if (Ex.in_list(mt, ['540', '541', '542', '543'])) {
    if (ExSvr.exist(['SeqA', 'SeqA1', 'F36B'], null)) {
      var v22f = ExSvr.get_val(['SeqE', 'F22F', 'Qualifier'], null);
      if (v22f == 'SETR') {
        ExSvr.add_err('C50', ['Not allow', 'SeqE', 'F22F', ':SETR//PAIR DSS']);
      }
    }
  }
};

Ex.mfvr.rule051 = function (mt) {
  if ('643' == mt) {
    var v23 = ExSvr.get_val(['SeqA', 'F23'], null);
    if ('LOAN/DRAWDOWN' == v23 || 'LOAN/RENEWAL' == v23) {
      var loop1 = ExSvr.getflds(['SeqC'], null);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        if (!ExSvr.exist(['F31R'], loop1[nd])) {
          ExSvr.add_err('C51', ['Mandatory', 'SeqC', '31R']);
        }
      }
    }
  }
};

Ex.mfvr.rule052 = function (mt) {
  if ('361' == mt) {
    var v23 = ExSvr.get_val('SeqA/F23A/TypeOfSwap', null);
    var b32 = ExSvr.exist('SeqA/F32B', null);
    if (Ex.in_list(v23, ['CORRBUYER', 'CORRSELLER', 'VOLABUYER', 'VOLASELLER']) ) {
      if (b32) {
      ExSvr.add_err('C52', ['Not allowed', 'SeqA', '32B']);
      }
    } else {
      if (!b32) {
      ExSvr.add_err('C52', ['Mandatory', 'SeqA', '32B']);
      }
    }
  }
};

Ex.mfvr.rule053 = function (mt) {
  if ('643' == mt) {
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      if (ExSvr.exist(['F71C'], loop1[nd])) {
        if (!ExSvr.exist(['Choice_34PR'], loop1[nd])) {
          ExSvr.add_err('C53', ['Mandatory', 'SeqB', '34a']);
        }
      }
    }
  }
};

Ex.mfvr.rule054 = function (mt) {
  if ('644' == mt) {
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      if (ExSvr.exist(['F36'], loop1[nd]) || ExSvr.exist(['Choice_37ABCDEF'], loop1[nd])) {
      } else {
        ExSvr.add_err('C54', ['Mandatory', 'SeqB', '36 or 37a']);
      }
    }
  }
};

Ex.mfvr.rule055 = function (mt) {
  if ('644' == mt) {
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var v33 = ExSvr.get_val(['F33B', 'Currency'], loop1[nd]);
      var v34 = ExSvr.get_val(['Choice_34PR', '', 'Currency'], loop1[nd]);
      if (!Ex.equals(v33, v34)) {
        ExSvr.add_err('C55', ['Same CCY', '34PR', '34a']);
      }
    }
  }
};

Ex.mfvr.rule056 = function (mt) {
  if (this.ver < '2014') {
    return;
  }

  if (mt == '300') {
    Ex.mfvr.applyRule056ToMt300();
  } else if (mt == '305') {
    Ex.mfvr.applyRule056ToMt305();
  } else if (mt == '306') {
    Ex.mfvr.applyRule056ToMt306();
  } else if (mt == '360' || mt == '361') {
    var seq = mt == '360' ? 'SeqO' : 'SeqP';
    var fld = 'F17Z';
    var seqe_exist = ExSvr.exist(seq, null);
    if (!seqe_exist) {
      return;
    }
    var v17z = ExSvr.get_val([seq, fld], null);
    var f22q_exist = ExSvr.exist([seq, 'F22Q'], null);
    if (v17z == 'Y' && !f22q_exist) {
      ExSvr.add_err('C56', ['Mandatory', seq, '22Q']);
    }
  }
};

Ex.mfvr.applyRule056ToMt300 = function () {
  var seqe_exist = ExSvr.exist(['SeqE'], null);
  if (!seqe_exist) {
    return;
  }
  var v17z = ExSvr.get_val(['SeqE', 'F17Z'], null);
  var f22q_exist = ExSvr.exist(['SeqE', 'F22Q'], null);
  if (v17z == 'Y' && !f22q_exist) {
    ExSvr.add_err('C56', ['Mandatory', 'SeqE', '22Q']);
  }
}

Ex.mfvr.applyRule056ToMt305 = function () {
  var seqb_exist = ExSvr.exist(['SeqB'], null);
  if (!seqb_exist) {
    return;
  }
  var v17z = ExSvr.get_val(['SeqB', 'F17Z'], null);
  var f22q_exist = ExSvr.exist(['SeqB', 'F22Q'], null);
  if (v17z == 'Y' && !f22q_exist) {
    ExSvr.add_err('C56', ['Mandatory', 'SeqB', '22Q']);
  }
}

Ex.mfvr.applyRule056ToMt306 = function () {
  if (this.ver < '2015') {
    var seqk_exist = ExSvr.exist(['SeqK'], null);
    if (!seqk_exist) {
      return;
    }
    var v17z = ExSvr.get_val(['SeqK', 'F17Z'], null);
    var f22q_exist = ExSvr.exist(['SeqK', 'F22Q'], null);
    if (v17z == 'Y' && !f22q_exist) {
      ExSvr.add_err('C56', ['Mandatory', 'SeqK', '22Q']);
    }
  } else {
    var seqk_exist = ExSvr.exist(['SeqM'], null);
    if (!seqk_exist) {
      return;
    }
    var v17z = ExSvr.get_val(['SeqM', 'F17Z'], null);
    var f22q_exist = ExSvr.exist(['SeqM', 'F22Q'], null);
    if (v17z == 'Y' && !f22q_exist) {
      ExSvr.add_err('C56', ['Mandatory', 'SeqM', '22Q']);
    }
  }
}

Ex.mfvr.rule057 = function (mt) {
  if ('646' == mt) {
    var loop1 = ExSvr.getflds(['SeqB'], null);
    var chk = false;
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      if (ExSvr.exist(['F34N'], loop1[nd])) {
        chk = true;
        if (!ExSvr.exist(['F31F'], loop1[nd])) {
          ExSvr.add_err('C57', ['Mandatory', 'SeqB', '31F']);
        }
      }
    }
    if (chk) {
      if (!ExSvr.exist(['SeqC', 'F33N'], null)) {
        ExSvr.add_err('C57', ['Mandatory', 'SeqC', '33N']);
      }
    }
  }
};

Ex.mfvr.rule058 = function (mt) {
  // @see rule058_059

  if ('646' == mt) {
    var amt_19 = Ex.to_num(ExSvr.get_val(['SeqC', 'F33N', 'Amount'], null));
    var loop1 = ExSvr.getflds(['SeqB'], null);
    var total_32b = 0;
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var amt_32b = Ex.to_num(ExSvr.get_val(['F34N', 'Amount'], loop1[nd]));
      total_32b += amt_32b;
    }
    if (total_32b != 0 && amt_19 != total_32b) {
      ExSvr.add_err('C58', ['Not equal.', 'F33N F34N', amt_19, total_32b]);
    }
  }
};

Ex.mfvr.rule059 = function (mt) {
  if ('321' == mt) {
    var v22f = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'TLDE\']', 'Indicator'], null);
    var v98 = ExSvr.exist(['SeqB', 'Loop5', 'F98A[Qualifier=\'INTR\']', 'Indicator'], null);
    var v19_sett = ExSvr.exist(['SeqB', 'Loop6', 'F19A[Qualifier=\'SETT\']', 'Indicator'], null);
    var v19_rodi = ExSvr.exist(['SeqB', 'Loop6', 'F19A[Qualifier=\'RODI\']', 'Indicator'], null);
    var v19_cint = ExSvr.exist(['SeqB', 'Loop6', 'F19A[Qualifier=\'CINT\']', 'Indicator'], null);
    var v19_nint = ExSvr.exist(['SeqB', 'Loop6', 'F19A[Qualifier=\'NINT\']', 'Indicator'], null);
    if ('CONF' == v22f) {
      if (!v98) {
        ExSvr.add_err('C59', ['SeqB', 'F98A']);
      }
      if (v19_sett) {
        ExSvr.add_err('C59', ['SeqB', 'F19A::SETT']);
      }
      if (v19_rodi) {
        ExSvr.add_err('C59', ['SeqB', 'F19A::RODI']);
      }
      if (v19_cint) {
        ExSvr.add_err('C59', ['SeqB', 'F19A::CINT']);
      }
      if (!v19_nint) {
        ExSvr.add_err('C59', ['SeqB', 'F19A::NINT']);
      }
    } else if ('ROLL' == v22f) {
      if (!v98) {
        ExSvr.add_err('C59', ['SeqB', 'F98A::INTR']);
      }
      if (!v19_sett) {
        ExSvr.add_err('C59', ['SeqB', 'F19A::SETT']);
      }
      if (!v19_nint) {
        ExSvr.add_err('C59', ['SeqB', 'F19A::NINT']);
      }
    } else if ('MATU' == v22f) {
      if (v98) {
        ExSvr.add_err('C59', ['SeqB', 'F98A::INTR']);
      }
      if (!v19_sett) {
        ExSvr.add_err('C59', ['SeqB', 'F19A::SETT']);
      }
      if (v19_rodi) {
        ExSvr.add_err('C59', ['SeqB', 'F19A::RODI']);
      }
      if (v19_nint) {
        ExSvr.add_err('C59', ['SeqB', 'F19A::NINT']);
      }
    }
  }
  if ('800' == mt) {
    var v34b_amt = ExSvr.get_val(['F34B', 'Amount'], null);
    var v32a_amt = ExSvr.get_val(['F32A', 'Amount'], null);
    if (!Ex.equals(v34b_amt, v32a_amt)) {
      ExSvr.add_err('C59', ['Not same', 'F34B', 'F32A']);
    }
  }
};

Ex.mfvr.rule058_059 = function (mt) {
  if (this.ver >= '2017' && Ex.in_list(mt, ['300', '305'])) {
    return;
  }

  var v77d, path, errMsg, codeIndex;
  if ('300' == mt) {
    path = ['SeqA', 'F77D'];
  } else if ('304' == mt) {
    path = ['SeqC', 'F72'];
  } else if ('305' == mt) {
    path = ['SeqA', 'F72'];
  }

  // F72 of MT 305, F77D of MT 300
  var v7x = ExSvr.get_val(path, null);
  if (!v7x) {
    return;
  }
  var lines = v7x.split('\n');
  var length = lines.length;
  if (length == 0) {
    return;
  }

  for (var i = 0; i < length; i++) {
    if (lines[i].indexOf('/VALD/') >= 0) {
      if (lines[i].indexOf('/VALD/') > 0 || i != 0) {
        errMsg = ['"/VALD/" must appear in the first six characters of the first line'].concat(path);
        ExSvr.add_err('C58', errMsg);
      }

      codeIndex = lines[i].indexOf('/VALD/');
      var date = lines[i].substring(codeIndex + 6);
      if (!ExSvr.checkDate('YYYYMMDD', date)) {
        errMsg = ['"/VALD" must be followed by a date expressed as YYYYMMDD and the end of line separator'].concat(path).concat(date);
        ExSvr.add_err('C58', errMsg);
      } else {
        var remainStr = lines[i].substring(codeIndex + 14);
      }
    }
    if (lines[i].indexOf('/SETC/') >= 0) {
      if (lines[i].indexOf('/SETC/') > 0 || i != 1) {
        errMsg = ['"/SETC/" is only allowed in the first six characters of the second line'].concat(path);
        ExSvr.add_err('C59', errMsg);
      }

      codeIndex = lines[i].indexOf('/SETC/');
      var ccy = lines[i].substring(codeIndex + 6);
      if (!ExSvr.checkCcyCode(ccy)) {
        errMsg = ['"/SETC/" must be followed by a valid ISO 4217 currency code and the end of line separator'].concat(path).concat(ccy);
        ExSvr.add_err('C59', errMsg);
      }
    }

    if ('300' == mt || '304' == mt) {
      if (lines[i].indexOf('/SRCE/') > 0 || (lines[i].indexOf('/SRCE/') == 0 && i != 2)) {
        errMsg = ['"/SRCE/" is only allowed in the first six characters of the third line'].concat(path);
        ExSvr.add_err('C59', errMsg);
      }
    }
  }

  if (length == 1) {
    if (lines[0].indexOf('/VALD/') == 0) {
      errMsg = ['The second line must be present and contain the code SETC'].concat(path);
      ExSvr.add_err('C59', errMsg);
    } else if (lines[0].indexOf('/SETC/') == 0) {
      errMsg = ['The first six characters of the first line must be "/VALD/"'].concat(path);
      ExSvr.add_err('C59', errMsg);
    }
  } else if (length >= 2) {
    if (lines[0].indexOf('/VALD/') == 0 && lines[1].indexOf('/SETC/') != 0) {
      errMsg = ['The second line must be present and contain the code SETC'].concat(path);
      ExSvr.add_err('C59', errMsg);
    }
    if (lines[1].indexOf('/SETC/') == 0 && lines[0].indexOf('/VALD/') != 0) {
      errMsg = ['The first six characters of the first line must be "/VALD/"'].concat(path);
      ExSvr.add_err('C59', errMsg);
    }
    if ('300' == mt) {
      if (length >= 3) {
        if (lines[2].indexOf('/SRCE/') == 0 && lines[1].indexOf('/SETC/') != 0) {
          errMsg = ['The second line must be present and contain the code SETC'].concat(path);
          ExSvr.add_err('C59', errMsg);
        }
      }
    }
  }
};

Ex.mfvr.rule060 = function (mt) {
  if ('307' == mt) {
    var v22 = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'CRTR\']', 'Indicator'], null);
    var v22_aper = ExSvr.exist(['SeqA', 'Loop2', 'F22H[Qualifier=\'APER\']', 'Indicator'], null);
    var v22_negr = ExSvr.exist(['SeqA', 'Loop2', 'F22H[Qualifier=\'NEGR\']', 'Indicator'], null);
    if ('ASET' == v22) {
      if (v22_aper) ExSvr.add_err('C60', ['Not allow', 'F22H:APER']);
    } else if ('AFWD' == v22) {
      if (!v22_aper) ExSvr.add_err('C60', ['Mandatory', 'F22H:APER']);
      if (!v22_negr) ExSvr.add_err('C60', ['Mandatory', 'F22H:APER']);
    }
  }
  if ('321' == mt) {
    var v22 = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'BLOC\']', 'Indicator'], null);
    var v99 = ExSvr.exist(['SeqA', 'Loop3', 'F99B'], null);
    ExSvr.debug('v22:' + v22 + ', v99:' + v99);
    if (Ex.isEmpty(v22)) {
      if (v99)
        ExSvr.add_err('C60', ['Not allow', 'SeqA', 'F99B']);
    } else {
      if (!v99)
        ExSvr.add_err('C60', ['Not allow', 'SeqA', 'F99B']);
    }
  }
  if ('643' == mt) {
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var v32p = ExSvr.get_val(['F32P', 'Currency'], loop1[nd]);
      var v33 = ExSvr.get_val(['Choice_33PR', '*', 'Currency'], loop1[nd]);
      var v34 = ExSvr.get_val(['Choice_34PR', '*', 'Currency'], loop1[nd]);
      if (ExSvr.equals(v32p, v33) && ExSvr.equals(v32p, v34)) {
      } else {
        ExSvr.add_err('C60', ['Not same', 'SeqB', '34a']);
      }
    }
  }
};

Ex.mfvr.rule061 = function (mt) {
  if ('307' == mt) {
    var v22 = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'APER\']', 'Indicator'], null);
    var v22_pafi = ExSvr.exist(['SeqA', 'Loop2', 'F22H[Qualifier=\'PAFI\']', 'Indicator'], null);
    if ('OPEF' == v22 || Ex.isEmpty(v22)) {
      if (v22_pafi) ExSvr.add_err('C61', ['Not allow', 'F22H:PAFI']);
    } else if ('NOPE' == v22) {
      if (!v22_pafi) ExSvr.add_err('C61', ['Mandatory', 'F22H:PAFI']);
    }
  }
  if ('321' == mt) {
    var v22 = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'TLDE\']', 'Indicator'], null);
    if ('MATU' == v22) {
      var v99 = ExSvr.exist(['SeqA', 'Loop3', 'F98A[Qualifier=\'LDFP\']'], null);
      if (v99) ExSvr.add_err('C61', ['Not allow', 'SeqA', 'F98A']);
    }
  }
  if ('643' == mt) {
    var loop1 = ExSvr.getflds(['SeqC'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var v32 = ExSvr.get_val(['F32B', 'Currency'], loop1[nd]);
      var v33 = ExSvr.get_val(['F33B', 'Currency'], loop1[nd]);
      if (!Ex.equals(v32, v33)) {
        ExSvr.add_err('C61', ['Not same', '32B', '33B']);
      }
    }
  }

};

Ex.mfvr.rule062 = function (mt) {
  if ('307' == mt) {
    var v22 = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'APER\']', 'Indicator'], null);
    var vc = ExSvr.exist(['SeqC'], null);
    if ('OPEF' == v22 || Ex.isEmpty(v22)) {
      if (vc) ExSvr.add_err('C62', ['Not allow', 'SeqC']);
    } else if ('NOPE' == v22) {
      if (!vc) ExSvr.add_err('C62', ['Mandatory', 'SeqC']);
    }
  }
  if ('321' == mt) {
    var v98 = ExSvr.exist(['SeqB', 'Loop5', 'F98A[Qualifier=\'LDFP\']'], null);
    var v99 = ExSvr.exist(['SeqB', 'Loop5', 'F99B[Qualifier=\'DAAC\']'], null);
    if (v98) {
      if (!v99) ExSvr.add_err('C62', ['Mandatory', 'SeqB', 'F99B']);
    } else {
      if (v99) ExSvr.add_err('C62', ['Not allow', 'SeqB', 'F99B']);
    }
  }
};

Ex.mfvr.rule063 = function (mt) {
  if ('307' == mt) {
    var v22 = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'CRTR\']', 'Indicator'], null);
    if ('ASET' == v22) {
      var vc = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'NEGR\']', 'Indicator'], null);
      if (vc == 'UNKN') ExSvr.add_err('C63', ['Not allow', 'SeqA 22H::NEGR//UNKN']);
    } else if ('AFWD' == v22) {
      // APER//NOPE PAFI//FINA
    }
  }
  if ('321' == mt) {
    //@author Max Qi @date 2016/01/29 Temporarily disable the rule C63 for MT321
    //var v99b = ExSvr.exist(['SeqA', 'Loop2', 'F99B'], null);
    //if (v99b) {
    //	ExSvr.add_err('C63', 'TBD all qualifiers must present.');
    //}
  }
};

Ex.mfvr.rule064 = function (mt) {
  if ('307' == mt) {
    var v22_crtr = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'CRTR\']', 'Indicator'], null);
    var v22_aper = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'APER\']', 'Indicator'], null);
    var v22_pafi = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'PAFI\']', 'Indicator'], null);
    var v22_negr = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'NEGR\']', 'Indicator'], null);
    var vd = ExSvr.exist(['SeqD'], null);
    if ('AFWD' == v22_crtr && 'NOPE' == v22_aper && 'FINA' == v22_pafi && 'NETC' == v22_negr) {
      if (!vd) {
        ExSvr.add_err('C64', ['Mandatory', 'SeqD']);
      }
    } else if ('AFWD' == v22_crtr && 'NOPE' == v22_aper && 'FINA' == v22_pafi && 'GRSC' == v22_negr) {
      if (vd) ExSvr.add_err('C64', ['Not allow', 'SeqD']);
    } else if ('AFWD' == v22_crtr && 'NOPE' == v22_aper && 'PAIN' == v22_pafi && ('NETC' == v22_negr || 'GRSC' == v22_negr || 'UNKN' == v22_negr)) {
      if (vd) ExSvr.add_err('C64', ['Not allow', 'SeqD']);
    } else if ('ASET' == v22_crtr) {
    }
  }
};

Ex.mfvr.rule065 = function (mt) {
  if ('567' == mt) {
    var v22_crtr = ExSvr.get_val(['SeqA', 'Loop2', 'F23G[Qualifier=\'CRTR\']', 'Indicator'], null);
    var v22_aper = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'APER\']', 'Indicator'], null);
    var v22_pafi = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'PAFI\']', 'Indicator'], null);
    var v22_negr = ExSvr.get_val(['SeqA', 'Loop2', 'F22H[Qualifier=\'NEGR\']', 'Indicator'], null);
    var vd = ExSvr.exist(['SeqD'], null);
    if ('AFWD' == v22_crtr && 'NOPE' == v22_aper && 'FINA' == v22_pafi && 'NETC' == v22_negr) {
      if (!vd) {
        ExSvr.add_err('C64', ['Mandatory', 'SeqD']);
      }
    } else if ('AFWD' == v22_crtr && 'NOPE' == v22_aper && 'FINA' == v22_pafi && 'NETC' == v22_negr) {
    } else if ('ASET' == v22_crtr) {
      if (vd) ExSvr.add_err('C64', ['Not allow', 'SeqD']);
    }
  }
};

Ex.mfvr.rule066 = function (mt) {
  if ('643' == mt) {
    var loopC = ExSvr.getflds(['SeqC'], null);
    var loopB = ExSvr.getflds(['SeqB'], null);
    if (loopC.length < loopB.length) {
      ExSvr.add_err('C66', ['Loop size', 'SeqC', 'SeqB']);
    }
  }
};

Ex.mfvr.rule067 = function (mt) {
  if ('516' == mt) {
    if (ExSvr.exist(['F83C']) && ExSvr.exist(['SeqA', 'Choice_87ACD'], null)) {
      ExSvr.add_err('C67', ['Not both', '83C', 'SeqA, 87a']);
    }
  }
};

Ex.mfvr.rule068 = function (mt) {
  if ('202.COV' == mt || '205.COV' == mt) {
    if (ExSvr.exist(['SeqB', 'Choice_56ACD'], null)) {
      if (!ExSvr.exist(['SeqB', 'Choice_57ABCD'], null))
        ExSvr.add_err('C68', ['Mandatory', 'SeqB, 57a']);
    }
  }
};

Ex.mfvr.rule069 = function (mt) {
  if ('507' == mt) {
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      if (!ExSvr.exist(['SeqB1'], loop1[nd])) continue;
      var v22h = ExSvr.get_val(['F22H[Qualifier=\'COLL\']', 'Indicator'], loop1[nd]);
      var b1a = ExSvr.exist(['SeqB1a'], loop1[nd]);
      var b1b = ExSvr.exist(['SeqB1b'], loop1[nd]);
      if ('CCOL' == v22h) {
        if (b1a) ExSvr.add_err('C69', ['Not allow', 'SeqB1a']);
        if (!b1b) ExSvr.add_err('C69', ['Mandatory', 'SeqB1b']);
      } else if ('SCOL' == v22h) {
        if (b1b) ExSvr.add_err('C69', ['Not allow', 'SeqB1b']);
        if (!b1a) ExSvr.add_err('C69', ['Mandatory', 'SeqB1a']);
      }
    }
  }
};

Ex.mfvr.rule070 = function (mt) {
  if ('507' == mt) {
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var b1 = ExSvr.exist(['SeqB1'], loop1[nd]);
      var v25d_8c = ExSvr.get_val(['F25D[Qualifier=\'COLL\']', 'DataSourceScheme'], loop1[nd]);
      var v25d_st = ExSvr.get_val(['F25D[Qualifier=\'COLL\']', 'StatusCode'], loop1[nd]);
      var v22h = ExSvr.get_val(['F22H[Qualifier=\'COLL\']', 'Indicator'], loop1[nd]);
      if (Ex.isEmpty(v25d_8c)) {
        if (v22h == 'BCOL') {
          if (b1) ExSvr.add_err('C70', ['Not allow', 'SeqB1']);
        }
      } else {
        if (v25d_st == 'ACCT' && v22h == 'BCOL') {
          if (b1) ExSvr.add_err('C70', ['Not allow', 'SeqB1']);
        } else if (v25d_st == 'ACCT' && v22h == 'CCOL') {
          if (!b1) ExSvr.add_err('C70', ['Mandatory', 'SeqB1']);
        } else if (v25d_st == 'ACCT' && v22h == 'SCOL') {
          if (!b1) ExSvr.add_err('C70', ['Mandatory', 'SeqB1']);
        } else if (v25d_st == 'REJT') {
          if (b1) ExSvr.add_err('C70', ['Not allow', 'SeqB1']);
        }
      }
    }
  }
};

Ex.mfvr.rule071 = function (mt) {
  if ('707' == mt) {
    if (this.ver >= '2018') return; // depeated in MFVR 2018
    var loop1 = ExSvr.getflds(['Loop1', 'F79'], null);
    if (loop1.length > 2) {
      ExSvr.add_err('C71', ['no more than twice', 'F79']);
    }
    return;
  }
  if (mt == '528' || mt == '529') {
    if (this.ver >= '1105') return; // depeated in MFVR 2011
  }
  if ('535' == mt) {
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var b1 = ExSvr.exist(['SeqB1'], loop1[nd]);
      var v93b_1 = ExSvr.get_val(['F93B[Qualifier=\'AGGR\']', 'Indicator'], loop1[nd]);
      var v93b_2 = ExSvr.get_val(['F93B[Qualifier=\'AGGR\']', 'Indicator'], loop1[nd]);
      if (v93b_1 == 'FAMT' && v93b_2 == 'AMOR') {

      } else {
        ExSvr.add_err('C71', ['Invaild', 'SeqB1', 'F93B::AGGR']);
      }
    }
    return;
  }
  if ('541' == mt) {
    var loop1 = ExSvr.getflds(['SeqC'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var loop16 = ExSvr.getflds(['Loop16'], loop1[nd]);
      var ary = [];
      for (var nd6 in loop16) {
        if (!Ex.isNode(loop16[nd6])) continue;
        var v36b = ExSvr.get_val(['F36B[Qualifier=\'SETT\']', 'QuantityTypeCode'], loop16[nd6]);
        if (v36b != null) {
          ary.push(v36b);
        }
      }
      if (ary.length == 1) {
      } else if (ary.length == 2) {
        if (ary[0] == 'FAMT' && ary[1] == 'AMOR') {

        } else if (ary[1] == 'FAMT' && ary[0] == 'AMOR') {

        } else {
          ExSvr.add_err('C71', ['Invaild QuantityTypeCode', 'SeqC', 'F36B::SETT']);
        }
      } else {
        ExSvr.add_err('C71', ['Invaild', 'SeqC', 'F36B::SETT', 'more than twice']);
      }
    }
    return;
  }
  ExSvr.debug('[TBD] C71: ' + mt);
};

Ex.mfvr.rule072 = function (mt) {
  ExSvr.debug('[TBD] C72: ' + mt);
};

Ex.mfvr.rule073 = function (mt) {
  ExSvr.debug('[TBD] C73: ' + mt);
};

Ex.mfvr.rule074 = function (mt) {
  ExSvr.debug('[TBD] C74: ' + mt);
};

Ex.mfvr.rule075 = function (mt) {
  if ('104' == mt) {
    var v23e_a = ExSvr.get_val(['SeqA', 'F23E', 'Type'], null);
    var b_need_23e_b = (Ex.isEmpty(v23e_a) || 'RFDD' == v23e_a);
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var b1 = ExSvr.exist(['F23E'], loop1[nd]);
      if (b_need_23e_b && !b1) {
        ExSvr.add_err('C75', ['Mandatory', 'SeqB', 'F23E']);
      } else if (!b_need_23e_b && b1) {
        ExSvr.add_err('C75', ['Not allow', 'SeqB', 'F23E']);
      }
    }
  }
};

Ex.mfvr.rule076 = function (mt) {
  if ('104' == mt) {
    var b50ak_a = ExSvr.exist(['SeqA', 'Choice_50AK'], null);
    var loop1 = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var b1 = ExSvr.exist(['Choice_50AK'], loop1[nd]);
      if (!b50ak_a && !b1) {
        ExSvr.add_err('C76', ['Mandatory', 'SeqB', 'F50ak']);
      } else if (b50ak_a && b1) {
        ExSvr.add_err('C76', ['Not allow', 'SeqB', 'F50ak']);
      }
    }
  }
};

Ex.mfvr.rule077 = function (mt) {
  if ('730' == mt) {
    if (ExSvr.exist(['F25'], null) && ExSvr.exist(['Choice_57AD'], null)) {
      ExSvr.add_err('C77', ['Not both', 'F25', 'F57a']);
    }
  }
  if ('768' == mt || '769' == mt) {
    if (ExSvr.exist(['F25'], null) && ExSvr.exist(['Choice_57ABD'], null)) {
      ExSvr.add_err('C77', ['Not both', 'F25', 'F57a']);
    }
  }
};

Ex.mfvr.rule078 = function (mt) {
  if ('730' == mt) {
    if (ExSvr.exist(['Choice_32BD', 'F32D'], null) && ExSvr.exist(['Choice_57AD'], null)) {
      ExSvr.add_err('C78', ['Not both', 'F32D', 'F57a']);
    }
  }
  if ('768' == mt || '769' == mt) {
    if (ExSvr.exist(['Choice_32BD', 'F32D'], null) && ExSvr.exist(['Choice_57ABD'], null)) {
      ExSvr.add_err('C78', ['Not both', 'F32D', 'F57a']);
    }
  }
};

Ex.mfvr.rule079 = function (mt) {
  if ('305' == mt) {
    if (ExSvr.exist(['SeqA', 'F31C'], null)) {
      if ('A' != ExSvr.get_val(['SeqA', 'F23', 'Code3'], null)) {
        ExSvr.add_err('C79', ['Not allowed', 'SeqA', 'F31C']);
      }
    }
  } else if ('601' == mt) {
    if (ExSvr.exist(['F31C'], null)) {
      if ('A' != ExSvr.get_val(['F23', 'Code3'], null)) {
        ExSvr.add_err('C79', ['Not allowed', 'F31C']);
      }
    }
  }
};

Ex.mfvr.rule080 = function (mt) {
  if ('608' == mt) {
    var code = ExSvr.get_val(['Choice_60FM', '*', 'Code3'], null);
    var v62fm_code = ExSvr.get_val(['Choice_62FM', '*', 'Code3'], null);
    if (!Ex.equals(code, v62fm_code)) {
      ExSvr.add_err('C80', ['Must be same', 'F62a']);
    }
    if (ExSvr.exist(['F64'], null)) {
      var v64_code = ExSvr.get_val(['F64', 'Code3'], null);
      if (!Ex.equals(code, v64_code)) {
        ExSvr.add_err('C80', ['Must be same', 'F64']);
      }
    }
    var loop1 = ExSvr.getflds(['Loop2'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var v65_code = ExSvr.get_val(['F65', 'Code3'], loop1[nd]);
      if (!Ex.equals(code, v65_code)) {
        ExSvr.add_err('C80', ['Must be same', 'F65']);
      }
    }
  }
};

Ex.mfvr.rule081 = function (mt) {
  if (mt == '103') {
    if (ExSvr.exist(['Choice_56ACD'])) {
      if (!ExSvr.exist(['Choice_57ABCD'])) {
        ExSvr.add_err('C81', ['Mandatory', 'F57a']);
      }
    }
  } else if (mt == '103.STP') {
    if (ExSvr.exist(['F56A'])) {
      if (!ExSvr.exist(['F57A'])) {
        ExSvr.add_err('C81', ['Mandatory', 'F57a']);
      }
    }
  } else if (Ex.in_list(mt, ['202', '205'])) {
    if (ExSvr.exist(['Choice_56AD'])) {
      if (!ExSvr.exist(['Choice_57ABD'])) {
        ExSvr.add_err('C81', ['Mandatory', 'F57a']);
      }
    }
  } else if (mt == '203') {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      if (ExSvr.exist(['Choice_56AD'], loop1[nd])) {
        if (!ExSvr.exist(['Choice_57ABD'], loop1[nd])) {
          ExSvr.add_err('C81', ['Mandatory', 'F57a']);
        }
      }
    }
  } else if (Ex.in_list(mt, ['202.COV', '205.COV'])) {
    if (this.ver >= '2021') {
        if (ExSvr.exist(['Choice_56AD'])) {
          if (!ExSvr.exist(['Choice_57ABD'])) {
            ExSvr.add_err('C81', ['Mandatory', 'F57a']);
          }
        }
    } else {
    if (ExSvr.exist(['SeqA', 'Choice_56AD'])) {
      if (!ExSvr.exist(['SeqA', 'Choice_57ABD'])) {
        ExSvr.add_err('C81', ['SeqA', 'F57a']);
      }
    }
    }
  } else if (mt == '582') {
    // depeated in 2011
    if (this.ver >= '1105') return;
    if (ExSvr.exist(['SeqB', 'Choice_56AD'])) {
      if (!ExSvr.exist(['SeqB', 'Choice_57ABD'])) {
        ExSvr.add_err('C81', ['Mandatory', 'F57a']);
      }
    }
  } else if ('760' == mt) {
   var b23f = ExSvr.exist('/Choice_57AD');
   if (b23f ) {
     if (!ExSvr.exist('/Choice_56AD') ) {
      ExSvr.add_err('C81', ['Mandatory', 'SeqB/F56a']);
     }
   }
  } else if ('785' == mt) {
    var b23f = ExSvr.exist('/Choice_57AD');
    if (b23f ) {
      if (!ExSvr.exist('/Choice_56AD') )
        ExSvr.add_err('C81', ['Mandatory', 'F56a']);
    }
  }
};

Ex.mfvr.rule082 = function (mt) {
  if ('104' == mt || '107' == mt) {
    var v23 = ExSvr.get_val(['SeqA', 'F23E'], null);
    if ('RTND' == v23) {
      if (!ExSvr.exist(['SeqA', 'F72'], null)) {
        ExSvr.add_err('C82', ['Mandatory', 'F72']);
      }
    } else {
      if (ExSvr.exist(['SeqA', 'F72'], null)) {
        ExSvr.add_err('C82', ['Not allow', 'F72']);
      }
    }
  }
};

Ex.mfvr.rule083 = function (mt) {
  if ('935' == mt) {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var b23 = ExSvr.exist(['F23'], loop1[nd]);
      var b25 = ExSvr.exist(['F25'], loop1[nd]);
      if (b23 && b25) {
        ExSvr.add_err('C83', ['Not both', 'F23', 'F25']);
      } else if (!b23 && !b25) {
        ExSvr.add_err('C83', ['At least one', 'F23', 'F25']);
      }
    }

  }
};

Ex.mfvr.rule084 = function (mt) {
  if ('303' == mt) {
    var v22 = ExSvr.get_val(['SeqA', 'F22A'], null);
    if ('AMNA' == v22 || 'AMND' == v22 || 'CANC' == v22) {
      if (!ExSvr.exist(['SeqA', 'F21'], null)) {
        ExSvr.add_err('C84', ['Mandatory', 'SeqA', 'F21']);
      }
    }
  }
};

Ex.mfvr.rule085 = function (mt) {
  if ('609' == mt) {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var v23 = ExSvr.get_val(['F23'], loop1[nd]);
      if ('SPOTS' == v23 || 'FORWARDS' == v23) {
        if (ExSvr.exist(['Choice_68BC', 'F68C'], loop1[nd])) {
          ExSvr.add_err('C85', ['Not allow', 'F68C']);
        }
      }
    }
  }
};

Ex.mfvr.rule086 = function (mt) {
  if ('609' == mt) {
    var loop1 = ExSvr.getflds(['Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var v23 = ExSvr.get_val(['F23'], loop1[nd]);
      if ('OPTIONS' == v23) {
        if (ExSvr.exist(['Choice_68BC', 'F68B'], loop1[nd])) {
          ExSvr.add_err('C86', ['Not allow', 'F68B']);
        }
      }
    }
  }
};

Ex.mfvr.rule087 = function (mt) {
  if (this.ver < '2017') {
    return;
  }

  if (mt == '300') {
    var v17f = ExSvr.get_val(['SeqA', 'F17F'], null);
    var v17o = ExSvr.get_val(['SeqA', 'F17O'], null);

    // C7
    if (v17f == 'Y' && !v17o) {
      ExSvr.add_err('C87', ['Mandatory', 'SeqA', 'F17O']);
    } else if ((!v17f || v17f == 'N') && v17o) {
      ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F17O']);
    }

    // C8
    // then fields 32E, 30U and 14S are ...
    // and field 21A is ...
    var b32e = ExSvr.exist(['SeqA', 'F32E'], null);
    var b30u = ExSvr.exist(['SeqA', 'F30U'], null);
    var b14s = ExSvr.exist(['SeqA', 'LoopSeqA', 'F14S'], null);
    var b21a = ExSvr.exist(['SeqA', 'F21A'], null);
    var b26k = ExSvr.exist(['SeqA', 'F26K'], null);
    if (v17o == 'Y') {
      if (!b32e) {
        ExSvr.add_err('C87', ['Mandatory', 'SeqA', 'F32E']);
      }
      if (!b30u) {
        ExSvr.add_err('C87', ['Mandatory', 'SeqA', 'F30U']);
      }
      if (!b14s) {
        ExSvr.add_err('C87', ['Mandatory', 'SeqA', 'F14S']);
      }
      if (b21a) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F21A']);
      }
    } else if (v17o == 'N') {
      if (b32e) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F32E']);
      }
      if (b30u) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F30U']);
      }
      if (b14s) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F14S']);
      }
      if (!b21a) {
        ExSvr.add_err('C87', ['Mandatory', 'SeqA', 'F21A']);
      }
      if (b26k) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F26K']);
      }
    } else if (!v17o) {
      if (b32e) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F32E']);
      }
      if (b30u) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F30U']);
      }
      if (b14s) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F14S']);
      }
      if (b21a) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F21A']);
      }
      if (b26k) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F26K']);
      }
    }
  } else if (mt == '305') {
    var v17f = ExSvr.get_val(['SeqA', 'F17F'], null);
    var b32e = ExSvr.exist(['SeqA', 'F32E'], null);
    var b26k = ExSvr.exist(['SeqA', 'F26K'], null);
    var b14s = ExSvr.exist(['SeqA', 'Loop1', 'F14S'], null);
    if (v17f == 'Y') {
      if (!b32e) {
        ExSvr.add_err('C87', ['Mandatory', 'SeqA', 'F32E']);
      }
      if (!b14s) {
        ExSvr.add_err('C87', ['Mandatory', 'SeqA', 'F14S']);
      }
    } else if (!v17f || v17f == 'N') {
      if (b32e) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F32E']);
      }
      if (b26k) {
        ExSvr.add_err('C87', ['Not Allowed', 'SeqA', 'F26K']);
      }
    }
  }
};

Ex.mfvr.rule088 = function (mt) {
  if ('305' == mt) {
    var v32b = ExSvr.get_val(['SeqA', 'F32B', 'Currency'], null);
    var v23 = ExSvr.get_val(['SeqA', 'F23', 'Currency'], null);
    if (!Ex.equals(v23, v32b)) {
      ExSvr.add_err('C88', ['Not same', 'SeqA', 'F23', 'Currency']);
    }
  }
};

Ex.mfvr.rule089 = function (mt) {
  if (Ex.in_list(mt, ['600', '601', '604', '605', '606', '607', '608', '609'])) {

  } else if (mt == '620') {

  }
};

Ex.mfvr.rule090 = function (mt) {
  if (Ex.in_list(mt, ['700', '710', '720', '740'])) {
    var b42_ad = ExSvr.exist(['Choice_42AD'], null);
    var b42_m = ExSvr.exist(['F42M'], null);
    var b42_p = ExSvr.exist(['F42P'], null);
    if (ExSvr.exist(['F42C'], null)) {
      if ( b42_m || b42_p ){
        ExSvr.add_err('C90B', ['F42a']);
      } else if ( !b42_ad) {
        ExSvr.add_err('C90A', ['F42a']);
      } else return;
    } else if (b42_ad) {
      ExSvr.add_err('C90A', ['F42a']);
    } else if (b42_m) {
      if (b42_p) ExSvr.add_err('C90B', ['F42a']);
    }
  }
};

Ex.mfvr.rule091 = function (mt) {
  if ('608' == mt) {
    if (ExSvr.exist(['F61', 'Code4'], null)) {
      ExSvr.add_err('C91', ['not allow', 'F61', 'sub4']);
    }
  }
};

Ex.mfvr.rule092 = function (mt) {
  if ('303' == mt) {
    var v94a = ExSvr.get_val(['SeqA', 'F94A'], null);
    var b_b = ExSvr.exist(['SeqB'], null);
    var b_c = ExSvr.exist(['SeqC'], null);
    if ('FORX' == v94a) {
      if (b_c) ExSvr.add_err('C92', ['Not Allowed', 'SeqC']);
      if (!b_b) ExSvr.add_err('C92', ['Mandatory', 'SeqB']);
    } else if ('FXOP' == v94a) {
      if (b_b) ExSvr.add_err('C92', ['Not Allowed', 'SeqB']);
      if (!b_c) ExSvr.add_err('C92', ['Mandatory', 'SeqC']);
    }
  }
};

Ex.mfvr.rule093 = function (mt) {
  if ('600' == mt) {
    var b_b = ExSvr.exist(['SeqB'], null);
    var b_c = ExSvr.exist(['SeqC'], null);
    if (!b_b && !b_c) ExSvr.add_err('C93', ['At least one', 'SeqB', 'SeqC']);
    if (b_b && b_c) ExSvr.add_err('C93', ['Not both', 'SeqB', 'SeqC']);
  }
};

Ex.mfvr.rule094 = function (mt) {
  // the paths of USER HEADER BLOCK (Block 3) in XML format and JSON format are different
  if (Ex.isJsonMode()) { // use JSON format
    if ('104' == mt) {
      var v119 = ExSvr.get_val(['B3', '119'], null);
      var v23e = ExSvr.get_val(['SeqA', 'F23E', 'Type'], null);
      if ('RFDD' == v23e) {
        if (!v119) {
          ExSvr.add_err('C94', ['Mandatory', 'Block3', '119']);
          return;
        }
        // v119 must = RFDD
        if ('RFDD' != v119) {
          ExSvr.add_err('C94', ['Must equal to RFDD', 'Block3', '119']);
        }
      } else {
        // not allow v119
        if (v119) {
          ExSvr.add_err('C94', ['Not Allowed', 'Block3', '119']);
        }
      }
    }

    if (Ex.in_list(mt, ['503', '504', '505', '506', '507'])) {
      // must v119 == 22a::COLA//xxxx
    }
  } else { // use XML format
    if ('104' == mt) {
      var v119;
      var b119 = false;
      if (ExSvr.exist(['USER'], null)) {
        var infoLoop = ExSvr.getflds(['USER', 'INFO'], null);
        for (var i in infoLoop) {
          if (!Ex.isNode(infoLoop[i]))
            continue;
          var code = ExSvr.get_val(['CODE'], infoLoop[i]);
          if ('119' == code) {
            v119 = ExSvr.get_val(['DATA'], infoLoop[i]);
            b119 = true;
            break;
          }
        }
      }
      var v23e = ExSvr.get_val(['SeqA', 'F23E'], null);
      if ('RFDD' == v23e) {
        if (!b119) {
          ExSvr.add_err('C94', ['Mandatory', '119']);
          return;
        }
        // v119 must = RFDD
        if ('RFDD' != v119) {
          ExSvr.add_err('C94', ['Must equal to RFDD', '119']);
        }
      } else {
        // not allow v119
        if (b119) {
          ExSvr.add_err('C94', ['Not Allowed', '119']);
        }
      }
    }

    if (Ex.in_list(mt, ['503', '504', '505', '506', '507'])) {
      // must v119 == 22a::COLA//xxxx
    }
  }

};

Ex.mfvr.rule095 = function (mt) {
  if ('303' == mt) {
    var v23 = ExSvr.get_val(['SeqC', 'F23B'], null);
    var b30x = ExSvr.exist(['SeqC', 'F30X'], null);
    if ('CLAM' == v23 || 'PTAM' == v23) {
      if (!b30x) ExSvr.add_err('C95', ['Mandatory', 'SeqC', 'F30X']);
    } else if ('CLEU' == v23 || 'PTEU' == v233) {
      if (b30x) ExSvr.add_err('C95', ['Not allow', 'SeqC', 'F30X']);
    }
  }
};

Ex.mfvr.rule096 = function (mt) {
  if ('104' == mt) {
    var v23e = null;
    if (Ex.isJsonMode()) {
      v23e = ExSvr.get_val(['SeqA', 'F23E', 'Type'], null);
    } else {
      v23e = ExSvr.get_val(['SeqA', 'F23E'], null);
    }
    var b_c = ExSvr.exist(['SeqC'], null);
    if ('RFDD' == v23e) {
      if (ExSvr.exist(['SeqB', 'F21E'], null)) {
        ExSvr.add_err('C96', ['Not allow', 'SeqB', 'F21E']);
      }
      // 50a, 52a 71F, 71G
      if (ExSvr.exist(['SeqB', 'F71G'], null)) {
        ExSvr.add_err('C96', ['Not allow', 'SeqB', 'F71G']);
      }
      if (b_c) ExSvr.add_err('C96', ['Not allow', 'SeqC']);
    } else {
      if (ExSvr.exist(['SeqA', 'F21R'], null)) {
        ExSvr.add_err('C96', ['Not allow', 'SeqA', 'F21R']);
      }
      if (!b_c) ExSvr.add_err('C96', ['Mandatory', 'SeqC']);
    }
  }
};

Ex.mfvr.rule097 = function (mt) {
  if ('303' == mt) {
    var v22 = ExSvr.get_val(['SeqA', 'F22A'], null);
    if (Ex.in_list(v22, ['AMNA', 'AMND', 'DUPL', 'NEWT'])) {
      var b30x = ExSvr.exist(['SeqD'], null);
      if (!b30x) ExSvr.add_err('C97', ['Mandatory', 'SeqD']);
    }
  } else if ('504' == mt) {
    var c2a = ExSvr.exist(['SeqC', 'SeqC1', 'SeqC1a'], null);
    var d3 = ExSvr.exist(['SeqD'], null);
    if (!c2a) {
      if (!d3) ExSvr.add_err('C99', ['Mandatory', 'SeqD']);
    }
  } else if ('505' == mt) {
    var c2a = ExSvr.exist(['SeqB', 'SeqB1', 'SeqB1a'], null);
    var d3 = ExSvr.exist(['SeqC'], null);
    if (!c2a) {
      if (!d3) ExSvr.add_err('C99', ['Mandatory', 'SeqD']);
    }
  }
};

Ex.mfvr.rule098 = function (mt) {
  if ('306' == mt) {
    if (ExSvr.exist('//SeqI/F15I', null)) {
      // other field in SeqI mandatory
      var count = ExSvr.getflds('//SeqI/*', null);
      if (count.length == 1) {
        ExSvr.add_err('C98', ['Invalid', 'SeqI']);
      }
    }
  } else if ('304' == mt) {
    var count = ExSvr.getflds('//SeqD/*', null);
    if (count.length == 1) {
      ExSvr.add_err('C98', ['Invalid', 'SeqD']);
    }
  } else if ('305' == mt) {
    var loop_seqb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop_seqb) {
      if (!Ex.isNode(loop_seqb[nd])) {
        continue;
      }
      if (ExSvr.get_size(loop_seqb[nd]) < 2) {
        ExSvr.add_err('C98', ['Invalid', 'SeqB']);
      }
    }
  } else if (Ex.in_list(mt, ['320', '330', '620'])) {
    if (ExSvr.exist('//SeqH/F15H', null)) {
      var count = ExSvr.getflds('//SeqH/*', null);
      if (count.length == 1) {
        ExSvr.add_err('C98', ['Invalid', 'SeqH']);
      }
    }
  } else if ('340' == mt) {
    var count = ExSvr.getflds('//SeqE/*', null);
    if (count.length == 1) {
      ExSvr.add_err('C98', ['Invalid', 'SeqE']);
    }
  } else if ('360' == mt) {
    var count = ExSvr.getflds('//SeqO/*', null);
    if (count.length == 1) {
      ExSvr.add_err('C98', ['Invalid', 'SeqO']);
    }
  } else if ('361' == mt) {
    var count = ExSvr.getflds('//SeqP/*', null);
    if (count.length == 1) {
      ExSvr.add_err('C98', ['Invalid', 'SeqP']);
    }
  }else if ('767' == mt) {
    var count = ExSvr.getflds('//SeqC/*', null);
       // ExSvr.debug('C98 ' + count.length);
    if (count.length == 1) {
      ExSvr.add_err('C98', ['Invalid', 'SeqC']);
    }
  }
};

Ex.mfvr.rule099 = function (mt) {
  if ('303' == mt) {
    var v94a = ExSvr.get_val(['SeqA', 'F94A'], null);
    var loop_seqd = ExSvr.getflds(['SeqD'], null);
    for (var nd in loop_seqd) {
      var d3_exist = ExSvr.exist(['F34B'], loop_seqd[nd]);
      if ('FORX' == v94a) {
        if (d3_exist) {
          ExSvr.add_err('C99', ['Not allowed', 'SeqD3']);
        }
      } else if ('FXOP' == v94a) {
        if (!d3_exist) {
          ExSvr.add_err('C99', ['Mandatory', 'SeqD3']);
        }
      }
    }
  } else if ('504' == mt) {
    var c2a = ExSvr.exist(['SeqC', 'SeqC2', 'SeqC2a'], null);
    var d3 = ExSvr.exist(['SeqE'], null);
    if (!c2a) {
      if (!d3) ExSvr.add_err('C99', ['Mandatory', 'SeqE']);
    }
  } else if ('505' == mt) {
    var c2a = ExSvr.exist(['SeqB', 'SeqB2', 'SeqB2a'], null);
    var d3 = ExSvr.exist(['SeqD'], null);
    if (!c2a) {
      if (!d3) ExSvr.add_err('C99', ['Mandatory', 'SeqD']);
    }
  }
};
