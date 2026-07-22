function check_mfvr() {
  var bic = ExSvr.get_val(['B2', 'BIC'], null);
  if (bic.startsWith('TRCKCHZZ') || bic.startsWith('TRCKCHZ0')) {
    Ex.check('196', ['U12','U13','SRP','T18']);
  } else if (Ex.mfvr.ver >= '2019') {
    Ex.check('196', ['U12','U13','031','T18']);
  } else {
    Ex.check('196', ['031','T18']);
  }
}