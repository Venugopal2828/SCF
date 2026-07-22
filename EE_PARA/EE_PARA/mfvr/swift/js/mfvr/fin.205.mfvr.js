function check_mfvr() {
  Ex.check('205', ['003', '005', '008', '081', 'T50B','276']);
  if (Ex.mfvr.ver >= '2018') {
    Ex.check('205', ['U12','U13']);
  }
}