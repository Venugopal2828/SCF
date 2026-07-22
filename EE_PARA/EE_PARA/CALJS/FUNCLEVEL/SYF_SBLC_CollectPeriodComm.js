var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_SBLC_CAL_ISS_COMM_NEW = function() {
    try {

        var ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        var terms = document.MAINFORM.CHG_POLICY.value;
        if (terms == 'Weekly' || terms == 'Monthly' || terms == 'Quarterly' || terms == 'Half yearly' || terms == 'Yearly') {
            var org_bal = document.MAINFORM.COMM_BAL.value;
            document.MAINFORM.CURRENT_COMM.value = document.MAINFORM.CURRENT_COMM_TEMP.value;
            document.MAINFORM.COMM_BAL.value = SYS_BeFloat(org_bal) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
            if (document.MAINFORM.COMM_BAL.value < 0) {
                document.MAINFORM.COMM_BAL.value = 0;
            }
            document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
            document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
            var arr = ['GTEE_ISS_COMM'];
            var amt = document.MAINFORM.LC_AMT.value;
            var ccy = document.MAINFORM.LC_CCY.value;
            var sDate = document.MAINFORM.COMM_START_DT.value;
            var eDate = document.MAINFORM.COMM_END_DT.value;
            if (sDate == '' || eDate == '') {
                return;
            }
            Chg.calculate(arr, ccy, amt, sDate, eDate, '', '', '');

            var chgObj = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
            if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
                chgObj.setActiveAmt(document.MAINFORM.CURRENT_COMM.value);
                chgObj.setCollectAmt(document.MAINFORM.CURRENT_COMM.value);
                chgObj.setPayAmt(document.MAINFORM.CURRENT_COMM.value);
            }
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Cal_NO_OF_PERIODS = function(ref) {
    try {

        var NO_OF_PERIODS = SYS_BeInt(document.MAINFORM.NO_OF_PERIODS.value);
        if (NO_OF_PERIODS == "" || NO_OF_PERIODS == 0) {
            document.MAINFORM.NO_OF_PERIODS.value = 1;
        } else {
            document.MAINFORM.NO_OF_PERIODS.value = NO_OF_PERIODS + 1;
        }
        SYF_SBLC_SetCommRef(document.MAINFORM.NO_OF_PERIODS.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_For_Part_In_Advance_Comm = function() {
    try {

        var ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        if (document.MAINFORM.CHG_POLICY.value == 'Part in Advance') {
            SYT_ChangeFldClass_New('COMM_DT', 'M');
            var org_bal = document.MAINFORM.COMM_BAL.value;
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
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_SBLC_Cal_NO_OF_PERIODS();
        document.MAINFORM.COMM_DT.value = document.MAINFORM.NXT_COMM_DT.value;
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM", "LC_CCY");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_SBLC_CAL_ISS_COMM_NEW();
            SYM_SBLC_Cal_NXT_COMM_DT();
            SYF_SBLC_For_Part_In_Advance_Comm();
        }
        SYT_DisableDivClass('B_div');
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_SetCommRef = function() {
    try {

        var NO_OF_PERIODS = SYS_BeInt(document.MAINFORM.NO_OF_PERIODS.value);

        if (NO_OF_PERIODS < 10) {
            ref = '-0' + NO_OF_PERIODS;
        } else {
            ref = '-' + NO_OF_PERIODS;
        }

        document.MAINFORM.COMM_REF.value = document.MAINFORM.C_MAIN_REF.value + ref;
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_POLICY_onchange = function(event) {
    try {
        SYF_SBLC_CAL_ISS_COMM_NEW();
        SYM_SBLC_Cal_NXT_COMM_DT();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_COMM_BAL_onchange = function(event) {
    try {
        document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_COMM_DT_onchange = function(event) {
    try {
        SYM_SBLC_Cal_NXT_COMM_DT();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CURRENT_COMM_onchange = function(event) {
    try {
        document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_TOTAL_ISS_COMM_onchange = function(event) {
    try {
        document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SBLC_CollectPeriodComm.js", e);
    }
}