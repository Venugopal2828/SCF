function check_mfvr() {
  Ex.check('720', ['003', '005', '006', '090', '106', '181']);
  if (Ex.mfvr.ver < '2018') {
    Ex.check('720', ['105']);
  } else {
    Ex.check('720', ['T75']);
  }
}