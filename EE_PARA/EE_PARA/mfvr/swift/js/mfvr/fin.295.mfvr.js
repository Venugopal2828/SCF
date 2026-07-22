function check_mfvr() {
  Ex.check('295', ['003', '031','T18']);
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('295', ['U12','U13']);
  }
}