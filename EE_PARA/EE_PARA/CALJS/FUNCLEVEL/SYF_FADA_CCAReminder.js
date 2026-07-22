var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'CCA';
        document.MAINFORM.FA_MSG_FUNC.value = '4';
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }
        document.MAINFORM.FA_MSG01_FUNC.value = '2';
        document.MAINFORM.FA_LMT_ASS_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_ASS_CCY.value, document.MAINFORM.FA_LMT_ASS_AMT.value);
        SYF_FADA_MPO_FieldClass();
        SYF_FADA_Get_IFInfo();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FieldClass = function() {
    try {

        SYT_ChangeFldClass_New('FA_BUYER_COMP_REG', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CNTC_FLG', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_RESP_AGNT', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CONT_NM', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_ID', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CONT_TEL', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_NM', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_NM2', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CONT_FAX', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_POSTBOX', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CONT_MAIL', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CITY', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CONT_ADDR', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CNTY', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_BK_NM', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_PROV', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_BK_BRCH', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_POSTCODE', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_AC_NO', 'P');
        SYT_ChangeFldClass_New('B_BUYER', 'P');
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_IFInfo = function() {
    try {

        //var sFieldList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_BASE_CCY;LM_DUE_DAY";
        //var sMappingList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;TEMP_CHAR1;TEMP_DATE4";
        SYS_GetTableDataByRule_S('SYF_FADA_CCAReminder_SYF_FADA_Get_IFInfo_0', '1', 'Y');
        var FA_TEMP1 = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.TEMP_CHAR1.value, FA_TEMP1);

        //var sFieldList1 = "FA_IS_BANK;FA_FACTOR_BIC";
        //var sMappingList1 = "FA_IS_BANK;FA_FACTOR_BIC";
        SYS_GetTableDataByRule_S('SYF_FADA_CCAReminder_SYF_FADA_Get_IFInfo_1', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.TEMP_CHAR2.value = document.MAINFORM.FA_TTL_SEL_TNOVCCY.value + SYS_BeFloat(document.MAINFORM.FA_TTL_SEL_TNOV.value);
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAReminder.js", e);
    }
}