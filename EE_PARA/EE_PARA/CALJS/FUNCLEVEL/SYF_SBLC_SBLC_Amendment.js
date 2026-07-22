var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PreInitValues = function() {
    try {

        //document.MAINFORM.AMD_DT.value=SYS_BUSI_DATE;
        //document.MAINFORM.NEW_POS_TOL.value='';
        //document.MAINFORM.NEW_NEG_TOL.value='';
        //SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL,'P');
        //SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL,'P');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_New_Expiry_Date_Check = function() {
    try {

        var ndays1; // Utility Auto Fix Comments
        ndays1 = SYS_GetSubDays(document.MAINFORM.NEW_EXPIRY_DT.name, document.MAINFORM.AMD_DT.name);
        if (ndays1 > 0) {
            alert(' New Expiry Date  must be Later than the Amendment Date');
            document.MAINFORM.NEW_EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_DisableTab = function() {
    try {

        EEHtml.getElementById('C').style.display = 'none';
        EEHtml.getElementById('D').style.display = 'none';
        EEHtml.getElementById('E').style.display = 'none';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_SBLC_COUNTER_GTEE_FLG();
        SYF_SBLC_NEW_SBLC_BAL();
        SYF_SBLC_Format_Issue();
        disableToolbarButton("_SaveTmpl");
        disableToolbarButton("_LoadTmpl");
        SYT_CHG_INIT('SYF_SBLC_CHG_INIT_RUN');
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        SYF_SBLC_DisableTab();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'M');

        SYT_DisableDivClass('partiesTab');
        SYT_ChangeFldClass(document.MAINFORM.CUST_REF, 'O');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_REF, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AMT_SPEC, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEW_RENEWAL_STATUS, 'M');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BTN, 'P');
        SYF_SBLC_Amend_Amount_Format();
        SYT_ChangeFldClass(document.MAINFORM.FOR_ACCT_NR_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NO_OF_AMD_B, 'O');
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.FOR_ACCT_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.FOR_ACCT_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        FLD_SBLC_ISSUE_BK_ID_onchange();
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYF_SBLC_Check_Incr_Decr();
        SYM_SBLC_AMEND_LC_CCY();
        SYM_SBLC_AMEND_EXCH_RT();
        SYM_SBLC_Show_Format_MT707();
        SYM_SBLC_Show_Format_MT767();
        SYM_SBLC_Show_Format_Amend_Mail();
        SYF_SBLC_Amend_Ref();

        document.MAINFORM.NEW_FREQUENCY.value = document.MAINFORM.FREQUENCY.value;
        document.MAINFORM.NEW_RENEWAL_DAYS.value = document.MAINFORM.RENEWAL_DAYS.value;
        document.MAINFORM.NEW_FINAL_EXPIRY_DT.value = document.MAINFORM.FINAL_EXPIRY_DT.value;
        document.MAINFORM.NEW_NOTIFY_DATE.value = document.MAINFORM.NOTIFY_DATE.value;
        document.MAINFORM.NEW_NOTIFY_DAYS.value = document.MAINFORM.NOTIFY_DAYS.value;
        document.MAINFORM.NEW_NRENEW_ADV_DATE.value = document.MAINFORM.NRENEW_ADV_DATE.value;
        document.MAINFORM.NEW_NRENEW_ADV_PERIOD.value = document.MAINFORM.NRENEW_ADV_PERIOD.value;
        document.MAINFORM.NEW_RENEWAL_STATUS.value = document.MAINFORM.RENEWAL_STATUS.value;
        EEHtml.getElementById('F').style.display = 'none';
        SYT_ChangeFldClass(document.MAINFORM.NEW_FREQUENCY, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_RENEWAL_STATUS, 'O');
        if (document.MAINFORM.MESG_TYPE.value == 'MT707') {
            SYT_ChangeFldClass(document.MAINFORM.AMD_DETAILS, 'P');
        }
        if (document.MAINFORM.NO_OF_AMD_B.value == '' || document.MAINFORM.NO_OF_AMD_B.value == 0) {
            document.MAINFORM.NO_OF_AMD_B.value = '';
        }
        SYF_SBLC_Further_Identity_Check();
        SYF_SBLC_Days_To_Renewal();
        SYF_SBLC_ChangeFldClass();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_CONF_BAL, "onchange");
        FLD_SBLC_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Amendment_Date_Check = function() {
    try {

        var ndays1; // Utility Auto Fix Comments
        ndays1 = SYS_GetSubDays(document.MAINFORM.NEW_EXPIRY_DT.name, document.MAINFORM.AMD_DT.name);

        if (ndays1 > 0) {
            alert(' Amendmend Date should be Later  Than  New Expiry date');
            document.MAINFORM.AMD_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_707FieldTab = function() {
    try {

        document.MAINFORM.NEW_ADDIT_COV_AMT.value = '';
        document.MAINFORM.NEW_SHIP_PRD.value = '';
        document.MAINFORM.NEW_ORIGIN.value = '';
        document.MAINFORM.NEW_OLD_LOAD_PORT.value = '';
        document.MAINFORM.NEW_OLD_DEST_PORT.value = '';
        document.MAINFORM.NEW_DEST_PORT.value = '';
        document.MAINFORM.NEW_LTST_SHIP_DT.value = '';
        document.MAINFORM.NEW_CHARGES.value = '';
        document.MAINFORM.NEW_PRES_PRD_TXT.value = '';
        document.MAINFORM.MT707_SEND_TO_RCV_INFO.value = '';
        document.MAINFORM.NARR.value = '';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return Cal_eloan_fields_SBLC();
        var DEC_AMT; // Utility Auto Fix Comments
        var FINAL_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var LC_AMT; // Utility Auto Fix Comments
        var NEW_LC_AMT; // Utility Auto Fix Comments
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        NEW_LC_AMT = SYS_BeFloat(document.MAINFORM.NEW_LC_AMT.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        if (INC_AMT == '0' && DEC_AMT == '0') {
            document.MAINFORM.TEMP_NEW_LC_AMT.value = 0;
        } else {
            FINAL_AMT = LC_AMT + INC_AMT - DEC_AMT;
            document.MAINFORM.TEMP_NEW_LC_AMT.value = FINAL_AMT;
            document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, FINAL_AMT);
        }
        if (document.MAINFORM.AMD_TOL.value == 'TOLERANCE') {
            if (document.MAINFORM.NEW_POS_TOL.value != 0 && document.MAINFORM.NEW_NEG_TOL.value != 0) {
                if (document.MAINFORM.NEW_POS_TOL.value <= 9 && document.MAINFORM.NEW_NEG_TOL.value <= 9) {
                    document.MAINFORM.TEMP_MT707_NEW_POS_TOL.value = "0" + document.MAINFORM.NEW_POS_TOL.value;
                    document.MAINFORM.TEMP_MT707_NEW_NEG_TOL.value = "0" + document.MAINFORM.NEW_NEG_TOL.value;
                } else if (document.MAINFORM.NEW_POS_TOL.value <= 9 && document.MAINFORM.NEW_NEG_TOL.value > 9) {
                    document.MAINFORM.TEMP_MT707_NEW_POS_TOL.value = "0" + document.MAINFORM.NEW_POS_TOL.value;
                    document.MAINFORM.TEMP_MT707_NEW_NEG_TOL.value = "" + document.MAINFORM.NEW_NEG_TOL.value;
                } else if (document.MAINFORM.NEW_POS_TOL.value > 9 && document.MAINFORM.NEW_NEG_TOL.value <= 9) {
                    document.MAINFORM.TEMP_MT707_NEW_POS_TOL.value = document.MAINFORM.NEW_POS_TOL.value;
                    document.MAINFORM.TEMP_MT707_NEW_NEG_TOL.value = "0" + document.MAINFORM.NEW_NEG_TOL.value;
                } else {
                    document.MAINFORM.TEMP_MT707_NEW_POS_TOL.value = document.MAINFORM.NEW_POS_TOL.value;
                    document.MAINFORM.TEMP_MT707_NEW_NEG_TOL.value = "" + document.MAINFORM.NEW_NEG_TOL.value;
                }
            }
            if (document.MAINFORM.NEW_POS_TOL.value != 0 && document.MAINFORM.NEW_NEG_TOL.value == 0) {
                if (document.MAINFORM.NEW_POS_TOL.value <= 9) {
                    document.MAINFORM.TEMP_MT707_NEW_POS_TOL.value = "0" + document.MAINFORM.NEW_POS_TOL.value;
                    document.MAINFORM.TEMP_MT707_NEW_NEG_TOL.value = "00";
                } else {
                    document.MAINFORM.TEMP_MT707_NEW_POS_TOL.value = document.MAINFORM.NEW_POS_TOL.value;
                    document.MAINFORM.TEMP_MT707_NEW_NEG_TOL.value = "00";
                }
            }
            if (document.MAINFORM.NEW_POS_TOL.value == 0 && document.MAINFORM.NEW_NEG_TOL.value != 0) {
                if (document.MAINFORM.NEW_NEG_TOL.value <= 9) {
                    document.MAINFORM.TEMP_MT707_NEW_POS_TOL.value = "00";
                    document.MAINFORM.TEMP_MT707_NEW_NEG_TOL.value = "0" + document.MAINFORM.NEW_NEG_TOL.value;
                } else {
                    document.MAINFORM.TEMP_MT707_NEW_POS_TOL.value = "00";
                    document.MAINFORM.TEMP_MT707_NEW_NEG_TOL.value = document.MAINFORM.NEW_NEG_TOL.value;
                }
            }
            if (document.MAINFORM.NEW_POS_TOL.value == 0 && document.MAINFORM.NEW_NEG_TOL.value == 0) {
                document.MAINFORM.TEMP_MT707_NEW_POS_TOL.value = '';
                document.MAINFORM.TEMP_MT707_NEW_NEG_TOL.value = '';
            }
        } else if (document.MAINFORM.AMD_TOL.value == 'NO CHANGE') {
            document.MAINFORM.TEMP_MT707_NEW_NEG_TOL.value = '';
            document.MAINFORM.TEMP_MT707_NEW_POS_TOL.value = '';
        }
        SYF_SBLC_No_Of_Amd_Corres();
        document.MAINFORM.TEMP_SEND_TO_RCV_INFO_MT707.value = document.MAINFORM.MT707_SEND_TO_RCV_INFO.value;
        document.MAINFORM.TEMP_SEND_TO_RCV_INFO_MT767.value = document.MAINFORM.MT767_SEND_TO_RCV_INFO.value;
        return SYM_SBLC_CHK_COMM_END_DT();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Expiry_Date_Check = function() {
    try {

        var ndays1; // Utility Auto Fix Comments
        ndays1 = SYS_GetSubDays(document.MAINFORM.NEW_FINAL_EXPIRY_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (ndays1 < 0) {
            alert('New Expiry Date Should be later than Expiry Date');

        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CHG_INIT_RUN = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'IQ') {
            //SYM_SBLC_CAL_ADV_COMM();
            //SYM_SBLC_CAL_ISS_COMM();
            //	SYM_SBLC_CAL_POST_COMM();
            SYM_SBLC_CAL_OTHER_CHARGE();
            //	SYT_CAL_COURIER();
            SYM_SBLC_CAL_AMD_CHG();
            SYM_SBLC_CAL_COMMUN_CHG();
            //	SYT_CAL_POST();
            //	SYT_CAL_CABLE();	
        }
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'P');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_No_Of_Amend = function() {
    try {

        var no; // Utility Auto Fix Comments
        no = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        document.MAINFORM.NO_OF_AMD.value = no + 1;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        //document.MAINFORM.TEMP_N90_REF_20.value=document.MAINFORM.C_MAIN_REF.value;
        //document.MAINFORM.TEMP_N90_REF_21.value=document.MAINFORM.NO_OF_AMD.value;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_No_Of_Amd_Corres = function() {
    try {

        if (document.MAINFORM.NO_OF_AMD_B.value == '' || document.MAINFORM.NO_OF_AMD_B.value == 0) {
            document.MAINFORM.TEMP_MT707_NO_OF_AMD_B.value = '';
        }
        if (document.MAINFORM.NO_OF_AMD_B.value <= 9 && document.MAINFORM.NO_OF_AMD_B.value != 0) {
            document.MAINFORM.TEMP_MT707_NO_OF_AMD_B.value = "0" + document.MAINFORM.NO_OF_AMD_B.value;
        }
        if (document.MAINFORM.NO_OF_AMD_B.value > 9) {
            document.MAINFORM.TEMP_MT707_NO_OF_AMD_B.value = document.MAINFORM.NO_OF_AMD_B.value;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Amend_Amount_Format = function() {
    try {

        document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.INC_AMT.value);
        document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.DEC_AMT.value);
        document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_LC_AMT.value);
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_LC_BAL.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Amend_Tolerance_Check = function() {
    try {

        if (document.MAINFORM.AMD_TOL.value == 'TOLERANCE') {
            document.MAINFORM.NEW_POS_TOL.value = '0';
            document.MAINFORM.NEW_NEG_TOL.value = '0';
            document.MAINFORM.NEW_AMT_SPEC.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, 'O');
        } else {
            document.MAINFORM.NEW_NEG_TOL.value = '';
            document.MAINFORM.NEW_POS_TOL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, 'P');
        }

        if (document.MAINFORM.AMD_TOL.value == 'MAXIMUM CREDIT AMOUNT') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_AMT_SPEC, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_AMT_SPEC, 'P');
        }
        if (document.MAINFORM.AMD_TOL.value == 'NO CHANGE') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_AMT_SPEC, 'P');
            document.MAINFORM.NEW_AMT_SPEC.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_NEW_LC_Amt = function() {
    try {

        var DEC_AMT; // Utility Auto Fix Comments
        var EXCH_RT; // Utility Auto Fix Comments
        var INCR_DECR; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var LC_BAL_UPD; // Utility Auto Fix Comments
        var POS_NEW_TOL; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var sLC_AMT; // Utility Auto Fix Comments
        sLC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        INCR_DECR = sLC_AMT + INC_AMT - DEC_AMT;
        document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, INCR_DECR);
        POS_TOL = document.MAINFORM.POS_TOL.value;
        POS_NEW_TOL = document.MAINFORM.NEW_POS_TOL.value;
        EXCH_RT = document.MAINFORM.EXCH_RATE.value;
        LC_BAL_UPD = '';

        if (document.MAINFORM.AMD_TOL.value == 'NO CHANGE') {
            LC_BAL_UPD = Math.abs(INC_AMT - DEC_AMT);
            document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_BAL_UPD);
            document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, (LC_BAL_UPD * EXCH_RT));
        } else if (document.MAINFORM.AMD_TOL.value == 'TOLERANCE' || document.MAINFORM.AMD_TOL.value == 'MAXIMUM CREDIT AMOUNT') {
            LC_BAL_UPD = Math.abs((((INC_AMT - DEC_AMT) * (1 + POS_NEW_TOL / 100)) + (sLC_AMT * (POS_NEW_TOL / 100))));
            document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_BAL_UPD);
            document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, (LC_BAL_UPD * EXCH_RT));
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Update_Balancy_By = function() {
    try {

        var update_balance; // Utility Auto Fix Comments
        //alert("INC_AMT is :" + document.MAINFORM.INC_AMT.value);
        //alert("DEC_AMT is :" + document.MAINFORM.DEC_AMT.value);
        alert("LC_AMT is :" + document.MAINFORM.LC_AMT.value);
        //alert("POS_TOL is :" + document.MAINFORM.POS_TOL.value);
        //alert("NEG TOL is :" + document.MAINFORM.NEG_TOL.value);
        //alert("NEW POS TOL is :" + document.MAINFORM.NEW_POS_TOL.value);

        if (document.MAINFORM.AMD_TOL.value == 'NO CHANGE') {
            update_balance = (document.MAINFORM.INC_AMT.value - document.MAINFORM.DEC_AMT.value) * (1 + document.MAINFORM.POS_TOL.value / 100);
            document.MAINFORM.NEW_LC_BAL.value = update_balance;

        } else if (document.MAINFORM.AMD_TOL.value == 'MAXIMUM CREDIT AMOUNT' || document.MAINFORM.AMD_TOL.value == 'TOLERANCE') {
            update_balance = (((document.MAINFORM.INC_AMT.value - document.MAINFORM.DEC_AMT.value) * (1 + document.MAINFORM.NEW_POS_TOL.value / 100)) + // Utility Auto Fix Comments
                (document.MAINFORM.LC_AMT.value * (document.MAINFORM.NEW_POS_TOL.value / 100 - document.MAINFORM.POS_TOL.value / 100)));
            document.MAINFORM.NEW_LC_BAL.value = update_balance;

        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_NEW_EXPIRT_DATE_onChange = function() {
    try {

        var date1; // Utility Auto Fix Comments
        var expirydate; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var nDays; // Utility Auto Fix Comments
        var nDays1; // Utility Auto Fix Comments
        var nDays2; // Utility Auto Fix Comments
        var nonrenewaldate; // Utility Auto Fix Comments
        var nonrenewaldatefinal; // Utility Auto Fix Comments
        var nonrenewalperiod; // Utility Auto Fix Comments
        var notifdate; // Utility Auto Fix Comments
        var notifdatefinal; // Utility Auto Fix Comments
        var notifperiod; // Utility Auto Fix Comments
        var tempdate; // Utility Auto Fix Comments
        var tempdate1; // Utility Auto Fix Comments
        var tempmonth; // Utility Auto Fix Comments
        var tempmonth1; // Utility Auto Fix Comments
        if (document.MAINFORM.NEW_EXPIRY_DT.value != '') {
            nDays = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.EXPIRY_DT.name);

            document.MAINFORM.RENEWAL_DAYS.value = nDays;

            notifperiod = document.MAINFORM.NOTIFY_DAYS.value;
            nonrenewalperiod = document.MAINFORM.NRENEW_ADV_PERIOD.value;

            //expirydate = new Date(document.MAINFORM.NEW_EXPIRY_DT.value);
            expirydate = document.MAINFORM.NEW_EXPIRY_DT.value;
            expirydate = expirydate.replace(/-/g, '/');
            expirydate = new Date(expirydate);
            //nonrenewaldate = new Date(document.MAINFORM.NEW_EXPIRY_DT.value);
            nonrenewaldate = document.MAINFORM.NEW_EXPIRY_DT.value;
            nonrenewaldate = nonrenewaldate.replace(/-/g, '/');
            nonrenewaldate = new Date(nonrenewaldate);

            notifdate = document.MAINFORM.NEW_EXPIRY_DT.value;
            notifdate = notifdate.replace(/-/g, '/');
            notifdate = new Date(notifdate);

            date1 = notifdate.getDate();
            month = notifdate.getMonth();
            notifdate.setDate(date1 - notifperiod);
            nonrenewaldate.setDate(date1 - nonrenewalperiod);

            tempdate = notifdate.getDate();
            tempmonth = notifdate.getMonth();
            tempdate1 = nonrenewaldate.getDate();
            tempmonth1 = nonrenewaldate.getMonth();


            if (tempmonth < 9) {
                tempmonth = tempmonth + 1;
                tempmonth = "0" + tempmonth;
            } else {
                tempmonth = tempmonth + 1;

            }
            if (tempdate < 9) {
                tempdate = "0" + tempdate;
            }

            notifdatefinal = tempmonth + "-" + tempdate + "-" + notifdate.getFullYear();
            document.MAINFORM.NOTIFY_DATE.value = getDate(SYS_DATE_FORMAT, notifdatefinal);
            nDays1 = SYS_GetSubDays(document.MAINFORM.NOTIFY_DATE.name, document.MAINFORM.ISSUE_DT.name);

            if (tempmonth1 < 9) {
                tempmonth1 = tempmonth1 + 1;
                tempmonth1 = "0" + tempmonth1;
            } else {
                tempmonth1 = tempmonth1 + 1;

            }
            if (tempdate1 < 9) {
                tempdate1 = "0" + tempdate1;
            }

            nonrenewaldatefinal = tempmonth1 + "-" + tempdate1 + "-" + nonrenewaldate.getFullYear();
            document.MAINFORM.NRENEW_ADV_DATE.value = getDate(SYS_DATE_FORMAT, nonrenewaldatefinal);

            nDays2 = SYS_GetSubDays(document.MAINFORM.NOTIFY_DATE.name, document.MAINFORM.NRENEW_ADV_DATE.name);

            if (nDays2 < 0) {
                alert("Non-Renewal Advice Date should be later than Notification Date");
                document.MAINFORM.NRENEW_ADV_DATE.value = '';
                document.MAINFORM.NRENEW_ADV_PERIOD.value = '';
                EEHtml.getElementById("NRENEW_DATE").focus();
            }
            if (nDays1 >= 0) {
                //alert("Notification Date should be later than Issue Date");
                document.MAINFORM.NOTIFY_DATE.value = '';
                document.MAINFORM.NOTIFY_DAYS.value = '';
                document.MAINFORM.NRENEW_ADV_DATE.value = '';
                document.MAINFORM.NRENEW_ADV_PERIOD.value = '';
                //EEHtml.getElementById("NOTIFY_DATE").focus();
            } else {
                document.MAINFORM.NOTIFY_DATE.value = getDate(SYS_DATE_FORMAT, notifdatefinal);
            }


        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_NOTIFY_DATE_CHECK = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Days_To_Renewal = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        //if(document.MAINFORM.NEW_EXPIRY_DT.value !='')
        //{

        nDays = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (nDays <= 0) {
            document.MAINFORM.NEW_RENEWAL_DAYS.value = '';
        } else if (nDays > 0 && document.MAINFORM.AUTO_RENEW.value == 'YES') {
            document.MAINFORM.NEW_RENEWAL_DAYS.value = nDays;
        }
        //}
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust", "N", FALSE);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Final_Expiry_Date_Check = function() {
    try {

        var ndays; // Utility Auto Fix Comments
        ndays = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.NEW_FINAL_EXPIRY_DT.name);

        if (ndays < 0) {
            alert('Final Expiry Date must be later than Expiry Date ');
            document.MAINFORM.NEW_FINAL_EXPIRY_DT.value = '';
            document.MAINFORM.NEW_RENEWAL_DAYS.value = '';
        } else {
            document.MAINFORM.NEW_RENEWAL_DAYS.value = ndays;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Further_Identity_Check = function() {
    try {

        if (document.MAINFORM.MESG_TYPE.value == 'MT707') {
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
        } else if (document.MAINFORM.MESG_TYPE.value == 'MT767') {
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'M');
        } else if (document.MAINFORM.MESG_TYPE.value == 'MAIL') {
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.SBLC_CLM_BAL.value = document.MAINFORM.NEW_LC_CONF_BAL.value;
        var Final_Expiry_Dt; // Utility Auto Fix Comments
        var Frequency; // Utility Auto Fix Comments
        var NRENEW_ADV_DATE; // Utility Auto Fix Comments
        var NRENEW_ADV_PERIOD; // Utility Auto Fix Comments
        var Notif_Date; // Utility Auto Fix Comments
        var Notif_Period; // Utility Auto Fix Comments
        var RENEWAL_STATUS; // Utility Auto Fix Comments
        var Renew_Days; // Utility Auto Fix Comments
        document.MAINFORM.CURRNT_STATUS.value = 'Amendment';
        if (document.MAINFORM.DETRMNTL_FLG.value == 'NO') {
            document.MAINFORM.NXT_STATUS.value = "AmdLc";
        } else {
            document.MAINFORM.NXT_STATUS.value = "";
        }
        SYM_SBLC_CAL_TEMP_FIELDS_AMD();
        SYM_SBLC_CAL_TEMP_AMPOUNT_AMD();
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_New_Expiry_Final_Expiry_Date_Check = function() {
    try {

        var ndays; // Utility Auto Fix Comments
        ndays = SYS_GetSubDays(document.MAINFORM.NEW_FINAL_EXPIRY_DT.name, document.MAINFORM.NEW_EXPIRY_DT.name);
        if (ndays > 0) {
            alert('New Expiry Date must be Lesser than Final Expiry Date');
            document.MAINFORM.NEW_EXPIRY_DT.value = '';
            //document.MAINFORM.NEW_FINAL_EXPIRY_DT.value='';
        } else {
            document.MAINFORM.NEW_RENEWAL_DAYS.value = ndays;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Amend_Ref = function() {
    try {

        if (document.MAINFORM.NO_OF_AMD.value != '') {
            document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value + '/' + document.MAINFORM.NO_OF_AMD.value;
        } else {
            document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_AutoRenewalTab = function() {
    try {

        document.MAINFORM.NEW_FREQUENCY.value = '';
        document.MAINFORM.NEW_FINAL_EXPIRY_DT.value = '';
        document.MAINFORM.NEW_RENEWAL_DAYS.value = '';
        document.MAINFORM.NEW_NOTIFY_DATE.value = '';
        document.MAINFORM.NEW_NOTIFY_DAYS.value = '';
        document.MAINFORM.NEW_NRENEW_ADV_DATE.value = '';
        document.MAINFORM.NEW_NRENEW_ADV_PERIOD.value = '';
        document.MAINFORM.NEW_RENEWAL_STATUS.value = '';

        /*
document.MAINFORM.FREQUENCY.value='';
document.MAINFORM.FINAL_EXPIRY_DT.value='';
document.MAINFORM.RENEWAL_DAYS.value='';
document.MAINFORM.NOTIFY_DAYS.value='';
document.MAINFORM.NOTIFY_DATE.value='';
document.MAINFORM.NRENEW_ADV_PERIOD.value='';
document.MAINFORM.NRENEW_ADV_DATE.value='';
document.MAINFORM.RENEWAL_STATUS.value='';

*/
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Check_Incr_Decr = function() {
    try {

        var Decr_Amt; // Utility Auto Fix Comments
        var Inc_Amt; // Utility Auto Fix Comments
        var sLC_AMT; // Utility Auto Fix Comments
        Inc_Amt = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        Decr_Amt = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        sLC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.INC_AMT.value);
        document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.DEC_AMT.value);
        if (Inc_Amt > 0) {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');
        }

        if (Decr_Amt > 0) {
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'O');
        }

        if (Decr_Amt > sLC_AMT) {
            alert("Decrease Amount By cannot be more than New LC Amount");
            document.MAINFORM.NEW_LC_AMT.value = document.MAINFORM.LC_AMT.value;
            document.MAINFORM.DEC_AMT.value = '';
            document.MAINFORM.NEW_LC_BAL.value = '';
            document.MAINFORM.NEW_LIAB_BAL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Cal_TEMP_N90_REF_20 = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        var amt; // Utility Auto Fix Comments
        SYF_SBLC_No_Of_Amend();
        SYF_SBLC_Amend_Ref();
        document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.MESG_TYPE.value = '';
        document.MAINFORM.NEW_EXPIRY_DT.value = '';
        document.MAINFORM.NO_OF_AMD_B.value = '';
        document.MAINFORM.CURRNT_STATUS.value = 'Amendment';
        document.MAINFORM.NXT_STATUS.value = 'Active';
        document.MAINFORM.PER_POS_TOL.value = document.MAINFORM.POS_TOL.value;
        document.MAINFORM.PER_NEG_TOL.value = document.MAINFORM.NEG_TOL.value;
        document.MAINFORM.MT707_SEND_TO_RCV_INFO.value = '';
        document.MAINFORM.FURTHER_IDENTITY.value = '';
        amt = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        document.MAINFORM.LC_AMT.value = amt;
        document.MAINFORM.NEW_LC_AMT.value = document.MAINFORM.LC_AMT.value;
        document.MAINFORM.NEW_LC_CONF_BAL.value = document.MAINFORM.LC_BAL.value;
        SYF_SBLC_Amend_Tolerance_Check();
        SYF_SBLC_Format_Issue();
        document.MAINFORM.TEMP_COMM_START_DT.value = document.MAINFORM.COMM_START_DT.value;
        document.MAINFORM.TEMP_COMM_END_DT.value = document.MAINFORM.COMM_END_DT.value;
        document.MAINFORM.TEMP_COMM_DT.value = document.MAINFORM.COMM_DT.value;
        document.MAINFORM.TEMP_NXT_COMM_DT.value = document.MAINFORM.NXT_COMM_DT.value;
        document.MAINFORM.TEMP_TOTAL_ISS_COMM.value = document.MAINFORM.TOTAL_ISS_COMM.value;
        document.MAINFORM.TEMP_CURRENT_COMM.value = document.MAINFORM.CURRENT_COMM.value;
        document.MAINFORM.TEMP_COMM_BAL.value = document.MAINFORM.COMM_BAL.value;
        document.MAINFORM.TEMP_PERIOD.value = document.MAINFORM.PERIOD.value;
        document.MAINFORM.TEMP_NO_OF_PERIODS.value = document.MAINFORM.NO_OF_PERIODS.value;
        document.MAINFORM.ADV_BK_REF.value = 'NONREF';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_767Field_Tab = function() {
    try {

        document.MAINFORM.AMD_DETAILS.value = '';
        document.MAINFORM.MT767_SEND_TO_RCV_INFO.value = '';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_To_Decimals = function() {
    try {

        document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.DEC_AMT.value);
        document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.INC_AMT.value);
        document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.NEW_LC_AMT.value);
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.NEW_LC_BAL.value);
        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.NEW_LIAB_BAL.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_Mail_tab = function() {
    try {

        document.MAINFORM.AMD_NARR.value = '';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Format_Issue = function() {
    try {

        if (document.MAINFORM.MESG_TYPE_ISSUE.value == 'MT760') {
            document.MAINFORM.MESG_TYPE.value = 'MT767';
            SYT_DisableDivClass('PaymentMT760_Tab_div');
            EEHtml.getElementById('PaymentMT760_Tab').style.display = "block";
        } else if (document.MAINFORM.MESG_TYPE_ISSUE.value == 'MT700') {
            document.MAINFORM.MESG_TYPE.value = 'MT707';
            SYT_DisableDivClass('PaymentMT760_Tab_div');
            EEHtml.getElementById('PaymentMT760_Tab').style.display = "none";
        } else {
            document.MAINFORM.MESG_TYPE.value = 'MAIL';
            SYT_DisableDivClass('PaymentMT760_Tab_div');
            EEHtml.getElementById('PaymentMT760_Tab').style.display = "none";
        }

        SYF_SBLC_MESG_TYPE();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_MESG_TYPE = function() {
    try {

        if (document.MAINFORM.MESG_TYPE.value == 'MT707') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_REF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AMD_DETAILS, 'P');
            SYF_SBLC_Clear_767Field_Tab();
            SYF_SBLC_Clear_Mail_tab();
            //SYF_SBLC_Clear_707FieldTab();
            SYT_ChangeFldClass(document.MAINFORM.Amendment_Text, 'O');
            EEHtml.getElementById('C').style.display = "";
            EEHtml.getElementById('D').style.display = 'none';
            EEHtml.getElementById('E').style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
            document.MAINFORM.FURTHER_IDENTITY.value = '';
        } else if (document.MAINFORM.MESG_TYPE.value == 'MT767') {
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AMD_DETAILS, 'M');
            document.MAINFORM.FURTHER_IDENTITY.value = 'ISSUE';
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_REF, 'M');
            //SYF_SBLC_Clear_707FieldTab();
            SYF_SBLC_Clear_Mail_tab();
            SYT_ChangeFldClass(document.MAINFORM.Amendment_Text, 'O');
            EEHtml.getElementById('D').style.display = "";
            EEHtml.getElementById('C').style.display = 'none';
            EEHtml.getElementById('E').style.display = 'none';
        } else if (document.MAINFORM.MESG_TYPE.value == 'MAIL') {
            SYF_SBLC_Clear_707FieldTab();
            SYF_SBLC_Clear_767Field_Tab();
            EEHtml.getElementById('E').style.display = "";
            EEHtml.getElementById('D').style.display = 'none';
            EEHtml.getElementById('C').style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
            document.MAINFORM.FURTHER_IDENTITY.value = '';
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_REF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AMD_DETAILS, 'P');
        } else {
            EEHtml.getElementById('C').style.display = 'none';
            EEHtml.getElementById('E').style.display = 'none';
            EEHtml.getElementById('D').style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
            document.MAINFORM.FURTHER_IDENTITY.value = '';
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_REF, 'O');
            SYF_SBLC_Clear_707FieldTab();
            SYF_SBLC_Clear_767Field_Tab();
            SYF_SBLC_Clear_Mail_tab();
        }
        SYF_SBLC_Cal_PURP_OF_MESS_Option();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_ChangeFldClass = function() {
    try {

        debugger;
        var DETRMNTL_FLG; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var LC_AMT; // Utility Auto Fix Comments
        var expiry_dt; // Utility Auto Fix Comments
        var new_LC_AMT; // Utility Auto Fix Comments
        var new_expiry_dt; // Utility Auto Fix Comments
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        new_LC_AMT = SYS_BeFloat(document.MAINFORM.NEW_LC_AMT.value);
        expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.EXPIRY_DT.value);
        new_expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.NEW_EXPIRY_DT.value);
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        DETRMNTL_FLG = document.MAINFORM.DETRMNTL_FLG.value;

        if ((DETRMNTL_FLG == 'NO' && LC_AMT >= new_LC_AMT) || (DETRMNTL_FLG != 'NO')) {
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
                    //ISS_COMM.protectChargeFor();
                    //ISS_COMM.protectChargeAt();
                    //ISS_COMM._protectActiveAmt(); // Utility Auto Fix Comments
                    //ISS_COMM._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Part in Advance':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'M');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'O');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    //ISS_COMM.protectChargeFor();
                    //ISS_COMM.protectChargeAt();
                    //ISS_COMM._protectActiveAmt(); // Utility Auto Fix Comments
                    //ISS_COMM._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Weekly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    //ISS_COMM_WEEK.protectChargeFor();
                    //ISS_COMM_WEEK.protectChargeAt();
                    //ISS_COMM_WEEK._protectActiveAmt(); // Utility Auto Fix Comments
                    //ISS_COMM_WEEK._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Monthly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    //ISS_COMM_MONTH.protectChargeFor();
                    //ISS_COMM_MONTH.protectChargeAt();
                    //ISS_COMM_MONTH._protectActiveAmt(); // Utility Auto Fix Comments
                    //ISS_COMM_MONTH._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Quarterly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    //ISS_COMM_QUARTER.protectChargeFor();
                    //ISS_COMM_QUARTER.protectChargeAt();
                    //ISS_COMM_QUARTER._protectActiveAmt(); // Utility Auto Fix Comments
                    //ISS_COMM_QUARTER._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Half yearly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    //ISS_COMM_HALF_YEAR.protectChargeFor();
                    //ISS_COMM_HALF_YEAR.protectChargeAt();
                    //ISS_COMM_HALF_YEAR._protectActiveAmt(); // Utility Auto Fix Comments
                    //ISS_COMM_HALF_YEAR._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Yearly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    //ISS_COMM_YEAR.protectChargeFor();
                    //ISS_COMM_YEAR.protectChargeAt();
                    //ISS_COMM_YEAR._protectActiveAmt(); // Utility Auto Fix Comments
                    //ISS_COMM_YEAR._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
            }
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Calculate_GTEE_COMM_BY_CHG_POLICY = function() {
    try {

        var DETRMNTL_FLG; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var LC_AMT; // Utility Auto Fix Comments
        var expiry_dt; // Utility Auto Fix Comments
        var new_LC_AMT; // Utility Auto Fix Comments
        var new_expiry_dt; // Utility Auto Fix Comments
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        new_LC_AMT = SYS_BeFloat(document.MAINFORM.NEW_LC_AMT.value);
        expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.EXPIRY_DT.value);
        new_expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.NEW_EXPIRY_DT.value);
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        DETRMNTL_FLG = document.MAINFORM.DETRMNTL_FLG.value;

        if ((DETRMNTL_FLG == 'NO' && LC_AMT >= new_LC_AMT && expiry_dt >= new_expiry_dt) || (DETRMNTL_FLG != 'NO')) {
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
            SYM_SBLC_Chg_Calculate_Amd_Comm();
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
                    SYM_SBLC_Chg_Calculate_Amd_Comm();
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
                    SYM_SBLC_Chg_Calculate_Amd_Comm();
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
                    document.MAINFORM.PERIOD.value = 0;
                    document.MAINFORM.NO_OF_PERIODS.value = 0;
                    SYM_SBLC_Chg_Calculate_Amd_Comm();
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
                    SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_WEEK();
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
                    SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_MONTH();
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
                    SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
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
                    SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
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
                    SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
            }
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CHK_COMM_END_DT = function() {
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
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CHK_COMM_DT = function() {
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
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_FOR_AMEND_DT = function() {
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
                SYM_SBLC_Chg_Calculate_Amd_Comm();
                document.MAINFORM.TOTAL_ISS_COMM.value = SYS_BeFloat(ISS_COMM.getActiveAmt()) + SYS_BeFloat(document.MAINFORM.TEMP_COMM_BAL.value);
                document.MAINFORM.CURRENT_COMM.value = 0;
                SYT_ChangeFldClass_New('CURRENT_COMM', 'M');
                break;
            case 'Weekly':
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Monthly':
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Quarterly':
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_NEW_SBLC_BAL = function() {
    try {

        var Oldbalance = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        var Newbalance = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
        var Dec_balance = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        document.MAINFORM.NEW_LC_CONF_BAL.value = Oldbalance + Newbalance;
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_CONF_BAL, "onchange");
        if (Dec_balance > 0) {
            document.MAINFORM.NEW_LC_CONF_BAL.value = Oldbalance - Dec_balance;
            EEHtml.fireEvent(document.MAINFORM.NEW_LC_CONF_BAL, "onchange");
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Increase_Amount = function() {
    try {

        var Increase_Amount = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        if (Increase_Amount > 0) {
            document.MAINFORM.NEW_LC_AMT.value = SYS_BeFloat(document.MAINFORM.LC_AMT.value) + Increase_Amount;
        } else {
            document.MAINFORM.NEW_LC_AMT.value = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_COUNTER_GTEE_FLG = function() {
    try {

        PURP_OF_MESS = document.MAINFORM.PURP_OF_MESS.value;
        if (PURP_OF_MESS == 'ISCA' || PURP_OF_MESS == 'ICCA') {
            EEHtml.getElementById('S').style.display = '';
            SYT_EnableDivClass('S_div');
        } else {
            EEHtml.getElementById('S').style.display = 'none';
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_DisableDivClass('S_div');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Cal_PURP_OF_MESS_Option = function() {
    try {

        SYT_RemoveOptionAll(document.MAINFORM.PURP_OF_MESS);
        if (document.MAINFORM.MESG_TYPE.value == 'MT707') {
            SYT_AddOptions(document.MAINFORM.PURP_OF_MESS, ["ACNF", "ADVI", "ISSU"], ["ACNF", "ADVI", "ISSU"]);
        } else if (document.MAINFORM.MESG_TYPE.value == 'MT767') {
            SYT_AddOptions(document.MAINFORM.PURP_OF_MESS, ["ACNA", "ADVA", "ICCA", "ISCA", "ISUA"], ["ACNA", "ADVA", "ICCA", "ISCA", "ISUA"]);
        } else {
            SYT_AddOptions(document.MAINFORM.PURP_OF_MESS, ["", "MAIL"], ["", "MAIL"]);
            SYT_ChangeFldClass(document.MAINFORM.PURP_OF_MESS, 'P');
        }
        EEHtml.fireEvent(document.MAINFORM.PURP_OF_MESS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_AMD_TOL_onchange = function(event) {
    try {
        SYF_SBLC_Amend_Tolerance_Check();
        SYF_SBLC_NEW_LC_Amt();
        SYF_SBLC_NEW_SBLC_BAL();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_COMM_DT_onchange = function(event) {
    try {
        SYF_SBLC_CHK_COMM_DT();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_COMM_END_DT_onchange = function(event) {
    try {
        SYF_SBLC_CHK_COMM_END_DT();
        SYF_SBLC_FOR_AMEND_DT();
        SYF_SBLC_ChangeFldClass();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_COMM_START_DT_onchange = function(event) {
    try {
        SYF_SBLC_CHK_COMM_END_DT();
        SYF_SBLC_CHK_COMM_DT();
        SYF_SBLC_FOR_AMEND_DT();
        SYF_SBLC_ChangeFldClass();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DEC_AMT_onchange = function(event) {
    try {
        var DEC = SYS_BeFloat(document.MAINFORM.DEC_AMT.value); //Added
        if (DEC < 0) {
            alert("amount field value cannot be Negative");
            document.MAINFORM.DEC_AMT.value = '';
        }
        SYF_SBLC_NEW_LC_Amt();
        SYF_SBLC_NEW_SBLC_BAL();
        SYF_SBLC_Check_Incr_Decr();
        //SYF_SBLC_Update_Balancy_By();
        SYM_SBLC_AMEND_LC_CCY();
        SYM_SBLC_AMEND_EXCH_RT();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_SBLC_Expiry_Date_Check();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_FINAL_EXPIRY_DT_onchange = function(event) {
    try {
        /*


if(document.MAINFORM.AMD_DT.value==''){
alert('Please select Amendment Date');
document.MAINFORM.FINAL_EXPIRY_DT.value='';
}
else{
SYF_SBLC_Amendment_Date_Check();
SYF_SBLC_Expiry_Date_Check();
}
SYF_SBLC_Amendment_Date_Check();
SYF_SBLC_Expiry_Date_Check();

*/
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_INC_AMT_onchange = function(event) {
    try {
        var INC = SYS_BeFloat(document.MAINFORM.INC_AMT.value); //Added
        if (INC < 0) {
            alert("amount field value cannot be Negative");
            document.MAINFORM.INC_AMT.value = '';
        }
        SYF_SBLC_NEW_LC_Amt();
        SYF_SBLC_NEW_SBLC_BAL();
        SYF_SBLC_Check_Incr_Decr();
        //SYF_SBLC_Update_Balancy_By();
        SYM_SBLC_AMEND_LC_CCY();
        SYM_SBLC_AMEND_EXCH_RT();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MESG_TYPE_onchange = function(event) {
    try {
        SYF_SBLC_MESG_TYPE();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MT707_SEND_TO_RCV_INFO_CLAUSE_onclick = function(event) {
    try {
        SYS_InsertClause('MT707_SEND_TO_RCV_INFO');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MT767_SEND_TO_RCV_INFO_CLAUSE_onclick = function(event) {
    try {
        SYS_InsertClause('MT767_SEND_TO_RCV_INFO');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NARR_CLAUSE_BT_onclick = function(event) {
    try {
        SYS_InsertClause('NARR');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_BENE_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('NEW_BENE_ADD', 'NEW_BENE_ID', 'ID');
        SYS_InqCUBK_byCondition('NEW_BENE_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('NEW_BENE_ID', 'NEW_BENE_ID');
        if (document.MAINFORM.NEW_BENE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYM_SBLC_NEW_BENE_ORDER_NUMBER();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_EXPIRY_DT_onchange = function(event) {
    try {
        var ndays1; // Utility Auto Fix Comments
        ndays1 = SYS_GetSubDays(document.MAINFORM.NEW_EXPIRY_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (ndays1 >= 0) {
            alert(' New Expiry Date  must be Later than the Expiry Date');
            document.MAINFORM.NEW_EXPIRY_DT.value = '';
        }
        SYF_SBLC_New_Expiry_Final_Expiry_Date_Check();
        SYF_SBLC_New_Expiry_Date_Check();
        SYF_SBLC_Days_To_Renewal();
        SYF_SBLC_NEW_EXPIRT_DATE_onChange();
        document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
        //SYF_SBLC_Calculate_GTEE_COMM_BY_CHG_POLICY();
        SYF_SBLC_ChangeFldClass();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_EXPIRY_TYPE_LOCAL_onchange = function(event) {
    try {
        var type = document.MAINFORM.NEW_EXPIRY_TYPE_LOCAL.value;
        if (type == 'FIXD') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT_LOCAL, 'M');
            document.MAINFORM.NEW_EXPIRY_COND_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND_LOCAL, 'P');
        } else if (type == 'COND') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND_LOCAL, 'M');
        } else {
            document.MAINFORM.NEW_EXPIRY_DT_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT_LOCAL, 'P');
            document.MAINFORM.NEW_EXPIRY_COND_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND_LOCAL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_FINAL_EXPIRY_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.AMD_DT.value == '') {
            alert('Please select amendment Date');
            document.MAINFORM.NEW_FINAL_EXPIRY_DT.value = '';
        } else {
            SYF_SBLC_Amendment_Date_Check();
            SYF_SBLC_Expiry_Date_Check();
        }
        SYF_SBLC_Amendment_Date_Check();
        SYF_SBLC_Expiry_Date_Check();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_LC_AMT_onchange = function(event) {
    try {
        //SYF_SBLC_To_Decimals();
        SYF_SBLC_Amend_Amount_Format();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_LC_BAL_onchange = function(event) {
    try {
        SYF_SBLC_NEW_LC_Amt();
        SYF_SBLC_NEW_SBLC_BAL();
        //SYF_SBLC_To_Decimals();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_LIAB_BAL_onchange = function(event) {
    try {
        //SYF_SBLC_To_Decimals();

        SYM_SBLC_AMEND_LC_CCY();
        SYM_SBLC_AMEND_EXCH_RT();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_LTST_SHIP_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.NEW_LTST_SHIP_DT.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_SHIP_PRD, 'P');
            document.MAINFORM.NEW_SHIP_PRD.value = '';
            EEHtml.getElementById('imgDrawDown_X103_VALUE_DT_32A').style.visiblity = 'hidden';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_SHIP_PRD, 'O');
            EEHtml.getElementById('imgDrawDown_X103_VALUE_DT_32A').style.visiblity = 'visible';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_NEG_TOL_onchange = function(event) {
    try {
        var NEW_NEG_TOL = SYS_BeFloat(document.MAINFORM.NEW_NEG_TOL.value); //Added
        if (NEW_NEG_TOL < 0) {
            alert("New Tolerance field value cannot be Negative");
            document.MAINFORM.NEW_NEG_TOL.value = 0;
        }
        SYF_SBLC_NEW_LC_Amt();
        SYF_SBLC_NEW_SBLC_BAL();
        //SYF_SBLC_Update_Balancy_By();
        SYM_SBLC_AMEND_LC_CCY();
        SYM_SBLC_AMEND_EXCH_RT();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_NOTIFY_DAYS_onchange = function(event) {
    try {
        var date; // Utility Auto Fix Comments
        var expirydate; // Utility Auto Fix Comments
        var ndays; // Utility Auto Fix Comments
        var notifydate; // Utility Auto Fix Comments
        var notifyfinaldate; // Utility Auto Fix Comments
        var notifyperiod; // Utility Auto Fix Comments
        var tempdate; // Utility Auto Fix Comments
        var tempmonth; // Utility Auto Fix Comments
        notifyperiod = document.MAINFORM.NEW_NOTIFY_DAYS.value;

        expirydate = new Date(document.MAINFORM.EXPIRY_DT.value);
        notifydate = new Date(document.MAINFORM.EXPIRY_DT.value);
        date = notifydate.getDate(); // Utility Auto Fix Comments
        notifydate.setDate(date - notifyperiod);

        tempdate = notifydate.getDate();
        tempmonth = notifydate.getMonth();

        if (tempmonth < 9) {
            tempmonth = tempmonth + 1;
            tempmonth = "0" + tempmonth;
        } else {
            tempmonth = tempmonth + 1;

        }
        if (tempdate < 9) {
            tempdate = "0" + tempdate;

        }
        notifyfinaldate = tempmonth + "-" + tempdate + "-" + notifydate.getFullYear();
        document.MAINFORM.NEW_NOTIFY_DATE.value = getDate(SYS_DATE_FORMAT, notifyfinaldate);

        ndays = SYS_GetSubDays(document.MAINFORM.AMD_DT.name, document.MAINFORM.NEW_NOTIFY_DATE.name);
        if (ndays < 0) {
            alert('Notification Date must be later than Amendment Date!');
            document.MAINFORM.NEW_NOTIFY_DATE.value = "";
            document.MAINFORM.NEW_NOTIFY_DAYS.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_NRENEW_ADV_PERIOD_onchange = function(event) {
    try {
        var date; // Utility Auto Fix Comments
        var ndays; // Utility Auto Fix Comments
        var newexpirydate; // Utility Auto Fix Comments
        var nonrenewaladvisedate; // Utility Auto Fix Comments
        var nonrenewalperiod; // Utility Auto Fix Comments
        var nonrenewdate; // Utility Auto Fix Comments
        var tempdate; // Utility Auto Fix Comments
        var tempmonth; // Utility Auto Fix Comments
        nonrenewalperiod = document.MAINFORM.NEW_NRENEW_ADV_PERIOD.value;
        newexpirydate = new Date(document.MAINFORM.EXPIRY_DT.value);
        nonrenewdate = new Date(document.MAINFORM.EXPIRY_DT.value);
        date = nonrenewdate.getDate();
        nonrenewdate.setDate(date - nonrenewalperiod);
        tempdate = nonrenewdate.getDate();
        tempmonth = nonrenewdate.getMonth();
        if (tempmonth < 9) {
            tempmonth = tempmonth + 1;
            tempmonth = "0" + tempmonth;
        } else {
            tempmonth = tempmonth + 1;
        }
        if (tempdate < 9) {
            tempdate = "0" + tempdate;
        }
        nonrenewaladvisedate = tempmonth + "-" + tempdate + "-" + nonrenewdate.getFullYear();
        document.MAINFORM.NEW_NRENEW_ADV_DATE.value = getDate(SYS_DATE_FORMAT, nonrenewaladvisedate);
        ndays = SYS_GetSubDays(document.MAINFORM.NEW_NOTIFY_DATE.name, document.MAINFORM.NEW_NRENEW_ADV_DATE.name);
        if (ndays < 0) {
            alert('Non Renewal Advise Date should be later Notification Date');
            document.MAINFORM.NEW_NRENEW_ADV_DATE.value = "";
            document.MAINFORM.NEW_NRENEW_ADV_PERIOD.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_POS_TOL_onchange = function(event) {
    try {
        var NEW_POS_TOL = SYS_BeFloat(document.MAINFORM.NEW_POS_TOL.value); //Added
        if (NEW_POS_TOL < 0) {
            alert("New Tolerance field value cannot be Negative");
            document.MAINFORM.NEW_POS_TOL.value = 0;
        }
        SYF_SBLC_NEW_LC_Amt();
        SYF_SBLC_NEW_SBLC_BAL();
        //SYF_SBLC_Update_Balancy_By();
        SYM_SBLC_AMEND_LC_CCY();
        SYM_SBLC_AMEND_EXCH_RT();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEW_SHIP_PRD_onchange = function(event) {
    try {
        if (document.MAINFORM.NEW_SHIP_PRD.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_LTST_SHIP_DT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_LTST_SHIP_DT, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NOTIFY_DATE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NOTIFY_DAYS_onchange = function(event) {
    try {
        var date; // Utility Auto Fix Comments
        var expirydate; // Utility Auto Fix Comments
        var ndays; // Utility Auto Fix Comments
        var notifydate; // Utility Auto Fix Comments
        var notifyfinaldate; // Utility Auto Fix Comments
        var notifyperiod; // Utility Auto Fix Comments
        var tempdate; // Utility Auto Fix Comments
        var tempmonth; // Utility Auto Fix Comments
        /*notifyperiod=document.MAINFORM.NOTIFY_DAYS.value;
expirydate=new Date(document.MAINFORM.EXPIRY_DT.value);
notifydate=new Date(document.MAINFORM.EXPIRY_DT.value);
date=notifydate.getDate()
notifydate.setDate(date-notifyperiod);

tempdate=notifydate.getDate();
tempmonth=notifydate.getMonth();

if(tempmonth < 9)
{
tempmonth=tempmonth+1;
tempmonth="0" + tempmonth;
}
else
{
tempmonth=tempmonth+1;
tempmonth=tempmonth;
}

if(tempdate < 9)
{
 tempdate="0" + tempdate;
tempdate=tempdate;
}
else
{
 tempdate=tempdate;
}
notifyfinaldate=tempmonth+"-"+tempdate+"-"+notifydate.getFullYear();
document.MAINFORM.NOTIFY_DATE.value=notifyfinaldate;

ndays=SYS_GetSubDays(document.MAINFORM.AMD_DT.name,document.MAINFORM.NOTIFY_DATE.name);
if(ndays < 0)
{
alert('Notification Date must be later than Amendment Date!');
document.MAINFORM.NOTIFY_DATE.value="";
document.MAINFORM.NOTIFY_DAYS.value='';
}

*/
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NRENEW_ADV_PERIOD_onchange = function(event) {
    try {
        var date; // Utility Auto Fix Comments
        var ndays; // Utility Auto Fix Comments
        var newexpirydate; // Utility Auto Fix Comments
        var nonrenewaladvisedate; // Utility Auto Fix Comments
        var nonrenewalperiod; // Utility Auto Fix Comments
        var nonrenewdate; // Utility Auto Fix Comments
        var tempdate; // Utility Auto Fix Comments
        var tempmonth; // Utility Auto Fix Comments
        /*
nonrenewalperiod=document.MAINFORM.NRENEW_ADV_PERIOD.value;
newexpirydate=new Date(document.MAINFORM.EXPIRY_DT.value);
nonrenewdate=new Date(document.MAINFORM.EXPIRY_DT.value);
date=nonrenewdate.getDate();
nonrenewdate.setDate(date - nonrenewalperiod);
tempdate=nonrenewdate.getDate();
tempmonth=nonrenewdate.getMonth();
if(tempmonth < 9)
{
tempmonth=tempmonth+1;
tempmonth="0" + tempmonth;
}
else
{
 tempmonth=tempmonth+1;
 tempmonth=tempmonth;
}
if(tempdate < 9)
{
tempdate="0" + tempdate;
tempdate=tempdate;
}
else
{
tempdate=tempdate;
}

nonrenewaladvisedate=tempmonth+"-"+tempdate+"-"+ nonrenewdate.getFullYear();
document.MAINFORM.NRENEW_ADV_DATE.value=nonrenewaladvisedate;
ndays=SYS_GetSubDays(document.MAINFORM.NOTIFY_DATE.name,document.MAINFORM.NRENEW_ADV_DATE.name);
if(ndays < 0)
{
alert('Non Renewal Advise Date should be later Notification Date');
document.MAINFORM.NRENEW_ADV_DATE.value="";
document.MAINFORM.NRENEW_ADV_PERIOD.value="";
}
*/
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PURP_OF_MESS_onchange = function(event) {
    try {
        SYF_SBLC_COUNTER_GTEE_FLG();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Amendment.js", e);
    }
}