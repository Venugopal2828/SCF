var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        onChangeDiary();
        SYT_Init_Notes(document.MAINFORM.CORR_NOTES.name);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ADD1_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ADD2_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ADD3_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ADD_ORDER_NO_onchange = function() {
    try {
        Cal_CORR_ID_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_CUST_BANK_onchange = function() {
    try {
        CAL_Clear_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ID_onchange = function() {
    try {
        Cal_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_NM_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_SW_ADD_onchange = function() {
    try {
        SQL_CORR_SW_ADD();
        if (document.MAINFORM.CORR_CUST_BANK.value == 'Bank') {
            if (document.MAINFORM.CORR_SW_ADD.value == '') {
                document.MAINFORM.CORR_SW_TAG.value = 'D';
            } else {
                document.MAINFORM.CORR_SW_TAG.value = 'A';
            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ADD_BTN_onclick = function() {
    try {
        CAL_CORR_MULT_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ID_BTN_onclick = function() {
    try {
        CAL_CORR_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_AddNoteFile.js", e);
    }
}