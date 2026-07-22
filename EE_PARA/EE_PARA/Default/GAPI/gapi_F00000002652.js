if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var WEB_REF = DV.getFieldValue("WEB_REF");
    //DV.appendField("GTEE_GTEE_EEOUT");
    DV.writeLog("===========ISSUE GTEE Eloan GAPI Start============");
    var E_UNIT_CODE = DV.getFieldValue("E_UNIT_CODE");
    var E_BORROWER_ID = DV.getFieldValue("E_BORROWER_ID");
    var E_ACCOUNT_TYPE = DV.getFieldValue("E_ACCOUNT_TYPE");
    var E_FUNCTION_ID = DV.getFieldValue("E_FUNCTION_ID");
    var E_PAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_PAID_CONFIRM_COMM_CCY");
    var E_PAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_PAID_CONFIRM_COMM_AMT");
    var E_UNPAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_CCY");
    var E_UNPAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_AMT");
    var E_IA_Y_PAID_INT = DV.getFieldValue("E_IA_Y_PAID_INT");
    DV.writeLog("E_IA_Y_PAID_INT====" + E_IA_Y_PAID_INT);
    DV.writeLog("E_UNPAID_CONFIRM_COMM_AMT====" + E_UNPAID_CONFIRM_COMM_AMT);
    DV.writeLog("E_PAID_CONFIRM_COMM_AMT====" + E_PAID_CONFIRM_COMM_AMT);
    if (E_UNPAID_CONFIRM_COMM_AMT > 0 || E_PAID_CONFIRM_COMM_AMT > 0) {
        DV.writeLog("=======Eloan Gapi ISSUE_TakeDown_ISSUE_eLoan=======START=====");
        DV.appendField("GTEE_ISSUE_TakeDown_ISSUE_eLoan");
    }
    DV.writeLog("===========ISSUE GTEE Eloan GAPI End============");
}

//for Suang limit testing  
var APPL_ID = DV.getFieldValue("APPL_ID");
if (APPL_ID. substr(-5)==='_LMTS') {
DV.appendField("GTEE_takedownlimit");
}  

var APPL_REF = DV.getFieldValue("APPL_REF");
if (APPL_REF!=""&&APPL_REF.substr(0, 3)=="Acc"){
DV.appendField("GTEE_COMM_COMM_ACC_PAY_8036");
}
