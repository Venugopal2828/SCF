var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        if (document.MAINFORM.FA_LMT_CCY.value != document.MAINFORM.FA_LOAN_CCY.value) {
            document.MAINFORM.FA_TEMP_AMT13.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) * SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);

        } else {
            document.MAINFORM.FA_TEMP_AMT13.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);

        }
        document.MAINFORM.FA_TTL_LOAN_BAL.value = document.MAINFORM.FA_TTL_LOAN_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL()) {
            return false;
        }
        if (!SYT_MLDC_ValidateBalance()) {
            return false;
        }
        if (!SYF_FAEF_Validate_CE_FIN()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_LOAN_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_LOAN_DUE_DT.value = document.MAINFORM.FA_LMT_DUE_DT.value;
        document.MAINFORM.FA_BUSI_STATUS.value = 'LOAN';
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.TEMP_TRX_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_SBR_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_LOAN_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_FIN_TYPE.value = 'POOL';

        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        document.MAINFORM.FA_FIN_INFO.value = '';
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_ExchRate_FIX_PENDING();
            SYF_FAEF_GetExchangeRate();
        }

        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == 'EC') {
            //SYF_FAEF_MPO_Financing_back('P');
        }

        SYF_FAEF_Get_LOAN_CCY();
        SYF_FAEF_Cal_Aval_Financing_Amt();
        // SYF_FAEF_Get_BaseDay_CCYDec();
        SYF_FAEF_Get_ratetype();
        FLD_FAEF_CPYT_PAY_COV_MSG_onchange();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        exchRateOnLoadFlag = false;

        SYS_GetRefNo('SCF_POOL_FINANCE', 'SYF_FAEF_Cal_RefNo');
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Aval_Financing_Amt = function() {
    try {
        document.MAINFORM.AMT_AVAL_FOR_FUNDING.value = '';
        var amt = SYS_BeFloat(document.MAINFORM.FA_TTL_ADJ_BAL.value) * SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) / 100;
        document.MAINFORM.AMT_AVAL_FOR_FUNDING.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, SYS_FloatSub(amt, document.MAINFORM.FA_TTL_LOAN_BAL.value));
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_Cal_Aval_Financing_Amt", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_LOAN_INT_RT = function() {
    try {
        var FA_IRT_SPREAD; // Utility Auto Fix Comments
        var FA_LOAN_INT_RT; // Utility Auto Fix Comments
        var XBOR_RT; // Utility Auto Fix Comments
        XBOR_RT = SYS_BeFloat(document.MAINFORM.XBOR_RT.value);
        FA_IRT_SPREAD = SYS_BeFloat(document.MAINFORM.FA_IRT_SPREAD.value);
        FA_LOAN_INT_RT = XBOR_RT + FA_IRT_SPREAD;
        document.MAINFORM.FA_LOAN_INT_RT.value = DecimalFormat(FA_LOAN_INT_RT, 6);
        //SYF_FAEF_Cal_Interest_1();
        //  EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_Cal_FA_LOAN_INT_RT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_SEL_AC_AMT = function() {
    try {
        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value);
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_Cal_FA_SEL_AC_AMT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Interest_1 = function() {
    try {
        var loanamt = document.MAINFORM.FA_TTL_LOAN_AMT.value;
        var iaYReaccInt;
        var rebateamount;
        var FA_LOAN_VAL_DT = document.MAINFORM.FA_LOAN_VAL_DT.value;
        var FA_LOAN_DUE_DT = document.MAINFORM.FA_LOAN_DUE_DT.value;
        if (document.MAINFORM.FA_INT_CHG_TYPE.value == '1') {
            if (SYS_BeFloat(loanamt) > 0) {
                document.MAINFORM.IA_Y_TRX_AMT.value = loanamt;
                document.MAINFORM.IA_D_TRX_VALDATE.value = document.MAINFORM.FA_LOAN_VAL_DT.value;
                document.MAINFORM.IA_D_DUE_DATE.value = document.MAINFORM.FA_LOAN_DUE_DT.value;
                document.MAINFORM.IA_I_DISCOUNT_DAYS.value = SYS_GetSubDays('FA_LOAN_VAL_DT', 'FA_LOAN_DUE_DT');
                document.MAINFORM.IA_C_CCY_CODE.value = document.MAINFORM.FA_LOAN_CCY.value;
                document.MAINFORM.IA_I_CCY_DEC.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);
                document.MAINFORM.IA_N_DISCOUNT_RATE.value = document.MAINFORM.FA_LOAN_INT_RT.value;
                SYS_InqGapi_S('FAEF_AmtInquireInterest');
                iaYReaccInt = SYS_BeFloat(document.MAINFORM.IA_Y_REACC_INT.value);
            } else {
                iaYReaccInt = 0;
            }
            rebateamount = SYS_BeFloat(iaYReaccInt) * SYS_BeFloat(document.MAINFORM.FA_REBATE_RATE.value) / 100;
            if (rebateamount == '' || rebateamount == null) {
                rebateamount = 0;
            }
            document.MAINFORM.FA_PAID_INT_SUM.value = SYT_AmtFormat(document.MAINFORM.FA_LOAN_CCY.value, iaYReaccInt);
            document.MAINFORM.FA_REBATE_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LOAN_CCY.value, rebateamount);
            EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_SUM, 'onchange');
        } else {
            document.MAINFORM.FA_PAID_INT_SUM.value = 0;
            document.MAINFORM.FA_REBATE_AMT.value = 0;
            SYF_FAEF_Cal_FA_SEL_AC_AMT();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_Cal_Interest_1", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_RefNo = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(0, 4);
        document.MAINFORM.FA_LOAN_ID.value = pre + UnitCode + year.substr(2, 4) + ref + 'FIN';
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_LOAN_ID.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_Cal_RefNo", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        var sum; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiDebitSummary");

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiDebitSummary'));
            //  if (sum != SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value), SYS_BeFloat(document.MAINFORM.FA_REBATE_AMT.value))) {
            if (sum != SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value)) { //zoe
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }


        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiCreditSummary'));
            //if (sum != SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value), SYS_BeFloat(document.MAINFORM.FA_REBATE_AMT.value))) {
            if (sum != SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value)) { //zoe
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL", e);
    }
}

