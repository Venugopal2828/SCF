var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.DIARY_CLS_FLG.value = 'Yes';
        SYT_ChangeFldClass(document.MAINFORM.DIARY_DT, 'P');
    } catch (e) {
        DisExcpt("SYF_CDRY_Diary_Close.js*InitValues", e);
    }
}