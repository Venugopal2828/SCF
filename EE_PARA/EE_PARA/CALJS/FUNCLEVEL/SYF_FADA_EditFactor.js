var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_Chk_LimitStartDate = function() {
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
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FACT_TYPE = function() {
    try {

        if (document.MAINFORM.FA_TEMP_FACT_TYPE.value == 'Insurance' && document.MAINFORM.FA_AGM_SIGN_FLG.value == 'Y') {
            SYT_ChangeFldClass_New('FA_FACT_TYPE', 'P');
            SYT_ChangeFldClass_New('IC_AGR_NO', 'M');
            SYT_ChangeFldClass_New('IC_ANNUAL_MIN_AMT', 'M');
            SYT_ChangeFldClass_New('IC_LMT_CCY', 'M');
            SYT_ChangeFldClass_New('IC_LMT_AMT', 'M');
            SYT_ChangeFldClass_New('FA_IF_COMM_RT', 'M');
            SYT_ChangeFldClass_New('IC_LMT_VAL_DT', 'M');
            SYT_ChangeFldClass_New('IC_LMT_DUE_DT', 'M');
            SYT_ChangeFldClass_New('IC_FREE_TXT', 'O');
            SYT_ChangeFldClass_New('FA_FCI_NO', 'B');
            SYT_ChangeFldClass_New('FA_IS_FCI', 'B');
            SYT_ChangeFldClass_New('FA_IS_BANK', 'P');
            SYT_ChangeFldClass_New('FA_EDIFACT_FLAG', 'B');
            SYT_ChangeFldClass_New('FA_IFG_FLAG', 'B');
            SYT_DisableDivClass('B_div');
        } else if (document.MAINFORM.FA_TEMP_FACT_TYPE.value == 'Insurance' && document.MAINFORM.FA_AGM_SIGN_FLG.value == 'N') {
            SYT_ChangeFldClass_New('FA_FACT_TYPE', 'P');
            SYT_ChangeFldClass_New('IC_AGR_NO', 'O');
            SYT_ChangeFldClass_New('IC_ANNUAL_MIN_AMT', 'O');
            SYT_ChangeFldClass_New('IC_LMT_CCY', 'O');
            SYT_ChangeFldClass_New('IC_LMT_AMT', 'O');
            SYT_ChangeFldClass_New('FA_IF_COMM_RT', 'O');
            SYT_ChangeFldClass_New('IC_LMT_VAL_DT', 'O');
            SYT_ChangeFldClass_New('IC_LMT_DUE_DT', 'O');
            SYT_ChangeFldClass_New('IC_FREE_TXT', 'O');
            SYT_ChangeFldClass_New('FA_FCI_NO', 'B');
            SYT_ChangeFldClass_New('FA_IS_FCI', 'B');
            SYT_ChangeFldClass_New('FA_IS_BANK', 'P');
            SYT_ChangeFldClass_New('FA_EDIFACT_FLAG', 'B');
            SYT_ChangeFldClass_New('FA_IFG_FLAG', 'B');
            SYT_DisableDivClass('B_div');
        } else if (document.MAINFORM.FA_TEMP_FACT_TYPE.value != 'Insurance') {
            document.MAINFORM.FA_FACT_TYPE.remove(3);
            SYT_DisableDivClass('C_div');
             //Add on 2024 0710 for import factoring will not require set the export factor limit;
            if(document.MAINFORM.FA_TEMP_FACT_TYPE.value =='IF'){
            SYT_EnableDivClass('B_div');
            }
            else if(document.MAINFORM.FA_TEMP_FACT_TYPE.value =='EF'){
            	SYT_DisableDivClass('B_div');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FA_IS_BANK = function() {
    try {

        if (document.MAINFORM.FA_IS_BANK.value == '1') {
            SYT_ChangeFldClass_New('FA_FACTOR_BIC', 'M');
        } else {
            SYT_ChangeFldClass_New('FA_FACTOR_BIC', 'P');
            document.MAINFORM.FA_FACTOR_BIC.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_LimitEndtDate = function() {
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
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_DecreaseAmt = function() {
    try {

        var decreaseamt = SYS_BeFloat(document.MAINFORM.FA_TEMP2.value);
        var Originallmt = SYS_BeFloat(document.MAINFORM.TEMP_FA_LMT_AMT.value);
        var lmtbal = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        if (decreaseamt > Originallmt) {
            alert('Decrease amount cannot be more than limit amount, please check it!');
            document.MAINFORM.FA_TEMP2.value = 0;
            document.MAINFORM.FA_LMT_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_FA_LMT_AMT.value);
            return false;
        }
        if (decreaseamt > lmtbal) {
            alert('Decrease amount cannot be more than limit balance, please check it!');
            document.MAINFORM.FA_TEMP2.value = 0;
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Chk_LimitEndtDate()) {
            return false;
        }
        if (!SYF_FADA_Chk_LimitStartDate()) {
            return false;
        }
        if (!SYF_FADA_Chk_InsuranceLimitEndtDate()) {
            return false;
        }
        if (!SYF_FADA_Chk_InsuranceLimitStartDate()) {
            return false;
        }
        if (!SYF_FADA_Chk_IC_LMT_AMT()) {
            return false;
        }
        if (!SYF_FADA_Chk_DecreaseAmt()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYF_FADA_Cal_LMT_BAL();
        }
        SYF_FADA_Cal_FA_LMT_AMT();
        SYF_FADA_Cal_FA_TEMP7();
        SYF_FADA_MPO_FACT_TYPE();
        SYF_FADA_MPO_FCI_NO();
        SYF_FADA_MPO_FA_IS_BANK();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TEMP_FA_LMT_AMT.value = document.MAINFORM.FA_LMT_AMT.value;
        document.MAINFORM.TEMP_IC_LMT_AMT.value = document.MAINFORM.IC_LMT_AMT.value;
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TEMP1.value);
        document.MAINFORM.FA_TEMP2.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TEMP2.value);
        SYF_FADA_MPO_FACT_TYPE();
        SYF_FADA_MPO_FCI_NO();

        /*document.MAINFORM.FA_IF_CCY1.value = '';
document.MAINFORM.FA_IF_CCY2.value = '';
document.MAINFORM.FA_IF_CCY3.value = '';
document.MAINFORM.FA_IF_CCY4.value = '';
document.MAINFORM.FA_IF_CCY5.value = '';*/
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_LMT_AMT = function() {
    try {

        if (document.MAINFORM.TEMP_FLG1.value == '1') {
            SYT_ChangeFldClass_New('FA_TEMP1', 'M');
            SYT_ChangeFldClass_New('FA_TEMP2', 'P');
            document.MAINFORM.FA_LMT_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_FA_LMT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
            document.MAINFORM.FA_TEMP2.value = 0;
        } else if (document.MAINFORM.TEMP_FLG1.value == '2') {
            SYT_ChangeFldClass_New('FA_TEMP1', 'P');
            SYT_ChangeFldClass_New('FA_TEMP2', 'M');
            document.MAINFORM.FA_LMT_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_FA_LMT_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_TEMP2.value);
            document.MAINFORM.FA_TEMP1.value = 0;
        } else {
            SYT_ChangeFldClass_New('FA_TEMP1', 'P');
            SYT_ChangeFldClass_New('FA_TEMP2', 'P');
            document.MAINFORM.FA_TEMP1.value = 0;
            document.MAINFORM.FA_TEMP2.value = 0;
            document.MAINFORM.FA_LMT_AMT.value = document.MAINFORM.TEMP_FA_LMT_AMT.value;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FCI_NO = function() {
    try {

        if (document.MAINFORM.FA_IS_FCI.value == '2') {
            document.MAINFORM.FA_FCI_NO.value = '';
            SYT_ChangeFldClass_New('FA_FCI_NO', 'P');
        } else if (document.MAINFORM.FA_IS_FCI.value == '1') {
            SYT_ChangeFldClass_New('FA_FCI_NO', 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_LMT_BAL = function() {
    try {

        //var sFieldList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV";
        //var sMappingList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV";
        SYS_GetTableDataByRule_S('SYF_FADA_EditFactor_SYF_FADA_Cal_LMT_BAL_0', '1', 'Y');
        if (document.MAINFORM.FA_FACT_TYPE.value != "4") {
            var FA_LMT_BAL = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
            document.MAINFORM.FA_LMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_BAL);
        } else {
            var IC_LMT_BAL = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
            document.MAINFORM.IC_LMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, IC_LMT_BAL);
        }
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_TEMP7 = function() {
    try {

        if (document.MAINFORM.TEMP_IC_LMT_AMT.value != '' || document.MAINFORM.IC_LMT_AMT.value != '') {
            document.MAINFORM.FA_TEMP7.value = SYS_BeFloat(document.MAINFORM.TEMP_IC_LMT_AMT.value) - SYS_BeFloat(document.MAINFORM.IC_LMT_AMT.value);
            document.MAINFORM.FA_TEMP7.value = SYT_CCY_AMT(document.MAINFORM.IC_LMT_CCY.value, document.MAINFORM.FA_TEMP7.value);
        }
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_InsuranceLimitEndtDate = function() {
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
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_InsuranceLimitStartDate = function() {
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
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_IC_LMT_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.IC_LMT_AMT.value) < 0) {
            SYS_CheckError(document.MAINFORM.IC_LMT_AMT, 'The cover limit amount cannot less than 0!');
            document.MAINFORM.IC_LMT_AMT.value = 0;
            document.MAINFORM.FA_TEMP7.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_TEMP7 = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_TEMP7.value) < 0) {
            document.MAINFORM.FA_TEMP7.value = 0;
            return false;
        } else {
            if (SYS_BeFloat(document.MAINFORM.FA_TEMP7.value) > SYS_BeFloat(document.MAINFORM.IC_LMT_BAL.value)) {
                alert('Limit decrease amount over cover limit balance, please check it!');
                document.MAINFORM.FA_TEMP7.value = 0;
                return false;
            } else {
                return true;
            }
            //return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
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
        DisExcpt("SYF_FADA_EditFactor.js", e);
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
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AGM_SIGN_FLG_onchange = function(event) {
    try {
        SYF_FADA_MPO_FACT_TYPE();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_FACT_TYPE_onchange = function(event) {
    try {
        SYF_FADA_MPO_FACT_TYPE();
        //SYF_FADA_Cal_LMT_BAL();
        SYF_FADA_Cal_FA_TEMP_FACT_TYPE();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_IS_BANK_onchange = function(event) {
    try {
        SYF_FADA_MPO_FA_IS_BANK();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_IS_FCI_onchange = function(event) {
    try {
        SYF_FADA_MPO_FCI_NO();
        SYF_FADA_Cal_FCI_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_TEMP1_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_LMT_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_TEMP2_onchange = function(event) {
    try {
        SYF_FADA_Chk_DecreaseAmt();
        SYF_FADA_Cal_FA_LMT_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_TEMP7_onchange = function(event) {
    try {
        SYF_FADA_Chk_FA_TEMP7();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_IC_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_TEMP7();
        SYF_FADA_Chk_IC_LMT_AMT();
        SYF_FADA_Chk_FA_TEMP7();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_TEMP_FLG1_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_LMT_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_EditFactor.js", e);
    }
}