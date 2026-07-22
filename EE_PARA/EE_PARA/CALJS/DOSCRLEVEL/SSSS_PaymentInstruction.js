"path:SCRN/DO/PaymentInstruction.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstruction.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstruction.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstruction.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var CPYT_N_PAY_AMT = 0;
        var nCCY = "";
        document.MAINFORM.CPYT_ACPT_DT.value = SYS_DATE;
        if (SYS_MODULE_NAME == "EPLC") {
            nCCY = SYS_getValueFromMain('LC_CCY');
        } else if (SYS_MODULE_NAME == "IPLC") {
            nCCY = SYS_getValueFromMain('PRES_CCY');
        } else if (SYS_MODULE_NAME == "GTEE") {
            nCCY = SYS_getValueFromMain('STL_CCY_AMT');
        } else if (SYS_MODULE_NAME == "EXCO") {
            nCCY = SYS_getValueFromMain('COLL_CCY');
        }

        document.MAINFORM.CPYT_PAY_CCY.value = nCCY;
        /*
CPYT_N_PAY_AMT =SYS_getCurrNodeParentValue('PaymentInstruction','CPYT_N_PAY_AMT',curDo);

if(SYS_MODULE_NAME=="EXLC"){
    nCCY =SYS_getValueFromMain('LC_CCY');
}
else if(SYS_MODULE_NAME=="IMLC"){
    nCCY =SYS_getValueFromMain('PRES_CCY');
}
else if(SYS_MODULE_NAME=="GTEE"){
    nCCY =SYS_getValueFromMain('STL_CCY_AMT');
}
else if(SYS_MODULE_NAME=="EXCO"){
    nCCY =SYS_getValueFromMain('COLL_CCY');
}

document.MAINFORM.CPYT_CR_TTL_CCY.value =nCCY;
document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value =SYT_AmtFormat(nCCY,SYS_BeFloat(CPYT_N_PAY_AMT));
*/

        if (SYS_ORG_FUNCTION_SHORT_NAME == "PayAccp") {
            if (document.MAINFORM.CPYT_C_SDA_FLAG.value == 'Sight') {
                document.MAINFORM.CPYT_PAY_INSTR_FLAG.value = 'F';
            } else {
                document.MAINFORM.CPYT_PAY_INSTR_FLAG.value = 'A';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentInstruction.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var nCCY = "";
        document.MAINFORM.CPYT_ACPT_DT.value = SYS_DATE;
        if (SYS_MODULE_NAME == "EPLC") {
            nCCY = SYS_getValueFromMain('LC_CCY');
        } else if (SYS_MODULE_NAME == "IPLC") {
            nCCY = SYS_getValueFromMain('PRES_CCY');
        } else if (SYS_MODULE_NAME == "GTEE") {
            nCCY = SYS_getValueFromMain('STL_CCY_AMT');
        } else if (SYS_MODULE_NAME == "EXCO") {
            nCCY = SYS_getValueFromMain('COLL_CCY');
        }

        document.MAINFORM.CPYT_PAY_CCY.value = nCCY;

    } catch (e) {
        DisExcpt("SSSS_PaymentInstruction.js", e);
    }
}