var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_MPO_FCI_NO = function() {
    try {

        if (document.MAINFORM.FA_IS_FCI.value == '2') {
            document.MAINFORM.FA_FCI_NO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_FCI_NO, 'P');
        } else if (document.MAINFORM.FA_IS_FCI.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_FCI_NO, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FACTOR = function() {
    try {

        var factorid = document.MAINFORM.FA_FACTOR_ID.value; //0116
        if (factorid.length != 7) {
            alert('The length of import factor must be 7!Please check it!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_checkLimitEndtDate = function() {
    try {

        if (document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            var nenddays1 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.TRX_DT.name);
            if (nenddays1 >= 0) {
                SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT, 'Limit end date must be after the transaction date!');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }
        SYF_FADA_MPO_FACT_TYPE();
        SYF_FADA_MPO_FCI_NO();
        SYF_FADA_MPO_IS_BANK();
        SYF_FADA_GetRef();
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_LMT_CCY.value = 'USD';
        document.MAINFORM.FA_IS_FCI.value = '1';
        SYF_FADA_MPO_FCI_NO();

        document.MAINFORM.FA_IF_CCY1.value = '';
        document.MAINFORM.FA_IF_CCY2.value = '';
        document.MAINFORM.FA_IF_CCY3.value = '';
        document.MAINFORM.FA_IF_CCY4.value = '';
        document.MAINFORM.FA_IF_CCY5.value = '';
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FACT_TYPE = function() {
    try {

        if (document.MAINFORM.FA_FACT_TYPE.value == '4' && document.MAINFORM.FA_AGM_SIGN_FLG.value == 'Y') {
            document.MAINFORM.FA_IS_BANK.value = '2';
            SYT_ChangeFldClass_New('IC_AGR_NO', 'M');
            SYT_ChangeFldClass_New('IC_LMT_CCY', 'M');
            SYT_ChangeFldClass_New('IC_LMT_AMT', 'M');
            SYT_ChangeFldClass_New('IC_LMT_VAL_DT', 'M');
            SYT_ChangeFldClass_New('IC_ANNUAL_MIN_AMT', 'M');
            SYT_ChangeFldClass_New('FA_IF_COMM_RT', 'M');
            SYT_ChangeFldClass_New('IC_LMT_DUE_DT', 'M');
            SYT_ChangeFldClass_New('IC_FREE_TXT', 'O');
            SYT_ChangeFldClass_New('FA_IF_CNTY1', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY2', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY3', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY4', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY5', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY1', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY2', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY3', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY4', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY5', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK1', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK2', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK3', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK4', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK5', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO1', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO2', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO3', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO4', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO5', 'B');
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'B');
            SYT_ChangeFldClass_New('FA_MSG_TEXT', 'B');
            SYT_ChangeFldClass_New('FA_LMT_VAL_DT', 'B');
            SYT_ChangeFldClass_New('FA_LMT_DUE_DT', 'B');
            SYT_DisableDivClass('B_div');
            SYT_ChangeFldClass_New('FA_FCI_NO', 'B');
            SYT_ChangeFldClass_New('FA_IS_FCI', 'B');
            SYT_ChangeFldClass_New('FA_IS_BANK', 'P');
            SYT_ChangeFldClass_New('FA_EDIFACT_FLAG', 'B');
            SYT_ChangeFldClass_New('FA_IFG_FLAG', 'B');
        } else if (document.MAINFORM.FA_FACT_TYPE.value == '4' && document.MAINFORM.FA_AGM_SIGN_FLG.value == 'N') {
            document.MAINFORM.FA_IS_BANK.value = '2';
            SYT_ChangeFldClass_New('IC_AGR_NO', 'O');
            SYT_ChangeFldClass_New('IC_LMT_CCY', 'O');
            SYT_ChangeFldClass_New('IC_LMT_AMT', 'O');
            SYT_ChangeFldClass_New('IC_LMT_VAL_DT', 'O');
            SYT_ChangeFldClass_New('IC_ANNUAL_MIN_AMT', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_RT', 'O');
            SYT_ChangeFldClass_New('IC_LMT_DUE_DT', 'O');
            SYT_ChangeFldClass_New('IC_FREE_TXT', 'O');
            SYT_ChangeFldClass_New('FA_IF_CNTY1', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY2', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY3', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY4', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY5', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY1', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY2', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY3', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY4', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY5', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK1', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK2', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK3', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK4', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK5', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO1', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO2', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO3', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO4', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO5', 'B');
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'B');
            SYT_ChangeFldClass_New('FA_MSG_TEXT', 'B');
            SYT_ChangeFldClass_New('FA_LMT_VAL_DT', 'B');
            SYT_ChangeFldClass_New('FA_LMT_DUE_DT', 'B');
            SYT_DisableDivClass('B_div');
            SYT_ChangeFldClass_New('FA_FCI_NO', 'B');
            SYT_ChangeFldClass_New('FA_IS_FCI', 'B');
            SYT_ChangeFldClass_New('FA_IS_BANK', 'P');
            SYT_ChangeFldClass_New('FA_EDIFACT_FLAG', 'B');
            SYT_ChangeFldClass_New('FA_IFG_FLAG', 'B');
        } else if (document.MAINFORM.FA_FACT_TYPE.value == '1' || document.MAINFORM.FA_FACT_TYPE.value == '3') {
            SYT_ChangeFldClass_New('IC_AGR_NO', 'B');
            SYT_ChangeFldClass_New('IC_LMT_CCY', 'P');
            SYT_ChangeFldClass_New('IC_LMT_AMT', 'B');
            SYT_ChangeFldClass_New('IC_LMT_VAL_DT', 'B');
            SYT_ChangeFldClass_New('IC_ANNUAL_MIN_AMT', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_RT', 'B');
            SYT_ChangeFldClass_New('IC_LMT_DUE_DT', 'B');
            SYT_ChangeFldClass_New('IC_FREE_TXT', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY1', 'O');
            SYT_ChangeFldClass_New('FA_IF_CNTY2', 'O');
            SYT_ChangeFldClass_New('FA_IF_CNTY3', 'O');
            SYT_ChangeFldClass_New('FA_IF_CNTY4', 'O');
            SYT_ChangeFldClass_New('FA_IF_CNTY5', 'O');
            SYT_ChangeFldClass_New('FA_IF_CCY1', 'O');
            SYT_ChangeFldClass_New('FA_IF_CCY2', 'O');
            SYT_ChangeFldClass_New('FA_IF_CCY3', 'O');
            SYT_ChangeFldClass_New('FA_IF_CCY4', 'O');
            SYT_ChangeFldClass_New('FA_IF_CCY5', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK1', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK2', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK3', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK4', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK5', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO1', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO2', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO3', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO4', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO5', 'O');
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'M');
            SYT_ChangeFldClass_New('FA_MSG_TEXT', 'O');
            SYT_ChangeFldClass_New('FA_LMT_VAL_DT', 'M');
            SYT_ChangeFldClass_New('FA_LMT_DUE_DT', 'M');
            SYT_EnableDivClass('B_div');
            SYT_ChangeFldClass_New('FA_FCI_NO', 'M');
            SYT_ChangeFldClass_New('FA_IS_FCI', 'M');
            SYT_ChangeFldClass_New('FA_IS_BANK', 'M');
            SYT_ChangeFldClass_New('FA_EDIFACT_FLAG', 'M');
            SYT_ChangeFldClass_New('FA_IFG_FLAG', 'M');
        }
        //Add on 2024 0710 for import factoring will not require set the export factor limit;
        else if (document.MAINFORM.FA_FACT_TYPE.value == '2'){
        	SYT_DisableDivClass('B_div');
        	 SYT_ChangeFldClass_New('FA_IF_CNTY1', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY2', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY3', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY4', 'B');
            SYT_ChangeFldClass_New('FA_IF_CNTY5', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY1', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY2', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY3', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY4', 'B');
            SYT_ChangeFldClass_New('FA_IF_CCY5', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK1', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK2', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK3', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK4', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_BK5', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO1', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO2', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO3', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO4', 'B');
            SYT_ChangeFldClass_New('FA_IF_COMM_ACNO5', 'B');
            SYT_ChangeFldClass_New('FA_LMT_AMT', 'B');
            SYT_ChangeFldClass_New('FA_MSG_TEXT', 'B');
            SYT_ChangeFldClass_New('FA_LMT_VAL_DT', 'B');
            SYT_ChangeFldClass_New('FA_LMT_DUE_DT', 'B');
        	
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_checkLimitStartDate = function() {
    try {

        if (document.MAINFORM.FA_LMT_VAL_DT.value != '') {
            var nstartdays1 = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.TRX_DT.name);
            if (nstartdays1 <= 0) {
                SYS_CheckError(document.MAINFORM.FA_LMT_VAL_DT, 'Limit Start Date must be before the transaction date!');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_toUpperCase = function(fldName) {
    try {

        var fldObj = EEHtml.getElementById(fldName);
        fldObj.value = fldObj.value.toUpperCase();
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Chk_LMT_AMT()) {
            return false;
        }
        if (!SYF_FADA_Chk_IC_LMT_AMT()) {
            return false;
        }
        if (!SYF_FADA_Chk_FACTOR()) {
            return false;
        }
        if (!SYF_FADA_checkLimitEndtDate()) {
            return false;
        }
        if (!SYF_FADA_checkLimitStartDate()) {
            return false;
        }
        if (!SYF_FADA_checkInsuranceLimitEndtDate()) {
            return false;
        }
        if (!SYF_FADA_checkInsuranceLimitStartDate()) {
            return false;
        }
        if (!SYF_FADA_CHK_FA_FACTOR_ID()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_IS_BANK = function() {
    try {

        if (document.MAINFORM.FA_IS_BANK.value == '1') {
            SYT_ChangeFldClass_New('FA_FACTOR_BIC', 'M');
        } else {
            SYT_ChangeFldClass_New('FA_FACTOR_BIC', 'P');
            document.MAINFORM.FA_FACTOR_BIC.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_LMT_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value) < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_AMT, 'The limit amount can not less than 0 !');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_setRef = function(ref) {
    try {

        var pre = 'FACT';
        var UnitCode = SYS_BUSI_UNIT;
        var year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        document.MAINFORM.C_MAIN_REF.value = pre + UnitCode + year + ref;
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GetRef = function() {
    try {

        SYS_GetRefNo('FACT', 'SYF_FADA_setRef');
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_CHK_FA_FACTOR_ID = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FADA_AddFactor_SYF_FADA_CHK_FA_FACTOR_ID_0', '1', null, false);
        if (document.MAINFORM.FA_FACTOR_ID != "") {
            if (document.MAINFORM.CHK_FA_FACTOR_ID.value > 0) {
                alert('A factor has already been registered!');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_IC_LMT_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.IC_LMT_AMT.value) < 0) {
            SYS_CheckError(document.MAINFORM.IC_LMT_AMT, 'The cover limit amount cannot less than 0!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_checkInsuranceLimitStartDate = function() {
    try {

        if (document.MAINFORM.IC_LMT_VAL_DT.value != '') {
            var nstartdays2 = SYS_GetSubDays(document.MAINFORM.IC_LMT_VAL_DT.name, document.MAINFORM.TRX_DT.name);
            if (nstartdays2 <= 0) {
                SYS_CheckError(document.MAINFORM.IC_LMT_VAL_DT, 'Limit Start Date must be before the transaction date!');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_checkInsuranceLimitEndtDate = function() {
    try {

        if (document.MAINFORM.IC_LMT_DUE_DT.value != '') {
            var nenddays2 = SYS_GetSubDays(document.MAINFORM.IC_LMT_DUE_DT.name, document.MAINFORM.TRX_DT.name);
            if (nenddays2 >= 0) {
                SYS_CheckError(document.MAINFORM.IC_LMT_DUE_DT, 'Limit end date must be after the transaction date!');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_TEMP_FACT_TYPE = function() {
    try {

        if (document.MAINFORM.FA_FACT_TYPE.value == '1') {
            document.MAINFORM.FA_TEMP_FACT_TYPE.value = 'IF';
        } else if (document.MAINFORM.FA_FACT_TYPE.value == '2') {
            document.MAINFORM.FA_TEMP_FACT_TYPE.value = 'EF';
        } else if (document.MAINFORM.FA_FACT_TYPE.value == '3') {
            document.MAINFORM.FA_TEMP_FACT_TYPE.value = 'IF';
        } else if (document.MAINFORM.FA_FACT_TYPE.value == '4') {
            document.MAINFORM.FA_TEMP_FACT_TYPE.value = 'Insurance';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FCI_NO = function() {
    try {

        if (document.MAINFORM.FA_IS_FCI.value == '1') {
            document.MAINFORM.FA_FCI_NO.value = document.MAINFORM.FA_FACTOR_ID.value;
        } else {
            document.MAINFORM.FA_FCI_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AGM_SIGN_FLG_onchange = function(event) {
    try {
        SYF_FADA_MPO_FACT_TYPE();
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_CNTY_CODE_onchange = function(event) {
    try {
        SYT_CheckCountryCode(document.MAINFORM.FA_CNTY_CODE);
        if (document.MAINFORM.FA_CNTY_CODE.value != '') {
            SYS_GetTableDataByRule_S('SYF_FADA_AddFactor_FLD_FADA_FA_CNTY_CODE_onchange_1', '1', null, null, false);
        } else {
            document.MAINFORM.FA_CNTY_NM.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_FACTOR_ID_onchange = function(event) {
    try {
        SYF_FADA_Chk_FACTOR();
        SYF_FADA_toUpperCase('FA_FACTOR_ID');
        SYF_FADA_MPO_FCI_NO();
        SYF_FADA_Cal_FCI_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_FACT_TYPE_onchange = function(event) {
    try {
        SYF_FADA_MPO_FACT_TYPE();
        SYF_FADA_Cal_FA_TEMP_FACT_TYPE();
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_IS_BANK_onchange = function(event) {
    try {
        SYF_FADA_MPO_IS_BANK();
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_IS_FCI_onchange = function(event) {
    try {
        SYF_FADA_MPO_FCI_NO();
        SYF_FADA_Cal_FCI_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_Chk_LMT_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_IC_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_Chk_IC_LMT_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_AddFactor.js", e);
    }
}