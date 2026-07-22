"path:SCRN/DO/PaymentTerms.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CHK_CPYT_C_PAY_PER = function() {
    try {
        var nCurrent; // Utility Auto Fix Comments
        var nOld; // Utility Auto Fix Comments
        var nResult; // Utility Auto Fix Comments
        var oDo; // Utility Auto Fix Comments
        var sFldName; // Utility Auto Fix Comments
        var sdoName; // Utility Auto Fix Comments
        sdoName = "PaymentTerms";
        sFldName = "CPYT_C_PAY_PER";
        nOld = 0;
        oDo = SYS_GetCurrentEditDo(sdoName);
        nSum = SYS_BeFloat(SYS_GetFldSumByDoName(sdoName, sFldName));

        if (oDo != null) {
            nOld = SYS_BeFloat(SYS_GetFldValueByDo(oDo, sFldName));
        }
        nCurrent = SYS_BeFloat(document.MAINFORM.elements[sFldName].value);
        nResult = nSum + nCurrent - nOld;

        if (nResult > 100) {
            alert("The total percent [" + nResult + "%] is more than 100%");
            EEHtml.getElementById("CPYT_C_PAY_PER").value = 0;
            EEHtml.getElementById("CPYT_N_PAY_AMT").value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.CPYT_CLASS_BY_C_SDA_FLAG = function() {
    try {
        if (document.MAINFORM.CPYT_C_SDA_FLAG.value == "Sight") {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_I_TENOR_DAYS, 'B');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_TYPE, 'B');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_I_TENOR_DAYS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_TYPE, 'M');
        }
        SYT_ChangeFldClass(document.MAINFORM.CPYT_C_SDA_FLAG, 'M');
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.CPYT_CLASS_BY_C_TENOR_TYPE = function() {
    try {
        if (document.MAINFORM.CPYT_C_TENOR_TYPE.value == "OTHER") {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_DESC, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_DESC, 'H');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.CPYT_N_PAY_AMT = function() {
    try {
        var nAmt; // Utility Auto Fix Comments
        var nPercent; // Utility Auto Fix Comments
        var sCcy; // Utility Auto Fix Comments
        sCcy = EEHtml.getElementById("CPYT_C_TRX_CCY").value;
        nAmt = SYS_BeFloat(EEHtml.getElementById("CPYT_N_PAY_TTL_AMT_TXCCY").value);
        nPercent = SYS_BeFloat(document.MAINFORM.CPYT_C_PAY_PER.value);
        if (nPercent < 0) {
            SYS_CheckError(document.MAINFORM.CPYT_C_PAY_PER, 'The percentage can not be negative!');
            document.MAINFORM.CPYT_C_PAY_PER.value = 0;
            return false;
        }
        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(sCcy, nAmt * nPercent / 100);
        CHK_CPYT_C_PAY_PER();
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.CPYT_PAY_PER = function() {
    try {
        var nAMT;
        var nTTL_AMT; // Utility Auto Fix Comments
        nTTL_AMT = SYS_BeFloat(document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value);
        nAMT = SYS_BeFloat(document.MAINFORM.CPYT_N_PAY_AMT.value);
        if (nAMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CPYT_N_PAY_AMT.value = 0;
            nAMT = 0;
        }
        if (nTTL_AMT > 0) {
            document.MAINFORM.CPYT_C_PAY_PER.value = SYS_BeInt(nAMT / nTTL_AMT * 100);
            CHK_CPYT_C_PAY_PER();
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        PaymentTermsHeader_PaymentTerms();
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var per; // Utility Auto Fix Comments
        per = SYS_BeInt(document.MAINFORM.CPYT_C_PAY_PER.value);
        /*	
if(per == 100){
		//alert("Please note this is a Mixpayment, user should not only add one 100% payment schedule!");
	//	return false;
		}
*/
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var eachamt; // Utility Auto Fix Comments
        var eachper; // Utility Auto Fix Comments
        var totalper; // Utility Auto Fix Comments
        var ttlamt; // Utility Auto Fix Comments
        ccy = document.MAINFORM.CPYT_C_TRX_CCY.value;
        ttlamt = SYS_BeFloat(document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value);
        amt = SYS_BeFloat(SYS_GetFldSumByDoName("PaymentTerms", "CPYT_N_PAY_AMT"));
        totalper = SYS_BeFloat(SYS_GetFldSumByDoName("PaymentTerms", "CPYT_C_PAY_PER"));
        eachamt = ttlamt - amt;
        eachper = 100 - totalper;
        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(ccy, eachamt);
        document.MAINFORM.CPYT_C_PAY_PER.value = eachper;
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.PaymentTermsHeader_PaymentTerms = function() {
    try {
        var arr_do;
        var i;
        var sResult;
        var sdoName;
        document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = "";
        sResult = "";
        sdoName = "PaymentTerms";
        arr_do = SYS_GetObjByDoName(sdoName);
        for (i = 0; i < arr_do.length; i++) {
            sPer = SYS_GetFldValueByDo(arr_do[i], "CPYT_C_PAY_PER");
            nDays = SYS_GetFldValueByDo(arr_do[i], "CPYT_I_TENOR_DAYS");
            sType = SYS_GetFldValueByDo(arr_do[i], "CPYT_C_TENOR_TYPE");
            sDesc = (sType == "OTHER") ? SYS_GetFldValueByDo(arr_do[i], "CPYT_C_TENOR_DESC") : sType;
            if (nDays > 0) {
                sResult += sPer + " " + "PCT" + " AT " + nDays + " " + sDesc + "\n";
            } else {
                sResult += sPer + " " + "PCT" + " AT SIGHT" + "\n";
            }
        }
        document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = sResult;
        EEHtml.fireEvent(document.MAINFORM.CPYT_C_MIX_PAY_DETAIL, "onchange");
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        CPYT_CLASS_BY_C_SDA_FLAG();
        CPYT_CLASS_BY_C_TENOR_TYPE();

    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.CPYT_C_PAY_PER_onchange = function(event) {
    try {
        CPYT_N_PAY_AMT();
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.CPYT_C_SDA_FLAG_onchange = function(event) {
    try {
        CPYT_CLASS_BY_C_SDA_FLAG();
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.CPYT_C_TENOR_DESC_onchange = function(event) {
    try {
        CPYT_CLASS_BY_C_TENOR_TYPE();
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.CPYT_C_TENOR_TYPE_onchange = function(event) {
    try {
        CPYT_CLASS_BY_C_TENOR_TYPE();
        CPYT_CLASS_BY_C_SDA_FLAG();
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.CPYT_I_TENOR_DAYS_onchange = function(event) {
    try {
        CPYT_CLASS_BY_C_SDA_FLAG();
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}

csDOScreenProto.CPYT_N_PAY_AMT_onchange = function(event) {
    try {
        CPYT_PAY_PER();
    } catch (e) {
        DisExcpt("SSSS_PaymentTerms.js", e);
    }
}