var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IWGT_MT798_FLG = function() {
    try {

        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDiv('Z_div');

        }
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_IWGT_Cal_INDEMN_SW_TAG();
        SYF_IWGT_MT798_FLG();
        SYT_Init_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        document.MAINFORM.INTMEDI_BK_ID_BTN.disabled = true;
        document.MAINFORM.INTMEDI_BK_NM_BTN.disabled = true;
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ACCT_WITH_ADD', 'AC_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.AC_WT_BK_ID.value != "") {
            SYS_GetCUBK('ACCT_WITH_BK', 'AC_WT_BK_ID', 'SYM_IWGT_Cal_AC_BK_SW_TAG');
        }
        SYM_IWGT_Clear_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_AC_WT_BK_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_CORR_MED_onchange = function(event) {
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
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_IWGT_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_SQL_ADV_BK();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_POST_ADD_BTN_onclick = function(event) { 
    try { 
        SYM_IWGT_Cal_ADV_BK_POST_ADD(); 
    } catch (e) { 
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e); 
    } 
} 

csFuncLevelProto.FLD_IWGT_ADV_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_SQL_ADV_THU_BK();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_CORR_MED_onchange = function(event) {
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
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_IWGT_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_NM_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_NM.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'M');
        }
        if (document.MAINFORM.ADV_THU_BK_NM.value == '' && document.MAINFORM.ADV_THU_BK_SW_ADD.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'O');
        }
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_ADV_THU_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'M');
        }
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value == '' && document.MAINFORM.ADV_THU_BK_NM.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'O');
        }
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPLBANK_onclick = function(event) {
    try {
        SYM_IWGT_APPL_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPLY_FLG_onchange = function(event) {
    try {
        SYF_IWGT_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED1();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_ADD_BUTTON();
        if (document.MAINFORM.APPL_ID.value == "") {
            SYM_IWGT_Cal_Clear_Appl_ID();
        } else if (document.MAINFORM.APPL_ID.value == document.MAINFORM.BENE_ID.value) {
            alert("Applicant and Beneficiary details should not be same!!!");
            document.MAINFORM.APPL_ID.value = '';
            SYM_IWGT_Cal_Clear_Appl_ID();
        } else {
            SYM_IWGT_APPL_ID_BTN();
        }
        //JACK 0918 IWGT
        //SYM_IWGT_Set_Risk_Party_Info();
        //document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENEFICIARYBANK_onclick = function(event) {
    try {
        SYM_IWGT_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_BENE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_ADD_BUTTON();
        if (document.MAINFORM.BENE_ID.value == "") {
            SYM_IWGT_Cal_Clear_Bene_ID();
        } else if (document.MAINFORM.APPL_ID.value == document.MAINFORM.BENE_ID.value) {
            alert("Applicant and Beneficiary details should not be same!!!");
            document.MAINFORM.BENE_ID.value = '';
            SYM_IWGT_Cal_Clear_Bene_ID();
        } else {
            SYM_IWGT_BENE_ID_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DOCS_PRESENTED_BY_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMNBANK_onclick = function(event) {
    try {
        SYM_IWGT_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INDEMN_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_INDEMN_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INDEMN_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INDEMN_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INDEMN_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INDEMN_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_ID_onchange = function(event) {
    try {
        SYM_IWGT_INDEMN_ID_BTN();
        SYM_IWGT_Cal_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_INDEMN_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_INDEMN_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INDEMN_SW_TAG();
        SYM_IWGT_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INDEMN_SW_TAG();
        SYM_IWGT_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ISSUE_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYM_IWGT_CAL_ISSUE_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_SQL_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + 'XXX';
        }
        SYM_IWGT_CHK_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SAME_AS_APPL_FLG_onchange = function(event) {
    try {
        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'OWNB') {
            document.MAINFORM.DOCS_PRESENTED_BY.value = document.MAINFORM.APPL_CUST_BK.value;
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
        } else {
            SYM_IWGT_Cal_Clear_Indemn();
            document.MAINFORM.DOCS_PRESENTED_BY.value = "";
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DOCS_PRESENTED_BY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMNBANK, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_IWGT_SND_TO_ID_BTN();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
        SYM_IWGT_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SND_TO_ID_BANK_BTN_onclick = function(event) {
    try {
        SYM_IWGT_SEND_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_NotificationofNonExtension.js", e);
    }
}