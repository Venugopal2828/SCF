"path:SCRN/DO/Participant Details.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CAL_INC_DEC = function() {
    try {
        var DEC_PCPT; // Utility Auto Fix Comments
        var INC_PCPT; // Utility Auto Fix Comments
        var NEW_PCPT_AMT; // Utility Auto Fix Comments
        var PCPT_AMT; // Utility Auto Fix Comments
        var n; // Utility Auto Fix Comments
        INC_PCPT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_PCPT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        PCPT_AMT = SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value);
        NEW_PCPT_AMT = SYS_BeFloat(document.MAINFORM.SYND_PART_NAMT.value);
        n = NEW_PCPT_AMT - PCPT_AMT;
        if (n > 0) {
            INC_PCPT = n;
            DEC_PCPT = 0;


        } else {
            DEC_PCPT = Math.abs(n);
            INC_PCPT = 0;

        }

        document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, INC_PCPT);
        document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, DEC_PCPT);
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.CHECK_DEC_AMT = function() {
    try {
        var DEC_PCPT; // Utility Auto Fix Comments
        var INC_PCPT; // Utility Auto Fix Comments
        INC_PCPT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_PCPT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        if (INC_PCPT != 0) {
            alert("Only can enter Increase Amount or Decrease Amount");
            document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, 0);

        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.CHECK_INC_AMT = function() {
    try {
        var DEC_PCPT; // Utility Auto Fix Comments
        var INC_PCPT; // Utility Auto Fix Comments
        INC_PCPT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_PCPT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        if (DEC_PCPT != 0) {
            alert("Only can enter Increase Amount or Decrease Amount");
            document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, 0);

        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.CHK_PCPT_AMT = function() {
    try {
        var syndpartamt = 0;
        var syndamt;
        syndamt = SYS_getParentDo("ParticipantHeader").getFieldObj('SYND_AMT').value;
        var arrayvalue;
        var synpartamt = "SYND_PART_AMT";
        var partptg = "PART_PER";
        var i;
        var node;
        var record;
        var n = 0;
        var doamt;
        var per;
        node = SYS_getDoByXpath("ParticipantHeader.ParticipantDetail");
        var recordEdit = SYS_getEditedRecordForCurrentDo();
        if (node == null || node == '') {
            return;
        } else {
            arrayvalue = SYS_getRecords(node);
            record = '';
            for (i = 0; i < arrayvalue.length; i++) {
                record = SYS_getValFromRec(arrayvalue[i], synpartamt);
                var partamt = SYS_BeFloat(record);
                if (recordEdit != '' && recordEdit != null && n == 0) {
                    doamt = SYS_getValFromRec(SYS_getEditedRecordForCurrentDo(), "SYND_PART_AMT");
                    n = 1;
                }
                syndpartamt += SYS_BeFloat(partamt);
            }
            var cursynamt = SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value);
            var famt;
            if (n == 1) {
                famt = syndpartamt + SYS_BeFloat(cursynamt) - SYS_BeFloat(doamt);
            } else {
                famt = syndpartamt + SYS_BeFloat(cursynamt);
            }
            if (famt <= SYS_BeFloat(syndamt)) {
                return true;
            } else {
                return false;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.COMM_PRE = function() {
    try {
        var nPCPT_TLU_AMT; // Utility Auto Fix Comments
        var nSYND; // Utility Auto Fix Comments
        nSYND = SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value);
        nPCPT_TLU_AMT = SYS_BeFloat(document.MAINFORM.SYND_TLUNPDCHG_AMT.value);

        nPER = nPCPT_TLU_AMT / nSYND * 100;
        nPER = nPER.toFixed(4);
        document.MAINFORM.COMM_PRE.value = nPER; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_COMM_DT = function() {
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
        if (((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg') || (SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') || (SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt')) && new_dt_month < 10) {
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
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_NXT_COMM_DT = function() {
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
        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');

        _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments
        year = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));
        month = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_M, Last_M - Fist_M + 1));
        day = document.MAINFORM.COMM_START_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
        new_dt_year = year;
        new_dt_month = month;
        if (START_DT == '') {
            return;
        }
        if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg') || (SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') || (SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt')) {
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
            if (COMM_DT == COMM_START_DT) {
                SYS_CalEndWorkingDate_S(unit_code, START_DT, '7', document.MAINFORM.NXT_COMM_DT.name, 'A', 'N', 'N');
            } else if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg') || (SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') || (SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt')) {
                SYS_CalEndWorkingDate_S(unit_code, START_DT, '7', document.MAINFORM.NXT_COMM_DT.name, 'A', 'N', 'N');
            } else {
                document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_DT.value;
            }
        }
        if (CHG_POLICY == 'Monthly') {
            if (COMM_DT == COMM_START_DT) {
                //SYS_CalEndWorkingDate_S(unit_code, START_DT, '30',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                new_dt_month = month + 1; // Utility Auto Fix Comments
                if (new_dt_month > 12) {
                    new_dt_month = new_dt_month - 12;
                    new_dt_year = year + 1;
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
            } else if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg') || (SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') || (SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt')) {
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
            if (COMM_DT == COMM_START_DT) {
                //SYS_CalEndWorkingDate_S(unit_code, START_DT, '90',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                new_dt_month = month + 3; // Utility Auto Fix Comments
                if (new_dt_month > 12) {
                    new_dt_month = new_dt_month - 12;
                    new_dt_year = year + 1;
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
            } else if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg') || (SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') || (SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt')) {
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
            if (COMM_DT == COMM_START_DT) {
                //SYS_CalEndWorkingDate_S(unit_code, START_DT, '180',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                new_dt_month = month + 6; // Utility Auto Fix Comments
                if (new_dt_month > 12) {
                    new_dt_month = new_dt_month - 12;
                    new_dt_year = year + 1;
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
            } else if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg') || (SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') || (SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt')) {
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
            if (COMM_DT == COMM_START_DT) {
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
            } else if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SYND_NotePartChg') || (SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') || (SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt')) {
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
            SYT_ChangeFldClass(document.MAINFORM.COMM_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COMM_END_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NXT_COMM_DT, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_PART_MAIL_ADD = function() {
    try {
        SYS_InqCUBK('PART_MAIL_ADD', 'SYND_PART_ID');
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_SYND_ACWTBK_ADD_ORDER_NO = function() {
    try {
        var SYND_ACWTBK_ADD_ORDER_NO; // Utility Auto Fix Comments
        var SYND_AC_WT_BK_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SYND_ACWTBK_ADD_ORDER_NO = document.MAINFORM.SYND_ACWTBK_ADD_ORDER_NO.value;
        //SYND_AC_WT_BK_ID = document.MAINFORM.SYND_AC_WT_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + SYND_ACWTBK_ADD_ORDER_NO + " AND C_MAIN_REF = '" + SYND_AC_WT_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "SYND_AC_WT_BK_NM;SYND_AC_WT_BK_ADD1;SYND_AC_WT_BK_ADD2;SYND_AC_WT_BK_ADD3";
        SYS_GetTableDataByRule_S('SSSS_ParticipantDetails_Cal_SYND_ACWTBK_ADD_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_SYND_AC_WT_BK_ADD1 = function() {
    try {
        SYS_InqCUBK('SYND_AC_WT_BK_ADD', 'SYND_AC_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_SYND_AC_WT_BK_ID = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('SYND_AC_WT_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_SYND_AC_WT_BK_SWAD = function() {
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
            if (document.MAINFORM.SYND_AC_WT_BK_ID.value != '') {
                SYS_GetCUBK('SYND_AC_WT_BK_ID', 'SYND_AC_WT_BK_ID', 'Get_SYND_AC_WT_NOTES');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_SYND_PART_ADD1 = function() {
    try {
        SYS_InqCUBK('SYND_PART_ADD', 'SYND_PART_ID');
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_SYND_PART_AMT_PERCENT = function() {
    try {
        document.MAINFORM.SYND_PART_AMT_PERCENT.value = (SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) / SYS_BeFloat(SYS_getScreenObjByxpath('ParticipantHeader', 'SYND_AMT').value)) * 100;
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_SYND_PART_ID = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        if (document.MAINFORM.SYND_PART_TYPE.value != 'Corporate') {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('SYND_PART_ID', '1');
            }
        } else {
            SYS_InqCUBK('SYND_PART_ID_CUST');
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_SYND_PART_ORDER_MAIL = function() {
    try {
        var SYND_PART_ID; // Utility Auto Fix Comments
        var SYND_PART_ORDER_MAIL; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SYND_PART_ORDER_MAIL = document.MAINFORM.SYND_PART_ORDER_MAIL.value;
        //SYND_PART_ID = document.MAINFORM.SYND_PART_ID.value;
        //sSQLWhere = "ORDER_NO = " + SYND_PART_ORDER_MAIL + " AND C_MAIN_REF = '" + SYND_PART_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "PART_MAIL_ADD";
        SYS_GetTableDataByRule_S('SSSS_ParticipantDetails_Cal_SYND_PART_ORDER_MAIL_2', '1');
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_SYND_PART_ORDER_NO = function() {
    try {
        var SYND_PART_ID; // Utility Auto Fix Comments
        var SYND_PART_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SYND_PART_ORDER_NO = document.MAINFORM.SYND_PART_ORDER_NO.value;
        //SYND_PART_ID = document.MAINFORM.SYND_PART_ID.value;
        //sSQLWhere = "ORDER_NO = " + SYND_PART_ORDER_NO + " AND C_MAIN_REF = '" + SYND_PART_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "SYND_PART_NM;SYND_PART_ADD1;SYND_PART_ADD2;SYND_PART_ADD3";
        SYS_GetTableDataByRule_S('SSSS_ParticipantDetails_Cal_SYND_PART_ORDER_NO_3', '1');
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_SYND_PART_SW_ADD = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.SYND_PART_SW_ADD.value.length == 11) {
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.SYND_PART_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "SYND_PART_ID";
            if (document.MAINFORM.SYND_PART_ID.value == '') {
                SYS_GetTableDataByRule_S('SSSS_ParticipantDetails_Cal_SYND_PART_SW_ADD_4', '1');
            }
            if (document.MAINFORM.SYND_PART_ID.value != '') {
                SYS_GetCUBK('SYND_PART_ID', 'SYND_PART_ID', 'Get_SYND_PART_NOTES');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Cal_VIEW_NameAndMailFld = function() {
    try {
        if (document.MAINFORM.SYND_PART_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.PART_MAIL_ADD_BTN, 'O');
            document.MAINFORM.SYND_PART_ADD_BTN.disabled = false;
            document.MAINFORM.PART_MAIL_ADD_BTN.disabled = false;
        } else {
            document.MAINFORM.SYND_PART_ADD_BTN.disabled = true;
            document.MAINFORM.PART_MAIL_ADD_BTN.disabled = true;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        Set_SYND_PART_FAMT();
        var _do;
        var recordState1;
        _do = SYS_getDoByXpath('ParticipantHeader.ParticipantDetail');
        recordState1 = _do.getStatue();
        if (SYS_ORG_FUNCTION_NAME == "AmendSyndByPartpt" && 'A' != recordState1) {
            document.MAINFORM.PART_PER.value = Math.round(SYS_BeFloat(document.MAINFORM.NEW_PART_SYND_PER.value));
            document.MAINFORM.SYND_PART_AMT.value = document.MAINFORM.SYND_PART_NAMT.value;
        }
        if (!CHK_PCPT_AMT() && SYS_ORG_FUNCTION_NAME == "AmendSyndByPartpt") {
            document.MAINFORM.PART_PER.value = 0;
            document.MAINFORM.SYND_PART_AMT.value = 0;
            EEHtml.fireEvent(document.MAINFORM.SYND_PART_AMT, "onchange");
            document.MAINFORM.NEW_PART_SYND_PER.value = 0;
            document.MAINFORM.SYND_PART_NAMT.value = 0;
            document.MAINFORM.INC_AMT.value = 0;
            document.MAINFORM.DEC_AMT.value = 0;
            alert("Please note that the total percent exceeds 100%");
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var oldvalue; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var sum; // Utility Auto Fix Comments
        var sumScren; // Utility Auto Fix Comments
        var trxbal; // Utility Auto Fix Comments
        var targetdo;
        //sum = SYS_getFieldSumByDoName('SYND_PART_FAMT', 'ParticipantDetail');
        targetdo = SYS_getDoByXpath('ParticipantHeader.ParticipantDetail');
        sum = targetdo.getFieldSumValue('SYND_PART_FAMT', 2);
        sumScren = SYS_BeFloat(document.MAINFORM.SYND_PART_FAMT.value);
        record = SYS_getEditedRecordForCurrentDo();
        oldvalue = 0;
        if (record != null) {
            oldvalue = SYS_BeFloat(record["document.MAINFORM.SYND_PART_FAMT"]);
        }
        sum = SYS_BeFloat(sum) + sumScren - oldvalue;
        if (SYS_MODULE_NAME == 'IPLC') {
            if (SYS_FUNCTION_NAME == "IPLC_IssueLCAmendment" || SYS_FUNCTION_NAME == "IPLC_BeneficiaryResponseToAmd") {
                trxbal = SYS_BeFloat(SYS_getValueFromMain('NEW_LC_BAL'));
            } else if (SYS_FUNCTION_NAME == "IPLC_PayAccept" || SYS_FUNCTION_NAME == "IPLC_PaymentAtMaturity") {
                trxbal = SYS_BeFloat(SYS_getValueFromMain('TOTAL_AMT')); // Utility Auto Fix Comments
            } else {
                trxbal = SYS_BeFloat(SYS_getValueFromMain('LC_BAL')); // Utility Auto Fix Comments
            }
        }

        if (SYS_MODULE_NAME == 'SYND') {
            trxbal = SYS_BeFloat(SYS_getValueFromMain('MAST_LC_AMT')); // Utility Auto Fix Comments
        }
        if (SYS_MODULE_NAME == 'REIM') {
            trxbal = SYS_BeFloat(SYS_getValueFromMain('REIM_CONF_BAL')); // Utility Auto Fix Comments
        }

        if (SYS_MODULE_NAME == 'EXCO') {
            trxbal = SYS_BeFloat(SYS_getValueFromMain('CFNC_N_BAL')); // Utility Auto Fix Comments
        }

        if (SYS_MODULE_NAME == 'GTEE' || SYS_MODULE_NAME == 'IWGT') {
            if (SYS_FUNCTION_NAME == 'RegisterOutward' || SYS_FUNCTION_NAME == 'AdviseGuarantee') {
                trxbal = SYS_BeFloat(SYS_getValueFromMain('GTEE_AMT')); // Utility Auto Fix Comments
            } else {
                trxbal = SYS_BeFloat(SYS_getValueFromMain('LIAB_TRXCCY_AMT')) + SYS_BeFloat(SYS_getValueFromMain('INC_AMT')) - SYS_BeFloat(SYS_getValueFromMain('DEC_AMT')); // Utility Auto Fix Comments
            }
        }


        if (SYS_MODULE_NAME == 'EPLC') {
            if (SYS_FUNCTION_NAME == 'EPLC_Discount' || SYS_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_FUNCTION_NAME == 'EPLC_PayAtMaturity' || SYS_FUNCTION_NAME == 'EPLC_SettlePartialPayment') {
                trxbal = SYS_BeFloat(SYS_getValueFromMain('PRES_CCY')); // Utility Auto Fix Comments
            } else if (SYS_FUNCTION_NAME == "EPLC_AdviseAmendment" || SYS_FUNCTION_NAME == "EPLC_BeneAcceptsRejectsAmend") {
                if (SYS_BeFloat(SYS_getValueFromMain('NEW_CONF_BAL')) > 0) {
                    trxbal = SYS_BeFloat(SYS_getValueFromMain('NEW_CONF_BAL')); // Utility Auto Fix Comments
                } else {
                    trxbal = SYS_BeFloat(SYS_getValueFromMain('CONF_BAL')); // Utility Auto Fix Comments
                }
            } else {
                trxbal = SYS_BeFloat(SYS_getValueFromMain('CONF_BAL')); // Utility Auto Fix Comments
            }
        }
        /*
if("SyndClaim(LG)"!=SYS_ORG_FUNCTION_NAME){
if(sum>trxbal){
SYS_CheckError(document.MAINFORM.SYND_PART_FAMT,"Participant amount should not be greater than the available amount!");
  return false;
}
}
*/

        return true;
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.DEFAUL_SYND_PART_NAMT = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var recordState1; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('ParticipantHeader.ParticipantDetail'); // Utility Auto Fix Comments
        recordState1 = _do.getStatue(); // Utility Auto Fix Comments
        if (('E' == recordState1 || 'V' == recordState1) && SYS_ORG_FUNCTION_NAME == "AmendSyndByPartpt") {

            document.MAINFORM.NEW_PART_SYND_PER.value = document.MAINFORM.PART_PER.value;
            NEW_PRE();
            CAL_INC_DEC();
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Edit_FldCls = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordState; // Utility Auto Fix Comments
        var recordState1; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('ParticipantHeader.ParticipantDetail'); // Utility Auto Fix Comments
        record = _do.getCurrentRecord(); // Utility Auto Fix Comments
        recordState = SYS_getRecState(record);
        recordState1 = _do.getStatue(); // Utility Auto Fix Comments

        if (('E' == recordState1 || 'V' == recordState1) && SYS_ORG_FUNCTION_NAME == "AmendSyndByPartpt") {
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.PART_MAIL_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.PART_FAX_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_CNTY_CD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.PART_PER, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_TYPE, 'P');

            SYT_DisObj('incamt');
            SYT_DisObj('decamt');
            SYT_DisObj('vecamt');
            SYT_hideObj('claimpay');

            if ("SyndClaim(LG)" == SYS_ORG_FUNCTION_NAME) {
                SYT_hideObj('incamt');
                SYT_hideObj('decamt');
                SYT_hideObj('vecamt');
                SYT_DisObj('claimpay');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FUND_FLAG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SYND_ACWT_BK_SWTAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_SWAD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_CNTY_CD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_LIABACNO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_REF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_START_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_SW_TAG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SYND_AC_WT_BK_ID_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ID_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_LIABACNO_BTN, 'O');

            SYT_hideObj('incamt');
            SYT_hideObj('decamt');
            SYT_hideObj('vecamt');
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.FUND_FLG = function() {
    try {
        if (document.MAINFORM.FUND_FLAG.value == "Unfunded") {
            SYT_ChangeFldClass(document.MAINFORM.FUND_AMT, 'P');
            document.MAINFORM.FUND_AMT.value = 0;
            document.MAINFORM.SYND_PART_BAL.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FUND_AMT, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.GET_SYND_AC_WT_BK_ID = function() {
    try {
        if (document.MAINFORM.SYND_AC_WT_BK_ID.value != '') {
            SYS_GetCUBK('SYND_AC_WT_BK_ID', 'SYND_AC_WT_BK_ID', 'Get_SYND_AC_WT_NOTES');
        } else if (document.MAINFORM.SYND_AC_WT_BK_ID.value == '') {
            document.MAINFORM.SYND_AC_WT_BK_NM.value = '';
            document.MAINFORM.SYND_AC_WT_BK_ADD1.value = '';
            document.MAINFORM.SYND_AC_WT_BK_ADD2.value = '';
            document.MAINFORM.SYND_AC_WT_BK_ADD3.value = '';
            document.MAINFORM.SYND_AC_WT_BK_SWAD.value = '';
            document.MAINFORM.SYND_ACWT_BK_SWTAG.value = '';
            document.MAINFORM.SYND_AC_NO.value = '';
            document.MAINFORM.SYND_AC_WT_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.GET_SYND_PART_AC_NO = function() {
    try {
        SYS_GetCUBK('SYND_PART_AC_NO', 'SYND_PART_AC_NO');
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.GET_SYND_PART_CCY = function() {
    try {
        if (SYS_MODULE_NAME == 'EPLC' || SYS_MODULE_NAME == 'IPLC') {
            if (SYS_ORG_FUNCTION_SHORT_NAME == 'CreatSyndicationDealfordiscount') {
                document.MAINFORM.SYND_PART_CCY.value = SYS_getValueFromMain('CFNC_C_CCY');
                document.MAINFORM.SYND_TLUNPDCHG_CCY.value = SYS_getValueFromMain('CFNC_C_CCY');
            } else {
                document.MAINFORM.SYND_PART_CCY.value = SYS_getValueFromMain('LC_CCY');
                document.MAINFORM.SYND_TLUNPDCHG_CCY.value = SYS_getValueFromMain('LC_CCY');
            }
        }
        if (SYS_MODULE_NAME == 'EXCO') {
            document.MAINFORM.SYND_PART_CCY.value = SYS_getValueFromMain('CFNC_C_CCY');
            document.MAINFORM.SYND_TLUNPDCHG_CCY.value = SYS_getValueFromMain('CFNC_C_CCY');
        }
        if (SYS_MODULE_NAME == 'GTEE' || SYS_MODULE_NAME == 'IWGT') {
            document.MAINFORM.SYND_PART_CCY.value = SYS_getValueFromMain('GTEE_CCY');
            document.MAINFORM.SYND_TLUNPDCHG_CCY.value = SYS_getValueFromMain('GTEE_CCY');
        }
        if (SYS_MODULE_NAME == 'REIM') {
            document.MAINFORM.SYND_TLUNPDCHG_CCY.value = SYS_getValueFromMain('LC_CCY');
            document.MAINFORM.SYND_PART_CCY.value = SYS_getValueFromMain('LC_CCY');
        }
        if (SYS_MODULE_NAME == 'SYND') {
            document.MAINFORM.SYND_TLUNPDCHG_CCY.value = SYS_getValueFromMain('MAST_LC_CCY');
            document.MAINFORM.SYND_PART_CCY.value = SYS_getValueFromMain('MAST_LC_CCY');
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.GET_SYND_PART_ID = function() {
    try {
        if (document.MAINFORM.SYND_PART_ID.value != '') {
            if (document.MAINFORM.SYND_PART_TYPE.value != 'Corporate') {
                SYS_GetCUBK('SYND_PART_ID', 'SYND_PART_ID', 'Get_SYND_PART_NOTES');
            } else {
                SYS_GetCUBK('SYND_PART_ID_CUST', 'SYND_PART_ID');
            }
        } else if (document.MAINFORM.SYND_PART_ID.value == '') {
            document.MAINFORM.SYND_PART_NM.value = '';
            document.MAINFORM.SYND_PART_ADD1.value = '';
            document.MAINFORM.SYND_PART_ADD2.value = '';
            document.MAINFORM.SYND_PART_ADD3.value = '';
            document.MAINFORM.SYND_PART_CNTY_CD.value = '';
            document.MAINFORM.SYND_PART_SW_ADD.value = '';
            document.MAINFORM.SYND_PART_SW_TAG.value = '';
            document.MAINFORM.PART_EMAIL_ADD.value = '';
            document.MAINFORM.PART_FAX_NO.value = '';
            document.MAINFORM.PART_MAIL_ADD.value = '';
            document.MAINFORM.PART_TLX_NO.value = '';
            document.MAINFORM.SYND_PART_NOTES.value = '';
            document.MAINFORM.SYND_PART_LIABACNO.value = '';
            SYT_Show_Notes(document.MAINFORM.SYND_PART_NOTES.name);
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Get_SYND_AC_WT_NOTES = function() {
    try {
        SYT_Show_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Get_SYND_PART_NOTES = function() {
    try {
        SYT_Show_Notes(document.MAINFORM.SYND_PART_NOTES.name);
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Get_SYND_TLUNPDCHG_CCY = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.SYND_TLUNPDCHG_AMT.value) != 0) {
            SYT_ChangeFldClass(document.MAINFORM.SYND_TLUNPDCHG_CCY, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SYND_TLUNPDCHG_CCY, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.INC_DEC_AMT = function() {
    try {
        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var SYND_PART_NAMT; // Utility Auto Fix Comments
        if (document.MAINFORM.INC_AMT.value > 0) {
            document.MAINFORM.DEC_AMT.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');
        }
        if (document.MAINFORM.DEC_AMT.value > 0) {
            document.MAINFORM.INC_AMT.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'O');
        }
        SYND_PART_NAMT = SYS_BeFloat(document.MAINFORM.SYND_PART_NAMT.value);
        SYND_PART_NAMT = SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) + SYS_BeFloat(document.MAINFORM.INC_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        if (SYND_PART_NAMT >= 0) {
            document.MAINFORM.SYND_PART_NAMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, SYND_PART_NAMT);
        } else {
            SYS_CheckError(document.MAINFORM.SYND_PART_NAMT, "The Participation amount cannot be minus!");
            document.MAINFORM.DEC_AMT.value = 0;
            document.MAINFORM.INC_AMT.value = 0;
            document.MAINFORM.SYND_PART_NAMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, document.MAINFORM.SYND_PART_AMT.value);
            return false;
        }


        /*
if(document.MAINFORM.SYND_PART_NAMT.value!=0&&document.MAINFORM.SYND_PART_NAMT.value!=''&&document.MAINFORM.SYND_PART_NAMT.value!=null){
INC_AMT=SYS_BeFloat(document.MAINFORM.SYND_PART_NAMT.value)-SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value);
DEC_AMT=SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value)-SYS_BeFloat(document.MAINFORM.SYND_PART_NAMT.value);
	if(INC_AMT>0){
	document.MAINFORM.INC_AMT.value=INC_AMT;
	document.MAINFORM.DEC_AMT.value=0;
	}
	if(DEC_AMT>0){
	document.MAINFORM.DEC_AMT.value=DEC_AMT;
	document.MAINFORM.INC_AMT.value=0;
	}
	if(DEC_AMT==0&&INC_AMT==0){
	document.MAINFORM.DEC_AMT.value=0;
	document.MAINFORM.INC_AMT.value=0;
	}
}*/
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var newPer; // Utility Auto Fix Comments
        var targetdo;
        //amt = SYS_getFieldSumByDoName('PART_PER', 'ParticipantDetail');
        targetdo = SYS_getDoByXpath('ParticipantHeader.ParticipantDetail');
        amt = targetdo.getFieldSumValue('PART_PER', 2);
        newPer = 100 - amt;
        if (newPer < 0) {
            newPer = 0;
        }
        document.MAINFORM.PART_PER.value = newPer;
        PRE();
        document.MAINFORM.COMM_END_DT.value = SYS_getParentDo("ParticipantHeader").getFieldObj('SYND_EXPIRY_DT').value;
        tempExpirayDate = SYS_getParentDo("ParticipantHeader").getFieldObj('SYND_EXPIRY_DT').value;
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.NEW_PRE = function() {
    try {
        var nPCPT_AMT; // Utility Auto Fix Comments
        var nPER; // Utility Auto Fix Comments
        var nSYND; // Utility Auto Fix Comments
        var note; // Utility Auto Fix Comments
        note = SYS_getParentDo("ParticipantHeader").getFieldObj('SYND_AMT').value;
        nPER = SYS_BeFloat(document.MAINFORM.NEW_PART_SYND_PER.value);
        nSYND = SYS_BeFloat(note);
        nPCPT_AMT = SYS_BeFloat(nSYND * nPER / 100);
        document.MAINFORM.SYND_PART_NAMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, nPCPT_AMT);
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.PRE = function() {
    try {
        var nPCPT_AMT; // Utility Auto Fix Comments
        var nPER; // Utility Auto Fix Comments
        var nSYND; // Utility Auto Fix Comments
        var note; // Utility Auto Fix Comments
        note = SYS_getParentDo("ParticipantHeader").getFieldObj('SYND_AMT').value;
        nPER = SYS_BeFloat(document.MAINFORM.PART_PER.value);
        nSYND = SYS_BeFloat(note);
        nPCPT_AMT = SYS_BeFloat(nSYND * nPER / 100);
        document.MAINFORM.SYND_PART_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, nPCPT_AMT);
        if (nPCPT_AMT == 0) {
            //alert("Amount should be less than syndication amount");
            document.MAINFORM.PART_PER.value = '';
            document.MAINFORM.SYND_PART_AMT.value = '';
        }
        if (nPER > 100) {
            alert("Percentage should be less than 100%");
            document.MAINFORM.PART_PER.value = '';
            document.MAINFORM.SYND_PART_AMT.value = '';
        } else if (nPER < 0) {
            alert("Percentage should not allow negative values");
            document.MAINFORM.PART_PER.value = '';
            document.MAINFORM.SYND_PART_AMT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        Edit_FldCls();
        GET_SYND_PART_CCY();
        SYT_Init_Notes(document.MAINFORM.SYND_PART_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SYND_PART_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SYND_AC_WT_NOTES.name);

        if ('IPLC_IssueB2BLC' == SYS_FUNCTION_NAME) {
            document.MAINFORM.SYND_PART_CCY.value = SYS_getValueFromMain('MAST_LC_CCY');
        }
        if ('RegisterOutward' == SYS_FUNCTION_NAME) {
            document.MAINFORM.SYND_PART_CCY.value = SYS_getValueFromMain('GTEE_CCY');
        }
        if ("AdviseGuarantee" == SYS_FUNCTION_NAME) {
            document.MAINFORM.SYND_PART_CCY.value = SYS_getValueFromMain('GTEE_CCY');
        }
        FUND_FLG();
        DEFAUL_SYND_PART_NAMT();
        document.MAINFORM.AMD_REG_DT.value = SYS_BUSI_DATE;
        if ("RegSyndByPartpt" == SYS_FUNCTION_NAME || SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt' || SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt' || SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') {
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_ADD_BTN, 'H');
            SYT_ChangeFldClass(document.MAINFORM.PART_MAIL_ADD_BTN, 'H');
            document.MAINFORM.SYND_PART_ADD_BTN.value = '...';
            document.MAINFORM.PART_MAIL_ADD_BTN.value = '...';

        }

    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_AMT = function() {
    try {
        var nPCPT_AMT; // Utility Auto Fix Comments
        var nSYND; // Utility Auto Fix Comments
        var note; // Utility Auto Fix Comments
        note = SYS_getParentDo("ParticipantHeader").getFieldObj('SYND_AMT').value;
        nSYND = SYS_BeFloat(note);
        nPCPT_AMT = SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value);

        nPER = nPCPT_AMT / nSYND * 100;
        nPER = nPER.toFixed(4);
        document.MAINFORM.PART_PER.value = nPER; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_NAMT_PRE = function() {
    try {
        var nPCPT_AMT; // Utility Auto Fix Comments
        var nSYND; // Utility Auto Fix Comments
        var note; // Utility Auto Fix Comments
        note = SYS_getParentDo("ParticipantHeader").getFieldObj('SYND_AMT').value;
        nSYND = SYS_BeFloat(note);
        nPCPT_AMT = SYS_BeFloat(document.MAINFORM.SYND_PART_NAMT.value);

        nPER = nPCPT_AMT / nSYND * 100;
        nPER = nPER.toFixed(4);
        document.MAINFORM.NEW_PART_SYND_PER.value = nPER;
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_TLUNPDCHG_AMT = function() {
    try {
        var nPCPT_AMT;
        var nPER;
        var nSYND;
        var note;
        note = SYS_getParentDo("ParticipantHeader").getFieldObj('SYND_AMT').value;
        nPER = SYS_BeFloat(document.MAINFORM.COMM_PRE.value);
        nSYND = SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value);
        nPCPT_AMT = SYS_BeFloat(nSYND * nPER / 100);
        document.MAINFORM.SYND_TLUNPDCHG_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_TLUNPDCHG_CCY.value, nPCPT_AMT);
        document.MAINFORM.SYND_TLUNPDCHG_BAL.value = document.MAINFORM.SYND_TLUNPDCHG_AMT.value;
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.Set_SYND_PART_FAMT = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.SYND_PART_NAMT.value) == 0 && SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) != 0 && SYS_BeFloat(document.MAINFORM.DEC_AMT.value) == 0) {
            document.MAINFORM.SYND_PART_FAMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, document.MAINFORM.SYND_PART_AMT.value);
        }
        if (SYS_BeFloat(document.MAINFORM.SYND_PART_NAMT.value) == 0 && SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) != 0 && SYS_BeFloat(document.MAINFORM.DEC_AMT.value) != 0) {
            document.MAINFORM.SYND_PART_FAMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, document.MAINFORM.SYND_PART_NAMT.value);
        }
        if (SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) != 0 && SYS_BeFloat(document.MAINFORM.SYND_PART_NAMT.value) != 0) {
            document.MAINFORM.SYND_PART_FAMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, document.MAINFORM.SYND_PART_NAMT.value);
        }
        // document.MAINFORM.SYND_PART_BAL.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, document.MAINFORM.SYND_PART_FAMT.value);
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.onchange_SYND_PART_PAY_AMT = function() {
    try {
        var ClaimTotal; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var nI_SEQ_NUM; // Utility Auto Fix Comments
        var nSYND_PART_PAY_AMT; // Utility Auto Fix Comments
        var now_amt; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var targetDo_records; // Utility Auto Fix Comments
        var totalamount; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        document.MAINFORM.SYND_PART_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, document.MAINFORM.SYND_PART_PAY_AMT.value);
        if (SYS_ORG_FUNCTION_NAME == "SyndClaim_LG") {
            ClaimTotal = SYS_getValueFromMain('CLM_TRX_CCY_AMT');

            if (SYS_BeFloat(document.MAINFORM.SYND_PART_PAY_AMT.value) > SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) || SYS_BeFloat(document.MAINFORM.SYND_PART_PAY_AMT.value) < 0 || SYS_BeFloat(document.MAINFORM.SYND_PART_PAY_AMT.value) > SYS_BeFloat(ClaimTotal)) {
                document.MAINFORM.SYND_PART_PAY_AMT.value = 0;
                document.MAINFORM.SYND_PART_BAL.value = SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) - SYS_BeFloat(document.MAINFORM.SYND_PART_PAY_AMT.value);
                return;
            } else {
                targetDo = null;
                targetDo_records = null;
                targetDo = SYS_getDoByXpath("ParticipantHeader.ParticipantDetail");
                targetDo_records = SYS_getRecords(targetDo);
                len = targetDo_records.length;
                totalamount = 0;
                now_amt = document.MAINFORM.SYND_PART_PAY_AMT.value;
                for (i = 0; i < len; i++) { // Utility Auto Fix Comments
                    vDo = targetDo_records[i];
                    nSYND_PART_PAY_AMT = SYS_getValFromRec(vDo, 'SYND_PART_PAY_AMT');
                    nI_SEQ_NUM = SYS_getValFromRec(vDo, 'I_SEQ_NUM');
                    if (document.MAINFORM.I_SEQ_NUM.value == nI_SEQ_NUM) {
                        if (nSYND_PART_PAY_AMT != document.MAINFORM.SYND_PART_PAY_AMT.value) {
                            nSYND_PART_PAY_AMT = document.MAINFORM.SYND_PART_PAY_AMT.value;
                        }
                    }
                    totalamount += SYS_BeFloat(nSYND_PART_PAY_AMT);
                }
                if (totalamount > SYS_BeFloat(ClaimTotal)) {
                    document.MAINFORM.SYND_PART_PAY_AMT.value = 0;
                    document.MAINFORM.SYND_PART_BAL.value = SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) - SYS_BeFloat(document.MAINFORM.SYND_PART_PAY_AMT.value);
                    return;
                }
                document.MAINFORM.SYND_PART_BAL.value = SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) - SYS_BeFloat(document.MAINFORM.SYND_PART_PAY_AMT.value);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.CHG_POLICY_onchange = function(event) {
    try {
        if (document.MAINFORM.CHG_POLICY.value == 'All in Advance') {
            document.MAINFORM.NXT_COMM_DT.value = '';
            document.MAINFORM.COMM_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.COMM_START_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COMM_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COMM_END_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NXT_COMM_DT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.COMM_START_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.COMM_END_DT, 'M');
        }
        Cal_COMM_DT();
        Cal_NXT_COMM_DT();
        if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') || (SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt')) {
            COMM_START_DT_onchange();
            COMM_DT_onchange();
            NXT_COMM_DT_onchange();
            COMM_END_DT_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.COMM_DT_onchange = function(event) {
    try {
        //Cal_COMM_DT();
        try {
            if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') || (SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt')) {
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
            }
            Cal_NXT_COMM_DT();
            return true;
        } catch (e) {
            DisExcpt("SSSS_Participant Details.js", e);
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.COMM_END_DT_onchange = function(event) {
    try {
        //Cal_NXT_COMM_DT();
        try {
            if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') || (SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt')) {
                if (document.MAINFORM.COMM_START_DT.value == '') {
                    SYS_CheckError(document.MAINFORM.COMM_START_DT, 'Select commission commence date!');
                    document.MAINFORM.COMM_START_DT.value = '';
                    return false;
                }
                if (document.MAINFORM.COMM_START_DT.value != '') {
                    var chkEndDays;
                    chkEndDays = SYS_GetSubDays(document.MAINFORM.COMM_END_DT.name, document.MAINFORM.COMM_START_DT.name);
                    if (chkEndDays > 0) {
                        SYS_CheckError(document.MAINFORM.COMM_END_DT, 'The commission end date must be greater than commission commence date!');
                        document.MAINFORM.COMM_END_DT.value = tempExpirayDate;
                        return false;
                    }
                }
                if (document.MAINFORM.COMM_DT.value != '') {
                    var chkEndDays;
                    chkEndDays = SYS_GetSubDays(document.MAINFORM.COMM_END_DT.name, document.MAINFORM.COMM_DT.name);
                    if (chkEndDays > 0) {
                        SYS_CheckError(document.MAINFORM.COMM_END_DT, 'The commission end date must be greater than commission date!');
                        document.MAINFORM.COMM_END_DT.value = tempExpirayDate;
                        return false;
                    }
                }
                if (document.MAINFORM.NXT_COMM_DT.value != '') {
                    var chkEndDays;
                    chkEndDays = SYS_GetSubDays(document.MAINFORM.COMM_END_DT.name, document.MAINFORM.NXT_COMM_DT.name);
                    if (chkEndDays > 0) {
                        SYS_CheckError(document.MAINFORM.COMM_END_DT, 'The commission end date must be greater than next commission date!');
                        document.MAINFORM.COMM_END_DT.value = tempExpirayDate;
                        return false;
                    }

                }
                return true;
            }
        } catch (e) {
            DisExcpt("SSSS_Participant Details.js", e);
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.COMM_PRE_onchange = function(event) {
    try {
        if (0 > SYS_BeFloat(document.MAINFORM.COMM_PRE.value)) {
            alert("Commission percentage should not accept negative values");
            document.MAINFORM.COMM_PRE.value = 0;
        } else if (SYS_BeFloat(document.MAINFORM.COMM_PRE.value) > 100) {
            alert("Invalid percentage value");
            document.MAINFORM.COMM_PRE.value = 0;
        }
        SYND_TLUNPDCHG_AMT();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.COMM_START_DT_onchange = function(event) {
    try {
        if ((SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt') || (SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') ||
            (SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt')) {
            var subdays;
            var chkEndDays;
            document.MAINFORM.TEMP_ISSUE_DATE.value = SYS_getValueFromMain('MAST_START_DT');
            subdays = SYS_GetSubDays(document.MAINFORM.COMM_START_DT.name, document.MAINFORM.TEMP_ISSUE_DATE.name);
            chkEndDays = SYS_GetSubDays(document.MAINFORM.COMM_START_DT.name, document.MAINFORM.COMM_END_DT.name);
            /* var MDateCheck = document.MAINFORM.TEMP_ISSUE_DATE.value;
    var SyndPtyCheck = document.MAINFORM.SYND_PART_START_DT.value;   */
            if (subdays > 0) {
                alert("Commission commence date should be greater than master start date");
                document.MAINFORM.COMM_START_DT.value = '';
                return false;
            }
            if (chkEndDays < 0) {
                alert("Commission commence date should be earlier than commission end date");
                document.MAINFORM.COMM_START_DT.value = '';
                return false;
            }
        }
        Cal_COMM_DT();
        Cal_NXT_COMM_DT();
        return true;
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.DEC_AMT_onchange = function(event) {
    try {
        INC_DEC_AMT();
        SYND_PART_NAMT_PRE();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.FUND_AMT_onchange = function(event) {
    try {
        var partBal = document.MAINFORM.FUND_AMT.value;
        document.MAINFORM.SYND_PART_BAL.value = 0;
        if (SYS_BeFloat(document.MAINFORM.FUND_AMT.value) < 0) {
            alert("funded amount should not accept negative values");
            document.MAINFORM.FUND_AMT.value = '';
        } else if (SYS_BeFloat(document.MAINFORM.FUND_AMT.value) > SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value)) {
            alert("funded amount should be less than syndication part amount");
            document.MAINFORM.FUND_AMT.value = '';
        } else if (SYS_BeFloat(partBal) > 0) {
            document.MAINFORM.FUND_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, document.MAINFORM.FUND_AMT.value);
            document.MAINFORM.SYND_PART_BAL.value = SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) - SYS_BeFloat(document.MAINFORM.FUND_AMT.value);
            //alert(document.MAINFORM.SYND_PART_BAL.value);
            // document.MAINFORM.SYND_PART_BAL.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, //document.MAINFORM.SYND_PART_BAL.value);
        }
        document.MAINFORM.FUND_FLAG.value = 'PARTFUNDED';
        if (SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) == SYS_BeFloat(document.MAINFORM.FUND_AMT.value)) {
            document.MAINFORM.FUND_FLAG.value = 'Funded';
        } else {
            document.MAINFORM.FUND_FLAG.value = 'PARTFUNDED';
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.FUND_FLAG_onchange = function(event) {
    try {
        FUND_FLG();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.INC_AMT_onchange = function(event) {
    try {
        INC_DEC_AMT();
        SYND_PART_NAMT_PRE();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.NEW_PART_SYND_PER_onchange = function(event) {
    try {
        if (document.MAINFORM.NEW_PART_SYND_PER.value < 0) {
            alert("Participant percentage should not accept negative values");
            document.MAINFORM.NEW_PART_SYND_PER.value = 0;
            document.MAINFORM.SYND_PART_NAMT.value = 0;
        } else {
            NEW_PRE();
            CAL_INC_DEC();
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.NXT_COMM_DT_onchange = function(event) {
    try {
        try {
            try {
                var subdays; // Utility Auto Fix Comments
                var chkEndDays; // Utility Auto Fix Comments
                if (document.MAINFORM.COMM_DT.value != null && document.MAINFORM.COMM_DT.value != '') {
                    subdays = SYS_GetSubDays(document.MAINFORM.NXT_COMM_DT.name, document.MAINFORM.COMM_DT.name);
                    chkEndDays = SYS_GetSubDays(document.MAINFORM.NXT_COMM_DT.name, document.MAINFORM.COMM_END_DT.name);
                    if (subdays > 0) {
                        SYS_CheckError(document.MAINFORM.NXT_COMM_DT, 'The next commission date must be later than commission Date!');
                        document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
                        return false;
                    }
                    if (chkEndDays < 0) {
                        SYS_CheckError(document.MAINFORM.NXT_COMM_DT, 'The next commission date must be earlier than commission end Date!');
                        document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_END_DT.value;
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
                DisExcpt("", e);
            }
        } catch (e) {
            DisExcpt("SSSS_Participant Details.js", e);
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.PART_MAIL_ADD_BTN_onclick = function(event) {
    try {
        Cal_PART_MAIL_ADD();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.PART_PER_onchange = function(event) {
    try {
        PRE();
        document.MAINFORM.FUND_AMT.value = 0;
        document.MAINFORM.SYND_PART_BAL.value = 0;
        if (!CHK_PCPT_AMT()) {
            alert("Please note that the total percent exceeds 100%");
            document.MAINFORM.PART_PER.value = 0;
            document.MAINFORM.SYND_PART_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_ACWTBK_ADD_ORDER_NO_onchange = function(event) {
    try {
        Cal_SYND_ACWTBK_ADD_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_SYND_AC_WT_BK_ADD1();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_AC_WT_BK_ID_onchange = function(event) {
    try {
        GET_SYND_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_SYND_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_AC_WT_BK_SWAD_onchange = function(event) {
    try {
        if (document.MAINFORM.SYND_AC_WT_BK_SWAD.value != '') {
            document.MAINFORM.SYND_ACWT_BK_SWTAG.value = 'A';
        } else if (document.MAINFORM.SYND_AC_WT_BK_NM.value != '' || document.MAINFORM.SYND_AC_WT_BK_ADD1.value != '' || document.MAINFORM.SYND_AC_WT_BK_ADD2.value != '' || document.MAINFORM.SYND_AC_WT_BK_ADD3.value != '') {
            document.MAINFORM.SYND_ACWT_BK_SWTAG.value = 'D';
        } else {
            document.MAINFORM.SYND_ACWT_BK_SWTAG.value = '';
        }
        Cal_SYND_AC_WT_BK_SWAD();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_ADD_BTN_onclick = function(event) {
    try {
        Cal_SYND_PART_ADD1();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value) < 0) {
            alert("Participant amount should not accepts negative values");
            document.MAINFORM.SYND_PART_AMT.value = '';
            document.MAINFORM.PART_PER.value = '';
        } else {
            document.MAINFORM.FUND_AMT.value = 0;
            document.MAINFORM.SYND_PART_BAL.value = 0;
            INC_DEC_AMT();
            SYND_PART_AMT();
            if (!CHK_PCPT_AMT()) {
                alert("Please note that the total percent exceeds 100%");
                document.MAINFORM.PART_PER.value = 0;
                document.MAINFORM.SYND_PART_AMT.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_CCY_onchange = function(event) {
    try {
        INC_DEC_AMT();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_ID_onchange = function(event) {
    try {
        if ("RegSyndByPartpt" == SYS_FUNCTION_NAME || SYS_ORG_FUNCTION_NAME == 'RegSyndByPartpt' || SYS_ORG_FUNCTION_NAME == 'AmendSyndByPartpt' || SYS_ORG_FUNCTION_NAME == 'SyndClaim_LG') {
            Cal_VIEW_NameAndMailFld();
        }
        GET_SYND_PART_ID();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_ID_BTN_onclick = function(event) {
    try {
        Cal_SYND_PART_ID();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_LIABACNO_onchange = function(event) {
    try {
        try {
            var chkAcno = document.MAINFORM.SYND_PART_LIABACNO.value;
            if (SYM_SYND_chk_faxNo(chkAcno)) {
                alert("Invalid Account number");
                document.MAINFORM.SYND_PART_LIABACNO.value = '';
            }
        } catch (e) {
            DisExcpt("SSSS_Participant Details.js", e);
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_NAMT_onchange = function(event) {
    try {
        CAL_INC_DEC();
        SYND_PART_NAMT_PRE();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_ORDER_MAIL_onchange = function(event) {
    try {
        Cal_SYND_PART_ORDER_MAIL();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_ORDER_NO_onchange = function(event) {
    try {
        Cal_SYND_PART_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_START_DT_onchange = function(event) {
    try {
        document.MAINFORM.TEMP_ISSUE_DATE.value = SYS_getValueFromMain('PCPT_START_DT');
        var subdays = SYS_GetSubDays(document.MAINFORM.SYND_PART_START_DT.name, document.MAINFORM.TEMP_ISSUE_DATE.name);
        if (subdays > 0) {
            alert("Syndication start date should be greater than master start date");
            document.MAINFORM.SYND_PART_START_DT.value = '';
            return false;
        }
        document.MAINFORM.COMM_START_DT.value = document.MAINFORM.SYND_PART_START_DT.value;
        EEHtml.fireEvent(document.MAINFORM.COMM_START_DT, "onchange");
        return true;
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.SYND_PART_SW_ADD.value != '') {
            document.MAINFORM.SYND_PART_SW_TAG.value = 'A';
        } else if (document.MAINFORM.SYND_PART_NM.value != '' || document.MAINFORM.SYND_PART_ADD1.value != '' || document.MAINFORM.SYND_PART_ADD2.value != '' || document.MAINFORM.SYND_PART_ADD3.value != '') {
            document.MAINFORM.SYND_PART_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.SYND_PART_SW_TAG.value = '';
        }
        Cal_SYND_PART_SW_ADD();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_PART_TYPE_onchange = function(event) {
    try {
        document.MAINFORM.SYND_PART_ID.value = '';
        document.MAINFORM.SYND_PART_NM.value = '';
        document.MAINFORM.SYND_PART_ADD1.value = '';
        document.MAINFORM.SYND_PART_ADD2.value = '';
        document.MAINFORM.SYND_PART_ADD3.value = '';
        document.MAINFORM.SYND_PART_CNTY_CD.value = '';
        document.MAINFORM.SYND_PART_SW_ADD.value = '';
        document.MAINFORM.SYND_PART_SW_TAG.value = '';
        document.MAINFORM.PART_EMAIL_ADD.value = '';
        document.MAINFORM.PART_FAX_NO.value = '';
        document.MAINFORM.PART_MAIL_ADD.value = '';
        document.MAINFORM.PART_TLX_NO.value = '';
        document.MAINFORM.SYND_PART_NOTES.value = '';
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}

csDOScreenProto.SYND_TLUNPDCHG_AMT_onchange = function(event) {
    try {
        COMM_PRE();
    } catch (e) {
        DisExcpt("SSSS_Participant Details.js", e);
    }
}