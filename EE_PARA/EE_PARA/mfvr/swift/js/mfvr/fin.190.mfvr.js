function check_mfvr() {
  Ex.check('190', ['003', '005']);
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('190', ['U12','U13']);
  }
}