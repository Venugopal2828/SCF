function SYM_IWGT_ADV_BK_MAIL_ADD() {
    try {
        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_TLX, 'O');
        }
        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_TLX, 'O');
        }
        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_TLX, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'O');
        }
        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'None' || document.MAINFORM.ADV_BK_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'O');
            (document.MAINFORM.ADV_BK_CORR_MED, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_ADV_THU_BK_MAIL_ADD() {
    try {
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM, ADV_THU_BK_TLX, 'O');
        }
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_TLX, 'O');
        }
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_TLX, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'O');
        }
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == 'None' || document.MAINFORM.ADV_THU_BK_CORR_MED.VALUE == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_APLB_RULE() {
    try {
        if (document.MAINFORM.APLB_RULE.value == "OTHR") {
            document.all.Applicable.style.visibility = 'visible';
            document.all.APLB_RULE_NARR.style.display = 'block';
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'M');

        } else {
            document.MAINFORM.APLB_RULE_NARR.value = '';
            document.all.Applicable.style.visibility = 'hidden';
            document.all.APLB_RULE_NARR.style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_APLB_RULE2() {
    try {
        if (document.MAINFORM.APLB_RULE.value == "OTHR") {
            document.all.Applicable.style.visibility = 'visible';
            document.all.APLB_RULE_NARR.style.display = 'block';
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'M');
        } else {
            document.all.Applicable.style.visibility = 'hidden';
            document.all.APLB_RULE_NARR.style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_APPL_BUTTON() {
    try {
        if (document.MAINFORM.APPL_CUST_BK.value == "Customer") {
            SYM_IWGT_Cal_APPL_CUST();
        } else if (document.MAINFORM.APPL_CUST_BK.value == "Bank") {
            SYM_IWGT_Cal_APPL_BANK();
        } else {
            SYS_CheckError(document.MAINFORM.APPL_CUST_BK, "Please select Customer or Bank first");
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_APPL_ID_BTN() {
    try {
        if (document.MAINFORM.APPL_CUST_BK.value == 'Bank') {
            SYS_GetCUBK('APPL_ID_BK', document.MAINFORM.APPL_ID.name, 'SYM_IWGT_Cal_APPL_SYD_CallBak');
        } else if (document.MAINFORM.APPL_CUST_BK.value == 'Customer') {
            SYS_GetCUBK('APPL_ID_CUST', document.MAINFORM.APPL_ID.name, 'SYM_IWGT_Cal_APPL_SYD_CallBak');
            document.MAINFORM.APPL_SW_ADD.value = "";
            document.MAINFORM.APPL_SW_TAG.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_APPL_NOTES() {
    try {
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYM_IWGT_Chg_Screen_local();
        SYM_IWGT_MPO_APPL_CORR_MED();
        SYM_IWGT_Chg_Calculate();
        if (document.MAINFORM.APPL_CUST_BK.value == "Bank") {
            SYM_IWGT_Cal_APPL_SW_TAG();
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Alert_SYN_FLG() {
    try {
        if (document.MAINFORM.SYND_FLG.value == 'YES') {
            alert('Please note this transaction has been syndicated.');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_BENE_BUTTON() {
    try {
        if (document.MAINFORM.BENE_CUST_BK.value == "Bank") {
            SYM_IWGT_Cal_BENE_BANK();
        } else if (document.MAINFORM.BENE_CUST_BK.value == "Customer") {
            SYM_IWGT_Cal_BENE_CUST();
        } else {
            SYS_CheckError(document.MAINFORM.BENE_CUST_BK, "Please select Customer or Bank first");
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_BENE_ID_BTN() {
    try {
        if (document.MAINFORM.BENE_CUST_BK.value == 'Bank') {
            SYS_GetCUBK('BENE_ID_BK', document.MAINFORM.BENE_ID.name, 'SYM_IWGT_MPO_BENE_CORR_MED');
        } else if (document.MAINFORM.BENE_CUST_BK.value == 'Customer') {
            SYS_GetCUBK('BENE_ID_CUST', document.MAINFORM.BENE_ID.name, 'SYM_IWGT_MPO_BENE_CORR_MED');
            document.MAINFORM.BENE_SW_ADD.value = "";
            document.MAINFORM.BENE_SW_TAG.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_BENE_MAIL_BTN() {
    try {
        if (document.MAINFORM.BENE_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_BTN, 'P');

        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_BENE_NOTES() {
    try {
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYM_IWGT_Chg_screen_foreign();
        SYM_IWGT_MPO_BENE_CORR_MED();
        SYM_IWGT_Chg_Calculate();
        if (document.MAINFORM.BENE_CUST_BK.value == "Bank") {
            SYM_IWGT_Cal_BENE_SW_TAG();
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_ADV_BK_ID() {
    try {
        if (document.MAINFORM.ADV_BK_ID.value == '') {
            document.MAINFORM.ADV_BK_NM.value = '';
            document.MAINFORM.ADV_BK_ADD1.value = '';
            document.MAINFORM.ADV_BK_ADD2.value = '';
            document.MAINFORM.ADV_BK_ADD3.value = '';
            document.MAINFORM.ADV_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_BK_CORR_MED.value = 'None';
            SYM_IWGT_CAL_ADV_BK_ID_back();
        } else {
            SYS_GetCUBK('ADV_BK_ID', 'ADV_BK_ID', 'SYM_IWGT_CAL_ADV_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_ADV_BK_ID_back() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_ADV_THU_BK_ID() {
    try {
        if (document.MAINFORM.ADV_THU_BK_ID.value == '') {
            document.MAINFORM.ADV_THU_BK_NM.value = '';
            document.MAINFORM.ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.ADV_THU_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_CORR_MED.value = 'None';
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = '';
            SYM_IWGT_CAL_ADV_THU_BK_ID_back();
        } else {
            SYS_GetCUBK('ADV_THU_BK_ID', 'ADV_THU_BK_ID', 'SYM_IWGT_CAL_ADV_THU_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_ADV_THU_BK_ID_back() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_BENE_ID_LOCAL() {
    try {
        if (document.MAINFORM.BENE_ID_LOCAL.value == '') {
            document.MAINFORM.BENE_NM_LOCAL.value = '';
            document.MAINFORM.BENE_ADD1_LOCAL.value = '';
            document.MAINFORM.BENE_ADD2_LOCAL.value = '';
            document.MAINFORM.BENE_ADD3_LOCAL.value = '';
        } else {
            SYS_GetCUBK('BENE_ID_LOCAL', 'BENE_ID_LOCAL');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_CHG_CASH_IND_back() {
    try {
        if (document.MAINFORM.SEPARATE_CHG_FLG.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_CONF_BK_ID() {
    try {
        if (document.MAINFORM.CONF_BK_ID.value == '') {
            document.MAINFORM.CONF_BK_NM.value = '';
            document.MAINFORM.CONF_BK_ADD1.value = '';
            document.MAINFORM.CONF_BK_ADD2.value = '';
            document.MAINFORM.CONF_BK_ADD3.value = '';
            document.MAINFORM.CONF_BK_SW_ADD.value = '';
            SYM_IWGT_CAL_CONF_BK_ID_back();
        } else {
            SYS_GetCUBK('CONF_BK_ID', 'CONF_BK_ID', 'SYM_IWGT_CAL_CONF_BK_ID_back()');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_CONF_BK_ID_back() {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_INDEMN_ID_LOCAL() {
    try {
        if (document.MAINFORM.INDEMN_ID_LOCAL.value == '') {
            document.MAINFORM.INDEMN_NM_LOCAL.value = '';
            document.MAINFORM.INDEMN_ADD1_LOCAL.value = '';
            document.MAINFORM.INDEMN_ADD2_LOCAL.value = '';
            document.MAINFORM.INDEMN_ADD3_LOCAL.value = '';
        } else {
            SYS_GetCUBK('INDEMN_ID_LOCAL', 'INDEMN_ID_LOCAL');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_ISSUE_BK_ADD_back() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'O');
            // SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'P');
            // SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_ISSUE_BK_ADD_back_LOCAL() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID_LOCAL.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN_LOCAL, 'O');
            // SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN_LOCAL, 'P');
            // SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_ISSUE_BK_ID() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value == '') {
            document.MAINFORM.ISSUE_BK_NM.value = '';
            document.MAINFORM.ISSUE_BK_ADD1.value = '';
            document.MAINFORM.ISSUE_BK_ADD2.value = '';
            document.MAINFORM.ISSUE_BK_ADD3.value = '';
            document.MAINFORM.ISSUE_BK_SW_ADD.value = '';
            SYM_IWGT_CAL_ISSUE_BK_ID_back();
        } else {
            SYS_GetCUBK('ISSUE_BK_ID', 'ISSUE_BK_ID', 'SYM_IWGT_CAL_ISSUE_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_ISSUE_BK_ID_back() {
    try {
        //SYM_IWGT_CHK_ISSUE_BK_MAIL();
        SYM_IWGT_CHK_ISSUE_BK_SW_TAG();
        SYM_IWGT_CAL_ISSUE_BK_ADD_back();
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_ISSUE_BK_ID_back_LOCAL() {
    try {
        //SYM_IWGT_CHK_ISSUE_BK_MAIL();
        SYM_IWGT_CHK_ISSUE_BK_SW_TAG_LOCAL();
        SYM_IWGT_CAL_ISSUE_BK_ADD_back_LOCAL();
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_NEW_BENE_ID() {
    try {
        if (document.MAINFORM.NEW_BENE_ID.value == '') {
            document.MAINFORM.NEW_BENE_NM.value = '';
            document.MAINFORM.NEW_BENE_ADD1.value = '';
            document.MAINFORM.NEW_BENE_ADD2.value = '';
            document.MAINFORM.NEW_BENE_ADD3.value = '';
        } else {
            SYS_GetCUBK('NEW_BENE_ID', 'NEW_BENE_ID');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_NEW_BENE_ID_LOCAL() {
    try {
        if (document.MAINFORM.NEW_BENE_ID_LOCAL.value == '') {
            document.MAINFORM.NEW_BENE_NM_LOCAL.value = '';
            document.MAINFORM.NEW_BENE_ADD1_LOCAL.value = '';
            document.MAINFORM.NEW_BENE_ADD2_LOCAL.value = '';
            document.MAINFORM.NEW_BENE_ADD3_LOCAL.value = '';
        } else {
            SYS_GetCUBK('NEW_BENE_ID_LOCAL', 'NEW_BENE_ID_LOCAL');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CAL_PAYMENT_AC_DESC() {
    try {
        var CrLen; // Utility Auto Fix Comments
        var DrLen; // Utility Auto Fix Comments
        var acType; // Utility Auto Fix Comments
        var arrCredit; // Utility Auto Fix Comments
        var arrDebit; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sDesc; // Utility Auto Fix Comments
        arrDebit = SYS_GetObjByDoName("PaymentDebit");
        arrCredit = SYS_GetObjByDoName("PaymentCredit");
        DrLen = arrDebit.length;
        CrLen = arrCredit.length;
        sDesc = "IWGT04NULLNULLNULL";
        for (i = 0; i < DrLen; i++) {
            debit = arrDebit[i];
            acType = debit.getDoValueByName("CPYT_DR_AC_TYPE");
            SYS_UpdateFldValueByDo(debit, "CPYT_DR_AC_DESC", sDesc + acType.substring(0, 1));
        }
        for (i = 0; i < CrLen; i++) {
            credit = arrCredit[i];
            acType = credit.getDoValueByName("CPYT_CR_AC_TYPE");
            SYS_UpdateFldValueByDo(credit, "CPYT_CR_AC_DESC", sDesc + acType.substring(0, 1));
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CHK_ADV_BK_SW_TAG() {
    try {
        if (document.MAINFORM.ADV_BK_SW_ADD.value != '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.ADV_BK_NM.value != '' || document.MAINFORM.ADV_BK_ADD1.value != '' || document.MAINFORM.ADV_BK_ADD2.value != '' || document.MAINFORM.ADV_BK_ADD3.value != '') && document.MAINFORM.ADV_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ADV_BK_NM.value == '' && document.MAINFORM.ADV_BK_ADD1.value == '' && document.MAINFORM.ADV_BK_ADD2.value == '' && document.MAINFORM.ADV_BK_ADD3.value == '' && document.MAINFORM.ADV_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CHK_ADV_THU_BK_SW_TAG() {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value != '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.ADV_THU_BK_NM.value != '' || document.MAINFORM.ADV_THU_BK_ADD1.value != '' || document.MAINFORM.ADV_THU_BK_ADD2.value != '' || document.MAINFORM.ADV_THU_BK_ADD3.value != '') && document.MAINFORM.ADV_THU_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ADV_THU_BK_NM.value == '' && document.MAINFORM.ADV_THU_BK_ADD1.value == '' && document.MAINFORM.ADV_THU_BK_ADD2.value == '' && document.MAINFORM.ADV_THU_BK_ADD3.value == '' && document.MAINFORM.ADV_THU_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CHK_AVAL_BK_SW_TAG() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value != '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'F';
        }
        if ((document.MAINFORM.AVAL_WT_BK_NM.value != '' || document.MAINFORM.AVAL_WT_BK_ADD1.value != '' || document.MAINFORM.AVAL_WT_BK_ADD2.value != '' || document.MAINFORM.AVAL_WT_BK_ADD3.value != '') && document.MAINFORM.AVAL_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'G';
        }
        if (document.MAINFORM.AVAL_WT_BK_NM.value == '' && document.MAINFORM.AVAL_WT_BK_ADD1.value == '' && document.MAINFORM.AVAL_WT_BK_ADD2.value == '' && document.MAINFORM.AVAL_WT_BK_ADD3.value == '' && document.MAINFORM.AVAL_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CHK_AVAL_BK_SW_TAG_LOCAL() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value != '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG_LOCAL.value = 'F';
        }
        if ((document.MAINFORM.AVAL_WT_BK_NM_LOCAL.value != '' || document.MAINFORM.AVAL_WT_BK_ADD1_LOCAL.value != '' || document.MAINFORM.AVAL_WT_BK_ADD2_LOCAL.value != '' || document.MAINFORM.AVAL_WT_BK_ADD3_LOCAL.value != '') && document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG_LOCAL.value = 'G';
        }
        if (document.MAINFORM.AVAL_WT_BK_NM_LOCAL.value == '' && document.MAINFORM.AVAL_WT_BK_ADD1_LOCAL.value == '' && document.MAINFORM.AVAL_WT_BK_ADD2_LOCAL.value == '' && document.MAINFORM.AVAL_WT_BK_ADD3_LOCAL.value == '' && document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG_LOCAL.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CHK_CONF_BK_SW_TAG() {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value != '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.CONF_BK_NM.value != '' || document.MAINFORM.CONF_BK_ADD1.value != '' || document.MAINFORM.CONF_BK_ADD2.value != '' || document.MAINFORM.CONF_BK_ADD3.value != '') && document.MAINFORM.CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.CONF_BK_NM.value == '' && document.MAINFORM.CONF_BK_ADD1.value == '' && document.MAINFORM.CONF_BK_ADD2.value == '' && document.MAINFORM.CONF_BK_ADD3.value == '' && document.MAINFORM.CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CHK_EMAIL(chkemail) {
    try {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(chkemail) == false) {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CHK_ISSUE_BK_SW_TAG() {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value != '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = 'A';
        } else {
            if (document.MAINFORM.ISSUE_BK_NM.value == "") {
                if (document.MAINFORM.ISSUE_BK_ADD1.value != "" || document.MAINFORM.ISSUE_BK_ADD2.value != "" || document.MAINFORM.ISSUE_BK_ADD3.value != "") {
                    document.MAINFORM.ISSUE_BK_SW_TAG.value = "D";
                } else {
                    document.MAINFORM.ISSUE_BK_SW_TAG.value = "";
                }
            } else {
                document.MAINFORM.ISSUE_BK_SW_TAG.value = 'D';
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CHK_ISSUE_BK_SW_TAG_LOCAL() {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value != '') {
            document.MAINFORM.ISSUE_BK_SW_TAG_LOCAL.value = 'A';
        }
        if ((document.MAINFORM.ISSUE_BK_NM_LOCAL.value != '' || document.MAINFORM.ISSUE_BK_ADD1_LOCAL.value != '' || document.MAINFORM.ISSUE_BK_ADD2_LOCAL.value != '' || document.MAINFORM.ISSUE_BK_ADD3_LOCAL.value != '') && document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value == '') {
            document.MAINFORM.ISSUE_BK_SW_TAG_LOCAL.value = 'D';
        }
        if (document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value == '' && document.MAINFORM.ISSUE_BK_NM_LOCAL.value == '' && document.MAINFORM.ISSUE_BK_ADD1_LOCAL.value == '' && document.MAINFORM.ISSUE_BK_ADD2_LOCAL.value == '' && document.MAINFORM.ISSUE_BK_ADD3_LOCAL.value == '') {
            document.MAINFORM.ISSUE_BK_SW_TAG_LOCAL.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CHK_NEG(value) {
    try {
        if (SYS_BeFloat(value) < 0) {
            return true;
        } else {
            false;
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_AC_BK_SW_TAG() {
    try {
        if (document.MAINFORM.AC_WT_BK_SW_ADD.value != '') {
            document.MAINFORM.AC_WT_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.AC_WT_BK_NM.value != '' || document.MAINFORM.AC_WT_BK_ADD1.value != '' || document.MAINFORM.AC_WT_BK_ADD2.value != '' || document.MAINFORM.AC_WT_BK_ADD3.value != '') && document.MAINFORM.AC_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AC_WT_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.AC_WT_BK_NM.value == '' && document.MAINFORM.AC_WT_BK_ADD1.value == '' && document.MAINFORM.AC_WT_BK_ADD2.value == '' && document.MAINFORM.AC_WT_BK_ADD3.value == '' && document.MAINFORM.AC_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AC_WT_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_AC_WT_BK_ADD() {
    try {
        SYS_InqCUBK('ACCT_WITH_ADD', 'AC_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_AC_WT_BK_ID_BTN() {
    try {
        //SYS_InqCUBK('ACCT_WITH_BK');
        SYS_InqCUBK_byCondition('ACCT_WITH_BK', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_ADD_BTN() {
    try {
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
        /*if (document.MAINFORM.RCV_FM_BK_ID.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_MAIL_BTN, 'P');
            SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_MAIL_BTN, 'O');
            SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
        }*/
        if (document.MAINFORM.INDEMN_ID.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD1_BTN, 'P');
            SYM_IWGT_Cal_INDEMN_SW_TAG();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD1_BTN, 'O');
            SYM_IWGT_Cal_INDEMN_SW_TAG();
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_ADD_BUTTON() {
    try {
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
        /*if (document.MAINFORM.RCV_FM_BK_ID.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_MAIL_BTN, 'P');
            SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_MAIL_BTN, 'O');
            SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
        }*/
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_ADV_BK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_ADV_THU_BK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL() {
    try {
        if (document.MAINFORM.APPL_CUST_BK.value == 'Bank') {
            SYS_InqCUBK_byCondition('APPL_ID_BK', '1');
        } else {
            if (document.MAINFORM.APPL_CUST_BK.value == 'Customer') {
                SYS_InqCUBK_byCondition('APPL_ID_CUST', '1');
            } else {
                alert('Please select Customer or Bank.');
            }
        }
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.APPL_ID_BTN.value = 'BANK';
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('APPL_ID_BK', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL_BANK_ADD() {
    try {
        SYS_InqCUBK_byCondition('APPL_BANK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL_BANK_ADD_LOCAL() {
    try {
        SYS_InqCUBK_byCondition('APPL_ID_CUST_LOCAL', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL_BANK_ORDER_NO() {
    try {
        var APPL_BANK_ORDERNO; // Utility Auto Fix Comments
        var APPL_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //APPL_BANK_ORDERNO = document.MAINFORM.APPL_ADD_ORDERNO.value;
        //APPL_ID = document.MAINFORM.APPL_ID.value;
        //sSQLWhere = "ORDER_NO = " + APPL_BANK_ORDERNO + " AND C_MAIN_REF = '" + APPL_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "APPL_NM;APPL_ADD1;APPL_ADD2;APPL_ADD3";
        SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_APPL_BANK_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL_BANK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('APPL_BANK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL_BANK_POST_ORDERNO() {
    try {
        var APPL_BANK_POST_ORDERNO; // Utility Auto Fix Comments
        var APPL_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //APPL_BANK_POST_ORDERNO = document.MAINFORM.APPL_MAIL_ADD_ORDERNO.value;
        //APPL_ID = document.MAINFORM.APPL_ID.value;
        //sSQLWhere = "ORDER_NO = " + APPL_BANK_POST_ORDERNO + " AND C_MAIN_REF = '" + APPL_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "APPL_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_APPL_BANK_POST_ORDERNO_1', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL_BK_SW_ADD() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.APPL_SW_ADD.value.length == 11 || document.MAINFORM.APPL_SW_ADD.value.length == 8) {
            if (document.MAINFORM.APPL_SW_ADD.value.length == 8) {
                document.MAINFORM.APPL_SW_ADD.value = document.MAINFORM.APPL_SW_ADD.value + 'XXX';
            }

            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.APPL_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "APPL_ID";
            if (document.MAINFORM.APPL_ID.value == '') {
                SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_APPL_BK_SW_ADD_8', '1', true);
            }
            if (document.MAINFORM.APPL_ID.value != '') {
                SYS_GetCUBK('APPL_ID_BK', 'APPL_ID', 'SYM_IWGT_Cal_ADD_BUTTON');
            }

            SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_TLX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
            document.MAINFORM.APPL_CUST_BK.value = "Bank";
        }
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.APPL_ID_BTN.value = 'CUST';
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('APPL_ID_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL_ID_BTN() {
    try {
        if (document.MAINFORM.APPL_CUST_BK.value == 'Customer') {
            SYS_InqCUBK('APPL_ID_CUST');
        } else if (document.MAINFORM.APPL_CUST_BK.value == 'Bank') {
            SYS_InqCUBK('APPL_ID_BK');
        } else {
            alert('Please select Customer or Bank.');
        }

        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL_SW_TAG() {
    try {
        if (document.MAINFORM.APPL_SW_ADD.value != '') {
            document.MAINFORM.APPL_SW_TAG.value = 'A';
        } else {
            if (document.MAINFORM.APPL_NM.value == "") {
                if (document.MAINFORM.APPL_ADD1.value != "" || document.MAINFORM.APPL_ADD2.value != "" || document.MAINFORM.APPL_ADD3.value != "") {
                    document.MAINFORM.APPL_SW_TAG.value = "D";
                } else {
                    document.MAINFORM.APPL_SW_TAG.value = "";
                }
            } else {
                document.MAINFORM.APPL_SW_TAG.value = 'D';
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_APPL_SYD_CallBak() {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED1();
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Appl_All() {
    try {
        if (document.MAINFORM.APPL_ID.value == "") {
            SYM_IWGT_Cal_Clear_Appl();
        } else {
            if (document.MAINFORM.APPL_CUST_BK.value == 'Customer') {
                SYS_GetCUBK('APPL_ID_CUST', 'APPL_ID', 'SYM_IWGT_APPL_NOTES()');
            } else {
                if (document.MAINFORM.APPL_CUST_BK.value == 'Bank') {
                    SYS_GetCUBK('APPL_ID_BK', 'APPL_ID', 'SYM_IWGT_APPL_NOTES()');
                } else {
                    alert('Please select Customer or Bank.');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE() {
    try {
        document.MAINFORM.BENE_SW_ADD.value = "";
        if (document.MAINFORM.BENE_CUST_BK.value == 'Bank') {
            SYS_InqCUBK_byCondition('BENE_ID_BK', '1');
        } else {

            if (document.MAINFORM.BENE_CUST_BK.value == 'Customer') {
                SYS_InqCUBK_byCondition('BENE_ID_CUST', '1');
            } else {
                alert('Please select Customer or Bank.');
            }
        }
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.BENE_ID_BTN.value = 'BANK';
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('BENE_ID_BK', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE_BANK_ADD() {
    try {
        SYS_InqCUBK_byCondition('BENE_BANK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE_BANK_ORDERNO() {
    try {
        var BENE_BANK_ORDERNO; // Utility Auto Fix Comments
        var BENE_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //BENE_BANK_ORDERNO = document.MAINFORM.BENE_ADD_ORDERNO.value;
        //BENE_ID = document.MAINFORM.BENE_ID.value;
        //sSQLWhere = "ORDER_NO = " + BENE_BANK_ORDERNO + " AND C_MAIN_REF = '" + BENE_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "BENE_NM;BENE_ADD1;BENE_ADD2;BENE_ADD3";
        SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_BENE_BANK_ORDERNO_2', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE_BANK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('BENE_BANK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE_BANK_POST_ORDERNO() {
    try {
        var BENE_BANK_POST_ORDERNO; // Utility Auto Fix Comments
        var BENE_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //BENE_BANK_POST_ORDERNO = document.MAINFORM.BENE_MAIL_ADD_ORDERNO.value;
        //BENE_ID = document.MAINFORM.BENE_ID.value;
        //sSQLWhere = "ORDER_NO = " + BENE_BANK_POST_ORDERNO + " AND C_MAIN_REF = '" + BENE_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "BENE_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_BENE_BANK_POST_ORDERNO_3', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE_BK_SW_ADD() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.BENE_SW_ADD.value.length == 11 || document.MAINFORM.BENE_SW_ADD.value.length == 8) {
            if (document.MAINFORM.BENE_SW_ADD.value.length == 8) {
                document.MAINFORM.BENE_SW_ADD.value = document.MAINFORM.BENE_SW_ADD.value + 'XXX';
            }

            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.BENE_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "BENE_ID";
            if (document.MAINFORM.BENE_ID.value == '') {
                SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_BENE_BK_SW_ADD_9', '1', true);
            }
            if (document.MAINFORM.BENE_ID.value != "") {
                SYS_GetCUBK('BENE_ID_BK', 'BENE_ID', 'SYM_IWGT_Cal_ADD_BUTTON');
            }

            SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_TLX, 'O');

            document.MAINFORM.BENE_CUST_BK.value = "Bank";
        }

        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE_CONST_REQ() {
    try {
        var DEC_AMT; // Utility Auto Fix Comments
        var GTEE_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var TEMP_GTEE_AMT; // Utility Auto Fix Comments
        TEMP_GTEE_AMT = SYS_BeFloat(document.MAINFORM.TEMP_GTEE_AMT.value);
        GTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        if (document.MAINFORM.BENE_CONST_REQ.value == 'YES' && DEC_AMT != "") {
            //GTEE_AMT = TEMP_GTEE_AMT - DEC_AMT;
            GTEE_AMT = SYS_FloatSubToString(TEMP_GTEE_AMT, DEC_AMT);
            document.MAINFORM.GTEE_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, GTEE_AMT);
            document.MAINFORM.LIAB_TRXCCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, GTEE_AMT);
        } else if (document.MAINFORM.BENE_CONST_REQ.value == 'YES' && INC_AMT != "") {
            //GTEE_AMT = TEMP_GTEE_AMT + INC_AMT;
            GTEE_AMT = SYS_FloatAddToString(TEMP_GTEE_AMT, INC_AMT);
            document.MAINFORM.GTEE_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, GTEE_AMT);
            document.MAINFORM.LIAB_TRXCCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, GTEE_AMT);
        } else {
            document.MAINFORM.GTEE_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, TEMP_GTEE_AMT);
            document.MAINFORM.LIAB_TRXCCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, TEMP_GTEE_AMT);
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.BENE_ID_BTN.value = 'CUST';
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('BENE_ID_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE_CUST_BK() {
    try {
        if (document.MAINFORM.BENE_CUST_BK.value == "Customer") {
            document.MAINFORM.BENE_CUST_IND.value = 'C';
        } else if (document.MAINFORM.BENE_CUST_BK.value == 'Bank') {
            document.MAINFORM.BENE_CUST_IND.value = 'B';
        } else {
            alert('Please select whether applicant is a customer or a bank.');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE_ID_BTN() {
    try {
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        if (document.MAINFORM.BENE_CUST_BK.value == 'Customer') {
            SYS_InqCUBK('BENE_ID_CUST');
        } else if (document.MAINFORM.BENE_CUST_BK.value == 'Bank') {
            SYS_InqCUBK('BENE_ID_BK');
        } else {
            alert('Please select Customer or Bank.');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_BENE_SW_TAG() {
    try {
        if (document.MAINFORM.BENE_SW_ADD.value != '') {
            document.MAINFORM.BENE_SW_TAG.value = 'A';
        } else {
            if (document.MAINFORM.BENE_NM.value == "") {
                if (document.MAINFORM.BENE_ADD1.value != "" || document.MAINFORM.BENE_ADD2.value != "" || document.MAINFORM.BENE_ADD3.value != "") {
                    document.MAINFORM.BENE_SW_TAG.value = "D";
                } else {
                    document.MAINFORM.BENE_SW_TAG.value = "";
                }
            } else {
                document.MAINFORM.BENE_SW_TAG.value = "D";
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Bene_All() {
    try {
        if (document.MAINFORM.BENE_ID.value == "") {
            SYM_IWGT_Cal_Clear_Bene();
        } else {
            if (document.MAINFORM.BENE_CUST_BK.value == 'Customer') {
                SYS_GetCUBK('BENE_ID_CUST', 'BENE_ID', 'SYM_IWGT_BENE_NOTES()');
            } else {
                if (document.MAINFORM.BENE_CUST_BK.value == 'Bank') {
                    SYS_GetCUBK('BENE_ID_BK', 'BENE_ID', 'SYM_IWGT_BENE_NOTES()');
                } else {
                    alert('Please select Customer or Bank.');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_CLAIM_COUNTER() {
    try {
        var claim_no; // Utility Auto Fix Comments
        claim_no = SYS_BeInt(document.MAINFORM.CLM_CNTR.value);
        claim_no = claim_no + 1;
        if (claim_no < 10) {
            document.MAINFORM.CLM_CNTR.value = '0' + claim_no;
        } else {
            document.MAINFORM.CLM_CNTR.value = claim_no;
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_CLM_BK_CHG() {
    try {
        document.MAINFORM.CLM_BK_CHG.value = document.MAINFORM.CLM_CHG_DR_APPL.value;
        EEHtml.fireEvent(document.MAINFORM.CLM_BK_CHG, 'onchange');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_COMM_DT() {
    try {
        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var _yyy; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var new_dt_month; // Utility Auto Fix Comments
        var new_dt_year; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        var new_dt_day;
        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }
        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');

        _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments

        if (document.MAINFORM.COMM_START_DT.value == '') {
            return;
        }
        year = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));

        month = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_M, Last_M - Fist_M + 1));

        day = document.MAINFORM.COMM_START_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
        new_dt_day = day;
        new_dt_year = year;
        new_dt_month = month;

        if (document.MAINFORM.CHG_POLICY.value == 'Weekly') {
            new_dt_day = day + 7;
        }
        if (document.MAINFORM.CHG_POLICY.value == 'Monthly') {
            new_dt_month = month + 1;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Quarterly') {
            new_dt_month = month + 3;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Half yearly') {
            new_dt_month = month + 6;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Yearly') {
            new_dt_year = year + 1;
        }

        if (new_dt_month < 10) {
            new_dt_month = '0' + new_dt_month.toString();
        }

        if (Fist_Y < Fist_M) {
            if (Fist_M < Fist_D) {
                document.MAINFORM.COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
            }
        } else {
            if (Fist_M < Fist_D) {
                document.MAINFORM.COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            } else {
                document.MAINFORM.COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Clear_Appl() {
    try {
        //document.MAINFORM.APPL_TLX.value = "";
        document.MAINFORM.APPL_REF.value = "";
        document.MAINFORM.APPL_NOTES.value = "";
        document.MAINFORM.APPL_NM.value = "";
        document.MAINFORM.APPL_MAIL_ADD.value = "";
        document.MAINFORM.APPL_ID.value = "";
        document.MAINFORM.APPL_FAX_NO_1.value = "";
        document.MAINFORM.APPL_EMAIL_1.value = "";
        document.MAINFORM.APPL_ADD1.value = "";
        document.MAINFORM.APPL_ADD2.value = "";
        document.MAINFORM.APPL_ADD3.value = "";
        document.MAINFORM.APPL_BR_CD.value = "";
        document.MAINFORM.APPL_CORR_MED1.value = "";
        document.MAINFORM.APPL_SW_TAG.value = "";
        document.MAINFORM.APPL_SW_ADD.value = "";
        SYM_IWGT_MPO_APPL_CORR_MED();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Clear_Appl_ID() {
    try {
        if (document.MAINFORM.APPL_ID.value == "") {
            document.MAINFORM.APPL_ADD1.value = "";
            document.MAINFORM.APPL_ADD2.value = "";
            document.MAINFORM.APPL_ADD3.value = "";
            document.MAINFORM.APPL_EMAIL_1.value = "";
            document.MAINFORM.APPL_FAX_NO_1.value = "";
            document.MAINFORM.APPL_SW_ADD.value = "";
            document.MAINFORM.APPL_SW_TAG.value = "";
            document.MAINFORM.APPL_MAIL_ADD.value = "";
            document.MAINFORM.APPL_NM.value = "";
            document.MAINFORM.APPL_NOTES.value = "";
            document.MAINFORM.APPL_REF.value = "";
            document.MAINFORM.APPL_CORR_MED1.value = "";
            document.MAINFORM.APPL_BR_CD.value = "";
            SYM_IWGT_MPO_APPL_CORR_MED();
            SYM_IWGT_Cal_ADD_BUTTON();
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js*SYM_IWGT_Cal_Clear_Appl_ID", e);
    }
}

function SYM_IWGT_Cal_Clear_Appl_ID_LOCAL() {
    try {
        if (document.MAINFORM.APPL_ID_LOCAL.value == "") {
            document.MAINFORM.APPL_NM_LOCAL.value = "";
            document.MAINFORM.APPL_ADD1_LOCAL.value = "";
            document.MAINFORM.APPL_ADD2_LOCAL.value = "";
            document.MAINFORM.APPL_ADD3_LOCAL.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Clear_Bene() {
    try {
        document.MAINFORM.BENE_ADD1.value = "";
        document.MAINFORM.BENE_ADD2.value = "";
        document.MAINFORM.BENE_ADD3.value = "";
        //document.MAINFORM.BENE_ACNO.value = "";
        //document.MAINFORM.BENE_BR_CD.value = "";
        document.MAINFORM.BENE_CORR_MED.value = "";
        document.MAINFORM.BENE_EMAIL.value = "";
        document.MAINFORM.BENE_ID.value = "";
        document.MAINFORM.BENE_FAX.value = "";
        document.MAINFORM.BENE_NM.value = "";
        document.MAINFORM.BENE_MAIL_ADD.value = "";
        document.MAINFORM.BENE_NOTES.value = "";
        document.MAINFORM.BENE_REF.value = "";
        //document.MAINFORM.BENE_TLX.value = "";
        document.MAINFORM.BENE_SW_TAG.value = "";
        document.MAINFORM.BENE_SW_ADD.value = "";
        //document.MAINFORM.BENE_LANG.value = "";
        SYM_IWGT_MPO_BENE_CORR_MED();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Clear_Bene_ID() {
    try {
        if (document.MAINFORM.BENE_ID.value == "") {
            document.MAINFORM.BENE_ADD1.value = "";
            document.MAINFORM.BENE_ADD2.value = "";
            document.MAINFORM.BENE_ADD3.value = "";
            document.MAINFORM.BENE_EMAIL.value = "";
            document.MAINFORM.BENE_FAX.value = "";
            document.MAINFORM.BENE_SW_ADD.value = "";
            document.MAINFORM.BENE_SW_TAG.value = "";
            document.MAINFORM.BENE_MAIL_ADD.value = "";
            document.MAINFORM.BENE_NM.value = "";
            document.MAINFORM.BENE_NOTES.value = "";
            document.MAINFORM.BENE_REF.value = "";
            document.MAINFORM.BENE_CORR_MED.value = "";
            document.MAINFORM.BENE_CNTY_CD.value = "";
            SYM_IWGT_MPO_BENE_CORR_MED();
            SYM_IWGT_Cal_ADD_BUTTON();
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js*SYM_IWGT_Cal_Clear_Bene_ID", e);
    }
}

function SYM_IWGT_Cal_Clear_Indemn() {
    try {
        if (document.MAINFORM.DOCS_PRESENTED_BY.value == "Customer") {
            document.MAINFORM.INDEMN_ID_BTN.value = "CUST";
            document.MAINFORM.INDEMN_ID.value = "";
            document.MAINFORM.INDEMN_REF.value = "";
            document.MAINFORM.INDEMN_NOTES.value = "";
            document.MAINFORM.INDEMN_NM.value = "";
            document.MAINFORM.INDEMN_MAIL_ADD.value = "";
            document.MAINFORM.INDEMN_SW_ADD.value = "";
            document.MAINFORM.INDEMN_SW_TAG.value = "";
            document.MAINFORM.INDEMN_FAX.value = "";
            document.MAINFORM.INDEMN_EMAIL.value = "";
            document.MAINFORM.INDEMN_ADD1.value = "";
            document.MAINFORM.INDEMN_ADD2.value = "";
            document.MAINFORM.INDEMN_ADD3.value = "";
            document.MAINFORM.INDEMN_CORR_MED.value = "";
        }
        if (document.MAINFORM.DOCS_PRESENTED_BY.value == "") {
            document.MAINFORM.INDEMN_ID.value = "";
            document.MAINFORM.INDEMN_REF.value = "";
            document.MAINFORM.INDEMN_NOTES.value = "";
            document.MAINFORM.INDEMN_NM.value = "";
            document.MAINFORM.INDEMN_MAIL_ADD.value = "";
            document.MAINFORM.INDEMN_SW_ADD.value = "";
            document.MAINFORM.INDEMN_SW_TAG.value = "";
            document.MAINFORM.INDEMN_FAX.value = "";
            document.MAINFORM.INDEMN_EMAIL.value = "";
            document.MAINFORM.INDEMN_ADD1.value = "";
            document.MAINFORM.INDEMN_ADD2.value = "";
            document.MAINFORM.INDEMN_ADD3.value = "";
            document.MAINFORM.INDEMN_CORR_MED.value = "";
        }
        if (document.MAINFORM.DOCS_PRESENTED_BY.value == "Bank") {
            document.MAINFORM.INDEMN_ID_BTN.value = "BANK";
            document.MAINFORM.INDEMN_ID.value = ""; // Utility Auto Fix Comments
            document.MAINFORM.INDEMN_REF.value = "";
            document.MAINFORM.INDEMN_NOTES.value = "";
            document.MAINFORM.INDEMN_NM.value = "";
            document.MAINFORM.INDEMN_MAIL_ADD.value = "";
            document.MAINFORM.INDEMN_SW_TAG.value = "";
            document.MAINFORM.INDEMN_SW_ADD.value = "";
            document.MAINFORM.INDEMN_FAX.value = "";
            document.MAINFORM.INDEMN_EMAIL.value = "";
            document.MAINFORM.INDEMN_ADD1.value = "";
            document.MAINFORM.INDEMN_ADD2.value = "";
            document.MAINFORM.INDEMN_ADD3.value = "";
            document.MAINFORM.INDEMN_CORR_MED.value = "";
        }
        SYM_IWGT_MPO_INDEMN_CORR_MED();
        SYM_IWGT_Cal_ADD_BTN();
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Clear_Indemn_ID() {
    try {
        if (document.MAINFORM.INDEMN_ID.value == "") {
            document.MAINFORM.INDEMN_ADD1.value = "";
            document.MAINFORM.INDEMN_ADD2.value = "";
            document.MAINFORM.INDEMN_ADD3.value = "";
            document.MAINFORM.INDEMN_CORR_MED.value = "";
            document.MAINFORM.INDEMN_EMAIL.value = "";
            document.MAINFORM.INDEMN_FAX.value = "";
            document.MAINFORM.INDEMN_SW_ADD.value = "";
            document.MAINFORM.SEND_TO_SW_TAG.value = "";
            document.MAINFORM.INDEMN_MAIL_ADD.value = "";
            document.MAINFORM.INDEMN_NM.value = "";
            document.MAINFORM.INDEMN_NOTES.value = "";
            document.MAINFORM.INDEMN_REF.value = "";
            SYM_IWGT_MPO_INDEMN_CORR_MED();
            SYM_IWGT_Cal_ADD_BTN();
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Clear_Instructing() {
    try {
        document.MAINFORM.RCV_FM_BK_ADD1.value = "";
        document.MAINFORM.RCV_FM_BK_ADD2.value = "";
        document.MAINFORM.RCV_FM_BK_ADD3.value = "";
        document.MAINFORM.RCV_FM_BK_EMAIL.value = "";
        document.MAINFORM.RCV_FM_BK_CORR_MED.value = "";
        document.MAINFORM.RCV_FM_BK_ID.value = "";
        document.MAINFORM.RCV_FM_BK_NM.value = "";
        document.MAINFORM.RCV_FM_BK_NOTES.value = "";
        document.MAINFORM.RCV_FM_BK_SW_TAG.value = "";
        document.MAINFORM.RCV_FM_BK_TLX.value = "";
        document.MAINFORM.RCV_FM_BK_TO_FAX.value = "";
        document.MAINFORM.RCV_FM_BK_MAIL1.value = "";
        document.MAINFORM.RCV_FM_BK_SW_ADD.value = "";
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Clear_IssuBk() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value == "") {
            document.MAINFORM.ISSUE_BK_NM.value = "";
            document.MAINFORM.ISSUE_BK_ADD1.value = "";
            document.MAINFORM.ISSUE_BK_ADD2.value = "";
            document.MAINFORM.ISSUE_BK_ADD3.value = "";
            document.MAINFORM.ISSUE_BK_CORR_MED.value = "";
            document.MAINFORM.ISSUE_BK_SW_ADD.value = "";
            document.MAINFORM.ISSUE_BK_SW_TAG.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Clear_Send() {
    try {
        document.MAINFORM.SEND_TO_ADD1.value = "";
        document.MAINFORM.SEND_TO_ADD2.value = "";
        document.MAINFORM.SEND_TO_ADD3.value = "";
        document.MAINFORM.SEND_TO_EMAIL.value = "";
        document.MAINFORM.SEND_TO_FAX.value = "";
        document.MAINFORM.SEND_TO_ID.value = "";
        document.MAINFORM.SEND_TO_NM.value = "";
        document.MAINFORM.SEND_TO_MAIL_ADD.value = "";
        document.MAINFORM.SEND_TO_NOTES.value = "";
        document.MAINFORM.SEND_TO_SW_TAG.value = "";
        //document.MAINFORM.SEND_TO_TLX.value = "";
        document.MAINFORM.SEND_TO_REF.value = "";
        document.MAINFORM.SEND_TO_SW_ADD.value = "";
        document.MAINFORM.SEND_TO_CORR_MED.value = "";
        SYM_IWGT_MPO_SEND_TO_CORR_MED();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Clear_Send_ID() {
    try {
        if (document.MAINFORM.SEND_TO_ID.value == "") {
            document.MAINFORM.SEND_TO_ADD1.value = "";
            document.MAINFORM.SEND_TO_ADD2.value = "";
            document.MAINFORM.SEND_TO_ADD3.value = "";
            document.MAINFORM.SEND_TO_EMAIL.value = "";
            document.MAINFORM.SEND_TO_FAX.value = "";
            document.MAINFORM.SEND_TO_SW_ADD.value = "";
            document.MAINFORM.SEND_TO_SW_TAG.value = "";
            document.MAINFORM.SEND_TO_MAIL_ADD.value = "";
            document.MAINFORM.SEND_TO_NM.value = "";
            document.MAINFORM.SEND_TO_NOTES.value = "";
            document.MAINFORM.SEND_TO_REF.value = "";
            document.MAINFORM.SEND_TO_CORR_MED.value = "";
            document.MAINFORM.SEND_TO_CNTY_CD.value = "";
            SYM_IWGT_MPO_SEND_TO_CORR_MED();
            SYM_IWGT_Cal_ADD_BUTTON();
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Counter_Guarantee_Information() {
    try {
        if (document.MAINFORM.COUNTR_GTEE.value == "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_REF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_EXP, 'M');
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_REQ, 'M');
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_HELD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_REQ, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_EXP, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_REF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_HELD, 'P');
            //document.MAINFORM.CONTR_GTEE_EXP.value = "";
            //document.MAINFORM.CONTR_GTEE_REF.value = "";
            //document.MAINFORM.COUNTR_INDMNTY_REQ.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_DEC_AMT() {
    try {
        var DEC_AMT; // Utility Auto Fix Comments
        var IWGT_AMT; // Utility Auto Fix Comments
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        IWGT_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        if (DEC_AMT - IWGT_AMT > 0) {
            SYS_CheckError(document.MAINFORM.DEC_AMT, 'Decrease Amount cannot be greater than the available balance.');
            document.MAINFORM.DEC_AMT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_FURTHER_IDENTITY_OnChange() {
    try {
        if (document.MAINFORM.FURTHER_IDENTITY.value == 'ISSUE') {
            document.MAINFORM.MTHD_OF_ISS.value = 'Advise';
            SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
        } else {
            document.MAINFORM.MTHD_OF_ISS.value = 'Issue';
            SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'M');
            document.MAINFORM.COUNTR_GTEE.value = 'No';
            EEHtml.fireEvent(document.MAINFORM.COUNTR_GTEE, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_GTEE_LCY_AMT() {
    try {} catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INC_AMT_DEC_AMT_LOCAL() {
    try {
        var DEC_AMT_LOCAL;
        var IWGT_AMT_LOCAL;
        var INC_AMT_LOCAL;
        var NEW_IWGT_AMT_LOCAL;
        IWGT_AMT_LOCAL = SYS_BeFloat(document.MAINFORM.GTEE_AMT_LOCAL.value);
        NEW_IWGT_AMT_LOCAL = SYS_BeFloat(document.MAINFORM.NEW_GTEE_AMT_LOCAL.value);
        DEC_AMT_LOCAL = 0;
        INC_AMT_LOCAL = 0;
        if (NEW_IWGT_AMT_LOCAL != 0) {
            if (IWGT_AMT_LOCAL >= NEW_IWGT_AMT_LOCAL) {
                // DEC_AMT_LOCAL = IWGT_AMT_LOCAL - NEW_IWGT_AMT_LOCAL;
                DEC_AMT_LOCAL = SYS_FloatSubToString(IWGT_AMT_LOCAL, NEW_IWGT_AMT_LOCAL);
                INC_AMT_LOCAL = 0;
            } else {
                //INC_AMT_LOCAL = NEW_IWGT_AMT_LOCAL - IWGT_AMT_LOCAL;
                INC_AMT_LOCAL = SYS_FloatSubToString(NEW_IWGT_AMT_LOCAL, IWGT_AMT_LOCAL);
                DEC_AMT_LOCAL = 0;
            }
        }
        document.MAINFORM.DEC_AMT_LOCAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY_LOCAL.value, DEC_AMT_LOCAL);
        document.MAINFORM.INC_AMT_LOCAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY_LOCAL.value, INC_AMT_LOCAL);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INDEMN_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.INDEMN_ID_BTN.value = "BANK";
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('INDEMN_ID_BK', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INDEMN_BANK_ADD() {
    try {
        SYS_InqCUBK_byCondition('INDEMN_BANK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INDEMN_BANK_ORDERNO() {
    try {
        var INDEMN_BANK_ORDERNO; // Utility Auto Fix Comments
        var INDEMN_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //INDEMN_BANK_ORDERNO = document.MAINFORM.INDEMN_BANK_ADD_ORDERNO.value;
        //INDEMN_ID = document.MAINFORM.INDEMN_ID.value;
        //sSQLWhere = "ORDER_NO = " + INDEMN_BANK_ORDERNO + " AND C_MAIN_REF = '" + INDEMN_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "INDEMN_NM;INDEMN_ADD1;INDEMN_ADD2;INDEMN_ADD3";
        SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_INDEMN_BANK_ORDERNO_4', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INDEMN_BANK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('INDEMN_BANK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INDEMN_BANK_POST_ORDERNO() {
    try {
        var INDEMN_BANK_POST_ORDERNO; // Utility Auto Fix Comments
        var INDEMN_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //INDEMN_BANK_POST_ORDERNO = document.MAINFORM.INDEMN_BANK_MAIL_ADD_ORDERNO.value;
        //INDEMN_ID = document.MAINFORM.INDEMN_ID.value;
        //sSQLWhere = "ORDER_NO = " + INDEMN_BANK_POST_ORDERNO + " AND C_MAIN_REF = '" + INDEMN_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "INDEMN_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_INDEMN_BANK_POST_ORDERNO_5', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INDEMN_BK_SW_ADD() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.INDEMN_SW_ADD.value.length == 11 || document.MAINFORM.INDEMN_SW_ADD.value.length == 8) {
            if (document.MAINFORM.INDEMN_SW_ADD.value.length == 8) {
                document.MAINFORM.INDEMN_SW_ADD.value = document.MAINFORM.INDEMN_SW_ADD.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.INDEMN_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "INDEMN_ID";
            if (document.MAINFORM.INDEMN_ID.value == '') {
                SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_INDEMN_BK_SW_ADD_10', '1', true);
            }
            if (document.MAINFORM.INDEMN_ID.value != '') {
                SYS_GetCUBK('INDEMN_ID_BANK', 'INDEMN_ID', 'SYM_IWGT_Cal_ADD_BTN()');
            }
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'O');
            document.MAINFORM.DOCS_PRESENTED_BY.value = "Bank";
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INDEMN_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.INDEMN_ID_BTN.value = "CUST";
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('INDEMN_ID_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INDEMN_SW_TAG() {
    try {
        if (document.MAINFORM.INDEMN_SW_ADD.value != "") {
            document.MAINFORM.INDEMN_SW_TAG.value = "A";
        } else {
            if (document.MAINFORM.INDEMN_NM.value == "" && document.MAINFORM.INDEMN_ADD1.value == "" && document.MAINFORM.INDEMN_ADD2.value == "" && document.MAINFORM.INDEMN_ADD3.value == "") {
                document.MAINFORM.INDEMN_SW_TAG.value = "";
            } else {
                document.MAINFORM.INDEMN_SW_TAG.value = "D";
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INSTRCTING() {
    try {
        SYS_InqCUBK_byCondition('RCV_FM_BK_ID', '1');
        SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INSTRCTING_BK_SW_ADD() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.RCV_FM_BK_SW_ADD.value.length == 11 || document.MAINFORM.RCV_FM_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.RCV_FM_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.RCV_FM_BK_SW_ADD.value = document.MAINFORM.RCV_FM_BK_SW_ADD.value + 'XXX';
            }

            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.RCV_FM_BK_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "RCV_FM_BK_ID";
            if (document.MAINFORM.RCV_FM_BK_ID.value == '') {
                SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_INSTRCTING_BK_SW_ADD_10', '1', true);
            }
            if (document.MAINFORM.RCV_FM_BK_ID.value != "") {
                SYS_GetCUBK('RCV_FM_BK_ID', 'RCV_FM_BK_ID', 'SYM_IWGT_Cal_ADD_BUTTON');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG() {
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
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_IWGT_LCY() {
    try {
        var Rt; // Utility Auto Fix Comments
        var amtTrxccy; // Utility Auto Fix Comments
        amtTrxccy = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        Rt = SYS_BeFloat(document.MAINFORM.RT_TRXCCY_LCY.value);
        // document.MAINFORM.IWGT_LCY_AMT.value = amtTrxccy * Rt;
        document.MAINFORM.IWGT_LCY_AMT.value = SYS_FloatMulToString(amtTrxccy, Rt);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_IWGT_LCY_AMT() {
    try {
        //alert(SYS_LOCAL_CCY);

        SYS_GetExchangeRate(document.MAINFORM.GTEE_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.RT_TRXCCY_LCY.name, SYM_IWGT_Cal_IWGT_LCY);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_IndemBk_Btn() {
    try {
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);

        if (document.MAINFORM.DOCS_PRESENTED_BY.value == 'Customer') {
            SYS_InqCUBK('INDEMN_ID_CUST');
        } else if (document.MAINFORM.DOCS_PRESENTED_BY.value == 'Bank') {
            SYS_InqCUBK('INDEMN_ID_BK');
        } else {
            alert('Please select Customer or Bank.');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Instructing_All() {
    try {
        if (document.MAINFORM.RCV_FM_BK_ID.value != "") {
            SYS_GetCUBK('RCV_FM_BK_ID', 'RCV_FM_BK_ID', 'SYM_IWGT_RCV_FM_BK_NOTES()');
        } else {
            SYM_IWGT_Cal_Clear_Instructing();
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_NEW_BENE() {
    try {
        if (document.MAINFORM.BENE_CUST_BK.value == 'Bank') {
            SYS_InqCUBK_byCondition('NEW_BENE_ID_BK', '1');
        } else {

            if (document.MAINFORM.BENE_CUST_BK.value == 'Customer') {
                SYS_InqCUBK_byCondition('NEW_BENE_ID_CUST', '1');
            } else {
                alert('Please select Customer or Bank.');
            }
        }
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_NEW_BENE_BK_SW_ADD() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.NEW_BENE_SW_ADD.value.length == 11 || document.MAINFORM.NEW_BENE_SW_ADD.value.length == 8) {
            if (document.MAINFORM.NEW_BENE_SW_ADD.value.length == 8) {
                document.MAINFORM.NEW_BENE_SW_ADD.value = document.MAINFORM.NEW_BENE_SW_ADD.value + 'XXX';
            }

            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.NEW_BENE_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "NEW_BENE_ID";
            if (document.MAINFORM.NEW_BENE_ID.value == '') {
                SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_BENE_BK_SW_ADD_9', '1', true);
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_NEW_BENE_SW_TAG() {
    try {
        if (document.MAINFORM.NEW_BENE_SW_ADD.value != '') {
            document.MAINFORM.NEW_BENE_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.NEW_BENE_NM.value != '' || document.MAINFORM.NEW_BENE_ADD1.value != '' || document.MAINFORM.NEW_BENE_ADD2.value != '' || document.MAINFORM.NEW_BENE_ADD3.value != '') && document.MAINFORM.NEW_BENE_SW_ADD.value == '') {
            document.MAINFORM.NEW_BENE_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.NEW_BENE_NM.value == '' && document.MAINFORM.NEW_BENE_ADD1.value == '' && document.MAINFORM.NEW_BENE_ADD2.value == '' && document.MAINFORM.NEW_BENE_ADD3.value == '' && document.MAINFORM.NEW_BENE_SW_ADD.value == '') {
            document.MAINFORM.NEW_BENE_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_NEW_Bene_All() {
    try {
        if (document.MAINFORM.NEW_BENE_ID.value == "") {
            document.MAINFORM.NEW_BENE_ADD1.value = "";
            document.MAINFORM.NEW_BENE_ADD2.value = "";
            document.MAINFORM.NEW_BENE_ADD3.value = "";
            document.MAINFORM.NEW_BENE_NM.value = "";
            document.MAINFORM.NEW_BENE_SW_TAG.value = "";
            document.MAINFORM.NEW_BENE_SW_ADD.value = "";
        } else {
            if (document.MAINFORM.BENE_CUST_BK.value == 'Customer') {
                SYS_GetCUBK('NEW_BENE_ID_CUST', 'NEW_BENE_ID');
            } else {
                if (document.MAINFORM.BENE_CUST_BK.value == 'Bank') {
                    SYS_GetCUBK('NEW_BENE_ID_BK', 'NEW_BENE_ID');
                } else {
                    alert('Please select Customer or Bank.');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_NO_OF_AMD() {
    try {
        var no; // Utility Auto Fix Comments
        no = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        document.MAINFORM.NO_OF_AMD.value = no + 1;
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_NXT_COMM_DT() {
    try {
        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var _yyy; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var new_dt_month; // Utility Auto Fix Comments
        var new_dt_year; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        //var new_dt_day;
        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }
        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');

        _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments

        if (document.MAINFORM.COMM_DT.value == '') {
            return;
        }
        year = parseFloat(document.MAINFORM.COMM_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));

        month = parseFloat(document.MAINFORM.COMM_DT.value.substr(Fist_M, Last_M - Fist_M + 1));

        day = document.MAINFORM.COMM_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
        //new_dt_day = day;
        new_dt_year = year;
        new_dt_month = month;

        //if(document.MAINFORM.CHG_POLICY.value == 'Weekly'){
        //	new_dt_day = day + 7;
        //}
        /* if (document.MAINFORM.CHG_POLICY.value == 'Monthly') {
            new_dt_month = month + 1;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Quarterly') {
            new_dt_month = month + 3;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Half yearly') {
            new_dt_month = month + 6;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Yearly') {
            new_dt_year = year + 1;
        } */

        if (new_dt_month < 10) {
            new_dt_month = '0' + new_dt_month.toString();
        }

        if (Fist_Y < Fist_M) {
            if (Fist_M < Fist_D) {
                document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
            }
        } else {
            if (Fist_M < Fist_D) {
                document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            } else {
                document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_RCV_BANK_ADD() {
    try {
        SYS_InqCUBK_byCondition('RCV_BANK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_RCV_BANK_ORDER_NO() {
    try {
        var RCV_FM_BK_ADD_ORDERNO; // Utility Auto Fix Comments
        var RCV_FM_BK_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //RCV_FM_BK_ADD_ORDERNO = document.MAINFORM.RCV_FM_BK_ADD_ORDERNO.value;
        //RCV_FM_BK_ID = document.MAINFORM.RCV_FM_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + RCV_FM_BK_ADD_ORDERNO + " AND C_MAIN_REF = '" + RCV_FM_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "RCV_FM_BK_NM;RCV_FM_BK_ADD1;RCV_FM_BK_ADD2;RCV_FM_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_RCV_BANK_ORDER_NO_6', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_RCV_BANK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('RCV_BANK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_RCV_BANK_POST_ORDERNO() {
    try {
        var RCV_FM_BK_ID; // Utility Auto Fix Comments
        var RCV_FM_BK_MAIL_ADD_ORDERNO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //RCV_FM_BK_MAIL_ADD_ORDERNO = document.MAINFORM.RCV_FM_BK_MAIL_ADD_ORDERNO.value;
        //RCV_FM_BK_ID = document.MAINFORM.RCV_FM_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + RCV_FM_BK_MAIL_ADD_ORDERNO + " AND C_MAIN_REF = '" + RCV_FM_BK_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "RCV_FM_BK_MAIL1";
        SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_RCV_BANK_POST_ORDERNO_7', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_RCV_FM_BK_CORR_MED() {
    try {
        if (document.MAINFORM.SEND_MT768_FLG.value == "Y") {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_CORR_MED, 'M');
            if (document.MAINFORM.RCV_FM_BK_CORR_MED.value != "SWIFT") {
                SYS_CheckError(document.MAINFORM.RCV_FM_BK_CORR_MED, "You have selected to send an MT768 message, please ensure the Instructing Bank Correspondence medium is SWIFT.");
                document.MAINFORM.RCV_FM_BK_CORR_MED.value = "SWIFT";
            }
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_ID, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_CORR_MED, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_ID, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_RCV_FM_BK_SW_TAG() {
    try {
        if (document.MAINFORM.RCV_FM_BK_SW_ADD.value != '') {
            document.MAINFORM.RCV_FM_BK_SW_TAG.value = 'A';
        } else {
            if (document.MAINFORM.RCV_FM_BK_NM.value == "") {
                document.MAINFORM.RCV_FM_BK_SW_TAG.value = "";
            } else {
                document.MAINFORM.RCV_FM_BK_SW_TAG.value = 'D';
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_SEND_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.SEND_TO_ID_BTN.value = "BANK";
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('SEND_TO_ID_BK', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_SEND_BK_SW_ADD() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.SEND_TO_SW_ADD.value.length == 11 || document.MAINFORM.SEND_TO_SW_ADD.value.length == 8) {

            if (document.MAINFORM.SEND_TO_SW_ADD.value.length == 8) {
                document.MAINFORM.SEND_TO_SW_ADD.value = document.MAINFORM.SEND_TO_SW_ADD.value + "XXX";
            }

            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.SEND_TO_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "SEND_TO_ID";
            if (document.MAINFORM.SEND_TO_ID.value == '') {
                SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_SEND_BK_SW_ADD_11', '1', true);
            }
            if (document.MAINFORM.SEND_TO_ID.value != "") {
                SYS_GetCUBK('SEND_TO_ID_BK', 'SEND_TO_ID', 'SYM_IWGT_Cal_ADD_BUTTON');
            }
            document.MAINFORM.SEND_TO.value = "Bank";
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_SEND_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.SEND_TO_ID_BTN.value = "CUST";
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('SEND_TO_ID_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_SEND_TO() {
    try {
        if (document.MAINFORM.SEND_TO.value == 'Customer') {
            SYS_InqCUBK('SEND_TO_ID_CUST');
        } else if (document.MAINFORM.SEND_TO.value == 'Bank') {
            SYS_InqCUBK('SEND_TO_ID_BK');
        } else {
            alert('Please select Customer or Bank.');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_SEND_TO_BANK_ADD() {
    try {
        SYS_InqCUBK_Sql('SEND_TO_BANK_ADD', 'C_MAIN_REF = \'<--SEND_TO_ID-->\'');
        //SYS_InqCUBK_byCondition('SEND_TO_BANK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_SEND_TO_BANK_ORDERNO() {
    try {
        var SEND_TO_BANK_ORDERNO; // Utility Auto Fix Comments
        var SEND_TO_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SEND_TO_BANK_ORDERNO = document.MAINFORM.SEND_TO_ADD_ORDERNO.value;
        //SEND_TO_ID = document.MAINFORM.SEND_TO_ID.value;
        //sSQLWhere = "ORDER_NO = " + SEND_TO_BANK_ORDERNO + " AND C_MAIN_REF = '" + SEND_TO_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "SEND_TO_NM;SEND_TO_ADD1;SEND_TO_ADD2;SEND_TO_ADD3";
        SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_SEND_TO_BANK_ORDERNO_4', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_SEND_TO_BANK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('SEND_TO_BANK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_SEND_TO_BANK_POST_ORDERNO() {
    try {
        var SEND_TO_BANK_POST_ORDERNO; // Utility Auto Fix Comments
        var SEND_TO_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SEND_TO_BANK_POST_ORDERNO = document.MAINFORM.SEND_TO_MAIL_ADD_ORDERNO.value;
        //SEND_TO_ID = document.MAINFORM.SEND_TO_ID.value;
        //sSQLWhere = "ORDER_NO = " + SEND_TO_BANK_POST_ORDERNO + " AND C_MAIN_REF = '" + SEND_TO_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "SEND_TO_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IWGT_SYM_IWGT_Cal_SEND_TO_BANK_POST_ORDERNO_5', '1');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_SEND_TO_SW_TAG() {
    try {
        if (document.MAINFORM.SEND_TO_SW_ADD.value != "") {
            document.MAINFORM.SEND_TO_SW_TAG.value = 'A';
        } else {
            if (document.MAINFORM.SEND_TO_NM.value == "") {

                if (document.MAINFORM.SEND_TO_ADD1.value != "" || document.MAINFORM.SEND_TO_ADD2.value != "" || document.MAINFORM.SEND_TO_ADD3.value != "") {
                    document.MAINFORM.SEND_TO_SW_TAG.value = "D";
                } else {
                    document.MAINFORM.SEND_TO_SW_TAG.value = "";
                }
            } else {
                document.MAINFORM.SEND_TO_SW_TAG.value = 'D';
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_SEND_TO_onclick() {
    try {
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);

        if (document.MAINFORM.SEND_TO.value == 'Customer') {
            SYS_InqCUBK('SEND_TO_ID_CUST');
        } else if (document.MAINFORM.SEND_TO.value == 'Bank') {
            SYS_InqCUBK('SEND_TO_ID_BK');
        } else {
            alert('Please select customer or bank.');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Send() {
    try {
        if (document.MAINFORM.SEND_TO.value == 'Bank') {
            SYS_InqCUBK_byCondition('SEND_TO_ID_BK', '1');
        } else {
            if (document.MAINFORM.SEND_TO.value == 'Customer') {
                SYS_InqCUBK_byCondition('SEND_TO_ID_CUST', '1');
            } else {
                alert('Please select Customer or Bank.');
            }
        }
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_Send_All() {
    try {
        if (document.MAINFORM.SEND_TO_ID.value == "") {
            SYM_IWGT_Cal_Clear_Send();
        } else {
            if (document.MAINFORM.SEND_TO.value == 'Customer') {
                SYS_GetCUBK('SEND_TO_ID_CUST', 'SEND_TO_ID', 'SYM_IWGT_SEND_TO_NOTES()');
            } else {
                if (document.MAINFORM.SEND_TO.value == 'Bank') {
                    SYS_GetCUBK('SEND_TO_ID_BK', 'SEND_TO_ID', 'SYM_IWGT_SEND_TO_NOTES()');
                } else {
                    alert('Please select Customer or Bank.');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_TTL_CR_AMT() {
    try {
        var CLM_BK_CHG; // Utility Auto Fix Comments
        var OUR_CHG_BENE; // Utility Auto Fix Comments
        var TEMP_TAG34_AMT; // Utility Auto Fix Comments
        var TEMP_N90_CHG_32; // Utility Auto Fix Comments
        TEMP_N90_CHG_32 = SYS_BeFloat(document.MAINFORM.TEMP_N90_CHG_32.value);
        document.MAINFORM.TEMP_TAG34_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.TEMP_N90_CHG_32.value);
        TEMP_TAG34_AMT = SYS_BeFloat(document.MAINFORM.TEMP_TAG34_AMT.value);
        CLM_BK_CHG = SYS_BeFloat(document.MAINFORM.CLM_BK_CHG.value);
        OUR_CHG_BENE = SYS_BeFloat(document.MAINFORM.OUR_CHG_BENE.value);

        //document.MAINFORM.TTL_CR_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, TEMP_TAG34_AMT + CLM_BK_CHG - OUR_CHG_BENE);
        document.MAINFORM.TTL_CR_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, SYS_FloatSubToString(SYS_FloatAddToString(TEMP_TAG34_AMT, CLM_BK_CHG), OUR_CHG_BENE));
        EEHtml.fireEvent(document.MAINFORM.TTL_CR_AMT, "onchange");
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_TTL_DR_AMT() {
    try {
        var CLM_CHG_DR_APPL; // Utility Auto Fix Comments
        var TEMP_COLL_AMT_COLL_CCY; // Utility Auto Fix Comments
        var TEMP_N90_CHG_32; // Utility Auto Fix Comments
        TEMP_N90_CHG_32 = SYS_BeFloat(document.MAINFORM.TEMP_N90_CHG_32.value);
        CLM_CHG_DR_APPL = SYS_BeFloat(document.MAINFORM.CLM_CHG_DR_APPL.value);
        TEMP_COLL_AMT_COLL_CCY = SYS_BeFloat(document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.value);

        //document.MAINFORM.TTL_DR_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, TEMP_COLL_AMT_COLL_CCY + CLM_CHG_DR_APPL + TEMP_N90_CHG_32);
        document.MAINFORM.TTL_DR_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, SYS_FloatAddToString(SYS_FloatAddToString(TEMP_COLL_AMT_COLL_CCY, CLM_CHG_DR_APPL), TEMP_N90_CHG_32));

        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, "onchange");
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_X760_DETL_77C_TEMP_DOC_REQ() {
    try {
        if (document.MAINFORM.ISSUE_BY.value == "SWIFT") {
            if (SYS_ORG_FUNCTION_SHORT_NAME == 'AdviseInAmend') {
                SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'P');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'M');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'P');
                SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'P');
            }
        } else {
            if (document.MAINFORM.ISSUE_BY.value == "None") {
                if (SYS_ORG_FUNCTION_SHORT_NAME == 'AdviseInAmend') {
                    SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'P');
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'P');
                }
            } else {
                if (SYS_ORG_FUNCTION_SHORT_NAME == 'AdviseInAmend') {
                    SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'M');
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'M');
                    SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'M');
                }
            }
        }
        //document.MAINFORM.FURTHER_IDENTITY.value == "REQUEST"
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_appl_notes_charge() {
    try {} catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Cal_change_tab() {
    try {
        if (document.MAINFORM.SEPARATE_CHG_FLG.value == 'No') {
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'P');
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, 'P');
        } else {
            if (document.MAINFORM.SEPARATE_CHG_FLG.value == 'Yes') {
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'M');
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW() {
    try {
        var DAY; // Utility Auto Fix Comments
        var Days; // Utility Auto Fix Comments
        var HALF_YEAR; // Utility Auto Fix Comments
        var HALF_YEAR_1; // Utility Auto Fix Comments
        var MONTH; // Utility Auto Fix Comments
        var QUARTER; // Utility Auto Fix Comments
        var QUARTER_1; // Utility Auto Fix Comments
        var TTLAMT; // Utility Auto Fix Comments
        var WEEK; // Utility Auto Fix Comments
        var WEEK_1; // Utility Auto Fix Comments
        var YEAR; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chgObj; // Utility Auto Fix Comments
        var chgamt; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var pertermamt; // Utility Auto Fix Comments 
        var sDate; // Utility Auto Fix Comments
        var terms; // Utility Auto Fix Comments
        arr = ['IWGT_ISS_COMM'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'ReviewLCFromCE_NEW' || SYS_ORG_FUNCTION_NAME == 'AdviseGuarantee') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_IWGT_AMT.value;
        }
        amt = document.MAINFORM.GTEE_AMT.value;
        ccy = document.MAINFORM.GTEE_CCY.value;
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;

        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, sDate, eDate, '', '', '');

        Days = SYS_GetSubDays(document.MAINFORM.COMM_START_DT.name, document.MAINFORM.COMM_END_DT.name);
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');
        chgObj = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM');
        if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
            chgamt = chgObj.getActiveAmt();
        }
        TTLAMT = chgamt;

        document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, TTLAMT);
        terms = document.MAINFORM.CHG_POLICY.value;
        pertermamt = 0;
        if (terms == 'Weekly') {
            DAY = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'D');
            WEEK = Math.round(DAY / 7);
            WEEK_1 = DAY % 3;

            if (WEEK_1 > 0) {
                WEEK += 1;
            }
            document.MAINFORM.PERIOD.value = WEEK;
            pertermamt = chgamt / WEEK;
        }
        if (terms == 'Monthly') {
            document.MAINFORM.PERIOD.value = MONTH;
            pertermamt = chgamt / MONTH;
        }
        if (terms == 'Quarterly') {
            QUARTER = Math.round(MONTH / 3);
            QUARTER_1 = MONTH % 3;

            if (QUARTER_1 > 0) {
                QUARTER += 1;
            }
            document.MAINFORM.PERIOD.value = QUARTER;
            pertermamt = chgamt / QUARTER;
        }
        if (terms == 'Half yearly') {
            HALF_YEAR = Math.round(MONTH / 6);
            HALF_YEAR_1 = MONTH % 6;

            if (HALF_YEAR_1 > 0) {
                HALF_YEAR += 1;
            }

            document.MAINFORM.PERIOD.value = HALF_YEAR;
            pertermamt = chgamt / HALF_YEAR;
        }
        if (terms == 'Yearly') {
            YEAR = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'Y');
            document.MAINFORM.PERIOD.value = YEAR;
            pertermamt = chgamt / YEAR;
        }
        pertermamt = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, pertermamt);
        document.MAINFORM.CURRENT_COMM_TEMP.value = pertermamt;

        if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
            chgObj.setActiveAmt(pertermamt);
            if (chgObj.getChargeAt() == '1') {
                chgObj.setBalAmt(pertermamt);
                chgObj.setPayAmt(0.00);
            } else if (chgObj.getChargeAt() == '0') {
                chgObj.setPayAmt(pertermamt);
                chgObj.setBalAmt(0.00);
            } else {
                chgObj.setPayAmt(0.00);
                chgObj.setBalAmt(0.00);
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_CheckAcno() {
    try {
        //add for #69699 Jax
        var asset_acno = document.MAINFORM.ASSET_ACNO.value;
        var liab_acno = document.MAINFORM.LIAB_ACNO.value;
        if (asset_acno != "" && liab_acno != "" && asset_acno == liab_acno) {
            alert("Bank account and customer account cannot be the same!");
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Check_APPL_BENE() {
    try {
        if (document.MAINFORM.APPL_NM.value == document.MAINFORM.BENE_NM.value) {
            alert('Applicant name must be different from beneficiary.');
            return false;
        } else

        {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Check_EXPIRY_DT() {
    try {
        if (document.MAINFORM.AUTO_RENEW.value == 'Fixed expiry' && SYS_GetSubDays(document.MAINFORM.VALID_FM_DT.name, document.MAINFORM.EXPIRY_DT.name) < 0) {
            alert("Expiry date must be later than Valid From date in guarantees with fixed expiry.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Check_INWARD_RCV_DT() {
    try {
        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.EXPIRY_DT.name) < 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, "Expiry/Review Date must be later than Transaction Date!");
            document.MAINFORM.EXPIRY_DT.value = '';
        } else if ((document.MAINFORM.EXPIRY_DT.value != '') && (SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.INWARD_RCV_DT.name) >= 0)) {
            SYS_CheckError(document.MAINFORM.INWARD_RCV_DT, "expiry date is not allowed later than issue/Request Date");
            document.MAINFORM.EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Check_NEW_EXPIRY_RVW_DT_AMD_DT() {
    try {
        if (SYS_GetSubDays(document.MAINFORM.AMD_DT.name, document.MAINFORM.NEW_EXPIRY_RVW_DT.name) < 0) {
            SYS_CheckError(document.MAINFORM.NEW_EXPIRY_RVW_DT, "New Expiry Review Date should be later than Amendment Date!");
            document.MAINFORM.NEW_EXPIRY_RVW_DT.value = '';
            return false;
        } else if (SYS_GetSubDays(document.MAINFORM.INWARD_RCV_DT.name, document.MAINFORM.AMD_DT.name) < 0)

        {
            SYS_CheckError(document.MAINFORM.AMD_DT, "Amendment Date should be later than Issue/Request Date!");
            document.MAINFORM.AMD_DT.value = '';
            return false;
        } else if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.NEW_EXPIRY_RVW_DT.name) < 0) {
            SYS_CheckError(document.MAINFORM.NEW_EXPIRY_RVW_DT, "New Expiry Review Date should be later than Transaction Date");
            document.MAINFORM.NEW_EXPIRY_RVW_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate() {
    try {
        var obj; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "EC") {
            obj = EEHtml.getElementById('CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT');
            if (obj) {
                if (SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend" || SYS_ORG_FUNCTION_SHORT_NAME == "RegisterInward") {
                    SYM_IWGT_Chg_Calculate_AmendComm();
                    SYM_IWGT_Chg_Calculate_POST();
                    SYM_IWGT_Chg_Calculate_courier();
                    SYM_IWGT_Chg_Calculate_SWIFT();
                    SYM_IWGT_Chg_Calculate_Other();
                } else {
                    SYM_IWGT_Chg_Calculate_AdviceComm();
                    SYM_IWGT_Chg_Calculate_IssComm();
                    SYM_IWGT_Chg_Calculate_Other();
                    SYM_IWGT_Chg_Calculate_POST();
                    SYM_IWGT_Chg_Calculate_SWIFT();
                    SYM_IWGT_Chg_Calculate_courier();
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_AdviceComm() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IWGT_ADV_COMM'];
        amt = EEHtml.getElementById("GTEE_AMT").value;
        ccy = EEHtml.getElementById("GTEE_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_AmendComm() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IWGT_AMEND_COMM'];
        amt = EEHtml.getElementById("GTEE_AMT").value;
        ccy = EEHtml.getElementById("GTEE_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['IWGT_ISS_COMM'];
        amt = document.MAINFORM.GTEE_AMT.value;
        ccy = document.MAINFORM.GTEE_CCY.value;
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;

        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, sDate, eDate, '', '', '');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM_HALF_YEAR() {
    try {
        var HALF_YEAR; // Utility Auto Fix Comments
        var HALF_YEAR_1; // Utility Auto Fix Comments
        var MONTH; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['IWGT_ISS_COMM_HALF_YEAR'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'AdviseGuarantee' || SYS_ORG_FUNCTION_NAME == 'IWGT_IssueGTEE_CE') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_IWGT_AMT.value;
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');

        HALF_YEAR = Math.round(MONTH / 6);
        HALF_YEAR_1 = MONTH % 6;

        if (HALF_YEAR_1 > 0) {
            HALF_YEAR += 1;
        }

        document.MAINFORM.PERIOD.value = HALF_YEAR;
        if (sDate == '' || eDate == '') {
            return;
        }

        Chg.calculate(arr, ccy, amt, '', '', '');

        aResult = Chg.callCalcService(ccy, amt, 'IWGT_ISS_COMM_HALF_YEAR', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', HALF_YEAR, '');

        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM_MONTH() {
    try {
        var MONTH; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['IWGT_ISS_COMM_MONTH'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'AdviseGuarantee' || SYS_ORG_FUNCTION_NAME == 'IWGT_IssueGTEE_CE') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_IWGT_AMT.value;
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');
        document.MAINFORM.PERIOD.value = MONTH;
        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, '', '', '', '', '');
        aResult = Chg.callCalcService(ccy, amt, 'IWGT_ISS_COMM_MONTH', chargeFor, custID, 'USD', 'Booking Rate', sDate, eDate, '', '', '', MONTH, '');
        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM_QUARTER() {
    try {
        var MONTH; // Utility Auto Fix Comments
        var QUARTER; // Utility Auto Fix Comments
        var QUARTER_1; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['IWGT_ISS_COMM_QUARTER'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'AdviseGuarantee' || SYS_ORG_FUNCTION_NAME == 'IWGT_IssueGTEE_CE') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_IWGT_AMT.value;
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');

        QUARTER = Math.round(MONTH / 3);
        QUARTER_1 = MONTH % 3;

        if (QUARTER_1 > 0) {
            QUARTER += 1;
        }

        document.MAINFORM.PERIOD.value = QUARTER;
        if (sDate == '' || eDate == '') {
            return;
        }

        Chg.calculate(arr, ccy, amt, '', '', '');

        aResult = Chg.callCalcService(ccy, amt, 'IWGT_ISS_COMM_QUARTER', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', QUARTER, '');

        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM_WEEK() {
    try {
        var DAY; // Utility Auto Fix Comments
        var WEEK; // Utility Auto Fix Comments
        var WEEK_1; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['IWGT_ISS_COMM_WEEK'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'AdviseGuarantee' || SYS_ORG_FUNCTION_NAME == 'IWGT_IssueGTEE_CE') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_IWGT_AMT.value;
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        DAY = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'D');
        WEEK = Math.round(DAY / 7);
        WEEK_1 = DAY % 3;

        if (WEEK_1 > 0) {
            WEEK += 1;
        }
        document.MAINFORM.PERIOD.value = WEEK;

        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, '', '', '', '', '');
        aResult = Chg.callCalcService(ccy, amt, 'IWGT_ISS_COMM_WEEK', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', WEEK, '');
        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM_YEAR() {
    try {
        var YEAR; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['IWGT_ISS_COMM_YEAR'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'AdviseGuarantee' || SYS_ORG_FUNCTION_NAME == 'IWGT_IssueGTEE_CE') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_IWGT_AMT.value;
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        YEAR = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'Y');
        document.MAINFORM.PERIOD.value = YEAR;
        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, '', '', '', '', '');
        aResult = Chg.callCalcService(ccy, amt, 'IWGT_ISS_COMM_YEAR', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', YEAR, '');
        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_IssComm() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IWGT_ISS_COMM'];
        amt = EEHtml.getElementById("GTEE_AMT").value;
        ccy = EEHtml.getElementById("GTEE_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_Other() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IWGT_OTHER_CHG'];
        amt = EEHtml.getElementById("GTEE_AMT").value;
        ccy = EEHtml.getElementById("GTEE_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_POST() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IWGT_POST_CHG'];
        amt = EEHtml.getElementById("GTEE_AMT").value;
        ccy = EEHtml.getElementById("GTEE_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_SWIFT() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IWGT_SWIFT_CHG'];
        amt = EEHtml.getElementById("GTEE_AMT").value;
        ccy = EEHtml.getElementById("GTEE_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Calculate_courier() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IWGT_COURIER_CHG'];
        amt = EEHtml.getElementById("GTEE_AMT").value;
        ccy = EEHtml.getElementById("GTEE_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_Screen_local() {
    try {
        var obj; // Utility Auto Fix Comments
        obj = EEHtml.getElementById('CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT');

        if (obj) {

            Chg.Screen.mapLocalCust("BENE_ID", "BENE_NM");
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Chg_screen_foreign() {
    try {
        var obj; // Utility Auto Fix Comments
        obj = EEHtml.getElementById('CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT');
        if (obj) {

            Chg.Screen.mapForeignCust("APPL_ID", "APPL_NM", "GTEE_CCY", "C_MAIN_REF");
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Clear_AC_WT_BK_ID() {
    try {
        if (document.MAINFORM.AC_WT_BK_ID.value == "") {
            document.MAINFORM.AC_WT_BK_SW_ADD.value = "";
            document.MAINFORM.AC_WT_BK_SW_TAG.value = "";
            document.MAINFORM.AC_WT_BK_NM.value = "";
            document.MAINFORM.AC_WT_BK_ADD1.value = "";
            document.MAINFORM.AC_WT_BK_ADD2.value = "";
            document.MAINFORM.AC_WT_BK_ADD3.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_FURTHER_IDENTITY() {
    try {
        if (document.MAINFORM.FURTHER_IDENTITY.value == 'REQUEST') {
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_IWGT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_HELD, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_IWGT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_HELD, 'O');
        }
        SYM_IWGT_Cal_Counter_Guarantee_Information();
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_Get_RCV_FM_BK_ID() {
    try {
        SYS_GetCUBK('RCV_FM_BK_ID', 'RCV_FM_BK_ID');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_HIDE_COMM_BY_CHG_POLICY() {
    try {
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var IWGT_ADV_COMM; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_YEAR');
        IWGT_ADV_COMM = Chg.Screen.getTrxChargeByCommCode('IWGT_ADV_COMM');
        unit_code = SYS_ORI_UNIT_CODE;
        if (document.MAINFORM.MTHD_OF_ISS.value == 'Advise') {
            IWGT_ADV_COMM.display();
        } else {
            IWGT_ADV_COMM.hide();
        }
        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                break;
            case 'All in Advance':
                ISS_COMM.setChargeAt(0);
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                break;
            case 'Part in Advance':
                ISS_COMM.setChargeAt(0);
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                break;
            case 'Weekly':
                //ISS_COMM_WEEK.setChargeAt(0);
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                //ISS_COMM.hide();
                ISS_COMM.display();
                break;
            case 'Monthly':
                //ISS_COMM_MONTH.setChargeAt(0);
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                //ISS_COMM.hide();
                ISS_COMM.display();
                break;
            case 'Quarterly':
                //ISS_COMM_QUARTER.setChargeAt(0);
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                //ISS_COMM.hide();
                ISS_COMM.display();
                break;
            case 'Half yearly':
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                //ISS_COMM.hide();
                ISS_COMM.display();
                break;
            case 'Yearly':
                //ISS_COMM_YEAR.setChargeAt(0);
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                //ISS_COMM.hide();
                ISS_COMM.display();
                break;
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_INDEMNIFY_BUTTON() {
    try {
        if (document.MAINFORM.DOCS_PRESENTED_BY.value == "Customer") {
            SYM_IWGT_Cal_INDEMN_CUST();
        } else if (document.MAINFORM.DOCS_PRESENTED_BY.value == "Bank") {
            SYM_IWGT_Cal_INDEMN_BANK();
        } else {
            SYS_CheckError(document.MAINFORM.DOCS_PRESENTED_BY, "Please select Customer or Bank first");
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_INDEMN_ID_BTN() {
    try {
        if (document.MAINFORM.INDEMN_ID.value == "") {
            SYM_IWGT_Cal_Clear_Indemn_ID();
        } else {
            if (document.MAINFORM.DOCS_PRESENTED_BY.value == 'Bank') {
                SYS_GetCUBK('INDEMN_ID_BK', document.MAINFORM.INDEMN_ID.name, 'SYM_IWGT_MPO_INDEMN_CORR_MED()');
            } else if (document.MAINFORM.DOCS_PRESENTED_BY.value == 'Customer') {
                SYS_GetCUBK('INDEMN_ID_CUST', document.MAINFORM.INDEMN_ID.name, 'SYM_IWGT_MPO_INDEMN_CORR_MED()');
                document.MAINFORM.INDEMN_SW_ADD.value = "";
                document.MAINFORM.INDEMN_SW_TAG.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_ISSUE_BK() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value == "") {
            document.MAINFORM.ISSUE_BK_NM.value = '';
            document.MAINFORM.ISSUE_BK_ADD1.value = '';
            document.MAINFORM.ISSUE_BK_ADD2.value = '';
            document.MAINFORM.ISSUE_BK_ADD3.value = '';
            document.MAINFORM.ISSUE_BK_SW_ADD.value = '';
            document.MAINFORM.ISSUE_BK_CORR_MED.value = ''; //added for 70211 Jax
            SYM_IWGT_CHK_ISSUE_BK_SW_TAG(); //added
            SYM_IWGT_CAL_ISSUE_BK_ID_back();
        } else {
            SYS_GetCUBK('ISS_BK_ID', 'ISSUE_BK_ID', 'SYM_IWGT_CHK_ISSUE_BK_SW_TAG', 'SYM_IWGT_CAL_ISSUE_BK_ID_back');
            SYM_IWGT_MPO_SEND_BANK_TO_CORR_MED();
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_AMD_DTL_OUT767() {
    try {
        if (document.MAINFORM.SEND_TO_CORR_MED.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUT767, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'P');
            document.MAINFORM.AMD_DTL_OUTTLX.value = "";
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUT767, 'P');
            document.MAINFORM.AMD_DTL_OUT767.value.value = "";
            SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'M');
            if (document.MAINFORM.SEND_TO_CORR_MED.value == "None") {
                SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUT767, 'P');
                document.MAINFORM.AMD_DTL_OUT767.value = "";
                document.MAINFORM.AMD_DTL_OUT767.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_APLB_RULE_NARR() {
    try {
        if (document.MAINFORM.APLB_RULE.value == "OTHR") {
            document.all.Applicable.style.visibility = 'visible';
            document.all.APLB_RULE_NARR.style.display = 'block';
        } else {
            document.all.Applicable.style.visibility = 'hidden';
            document.all.APLB_RULE_NARR.style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_APPL_CORR_MED() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APPL_TLX, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');

        if (document.MAINFORM.APPL_CORR_MED1.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'M');
        } else if (document.MAINFORM.APPL_CORR_MED1.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_TLX, 'M');
        } else if (document.MAINFORM.APPL_CORR_MED1.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'M');
        } else if (document.MAINFORM.APPL_CORR_MED1.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'M');
        } else if (document.MAINFORM.APPL_CORR_MED1.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_TLX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_APPL_CORR_MED1() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');

        SYM_IWGT_Cal_APPL_SW_TAG();



        if (document.MAINFORM.APPL_CORR_MED1.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'M');
        } else if (document.MAINFORM.APPL_CORR_MED1.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'M');
        } else if (document.MAINFORM.APPL_CORR_MED1.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'M');
        } else if (document.MAINFORM.APPL_CORR_MED1.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_BENE_CORR_MED() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'O');
        SYM_IWGT_Cal_BENE_SW_TAG();
        if (document.MAINFORM.BENE_CORR_MED.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'M');
        } else if (document.MAINFORM.BENE_CORR_MED.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'M');
        } else if (document.MAINFORM.BENE_CORR_MED.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'M');
        } else if (document.MAINFORM.BENE_CORR_MED.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_DEC_AMT_onblur() {
    try {
        var amt; // Utility Auto Fix Comments
        //3. OnBlur, if the field is blank, change field class of the other to 'O'.

        amt = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);

        if (amt == 0) {
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_DEC_AMT_onclick() {
    try {
        var DEC_AMT; // Utility Auto Fix Comments
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        if (DEC_AMT != "" || DEC_AMT != 0) {
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_DIARY_DT() {
    try {
        //If the Narrative field is not empty this field is mandatory otherwise this field is optional and empty

        if (document.MAINFORM.DIARY_NARRATIVE.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.DIARY_DT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DIARY_DT, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_DIARY_RELATED_REF() {
    try {
        //If the Narrative field is not empty this field is mandatory otherwise this field is optional and empty

        if (document.MAINFORM.DIARY_NARRATIVE.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.DIARY_RELATED_REF, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DIARY_RELATED_REF, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_INC_AMT_onblur() {
    try {
        var amt; // Utility Auto Fix Comments
        //onBlur, if this field is blank, change the other field to 'O'

        amt = SYS_BeFloat(document.MAINFORM.INC_AMT.value);

        if (amt == 0) {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_INC_AMT_onclick() {
    try {
        var INC_AMT; // Utility Auto Fix Comments
        /*MPO for INC_AMT and DEC_AMT fields.
        Both start out as blank. Clicking on one of the fields, if the field has no value, changes field class of the other to 'P'. OnBlur, if the clicked field is not blank, the other field stays 'P' else it changes field class back to 'O'.
        1. Onclick, check if the clicked field is 'O' and has value.
        2. If Yes, if the other field is 'O', change the other field class to 'P'.
        3. OnBlur, if the field is blank, change field class of the other to 'O'.

         */

        //onclick INC_AMT, change DEC_AMT to P.
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        if (INC_AMT != "" || INC_AMT != 0) {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_INDEMN_CORR_MED() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'O');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'O');

        SYM_IWGT_Cal_INDEMN_SW_TAG();

        /*SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        if (document.MAINFORM.INDEMN_NM.value == "") {
            document.MAINFORM.INDEMN_CORR_MED.value = 'None';
            return;
        }*/
        if (document.MAINFORM.INDEMN_CORR_MED.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'M');
        } else if (document.MAINFORM.INDEMN_CORR_MED.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'M');
        } else if (document.MAINFORM.INDEMN_CORR_MED.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'M');
        } else if (document.MAINFORM.INDEMN_CORR_MED.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_ISSUE_AMD_BY() {
    try {
        if (document.MAINFORM.ISSUE_BY.value == 'SWIFT') {
            if (SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {
                SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUT767, 'M');
                SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'P');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.NON_STD_WORDNG, 'M');
                SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'M'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.IWGT_DETAILS_79, 'P');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'P');
                document.MAINFORM.IWGT_DETAILS_79.value = '';
            }
        } else {
            if (SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {
                SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUT767, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.NON_STD_WORDNG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'P');
                document.MAINFORM.NON_STD_WORDNG.value = '';
                SYT_ChangeFldClass(document.MAINFORM.IWGT_DETAILS_79, 'M');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'M');
            }
            if (document.MAINFORM.ISSUE_BY.value == 'None') {
                if (SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {
                    SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUT767, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'P');
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.NON_STD_WORDNG, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'P');
                    document.MAINFORM.NON_STD_WORDNG.value = '';
                    SYT_ChangeFldClass(document.MAINFORM.IWGT_DETAILS_79, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'P');
                    document.MAINFORM.IWGT_DETAILS_79.value = '';
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_NON_STD_WORDNG() {
    try {
        if (document.MAINFORM.SEND_TO_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'P');
            document.MAINFORM.TEMP_DOC_REQ.value = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'P');
            document.MAINFORM.X760_DETL_77C.value = '';
            if (document.MAINFORM.SEND_TO_CORR_MED.value == 'None') {
                SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'P');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'P');
                document.MAINFORM.TEMP_DOC_REQ.value = '';
                SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'P');
                SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'P');
                document.MAINFORM.X760_DETL_77C.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_RCV_FM_BK_CORR_MED() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_TLX, 'O');

        if (document.MAINFORM.RCV_FM_BK_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_TLX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_TLX, 'O');
        }
        if (document.MAINFORM.RCV_FM_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_SW_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_SW_ADD, 'O');
        }
        if (document.MAINFORM.RCV_FM_BK_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_TO_FAX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_TO_FAX, 'O');
        }
        if (document.MAINFORM.RCV_FM_BK_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_EMAIL, 'O');
        }
        if (document.MAINFORM.RCV_FM_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_MAIL1, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_MAIL1, 'O');
        }
        if (document.MAINFORM.RCV_FM_BK_CORR_MED.value == 'None') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_MAIL1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_TLX, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_RCV_FM_BK_NM() {
    try {
        /*if (document.MAINFORM.FURTHER_IDENTITY.value == "REQUEST") {  2020 no futher identify
                                                                                                                                                                                    SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_NM, 'M');
                                                                                                                                                                                } else {
                                                                                                                                                                                    SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_NM, 'O');
                                                                                                                                                                                }
                                                                                                                                                                        */
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_SEND_BANK_TO_CORR_MED() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'O'); // Utility Auto Fix Comments
        SYT_ChangeFldClass(document.MAINFORM.SEND_BK_TO_Telex, 'O');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'O');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'O');


        if (document.MAINFORM.ISSUE_BK_CORR_MED.value == 'SWIFT') {

            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'M');

        } else if (document.MAINFORM.ISSUE_BK_CORR_MED.value == 'Telex') {

            SYT_ChangeFldClass(document.MAINFORM.SEND_BK_TO_Telex, 'M');

        } else if (document.MAINFORM.ISSUE_BK_CORR_MED.value == 'SWIFT non-auth') {

            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'O');

        } else if (document.MAINFORM.ISSUE_BK_CORR_MED.value == 'Mail') {

            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'M');


        } else {

            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'O'); // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.SEND_BK_TO_Telex, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_SEND_TO_CORR_MED() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'O'); // Utility Auto Fix Comments
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_TLX, 'O');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'O');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'O');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'O');

        if (document.MAINFORM.SEND_TO_CORR_MED.value == 'SWIFT') {

            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'M');

        } else if (document.MAINFORM.SEND_TO_CORR_MED.value == 'Telex') {

            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_TLX, 'M');

        } else if (document.MAINFORM.SEND_TO_CORR_MED.value == 'Email') {

            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'M');

        } else if (document.MAINFORM.SEND_TO_CORR_MED.value == 'Fax') {

            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'M');

        } else if (document.MAINFORM.SEND_TO_CORR_MED.value == 'Mail') {

            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'M');

        } else {

            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_TLX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'O');

        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_SEND_TO_SW_TAG() {
    try {
        if (document.MAINFORM.SEND_TO_SW_ADD.value != "") {
            document.MAINFORM.SEND_TO_SW_TAG.value = "A";
        } else {
            document.MAINFORM.SEND_TO_SW_TAG.value = "D";
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_X760_DETL_77C() {
    try {
        if (document.MAINFORM.SEND_TO_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'M');
            if (document.MAINFORM.SEND_TO_CORR_MED.value == "None") {
                SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'P');
                SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'P');
                SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'P');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_MPO_X768_DATE_30() {
    try {
        if (document.MAINFORM.SEND_MT768_FLG.value == 'Y') {
            SYT_ChangeFldClass(document.MAINFORM.X768_DATE_30, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X768_DATE_30, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_RCV_FM_BK_CORR_MED() {
    try {
        if (document.MAINFORM.RCV_FM_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_MAIL_BTN, 'O');

        } else {

            SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_MAIL_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_RCV_FM_BK_NOTES() {
    try {
        SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_RefGroupChange() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("AdviceForBankCust");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'BANK_N90_REF_20', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SEND_BUTTON() {
    try {
        if (document.MAINFORM.SEND_TO.value == "Bank") {
            SYM_IWGT_Cal_SEND_BANK();
        } else if (document.MAINFORM.SEND_TO.value == "Customer") {
            SYM_IWGT_Cal_SEND_CUST();
        } else {
            SYS_CheckError(document.MAINFORM.SEND_TO, "Please select Customer or Bank first");
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SEND_TO_NOTES() {
    try {
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYM_IWGT_MPO_SEND_TO_CORR_MED();
        if (document.MAINFORM.SEND_TO.value == "Bank") {
            SYM_IWGT_Cal_SEND_TO_SW_TAG();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'InwardAdviseIWGT') {
            SYM_IWGT_MPO_X760_DETL_77C();
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SND_TO_ID_BTN() {
    try {
        if (document.MAINFORM.SEND_TO_ID.value == "") {
            SYM_IWGT_Cal_Clear_Send_ID();
            SYM_IWGT_MPO_SEND_TO_SW_TAG();
        } else {
            if (document.MAINFORM.SEND_TO.value == 'Bank') {
                SYS_GetCUBK('SEND_TO_ID_BK', document.MAINFORM.SEND_TO_ID.name, 'SYM_IWGT_MPO_SEND_TO_CORR_MED');

            } else if (document.MAINFORM.SEND_TO.value == 'Customer') {
                SYS_GetCUBK('SEND_TO_ID_CUST', document.MAINFORM.SEND_TO_ID.name, 'SYM_IWGT_MPO_SEND_TO_CORR_MED');

            }
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SQL_ADV_BK() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SQL_ADV_THU_BK() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ADV_THU_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SQL_BENE_ID_LOCAL() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('BENE_ID_LOCAL', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SQL_CONF_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('CONF_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SQL_INDEMN_ID_LOCAL() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('INDEMN_ID_LOCAL', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SQL_ISSUE_BK() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ISS_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SQL_ISSUE_BK_LOCAL() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ISSUE_BK_ID_LOCAL', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SQL_NEW_BENE_ID_LOCAL() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_BENE_ID_LOCAL', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_SpecialCharacters_onchange_1(FieldValue) {
    try {
        var regex = /^[0-9a-zA-Z]+$/;
        var isValid = regex.test(FieldValue);
        if (!isValid) {
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_TEST2() {
    try {
        var funcshrtnm; // Utility Auto Fix Comments
        funcshrtnm = SYT_FUNC_SHORT_NAME();

        if (funcshrtnm == 'RegisterInward') {
            SYT_ChangeFldClass(document.MAINFORM.IWGT_REF_NUM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.IWGT_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.IWGT_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'M');
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_TEST_MPO() {
    try {
        var funcshrtnm; // Utility Auto Fix Comments
        funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {
            case 'RegisterInward':
                SYT_ChangeFldClass(document.MAINFORM.IWGT_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.IWGT_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.IWGT_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;
            default:
                return;
        }
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_getDOdata_AdviceForBankCust() {
    try {
        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}

function SYM_IWGT_setref(ref) {
    try {
        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYM_IWGT.js", e);
    }
}