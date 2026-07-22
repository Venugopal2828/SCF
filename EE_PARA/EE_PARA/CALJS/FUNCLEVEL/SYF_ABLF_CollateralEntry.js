var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_ABLF_For_cllateral_cfm();
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYM_ABLF_Chk_Reg_Amt()) {
            return false;
        }
        if (!SYM_ABLF_CHK_Coll_CCY()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo('ABLF_REG', 'SYF_ABLF_setRegNo');
        SYM_ABLF_For_cllateral_Init();
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYM_ABLF_For_cllateral_psot();
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_ExcelUploaded = function() {
    try {
        SYM_ABLF_Cal_Uploaded_Coll_Val();
        return;
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry.js*SYF_ABLF_Cal_ExcelUploaded", e);
    }
}

csFuncLevelProto.SYF_ABLF_LoadDoComplete = function() {
    try {} catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry.js*SYF_ABLF_LoadDoComplete", e);
    }
}

csFuncLevelProto.SYF_ABLF_UpLoadFile_CollateralEntry = function() {
    try {
        SYM_ABLF_ClearUploadCollDO();
        SYS_UpLoadInvFile('UploadCollateral', 'SYF_ABLF_Cal_ExcelUploaded', '', 'FI', '', 'CollateralEntry');
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry.js*SYF_ABLF_UpLoadFile_CollateralEntry", e);
    }
}

csFuncLevelProto.SYF_ABLF_setRegNo = function(ref) {
    try {
        var strPrefix, strPostfix;
        strPrefix = ref.substr(0, 2);
        strPostfix = ref.substr(2, 8);
        document.MAINFORM.REG_NO.value = "REG" + strPrefix + strPostfix;
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry.js*SYF_ABLF_setRegNo", e);
    }
}