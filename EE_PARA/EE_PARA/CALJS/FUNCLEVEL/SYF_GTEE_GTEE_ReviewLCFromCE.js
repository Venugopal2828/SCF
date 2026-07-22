var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Awaiting Bank Verification LC App';
        document.MAINFORM.NXT_STATUS.value = 'Issue Guarantee';
        document.MAINFORM.GTEE_BAL.value = document.MAINFORM.GTEE_AMT.value;
        document.MAINFORM.REG_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.SW_FORM.value = 'MT760';
        document.MAINFORM.GTEE_TYPE.value = document.MAINFORM.X798_TYPE_GTEE_22K.value;
        SYF_GTEE_REFORMAT_13E();
        SYT_ChangeFldClass(document.MAINFORM.APPLBANK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_CUST_BK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENEFICIARYBANK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_CUST_BK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD1_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD1_BTN, 'P');
        document.MAINFORM.GTEE_BAL_LOCAL.value = document.MAINFORM.GTEE_AMT_LOCAL.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
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
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_ShowBlankRow('INDE', 1);
        SYM_GTEE_Cal_FXD_EXPIRY();
        SYT_ChangeFldClass(document.MAINFORM.SAME_AS_APPL_FLG, 'M');
        SYM_GTEE_For_APPL_CUBK_798();
        SYM_GTEE_For_BENE_CUBK_798();
        SYM_GTEE_For_INDEMN_CUBK_798();
        SYM_GTEE_For_SEND_CUBK_798();
        SYF_GTEE_SAME_AS_APPL_FLG();
        //SYF_GTEE_X798_FORM_GTEE_22E();
        SYM_GTEE_MPO_SW_FORM();
        CHG_DefCharge_chargeAtOnchange();
        FLD_GTEE_DIARY_NARRATIVE_onchange();
        FLD_GTEE_AUTO_EXTEN_PERIOD_onchange();
        if (SYS_FUNCTION_TYPE == 'RE') {
            var cre_Date = document.MAINFORM.X798_CRE_DATE.value;
            var chg_dateFormat = cre_Date.replaceAll('-', '');
            document.MAINFORM.X798_CRE_DATE.value = chg_dateFormat.trim();
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
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
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
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
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_REFORMAT_13E = function() {
    try {

        var date_send = document.MAINFORM.X798_CRE_DATE.value;
        var time_send = document.MAINFORM.X798_CRE_TIME.value;
        if (date_send != '') {
            var year_send = date_send.substring(0, 4);
            var month_send = date_send.substring(5, 7);
            var day_send = date_send.substring(8, 10);
            document.MAINFORM.X798_CRE_DATE.value = date_send;
        }
        if (time_send != '') {
            var hour_send = time_send.substring(0, 2);
            var min_send = time_send.substring(2, 4);
            time_send = hour_send + ':' + min_send;
            document.MAINFORM.X798_CRE_TIME.value = time_send;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
    if (!SYM_GTEE_Check_EXPIRY_DT_ISSUE_DT()) {
                return false;
            }
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_COUNTER_GTEE_FLG = function() {
    try {

        if (document.MAINFORM.PURP_OF_MESS.value == 'ISCO' || document.MAINFORM.PURP_OF_MESS.value == 'ICCO') {
            EEHtml.getElementById('C').style.display = '';
            SYT_EnableDivClass('C_div');
        } else {
            EEHtml.getElementById('C').style.display = 'none';
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_DisableDivClass('C_div');
            SYT_DisableDiv('C');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
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
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ADV_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_ADV_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
        SYM_GTEE_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ADV_THU_BK();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
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
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_NM_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_NM.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'M');
        }
        if (document.MAINFORM.ADV_THU_BK_NM.value == '' && document.MAINFORM.ADV_THU_BK_SW_ADD.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_ADV_THU_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'M');
        }
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value == '' && document.MAINFORM.ADV_THU_BK_NM.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'O');
        }
        SYM_GTEE_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ID_BTN_LOCAL_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_ADD_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ID_LOCAL_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Appl_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
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
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ADD1_LOCAL_onchange = function(event) {
    try {
        SYM_GTEE_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ADD2_LOCAL_onchange = function(event) {
    try {
        SYM_GTEE_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ADD3_LOCAL_onchange = function(event) {
    try {
        SYM_GTEE_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ADD_BTN_LOCAL_onclick = function(event) {
    try {
        //SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ADD_LOCAL', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ID_BTN_LOCAL_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ID_LOCAL', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ID_LOCAL_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID_LOCAL', 'AVAL_WT_BK_ID_LOCAL');
        SYM_GTEE_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_NM_LOCAL_onchange = function(event) {
    try {
        SYM_GTEE_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_SW_ADD_LOCAL_onchange = function(event) {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value.length == 11 || document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value.length == 8) {

            if (document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value.length == 8) {
                document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value = document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value + "XXX";
            }
        }
        SYM_GTEE_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENEFICIARYBANK_onclick = function(event) {
    try {
        SYM_GTEE_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
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
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ID_BTN_LOCAL_onclick = function(event) {
    try {
        SYM_GTEE_SQL_BENE_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ID_LOCAL_onchange = function(event) {
    try {
        SYM_GTEE_CAL_BENE_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_ADD1_onchange = function(event) {
    try {
        SYM_GTEE_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_ADD2_onchange = function(event) {
    try {
        SYM_GTEE_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_ADD3_onchange = function(event) {
    try {
        SYM_GTEE_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_BK_NM_onchange = function(event) {
    try {
        SYM_GTEE_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
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
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_INSTR_onchange = function(event) {
    try {
        if (document.MAINFORM.CONF_INSTR.value == 'CONFIRM' || document.MAINFORM.CONF_INSTR.value == 'MAY ADD') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID_BTN, 'P');
            document.MAINFORM.CONF_BK_NM.value = '';
            document.MAINFORM.CONF_BK_ADD1.value = '';
            document.MAINFORM.CONF_BK_ADD2.value = '';
            document.MAINFORM.CONF_BK_ADD3.value = '';
            document.MAINFORM.CONF_BK_SW_ADD.value = '';
            document.MAINFORM.CONF_BK_ID.value = '';
            document.MAINFORM.CONF_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COUNTR_GTEE_onchange = function(event) {
    try {
        SYM_GTEE_MPO_COUNTR_GTEE();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton_onclick = function(event) {
    try {
        return SYS_InsertClause('GTEE_DETAILS');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton2_onclick = function(event) {
    try {
        return SYS_InsertClause('GTEE_DETAILS_79');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton3_onclick = function(event) {
    try {
        return SYS_InsertClause('NARR_MAIL');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIVERY_TO_onchange = function(event) {
    try {
        if (document.MAINFORM.DELIVERY_TO.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO.value + '/';
            if (document.MAINFORM.DELIVERY_TO.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DOCS_PRESENTED_BY_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_EXPIRY_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.REG_DT.name);
        if (nDays > 0) {
            alert("Expiry date should not accept before Registration date");
            document.MAINFORM.EXPIRY_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMNBANK_onclick = function(event) {
    try {
        SYM_GTEE_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_onchange = function(event) {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_BTN_LOCAL_onclick = function(event) {
    try {
        SYM_GTEE_SQL_INDEMN_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_LOCAL_onchange = function(event) {
    try {
        SYM_GTEE_CAL_INDEMN_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_BTN_LOCAL_onclick = function(event) {
    try {
        SYM_GTEE_SQL_ISSUE_BK_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_SW_ADD_LOCAL_onchange = function(event) {
    try {
        SYM_GTEE_CHK_ISSUE_BK_SW_TAG_LOCAL();
        if (document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value.length == 8) {
            document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value = document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_MATURITY_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.MATURITY_DT.name, document.MAINFORM.REG_DT.name);
        if (nDays > 0) {
            alert("Final Maturity date should not accept before Registration date");
            document.MAINFORM.MATURITY_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_PURP_OF_MESS_onchange = function(event) {
    try {
        SYF_GTEE_COUNTER_GTEE_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SAME_AS_APPL_FLG_onchange = function(event) {
    try {
        SYF_GTEE_SAME_AS_APPL_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_GTEE_SND_TO_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_REF_onchange = function(event) {
    try {
        SYF_GTEE_Cal_TEMP_N90_REF_21();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SND_TO_ID_BANK_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SEND_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SUB_MESS_TYPE_onchange = function(event) {
    try {
        SYM_GTEE_FOR798();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SW_FORM_onchange = function(event) {
    try {
        SYM_GTEE_MPO_SW_FORM();
        SYM_GTEE_MPO_SIGNATURE();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReviewLCFromCE.js", e);
    }
}