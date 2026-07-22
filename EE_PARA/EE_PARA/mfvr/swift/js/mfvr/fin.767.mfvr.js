function check_mfvr() {
  if (Ex.mfvr.ver < '2018') return;
  if (Ex.mfvr.ver >= '2021') {
    Ex.check('767', ['003','005','012','019','098','197','202','T75']);
  } else {
  Ex.check('767', ['T75']);
  }
}