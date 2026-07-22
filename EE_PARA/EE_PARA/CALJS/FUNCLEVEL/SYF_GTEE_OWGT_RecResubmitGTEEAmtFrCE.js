var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        /*
if(document.MAINFORM.ACPT_REJ.value=='ACCEPTED')
{
document.MAINFORM.NXT_STATUS.value='Issue Guarantee';
}else{
document.MAINFORM.NXT_STATUS.value='Resubmit GTEE from CE';
}
*/
        Cal_MSG_TYPE();
        document.MAINFORM.APPLY_FLG.value = 'YES';
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Awaiting Bank Verification LC App';
        document.MAINFORM.NXT_STATUS.value = 'Issue Guarantee';
        document.MAINFORM.GTEE_BAL.value = document.MAINFORM.GTEE_AMT.value;
        document.MAINFORM.REG_DT.value = SYS_BUSI_DATE;
        //SYM_GTEE_Cal_MATURITY_DT();
        document.MAINFORM.SW_FORM.value = 'MT760';
        document.MAINFORM.GTEE_TYPE.value = document.MAINFORM.X798_TYPE_GTEE_22K.value;
        REFORMAT_13E();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes('SEND_TO_NOTES');
        SYT_Init_Notes('BENE_NOTES');
        SYT_Init_Notes('INDEMN_NOTES');
        SYT_Init_Notes('APPL_NOTES');
        //SYT_DisableDivClass('B_div');
        //SYT_DisableDivClass('D_div');
        //SYT_DisableDivClass('E_div');
        //SYT_DisableDivClass('F_div');
        //SYT_ShowBlankRow('BENE_blankRow',1);
        SYT_ShowBlankRow('INDE', 1);
        SYM_GTEE_Cal_FXD_EXPIRY();
        SYT_ChangeFldClass(document.MAINFORM.SAME_AS_APPL_FLG, 'M');
        SYM_GTEE_For_APPL_CUBK_798();
        SYM_GTEE_For_BENE_CUBK_798();
        SYM_GTEE_For_INDEMN_CUBK_798();
        SYM_GTEE_For_SEND_CUBK_798();

        SAME_AS_APPL_FLG();
        X798_FORM_GTEE_22E();
        SYM_GTEE_MPO_SW_FORM();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_REFORMAT_13E = function() {
    try {

        var date_send = document.MAINFORM.X798_CRE_DATE.value;
        var time_send = document.MAINFORM.X798_CRE_TIME.value;

        if (date_send != '') {
            var year_send = date_send.substring(0, 4);
            var month_send = date_send.substring(4, 6);
            var day_send = date_send.substring(6, 8);
            date_send = day_send + '/' + month_send + '/' + year_send;
            document.MAINFORM.X798_CRE_DATE.value = date_send;
        }

        if (time_send != '') {
            var hour_send = time_send.substring(0, 2);
            var min_send = time_send.substring(2, 4);
            time_send = hour_send + ':' + min_send;
            document.MAINFORM.X798_CRE_TIME.value = time_send;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_SAME_AS_APPL_FLG = function() {
    try {

        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'OWNB') {
            document.MAINFORM.INDEMN_NM.value = document.MAINFORM.APPL_NM.value;
            document.MAINFORM.INDEMN_ADD1.value = document.MAINFORM.APPL_ADD1.value;
            document.MAINFORM.INDEMN_ADD2.value = document.MAINFORM.APPL_ADD2.value;
            document.MAINFORM.INDEMN_ADD3.value = document.MAINFORM.APPL_ADD3.value;
            SYT_ChangeFldClass_New('INDEMN_ID', 'P');
            SYT_ChangeFldClass_New('DOCS_PRESENTED_BY', 'M');
            SYT_DisableField(document.MAINFORM.INDEMNBANK);
        } else {
            SYT_ChangeFldClass_New('INDEMN_NM', 'M');
            SYT_ChangeFldClass_New('DOCS_PRESENTED_BY', 'M');
            SYT_EnableFields(document.MAINFORM.INDEMNBANK);
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_X798_FORM_GTEE_22E = function() {
    try {

        if (document.MAINFORM.X798_FORM_GTEE_22E.value == 'INDC') {
            document.MAINFORM.SEND_TO_SW_ADD.value = document.MAINFORM.ISSUE_BK_52_SW_ADD.value;
            document.MAINFORM.SEND_TO_NM.value = document.MAINFORM.ISSUE_BK_52_NM.value;
            document.MAINFORM.SEND_TO_ADD1.value = document.MAINFORM.ISSUE_BK_52_ADD1.value;
            document.MAINFORM.SEND_TO_ADD2.value = document.MAINFORM.ISSUE_BK_52_ADD2.value;
            document.MAINFORM.SEND_TO_ADD3.value = document.MAINFORM.ISSUE_BK_52_ADD3.value;
            document.MAINFORM.IDEN_ID.value = document.MAINFORM.X203_52_PARTY_IDENTIFIER.value;
        } else if (document.MAINFORM.X798_FORM_GTEE_22E.value == 'DIRC') {
            document.MAINFORM.SEND_TO_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value;
            document.MAINFORM.SEND_TO_NM.value = document.MAINFORM.ADV_BK_NM.value;
            document.MAINFORM.SEND_TO_ADD1.value = document.MAINFORM.ADV_BK_ADD1.value;
            document.MAINFORM.SEND_TO_ADD2.value = document.MAINFORM.ADV_BK_ADD2.value;
            document.MAINFORM.SEND_TO_ADD3.value = document.MAINFORM.ADV_BK_ADD3.value;
            document.MAINFORM.IDEN_ID.value = document.MAINFORM.X203_58_PARTY_IDENTIFIER.value;
        } else {
            document.MAINFORM.SEND_TO_SW_ADD.value = '';
            document.MAINFORM.SEND_TO_NM.value = '';
            document.MAINFORM.SEND_TO_ADD1.value = '';
            document.MAINFORM.SEND_TO_ADD2.value = '';
            document.MAINFORM.SEND_TO_ADD3.value = '';
            document.MAINFORM.IDEN_ID.value = '';
        }

        if (document.MAINFORM.SEND_TO_NM.value == '') {
            SYT_ChangeFldClass_New('SEND_TO_NM', 'M');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLBANK_onclick = function(event) {
    try {
        SYM_GTEE_APPL_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ID_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ADD_BUTTON();
        if (document.MAINFORM.APPL_ID.value == "") {
            SYM_GTEE_Cal_Clear_Appl_ID();
        } else {
            SYM_GTEE_APPL_ID_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENEFICIARYBANK_onclick = function(event) {
    try {
        SYM_GTEE_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ID_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ADD_BUTTON();
        if (document.MAINFORM.BENE_ID.value == "") {
            SYM_GTEE_Cal_Clear_Bene_ID();
        } else {
            SYM_GTEE_BENE_ID_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton_onclick = function(event) {
    try {
        return SYS_InsertClause('GTEE_DETAILS');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton2_onclick = function(event) {
    try {
        return SYS_InsertClause('GTEE_DETAILS_79');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton3_onclick = function(event) {
    try {
        return SYS_InsertClause('NARR_MAIL');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DOCS_PRESENTED_BY_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMNBANK_onclick = function(event) {
    try {
        SYM_GTEE_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
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
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SAME_AS_APPL_FLG_onchange = function(event) {
    try {
        SAME_AS_APPL_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_GTEE_SND_TO_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SUB_MESS_TYPE_onchange = function(event) {
    try {
        SYM_GTEE_FOR798();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_RecResubmitGTEEAmtFrCE.js", e);
    }
}