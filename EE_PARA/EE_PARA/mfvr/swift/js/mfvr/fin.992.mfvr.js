function check_mfvr() {
  Ex.check('992', ['025', 'T18']);
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('992', ['U12','U13']);
  }
}