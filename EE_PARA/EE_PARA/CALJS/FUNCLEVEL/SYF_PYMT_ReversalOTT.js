var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.addRecordCheck = function() {
    try {

        var EEAuto_dodetail; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        EEAuto_dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(EEAuto_dodetail); // Utility Auto Fix Comments
        if (document.MAINFORM.MLT_STLMT.value == 'No') {
            if (Records.length > 0) {
                alert("Max One Settlement row is allowed");
                return false;
            }
        } else {
            if (Records.length > 4) {
                alert("Max Five Settlement rows are allowed");
                return false;
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var EEAuto_dodetail; // Utility Auto Fix Comments
        var RecIndex; // Utility Auto Fix Comments
        var Record; // Utility Auto Fix Comments
        var Records; // Utility Auto Fix Comments
        var Tot_Sett_Amt; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        /*
document.MAINFORM.X103_ORDCUADD1_50A.value=document.MAINFORM.X103_ORDCUADD1_50A.value.substring(2);
document.MAINFORM.X103_ORDCUADD2_50A.value=document.MAINFORM.X103_ORDCUADD2_50A.value.substring(2);
document.MAINFORM.X103_ORDCUADD3_50A.value=document.MAINFORM.X103_ORDCUADD3_50A.value.substring(2);
document.MAINFORM.X103_ORDCU_NM_50A.value=document.MAINFORM.X103_ORDCU_NM_50A.value.substring(2)
*/
        if (SYS_FUNCTION_TYPE != 'EC') {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES) + 1;
        } else {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES);
        }
        document.MAINFORM.C_MODULE.value = SYS_MODULE_NAME;
        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY;

        Tot_Sett_Amt = SYS_getFieldSumByXpath('PAY_AMT', 'PaymentMultipleDebits');

        if (SYS_BeFloat(Tot_Sett_Amt) < SYS_BeFloat(document.MAINFORM.REVE_AMT.value)) {

            alert(" Reversal Amount(" + document.MAINFORM.REVE_AMT.value + ") and  Total Settlment Amounts(" + Tot_Sett_Amt + ") are not balanced. "); // Utility Auto Fix Comments

            return false;
        }
        document.MAINFORM.REVE_IND.value = 'Yes';
        SYT_Reversals_CashVoucher();

        EEAuto_dodetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        Records = SYS_getRecords(EEAuto_dodetail); // Utility Auto Fix Comments

        document.MAINFORM.NUM_ACCTS.value = Records.length;
        if (document.MAINFORM.MLT_STLMT.value == 'No') {
            if (Records.length == 1) {
                for (i = 0; i < Records.length; i++) { // Utility Auto Fix Comments
                    Record = Records[i];
                    RecIndex = SYS_getRecID(Record);
                }
                document.MAINFORM.EXCH_RATE.value = SYS_getFieldValue(EEAuto_dodetail, RecIndex, "EXCH_RATE"); // Utility Auto Fix Comments
                document.MAINFORM.COV_NO.value = SYS_getFieldValue(EEAuto_dodetail, RecIndex, "COV_NO"); // Utility Auto Fix Comments
                document.MAINFORM.SETT_CCY.value = SYS_getFieldValue(EEAuto_dodetail, RecIndex, "SETT_CCY"); // Utility Auto Fix Comments
            }
        } else {
            if (Records.length == 1) {
                for (i = 0; i < Records.length; i++) {
                    Record = Records[i];
                    RecIndex = SYS_getRecID(Record);
                }
                document.MAINFORM.EXCH_RATE.value = SYS_getFieldValue(EEAuto_dodetail, RecIndex, "EXCH_RATE"); // Utility Auto Fix Comments
                document.MAINFORM.COV_NO.value = SYS_getFieldValue(EEAuto_dodetail, RecIndex, "COV_NO"); // Utility Auto Fix Comments
                document.MAINFORM.SETT_CCY.value = SYS_getFieldValue(EEAuto_dodetail, RecIndex, "SETT_CCY"); // Utility Auto Fix Comments
            } else {
                document.MAINFORM.EXCH_RATE.value = 1;
            }

        }
        SYT_Set_Int_Flds_CustId();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Reve_DT = function() {
    try {

        var cntyCode; // Utility Auto Fix Comments
        var dSpotDt; // Utility Auto Fix Comments
        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var reqDate; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var sStDate; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        var spotDate; // Utility Auto Fix Comments
        cntyCode = SYS_BANK_COUNTRY;
        sValDt = document.MAINFORM.REVERSAL_DT.value;
        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt < dSysDt) {
                alert("The Value Date cannot be in the Past"); // Utility Auto Fix Comments
                document.MAINFORM.REVERSAL_DT.value = "";
            }
            document.MAINFORM.REVERSAL_DT.focus();
        }

        sCntyCode = SYS_BANK_COUNTRY;
        sStDate = SYS_BUSI_DATE;
        spotDate = SYS_CalEndWorkingDate_S(sCntyCode, sStDate, '2', 'TWO_DAYS_BACK', 'A', 'y', 'y');
        reqDate = document.MAINFORM.TWO_DAYS_BACK.value;
        dSpotDt = SYT_GetDateObjectFromStr(reqDate);
        if (dValDt > dSpotDt) {
            alert("The Value Date cannot be more than Spot");
            document.MAINFORM.REVERSAL_DT.value = "";
            EEHtml.getElementById("imgDrawDown_REVERSAL_DT").click();
            document.MAINFORM.REVERSAL_DT.focus();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Reve_DT_Fail = function() {
    try {

        document.MAINFORM.REVERSAL_DT.value = "";
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Reve_DT_Success = function() {
    try {

        var cntyCode; // Utility Auto Fix Comments
        cntyCode = document.MAINFORM.REVE_CCY.value.substring(0, 2);
        document.MAINFORM.CNTY_CODE.value = cntyCode;
        SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.REVERSAL_DT.name, '', '', SYS_BUSI_UNIT, 'SYF_PYMT_Check_Reve_DT', 'SYF_PYMT_Check_Reve_DT_Fail');
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Reve_Amt = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.REVE_AMT.value) == 0) {
            alert("The Reversal Amount Should be greater than 0");
            document.MAINFORM.REVE_AMT.value = 0;
            return false;
        } else if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            if (SYS_BeFloat(document.MAINFORM.REVE_AMT.value) > SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value)) {
                alert("The Reversal Amount Should be less than or equal to Settlement Amount " + document.MAINFORM.X103_SETT_AMT_32A.value);
                document.MAINFORM.REVE_AMT.value = document.MAINFORM.X103_SETT_AMT_32A.value;
                document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.X103_SETT_AMT_32A.value;
                SYF_PYMT_convertDecimal();
                return false;
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.REVERSAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.REVE_AC_NO.value = document.MAINFORM.CPYT_CR_BK_AC.value;
        document.MAINFORM.CPYT_FUNC_NAME.value = SYS_FUNCTION_NAME;

        document.MAINFORM.REVE_AMT.value = document.MAINFORM.X103_SETT_AMT_32A.value;
        document.MAINFORM.REVE_CCY.value = document.MAINFORM.X103_SETT_CCY_32A.value;
        document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.X103_SETT_AMT_32A.value;
        //document.MAINFORM.DB_CALC_AMT.value = document.MAINFORM.REVE_AMT.value;
        //SYF_PYMT_Set_Rev_AcctNo();
        document.MAINFORM.CURRNT_STATUS.value = 'OTT_REVERSE';
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_PYMT_convertDecimal(); //Added---08/06/2019
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_transaction");
        }
        SYS_GetCUBK_S('GetCustOtherInfo', 'X103_ORDCU_ID_50A');
        SYT_AdviceAutoPrint(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.X103_ORDCU_ID_50A.value, "OT");
        SYM_PYMT_SetRateType_Reversal();
        //added for valuedate validation
        if (SYS_FUNCTION_TYPE == "RE") {
            if (!SYT_Chk_PastDate(document.MAINFORM.REVERSAL_DT)) {
                SYT_restrictRelease();
            }
        }

        SYM_PYMT_enableField(document.MAINFORM.RELATED_REF_NO, 'M');
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Set_Rev_AcctNo = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        /* Sql_Cond = "C_MAIN_REF=" +"'"+document.MAINFORM.C_MAIN_REF.value+"'" ;
Field_List = "CPYT_DR_AC";
Mapping_List = "REVE_AC_NO";
SYS_Get22TableData_S('CLNPYMT_DEBITS',Sql_Cond,Field_List,Mapping_List,'Sett_AccNo_Succ','false');*/
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_getAccountNum = function() {
    try {

        //SYS_InqCUBK_Sql('REVE_NOSTRO_AC_NO', ' C_ACCT_CCY=\'<--REVE_CCY-->\'');
        SYS_InqCUBK_byCondition('REVE_NOSTRO_AC_NO', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Reve_Ac_No = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        var Sql_Cond; // Utility Auto Fix Comments
        if (document.MAINFORM.REVE_AC_NO.value.trim().length == 0) {
            alert("Reversal Account Number cannot be null");
            document.MAINFORM.REVE_AC_NO.focus();
            return false;
        } else {
            document.MAINFORM.C_ACCT_WITH_ID.value = '';
            //Sql_Cond = "C_ACCT_CCY=" + "'" + document.MAINFORM.REVE_CCY.value + "'" + " AND " + "C_CNTY_CODE=" + "'" + SYS_BANK_COUNTRY + "'" + " AND " + "C_ACCT_NR=" + "'" + document.MAINFORM.REVE_AC_NO.value + "'";
            //Field_List = "C_ACCT_WITH_ID";
            //Mapping_List = "C_ACCT_WITH_ID";
            SYS_GetTableDataByRule_S('SYF_PYMT_ReversalOTT_SYF_PYMT_Check_Reve_Ac_No_0', '1', 'Sett_AccNo_Succ', 'false');
            if (document.MAINFORM.C_ACCT_WITH_ID.value == '') {
                alert('The Account number entered is invalid ,please verify .');
                document.MAINFORM.REVE_AC_NO.value = '';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYT_Audit_value_assign_WithSett();
        SYT_Audit_Main();
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_convertDecimal = function() {
    try {

        document.MAINFORM.REVE_AMT.value = parseFloat(document.MAINFORM.REVE_AMT.value).toFixed(2);
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CR_CALC_AMT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_REVERSAL_DT_onchange = function(event) {
    try {
        document.MAINFORM.CNTY_CODE.value = SYS_BANK_COUNTRY;
        SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.REVERSAL_DT.name, '', '', SYS_BUSI_UNIT, 'SYF_PYMT_Check_Reve_DT_Success', 'SYF_PYMT_Check_Reve_DT_Fail');
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_REVE_AC_NO_onchange = function(event) {
    try {
        SYF_PYMT_Check_Reve_Ac_No();
        EEHtml.fireEvent(document.MAINFORM.C_ACCT_WITH_ID, 'onchange');
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_REVE_AMT_onchange = function(event) {
    try {
        SYF_PYMT_convertDecimal(); //Added
        var REVE_AMT; //Added----08/05/2019
        REVE_AMT = SYS_BeFloat(document.MAINFORM.REVE_AMT.value);
        if (REVE_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.REVE_AMT.value = 0;
            return false;
        }
        SYT_Chg_NegativeAmt(document.MAINFORM.REVE_AMT);
        SYF_PYMT_Check_Reve_Amt();
        EEAuto_Paymentdetail = SYS_getDoByXpath('PaymentMultipleDebits'); // Utility Auto Fix Comments
        EEAuto_Paymentdetail.clearAll(true); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_AMT_33B_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_CCY_33B_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SETT_AMT_32A_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_ReversalOTT.js", e);
    }
}