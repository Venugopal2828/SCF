var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.DIARY_MODIFY_USER_ID.value = SYS_USER_ID;
        if (document.MAINFORM.DIARY_MODIFY_DT.value == '') {
            document.MAINFORM.DIARY_MODIFY_DT.value = SYS_BUSI_DATE;
        }


    } catch (e) {
        DisExcpt("SYF_CDRY_Diary_Edit.js*InitValues", e);
    }
}