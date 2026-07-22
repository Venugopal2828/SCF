function check_mfvr() {
  Ex.check('700', ['003', '005', '090', '106', '181']);
  if (Ex.mfvr.ver < '2018') {
    Ex.check('700', ['105']);
  } else {
    Ex.check('700', ['T75']);
  }

}