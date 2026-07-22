var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYM_SHGT_APPL_ID_C2();
        FLD_SHGT_APPL_CORR_MED_onchange();
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('SHGT', 'SYM_SHGT_SetRefNo');
        document.MAINFORM.SG_REG_DT.value = SYS_BUSI_DATE;
        SYT_HolidayCheck(document.MAINFORM.SG_CCY.value, document.MAINFORM.SG_REG_DT);
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'SG Register IC';
        document.MAINFORM.NXT_STATUS.value = 'SG Issue IC';
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.OnLoadTemplate = function() {
    try {

        FLD_SHGT_APPL_CORR_MED_onchange();
        FLD_SHGT_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYM_SHGT_Cal_APPL_ADD();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_CORR_MED_onchange = function(event) {
    try {
        if (document.MAINFORM.APPL_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX, 'O');
        } else if (document.MAINFORM.APPL_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL, 'M');
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX, 'O');
        } else if (document.MAINFORM.APPL_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_EMAIL_onchange = function(event) {
    try {
        var chkemail = document.MAINFORM.APPL_EMAIL.value;
        if (SYM_SHGT_CHK_EMAIL(chkemail)) {
            alert("enter valid email address");
            document.MAINFORM.APPL_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_FAX_onchange = function(event) {
    try {
        var faxNo = document.MAINFORM.APPL_FAX.value;
        if (SYM_SHGT_chk_faxNo(faxNo)) {
            alert("enter valid fax number");
            document.MAINFORM.APPL_FAX.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_ID_onchange = function(event) {
    try {
        SYM_SHGT_Cal_APPL_NM();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_SHGT_Sql_APPL_ID();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYM_SHGT_Cal_APPL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_ORDER_POST_onchange = function(event) {
    try {
        SYM_SHGT_Cal_APPL_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_SHGT_Cal_APPL_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_INV_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.INV_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.INV_AMT.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.INV_AMT.value) > SYS_BeFloat(document.MAINFORM.SG_AMT.value)) {
            alert("The Invoice Amt should not be greater than SG Amount");
            document.MAINFORM.INV_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_SG_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.SG_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.SG_AMT.value = 0;
        }
        document.MAINFORM.SG_BAL.value = document.MAINFORM.SG_AMT.value;
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstIC.js", e);
    }
}