var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYF_FADA_Cal_FA_APPL_INFO();
        document.MAINFORM.FA_MSG_FUNC.value = '4';
    } catch (e) {
        DisExcpt("SYF_FADA_PCAReminder.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_APPL_INFO = function() {
    try {

        document.MAINFORM.FA_MSG_TEXT02.value = 'WE REFER TO OUR PREVIOUS EDI MSGS 1 - 2. AS OF TODAY STILL NO ANSWER RECEIVED. YOUR URGENT REPLY WILL BE HIGHLY APPRECIATED.';
    } catch (e) {
        DisExcpt("SYF_FADA_PCAReminder.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }

        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);

        SYF_FADA_MPO_FieldClass();
    } catch (e) {
        DisExcpt("SYF_FADA_PCAReminder.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FieldClass = function() {
    try {

        SYT_ChangeFldClass('FA_BUYER_COMP_REG', 'P');
        SYT_ChangeFldClass('FA_BUYER_CNTC_FLG', 'P');
        SYT_ChangeFldClass('FA_BUYER_RESP_AGNT', 'P');
        SYT_ChangeFldClass('FA_BUYER_CONT_NM', 'P');
        SYT_ChangeFldClass('FA_BUYER_ID', 'P');
        SYT_ChangeFldClass('FA_BUYER_CONT_TEL', 'P');
        SYT_ChangeFldClass('FA_BUYER_NM', 'P');
        SYT_ChangeFldClass('FA_BUYER_NM2', 'P');
        SYT_ChangeFldClass('FA_BUYER_CONT_FAX', 'P');
        SYT_ChangeFldClass('FA_BUYER_POSTBOX', 'P');
        SYT_ChangeFldClass('FA_BUYER_CONT_MAIL', 'P');
        SYT_ChangeFldClass('FA_BUYER_CITY', 'P');
        SYT_ChangeFldClass('FA_BUYER_CONT_ADDR', 'P');
        SYT_ChangeFldClass('FA_BUYER_CNTY', 'P');
        SYT_ChangeFldClass('FA_BUYER_BK_NM', 'P');
        SYT_ChangeFldClass('FA_BUYER_PROV', 'P');
        SYT_ChangeFldClass('FA_BUYER_BK_BRCH', 'P');
        SYT_ChangeFldClass('FA_BUYER_POSTCODE', 'P');
        SYT_ChangeFldClass('FA_BUYER_AC_NO', 'P');
        SYT_ChangeFldClass('B_BUYER', 'P');
    } catch (e) {
        DisExcpt("SYF_FADA_PCAReminder.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCAReminder.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCAReminder.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_PCAReminder.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_PCAReminder.js", e);
    }
}