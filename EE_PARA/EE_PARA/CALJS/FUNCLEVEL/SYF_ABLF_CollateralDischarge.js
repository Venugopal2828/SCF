var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var init_reg_amt = '';

csFuncLevelProto.InitValues = function() {
    try {

        SYM_ABLF_For_cllateral_Init();
        init_reg_amt = document.MAINFORM.REG_AMT.value;
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralDischarge.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_ABLF_For_cllateral_psot();
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralDischarge.js", e);
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
        DisExcpt("SYF_ABLF_CollateralDischarge.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if ('RE' != SYS_FUNCTION_TYPE && 'EC' != SYS_FUNCTION_TYPE && 'IQ' != SYS_FUNCTION_TYPE) {
            SYS_GetDataForDO_S("Get_Collateral", "N", false, '', "CollateralAdjustment");
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralDischarge.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CHK_REG_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.REG_LOWEST_VAL.value) > SYS_BeFloat(document.MAINFORM.REG_AMT.value)) {
            alert("Total Collateral Value Under This Batch after discharge can not cover the Loan Balance Under This Batch.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralDischarge.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_ABLF_CHK_REG_AMT()) {
            return false;
        }
        if (!SYF_ABLF_CHK_Delivery_Collateral()) {
            return false;
        }
        if (!SYM_ABLF_CHK_COLLAT_OUT_QTY()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralDischarge.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CHK_Delivery_Collateral = function() {
    try {

        if (SYS_BeFloat(init_reg_amt) > SYS_BeFloat(document.MAINFORM.REG_AMT.value)) {
            return true;
        } else {
            alert("There's no any collatearal to delivery,Please check.");
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralDischarge.js", e);
    }
}