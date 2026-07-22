var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.TEMP_S.value = SYS_BUSI_DATE
        SYS_GetTableDataByRule_S('SYM_CFNC_GetData_S', '1');
        var days = '';
        days = SYS_GetSubDays(document.MAINFORM.CFNC_OVERDUE_DT.name, document.MAINFORM.TEMP_S.name);
        document.MAINFORM.CFNC_I_OVERDUE_DAYS.value = days;
        SYF_CFNC_InquireInterest_eLoan();





    } catch (e) {
        DisExcpt("SYF_CFNC_Overdue.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass('A_div');
        FLD_CFNC_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_CFNC_Overdue.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CFNC_C_OVERDUE_FLAG.value = 'Y';
    } catch (e) {
        DisExcpt("SYF_CFNC_Overdue.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_InquireInterest_eLoan = function() {
    try {

        SYS_InqGapi_S('CFNC_Overdue_Inquire_ACC');
        EEHtml.fireEvent(document.MAINFORM.CFNC_N_PAY_PNLT_INT, "onchange");
        EEHtml.fireEvent(document.MAINFORM.CFNC_PAY_INT, "onchange");

        /*
    SYS_InqGapi_S('CFNC_Overdue_Inquire_AMZ');
    document.MAINFORM.CFNC_PAY_INT.value = document.MAINFORM.IA_Y_REACC_INT.value;
    EEHtml.fireEvent(document.MAINFORM.CFNC_PAY_INT,"onchange");
    */



    } catch (e) {
        DisExcpt("SYF_CFNC_Overdue.js", e);
    }
}

csFuncLevelProto.SYF_CFNC_CHANGE_CFNC_N_PRE_INT = function() {
    try {

        document.MAINFORM.CFNC_N_PRE_INT.value = SYS_FloatSub(document.MAINFORM.CFNC_PAY_INT.value, document.MAINFORM.CFNC_N_PAY_PNLT_INT.value);
    } catch (e) {
        DisExcpt("SYF_CFNC_Overdue.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_CFNC_C_GRACE_FLG_onchange = function(event) {
    try {
        document.MAINFORM.CFNC_OVERDUE_DT.fireEvent('onchange');
    } catch (e) {
        DisExcpt("SYF_CFNC_Overdue.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_CFNC_N_PAY_PNLT_INT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_CFNC_Overdue.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_CFNC_PAY_INT_onchange = function(event) {
    try {
        //SYF_CFNC_CHANGE_CFNC_N_PRE_INT();
    } catch (e) {
        DisExcpt("SYF_CFNC_Overdue.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_CFNC_Overdue.js", e);
    }
}