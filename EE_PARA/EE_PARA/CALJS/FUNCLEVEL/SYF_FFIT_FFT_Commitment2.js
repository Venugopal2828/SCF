var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_COMMIT_AMT = function() {
    try {

        /*
if(document.MAINFORM.COMMIT_DAYS.value>'0')
{
getCommitmentFEE('Commitment Chg(commitment)','CommitmentChg(2)',document.MAINFORM.COMMIT_AMT.value,document.MAINFORM.COMMIT_FEE_RT.value,document.MAINFORM.COMMIT_DAYS.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'Y',document.MAINFORM.VENT_TEMP_NO1_S.value+';'+document.MAINFORM.PRODUCT_CODE.value);
}
else
{
getCommitmentFEE('Commitment Chg(commitment)','CommitmentChg(2)',document.MAINFORM.COMMIT_AMT.value,document.MAINFORM.COMMIT_FEE_RT.value,document.MAINFORM.COMMIT_DAYS.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'N',document.MAINFORM.VENT_TEMP_NO1_S.value+';'+document.MAINFORM.PRODUCT_CODE.value);
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_DAYS = function() {
    try {

        if (document.MAINFORM.COMMIT_START_DT.value != '' && document.MAINFORM.COMMIT_DUE_DT.value != '') {
            document.MAINFORM.COMMIT_DAYS.value = SYS_GetSubDays(document.MAINFORM.COMMIT_START_DT.name, document.MAINFORM.COMMIT_DUE_DT.name);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_FEE_RT = function() {
    try {

        if (document.MAINFORM.COMMIT_FEE_RT.value != '') {
            document.MAINFORM.COMMIT_FEE_RT.value = SYT_CCY_AMT('USD', document.MAINFORM.COMMIT_FEE_RT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_START_DT = function() {
    try {

        if (document.MAINFORM.COMMIT_DAYS.value <= '0') {
            SYS_CheckError(document.MAINFORM.COMMIT_START_DT, 'Commitment start date must before the end date!'); // Utility Auto Fix Comments
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.COMMIT_BAL.value = document.MAINFORM.COMMIT_AMT.value;
        document.MAINFORM.COMMIT_NO.value = document.MAINFORM.C_MAIN_REF.value;

        document.MAINFORM.COMMIT_CPS_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.PRODUCT_CODE.value;
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        document.MAINFORM.FINC_DEVAL_MODE.value = '0';

        //getLedgCode(document.MAINFORM.COMMIT_NO.value);
        //ConfirmBusinessCall_COMM();
        //SYT_Check_AMT();
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_COMMIT_START_DT()) {
            return false;
        }
        if (!SYT_WHZH_TRX_CODE_CHECK()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_DEBT_INSMT_AMT = function() {
    try {

        if (document.MAINFORM.COMMIT_CCY.value != '') {
            document.MAINFORM.DEBT_INSMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.DEBT_INSMT_AMT.value);
            document.MAINFORM.OTHER_CHG.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.OTHER_CHG.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_DLY_COMMIT_FEE = function() {
    try {

        var A; // Utility Auto Fix Comments
        A = getFeeField('CommitmentChg(2)', 'NOW');
        if (A[8] == 'DEFERRED') {
            document.MAINFORM.DLY_COMMIT_FEE.value = A[2];
            document.MAINFORM.DISTRICT_CODE.value = document.MAINFORM.COMMIT_CCY.value;
            document.MAINFORM.BAL_FFT.value = '0';
        } else if (A[8] == 'TRANSACTION') {
            document.MAINFORM.DLY_COMMIT_FEE.value = '0';
            document.MAINFORM.DISTRICT_CODE.value = A[3];
            document.MAINFORM.BAL_FFT.value = A[4];
        } else {
            document.MAINFORM.DLY_COMMIT_FEE.value = '0';
            document.MAINFORM.DISTRICT_CODE.value = document.MAINFORM.COMMIT_CCY.value;
            document.MAINFORM.BAL_FFT.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'Commitment2';
        document.MAINFORM.COMMIT_START_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COMMIT_AMT.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.COMMIT_AMT.value);
        document.MAINFORM.COMMIT_BAL.value = document.MAINFORM.COMMIT_AMT.value;
        document.MAINFORM.OTHER_CHG.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.OTHER_CHG.value); // Utility Auto Fix Comments
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';

        //InitChg('CommitmentChg(2)','CommitmentOtherChg'); 
        //InitValues_COMM('TRANSACTION','Counter Party');
        //TRX_CCY_COMM(document.MAINFORM.COMMIT_CCY.value);
        //SYT_CommPageConfirm(); 

        SYF_FFIT_VENT_TEMP_NO1();
        SYF_FFIT_COMMIT_DAYS();
        SYF_FFIT_LC_CCY_AMT_Relation();
        SYF_FFIT_DEBT_INSMT_AMT();
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_LC_CCY_AMT_Relation = function() {
    try {

        if (document.MAINFORM.LC_CCY.value != '' || document.MAINFORM.LC_AMT.value != '') {
            document.MAINFORM.LC_AMT.value = SYT_CCY_AMT(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_OTHER_CHG = function() {
    try {

        /*
if(SYS_BeFloat(document.MAINFORM.OTHER_CHG.value)>0)
{
getOtherFEE('PostCable','CommitmentOtherChg',document.MAINFORM.OTHER_CHG.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'Y',CABLEAC+';'+document.MAINFORM.PRODUCT_CODE.value);
}
else
{
getOtherFEE('PostCable','CommitmentOtherChg',document.MAINFORM.OTHER_CHG.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'N',CABLEAC+';'+document.MAINFORM.PRODUCT_CODE.value);
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
            SYT_ExchRate_FIX_PENDING();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
        }


        Chg.Screen.mapLocalCust("SELL_BK_ID", "SELL_BK_NM");
        Chg.Screen.mapForeignCust("EXPT_ID", "EXPT_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {

            arr = ['COMMITMENT_CHG', 'COMMITMENT_CHG_OTHER'];
            amt = document.MAINFORM.COMMIT_BAL.value;
            ccy = document.MAINFORM.COMMIT_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
        /*
if(SYS_FUNCTION_TYPE=='PM' || SYS_FUNCTION_TYPE=='EC' )
{
//InitFieldEvent_COMM();
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_TEMP_NO1 = function() {
    try {

        if (document.MAINFORM.DEBT_INSMT_TYPE.value == '5') {
            //SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Commitment2_SYF_FFIT_VENT_TEMP_NO1_0', '1');
        } else {
            //SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Commitment2_SYF_FFIT_VENT_TEMP_NO1_1', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BP_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.BP_AMT.value) < 0) {
            alert("The BP AMT field should not accept negative values!");
            document.MAINFORM.BP_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_AMT_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_OTHER_CHG();
        SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_DAYS_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_DUE_DT_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_DAYS();
        SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_FEE_RT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.COMMIT_FEE_RT.value) > 0 && SYS_BeFloat(document.MAINFORM.COMMIT_FEE_RT.value) <= 100) {
            SYF_FFIT_COMMIT_FEE_RT();
            SYF_FFIT_COMMIT_AMT();
        } else {
            SYS_CheckError(document.MAINFORM.COMMIT_FEE_RT, 'Fee rate should between 0 and 100% !');
            document.MAINFORM.COMMIT_FEE_RT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_START_DT_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_DAYS();
        SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.DEBT_INSMT_AMT.value) < 0) {
            alert("The Debt Instrument AMT field should not accept negative values!");
            document.MAINFORM.DEBT_INSMT_AMT.value = 0;
        }
        SYF_FFIT_DEBT_INSMT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_VENT_TEMP_NO1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LC_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.LC_AMT.value) < 0) {
            alert("The LC amount field should not accept negative values!");
            document.MAINFORM.LC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LC_CCY_onchange = function(event) {
    try {
        SYF_FFIT_LC_CCY_AMT_Relation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_OTHER_CHG_onchange = function(event) {
    try {
        SYF_FFIT_OTHER_CHG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRODUCT_CODE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment2.js", e);
    }
}