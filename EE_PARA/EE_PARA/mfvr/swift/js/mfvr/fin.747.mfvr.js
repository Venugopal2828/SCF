function check_mfvr() {
  Ex.check('747', ['002', '003', '012', '015']);
  if (Ex.mfvr.ver < '2018') {
    Ex.check('747', ['105']);
  }
}