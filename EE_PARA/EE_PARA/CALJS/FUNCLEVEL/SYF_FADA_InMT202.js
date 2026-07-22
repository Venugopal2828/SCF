var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass('Z_div');
        document.MAINFORM.FA_REMI_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_REMI_AMT.value);
        document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.FA_REMI_AMT.value;
        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.FA_DOC_CCY.value;
        document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.FA_REMI_DT.value;
    } catch (e) {
        DisExcpt("SYF_FADA_InMT202.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_InMT202.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_InMT202.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        X202_ACC_BKID_57A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_InMT202.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        X202_ADV_BKID_B2_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_InMT202.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        X202_BENE_BKID_58A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_InMT202.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        X202_MEDI_BKID_56A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_InMT202.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        X202_ORDBK_ID_52A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_InMT202.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_RECCORRID_54A_onchange = function(event) {
    try {
        X202_RECCORRID_54A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_InMT202.js", e);
    }
}

csFuncLevelProto.FLD_FADA_X202_SENDCORRID53A_onchange = function(event) {
    try {
        X202_SENDCORRID53A_GetCUBK();
        Set_SwiftTags_202();
    } catch (e) {
        DisExcpt("SYF_FADA_InMT202.js", e);
    }
}