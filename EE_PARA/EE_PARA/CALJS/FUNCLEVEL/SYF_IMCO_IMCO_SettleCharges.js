var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var collectCcy; // Utility Auto Fix Comments
        var foreignCustCcy; // Utility Auto Fix Comments
        Chg.Screen.mapLocalCust(document.MAINFORM.DRWE_ID.name, document.MAINFORM.DRWE_NM.name);
        Chg.Screen.mapForeignCust(document.MAINFORM.STL_CHG_AC_OWNERNM.name, document.MAINFORM.STL_CHG_AC_OWNERNM.name, 'CHG_FOREIGN_CCY', 'STL_CHG_ACNO');
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        collectCcy = Chg.Screen.getCollectCcy();
        foreignCustCcy = Chg.Screen.getNostroCcy();
        SYT_calForeignColl2PayRate(collectCcy, foreignCustCcy);
        Chg.Screen.protectAllChargeFor();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CHG_LOCAL_CUST_PAY_RATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FOREIGN_CUST_PAY_RATE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_BAL_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_TRX_DATE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'P');

        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_ContralDefChgAt();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_DRWE_CORR_MED = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_CORR_MED, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_CORR_MED, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_DRWE_LANG = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_LANG, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_LANG, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_DRWE_MAIL_ADD = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local' && document.MAINFORM.DRWE_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_MAIL_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_POST_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_DRWE_EMAIL = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local' && document.MAINFORM.DRWE_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_EMAIL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_DRWE_FAX = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local' && document.MAINFORM.DRWE_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_FAX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_FAX, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_DRWE_TEL_NO = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local' && document.MAINFORM.DRWE_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_TEL_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_TEL_NO, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TEMP_DRWR_ID.value = 'No Foreign ID';
        document.MAINFORM.TEMP_DRWR_NM.value = 'No Foreign Name';
        SYF_IMCO_Cal_DRWE_CORR_MED();
        SYF_IMCO_Cal_DRWE_EMAIL();
        SYF_IMCO_Cal_DRWE_FAX();
        SYF_IMCO_Cal_DRWE_LANG();
        SYF_IMCO_Cal_DRWE_MAIL_ADD();
        SYF_IMCO_Cal_DRWE_TEL_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_DRWE_MAIL_ADD_Inq = function() {
    try {

        SYS_InqCUBK('DRWE_POST_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_DRWE_MAIL_ADD = function() {
    try {

        var DRWE_ID; // Utility Auto Fix Comments
        var DRWE_ORDER_POST; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //DRWE_ORDER_POST = document.MAINFORM.DRWE_ORDER_POST.value;
        //DRWE_ID = document.MAINFORM.DRWE_ID.value;
        //sSQLWhere = "ORDER_NO = " + DRWE_ORDER_POST + " AND C_MAIN_REF = '" + DRWE_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "DRWE_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYF_IMCO_IMCO_SettleCharges_SYF_IMCO_Get_DRWE_MAIL_ADD_0', '1');
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_FOREN_RT = function(fieldName) {
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
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_GET_OWNER_NM = function() {
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
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_MPO_BY_AC_TYPE = function() {
    try {

        if (document.MAINFORM.STL_CHG_AC_TYPE.value == 'INTERNAL') {
            document.MAINFORM.STL_CHG_AC_OWNERID.value = '';
            document.MAINFORM.STL_CHG_AC_OWNERNM.value = '';
            document.MAINFORM.STL_CHG_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.STL_CHG_AC_OWNERID_BTN, 'P');
        } else {
            document.MAINFORM.STL_CHG_AC_OWNERID.value = '';
            document.MAINFORM.STL_CHG_AC_OWNERNM.value = '';
            document.MAINFORM.STL_CHG_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.STL_CHG_AC_OWNERID_BTN, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_ContralChgAt = function() {
    try {

        var charge; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var strChgFor; // Utility Auto Fix Comments
        /*strChgFor = document.MAINFORM.CHG_BANK_FLG.value;
if(strChgFor == "Local"){
	strChgFor = "L";	
}
if(strChgFor == "Foreign"){
	strChgFor = "F";
}

defChgArr = Chg.Screen.getAllDefCharge();
for(i=0;i<defChgArr.length;i++){
	charge = defChgArr[i];
	if(charge.getChargeFor() == strChgFor){
		charge.unprotectChargeAt();
		charge.setChargeAt("0");
		charge.chargeAtOnchange();
	}else{
		charge.setChargeAt("1");
		charge.chargeAtOnchange();
		charge.protectChargeAt();
	}
}*/
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
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        SYT_Cal_C_TRANS_CODE();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        SYT_CHK_FOREIGN_CHG_ACNO();
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_STL_CHG_ACNO_CUBK = function() {
    try {

        if (document.MAINFORM.STL_CHG_ACNO.value != '') {
            SYS_GetCUBK('CHG_FOREIGN_CCY', 'STL_CHG_ACNO', 'SYF_IMCO_CAL_FOREN_RT');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_STL_CHG_AC_OWNERID = function() {
    try {

        if (document.MAINFORM.CHG_BANK_FLG.value == 'Local') {
            SYT_ChangeFldClass(document.MAINFORM.STL_CHG_AC_OWNERID, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.STL_CHG_AC_OWNERID, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_BANK_FLG_onchange = function(event) {
    try {
        SYT_ContralDefChgAt();
        SYF_IMCO_Cal_DRWE_TEL_NO();
        SYF_IMCO_Cal_DRWE_FAX();
        SYF_IMCO_Cal_DRWE_EMAIL();
        SYF_IMCO_Cal_DRWE_MAIL_ADD();
        SYF_IMCO_Cal_DRWE_LANG();
        SYF_IMCO_Cal_DRWE_CORR_MED();
        SYT_CHK_FOREIGN_CHG_ACNO();
        SYF_IMCO_Cal_STL_CHG_AC_OWNERID();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYF_IMCO_Cal_DRWE_TEL_NO();
        SYF_IMCO_Cal_DRWE_FAX();
        SYF_IMCO_Cal_DRWE_EMAIL();
        SYF_IMCO_Cal_DRWE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYF_IMCO_Get_DRWE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYF_IMCO_Cal_DRWE_MAIL_ADD_Inq();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_STL_CHG_ACNO_onchange = function(event) {
    try {
        SYF_IMCO_Cal_STL_CHG_ACNO_CUBK();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_STL_CHG_ACNO_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('STL_CHG_ACNO', 'C_CUST_ID= \'<--STL_CHG_AC_OWNERID-->\' ');
        SYS_InqCUBK_byCondition('STL_CHG_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_STL_CHG_AC_OWNERID_onchange = function(event) {
    try {
        SYF_IMCO_GET_OWNER_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_STL_CHG_AC_OWNERID_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.STL_CHG_AC_TYPE.value == 'CUSTOMER') {
            SYS_InqCUBK('STL_CHG_AC_OWNERID', 'STL_CHG_AC_OWNERID');
        } else if (document.MAINFORM.STL_CHG_AC_TYPE.value == 'NOSTRO' || document.MAINFORM.STL_CHG_AC_TYPE.value == 'VOSTRO') {
            SYS_InqCUBK('STL_CHG_AC_OWNERID_BK', 'STL_CHG_AC_OWNERID');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_STL_CHG_AC_TYPE_onchange = function(event) {
    try {
        SYF_IMCO_MPO_BY_AC_TYPE();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_SettleCharges.js", e);
    }
}