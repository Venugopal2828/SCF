ExSvr.require('mfvr.js');
ExSvr.require('mxvr.js');

function check_mfvr() {
  ExSvr.validCcy();
  // ExSvr.validBic();
  Mx.chk_country();
  Mx.chk_iban();
  // Ex.check('pacs.009.001', ['D00000', 'D00001']);
  //
//  var parent = null;
//  Mx.chk_either(['GrpHdr','IntrBkSttlmDt'],['CdtTrfTxInf','IntrBkSttlmDt'], parent);
//  Mx.chk_either(['GrpHdr','InstdAgt'],['CdtTrfTxInf','InstdAgt'], parent);
//  Mx.chk_either(['GrpHdr','InstgAgt'],['CdtTrfTxInf','InstgAgt'], parent);
//  Mx.chk_either(['GrpHdr','PmtTpInf'],['CdtTrfTxInf','PmtTpInf'], parent);
//  //
//  Mx.chk_right(['GrpHdr','TtlIntrBkSttlmAmt'],['CdtTrfTxInf','IntrBkSttlmDt'], parent);
//
//  var SttlmInf = ExSvr.getflds(['CdtTrfTxInf'], null)[0];
//  Mx.chk_right(['InstgRmbrsmntAgtAcct'], ['InstgRmbrsmntAgt'], SttlmInf);
//  Mx.chk_right(['InstdRmbrsmntAgtAcct'], ['InstdRmbrsmntAgt'], SttlmInf);
//  Mx.chk_right(['ThrdRmbrsmntAgtAcct'], ['ThrdRmbrsmntAgt'], SttlmInf);
//  //
//  var trxs = ExSvr.getflds('CdtTrfTxInf', null);
//  for (var i = 0; i < trxs.length; i++) {
//    var item = trxs[i];
//    Mx.chk_right(['CdtrAgtAcct'], ['CdtrAgt'], item);
//    Mx.chk_right(['DbtrAgtAcct'], ['DbtrAgt'], item);
//    // Mx.chk_right(['CdtTrfTxInf', 'DbtrAgtAcct'], ['CdtTrfTxInf', 'DbtrAgt'], parent);
//  }
//  var adjst_amt = Mx.sum_amt('CdtTrfTxInf', 'IntrBkSttlmAmt', null);
//  var ttlamt_net = ExSvr.get_val(['GrpHdr', 'TtlIntrBkSttlmAmt '], parent);
//  if ( Number(ttlamt_net) != adjst_amt ) {
//    ExSvr.add_err('Error.Amount', [adjst_amt, ttlamt_net]);
//  }
  // TtlIntrBkSttlmAmt = sum ()
  var envelope =  ExSvr.getRoot();
  //H00001
  Mx.chk_rightError('AppHdr/CpyDplct','AppHdr/Rltd',envelope,'H00001');
  //X00056
  Mx.chk_rightError('CdtTrfTxInf/IntrmyAgt2','CdtTrfTxInf/IntrmyAgt1',null,'X00056');
  //X00057
  Mx.chk_rightError('CdtTrfTxInf/IntrmyAgt3','CdtTrfTxInf/IntrmyAgt2',null,'X00057');
  //X00060
  Mx.chk_rightError('CdtTrfTxInf/IntrmyAgt1','CdtTrfTxInf/CdtrAgt',null,'X00060');
  //X00052
  Mx.chk_rightError('CdtTrfTxInf/IntrmyAgt1Acct','CdtTrfTxInf/IntrmyAgt1',null,'X00052');
  //X00053
  Mx.chk_rightError('CdtTrfTxInf/IntrmyAgt2Acct','CdtTrfTxInf/IntrmyAgt2',null,'X00053');
  //X00054
  Mx.chk_rightError('CdtTrfTxInf/IntrmyAgt3Acct','CdtTrfTxInf/IntrmyAgt3',null,'X00054');
  //X00059
  Mx.chk_rightError('CdtTrfTxInf/DbtrAgtAcct','CdtTrfTxInf/DbtrAgt',null,'X00059');
  //X00058
  Mx.chk_rightError('CdtTrfTxInf/CdtrAgtAcct','CdtTrfTxInf/CdtrAgt',null,'X00058');
  //X00411
  Mx.chk_rightError('CdtTrfTxInf/PrvsInstgAgt1Acct','CdtTrfTxInf/PrvsInstgAgt1',null,'X00411');
  //X00412
  Mx.chk_rightError('CdtTrfTxInf/PrvsInstgAgt2Acct','CdtTrfTxInf/PrvsInstgAgt2',null,'X00412');
  //X00413
  Mx.chk_rightError('CdtTrfTxInf/PrvsInstgAgt3Acct','CdtTrfTxInf/PrvsInstgAgt3',null,'X00413');
  //X00415
  Mx.chk_rightError('CdtTrfTxInf/PrvsInstgAgt2','CdtTrfTxInf/PrvsInstgAgt1',null,'X00415');
  //X00416
  Mx.chk_rightError('CdtTrfTxInf/PrvsInstgAgt3','CdtTrfTxInf/PrvsInstgAgt2',null,'X00416');
  //CBPR_Priority_Instruction_Priority_FormalRule
  Mx.chk_equal('AppHdr/Prty',envelope,'CdtTrfTxInf/PmtTpInf/InstrPrty',null,'CBPR_Priority_Instruction_Priority_FormalRule');
  //CBPR_From_To_Instructing_Instructed_Agent_BIC_1_FormalRule++++++++CBPR_From_To_Instructing_Instructed_Agent_BIC_2_FormalRule
  Mx.chk_FromTo('CdtTrfTxInf/InstgAgt','CdtTrfTxInf/InstdAgt',null,'CBPR_From_To_Instructing_Instructed_Agent');
  //CBPR_Instruction_For_Creditor_Presence_Code_FormalRule
  var InstrForCdtrAgt = ExSvr.getflds('CdtTrfTxInf/InstrForCdtrAgt', null);
  if(InstrForCdtrAgt.length==2){
    var cd0 = ExSvr.get_val('Cd',InstrForCdtrAgt[0]);
    var cd1 = ExSvr.get_val('Cd',InstrForCdtrAgt[1]);
    if(cd0==cd1&&cd0!=null){
      ExSvr.add_err('CBPR_Instruction_For_Creditor_Presence_Code_FormalRule', [InstrForCdtrAgt[0],' ', InstrForCdtrAgt[1]]);
    }
  }
  var list = ['PrvsInstgAgt1','PrvsInstgAgt2','PrvsInstgAgt3','IntrmyAgt1','IntrmyAgt2','IntrmyAgt3','Dbtr','DbtrAgt','CdtrAgt','Cdtr'];
  for(var i=0;i<list.length;i++){
    var PrvsInstgAgt = list[i];
    //normal FinInstnId
    Mx.chk_nomalFinInstnId('CdtTrfTxInf/'+PrvsInstgAgt,null);
  }
  //CBPR_Instruction_Identification_FormalRule
  var InstrId = ExSvr.get_val('CdtTrfTxInf/PmtId/InstrId',null);
  Mx.chk_Slash(InstrId,'CBPR_Instruction_Identification_FormalRule');
  //CBPR_End_To_End_Identification_FormalRule
  var EndToEndId = ExSvr.get_val('CdtTrfTxInf/PmtId/EndToEndId',null);
  var subEndToEndId = EndToEndId;
  Mx.chk_Slash(subEndToEndId,'CBPR_End_To_End_Identification_FormalRule');
  //CBPR_Interbank_Settlement_Currency_FormalRule
  var IntrBkSttlmAmt = ExSvr.getflds('CdtTrfTxInf/IntrBkSttlmAmt',null)[0];
  var Ccy = IntrBkSttlmAmt.getAttributes().getNamedItem("Ccy").getTextContent();
  if(Ccy=='XAU'||Ccy=='XAG'||Ccy=='XPD'||Ccy=='XPT'){
    ExSvr.add_err('CBPR_Interbank_Settlement_Currency_FormalRule','CdtTrfTxInf/IntrBkSttlmAmt/@Ccy can not equal XAU|XAG|XPD|XPT');
  }
  var BizSvc = ExSvr.get_val('AppHdr/BizSvc',envelope);
  //COV
  if(BizSvc.indexOf('.cov.')!=-1){
    if(ExSvr.exist('CdtTrfTxInf/UndrlygCstmrCdtTrf')){
      var UndrlygCstmrCdtTrf1 = ['UltmtDbtr','InitgPty','UltmtCdtr'];
      for(var i=0;i<UndrlygCstmrCdtTrf1.length;i++){
        var PrvsInstgAgt = UndrlygCstmrCdtTrf1[i];
        //CBPR_Party_Name_Postal_Address_FormalRul
        Mx.chk_rightError('CdtTrfTxInf/UndrlygCstmrCdtTrf/'+PrvsInstgAgt+'/PstlAdr', 'CdtTrfTxInf/UndrlygCstmrCdtTrf/'+PrvsInstgAgt+'/Nm',null,'CBPR_Party_Name_Postal_Address_FormalRul');
      }
      var UndrlygCstmrCdtTrf2 = ['DbtrAgt','PrvsInstgAgt1','PrvsInstgAgt2','PrvsInstgAgt3','IntrmyAgt1','IntrmyAgt2','IntrmyAgt3','CdtrAgt'];
      for(var i=0;i<UndrlygCstmrCdtTrf2.length;i++){
        var PrvsInstgAgt = UndrlygCstmrCdtTrf2[i];
        //normal FinInstnId
        Mx.chk_nomalFinInstnId('CdtTrfTxInf/UndrlygCstmrCdtTrf/'+PrvsInstgAgt,null);
      }
      var UndrlygCstmrCdtTrf3 = ['Dbtr','Cdtr'];
      for(var i=0;i<UndrlygCstmrCdtTrf3.length;i++){
        var PrvsInstgAgt = UndrlygCstmrCdtTrf3[i];
        //CBPR_Party_Name_Postal_Address_FormalRul
        Mx.chk_rightError('CdtTrfTxInf/UndrlygCstmrCdtTrf/'+PrvsInstgAgt+'/PstlAdr', 'CdtTrfTxInf/UndrlygCstmrCdtTrf/'+PrvsInstgAgt+'/Nm',null,'CBPR_Party_Name_Postal_Address_FormalRul');
        //CBPR_Party_Name_Any_BIC_FormalRule
        Mx.chk_nonError('CdtTrfTxInf/UndrlygCstmrCdtTrf/'+PrvsInstgAgt+'/Id/OrgId/AnyBIC', 'CdtTrfTxInf/UndrlygCstmrCdtTrf/'+PrvsInstgAgt+'/Nm','CdtTrfTxInf/UndrlygCstmrCdtTrf/'+PrvsInstgAgt,null,'CBPR_Party_Name_Any_BIC_FormalRule');
        //CBPR_Structured_vs_Unstructured_FormalRule+++++CBPR_Town_Name_And_Country_FormalRule
        Mx.chk_TwnNmAndCtry('CdtTrfTxInf/UndrlygCstmrCdtTrf/'+PrvsInstgAgt+'/FinInstnId/PstlAdr',null);
      }
      //CBPR_Remittance_Mutually_Exclusive_FormalRule
      Mx.chk_eitherError('CdtTrfTxInf/UndrlygCstmrCdtTrf/RmtInf/Ustrd','CdtTrfTxInf/UndrlygCstmrCdtTrf/RmtInf/Strd',null,'CBPR_Remittance_Mutually_Exclusive_FormalRule');
    }
  }
  //ADV
  if(BizSvc.indexOf('.adv.')!=-1){
    var InstgRmbrsmntAgt='GrpHdr/SttlmInf/InstgRmbrsmntAgt';
    //normal FinInstnId
    Mx.chk_nomalFinInstnId(InstgRmbrsmntAgt,null);
    var InstdRmbrsmntAgt='GrpHdr/SttlmInf/InstdRmbrsmntAgt';
    //normal FinInstnId
    Mx.chk_nomalFinInstnId(InstdRmbrsmntAgt,null);
  }
}