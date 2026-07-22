"path:SCRN/DO/PaymentInstructionDealer.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstructionDealer.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        checkUnpaidFlag();
    } catch (e) {
        DisExcpt("SSSS_PaymentInstructionDealer.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstructionDealer.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstructionDealer.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.CPYT_ORIGIN_MODULE.value = SYS_MODULE_NAME;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstructionDealer.js", e);
    }
}

csDOScreenProto.Payment_isDeferredSight = function() {
    try {
        var deferred; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME == "EPLC_PayAccept") {
            deferred = document.MAINFORM.SIGHT_PMT_FLG.value;
            if (deferred == "YES") {
                return true;
            } else {
                return false;
            }
        }
        if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAccept" || SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount" || SYS_ORG_FUNCTION_NAME == "SBLC_ProcessClaim") {
            return false;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentInstructionDealer.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        SYS_DisableDoButton("PaymentInstrDeal", "ADD,DEL", true);

    } catch (e) {
        DisExcpt("SSSS_PaymentInstructionDealer.js", e);
    }
}

csDOScreenProto.checkUnpaidFlag = function() {
    try {
        var i; // Utility Auto Fix Comments
        var isDeferred; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetdo; // Utility Auto Fix Comments
        var vCfncRef; // Utility Auto Fix Comments
        targetdo = SYS_GetObjByDoName('PaymentInstrDeal');
        isDeferred = Payment_isDeferredSight();
        len = targetdo.length;
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            vDo = targetdo[i];
            vDo.putDoValueByName("CPYT_C_OUTPUT_FLAG", 'N');
            vDo.putDoValueByName("CPYT_C_SETTLE_END_FLAG", 'N');
            if (vDo.getDoValueByName('CPYT_C_SDA_FLAG') == 'Sight') {
                if (!isDeferred) {
                    vDo.putDoValueByName("CPYT_C_OUTPUT_FLAG", 'Y');
                    vDo.putDoValueByName("CPYT_C_SETTLE_END_FLAG", 'Y');
                }
            } else {
                vCfncRef = SYS_GetFldValueByDo(vDo, "CPYT_C_CFNC_REF");
                if (vCfncRef != null && vCfncRef.length > 0) {
                    vDo.putDoValueByName("CPYT_C_OUTPUT_FLAG", 'Y');
                }
            }
        }
        SYS_RefreshDoGrid(targetdo);
    } catch (e) {
        DisExcpt("SSSS_PaymentInstructionDealer.js", e);
    }
}