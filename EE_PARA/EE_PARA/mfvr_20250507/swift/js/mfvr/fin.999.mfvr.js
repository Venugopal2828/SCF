function check_mfvr() {
  Ex.check('999', []);
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('999', ['U12','U13']);
  }
}