function check_mfvr() {
  Ex.check('292', ['025', 'T18']);
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('292', ['U12','U13']);
  }
}