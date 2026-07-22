var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        var overdue = document.MAINFORM.OVD_DT.value;
        if (overdue != '') {

            document.MAINFORM.OVD_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_AMD_FIN_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_ADJ_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_ADJ_BAL.value);
        document.MAINFORM.FA_INV_LOAN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_LOAN_AMT.value);
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_LOAN_BAL.value);

        SYF_FAEF_Get_RT_FROM_SBR();
        SYF_FAEF_Get_Loan_INT_F_AMD();
        document.MAINFORM.FA_OLD_XBOR_RT.value = document.MAINFORM.XBOR_RT.value;
        document.MAINFORM.FA_OLD_LOAN_INT_RT.value = document.MAINFORM.FA_LOAN_INT_RT.value;
        document.MAINFORM.FA_OLD_LOAN_ID.value = document.MAINFORM.FA_INV_LOAN_ID.value;
        document.MAINFORM.FA_OLD_IRT_SPREAD.value = document.MAINFORM.FA_IRT_SPREAD.value;
        document.MAINFORM.FA_OLD_OVD_IRT_SPREAD.value = document.MAINFORM.FA_OVD_IRT_SPREAD.value;
        document.MAINFORM.FA_OLD_INT_CHG_TYPE.value = document.MAINFORM.FA_INT_CHG_TYPE.value;
        //document.MAINFORM.FA_OLD_LOAN_DUE_DT.value = document.MAINFORM.FA_LOAN_DUE_DT.value;
        SYF_FAEF_Cal_old_loan_due_dt();
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;

        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.FSBC_REF.value;
        SYS_GetRefNo('SCF_INV_FINANCE', 'SYF_FAEF_Cal_RefNoM');


        SYF_FAEF_Cal_New_Loan_ID();
        //SYF_FAEF_Cal_Exd_Principle();
        SYF_FAEF_Get_BaseDay_CCYDec();
        SYF_FAEF_Get_ACC_INT();

        SYF_FAEF_Get_MAX_ROLLOVER_DAYS();
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_FAEF_Cal_new_loan_due_dt();
        }
        SYF_FAEF_CHECK_OVER_MAX_ROLLOVER_DATE();
        SYF_FAEF_Cal_amd_fin_eff_dt();
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_CHECK_LOAN_DUE_DT = function() {
    try {
        var nDays1;
        var nDays2;
        var amdFinEffDt;

        var maxRollDays;
        var oldDueDt;
        var nDays3;

        nDays1 = SYS_GetSubDays(document.MAINFORM.FA_OLD_LOAN_DUE_DT.name, document.MAINFORM.FA_LOAN_DUE_DT.name);
        nDays2 = SYS_GetSubDays(document.MAINFORM.FA_AMD_FIN_EFF_DT.name, document.MAINFORM.FA_LOAN_DUE_DT.name);
        amdFinEffDt = document.MAINFORM.FA_AMD_FIN_EFF_DT.value;

        maxRollDays = document.MAINFORM.MAX_ROLLOVER_DAYS.value;
        oldDueDt = document.MAINFORM.FA_OLD_LOAN_DUE_DT.value;
        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, oldDueDt, maxRollDays, document.MAINFORM.MAX_EXTEND_DAYS.name, 'A', 'N', 'N');
        nDays3 = SYS_GetSubDays(document.MAINFORM.MAX_EXTEND_DAYS.name, document.MAINFORM.FA_LOAN_DUE_DT.name);

        if (nDays1 < 0) {
            SYS_CheckError(document.MAINFORM.FA_LOAN_DUE_DT, 'New due date must be later than original due date!');
            document.MAINFORM.FA_LOAN_DUE_DT.value = '';
        } else if (amdFinEffDt != '' && nDays2 <= 0) {
            SYS_CheckError(document.MAINFORM.FA_LOAN_DUE_DT, 'New due date must be later than Amendment Effective Date!');
            document.MAINFORM.FA_LOAN_DUE_DT.value = '';
        } else if (nDays3 > 0) {
            SYS_CheckError(document.MAINFORM.FA_LOAN_DUE_DT, 'The extension period already exceeded the max extend days!');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_CHECK_LOAN_DUE_DT", e);
    }
}

