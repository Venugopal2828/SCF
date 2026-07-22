var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var sCOMMITNO = '';

csFuncLevelProto.SYF_FFIT_ACPT_CCY = function() {
    try {

        if ((document.MAINFORM.ACPT_CCY.value != '') || (document.MAINFORM.ACPT_AMT.value != '')) {
            document.MAINFORM.ACPT_AMT.value = SYT_CCY_AMT(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CCY_1 = function() {
    try {

        if ((document.MAINFORM.ACPT_CCY.value != '') && (document.MAINFORM.FINC_CCY.value != '') && (document.MAINFORM.ACPT_CCY.value != document.MAINFORM.FINC_CCY.value)) {
            alert('Commitment currency is different from the financing currency!');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AUTH_BLACK = function() {
    try {

        if (document.MAINFORM.C_FIN_ALERT_STATUS.value == 'S') {
            document.MAINFORM.AUTH_BLACK.value = 0;
        } else if (document.MAINFORM.C_FIN_ALERT_STATUS.value == 'F') {
            document.MAINFORM.AUTH_BLACK.value = 1;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CCY_AMT_RELATION = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.FINC_AMT.value != '') {
            document.MAINFORM.FINC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CLOSE_COMMIT_DT = function() {
    try {

        ///////////bazinga//////////////
        if (document.MAINFORM.CLOSE_COMMIT_DT.value != '') {
            document.MAINFORM.CLOSE_COMMIT_DT.value = '';
        }

        if (document.MAINFORM.CLOSE_COMMIT_DT.value != '') {
            alert('Commitment has been closed');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_BAL = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.COMMIT_BAL.value) <= '0') {
            SYS_CheckError(document.MAINFORM.COMMIT_NO, 'Insufficient commitment balance!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_DUE_DT = function() {
    try {

        var sDAYS = SYS_GetSubDays(document.MAINFORM.COMMIT_DUE_DT.name, document.MAINFORM.TRX_DT.name);
        if (sDAYS > 0) {
            alert('Commitment has been overdue');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_NO = function() {
    try {

        sCOMMITNO = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CFRegister2_SYF_FFIT_COMMIT_NO_0', '1');
        document.MAINFORM.FINC_CCY.value = document.MAINFORM.COMMIT_CCY.value;
        if (sCOMMITNO == 'N') {
            alert('Without this commitment information');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CheckMaturity = function() {
    try {

        var nDAYS = SYS_GetSubDays(document.MAINFORM.FINC_DT.name, document.MAINFORM.MATURITY.name);
        if (nDAYS < 0) {
            SYS_CheckError(document.MAINFORM.MATURITY, 'Maturity earlier than the finance date!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        //document.MAINFORM.AUTH_POINT1.value='1';
        SYT_Check_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_TRX_DT_check()) {
            return false;
        }
        if (!SYF_FFIT_CheckMaturity()) {
            return false;
        }
        if (!SYF_FFIT_COMMIT_BAL()) {
            return false;
        }
        if (!SYF_FFIT_GRACE_DAYS()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FAV_REMARK = function() {
    try {

      if (document.MAINFORM.FAV_RT_FLG.value == 'YES') { 
            SYT_ChangeFldClass(document.MAINFORM.NEW_REMARK, 'M', 'Y');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REMARK, 'O', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GRACE_DAYS = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.GRACE_DAYS.value) < '0') {
            SYS_CheckError(document.MAINFORM.GRACE_DAYS, 'Grace period cannot less than zero!');
            return false;
        } else if (SYS_BeFloat(document.MAINFORM.GRACE_DAYS.value) > '999') {
            SYS_CheckError(document.MAINFORM.GRACE_DAYS, 'Grace period should not more than 999!');
            document.MAINFORM.GRACE_DAYS.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('FFIT_FP', 'SYF_FFIT_SetRefNo');
        document.MAINFORM.EVENT_TYPE.value = 'CommitFINCRegi2';
        document.MAINFORM.TRX_NO.value = '';
        document.MAINFORM.FINC_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        document.MAINFORM.FINC_CCY.value = document.MAINFORM.COMMIT_CCY.value;
        document.MAINFORM.COMMIT_BAL.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.COMMIT_BAL.value);
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
        SYF_FFIT_COMMIT_NO();
        SYF_FFIT_MARGIN_RT();
        //SYF_FFIT_AUTH_POINT1();
        SYF_FFIT_TEMP_DATE1();

        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MARGIN_RT = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CFRegister2_SYF_FFIT_MARGIN_RT_1', '1');
        document.MAINFORM.MARGIN_RT.value = SYT_CCY_AMT('USD', document.MAINFORM.MARGIN_RT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
            SYF_FFIT_COMMIT_BAL();
            SYF_FFIT_CLOSE_COMMIT_DT();
            SYF_FFIT_COMMIT_DUE_DT();
            SYF_FFIT_FAV_REMARK();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYF_FFIT_COMMIT_BAL();
            SYF_FFIT_CLOSE_COMMIT_DT();
            SYF_FFIT_COMMIT_DUE_DT();
            SYF_FFIT_FAV_REMARK();
        }
        SYT_relAuthBlack();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetRefNo = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_DATE1 = function() {
    try {

        var graceDay; // Utility Auto Fix Comments
        graceDay = document.MAINFORM.GRACE_DAYS.value;
        if (graceDay == '') {
            graceDay = 0;
            document.MAINFORM.GRACE_DAYS.value = 0;
        }
        if (document.MAINFORM.MATURITY.value == null || document.MAINFORM.MATURITY.value == "null") {
            document.MAINFORM.MATURITY.value = "";
        }

        if (document.MAINFORM.MATURITY.value != '') {
            if ((document.MAINFORM.GRACE_FLG.value == '2') && (document.MAINFORM.GRACE_DAYS.value >= '0')) {
                SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.MATURITY.value, document.MAINFORM.GRACE_DAYS.value, 'TEMP_DATE1', 'A', 'Y', 'Y');
            } else if ((document.MAINFORM.GRACE_FLG.value == '1') && (document.MAINFORM.GRACE_DAYS.value >= '0')) {
                SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.MATURITY.value, document.MAINFORM.GRACE_DAYS.value, 'TEMP_DATE1', 'A', 'N', 'Y');
            }
        } else {
            document.MAINFORM.TEMP_DATE1.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRX_DT_check = function() {
    try {

        var nDAYS = SYS_GetSubDays(document.MAINFORM.COMMIT_DUE_DT.name, document.MAINFORM.TRX_DT.name);
        if (nDAYS > 0 || document.MAINFORM.CLOSE_COMMIT_DT.value != '') {
            SYS_CheckError(document.MAINFORM.COMMIT_NO, 'Commitment has been closed or over due');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_inqFinDNA = function() {
    try {

        var SHeader = new Array(6);
        SHeader[0] = '2';
        SHeader[1] = document.MAINFORM.C_MAIN_REF.value;
        SHeader[2] = document.MAINFORM.BLACK_INSTYP.value;
        SHeader[3] = document.MAINFORM.CLERK_ID.value;
        SHeader[4] = document.MAINFORM.GTS_BR_ID.value;
        SHeader[5] = '2';

        var arrayEntry = new Array();
        var i = -1;
        var bk_sw_obj, bk_nm_obj, bk_add_obj;
        var cust_nm_obj, cust_add_obj;

        bk_sw_obj = EEHtml.getElementById('ACPT_BK_SW');
        bk_nm_obj = EEHtml.getElementById('ACPT_BK_NM');
        bk_add_obj = EEHtml.getElementById('ACPT_BK_ADD');
        if ((bk_sw_obj != null && bk_sw_obj.value != '') || (bk_nm_obj != null && bk_nm_obj.value != '') || (bk_add_obj != null && bk_add_obj.value != '')) {
            ++i;
            arrayEntry[i] = new Array();
            arrayEntry[i][0] = document.MAINFORM.BLACK_DATA_TYPE.value;
            arrayEntry[i][1] = '';
            arrayEntry[i][2] = '';
            arrayEntry[i][3] = bk_nm_obj != null ? bk_nm_obj.value : '';
            arrayEntry[i][4] = bk_add_obj != null ? bk_add_obj.value : '';
            arrayEntry[i][5] = '';
            arrayEntry[i][6] = '';
            arrayEntry[i][7] = bk_sw_obj != null ? bk_sw_obj.value : '';
            arrayEntry[i][8] = '';
            arrayEntry[i][9] = '';
            arrayEntry[i][10] = '';
            arrayEntry[i][11] = '';
        }

        cust_nm_obj = EEHtml.getElementById('EXPT_NM');
        if (cust_nm_obj != null && cust_nm_obj.value != '') {
            ++i;
            arrayEntry[i] = new Array();
            arrayEntry[i][0] = document.MAINFORM.BLACK_DATA_TYPE.value;
            arrayEntry[i][1] = '';
            arrayEntry[i][2] = '';
            arrayEntry[i][3] = cust_nm_obj != null ? cust_nm_obj.value : '';
            arrayEntry[i][4] = '';
            arrayEntry[i][5] = '';
            arrayEntry[i][6] = '';
            arrayEntry[i][7] = '';
            arrayEntry[i][8] = '';
            arrayEntry[i][9] = '';
            arrayEntry[i][10] = '';
            arrayEntry[i][11] = '';
        }

        cust_nm_obj = EEHtml.getElementById('IMPT_NM');
        if (cust_nm_obj != null && cust_nm_obj.value != '') {
            ++i;
            arrayEntry[i] = new Array();
            arrayEntry[i][0] = document.MAINFORM.BLACK_DATA_TYPE.value;
            arrayEntry[i][1] = '';
            arrayEntry[i][2] = '';
            arrayEntry[i][3] = cust_nm_obj != null ? cust_nm_obj.value : '';
            arrayEntry[i][4] = '';
            arrayEntry[i][5] = '';
            arrayEntry[i][6] = '';
            arrayEntry[i][7] = '';
            arrayEntry[i][8] = '';
            arrayEntry[i][9] = '';
            arrayEntry[i][10] = '';
            arrayEntry[i][11] = '';
        }

        bk_sw_obj = EEHtml.getElementById('SELL_BK_SW');
        bk_nm_obj = EEHtml.getElementById('SELL_BK_NM');
        bk_add_obj = EEHtml.getElementById('SELL_BK_ADD');
        if ((bk_sw_obj != null && bk_sw_obj.value != '') || (bk_nm_obj != null && bk_nm_obj.value != '') || (bk_add_obj != null && bk_add_obj.value != '')) {
            ++i;
            arrayEntry[i] = new Array();
            arrayEntry[i][0] = document.MAINFORM.BLACK_DATA_TYPE.value;
            arrayEntry[i][1] = '';
            arrayEntry[i][2] = '';
            arrayEntry[i][3] = bk_nm_obj != null ? bk_nm_obj.value : '';
            arrayEntry[i][4] = bk_add_obj != null ? bk_add_obj.value : '';
            arrayEntry[i][5] = '';
            arrayEntry[i][6] = '';
            arrayEntry[i][7] = bk_sw_obj != null ? bk_sw_obj.value : '';
            arrayEntry[i][8] = '';
            arrayEntry[i][9] = '';
            arrayEntry[i][10] = '';
            arrayEntry[i][11] = '';
        }
        inqFinDNA(SHeader, arrayEntry);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_AMT = function() {
    try {

        if (document.MAINFORM.ACPT_CCY.value != '' || document.MAINFORM.ACPT_AMT.value != '') {
            document.MAINFORM.ACPT_AMT.value = SYT_CCY_AMT(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        }
        document.MAINFORM.FINC_AMT.value = SYS_BeFloat(document.MAINFORM.ACPT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.ACPT_AMT.value = 0;
        }
        SYF_FFIT_ACPT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CCY_onchange = function(event) {
    try {
        document.MAINFORM.FINC_CCY.value = document.MAINFORM.ACPT_CCY.value;
        SYF_FFIT_ACPT_CCY();
        SYF_FFIT_ACPT_CCY_1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CLOSE_COMMIT_DT_onchange = function(event) {
    try {
        SYF_FFIT_CLOSE_COMMIT_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_BAL_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_DUE_DT_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_NO_onchange = function(event) {
    try {
        SYF_FFIT_MARGIN_RT();
        SYF_FFIT_COMMIT_NO();
        EEHtml.fireEvent(document.MAINFORM.FINC_CCY, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.COMMIT_DUE_DT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CLOSE_COMMIT_DT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FAV_RT_FLG_onchange = function(event) {
    try {
        SYF_FFIT_FAV_REMARK();
        //SYF_FFIT_AUTH_POINT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.FINC_AMT.value)) {
            document.MAINFORM.FINC_AMT.value = 0;
        }
        SYF_FFIT_CCY_AMT_RELATION();
        if (SYS_BeFloat(document.MAINFORM.FINC_AMT.value) > SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            alert("The finacne amt should not be greater than acceptance amt");
            document.MAINFORM.FINC_AMT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {
        SYF_FFIT_CCY_AMT_RELATION();
        SYF_FFIT_ACPT_CCY_1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_DAYS_onchange = function(event) {
    try {
        SYF_FFIT_GRACE_DAYS();
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_FLG_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MATURITY_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRX_NO_onchange = function(event) {
    try {
        var regex = /^[A-Za-z0-9 ]+$/;
        var isValid = regex.test(document.MAINFORM.TRX_NO.value);
        if (!isValid) {
            alert("Field Contains Special Characters.");
            document.MAINFORM.TRX_NO.value = '';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister2.js", e);
    }
}