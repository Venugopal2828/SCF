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
  //X00058
  Mx.chk_rightError('CdtInstr/CdtrAgtAcct','CdtInstr/CdtrAgt',null,'X00058');
  //CBPR_From_To_Instructing_Instructed_Agent_BIC_1_FormalRule++++++++CBPR_From_To_Instructing_Instructed_Agent_BIC_2_FormalRule
  Mx.chk_FromTo('CdtInstr/InstgAgt','CdtInstr/InstdAgt',null,'CBPR_From_To_Instructing_Instructed_Agent');
  var list = ['CdtrAgt','Cdtr','DrctDbtTxInf/Dbtr','DrctDbtTxInf/DbtrAgt'];
  for(var i=0;i<list.length;i++){
    var PrvsInstgAgt = list[i];
    //normal FinInstnId
    Mx.chk_nomalFinInstnId('CdtInstr/'+PrvsInstgAgt,null);
  }
}