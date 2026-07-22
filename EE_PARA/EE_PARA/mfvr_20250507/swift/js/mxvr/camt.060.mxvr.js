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
  //normal FinInstnId
  var FinInstnIds=['GrpHdr/MsgSndr/Agt','RptgReq/AcctOwnr/Agt','RptgReq/AcctSvcr'];
  for(var i=0;i<FinInstnIds.length;i++){
    Mx.chk_nomalFinInstnId(FinInstnIds[i],null);
  }
  //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
  Mx.chk_TwnNmAndCtry('GrpHdr/MsgSndr/Pty/PstlAdr',null);
  //CBPR_Party_Name_Postal_Address_FormalRule
  Mx.chk_rightError('GrpHdr/MsgSndr/Pty/PstlAdr','GrpHdr/MsgSndr/Pty/Nm',null,'CBPR_Party_Name_Postal_Address_FormalRule');
  //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
  Mx.chk_TwnNmAndCtry('RptgReq/AcctOwnr/Pty/PstlAdr',null);
  //CBPR_Party_Name_Postal_Address_FormalRule
  Mx.chk_rightError('RptgReq/AcctOwnr/Pty/PstlAdr','RptgReq/AcctOwnr/Pty/Nm',null,'CBPR_Party_Name_Postal_Address_FormalRule');
  //CBPR_Party_Name_Any_BIC_FormalRule
  Mx.chk_nonError('RptgReq/AcctOwnr/Pty/Id/OrgId/AnyBIC','RptgReq/AcctOwnr/Pty/Nm','RptgReq/AcctOwnr/Pty',null,'CBPR_Party_Name_Any_BIC_FormalRule');
}