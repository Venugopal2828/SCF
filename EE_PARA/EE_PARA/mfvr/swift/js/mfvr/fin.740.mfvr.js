function check_mfvr() {
  Ex.check('740', ['003', '005', '090', '184']);
  if (Ex.mfvr.ver < '2018') {
    Ex.check('740', ['105']);
  }
}