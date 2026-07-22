var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_GTEE_Cal_APPL_CORR_MED = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
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
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
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
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
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
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
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
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_APPL_MAIL_ADD_Inq = function() {
    try {

        SYS_InqCUBK('APPL_BANK_POST_ADD', document.MAINFORM.APPL_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Get_APPL_MAIL_ADD = function() {
    try {

        var APPL_BANK_ADD_ORDERNO; // Utility Auto Fix Comments
        var APPL_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //APPL_BANK_ADD_ORDERNO = document.MAINFORM.APPL_BANK_MAIL_ADD_ORDERNO.value;
        //APPL_ID = document.MAINFORM.APPL_ID.value;
        //sSQLWhere = "ORDER_NO = " + APPL_BANK_ADD_ORDERNO + " AND C_MAIN_REF = '" + APPL_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "APPL_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYF_GTEE_PLF_SettleCharges_SYF_GTEE_Get_APPL_MAIL_ADD_0', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_GTEE_Cal_APPL_CORR_MED();
        SYF_GTEE_Cal_APPL_EMAIL();
        SYF_GTEE_Cal_APPL_FAX();
        SYF_GTEE_Cal_APPL_LANG();
        SYF_GTEE_Cal_APPL_MAIL_ADD();
        SYM_GTEE_Cal_ADD_STL();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var collectCcy; // Utility Auto Fix Comments
        var foreignCustCcy; // Utility Auto Fix Comments
        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        Chg.Screen.mapForeignCust('STL_CHG_AC_OWNERID', 'STL_CHG_AC_OWNERNM', 'CHG_FOREIGN_CCY', 'STL_CHG_ACNO');
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');

        collectCcy = Chg.Screen.getCollectCcy();
        foreignCustCcy = Chg.Screen.getNostroCcy();
        SYT_calForeignColl2PayRate(collectCcy, foreignCustCcy);
        Chg.Screen.protectAllChargeFor();

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        SYT_Cal_C_TRANS_CODE();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (SYT_CHK_FOREIGN_CHG_ACNO()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        SYT_Cal_C_TRANS_CODE();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_ContralChgAt = function() {
    try {

        var charge; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var strChgFor; // Utility Auto Fix Comments
        strChgFor = document.MAINFORM.CHG_BANK_FLG.value;
        if (strChgFor == "Local") {
            strChgFor = "L";
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'L';
        }
        if (strChgFor == "Foreign") {
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
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_GET_OWNER_NM = function() {
    try {

        var sAcType; // Utility Auto Fix Comments
        var vAssId; // Utility Auto Fix Comments
        vAssId = document.MAINFORM.STL_CHG_AC_OWNERID.value;
        if (vAssId != "") {
            sAcType = document.MAINFORM.STL_CHG_AC_TYPE.value;
            if (sAcType == 'CUSTOMER') {
                SYS_GetCUBK('STL_CHG_AC_OWNERID', 'STL_CHG_AC_OWNERID');
            } else if (sAcType == 'NOSTRO' || sAcType == 'VOSTRO') {
                SYS_GetCUBK('STL_CHG_AC_OWNERID_BK', 'STL_CHG_AC_OWNERID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CAL_FOREN_RT = function(fieldName) {
    try {

        var obj; // Utility Auto Fix Comments
        var status; // Utility Auto Fix Comments
        fieldName = "CHG_FOREIGN_CCY";
        obj = document.MAINFORM.elements[fieldName];
        status = obj.disabled;
        obj.disabled = false;
        EEHtml.fireEvent(obj, "onchange");
        obj.disabled = status;
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYF_GTEE_Get_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CORR_MED_onchange = function(event) {
    try {
        SYF_GTEE_Cal_APPL_FAX();
        SYF_GTEE_Cal_APPL_EMAIL();
        SYF_GTEE_Cal_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_MAIL_BTN_onclick = function(event) {
    try {
        SYF_GTEE_Cal_APPL_MAIL_ADD_Inq();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_BANK_FLG_onchange = function(event) {
    try {
        SYF_GTEE_ContralChgAt();
        SYF_GTEE_Cal_APPL_FAX();
        SYF_GTEE_Cal_APPL_EMAIL();
        SYF_GTEE_Cal_APPL_MAIL_ADD();
        SYF_GTEE_Cal_APPL_LANG();
        SYF_GTEE_Cal_APPL_CORR_MED();
        SYT_CHK_FOREIGN_CHG_ACNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_STL_CHG_ACNO_onchange = function(event) {
    try {
        SYS_GetCUBK('CHG_FOREIGN_CCY', 'STL_CHG_ACNO', 'SYF_CAL_FOREN_RT');
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_STL_CHG_ACNO_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('CHG_FOREIGN_CCY', 'STL_CHG_ACNO');
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_STL_CHG_AC_OWNERID_onchange = function(event) {
    try {
        SYF_GTEE_GET_OWNER_NM();
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_STL_CHG_AC_OWNERID_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.STL_CHG_AC_TYPE.value == 'CUSTOMER') {
            SYS_InqCUBK('STL_CHG_AC_OWNERID', 'STL_CHG_AC_OWNERID');
        } else if (document.MAINFORM.STL_CHG_AC_TYPE.value == 'NOSTRO' || document.MAINFORM.STL_CHG_AC_TYPE.value == 'VOSTRO') {
            SYS_InqCUBK('STL_CHG_AC_OWNERID_BK', 'STL_CHG_AC_OWNERID');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_PLF_SettleCharges.js", e);
    }
}