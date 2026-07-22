var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_SYND_SetRef = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
        SYF_SYND_Cal_C_MAIN_REF();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        /*if (SYS_BeFloat(document.MAINFORM.PCPT_AMT.value) > SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value)) {
            alert("Participation amount should not exceed the master amount!");
            return false;
        } else {
            document.MAINFORM.PCPT_BAL.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, document.MAINFORM.PCPT_AMT.value);
            return true;
        }*/
        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_PCPT_CCY = function() {
    try {

        document.MAINFORM.PCPT_CCY.value = document.MAINFORM.MAST_LC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Calback_PCPT_EXPIRY_DT = function(expirydt) {
    try {

        document.MAINFORM.PCPT_EXPIRY_DT.value = expirydt;
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_PCPT_EXPIRY_DT = function() {
    try {

        var PCPT_START_DT = document.MAINFORM.PCPT_START_DT.value;
        var GRACE_DAYS = document.MAINFORM.GRACE_DAYS.value;
        if (PCPT_START_DT != '') {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, PCPT_START_DT, GRACE_DAYS, SYF_SYND_Calback_PCPT_EXPIRY_DT);
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        Chg.Screen.mapLocalCust('LEAD_BK_ID', 'LEAD_BK_NM');
        SYT_Init_Notes(document.MAINFORM.LEAD_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.LEAD_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);
        if (SYS_FUNCTION_TYPE != 'RE') {
            Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
            document.MAINFORM.PCPT_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CHG_CCY.value, document.MAINFORM.PCPT_CHG_AMT.value);
            document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        }
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'P');
        Chg.Screen.protectAllChargeFor();
        CHG_DefCharge_chargeAtOnchange();
        var other_Chg = Chg.Screen.getTrxChargeByCommCode('OTHER_CHG');
        var obj = $(other_Chg._getFldId(Chg.FLD_ACTIVE_CCY));
        obj.className = 'CHAR_P';
        obj.disabled = true;
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_MAST_RISK_AMT = function() {
    try {

        var POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value) / 100;
        var MAST_RISK_AMT = SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value);
        if (POS_TOL > 0) {
            MAST_RISK_AMT = SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) * (1 + POS_TOL);
            document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, MAST_RISK_AMT);

        }
        if (POS_TOL == 0) {
            MAST_RISK_AMT = SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value);
            document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, MAST_RISK_AMT);

        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_C_MAIN_REF = function() {
    try {
//        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value.trim().substring(0, 11) + " ";
// Henry_Remove blank for Uipath purpose
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value.trim().substring(0, 11);
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('PART', 'SYF_SYND_SetRef');
        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        SYF_SYND_Cal_C_MAIN_REF();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CAL_SYND_PER = function() {
    try {

        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;

        var amt = SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value);
        if (amt != " " && SYS_BeFloat(amt)) {
            per = SYS_BeFloat(document.MAINFORM.PCPT_AMT.value) / SYS_BeFloat(amt) * 100;
            per = Math.round(per * 100) / 100;
            document.MAINFORM.SYND_PER.value = per;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CAL_PCPT_AMT = function() {
    try {

        var nPER = SYS_BeFloat(document.MAINFORM.SYND_PER.value);
        var nRISK_AMT = SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value);
        var nPCPT_AMT = SYS_BeFloat(nRISK_AMT * nPER / 100);
        document.MAINFORM.PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, nPCPT_AMT);
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AMT_SPEC_onchange = function(event) {
    try {
        var amtSpc = document.MAINFORM.AMT_SPEC.value;
        document.MAINFORM.POS_TOL.value = '';
        document.MAINFORM.NEG_TOL.value = '';
        document.MAINFORM.MAST_RISK_AMT.value = document.MAINFORM.MAST_LC_AMT.value;
        document.MAINFORM.PCPT_AMT.value = document.MAINFORM.MAST_RISK_AMT.value;
        document.MAINFORM.SYND_PER.value = 100;
        if (amtSpc == "NOT EXCEEDING") {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_GRACE_DAYS_onchange = function(event) {
    try {
        var graceDay; // Utility Auto Fix Comments
        graceDay = document.MAINFORM.GRACE_DAYS.value;
        if (graceDay == '') {
            graceDay = 0;
            document.MAINFORM.GRACE_DAYS.value = 0;
        }
        SYF_SYND_Cal_PCPT_EXPIRY_DT();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_SYND_Cal_LEAD_BK_ADD();
        SYM_SYND_LEAD_CORR_MED();
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'MAST_END_DT');
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.LEAD_TYPE.value != '') {
            SYM_SYND_Get_LEAD_BK_ID();
            SYM_SYND_LEAD_BK_SW_TAG();
            SYM_SYND_LEAD_CORR_MED();
        } else {
            document.MAINFORM.LEAD_BK_ID.value = '';
            alert("Please select the Leader Type");
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_ID_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.LEAD_TYPE.value != '') {
            SYM_SYND_Cal_LEAD_BK_ID();
            SYM_SYND_LEAD_CORR_MED();
            SYS_CheckHoliday(SYS_BANK_COUNTRY, 'MAST_END_DT');
        } else {
            alert("Please select the Leader Type");
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_SYND_LEAD_BK_SW_TAG();
        SYM_SYND_Cal_LEAD_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_CORR_MED_onchange = function(event) {
    try {
        SYM_SYND_LEAD_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_EML_ADD_onchange = function(event) {
    try {
        var chkemail = document.MAINFORM.LEAD_EML_ADD.value;
        if (SYM_SYND_CHK_EMAIL(chkemail)) {
            alert("enter valid email address");
            document.MAINFORM.LEAD_EML_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_FAX_NO_onchange = function(event) {
    try {
        var faxNo = document.MAINFORM.LEAD_FAX_NO.value;
        if (SYM_SYND_chk_faxNo(faxNo)) {
            alert("enter valid fax number");
            document.MAINFORM.LEAD_FAX_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_LIAB_ACNO_onchange = function(event) {
    try {
        var chkAcno = document.MAINFORM.LEAD_LIAB_ACNO.value;
        if (SYM_SYND_chk_faxNo(chkAcno)) {

            alert("Invalid Account number");
            document.MAINFORM.LEAD_LIAB_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_LIAB_ACNO_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('LEAD_LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_MAIL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('LEAD_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_TYPE_onchange = function(event) {
    try {
        document.MAINFORM.LEAD_BK_ID.value = '';
        SYM_SYND_Get_LEAD_BK_ID();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LTST_SHIP_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.MAST_END_DT.name, document.MAINFORM.LTST_SHIP_DT.name);
        // alert(nDays);
        var nDays1 = SYS_GetSubDays(document.MAINFORM.LTST_SHIP_DT.name, document.MAINFORM.MAST_START_DT.name);
        if (nDays > 0) {
            alert("Shipment date should not accept after expiry date");
            document.MAINFORM.LTST_SHIP_DT.value = '';
            return false;
        } else if (nDays1 > 0) {
            alert("Shipment date should not accept before Issue date");
            document.MAINFORM.LTST_SHIP_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MAST_END_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.MAST_START_DT.value == "") {
            alert("please check  Issue date !!!");
            document.MAINFORM.NEW_MAST_END_DT.value = '';
        } else {
            var nDays = SYS_GetSubDays(document.MAINFORM.MAST_END_DT.name, document.MAINFORM.MAST_START_DT.name);
            if (nDays > 0) {
                alert("New Expiry date should not accept before Issue date");
                document.MAINFORM.MAST_END_DT.value = '';
                return false;
            } else {
                SYS_CheckHoliday(SYS_BANK_COUNTRY, 'MAST_END_DT');
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MAST_LC_AMT_onchange = function(event) {
    try {
        var value = document.MAINFORM.MAST_LC_AMT.value;
        if (SYM_SYND_CHK_NEG_VAL(value)) {
            alert("Master LC amount should be positive value");
            document.MAINFORM.MAST_LC_AMT.value = '';
        } else {
            SYF_SYND_MAST_RISK_AMT();
            EEHtml.fireEvent(document.MAINFORM.MAST_RISK_AMT, 'onchange');
            if (document.MAINFORM.AMT_SPEC.value == 'ABOUT') {
                if (document.MAINFORM.POS_TOL.value > 0) {
                    FLD_SYND_POS_TOL_onchange();
                } else if (document.MAINFORM.NEG_TOL.value > 0) {
                    FLD_SYND_NEG_TOL_onchange();
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MAST_LC_CCY_onchange = function(event) {
    try {
        document.MAINFORM.LEAD_LIAB_ACNO.value = '';
        SYF_SYND_PCPT_CCY();
        SYF_SYND_MAST_RISK_AMT();
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MAST_RISK_AMT_onchange = function(event) {
    try {
        SYF_SYND_CAL_PCPT_AMT();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MAST_START_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.MAST_END_DT.name, document.MAINFORM.MAST_START_DT.name);
        if (nDays > 0) {
            alert("Issue date should not accept after Expiry date");
            document.MAINFORM.MAST_START_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MODULE_SELECT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_NEG_TOL_onchange = function(event) {
    try {
        document.MAINFORM.MAST_RISK_AMT.value = document.MAINFORM.MAST_LC_AMT.value;
        SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
        var neg = parseFloat(document.MAINFORM.NEG_TOL.value);
        var riskamt = document.MAINFORM.MAST_RISK_AMT.value;
        var decamt;
        if (riskamt <= 0) {
            alert("please give the master amount");
        } else if (neg > 0 && document.MAINFORM.AMT_SPEC.value == 'ABOUT') {
            decamt = SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) * SYS_BeFloat(neg) / 100;
            riskamt = SYS_BeFloat(riskamt) - SYS_BeFloat(decamt);
            document.MAINFORM.MAST_RISK_AMT.value = riskamt;
            document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(riskamt, document.MAINFORM.MAST_RISK_AMT.value);
            EEHtml.fireEvent(document.MAINFORM.MAST_RISK_AMT, 'onchange');
        } else if (neg == 0 || isNaN(neg)) {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
            document.MAINFORM.POS_TOL.value = 0;
            document.MAINFORM.NEG_TOL.value = 0;
            EEHtml.fireEvent(document.MAINFORM.MAST_RISK_AMT, 'onchange');
        } else {
            document.MAINFORM.NEG_TOL.value = 0;
            alert("Incorrect amount specification or master amount ");
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_PCPT_AMT_onchange = function(event) {
    try {
        var value = document.MAINFORM.PCPT_AMT.value;
        var mas_amt = document.MAINFORM.MAST_RISK_AMT.value;
        if (SYM_SYND_CHK_NEG_VAL(value)) {
            alert("Participation percentage should be positive value");
            document.MAINFORM.PCPT_AMT.value = document.MAINFORM.MAST_RISK_AMT.value;
        } else if (SYS_BeFloat(value) < SYS_BeFloat(mas_amt)) {
            SYM_SYND_Cal_Chg_Calculate();
            SYM_SYND_Cal_Chg_Calculate_Other();
            SYF_SYND_CAL_SYND_PER();
        } else if (SYS_BeFloat(mas_amt) > 0) {
            alert("Participation amount should be less than master risk amount ");
            document.MAINFORM.PCPT_AMT.value = document.MAINFORM.MAST_RISK_AMT.value;
            document.MAINFORM.SYND_PER.value = 100;
        } else {
            alert("Please give the master  amount ");
            document.MAINFORM.PCPT_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_PCPT_CCY_onchange = function(event) {
    try {
        SYM_SYND_Cal_Chg_Calculate();
        SYM_SYND_Cal_Chg_Calculate_Other();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_PCPT_CHG_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.PCPT_CHG_AMT.value) < 0) {
            alert("charge amount should not accept negative values");
            document.MAINFORM.PCPT_CHG_AMT.value = '';
        } else {
            SYM_SYND_PCPT_CHG_CCY();
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_PCPT_START_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.PCPT_START_DT.name, document.MAINFORM.MAST_START_DT.name);
        var nDays2 = SYS_GetSubDays(document.MAINFORM.MAST_END_DT.name, document.MAINFORM.PCPT_START_DT.name);
        if (nDays > 0) {
            alert("Participation Start Date should not before Issue Date");
            document.MAINFORM.PCPT_START_DT.value = '';
            return false;
        } else if (nDays2 > 0) {
            alert("Participation Start Date should not after Expiry Date");
            document.MAINFORM.PCPT_START_DT.value = '';
            return false;
        } else {
            SYF_SYND_Cal_PCPT_EXPIRY_DT();
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_POS_TOL_onchange = function(event) {
    try {
        document.MAINFORM.MAST_RISK_AMT.value = document.MAINFORM.MAST_LC_AMT.value;
        SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
        var pos = parseFloat(document.MAINFORM.POS_TOL.value);
        var riskamt = document.MAINFORM.MAST_RISK_AMT.value;
        var incamt;
        if (riskamt <= 0) {
            alert("please give the master amount");
        } else if (pos > 0 && document.MAINFORM.AMT_SPEC.value == 'ABOUT') {
            incamt = SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) * SYS_BeFloat(pos) / 100;
            riskamt = SYS_BeFloat(riskamt) + SYS_BeFloat(incamt);
            document.MAINFORM.MAST_RISK_AMT.value = riskamt;
            document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(riskamt, document.MAINFORM.MAST_RISK_AMT.value);
            EEHtml.fireEvent(document.MAINFORM.MAST_RISK_AMT, 'onchange');
        } else if (pos == 0 || isNaN(pos)) {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
            document.MAINFORM.POS_TOL.value = 0;
            document.MAINFORM.NEG_TOL.value = 0;
            EEHtml.fireEvent(document.MAINFORM.MAST_RISK_AMT, 'onchange');
        } else {
            document.MAINFORM.POS_TOL.value = 0;
            FLD_SYND_SYND_PER_onchange();
            alert("Incorrect amount specification or master amount ");
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_SYND_Cal_SYND_AC_WT_BK_ADD1();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_ID_onchange = function(event) {
    try {
        SYM_SYND_Get_SYND_AC_WT_BK_ID();

        SYM_SYND_SYND_ACWT_BK_SWTAG();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_SYND_Cal_SYND_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_SWAD_onchange = function(event) {
    try {
        SYM_SYND_SYND_ACWT_BK_SWTAG();
        SYM_SYND_Cal_SYND_AC_WT_BK_SWAD();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_PER_onchange = function(event) {
    try {
        var value = document.MAINFORM.SYND_PER.value;
        if (SYM_SYND_CHK_NEG_VAL(value)) {
            alert("Participation percentage should be positive value");
            document.MAINFORM.SYND_PER.value = 100;
        } else if (SYS_BeFloat(document.MAINFORM.SYND_PER.value) > 100) {
            alert("Invalid Participation percentage ");
            document.MAINFORM.SYND_PER.value = 0;
            document.MAINFORM.PCPT_AMT.value = 0;
        } else {
            SYF_SYND_CAL_PCPT_AMT();
        }
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SYND_RegParticipation.js", e);
    }
}