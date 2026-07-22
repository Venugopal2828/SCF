"path:SCRN/DO/Debit Header_ClaimDo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_CLAIMDO_DR_TOTAL_PCT = function() {
    try {
        var doDetail; // Utility Auto Fix Comments
        var fldObj; // Utility Auto Fix Comments
        var sumPct; // Utility Auto Fix Comments
        doDetail = SYS_getDoByXpath('Claim.DebitHeader_ClaimDo.DebitDetails_ClaimDo');
        sumPct = doDetail.getFieldSumValue('CPYT_DR_PER');
        fldObj = SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', "CLAIMDO_DR_TOTAL_PCT");
        if (doDetail != null && doDetail != "" && doDetail != "undefined") {
            fldObj.value = sumPct;
        } else {
            fldObj.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var arrDebit; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var tempSum; // Utility Auto Fix Comments
        var ttlAmt; // Utility Auto Fix Comments
        /*
targetDo = SYS_GetObjByDoName("PaymentInstructionDealer");
        if(targetDo.length>0 && document.MAINFORM.CPYT_C_SDA_FLAG.value != "Sight"){
	  	return true;
	  }
Modify by jeff for check the debit/credit amount when accept deferred payment record  
  if(SYS_ORG_FUNCTION_NAME=="IPLC_PayAccept" && document.MAINFORM.CPYT_C_SDA_FLAG.value != "Sight"){
    return true;
    }
	else{
    arrDebit=SYS_GetObjByDoName('PaymentDebit');
    ttlAmt = SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value);
    tempSum = 0;
    len = arrDebit.length;
    debit = null;
    for(i=0;i<len;i++){
	  debit = arrDebit[i];
	  tempSum += SYS_BeFloat(debit.getDoValueByName("CPYT_DR_AMT_TXCCY"));
    }
    if(tempSum!=ttlAmt){
    	alert("Please note that the debit amt does not equal to total amt!");
    	return false;
    }else{
    	return true;
    }
    }
*/

        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.DebitHeader_CPYT_DR_TTL_AMT_TTLCCY = function() {
    try {
        var CPYT_DR_AMT_DRCCY; // Utility Auto Fix Comments
        var CPYT_DR_AMT_TXCCY; // Utility Auto Fix Comments
        var CPYT_DR_TTL_AMT_TTLCCY; // Utility Auto Fix Comments
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
        CPYT_DR_TTL_AMT_TTLCCY = SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value);
        ccy = document.MAINFORM.CPYT_DR_TTL_CCY.value;
        targetDo = null;
        targetDo_records = null;
        targetDo = SYS_getDoByXpath("Claim.DebitHeader_ClaimDo.DebitDetails_ClaimDo");
        targetDo_records = SYS_getRecords(targetDo);
        if (targetDo_records == null || targetDo_records.length == 0) {
            return;
        }
        len = targetDo_records.length;
        _data = []; // Utility Auto Fix Comments
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            vDo = targetDo_records[i];
            percent = SYS_BeFloat(SYS_getValFromRec(vDo, 'CPYT_DR_PER'));
            rate = SYS_BeFloat(SYS_getValFromRec(vDo, 'CPYT_DR_BUY_RATE'));
            totalamount = SYS_BeFloat(SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CPYT_DR_TTL_AMT_TTLCCY').value);
            trxamount = totalamount * percent * rate / 100;
            realamount = totalamount * percent / 100;
            CPYT_DR_AMT_DRCCY = SYS_setValToRec(vDo, 'CPYT_DR_AMT_DRCCY', trxamount);
            _data.push(CPYT_DR_AMT_DRCCY); // Utility Auto Fix Comments
            CPYT_DR_AMT_TXCCY = SYS_setValToRec(vDo, 'CPYT_DR_AMT_TXCCY', realamount);
            _data.push(CPYT_DR_AMT_TXCCY); // Utility Auto Fix Comments
        }
        SYS_reLoadGrid(targetDo, _data); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        getCPYT_DR_TTL_AMT_TTLCCY();
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.PaymentDealer_PaymentDebitHeader_PaymentDebit = function(node, recordId, status) {
    try {
        PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit(node, recordId, status);
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit = function(node, recordId, status) {
    try {
        var CrdNum_obj; // Utility Auto Fix Comments
        var oldValue; // Utility Auto Fix Comments
        var vCount; // Utility Auto Fix Comments
        CrdNum_obj = document.MAINFORM.CPYT_NO_DR;
        if (status == "D") {
            oldValue = CrdNum_obj.value;
            CrdNum_obj.value = oldValue - 1;
            return;
        }
        vCount = node.parentObj.getChildDoRecordCount("PaymentDebit");
        CrdNum_obj.value = vCount;
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        setTimeout(Cal_CLAIMDO_DR_TOTAL_PCT, 1000);

    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        SubDoFrame.showDO("Claim.DebitHeader_ClaimDo.DebitDetails_ClaimDo", "B_div", "Claim Debit");
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.getCPYT_DR_TTL_AMT_TTLCCY = function() {
    try {
        document.MAINFORM.CPYT_DR_TTL_CCY.value = SYS_getScreenObjByxpath('Claim', 'CLM_CCY').value;
        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_TTL_CCY.value, SYS_getScreenObjByxpath('Claim', 'CLM_TRX_CCY_AMT').value);
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.CLAIMDO_DR_TOTAL_PCT_onchange = function(event) {
    try {
        setTimeout(Cal_CLAIMDO_DR_TOTAL_PCT, 100);
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_TTL_AMT_TTLCCY_onchange = function(event) {
    try {
        DebitHeader_CPYT_DR_TTL_AMT_TTLCCY();
    } catch (e) {
        DisExcpt("SSSS_Debit Header_ClaimDo.js", e);
    }
}