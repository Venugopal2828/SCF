var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.DIARY_DT.value = SYS_BUSI_DATE;
        SYT_ChangeFldClass(document.MAINFORM.DIARY_NARRATIVE, 'M');
    } catch (e) {
        DisExcpt("SYF_REIM_Add_Diary.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_Add_Diary.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_Add_Diary.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_Add_Diary.js", e);
    }
}

csFuncLevelProto.FLD_REIM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_REIM_Add_Diary.js", e);
    }
}