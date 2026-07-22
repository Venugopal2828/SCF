"path:SCRN/DO/PaymentInstruction.jsp";

function PaymentInstruction_CancelCheck() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstruction.js", e);
    }
}

function PaymentInstruction_ConfirmBusinessCall() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentInstruction.js", e);
    }
}

function PaymentInstruction_ConfirmBusinessCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstruction.js", e);
    }
}

function PaymentInstruction_ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstruction.js", e);
    }
}

function PaymentInstruction_InitValues() {
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

function PaymentInstruction_PostconditionOnInit() {
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

function PaymentInstruction_PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentInstruction.js", e);
    }
}

function PaymentInstruction_initFieldEvent() {
    try {} catch (e) {
        DisExcpt("SSSS_PaymentInstruction.js", e);
    }
}