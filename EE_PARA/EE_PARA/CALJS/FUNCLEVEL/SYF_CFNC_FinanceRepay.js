var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass("A_div");
        SYF_CFNC_Change_FINC_TYPE_STYLE();
        SYF_CFNC_Change_FINC_TYPE_FldClass();
        SYF_CFNC_SHOW_RELA_DRAW_REF();
        FLD_CFNC_DIARY_NARRATIVE_onchange();

    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js*addRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js*editRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if ('RE' != SYS_FUNCTION_TYPE && 'EC' != SYS_FUNCTION_TYPE && 'IQ' != SYS_FUNCTION_TYPE) {
            SYS_GetDataForDO_S("CFNC_FincSingleRepayment_DO", "N", false, '', "FincSinglePayment");
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_Change_FINC_TYPE_STYLE = function() {
    try {


        if (document.MAINFORM.FINC_TYPE.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.FINC_TYPE, 'O');
        }
        if (document.MAINFORM.FINC_TYPE.value == 'EPLC' || document.MAINFORM.FINC_TYPE.value == 'IPLC') {
            document.getElementById("Available By").style.display = 'block';
            document.getElementById("Tenor Days").style.display = 'block';
            document.getElementById("Tenor Type").style.display = 'block';
            document.getElementById("Deliver Documents Against").style.display = 'none';
        } else if (document.MAINFORM.FINC_TYPE.value == 'EXCO' || document.MAINFORM.FINC_TYPE.value == 'IMCO') {
            document.getElementById("Available By").style.display = 'none';
            document.getElementById("Tenor Days").style.display = 'block';
            document.getElementById("Tenor Type").style.display = 'block';
            document.getElementById("Deliver Documents Against").style.display = 'block';
        }

    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_Change_FINC_TYPE_FldClass = function() {
    try {

        if (document.MAINFORM.FINC_TYPE.value == 'EPLC' || document.MAINFORM.FINC_TYPE.value == 'IPLC') {
            SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, "P");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, "P");
            SYT_ChangeFldClass(document.MAINFORM.DELVR_DOC_AGST, "H");
        } else if (document.MAINFORM.FINC_TYPE.value == 'EXCO' || document.MAINFORM.FINC_TYPE.value == 'IMCO') {
            SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, "H");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, "P");
            SYT_ChangeFldClass(document.MAINFORM.DELVR_DOC_AGST, "P");
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_SHOW_RELA_DRAW_REF = function() {
    try {

        if (document.MAINFORM.FINC_TYPE.value == 'EPLC' || document.MAINFORM.FINC_TYPE.value == 'IPLC') {
            SYT_ChangeFldClass(document.MAINFORM.RELA_DRAW_REF, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RELA_DRAW_REF, "H");
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceRepay.js", e);
    }
}