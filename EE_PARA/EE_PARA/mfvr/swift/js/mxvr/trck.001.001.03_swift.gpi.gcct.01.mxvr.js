ExSvr.require('mfvr.js');
ExSvr.require('mxvr.js');

function check_mfvr() {
  ExSvr.validCcy();
  // ExSvr.validBic();
  Mx.chk_country();
  Mx.chk_iban();

  var envelope =  ExSvr.getRoot();
  var txsts = String(ExSvr.get_val('TrckrStsAndTx/TxSts/Sts'));
  var rsncd = ExSvr.exist('TrckrStsAndTx/TxSts/StsRsn/Rsn/Cd') ? String(ExSvr.get_val('TrckrStsAndTx/TxSts/StsRsn/Rsn/Cd')) : '';
  var pmtsc = ''+ExSvr.get_val('TrckrStsAndTx/Tx/PmtScnro');
  // ExSvr.debug('' + txsts + ' ' + rsncd);
  //gCCT_Status Reason G002 G003 G004_Status ACCC RJCT_Settlement Information Rule
  if (Ex.in_list(txsts, ['ACCC','RJCT']) || Ex.in_list(rsncd, ['G002','G003', 'G004']) ) {
    if (ExSvr.exist('TrckrStsAndTx/Tx/SttlmInf') ){
      ExSvr.add_err("gCCT_Status_SttlmInf_Rule", ['TxSts:'+txsts, 'StsRsn:'+rsncd]);
    }
    if (ExSvr.exist('TrckrStsAndTx/Tx/InstdAgt') ){
      ExSvr.add_err("gCCT_Status_InstdAgt_Rule", ['TxSts:'+txsts, 'StsRsn:'+rsncd]);
    }
    if (ExSvr.exist('TrckrStsAndTx/Tx/ChrgBr') ){
      ExSvr.add_err("gCCT_Status_ChrgBr_Rule", ['TxSts:'+txsts, 'StsRsn:'+rsncd]);
    }
  }
  if (txsts == 'RJCT' || Ex.in_list(rsncd, ['G002','G003', 'G004']) ) {
    if (ExSvr.exist('TrckrStsAndTx/Tx/XchgRateData') ){
      ExSvr.add_err("gCCT_Status_XchgRateData_Rule", ['TxSts:'+txsts, 'StsRsn:'+rsncd]);
    }
    if (ExSvr.exist('TrckrStsAndTx/Tx/ChrgsInf') ){
      ExSvr.add_err("gCCT_Status_ChrgsInf_Rule", ['TxSts:'+txsts, 'StsRsn:'+rsncd]);
    }
  }
  if (ExSvr.exist('TrckrStsAndTx/Tx/TrckrData')) {
    if (Ex.in_list(txsts, ['ACSP','RJCT'])) {
    ExSvr.add_err("gCCT_StatusACSPRJCT_TrackerData_Rule", ['TxSts:'+txsts]);
    }
  } else {
    if ('ACCC' == txsts) {
      ExSvr.add_err("gCCT_StatusACCC_TrackerData_Rule", ['TxSts:'+txsts]);
    }
  }
  // R4
  if (rsncd == 'G004' && 'RCCT' == pmtsc ) {
      ExSvr.add_err("gCCT_StatusReasonG004_PaymentScenarioRCCT_Rule", ['TxSts:'+txsts, 'StsRsn:'+rsncd]);
  }
  if ( (rsncd == 'G000' || rsncd == 'G001') && 'ACSP' == txsts ) {
    if (!ExSvr.exist('TrckrStsAndTx/Tx/ChrgBr') ) {
      ExSvr.add_err("gCCT_StatusReason_ChargeBearer_Rule", ['TxSts:'+txsts, 'StsRsn:'+rsncd]);
    }
    if (ExSvr.exist('TrckrStsAndTx/TxSts/RjctRtrRsn')) {
      if ('CCTR' == pmtsc) {
        ExSvr.add_err("gCCT_PaymentScenarioCCTR_RejectReturnReason_Rule",null);
      }
    } else {
      if ('RCCT' == pmtsc) {
        ExSvr.add_err("gCCT_PaymentScenarioRCCT_RejectReturnReason_Rule",null);
      }
    }
  }
  // R10
  if (ExSvr.exist('TrckrStsAndTx/Tx/InstdAgt/FinInstnId/ClrSysMmbId') && ExSvr.exist('TrckrStsAndTx/Tx/SttlmInf/SttlmMtd') ){
    var mtd = ''+ExSvr.get_val('TrckrStsAndTx/Tx/SttlmInf/SttlmMtd');
    if (Ex.in_list(mtd, ['INGA','INDA','COVE']) ){
        ExSvr.add_err("gCCT_SettlementMethod_InstdAgtClrSysMmbId_Rule",mtd);
    }
  }
  // R11
  if (ExSvr.exist('TrckrStsAndTx/Tx/XchgRateData') ){
    var ccy2 = ''+ExSvr.get_val('TrckrStsAndTx/Tx/XchgRateData/TrgtCcy');
    var ccy1 = ''+ExSvr.get_val('TrckrStsAndTx/Tx/XchgRateData/SrcCcy');
    if (ccy1 == ccy2) {
      ExSvr.add_err("gCCT_XchgRateData_Currency_Rule",['TrgtCcy:'+ccy2, 'SrcCcy:'+ccy1]);
    }
    if (ExSvr.exist('TrckrStsAndTx/Tx/IntrBkSttlmAmt') ){
      var ccy0 = ''+ExSvr.get_val('TrckrStsAndTx/Tx/IntrBkSttlmAmt/@Ccy');
      if (ccy0 != ccy2) {
        ExSvr.add_err("gCCT_InterbankSettlementAmount_Target_Currency_Rule",['TrgtCcy:'+ccy2, 'IntrBkSttlmAmt:'+ccy0]);
      }
    }
    if (ExSvr.exist('TrckrStsAndTx/Tx/TrckrData/ConfdAmt') ){
      var ccy0 = ''+ExSvr.get_val('TrckrStsAndTx/Tx/TrckrData/ConfdAmt/@Ccy');
      if (ccy0 != ccy2) {
        ExSvr.add_err("gCCT_Target_Currency_ConfdAmt_Rule",['TrgtCcy:'+ccy2, 'ConfdAmt:'+ccy0]);
      }
    }
  }
  // R13
  if (ExSvr.exist('TrckrStsAndTx/Tx/ChrgBr') ){
    var br = ''+ExSvr.get_val('TrckrStsAndTx/Tx/ChrgBr');
    if (ExSvr.exist('TrckrStsAndTx/Tx/ChrgsInf') ){
      if ('DEBT' == br) {
        ExSvr.add_err("gCCT_ChrgBr_DEBT_ChrgsInf_Rule", '');
      }
    } else {
      if ('CRED' == br) {
        ExSvr.add_err("gCCT_ChrgBr_CRED_ChrgsInf_Rule", '');
      }
    }
  }
  // R16
  var hasTxDt = ExSvr.exist('TrckrStsAndTx/TxSts/Dt');
  if (Ex.in_list(rsncd, ['G002','G003', 'G004'])) {
    if (hasTxDt) {
    ExSvr.add_err("gCCT_StatusReason_Date_Rule", 'StsRsn:'+rsncd);
    }
  }
  // R23
  if (Ex.in_list(rsncd, ['G000','G001']) && !hasTxDt) {
    ExSvr.add_err("gCCT_StatusReason_G000_Date_Rule", 'StsRsn:'+rsncd);
  }
  // R17
  if ('ACCC' == txsts && hasTxDt) {
    ExSvr.add_err("gCCT_Status_ACCC_Date_Rule", ['TxSts:'+txsts]);
  }
  if ('RJCT' == txsts && !hasTxDt) {
    ExSvr.add_err("gCCT_Status_RJCT_Date_Rule", ['TxSts:'+txsts]);
  }
  if ('ACSP' == txsts && ''==rsncd) {
    ExSvr.add_err("gCCT_Status_ACSP_StatusReason_Rule", ['TxSts:'+txsts]);
  }
  if (('ACCC' == txsts || 'RJCT' == txsts) && ''!=rsncd) {
    ExSvr.add_err("gCCT_Status_ACCCRJCT_StatusReason_Rule", ['TxSts:'+txsts]);
  }
  if (('RJCT' == txsts) && !ExSvr.exist('TrckrStsAndTx/TxSts/RjctRtrRsn') ) {
    ExSvr.add_err("gCCT_Status_RJCT_RjctRtrRsn_Rule", '');
  }
  // R22
  if (('ACCC' == txsts) && ExSvr.exist('TrckrStsAndTx/Tx/IntrBkSttlmAmt') ) {
    ExSvr.add_err("gCCT_Status_ACCC_IntrBkSttlmAmt_Rule", '');
  }
  if (Ex.in_list(rsncd, ['G000','G001']) && !ExSvr.exist('TrckrStsAndTx/Tx/SttlmInf') ) {
    ExSvr.add_err("gCCT_StatusReason_G000_SttlmInf_Rule", 'StsRsn:'+rsncd);
  }
  // R24
  if ('RCCT' == pmtsc && 'COVE'==ExSvr.get_val('TrckrStsAndTx/Tx/SttlmInf/SttlmMtd') ) {
        ExSvr.add_err("gCCT_PaymentScenarioRCCT_COVE_Rule",null);
  }
  if (rsncd == 'G000' && !ExSvr.exist('TrckrStsAndTx/Tx/InstdAgt') ) {
    ExSvr.add_err("gCCT_StatusReason_G000_InstdAgt_Rule", 'StsRsn:'+rsncd);
  }
  if (Ex.in_list(rsncd, ['G000','G001']) && !ExSvr.exist('TrckrStsAndTx/Tx/IntrBkSttlmAmt') ) {
    ExSvr.add_err("gCCT_StatusReason_G000_IntrBkSttlmAmt_Rule", 'StsRsn:'+rsncd);
  }
  // R28,29,30,31,32, 34 35 38 ignore
  // R33
  if (ExSvr.exist('TrckrStsAndTx/Tx/SttlmInf/ClrSys') && 'CLRG'!=ExSvr.get_val('TrckrStsAndTx/Tx/SttlmInf/SttlmMtd') ) {
    ExSvr.add_err("gCCT_SttlmMtd_CLRG_ClrSys_Rule",null);
  }
  // R36
  if (('ACCC' == txsts) && ExSvr.exist('TrckrStsAndTx/TxSts/RjctRtrRsn') ) {
    ExSvr.add_err("gCCT_Status_ACCC_RjctRtrRsn_Rule", '');
  }
  if (('ACSP' == txsts) && Ex.in_list(rsncd, ['G002','G003', 'G004']) && ExSvr.exist('TrckrStsAndTx/TxSts/RjctRtrRsn') ) {
    ExSvr.add_err("gCCT_Status_ACSP_RjctRtrRsn_Rule", '');
  }
  // R39
  if (ExSvr.exist('TrckrStsAndTx/Tx/InstdAgt') ){
    Mx.chk_eitherError('TrckrStsAndTx/Tx/InstdAgt/FinInstnId/BICFI', 'TrckrStsAndTx/Tx/InstdAgt/FinInstnId/ClrSysMmbId', null, 'gCCT_InstdAgt_Rule')
  }
  if (ExSvr.exist('TrckrStsAndTx/Tx/ChrgsInf') ){
    var flds = ExSvr.getflds('TrckrStsAndTx/Tx/ChrgsInf', null);
    // ExSvr.debug(flds);
    for (var idx in flds) {
      var fld = flds[idx];
      // ExSvr.debug(fld);
      // ExSvr.debug('t:'+ (typeof idx ) + '  v ' + idx);
      // ExSvr.debug('---3333--'  + ExSvr.exist('Agt/FinInstnId/Nm', fld)  + ' ' + ExSvr.get_val('Agt/FinInstnId/BICFI', fld));
      Mx.chk_eitherError('Agt/FinInstnId/BICFI', 'Agt/FinInstnId/Nm', fld, 'gCCT_BICFI_Name_Rule')
    }
  }
}