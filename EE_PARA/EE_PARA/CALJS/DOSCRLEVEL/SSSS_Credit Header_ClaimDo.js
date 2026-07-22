"path:SCRN/DO/Credit Header_ClaimDo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_CLAIMDO_CR_TOTAL_PCT = function() {
    try {
        var doDetail; // Utility Auto Fix Comments
        var fldObj; // Utility Auto Fix Comments
        var sumPct; // Utility Auto Fix Comments
        doDetail = SYS_getDoByXpath('Claim.CreditHeader_ClaimDo.CreditDetails_ClaimDo');
        sumPct = doDetail.getFieldSumValue('CPYT_CR_PER');
        fldObj = SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', "CLAIMDO_CR_TOTAL_PCT");
        if (doDetail != null && doDetail != "" && doDetail != "undefined") {
            fldObj.value = sumPct;
        } else {
            fldObj.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        getCPYT_CR_TTL_AMT_TTLCCY();
    } catch (e) {
        DisExcpt("SSSS_Credit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        setTimeout(Cal_CLAIMDO_CR_TOTAL_PCT, 1000);

    } catch (e) {
        DisExcpt("SSSS_Credit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        SubDoFrame.showDO("Claim.CreditHeader_ClaimDo.CreditDetails_ClaimDo", "C_div", "Claim Credit");
    } catch (e) {
        DisExcpt("SSSS_Credit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.getCPYT_CR_TTL_AMT_TTLCCY = function() {
    try {
        document.MAINFORM.CPYT_CR_TTL_CCY.value = SYS_getScreenObjByxpath('Claim', 'CLM_CCY').value;
        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_TTL_CCY.value, SYS_getScreenObjByxpath('Claim', 'CLM_TRX_CCY_AMT').value);
    } catch (e) {
        DisExcpt("SSSS_Credit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.onchange_CPYT_CR_TTL_AMT_TTLCCY = function() {
    try {
        var CPYT_CR_AMT_CRCCY; // Utility Auto Fix Comments
        var CPYT_CR_AMT_TXCCY; // Utility Auto Fix Comments
        var CPYT_CR_PER_obj; // Utility Auto Fix Comments
        var _data; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var realamount; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var targetDo_records; // Utility Auto Fix Comments
        var totalamount; // Utility Auto Fix Comments
        var trxamount; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        ccy = document.MAINFORM.CPYT_CR_TTL_CCY.value;
        targetDo = null;
        targetDo_records = null;
        targetDo = SYS_getDoByXpath("Claim.CreditHeader_ClaimDo.CreditDetails_ClaimDo");
        targetDo_records = SYS_getRecords(targetDo);
        if (targetDo_records == null || targetDo_records.length == 0) {
            return;
        }
        len = targetDo_records.length;
        CPYT_CR_PER_obj = SYS_getScreenObjByxpath("Claim.CreditHeader_ClaimDo.CreditDetails_ClaimDo", 'CPYT_CR_PER');
        _data = []; // Utility Auto Fix Comments
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            vDo = targetDo_records[i];
            percent = SYS_BeFloat(SYS_getValFromRec(vDo, 'CPYT_CR_PER'));
            rate = SYS_BeFloat(SYS_getValFromRec(vDo, 'CPYT_CR_BUY_RATE'));
            totalamount = SYS_BeFloat(SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_AMT_TTLCCY').value);
            trxamount = totalamount * percent * rate / 100;
            realamount = totalamount * percent / 100;
            CPYT_CR_AMT_CRCCY = SYS_setValToRec(vDo, 'CPYT_CR_AMT_CRCCY', trxamount);
            _data.push(CPYT_CR_AMT_CRCCY); // Utility Auto Fix Comments
            CPYT_CR_AMT_TXCCY = SYS_setValToRec(vDo, 'CPYT_CR_AMT_TXCCY', realamount);
            _data.push(CPYT_CR_AMT_TXCCY); // Utility Auto Fix Comments
        }
        SYS_reLoadGrid(targetDo, _data); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_Credit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.CLAIMDO_CR_TOTAL_PCT_onchange = function(event) {
    try {
        setTimeout(Cal_CLAIMDO_CR_TOTAL_PCT, 100);
    } catch (e) {
        DisExcpt("SSSS_Credit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_CR_TTL_AMT_TTLCCY_onchange = function(event) {
    try {
        onchange_CPYT_CR_TTL_AMT_TTLCCY();
    } catch (e) {
        DisExcpt("SSSS_Credit Header_ClaimDo.js", e);
    }
}