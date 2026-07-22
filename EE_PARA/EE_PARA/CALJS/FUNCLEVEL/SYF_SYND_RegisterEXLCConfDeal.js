var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('SYND', 'SYF_SYND_getRef()');
        document.MAINFORM.TRX_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.TRX_AMT.value = document.MAINFORM.LC_AMT.value;
        document.MAINFORM.TRX_BAL.value = document.MAINFORM.LC_BAL.value;
        document.MAINFORM.SYND_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;

        SYF_SYND_Cal_SYND_EXPIRY_DT();
        SYF_SYND_Cal_MAST_EXPIRY_DT();

        SYT_ChangeFldClass(document.MAINFORM.APPL_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ID_BTN, 'P');


        if (document.MAINFORM.ADV_BK_ID.value == '') {
            document.MAINFORM.ADV_BK_SW_ADD.value = SYS_LOGIN_BIC;
            SYF_SYND_GET_ADV_BK_SW_ADD();
        } else if (document.MAINFORM.ADV_BK_ID.value != '' && document.MAINFORM.ADV_BK_SW_ADD.value == '') {
            SYF_SYND_GET_ADV_BK_SW_TAG();
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.SYF_SYND_BackCalSyndExpDt = function(expdt) {
    try {

        document.MAINFORM.SYND_EXPIRY_DT.value = expdt;
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.SYF_SYND_getRef = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
        document.MAINFORM.SOURCE_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.SYF_SYND_GET_ADV_BK_ID = function() {
    try {

        SYS_GetCUBK('ADV_BK_ID', 'ADV_BK_ID');
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_SYND_EXPIRY_DT = function() {
    try {

        SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.EXPIRY_DT.value, document.MAINFORM.GRACE_DAYS.value, SYF_SYND_BackCalSyndExpDt);
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.SYF_SYND_GET_ADV_BK_SW_ADD = function() {
    try {

        SYS_GetCUBK('ADV_BK_SW_ADD', 'ADV_BK_SW_ADD');
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.SYF_SYND_GET_ADV_BK_SW_TAG = function() {
    try {

        document.MAINFORM.ADV_BK_SW_TAG.value = 'D';
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.SYF_SYND_GET_SYND_AC_NO = function() {
    try {

        SYS_GetCUBK('SYND_AC_NO', 'SYND_AC_NO');
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_MAST_EXPIRY_DT = function() {
    try {

        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.EXPIRY_DT.value, document.MAINFORM.TENOR_DAYS.value, document.MAINFORM.MAST_EXPIRY_DT.name);
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.SYND_AMT.value) >= SYS_BeFloat(document.MAINFORM.TRX_BAL.value)) {
            alert('Syndication amount should not be greater than available amount!');
            return false;
        } else {

            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.FLD_SYND_ADV_BK_ID_onchange = function(event) {
    try {
        SYF_SYND_GET_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.FLD_SYND_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_SYND_Cal_SYND_EXPIRY_DT();
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.FLD_SYND_GRACE_DAYS_onchange = function(event) {
    try {
        SYF_SYND_Cal_SYND_EXPIRY_DT();
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}

csFuncLevelProto.FLD_SYND_TENOR_DAYS_onchange = function(event) {
    try {
        SYF_SYND_Cal_MAST_EXPIRY_DT();
    } catch (e) {
        DisExcpt("SYF_SYND_RegisterEXLCConfDeal.js", e);
    }
}