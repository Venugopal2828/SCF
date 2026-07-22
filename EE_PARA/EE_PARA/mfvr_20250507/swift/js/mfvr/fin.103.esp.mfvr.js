function check_mfvr() {
  Ex.check('103', ['T31', '002', '003', '005', '008', '081', '149', '150', '151',
    '157', '163', '167', '175', '197', '198', '201', '202',
    '203', '204', '205', '206', '207', '209', '210', '212',
    '213', '215', '216', '217', '218', '244', '245', '246',
    '276', 'T54', 'T55', 'T56', 'T73']);
  if (Ex.mfvr.ver >= '2018') {
    Ex.check('103', ['U12','U13']);
  }
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('103', ['T80']);
  }

  // addtion rule
  chk_f100();
}
function chk_f100() {
  var v100 = Ex.to_num(ExSvr.get_val(['F100']));
  ExSvr.debug('F100 ' + v100 );
}
function check_amt_103() {
  // optional usage rule: 33B * 36 + 71G - 71F = 32A
  // diff ccy.
  var v32a = Ex.to_num(ExSvr.get_val(['F32A', 'Amount']));
  var v33b = Ex.to_num(ExSvr.get_val(['F33B', 'Amount']));
  ExSvr.debug('amt ' + v32a + ', ' + v33b);
  var amt = 0;
  var b = ExSvr.exist(['F36']);
  if (b) {
    amt = v33b * Ex.to_num(ExSvr.get_val(['F36']))
  } else {
    if (v33b > 0)
      amt = v33b;
    else
      amt = v32a;
  }
  var v71g = Ex.to_num(ExSvr.get_val(['F71G', 'Amount']));
  var v71f = Ex.to_num(ExSvr.get_val(['F71F', 'Amount']));
  var diff = amt + v71g - v71f - v32a;
  ExSvr.debug('rule diff ' + diff);
  if (diff > 10000 || diff < 0) {
    ExSvr.add_err('U00', [
      '33B*36+71G-71F=32A',
      'diff amt ' + diff + '= ' + v33b + '+' + v71g + '-' + v71f + '-' + v32a
    ]);
  }

}