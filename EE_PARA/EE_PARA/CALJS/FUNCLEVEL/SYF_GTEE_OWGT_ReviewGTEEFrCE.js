var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        if (document.MAINFORM.ACCEPT_REJECT.value == 'ACCEPTED') {
            document.MAINFORM.NXT_STATUS.value = 'Issue Guarantee';
        } else {
            document.MAINFORM.NXT_STATUS.value = 'Resubmit GTEE from CE';
        }
        Cal_MSG_TYPE();

    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYM_GTEE_Check_EXPIRY_DT_ISSUE_DT()) {
                return false;
            }
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Awaiting Bank Verification GTEE App';
        document.MAINFORM.NXT_STATUS.value = 'Issue Guarantee';
        SYF_GTEE_Cal_GTEE_BAL();
        document.MAINFORM.REG_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.BASE_CCY.value = SYS_LOCAL_CCY;
        SYM_GTEE_BASE_CLY_BAL();
        SYM_GTEE_BASE_LCY();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        if (document.MAINFORM.APLB_RULE.value == '') {
            document.MAINFORM.APLB_RULE.value = 'NONE';
        }
        document.MAINFORM.SW_FORM.value = 'MT760';
        document.MAINFORM.ACCEPT_REJECT.value = '';
        SYT_ChangeFldClass(document.MAINFORM.APPLBANK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_CUST_BK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENEFICIARYBANK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_CUST_BK, 'P');
        document.MAINFORM.APPLY_FLG.value = 'YES';
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
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
    // SYT_DisableDivClass('C_div');
        SYT_ShowBlankRow('INDE', 1);
        SYM_GTEE_Cal_FXD_EXPIRY();
        SYM_GTEE_Cal_MATURITY_DT();
        SYT_ChangeFldClass(document.MAINFORM.SAME_AS_APPL_FLG, 'M');

        SYF_GTEE_SAME_AS_APPL_FLG();
        SYM_GTEE_MPO_SW_FORM();
        SYT_ChangeFldClass('GTEE_DETAILS', 'P'); 
        SYF_GTEE_GTEE_APPL();
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
        CHG_DefCharge_chargeAtOnchange();
        FLD_GTEE_DIARY_NARRATIVE_onchange();
        FLD_GTEE_AUTO_EXTEN_PERIOD_onchange();
        FLD_GTEE_COUNTR_GTEE_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_ReasonforRejection = function() {
    try {
        if (document.MAINFORM.ACCEPT_REJECT.value == 'ACCEPTED') {
            SYT_ChangeFldClass(document.MAINFORM.REJ_REASON, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.REJ_REASON, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js*SYF_GTEE_ReasonforRejection", e);
    }
}

csFuncLevelProto.SYF_GTEE_SAME_AS_APPL_FLG = function() {
    try {

        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'OWNB') {
            document.MAINFORM.INDEMN_ID.value = document.MAINFORM.APPL_ID.value;
            document.MAINFORM.INDEMN_NM.value = document.MAINFORM.APPL_NM.value;
            document.MAINFORM.INDEMN_ADD1.value = document.MAINFORM.APPL_ADD1.value;
            document.MAINFORM.INDEMN_ADD2.value = document.MAINFORM.APPL_ADD2.value;
            document.MAINFORM.INDEMN_ADD3.value = document.MAINFORM.APPL_ADD3.value;
            document.MAINFORM.INDEMN_MAIL_ADD.value = document.MAINFORM.APPL_MAIL_ADD.value;
            document.MAINFORM.INDEMN_CORR_MED.value = document.MAINFORM.APPL_CORR_MED1.value;
            document.MAINFORM.INDEMN_FAX.value = document.MAINFORM.APPL_FAX_NO_1.value;
            document.MAINFORM.INDEMN_EMAIL.value = document.MAINFORM.APPL_EMAIL_1.value;
            document.MAINFORM.INDEMN_SW_TAG.value = document.MAINFORM.APPL_SW_TAG.value;
            document.MAINFORM.INDEMN_SW_ADD.value = document.MAINFORM.APPL_SW_ADD.value;
            document.MAINFORM.INDEMN_REF.value = document.MAINFORM.APPL_REF.value;
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMNBANK, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DOCS_PRESENTED_BY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_REF, 'P');
            SYT_DisableField(document.MAINFORM.INDEMNBANK);
        } else {
            SYM_GTEE_Cal_Clear_Indemn();
            document.MAINFORM.DOCS_PRESENTED_BY.value = "";
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMNBANK, 'O');
            SYT_ChangeFldClass_New('INDEMN_NM', 'M');
            SYT_ChangeFldClass_New('DOCS_PRESENTED_BY', 'M');
            SYT_EnableFields(document.MAINFORM.INDEMNBANK);
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
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
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_GTEE_BAL = function() {
    try {

        document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_AMT.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_GTEE_APPL = function() {
    try {

        //SYS_GetCUBK('APPL_ID_CUST');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_CORR_MED_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_CORR_MED.value == "SWIFT") {
            //swift
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'O');
        } else if (document.MAINFORM.ADV_BK_CORR_MED.value == "Mail") {
            //Mail
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
        } else {
            //none
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 11 || document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_GTEE_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ADV_THU_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == "SWIFT") {
            //swift
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'O');
        } else if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == "Mail") {
            //mail
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
        } else {
            //none
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 11 || document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + "XXX";
            }
        }
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'M');
        }
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value == '' && document.MAINFORM.ADV_THU_BK_NM.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'O');
        }
        SYM_GTEE_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLBANK_onclick = function(event) {
    try {
        SYM_GTEE_APPL_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_GTEE_MPO_APPL_CORR_MED1();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
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
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AUTO_EXTEN_PERIOD_onchange = function(event) {
    try {
        if (document.MAINFORM.AUTO_EXTEN_PERIOD.value == '') {
            document.MAINFORM.AUTO_EXTEN_EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_GTEE_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_GTEE_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_GTEE_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
        SYM_GTEE_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_AVAL_WT_BANK();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_GTEE_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 11 || document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.AVAL_WT_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_GTEE_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENEFICIARYBANK_onclick = function(event) {
    try {
        SYM_GTEE_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
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
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_CONF_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 11 || document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_GTEE_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COUNTR_GTEE_onchange = function(event) {
    try {
        SYM_GTEE_MPO_COUNTR_GTEE();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ACCEPT_REJECT_onchange = function(event) {
    try {
        SYF_GTEE_ReasonforRejection();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton_onclick = function(event) {
    try {
        return SYS_InsertClause('GTEE_DETAILS');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton2_onclick = function(event) {
    try {
        return SYS_InsertClause('GTEE_DETAILS_79');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton3_onclick = function(event) {
    try {
        return SYS_InsertClause('NARR_MAIL');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIVERY_TO_onchange = function(event) {
    try {
        if (document.MAINFORM.DELIVERY_TO.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DOCS_PRESENTED_BY_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMNBANK_onclick = function(event) {
    try {
        SYM_GTEE_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_INDEMN_CORR_MED(); //vadd
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
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
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ISSUE_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ISSUE_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 11 || document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_GTEE_CHK_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SAME_AS_APPL_FLG_onchange = function(event) {
    try {
        SYF_GTEE_SAME_AS_APPL_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD1_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('SEND_TO_BANK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_GTEE_SND_TO_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('SEND_TO_BANK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SND_TO_ID_BANK_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SEND_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SW_FORM_onchange = function(event) {
    try {
        SYM_GTEE_MPO_SW_FORM();
        SYT_ChangeFldClass('GTEE_DETAILS', 'P'); 
        SYM_GTEE_MPO_SIGNATURE();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button1_onclick = function(event) {
    try {
        return SYS_InsertClause('SPCL_INSTR');
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_OWGT_ReviewGTEEFrCE.js", e);
    }
}