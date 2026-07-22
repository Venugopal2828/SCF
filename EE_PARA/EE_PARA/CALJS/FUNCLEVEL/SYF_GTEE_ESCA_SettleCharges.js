var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_GTEE_Cal_APPL_CORR_MED = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_APPL_EMAIL = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local' && document.MAINFORM.APPL_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_APPL_FAX = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local' && document.MAINFORM.APPL_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_APPL_LANG = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_LANG, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_LANG, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_APPL_MAIL_ADD = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local' && document.MAINFORM.APPL_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_APPL_MAIL_ADD_Inq = function() {
    try {

        SYS_InqCUBK('APPL_BANK_POST_ADD', document.MAINFORM.APPL_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Get_APPL_MAIL_ADD = function() {
    try {

        //var APPL_BANK_ADD_ORDERNO = document.MAINFORM.APPL_BANK_MAIL_ADD_ORDERNO.value;
        //var APPL_ID = document.MAINFORM.APPL_ID.value;
        //var sSQLWhere = "ORDER_NO = " + APPL_BANK_ADD_ORDERNO + " AND C_MAIN_REF = '" + APPL_ID + "'";
        //var sTableName = "POST_ADD_DO";
        //var sFieldList = "POSTAL_FMT_ADD";
        //var sMappingList = "APPL_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYF_GTEE_ESCA_SettleCharges_SYF_GTEE_Get_APPL_MAIL_ADD_0', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_GTEE_Cal_APPL_CORR_MED();
        SYF_GTEE_Cal_APPL_EMAIL();
        SYF_GTEE_Cal_APPL_FAX();
        SYF_GTEE_Cal_APPL_LANG();
        SYF_GTEE_Cal_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        if (document.MAINFORM.BENE_ID.value != "" && document.MAINFORM.BENE_NM.value != "") {
            Chg.Screen.mapForeignCust(document.MAINFORM.BENE_ID.name, document.MAINFORM.BENE_NM.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_BENE_ID.name, document.MAINFORM.TEMP_BENE_NM.name);
        }
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.unprotectAllBalAmt();
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Cal_C_TRANS_CODE();
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYF_GTEE_Get_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CORR_MED_onchange = function(event) {
    try {
        SYF_GTEE_Cal_APPL_FAX();
        SYF_GTEE_Cal_APPL_EMAIL();
        SYF_GTEE_Cal_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_MAIL_BTN_onclick = function(event) {
    try {
        SYF_GTEE_Cal_APPL_MAIL_ADD_Inq();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_BANK_FLG_onchange = function(event) {
    try {
        SYF_GTEE_Cal_APPL_FAX();
        SYF_GTEE_Cal_APPL_EMAIL();
        SYF_GTEE_Cal_APPL_MAIL_ADD();
        SYF_GTEE_Cal_APPL_LANG();
        SYF_GTEE_Cal_APPL_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_SettleCharges.js", e);
    }
}