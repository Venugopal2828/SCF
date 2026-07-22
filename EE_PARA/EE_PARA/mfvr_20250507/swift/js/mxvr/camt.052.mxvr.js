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
  if(ExSvr.exist('Rpt/Ntry/NtryDtls/TxDtls/FinInstrmId')){
    if(!ExSvr.exist('Rpt/Ntry/NtryDtls/TxDtls/FinInstrmId/ISIN')&&!ExSvr.exist('Rpt/Ntry/NtryDtls/TxDtls/FinInstrmId/OthrId')&&!ExSvr.exist('Rpt/Ntry/NtryDtls/TxDtls/FinInstrmId/Desc')){
      ExSvr.add_err('X00192','ISIN or OthrId need present');
      ExSvr.add_err('X00193','ISIN or Desc need present');
      ExSvr.add_err('X00194','Desc or OthrId need present');
    }
  }
  //X00077
  if(ExSvr.exist('Rpt/Ntry/NtryDtls/TxDtls/RtrInf/Rsn/Cd')&&ExSvr.get_val('Rpt/Ntry/NtryDtls/TxDtls/RtrInf/Rsn/Cd')=='NARR'){
    Mx.chk_rightError('Rpt/Ntry/NtryDtls/TxDtls/RtrInf/Rsn/Cd','Rpt/Ntry/NtryDtls/TxDtls/RtrInf/AddtlInf',null,'X00077');
  }
  //CBPR_Copy_Duplicate_FormalRule
  Mx.Chk_equal('AppHdr/CpyDplct',envelope,'Rpt/CpyDplctInd',null,'CBPR_Copy_Duplicate_FormalRule');
  //CBPR_Party_Name_Postal_Address_FormalRule
  Mx.chk_rightError('Rpt/Acct/Ownr/PstlAdr','Rpt/Acct/Ownr/Nm',null,'CBPR_Party_Name_Postal_Address_FormalRule');
  //CBPR_Original_Instruction_Identification_FormalRule
  if(ExSvr.exist('Rpt/Ntry/NtryDtls/TxDtls/Refs/InstrId')){
    var InstrId = ExSvr.get_val('Rpt/Ntry/NtryDtls/TxDtls/Refs/InstrId',null);
    Mx.chk_Slash(InstrId,'CBPR_Original_Instruction_Identification_FormalRule');
  }
}