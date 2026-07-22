"path:SCRN/DO/Credit Header.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Header.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Header.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Header.js", e);
    }
}

csDOScreenProto.InitValues = function(curDo) {
    try {
        var CPYT_N_PAY_AMT = 0;
        var nCCY = "";

        CPYT_N_PAY_AMT = SYS_getCurrNodeParentValue('PaymentInstruction', 'CPYT_N_PAY_AMT', curDo);

        if (SYS_MODULE_NAME == "EXLC") {
            nCCY = SYS_getValueFromMain('LC_CCY');
        } else if (SYS_MODULE_NAME == "IMLC") {
            nCCY = SYS_getValueFromMain('PRES_CCY');
        } else if (SYS_MODULE_NAME == "GTEE") {
            nCCY = SYS_getValueFromMain('GTEE_CCY');
        } else if (SYS_MODULE_NAME == "EXCO") {
            nCCY = SYS_getValueFromMain('COLL_CCY');
        }

        document.MAINFORM.CPYT_CR_TTL_CCY.value = nCCY;
        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(nCCY, SYS_BeFloat(CPYT_N_PAY_AMT));

        /*
if(SYS_MODULE_NAME=="EXLC"){
document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value=SYS_getCurrNodeParentValue('PaymentInstruction','CPYT_N_PAY_AMT',curDo);
document.MAINFORM.CPYT_CR_TTL_CCY.value=SYS_getValueFromMain('LC_CCY');
}
else if(SYS_MODULE_NAME=="IMLC"){
//document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value=SYS_getValueFromMain('AMT_PRES_BK_LC_CCY');
document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value=SYS_getCurrNodeParentValue('PaymentInstruction','CPYT_N_PAY_AMT',curDo);
document.MAINFORM.CPYT_CR_TTL_CCY.value=SYS_getValueFromMain('PRES_CCY');
}
else if(SYS_MODULE_NAME=="GTEE"){
document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value=SYS_getCurrNodeParentValue('PaymentInstruction','CPYT_N_PAY_AMT',curDo);
document.MAINFORM.CPYT_CR_TTL_CCY.value=SYS_getValueFromMain('STL_CCY_AMT');
}
else if(SYS_MODULE_NAME=="EXCO"){
var CPYT_N_PAY_AMT=SYS_getCurrNodeParentValue('PaymentInstruction','CPYT_N_PAY_AMT',curDo);
document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value=CPYT_N_PAY_AMT;
document.MAINFORM.CPYT_CR_TTL_CCY.value=SYS_getValueFromMain('COLL_CCY');
}
*/
    } catch (e) {
        DisExcpt("SSSS_Credit Header.js", e);
    }
}

csDOScreenProto.OnSelected = function(curDo) {
    try {
        InitValues(curDo);
    } catch (e) {
        DisExcpt("SSSS_Credit Header.js", e);
    }
}