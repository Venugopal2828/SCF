var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.CURRNT_STATUS.value = 'Tracer';
    } catch (e) {
        DisExcpt("SYF_SHGT_Tracer.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_SHGT_Tracer.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_SHGT_Tracer.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.TRACER_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.SG_NO.value;
    } catch (e) {
        DisExcpt("SYF_SHGT_Tracer.js", e);
    }
}

csFuncLevelProto.OnLoadTemplate = function() {
    try {
        FLD_SHGT_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_SHGT_Tracer.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        onChangeDiary();
        SYT_Init_Notes('APPL_NOTES');
        SYT_Show_Notes('APPL_NOTES');
        SYT_Init_Notes('SHIPCO_NOTES');
        SYT_Show_Notes('SHIPCO_NOTES');
    } catch (e) {
        DisExcpt("SYF_SHGT_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SHGT_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SHGT_Tracer.js", e);
    }
}