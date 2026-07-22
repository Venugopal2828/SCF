var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_LIAB_VOUCHER();
        document.MAINFORM.CURRNT_STATUS.value = 'SG Cancel';
    } catch (e) {
        DisExcpt("SYF_SHGT_Redemption.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.SG_NO.value;
        document.MAINFORM.CANCEL_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_SHGT_Redemption.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass('B_div');
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SHGT_Redemption.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SHGT_Redemption.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SHGT_Redemption.js", e);
    }
}

csFuncLevelProto.OnLoadTemplate = function() {
    try {

        FLD_SHGT_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_SHGT_Redemption.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_SHGT_Redemption.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_SHGT_Redemption.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SHGT_Redemption.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SHGT_Redemption.js", e);
    }
}