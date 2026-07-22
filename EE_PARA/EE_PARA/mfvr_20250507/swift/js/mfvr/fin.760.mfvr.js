function check_mfvr() {
  if (Ex.mfvr.ver >= '2021') {
    Ex.check('760', ['003','005','016','017','018','019','020','021','033','081','181','197','201','202','203','T75', 'T73']);
  } else {
    Ex.check('760', ['181']);
  }
  if (Ex.mfvr.ver >= '2023') {
  if (ExSvr.exist('/F44J/Narrative')) {
    var v0 = ExSvr.get_val('/F44J/Narrative' );
    if (v0.substring(0, 1) != '/') {
    ExSvr.add_err('T31', ['Bad F44J/Narrative', v0]);
    }
  }
  if (ExSvr.exist('SeqC/F44J/Narrative')) {
    var v1 = ExSvr.get_val('SeqC/F44J/Narrative' );
    if (v1.substring(0, 1) != '/') {
    ExSvr.add_err('T31', ['Bad SeqC/F44J/Narrative', v1]);
    }
  }
  }
}