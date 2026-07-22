var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_GTEE_Cal_CLM_CNTR = function() {
    try {

        var nCLM_CNTR = SYS_BeInt(document.MAINFORM.CLM_CNTR.value);
        document.MAINFORM.CLM_CNTR.value = nCLM_CNTR + 1;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
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
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_C_TRX_REF = function() {
    try {

        document.MAINFORM.C_TRX_REF.value = document.MAINFORM.CLM_REF.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
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
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_GTEE_Cal_C_TRX_REF();
        SYT_CLERK_ID();

        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_GTEE_Cal_CLM_CNTR();
        SYF_GTEE_Cal_CLM_REF();

        document.MAINFORM.CLM_TRX_CCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_BAL.value);
        document.MAINFORM.ORIGIN_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value;

        document.MAINFORM.CLM_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CURRNT_STATUS.value = 'RegOutwardClaim';
        document.MAINFORM.NXT_STATUS.value = 'SettleOutwardClaim';
        document.MAINFORM.APPLY_FLG.value = 'YES';
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
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
        SYF_GTEE_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MT798_FLG = function() {
    try {

        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDiv('Z_div');

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLY_FLG_onchange = function(event) {
    try {
        SYF_GTEE_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_DT_onchange = function(event) {
    try {
        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.CLM_DT.name) < 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, "Claim Register Date must be later than Registration Date!");
            document.MAINFORM.CLM_DT.value = '';
        } else if ((SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.CLM_DT.name) >= 0)) {
            SYS_CheckError(document.MAINFORM.CLM_DT, "Claim Register Date is not allowed later than Expiry/Review Date");
            document.MAINFORM.CLM_DT.value = '';
        }

        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CLM_DT');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CLM_TRX_CCY_AMT_onchange = function(event) {
    try {
        var value = document.MAINFORM.CLM_TRX_CCY_AMT.value;
        if (SYM_GTEE_CHK_NEG(value)) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
        }


        SYF_GTEE_Cal_GTEE_BAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_FILE_23X_CODE_onchange = function(event) {
    try {
        if (document.MAINFORM.FILE_23X_CODE.value != '') {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = '/' + document.MAINFORM.FILE_23X_CODE.value + '/';
        } else {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_X798_31C_ISSUE_DATE_onchange = function(event) {
    try {

        /*
if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.X798_31C_ISSUE_DATE.name) < 0) {
            SYS_CheckError(document.MAINFORM.X798_31C_ISSUE_DATE, "Extend date must be later than Registration Date!");
            document.MAINFORM.X798_31C_ISSUE_DATE.value = '';
        } else if ((SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.X798_CRE_DATE.name) >= 0)) {
            SYS_CheckError(document.MAINFORM.X798_31C_ISSUE_DATE, "Extend Date is not allowed later than Expiry/Review Date");
            document.MAINFORM.X798_31C_ISSUE_DATE.value = '';
        }
*/
        //MARK BY SUSIE FOR TEST
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_X798_31L_NEW_EXPIR_DT_onchange = function(event) {
    try {
        if (SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.X798_31L_NEW_EXPIR_DT.name) < 0) {
            SYS_CheckError(document.MAINFORM.X798_31L_NEW_EXPIR_DT, "New Expiry date must be later than Expiry Date!");
            document.MAINFORM.X798_31L_NEW_EXPIR_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterExtend.js", e);
    }
}