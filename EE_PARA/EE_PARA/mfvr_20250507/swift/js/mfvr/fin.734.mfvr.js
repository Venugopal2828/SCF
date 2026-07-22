function check_mfvr() {
  Ex.check('734', ['002', '003', '005', '017', '276']);
   if (Ex.mfvr.ver >= '2021') {
      Ex.check('734', ['T60']);
    }
}