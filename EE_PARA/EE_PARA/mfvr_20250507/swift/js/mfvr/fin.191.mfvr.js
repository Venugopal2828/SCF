function check_mfvr() {
  Ex.check('191', ['003', '005']);
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('191', ['U12','U13']);
  }
}