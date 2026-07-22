var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_SBLC_Tolerance_Check = function() {
    try {

        if (document.MAINFORM.POS_TOL.value != '' || document.MAINFORM.NEG_TOL.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.AMT_SPEC, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AMT_SPEC, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_DISABLE_TABS = function() {
    try {

        EEHtml.getElementById('H').style.display = 'none';
        EEHtml.getElementById('I').style.display = 'none';
        EEHtml.getElementById('C').style.display = 'none';
        EEHtml.getElementById('D').style.display = 'none';
        EEHtml.getElementById('E').style.display = 'none';
        EEHtml.getElementById('F').style.display = 'none';
        EEHtml.getElementById('G').style.display = 'none';
        SYT_ChangeFldClass(document.MAINFORM.FREQUENCY, 'P');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Drafts_At = function() {
    try {

        if (document.MAINFORM.DRWE_NM.value == '' && document.MAINFORM.DRAFTS_AT.value != '') {
            alert("Please enter Drawee information");
            document.MAINFORM.DRWE_NM.focus();
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_LC_BALANCE = function() {
    try {

        var nLC_AMT; // Utility Auto Fix Comments
        var nLC_CCY; // Utility Auto Fix Comments
        nLC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);

        nLC_CCY = (nLC_AMT + (nLC_AMT * document.MAINFORM.POS_TOL.value / 100));

        document.MAINFORM.LC_BAL.value = SYS_BeFloat(nLC_CCY);
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, "onchange");
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.SBLC_CLM_BAL.value = document.MAINFORM.LC_BAL.value;
        document.MAINFORM.ISSUE_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Date_Check = function() {
    try {

        var nDays1; // Utility Auto Fix Comments
        nDays1 = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (nDays1 <= 0) {

            SYS_CheckError(document.MAINFORM.EXPIRY_DT, 'Expiry Date should be greater than Issue Date!');
            document.MAINFORM.EXPIRY_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_LC_BALANCE_CALC = function() {
    try {

        var SBLC = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        if (SBLC < 0) {
            alert("amount field value cannot be Negative");
            document.MAINFORM.LC_AMT.value = '';
        }
        var LC_AMT_TOT; // Utility Auto Fix Comments
        LC_AMT_TOT = SYS_BeFloat(document.MAINFORM.LC_BAL.value * document.MAINFORM.EXCH_RATE.value);
        document.MAINFORM.BASE_BAL.value = LC_AMT_TOT;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_SHOW_HIDDEN_TRANS_SHIP = function() {
    try {

        if (document.MAINFORM.TNSHIP.value == 'OTHER') {
            SYT_ChangeFldClass(document.MAINFORM.TNSHIP_NARR, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TNSHIP_NARR, 'H');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_CHG_INIT('SYF_SBLC_CHG_INIT_RUN');
        SYM_SBLC_ChangeFldClass();
        //SYF_SBLC_SHOW_HIDDEN_APPLB_RULE();
        SYF_SBLC_SHOW_HIDDEN_PART_SHP();
        SYF_SBLC_SHOW_HIDDEN_TRANS_SHIP();
        //SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        SYF_SBLC_LC_AMOUNT();

        SYM_SBLC_Show_AutoRenewal_Tab();
        SYM_SBLC_Show_Beneficiaries_Tab();
        SYM_SBLC_Show_Format_MT700();
        SYM_SBLC_Show_Format_MT760();
        SYM_SBLC_Show_Format_MAIL();
        SYM_SBLC_Show_Schedule_Tab();

        //SYF_SBLC_DISABLE_TABS();
        EEHtml.getElementById('H').style.display = 'none';
        SYT_ChangeFldClass(document.MAINFORM.LC_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.EXCH_RATE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BASE_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BTN, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.FOR_ACCT_NR_ADD_BTN, 'O');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'P');
        SYF_SBLC_To_Decimal();
        // Add for  Account number check
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'M');
        //
        SYT_ChangeFldClass(document.MAINFORM.RENEWAL_DAYS, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NOTIFY_DATE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NRENEW_ADV_DATE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_TAG, 'P');
        SYM_SBLC_LC_CCY();
        SYM_SBLC_LC_CCY_BAL();
        SYM_SBLC_Format_onChange();
        SYM_SBLC_AutoRenew_Check();
        FLD_SBLC_AMT_SPEC_onchange();
        /*
//RISK TAB
Change_R_COLLAT_REQ();
Reset_R_COLLAT_REQ();
SYT_ChangeFldClass(document.MAINFORM.R_CUST_BK,'O');
SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ID,'M');
SYT_ChangeFldClass(document.MAINFORM.R_PARTY_NM,'M');
SYT_ChangeFldClass(document.MAINFORM.R_PARTY_CNTY,'O');
SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD1,'O');
SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD2,'O');
SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD3,'O');
SYT_ChangeFldClass(document.MAINFORM.R_WEIG_PCT,'M');
SYT_ChangeFldClass(document.MAINFORM.R_COLLAT_REQ,'M');
Cal_R_PARTY_CNTY();
Cal_TEMP_RATE_RISK();
Cal_CASH_COV_HELD();
Cal_TEMP_RATE_CASH();
//RISK TAB
*/
        document.MAINFORM.SCHEDULED.value = document.MAINFORM.SCHEDULED.value;
        FLD_SBLC_DIARY_NARRATIVE_onchange();
        //CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_Mail = function() {
    try {

        document.MAINFORM.STNDBY_TEXT1.value = '';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_MT760 = function() {
    try {

        document.MAINFORM.MT760_STNDBY_TEXT1.value = '';
        document.MAINFORM.MT760_STNDBY_TEXT2.value = '';
        document.MAINFORM.MT760_STNDBY_TEXT3.value = '';
        document.MAINFORM.MT760_SEND_TO_RCV_INFO.value = '';
        document.MAINFORM.GTEE_DETAILS.value = '';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Assign_StandbyText_SendtoRcvInfo = function() {
    try {

        if (document.MAINFORM.MESG_TYPE.value == 'MT700') {
            document.MAINFORM.MT700_2_STDBY_TEXT1.value = document.MAINFORM.MT700_STNDBY_TEXT1.value;
            document.MAINFORM.MT700_2_STDBY_TEXT2.value = document.MAINFORM.MT700_STNDBY_TEXT2.value;
            document.MAINFORM.MT700_2_STDBY_TEXT3.value = document.MAINFORM.MT700_STNDBY_TEXT3.value;
            document.MAINFORM.TEMP_SEND_TO_RCV_INFO.value = document.MAINFORM.MT700_SEND_TO_RCV_INFO.value;
        }
        if (document.MAINFORM.MESG_TYPE.value == 'MT760') {
            document.MAINFORM.MT700_2_STDBY_TEXT1.value = document.MAINFORM.MT760_STNDBY_TEXT1.value;
            document.MAINFORM.MT700_2_STDBY_TEXT2.value = document.MAINFORM.MT760_STNDBY_TEXT2.value;
            document.MAINFORM.MT700_2_STDBY_TEXT3.value = document.MAINFORM.MT760_STNDBY_TEXT3.value;
            document.MAINFORM.TEMP_SEND_TO_RCV_INFO.value = document.MAINFORM.MT760_SEND_TO_RCV_INFO.value;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_MT700_1 = function() {
    try {

        document.MAINFORM.ADD_AMT_COVRD.value = '';
        document.MAINFORM.SHIP_PRD.value = '';
        document.MAINFORM.DRAFTS_AT.value = '';
        document.MAINFORM.CHARGES.value = '';
        document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = '';
        document.MAINFORM.PRES_PRD_TXT.value = '';
        document.MAINFORM.DEF_PMT_DET.value = '';
        document.MAINFORM.SETT_INSTR.value = '';
        document.MAINFORM.PARTIAL_SHIP.value = '';
        SYT_ChangeFldClass(document.MAINFORM.PARTIAL_SHIP_NARR, 'H');
        document.MAINFORM.PARTIAL_SHIP_NARR.value = '';
        document.MAINFORM.TNSHIP.value = '';
        SYT_ChangeFldClass(document.MAINFORM.TNSHIP_NARR, 'H');
        document.MAINFORM.TNSHIP_NARR.value = '';
        document.MAINFORM.ORIGIN.value = '';
        document.MAINFORM.OLD_LOAD_PORT.value = '';
        document.MAINFORM.OLD_DEST_PORT.value = '';
        document.MAINFORM.DEST_PORT.value = '';
        document.MAINFORM.LTST_SHIP_DT.value = '';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Issue_Date_Check = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        if (document.MAINFORM.EXPIRY_DT.value != '') {
            nDays = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.ISSUE_DT.name);
            if (nDays >= 0) {
                SYS_CheckError(document.MAINFORM.EXPIRY_DT, "Issue Date should be earlier than Expiry Date");
                //alert("Issue Date should be earlier than Expiry Date");
                document.MAINFORM.ISSUE_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.EXPIRY_DT.value = '';
                return false;
            }
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_By_Mixed_Payment = function() {
    try {

        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_MIX_PAY_DETAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, 'P');
        } else if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_MIX_PAY_DETAIL, 'P');
        } else {
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_MIX_PAY_DETAIL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Expiry_Date_Check = function() {
    try {

        var nDays1; // Utility Auto Fix Comments
        if (document.MAINFORM.EXPIRY_DT.value != '' && document.MAINFORM.FINAL_EXPIRY_DT.value != '') {
            nDays1 = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.FINAL_EXPIRY_DT.name);
            if (nDays1 <= 0) {
                alert('Final Expiry Date must be later than the current Expiry Date');
                document.MAINFORM.FINAL_EXPIRY_DT.value = '';
            }
        }
        if (document.MAINFORM.EXPIRY_DT.value == '' && document.MAINFORM.FINAL_EXPIRY_DT.value != '') {
            document.MAINFORM.FINAL_EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.SBLC_CLM_BAL.value = document.MAINFORM.LC_BAL.value;
        document.MAINFORM.MESG_TYPE_ISSUE.value = document.MAINFORM.MESG_TYPE.value;
        SYF_SBLC_GET_REF_20();
        SYT_CHG_VOUCHER();
        SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, 'P');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_LC_AMOUNT = function() {
    try {

        document.MAINFORM.LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_BAL.value);
        document.MAINFORM.BASE_BAL.value = SYT_AmtFormat(SYS_LOCAL_CCY, document.MAINFORM.BASE_BAL.value);
        //document.MAINFORM.EXCH_RATE.value=SYT_AmtFormat(document.MAINFORM.LC_CCY.value,document.MAINFORM.EXCH_RATE.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Final_Expiry_Date_Check = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        if (document.MAINFORM.FINAL_EXPIRY_DT.value != '') {
            nDays = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.FINAL_EXPIRY_DT.name);

            if (nDays <= 0) {
                alert("Expiry Date should be earlier than Final Expiry Date");
                document.MAINFORM.EXPIRY_DT.value = '';
            }
            //else{
            //document.MAINFORM.RENEWAL_DAYS.value=nDays;	
            //}

        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_ParseDate = function(str) {
    try {

        var mdy; // Utility Auto Fix Comments
        mdy = str.split('-');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Cal_APPL_ID_BACK = function() {
    try {

        SYM_SBLC_CALL_APPL_ADD_BACK();
        SYF_SBLC_AFTER_APPL_ID();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CHG_INIT_RUN = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'IQ') {
            //	SYF_SBLC_CAL_ADV_COMM();
            //	SYF_SBLC_CAL_ISS_COMM();
            SYM_SBLC_Chg_Calculate_SBLC_ISS_COMM();
            //	SYT_CAL_CABLE();
            //	SYT_CAL_COURIER();
            //	SYT_CAL_POST();
            SYM_SBLC_CAL_COMMUN_CHG();
            SYT_CAL_COMM('SBLC_OTHER_CHG', document.MAINFORM.LC_CCY.value);
        }
        //if(SYS_FUNCTION_TYPE == "PM"){
        //CHG_setAllChargeAt(Chg.AT_DEFERRED);
        //}
        /*invoke CHG_setAllCollCcy(),SYT_Set_TRXCCY2CHG(),CHG_TRX_DATE(),SYT_Cal_CHG_FLD_LOCAL_CUST_CCY()*/
        SYM_SBLC_chg_Init_FOR_Charge();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'M');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Date_Field_Empty_Reset = function() {
    try {

        if (document.MAINFORM.EXPIRY_DT.value == '') {

            document.MAINFORM.RENEWAL_DAYS.value = '0';
            document.MAINFORM.NOTIFY_DAYS.value = '0';
            document.MAINFORM.NOTIFY_DATE.value = '';
            document.MAINFORM.NRENEW_ADV_DATE.value = '';
            document.MAINFORM.NRENEW_ADV_PERIOD.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_Parties_MAIL = function() {
    try {

        document.MAINFORM.ADV_BK_ID.value = '';
        document.MAINFORM.ADV_BK_NM.value = '';
        document.MAINFORM.ADV_BK_ADD1.value = '';
        document.MAINFORM.ADV_BK_ADD2.value = '';
        document.MAINFORM.ADV_BK_ADD3.value = '';
        document.MAINFORM.ADV_BK_SW_ADD.value = '';
        document.MAINFORM.ADV_BK_SW_TAG.value = '';
        document.MAINFORM.AVAL_WT_BK_ID.value = '';
        document.MAINFORM.AVAL_WT_BK_NM.value = '';
        document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
        document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
        document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
        document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';
        document.MAINFORM.AVAL_WT_BK_SW_TAG.value = '';
        document.MAINFORM.DRWE_ID.value = '';
        document.MAINFORM.DRWE_NM.value = '';
        document.MAINFORM.DRWE_ADD1.value = '';
        document.MAINFORM.DRWE_ADD2.value = '';
        document.MAINFORM.DRWE_ADD3.value = '';
        document.MAINFORM.DRWE_SW_ADD.value = '';
        document.MAINFORM.DRWE_SW_TAG.value = '';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_AutoRenewal = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Drafts_Drwaeename = function() {
    try {

        if (document.MAINFORM.DRAFTS_AT.value == '' && (document.MAINFORM.DRWE_NM.value != '' || document.MAINFORM.DRWE_SW_ADD.value != '')) {
            alert("Please Enter Drafts At information");
            document.MAINFORM.DRAFTS_AT.focus();
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_MT700_2 = function() {
    try {

        document.MAINFORM.MT700_STNDBY_TEXT1.value = '';
        document.MAINFORM.MT700_STNDBY_TEXT2.value = '';
        document.MAINFORM.MT700_STNDBY_TEXT3.value = '';
        document.MAINFORM.MT700_SEND_TO_RCV_INFO.value = '';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CAL_ADV_COMM = function() {
    try {

        SYT_CAL_COMM('SBLC_ADV_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_GET_REF_20 = function() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;

        node = SYS_getDoByXpath("AdviceForBankCust");
        arrayvalue = SYS_getRecords(node);
        mData = [];

        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'BANK_N90_REF_20', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_NOTIFY_NONRENEWAL_CHECK = function() {
    try {

        var date1; // Utility Auto Fix Comments
        var expirydate; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var nDays; // Utility Auto Fix Comments
        var nDays1; // Utility Auto Fix Comments
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
        if (document.MAINFORM.NRENEW_ADV_PERIOD.value != '' && document.MAINFORM.NOTIFY_DAYS.value != '') {
            notifperiod = document.MAINFORM.NOTIFY_DAYS.value;
            nonrenewalperiod = document.MAINFORM.NRENEW_ADV_PERIOD.value;
            expirydate = new Date(document.MAINFORM.EXPIRY_DT.value);
            nonrenewaldate = new Date(document.MAINFORM.EXPIRY_DT.value);
            notifdate = new Date(document.MAINFORM.EXPIRY_DT.value);
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
            document.MAINFORM.NOTIFY_DATE.value = notifdatefinal;

            nDays = SYS_GetSubDays(document.MAINFORM.NOTIFY_DATE.name, document.MAINFORM.ISSUE_DT.name);


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
            document.MAINFORM.NRENEW_ADV_DATE.value = nonrenewaldatefinal;

            nDays1 = SYS_GetSubDays(document.MAINFORM.NOTIFY_DATE.name, document.MAINFORM.NRENEW_ADV_DATE.value);
            if (nDays1 < 0) {
                alert("Non-Renewal Advice Date should be later than Notification Date");
                document.MAINFORM.NRENEW_ADV_DATE.value = '';
                document.MAINFORM.NRENEW_ADV_PERIOD.value = '';
                EEHtml.getElementById("NRENEW_DATE").focus();
            }
            if (nDays >= 0) {
                alert("Notification Date should be later than Issue Date");
                document.MAINFORM.NOTIFY_DATE.value = '';
                document.MAINFORM.NOTIFY_DAYS.value = '';
                document.MAINFORM.NRENEW_ADV_DATE.value = '';
                document.MAINFORM.NRENEW_ADV_PERIOD.value = '';
                EEHtml.getElementById("NOTIFY_DATE").focus();
            } else {
                document.MAINFORM.NOTIFY_DATE.value = notifdatefinal;
            }
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return Cal_eloan_fields_SBLC();
        var Barr; // Utility Auto Fix Comments
        var Bnode; // Utility Auto Fix Comments
        var STNBYTEXT1; // Utility Auto Fix Comments
        var STNBYTEXT2; // Utility Auto Fix Comments
        var STNBYTEXT3; // Utility Auto Fix Comments
        var TotalSeq; // Utility Auto Fix Comments
        var TotalSeq1; // Utility Auto Fix Comments
        var TotalSeq2; // Utility Auto Fix Comments
        var TotalSeq3; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        STNBYTEXT1 = document.MAINFORM.MT760_STNDBY_TEXT1.value;
        STNBYTEXT2 = document.MAINFORM.MT760_STNDBY_TEXT2.value;
        STNBYTEXT3 = document.MAINFORM.MT760_STNDBY_TEXT3.value;

        if (STNBYTEXT1 != '' && STNBYTEXT2 == '' && STNBYTEXT3 == '') {
            TotalSeq = "1/1";
            document.MAINFORM.TEMP_SEQUENCE1_MT760_SBLC.value = TotalSeq;
        }
        if (STNBYTEXT1 != '' && STNBYTEXT2 != '' && STNBYTEXT3 == '') {
            TotalSeq1 = "1/2";
            TotalSeq2 = "2/2";
            document.MAINFORM.TEMP_SEQUENCE1_MT760_SBLC.value = TotalSeq1;
            document.MAINFORM.TEMP_SEQUENCE2_MT760_SBLC.value = TotalSeq2;
        }
        if (STNBYTEXT1 != '' && STNBYTEXT2 == '' && STNBYTEXT3 != '') {
            TotalSeq1 = "1/2";
            TotalSeq2 = "2/2";
            document.MAINFORM.TEMP_SEQUENCE1_MT760_SBLC.value = TotalSeq1;
            document.MAINFORM.TEMP_SEQUENCE3_MT760_SBLC.value = TotalSeq2;
        }
        if (STNBYTEXT1 != '' && STNBYTEXT2 != '' && STNBYTEXT3 != '') {
            TotalSeq1 = "1/3";
            TotalSeq2 = "2/3";
            TotalSeq3 = "3/3";
            document.MAINFORM.TEMP_SEQUENCE1_MT760_SBLC.value = TotalSeq1;
            document.MAINFORM.TEMP_SEQUENCE2_MT760_SBLC.value = TotalSeq2;
            document.MAINFORM.TEMP_SEQUENCE3_MT760_SBLC.value = TotalSeq3;
        }

        if (document.MAINFORM.APPL_ID.value != '' && document.MAINFORM.FOR_ACCT_NR.value == '') {
            document.MAINFORM.TEMP_MT700_50_NM.value = document.MAINFORM.APPL_NM.value;
            document.MAINFORM.TEMP_MT700_50_ADD1.value = document.MAINFORM.APPL_ADD1.value;
            document.MAINFORM.TEMP_MT700_50_ADD2.value = document.MAINFORM.APPL_ADD2.value;
            document.MAINFORM.TEMP_MT700_50_ADD3.value = document.MAINFORM.APPL_ADD3.value;
        }
        if (document.MAINFORM.FOR_ACCT_NR.value != '' && document.MAINFORM.APPL_ID.value != '') {
            document.MAINFORM.TEMP_MT700_50_NM.value = document.MAINFORM.FOR_ACCT_NAME.value;
            document.MAINFORM.TEMP_MT700_50_ADD1.value = document.MAINFORM.FOR_ACCT_ADD1.value;
            document.MAINFORM.TEMP_MT700_50_ADD2.value = document.MAINFORM.FOR_ACCT_ADD2.value;
            document.MAINFORM.TEMP_MT700_50_ADD3.value = document.MAINFORM.FOR_ACCT_ADD3.value;
        }
        if (document.MAINFORM.POS_TOL.value != 0 && document.MAINFORM.NEG_TOL.value != 0) {
            if (document.MAINFORM.POS_TOL.value <= 9 && document.MAINFORM.NEG_TOL.value <= 9) {
                document.MAINFORM.TEMP_MT700_39A_POS_TOL.value = "0" + document.MAINFORM.POS_TOL.value;
                document.MAINFORM.TEMP_MT700_39A_NEG_TOL.value = "/0" + document.MAINFORM.NEG_TOL.value;
            } else if (document.MAINFORM.POS_TOL.value <= 9 && document.MAINFORM.NEG_TOL.value > 9) {
                document.MAINFORM.TEMP_MT700_39A_POS_TOL.value = "0" + document.MAINFORM.POS_TOL.value;
                document.MAINFORM.TEMP_MT700_39A_NEG_TOL.value = "/" + document.MAINFORM.NEG_TOL.value;
            } else if (document.MAINFORM.POS_TOL.value > 9 && document.MAINFORM.NEG_TOL.value <= 9) {
                document.MAINFORM.TEMP_MT700_39A_POS_TOL.value = document.MAINFORM.POS_TOL.value;
                document.MAINFORM.TEMP_MT700_39A_NEG_TOL.value = "/0" + document.MAINFORM.NEG_TOL.value;
            } else {
                document.MAINFORM.TEMP_MT700_39A_POS_TOL.value = document.MAINFORM.POS_TOL.value;
                document.MAINFORM.TEMP_MT700_39A_NEG_TOL.value = "/" + document.MAINFORM.NEG_TOL.value;
            }
        }
        if (document.MAINFORM.POS_TOL.value != 0 && document.MAINFORM.NEG_TOL.value == 0) {
            if (document.MAINFORM.POS_TOL.value <= 9) {
                document.MAINFORM.TEMP_MT700_39A_POS_TOL.value = "0" + document.MAINFORM.POS_TOL.value;
                document.MAINFORM.TEMP_MT700_39A_NEG_TOL.value = "/00";
            } else {
                document.MAINFORM.TEMP_MT700_39A_POS_TOL.value = document.MAINFORM.POS_TOL.value;
                document.MAINFORM.TEMP_MT700_39A_NEG_TOL.value = "/00";
            }
        }
        if (document.MAINFORM.POS_TOL.value == 0 && document.MAINFORM.NEG_TOL.value != 0) {
            if (document.MAINFORM.NEG_TOL.value <= 9) {
                document.MAINFORM.TEMP_MT700_39A_POS_TOL.value = "00";
                document.MAINFORM.TEMP_MT700_39A_NEG_TOL.value = "/0" + document.MAINFORM.NEG_TOL.value;
            } else {
                document.MAINFORM.TEMP_MT700_39A_POS_TOL.value = "00/";
                document.MAINFORM.TEMP_MT700_39A_NEG_TOL.value = document.MAINFORM.NEG_TOL.value;
            }
        }
        if (document.MAINFORM.POS_TOL.value == 0 && document.MAINFORM.NEG_TOL.value == 0) {
            document.MAINFORM.TEMP_MT700_39A_POS_TOL.value = '';
            document.MAINFORM.TEMP_MT700_39A_NEG_TOL.value = '';
        }
        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            document.MAINFORM.TEMP_MT700_40E.value = document.MAINFORM.APLB_RULE.value + "/" + document.MAINFORM.OTHER_RULES.value;
        }
        if (document.MAINFORM.APLB_RULE.value != 'OTHR') {
            document.MAINFORM.TEMP_MT700_40E.value = document.MAINFORM.APLB_RULE.value;
        }
        if (document.MAINFORM.PARTIAL_SHIP.value == 'OTHER') {
            document.MAINFORM.TEMP_MT700_43P.value = document.MAINFORM.PARTIAL_SHIP_NARR.value;
        }
        if (document.MAINFORM.PARTIAL_SHIP.value != 'OTHER') {
            document.MAINFORM.TEMP_MT700_43P.value = document.MAINFORM.PARTIAL_SHIP.value;
        }
        if (document.MAINFORM.TNSHIP.value == 'OTHER') {
            document.MAINFORM.TEMP_MT700_43T.value = document.MAINFORM.TNSHIP_NARR.value;
        }
        if (document.MAINFORM.TNSHIP.value != 'OTHER') {
            document.MAINFORM.TEMP_MT700_43T.value = document.MAINFORM.TNSHIP.value;
        }
        if (document.MAINFORM.SCHEDULED.value == 'YES') {
            node = SYS_getDoByXpath('SBLCSchedule');
            arr = SYS_getRecords(node);
            if (arr.length <= 0) {
                alert("Please specify details in the Schedule tab or set the Schedule flag to NO.");
                return false;
            }
        }
        if (document.MAINFORM.MULTI_BENE.value == 'YES') {
            Bnode = SYS_getDoByXpath('BneficiarySBLC');
            Barr = SYS_getRecords(Bnode);
            if (Barr.length <= 0) {
                alert("Please specify other beneficiaries in the Beneficiaries tab or set the Multiple Beneficiaries flag to NO");
                return false;
            }
        }
        if (document.MAINFORM.AVAL_WT_BK_ID.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.DRWE_ID.value == '') {
            document.MAINFORM.DRWE_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.DRAFTS_AT.value != '' && document.MAINFORM.DRWE_NM.value == '') {
            alert("Please Enter Drawee information");
            return false;
        }
        if ((document.MAINFORM.DRWE_NM.value != '' || document.MAINFORM.DRWE_SW_ADD.value != '') && document.MAINFORM.DRAFTS_AT.value == '') {
            alert("Please Enter Drafts At information");
            return false;
        }
        if (document.MAINFORM.EXPIRY_DT.value != '') {
            return SYF_SBLC_Date_Check();
        }

        if (document.MAINFORM.AUTO_RENEW.value == 'NO') {
            document.MAINFORM.FREQUENCY.value = '';
            document.MAINFORM.RENEWAL_DAYS.value = '';
            document.MAINFORM.NOTIFY_DATE.value = '';
            document.MAINFORM.NOTIFY_DAYS.value = '';
            document.MAINFORM.NRENEW_ADV_DATE.value = '';
            document.MAINFORM.NRENEW_ADV_PERIOD.value = '';
            document.MAINFORM.RENEWAL_STATUS.value = '';
        }
        SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, 'P');
        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_AFTER_APPL_ID = function() {
    try {

        SYF_SBLC_CHG_INIT_RUN();
        SYM_SBLC_ChangeFldClass();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CAL_ISS_COMM = function() {
    try {

        SYT_CAL_COMM('GTEE_ISS_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_To_Decimal = function() {
    try {

        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_BAL.value);
        document.MAINFORM.BASE_BAL.value = SYT_AmtFormat(SYS_LOCAL_CCY, document.MAINFORM.BASE_BAL.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_getFullYear = function() {
    try {

        var arrCurrentBusinessDate; // Utility Auto Fix Comments
        var currentBusinessDate; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        //SYS_BUSI_DATE format "dd-mm-yyyy"

        currentBusinessDate = SYS_BUSI_DATE;
        arrCurrentBusinessDate = currentBusinessDate.split("-");

        year = arrCurrentBusinessDate[2];

        return year;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_PartiesTab = function() {
    try {

        document.MAINFORM.APPL_ID.value = '';
        document.MAINFORM.APPL_NM.value = '';
        document.MAINFORM.APPL_ADD1.value = '';
        document.MAINFORM.APPL_ADD2.value = '';
        document.MAINFORM.APPL_ADD3.value = '';
        document.MAINFORM.ACC_MANAGER.value = '';
        document.MAINFORM.CUST_REF.value = '';
        document.MAINFORM.BENE_ID.value = '';
        document.MAINFORM.BENE_NM.value = '';
        document.MAINFORM.BENE_ADD1.value = '';
        document.MAINFORM.BENE_ADD2.value = '';
        document.MAINFORM.BENE_ADD3.value = '';
        document.MAINFORM.FOR_ACCT_NR.value = '';
        document.MAINFORM.FOR_ACCT_NAME.value = '';
        document.MAINFORM.FOR_ACCT_ADD1.value = '';
        document.MAINFORM.FOR_ACCT_ADD2.value = '';
        document.MAINFORM.FOR_ACCT_ADD3.value = '';
        document.MAINFORM.ADV_BK_ID.value = '';
        document.MAINFORM.ADV_BK_NM.value = '';
        document.MAINFORM.ADV_BK_ADD1.value = '';
        document.MAINFORM.ADV_BK_ADD2.value = '';
        document.MAINFORM.ADV_BK_ADD3.value = '';
        document.MAINFORM.ADV_BK_SW_ADD.value = '';
        document.MAINFORM.ADV_BK_SW_TAG.value = '';
        document.MAINFORM.ADV_BK_REF.value = '';
        document.MAINFORM.AVAL_WT_BK_ID.value = '';
        document.MAINFORM.AVAL_WT_BK_NM.value = '';
        document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
        document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
        document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
        document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';
        document.MAINFORM.AVAL_WT_BK_SW_TAG.value = '';
        document.MAINFORM.AVAL_BY.value = '';
        document.MAINFORM.DRWE_ID.value = '';
        document.MAINFORM.DRWE_NM.value = '';
        document.MAINFORM.DRWE_ADD1.value = '';
        document.MAINFORM.DRWE_ADD2.value = '';
        document.MAINFORM.DRWE_ADD3.value = '';
        document.MAINFORM.DRWE_SW_ADD.value = '';
        document.MAINFORM.DRWE_SW_TAG.value = '';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_setRef = function(ref) {
    try {

        var mainRef; // Utility Auto Fix Comments
        var sLC_TYPE; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        sLC_TYPE = document.MAINFORM.LC_TYPE.value;
        year = SYF_SBLC_getFullYear();

        mainRef = '';
        if (sLC_TYPE != '') {
            mainRef = "OS" + sLC_TYPE.substr(0, 1) + year + ref.substr(4, 8);
            document.MAINFORM.C_MAIN_REF.value = mainRef;
        } else {
            document.MAINFORM.C_MAIN_REF.value = mainRef;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Cal_LC_Balance_To_Decimal = function() {
    try {

        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_SHOW_HIDDEN_APPLB_RULE = function() {
    try {

        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'H');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_DayDifference = function(firstDate, secondDate) {
    try {

        return (secondDate - firstDate) / (1000 * 60 * 60 * 24);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_SHOW_HIDDEN_PART_SHP = function() {
    try {

        if (document.MAINFORM.PARTIAL_SHIP.value == 'OTHER') {
            SYT_ChangeFldClass(document.MAINFORM.PARTIAL_SHIP_NARR, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PARTIAL_SHIP_NARR, 'H');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Days_To_Renewal = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        if (document.MAINFORM.EXPIRY_DT.value != '') {
            nDays = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.EXPIRY_DT.name);
            if (nDays <= 0) {
                document.MAINFORM.RENEWAL_DAYS.value = '';
            } else if (nDays > 0 && document.MAINFORM.AUTO_RENEW.value == 'YES') {
                document.MAINFORM.RENEWAL_DAYS.value = nDays;
            }
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Clear_Partied_1 = function() {
    try {

        document.MAINFORM.AVAL_BY.value = '';
        document.MAINFORM.AVAL_WT_BK_ID.value = '';
        document.MAINFORM.AVAL_WT_BK_ID_BTN.value = '';
        document.MAINFORM.AVAL_WT_BK_NM.value = '';
        document.MAINFORM.AVAL_WT_BK_ADD_BTN.value = '';
        document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
        document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
        document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
        document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';
        document.MAINFORM.AVAL_WT_BK_SW_TAG.value = '';
        document.MAINFORM.DRWE_ID.value = '';
        document.MAINFORM.DRWE_ID_BTN.value = '';
        document.MAINFORM.DRWE_NM.value = '';
        document.MAINFORM.DRWE_ADD_BTN.value = '';
        document.MAINFORM.DRWE_ADD1.value = '';
        document.MAINFORM.DRWE_ADD1.value = '';
        document.MAINFORM.DRWE_ADD2.value = '';
        document.MAINFORM.DRWE_ADD3.value = '';
        document.MAINFORM.DRWE_SW_ADD.value = '';
        document.MAINFORM.DRWE_SW_TAG.value = '';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Calculate_ISS_COMM_NEW2 = function() {
    try {

        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        unit_code = SYS_ORI_UNIT_CODE;

        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_SBLC_Chg_Calculate_SBLC_ISS_COMM();
                break;
            case 'All in Advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_SBLC_Chg_Calculate_SBLC_ISS_COMM();
                SYM_SBLC_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                break;
            case 'Part in Advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.NXT_COMM_DT.value = '';
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_SBLC_Chg_Calculate_SBLC_ISS_COMM(); // Utility Auto Fix Comments
                //SYM_SBLC_Cal_TOTAL_ISS_COMM();
                //document.MAINFORM.CURRENT_COMM.value = 0;
                Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                break;
            case 'Weekly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                //SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '7',document.MAINFORM.COMM_DT.name,'A','N','N');
                SYM_SBLC_Calculate_SBLC_ISS_COMM_NEW();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Monthly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Calculate_SBLC_ISS_COMM_NEW();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Quarterly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Calculate_SBLC_ISS_COMM_NEW();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Calculate_SBLC_ISS_COMM_NEW();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Calculate_SBLC_ISS_COMM_NEW();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_ADV_BK_SW_TAG_cal = function() {
    try {

        if (document.MAINFORM.ADV_BK_ID.value != '' && document.MAINFORM.ADV_BK_NM.value != '' && document.MAINFORM.ADV_BK_ADD1.value != '' && document.MAINFORM.ADV_BK_ADD2.value != '' && document.MAINFORM.ADV_BK_ADD3.value != '' && document.MAINFORM.ADV_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ADV_BK_ID.value != '' && document.MAINFORM.ADV_BK_SW_ADD.value != '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_AVAL_WT_BK_SW_TAG_cal = function() {
    try {

        if (document.MAINFORM.AVAL_WT_BK_ID.value != '' && document.MAINFORM.AVAL_WT_BK_NM.value != '' && document.MAINFORM.AVAL_WT_BK_ADD1.value != '' && document.MAINFORM.AVAL_WT_BK_ADD2.value != '' && document.MAINFORM.AVAL_WT_BK_ADD3.value != '' && document.MAINFORM.AVAL_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.AVAL_WT_BK_ID.value != '' && document.MAINFORM.AVAL_WT_BK_SW_ADD.value != '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_ISSUE_BK_SW_TAG_cal = function() {
    try {

        if (document.MAINFORM.ISSUE_BK_ID.value != '' && document.MAINFORM.ISSUE_BK_ADD1.value != '' && document.MAINFORM.ISSUE_BK_ADD2.value != '' && document.MAINFORM.ISSUE_BK_ADD3.value != '' && document.MAINFORM.ISSUE_BK_NM.value != '' && document.MAINFORM.ISSUE_BK_SW_ADD.value == '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ISSUE_BK_ID.value != '' && document.MAINFORM.ISSUE_BK_SW_ADD.value != '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_DRWE_ID_cal = function() {
    try {

        if (document.MAINFORM.DRWE_ID.value != '' && document.MAINFORM.DRWE_NM.value != '' && document.MAINFORM.DRWE_ADD1.value != '' && document.MAINFORM.DRWE_ADD2.value != '' && document.MAINFORM.DRWE_ADD3.value != '' && document.MAINFORM.DRWE_SW_ADD.value == '') {
            document.MAINFORM.DRWE_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ISSUE_BK_ID.value != '' && document.MAINFORM.DRWE_SW_ADD.value != '') {
            document.MAINFORM.DRWE_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('ADV_BK_NM', 'ADV_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('ADV_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ADV_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_BK_ID', 'ADV_BK_ID');
        SYF_SBLC_ADV_BK_SW_TAG_cal();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ADV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_SBLC_ADVISING_ORDER_NUMBER();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYF_SBLC_ADV_BK_SW_TAG_cal();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_AMT_SPEC_onchange = function(event) {
    try {
        if (document.MAINFORM.AMT_SPEC.value == 'NOT EXCEEDING') {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
            document.MAINFORM.POS_TOL.value = '';
            document.MAINFORM.NEG_TOL.value = '';
            document.MAINFORM.LC_BAL.value = document.MAINFORM.LC_AMT.value;
            SYM_SBLC_LC_CCY();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
            //document.MAINFORM.POS_TOL.value = 0;
            //document.MAINFORM.NEG_TOL.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_SBLC_SHOW_HIDDEN_APPLB_RULE();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_APPL_BTN_onclick = function(event) {
    try {
        SYM_SBLC_SQL_APPL_ADD_CUST();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_APPL_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.APPL_ID.value == '') {
            document.MAINFORM.APPL_ID.value = '';
            document.MAINFORM.APPL_NM.value = '';
            document.MAINFORM.APPL_ADD1.value = '';
            document.MAINFORM.APPL_ADD2.value = '';
            document.MAINFORM.APPL_ADD3.value = '';
            document.MAINFORM.ACC_MANAGER.value = '';
            document.MAINFORM.APPL_NOTES.value = '';
            SYM_SBLC_CALL_APPL_ADD_BACK();
            SYF_SBLC_AFTER_APPL_ID();
        } else {
            SYS_GetCUBK_S('APPL_ID', 'APPL_ID', 'SYF_SBLC_Cal_APPL_ID_BACK');
            document.MAINFORM.TEMP_MT700_50_NM.value = document.MAINFORM.APPL_NM.value;
            document.MAINFORM.TEMP_MT700_50_ADD1.value = document.MAINFORM.APPL_ADD1.value;
            document.MAINFORM.TEMP_MT700_50_ADD2.value = document.MAINFORM.APPL_ADD2.value;
            document.MAINFORM.TEMP_MT700_50_ADD3.value = document.MAINFORM.APPL_ADD3.value;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_APPL_NM_onchange = function(event) {
    try {
        SYF_SBLC_AFTER_APPL_ID();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYM_SBLC_APPL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_AUTO_RENEW_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_AVAL_BY_onchange = function(event) {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_MIX_PAY_DETAIL, 'P');
            document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = '';
        } else if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_MIX_PAY_DETAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, 'P');
            document.MAINFORM.DEF_PMT_DET.value = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_MIX_PAY_DETAIL, 'P');
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('AVAL_WT_BK_NM', 'AVAL_WT_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('AVAL_WT_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
        SYF_SBLC_AVAL_WT_BK_SW_TAG_cal();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_SBLC_AVAILABLE_ORDER_NUMBER();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYF_SBLC_AVAL_WT_BK_SW_TAG_cal();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_BENE_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('BENE_NM', 'BENE_ID', 'ID');
        SYS_InqCUBK_byCondition('BENE_NM', '1');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_BENE_ID_onchange = function(event) {
    try {
        //SYT_GetCUBK_All('BENE_ID', 'BENE_ID');
        SYM_SBLC_BENE_ID_Clear_field();
        if (document.MAINFORM.BENE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYM_SBLC_BENE_ORDER_NUMBER();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_POLICY_onchange = function(event) {
    try {
        //SYM_SBLC_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY();
        SYM_SBLC_Calculate_ISS_COMM_NEW();
        SYM_SBLC_ChangeFldClass();
        SYM_SBLC_Cal_NXT_COMM_DT();
        //SYM_SBLC_Set_ChargeAt();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_COMM_BAL_onchange = function(event) {
    try {
        document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_COMM_DT_onchange = function(event) {
    try {
        SYM_SBLC_CHK_COMM_DT();
        //SYM_SBLC_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY2();
        SYF_SBLC_Calculate_ISS_COMM_NEW2();
        SYM_SBLC_Cal_NXT_COMM_DT();
        //SYM_SBLC_Set_ChargeAt();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_COMM_END_DT_onchange = function(event) {
    try {
        SYM_SBLC_CHK_COMM_END_DT();
        //SYM_SBLC_FOR_AMEND_DT();
        //SYM_SBLC_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY();
        SYM_SBLC_Calculate_ISS_COMM_NEW();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_COMM_START_DT_onchange = function(event) {
    try {
        SYM_SBLC_CHK_COMM_END_DT();
        SYM_SBLC_CHK_COMM_DT();
        //SYM_SBLC_FOR_AMEND_DT();
        //SYM_SBLC_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY();
        SYM_SBLC_Calculate_ISS_COMM_NEW();
        //SYM_SBLC_Set_ChargeAt();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CURRENT_COMM_onchange = function(event) {
    try {
        if (document.MAINFORM.CURRENT_COMM.value < 0) {
            alert("Current LC Commission not accept the Negative values");
            document.MAINFORM.CURRENT_COMM.value = 0;
        }
        SYM_SBLC_Part_In_Advance_Comm_Onchange();
        document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DRAFTS_AT_onchange = function(event) {
    try {
        //SYF_SBLC_Drafts_Drwaeename();
        //SYF_SBLC_Drafts_At();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DRWE_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('DRWE_NM', 'DRWE_ID', 'ID');
        SYS_InqCUBK_byCondition('DRWE_NM', '1');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DRWE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWE_ID', 'DRWE_ID');
        SYF_SBLC_DRWE_ID_cal();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DRWE_NM_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_SBLC_DRAWE_ORDER_NUMBER();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DRWE_SW_ADD_onchange = function(event) {
    try {
        SYF_SBLC_DRWE_ID_cal();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DRWE_SW_TAG_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_SBLC_Date_Check();
        SYF_SBLC_Expiry_Date_Check();
        //SYF_SBLC_Issue_Date_Check();
        SYF_SBLC_Final_Expiry_Date_Check();
        //SYF_SBLC_Date_Field_Empty_Reset();
        SYF_SBLC_Days_To_Renewal();
        SYF_SBLC_NOTIFY_NONRENEWAL_CHECK();

        SYM_SBLC_Calculate_ISS_COMM_NEW();
        SYM_SBLC_ChangeFldClass();
        SYM_SBLC_Cal_NXT_COMM_DT();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_EXPIRY_TYPE_onchange = function(event) {
    try {
        var type = document.MAINFORM.EXPIRY_TYPE.value;
        if (type == 'FIXD') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'M');
            document.MAINFORM.EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'P');
        } else if (type == 'COND') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'M');
        } else if (type == 'OPEN') {
            document.MAINFORM.EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
            document.MAINFORM.EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_FINAL_EXPIRY_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.ISSUE_DT.value == '') {
            alert("Please select Issue Date!");
            document.MAINFORM.FINAL_EXPIRY_DT.value = '';
        } else if (document.MAINFORM.EXPIRY_DT.value == '') {
            alert("Please select Expiry Date!");
            document.MAINFORM.FINAL_EXPIRY_DT.value = '';
        } else {
            SYF_SBLC_Issue_Date_Check();
            SYF_SBLC_Expiry_Date_Check();
        }
        SYF_SBLC_Date_Field_Empty_Reset();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_FOR_ACCT_NR_onchange = function(event) {
    try {
        if (document.MAINFORM.FOR_ACCT_NR.value != '') {
            SYT_GetCUBK_All('FOR_ACCT_NR', 'FOR_ACCT_NR');
            document.MAINFORM.TEMP_MT700_50_NM.value = document.MAINFORM.FOR_ACCT_NAME.value;
            document.MAINFORM.TEMP_MT700_50_ADD1.value = document.MAINFORM.FOR_ACCT_ADD1.value;
            document.MAINFORM.TEMP_MT700_50_ADD2.value = document.MAINFORM.FOR_ACCT_ADD2.value;
            document.MAINFORM.TEMP_MT700_50_ADD3.value = document.MAINFORM.FOR_ACCT_ADD3.value;
            SYT_ChangeFldClass(document.MAINFORM.FOR_ACCT_NR_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FOR_ACCT_NR_ADD_BTN, 'P');
            document.MAINFORM.FOR_ACCT_NR.value = '';
            document.MAINFORM.FOR_ACCT_NAME.value = '';
            document.MAINFORM.FOR_ACCT_ADD1.value = '';
            document.MAINFORM.FOR_ACCT_ADD2.value = '';
            document.MAINFORM.FOR_ACCT_ADD3.value = '';
            document.MAINFORM.FOR_ACCT_NOTES.value = '';
            document.MAINFORM.FOR_ACCT_ORDER_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_FOR_ACCT_NR_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('FOR_ACC_ADD', 'FOR_ACCT_NR', 'ID');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_FOR_ACCT_NR_BTN_onclick = function(event) {
    try {
        SYM_SBLC_SQL_FOR_ACCT_NR();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_FOR_ACCT_ORDER_NO_onchange = function(event) {
    try {
        SYM_SBLC_FOR_ACCOUNT_ORDER_NUMBER();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ISSUE_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
        SYF_SBLC_ISSUE_BK_SW_TAG_cal();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYF_SBLC_ISSUE_BK_SW_TAG_cal();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_ISSUE_DT_onchange = function(event) {
    try {
        SYF_SBLC_Issue_Date_Check();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_LC_AMT_onchange = function(event) {
    try {
        SYF_SBLC_LC_BALANCE_CALC();
        SYF_SBLC_To_Decimal();
        SYF_SBLC_LC_BALANCE();
        SYF_SBLC_LC_AMOUNT();
        SYM_SBLC_LC_CCY();
        SYM_SBLC_LC_CCY_BAL();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_LC_CCY_onchange = function(event) {
    try {
        var flddoccy; // Utility Auto Fix Comments
        var mainccy; // Utility Auto Fix Comments
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        SYF_SBLC_LC_AMOUNT();
        SYM_SBLC_LC_CCY();
        SYM_SBLC_LC_CCY_BAL();

        mainccy = document.MAINFORM.LC_CCY.value;
        flddoccy = document.MAINFORM.LC_CCY.name;
        SYS_refreshChildDoValue("SBLCSchedule", flddoccy, mainccy);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_LC_TYPE_onchange = function(event) {
    try {
        var sLC_TYPE; // Utility Auto Fix Comments
        var sREF_INIT; // Utility Auto Fix Comments
        var sREF_RULE; // Utility Auto Fix Comments
        sREF_INIT = "SBLC";
        sLC_TYPE = document.MAINFORM.LC_TYPE.value;


        sREF_RULE = sREF_INIT + sLC_TYPE;
        if (sLC_TYPE != "") {
            SYS_GetRefNo(sREF_RULE, "SYM_SBLC_setRef");
        } else {
            document.MAINFORM.C_MAIN_REF.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_LTST_SHIP_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.LTST_SHIP_DT.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.SHIP_PRD, 'P');
            document.MAINFORM.SHIP_PRD.value = '';
        } else {

            SYT_ChangeFldClass(document.MAINFORM.SHIP_PRD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MESG_TYPE_onchange = function(event) {
    try {
        SYM_SBLC_Format_onChange();

        if (document.MAINFORM.MESG_TYPE.value == 'MT700') {
            // document.MAINFORM.APLB_RULE.value = "ISP LATEST VERSION";//Jax 2020/5/25
            SYF_SBLC_Clear_MT760();
            SYF_SBLC_Clear_Mail();
            document.MAINFORM.OTHER_RULES.value = '';
            SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'H');
        } else if (document.MAINFORM.MESG_TYPE.value == 'MT760') {
            document.MAINFORM.APLB_RULE.value = "ISPR";
            SYF_SBLC_Clear_Partied_1();
            SYF_SBLC_Clear_MT700_1();
            SYF_SBLC_Clear_MT700_2();
            SYF_SBLC_Clear_Mail();
            document.MAINFORM.OTHER_RULES.value = '';
            SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'H');
        } else if (document.MAINFORM.MESG_TYPE.value == 'MAIL') {
            SYF_SBLC_Clear_Parties_MAIL();
            SYF_SBLC_Clear_MT760();
            SYF_SBLC_Clear_MT700_1();
            SYF_SBLC_Clear_MT700_2();

        } else {
            SYF_SBLC_Clear_MT700_1();
            SYF_SBLC_Clear_MT700_2();
            SYF_SBLC_Clear_MT760();
            SYF_SBLC_Clear_Mail();
            SYF_SBLC_Clear_PartiesTab();
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MT700_SEND_TO_RCV_INFO_CLAUSE_onclick = function(event) {
    try {
        SYS_InsertClause('MT700_SEND_TO_RCV_INFO');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MT700_STNDBY_TEXT1_CLAUSE_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('MT700_STNDBY_TEXT1');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MT700_STNDBY_TEXT2_CLAUSE_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('MT700_STNDBY_TEXT2');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MT700_STNDBY_TEXT3_CLAUSE_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('MT700_STNDBY_TEXT3');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MT760_SEND_TO_RCV_INFO_CLAUSE_onclick = function(event) {
    try {
        SYS_InsertClause('MT760_SEND_TO_RCV_INFO');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MT760_STNDBY_TEXT1_CLAUSE_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('MT760_STNDBY_TEXT1');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MT760_STNDBY_TEXT2_CLAUSE_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('MT760_STNDBY_TEXT2');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MT760_STNDBY_TEXT3_CLAUSE_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('MT760_STNDBY_TEXT2');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_MULTI_BENE_onchange = function(event) {
    try {
        var objBDo; // Utility Auto Fix Comments
        if (document.MAINFORM.MULTI_BENE.value == "YES") {
            EEHtml.getElementById('C').style.display = '';
        } else {
            EEHtml.getElementById('C').style.display = "none";
            objBDo = SYS_getDoByXpath("BneficiarySBLC");
            objBDo.clearAll();
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NEG_TOL_onchange = function(event) {
    try {
        //SYF_SBLC_Tolerance_Check();
        if (document.MAINFORM.POS_TOL.value == 0 && document.MAINFORM.NEG_TOL.value == 0) {
            SYT_ChangeFldClass(document.MAINFORM.AMT_SPEC, 'O');
        }
        SYF_SBLC_LC_AMOUNT();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NOTIFY_DAYS_onchange = function(event) {
    try {
        var date; // Utility Auto Fix Comments
        var date1; // Utility Auto Fix Comments
        var expirydate; // Utility Auto Fix Comments
        var expriydate; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var nDays; // Utility Auto Fix Comments
        var newDate; // Utility Auto Fix Comments
        var notifdate; // Utility Auto Fix Comments
        var notifdatefinal; // Utility Auto Fix Comments
        var notifperiod; // Utility Auto Fix Comments
        var tempdate; // Utility Auto Fix Comments
        var tempmonth; // Utility Auto Fix Comments
        var value; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        document.MAINFORM.FINAL_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        if (document.MAINFORM.NOTIFY_DAYS.value != '0') {
            notifperiod = document.MAINFORM.NOTIFY_DAYS.value;
            value = document.MAINFORM.EXPIRY_DT.value;
            newDate = getDate(SYS_DATE_FORMAT, value);
            year = newDate.substring(0, 4);
            month = newDate.substring(5, 7);
            date = newDate.substring(8, 10);
            expriydate = new Date();

            expriydate.setFullYear(year);
            expriydate.setMonth(parseInt(month, 0) - 1);
            expriydate.setDate(parseInt(date, 0));
            notifdate = expriydate;

            /*expirydate = new Date(document.MAINFORM.EXPIRY_DT.value);
	notifdate = new Date(document.MAINFORM.EXPIRY_DT.value);*/

            date1 = notifdate.getDate();
            month = notifdate.getMonth();
            notifdate.setDate(date1 - notifperiod);
            tempdate = notifdate.getDate();
            tempmonth = notifdate.getMonth();
            if (tempmonth < 9) {
                tempmonth = tempmonth + 1;
                tempmonth = "0" + tempmonth;
            } else {
                tempmonth = tempmonth + 1;

            }
            if (tempdate < 9) {
                tempdate = "0" + tempdate;
            }
            //notifdatefinal = tempmonth +"-"+tempdate+"-"+notifdate.getFullYear();
            notifdatefinal = notifdate.getFullYear() + "-" + tempmonth + "-" + tempdate;
            document.MAINFORM.NOTIFY_DATE.value = notifdatefinal;
            nDays = SYS_GetSubDays(document.MAINFORM.NOTIFY_DATE.name, document.MAINFORM.ISSUE_DT.name);
            if (nDays >= 0) {
                alert("Notification Date should be later than Issue Date");
                document.MAINFORM.NOTIFY_DATE.value = '';
                document.MAINFORM.NOTIFY_DAYS.value = '';
            } else {
                document.MAINFORM.NOTIFY_DATE.value = notifdatefinal;
            }

            if (document.MAINFORM.ISSUE_DT.value == '') {
                alert("Please select Issue date!");
            } else if (document.MAINFORM.EXPIRY_DT.value == '') {
                alert("Please select Expiry date!");
            }
        }
        if (document.MAINFORM.NOTIFY_DAYS.value == '' || document.MAINFORM.NOTIFY_DAYS.value == '0') {
            document.MAINFORM.NOTIFY_DATE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_NRENEW_ADV_PERIOD_onchange = function(event) {
    try {
        var date; // Utility Auto Fix Comments
        var date1; // Utility Auto Fix Comments
        var expirydate; // Utility Auto Fix Comments
        var expriydate; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var nDays; // Utility Auto Fix Comments
        var nDays1; // Utility Auto Fix Comments
        var newDate; // Utility Auto Fix Comments
        var nonrenewaldate; // Utility Auto Fix Comments
        var nonrenewaldatefinal; // Utility Auto Fix Comments
        var nonrenewalperiod; // Utility Auto Fix Comments
        var tempdate; // Utility Auto Fix Comments
        var tempmonth; // Utility Auto Fix Comments
        var value; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        if (document.MAINFORM.NRENEW_ADV_PERIOD.value != '0') {
            nonrenewalperiod = document.MAINFORM.NRENEW_ADV_PERIOD.value;

            value = document.MAINFORM.EXPIRY_DT.value;
            newDate = getDate(SYS_DATE_FORMAT, value);
            year = newDate.substring(0, 4);
            month = newDate.substring(5, 7);
            date = newDate.substring(8, 10);
            expriydate = new Date();
            expriydate.setFullYear(year);
            expriydate.setMonth(parseInt(month, 0) - 1);
            expriydate.setDate(parseInt(date, 0));
            nonrenewaldate = expriydate;

            /*expirydate = new Date(document.MAINFORM.EXPIRY_DT.value);
	nonrenewaldate = new Date(document.MAINFORM.EXPIRY_DT.value);*/

            date1 = nonrenewaldate.getDate();
            nonrenewaldate.setDate(date1 - nonrenewalperiod);
            tempmonth = nonrenewaldate.getMonth();
            tempdate = nonrenewaldate.getDate();
            if (tempmonth < 9) {
                tempmonth = tempmonth + 1;
                tempmonth = "0" + tempmonth;
            } else {
                tempmonth = tempmonth + 1;

            }
            if (tempdate < 9) {
                tempdate = "0" + tempdate;
            }
            //nonrenewaldatefinal = tempmonth+"-"+tempdate+"-"+nonrenewaldate.getFullYear();
            nonrenewaldatefinal = nonrenewaldate.getFullYear() + "-" + tempmonth + "-" + tempdate;

            document.MAINFORM.NRENEW_ADV_DATE.value = nonrenewaldatefinal;
            nDays = SYS_GetSubDays(document.MAINFORM.NOTIFY_DATE.name, document.MAINFORM.NRENEW_ADV_DATE.name);
            if (nDays < 0) {
                alert("Non-Renewal Advice Date should be later than Notification Date");
                document.MAINFORM.NRENEW_ADV_DATE.value = '';
                document.MAINFORM.NRENEW_ADV_PERIOD.value = '';
            }
            if (document.MAINFORM.ISSUE_DT.value == '') {
                alert("Please select Issue date!");
            } else if (document.MAINFORM.EXPIRY_DT.value == '') {
                alert("Please select Expiry date!");
            }
        }
        if (document.MAINFORM.NRENEW_ADV_PERIOD.value == '' || document.MAINFORM.NRENEW_ADV_PERIOD.value == '0') {
            document.MAINFORM.NRENEW_ADV_DATE.value = '';
        }

        if ((document.MAINFORM.NOTIFY_DAYS.value == '0' || document.MAINFORM.NOTIFY_DAYS.value == '') && document.MAINFORM.NOTIFY_DATE.value == '') {
            nDays1 = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.NRENEW_ADV_DATE.name);

            if (nDays1 < 0) {
                alert("Non-Renewal Advice Date should be later than Issue Date");
                document.MAINFORM.NRENEW_ADV_DATE.value = '';
                document.MAINFORM.NRENEW_ADV_PERIOD.value = '';
            }

        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PARTIAL_SHIP_onchange = function(event) {
    try {
        SYF_SBLC_SHOW_HIDDEN_PART_SHP();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_PARTIAL_SHIP_NARR_onchange = function(event) {
    try {
        SYF_SBLC_SHOW_HIDDEN_PART_SHP();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_POS_TOL_onchange = function(event) {
    try {
        //SYF_SBLC_Tolerance_Check();
        if (document.MAINFORM.POS_TOL.value == 0 && document.MAINFORM.NEG_TOL.value == 0) {
            SYT_ChangeFldClass(document.MAINFORM.AMT_SPEC, 'O');
        }
        SYF_SBLC_LC_BALANCE();
        SYF_SBLC_LC_AMOUNT();
        SYF_SBLC_LC_BALANCE_CALC();
        SYM_SBLC_LC_CCY();
        SYM_SBLC_LC_CCY_BAL();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_SCHEDULED_onchange = function(event) {
    try {
        var doObj; // Utility Auto Fix Comments
        if (document.MAINFORM.SCHEDULED.value == "YES") {
            EEHtml.getElementById('I').style.display = '';
        } else if ((document.MAINFORM.SCHEDULED.value == 'NO' || document.MAINFORM.SCHEDULED.value == "") && (document.MAINFORM.AUTO_RENEW.value == 'NO' || document.MAINFORM.AUTO_RENEW.value == "")) {
            EEHtml.getElementById('I').style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.FREQUENCY, 'P');
            doObj = SYS_getDoByXpath("SBLCSchedule");
            doObj.clearAll();
        } else if (document.MAINFORM.AUTO_RENEW.value == 'YES' && (document.MAINFORM.SCHEDULED.value == 'NO' || document.MAINFORM.SCHEDULED.value == "")) {
            EEHtml.getElementById('I').style.display = "none";
            doObj = SYS_getDoByXpath("SBLCSchedule");
            doObj.clearAll();
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_SHIP_PRD_onchange = function(event) {
    try {
        if (document.MAINFORM.SHIP_PRD.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.LTST_SHIP_DT, 'P');
            document.MAINFORM.LTST_SHIP_DT.value = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LTST_SHIP_DT, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_STNDBY_TEXT1_CLAUSE_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('STNDBY_TEXT1');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_TNSHIP_onchange = function(event) {
    try {
        SYF_SBLC_SHOW_HIDDEN_TRANS_SHIP();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_TNSHIP_NARR_onchange = function(event) {
    try {
        SYF_SBLC_SHOW_HIDDEN_TRANS_SHIP();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLCIssue.js", e);
    }
}