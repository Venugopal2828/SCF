function check_mfvr() {
  Ex.check('202.COV', ['003', '005', '008', '068', '081', '276','T50B', 'T56', 'T73']);
  if (Ex.mfvr.ver >= '2018') {
    Ex.check('202', ['U12','U13']);
  }
  if (Ex.mfvr.ver >= '2019') {
    Ex.check('202', ['T80']);
  }
}