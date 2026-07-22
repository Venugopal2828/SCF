var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CLOSE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CLS_FLG.value = 'YES';
        document.MAINFORM.PCPT_BAL.value = 0;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_CloseFile.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.LEAD_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.LEAD_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);

        if ('RE' != SYS_FUNCTION_TYPE) {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.LEAD_BK_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.LEAD_MAIL_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_SWAD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHARGES, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHG_DESC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.PCPT_CHG_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.PCPT_CHG_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_ACWT_BK_SWTAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_NO, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_CloseFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_CloseFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('LEAD_BK_ID');
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_LIAB_ACNO_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('LEAD_LIAB_ACNO');
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_SYND_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_CloseFile.js", e);
    }
}