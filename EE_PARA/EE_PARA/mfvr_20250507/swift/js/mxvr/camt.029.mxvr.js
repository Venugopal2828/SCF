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
  //CBPR_From_To_Assigner_Assignee_BIC_1_FormalRule++++++++CBPR_From_To_Assigner_Assignee_BIC_2_FormalRule
  Mx.chk_FromTo('Assgnmt/Assgnr/Agt','Assgnmt/Assgne/Agt',null,'CBPR_From_To_Assigner_Assignee');
  //CBPR_Cancellation_Reason_FormalRule
  if(ExSvr.exist('Sts/Conf')&&ExSvr.get_val('Sts/Conf')=='RJCR'){
    Mx.chk_rightError('Sts/Conf','CxlDtls/TxInfAndSts/CxlStsRsnInf/Rsn',null,'CBPR_Cancellation_Reason_FormalRule');
  }
  //CBPR_Cancellation_Status_Identification_FormalRule
  var CxlStsId = ExSvr.get_val('CxlDtls/TxInfAndSts/CxlStsId',null);
  Mx.chk_Slash(CxlStsId,'CBPR_Cancellation_Status_Identification_FormalRule');
  //CBPR_Case_Identification_FormalRule
  var RslvdCase = ExSvr.get_val('CxlDtls/TxInfAndSts/RslvdCase/Id',null);
  Mx.chk_Slash(RslvdCase,'CBPR_Case_Identification_FormalRule');
  //CBPR_Original_Instruction_Identification_FormalRule
  var OrgnlInstrId = ExSvr.get_val('CxlDtls/TxInfAndSts/OrgnlInstrId',null);
  Mx.chk_Slash(OrgnlInstrId,'CBPR_Original_Instruction_Identification_FormalRule');
  //normal FinInstnId
  Mx.chk_nomalFinInstnId('CxlDtls/TxInfAndSts/RslvdCase/Cretr/Agt',null);
  var Pty=['CxlDtls/TxInfAndSts/CxlStsRsnInf/Orgtr','CxlDtls/TxInfAndSts/RslvdCase/Cretr/Pty'];
  for(var i=0;i<Pty.length;i++){
    //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
    Mx.chk_TwnNmAndCtry(Pty[i]+'/PstlAdr',null);
    //CBPR_Party_Name_Postal_Address_FormalRule
    Mx.chk_rightError(Pty[i]+'/PstlAdr',Pty[i]+'/Nm',null,'CBPR_Party_Name_Postal_Address_FormalRule');
    //CBPR_Party_Name_Any_BIC_FormalRule
    Mx.chk_nonError(Pty[i]+'/Id/OrgId/AnyBIC',Pty[i]+'/Nm',Pty[i],null,'CBPR_Party_Name_Any_BIC_FormalRule');
  }
}