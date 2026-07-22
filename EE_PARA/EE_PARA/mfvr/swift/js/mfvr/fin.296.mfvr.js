function check_mfvr() {
  Ex.check('296', ['031','T18']);
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('296', ['U12','U13']);
  }
}