var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.SYND_PART_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SYND_PART_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);
        if ('RE' != SYS_FUNCTION_TYPE) {
            SYT_ChangeFldClass(document.MAINFORM.PART_MAIL_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_LIABACNO_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ID_BTN, 'P');
        }
        if (SYS_FUNCTION_TYPE == 'EC') {
            var amt = document.MAINFORM.SYND_CCY.value;
            document.MAINFORM.PCPT_AMT.value = SYT_AmtFormat(amt, document.MAINFORM.SYND_AMT.value);
        }
        document.MAINFORM.SYND_COMM_BAL.value = document.MAINFORM.SYND_TLUNPDCHG_BAL.value;
        SYF_SYND_Cal_COMM_DT();
        SYF_SYND_Cal_NXT_COMM_DT();
        var chkCommDate = FLD_SYND_COMM_DT_onchange();
        var chkNxtCommDate = FLD_SYND_NXT_COMM_DT_onchange();
        if (chkCommDate && chkNxtCommDate) {
            SYF_SYND_Cal_SYND_PERIOD_SYND_NO_OF_PERIODS();
            SYF_SYND_Cal_SYND_PERIOD_COMM();
        } else {
            SYF_SYND_Cal_COMM_DT();
            SYF_SYND_Cal_NXT_COMM_DT();
            if (!chkCommDate && !chkNxtCommDate) {
                document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
                document.MAINFORM.SYND_PERIOD.value = 0;
                SYF_SYND_Cal_SYND_PERIOD_COMM();
            } else {
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
                SYF_SYND_Cal_SYND_PERIOD_COMM();
            }
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_SYND_PERIOD_SYND_NO_OF_PERIODS = function() {
    try {

        var HALF_YEAR;
        var HALF_YEAR_1;
        var MONTH;
        var QUARTER;
        var QUARTER_1;
        var WEEK;
        var WEEK_1;
        var YEAR;
        var eDate;
        var sDate;
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        switch (document.MAINFORM.CHG_POLICY.value) {
            case 'Weekly':
                DAY = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'D');
                WEEK = Math.round(DAY / 7);
                WEEK_1 = DAY % 3;
                if (WEEK_1 > 0) {
                    WEEK += 1;
                }
                document.MAINFORM.SYND_PERIOD.value = WEEK;
                document.MAINFORM.SYND_NO_OF_PERIODS.value = SYS_FloatAdd(document.MAINFORM.NO_OF_PERIODS.value, 1);
                break;
            case 'Monthly':
                MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');
                document.MAINFORM.SYND_PERIOD.value = MONTH;
                document.MAINFORM.SYND_NO_OF_PERIODS.value = SYS_FloatAdd(document.MAINFORM.NO_OF_PERIODS.value, 1);
                break;
            case 'Quarterly':
                MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');
                QUARTER = Math.round(MONTH / 3);
                QUARTER_1 = MONTH % 3;
                if (QUARTER_1 > 0) {
                    QUARTER += 1;
                }
                document.MAINFORM.SYND_PERIOD.value = QUARTER;
                document.MAINFORM.SYND_NO_OF_PERIODS.value = SYS_FloatAdd(document.MAINFORM.NO_OF_PERIODS.value, 1);
                break;
            case 'Half yearly':
                MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');
                HALF_YEAR = Math.round(MONTH / 6);
                HALF_YEAR_1 = MONTH % 6;
                if (HALF_YEAR_1 > 0) {
                    HALF_YEAR += 1;
                }
                document.MAINFORM.SYND_PERIOD.value = HALF_YEAR;
                document.MAINFORM.SYND_NO_OF_PERIODS.value = SYS_FloatAdd(document.MAINFORM.NO_OF_PERIODS.value, 1);
                break;
            case 'Yearly':
                YEAR = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'Y');
                document.MAINFORM.SYND_PERIOD.value = YEAR;
                document.MAINFORM.SYND_NO_OF_PERIODS.value = SYS_FloatAdd(document.MAINFORM.NO_OF_PERIODS.value, 1);
                break;
            case 'All in Advance':
                SYT_ChangeFldClass(document.MAINFORM.COMM_START_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.COMM_DT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.COMM_END_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.NXT_COMM_DT, 'O');
                document.MAINFORM.SYND_PERIOD.value = 0;
                document.MAINFORM.SYND_NO_OF_PERIODS.value = 0;
                SYT_ChangeFldClass(document.MAINFORM.COMM_DT, 'P'); //added for#66639
                SYT_ChangeFldClass(document.MAINFORM.NXT_COMM_DT, 'P'); //added for#66639
                break;
            default:
                document.MAINFORM.SYND_PERIOD.value = 0;
                document.MAINFORM.SYND_NO_OF_PERIODS.value = 0;
                break;
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_SYND_PERIOD_COMM = function() {
    try {

        var nSYND_PERIOD;
        nSYND_PERIOD = SYS_BeFloat(document.MAINFORM.SYND_PERIOD.value);
        SYS_GetTableDataByRule_S('SYF_SYND_SYND_NotePartChg_SYF_SYND_Cal_SYND_PERIOD_COMM_0', '1', false);
        switch (document.MAINFORM.CHG_POLICY.value) {
            case 'All in Advance':
                document.MAINFORM.SYND_PERIOD_COMM.value = document.MAINFORM.SYND_TLUNPDCHG_AMT.value;
                SYT_ChangeFldClass(document.MAINFORM.SYND_PERIOD_COMM, 'P');
                break;
            case 'Part in Advance':
                document.MAINFORM.SYND_PERIOD_COMM.value = 0.00;
                SYT_ChangeFldClass(document.MAINFORM.SYND_PERIOD_COMM, 'M');
                break;
            case 'Weekly':
            case 'Monthly':
            case 'Quarterly':
            case 'Half yearly':
            case 'Yearly':
                document.MAINFORM.SYND_PERIOD_COMM.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, SYS_BeFloat(document.MAINFORM.SYND_TLUNPDCHG_AMT.value) / nSYND_PERIOD);
                SYT_ChangeFldClass(document.MAINFORM.SYND_PERIOD_COMM, 'P');
                break;
            default:
                document.MAINFORM.SYND_PERIOD_COMM.value = 0;
                SYT_ChangeFldClass(document.MAINFORM.SYND_PERIOD_COMM, 'P');
                break;
        }
        EEHtml.fireEvent(document.MAINFORM.SYND_PERIOD_COMM, "onchange");
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.SOURCE_REF.value;
        document.MAINFORM.NO_OF_PERIODS.value = document.MAINFORM.SYND_NO_OF_PERIODS.value;
        SYF_SYND_CAL_PMT_FLG_BY_AVAL_BY();
        if (SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) == SYS_BeFloat(document.MAINFORM.FUND_AMT.value)) {
            document.MAINFORM.FUND_FLAG.value = 'Funded';
        } else if (SYS_BeFloat(document.MAINFORM.FUND_AMT.value) > 0) {
            document.MAINFORM.FUND_FLAG.value = 'PARTFUNDED';
        } else {
            document.MAINFORM.FUND_FLAG.value = 'Unfunded';
        }
        EEHtml.fireEvent(document.MAINFORM.CHG_POLICY, "onchange");
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_COMM_DT = function() {
    try {

        var _yyy; // Utility Auto Fix Comments
        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var new_dt_month; // Utility Auto Fix Comments
        var new_dt_year; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments

        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }

        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');
        unit_code = SYS_ORI_UNIT_CODE;

        _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments

        if (document.MAINFORM.COMM_START_DT.value == '') {
            return;
        }

        year = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));

        month = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_M, Last_M - Fist_M + 1));

        day = document.MAINFORM.COMM_START_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
        new_dt_year = year;
        new_dt_month = month;

        if (document.MAINFORM.CHG_POLICY.value == 'Monthly') {
            new_dt_month = month + 1; // Utility Auto Fix Comments
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Quarterly') {
            new_dt_month = month + 3; // Utility Auto Fix Comments
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Half yearly') {
            new_dt_month = month + 6; // Utility Auto Fix Comments
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Yearly') {
            new_dt_year = year + 1;
        }

        if (new_dt_month < 10) {
            new_dt_month = +new_dt_month.toString();
        }

        if (((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg')) && new_dt_month < 10) {
            new_dt_month = '0' + new_dt_month.toString();
        }

        if (Fist_Y < Fist_M) {
            if (Fist_M < Fist_D) {
                document.MAINFORM.COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
            }
        } else {
            if (Fist_M < Fist_D) {
                document.MAINFORM.COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            } else {
                document.MAINFORM.COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            }
        }
        if (document.MAINFORM.CHG_POLICY.value == 'Weekly') {
            SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '7', document.MAINFORM.COMM_DT.name, 'A', 'N', 'N');
        }
        if (document.MAINFORM.CHG_POLICY.value == 'Per Event') {
            document.MAINFORM.COMM_DT.value = '';
            document.MAINFORM.NXT_COMM_DT.value = '';
        }
        if (document.MAINFORM.CHG_POLICY.value == "All in Advance") {
            document.MAINFORM.NXT_COMM_DT.value = '';
            document.MAINFORM.COMM_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_NXT_COMM_DT = function() {
    try {

        var CHG_POLICY; // Utility Auto Fix Comments
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var _yyy; // Utility Auto Fix Comments
        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var START_DT; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments 
        var month; // Utility Auto Fix Comments
        var new_dt_month; // Utility Auto Fix Comments
        var new_dt_year; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        unit_code = SYS_ORI_UNIT_CODE;
        START_DT = document.MAINFORM.COMM_DT.value;
        CHG_POLICY = document.MAINFORM.CHG_POLICY.value;
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);

        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }

        if (START_DT == '') {
            return;
        }

        if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg')) {

            Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
            Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
            Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
            Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
            Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
            Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');

            _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments

            if (document.MAINFORM.COMM_DT.value == '') {
                return;
            }
            year = parseFloat(document.MAINFORM.COMM_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));

            month = parseFloat(document.MAINFORM.COMM_DT.value.substr(Fist_M, Last_M - Fist_M + 1));

            day = document.MAINFORM.COMM_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
            new_dt_year = year;
            new_dt_month = month;
        }

        if (CHG_POLICY == 'Weekly') {
            //Added by Lokesh
            if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg')) {
                SYS_CalEndWorkingDate_S(unit_code, START_DT, '7', document.MAINFORM.NXT_COMM_DT.name, 'A', 'N', 'N');
            } else {
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_DT.value;
            }
        }
        if (CHG_POLICY == 'Monthly') {
            //Added by Lokesh
            if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg')) {

                new_dt_month = month + 1; // Utility Auto Fix Comments
                if (new_dt_month > 12) {
                    new_dt_month = new_dt_month - 12;
                    new_dt_year = year + 1;
                }
                if (new_dt_month < 10) {
                    new_dt_month = '0' + new_dt_month.toString();
                }
                if (Fist_Y < Fist_M) {
                    if (Fist_M < Fist_D) {
                        document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
                    }
                } else {
                    if (Fist_M < Fist_D) {
                        document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                    } else {
                        document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                    }
                }
            } else {
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_DT.value;
            }
        }
        if (CHG_POLICY == 'Quarterly') {
            if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg')) {
                //SYS_CalEndWorkingDate_S(unit_code, START_DT, '90',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                new_dt_month = month + 3; // Utility Auto Fix Comments
                if (new_dt_month > 12) {
                    new_dt_month = new_dt_month - 12;
                    new_dt_year = year + 1;
                }
                if (new_dt_month < 10) {
                    new_dt_month = '0' + new_dt_month.toString();
                }
                if (Fist_Y < Fist_M) {
                    if (Fist_M < Fist_D) {
                        document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
                    }
                } else {
                    if (Fist_M < Fist_D) {
                        document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                    } else {
                        document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                    }
                }
            } else {
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_DT.value;
            }
        }
        if (CHG_POLICY == 'Half yearly') {
            if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg')) {
                //SYS_CalEndWorkingDate_S(unit_code, START_DT, '180',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                new_dt_month = month + 6; // Utility Auto Fix Comments
                if (new_dt_month > 12) {
                    new_dt_month = new_dt_month - 12;
                    new_dt_year = year + 1;
                }
                if (new_dt_month < 10) {
                    new_dt_month = '0' + new_dt_month.toString();
                }
                if (Fist_Y < Fist_M) {
                    if (Fist_M < Fist_D) {
                        document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
                    }
                } else {
                    if (Fist_M < Fist_D) {
                        document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                    } else {
                        document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                    }
                }
            } else {
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_DT.value;
            }
        }
        if (CHG_POLICY == 'Yearly') {
            if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg')) {
                //SYS_CalEndWorkingDate_S(unit_code, START_DT, '365',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                new_dt_year = year + 1;
                if (Fist_Y < Fist_M) {
                    if (Fist_M < Fist_D) {
                        document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
                    }
                } else {
                    if (Fist_M < Fist_D) {
                        document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                    } else {
                        document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                    }
                }
            } else {
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_DT.value;
            }
        }
        if (CHG_POLICY == 'All in Advance') {
            SYT_ChangeFldClass(document.MAINFORM.COMM_START_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COMM_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.COMM_END_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NXT_COMM_DT, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.SYF_SYND_TOT_COMM = function() {
    try {

        var PCPT_AMT = SYS_BeFloat(document.MAINFORM.SYND_PERIOD_COMM.value);
        var SYND_LESS_OTHER_CHG = SYS_BeFloat(document.MAINFORM.SYND_LESS_OTHER_CHG.value);
        var SYND_LESS_COMM_CHG = SYS_BeFloat(document.MAINFORM.SYND_LESS_COMM_CHG.value);
        var SYND_LESS_ADMIN_CHGS = SYS_BeFloat(document.MAINFORM.SYND_LESS_ADMIN_CHGS.value);
        var tot_comm_amt = SYS_BeFloat(SYND_LESS_OTHER_CHG) + SYS_BeFloat(SYND_LESS_COMM_CHG) + SYS_BeFloat(SYND_LESS_ADMIN_CHGS);
        var TOT_COMM_LESS = SYS_BeFloat(PCPT_AMT) - SYS_BeFloat(tot_comm_amt);
        document.MAINFORM.SYND_NOTE_PART_TOTAL_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, TOT_COMM_LESS);
        SYF_SYND_NOTE_PART_TOTAL_AMT_ChkNegative();
        document.MAINFORM.SYND_NOTE_PART_COMM_PAID_AMT.value = document.MAINFORM.SYND_NOTE_PART_TOTAL_AMT.value;
        SYF_SYND_DebitCreditAmt_toPayment();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.SYF_SYND_CAL_PMT_FLG_BY_AVAL_BY = function() {
    try {

        var AVAL_BY;
        AVAL_BY = document.MAINFORM.AVAL_BY.value;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.SYF_SYND_Cal_SYND_AC_WT_BK_SWAD = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.SYND_AC_WT_BK_SWAD.value.length == 11) {
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.SYND_AC_WT_BK_SWAD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "SYND_AC_WT_BK_ID";
            if (document.MAINFORM.SYND_AC_WT_BK_ID.value == '') {
                SYS_GetTableDataByRule_S('SSSS_ParticipantDetails_Cal_SYND_AC_WT_BK_SWAD_1', '1');
            }
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.SYF_SYND_NOTE_PART_TOTAL_AMT_ChkNegative = function() {
    try {

        var value = document.MAINFORM.SYND_NOTE_PART_TOTAL_AMT.value;
        if (SYM_SYND_CHK_NEG_VAL(value)) {
            alert("total amount should not be negative");
            document.MAINFORM.SYND_LESS_ADMIN_CHGS.value = 0;
            document.MAINFORM.SYND_LESS_COMM_CHG.value = 0;
            document.MAINFORM.SYND_LESS_OTHER_CHG.value = 0;
            document.MAINFORM.SYND_NOTE_PART_TOTAL_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, document.MAINFORM.SYND_PERIOD_COMM.value);
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.SYF_SYND_DebitCreditAmt_toPayment = function() {
    try {

        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, document.MAINFORM.SYND_NOTE_PART_TOTAL_AMT.value);
        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, SYS_BeFloat(document.MAINFORM.SYND_NOTE_PART_TOTAL_AMT.value));
        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.PCPT_CCY.value, SYS_BeFloat(document.MAINFORM.SYND_NOTE_PART_TOTAL_AMT.value));
        //Set_VAL_PaymentTab();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_POLICY_onchange = function(event) {
    try {
        SYF_SYND_Cal_COMM_DT();
        SYF_SYND_Cal_NXT_COMM_DT();
        if (FLD_SYND_COMM_DT_onchange() && FLD_SYND_NXT_COMM_DT_onchange()) {
            SYF_SYND_Cal_SYND_PERIOD_SYND_NO_OF_PERIODS();
            SYF_SYND_Cal_SYND_PERIOD_COMM();
        } else {
            SYF_SYND_Cal_COMM_DT();
            SYF_SYND_Cal_NXT_COMM_DT();
            if (!FLD_SYND_COMM_DT_onchange() && !FLD_SYND_NXT_COMM_DT_onchange()) {
                document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
                document.MAINFORM.SYND_PERIOD.value = 0;
                SYF_SYND_Cal_SYND_PERIOD_COMM();
            } else {
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
                SYF_SYND_Cal_SYND_PERIOD_COMM();
            }
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_COMM_DT_onchange = function(event) {
    try {
        var subdays; // Utility Auto Fix Comments
        var chkEndDays; // Utility Auto Fix Comments
        subdays = SYS_GetSubDays(document.MAINFORM.COMM_DT.name, document.MAINFORM.COMM_START_DT.name);
        chkEndDays = SYS_GetSubDays(document.MAINFORM.COMM_DT.name, document.MAINFORM.COMM_END_DT.name);
        if (subdays > 0) {
            SYS_CheckError(document.MAINFORM.COMM_DT, 'The commission date must be later than commission commence Date!');
            document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
            return false;
        }
        if (chkEndDays < 0) {
            SYS_CheckError(document.MAINFORM.COMM_DT, 'The commission date must be earlier than commission end Date!');
            document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_NXT_COMM_DT_onchange = function(event) {
    try {
        var subdays; // Utility Auto Fix Comments
        var chkEndDays; // Utility Auto Fix Comments
        if (document.MAINFORM.COMM_DT.value != null && document.MAINFORM.COMM_DT.value != '') {
            subdays = SYS_GetSubDays(document.MAINFORM.NXT_COMM_DT.name, document.MAINFORM.COMM_DT.name);
            chkEndDays = SYS_GetSubDays(document.MAINFORM.NXT_COMM_DT.name, document.MAINFORM.COMM_END_DT.name);
            if (subdays > 0) {
                SYS_CheckError(document.MAINFORM.NXT_COMM_DT, 'The next commission date must be later than commission Date!');
                document.MAINFORM.NXT_COMM_DT.value = '';
                return false;
            }
            if (chkEndDays < 0) {
                SYS_CheckError(document.MAINFORM.NXT_COMM_DT, 'The next commission date must be earlier than commission end Date!');
                document.MAINFORM.NXT_COMM_DT.value = '';
                return false;
            }
        }
        if (document.MAINFORM.COMM_DT.value == null || document.MAINFORM.COMM_DT.value == '') {
            subdays = SYS_GetSubDays(document.MAINFORM.NXT_COMM_DT.name, document.MAINFORM.COMM_START_DT.name);
            chkEndDays = SYS_GetSubDays(document.MAINFORM.NXT_COMM_DT.name, document.MAINFORM.COMM_END_DT.name);
            if (subdays > 0) {
                SYS_CheckError(document.MAINFORM.NXT_COMM_DT, 'The next commission date must be later than commission commence Date!');
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
                return false;
            }
            if (chkEndDays < 0) {
                SYS_CheckError(document.MAINFORM.NXT_COMM_DT, 'The next commission date must be earlier than commission end Date!');
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.SYND_AC_WT_BK_ID.value != '') {
            SYM_SYND_Cal_SYND_AC_WT_BK_ID();
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.SYND_AC_WT_BK_ID.value != '') {
            //SYS_GetCUBK('SYND_AC_WT_BK_ID', document.MAINFORM.SYND_AC_WT_BK_ID.name, 'SYM_SYND_Notes_awb');
            SYS_GetCUBK('SYND_AC_WT_BK_ID', document.MAINFORM.SYND_AC_WT_BK_ID.name);
        } else {
            document.MAINFORM.SYND_AC_WT_BK_NM.value = '';
            document.MAINFORM.SYND_AC_WT_BK_SWAD.value = '';
            document.MAINFORM.SYND_ACWT_BK_SWTAG.value = '';
            document.MAINFORM.SYND_AC_NO.value = '';
            document.MAINFORM.SYND_AC_WT_BK_ADD1.value = '';
            document.MAINFORM.SYND_AC_WT_BK_ADD2.value = '';
            document.MAINFORM.SYND_AC_WT_BK_ADD3.value = '';
            document.MAINFORM.SYND_AC_WT_NOTES.value = '';
            //  SYT_Show_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_SYND_Cal_SYND_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_AC_WT_BK_SWAD_onchange = function(event) {
    try {
        if (document.MAINFORM.SYND_AC_WT_BK_SWAD.value != '') {
            document.MAINFORM.SYND_ACWT_BK_SWTAG.value = 'A';
        } else if (document.MAINFORM.SYND_AC_WT_BK_NM.value != '' || document.MAINFORM.SYND_AC_WT_BK_ADD1.value != '' || document.MAINFORM.SYND_AC_WT_BK_ADD2.value != '' || document.MAINFORM.SYND_AC_WT_BK_ADD3.value != '') {
            document.MAINFORM.SYND_ACWT_BK_SWTAG.value = 'D';
        } else {
            document.MAINFORM.SYND_ACWT_BK_SWTAG.value = '';
        }
        SYF_SYND_Cal_SYND_AC_WT_BK_SWAD();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_LESS_ADMIN_CHGS_onchange = function(event) {
    try {
        var value = document.MAINFORM.SYND_LESS_ADMIN_CHGS.value;
        if (SYM_SYND_CHK_NEG_VAL(value)) {
            alert("charges amount should not be negative");
            document.MAINFORM.SYND_LESS_ADMIN_CHGS.value = 0;

        }
        SYF_SYND_TOT_COMM();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_LESS_COMM_CHG_onchange = function(event) {
    try {
        var value = document.MAINFORM.SYND_LESS_COMM_CHG.value;
        if (SYM_SYND_CHK_NEG_VAL(value)) {
            alert("charges amount should not be negative");
            document.MAINFORM.SYND_LESS_COMM_CHG.value = 0;

        }
        SYF_SYND_TOT_COMM();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_LESS_OTHER_CHG_onchange = function(event) {
    try {
        var value = document.MAINFORM.SYND_LESS_OTHER_CHG.value;
        if (SYM_SYND_CHK_NEG_VAL(value)) {
            alert("charges amount should not be negative");
            document.MAINFORM.SYND_LESS_OTHER_CHG.value = 0;
        }
        SYF_SYND_TOT_COMM();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_SYND_PERIOD_COMM_onchange = function(event) {
    try {
        document.MAINFORM.SYND_TLUNPDCHG_BAL.value = SYT_AmtFormat(document.MAINFORM.SYND_TLUNPDCHG_CCY.value, SYS_BeFloat(SYS_BeFloat(document.MAINFORM.SYND_COMM_BAL.value) - SYS_BeFloat(document.MAINFORM.SYND_PERIOD_COMM.value)));
        SYF_SYND_TOT_COMM();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}

csFuncLevelProto.FLD_SYND_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NotePartChg.js", e);
    }
}