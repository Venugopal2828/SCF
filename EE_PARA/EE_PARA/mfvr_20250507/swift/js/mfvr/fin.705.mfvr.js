function check_mfvr() {
  Ex.check('705', ['003', '005', '106']);
    if (Ex.mfvr.ver < '2018') {
      Ex.check('705', ['105']);
    } else {
      // Ex.check('705', ['T75']);
    }

}