var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Chg.Screen.mapLocalCust('LEAD_BK_ID', 'LEAD_BK_NM');
        Chg.Screen.mapForeignCust('CHG_FOREIGN_ID', 'CHG_FOREIGN_ID', 'CHG_FOREIGN_CCY', 'CHG_FOREIGN_ACCOUNT');

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        SYT_Init_Notes(document.MAINFORM.LEAD_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.LEAD_BK_NOTES.name);
        SYT_ContralDefChgAt();
        Chg.Screen.unprotectAllBalAmt();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_LEAD_CORR_MED = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local') {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_CORR_MED, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_CORR_MED, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_LEAD_LANG = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local') {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_LANG, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_LANG, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_LEAD_MAIL_ADD = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local' && document.MAINFORM.LEAD_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.LEAD_MAIL_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_MAIL_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.LEAD_MAIL_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_LEAD_EML_ADD = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local' && document.MAINFORM.LEAD_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_EML_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_EML_ADD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_LEAD_FAX_NO = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local' && document.MAINFORM.LEAD_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_FAX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_FAX_NO, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_LEAD_TLX_NO = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local' && document.MAINFORM.LEAD_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_TLX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LEAD_TLX_NO, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_SYND_Cal_LEAD_CORR_MED();
        SYF_SYND_Cal_LEAD_EML_ADD();
        SYF_SYND_Cal_LEAD_FAX_NO();
        SYF_SYND_Cal_LEAD_LANG();
        SYF_SYND_Cal_LEAD_MAIL_ADD();
        SYF_SYND_Cal_LEAD_TLX_NO();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_LEAD_MAIL_ADD_Inq = function() {
    try {

        SYS_InqCUBK('LEAD_MAIL_ADD', document.MAINFORM.LEAD_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Get_LEAD_MAIL_ADD = function() {
    try {

        //var LEAD_MAIL_ADD_ORDER_NO = document.MAINFORM.LEAD_MAIL_ADD_ORDER_NO.value;
        //var LEAD_BK_ID = document.MAINFORM.LEAD_BK_ID.value;
        //var sSQLWhere = "ORDER_NO = " + LEAD_MAIL_ADD_ORDER_NO + " AND C_MAIN_REF = '" + LEAD_BK_ID + "'";
        //var sTableName = "POST_ADD_DO";
        //var sFieldList = "POSTAL_FMT_ADD";
        //var sMappingList = "LEAD_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYF_SYND_SYND_SettleCharges_SYF_SYND_Get_LEAD_MAIL_ADD_0', '1');
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (SYT_CHK_FOREIGN_CHG_ACNO()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        SYT_Cal_C_TRANS_CODE();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_BANK_FLG_onchange = function(event) {
    try {
        SYT_ContralDefChgAt();
        SYF_SYND_Cal_LEAD_TLX_NO();
        SYF_SYND_Cal_LEAD_FAX_NO();
        SYF_SYND_Cal_LEAD_EML_ADD();
        SYF_SYND_Cal_LEAD_MAIL_ADD();
        SYF_SYND_Cal_LEAD_LANG();
        SYF_SYND_Cal_LEAD_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_CORR_MED_onchange = function(event) {
    try {
        SYF_SYND_Cal_LEAD_TLX_NO();
        SYF_SYND_Cal_LEAD_FAX_NO();
        SYF_SYND_Cal_LEAD_EML_ADD();
        SYF_SYND_Cal_LEAD_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_MAIL_ADD_ORDER_NO_onchange = function(event) {
    try {
        SYF_SYND_Get_LEAD_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_SettleCharges.js", e);
    }
}