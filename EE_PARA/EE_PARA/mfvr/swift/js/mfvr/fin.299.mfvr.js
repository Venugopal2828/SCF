function check_mfvr() {
  Ex.check('299', ['003']);
  var bic = ExSvr.get_val(['B2', 'BIC'], null);
  if (bic.startsWith('TRCKCHZZ') || bic.startsWith('TRCKCHZ0')) {
      // Ex.check('103', ['U12','U13']);
    Ex.check('299', ['U12','U13','GPI']);
  } else if (Ex.mfvr.ver >= '2019') {
    Ex.check('299', ['U12','U13']);
  }
}