var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_GTEE_Cal_CLM_CNTR = function() {
    try {

        var nCLM_CNTR = SYS_BeInt(document.MAINFORM.CLM_CNTR.value);
        document.MAINFORM.CLM_CNTR.value = nCLM_CNTR + 1;
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_CLM_REF = function() {
    try {

        var ref = '/';
        var nCLM_NO = document.MAINFORM.CLM_CNTR.value;
        if (nCLM_NO != '') {
            document.MAINFORM.CLM_REF.value = document.MAINFORM.C_MAIN_REF.value + ref + document.MAINFORM.CLM_CNTR.value;
        } else {
            document.MAINFORM.CLM_REF.value = document.MAINFORM.C_MAIN_REF.value;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_C_TRX_REF = function() {
    try {

        document.MAINFORM.C_TRX_REF.value = document.MAINFORM.CLM_REF.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_GTEE_BAL = function() {
    try {

        var nORIGIN_GTEE_BAL = SYS_BeFloat(document.MAINFORM.ORIGIN_GTEE_BAL.value);
        var nCLM_AMT_TRXCCY = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        //var nGTEE_BAL = SYS_BeFloat(nORIGIN_GTEE_BAL -nCLM_AMT_TRXCCY);  //Don' calculate Guarantee Balance in Claim Register

        if (nCLM_AMT_TRXCCY > nORIGIN_GTEE_BAL) {
            alert("Claim Amount can not exceed the Outstanding Guarantee Amount");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
            //	document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value,nORIGIN_GTEE_BAL);  //Don' calculate Guarantee Balance in Claim Register
            return false;
        } else {
            //	document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value,nGTEE_BAL);  //Don' calculate Guarantee Balance in Claim Register
            return true;

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_GTEE_Cal_C_TRX_REF();
        SYT_CLERK_ID();

        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        //SYF_GTEE_Cal_CLM_CNTR();
        SYF_GTEE_Cal_CLM_REF();

        //document.MAINFORM.CLM_TRX_CCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value,document.MAINFORM.GTEE_BAL.value);
        document.MAINFORM.ORIGIN_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value;

        document.MAINFORM.CLM_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CURRNT_STATUS.value = 'RegOutwardClaim';
        document.MAINFORM.NXT_STATUS.value = 'SettleOutwardClaim';
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //SYT_ShowBlankRow('BENE_blankRow',1);
        SYT_ShowBlankRow('INDE', 1);

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);

        SYM_GTEE_APLB_RULE2();
        SYT_DisableDivClass("C_div");
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_TRX_CCY_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.CLM_TRX_CCY_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
        }

        SYF_GTEE_Cal_GTEE_BAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_ProcessMT778.js", e);
    }
}