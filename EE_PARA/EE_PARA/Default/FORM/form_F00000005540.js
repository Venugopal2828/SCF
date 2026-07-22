  var SettFld = DV.getFieldValue("MT103_DISTRBN");
  if (SettFld == "Single Settlement") {
      DV.appendField("PYMT_ITT_PAYMENT_ADVICE");
  }