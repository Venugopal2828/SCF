var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYF_GTEE_Cal_NO_OF_PERIODS();
        document.MAINFORM.COMM_DT.value = document.MAINFORM.NXT_COMM_DT.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_NO_OF_PERIODS = function(ref) {
    try {

        var NO_OF_PERIODS; // Utility Auto Fix Comments
        NO_OF_PERIODS = SYS_BeInt(document.MAINFORM.NO_OF_PERIODS.value);
        if (NO_OF_PERIODS == "" || NO_OF_PERIODS == 0) {
            document.MAINFORM.NO_OF_PERIODS.value = 1;
        } else {
            document.MAINFORM.NO_OF_PERIODS.value = NO_OF_PERIODS + 1;
        }
        SYF_GTEE_SetCommRef(document.MAINFORM.NO_OF_PERIODS.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_SetCommRef = function() {
    try {

        var NO_OF_PERIODS; // Utility Auto Fix Comments
        NO_OF_PERIODS = SYS_BeInt(document.MAINFORM.NO_OF_PERIODS.value);

        if (NO_OF_PERIODS < 10) {
            ref = '-0' + NO_OF_PERIODS;
        } else {
            ref = '-' + NO_OF_PERIODS;
        }

        document.MAINFORM.COMM_REF.value = document.MAINFORM.C_MAIN_REF.value + ref;
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY = function() {
    try {

        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var chgObj; // Utility Auto Fix Comments
        var org_bal; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        org_bal = document.MAINFORM.COMM_BAL.value;
        SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
        SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');

        switch (document.MAINFORM.CHG_POLICY.value) {
            case 'Part in Advance':
                ISS_COMM.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                document.MAINFORM.CURRENT_COMM.value = org_bal;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM.protectChargeFor();
                ISS_COMM.protectChargeAt();
                ISS_COMM._protectActiveAmt(); // Utility Auto Fix Comments
                ISS_COMM._protectCollectAmt(); // Utility Auto Fix Comments
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
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(org_bal) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                chgObj = Chg.Screen.getDefChargeByCommCode('GTEE_ISS_COMM_WEEK');
                if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
                    chgObj.setActiveAmt(document.MAINFORM.COMM_BAL.value);
                    chgObj.setBalAmt(document.MAINFORM.COMM_BAL.value);
                }
                ISS_COMM_WEEK.protectChargeFor();
                ISS_COMM_WEEK.protectChargeAt();
                ISS_COMM_WEEK._protectActiveAmt(); // Utility Auto Fix Comments
                ISS_COMM_WEEK._protectCollectAmt(); // Utility Auto Fix Comments
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
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(org_bal) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                chgObj = Chg.Screen.getDefChargeByCommCode('GTEE_ISS_COMM_MONTH'); // Utility Auto Fix Comments
                if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
                    chgObj.setActiveAmt(document.MAINFORM.COMM_BAL.value);
                    chgObj.setBalAmt(document.MAINFORM.COMM_BAL.value);
                }
                ISS_COMM_MONTH.protectChargeFor();
                ISS_COMM_MONTH.protectChargeAt();
                ISS_COMM_MONTH._protectActiveAmt(); // Utility Auto Fix Comments
                ISS_COMM_MONTH._protectCollectAmt(); // Utility Auto Fix Comments
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
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(org_bal) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                chgObj = Chg.Screen.getDefChargeByCommCode('GTEE_ISS_COMM_QUARTER'); // Utility Auto Fix Comments
                if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
                    chgObj.setActiveAmt(document.MAINFORM.COMM_BAL.value);
                    chgObj.setBalAmt(document.MAINFORM.COMM_BAL.value);
                }
                ISS_COMM_QUARTER.protectChargeFor();
                ISS_COMM_QUARTER.protectChargeAt();
                ISS_COMM_QUARTER._protectActiveAmt(); // Utility Auto Fix Comments
                ISS_COMM_QUARTER._protectCollectAmt(); // Utility Auto Fix Comments
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
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(org_bal) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                chgObj = Chg.Screen.getDefChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR'); // Utility Auto Fix Comments
                if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
                    chgObj.setActiveAmt(document.MAINFORM.COMM_BAL.value);
                    chgObj.setBalAmt(document.MAINFORM.COMM_BAL.value);
                }
                ISS_COMM_HALF_YEAR.protectChargeFor();
                ISS_COMM_HALF_YEAR.protectChargeAt();
                ISS_COMM_HALF_YEAR._protectActiveAmt(); // Utility Auto Fix Comments
                ISS_COMM_HALF_YEAR._protectCollectAmt(); // Utility Auto Fix Comments
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
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(org_bal) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                chgObj = Chg.Screen.getDefChargeByCommCode('GTEE_ISS_COMM_YEAR'); // Utility Auto Fix Comments
                if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
                    chgObj.setActiveAmt(document.MAINFORM.COMM_BAL.value);
                    chgObj.setBalAmt(document.MAINFORM.COMM_BAL.value);
                }
                ISS_COMM_YEAR.protectChargeFor();
                ISS_COMM_YEAR.protectChargeAt();
                ISS_COMM_YEAR._protectActiveAmt(); // Utility Auto Fix Comments
                ISS_COMM_YEAR._protectCollectAmt(); // Utility Auto Fix Comments
                break;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //SYT_ShowBlankRow('BENE_blankRow',1);
        SYT_ShowBlankRow('INDE', 1);
        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM", "GTEE_CCY");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            //SYF_GTEE_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY();
            SYF_GTEE_CAL_ISS_COMM_NEW(); // Utility Auto Fix Comments
            SYM_GTEE_Cal_NXT_COMM_DT();
            SYF_GTEE_For_Part_In_Advance_Comm();
        }
        SYT_DisableDivClass('B_div');
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_For_Part_In_Advance_Comm = function() {
    try {

        var ISS_COMM; // Utility Auto Fix Comments
        var org_bal; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        if (document.MAINFORM.CHG_POLICY.value == 'Part in Advance') {
            SYT_ChangeFldClass_New('COMM_DT', 'M');
            org_bal = document.MAINFORM.COMM_BAL.value;
            document.MAINFORM.NO_OF_PERIODS.value = 0;
            document.MAINFORM.CURRENT_COMM.value = org_bal;
            document.MAINFORM.COMM_BAL.value = 0;
            document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
            document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
            if (document.MAINFORM.CURRENT_COMM.value != 0) {
                Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", document.MAINFORM.CURRENT_COMM.value);
            }
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CAL_ISS_COMM_NEW = function() {
    try {

        var ISS_COMM; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chgObj; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var org_bal; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        var terms; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        terms = document.MAINFORM.CHG_POLICY.value;
        if (terms == 'Weekly' || terms == 'Monthly' || terms == 'Quarterly' || terms == 'Half yearly' || terms == 'Yearly') {
            org_bal = document.MAINFORM.COMM_BAL.value;
            document.MAINFORM.CURRENT_COMM.value = document.MAINFORM.CURRENT_COMM_TEMP.value;
            document.MAINFORM.COMM_BAL.value = SYS_BeFloat(org_bal) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
            if (document.MAINFORM.COMM_BAL.value < 0) {
                document.MAINFORM.COMM_BAL.value = 0;
            }
            document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
            document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);

            arr = ['GTEE_ISS_COMM'];
            amt = document.MAINFORM.GTEE_AMT.value;
            ccy = document.MAINFORM.GTEE_CCY.value;
            sDate = document.MAINFORM.COMM_START_DT.value;
            eDate = document.MAINFORM.COMM_END_DT.value;
            if (sDate == '' || eDate == '') {
                return;
            }
            Chg.calculate(arr, ccy, amt, sDate, eDate, '', '', '');

            chgObj = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
            if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
                chgObj.setActiveAmt(document.MAINFORM.CURRENT_COMM.value);
                chgObj.setCollectAmt(document.MAINFORM.CURRENT_COMM.value);
                chgObj.setPayAmt(document.MAINFORM.CURRENT_COMM.value);
            }
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLBANK_onclick = function(event) {
    try {
        SYM_GTEE_APPL_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENEFICIARYBANK_onclick = function(event) {
    try {
        SYM_GTEE_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_POLICY_onchange = function(event) {
    try {
        //SYF_GTEE_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY();
        SYF_GTEE_CAL_ISS_COMM_NEW();
        SYM_GTEE_Cal_NXT_COMM_DT();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_BAL_onchange = function(event) {
    try {
        document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_DT_onchange = function(event) {
    try {
        SYM_GTEE_Cal_NXT_COMM_DT();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CURRENT_COMM_onchange = function(event) {
    try {
        document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DOCS_PRESENTED_BY_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMNBANK_onclick = function(event) {
    try {
        SYM_GTEE_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_onchange = function(event) {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
        /*
if(SYS_ORG_FUNCTION_NAME == 'RegisterGuarantee'){
JACK 0919 GTEE
SYM_GTEE_Set_Risk_Party_Info();
document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
}
*/
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_GTEE_SND_TO_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TOTAL_ISS_COMM_onchange = function(event) {
    try {
        document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_CollectPeriodComm.js", e);
    }
}