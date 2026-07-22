var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        enableToolbarButton("_predoc");
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Caluculating_NEW_EXP_DT_based_on_FREQUENCY = function() {
    try {

        if (document.MAINFORM.EXPIRY_DT.value != '') {

            var EXPIRY_DT = new Date(document.MAINFORM.EXPIRY_DT.value);
            var NEW_EXPIRTY_DT = new Date(document.MAINFORM.EXPIRY_DT.value);

            var tempDate = NEW_EXPIRTY_DT.getDate();
            var tempYear = NEW_EXPIRTY_DT.getFullYear();
            var tempMonth = NEW_EXPIRTY_DT.getMonth();


            if (document.MAINFORM.FREQUENCY.value == "ANNUAL") {
                NEW_EXPIRTY_DT.setYear(tempYear + 1);
            }
            if (document.MAINFORM.FREQUENCY.value == "SEMIANNUAL") {

                NEW_EXPIRTY_DT.setMonth(tempMonth + 6);
            }
            if (document.MAINFORM.FREQUENCY.value == "QUARTER") {
                NEW_EXPIRTY_DT.setMonth(tempMonth + 3);
            }
            if (document.MAINFORM.FREQUENCY.value == "MONTH") {
                NEW_EXPIRTY_DT.setMonth(tempMonth + 1);
            }
            var FINAL_RESU = NEW_EXPIRTY_DT.getMonth() + "-" + NEW_EXPIRTY_DT.getDate() + "-" + NEW_EXPIRTY_DT.getFullYear();
            document.MAINFORM.EXPIRY_DT.value = FINAL_RESU;


        }
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CAL_NOTIFICATION_DATE = function() {
    try {

        if (document.MAINFORM.NOTIFY_DAYS.value != '') {

            var NOTIFY_DAYS = document.MAINFORM.NOTIFY_DAYS.value;
            var NEW_EXPIRY_DATE = new Date(document.MAINFORM.NEW_EXPIRY_DT.value);
            var NEW_NOTIFY_DATE = new Date(document.MAINFORM.NEW_EXPIRY_DT.value);
            var date1 = NEW_NOTIFY_DATE.getDate();
            var month = NEW_NOTIFY_DATE.getMonth();
            NEW_NOTIFY_DATE.setDate(date1 - NOTIFY_DAYS);
            var Tempdate = NEW_NOTIFY_DATE.getDate();
            var Tempmonth = NEW_NOTIFY_DATE.getMonth();
            if (Tempmonth < 9) {

                Tempmonth = Tempmonth + 1;
                Tempmonth = "0" + Tempmonth;
            } else {
                Tempmonth = Tempmonth + 1;
            }
            if (Tempdate < 9) {
                Tempdate = "0" + Tempdate;
            }
            var NOTIFY_DATE_FINAL = Tempmonth + "-" + Tempdate + "-" + NEW_NOTIFY_DATE.getFullYear();
            document.MAINFORM.NOTIFY_DAYS.value = NOTIFY_DATE_FINAL;
            var nDAYS = SYS_GetSubDays(document.MAINFORM.NOTIFY_DAYS.name, document.MAINFORM.EXPIRY_DT.name);
            if (nDAYS >= 0) {
                // alert message
                document.MAINFORM.NOTIFY_DATE.value = "";
                document.MAINFORM.NOTIFY_DAYS.value = "";

            } else {
                document.MAINFORM.NOTIFY_DATE.value = NOTIFY_DATE_FINAL;
            }
            if (document.MAINFORM.NOTIFY_DAYS.value == '' || document.MAINFORM.NOTIFY_DAYS.value == '0') {
                document.MAINFORM.NOTIFY_DATE.value = '';

            }
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_SBLC_Caluculating_NEW_EXP_DT_based_on_FREQUENCY();
        SYF_SBLC_DAYS_TO_RENEWAL();
        SYF_SBLC_CAL_NOTIFICATION_DATE();
        SYF_SBLC_CAL_NOTIF_ADV_PERIOD();
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CAL_NOTIF_ADV_PERIOD = function() {
    try {

        if (document.MAINFORM.NRENEW_ADV_PERIOD.value != '') {

            var nonrenewalperiod = document.MAINFORM.NRENEW_ADV_PERIOD.value;
            var newexpirydate = new Date(document.MAINFORM.NEW_EXPIRY_DT.value);
            var nonrenewaldate = new Date(document.MAINFORM.NEW_EXPIRY_DT.value);
            var date1 = NEW_NOTIFY_DATE.getDate();
            var month = NEW_NOTIFY_DATE.getMonth();
            nonrenewaldate.setDate(date1 - NOTIFY_DAYS);
            var Tempdate = nonrenewaldate.getDate();
            var Tempmonth = nonrenewaldate.getMonth();
            if (Tempmonth < 9) {

                Tempmonth = Tempmonth + 1;
                Tempmonth = "0" + Tempmonth;
            } else {
                Tempmonth = Tempmonth + 1;

            }
            if (Tempdate < 9) {
                Tempdate = "0" + Tempdate;
            }
            var nonrenewaldatefinal = Tempmonth + "-" + Tempdate + "-" + nonrenewaldate.getFullYear();
            document.MAINFORM.NRENEW_ADV_DATE.value = nonrenewaldatefinal;
            var nDAYS = SYS_GetSubDays(document.MAINFORM.NOTIFY_DATE.name, document.MAINFORM.NRENEW_ADV_DATE.name);
            if (nDAYS < 0) {
                document.MAINFORM.NRENEW_ADV_DATE.value = "";
                document.MAINFORM.NRENEW_ADV_PERIOD.value = "";
            }
            if (document.MAINFORM.NRENEW_ADV_PERIOD.value == '' || document.MAINFORM.NRENEW_ADV_PERIOD.value == '0') {
                document.MAINFORM.NRENEW_ADV_DATE.value = '';
            }
            if (document.MAINFORM.NOTIFY_DAYS.value == '' || document.MAINFORM.NOTIFY_DAYS.value == '0') {
                var nDAYS1 = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.NRENEW_ADV_DATE.name);
                if (nDAYS1 < 0) {
                    document.MAINFORM.NRENEW_ADV_DATE.value = '';
                    document.MAINFORM.NRENEW_ADV_PERIOD.value = '';
                }
            }



        }
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_DAYS_TO_RENEWAL = function() {
    try {

        if (document.MAINFORM.EXPIRY_DT.value != '') {

            var nDAYS = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.NEW_EXPIRY_DT.name);
            if (nDAYS <= 0) {
                document.MAINFORM.RENEWAL_DAYS.value = '';
            } else if (nDAYS > 0) {

                document.MAINFORM.RENEWAL_DAYS.value = nDAYS;
            }
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_Query_Button_onclick = function(event) {
    try {
        ComplianceCheck();
    } catch (e) {
        DisExcpt("SYF_SBLC_AutoRenewal.js", e);
    }
}