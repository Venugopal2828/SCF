var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_SHGT_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYM_SHGT_Chg_SG_COMM();
            CHG_setAllChargeAt(1);
        }
        //for charge
        SYM_SHGT_Functions_For_Chg();

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SHIPCO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SHIPCO_NOTES.name);
        //SYM_SHGT_APPL_ID_C2();
        SYM_SHGT_SHIPCO_ID_C2();
        CHG_DefCharge_chargeAtOnchange();
        onChangeDiary();
        FLD_SHGT_SHIPCO_COR_MED_onchange();
        SYS_changeClassName('CHG_VALUE_DATE', 'M');
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        SYT_LIAB_VOUCHER();
        document.MAINFORM.CURRNT_STATUS.value = 'SG Issue';
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.SG_NO.value;
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.OnLoadTemplate = function() {
    try {

        FLD_SHGT_SHIPCO_COR_MED_onchange();
        FLD_SHGT_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYM_SHGT_Cal_APPL_ADD();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_ID_onchange = function(event) {
    try {
        SYM_SHGT_Cal_APPL_NM();
        SYM_SHGT_Chg_SG_COMM();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_SHGT_Sql_APPL_ID();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYM_SHGT_Cal_APPL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_ORDER_POST_onchange = function(event) {
    try {
        SYM_SHGT_Cal_APPL_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_APPL_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_SHGT_Cal_APPL_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_ASSET_ACNO_onchange = function(event) {
    try {
        if (document.MAINFORM.ASSET_ACNO.value == document.MAINFORM.LIAB_ACNO.value) {
            alert("Bank Liability Account should not same as Customer Liability Account");
            document.MAINFORM.ASSET_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_INV_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.INV_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.INV_AMT.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.INV_AMT.value) > SYS_BeFloat(document.MAINFORM.LC_AMT.value)) {
            alert("Invoice CCY and Amt should not be greater than LC amount");
            document.MAINFORM.INV_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_LIAB_ACNO_onchange = function(event) {
    try {
        if (document.MAINFORM.LIAB_ACNO.value == document.MAINFORM.ASSET_ACNO.value) {
            alert("Customer Liability Account should not same as Bank Liability Account");
            document.MAINFORM.LIAB_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_SHIPCO_ADD_BTN_onclick = function(event) {
    try {
        SYM_SHGT_Cal_SHIPCO_ADD();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_SHIPCO_COR_MED_onchange = function(event) {
    try {
        if (document.MAINFORM.SHIPCO_COR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_FAX, 'O');
        } else if (document.MAINFORM.SHIPCO_COR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_EMAIL, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_FAX, 'O');
        } else if (document.MAINFORM.SHIPCO_COR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_FAX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_FAX, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_SHIPCO_EMAIL_onchange = function(event) {
    try {
        var chkemail = document.MAINFORM.SHIPCO_EMAIL.value;
        if (SYM_SHGT_CHK_EMAIL(chkemail)) {
            alert("enter valid email address");
            document.MAINFORM.SHIPCO_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_SHIPCO_FAX_onchange = function(event) {
    try {
        var faxNo = document.MAINFORM.SHIPCO_FAX.value;
        if (SYM_SHGT_chk_faxNo(faxNo)) {
            alert("enter valid fax number");
            document.MAINFORM.SHIPCO_FAX.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_SHIPCO_ID_onchange = function(event) {
    try {
        SYM_SHGT_Cal_SHIPCO_NM();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_SHIPCO_ID_BTN_onclick = function(event) {
    try {
        SYM_SHGT_Sql_SHIPCO_ID();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_SHIPCO_ORDER_NO_onchange = function(event) {
    try {
        SYM_SHGT_Cal_SHIPCO_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_SHIPCO_ORDER_POST_onchange = function(event) {
    try {
        SYM_SHGT_Cal_SHIPCO_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_SHIPCO_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_SHGT_Cal_SHIPCO_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}

csFuncLevelProto.FLD_SHGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SHGT_IssueSGAgainstLC.js", e);
    }
}