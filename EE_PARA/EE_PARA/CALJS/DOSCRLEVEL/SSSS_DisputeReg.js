"path:SCRN/o2m/DisputeReg.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CheckrecordUpdate = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == "DisReg") {
            var tempV = SYS_getValueFromMain("FA_DOC_REF_TEMP");
            var faDocRef = document.MAINFORM.FA_DOC_REF.value;
            tempV = tempV + faDocRef;
            SYS_setValueToMain("FA_DOC_REF_TEMP", tempV);
        }
    } catch (e) {
        DisExcpt("SSSS_DisputeReg.js*CheckrecordUpdate", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.FA_TEMP2.value = '1';
    } catch (e) {
        DisExcpt("SSSS_DisputeReg.js*ConfirmBusinessCall", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!check_amount()) {
            return false;
        }
        if (!check_DisputDate()) {
            return false;
        }
        CheckrecordUpdate();
        return true;
    } catch (e) {
        DisExcpt("SSSS_DisputeReg.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.FA_DOC_STATUS.value = 'DSP';
    } catch (e) {
        DisExcpt("SSSS_DisputeReg.js*InitValues", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_DSP_NO.value = SYS_getValueFromMain('FA_DSP_NO');
        document.MAINFORM.FA_DSP_REF.value = SYS_getValueFromMain('FA_DSP_REF');
        document.MAINFORM.FA_DSP_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DSP_AMT.value);
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_LOAN_BAL.value);
        document.MAINFORM.FA_NOTIFY_BY.value = SYS_getValueFromMain('FA_NOTIFY_BY');
        document.MAINFORM.FA_DOC_STATUS.value = 'DSP';
        get_notify_by_name_value();

        if (SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_BAL.value) > 0 && document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            alert('There is still Financing balance unpaid!');
        }
        check_DisputDate();
        var bb = EEHtml.getElementById('bbb');
        if (document.MAINFORM.FA_BUSI_TYPE.value != 'EF') {
            bb.style.display = 'none';
        } else {
            bb.style.display = '';
        }
    } catch (e) {
        DisExcpt("SSSS_DisputeReg.js*PostconditionOnInit", e);
    }
}

csDOScreenProto.check_DisputDate = function() {
    try {
        var tempFldName = "DSP_DT_TEMP";
        var obj = EEHtml.getElementById(tempFldName);
        if (obj == null || obj == "undefined") {
            obj = document.createElement("input");
            obj.name = tempFldName;
            obj.id = tempFldName;
            obj.setAttribute("type", "hidden");
            document.MAINFORM.appendChild(obj);
        }
        obj.value = '';
        document.MAINFORM.DSP_DT_TEMP.value = parent.SYS_getValueFromMain('FA_DSP_DT');
        var cDays = SYT_GetSubDays_SCF(document.MAINFORM.DSP_DT_TEMP.name, document.MAINFORM.FA_DOC_VAL_DT.name);
        if (cDays > 0) {
            alert("The Dispute Date can't be ealier than the Doc Value Date");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_DisputeReg.js*check_DisputDate", e);
    }
}

csDOScreenProto.check_amount = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value) < SYS_BeFloat(document.MAINFORM.FA_DSP_AMT.value)) {
            SYS_CheckError(document.MAINFORM.FA_DSP_AMT, "Dispute amount can't exceed document amount!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_DisputeReg.js*check_amount", e);
    }
}

csDOScreenProto.get_notify_by_name_value = function() {
    try {
        if (document.MAINFORM.FA_NOTIFY_BY.value == '1') {
            document.MAINFORM.FA_NOTIFY_BY_NM.value = SYS_getValueFromMain('FA_IF_NM');
        } else if (document.MAINFORM.FA_NOTIFY_BY.value == '2') {
            document.MAINFORM.FA_NOTIFY_BY_NM.value = SYS_getValueFromMain('FA_EF_NM');
        } else if (document.MAINFORM.FA_NOTIFY_BY.value == '3') {
            document.MAINFORM.FA_NOTIFY_BY_NM.value = SYS_getValueFromMain('FA_BUYER_NM');
        } else if (document.MAINFORM.FA_NOTIFY_BY.value == '4') {
            document.MAINFORM.FA_NOTIFY_BY_NM.value = SYS_getValueFromMain('FA_SEL_NM');
        } else {
            document.MAINFORM.FA_NOTIFY_BY_NM.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_DisputeReg.js*get_notify_by_name_value", e);
    }
}

csDOScreenProto.FA_DSP_AMT_onchange = function() {
    try {
        check_amount();
    } catch (e) {
        DisExcpt("SSSS_DisputeReg.js*FA_DSP_AMT_onchange", e);
    }
}

csDOScreenProto.FA_NOTIFY_BY_onchange = function() {
    try {
        get_notify_by_name_value();
        EEHtml.fireEvent(document.MAINFORM.FA_NOTIFY_BY_NM, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_DisputeReg.js*FA_NOTIFY_BY_onchange", e);
    }
}