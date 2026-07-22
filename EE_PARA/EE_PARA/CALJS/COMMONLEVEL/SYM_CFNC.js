function SYM_CFNC_MPO_Multi_Fields(Array) {
    try {

        for (x = 0; x < Array.length; x++) {
            SYT_ChangeFldClass(document.getElementById(Array[x][0]), Array[x][1]);
        }
    } catch (e) {
        DisExcpt("SYM_CFNC.js", e);
    }
}

function SYM_CFNC_Clear_Field_Value(FieldNameArray) {
    try {

        for (i = 0; i < FieldNameArray.length; i++) {
            if (document.getElementById(FieldNameArray[i]) !== null && document.getElementById(FieldNameArray[i]) !== undefined) {
                document.getElementById(FieldNameArray[i]).value = "";
            } else {
                alert("This field " + FieldNameArray[i] + "doesn't exist! Please check again!");
            }
        }
    } catch (e) {
        DisExcpt("SYM_CFNC.js", e);
    }
}

function SYM_CFNC_getValueFromMain() {
    try {

        document.MAINFORM.C_TRX_CCY.value = SYS_getValueFromMain(TRX_CCY);
    } catch (e) {
        DisExcpt("SYM_CFNC.js", e);
    }
}

function SYM_CFNC_Set_AMT_toPaymentDebit() {
    try {

        if (SYS_ORG_FUNCTION_NAME == "FinanceEstablish" || SYS_ORG_FUNCTION_NAME == "FinanceAmendment") {
            if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'Up Front') {
                document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
                document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.CFNC_N_NET_AMT.value;
                EEHtml.fireEvent(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY, "onchange");
                EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, "onchange");
            } else {
                document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
                document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
                EEHtml.fireEvent(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY, "onchange");
                EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, "onchange");
            }
        }





    } catch (e) {
        DisExcpt("SYM_CFNC.js", e);
    }
}

function SYM_CFNC_SpecialCharacters_onchange(FieldValues) {
    try {

        //var regex = /^[A-Za-z0-9]+$/;
        var regex = /^[A-Za-z0-9\s]+$/; 
        var isValid = regex.test(FieldValues);
        if (!isValid) {
            alert("Field Contains Special Characters.");
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_CFNC.js", e);
    }
}