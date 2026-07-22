if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var WEB_REF = DV.getFieldValue("WEB_REF");

    DV.appendField("GTEE_OWGT_013_Sttlm");

    /*Eloan Gapi*/
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


    DV.writeLog("E_UNPAID_CONFIRM_COMM_AMT====" + E_UNPAID_CONFIRM_COMM_AMT);

    DV.writeLog("E_PAID_CONFIRM_COMM_AMT====" + E_PAID_CONFIRM_COMM_AMT);

    if (E_PAID_CONFIRM_COMM_AMT > 0) {
        DV.writeLog("=======Eloan Gapi Claim_Set_Payment_ISSUE_eLoan=======START=====");
        DV.appendField("GTEE_Claim_Set_Payment_ISSUE_eLoan");
    }

    DV.writeLog("===========ISSUE GTEE Eloan GAPI End============");

}