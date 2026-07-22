var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_transaction");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
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
            if (document.MAINFORM.X103_VALUE_DT_32A.value != "") {
                SYS_CheckHoliday(cntyCode, document.MAINFORM.REVERSAL_DT.name, '', SYS_BUSI_UNIT);
                SYS_CheckHoliday(SYS_BANK_COUNTRY, document.MAINFORM.REVERSAL_DT.name, '', SYS_BUSI_UNIT); // Utility Auto Fix Comments
            }
            //EEHtml.getElementById("imgDrawDown_REVERSAL_DT").click();
            document.MAINFORM.REVERSAL_DT.focus();
        }

        sCntyCode = SYS_BANK_COUNTRY;
        sStDate = SYS_BUSI_DATE;
        spotDate = SYS_CalEndWorkingDate_S(sCntyCode, sStDate, '2', 'TWO_DAYS_BACK', 'A', 'y', 'y');
        reqDate = document.MAINFORM.TWO_DAYS_BACK.value;
        dSpotDt = SYT_GetDateObjectFromStr(reqDate);
        if (dValDt > dSpotDt) {
            alert("The Value Date cannnot be more than Spot");
            document.MAINFORM.REVERSAL_DT.value = "";
            EEHtml.getElementById("imgDrawDown_REVERSAL_DT").click();
            document.MAINFORM.REVERSAL_DT.focus();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CR_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
        document.MAINFORM.CR_AMT.value = document.MAINFORM.INW_X103_SETT_AMT_32A.value;
        document.MAINFORM.REVE_AMT.value = document.MAINFORM.INW_X103_SETT_AMT_32A.value;
        document.MAINFORM.REVE_CCY.value = document.MAINFORM.INW_X103_SETT_CCY_32A.value;
        document.MAINFORM.REVE_AC_NO.value = document.MAINFORM.X103_BENECUACNO59A.value;
        document.MAINFORM.CPYT_FUNC_NAME.value = SYS_FUNCTION_NAME;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_Reve_Amt = function() {
    try {

        if (document.MAINFORM.CR_CALC_AMT.value > 0) {

            if (SYS_BeFloat(document.MAINFORM.REVE_AMT.value) > SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value)) {
                alert("The Reversal Amount Should be less than or equal to Settlement Amount " + document.MAINFORM.X103_SETT_AMT_32A.value);
                document.MAINFORM.REVE_AMT.value = document.MAINFORM.X103_SETT_AMT_32A.value;
                document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.X103_SETT_AMT_32A.value;
            }
        } else {
            if (SYS_BeFloat(document.MAINFORM.REVE_AMT.value) > SYS_BeFloat(document.MAINFORM.X103_INSTR_AMT_33B.value)) {
                alert("The Reversal Amount Should be less than or equal to Settlement Amount " + document.MAINFORM.X103_INSTR_AMT_33B.value);
                document.MAINFORM.REVE_AMT.value = document.MAINFORM.X103_INSTR_AMT_33B.value;
                document.MAINFORM.REVE_CCY.value = document.MAINFORM.X103_INSTR_CCY_33B.value;
                document.MAINFORM.DB_CALC_AMT.value = document.MAINFORM.REVE_AMT.value;
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var Tot_Sett_Amt; // Utility Auto Fix Comments
        Tot_Sett_Amt = SYS_getFieldSumByXpath('PAY_AMT', 'PaymentMultipleDebits');

        if (SYS_BeFloat(Tot_Sett_Amt) < SYS_BeFloat(document.MAINFORM.REVE_AMT.value)) {

            alert(" Reversal Amount(" + document.MAINFORM.REVE_AMT.value + ") and  Total Settlment Amounts(" + Tot_Sett_Amt + ") are not balanced. "); // Utility Auto Fix Comments

            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_REVERSAL_DT_onchange = function(event) {
    try {
        SYF_PYMT_Check_Reve_DT();
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_REVE_AMT_onchange = function(event) {
    try {
        SYF_PYMT_Check_Reve_Amt();
    } catch (e) {
        DisExcpt("SYF_PYMT_ReversePayment_ITT_1.js", e);
    }
}