csFuncLevelProto.SYF_FAEF_GUID = function() {
    try {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        /* FOR GENERATE guid FOR DIFFERENT MT WITH SAME VALUE*/
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_GUID", e);
    }
}

csFuncLevelProto.SYF_FAEF_GetExchangeRate = function() {
    try {
        if (document.MAINFORM.FA_LMT_CCY.value != '' && document.MAINFORM.FA_LOAN_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.FA_LMT_CCY.value, 'Booking Rate', 'EXCH_RT6');
            EEHtml.fireEvent(document.MAINFORM.EXCH_RT6, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_GetExchangeRate", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_BaseDay_CCYDec = function() {
    try {
        SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_BaseDay_CCYDec_1', '1', 'Y');
        document.MAINFORM.FA_TEMP6.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_Get_BaseDay_CCYDec", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_LOAN_CCY = function() {
    try {
        var ccy;
        var sFieldList;
        var sMappingList;
        ccy = document.MAINFORM.FA_SEL_AC_CCY.value;
        document.MAINFORM.FA_LOAN_CCY.options.length = 0;
        sMappingList = "FA_LOAN_CCY";
        SYS_GetTableDataByRule_S('GET_LOAN_CCY_FROM_INV', '1', null, 'Y', "Y");
        SYM_FAEF_RefreshOptions(sMappingList);
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_LOAN_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            EEHtml.fireEvent(document.MAINFORM.FA_LOAN_CCY, "onchange");
        }
        if (ccy != '' && ccy != null) {
            document.MAINFORM.FA_LOAN_CCY.value = ccy;
        }
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_LOAN_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_Get_LOAN_CCY", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_ratetype = function() {
    try {
        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'M'); // Utility Auto Fix Comments
            EEHtml.fireEvent(document.MAINFORM.FA_IRT_SPREAD, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_Get_ratetype", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData = function() {
    try {
        var IntSum; // Utility Auto Fix Comments
        var actions; // Utility Auto Fix Comments
        var ccyProtecteFlgs; // Utility Auto Fix Comments
        var comp; // Utility Auto Fix Comments
        var dcFlgs; // Utility Auto Fix Comments
        var descs; // Utility Auto Fix Comments
        var keyindex; // Utility Auto Fix Comments
        var merges; // Utility Auto Fix Comments
        var payAMTs; // Utility Auto Fix Comments
        var payCCYs; // Utility Auto Fix Comments
        var minus_rebate;
        var rebate;
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        IntSum = document.MAINFORM.FA_PAID_INT_SUM.value;
        rebate = document.MAINFORM.FA_REBATE_AMT.value;
        // minus_rebate = SYS_FloatSub(IntSum, rebate);
        minus_rebate = SYT_AmtFormat(document.MAINFORM.FA_LOAN_CCY.value, SYS_FloatSub(IntSum, rebate)); //zoe
        var rb_ref = document.MAINFORM.C_MAIN_REF.value + 'RB';
        if (IntSum != 0) {
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_LOAN_CCY.value + "/" + document.MAINFORM.FA_LOAN_CCY.value + "/" + document.MAINFORM.FA_LOAN_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + minus_rebate + "/" + document.MAINFORM.FA_SEL_AC_AMT.value; //zoe
            descs = "Total Loan Amt/Upfront Interest Amt/Amount to Seller";
            ccyProtecteFlgs = "N/N/N"; //protected ccy
            actions = "S/S/S"; //save
            actionA = "D/D/D"; //delete
            merges = "N/N/N";
            comp = "Finance";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actionA, merges, comp);
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        } else if (document.MAINFORM.FA_INT_CHG_TYPE.value == '2') {
            dcFlgs = "D/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_LOAN_CCY.value + "/" + document.MAINFORM.FA_LOAN_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            descs = "Total Loan Amt/Amount to Seller";
            ccyProtecteFlgs = "N/N"; //protected ccy
            actions = "S/S"; //save
            actionA = "D/D"; //delete
            merges = "N/N";
            comp = "Finance";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actionA, merges, comp);
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);

            dcFlgs1 = "D/C"; //debit and credit group
            keyindex1 = rb_ref + "/" + rb_ref;
            payCCYs1 = document.MAINFORM.FA_LOAN_CCY.value + "/" + document.MAINFORM.FA_LOAN_CCY.value;
            payAMTs1 = rebate + "/" + rebate;
            descs1 = "Rebate Interest/Rebate Interest";
            ccyProtecteFlgs1 = "N/N"; //protected ccy
            actionA = "D/D"; //delete
            merges1 = "N/N";
            comp1 = "Rebate Interest";

            SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actionA, merges1, comp1);
        }

        if (SYS_BeFloat(rebate) > 0) { //zoe
            dcFlgs1 = "C"; //debit and credit group
            keyindex1 = rb_ref;
            payCCYs1 = document.MAINFORM.FA_LOAN_CCY.value;
            payAMTs1 = rebate;
            descs1 = "Rebate Interest";
            ccyProtecteFlgs1 = "N"; //protected ccy
            actions1 = "S"; //save
            actionA = "D"; //delete
            merges1 = "N";
            comp1 = "Rebate Interest";
            SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actionA, merges1, comp1);
            SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actions1, merges1, comp1);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_MLDC_SetDebitCreditData", e);
    }
}

