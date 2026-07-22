var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IMCO_CHK_ADD_CHARGE = function() {
    try {

        var ccy = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        var unPaidAmt = SYS_BeFloat(Chg.Screen.getLocalBalTotalAmt(ccy) + Chg.Screen.getForeignBalTotalAmt(ccy));

        if (unPaidAmt > 0 && document.MAINFORM.WRITE_OFF_CHG_FLG.value == 'NO') {
            SYS_CheckError(document.MAINFORM.WRITE_OFF_CHG_FLG, "There are outstanding charges. Please use the Settle Charges Function to clear them.");
            return false;

        }

        if (unPaidAmt > 0 && document.MAINFORM.WRITE_OFF_CHG_FLG.value == 'YES') {
            CHG_setAllChargeAt(1);
            CHG_allDefChargeAt_onchange();

        }
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        if (typeof Chg == "object") {
            SYT_CHG_VOUCHER();
        }
        SYT_Cal_C_TRANS_CODE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return SYF_IMCO_CHK_ADD_CHARGE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        if (document.MAINFORM.CLERK_ID != null) {
            SYT_CLERK_ID();
        }
        document.MAINFORM.CLS_FLG.value = "Yes";

        SYM_IMCO_INIT();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_IMCO_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by tracery for charge voucher
        SYT_Set_TRXCCY2CHG(); //add by tracery for charge voucher
        document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189
        if (SYS_FUNCTION_TYPE != "RE") {
            SYF_IMCO_CHK_ADD_CHARGE();
        }
        CHG_setAllChargeAt(1);
        CHG_allDefChargeAt_onchange();
        SYT_DisableDivClass('B_div');
        SYT_DisableDivClass('C_div');
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD1_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD2_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD3_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_NM_onchange = function(event) {
    try {
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_WRITE_OFF_CHG_FLG_onchange = function(event) {
    try {
        SYF_IMCO_CHK_ADD_CHARGE();
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_CloseFile.js", e);
    }
}