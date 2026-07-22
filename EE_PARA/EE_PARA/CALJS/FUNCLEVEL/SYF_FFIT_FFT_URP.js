var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.PMT_BAL.value = document.MAINFORM.URP_AMT.value;

        document.MAINFORM.URP_CPS_DT.value = SYS_BUSI_DATE;

        //SYF_FFIT_VENT_TEMP_NO1();
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.PRODUCT_CODE.value;

        document.MAINFORM.TRANS_DATE_ID.value = SYT_GetDateID(document.MAINFORM.TRX_DT.value);
        //getLedgCode(document.MAINFORM.C_MAIN_REF.value);
        //ConfirmBusinessCall_COMM();
        //SYT_Check_AMT();
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_URP_START_DT()) {
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'URP';
        // document.MAINFORM.URP_START_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.URP_AMT.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.URP_AMT.value);

        document.MAINFORM.OTHER_CHG.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.OTHER_CHG.value);
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';

        //InitChg('URPChg','URPOtherChg'); 
        //InitValues_COMM('TRANSACTION','Counter Party');
        //TRX_CCY_COMM(document.MAINFORM.URP_CCY.value);
        //SYT_CommPageConfirm(); 

        SYF_FFIT_URP_DAYS();
        document.MAINFORM.PMT_BAL.value = document.MAINFORM.URP_AMT.value;

        SYF_FFIT_VENT_TEMP_NO1();
        document.MAINFORM.OTHER_CHG.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.OTHER_CHG.value);
        SYF_FFIT_URP_CCY();

        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_OTHER_CHG = function() {
    try {

        /*if (SYS_BeFloat(document.MAINFORM.OTHER_CHG.value) > 0) {
            document.MAINFORM.OTHER_CHG.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.OTHER_CHG.value);
            getOtherFEE('URPOtherChg', 'URPOtherChg', document.MAINFORM.OTHER_CHG.value, document.MAINFORM.URP_CCY.value, document.MAINFORM.URP_CCY.value, 'Y', CABLEAC + ';' + document.MAINFORM.PRODUCT_CODE.value);
        } else {
            getOtherFEE('URPOtherChg', 'URPOtherChg', document.MAINFORM.OTHER_CHG.value, document.MAINFORM.URP_CCY.value, document.MAINFORM.URP_CCY.value, 'N', CABLEAC + ';' + document.MAINFORM.PRODUCT_CODE.value);
        }*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PRODUCT_CODE = function() {
    try {

        if (document.MAINFORM.DEBT_INSMT_TYPE.value == '5') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URP_SYF_FFIT_PRODUCT_CODE_0', '1');
        } else {
            if (document.MAINFORM.DEBT_INSMT_TYPE.value != '') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URP_SYF_FFIT_PRODUCT_CODE_1', '1');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
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
            document.MAINFORM.URP_DT.value = SYS_BUSI_DATE;
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
            SYT_ExchRate_FIX_PENDING();
        }

        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
        }


        Chg.Screen.mapLocalCust("EXPT_ID", "EXPT_NM");
        Chg.Screen.mapForeignCust("EXPT_ID", "EXPT_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {

            arr = ['URP_CHG', 'URP_OTHER_CHG'];
            amt = document.MAINFORM.PMT_BAL.value;
            ccy = document.MAINFORM.URP_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
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
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_URP_CCY = function() {
    try {

        if (document.MAINFORM.URP_CCY.value != '' || document.MAINFORM.URP_AMT.value != '') {
            document.MAINFORM.URP_AMT.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.URP_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_URP_DAYS = function() {
    try {

        if (document.MAINFORM.URP_START_DT.value != '' && document.MAINFORM.URP_EXPIRY_DT.value != '') {
            document.MAINFORM.URP_DAYS.value = SYS_GetSubDays(document.MAINFORM.URP_START_DT.name, document.MAINFORM.URP_EXPIRY_DT.name);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_URP_FEE_RT = function() {
    try {

        if (document.MAINFORM.URP_FEE_RT.value != '') {
            document.MAINFORM.URP_FEE_RT.value = SYT_CCY_AMT('USD', document.MAINFORM.URP_FEE_RT.value);
        }
        if (document.MAINFORM.URP_DAYS.value > '0') {
            getCommitmentFEE('URPCharge', 'URPChg', document.MAINFORM.URP_AMT.value, document.MAINFORM.URP_FEE_RT.value, document.MAINFORM.URP_DAYS.value, document.MAINFORM.URP_CCY.value, document.MAINFORM.URP_CCY.value, 'Y', document.MAINFORM.VENT_TEMP_NO1_S.value + ';' + document.MAINFORM.PRODUCT_CODE.value);
        } else {
            getCommitmentFEE('URPCharge', 'URPChg', document.MAINFORM.URP_AMT.value, document.MAINFORM.URP_FEE_RT.value, document.MAINFORM.URP_DAYS.value, document.MAINFORM.URP_CCY.value, document.MAINFORM.URP_CCY.value, 'N', document.MAINFORM.VENT_TEMP_NO1_S.value + ';' + document.MAINFORM.PRODUCT_CODE.value);
        }

    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_URP_START_DT = function() {
    try {

        if (document.MAINFORM.URP_DAYS.value <= '0') {
            SYS_CheckError(document.MAINFORM.URP_START_DT, 'URP start date must before the end date!!'); // Utility Auto Fix Comments
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_TEMP_NO1 = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URP_SYF_FFIT_VENT_TEMP_NO1_2', '1');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_VENT_TEMP_NO1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_OTHER_CHG_onchange = function(event) {
    try {
        SYF_FFIT_OTHER_CHG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_URP_AMT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_URP_CCY_onchange = function(event) {
    try {
        SYF_FFIT_OTHER_CHG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_URP_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_FFIT_URP_DAYS();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_URP_FEE_RT_onchange = function(event) {
    try {
        SYF_FFIT_URP_FEE_RT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_URP_START_DT_onchange = function(event) {
    try {
        SYF_FFIT_URP_DAYS();
        SYF_FFIT_URP_START_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_VENT_TEMP_NO1_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_VENT_TEMP_NO1_S_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_URP.js", e);
    }
}