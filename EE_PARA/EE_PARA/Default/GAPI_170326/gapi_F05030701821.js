var FINC_TYPE = DV.getFieldValue("FINC_TYPE");
var RELA_MAIN_REF = DV.getFieldValue("RELA_MAIN_REF");
if (FINC_TYPE=="OTHER"&&RELA_MAIN_REF.substr(0, 3)=="Acc"){
DV.appendField("CFNC_Acc_TakeDown");
DV.appendField("CFNC_Acc_Payment");
}