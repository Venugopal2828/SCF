function check_mfvr() {
  Ex.check('195', ['003', '031','T18']);
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('195', ['U12','U13']);
  }
}