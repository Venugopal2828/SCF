var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CLOSE_DT.value = SYS_DATE;
        document.MAINFORM.CLS_FLG.value = 'Yes';
        document.MAINFORM.CURRNT_STATUS.value = 'IPLC_CLS_LC';
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYM_IPLC_CHK_ISSUE_BK_SW_TAG();
        SYM_IPLC_INIT_FOR_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Disabled_Parties = function() {
    try {

        SYT_DisableDivClass("B_div");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);

        //for charge init

        SYT_ChangeFldClass_New('CLS_FLG', 'P');
        SYM_IPLC_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        CHG_setAllCollCcy(SYS_LOCAL_CCY); //for charge voucher
        SYT_Set_TRXCCY2CHG(); // for charge voucher
        document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189
        if (SYS_FUNCTION_TYPE != "RE") {
            SYF_IPLC_CHK_ADD_CHARGE();
        }
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();

        // disabled tab charge and parties
        SYF_IPLC_Disabled_Parties();
        SYT_DisableDivClass('C_div');
        CHG_DefCharge_chargeAtOnchange();
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'IQ') {
            var CLS_FLG;
            CLS_FLG = document.MAINFORM.CLS_FLG.value;
            if (CLS_FLG == 'Yes') {
                SYT_ChangeFldClass(document.MAINFORM.CLS_FLG, 'P');
            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_ADD_CHARGE = function() {
    try {

        var ccy = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        var unPaidAmt = SYS_BeFloat(Chg.Screen.getLocalBalTotalAmt(ccy) + Chg.Screen.getForeignBalTotalAmt(ccy));
        if (document.MAINFORM.WRITE_OFF_CHG_FLG.value == 'NO') {
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
            CHG_setAllChargeAt('1');
            CHG_allDefChargeAt_onchange();
            var unPaidAmt = SYS_BeFloat(Chg.Screen.getLocalBalTotalAmt(ccy) + Chg.Screen.getForeignBalTotalAmt(ccy));
            if (unPaidAmt > 0) {
                SYS_CheckError(document.MAINFORM.WRITE_OFF_CHG_FLG, "There are outstanding charges. Please use the Settle Charges Function to clear them.");
                return false;
            }
        }
        if (unPaidAmt > 0 && document.MAINFORM.WRITE_OFF_CHG_FLG.value == 'YES') {
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '3';
            CHG_setAllChargeAt('3');
            CHG_allDefChargeAt_onchange();
        }
        Chg.Screen.protectAllChargeFor();
        Chg.Screen.protectAllChargeAt();
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return (SYF_IPLC_CHK_ADD_CHARGE());
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.LC_BAL_CLS.value = document.MAINFORM.LC_BAL.value;
        //document.MAINFORM.LC_BAL.value = 0;
        SYT_LIAB_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_WRITE_OFF_CHG_FLG_onchange = function(event) {
    try {
        SYF_IPLC_CHK_ADD_CHARGE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CloseLC.js", e);
    }
}