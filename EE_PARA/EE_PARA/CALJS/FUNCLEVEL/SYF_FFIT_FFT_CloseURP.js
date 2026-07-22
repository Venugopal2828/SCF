var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_COMMIT_DAYS = function() {
    try {

        if ((document.MAINFORM.COMMIT_TERM_FLAG.value == '1') && (document.MAINFORM.URP_START_DT.value != '')) {
            document.MAINFORM.COMMIT_DAYS.value = SYS_GetSubDays(document.MAINFORM.URP_START_DT.name, document.MAINFORM.TRX_DT.name);
        } else {
            if ((document.MAINFORM.COMMIT_TERM_FLAG.value == '2') && (document.MAINFORM.URP_EXPIRY_DT.value != '')) {
                document.MAINFORM.COMMIT_DAYS.value = SYS_GetSubDays(document.MAINFORM.URP_START_DT.name, document.MAINFORM.URP_EXPIRY_DT.name);
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.PMT_BAL.value = '0';
        //getLedgCode(document.MAINFORM.C_MAIN_REF.value);
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.PRODUCT_CODE.value;
        //ConfirmBusinessCall_COMM();
        //SYT_Check_AMT();
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'CloseURP';
        document.MAINFORM.TEMP_AMT.value = document.MAINFORM.PMT_BAL.value;
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';

        //InitChg('CloseURPChg','OtherChgsMatured');
        //InitValues_COMM();
        //InitFieldEvent_COMM();
        //TRX_CCY_COMM(document.MAINFORM.URP_CCY.value);
        //SYT_CommPageConfirm();

        document.MAINFORM.URP_AMT.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.URP_AMT.value);
        document.MAINFORM.PMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.PMT_BAL.value);
        document.MAINFORM.OTHER_CHG.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.OTHER_CHG.value);
        //SYF_FFIT_VENT_TEMP_NO1();

        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_OTHER_CHG = function() {
    try {

        document.MAINFORM.OTHER_CHG.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.OTHER_CHG.value);
        /*if (SYS_BeFloat(document.MAINFORM.OTHER_CHG.value) > 0) {
            getOtherFEE('PostCable(Close)', 'OtherChgsMatured', document.MAINFORM.OTHER_CHG.value, document.MAINFORM.URP_CCY.value, document.MAINFORM.URP_CCY.value, 'Y', CABLEAC + ';' + document.MAINFORM.PRODUCT_CODE.value);
        } else {
            getOtherFEE('PostCable(Close)', 'OtherChgsMatured', document.MAINFORM.OTHER_CHG.value, document.MAINFORM.URP_CCY.value, document.MAINFORM.URP_CCY.value, 'N', CABLEAC + ';' + document.MAINFORM.PRODUCT_CODE.value);
        }*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PRODUCT_CODE = function() {
    try {

        if (document.MAINFORM.DEBT_INSMT_TYPE.value == '5') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CloseURP_SYF_FFIT_PRODUCT_CODE_0', '1');
        } else {
            if (document.MAINFORM.DEBT_INSMT_TYPE.value != '') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CloseURP_SYF_FFIT_PRODUCT_CODE_1', '1');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.URP_CLOSE_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID; // Utility Auto Fix Comments
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
            SYF_FFIT_COMMIT_DAYS();
            SYF_FFIT_URP_AMT();
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

            arr = ['CLOSE_URP_CHG', 'OTHER_CHG_MATURED'];
            amt = document.MAINFORM.PMT_BAL.value;
            ccy = document.MAINFORM.URP_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
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
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_URP_AMT = function() {
    try {

        /*
if((document.MAINFORM.COMMIT_TERM_FLAG.value=='1'||document.MAINFORM.COMMIT_TERM_FLAG.value=='2')&&(document.MAINFORM.COMMIT_DAYS.value>0))
{
getCommitmentFEE('CloseURPChg(CloseURP)','CloseURPChg',document.MAINFORM.TEMP_AMT.value,document.MAINFORM.URP_FEE_RT.value,document.MAINFORM.COMMIT_DAYS.value,document.MAINFORM.URP_CCY.value,document.MAINFORM.URP_CCY.value,'Y',document.MAINFORM.VENT_TEMP_NO1_S.value+';'+document.MAINFORM.PRODUCT_CODE.value);
}
else
{
getCommitmentFEE('CloseURPChg(CloseURP)','CloseURPChg',document.MAINFORM.TEMP_AMT.value,document.MAINFORM.URP_FEE_RT.value,document.MAINFORM.COMMIT_DAYS.value,document.MAINFORM.URP_CCY.value,document.MAINFORM.URP_CCY.value,'N',document.MAINFORM.VENT_TEMP_NO1_S.value+';'+document.MAINFORM.PRODUCT_CODE.value);
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_TEMP_NO1 = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CloseURP_SYF_FFIT_VENT_TEMP_NO1_2', '1');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_DAYS_onchange = function(event) {
    try {
        SYF_FFIT_URP_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_TERM_FLAG_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_DAYS();
        SYF_FFIT_URP_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_VENT_TEMP_NO1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_OTHER_CHG_onchange = function(event) {
    try {
        SYF_FFIT_OTHER_CHG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRODUCT_CODE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRX_DT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseURP.js", e);
    }
}