var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'REGISTER';
        document.MAINFORM.NXT_STATUS.value = 'DUE_DILIGENCE';
        SYS_highTrxButton("_confirm", "_cancel");
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        if ((SYS_FUNCTION_NAME == "DI_Cancel" && SYS_FUNCTION_TYPE == "EC") || (document.MAINFORM.CANCEL_FLG.value == "Yes" && SYS_FUNCTION_TYPE == "RE")) {

            return;
        }
        SYT_Get_Ref();
        //SYM_IWGT_Check_EXPIRY_DT();
        document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
        //SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.RATE_TYPE.value, document.MAINFORM.RATE_NAME.value);
        EEHtml.getElementById('MLT1').style.display = "none";
        EEHtml.getElementById('MLT2').style.display = "none";
        EEHtml.getElementById('uploadEditView').style.display = "none";
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var notes; // Utility Auto Fix Comments
        if (SYS_FUNCTION_NAME == "DI_Cancel" && SYS_FUNCTION_TYPE == "EC") {
            return true;
        }
        if (!SYM_PYMT_DI_PayAmtChk()) {
            return false;
        }
        if (!SYS_Batch_CheckFieldValue()) {
            return false;
        }
        //check whether the value of all class fields are correct
        notes = SYT_VisibleNote();
        if (notes == false) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if ((SYS_FUNCTION_NAME == "DI_Cancel" && SYS_FUNCTION_TYPE == "EC") || (document.MAINFORM.CANCEL_FLG.value == "Yes" && SYS_FUNCTION_TYPE == "RE")) {

            SYT_Cancel_Init(); // Utility Auto Fix Comments
            return;
        } else {

            document.MAINFORM.CANCEL_FLG.value = "No";
        }
        document.MAINFORM.DB_CCY.value = document.MAINFORM.X103_SETT_CCY_32A.value;
        EEHtml.getElementById('audit_link').style.visibility = 'hidden';
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_AMT_33B_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.X103_INSTR_AMT_33B.value) < 0) {
            SYS_CheckError(document.MAINFORM.X103_INSTR_AMT_33B, 'Amount less than zero is not allowed, Please correct');
            document.MAINFORM.X103_INSTR_AMT_33B.value = 0;
        } else {
            SYM_GTEE_Cal_LIAB_TRXCCY_AMT();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_CCY_33B_onchange = function(event) {
    try {
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.RATE_TYPE.value, document.MAINFORM.RATE_NAME.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUACNO_50A_onchange = function(event) {
    try {
        debit_account_changed();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD1_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD1_50A.value = document.MAINFORM.X103_ORDCUADD1_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD2_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD2_50A.value = document.MAINFORM.X103_ORDCUADD2_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD3_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD3_50A.value = document.MAINFORM.X103_ORDCUADD3_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        change_of_applicant_id();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_NM_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCU_NM_50A.value = document.MAINFORM.X103_ORDCU_NM_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SETT_AMT_32A_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.X103_SETT_AMT_32A.value) < 0) {
            SYS_CheckError(document.MAINFORM.X103_SETT_AMT_32A, 'Amount less than zero is not allowed, Please correct');
            document.MAINFORM.X103_SETT_AMT_32A.value = 0;
        } else {
            SYM_GTEE_Cal_LIAB_TRXCCY_AMT();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SETT_CCY_32A_onchange = function(event) {
    try {
        if (document.MAINFORM.RECORDER_TYPE.value != "NonCustomer") {
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        }
        document.MAINFORM.DB_CCY.value = document.MAINFORM.X103_SETT_CCY_32A.value;
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.RATE_TYPE.value, document.MAINFORM.RATE_NAME.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function(event) {
    try {
        DI_validate_value_date();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Register.js", e);
    }
}