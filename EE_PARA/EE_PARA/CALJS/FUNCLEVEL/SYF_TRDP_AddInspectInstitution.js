var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {} catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
    SYF_TRDP_AGR_SIGNED();
        return true;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo('INSP', 'SYF_TRDP_setRef');
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYF_TRDP_Cal_HEAD_OFFICE();
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRDP_AGR_SIGNED = function() {
    try {
        var sign = document.MAINFORM.AGR_SIGNED.value;
        if (sign == "1") {
            var strErrMsg = "Please input Agreement Value Date and Agreement Due Date.";
            if (document.MAINFORM.ARG_DUE_DT.value == "") {
                SYS_CheckError(document.MAINFORM.ARG_DUE_DT, strErrMsg);
                return false;
            }
            if (document.MAINFORM.ARG_VAL_DT.value == "") {
                SYS_CheckError(document.MAINFORM.ARG_DUE_DT, strErrMsg);
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*SYF_TRDP_AGR_SIGNED", e);
    }
}

csFuncLevelProto.SYF_TRDP_Cal_HEAD_OFFICE = function() {
    try {
        if (document.MAINFORM.PARTY_LEVEL.value == '2') {
            SYT_ChangeFldClass_New('HEAD_OFC_ID_BTN', 'M');
            SYT_ChangeFldClass_New('HEAD_OFFICE_ID', 'M');
            SYT_ChangeFldClass_New('HEAD_OFFICE_NM', 'M');
        } else {
            SYT_ChangeFldClass_New('HEAD_OFC_ID_BTN', 'P');
            SYT_ChangeFldClass_New('HEAD_OFFICE_ID', 'P');
            SYT_ChangeFldClass_New('HEAD_OFFICE_NM', 'P');
        }
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*SYF_TRDP_Cal_HEAD_OFFICE", e);
    }
}

csFuncLevelProto.SYF_TRDP_Get_Head_Office_ID = function() {
    try {
        if (document.MAINFORM.HEAD_OFFICE_ID.value != '') {
            SYS_GetCUBK('HEAD_OFC_ID', 'HEAD_OFFICE_ID');
        }
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*SYF_TRDP_Get_Head_Office_ID", e);
    }
}

csFuncLevelProto.SYF_TRDP_setRef = function(ref) {
    try {
        var mainRef; // Utility Auto Fix Comments
        mainRef = ref;
        document.MAINFORM.C_MAIN_REF.value = mainRef;
        document.MAINFORM.PARTY_ID.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*SYF_TRDP_setRef", e);
    }
}

csFuncLevelProto.FLD_TRDP_HEAD_OFFICE_ID_onchange = function() {
    try {
        SYF_TRDP_Get_Head_Office_ID();
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*FLD_TRDP_HEAD_OFFICE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRDP_PARTY_LEVEL_onchange = function() {
    try {
        SYF_TRDP_Cal_HEAD_OFFICE();
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*FLD_TRDP_PARTY_LEVEL_onchange", e);
    }
}

csFuncLevelProto.FLD_TRDP_HEAD_OFC_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK('HEAD_OFC_ID', 'HEAD_OFFICE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*FLD_TRDP_HEAD_OFC_ID_BTN_onclick", e);
    }
}