var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('SHGT', 'SYM_SHGT_SetRefNo');
        document.MAINFORM.SG_REG_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.LC_NO.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.SG_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.SG_AMT.value = document.MAINFORM.LC_BAL.value;
        document.MAINFORM.SG_BAL.value = document.MAINFORM.SG_AMT.value; //Jax added 2020/5/13
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'SG Register';
        document.MAINFORM.NXT_STATUS.value = 'SG Issue';
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstLC.js", e);
    }
}

csFuncLevelProto.SYF_SHGT_SG_LC_AMT = function() {
    try {

        var SG = SYS_BeFloat(document.MAINFORM.SG_AMT.value);
        var LC = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        if (SG < 0) {
            alert("The amount field do not accept negative value");
            document.MAINFORM.SG_AMT.value = 0;
        }
        if (SG > LC) {
            alert("SG Amount can't greater than LC Balance");
            document.MAINFORM.SG_AMT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstLC.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstLC.js", e);
    }
}

csFuncLevelProto.OnLoadTemplate = function() {
    try {

        FLD_SHGT_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_SG_AMT_onchange = function(event) {
    try {
        SYF_SHGT_SG_LC_AMT();
        document.MAINFORM.SG_BAL.value = document.MAINFORM.SG_AMT.value;
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SHGT_RegisterSGAgainstLC.js", e);
    }
}