"path:SCRN/Library/REIM/SWIFT_MT799.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_ISSUE_NARR_MAIL = function() {
    try {
        if (document.MAINFORM.SEND_TO.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_NARR_MAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_NARR_MAIL, 'P');
            document.MAINFORM.ISSUE_NARR_MAIL.value = '';
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT799.js", e);
    }
}

csLbiCompProto.Cal_ISSUE_NARR_TAG_79 = function() {
    try {
        if (document.MAINFORM.SEND_TO.value == 'MT799' || document.MAINFORM.SEND_TO.value == 'MT999') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_NARR_TAG_79, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_NARR_TAG_79, 'P');
            document.MAINFORM.ISSUE_NARR_TAG_79.value = '';
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT799.js", e);
    }
}

csLbiCompProto.Get_Ack_79 = function() {
    try {
        var PaymentDebit_DRDate; // Utility Auto Fix Comments
        var PaymentDebit_length; // Utility Auto Fix Comments
        var PaymentDebit_obj; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var vCPYT_DR_VAL_DATE; // Utility Auto Fix Comments
        if ("SettleClaim" == SYS_ORG_FUNCTION_NAME) {
            vCPYT_DR_VAL_DATE = '';
            PaymentDebit_obj = SYS_GetObjByDoName('PaymentDebit');
            PaymentDebit_length = PaymentDebit_obj.length;
            PaymentDebit_DRDate = '';
            for (i = 0; i < PaymentDebit_length; i++) { // Utility Auto Fix Comments
                PaymentDebit_DRDate = SYS_GetFldValueByDo(PaymentDebit_obj[i], 'CPYT_DR_VAL_DATE') + '  ' + SYS_GetFldValueByDo(PaymentDebit_obj[i], 'CPYT_DR_CCY') + ' ' + SYS_GetFldValueByDo(PaymentDebit_obj[i], 'CPYT_DR_AMT_DRCCY');
                vCPYT_DR_VAL_DATE += PaymentDebit_DRDate + '\n           ';
                if (i == PaymentDebit_length - 1) {
                    vCPYT_DR_VAL_DATE = vCPYT_DR_VAL_DATE.trim();
                }
            }



            if (document.MAINFORM.SEND_TO.value == 'MT799') {
                document.MAINFORM.ISSUE_NARR_TAG_79.value = 'REIM CLAIM SETTLED: \n' + 'YOUR REF----' + document.MAINFORM.LC_NO.value + '\n' + 'CLM BK BIC----' + document.MAINFORM.CLM_BK_SW_ADD.value + '\n' + 'AMT----' + document.MAINFORM.LC_CCY.value + document.MAINFORM.REIM_INST_AMT.value + '\n' + 'DR DATE----' + vCPYT_DR_VAL_DATE + '\n';
            }
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT799.js", e);
    }
}