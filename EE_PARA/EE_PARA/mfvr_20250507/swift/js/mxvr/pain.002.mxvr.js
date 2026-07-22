ExSvr.require('mfvr.js');
ExSvr.require('mxvr.js');

function check_mfvr() {
  ExSvr.validCcy();
  // ExSvr.validBic();
  Mx.chk_country();
  Mx.chk_iban();

  var envelope =  ExSvr.getRoot();
  //H00001
  Mx.chk_rightError('AppHdr/CpyDplct','AppHdr/Rltd',envelope,'H00001');
  //X00077
  if(ExSvr.exist('OrgnlPmtInfAndSts/TxInfAndSts/StsRsnInf/Rsn/Cd')&&ExSvr.get_val('OrgnlPmtInfAndSts/TxInfAndSts/StsRsnInf/Rsn/Cd')=='NARR'){
    Mx.chk_rightError('OrgnlPmtInfAndSts/TxInfAndSts/StsRsnInf/Rsn/Cd','OrgnlPmtInfAndSts/TxInfAndSts/StsRsnInf/AddtlInf',null,'X00077');
  }
  //CBPR_Transaction_Status_Reject_Reason_FormalRule
  if(ExSvr.exist('OrgnlPmtInfAndSts/TxInfAndSts/TxSts')&&ExSvr.get_val('OrgnlPmtInfAndSts/TxInfAndSts/TxSts')=='RJCT'){
    Mx.chk_rightError('OrgnlPmtInfAndSts/TxInfAndSts/TxSts','OrgnlPmtInfAndSts/TxInfAndSts/StsRsnInf/Rsn',null,'CBPR_Transaction_Status_Reject_Reason_FormalRule');
  }
  //CBPR_Originator_Option_1_FormalRule
  var Orgtr='OrgnlPmtInfAndSts/TxInfAndSts/StsRsnInf/Orgtr';
  Mx.chk_nonError(Orgtr+'/AnyBIC',Orgtr+'/Nm',Orgtr,null,'CBPR_Originator_Option_1_FormalRule');
  //CBPR_Originator_Option_2_FormalRule
  Mx.chk_rightError('OrgnlPmtInfAndSts/TxInfAndSts/StsRsnInf/Orgtr/PstlAdr','OrgnlPmtInfAndSts/TxInfAndSts/StsRsnInf/Orgtr/Nm',null,'CBPR_Originator_Option_2_FormalRule');
  //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
  Mx.chk_TwnNmAndCtry('OrgnlPmtInfAndSts/TxInfAndSts/StsRsnInf/Orgtr/PstlAdr',null);
}