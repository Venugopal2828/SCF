var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (SYM_BANK_MAIN_VDO_AGENT_CHK() == false) {
            return false;
        }
        var acno = document.MAINFORM.NOSTRO_AC_NO1.value;
        if (acno != "" && SYM_BANK_MAIN_VDO_ACC_CHK() == false) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_BANK_EditBanks.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_BANK_EditBanks.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        SYS_GetDataForDO_S("SwFMTAddress", "N");
        SYS_GetDataForDO_S("PostAddress", "N");
    } catch (e) {
        DisExcpt("SYF_BANK_EditBanks.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.SYF_BANK_MAP_HO_SW_ADD = function() {
    try {
        if (document.MAINFORM.HO_ID.value != '') {
            SYS_GetCUBK('HO_ID', document.MAINFORM.HO_ID.name);
        } else {
            document.MAINFORM.SWIFT_ADD_HO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_BANK_EditBanks.js*SYF_BANK_MAP_HO_SW_ADD", e);
    }
}

csFuncLevelProto.SYF_BANK_getDOdata_PostAddress = function() {
    try {
        SYS_GetDataForDO_S("PostAddress", "N");
    } catch (e) {
        DisExcpt("SYF_BANK_EditBanks.js*SYF_BANK_getDOdata_PostAddress", e);
    }
}

csFuncLevelProto.SYF_BANK_getDOdata_SwFMTAddress = function() {
    try {
        SYS_GetDataForDO_S("SwFMTAddress", "N");
    } catch (e) {
        DisExcpt("SYF_BANK_EditBanks.js*SYF_BANK_getDOdata_SwFMTAddress", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.C_MAIN_REF, 'P');
        if (document.MAINFORM.NOSTRO_AC_NO1.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.NOSTRO_AC_TYPE1, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NOSTRO_AC_TYPE1, "O");
        }
        if (document.MAINFORM.NOSTRO_AC_NO2.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.NOSTRO_AC_TYPE2, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NOSTRO_AC_TYPE2, "O");
        }
        if (document.MAINFORM.AC1_NO.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.VOSTRO_AC_TYPE, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.VOSTRO_AC_TYPE, "O");
        }
    } catch (e) {
        DisExcpt("SYF_BANK_EditBanks.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_BANK_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('CNTY_CODE', 'CNTY_CODE');
    } catch (e) {
        DisExcpt("SYF_BANK_EditBanks.js*FLD_BANK_CNTY_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_BANK_HO_ID_onchange = function(event) {
    try {
        SYF_BANK_MAP_HO_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_BANK_EditBanks.js*FLD_BANK_HO_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_BANK_SW_ADD_onchange = function(event) {
    try {
        SYM_BANK_VDO_SET();
    } catch (e) {
        DisExcpt("SYF_BANK_EditBanks.js*FLD_BANK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_BANK_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('HO_ID');
    } catch (e) {
        DisExcpt("SYF_BANK_EditBanks.js*FLD_BANK_COLL_BK_ID_BTN_onclick", e);
    }
}