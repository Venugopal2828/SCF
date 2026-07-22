function check_mfvr(ver) {
  if (ver)
    Ex.mfvr.ver = ver;
  ExSvr.debug(' this ' + Ex.mfvr.ver + ', param ' + ver);
  Ex.check('camt.026.001.01', ['D00000', 'D00001',
    'InstructedAmountAndRequestedExecutionDateRule',
    'InterbankSettlementAmountAndDateRule']);

  // Ex.checkRule('camt.026.001.01','AnyBIC', '//Assgnmt/Assgne');
  Ex.checkRule('camt.026.001.01', 'CurrencyAmount', '//Undrlyg/InstdAmt');

};