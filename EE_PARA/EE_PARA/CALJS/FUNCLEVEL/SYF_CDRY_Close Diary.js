var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.DIARY_CLS_FLG.value = 'Yes';
        SYT_ChangeFldClass(document.MAINFORM.DIARY_DT, 'P');
    } catch (e) {
        DisExcpt("SYF_CDRY_Close Diary.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CDRY_Close Diary.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CDRY_Close Diary.js", e);
    }
}

csFuncLevelProto.FLD_CDRY_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_CDRY_Close Diary.js", e);
    }
}

csFuncLevelProto.FLD_CDRY_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_CDRY_Close Diary.js", e);
    }
}