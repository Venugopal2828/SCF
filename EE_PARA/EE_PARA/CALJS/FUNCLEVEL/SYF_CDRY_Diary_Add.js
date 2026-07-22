var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        //document.MAINFORM.DIARY_MODIFY_USER_ID.value = SYS_USER_ID;
        //document.MAINFORM.DIARY_MODIFY_DT.value = SYS_DATE;

        document.MAINFORM.DIARY_NARRATIVE.value = '';
        document.MAINFORM.DIARY_CLS_FLG.value = 'No';

        SYS_MULTI_DATA = "";
        /* modify by Lynn, BugTracker EEV2.6[336]*/
        //var sSQLWhere = "C_MAIN_REF LIKE '%" + document.MAINFORM.C_MAIN_REF.value + "%'";

        var cMainRefVal = document.MAINFORM.C_MAIN_REF.value;
        var cMainIdex = cMainRefVal.lastIndexOf('/');
        if (cMainIdex > 0) {
            cMainRefVal = cMainRefVal.substring(0, cMainIdex);
        }
        var dirMainRef = document.MAINFORM.DIARY_C_MAIN_REF.value;
        var sSQLWhere = "C_MAIN_REF LIKE '%" + cMainRefVal + "%'";
        /* modify by Lynn, BugTracker EEV2.6[336]*/
        var sFieldList = "C_MAIN_REF";
        SYS_GetTableMultiDataToArray_S('CDRY_MASTER', sSQLWhere, sFieldList, true);
        var nRecord = SYS_MULTI_DATA[0][1].length;
        document.MAINFORM.TEMP_COUNT.value = nRecord;
        SYF_CDRY_Set_ref_count();

        //SYT_ChangeFldClass(document.MAINFORM.view,'H');

    } catch (e) {
        DisExcpt("SYF_CDRY_Diary_Add.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_CDRY_Set_ref_count = function() {
    try {

        /* Modify by Lynn,BugTracker EEV2.6.0 [336] */
        //document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value + '/' + document.MAINFORM.TEMP_COUNT.value;
        var cMainValue = document.MAINFORM.C_MAIN_REF.value;
        var cMainLastRec = cMainValue.lastIndexOf('/')
        if (cMainLastRec > 0) {
            cMainValue = cMainValue.substring(0, cMainLastRec)
        }
        document.MAINFORM.C_MAIN_REF.value = cMainValue + '/' + document.MAINFORM.TEMP_COUNT.value;
        /* Modify by Lynn,BugTracker EEV2.6.0 [336] */
    } catch (e) {
        DisExcpt("SYF_CDRY_Diary_Add.js*SYF_CDRY_Set_ref_count", e);
    }
}