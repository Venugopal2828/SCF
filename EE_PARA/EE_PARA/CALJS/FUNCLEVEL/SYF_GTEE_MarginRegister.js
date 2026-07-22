var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYF_GTEE_Cal_MRGN_CCY();
        SYF_GTEE_Cal_MRGN_AC_CCY();
        SYF_GTEE_Cal_MRGN_DR_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_MRGN_AMT = function() {
    try {

        document.MAINFORM.MRGN_AMT.value = SYT_AmtFormat(document.MAINFORM.MRGN_CCY.value, SYS_BeFloat(document.MAINFORM.GTEE_AMT.value) * SYS_BeFloat(document.MAINFORM.MRGN_PCT.value) / 100);
        SYF_GTEE_Cal_MRGN_BAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_MRGN_BAL = function() {
    try {

        document.MAINFORM.MRGN_BAL.value = SYT_AmtFormat(document.MAINFORM.MRGN_CCY.value, document.MAINFORM.MRGN_AMT.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Chk_MRGN_PCT = function() {
    try {

        var nMRGN_PCT = SYS_BeFloat(document.MAINFORM.MRGN_PCT.value);
        if (nMRGN_PCT > 100 || nMRGN_PCT < 0) {
            document.MAINFORM.MRGN_PCT.value = 0;
            alert("Please input value between 0~100!");
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_MRGN_CCY = function() {
    try {

        document.MAINFORM.MRGN_CCY.value = document.MAINFORM.GTEE_CCY.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_MRGN_AC_CCY = function() {
    try {

        document.MAINFORM.MRGN_AC_CCY.value = document.MAINFORM.GTEE_CCY.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_MRGN_AC_AMT = function() {
    try {

        document.MAINFORM.MRGN_AC_AMT.value = SYT_AmtFormat(document.MAINFORM.MRGN_AC_CCY.value, document.MAINFORM.MRGN_AMT.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_MRGN_DR_ID = function() {
    try {

        document.MAINFORM.MRGN_DR_ID.value = document.MAINFORM.APPL_ID.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_MRGN_AC_NO_BTN_onclick = function(event) {
    try {
        // document.MAINFORM.MRGN_AC_NO.value = '';
        //SYS_InqCUBK_Sql('MRGN_AC_NO', 'C_CUST_ID=\'<--MRGN_DR_ID-->\' AND C_CURRENCY=\'<--MRGN_AC_CCY-->\'');
        SYS_InqCUBK_byCondition('MRGN_AC_NO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_MRGN_AMT_onchange = function(event) {
    try {
        SYF_GTEE_Cal_MRGN_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_MRGN_DR_AC_BTN_onclick = function(event) {
    try {
        // document.MAINFORM.MRGN_DR_AC.value = '';
        //SYS_InqCUBK_Sql('MRGN_DR_AC', 'C_CUST_ID=\'<--MRGN_DR_ID-->\' AND C_CURRENCY=\'<--MRGN_CCY-->\'');
        SYS_InqCUBK_byCondition('MRGN_DR_AC', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_MRGN_DR_ID_BTN_onclick = function(event) {
    try {
        //document.MAINFORM.MRGN_DR_ID.value ='';
        //SYS_InqCUBK('MRGN_DR_ID','MRGN_DR_ID');
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_MRGN_PCT_onchange = function(event) {
    try {
        SYF_GTEE_Chk_MRGN_PCT();
        SYF_GTEE_Cal_MRGN_AMT();
        SYF_GTEE_Cal_MRGN_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginRegister.js", e);
    }
}