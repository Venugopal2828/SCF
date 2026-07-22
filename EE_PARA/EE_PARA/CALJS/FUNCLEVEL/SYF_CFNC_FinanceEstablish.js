var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        SYS_GetDataForDO('GET_REGISTER_DO');
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceEstablish.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        FLD_CFNC_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceEstablish.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_AccountsCheck = function() {
    try {
        if (document.MAINFORM.ASSET_ACNO.value != '' && document.MAINFORM.LIAB_ACNO.value != '') {
            if (document.MAINFORM.ASSET_ACNO.value.toLowerCase() == document.MAINFORM.LIAB_ACNO.value.toLowerCase()) {
                alert('ASSET_ACNO and LIAB_ACNO cannot be the same. Please select the LIAB_ACNO again');
                document.MAINFORM.LIAB_ACNO.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceEstablish.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_loadDoDataComplete = function() {
    try {
        if (SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            getCPYT_DR_TTL_AMT_TTLCCY();
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceEstablish.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_ASSET_ACNO_onchange = function() {
    try {
        if (document.MAINFORM.ASSET_ACNO.value != "") {
            if (SYM_CFNC_SpecialCharacters_onchange(document.MAINFORM.ASSET_ACNO.value) == false) {
                document.MAINFORM.ASSET_ACNO.value = "";
            }
        }
        SYF_CFNC_AccountsCheck();
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceEstablish.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceEstablish.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_LIAB_ACNO_onchange = function() {
    try {
        if (document.MAINFORM.LIAB_ACNO.value != "") {
            if (SYM_CFNC_SpecialCharacters_onchange(document.MAINFORM.LIAB_ACNO.value) == false) {
                document.MAINFORM.LIAB_ACNO.value = "";
            }
        }
        SYF_CFNC_AccountsCheck();
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceEstablish.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_APPL_AC_MRGN_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceEstablish.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_ASSET_ACNO_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceEstablish.js", e);
    }
}