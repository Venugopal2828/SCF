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
  //X00192++++X00193++++X00194
  if(ExSvr.exist('Stmt/Ntry/NtryDtls/TxDtls/FinInstrmId')){
    if(!ExSvr.exist('Stmt/Ntry/NtryDtls/TxDtls/FinInstrmId/ISIN')&&!ExSvr.exist('Stmt/Ntry/NtryDtls/TxDtls/FinInstrmId/OthrId')&&!ExSvr.exist('Stmt/Ntry/NtryDtls/TxDtls/FinInstrmId/Desc')){
      ExSvr.add_err('X00192','ISIN or OthrId need present');
      ExSvr.add_err('X00193','ISIN or Desc need present');
      ExSvr.add_err('X00194','Desc or OthrId need present');
    }
  }
  //X00077
  if(ExSvr.exist('Stmt/Ntry/NtryDtls/TxDtls/RtrInf/Rsn/Cd')&&ExSvr.get_val('Stmt/Ntry/NtryDtls/TxDtls/RtrInf/Rsn/Cd')=='NARR'){
    Mx.chk_rightError('Stmt/Ntry/NtryDtls/TxDtls/RtrInf/Rsn/Cd','Stmt/Ntry/NtryDtls/TxDtls/RtrInf/AddtlInf',null,'X00077');
  }
  //CBPR_Copy_Duplicate_FormalRule
  Mx.chk_equal('AppHdr/CpyDplct',envelope,'Stmt/CpyDplctInd',null,'CBPR_Copy_Duplicate_FormalRule');
  //CBPR_Page_Number_1_FormalRule
  if(ExSvr.exist('Stmt/StmtPgntn/PgNb')&&ExSvr.get_val('Stmt/StmtPgntn/PgNb')==1){
    Mx.chk_BalCd('Stmt/Bal','OPBD',true,'CBPR_Page_Number_1_FormalRule');
  }else if(ExSvr.exist('Stmt/StmtPgntn/PgNb')&&ExSvr.get_val('Stmt/StmtPgntn/PgNb')>1){
    //CBPR_Page_Number_2_FormalRule
    Mx.chk_BalCd('Stmt/Bal','OPBD',false,'CBPR_Page_Number_2_FormalRule');
  }
  //CBPR_Last_Page_Indicator_1_FormalRule
  if(ExSvr.exist('Stmt/StmtPgntn/PgNb')&&(ExSvr.get_val('Stmt/StmtPgntn/PgNb')=='1'||ExSvr.get_val('Stmt/StmtPgntn/PgNb')=='true')){
    Mx.chk_BalCd('Stmt/Bal','CLBD',true,'CBPR_Last_Page_Indicator_1_FormalRule');
  }else if(ExSvr.exist('Stmt/StmtPgntn/PgNb')&&(ExSvr.get_val('Stmt/StmtPgntn/PgNb')=='0'||ExSvr.get_val('Stmt/StmtPgntn/PgNb')=='false')){
    //CBPR_Last_Page_Indicator_2_FormalRule
    Mx.chk_BalCd('Stmt/Bal','CLBD',false,'CBPR_Last_Page_Indicator_2_FormalRule');
  }
  //CBPR_Electronique_Or_Legal_Sequence_Number_FormalRule
  Mx.chk_nonError('Stmt/LglSeqNb','Stmt/ElctrncSeqNb','Stmt',null,'CBPR_Electronique_Or_Legal_Sequence_Number_FormalRule');
  //CBPR_BalanceTypeCode_FormalRule
  var Bals=ExSvr.getflds('Stmt/Bal',null);
  var num=0;
  for(var i=0;i<Bals.length;i++){
    var CdOrPrtry=ExSvr.get_val('Tp/CdOrPrtry/Cd',Bals[i]);
    if(CdOrPrtry=='CLAV'){
      num=num+1;
    }
  }
  if(num>1){
    ExSvr.add_err('CBPR_BalanceTypeCode_FormalRule','CLAV can only appear once');
  }
  //CBPR_Original_Instruction_Identification_FormalRule
  var InstrId = ExSvr.get_val('Stmt/Ntry/NtryDtls/TxDtls/Refs/InstrId',null);
  Mx.chk_Slash(InstrId,'CBPR_Original_Instruction_Identification_FormalRule');
}