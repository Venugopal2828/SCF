var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_Chk_FA_APPL_LMT_DUE_DT = function() {
    try {

        var a1; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_REQ_CODE.value == '9') {
            a1 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.FA_APPL_LMT_DUE_DT.name); // Utility Auto Fix Comments
            if (a1 < 0) {
                alert('Please note new due date should be later than the old due date');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_OWN_RISK_PERC = function() {
    try {

        var riskrerc; // Utility Auto Fix Comments
        riskrerc = SYS_BeFloat(document.MAINFORM.FA_OWN_RISK_PERC.value);
        if (riskrerc < 0 || riskrerc > 100) {
            SYS_CheckError(document.MAINFORM.FA_OWN_RISK_PERC, 'New Own Risk Percentage must between 0 and 100');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        var arrOptionV; // Utility Auto Fix Comments
        SYS_GetRefNo('FAEF_REVI_REQ', 'SYF_FADA_SetRefNO');

        arrOptionV = ['5', '6', '7', '8', '9', '10'];
        SYS_FilterOptions('FA_REQ_CODE', arrOptionV);
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FA_REQ_CODE = function() {
    try {

        if (document.MAINFORM.FA_REQ_CODE.value == '5' || document.MAINFORM.FA_REQ_CODE.value == '9') {
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_DUE_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_LONG_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_PERC, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_AMT, 'O');
        }
        if (document.MAINFORM.FA_REQ_CODE.value == '6' || document.MAINFORM.FA_REQ_CODE.value == '8') {
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_DUE_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_LONG_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_PERC, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_AMT, 'O');

        }
        if (document.MAINFORM.FA_REQ_CODE.value == '7' || document.MAINFORM.FA_REQ_CODE.value == '10') {
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_DUE_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_LONG_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_PERC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_AMT, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_FADA_Cal_FA_IF_LMT_EXCH_RT();
            SYF_FADA_SET_FA_REQ_CODE_VALUE();
        }
        SYF_FADA_MPO_FA_REQ_CODE();
        /*if (SYS_ORG_FUNCTION_NAME == 'CAARequest') {
            SYT_ChangeFldClass_New('FA_REQ_CODE', 'P');
        }*/ //Marked by amy for incorrect logic in 20150106
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_SetRefNO = function(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'CAA';
        document.MAINFORM.FA_CAA_REF.value = pre + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_OWN_RISK_AMT = function() {
    try {

        var riskamt; // Utility Auto Fix Comments
        riskamt = SYS_BeFloat(document.MAINFORM.FA_OWN_RISK_AMT.value);
        if (riskamt < 0) {
            SYS_CheckError(document.MAINFORM.FA_OWN_RISK_AMT, 'New Own Risk Amount can not be negative');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'CAA';
        document.MAINFORM.FA_BUSI_TYPE.value = 'EF';
        document.MAINFORM.FA_APPL_LMT_DUE_DT.value = document.MAINFORM.FA_LMT_DUE_DT.value;
        document.MAINFORM.FA_APPL_LMT_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        if (SYS_ORG_FUNCTION_NAME != 'CAARequest'.value == '') {
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
        }
        document.MAINFORM.FA_MSG_FUNC.value = '3';
        document.MAINFORM.FA_PMT_COND.value = '1';
        //document.MAINFORM.FA_REQ_CODE.value = '';
        SYF_FADA_Get_IF_LIMT();
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_IF_BAL = function() {
    try {

        var FA_REQ_CODE; // Utility Auto Fix Comments
        var aplamt; // Utility Auto Fix Comments
        var lmtamt; // Utility Auto Fix Comments
        FA_REQ_CODE = document.MAINFORM.FA_REQ_CODE.value;
        aplamt = SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value);
        lmtamt = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value);
        if (FA_REQ_CODE == '6') {
            document.MAINFORM.FA_TEMP_AMT11.value = (aplamt - lmtamt) * SYS_BeFloat(document.MAINFORM.FA_IF_LMT_EXCH_RT.value);
        }
        if (FA_REQ_CODE == '8') {
            document.MAINFORM.FA_TEMP_AMT11.value = (lmtamt - aplamt) * SYS_BeFloat(document.MAINFORM.FA_IF_LMT_EXCH_RT.value);
        }
        document.MAINFORM.FA_TEMP_AMT11.value = SYT_CCY_AMT(SYS_LOCAL_CCY, document.MAINFORM.FA_TEMP_AMT11.value);
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_IF_LMT_BAL_Check = function() {
    try {

        var APPL_LMT_AMT; // Utility Auto Fix Comments
        var FA_REQ_CODE; // Utility Auto Fix Comments
        var IfBal; // Utility Auto Fix Comments
        var IfLmtBal; // Utility Auto Fix Comments
        var LMT_AMT; // Utility Auto Fix Comments
        IfBal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT11.value);
        IfLmtBal = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
        LMT_AMT = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value);
        APPL_LMT_AMT = SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value);
        FA_REQ_CODE = document.MAINFORM.FA_REQ_CODE.value;
        if (FA_REQ_CODE == '6' && LMT_AMT >= APPL_LMT_AMT) {
            SYS_CheckError(document.MAINFORM.FA_APPL_LMT_AMT, "You are requesting for Increase, please put a bigger amount!");
            return false;
        }
        if (FA_REQ_CODE == '6' && IfBal > IfLmtBal) {
            SYS_CheckError(document.MAINFORM.FA_TEMP_AMT11, "Required limits exceed IF's limit balance!");
            return false;
        }
        if (FA_REQ_CODE == '8' && LMT_AMT <= APPL_LMT_AMT) {
            SYS_CheckError(document.MAINFORM.FA_APPL_LMT_AMT, "You are requesting for Reduction, please put a smaller amount!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Chk_FA_OWN_RISK_AMT()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_OWN_RISK_PERC()) {
            return false;
        }
        if (!SYF_FADA_Chk_IF_LMT_BAL_Check()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_LMT_LONG_DAYS()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_LONG_DAYS = function() {
    try {

        if (document.MAINFORM.FA_REQ_CODE.value == '5') {
            if (document.MAINFORM.FA_APPL_LMT_DUE_DT.value == '' && document.MAINFORM.FA_LMT_LONG_DAYS.value == '') {
                SYS_CheckError(document.MAINFORM.FA_LMT_LONG_DAYS, 'The field longest credit period days and new due date cannot be both empty');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_LmtDueDT = function() {
    try {

        var day; // Utility Auto Fix Comments
        var day1; // Utility Auto Fix Comments
        /*if(document.MAINFORM.TEMP_DATE4.value==document.MAINFORM.FA_APPL_LMT_DUE_DT.value){
	return true;
}
if(!SYS_Day1MustbeLaterThanDay2('FA_APPL_LMT_DUE_DT','TEMP_DATE4')){
	SYS_CheckError(document.MAINFORM.FA_APPL_LMT_DUE_DT,"FSBC cannot be requested for an end date after the expiry date of the IF limit!")
	return false;
}*/
        day = SYS_GetSubDays(document.MAINFORM.FA_APPL_LMT_DUE_DT.name, document.MAINFORM.TEMP_DATE4.name); // Utility Auto Fix Comments
        if (day < 0) {
            alert('FSBC cannot be requested for an end date after the expiry date of the IF limit!');
        }
        day1 = SYS_GetSubDays(document.MAINFORM.FA_APPL_LMT_DUE_DT.name, document.MAINFORM.FA_AGM_DUE_DT.name); // Utility Auto Fix Comments
        if (day1 < 0) {
            alert('FSBC cannot be on an end date after the expiry date of the factoring agreement!');
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_IF_LIMT = function() {
    try {

        var TEMP_AMT5; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_BASE_CCY;LM_DUE_DAY";
        //sMappingList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_BASE_CCY;LM_DUE_DAY";
        SYS_GetTableDataByRule_S('SYF_FADA_CAARequest_SYF_FADA_Get_IF_LIMT_0', '1', 'Y');
        TEMP_AMT5 = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
        document.MAINFORM.TEMP_DATE4.value = document.MAINFORM.LM_DUE_DAY.value;
        document.MAINFORM.FA_TEMP3.value = document.MAINFORM.LM_BASE_CCY.value;
        document.MAINFORM.FA_TEMP1.value = SYT_AmtFormat(document.MAINFORM.LM_BASE_CCY.value, TEMP_AMT5);
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_IF_LMT_EXCH_RT = function() {
    try {

        SYS_GetExchangeRate_S(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.LM_BASE_CCY.value, 'Booking Rate', 'FA_IF_LMT_EXCH_RT');
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_FOR_FA_TEMP2 = function() {
    try {

        if (document.MAINFORM.FA_REQ_CODE.value == '6') {
            document.MAINFORM.FA_TEMP2.value = 'D';
        } else {
            document.MAINFORM.FA_TEMP2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_SET_FA_REQ_CODE_VALUE = function() {
    try {

        if (SYS_ORG_FUNCTION_NAME != 'CAARequest') {
            if (document.MAINFORM.FA_REQ_CODE.value == '5' || document.MAINFORM.FA_REQ_CODE.value == '9') {
                document.MAINFORM.FA_APPL_LMT_DUE_DT.value = document.MAINFORM.FA_LMT_DUE_DT.value;
                document.MAINFORM.FA_LMT_LONG_DAYS.value = '';
                document.MAINFORM.FA_APPL_LMT_AMT.value = document.MAINFORM.FA_LMT_AMT.value;
            }
            if (document.MAINFORM.FA_REQ_CODE.value == '6' || document.MAINFORM.FA_REQ_CODE.value == '8') {
                document.MAINFORM.FA_APPL_LMT_DUE_DT.value = ''; //amend as nanjing said
                document.MAINFORM.FA_LMT_LONG_DAYS.value = '';
                //document.MAINFORM.FA_APPL_LMT_AMT.value = '';

            }
            if (document.MAINFORM.FA_REQ_CODE.value == '7' || document.MAINFORM.FA_REQ_CODE.value == '10') {
                document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
                document.MAINFORM.FA_APPL_LMT_DUE_DT.value = '';
                document.MAINFORM.FA_LMT_LONG_DAYS.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_Cal_IF_BAL();
        SYF_FADA_Chk_IF_LMT_BAL_Check();
        EEHtml.fireEvent(document.MAINFORM.FA_TEMP_AMT11, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_DUE_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_FA_APPL_LMT_DUE_DT();
        SYF_FADA_Chk_LmtDueDT();
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_IF_LMT_EXCH_RT_onchange = function(event) {
    try {
        SYF_FADA_Cal_IF_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_TEMP_AMT11, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_IS_BANK_onchange = function(event) {
    try {
        SYF_FADA_Chk_IF_LMT_BAL_Check();
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_Cal_IF_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_TEMP_AMT11, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_OWN_RISK_AMT_onchange = function(event) {
    try {
        SYF_FADA_Chk_FA_OWN_RISK_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_OWN_RISK_PERC_onchange = function(event) {
    try {
        SYF_FADA_Chk_FA_OWN_RISK_PERC();
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REQ_CODE_onchange = function(event) {
    try {
        SYF_FADA_Cal_IF_BAL();
        //SYF_FADA_Chk_IF_LMT_BAL_Check();
        //document.MAINFORM.FA_TEMP_AMT11.fireEvent('onchange');
        SYF_FADA_MPO_FA_REQ_CODE();
        SYF_FADA_SET_FA_REQ_CODE_VALUE();
        SYF_FADA_Chk_FA_APPL_LMT_DUE_DT();
        SYF_FADA_FOR_FA_TEMP2();
        EEHtml.fireEvent(document.MAINFORM.FA_APPL_LMT_DUE_DT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_TEMP1_onchange = function(event) {
    try {
        SYF_FADA_Chk_IF_LMT_BAL_Check();
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_CAARequest.js", e);
    }
}