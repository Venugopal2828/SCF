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
  //CBPR_Reason_Code_NARR_Additional_Information_FormalRule
  if(ExSvr.exist('Undrlyg/TxInf/CxlRsnInf/Rsn/Cd')&&ExSvr.get_val('Undrlyg/TxInf/CxlRsnInf/Rsn/Cd')=='NARR'){
    Mx.chk_rightError('Undrlyg/TxInf/CxlRsnInf/Rsn/Cd','Undrlyg/TxInf/CxlRsnInf/AddtlInf',null,'CBPR_Reason_Code_NARR_Additional_Information_FormalRule');
  }
  //CBPR_Cancellation_Identification_FormalRule
  var CxlId = ExSvr.get_val('Undrlyg/TxInf/CxlId',null);
  Mx.chk_Slash(CxlId,'CBPR_Cancellation_Identification_FormalRule');
  //CBPR_Case_Identification_FormalRule
  var Case = ExSvr.get_val('Undrlyg/TxInf/Case/Id',null);
  Mx.chk_Slash(Case,'CBPR_Case_Identification_FormalRule');
  var Party=['Undrlyg/TxInf/CxlRsnInf/Orgtr','Undrlyg/TxInf/Case/Cretr/Pty'];
  for(var i=0;i<Party.length;i++){
    //CBPR_Party_Name_Postal_Address_FormalRule
    Mx.chk_rightError(Party[i]+'/PstlAdr',Party[i]+'/Nm',null,'CBPR_Party_Name_Postal_Address_FormalRule');
    //CBPR_Party_Name_Any_BIC_FormalRule
    Mx.chk_nonError(Party[i]+'/Id/OrgId/AnyBIC',Party[i]+'/Nm',Party[i],null,'CBPR_Party_Name_Any_BIC_FormalRule');
    //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
    Mx.chk_TwnNmAndCtry(Party[i]+'/PstlAdr',null);
  }
  //normal FinInstnId
  Mx.chk_nomalFinInstnId('Undrlyg/TxInf/Case/Cretr/Agt',null);
  //CBPR_Original_Instruction_Identification_FormalRule
  var OrgnlInstrId = ExSvr.get_val('Undrlyg/TxInf/OrgnlInstrId',null);
  Mx.chk_Slash(OrgnlInstrId,'CBPR_Original_Instruction_Identification_FormalRule');
}