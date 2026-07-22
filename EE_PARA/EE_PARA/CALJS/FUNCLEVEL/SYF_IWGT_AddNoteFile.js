var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CORR_ADD1_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CORR_ADD2_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CORR_ADD3_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CORR_ADD_BTN_onclick = function(event) {
    try {
        CAL_CORR_MULT_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CORR_ADD_ORDER_NO_onchange = function(event) {
    try {
        Cal_CORR_ID_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CORR_CUST_BANK_onchange = function(event) {
    try {
        CAL_Clear_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CORR_ID_onchange = function(event) {
    try {
        Cal_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CORR_ID_BTN_onclick = function(event) {
    try {
        CAL_CORR_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CORR_NM_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CORR_SW_ADD_onchange = function(event) {
    try {
        SQL_CORR_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_AddNoteFile.js", e);
    }
}