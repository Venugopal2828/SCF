var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_TEMP1.value = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        document.MAINFORM.FA_TEMP5.value = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FA_LMT_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value) + (SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_TEMP5.value));
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S("Get_InspectScope", "N", false, '', "InspectScope");
            SYS_GetDataForDO_S("Get_CollatScope", "N", false, '', "CollatScope");
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CheckFlatRt = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FLAT_RT.value) > 100) {
            alert('Please input a valid percentage value for Flat Rate.');
            document.MAINFORM.FLAT_RT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CheckLmtDueDt = function() {
    try {

        var a1;
        a1 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.FA_LMT_VAL_DT.name);
        if (a1 > 0) {
            alert('Limit Due Date should be later than Limit Value Date. Please check.');
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CheckLmtValDt = function() {
    try {

        var a;
        a = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_LMT_VAL_DT.name);
        if (a > 0) {
            alert('Limit Value Date cannot be later than Transaction Date. Please check.');
            document.MAINFORM.FA_LMT_VAL_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CheckMAX_DEC_PERC = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.MAX_DEC_PERC.value) > 100) {
            alert('Please input a valid percentage value.');
            document.MAINFORM.MAX_DEC_PERC.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CheckMAX_INC_PERC = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.MAX_INC_PERC.value) > 100) {
            alert('Please input a valid percentage value.');
            document.MAINFORM.MAX_INC_PERC.value = '';
        }
        if (document.MAINFORM.VAL_REL_FLG.value == '1' && (SYS_BeFloat(document.MAINFORM.MAX_INC_PERC.value) > 0 && SYS_BeFloat(document.MAINFORM.MAX_INC_PERC.value) < 5)) {
            alert('Max. % of Price Raise is less than 5%!');
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CheckMaxLoanPerct = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) > 100) {
            alert('Please input a valid percentage value.');
            document.MAINFORM.FA_MAX_LOAN_PERC.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CheckSpreadRt = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.SPRD_RT.value) > 100) {
            alert('Please input a valid percentage value for Spread Rate.');
            document.MAINFORM.SPRD_RT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_MPO_ControlChargeRtAndAmt = function() {
    try {

        if (document.MAINFORM.CHARGE_TP.value == '1' || document.MAINFORM.CHARGE_TP.value == '3') {
            SYT_ChangeFldClass(document.MAINFORM.CHARGE_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CHARGE_AMT, 'P');
            document.MAINFORM.CHARGE_AMT.value = 0;
        }
        if (document.MAINFORM.CHARGE_TP.value == '2' || document.MAINFORM.CHARGE_TP.value == '4') {
            SYT_ChangeFldClass(document.MAINFORM.CHARGE_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHARGE_AMT, 'M');
            document.MAINFORM.CHARGE_RT.value = 0;
        }
        if (document.MAINFORM.CHARGE_TP.value == '5') {
            SYT_ChangeFldClass(document.MAINFORM.CHARGE_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CHARGE_AMT, 'P');
            document.MAINFORM.CHARGE_RT.value = 0;
            document.MAINFORM.CHARGE_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_MPO_ControlInterestRate = function() {
    try {

        if (document.MAINFORM.BASE_RT_TP.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FLAT_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SPRD_RT, 'P');
            document.MAINFORM.XBOR_RT.value = 0;
            document.MAINFORM.SPRD_RT.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FLAT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SPRD_RT, 'O');
            document.MAINFORM.FLAT_RT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_MPO_MAX_INC_PERC = function() {
    try {

        if (document.MAINFORM.VAL_REL_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.MAX_INC_PERC, 'M');
        }
        if (document.MAINFORM.VAL_REL_FLG.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.MAX_INC_PERC, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_ABLF_MPO_ControlChargeRtAndAmt();
        SYF_ABLF_MPO_ControlInterestRate();
        SYF_ABLF_MPO_MAX_INC_PERC();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CheckCntrStatus = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_BAL.value) > 0 && document.MAINFORM.CNTR_STATUS.value == 'C') {
            document.MAINFORM.CNTR_STATUS.value = '';
            alert("Loan Balance is more than 0, the contract status cannot be Closed!");
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        var _do;
        var record;
        _do = SYS_getDoByXpath("InspectScope");
        record = _do.getCurrentRecord();
        var inspec_id = SYS_getValFromRec(record, 'INSPEC_ID');
        document.MAINFORM.FA_TEMP2.value = '';
        document.MAINFORM.FA_TEMP3.value = '';
        document.MAINFORM.FA_TEMP3.value = inspec_id;
        SYS_GetTableDataByRule_S('Check_INSPEC_ID_indb', '1', 'Y');
        if (document.MAINFORM.FA_TEMP2.value != null && document.MAINFORM.FA_TEMP2.value != '' && document.MAINFORM.FA_TEMP2.value != 'null') {
            alert('This Inspect Institution already exists in a Batch, cannot delete!');
            return false;
        }
        _do = SYS_getDoByXpath("CollatScope");
        record = _do.getCurrentRecord();
        var collat_id = SYS_getValFromRec(record, 'COLLAT_ID');
        document.MAINFORM.FA_TEMP3.value = collat_id;
        SYS_GetTableDataByRule_S('Check_COLLAT_ID_indb', '1', 'Y');
        if (document.MAINFORM.FA_TEMP2.value != null && document.MAINFORM.FA_TEMP2.value != '' && document.MAINFORM.FA_TEMP2.value != 'null') {
            alert('This Collateral already exists in a Batch, cannot delete!');
            return false;
        }


        return true;
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYT_checkFactoringChildRecord("InspectScope")) {
            return false;
        }
        if (!SYT_checkFactoringChildRecord("CollatScope")) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_BASE_RT_TP_onchange = function(event) {
    try {
        SYF_ABLF_MPO_ControlInterestRate();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_CHARGE_TP_onchange = function(event) {
    try {
        SYF_ABLF_MPO_ControlChargeRtAndAmt();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_CNTR_STATUS_onchange = function(event) {
    try {
        SYF_ABLF_CheckCntrStatus();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_LMT_DUE_DT_onchange = function(event) {
    try {
        SYF_ABLF_CheckLmtDueDt();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_LMT_VAL_DT_onchange = function(event) {
    try {
        SYF_ABLF_CheckLmtValDt();
        SYF_ABLF_CheckLmtDueDt();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_MAX_LOAN_PERC_onchange = function(event) {
    try {
        SYF_ABLF_CheckMaxLoanPerct();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FLAT_RT_onchange = function(event) {
    try {
        SYF_ABLF_CheckFlatRt();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_MAX_DEC_PERC_onchange = function(event) {
    try {
        SYF_ABLF_CheckMAX_DEC_PERC();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_MAX_INC_PERC_onchange = function(event) {
    try {
        SYF_ABLF_CheckMAX_INC_PERC();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_SPRD_RT_onchange = function(event) {
    try {
        SYF_ABLF_CheckSpreadRt();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_VAL_REL_FLG_onchange = function(event) {
    try {
        SYF_ABLF_MPO_MAX_INC_PERC();
        SYF_ABLF_CheckMAX_INC_PERC();
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement.js", e);
    }
}