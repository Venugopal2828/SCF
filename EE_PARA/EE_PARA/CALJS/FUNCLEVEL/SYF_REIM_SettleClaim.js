var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.NXT_STATUS.value = 'Settled Claim End';
        document.MAINFORM.CURRNT_STATUS.value = 'Settle Claim';
        document.MAINFORM.CLS_FLG.value = 'NO';
        document.MAINFORM.X730_DOC_CRE_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        if (document.MAINFORM.CLM_BK_ID.value != '') {
            document.MAINFORM.X730_ADV_BKID_B2.value = document.MAINFORM.CLM_BK_ID.value;
            document.MAINFORM.X730_ADV_BKNM_B2.value = document.MAINFORM.CLM_BK_NM.value;
            document.MAINFORM.X730_ADV_BKADD1_B2.value = document.MAINFORM.CLM_BK_ADD1.value;
            document.MAINFORM.X730_ADV_BKADD2_B2.value = document.MAINFORM.CLM_BK_ADD2.value;
            document.MAINFORM.X730_ADV_BKADD3_B2.value = document.MAINFORM.CLM_BK_ADD3.value;
            document.MAINFORM.X730_ADV_BKSW_B2.value = document.MAINFORM.CLM_BK_SW_ADD.value;
        }
        SYM_REIM_Cal_CHG_MINUS();
        SYM_REIM_Cal_CHG_PLUS();
        SYF_REIM_Get_TEMP_N90_REF();
        if (document.MAINFORM.LC_NO.value != '') {
            document.MAINFORM.X730_RCVER_NO_21.value = document.MAINFORM.LC_NO.value;
        }
        document.MAINFORM.PRES_CCY.value = document.MAINFORM.LC_CCY.value;

        //advice tabe
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;

        if (document.MAINFORM.X730_ADV_BKID_B2.value != '') {
            document.MAINFORM.SEND_TO.value = 'MT799';
            document.MAINFORM.ISSUE_NARR_TAG_79.value = 'REIM CLAIM SETTLED: \n' + 'YOUR REF----' + document.MAINFORM.LC_NO.value + '\n' + 'CLM BK BIC----' + document.MAINFORM.CLM_BK_SW_ADD.value + '\n' + 'DR DATE----' + document.MAINFORM.CPYT_DR_VAL_DATE.value + '\n' + 'AMT----' + document.MAINFORM.LC_CCY.value + document.MAINFORM.REIM_INST_AMT.value + '\n'; // Utility Auto Fix Comments
        }

        SYT_Cal_LOCAL_AMT('LC_CCY', 'REIM_INST_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Cal_ISSUE_NARR_MAIL();
        SYM_REIM_Chg_Screen_CLM();
        SYM_REIM_Chg_Screen_ISSUE();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            CHG_setAllCollCcy(SYS_LOCAL_CCY);
            SYT_Set_TRXCCY2CHG();
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE;
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
            CHG_setAllChargeAt("1");
            Cal_ISSUE_BK_SW_ADD();
        }
        SYT_Show_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.CLM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_DisableDivClass('O_div');
        SYT_DisableDivClass('A_div');
        EEHtml.fireEvent(document.MAINFORM.SEND_TO, 'onchange');
        CHG_DefCharge_chargeAtOnchange();
        if (document.MAINFORM.AMEND_FLAG.value = 'N' || document.MAINFORM.AMEND_FLAG.value == '') {
            var AMEND_COMM = Chg.Screen.getTrxChargeByCommCode('AMEND_COMM');
            AMEND_COMM.hide();
        }
        Cal_ISSUE_NARR_TAG_79();
        CHG_TotalAmountOnChange();
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_ChgFldCLS = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.LC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CANCEL_CLM_FLG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.LC_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_INST_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_CNTR, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_CNTY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD2, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD3, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_SW_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_CNTY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_CLM_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_HELD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_DR_ACNO_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_PCT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_DR_ACNO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AMT_TXCCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_BAL_TXCCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BK_EQ_CLM_BK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DOC_VALUE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DEC_CLM_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLM_TRX_CCY_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_INST_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PEND_REIM_INST_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PEND_REIM_CONF_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_CONF_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_INST_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_CONF_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_PLUS, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_MINUS, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADD_AMT_CLMD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NET_CLAIM_ISSBK, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHG_DESC, 'P');

        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKID_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKNM_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKADD1_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKADD2_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKADD3_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKSW_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ADV_BKMED_B2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_DOC_CRE_NO_20, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_RCVER_NO_21, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ACC_IDEN_25, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X730_BEACK_DT_30, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_TAG_32A, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X730_VALUE_DT_32A, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X730_CHG_AMT_32A, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X730_CHG_CCY_32A, 'O');

        SYT_ChangeFldClass(document.MAINFORM.X730_CHG_DESC_71B, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X730_BKTOBK_INFO72, 'O');

        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ID_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'H');
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Chg_Calculation = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        SYM_REIM_Chg_Screen_ISSUE();
        arr = ['ISS_COMM', 'AMEND_COMM', 'CONF_COMM', 'SWIFT_CHG', 'POST_CHG', 'OTHER_CHG'];
        amt = document.MAINFORM.REIM_INST_AMT.value;
        ccy = document.MAINFORM.LC_CCY.value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Get_TEMP_N90_REF = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var CLM_TRX_CCY_AMT; // Utility Auto Fix Comments
        var REIM_CONF_BAL; // Utility Auto Fix Comments
        var nRetire_Conf; // Utility Auto Fix Comments
        SYT_CHG_VOUCHER();
        document.MAINFORM.CONF_CR_AC_NO.value = '35790101';
        document.MAINFORM.CONF_DR_AC_NO.value = '35790102';
        REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.REIM_CONF_BAL.value);
        CLM_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        nRetire_Conf = Math.min(REIM_CONF_BAL, CLM_TRX_CCY_AMT);
        if (REIM_CONF_BAL > 0) {
            document.MAINFORM.TEMP_AC_AMT6.value = nRetire_Conf;

            document.MAINFORM.TEMP_AC_AMT5.value = nRetire_Conf;
        } else {
            document.MAINFORM.TEMP_AC_AMT6.value = 0;
            document.MAINFORM.TEMP_AC_AMT5.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYF_REIM_Cal_ChgFldCLS();
        SYT_Init_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CLM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_BENE_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_ID_onchange = function(event) {
    try {
        Cal_BENE_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_BENE_BANK();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_BENE_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_BENE_BK_SW_TAG();
        Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_MINUS_onchange = function(event) {
    try {
        SYM_REIM_Cal_CHG_MINUS();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_PLUS_onchange = function(event) {
    try {
        SYM_REIM_Cal_CHG_PLUS();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_CLM_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ID_onchange = function(event) {
    try {
        Get_CLM_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_CLM_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_NM_onchange = function(event) {
    try {
        SYM_REIM_Chg_Screen_CLM();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_CLM_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CLM_BK_SW_ADD_onchange = function(event) {
    try {
        Get_CLM_BK_CNTY();
        Cal_CLM_BK_SW_TAG();
        Cal_CLM_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_REIM_Get_TEMP_N90_REF();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_ISSUE_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ID_onchange = function(event) {
    try {
        Cal_ISSUE_BK_ID();
        /*
if(SYS_ORG_FUNCTION_NAME == 'RegisterInstruction'){
//JACK 0921 REIM
SYM_REIM_Set_Risk_Party_Info();
document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
}
*/
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_REIM_Chg_Screen_ISSUE();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_ISSUE_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_ISSUE_BK_SW_ADD();
        Cal_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_LC_NO_onchange = function(event) {
    try {
        SYF_REIM_Get_TEMP_N90_REF();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_SEND_TO_onchange = function(event) {
    try {
        Cal_ISSUE_NARR_MAIL();
        Cal_ISSUE_NARR_TAG_79();
        Get_Ack_79();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}

csFuncLevelProto.FLD_REIM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_REIM_SettleClaim.js", e);
    }
}