csFuncLevelProto.SYF_FAEF_Validate_CE_FIN = function() {
    try {
        SYS_GetTableDataByRule_S('SBR_OCUPY_BY_CE', '1', true);
        if (document.MAINFORM.FA_TEMP4.value != '') {
            alert("SBR has been occupied by CE to issue a finance request, please cancel your request.");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*SYF_FAEF_Validate_CE_FIN", e);
    }
}

csFuncLevelProto.FLD_FAEF_CPYT_PAY_COV_MSG_onchange = function() {
    try {
        var cov = document.MAINFORM.CPYT_PAY_COV_MSG.value;
        if (cov == '103') {
            EEHtml.getElementById('J').style.display = "block";
            EEHtml.getElementById('K').style.display = "none";
            enable103();
            disable202();
        } else if (cov == '202') {
            EEHtml.getElementById('J').style.display = "none";
            EEHtml.getElementById('K').style.display = "block";
            enable202();
            disable103();
        } else if (cov == '103+202') {
            EEHtml.getElementById('J').style.display = "block";
            EEHtml.getElementById('K').style.display = "block";
            enable103();
            enable202();
        } else {
            EEHtml.getElementById('J').style.display = "none";
            EEHtml.getElementById('K').style.display = "none";
            disable103();
            disable202();
        }
        document.MAINFORM.UETR_GPI_121.value = SYF_FAEF_GUID();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*FLD_FAEF_CPYT_PAY_COV_MSG_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_INT_CHG_TYPE_onchange = function() {
    try {
        SYF_FAEF_Cal_Interest_1();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*FLD_FAEF_FA_INT_CHG_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_CCY_onchange = function() {
    try {
        SYF_FAEF_Get_ratetype();
        SYF_FAEF_Get_BaseDay_CCYDec();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*FLD_FAEF_FA_LOAN_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_DUE_DT_onchange = function() {
    try {
        var a1 = SYS_GetSubDays(document.MAINFORM.FA_LOAN_DUE_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name);
        if (a1 <= 0) {
            alert('Loan Due Date should be early or equal to SBR due date!');
            document.MAINFORM.FA_LOAN_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*FLD_FAEF_FA_LOAN_DUE_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_INT_RT_onchange = function() {
    try {
        // SYF_FAEF_Cal_Interest_1();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*FLD_FAEF_FA_LOAN_INT_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function() {
    try {
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*FLD_FAEF_FA_PAID_INT_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_LOAN_AMT_onchange = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) > SYS_BeFloat(document.MAINFORM.AMT_AVAL_FOR_FUNDING.value)) {
            alert('Financing Amount cannot be larger than Available Amount for Finance!');
            document.MAINFORM.FA_TTL_LOAN_AMT.value = 0;
        }
        SYF_FAEF_Cal_Interest_1();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*FLD_FAEF_FA_TTL_LOAN_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_XBOR_RT_onchange = function() {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        //EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolFinancing.js*FLD_FAEF_XBOR_RT_onchange", e);
    }
}