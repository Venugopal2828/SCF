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
        DisExcpt("SYF_BANK_AddNewBank.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_BANK_AddNewBank.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        //Add by jane at 2010--2-1
        SYS_GetCUBK('CNTY_CODE', 'CNTY_CODE');
    } catch (e) {
        DisExcpt("SYF_BANK_AddNewBank.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_BANK_MAP_SW_ADD = function() {
    try {
        if (document.MAINFORM.HO_ID.value != '') {
            SYS_GetCUBK('HO_ID', document.MAINFORM.HO_ID.name);
        } else {
            document.MAINFORM.SWIFT_ADD_HO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_BANK_AddNewBank.js*SYF_BANK_MAP_SW_ADD", e);
    }
}

csFuncLevelProto.SYF_BANK_getDOdata_PostAddress = function() {
    try {
        SYS_GetDataForDO_S("PostAddress");
    } catch (e) {
        DisExcpt("SYF_BANK_AddNewBank.js*SYF_BANK_getDOdata_PostAddress", e);
    }
}

csFuncLevelProto.SYF_BANK_getDOdata_SwFMTAddress = function() {
    try {
        SYS_GetDataForDO_S("SwFMTAddress");
    } catch (e) {
        DisExcpt("SYF_BANK_AddNewBank.js*SYF_BANK_getDOdata_SwFMTAddress", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        //Add by jane at 2010-02-1;
        SYM_BANK_GetRef();
    } catch (e) {
        DisExcpt("SYF_BANK_AddNewBank.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_BANK_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('CNTY_CODE', 'CNTY_CODE');
    } catch (e) {
        DisExcpt("SYF_BANK_AddNewBank.js*FLD_BANK_CNTY_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_BANK_HO_ID_onchange = function(event) {
    try {
        SYF_BANK_MAP_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_BANK_AddNewBank.js*FLD_BANK_HO_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_BANK_SW_ADD_onchange = function(event) {
    try {
        SYM_BANK_VDO_SET();
    } catch (e) {
        DisExcpt("SYF_BANK_AddNewBank.js*FLD_BANK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_BANK_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('HO_ID');
    } catch (e) {
        DisExcpt("SYF_BANK_AddNewBank.js*FLD_BANK_COLL_BK_ID_BTN_onclick", e);
    }
}