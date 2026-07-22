DV.writeLog("ENTER : MM eLoanValueDateTakedown Batch");
var IA_C_REF_NO  = DV.getFieldValue("DEAL_NO");
var sSqlCond = DV.addSQLCondition(null, "IA_C_REF_NO", IA_C_REF_NO);
var sFldList = DV.addFieldList(null,"IA_C_REF_NO");
var result = DV.getTableMultiDataToArray("IAAC_AMZMASTERLAY",sFldList,sSqlCond,"order by IA_C_REF_NO");
var INT_AMT = DV.toDouble(DV.getFieldValue("INT_AMT"));
var INT_AMT_P = Math.abs(INT_AMT);
DV.updateField("INT_AMT_P", String(INT_AMT_P));

if(result.length == 0){
    DV.setTrxFunction("MMeLOANBatchTKDN");
    DV.updateField("ELOAN_TP","Takedown");
}else{
    DV.setTrxFunction("MMeLOANBatchReTKDN");
    DV.updateField("ELOAN_TP","ReTakedown");
}

DV.writeLog("Leave : MM eLoanValueDateTakedown Batch");