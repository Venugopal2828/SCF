var MASTER_LC = DV.getFieldValue("MAST_LC_NO");
if (MASTER_LC == "") {
    if (DV.getFieldValue("DEC_AMT") > 0 || DV.getFieldValue("INC_AMT") > 0 || DV.getFieldValue("NEW_EXPIRY_DT") != "") {
        DV.writeLog("====Eloan Gapi IPLC1STEP_Amd_OPEN_eLoan START====");
        //DV.appendField("IPLC_Amd1STEP_Amd_OPEN_eLoan"); marked for wrong condition
        DV.writeLog("====Eloan Gapi IPLC1STEP_Amd_OPEN_eLoan END====");
    }
}