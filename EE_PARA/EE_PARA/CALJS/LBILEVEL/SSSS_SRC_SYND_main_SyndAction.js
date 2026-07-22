"path:SCRN/Library/SYND/SYND_main_SyndAction.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_SYND_ACTION_REF = function() {
    try {
        if (document.MAINFORM.SYND_ACTION_REF.value == '') {
            SYS_GetRefNo('SYND_ACTION', 'get_SYND_ACTION_REF');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_SyndAction.js*Cal_SYND_ACTION_REF", e);
    }
}

csLbiCompProto.SHOW_HIDE_SYND_ACT_NOTES_TEMP = function() {
    try {
        var vNEW_CONF_BAL; // Utility Auto Fix Comments
        var vOLD_CONF_BAL; // Utility Auto Fix Comments
        var vSYND_FLG; // Utility Auto Fix Comments
        switch (SYS_ORG_FUNCTION_NAME) {
            case "EPLC_Process_MT707_New":
            case "EPLC_AmendmentOneStep":
                document.MAINFORM.SYND_ACT_AMD_DT.value = document.MAINFORM.AMD_DT.value;
                document.MAINFORM.SYND_ACT_AMD_EVENT_TYPE.value = "Amendment";
                document.MAINFORM.SYND_ACT_OLD_CONF_CCY.value = document.MAINFORM.LC_CCY.value;
                document.MAINFORM.SYND_ACT_OLD_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.SYND_ACT_OLD_CONF_CCY.value, document.MAINFORM.OLD_CONF_BAL.value);
                document.MAINFORM.SYND_ACT_NEW_CONF_CCY.value = document.MAINFORM.LC_CCY.value;
                document.MAINFORM.SYND_ACT_NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.SYND_ACT_NEW_CONF_CCY.value, document.MAINFORM.NEW_CONF_BAL.value);
                document.MAINFORM.SYND_REF.value = document.MAINFORM.R_SYND_REF.value;
                document.MAINFORM.SYND_ACTION_TRADE_REF.value = document.MAINFORM.C_MAIN_REF.value;
                vOLD_CONF_BAL = document.MAINFORM.OLD_CONF_BAL.value;
                vNEW_CONF_BAL = document.MAINFORM.NEW_CONF_BAL.value;
                vSYND_FLG = document.MAINFORM.SYND_FLG.value;
                if (vOLD_CONF_BAL != vNEW_CONF_BAL && vSYND_FLG == "YES") {
                    document.MAINFORM.SYND_ACT_NOTES_TEMP.style.visibility = "visible";
                    document.MAINFORM.SYND_ACT_NOTES_TEMP.value = "Value Date:" + " " + document.MAINFORM.SYND_ACT_AMD_DT.value + "\n" + "Event Type:" + " " + document.MAINFORM.SYND_ACT_AMD_EVENT_TYPE.value + "\n" + "Old Confirmation Balance:" + " " + document.MAINFORM.SYND_ACT_OLD_CONF_BAL.value + "\n" + "New Confirmation Balance:" + " " + document.MAINFORM.SYND_ACT_NEW_CONF_BAL.value;
                } else {
                    document.MAINFORM.SYND_ACT_NOTES_TEMP.style.visibility = "hidden";
                    document.MAINFORM.SYND_ACT_NOTES_TEMP.value = "";
                }
                Cal_SYND_ACTION_REF();
                document.MAINFORM.SYND_ACT_NOTES.value = document.MAINFORM.SYND_ACT_NOTES_TEMP.value;
                break;
            case "EPLC_PayAccept":
            case "EPLC_PayAtMaturity":
                document.MAINFORM.SYND_ACT_CREDIT_DT.value = document.MAINFORM.VALUE_DT_CR.value;
                document.MAINFORM.SYND_ACT_PAY_EVENT_TYPE.value = "Payment";
                document.MAINFORM.SYND_REF.value = document.MAINFORM.R_SYND_REF.value;
                vOLD_CONF_BAL = document.MAINFORM.SYND_ACT_OLD_CONF_BAL.value; // Utility Auto Fix Comments
                vNEW_CONF_BAL = document.MAINFORM.SYND_ACT_NEW_CONF_BAL.value; // Utility Auto Fix Comments
                vSYND_FLG = document.MAINFORM.SYND_FLG.value; // Utility Auto Fix Comments
                if (vOLD_CONF_BAL != vNEW_CONF_BAL && vSYND_FLG == "YES") {
                    document.MAINFORM.SYND_ACT_NOTES_TEMP.style.visibility = "visible";
                    document.MAINFORM.SYND_ACT_NOTES_TEMP.value = "Value Date:" + " " + document.MAINFORM.SYND_ACT_CREDIT_DT.value + "\n" + "Event Type:" + " " + document.MAINFORM.SYND_ACT_PAY_EVENT_TYPE.value + "\n" + "Old Confirmation Balance:" + " " + document.MAINFORM.SYND_ACT_OLD_CONF_BAL.value + "\n" + "New Confirmation Balance:" + " " + document.MAINFORM.SYND_ACT_NEW_CONF_BAL.value;
                } else {
                    document.MAINFORM.SYND_ACT_NOTES_TEMP.style.visibility = "hidden";
                    document.MAINFORM.SYND_ACT_NOTES_TEMP.value = "";
                }
                document.MAINFORM.SYND_ACT_NOTES.value = document.MAINFORM.SYND_ACT_NOTES_TEMP.value;

                break;

            default:

                break;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_SyndAction.js*SHOW_HIDE_SYND_ACT_NOTES_TEMP", e);
    }
}

csLbiCompProto.SHOW_HIDE_TradeEventDate = function() {
    try {
        var vSYND_ACT_AMD_DT; // Utility Auto Fix Comments
        var vSYND_ACT_CREDIT_DT; // Utility Auto Fix Comments
        vSYND_ACT_AMD_DT = document.MAINFORM.SYND_ACT_AMD_DT.value;
        vSYND_ACT_CREDIT_DT = document.MAINFORM.SYND_ACT_CREDIT_DT.value;
        switch (SYS_ORG_FUNCTION_NAME) {
            case "SYND_ACTION":
                if (vSYND_ACT_AMD_DT != "") {
                    document.MAINFORM.SYND_ACT_AMD_DT.style.display = 'block';
                }
                if (vSYND_ACT_CREDIT_DT != "") {
                    document.MAINFORM.SYND_ACT_CREDIT_DT.style.display = 'block';
                }
                break;

            default:

                break;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_SyndAction.js*SHOW_HIDE_TradeEventDate", e);
    }
}

csLbiCompProto.SYND_ACTION_CONFIRM = function() {
    try {
        alert(222);
        switch (SYS_ORG_FUNCTION_NAME) {
            case "EPLC_Process_MT707_New":
            case "EPLC_AmendmentOneStep":
                document.MAINFORM.SYND_ACT_AMD_DT.value = document.MAINFORM.AMD_DT.value;
                alert(333);
                document.MAINFORM.SYND_ACT_AMD_EVENT_TYPE.value = "Amendment";
                break;

            default:
                document.MAINFORM.SYND_ACT_PAY_EVENT_TYPE.value = "Payment";
                break;

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_SyndAction.js*SYND_ACTION_CONFIRM", e);
    }
}

csLbiCompProto.get_SYND_ACTION_REF = function(ref) {
    try {
        document.MAINFORM.SYND_ACTION_REF.value = ref;
    } catch (e) {
        DisExcpt("SSSS_SRC_SYND_main_SyndAction.js*get_SYND_ACTION_REF", e);
    }
}