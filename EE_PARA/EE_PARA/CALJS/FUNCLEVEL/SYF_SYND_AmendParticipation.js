var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
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
            SYM_SYND_Cal_Chg_Screen_Leader();
            document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        }
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, 'P');
        Chg.Screen.protectAllChargeFor();
        CHG_DefCharge_chargeAtOnchange();
        var other_Chg = Chg.Screen.getTrxChargeByCommCode('OTHER_CHG');
        var obj = $(other_Chg._getFldId(Chg.FLD_ACTIVE_CCY));
        obj.className = 'CHAR_P';
        obj.disabled = true;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_NEW_PCPT_EXPIRY_DT = function() {
    try {

        var PCPT_START_DT = document.MAINFORM.PCPT_START_DT.value;
        var GRACE_DAYS = document.MAINFORM.GRACE_DAYS.value;
        if (PCPT_START_DT != '' && GRACE_DAYS != '') {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, PCPT_START_DT, GRACE_DAYS, SYF_SYND_Calback_NEW_PCPT_EXPIRY_DT);
        } else {
            document.MAINFORM.NEW_PCPT_EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Calback_NEW_PCPT_EXPIRY_DT = function(newexdt) {
    try {

        document.MAINFORM.NEW_PCPT_EXPIRY_DT.value = newexdt;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_PCPT_AMT = function() {
    try {

        var PCPT_AMT = SYS_BeFloat(document.MAINFORM.NEW_PCPT_AMT.value) + SYS_BeFloat(document.MAINFORM.INC_PCPT_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_PCPT_AMT.value);
        if (SYS_BeFloat(PCPT_AMT) < 0) {
            alert("Decrease amount should not exceed the participation amount!")
            document.MAINFORM.DEC_PCPT_AMT.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.INC_PCPT_AMT, 'O');
        } else {
            document.MAINFORM.PCPT_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, PCPT_AMT);
            document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Chk_PCPT_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.PCPT_AMT.value) > SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value)) {
            SYS_CheckError(document.MAINFORM.PCPT_AMT, 'Participation amount should not exceed the master risk amount!');
            document.MAINFORM.INC_PCPT_AMT.value = 0;
            SYM_SYND_INC_DEC_PCPT_AMT();
            document.MAINFORM.DEC_PCPT_AMT.value = 0;
            SYM_SYND_INC_DEC_PCPT_AMT();
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.NEW_PCPT_AMT.value = document.MAINFORM.PCPT_AMT.value;
        document.MAINFORM.CHARGES.value = '';
        document.MAINFORM.CHG_DESC.value = '';
        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        document.MAINFORM.NEW_MAST_END_DT.value = document.MAINFORM.MAST_END_DT.value;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_PCPT_AMT = function() {
    try {

        SYF_SYND_Chk_PCPT_AMT();

        SYF_SYND_PCPT_AMT();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.PCPT_AMT.value) > SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value)) {
            alert("Participation amount should not exceed the master risk amount!");
            return false;
        } else {
            // document.MAINFORM.PCPT_BAL.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, document.MAINFORM.PCPT_AMT.value);
            return true;

        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.PCPT_BAL.value = document.MAINFORM.PCPT_AMT.value;
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AMT_SPEC_onchange = function(event) {
    try {
        var amtSpc = document.MAINFORM.AMT_SPEC.value;
        document.MAINFORM.POS_TOL.value = '';
        document.MAINFORM.NEG_TOL.value = '';
        if (amtSpc == "NOT EXCEEDING" || amtSpc == '') {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
            document.MAINFORM.POS_TOL.value = 0;
            document.MAINFORM.NEG_TOL.value = 0;
            FLD_SYND_DEC_MAST_LC_AMT_onchange();
            FLD_SYND_INC_MAST_LC_AMT_onchange();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DEC_MAST_LC_AMT_onchange = function(event) {
    try {
        var pos_tol = document.MAINFORM.POS_TOL.value;
        var neg_tol = document.MAINFORM.NEG_TOL.value;
        if (SYS_BeFloat(document.MAINFORM.DEC_MAST_LC_AMT.value) < 0) {
            alert("Decrease amount should not accept negative values");
            document.MAINFORM.DEC_MAST_LC_AMT.value = '';
        } else {
            SYM_SYND_INC_DEC_MAST_LC_AMT();
            SYM_SYND_Cal_MAST_RISK_AMT();
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DEC_PCPT_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.DEC_PCPT_AMT.value) < 0) {
            alert("Decrease amount should not accept negative values");
            document.MAINFORM.DEC_PCPT_AMT.value = 0;
        } else {
            SYM_SYND_INC_DEC_PCPT_AMT();
            SYF_SYND_PCPT_AMT();
            SYF_SYND_Chk_PCPT_AMT();
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_GRACE_DAYS_onchange = function(event) {
    try {
        SYF_SYND_Cal_NEW_PCPT_EXPIRY_DT();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_INC_MAST_LC_AMT_onchange = function(event) {
    try {
        var pos_tol = document.MAINFORM.POS_TOL.value;
        var neg_tol = document.MAINFORM.NEG_TOL.value;
        if (SYS_BeFloat(document.MAINFORM.INC_MAST_LC_AMT.value) < 0) {
            alert("Increase amount should not accept negative values");
            document.MAINFORM.INC_MAST_LC_AMT.value = '';
        } else {
            SYM_SYND_INC_DEC_MAST_LC_AMT();
            SYM_SYND_Cal_MAST_RISK_AMT();
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_INC_PCPT_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.INC_PCPT_AMT.value) < 0) {
            alert("Increase amount should not accept negative values");
            document.MAINFORM.INC_PCPT_AMT.value = 0;
        } else {
            SYM_SYND_INC_DEC_PCPT_AMT();
            SYF_SYND_PCPT_AMT();
            SYF_SYND_Cal_PCPT_AMT();
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_SYND_Cal_LEAD_BK_ADD();
        SYM_SYND_LEAD_CORR_MED();
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'MAST_END_DT');
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_ADD_ORDER_NO_onchange = function(event) {
    try {
        Cal_LEAD_BK_ADD_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_ID_onchange = function(event) {
    try {
        SYM_SYND_Get_LEAD_BK_ID();
        SYM_SYND_LEAD_BK_SW_TAG();
        SYM_SYND_LEAD_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_SYND_Cal_LEAD_BK_ID();
        SYM_SYND_LEAD_CORR_MED();
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'MAST_END_DT');
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_SYND_LEAD_BK_SW_TAG();
        SYM_SYND_Cal_LEAD_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_CORR_MED_onchange = function(event) {
    try {
        SYM_SYND_LEAD_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
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
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
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
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_LIAB_ACNO_onchange = function(event) {
    try {
        var chkAcno = document.MAINFORM.LEAD_LIAB_ACNO.value;
        if (SYM_SYND_chk_faxNo(chkAcno)) {
            alert("enter valid Account number");
            document.MAINFORM.LEAD_LIAB_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_MAIL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('LEAD_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LEAD_MAIL_ADD_ORDER_NO_onchange = function(event) {
    try {
        Cal_LEAD_MAIL_ADD_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_LTST_SHIP_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.NEW_MAST_END_DT.name, document.MAINFORM.LTST_SHIP_DT.name);
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
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MAST_LC_AMT_onchange = function(event) {
    try {
        SYM_SYND_Cal_MAST_RISK_AMT();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MAST_START_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.NEW_MAST_END_DT.name, document.MAINFORM.MAST_START_DT.name);
        if (nDays > 0) {
            alert("Issue date should not accept after Expiry date");
            document.MAINFORM.MAST_START_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_NEG_TOL_onchange = function(event) {
    try {
        var inc_amt;
        var dec_amt;
        inc_amt = document.MAINFORM.INC_MAST_LC_AMT.value;
        dec_amt = document.MAINFORM.DEC_MAST_LC_AMT.value;
        SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
        var neg = parseFloat(document.MAINFORM.NEG_TOL.value);
        var riskamt = document.MAINFORM.MAST_RISK_AMT.value;
        var decamt;
        if (riskamt <= 0) {
            alert("please give the master amount");
        } else if (neg > 0 && document.MAINFORM.AMT_SPEC.value == 'ABOUT') {
            decamt = (SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) + SYS_BeFloat(inc_amt) - SYS_BeFloat(dec_amt)) * SYS_BeFloat(neg) / 100;
            riskamt = SYS_BeFloat(riskamt) - SYS_BeFloat(decamt);
            document.MAINFORM.MAST_RISK_AMT.value = riskamt;
            document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(riskamt, document.MAINFORM.MAST_RISK_AMT.value);
        } else if (neg == 0 || isNaN(neg)) {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
            document.MAINFORM.POS_TOL.value = 0;
            document.MAINFORM.NEG_TOL.value = 0;
            document.MAINFORM.MAST_RISK_AMT.value = document.MAINFORM.MAST_LC_AMT.value;
            if (SYS_BeFloat(inc_amt) > 0) {
                FLD_SYND_INC_MAST_LC_AMT_onchange();
            }
            if (SYS_BeFloat(dec_amt) > 0) {
                FLD_SYND_DEC_MAST_LC_AMT_onchange();
            }
            //EEHtml.fireEvent(document.MAINFORM.MAST_RISK_AMT, 'onchange');
        } else {
            document.MAINFORM.NEG_TOL.value = 0;
            alert("Incorrect amount specification or master amount ");
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_NEW_MAST_END_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.MAST_START_DT.value == "") {
            alert("please check  Issue date !!!");
            document.MAINFORM.NEW_MAST_END_DT.value = document.MAINFORM.MAST_END_DT.value;
        } else {
            var nDays = SYS_GetSubDays(document.MAINFORM.NEW_MAST_END_DT.name, document.MAINFORM.MAST_START_DT.name);
            if (nDays > 0) {
                alert("New Expiry date should not accept before Issue date");
                document.MAINFORM.NEW_MAST_END_DT.value = '';
                return false;
            } else {
                SYS_CheckHoliday(SYS_BANK_COUNTRY, 'NEW_MAST_END_DT');
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_NEW_PCPT_AMT_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.PCPT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_NEW_PCPT_EXPIRY_DT_onchange = function(event) {
    try {
        var nDays1 = SYS_GetSubDays(document.MAINFORM.NEW_PCPT_EXPIRY_DT.name, document.MAINFORM.PCPT_START_DT.name);
        if (nDays1 > 0) {
            alert("New Expiry date should not accept before participation start date");
            document.MAINFORM.NEW_PCPT_EXPIRY_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_PCPT_CCY_onchange = function(event) {
    try {
        SYF_SYND_PCPT_AMT();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
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
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
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
            SYF_SYND_Cal_NEW_PCPT_EXPIRY_DT();
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_POS_TOL_onchange = function(event) {
    try {
        var inc_amt;
        var dec_amt;
        inc_amt = document.MAINFORM.INC_MAST_LC_AMT.value;
        dec_amt = document.MAINFORM.DEC_MAST_LC_AMT.value;
        SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
        var pos = parseFloat(document.MAINFORM.POS_TOL.value);
        var riskamt = document.MAINFORM.MAST_RISK_AMT.value;
        var incamt;
        if (riskamt <= 0) {
            alert("please give the master amount");
        } else if (pos > 0 && document.MAINFORM.AMT_SPEC.value == 'ABOUT') {
            incamt = (SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) + SYS_BeFloat(inc_amt) - SYS_BeFloat(dec_amt)) * SYS_BeFloat(pos) / 100;
            riskamt = SYS_BeFloat(riskamt) + SYS_BeFloat(incamt);
            document.MAINFORM.MAST_RISK_AMT.value = riskamt;
            document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(riskamt, document.MAINFORM.MAST_RISK_AMT.value);
        } else if (pos == 0 || isNaN(pos)) {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
            document.MAINFORM.POS_TOL.value = 0;
            document.MAINFORM.NEG_TOL.value = 0;
            document.MAINFORM.MAST_RISK_AMT.value = document.MAINFORM.MAST_LC_AMT.value;
            if (SYS_BeFloat(inc_amt) > 0) {
                FLD_SYND_INC_MAST_LC_AMT_onchange();
            }
            if (SYS_BeFloat(dec_amt) > 0) {
                FLD_SYND_DEC_MAST_LC_AMT_onchange();
            }
        } else {
            document.MAINFORM.POS_TOL.value = 0;
            alert("Incorrect amount specification or master amount ");
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_SYND_Cal_SYND_AC_WT_BK_ADD1();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_ID_onchange = function(event) {
    try {
        SYM_SYND_Get_SYND_AC_WT_BK_ID();
        SYM_SYND_SYND_ACWT_BK_SWTAG();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_SYND_Cal_SYND_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_SWAD_onchange = function(event) {
    try {
        SYM_SYND_SYND_ACWT_BK_SWTAG();
        SYM_SYND_Cal_SYND_AC_WT_BK_SWAD();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}

csFuncLevelProto.FLD_SYND_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SYND_AmendParticipation.js", e);
    }
}