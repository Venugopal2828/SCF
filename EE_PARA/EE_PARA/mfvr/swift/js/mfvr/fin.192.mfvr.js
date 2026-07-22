function check_mfvr() {
  Ex.check('192', ['025', 'T18']);
  var bic = ExSvr.get_val(['B2', 'BIC'], null);
  if (bic.startsWith('TRCKCHZZ') || bic.startsWith('TRCKCHZ0')) {
    Ex.check('192', ['U12','U13','SRP']);
  } else if (Ex.mfvr.ver >= '2019') {
    Ex.check('192', ['U12','U13']);
  }
}