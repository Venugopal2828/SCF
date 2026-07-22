DV.writeLog("Begin auto Settlement");
DV.setTrxFunction("AutoSettlement_ME");
var date = DV.getSysBusiDate();
DV.updateField('TEMP_DUE_DT',date);//zoe
DV.writeLog("End auto Settlement");