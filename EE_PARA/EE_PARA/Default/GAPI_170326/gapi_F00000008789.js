var CFNC_C_INT_PAYABLE = "";
var CFNC_PRINCIPAL_INSTAL_FLG = "";
var CFNC_INTEREST_INSTAL_FLG = "";
var records = DV.getRecords("FincAmend");

for (var i = 0; i < records.length; i++) {
    CFNC_C_INT_PAYABLE = DV.getDOValue(records[i], "CFNC_C_INT_PAYABLE");
    CFNC_PRINCIPAL_INSTAL_FLG = DV.getDOValue(records[i], "CFNC_PRINCIPAL_INSTAL_FLG");
    CFNC_INTEREST_INSTAL_FLG = DV.getDOValue(records[i], "CFNC_INTEREST_INSTAL_FLG");
}

if (CFNC_C_INT_PAYABLE == 'Up Front' && CFNC_PRINCIPAL_INSTAL_FLG == 'No' && CFNC_INTEREST_INSTAL_FLG == 'No') {
    DV.writeLog("-------AMZ start-------");
    DV.appendField("CFNC_CFNC_FinAmend_AMZ_Takedown");
    DV.writeLog("-------AMZ end-------");
} else if (CFNC_C_INT_PAYABLE == 'In Arrears' && CFNC_PRINCIPAL_INSTAL_FLG == 'No' && CFNC_INTEREST_INSTAL_FLG == 'No') {
    DV.writeLog("-------ACC start-------");
    DV.appendField("CFNC_CFNC_FinAmend_ACC_Takedown");
    DV.writeLog("-------ACC end-------");
} else if (CFNC_C_INT_PAYABLE == 'Up Front' && CFNC_PRINCIPAL_INSTAL_FLG == 'Yes' && CFNC_INTEREST_INSTAL_FLG == 'Yes') {
    DV.writeLog("-------AMZ start-------");
    DV.appendField("CFNC_CFNC_FinAmend_AMZ_Takedown");
    DV.writeLog("-------AMZ end-------");
} else if (CFNC_C_INT_PAYABLE == 'In Arrears' && CFNC_PRINCIPAL_INSTAL_FLG == 'Yes' && CFNC_INTEREST_INSTAL_FLG == 'Yes') {
    DV.writeLog("-------ACC start-------");
    DV.appendField("CFNC_CFNC_FinAmend_ACC_Takedown");
    DV.writeLog("-------ACC end-------");
}