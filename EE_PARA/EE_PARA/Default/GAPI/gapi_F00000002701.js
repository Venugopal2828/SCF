var sCEFlg = DV.getFieldValue("WEB_REF");
DV.writeLog("sCEFlg" + sCEFlg);
if (sCEFlg != '') {
    var sDetermimFlg = DV.getFieldValue("DETRMNTL_FLG");
    DV.writeLog("sDetermimFlg" + sDetermimFlg);
    if (sDetermimFlg == 'Yes') {
//        DV.appendField("IPLC_IMLC_EEOUT");
    } else {
//        DV.appendField("IPLC_IMLC_EEOUT");
    }
}

var MASTER_LC = DV.getFieldValue("MAST_LC_NO");
if (MASTER_LC == "") {
    if (DV.getFieldValue("DEC_AMT") != "" || DV.getFieldValue("INC_AMT") != "" || DV.getFieldValue("NEW_EXPIRY_DT") != "") {
        DV.writeLog("====Eloan Gapi IPLC1STEP_Amd_OPEN_eLoan START====");
        //DV.appendField("IPLC_Amd1STEP_Amd_OPEN_eLoan");  marked for wrong condition
        DV.writeLog("====Eloan Gapi IPLC1STEP_Amd_OPEN_eLoan END====");
    }
}