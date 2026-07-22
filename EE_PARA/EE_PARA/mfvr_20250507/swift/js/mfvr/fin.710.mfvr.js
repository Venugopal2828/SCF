function check_mfvr() {
  Ex.check('710', ['003', '005', '006', '090', '106', '181']);
  if (Ex.mfvr.ver < '2018') {
    Ex.check('710', ['105']);
  } else {
    Ex.check('710', ['T75']);
  }
}