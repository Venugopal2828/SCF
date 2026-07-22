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
  if(ExSvr.exist('TxInf/RtrRsnInf/Rsn/Cd')&&ExSvr.get_val('TxInf/RtrRsnInf/Rsn/Cd')=='NARR'){
    Mx.chk_rightError('TxInf/RtrRsnInf/Rsn/Cd','TxInf/RtrRsnInf/AddtlInf',null,'X00077');
  }
  //X00040
  Mx.chk_rightError('TxInf/OrgnlTxRef/SttlmInf/ThrdRmbrsmntAgt','TxInf/OrgnlTxRef/SttlmInf/InstdRmbrsmntAgt',null,'X00040');
  Mx.chk_rightError('TxInf/OrgnlTxRef/SttlmInf/ThrdRmbrsmntAgt','TxInf/OrgnlTxRef/SttlmInf/InstgRmbrsmntAgt',null,'X00040');
  //X00018
  var SttlmMtd=['INDA','INGA'];
  if(ExSvr.exist('TxInf/OrgnlTxRef/SttlmInf/SttlmMtd')&&SttlmMtd.indexOf(ExSvr.get_val('TxInf/OrgnlTxRef/SttlmInf/SttlmMtd'))>-1){
    var SttlmInf=['TxInf/OrgnlTxRef/SttlmInf/InstgRmbrsmntAgt','TxInf/OrgnlTxRef/SttlmInf/ThrdRmbrsmntAgt','TxInf/OrgnlTxRef/SttlmInf/InstdRmbrsmntAgt'];
    Mx.chk_eithers('TxInf/OrgnlTxRef/SttlmInf/SttlmMtd',SttlmInf,null,'X00018');
  }
  //X00075
  if(ExSvr.exist('TxInf/OrgnlTxRef/SttlmInf/SttlmMtd')&&ExSvr.get_val('TxInf/OrgnlTxRef/SttlmInf/SttlmMtd')=='COVE'){
    Mx.chk_eitherError('TxInf/OrgnlTxRef/SttlmInf/SttlmMtd','TxInf/OrgnlTxRef/SttlmInf/SttlmAcct',null,'X00075');
    //X00076
    Mx.chk_nonError('TxInf/OrgnlTxRef/SttlmInf/InstgRmbrsmntAgt','TxInf/OrgnlTxRef/SttlmInf/InstdRmbrsmntAgt','TxInf/OrgnlTxRef/SttlmInf',null,'X00076');
  }
  //X00019?Doesn't seem necessary
  if(ExSvr.exist('TxInf/OrgnlTxRef/SttlmInf/SttlmMtd')&&ExSvr.get_val('TxInf/OrgnlTxRef/SttlmInf/SttlmMtd')=='CLRG'){
    var SttlmInf=['TxInf/OrgnlTxRef/SttlmInf/InstgRmbrsmntAgt','TxInf/OrgnlTxRef/SttlmInf/ThrdRmbrsmntAgt','TxInf/OrgnlTxRef/SttlmInf/InstdRmbrsmntAgt','TxInf/OrgnlTxRef/SttlmInf/SttlmAcct'];
    Mx.chk_eithers('TxInf/OrgnlTxRef/SttlmInf/SttlmMtd',SttlmInf,null,'X00019');
  }
  //X00038
  Mx.chk_rightError('TxInf/OrgnlTxRef/SttlmInf/InstgRmbrsmntAgtAcct','TxInf/OrgnlTxRef/SttlmInf/InstgRmbrsmntAgt',null,'X00038');
  //X00037
  Mx.chk_rightError('TxInf/OrgnlTxRef/SttlmInf/InstdRmbrsmntAgtAcct','TxInf/OrgnlTxRef/SttlmInf/InstdRmbrsmntAgt',null,'X00037');
  //X00039
  Mx.chk_rightError('TxInf/OrgnlTxRef/SttlmInf/ThrdRmbrsmntAgtAcct','TxInf/OrgnlTxRef/SttlmInf/ThrdRmbrsmntAgt',null,'X00039');
  //X00012
  if(ExSvr.exist('TxInf/OrgnlTxRef/MndtRltdInf/AmdmntInd')&&ExSvr.get_val('TxInf/OrgnlTxRef/MndtRltdInf/AmdmntInd')=='true'){
    Mx.chk_rightError('TxInf/OrgnlTxRef/MndtRltdInf/AmdmntInd','TxInf/OrgnlTxRef/MndtRltdInf/AmdmntInfDtls',null,'X00012');
  }
  //X00013
  if(ExSvr.exist('TxInf/OrgnlTxRef/MndtRltdInf/AmdmntInd')&&ExSvr.get_val('TxInf/OrgnlTxRef/MndtRltdInf/AmdmntInd')==false){
    Mx.chk_eitherError('TxInf/OrgnlTxRef/MndtRltdInf/AmdmntInd','TxInf/OrgnlTxRef/MndtRltdInf/AmdmntInfDtls',null,'X00013');
  }
  if(ExSvr.exist('TxInf/RtrdInstdAmt')){
    var RtrdInstdAmt = ExSvr.getflds('TxInf/RtrdInstdAmt',null)[0];
    var Ccy1 = ''+RtrdInstdAmt.getAttributes().getNamedItem("Ccy").getTextContent();
    var RtrdIntrBkSttlmAmt = ExSvr.getflds('TxInf/RtrdIntrBkSttlmAmt',null)[0];
    var Ccy2 = ''+RtrdIntrBkSttlmAmt.getAttributes().getNamedItem("Ccy").getTextContent();
    if(Ccy1==Ccy2){
      //X00050
      Mx.chk_eitherError('TxInf/RtrdInstdAmt','TxInf/XchgRate',null,'X00050');
    }else{
      //X00049
      // ExSvr.debug('CCY DIFF  [' + Ccy1 + ']   vs [' + Ccy2  + ']  resut  ['+ (Ccy1==Ccy2) + ']');
      Mx.chk_rightError('TxInf/RtrdInstdAmt','TxInf/XchgRate',null,'X00049');
    }
  }
  //X00048
  if(ExSvr.exist('TxInf/ChrgsInf/Amt')){
    Mx.chk_rightError('TxInf/ChrgsInf/Amt','TxInf/RtrdInstdAmt',null,'X00048');
  }
  //CBPR_From_To_Instructing_Instructed_Agent_BIC_1_FormalRule++++++++CBPR_From_To_Instructing_Instructed_Agent_BIC_2_FormalRule
  Mx.chk_FromTo('TxInf/InstgAgt','TxInf/InstdAgt',null,'CBPR_From_To_Instructing_Instructed_Agent');
  //CBPR_Remittance_Mutually_Exclusive_FormalRule
  Mx.chk_eitherError('TxInf/OrgnlTxRef/RmtInf/Ustrd','TxInf/OrgnlTxRef/RmtInf/Strd',null,'CBPR_Remittance_Mutually_Exclusive_FormalRule');
  //CBPR_CRED_FormalRule
  if(ExSvr.exist('TxInf/ChrgBr')&&ExSvr.get_val('TxInf/ChrgBr')=='CRED'){
    Mx.chk_rightError('TxInf/ChrgBr','TxInf/ChrgsInf',null,'CBPR_CRED_FormalRule');
  }
  //CBPR_Interbank_Settlement_Amount_FormalRule
  Mx.chk_eitherError('TxInf/OrgnlIntrBkSttlmAmt','TxInf/OrgnlTxRef/IntrBkSttlmAmt',null,'CBPR_Interbank_Settlement_Amount_FormalRule');
  //CBPR_Interbank_Settlement_Date_FormalRule
  Mx.chk_eitherError('TxInf/OrgnlIntrBkSttlmDt','TxInf/OrgnlTxRef/IntrBkSttlmDt',null,'CBPR_Interbank_Settlement_Date_FormalRule');
  //CBPR_Original_Message_Name_Identification_FormalRule
  Mx.chk_regexp('^pacs\.00[289]\.001\.[0-9]{2}|camt\.05[34]\.001\.[0-9]{2}|MT103|MT202|MT205|MT900|MT910|MT940|MT950$','TxInf/OrgnlGrpInf/OrgnlMsgNmId','CBPR_Original_Message_Name_Identification_FormalRule');
  //CBPR_Original_Instruction_Identification_FormalRule
  Mx.chk_noregexp('^(/.*)|(.*//.*)|(.*/)$','TxInf/OrgnlInstrId','CBPR_Original_Instruction_Identification_FormalRule');
  //CBPR_Interbank_Settlement_Currency_FormalRule
  Mx.chk_ccyRule('TxInf/OrgnlIntrBkSttlmAmt',null,'CBPR_Interbank_Settlement_Currency_FormalRule');
  Mx.chk_ccyRule('TxInf/RtrdIntrBkSttlmAmt',null,'CBPR_Interbank_Settlement_Currency_FormalRule');
  Mx.chk_ccyRule('TxInf/OrgnlTxRef/IntrBkSttlmAmt',null,'CBPR_Interbank_Settlement_Currency_FormalRule');
  //normal FinInstnId
  var FinInstnId=['TxInf/ChrgsInf/Agt','TxInf/RtrChain/Dbtr/Agt','TxInf/RtrChain/DbtrAgt','TxInf/RtrChain/PrvsInstgAgt1','TxInf/RtrChain/PrvsInstgAgt2','TxInf/RtrChain/PrvsInstgAgt3',
  'TxInf/RtrChain/IntrmyAgt1','TxInf/RtrChain/IntrmyAgt2','TxInf/RtrChain/IntrmyAgt3','TxInf/RtrChain/CdtrAgt','TxInf/RtrChain/Cdtr/Agt','TxInf/OrgnlTxRef/SttlmInf/InstgRmbrsmntAgt',
  'TxInf/OrgnlTxRef/SttlmInf/InstdRmbrsmntAgt','OrgnlTxRef/SttlmInf/ThrdRmbrsmntAgt','TxInf/OrgnlTxRef/Dbtr/Agt','TxInf/OrgnlTxRef/DbtrAgt','TxInf/OrgnlTxRef/CdtrAgt','TxInf/OrgnlTxRef/Cdtr/Agt',
  ];
  for(var i=0;i<FinInstnId.length;i++){
    Mx.chk_nomalFinInstnId(FinInstnId[i],null);
  }
  //CBPR_Party_Name_Postal_Address_FormalRule
  var PartyNm=['TxInf/RtrChain/UltmtDbtr/Pty','TxInf/RtrChain/Dbtr/Pty','TxInf/RtrChain/InitgPty/Pty','TxInf/RtrChain/Cdtr/Pty','TxInf/RtrChain/UltmtCdtr/Pty','TxInf/RtrRsnInf/Orgtr',
  'TxInf/OrgnlTxRef/UltmtDbtr/Pty','TxInf/OrgnlTxRef/Dbtr/Pty','TxInf/OrgnlTxRef/Cdtr/Pty','TxInf/OrgnlTxRef/UltmtCdtr/Pty'];
  for(var i=0;i<PartyNm.length;i++){
    Mx.chk_rightError(PartyNm[i]+'/PstlAdr',PartyNm[i]+'/Nm',null,'CBPR_Party_Name_Postal_Address_FormalRule');
  }
  //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
  var PstlAdr=['TxInf/RtrChain/Dbtr/Pty','TxInf/RtrChain/Cdtr/Pty','TxInf/RtrRsnInf/Orgtr','TxInf/OrgnlTxRef/Dbtr/Pty','TxInf/OrgnlTxRef/Cdtr/Pty'];
  for(var i=0;i<PstlAdr.length;i++){
    Mx.chk_TwnNmAndCtry(PstlAdr[i]+'/PstlAdr',null);
  }
  //CBPR_Party_Name_Any_BIC_FormalRule
  var AnyBic = ['TxInf/RtrChain/Dbtr/Pty','TxInf/RtrChain/Cdtr/Pty','TxInf/RtrRsnInf/Orgtr','TxInf/OrgnlTxRef/Dbtr/Pty','TxInf/OrgnlTxRef/Cdtr/Pty'];
  for(var i=0;i<AnyBic.length;i++){
    Mx.chk_nonError(AnyBic[i]+'/Nm',AnyBic[i]+'/Id/OrgId/AnyBIC',AnyBic[i],null,'CBPR_Party_Name_Any_BIC_FormalRule');
  }
}