function check_mfvr() {
  Ex.check('202', ['003', '005', '008', '081', 'T50B','276']);
  if (Ex.mfvr.ver >= '2018') {
    Ex.check('202', ['U12','U13']);
  }
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('202', ['T80']);
  }
}