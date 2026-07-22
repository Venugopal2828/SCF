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
  if(ExSvr.exist('TxInfAndSts/StsRsnInf/Rsn/Cd')&&ExSvr.get_val('TxInfAndSts/StsRsnInf/Rsn/Cd')=='NARR'){
    Mx.chk_rightError('TxInfAndSts/StsRsnInf/Rsn/Cd','TxInfAndSts/StsRsnInf/AddtlInf',null,'X00077');
  }
  //CBPR_From_To_Instructing_Instructed_Agent_BIC_1_FormalRule++++++++CBPR_From_To_Instructing_Instructed_Agent_BIC_2_FormalRule
  Mx.chk_FromTo('TxInfAndSts/InstgAgt','TxInfAndSts/InstdAgt',null,'CBPR_From_To_Instructing_Instructed_Agent');
  if(ExSvr.exist('TxInfAndSts/TxSts')&&ExSvr.get_val('TxInfAndSts/TxSts')=='RJCT'){
    //CBPR_Transaction_Status_Reject_Effective_Sett_Date_FormalRule
    Mx.chk_eitherError('TxInfAndSts/TxSts','TxInfAndSts/FctvIntrBkSttlmDt',null,'CBPR_Transaction_Status_Reject_Effective_Sett_Date_FormalRule');
    //CBPR_Transaction_Status_Reject_Reason_FormalRule
    Mx.chk_rightError('TxInfAndSts/TxSts','TxInfAndSts/StsRsnInf/Rsn',null,'CBPR_Transaction_Status_Reject_Reason_FormalRule');
  }
  //CBPR_Original_Instruction_Identification_FormalRule
  if(ExSvr.exist('TxInfAndSts/OrgnlInstrId')){
    var OrgnlInstrId=ExSvr.get_val('TxInfAndSts/OrgnlInstrId');
    Mx.chk_Slash(OrgnlInstrId,'CBPR_Original_Instruction_Identification_FormalRule');
  }
  //CBPR_Party_Name_Postal_Address_FormalRule
  var Orgtr='TxInfAndSts/StsRsnInf/Orgtr';
  Mx.chk_rightError(Orgtr+'/PstlAdr', Orgtr+'/Nm',null,'CBPR_Agent_Name_Postal_Address_FormalRule');
  //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
  Mx.chk_TwnNmAndCtry(Orgtr+'/PstlAdr',null);
  //CBPR_Party_Name_Any_BIC_FormalRule
  Mx.chk_nonError(Orgtr+'/Id/OrgId/AnyBIC',Orgtr+'/Nm',Orgtr,null,'CBPR_Party_Name_Any_BIC_FormalRule');
}