var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PreconditionOnInit = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.STL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CURRNT_STATUS.value = 'SettleClaim';
        document.MAINFORM.TEMP_N90_CHG_32.value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
        document.MAINFORM.TEMP_TAG34_AMT.value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
        document.MAINFORM.APPL_CUST_BK.value = 'Bank';
        SYF_IWGT_Cal_Init_CLM_CNTR();
        SYF_IWGT_Balance();

        if (document.MAINFORM.COUNTR_GTEE.value == 'Yes') {
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'F';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CLERK_ID();
        //Charge Voucher
        SYT_CHG_VOUCHER();
        //Liability Voucher
        SYT_LIAB_VOUCHER();
        //dane
        SYM_IWGT_CAL_PAYMENT_AC_DESC();
        Cal_MSG_TYPE();
        document.MAINFORM.GTEE_BAL.value = document.MAINFORM.CLM_BAL.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        onChangeDiary();
        SYT_DisableDivClass('A_div');
        SYT_DisableDivClass('B_div');
        SYT_DisableDivClass('K_div');
        SYM_IWGT_MPO_APLB_RULE_NARR();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        //tracery modify for payment logic

        SYM_IWGT_Chg_Screen_local();
        SYM_IWGT_Chg_screen_foreign();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.attchEvent(SYF_IWGT_chgCallback);

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'IQ') {

            SYM_IWGT_Chg_Calculate_Other();
            SYM_IWGT_Chg_Calculate_POST();
            SYM_IWGT_Chg_Calculate_SWIFT();
            SYM_IWGT_Chg_Calculate_courier();
            CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by tracery for charge voucher - credit ccy
            SYT_Set_TRXCCY2CHG(); //add by tracery for charge voucher - mapping trx ccy to unpaid ccy
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY(); //add by tracery for charge voucher - debit ccy
        }

        SYM_IWGT_Cal_TTL_CR_AMT();
        SYM_IWGT_Cal_TTL_DR_AMT();

        SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_CHG_32, 'P');
        SYF_IWGT_CHG_FLD_LOCAL_CUST_AC_NO();
        SYM_IWGT_CAL_CHG_CASH_IND_back();

        if (document.MAINFORM.COUNTR_GTEE.value == 'Yes') {
            document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value = 'F';
        }

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_chgCallback = function() {
    try {

        //tracery add these script for payment logic
        var ForeigntotalAmt = Chg.Screen.getForeignPayTotalAmt();
        document.MAINFORM.TEMP_COLL_AMT_COLL_CCY.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, ForeigntotalAmt);
        if (document.MAINFORM.SEPARATE_CHG_FLG.value == "No") {
            document.MAINFORM.OUR_CHG_BENE.value = Chg.Screen.getLocalPayTotalAmt();
        } else {
            document.MAINFORM.OUR_CHG_BENE.value = 0;
        }
        EEHtml.fireEvent(document.MAINFORM.OUR_CHG_BENE, "onchange");
        SYM_IWGT_Cal_TTL_DR_AMT();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_CHG_FLD_LOCAL_CUST_AC_NO = function() {
    try {

        //tracery add this method for payment logic
        if (document.MAINFORM.SEPARATE_CHG_FLG.value == "Yes") {
            CHG_set_UsedChgACFlag(true);
        } else {
            CHG_set_UsedChgACFlag(false);
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        //return true;
        if (document.MAINFORM.CPYT_DR_ID.value == document.MAINFORM.CPYT_ASSGN_ID.value) {
            alert('Debit AC No should not be same as Credit AC No');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Balance = function() {
    try {

        //Balance edit by sunny0408
        //document.MAINFORM.GTEE_LCY_AMT.value = document.MAINFORM.GTEE_BAL.value;
        var nGTEE_BAL = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value);
        var nCLM_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        if (nGTEE_BAL >= nCLM_AMT) {
            var nNEW_GTEE_BAL = nGTEE_BAL - nCLM_AMT;
            document.MAINFORM.CLM_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, nNEW_GTEE_BAL);
        } else {
            document.MAINFORM.CLM_BAL.value = 0.00;
        }
        //document.MAINFORM.GTEE_BAL.value = document.MAINFORM.CLM_BAL.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Init_CLM_CNTR = function() {
    try {

        var claim_no = SYS_BeInt(document.MAINFORM.CLM_CNTR.value);
        if (claim_no < 10) {
            document.MAINFORM.CLM_CNTR.value = '0' + claim_no;
        } else {
            document.MAINFORM.CLM_CNTR.value = claim_no;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CLM_BK_CHG_onchange = function(event) {
    try {
        SYM_IWGT_Cal_TTL_CR_AMT();
        //tracery add a link for payment logic
        EEHtml.fireEvent(document.MAINFORM.TTL_CR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CLM_CHG_DR_APPL_onchange = function(event) {
    try {
        var Claim_Amount;
        var Claim_Charges;
        Claim_Amount = SYS_BeFloat(document.MAINFORM.TEMP_N90_CHG_32.value);
        Claim_Charges = SYS_BeFloat(document.MAINFORM.CLM_CHG_DR_APPL.value);
        if (Claim_Charges > Claim_Amount) {
            alert("Claimant Charges cannot be more than Claim Amount!");
            document.MAINFORM.CLM_CHG_DR_APPL.value = 0;
        }
        SYM_IWGT_Cal_TTL_DR_AMT();
        //tracery add a link for payment logic
        SYM_IWGT_Cal_CLM_BK_CHG();
        if (SYS_BeFloat(document.MAINFORM.CLM_CHG_DR_APPL.value) < 0) {
            alert("The Claimant Charges field should not accept negative values!");
            document.MAINFORM.CLM_CHG_DR_APPL.value = 0;
            document.MAINFORM.CLM_BK_CHG.value = 0;
            document.MAINFORM.TTL_DR_AMT.value = document.MAINFORM.TEMP_N90_CHG_32.value;
        } //added
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_CCY_onchange = function(event) {
    try {
        SYF_IWGT_chgCallback();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_OUR_CHG_BENE_onchange = function(event) {
    try {
        SYM_IWGT_Cal_TTL_CR_AMT();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEPARATE_CHG_FLG_onchange = function(event) {
    try {
        SYF_IWGT_CHG_FLD_LOCAL_CUST_AC_NO();
        SYF_IWGT_chgCallback();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
        SYM_IWGT_CAL_CHG_CASH_IND_back();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_TEMP_COLL_AMT_COLL_CCY_onchange = function(event) {
    try {
        SYM_IWGT_Cal_TTL_DR_AMT();
        //tracery add a linke for payment logic
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_TEMP_N90_CHG_32_onchange = function(event) {
    try {
        SYM_IWGT_Cal_TTL_DR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_TEMP_TAG34_AMT_onchange = function(event) {
    try {
        //tracery add event.currentTarget method for payment logic
        SYM_IWGT_Cal_TTL_CR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_CR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_TTL_CR_AMT_onchange = function(event) {
    try {
        //tracery add event.currentTarget method for payment logic
        //set credit amount to payment credit;
        var objAMT1 = document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY;
        objAMT1.value = document.MAINFORM.TTL_CR_AMT.value;
        EEHtml.fireEvent(objAMT1, "onchange");
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_TTL_DR_AMT_onchange = function(event) {
    try {
        //tracery add event.currentTarget method for payment logic
        //set Debit amount to payment debit;
        var objAMT1 = document.MAINFORM.CPYT_N_PAY_AMT;
        var objAMT2 = document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY;
        objAMT1.value = document.MAINFORM.TTL_DR_AMT.value;
        objAMT2.value = document.MAINFORM.TTL_DR_AMT.value;

        EEHtml.fireEvent(objAMT2, "onchange");
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_SettleInwClaim.js", e);
    }
}