function check_mfvr() {
  Ex.check('996', ['031','T18']);
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('996', ['U12','U13']);
  }
}