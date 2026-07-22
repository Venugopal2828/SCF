var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYF_GTEE_Cal_TEMP_PART_AMT();
        SYM_GTEE_Chg_Screen();
        SYF_GTEE_Cal_GTEE_BAL();
        document.MAINFORM.STL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.STL_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.CLM_TRX_CCY_AMT.value);
        document.MAINFORM.TTL_CLM_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.CLM_TRX_CCY_AMT.value);
        SYF_GTEE_Cal_SEPARATE_CHG_FLG();
       // document.MAINFORM.APPLY_FLG.value = 'YES';
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_NXT_STATUS = function() {
    try {

        var nGTEE_BAL = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value);

        if (nGTEE_BAL == 0) {
            document.MAINFORM.NXT_STATUS.value = "End";
        } else {
            document.MAINFORM.NXT_STATUS.value = "Decision";
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_GTEE_Cal_NXT_STATUS();
        SYT_CLERK_ID();
        SYT_CHG_VOUCHER();

        SYT_LIAB_VOUCHER();

        //dane
        SYM_GTEE_CAL_PAYMENT_AC_DESC();

        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //SYT_ShowBlankRow('BENE_blankRow',1);
        SYT_ShowBlankRow('INDE', 1);

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        //tracery add these script for payment logic

        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM", "GTEE_CCY", "C_MAIN_REF");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        SYT_Cal_C_TRANS_CODE();
        Chg.attchEvent(SYF_GTEE_chgCallback);

        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "IQ") {
            SYM_GTEE_Chg_Calculate_ISS_COMM();
            SYM_GTEE_Chg_Calculate_COURIER_CHG();
            SYM_GTEE_Chg_Calculate_POST();
            SYM_GTEE_Chg_Calculate_SWIFT();
            SYM_GTEE_Chg_Calculate_Other();
            SYF_GTEE_chgCallback();
            CHG_setAllChargeAt('1');
            CHG_setAllCollCcy('USD');
            SYT_Set_TRXCCY2CHG();
        }
        SYM_GTEE_Cal_change_tab();

        SYT_DisableDivClass('A_div');
        SYT_DisableDivClass('D_div');
        SYT_DisableDivClass('I_div');
        SYM_GTEE_APLB_RULE2();

        SYF_GTEE_Cal_TTL_CR_AMT();
        SYF_GTEE_Cal_TTL_DEBIT_AMT();
        SYM_GTEE_CAL_CHG_CASH_IND_back();
        SYF_GTEE_MT798_FLG();
        CHG_DefCharge_chargeAtOnchange();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'P');
        document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = "1";
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_TTL_DEBIT_AMT = function() {
    try {

        var temp_ClaimAmt = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        var temp_ClaimChg = SYS_BeFloat(document.MAINFORM.CLM_BK_CHG.value);
        var temp_OurChgAppl = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
        var TTL_DR_AMT = 0;


        document.MAINFORM.TTL_DR_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, temp_ClaimAmt + temp_ClaimChg + temp_OurChgAppl);
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Charge = function() {
    try {

        SYM_GTEE_Chg_Screen();
        SYM_GTEE_Chg_Calculate_POST();
        SYM_GTEE_Chg_Calculate_SWIFT();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Charge_Bene = function() {
    try {

        if (document.MAINFORM.BENE_ID_BTN.value == "CUST") {
            SYS_GetCUBK('BENE_ID_CUST', document.MAINFORM.BENE_ID.name, 'SYF_GTEE_Cal_Charge');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_charge_Appl = function() {
    try {

        if (document.MAINFORM.APPL_ID_BTN.value == "CUST") {
            SYS_GetCUBK('APPL_ID_CUST', document.MAINFORM.APPL_ID.name, 'SYF_GTEE_Cal_Charge');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_TEMP_LC_BAL = function() {
    try {

        var nGTEE_BAL = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value);
        var nSTL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);

        if (nGTEE_BAL >= nSTL_AMT) {
            var nNEW_GTEE_BAL = nGTEE_BAL - nSTL_AMT;
            document.MAINFORM.TEMP_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, nNEW_COL_BAL_CCY);
        } else {
            document.MAINFORM.TEMP_LC_BAL.value = 0.00;
        }
        //sunny
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_TEMP_PART_AMT = function() {
    try {

        document.MAINFORM.TEMP_PART_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.CLM_BK_CHG.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_TTL_CR_AMT = function() {
    try {

        var Temp_ClaimAmt = SYS_BeFloat(document.MAINFORM.TTL_CLM_AMT.value);
        var Temp_ClaimChg = SYS_BeFloat(document.MAINFORM.TEMP_PART_AMT.value);
        var Temp_ChgforBene = SYS_BeFloat(document.MAINFORM.OUR_CHGS_BENE.value);

        document.MAINFORM.TTL_CR_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, Temp_ClaimAmt + Temp_ClaimChg - Temp_ChgforBene);
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_CPYT_N_PAY_AMT = function() {
    try {

        Obj_CPYT_N_PAY_AMT = document.MAINFORM.CPYT_N_PAY_AMT;
        Obj_CPYT_N_PAY_AMT.value = document.MAINFORM.TTL_DR_AMT.value;
        EEHtml.fireEvent(Obj_CPYT_N_PAY_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_chgCallback = function() {
    try {

        var ForeigntotalAmt = Chg.Screen.getForeignPayTotalAmt();
        EEHtml.getElementById('OUR_CHGS_BENE').value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, ForeigntotalAmt);
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_BENE, 'onchange');


        if (document.MAINFORM.SEPARATE_CHG_FLG.value == "No") {
            document.MAINFORM.OUR_CHGS_APPL.value = Chg.Screen.getLocalPayTotalAmt();
            document.MAINFORM.OUR_CHGS_APPL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.OUR_CHGS_APPL.value);
        } else {
            document.MAINFORM.OUR_CHGS_APPL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, 0);
        }
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_APPL, "onchange");
        SYF_GTEE_Cal_TTL_CR_AMT();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_SEPARATE_CHG_FLG = function() {
    try {

        if (document.MAINFORM.SEPARATE_CHG_FLG.value == "Yes") {
            CHG_set_UsedChgACFlag(true);
        } else {
            CHG_set_UsedChgACFlag(false);
        }
        EEHtml.fireEvent(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "onchange");
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_GTEE_BAL = function() {
    try {

        document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, (SYS_BeFloat(document.MAINFORM.GTEE_BAL.value) - SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value)));
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        /*if(document.MAINFORM.MRGN_BAL.value != '0')
{
alert("Margin balance !=0,please retune margin first!");
return false;
}
*/
        if (!SYF_GTEE_Chk_gteebal()) {
            return false;
        }
        return Cal_eloan_fields_GTEE();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_TTL_CLM_AMT = function() {
    try {

        document.MAINFORM.TTL_CLM_AMT.value = document.MAINFORM.STL_AMT.value;
        document.MAINFORM.TTL_CLM_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.TTL_CLM_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.TTL_CLM_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MT798_FLG = function() {
    try {

        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('N').style.display = '';
            SYT_EnableDivClass('N_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
        } else {
            EEHtml.getElementById('N').style.display = 'none';
            SYT_DisableDiv('N_div');

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Chk_gteebal = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.GTEE_BAL.value) < 0) {
            alert("Guarantee Balance is less than zero");
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_GTE_BAL = function() {
    try {

        var nGTEE_BAL = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        var nCLM_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        if (nGTEE_BAL <= nCLM_AMT) {
            var nNEW_GTEE_BAL = nCLM_AMT - nGTEE_BAL;
            document.MAINFORM.CLM_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, nNEW_GTEE_BAL);
        } else {
            document.MAINFORM.CLM_BAL.value = 0.00;
        }
        //document.MAINFORM.GTEE_BAL.value = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value)+ SYS_BeFloat(document.MAINFORM.CLM_BAL.value);
        document.MAINFORM.TEMP_LC_BAL.value = document.MAINFORM.CLM_BAL.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLY_FLG_onchange = function(event) {
    try {
        SYF_GTEE_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_BK_CHG_onchange = function(event) {
    try {
        if (SYM_GTEE_CHK_NEG(document.MAINFORM.CLM_BK_CHG.value)) {
            alert("claim charge amount should not accept negative values");
            document.MAINFORM.CLM_BK_CHG.value = '';
        }
        if (SYS_BeFloat(document.MAINFORM.CLM_BK_CHG.value) > SYS_BeFloat(document.MAINFORM.STL_AMT.value)) {
            alert("claim charge amount should be smaller than settlement amount");
            document.MAINFORM.CLM_BK_CHG.value = '';
        }
        SYF_GTEE_Cal_TTL_DEBIT_AMT();
        //tracery add a link for payment logic
        SYF_GTEE_Cal_TEMP_PART_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, "onchange");
        EEHtml.fireEvent(document.MAINFORM.TEMP_PART_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_TRX_CCY_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.CLM_TRX_CCY_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_GTEE_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.GTEE_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.GTEE_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_OUR_CHGS_APPL_onchange = function(event) {
    try {
        SYF_GTEE_Cal_TTL_DEBIT_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, "onchange");
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_OUR_CHGS_BENE_onchange = function(event) {
    try {
        SYF_GTEE_Cal_TTL_CR_AMT();
        //tracery add a link for payment logic
        EEHtml.fireEvent(document.MAINFORM.TTL_CR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEPARATE_CHG_FLG_onchange = function(event) {
    try {
        SYF_GTEE_Cal_TTL_DEBIT_AMT();
        SYF_GTEE_Cal_TTL_CR_AMT();
        SYM_GTEE_Cal_change_tab();

        //tracery add these script for payment logic
        SYF_GTEE_Cal_SEPARATE_CHG_FLG();
        SYF_GTEE_chgCallback();
        EEHtml.fireEvent(document.MAINFORM.TTL_DR_AMT, 'onchange');
        SYM_GTEE_CAL_CHG_CASH_IND_back();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_STL_AMT_onchange = function(event) {
    try {
        var value = document.MAINFORM.STL_AMT.value;
        if (SYM_GTEE_CHK_NEG(SYS_BeFloat(value))) {
            alert("Settlement Amount should not accept negative values");
            document.MAINFORM.STL_AMT.value = 0;
        } else if (SYS_BeFloat(value) > SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value)) {
            alert("Settlement Amount should not greater than claim amount");
            document.MAINFORM.STL_AMT.value = 0;
        }

        SYF_GTEE_Cal_TTL_DEBIT_AMT();
        SYF_GTEE_Cal_TTL_CLM_AMT();
        EEHtml.fireEvent(document.MAINFORM.SEPARATE_CHG_FLG, 'onchange');
        SYF_GTEE_GTE_BAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_PART_AMT_onchange = function(event) {
    try {
        SYF_GTEE_Cal_TTL_CR_AMT();
        //tracery add a link for payment logic
        EEHtml.fireEvent(document.MAINFORM.TTL_CR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TTL_CLM_AMT_onchange = function(event) {
    try {
        SYF_GTEE_Cal_TTL_CR_AMT();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TTL_CR_AMT_onchange = function(event) {
    try {
        //add event.currentTarget method for payment logic
        var objAMT1 = document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY;
        objAMT1.value = document.MAINFORM.TTL_CR_AMT.value;
        EEHtml.fireEvent(objAMT1, "onchange");
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TTL_DR_AMT_onchange = function(event) {
    try {
        //tracery add event.currentTarget method for payment logic
        var objAMT1 = document.MAINFORM.CPYT_N_PAY_AMT;
        var objAMT2 = document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY;

        objAMT1.value = document.MAINFORM.TTL_DR_AMT.value;
        objAMT2.value = document.MAINFORM.TTL_DR_AMT.value;

        EEHtml.fireEvent(objAMT2, "onchange");
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardClaimSettlement.js", e);
    }
}