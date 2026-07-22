var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CLERK_ID();
        SYT_LIAB_VOUCHER();
        document.MAINFORM.CLS_FLG.value = 'YES';
       document.MAINFORM.GTEE_BAL.value = 0;
        document.MAINFORM.CLOSE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CURRNT_STATUS.value = 'CloseExpiry';
      alert(document.MAINFORM.ORIGIN_GTEE_BAL.value);
        SYM_GTEE_Cal_CLS_FLG_BY_GTEE_RETURN();
    } catch (e) {
        DisExcpt("SYF_GTEE_ExpireGuarantee.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass('A_div');
        SYT_DisableDivClass('I_div');
        SYM_GTEE_APLB_RULE2();

        SYT_ChangeFldClass_New('GTEE_RETURN', 'M');
    } catch (e) {
        DisExcpt("SYF_GTEE_ExpireGuarantee.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.ORIGIN_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_ExpireGuarantee.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_ExpireGuarantee.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_ExpireGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_ExpireGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_ExpireGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_ExpireGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_ExpireGuarantee.js", e);
    }
}