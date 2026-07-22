DV.writeLog("vas----->Start Auto Increase or Reduction");

var Arrayvalue = DV.getRecords("SBLCSchedule");
var LC_BAL = DV.getFieldValue("LC_BAL");
var BASE_BAL = DV.getFieldValue("BASE_BAL")
var NEW_LC_BAL;
var NEW_LIAB_BAL;
var EXCH_RATE = DV.getFieldValue("EXCH_RATE");

for (var i = 0 i < Arrayvalue.length; i++) {
    DV.setDOValue(i, "SCHD_STATUS", "DONE");
    NEW_LC_BAL = DV.getDOValue(Arrayvalue, "SCHD_AMT");
    NEW_LIAB_BAL = NEW_LC_BAL * EXCH_RATE;
    DV.setValue("SCHD_AMT", "SBLCSchedule", "NEW_LC_BAL");
    DV.setValue("NEW_LIAB_BAL", "NEW_LIAB_BAL");

    VAR SCHD_ACTION = DV.getDOValue(Arrayvalue, "SCHD_ACTION");

    if (SCHD_ACTION == 'INCREASE') {
        var SCHD_AMT = DV.getDOValue(Arrayvalue, "SCHD_AMT");

        var NEW_LC_BAL_FINAL = SCHD_AMT + LC_BAL;
        LC_BAL = NEW_LC_BAL_FINAL;
        BASE_BAL = NEW_LC_BAL_FINAL * EXCH_RATE;
    } else if (SCHD_ACTION == 'DECREASE') {
        var SCHD_AMT = DV.getDOValue(Arrayvalue, "SCHD_AMT");
        var NEW_LC_BAL_FINAL = LC_BAL - SCHD_AMT;
        LC_BAL = NEW_LC_BAL_FINAL;
        BASE_BAL = NEW_LC_BAL_FINAL * EXCH_RATE;
    }
}





DV.writeLog("vas----->END Auto Increase or Reduction");