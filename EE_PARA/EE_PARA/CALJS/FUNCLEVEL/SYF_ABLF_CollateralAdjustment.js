var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_ABLF_For_cllateral_Init();
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_ABLF_For_cllateral_psot();
        SYF_ABLF_Cal_Lowest_CollVal();
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_ABLF_For_cllateral_cfm();
        SYM_ABLF_Chk_Line();
        SYM_ABLF_ADJ_REF();
        SYM_ABLF_ALERT_FLG_calculate();
        SYM_ABLF_VAL_FLG_calculate();
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if ('RE' != SYS_FUNCTION_TYPE && 'EC' != SYS_FUNCTION_TYPE && 'IQ' != SYS_FUNCTION_TYPE) {
            SYS_GetDataForDO_S("Get_Collateral", "N", false, '', "CollateralAdjustment");
        }

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_Lowest_CollVal = function() {
    try {

        document.MAINFORM.REG_LOWEST_VAL.value = SYS_FloatMul(SYS_FloatDiv(document.MAINFORM.REG_LOAN_BAL.value, document.MAINFORM.FA_MAX_LOAN_PERC.value), 100);
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_ExcelUploaded = function() {
    try {

        SYM_ABLF_Cal_Uploaded_Coll_Val();
        return;
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_UpLoadFile_CollateralEntry = function() {
    try {

        SYM_ABLF_ClearUploadCollDO();
        SYS_UpLoadInvFile('UploadCollateral', 'SYF_ABLF_Cal_ExcelUploaded', '', 'FI', '', 'CollateralEntry');
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYM_ABLF_CHK_Coll_CCY()) {
            return false;
        }
        if (!SYM_ABLF_Chk_Reg_Amt_Ajd()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment.js", e);
    }
}