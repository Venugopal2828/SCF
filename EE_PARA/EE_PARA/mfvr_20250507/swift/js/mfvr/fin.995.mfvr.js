function check_mfvr() {
  Ex.check('995', ['031','T18']);
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('995', ['U12','U13']);
  }
}