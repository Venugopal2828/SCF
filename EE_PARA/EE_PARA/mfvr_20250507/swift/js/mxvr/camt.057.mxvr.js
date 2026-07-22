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
  //X00183
  Mx.chk_rightError('Ntfctn/Itm/IntrmyAgt','Ntfctn/Itm/DbtrAgt',null,'X00183');
  //X00180
  Mx.chk_eitherError('Ntfctn/Dbtr','Ntfctn/Itm/Dbtr',null,'X00180');
  //X00181
  Mx.chk_eitherError('Ntfctn/DbtrAgt','Ntfctn/Itm/DbtrAgt',null,'X00181');
  //X00182
  Mx.chk_eitherError('Ntfctn/IntrmyAgt','Ntfctn/Itm/IntrmyAgt',null,'X00182');
  //X00184
  Mx.chk_nonError('Ntfctn/Dbtr','Ntfctn/Itm/Dbtr','Ntfctn',null,'X00184');
  //X00183
  Mx.chk_rightError('Ntfctn/IntrmyAgt','Ntfctn/DbtrAgt',null,'X00183');
  //X00185
  Mx.chk_CcyEqual('Ntfctn/TtlAmt','Ntfctn/Itm/Amt','X00185');
  //X00187
  Mx.chk_CcyEqual('Ntfctn/Itm/Amt','Ntfctn/Itm/Amt','X00187');
//  //X00186
//  if(ExSvr.exist('Ntfctn/TtlAmt')){
//    var TtlAmt=ExSvr.get_val('Ntfctn/TtlAmt');
//    var Itm=ExSvr.getflds('Ntfctn/Itm/Amt',null);
//    var itemAmt=0;
//    for(var i=0;i<Itm.length;i++){
//      itemAmt=itemAmt+ExSvr.get_val(null,Itm[i]);
//    }
//    if(TtlAmt!=itemAmt){
//      ExSvr.add_err('X00186','Ntfctn/TtlAmt amt not equal Ntfctn/Itm/Amt sum Ccy');
//    }
//  }
  //X00191
  Mx.chk_eitherError('Ntfctn/XpctdValDt','Ntfctn/Itm/XpctdValDt',null,'X00191');
  //normal FinInstnId
  var FinInstnIds=['Ntfctn/AcctOwnr/Agt','Ntfctn/AcctSvcr','Ntfctn/Dbtr/Agt','Ntfctn/DbtrAgt','Ntfctn/IntrmyAgt',
  'Ntfctn/Itm/Dbtr/Agt','Ntfctn/Itm/DbtrAgt','Ntfctn/Itm/IntrmyAgt'];
  for(var i=0;i<FinInstnIds.length;i++){
    Mx.chk_nomalFinInstnId(FinInstnIds[i],null);
  }
  var Partys=['Ntfctn/AcctOwnr/Pty','Ntfctn/Dbtr/Pty','Ntfctn/Itm/Dbtr/Pty'];
  for(var i=0;i<Partys.length;i++){
    //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
    Mx.chk_TwnNmAndCtry(Partys[i]+'/PstlAdr',null);
    //CBPR_Party_Name_Postal_Address_FormalRule
    Mx.chk_rightError(Partys[i]+'/PstlAdr',Partys[i]+'/Nm',null,'CBPR_Party_Name_Postal_Address_FormalRule');
    //CBPR_Party_Name_Any_BIC_FormalRule
    Mx.chk_nonError(Partys[i]+'/Id/OrgId/AnyBIC',Partys[i]+'/Nm',Partys[i],null,'CBPR_Party_Name_Any_BIC_FormalRule');
  }
  //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
  Mx.chk_TwnNmAndCtry('GrpHdr/MsgSndr/Pty/PstlAdr',null);
  //CBPR_Party_Name_Postal_Address_FormalRule
  Mx.chk_rightError('GrpHdr/MsgSndr/Pty/PstlAdr','GrpHdr/MsgSndr/Pty/Nm',null,'CBPR_Party_Name_Postal_Address_FormalRule');
  //CBPR_Agent_Name_Postal_Address_FormalRule
  Mx.chk_rightError('GrpHdr/MsgSndr/Agt/FinInstnId/Nm','GrpHdr/MsgSndr/Agt/FinInstnId/PstlAdr',null,'CBPR_Agent_Name_Postal_Address_FormalRule');
  Mx.chk_rightError('GrpHdr/MsgSndr/Agt/FinInstnId/PstlAdr', 'GrpHdr/MsgSndr/Agt/FinInstnId/Nm',null,'CBPR_Agent_Name_Postal_Address_FormalRule');
  //CBPR_Expected_Value_Date_FormalRule
  Mx.chk_nonError('Ntfctn/XpctdValDt','Ntfctn/Itm/XpctdValDt','Ntfctn',null,'CBPR_Expected_Value_Date_FormalRule');
  //Ccy rule
  Mx.chk_ccyRule('Ntfctn/Itm/Amt',null,'CBPR_Amount_Currency_FormalRule');
  Mx.chk_ccyRule('Ntfctn/TtlAmt',null,'CBPR_Total_Amount_Currency_FormalRule');
}