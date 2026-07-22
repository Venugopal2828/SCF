var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYF_STAT_CAL_CUST_TYPE();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_STAT_CHK_PARTY_NM()) {
            return false;
        }
        if (!SYF_STAT_CHK_FA_IF_ID()) {
            return false;
        }
        if (SYM_STAT_MAIN_VDO_PARTY_CHK() == false) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }

        //Add by jane at 2010-01-29
        SYS_GetCUBK('CNTY_CODE', 'CNTY_CODE');

        SYF_STAT_Change_FA_INSU_COMP_FLAG();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        //Add by jane at 2010-01-29
        SYM_STAT_GetRef();
        SYM_STAT_Shown_Factor_Tab();
        SYM_STAT_IS_FACTOR_FLAG();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_STAT_CAL_CUST_TYPE = function() {
    try {
        var CUST_FLG = document.MAINFORM.FA_CUST_FLAG.value;
        var CE_CUSTOMER = document.MAINFORM.CE_CUSTOMER.value;
        if (CUST_FLG == '1' && CE_CUSTOMER == 'No') {
            document.MAINFORM.CUST_TYPE.value = 'T2';
        } else if (CUST_FLG == '1' && CE_CUSTOMER == 'Yes') {
            document.MAINFORM.CUST_TYPE.value = 'T1';
        } else if (CUST_FLG == '2') {
            document.MAINFORM.CUST_TYPE.value = 'T3';
        }
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*SYF_STAT_CAL_CUST_TYPE", e);
    }
}

csFuncLevelProto.SYF_STAT_CHK_FA_IF_ID = function() {
    try {
        if (document.MAINFORM.FA_INSU_COMP_FLAG.value == "1" && document.MAINFORM.FA_IF_ID.value == "") {
            alert('Please choose Insurance CO. Code!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*SYF_STAT_CHK_FA_IF_ID", e);
    }
}

csFuncLevelProto.SYF_STAT_CHK_PARTY_NM = function() {
    try {
        SYS_GetTableDataByRule_S('SYF_STAT_AddNewCustomer_SYF_STAT_CHK_PARTY_NM_0', '1', null, false);
        if (document.MAINFORM.IS_FACTOR_FLAG.value == "YES") {
            if (document.MAINFORM.CHK_PARTY_NM.value > 0) {
                alert('A customer name has already been registered!');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*SYF_STAT_CHK_PARTY_NM", e);
    }
}

csFuncLevelProto.SYF_STAT_Change_FA_INSU_COMP_FLAG = function() {
    try {
        if (document.MAINFORM.FA_INSU_COMP_FLAG.value == "2") {
            document.MAINFORM.FA_IF_ID.value = '';
            document.MAINFORM.FA_IF_NM.value = '';
            SYT_DisableField(document.MAINFORM.button);
        } else {
            SYT_EnableField(document.MAINFORM.button);
        }
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*SYF_STAT_Change_FA_INSU_COMP_FLAG", e);
    }
}

csFuncLevelProto.SYF_STAT_IS_FACTOR_FLAG = function() {
    try {
        if (document.MAINFORM.IS_FACTOR_FLAG.value == 'YES') {
            SYT_ChangeFldClass_New('FA_CUST_TYPE', 'M');
            SYT_ChangeFldClass_New('FA_CUST_FLAG', 'M');
            SYT_ChangeFldClass_New('FA_CUST_NM_ADD_DL', 'M');
            SYT_ChangeFldClass_New('FA_CUST_NM_ADD_ML', 'M');
            SYT_ChangeFldClass_New('FST_CNTC_NM', 'M');
        } else {
            SYT_ChangeFldClass_New('FA_CUST_TYPE', 'O');
            SYT_ChangeFldClass_New('FA_CUST_FLAG', 'O');
            SYT_ChangeFldClass_New('FA_CUST_NM_ADD_DL', 'O');
            SYT_ChangeFldClass_New('FA_CUST_NM_ADD_ML', 'O');
            SYT_ChangeFldClass_New('FST_CNTC_NM', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*SYF_STAT_IS_FACTOR_FLAG", e);
    }
}

csFuncLevelProto.SYF_STAT_getDOdata_PostAddress = function() {
    try {
        SYS_GetDataForDO_S("PostAddress");
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*SYF_STAT_getDOdata_PostAddress", e);
    }
}

csFuncLevelProto.SYF_STAT_getDOdata_SwFMTAddress = function() {
    try {
        SYS_GetDataForDO_S("SwFMTAddress");
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*SYF_STAT_getDOdata_SwFMTAddress", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_STAT_ARM_ID_onchange = function(event) {
    try {
        SYM_STAT_ARM_ID();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_ARM_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('CNTY_CODE', 'CNTY_CODE');
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_CNTY_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_FA_CUST_REG_NO_onchange = function(event) {
    try {
        SYS_GetTableDataByRule_S('FA_CUST_REG_NO', '1', null, false);
        if (document.MAINFORM.TEMP_CHAR1.value > 0) {
            alert('A same Customer Registration Number has already been registered!');
            document.MAINFORM.FA_CUST_REG_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_FA_CUST_REG_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_FA_IF_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_IF_ID.value == '') {
            document.MAINFORM.FA_IF_NM.value = '';
        } else {
            SYS_GetCUBK('INSU_COMP', 'FA_IF_ID');
        }
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_FA_IF_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_FA_INSU_COMP_FLAG_onchange = function(event) {
    try {
        SYF_STAT_Change_FA_INSU_COMP_FLAG();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_FA_INSU_COMP_FLAG_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_FA_PARENT_COMP_onchange = function(event) {
    try {
        SYM_STAT_FA_PARENT_COMP();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_FA_PARENT_COMP_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_INSU_POLICY_NO_onchange = function(event) {
    try {
        SYM_STAT_INS_POLICY_NUM();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_INSU_POLICY_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_IS_FACTOR_FLAG_onchange = function(event) {
    try {
        SYM_STAT_Shown_Factor_Tab();
        SYM_STAT_IS_FACTOR_FLAG();
        SYM_STAT_GetEDIRef();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_IS_FACTOR_FLAG_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_TEAM_ID_onchange = function(event) {
    try {
        SYM_STAT_TEAM_ID();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_TEAM_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_STAT_button_onclick = function(event) {
    try {
        SYS_InqCUBK('INSU_COMP');
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_button_onclick", e);
    }
}

csFuncLevelProto.FLD_STAT_button2_onclick = function(event) {
    try {
        SYS_InqCUBK('FA_PARENT_COMP_NEW');
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_STAT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer.js*FLD_STAT_view_1_onclick", e);
    }
}