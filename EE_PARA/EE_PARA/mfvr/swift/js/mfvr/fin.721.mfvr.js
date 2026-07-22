function check_mfvr() {
  if (Ex.mfvr.ver >= '2018') {
    Ex.check('721', ['T75']);
  }
}