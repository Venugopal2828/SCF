var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
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

        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM", "GTEE_CCY");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYM_GTEE_Chg_Calculate_Amd_Comm();
            //SYF_GTEE_Calculate_GTEE_COMM_BY_CHG_POLICY();
            CHG_setAllCollCcy(document.MAINFORM.GTEE_CCY.value);
            SYT_Set_TRXCCY2CHG();
        }
        //SYF_GTEE_ChangeFldClass();
        SYT_DisableDivClass('I_div');
        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass('D_div');

        SYM_GTEE_APLB_RULE2();
        SYM_GTEE_MPO_SIGNATURE();
        CHG_DefCharge_chargeAtOnchange();
        SYT_ChangeFldClass_New('CHG_FLD_LOCAL_CUST_AC_NO', 'P');
        SYT_ChangeFldClass_New('CHG_GETAC_BTN', 'P');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TEMP_MATURITY_DT.value = document.MAINFORM.MATURITY_DT.value;
        document.MAINFORM.ACPT_REJ.value = 'Apply';
        document.MAINFORM.TEMP_GTEE_AMT.value = document.MAINFORM.GTEE_AMT.value;
        document.MAINFORM.TEMP_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value;
        SYM_GTEE_Cal_TEMP_LIAB_ACNO();
        //add by amy in 20120619
        document.MAINFORM.TEMP_COMM_START_DT.value = document.MAINFORM.COMM_START_DT.value;
        document.MAINFORM.TEMP_COMM_END_DT.value = document.MAINFORM.COMM_END_DT.value;
        document.MAINFORM.TEMP_COMM_DT.value = document.MAINFORM.COMM_DT.value;
        document.MAINFORM.TEMP_NXT_COMM_DT.value = document.MAINFORM.NXT_COMM_DT.value;
        document.MAINFORM.TEMP_TOTAL_ISS_COMM.value = document.MAINFORM.TOTAL_ISS_COMM.value;
        document.MAINFORM.TEMP_CURRENT_COMM.value = document.MAINFORM.CURRENT_COMM.value;
        document.MAINFORM.TEMP_COMM_BAL.value = document.MAINFORM.COMM_BAL.value;
        document.MAINFORM.TEMP_PERIOD.value = document.MAINFORM.PERIOD.value;
        document.MAINFORM.TEMP_NO_OF_PERIODS.value = document.MAINFORM.NO_OF_PERIODS.value;
        document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = "1";
        SYT_ChangeFldClass_New('CHG_FLD_LOCAL_CUST_AC_NO', 'P');
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_LIAB_VOUCHER();
        SYT_CHG_VOUCHER();
        document.MAINFORM.BENE_CONST_REQ.value = 'NO';
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Calculate_GTEE_COMM_BY_CHG_POLICY = function() {
    try {

        var ACPT_REJ; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var expiry_dt; // Utility Auto Fix Comments
        var gtee_amt; // Utility Auto Fix Comments
        var new_expiry_dt; // Utility Auto Fix Comments
        var new_gtee_amt; // Utility Auto Fix Comments
        gtee_amt = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        new_gtee_amt = SYS_BeFloat(document.MAINFORM.NEW_GTEE_AMT.value);
        expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.EXPIRY_DT.value);
        new_expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.NEW_EXPIRY_DT.value);
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        ACPT_REJ = document.MAINFORM.ACPT_REJ.value;

        if ((ACPT_REJ == 'Apply' && gtee_amt >= new_gtee_amt && expiry_dt >= new_expiry_dt) || (ACPT_REJ != 'Apply')) {
            document.MAINFORM.COMM_START_DT.value = document.MAINFORM.TEMP_COMM_START_DT.value;
            document.MAINFORM.COMM_END_DT.value = document.MAINFORM.TEMP_COMM_END_DT.value;
            document.MAINFORM.COMM_DT.value = document.MAINFORM.TEMP_COMM_DT.value;
            document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.TEMP_NXT_COMM_DT.value;
            document.MAINFORM.TOTAL_ISS_COMM.value = document.MAINFORM.TEMP_TOTAL_ISS_COMM.value;
            document.MAINFORM.CURRENT_COMM.value = document.MAINFORM.TEMP_CURRENT_COMM.value;
            document.MAINFORM.COMM_BAL.value = document.MAINFORM.TEMP_COMM_BAL.value;
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
            document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
            document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
            document.MAINFORM.PERIOD.value = document.MAINFORM.TEMP_PERIOD.value;
            document.MAINFORM.NO_OF_PERIODS.value = document.MAINFORM.TEMP_NO_OF_PERIODS.value;
            ISS_COMM.hide();
            ISS_COMM_WEEK.hide();
            ISS_COMM_MONTH.hide();
            ISS_COMM_QUARTER.hide();
            ISS_COMM_HALF_YEAR.hide();
            ISS_COMM_YEAR.hide();
            ISS_COMM.display();
            SYM_GTEE_Chg_Calculate_Amd_Comm();
        } else {
            switch (document.MAINFORM.CHG_POLICY.value) {
                case '':
                    ISS_COMM.setChargeAt(1);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM.display();
                    document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.COMM_BAL.value = 0;
                    document.MAINFORM.PERIOD.value = 0;
                    document.MAINFORM.NO_OF_PERIODS.value = 0;
                    SYM_GTEE_Chg_Calculate_Amd_Comm();
                    break;
                case 'All in Advance':
                    ISS_COMM.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM.display();
                    document.MAINFORM.PERIOD.value = 0;
                    document.MAINFORM.NO_OF_PERIODS.value = 0;
                    SYM_GTEE_Chg_Calculate_Amd_Comm();
                    document.MAINFORM.TOTAL_ISS_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Part in Advance':
                    ISS_COMM.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM.display();
                    //document.MAINFORM.NXT_COMM_DT.value ='';
                    //document.MAINFORM.COMM_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.PERIOD.value = 0;
                    document.MAINFORM.NO_OF_PERIODS.value = 0;
                    SYM_GTEE_Chg_Calculate_Amd_Comm();
                    document.MAINFORM.TOTAL_ISS_COMM.value = SYS_BeFloat(ISS_COMM.getActiveAmt()) + SYS_BeFloat(document.MAINFORM.TEMP_COMM_BAL.value);
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Weekly':
                    ISS_COMM_WEEK.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM_WEEK.display();
                    document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
                    document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                    document.MAINFORM.NO_OF_PERIODS.value = 1;
                    SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Monthly':
                    ISS_COMM_MONTH.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM_MONTH.display();
                    document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
                    document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                    document.MAINFORM.NO_OF_PERIODS.value = 1;
                    SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Quarterly':
                    ISS_COMM_QUARTER.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM_QUARTER.display();
                    document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
                    document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                    document.MAINFORM.NO_OF_PERIODS.value = 1;
                    SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Half yearly':
                    ISS_COMM_HALF_YEAR.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM_HALF_YEAR.display();
                    document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
                    document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                    document.MAINFORM.NO_OF_PERIODS.value = 1;
                    SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Yearly':
                    ISS_COMM_YEAR.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM_YEAR.display();
                    document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
                    document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                    document.MAINFORM.NO_OF_PERIODS.value = 1;
                    SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
            }
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_ChangeFldClass = function() {
    try {

        var ACPT_REJ; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var expiry_dt; // Utility Auto Fix Comments
        var gtee_amt; // Utility Auto Fix Comments
        var new_expiry_dt; // Utility Auto Fix Comments
        var new_gtee_amt; // Utility Auto Fix Comments
        gtee_amt = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        new_gtee_amt = SYS_BeFloat(document.MAINFORM.NEW_GTEE_AMT.value);
        expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.EXPIRY_DT.value);
        new_expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.NEW_EXPIRY_DT.value);
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        ACPT_REJ = document.MAINFORM.ACPT_REJ.value;

        if ((ACPT_REJ == 'Apply' && gtee_amt >= new_gtee_amt && expiry_dt >= new_expiry_dt) || (ACPT_REJ != 'Apply')) {
            SYT_ChangeFldClass_New('COMM_START_DT', 'P');
            SYT_ChangeFldClass_New('COMM_END_DT', 'P');
            SYT_ChangeFldClass_New('COMM_DT', 'P');
            SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
            SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
            SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'O');
            SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'O');
        } else {
            switch (document.MAINFORM.CHG_POLICY.value) {
                case '':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_DT', 'B');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'B');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'B');
                    break;
                case 'All in Advance':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_DT', 'B');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'B');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM.protectChargeFor();
                    ISS_COMM.protectChargeAt();
                    ISS_COMM._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Part in Advance':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'M');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'O');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM.protectChargeFor();
                    ISS_COMM.protectChargeAt();
                    ISS_COMM._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Weekly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM_WEEK.protectChargeFor();
                    ISS_COMM_WEEK.protectChargeAt();
                    ISS_COMM_WEEK._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM_WEEK._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Monthly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM_MONTH.protectChargeFor();
                    ISS_COMM_MONTH.protectChargeAt();
                    ISS_COMM_MONTH._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM_MONTH._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Quarterly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM_QUARTER.protectChargeFor();
                    ISS_COMM_QUARTER.protectChargeAt();
                    ISS_COMM_QUARTER._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM_QUARTER._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Half yearly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM_HALF_YEAR.protectChargeFor();
                    ISS_COMM_HALF_YEAR.protectChargeAt();
                    ISS_COMM_HALF_YEAR._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM_HALF_YEAR._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Yearly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM_YEAR.protectChargeFor();
                    ISS_COMM_YEAR.protectChargeAt();
                    ISS_COMM_YEAR._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM_YEAR._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
            }
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Part_In_Advance_Comm_Onchange = function() {
    try {

        var CURRENT_COMM; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var TOTAL_ISS_COMM; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        if (document.MAINFORM.CHG_POLICY.value == 'Part in Advance') {
            if (document.MAINFORM.CURRENT_COMM.value != 0) {
                CURRENT_COMM = SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                TOTAL_ISS_COMM = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value);
                if (CURRENT_COMM > TOTAL_ISS_COMM) {
                    alert("Current Commission should less than or equal to Total Issuance Commission");
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                } else {
                    Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                }
            }
        }
        ISS_COMM.protectChargeFor();
        ISS_COMM.protectChargeAt();
        ISS_COMM._protectActiveAmt(); // Utility Auto Fix Comments
        ISS_COMM._protectCollectAmt(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_FOR_AMEND_DT = function() {
    try {

        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        switch (document.MAINFORM.CHG_POLICY.value) {
            case 'Part in Advance':
                SYM_GTEE_Chg_Calculate_Amd_Comm();
                document.MAINFORM.TOTAL_ISS_COMM.value = SYS_BeFloat(ISS_COMM.getActiveAmt()) + SYS_BeFloat(document.MAINFORM.TEMP_COMM_BAL.value);
                document.MAINFORM.CURRENT_COMM.value = 0;
                SYT_ChangeFldClass_New('CURRENT_COMM', 'M');
                break;
            case 'Weekly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Monthly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Quarterly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CHK_COMM_DT = function() {
    try {

        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
        if (COMM_DT < COMM_START_DT) {
            alert("Commission Date must be later than or equal to Commission Commence Date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CHK_COMM_END_DT = function() {
    try {

        var COMM_END_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_END_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_END_DT.value);
        if (COMM_END_DT < COMM_START_DT) {
            alert("Commission End Date must be later than Commission Commence Date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_GTEE_CHK_COMM_END_DT()) {
            return false;
        }
        if (!SYF_GTEE_CHK_COMM_DT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ACPT_REJ_onchange = function(event) {
    try {
        SYM_GTEE_Cal_TEMP_MATURITY_DT();
        SYM_GTEE_Chg_Calculate_Amd_Comm();
        //SYF_GTEE_Calculate_GTEE_COMM_BY_CHG_POLICY();
        //SYF_GTEE_ChangeFldClass();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL;// Utility Auto Fix Comments
SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL;// Utility Auto Fix Comments
SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_BAL_onchange = function(event) {
    try {
        document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_DT_onchange = function(event) {
    try {
        //SYF_GTEE_CHK_COMM_DT();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_END_DT_onchange = function(event) {
    try {
        //SYF_GTEE_CHK_COMM_END_DT();
        //SYF_GTEE_FOR_AMEND_DT();
        //SYF_GTEE_ChangeFldClass();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_START_DT_onchange = function(event) {
    try {
        //SYF_GTEE_CHK_COMM_END_DT();
        //SYF_GTEE_CHK_COMM_DT();
        //SYF_GTEE_FOR_AMEND_DT();
        //SYF_GTEE_ChangeFldClass();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CURRENT_COMM_onchange = function(event) {
    try {
        //SYF_GTEE_Part_In_Advance_Comm_Onchange();
        //document.MAINFORM.CURRENT_COMM.value=SYT_AmtFormat(document.MAINFORM.COMM_CCY.value,document.MAINFORM.CURRENT_COMM.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton3_onclick = function(event) {
    try {
        return SYS_InsertClause('NARR_MAIL');
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SW_FORM_onchange = function(event) {
    try {
        SYM_GTEE_MPO_SW_FORM_AMD();
        SYM_GTEE_MPO_SEND_TO_RCV_INFO();
        SYM_GTEE_MPO_SIGNATURE();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TOTAL_ISS_COMM_onchange = function(event) {
    try {
        //document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value,document.MAINFORM.TOTAL_ISS_COMM.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_OutwardApplyRejectAmendment.js", e);
    }
}