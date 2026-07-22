var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CLS_FLG.value = 'NO';
        document.MAINFORM.ORIGIN_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value;
        document.MAINFORM.CURRNT_STATUS.value = 'Close-Expiry';
        document.MAINFORM.NXT_STATUS.value = 'Reopen';
        document.MAINFORM.CLOSE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.REG_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_IWGT_APLB_RULE();

        SYT_DisableDivClass('A_div');
        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass("B_div");
        SYT_ChangeFldClass(document.MAINFORM.CLS_FLG, "M");
        SYT_ChangeFldClass(document.MAINFORM.WRITE_OFF_CHG_FLG, "M");
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
        Chg.Screen.mapLocalCust("ISSUE_BK_ID", "ISSUE_BK_NM");
        Chg.Screen.mapForeignCust("ADV_BK_ID", "ADV_BK_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.protectAllChargeFor();
        Chg.Screen.protectAllChargeAt();
        SYF_IWGT_Chk_UNPAID_CHG();

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CLERK_ID();

        SYT_LIAB_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Chk_UNPAID_CHG = function() {
    try {

        var ccy = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        var unPaidAmt = SYS_BeFloat(Chg.Screen.getLocalBalTotalAmt(ccy) + Chg.Screen.getForeignBalTotalAmt(ccy));

        if (unPaidAmt > 0 && document.MAINFORM.WRITE_OFF_CHG_FLG.value == 'NO') {
            SYS_CheckError(document.MAINFORM.WRITE_OFF_CHG_FLG, "There are outstanding charges. Please use the Settle Charges Function to clear them.");
            return false;
        }

        if (unPaidAmt > 0 && document.MAINFORM.WRITE_OFF_CHG_FLG.value == 'YES') {
            CHG_setAllChargeAt('3');
            CHG_allDefChargeAt_onchange();

        }

        Chg.Screen.protectAllChargeFor();
        Chg.Screen.protectAllChargeAt();
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return SYF_IWGT_Chk_UNPAID_CHG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_DT_onchange = function(event) {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INWARD_RCV_DT_onchange = function(event) {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_WRITE_OFF_CHG_FLG_onchange = function(event) {
    try {
        SYF_IWGT_Chk_UNPAID_CHG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_ExpireInGuarantee.js", e);
    }
}