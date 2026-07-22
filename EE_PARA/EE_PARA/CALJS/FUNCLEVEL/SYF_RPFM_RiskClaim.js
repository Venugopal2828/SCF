var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CLM_DT.value = SYS_DATE;
        document.MAINFORM.CLM_CCY.value = document.MAINFORM.MAST_RISK_CCY.value;
        document.MAINFORM.CLAIM_AMT.value = document.MAINFORM.SYND_PART_AMT.value;
    } catch (e) {
        DisExcpt("SYF_RPFM_RiskClaim.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        FLD_RPFM_DIARY_NARRATIVE_onchange();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_RPFM_RiskClaim.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_CLAIM_AMT_onchange = function(event) {
    try {
        document.MAINFORM.CLAIM_AMT.value = SYT_AmtFormat(document.MAINFORM.CLM_CCY.value, SYS_BeFloat(document.MAINFORM.CLAIM_AMT.value));
        SYM_RPFM_CLAIM_AMT_CHECK();
    } catch (e) {
        DisExcpt("SYF_RPFM_RiskClaim.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_CLM_DT_onchange = function(event) {
    try {
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CLM_DT')
        if (SYS_GetSubDays(document.MAINFORM.MAST_START_DT.name, document.MAINFORM.CLM_DT.name) < 0) {
            alert("claim Date is not allowed in the past times!");
            document.MAINFORM.CLM_DT.value = '';
        }
        if (SYS_GetSubDays(document.MAINFORM.MAST_END_DT.name, document.MAINFORM.CLM_DT.name) > 0) {
            alert("claim Date is not allowed more than expiry date!");
            document.MAINFORM.CLM_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RiskClaim.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_RPFM_RiskClaim.js", e);
    }
}