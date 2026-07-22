var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Chg.Screen.mapLocalCust(document.MAINFORM.ISSUE_BK_ID.name, document.MAINFORM.ISSUE_BK_NM.name);
        if (document.MAINFORM.CLM_BK_ID.value != '' && document.MAINFORM.CLM_BK_NM.value != '') {
            Chg.Screen.mapForeignCust(document.MAINFORM.CLM_BK_ID.name, document.MAINFORM.CLM_BK_NM.name, document.MAINFORM.LC_CCY.name, document.MAINFORM.STL_CHG_ACNO.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_CLM_BK_ID.name, document.MAINFORM.TEMP_CLM_BK_NM.name, document.MAINFORM.LC_CCY.name, document.MAINFORM.STL_CHG_ACNO.name);
        }
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.unprotectAllBalAmt();
        
        Chg.Screen.protectAllChargeFor();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CHG_LOCAL_CUST_PAY_RATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FOREIGN_CUST_PAY_RATE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_BAL_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_TRX_DATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'P');

        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        if(SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC'){
          SYT_ContralDefChgAt();
        }
        CHG_DefCharge_chargeAtOnchange();
        SYF_REIM_Cal_ISSUE_BK_CORR_MED();
        SYF_REIM_Cal_ISSUE_BK_EMAIL();
        SYF_REIM_Cal_ISSUE_BK_FAX();
        SYF_REIM_Cal_ISSUE_BK_LANG();
        SYF_REIM_Cal_ISSUE_BK_MAIL_ADD();
        SYF_REIM_Cal_ISSUE_BK_TLX();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_ISSUE_BK_CORR_MED = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'OUR') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_CORR_MED, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_CORR_MED, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_ISSUE_BK_LANG = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'OUR') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_LANG, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_LANG, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_ISSUE_BK_MAIL_ADD = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'OUR' && document.MAINFORM.ISSUE_BK_CORR_MED.value == 'Mail') {
            document.MAINFORM.ISSUE_BK_POST_ADD_BTN.value = '...';
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_MAIL_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_POST_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_ISSUE_BK_EMAIL = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'OUR' && document.MAINFORM.ISSUE_BK_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_EMAIL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_ISSUE_BK_FAX = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'OUR' && document.MAINFORM.ISSUE_BK_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_FAX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_FAX, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_ISSUE_BK_TLX = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'OUR' && document.MAINFORM.ISSUE_BK_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_TLX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_TLX, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_REIM_Cal_ISSUE_BK_CORR_MED();
        SYF_REIM_Cal_ISSUE_BK_MAIL_ADD();
        SYF_REIM_Cal_ISSUE_BK_LANG();
        SYF_REIM_Cal_ISSUE_BK_EMAIL();
        SYF_REIM_Cal_ISSUE_BK_FAX();
        SYF_REIM_Cal_ISSUE_BK_TLX();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_ISSUE_BK_MAIL_ADD_Inq = function() {
    try {

        SYS_InqCUBK('ISSUE_BK_MAIL_ADD', document.MAINFORM.ISSUE_BK_ID.name);
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Get_ISSUE_BK_MAIL_ADD = function() {
    try {

        //var ISSUE_BK_OPDER_POST = document.MAINFORM.ISSUE_BK_ORDER_POST.value;
        //var ISSUE_BK_ID = document.MAINFORM.ISSUE_BK_ID.value;
        //var sSQLWhere = "ORDER_NO = " + ISSUE_BK_OPDER_POST + " AND C_MAIN_REF = '" + ISSUE_BK_ID + "'";
        //var sTableName = "POST_ADD_DO";
        //var sFieldList = "POSTAL_FMT_ADD";
        //var sMappingList = "ISSUE_BK_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYF_REIM_REIM_SettleCharges_SYF_REIM_Get_ISSUE_BK_MAIL_ADD_0', '1');
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_REIM_ContralChgAt = function() {
    try {

        var charge; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var strChgFor; // Utility Auto Fix Comments
        strChgFor = document.MAINFORM.CHG_BANK_FLG.value;
        if (strChgFor == "OUR") {
            strChgFor = "L";
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'L';
        }
        if (strChgFor == "CLM") {
            strChgFor = "F";
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'F';
        }

        defChgArr = Chg.Screen.getAllDefCharge();
        for (i = 0; i < defChgArr.length; i++) { // Utility Auto Fix Comments
            charge = defChgArr[i];
            if (strChgFor == 'L') {
                charge.setChargeAt("0");
                charge.setChargeFor('L');
                charge.chargeAtOnchange();
            } else {
                charge.setChargeAt("0");
                charge.setChargeFor('F');
                charge.chargeAtOnchange();
            }
        }
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_BANK_FLG_onchange = function(event) {
    try {
        SYT_ContralDefChgAt();
        SYF_REIM_Cal_ISSUE_BK_CORR_MED();
        SYF_REIM_Cal_ISSUE_BK_LANG();
        SYF_REIM_Cal_ISSUE_BK_MAIL_ADD();
        SYF_REIM_Cal_ISSUE_BK_EMAIL();
        SYF_REIM_Cal_ISSUE_BK_FAX();
        SYF_REIM_Cal_ISSUE_BK_TLX();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_CORR_MED_onchange = function(event) {
    try {
        SYF_REIM_Cal_ISSUE_BK_EMAIL();
        SYF_REIM_Cal_ISSUE_BK_FAX();
        SYF_REIM_Cal_ISSUE_BK_MAIL_ADD();
        SYF_REIM_Cal_ISSUE_BK_TLX();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYF_REIM_Get_ISSUE_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYF_REIM_Cal_ISSUE_BK_MAIL_ADD_Inq();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_SettleCharges.js", e);
    }
}