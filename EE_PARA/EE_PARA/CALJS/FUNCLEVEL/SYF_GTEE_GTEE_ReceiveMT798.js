var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLBANK_onclick = function(event) {
    try {
        SYM_GTEE_APPL_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENEFICIARYBANK_onclick = function(event) {
    try {
        SYM_GTEE_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHECK_BOX_798_onclick = function(event) {
    try {
        Cal_SUB_MESS_TYPE();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DOCS_PRESENTED_BY_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMNBANK_onclick = function(event) {
    try {
        SYM_GTEE_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_onchange = function(event) {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
        /*
if(SYS_ORG_FUNCTION_NAME == 'RegisterGuarantee'){
JACK 0919 GTEE
SYM_GTEE_Set_Risk_Party_Info();
document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
}
*/
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_GTEE_SND_TO_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT798.js", e);
    }
}