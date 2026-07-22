var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CLERK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.CURRNT_STATUS.value = 'RegInwardAmend';
        document.MAINFORM.NXT_STATUS.value = 'Amendment';
        document.MAINFORM.CLS_FLG.value = 'NO';
        SYF_IWGT_Cal_NO_OF_AMD();
        SYF_IWGT_Cal_AMD_REF();
        //SYF_IWGT_Cal_AMD_DETAILS();

        document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.NEW_EXPIRY_RVW_DT.value = document.MAINFORM.EXPIRY_DT.value;
        //marked by zoe 20090323
        document.MAINFORM.NEW_GTEE_AMT.value = document.MAINFORM.GTEE_AMT.value;
        document.MAINFORM.TEMP_NEW_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value;
        document.MAINFORM.TEMP_GTEE_AMT.value = document.MAINFORM.GTEE_AMT.value;
        document.MAINFORM.APPL_CUST_BK.value = 'Bank';
        SYF_IWGT_Cal_SAMEASAPPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        //SYT_Init_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        //SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        //SYM_IWGT_Cal_ADD_BUTTON();
        SYM_IWGT_MPO_DEC_AMT_onclick();
        SYM_IWGT_MPO_INC_AMT_onclick();
        SYM_IWGT_Cal_NEW_Bene_All();
        SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_CORR_MED, 'M');
        //SYF_IWGT_MPO_AMD_NON_STD_WORDNG_AMD_DTL_TEMP();
        SYM_IWGT_MPO_APLB_RULE_NARR();
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISCO' || document.MAINFORM.PURP_OF_MESS.value == 'ICCO') {
            EEHtml.getElementById('S').style.display = '';
            SYT_EnableDivClass('S_div');
        } else {
            EEHtml.getElementById('S').style.display = 'none';
            SYT_DisableDivClass('S_div');
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME != 'RegisterInwAmend') {
            if (document.MAINFORM.PURP_OF_MESS_AMD.value == 'ISCA' || document.MAINFORM.PURP_OF_MESS_AMD.value == 'ICCA') {
                EEHtml.getElementById('S').style.display = '';
                SYT_EnableDivClass('S_div');
            } else {
                EEHtml.getElementById('S').style.display = 'none';
                SYT_DisableDivClass('S_div');
            }
        }
        SYT_DisableDivClass('C_div');
        SYF_GTEE_NEW_BENE_INFO();
        //SYF_IWGT_ChangeFldClass_Parties();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_NEW_BENE_INFO = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ID, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ID_BTN, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_NM, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD2, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD3, 'O');
        SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_AMD_CODE, 'O');
        SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'O');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_CAL_NEW_GTEE_AMT = function() {
    try {
        //added by zoe 20090323
        //NEW_GTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value) + SYS_BeFloat(document.MAINFORM.INC_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
		NEW_GTEE_AMT = SYS_FloatSubToString(SYS_FloatAddToString(SYS_BeFloat(document.MAINFORM.GTEE_AMT.value), SYS_BeFloat(document.MAINFORM.INC_AMT.value)), SYS_BeFloat(document.MAINFORM.DEC_AMT.value));
        document.MAINFORM.NEW_GTEE_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, NEW_GTEE_AMT);
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_CAL_TEMP_NEW_GTEE_BAL = function() {
    try {
        //document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value) + SYS_BeFloat(document.MAINFORM.INC_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
		document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYS_FloatSubToString(SYS_FloatAddToString(SYS_BeFloat(document.MAINFORM.GTEE_BAL.value), SYS_BeFloat(document.MAINFORM.INC_AMT.value)), SYS_BeFloat(document.MAINFORM.DEC_AMT.value));
        document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.TEMP_NEW_GTEE_BAL.value);
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_COUNTER_GTEE_FLG = function() {
    try {
        if (document.MAINFORM.PURP_OF_MESS_AMD.value == 'ISCA' || document.MAINFORM.PURP_OF_MESS_AMD.value == 'ICCA') {
            EEHtml.getElementById('S').style.display = '';
            SYT_EnableDivClass('S_div');
        } else {
            EEHtml.getElementById('S').style.display = 'none';
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_DisableDivClass('S_div');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_AMD_DETAILS = function() {
    try {
        if (document.MAINFORM.GTEE_DETAILS_79.value != '') {
            document.MAINFORM.AMD_DTL_TEMP.value = document.MAINFORM.GTEE_DETAILS_79.value;
        }

        if (document.MAINFORM.X760_BKTOBK_INFO72.value != '') {
            document.MAINFORM.X767_BKTOBK_INFO72.value = document.MAINFORM.X760_BKTOBK_INFO72.value;
        }

        if (document.MAINFORM.NON_STD_WORDNG.value != '') {
            document.MAINFORM.AMD_NON_STD_WORDNG.value = document.MAINFORM.NON_STD_WORDNG.value;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_AMD_REF = function() {
    try {
        if (document.MAINFORM.NO_OF_AMD.value != '') {
            document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value + '/' + document.MAINFORM.NO_OF_AMD.value;
        } else {
            document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_NO_OF_AMD = function() {
    try {
        var no = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        document.MAINFORM.NO_OF_AMD.value = no + 1;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_SAMEASAPPL = function() {
    try {
        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'Yes') {
            document.MAINFORM.INDEMN_ID.value = document.MAINFORM.APPL_ID.value;
            document.MAINFORM.INDEMN_NM.value = document.MAINFORM.APPL_NM.value;
            document.MAINFORM.INDEMN_ADD1.value = document.MAINFORM.APPL_ADD1.value;
            document.MAINFORM.INDEMN_ADD2.value = document.MAINFORM.APPL_ADD2.value;
            document.MAINFORM.INDEMN_ADD3.value = document.MAINFORM.APPL_ADD3.value;
            document.MAINFORM.INDEMN_MAIL_ADD.value = document.MAINFORM.APPL_MAIL_ADD.value;
            document.MAINFORM.INDEMN_REF.value = document.MAINFORM.APPL_REF.value;
            document.MAINFORM.INDEMN_CORR_MED.value = document.MAINFORM.APPL_CORR_MED1.value;
            document.MAINFORM.INDEMN_EMAIL.value = document.MAINFORM.APPL_EMAIL_1.value;
            document.MAINFORM.INDEMN_FAX.value = document.MAINFORM.APPL_FAX_NO_1.value;
            document.MAINFORM.DOCS_PRESENTED_BY.value = document.MAINFORM.APPL_CUST_BK.value;
        } else {
            document.MAINFORM.INDEMN_ID.value = '';
            document.MAINFORM.INDEMN_NM.value = '';
            document.MAINFORM.INDEMN_ADD1.value = '';
            document.MAINFORM.INDEMN_ADD2.value = '';
            document.MAINFORM.INDEMN_ADD3.value = '';
            document.MAINFORM.INDEMN_MAIL_ADD.value = '';
            document.MAINFORM.INDEMN_REF.value = '';
            document.MAINFORM.INDEMN_CORR_MED.value = '';
            document.MAINFORM.INDEMN_EMAIL.value = '';
            document.MAINFORM.INDEMN_FAX.value = '';
            document.MAINFORM.DOCS_PRESENTED_BY.value = '';

        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_ChangeFldClass_Parties = function() {
    try {
        //Applicant
        SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPLBANK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_CUST_BK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD1_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BR_CD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'P');
        //Beneficiary
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENEFICIARYBANK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_CUST_BK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD1_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_CNTY_CD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ACC_NO, 'P');
        //Obligor/Instructing Party [51]
        SYT_ChangeFldClass(document.MAINFORM.SAME_AS_APPL_FLG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMNBANK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DOCS_PRESENTED_BY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD1_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_REF, 'P');
        //Send to
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SND_TO_ID_BANK_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD1_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CNTY_CD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.IDEN_ID, 'P');
        //ssuer [52]
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'P');
        //Advising Bank [56]
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
        //'Advise Through' Bank [57]
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THRU_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_REF, 'P');
        //Requested Confirmation Party [58]
        SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_ADD, 'P');
        //Delivery To/Collection By [24G]
        SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'P');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_AMD_NON_STD_WORDNG_AMD_DTL_TEMP = function() {
    try {
        if (document.MAINFORM.ISSUE_BY.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.AMD_NON_STD_WORDNG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_TEMP, 'P');
        } else {
            if (document.MAINFORM.ISSUE_BY.value == "None") {
                SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_TEMP, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AMD_NON_STD_WORDNG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO, 'P');
            }
            SYT_ChangeFldClass(document.MAINFORM.AMD_NON_STD_WORDNG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_TEMP, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_check_DEC_AMT_LOCAL = function() {
    try {
        var DEC_AMT_LOCAL;
        var GTEE_AMT_LOCAL;
        var GTEE_BAL_LOCAL;
        DEC_AMT_LOCAL = SYS_BeFloat(document.MAINFORM.DEC_AMT_LOCAL.value);
        GTEE_AMT_LOCAL = SYS_BeFloat(document.MAINFORM.GTEE_AMT_LOCAL.value);
        GTEE_BAL_LOCAL = SYS_BeFloat(document.MAINFORM.GTEE_BAL_LOCAL.value);
        if (DEC_AMT_LOCAL > GTEE_AMT_LOCAL || DEC_AMT_LOCAL > GTEE_BAL_LOCAL) {
            SYS_CheckError(document.MAINFORM.DEC_AMT_LOCAL, "Decrease Amount should between Guarantee Amount and Guarantee Balance!");
            document.MAINFORM.DEC_AMT_LOCAL.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_onchange = function() {
    try {
        if (document.MAINFORM.ADV_BK_ID.value == '') {
            document.MAINFORM.ADV_BK_NM.value = '';
            document.MAINFORM.ADV_BK_ADD1.value = '';
            document.MAINFORM.ADV_BK_ADD2.value = '';
            document.MAINFORM.ADV_BK_ADD3.value = '';
            document.MAINFORM.ADV_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_BK_TLX.value = '';
            document.MAINFORM.ADV_BK_NOTES.value = '';
            document.MAINFORM.ADV_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_BK_SW_TAG.value = '';
            document.MAINFORM.ADV_BK_CORR_MED.value = 'None';
        } else {
            SYS_GetCUBK('ADV_BK_ID', 'ADV_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ID_onchange = function() {
    try {
        if (document.MAINFORM.ADV_THU_BK_ID.value == '') {
            document.MAINFORM.ADV_THU_BK_NM.value = '';
            document.MAINFORM.ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.ADV_THU_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_TLX.value = '';
            document.MAINFORM.ADV_THU_BK_NOTES.value = '';
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = '';
            document.MAINFORM.ADV_THU_BK_CORR_MED.value = 'None';
        } else {
            SYS_GetCUBK('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_POST_ADD_BTN_onchange = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AMD_DT_onchange = function() {
    try {
        SYM_IWGT_Check_NEW_EXPIRY_RVW_DT_AMD_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CORR_MED1_onchange = function() {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CUST_BK_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Appl_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CONST_REQ_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_CONST_REQ();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CORR_MED_onchange = function() {
    try {
        SYM_IWGT_MPO_BENE_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CUST_BK_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Bene_All();
        SYM_IWGT_Cal_ADD_BUTTON();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim") {
            var obj = EEHtml.getElementById('CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT');
            if (obj) {
                SYM_IWGT_Chg_Screen_local();
                SYM_IWGT_Chg_Calculate_POST();
                SYM_IWGT_Chg_Calculate_SWIFT();
            }
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_onchange = function() {
    try {
        SYM_IWGT_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_SW_ADD_onchange = function() {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 11 || document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DEC_AMT_onchange = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DEC_AMT.value = 0;
        }


        SYM_IWGT_MPO_DEC_AMT_onclick();
        SYM_IWGT_Cal_DEC_AMT();
        SYF_IWGT_CAL_NEW_GTEE_AMT();
        SYF_IWGT_CAL_TEMP_NEW_GTEE_BAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_onchange = function() {
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
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_AMD_CODE_onchange = function() {
    try {
        var DELIV_TO_AMD = document.MAINFORM.DELIVERY_TO_AMD_CODE.value;
        if (DELIV_TO_AMD == 'OTHR') {

            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'P');
            document.MAINFORM.DELIVERY_TO_NM_ADD_AMD.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_AMD_CODE_L_onchange = function() {
    try {
        var DELIV_TO_AMD = document.MAINFORM.DELIVERY_TO_AMD_CODE_L.value;
        if (DELIV_TO_AMD == 'OTHR') {

            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD_L, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD_L, 'P');
            document.MAINFORM.DELIVERY_TO_NM_ADD_AMD_L.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_DT_onchange = function() {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INC_AMT_onchange = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.INC_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.INC_AMT.value = 0;
        }


        SYM_IWGT_MPO_INC_AMT_onclick();
        SYF_IWGT_CAL_NEW_GTEE_AMT();
        SYF_IWGT_CAL_TEMP_NEW_GTEE_BAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_ID_onchange = function() {
    try {
        if (document.MAINFORM.INDEMN_ID.value != "") {
            SYS_GetCUBK('INDEMN_ID_BK', 'RCV_FM_ID');
        } else {
            SYM_IWGT_Cal_Clear_Instructing();
        }

        SYM_IWGT_Cal_ADD_BUTTON();
        if (document.MAINFORM.APPL_ID.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_BTN, 'P');
            SYM_IWGT_Cal_APPL_SW_TAG();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_BTN, 'O');
            SYM_IWGT_Cal_APPL_SW_TAG();
        }
        if (document.MAINFORM.BENE_ID.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_BTN, 'P');
            SYM_IWGT_Cal_BENE_SW_TAG();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_BTN, 'O');
            SYM_IWGT_Cal_BENE_SW_TAG();
        }

        if (document.MAINFORM.SEND_TO_ID.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD1_BTN, 'P');
            SYM_IWGT_Cal_SEND_TO_SW_TAG();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD1_BTN, 'O');
            SYM_IWGT_Cal_SEND_TO_SW_TAG();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_NM_onchange = function() {
    try {
        if (document.MAINFORM.RCV_FM_BK_SW_ADD.value != "") {
            document.MAINFORM.RCV_FM_BK_SW_TAG.value = "A";
        } else {
            if (document.MAINFORM.RCV_FM_BK_NM.value == "") {
                if (document.MAINFORM.RCV_FM_BK_ADD1.value != "" || document.MAINFORM.RCV_FM_BK_ADD2.value != "" || document.MAINFORM.RCV_FM_BK_ADD3.value != "") {
                    document.MAINFORM.RCV_FM_BK_SW_TAG.value = "D";
                } else {
                    document.MAINFORM.RCV_FM_BK_SW_TAG.value = "";
                }
            } else {
                document.MAINFORM.RCV_FM_BK_SW_TAG.value = "D";
            }
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_SW_ADD_onchange = function() {
    try {
        if (document.MAINFORM.RCV_FM_BK_SW_ADD.value != "") {
            document.MAINFORM.RCV_FM_BK_SW_TAG.value = "A";
        } else {
            if (document.MAINFORM.RCV_FM_BK_NM.value == "") {
                if (document.MAINFORM.RCV_FM_BK_ADD1.value != "" || document.MAINFORM.RCV_FM_BK_ADD2.value != "" || document.MAINFORM.RCV_FM_BK_ADD3.value != "") {
                    document.MAINFORM.RCV_FM_BK_SW_TAG.value = "D";
                } else {
                    document.MAINFORM.RCV_FM_BK_SW_TAG.value = "";
                }
            } else {
                document.MAINFORM.RCV_FM_BK_SW_TAG.value = "D";
            }
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INWARD_RCV_DT_onchange = function() {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_Bene_All();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
        SYM_IWGT_Cal_NEW_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_EXPIRY_RVW_DT_onchange = function() {
    try {
        SYM_IWGT_Check_NEW_EXPIRY_RVW_DT_AMD_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_EXPIRY_TYPE_onchange = function() {
    try {
        var type = document.MAINFORM.NEW_EXPIRY_TYPE.value;
        if (type == 'FIXD') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT, 'M');
            document.MAINFORM.NEW_EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND, 'P');
        } else if (type == 'COND') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND, 'M');
        } else {
            document.MAINFORM.NEW_EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT, 'P');
            document.MAINFORM.NEW_EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_EXPIRY_TYPE_LOCAL_onchange = function() {
    try {
        var type = document.MAINFORM.NEW_EXPIRY_TYPE_LOCAL.value;
        if (type == 'FIXD') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT_LOCAL, 'M');
            document.MAINFORM.NEW_EXPIRY_COND_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND_LOCAL, 'P');
        } else if (type == 'COND') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND_LOCAL, 'M');
        } else {
            document.MAINFORM.NEW_EXPIRY_DT_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT_LOCAL, 'P');
            document.MAINFORM.NEW_EXPIRY_COND_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND_LOCAL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_GTEE_AMT_LOCAL_onchange = function() {
    try {
        var value = document.MAINFORM.NEW_GTEE_AMT_LOCAL.value;
        if (SYM_IWGT_CHK_NEG(value)) {
            alert("New Guarantee amount should not accept negative values");
            document.MAINFORM.NEW_GTEE_AMT_LOCAL.value = 0;
        }
        SYM_IWGT_Cal_INC_AMT_DEC_AMT_LOCAL();
        SYF_IWGT_check_DEC_AMT_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NO_OF_AMD_onchange = function() {
    try {
        SYF_IWGT_Cal_NO_OF_AMD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_PURP_OF_MESS_AMD_onchange = function() {
    try {
        SYF_IWGT_COUNTER_GTEE_FLG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SAME_AS_APPL_FLG_onchange = function() {
    try {
        SYF_IWGT_Cal_SAMEASAPPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_CORR_MED_onchange = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" && SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" && SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {
            SYM_IWGT_MPO_AMD_DTL_OUT767();

        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "InwardAdviseGtee") {
            SYM_IWGT_MPO_X760_DETL_77C();
        }
        SYM_IWGT_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Send_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THRU_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPLBANK_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_ADD1_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENEFICIARYBANK_onclick = function() {
    try {
        SYM_IWGT_Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_ADD1_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMNBANK_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('INDEMN_ID_BK', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD1_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SND_TO_ID_BANK_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_RegisterInwardAmend.js", e);
    }
}