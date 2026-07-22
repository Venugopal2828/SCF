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
  //X00040
  Mx.chk_rightError('GrpHdr/SttlmInf/ThrdRmbrsmntAgt','GrpHdr/SttlmInf/InstdRmbrsmntAgt',null,'X00040');
  Mx.chk_rightError('GrpHdr/SttlmInf/ThrdRmbrsmntAgt','GrpHdr/SttlmInf/InstgRmbrsmntAgt',null,'X00040');
  //X00018
  var SttlmMtd=['INDA','INGA'];
  if(ExSvr.exist('GrpHdr/SttlmInf/SttlmMtd')&&SttlmMtd.indexOf(ExSvr.get_val('GrpHdr/SttlmInf/SttlmMtd'))>-1){
    var SttlmInf=['GrpHdr/SttlmInf/InstgRmbrsmntAgt','GrpHdr/SttlmInf/ThrdRmbrsmntAgt','GrpHdr/SttlmInf/InstdRmbrsmntAgt'];
    Mx.chk_eithers('GrpHdr/SttlmInf/SttlmMtd',SttlmInf,null,'X00018');
  }
  //X00075
  if(ExSvr.exist('GrpHdr/SttlmInf/SttlmMtd')&&ExSvr.get_val('GrpHdr/SttlmInf/SttlmMtd')=='COVE'){
    Mx.chk_eitherError('GrpHdr/SttlmInf/SttlmMtd','GrpHdr/SttlmInf/SttlmAcct',null,'X00075');
    //X00076
    Mx.chk_nonError('GrpHdr/SttlmInf/InstgRmbrsmntAgt','GrpHdr/SttlmInf/InstdRmbrsmntAgt','GrpHdr/SttlmInf',null,'X00076');
  }
  //X00019?Doesn't seem necessary
  if(ExSvr.exist('GrpHdr/SttlmInf/SttlmMtd')&&ExSvr.get_val('GrpHdr/SttlmInf/SttlmMtd')=='CLRG'){
    var SttlmInf=['GrpHdr/SttlmInf/InstgRmbrsmntAgt','GrpHdr/SttlmInf/ThrdRmbrsmntAgt','GrpHdr/SttlmInf/InstdRmbrsmntAgt','GrpHdr/SttlmInf/SttlmAcct'];
    Mx.chk_eithers('GrpHdr/SttlmInf/SttlmMtd',SttlmInf,null,'X00019');
  }
  //X00038
  Mx.chk_rightError('GrpHdr/SttlmInf/InstgRmbrsmntAgtAcct','GrpHdr/SttlmInf/InstgRmbrsmntAgt',null,'X00038');
  //X00037
  Mx.chk_rightError('GrpHdr/SttlmInf/InstdRmbrsmntAgtAcct','GrpHdr/SttlmInf/InstdRmbrsmntAgt',null,'X00037');
  //X00039
  Mx.chk_rightError('GrpHdr/SttlmInf/ThrdRmbrsmntAgtAcct','GrpHdr/SttlmInf/ThrdRmbrsmntAgt',null,'X00039');
  if(ExSvr.exist('CdtTrfTxInf/InstdAmt')){
    var Ccy1 = ''+ExSvr.get_val('CdtTrfTxInf/InstdAmt/@Ccy');
    var Ccy2 = ''+ExSvr.get_val('CdtTrfTxInf/IntrBkSttlmAmt/@Ccy');
    if(Ccy1==Ccy2){
      //X00050
      Mx.chk_eitherError('CdtTrfTxInf/InstdAmt','CdtTrfTxInf/XchgRate',null,'X00050');
    }else{
      //X00049
      Mx.chk_rightError('CdtTrfTxInf/InstdAmt','CdtTrfTxInf/XchgRate',null,'X00049');
    }
  }
  //X00048
  if(ExSvr.exist('CdtTrfTxInf/ChrgsInf/Amt')){
    Mx.chk_rightError('CdtTrfTxInf/ChrgsInf/Amt','CdtTrfTxInf/InstdAmt',null,'X00048');
  }
  //X00046
  if(ExSvr.get_val('CdtTrfTxInf/ChrgBr')=='CRED'){
    if (!ExSvr.exist('CdtTrfTxInf/ChrgsInf',null)) {
      ExSvr.add_err('X00046', [ 'CdtTrfTxInf/ChrgsInf']);
      //CBPR_CRED_FormalRule
      ExSvr.add_err('CBPR_CRED_FormalRule', [ 'CdtTrfTxInf/ChrgsInf']);
    }
  }
  //X00051
  if(ExSvr.exist('CdtTrfTxInf/InstrForCdtrAgt/Cd')&&ExSvr.get_val('CdtTrfTxInf/InstrForCdtrAgt/Cd')=='CHQB'){
    Mx.chk_eitherError('CdtTrfTxInf/InstrForCdtrAgt/Cd','CdtTrfTxInf/CdtrAcct',null,'X00051');
  }
  //X00056
  Mx.chk_rightError('CdtTrfTxInf/IntrmyAgt2','CdtTrfTxInf/IntrmyAgt1',null,'X00056');
  //X00057
  Mx.chk_rightError('CdtTrfTxInf/IntrmyAgt3','CdtTrfTxInf/IntrmyAgt2',null,'X00057');
  //X00052
  Mx.chk_rightError('CdtTrfTxInf/IntrmyAgt1Acct','CdtTrfTxInf/IntrmyAgt1',null,'X00052');
  //X00053
  Mx.chk_rightError('CdtTrfTxInf/IntrmyAgt2Acct','CdtTrfTxInf/IntrmyAgt2',null,'X00053');
  //X00054
  Mx.chk_rightError('CdtTrfTxInf/IntrmyAgt3Acct','CdtTrfTxInf/IntrmyAgt3',null,'X00054');
  //X00061
  Mx.chk_rightError('CdtTrfTxInf/XchgRate','CdtTrfTxInf/InstdAmt',null,'X00061');
  //X00412
  Mx.chk_rightError('CdtTrfTxInf/PrvsInstgAgt2Acct','CdtTrfTxInf/PrvsInstgAgt2',null,'X00412');
  //X00413
  Mx.chk_rightError('CdtTrfTxInf/PrvsInstgAgt3Acct','CdtTrfTxInf/PrvsInstgAgt3',null,'X00413');
  //X00415
  Mx.chk_rightError('CdtTrfTxInf/PrvsInstgAgt2','CdtTrfTxInf/PrvsInstgAgt1',null,'X00415');
  //X00416
  Mx.chk_rightError('CdtTrfTxInf/PrvsInstgAgt3','CdtTrfTxInf/PrvsInstgAgt2',null,'X00416');
  //X00411
  Mx.chk_rightError('CdtTrfTxInf/PrvsInstgAgt1Acct','CdtTrfTxInf/PrvsInstgAgt1',null,'X00411');
  //CBPR_Priority_Instruction_Priority_FormalRule
  Mx.chk_equal('AppHdr/Prty',envelope,'CdtTrfTxInf/PmtTpInf/InstrPrty',null,'CBPR_Priority_Instruction_Priority_FormalRule');
  //CBPR_From_To_Instructing_Instructed_Agent_BIC_1_FormalRule++++++++CBPR_From_To_Instructing_Instructed_Agent_BIC_2_FormalRule
  Mx.chk_FromTo('CdtTrfTxInf/InstgAgt','CdtTrfTxInf/InstdAgt',null,'CBPR_From_To_Instructing_Instructed_Agent');
  //CBPR_Instruction_Identification_FormalRule
  Mx.chk_noregexp('^(/.*)|(.*//.*)|(.*/)$','CdtTrfTxInf/PmtId/InstrId','CBPR_Instruction_Identification_FormalRule');
  //CBPR_Interbank_Settlement_Currency_FormalRule
  Mx.chk_ccyRule('CdtTrfTxInf/IntrBkSttlmAmt',null,'CBPR_Interbank_Settlement_Currency_FormalRule');
  //CBPR_DEBT_FormalRule
  if(ExSvr.exist('CdtTrfTxInf/ChrgBr')&&ExSvr.get_val('CdtTrfTxInf/ChrgBr')=='DEBT'){
    var ChrgsInfOne=ExSvr.getflds('CdtTrfTxInf/ChrgsInf',null);
    if(ChrgsInfOne.length>1){
      ExSvr.add_err('CBPR_DEBT_FormalRule','CdtTrfTxInf/ChrgsInf');
    }
  }
  //CBPR_Party_Name_Postal_Address_FormalRule
  var PartyNm=['CdtTrfTxInf/UltmtDbtr','CdtTrfTxInf/InitgPty','CdtTrfTxInf/Dbtr','CdtTrfTxInf/Cdtr','CdtTrfTxInf/UltmtCdtr'];
  for(var i=0;i<PartyNm.length;i++){
    Mx.chk_rightError(PartyNm[i]+'/PstlAdr',PartyNm[i]+'/Nm',null,'CBPR_Party_Name_Postal_Address_FormalRule');
  }
  //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
  var PstlAdr=['CdtTrfTxInf/Dbtr','CdtTrfTxInf/Cdtr'];
  for(var i=0;i<PstlAdr.length;i++){
    Mx.chk_TwnNmAndCtry(PstlAdr[i]+'/PstlAdr',null);
  }
  //CBPR_Party_Name_Any_BIC_FormalRule
  var AnyBic =PstlAdr;
  for(var i=0;i<AnyBic.length;i++){
    Mx.chk_nonError(AnyBic[i]+'/Nm',AnyBic[i]+'/Id/OrgId/AnyBIC',AnyBic[i],null,'CBPR_Party_Name_Any_BIC_FormalRule');
  }
  //CBPR_Related_Remit_Info_Remit_Info_Mutually_Exclusive_FormalRule
  Mx.chk_eitherError('CdtTrfTxInf/RltdRmtInf','CdtTrfTxInf/RmtInf',null,'CBPR_Related_Remit_Info_Remit_Info_Mutually_Exclusive_FormalRule');
    //CBPR_Debtor_Creditor_ES/AD_FormalRule
    Mx.chk_DCBICFI('CdtTrfTxInf',null,'^.{4}(ES|AD).*$','CBPR_Debtor_Creditor_ES/AD_FormalRule');
    //CBPR_Debtor_Creditor_FR/MC_FormalRule
    Mx.chk_DCBICFI('CdtTrfTxInf',null,'^.{4}(FR|MC).*$','CBPR_Debtor_Creditor_FR/MC_FormalRule');
    //CBPR_Debtor_Creditor_IBAN_FormalRule
    Mx.chk_DCBICFI('CdtTrfTxInf',null,'^.{4}(AT|BE|BG|BV|CY|CZ|DE|DK|EE|ES|FI|FR|GB|GF|GI|GP|GR|HR|HU|IE|IS|IT|LI|LT|LU|LV|MQ|MT|NL|NO|PL|PM|PT|RE|RO|SE|SI|SJ|SK).*$','CBPR_Debtor_Creditor_IBAN_FormalRule');
    //CBPR_Debtor_Creditor_IT/SM_FormalRule
    Mx.chk_DCBICFI('CdtTrfTxInf',null,'^.{4}(IT|SM).*$','CBPR_Debtor_Creditor_IT/SM_FormalRule');
    //CBPR_Debtor_Creditor_IT/VA_FormalRule
    Mx.chk_DCBICFI('CdtTrfTxInf',null,'^.{4}(IT|VA).*$','CBPR_Debtor_Creditor_IT/VA_FormalRule');
}