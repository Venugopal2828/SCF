var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CZQO_PaymentLimitbyMaster.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CZQO_PaymentLimitbyMaster.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() { 
    try { 
        document.MAINFORM.LMTS_CUST.value = '...'; 
        document.MAINFORM.LMTS_RCUST.value = '...'; 
        document.MAINFORM.LMTS_SUB.value = '...'; 
        document.MAINFORM.LMTS_FACI.value = '...'; 
    } catch (e) { 
        DisExcpt("SYF_CZQO_PaymentLimitbyMaster.js*PostconditionOnInit", e); 
    } 
} 