csFuncLevelProto.SYF_FAEF_CHECK_OVER_MAX_ROLLOVER_DATE = function() {
    try {
        var oldDueDt;
        var nDays;
        var nDays1;

        oldDueDt = document.MAINFORM.FA_OLD_LOAN_DUE_DT.value;
        nDays = document.MAINFORM.MAX_ROLLOVER_DAYS.value;
        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, oldDueDt, nDays, document.MAINFORM.MAX_EXTEND_DAYS.name, 'A', 'N', 'N');
        nDays1 = SYS_GetSubDays(document.MAINFORM.MAX_EXTEND_DAYS.name, document.MAINFORM.FA_AMD_FIN_DT.name);

        if (nDays1 > 0) {
            SYS_CheckError(document.MAINFORM.FA_LOAN_DUE_DT, 'The Amendment Date already exceeded the max extend days!');
            //SYF_FAEF_Cal_new_loan_due_dt();
            document.MAINFORM.FA_LOAN_DUE_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_CHECK_OVER_MAX_ROLLOVER_DATE", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Exd_Principle = function() {
    try {
        var meth;
        var old_prin;
        var old_int;
        var exd_prin;
        var old_pen;
        meth = document.MAINFORM.EXTEN_INT_MTHD.value;
        old_prin = SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_AMT.value);
        old_int = SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_AMT.value);
        old_pen = SYS_BeFloat(document.MAINFORM.FA_OVDUE_INT_SUM.value);
        var intChgType = document.MAINFORM.FA_OLD_INT_CHG_TYPE.value;

        if (intChgType == '2' && meth == '2') {
            document.MAINFORM.EXTEN_PRCPL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, old_prin + old_int);
            document.MAINFORM.FA_TEMP5.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, old_int);

        } else if (intChgType == '1' && meth == '2') {
            document.MAINFORM.EXTEN_PRCPL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, old_prin + old_pen);
            document.MAINFORM.FA_TEMP5.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, old_pen);
        } else {
            document.MAINFORM.EXTEN_PRCPL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, old_prin);
            document.MAINFORM.FA_TEMP5.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Cal_Exd_Principle", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_New_Loan_ID = function() {
    try {
        var int_chg;
        int_chg = document.MAINFORM.FA_OLD_INT_CHG_TYPE.value;
        var nDays;
        nDays = SYS_GetSubDays(document.MAINFORM.FA_OLD_LOAN_DUE_DT.name, document.MAINFORM.FA_AMD_FIN_DT.name);
        document.MAINFORM.FA_TEMP2.value = nDays;
        if (nDays <= 0 && int_chg == '1') {
            document.MAINFORM.FA_INV_LOAN_ID.value = document.MAINFORM.FA_OLD_LOAN_ID.value + 'AMD';
            document.MAINFORM.FA_INT_CHG_TYPE.value = '2';
        } else {
            document.MAINFORM.FA_INV_LOAN_ID.value = document.MAINFORM.FA_OLD_LOAN_ID.value;
            document.MAINFORM.FA_INT_CHG_TYPE.value = int_chg;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Cal_New_Loan_ID", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Rate = function() {
    try {
        var base;
        var margin;
        var rate;
        base = SYS_BeFloat(document.MAINFORM.XBOR_RT.value);
        margin = SYS_BeFloat(document.MAINFORM.FA_IRT_SPREAD.value);
        rate = base + margin;
        document.MAINFORM.FA_LOAN_INT_RT.value = DecimalFormat(rate, 6);
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Cal_Rate", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_RefNoM = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(0, 4);
        document.MAINFORM.C_MAIN_REF.value = pre + UnitCode + year.substr(2, 4) + ref + 'FIN';
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Cal_RefNoM", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_amd_fin_eff_dt = function() {
    try {
        document.MAINFORM.FA_AMD_FIN_EFF_DT.value = document.MAINFORM.FA_OLD_LOAN_DUE_DT.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Cal_amd_fin_eff_dt", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_new_loan_due_dt = function() {
    try {
        var maxExtDays = document.MAINFORM.MAX_ROLLOVER_DAYS.value;
        var loanDueDt = document.MAINFORM.FA_OLD_LOAN_DUE_DT.value;
        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, loanDueDt, maxExtDays, document.MAINFORM.FA_LOAN_DUE_DT.name, 'A', 'N', 'N');
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Cal_new_loan_due_dt", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_old_loan_due_dt = function() {
    try {
        //var grace = document.MAINFORM.FA_PMT_GRC_DAY.value;
        //var loanDueDt = document.MAINFORM.FA_LOAN_DUE_DT.value;
        //SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, loanDueDt, grace, document.MAINFORM.FA_OLD_LOAN_DUE_DT.name, 'A', 'N', 'N');
        document.MAINFORM.FA_OLD_LOAN_DUE_DT.value = document.MAINFORM.FA_LOAN_DUE_DT.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Cal_old_loan_due_dt", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_ACC_INT = function() {
    try {
        var intChgType = document.MAINFORM.FA_OLD_INT_CHG_TYPE.value;
        if (intChgType == '2') {
            SYS_InqGapi_S('AMD_Inquire_ACC_INT');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Get_ACC_INT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_AMZ_INT_4_NEW_LOAN = function() {
    try {
        //GET THE AMZ INTEREST FOR THE UPFRONT LOAN RECORD;
        var NEWintChgType = document.MAINFORM.FA_INT_CHG_TYPE.value;
        if (NEWintChgType == '1') {
            // SYS_InqGapi_S('AMD_Inquire_AMZINT_4_NewL'); 
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Get_AMZ_INT_4_NEW_LOAN", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_BaseDay_CCYDec = function() {
    try {
        SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_BaseDay_CCYDec_1', '1', 'Y');
        document.MAINFORM.FA_TEMP6.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Get_BaseDay_CCYDec", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_Loan_INT_F_AMD = function() {
    try {
        var intChgType = document.MAINFORM.FA_OLD_INT_CHG_TYPE.value;
        //if (intChgType == '1') {
        SYS_GetTableDataByRule_S('Get_Loan_INT_F_AMD', '1', 'Y'); // GET INTEREST FROM INVC_LOAN;

        //}
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Get_Loan_INT_F_AMD", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_MAX_ROLLOVER_DAYS = function() {
    try {
        SYS_GetTableDataByRule_S('GET_MAX_ROLLOVER_DAYS', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Get_MAX_ROLLOVER_DAYS", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_Penalty_INT_F_AMZ_OVER = function() {
    try {
        var nDays1;
        var intChgType = document.MAINFORM.FA_OLD_INT_CHG_TYPE.value;
        nDays1 = SYS_GetSubDays(document.MAINFORM.FA_OLD_LOAN_DUE_DT.name, document.MAINFORM.FA_AMD_FIN_EFF_DT.name);
        if (nDays1 > 0 || nDays1 == 0 && intChgType == '1') {

            SYS_InqGapi_S('AMD_Inq_SWITCHTOACC_INT');

        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Get_Penalty_INT_F_AMZ_OVER", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_RT_FROM_SBR = function() {
    try {
        SYS_GetTableDataByRule_S('SYF_FAEF_ROLLOVER_RATE', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*SYF_FAEF_Get_RT_FROM_SBR", e);
    }
}

csFuncLevelProto.FLD_FAEF_EXTEN_INT_MTHD_onchange = function(event) {
    try {
        SYF_FAEF_Cal_Exd_Principle();
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*FLD_FAEF_EXTEN_INT_MTHD_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_EXTEN_PRCPL_onchange = function(event) {
    try {
        // SYF_FAEF_Get_AMZ_INT_4_NEW_LOAN();
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*FLD_FAEF_EXTEN_PRCPL_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_AMD_FIN_EFF_DT_onchange = function(event) {
    try {
        var nDays1;
        var newLoanDueDate;
        nDays1 = SYS_GetSubDays(document.MAINFORM.FA_OLD_LOAN_DUE_DT.name, document.MAINFORM.FA_AMD_FIN_EFF_DT.name);
        newLoanDueDate = document.MAINFORM.FA_LOAN_DUE_DT.value;
        if (nDays1 < 0) {
            SYS_CheckError(document.MAINFORM.FA_AMD_FIN_EFF_DT, 'Amendment effective date is always equal/after original due date!');
            document.MAINFORM.FA_AMD_FIN_EFF_DT.value = document.MAINFORM.FA_OLD_LOAN_DUE_DT.value;
        }
        SYF_FAEF_Get_Penalty_INT_F_AMZ_OVER();
        //NIA
        if (newLoanDueDate != '') {
            SYF_FAEF_CHECK_LOAN_DUE_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*FLD_FAEF_FA_AMD_FIN_EFF_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IRT_SPREAD_onchange = function(event) {
    try {
        SYF_FAEF_Cal_Rate();
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*FLD_FAEF_FA_IRT_SPREAD_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_DUE_DT_onchange = function(event) {
    try {
        SYF_FAEF_CHECK_LOAN_DUE_DT();
        //SYF_FAEF_Get_AMZ_INT_4_NEW_LOAN();
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*FLD_FAEF_FA_LOAN_DUE_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_XBOR_RT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_Rate();
    } catch (e) {
        DisExcpt("SYF_FAEF_Roll_Over_Loans.js*FLD_FAEF_XBOR_RT_onchange", e);
    }
}