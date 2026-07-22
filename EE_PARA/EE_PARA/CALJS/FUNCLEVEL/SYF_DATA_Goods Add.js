var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_DATA_Goods Add.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
    } catch (e) {
        DisExcpt("SYF_DATA_Goods Add.js", e);
    }
}

csFuncLevelProto.SYF_DATA_C_MAIN_REF = function() {
    try {

        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_GOODS_CODE.value;
    } catch (e) {
        DisExcpt("SYF_DATA_Goods Add.js", e);
    }
}

csFuncLevelProto.SYF_DATA_CHECK_GOODS_ID = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'RE') {
            return true;
        } else {
            flg = SYS_GetTableDataByRule_S('SYF_DATA_Goods Add_SYF_DATA_CHECK_GOODS_ID_0', '1');
            if (flg == 'Y') {
                alert("The Goods Code  already exists  ! Please check it!");
                document.MAINFORM.FA_GOODS_CODE.value = '';
                document.MAINFORM.FA_GOODS_DES.value = '';
                document.MAINFORM.FA_GOODS_DES_RO.value = '';
                document.MAINFORM.FA_EXP_LIC_FLG.value = '';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_DATA_Goods Add.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_DATA_CHECK_GOODS_ID()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_DATA_Goods Add.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_DATA_Goods Add.js", e);
    }
}

csFuncLevelProto.FLD_DATA_FA_GOODS_CODE_onchange = function(event) {
    try {
        SYF_DATA_C_MAIN_REF();
    } catch (e) {
        DisExcpt("SYF_DATA_Goods Add.js", e);
    }
}