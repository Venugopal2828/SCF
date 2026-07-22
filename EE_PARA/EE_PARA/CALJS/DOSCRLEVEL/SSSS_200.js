"path:SCRN/DO/200.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.Clr_200_Acct_With_Ins = function() {
    try {
        document.MAINFORM.X200_ACC_BKID_57A.value = "";
        document.MAINFORM.X200_ACC_BKNM_57A.value = "";
        document.MAINFORM.X200_ACCBKADD1_57A.value = "";
        document.MAINFORM.X200_ACCBKADD2_57A.value = "";
        document.MAINFORM.X200_ACCBKADD3_57A.value = "";
        document.MAINFORM.X200_ACC_BKSW_57A.value = "";
        document.MAINFORM.X200_ACC_BKACNO57A.value = "";
        document.MAINFORM.X200_TAG_57A.value = "";
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.Clr_200_Int_Ins = function() {
    try {
        document.MAINFORM.X200_MEDI_BKID_56A.value = "";
        document.MAINFORM.X200_MEDI_BKNM_56A.value = "";
        document.MAINFORM.X200MEDIBKADD1_56A.value = "";
        document.MAINFORM.X200MEDIBKADD2_56A.value = "";
        document.MAINFORM.X200MEDIBKADD3_56A.value = "";
        document.MAINFORM.X200_MEDI_BKSW_56A.value = "";
        document.MAINFORM.X200_TAG_56A.value = "";
        document.MAINFORM.X200_MEDIBKACNO56A.value = "";
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.Clr_200_Rec_Bank = function() {
    try {
        document.MAINFORM.X200_ADV_BKID_B2.value = "";
        document.MAINFORM.X200_ADV_BKNM_B2.value = "";
        document.MAINFORM.X200_ADV_BKADD1_B2.value = "";
        document.MAINFORM.X200_ADV_BKADD2_B2.value = "";
        document.MAINFORM.X200_ADV_BKADD3_B2.value = "";
        document.MAINFORM.X200_ADV_BKMED_B2.value = "";
        document.MAINFORM.X200_ADV_BKSW_B2.value = "";
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.Clr_200_Send_Corres = function() {
    try {
        document.MAINFORM.X200_SENDCORRID53A.value = "";
        document.MAINFORM.X200_SENDCORRNM53A.value = "";
        document.MAINFORM.X200SENDCORADD153A.value = "";
        document.MAINFORM.X200SENDCORADD253A.value = "";
        document.MAINFORM.X200SENDCORADD353A.value = "";
        document.MAINFORM.X200_SENDCORRSW53A.value = "";
        document.MAINFORM.X200_TAG_53A.value = "";
        document.MAINFORM.X200SENDCORACNO53A.value = "";
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.X200_VALUE_DT_32A.value = SYS_BUSI_DATE;
        document.MAINFORM.X200_TRX_REF_NO_20.value = SYS_getValueFromMain('C_MAIN_REF');
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.X200_ACC_BKID_57A_onchange = function(event) {
    try {
        SYS_GetCUBK_S('X200_ACC_BKID_57A', 'X200_ACC_BKID_57A'); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.X200_ACC_BKSW_57A_onchange = function(event) {
    try {
        SYS_GetCUBK_S('X200_ACC_BKSW_57A', 'X200_ACC_BKSW_57A');
        SYS_GetCUBK_S('X200_ACC_BKID_57A', 'X200_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.X200_ADV_BKID_B2_onchange = function(event) {
    try {
        SYS_GetCUBK_S('X200_ADV_BKID_B2', 'X200_ADV_BKID_B2'); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.X200_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYS_GetCUBK_S('X200_ADV_BKSW_B2', 'X200_ADV_BKSW_B2');
        X200_ADV_BKID_B2_onchange();
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.X200_MEDI_BKID_56A_onchange = function(event) {
    try {
        SYS_GetCUBK_S('X200_MEDI_BKID_56A', 'X200_MEDI_BKID_56A'); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.X200_MEDI_BKSW_56A_onchange = function(event) {
    try {
        SYS_GetCUBK_S('X200_MEDI_BKSW_56A', 'X200_MEDI_BKSW_56A');
        X200_MEDI_BKID_56A_onchange();
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.X200_SENDCORRID53A_onchange = function(event) {
    try {
        SYS_GetCUBK_S('X200_SENDCORRID53A', 'X200_SENDCORRID53A'); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}

csDOScreenProto.X200_SENDCORRSW53A_onchange = function(event) {
    try {
        SYS_GetCUBK_S('X200_SENDCORRSW53A', 'X200_SENDCORRSW53A');
        X200_SENDCORRID53A_onchange();
    } catch (e) {
        DisExcpt("SSSS_200.js", e);
    }
}