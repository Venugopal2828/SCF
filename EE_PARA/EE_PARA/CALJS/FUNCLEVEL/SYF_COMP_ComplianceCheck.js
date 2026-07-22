var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo("COMP_REF", "SYF_COMP_Cal_C_MAIN_REF");
    } catch (e) {
        DisExcpt("SYF_COMP_ComplianceCheck.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_COMP_Cal_C_MAIN_REF = function(ref) {
    try {
        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_COMP_ComplianceCheck.js*SYF_COMP_Cal_C_MAIN_REF", e);
    }
}