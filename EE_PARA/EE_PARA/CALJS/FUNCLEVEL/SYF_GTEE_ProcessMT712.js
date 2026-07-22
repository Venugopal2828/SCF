var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AC_WT_BK_ID', 'AC_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('AC_WT_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_DT_onchange = function(event) {
    try {
        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.CLM_DT.name) < 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, "Claim Register Date must be later than Registration Date!");
            document.MAINFORM.CLM_DT.value = '';
        } else if ((SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.CLM_DT.name) >= 0)) {
            SYS_CheckError(document.MAINFORM.CLM_DT, "Claim Register Date is not allowed later than Expiry/Review Date");
            document.MAINFORM.CLM_DT.value = '';
        }

        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CLM_DT');
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_TRX_CCY_AMT_onchange = function(event) {
    try {
        var value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
        if (SYM_GTEE_CHK_NEG(value)) {
            alert("The amount field should not accepts negative values");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
        }
        var nORIGIN_GTEE_BAL = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value);
        var nCLM_AMT_TRXCCY = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        if (nCLM_AMT_TRXCCY > nORIGIN_GTEE_BAL) {
            alert("Claim Amount can not exceed the Outstanding Guarantee Amount");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_52_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_52_ID', 'ISSUE_BK_52_ID');
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value != '') {
            SYS_InqCUBK_byCondition('ISSUE_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ISSUE_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT712.js", e);
    }
}