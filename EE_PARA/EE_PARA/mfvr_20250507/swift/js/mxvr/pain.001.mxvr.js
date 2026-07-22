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
  //X00009
  Mx.chk_eitherError('PmtInf/PmtTpInf','PmtInf/CdtTrfTxInf/PmtTpInf',null,'X00009');
  //X00100
  if(ExSvr.exist('PmtInf/PmtMtd')&&ExSvr.get_val('PmtInf/PmtMtd')!='CHK'){
    if(ExSvr.exist('PmtInf/CdtTrfTxInf/ChqInstr')){
      ExSvr.add_err('X00100', 'PmtInf/CdtTrfTxInf/ChqInstr must be absent');
    }
    //X00108
    Mx.chk_nonError('PmtInf/CdtTrfTxInf/Cdtr','PmtInf/CdtTrfTxInf/CdtrAcct','PmtInf/CdtTrfTxInf',null,'X00108');
  }
  //X00099
  Mx.chk_eitherError('PmtInf/ChrgsAcctAgt','PmtInf/ChrgsAcct',null,'X00099');
  //X00112
  Mx.chk_eitherError('PmtInf/ChrgBr','PmtInf/CdtTrfTxInf/ChrgBr',null,'X00112');
  //X00097
  Mx.chk_eitherError('PmtInf/UltmtDbtr','PmtInf/CdtTrfTxInf/UltmtDbtr',null,'X00097');
  if(ExSvr.exist('PmtInf/PmtMtd')&&ExSvr.get_val('PmtInf/PmtMtd')=='CHK'){
    //X00107
    if(ExSvr.exist('PmtInf/CdtTrfTxInf/CdtrAcct')){
      ExSvr.add_err('X00107', 'PmtInf/CdtTrfTxInf/CdtrAcct must be absent');
    }
    //X00109
    var arr = ['MLFA','CRFA','RGFA','PUFA'];
    if(ExSvr.exist('PmtInf/CdtTrfTxInf/ChqInstr/DlvryMtd/Cd')&&arr.indexOf(ExSvr.get_val('PmtInf/CdtTrfTxInf/ChqInstr/DlvryMtd/Cd'))>=0){
      Mx.chk_rightError('PmtInf/CdtTrfTxInf/ChqInstr/DlvryMtd/Cd','PmtInf/CdtTrfTxInf/CdtrAgt',null,'X00109');
    }else if(ExSvr.exist('PmtInf/CdtTrfTxInf/ChqInstr/DlvryMtd/Cd')&&arr.indexOf(ExSvr.get_val('PmtInf/CdtTrfTxInf/ChqInstr/DlvryMtd/Cd'))<0){
      //X00110
      Mx.chk_eitherError('PmtInf/CdtTrfTxInf/ChqInstr/DlvryMtd/Cd','PmtInf/CdtTrfTxInf/CdtrAgt',null,'X00110');
    }
    //X00111
    if(ExSvr.exist('PmtInf/CdtTrfTxInf/ChqInstr')){
      Mx.chk_rightError('PmtInf/CdtTrfTxInf/CdtrAgt','PmtInf/CdtTrfTxInf/ChqInstr/DlvryMtd',null,'X00111');
    }
  }
  //X00264
  Mx.chk_eitherError('PmtInf/InstrForDbtrAgt','PmtInf/CdtTrfTxInf/InstrForDbtrAgt',null,'X00264');
  //X00101
  if(!ExSvr.exist('PmtInf/CdtTrfTxInf/ChqInstr/ChqTp')||ExSvr.get_val('PmtInf/CdtTrfTxInf/ChqInstr/ChqTp')=='DRFT'){
    Mx.chk_eitherError('PmtInf/CdtTrfTxInf/ChqInstr/ChqTp','PmtInf/CdtTrfTxInf/ChqInstr/ChqMtrtyDt',null,'X00101');
  }
  //X00056
  Mx.chk_rightError('PmtInf/CdtTrfTxInf/IntrmyAgt2','PmtInf/CdtTrfTxInf/IntrmyAgt1',null,'X00056');
  //X00057
  Mx.chk_rightError('PmtInf/CdtTrfTxInf/IntrmyAgt3','PmtInf/CdtTrfTxInf/IntrmyAgt2',null,'X00057');
  //X00051
  if(ExSvr.exist('PmtInf/CdtTrfTxInf/InstrForCdtrAgt/Cd')&&ExSvr.get_val('PmtInf/CdtTrfTxInf/InstrForCdtrAgt/Cd')=='CHQB'){
    Mx.chk_eitherError('PmtInf/CdtTrfTxInf/InstrForCdtrAgt/Cd','PmtInf/CdtTrfTxInf/CdtrAcct',null,'X00051');
  }
  //X00052
  Mx.chk_rightError('PmtInf/CdtTrfTxInf/IntrmyAgt1Acct','PmtInf/CdtTrfTxInf/IntrmyAgt1',null,'X00052');
  //X00053
  Mx.chk_rightError('PmtInf/CdtTrfTxInf/IntrmyAgt2Acct','PmtInf/CdtTrfTxInf/IntrmyAgt2',null,'X00053');
  //X00054
  Mx.chk_rightError('PmtInf/CdtTrfTxInf/IntrmyAgt3Acct','PmtInf/CdtTrfTxInf/IntrmyAgt3',null,'X00054');
  //CBPR_Remittance_Mutually_Exclusive_FormalRule
  Mx.chk_eitherError('PmtInf/CdtTrfTxInf/RmtInf/Ustrd','PmtInf/CdtTrfTxInf/RmtInf/Strd',null,'CBPR_Remittance_Mutually_Exclusive_FormalRule');
  //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
  var PstlAdr = ['Dbtr/PstlAdr','DbtrAgt/FinInstnId/PstlAdr','CdtTrfTxInf/IntrmyAgt1/FinInstnId/PstlAdr','CdtTrfTxInf/IntrmyAgt2/FinInstnId/PstlAdr','CdtTrfTxInf/IntrmyAgt3/FinInstnId/PstlAdr','CdtTrfTxInf/CdtrAgt/FinInstnId/PstlAdr','CdtTrfTxInf/Cdtr/PstlAdr'];
  for(var i=0;i<PstlAdr.length;i++){
    var PstlAdrOne = 'PmtInf/'+PstlAdr[i];
    Mx.chk_TwnNmAndCtryForPain(PstlAdrOne,null);
  }
}