var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_ACPT_CCY = function() {
    try {

        if ((document.MAINFORM.ACPT_CCY.value != '') || (document.MAINFORM.ACPT_AMT.value != '')) {
            document.MAINFORM.ACPT_AMT.value = SYT_CCY_AMT(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        }
        document.MAINFORM.FINC_BAL.value = document.MAINFORM.FINC_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACTUAL_COST_RT = function() {
    try {

        if (document.MAINFORM.FFT_TRF_FLG.value == '1') {
            document.MAINFORM.ACTUAL_COST_RT.value = '0';
        } else {
            document.MAINFORM.ACTUAL_COST_RT.value = document.MAINFORM.LIBOR_RT.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACTUAL_REVENUE = function() {
    try {

        var A; // Utility Auto Fix Comments
        var B; // Utility Auto Fix Comments
        if (document.MAINFORM.FFT_TRF_FLG.value != '1') {
            if ((document.MAINFORM.COMMIT_START_DT.value != '') && (document.MAINFORM.FINC_DT.value != '') && (SYS_BeFloat(document.MAINFORM.TEMP_INT1.value) > 0)) {
                A = getFeeField('FincCommitChg', 'NOW');
                if (A[8] == 'TRANSACTION') {
                    document.MAINFORM.TEMP_AMT.value = A[2];
                } else {
                    document.MAINFORM.TEMP_AMT.value = '0';
                }
            }
            B = getFeeField('FFITCHG', 'NOW');
            if (B[8] == 'TRANSACTION') {
                if (B[3] == document.MAINFORM.FINC_CCY.value) {
                    document.MAINFORM.TEMP_AMT1.value = B[4];
                } else if (document.MAINFORM.FINC_CCY.value == 'USD') {
                    document.MAINFORM.TEMP_AMT1.value = B[2];
                } else {
                    document.MAINFORM.TEMP_AMT1.value = B[2];
                    document.MAINFORM.TEMP_AMT1.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT1.value) * document.MAINFORM.SELLING_USRT.value / document.MAINFORM.BUYING_RT.value;
                }
            } else {
                document.MAINFORM.TEMP_AMT1.value = '0';
            }
            document.MAINFORM.ACTUAL_REVENUE.value = SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value) + SYS_BeFloat(document.MAINFORM.RCVA_INT.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT1.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT3.value);
        } else {
            document.MAINFORM.ACTUAL_REVENUE.value = '0';
        }
        document.MAINFORM.ACTUAL_REVENUE.value = SYT_CCY_AMT('USD', document.MAINFORM.ACTUAL_REVENUE.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AUTH_POINT1 = function() {
    try {

        var sEQAMT; // Utility Auto Fix Comments
        SYS_GetExchangeRate_Boc(document.MAINFORM.FINC_CCY.value, 'USD', 'Selling Rate', 'TEMP_CHAR18');
        SYS_GetExchangeRate_Boc('USD', 'USD', 'Buying Rate', 'TEMP_CHAR19');
        sEQAMT = SYS_BeFloat(document.MAINFORM.NET_CR_AMT1.value) * document.MAINFORM.TEMP_CHAR18.value / document.MAINFORM.TEMP_CHAR19.value;
        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing2_SYF_FFIT_AUTH_POINT1_0', '1');
        if (sEQAMT == '0') {
            document.MAINFORM.AUTH_POINT1.value = '0';
        }
        if (sEQAMT > '0' && sEQAMT <= SYS_BeFloat(document.MAINFORM.TEMP_AMT4.value)) {
            document.MAINFORM.AUTH_POINT1.value = '1';
        }
        if (sEQAMT > SYS_BeFloat(document.MAINFORM.TEMP_AMT4.value) && sEQAMT <= SYS_BeFloat(document.MAINFORM.TEMP_AMT5.value)) {
            document.MAINFORM.AUTH_POINT1.value = '2';
        }
        if (sEQAMT > SYS_BeFloat(document.MAINFORM.TEMP_AMT5.value)) {
            document.MAINFORM.AUTH_POINT1.value = '3';
        }

        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing2_SYF_FFIT_AUTH_POINT1_1', '1');
        if (sEQAMT > SYS_BeFloat(document.MAINFORM.TEMP_AMT11.value) && sEQAMT <= SYS_BeFloat(document.MAINFORM.TEMP_AMT4.value)) {
            document.MAINFORM.AUTH_POINT2.value = '4';
        } else if (sEQAMT > SYS_BeFloat(document.MAINFORM.TEMP_AMT4.value)) {
            document.MAINFORM.AUTH_POINT2.value = '5';
        } else {
            document.MAINFORM.AUTH_POINT2.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BAL_FFT = function() {
    try {

        var A; // Utility Auto Fix Comments
        var B; // Utility Auto Fix Comments
        A = getFeeField('FincCommitChg', 'NOW');
        if (A[8] == 'TRANSACTION' && SYS_BeFloat(A[4]) > 0) {
            document.MAINFORM.DISTRICT_CODE.value = A[3];
            document.MAINFORM.BAL_FFT.value = A[4];
        } else {
            document.MAINFORM.BAL_FFT.value = document.MAINFORM.TEMP_AMT2.value;
        }
        if (document.MAINFORM.DISTRICT_CODE.value == '') {
            document.MAINFORM.DISTRICT_CODE.value = document.MAINFORM.FINC_CCY.value;
        }
        B = getFeeField('FFITCHG', 'NOW');
        if (B[8] == 'TRANSACTION') {
            document.MAINFORM.TTL_FINANCE_FEE.value = B[2];
        } else {
            document.MAINFORM.TTL_FINANCE_FEE.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMITFEE = function() {
    try {

        if (document.MAINFORM.COMMIT_START_DT.value != '') {
            document.MAINFORM.TEMP_INT1.value = SYS_GetSubDays(document.MAINFORM.COMMIT_START_DT.name, document.MAINFORM.FINC_DT.name);
        }
        if ((SYS_BeFloat(document.MAINFORM.TEMP_INT1.value) > 0) && (SYS_BeFloat(document.MAINFORM.DLY_COMMIT_FEE.value) > 0)) {
            getCommitmentFEE('Commitment Chg(Financing)', 'FincCommitChg', document.MAINFORM.COMMIT_AMT.value, document.MAINFORM.COMMIT_FEE_RT.value, document.MAINFORM.TEMP_INT1.value, document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.COMMIT_CCY.value, 'Y', document.MAINFORM.TEMP_ADD4_S.value + ';' + document.MAINFORM.FINC_TYPE.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CheckX202_32DT = function() {
    try {

        var subDays; // Utility Auto Fix Comments
        if (document.MAINFORM.TEMP_FLG1.value == '2') {
            subDays = SYS_GetSubDays(document.MAINFORM.X202_VALUE_DT_32A.name, document.MAINFORM.TRX_DT.name);
            if (subDays > 0) {
                alert('MT202 32A Date should be later than TRX Date!');
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FINANCE_FLG.value = '1';
        SYF_FFIT_TEMP_AMT6();
        document.MAINFORM.FINC_CPS_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COMMIT_CPS_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        if (document.MAINFORM.TEMP_FLG1.value == '2') {
            document.MAINFORM.TEMP_CHAR2.value = INTERFACE_GL_TRX_CODE;
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing2_ConfirmBusinessCall_2', '1');
        } else {
            document.MAINFORM.COVER_BR_ID.value = document.MAINFORM.GTS_BR_ID.value;
            document.MAINFORM.TEMP_CHAR2.value = INTERFACE_BANCS_BGLCR_TRX_CODE;
        }
        document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.FINC_TYPE.value;
        document.MAINFORM.FINC_RISK_LEVEL.value = '00';
        //getLedgCode(document.MAINFORM.C_MAIN_REF.value,'1002');
        //ConfirmBusinessCall_COMM();
        //SYT_Check_AMT();
        SYT_CHG_VOUCHER();
        SYF_FFIT_AUTH_POINT1();
        if (document.MAINFORM.TEMP_FLG1.value == '1') {
            document.MAINFORM.TEMP_AMT13.value = 0;
        } else {
            document.MAINFORM.TEMP_AMT13.value = document.MAINFORM.NET_CR_AMT1.value;
        } if (document.MAINFORM.TEMP_FLG5.value == 'D') {
            document.MAINFORM.TEMP_CHAR3.value = INTERFACE_BANCS_DR_TRX_CODE;
        } else {
            document.MAINFORM.TEMP_CHAR3.value = INTERFACE_BANCS_CR_TRX_CODE;
        }
        if (document.MAINFORM.TEMP_FLG6.value == 'D') {
            document.MAINFORM.TEMP_CHAR6.value = INTERFACE_BANCS_DR_TRX_CODE;
        } else {
            document.MAINFORM.TEMP_CHAR6.value = INTERFACE_BANCS_CR_TRX_CODE;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_CheckX202_32DT()) {
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FFT_CHG_FLG = function() {
    try {

        if (document.MAINFORM.FFT_CHG_FLG.value == '1') {
            CHG_INOUT_FLAG('IN', document.MAINFORM.FINC_CCY.value);
        } else {
            CHG_INOUT_FLAG('OUT', document.MAINFORM.FINC_CCY.value);

        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FincInitValue = function() {
    try {

        FincInitValue(document.MAINFORM.SELL_BK_ID.value, document.MAINFORM.C_MAIN_REF.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FincTrxCcyAmt = function() {
    try {

        document.MAINFORM.TEMP_CHAR1.value = document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.TEMP_AMT2.value = document.MAINFORM.FINC_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GetComm = function() {
    try {

        /*
GetComm('FFITCHG','','','',document.MAINFORM.FINC_CCY.value,'Y',document.MAINFORM.VENT_TEMP_NO3_S.value+';'+document.MAINFORM.FINC_TYPE.value);
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.FINC_AC_NO, 'O', 'N');
        document.MAINFORM.FINC_PCT.value = '100';
        document.MAINFORM.FINC_BASIC_DAYS.value = 360;
        document.MAINFORM.FINC_EQ_AMT.value = document.MAINFORM.FINC_AMT.value;
        document.MAINFORM.EVENT_TYPE.value = 'FFTFinancing2';
        SYF_FFIT_ACPT_CCY();
        document.MAINFORM.TEMP_AMT10.value = document.MAINFORM.COMMIT_BAL.value;
        if (document.MAINFORM.TEMP_FLG2.value == '1') {
            document.MAINFORM.FINC_TYPE_DESC.value = 'FINCFFITLC';
        } else if (document.MAINFORM.TEMP_FLG2.value == '2') {
            document.MAINFORM.FINC_TYPE_DESC.value = 'FINCFFITCL';
        } else if (document.MAINFORM.TEMP_FLG2.value == '3') {
            document.MAINFORM.FINC_TYPE_DESC.value = 'FINCFFITLCEJSC';
        } else if (document.MAINFORM.TEMP_FLG2.value == '3') {
            document.MAINFORM.FINC_TYPE_DESC.value = 'FINCFFITCLEJSC';
        } else if (document.MAINFORM.TEMP_FLG2.value == '3') {
            document.MAINFORM.FINC_TYPE_DESC.value = 'FINCFFITGNEJSC';
        }
        document.MAINFORM.FINC_TRX_CCY.value = document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.FINC_TRX_AMT.value = document.MAINFORM.FINC_AMT.value;
        document.MAINFORM.FINC_INIT_FLG.value = '2';
        document.MAINFORM.INT_MTHD.value = '1';
        SYT_ChangeFldClass(document.MAINFORM.INT_MTHD, 'M', 'N');
        if (document.MAINFORM.LIBOR_RT.value == 0) {
            document.MAINFORM.FINC_RT.value = document.MAINFORM.MARGIN_RT.value;
        }
        document.MAINFORM.FINC_BILL_DUE_DT.value = document.MAINFORM.MATURITY.value;
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
        document.MAINFORM.X202_BENE_BKID_58A.value = document.MAINFORM.SELL_BK_ID.value;
        EEHtml.fireEvent(document.MAINFORM.X202_BENE_BKID_58A, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_NET_CR_AMT1 = function() {
    try {

        //document.MAINFORM.NET_CR_AMT1.value=SYS_BeFloat(document.MAINFORM.FINC_NET_AMT.value)-SYS_BeFloat(document.MAINFORM.TTL_FOR_CHG_AMT.value);
        SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO10, 'O', 'N');
        document.MAINFORM.X202_AMT_32A.value = '0';
        document.MAINFORM.TEMP_AMT38.value = '0';

        if (document.MAINFORM.TEMP_FLG1.value == '2') {
            document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.NET_CR_AMT1.value;
            document.MAINFORM.X202_AMT_32A.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        } else if (document.MAINFORM.TEMP_FLG1.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO10, 'M', 'N');
            document.MAINFORM.TEMP_AMT38.value = document.MAINFORM.NET_CR_AMT1.value;
            document.MAINFORM.TEMP_AMT38.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        } else {
            document.MAINFORM.X202_AMT_32A.value = '0';
            document.MAINFORM.TEMP_AMT38.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PRE_OVS_CHG = function() {
    try {

        if (document.MAINFORM.MARGIN_INT_FLG.value == '1') {
            document.MAINFORM.PRE_OVS_CHG.value = document.MAINFORM.PRE_FINC_MARGIN.value;
            getOtherFEE('Other Commitment Chg', 'MarginFFT', document.MAINFORM.PRE_OVS_CHG.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value);
            document.MAINFORM.MARGIN_RT.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.MARGIN_RT, 'P', 'Y');

        } else {
            if (document.MAINFORM.MARGIN_INT_FLG.value == '2') {
                document.MAINFORM.PRE_OVS_CHG.value = '0';
                SYT_ChangeFldClass(document.MAINFORM.MARGIN_RT, 'O', 'Y');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
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
            //SYF_FFIT_TEMP_FLG1();
            FincFieldEvent();
            SYT_CommPageInit();
            SYF_FFIT_GetComm();
            SYF_FFIT_COMMITFEE();
            SYF_FFIT_finc_changefield();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
            SYF_FFIT_finc_changefield();
        }
        SYT_relAuthBlack();
        SYT_DisableDivClass("B_div");
        Chg.Screen.mapLocalCust("SELL_BK_ID", "SELL_BK_NM");
        Chg.Screen.mapForeignCust("EXPT_ID", "EXPT_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            arr = ['FFIT_CHG', 'FINC_COMM_CHG', 'CABLE_CHG', 'POST', 'PRE_DEDUCTED_CHG'];
            amt = document.MAINFORM.COMMIT_BAL.value;
            ccy = document.MAINFORM.COMMIT_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
            SYF_FFIT_finc_changefield();
        }
        document.MAINFORM.X202_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.X202_CCY_32A.value, SYS_BeFloat(document.MAINFORM.FINC_TRX_AMT.value) - SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value));
        SYT_ChangeFldClass_New('X202_AMT_32A', 'P');
        CHG_DefCharge_chargeAtOnchange();
        SYF_FFIT_TEMP_FLG1();
        if (document.MAINFORM.FINC_DAYS.value == '0') {
            document.MAINFORM.FINC_DAYS.value = SYS_GetSubDays(document.MAINFORM.FINC_DT.name, document.MAINFORM.FINC_BILL_DUE_DT.name);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PreDeductedCHG = function() {
    try {

        document.MAINFORM.PRE_OVS_CHG.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.PRE_OVS_CHG.value);
        if (SYS_BeFloat(document.MAINFORM.PRE_OVS_CHG.value) > 0) {
            getOtherFEE('PreDeductedCHG', 'PreDeductedCHG', document.MAINFORM.PRE_OVS_CHG.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'Y', FFTPREFEE + ';' + document.MAINFORM.FINC_TYPE.value);
        } else {
            getOtherFEE('PreDeductedCHG', 'PreDeductedCHG', document.MAINFORM.PRE_OVS_CHG.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'N', FFTPREFEE + ';' + document.MAINFORM.FINC_TYPE.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
        /*
if(SYS_FUNCTION_TYPE=='PM' || SYS_FUNCTION_TYPE=='EC' )
{
//InitFieldEvent_COMM();
//GetFee('FFITCHG','BOCPC001','NAN');
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT3 = function() {
    try {

        var discRate; // Utility Auto Fix Comments
        var int1; // Utility Auto Fix Comments
        var int2; // Utility Auto Fix Comments
        var nv; // Utility Auto Fix Comments
        var period; // Utility Auto Fix Comments
        if (document.MAINFORM.INT_MODE.value == '1') {
            document.MAINFORM.TEMP_AMT3.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) * SYS_BeFloat(document.MAINFORM.ACTUAL_COST_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAY.value) / 100;
        } else if (document.MAINFORM.INT_MODE.value == '2') {
            discRate = SYS_BeFloat(document.MAINFORM.ACTUAL_COST_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / 360 / 100;
            nv = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) / (1 + discRate);
            document.MAINFORM.TEMP_AMT3.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) - nv;
        } else if (document.MAINFORM.INT_MODE.value == '3') {
            period = Math.floor(SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / 365);
            discRate = SYS_BeFloat(document.MAINFORM.ACTUAL_COST_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAY.value) / 100; // Utility Auto Fix Comments
            int1 = Math.pow((1 + SYS_BeFloat(document.MAINFORM.ACTUAL_COST_RT.value) * 365 / 360 / 100), period);
            int2 = (1 + SYS_BeFloat(document.MAINFORM.ACTUAL_COST_RT.value) * (SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) - period * 365) / 100 / 360);
            nv = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) / (int1 * int2); // Utility Auto Fix Comments
            document.MAINFORM.TEMP_AMT3.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) - nv;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT6 = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT10.value) > 0) {
            document.MAINFORM.TEMP_AMT6.value = document.MAINFORM.TEMP_AMT10.value;

            if ((SYS_BeFloat(document.MAINFORM.TEMP_AMT6.value) - SYS_BeFloat(document.MAINFORM.FINC_AMT.value)) > 0) {
                document.MAINFORM.TEMP_AMT6.value = document.MAINFORM.FINC_AMT.value;
            }
            document.MAINFORM.COMMIT_BAL.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT10.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT6.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT7 = function() {
    try {

        document.MAINFORM.TEMP_AMT7.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT7.value);
        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT7.value) > 0) {
            getOtherFEE('CABLE', 'CABLE', document.MAINFORM.TEMP_AMT7.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'Y', CABLEAC + ';' + document.MAINFORM.FINC_TYPE.value);
        } else {
            getOtherFEE('CABLE', 'CABLE', document.MAINFORM.TEMP_AMT7.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'N', CABLEAC + ';' + document.MAINFORM.FINC_TYPE.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT8 = function() {
    try {

        document.MAINFORM.TEMP_AMT8.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT8.value);
        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT8.value) > 0) {
            getOtherFEE('POST', 'POST', document.MAINFORM.TEMP_AMT8.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'Y', CABLEAC + ';' + document.MAINFORM.FINC_TYPE.value);
        } else {
            getOtherFEE('POST', 'POST', document.MAINFORM.TEMP_AMT8.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'N', CABLEAC + ';' + document.MAINFORM.FINC_TYPE.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR4 = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.PRE_DEDUCTED_CHG.value) > 0) {
            document.MAINFORM.TEMP_CHAR4.value = document.MAINFORM.C_MAIN_REF.value + 'S0';
            SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'M', 'N');
        } else {
            document.MAINFORM.TEMP_CHAR4.value = '';
            document.MAINFORM.REMARK_COLL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_FLG1 = function() {
    try {

        var tdMT202; // Utility Auto Fix Comments
        var tdAccount;
        tdMT202 = EEHtml.getElementById('F');
        tdAccount = EEHtml.getElementById('I');
        if (document.MAINFORM.TEMP_FLG1.value == '2') {
            document.MAINFORM.TEMP_CHAR11.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR11, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_ADD4, 'P', 'N');
            document.MAINFORM.TEMP_ADD4.value = GL9992;
            tdMT202.style.display = '';
            tdAccount.style.display = 'none';
            document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.TRX_DT.value;
            document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.FINC_CCY.value;
            document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;

            SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'P', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR11, 'O', 'N');
            if (document.MAINFORM.TEMP_FLG1.value == '3') {
                SYT_ChangeFldClass(document.MAINFORM.TEMP_ADD4, 'M', 'N');
                document.MAINFORM.MNL_MSG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
                tdMT202.style.display = 'none';
                tdAccount.style.display = 'none';
                SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'O');
                SYT_ChangeFldClass(document.MAINFORM.IS_GPI_MEMBER, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKMED_B2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X202_TAG_B2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X202_BENEBKMED_58A, 'O');
                SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKNM_58A, 'O');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.TEMP_ADD4, 'P', 'N');
            }
            document.MAINFORM.X202_VALUE_DT_32A.value = '';
            document.MAINFORM.X202_CCY_32A.value = '';
            document.MAINFORM.X202_TRX_REF_NO_20.value = '';

            SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'O', 'N');
        }
        if (document.MAINFORM.TEMP_FLG1.value == '1') {
            tdAccount.style.display = '';
            tdMT202.style.display = 'none';
            document.MAINFORM.TEMP_ADD4.value = GL9992;
            document.MAINFORM.TEMP_AMT38.value = document.MAINFORM.FINC_AMT.value;
            SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'O');
            SYT_ChangeFldClass(document.MAINFORM.IS_GPI_MEMBER, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKMED_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENEBKMED_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKNM_58A, 'O');
        }
        SYF_FFIT_NET_CR_AMT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_TEMP_NO1 = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing2_SYF_FFIT_VENT_TEMP_NO1_3', '1');


        if (document.MAINFORM.DEBT_INSMT_TYPE.value == '5') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing2_SYF_FFIT_VENT_TEMP_NO1_4', '1');
        } else {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing2_SYF_FFIT_VENT_TEMP_NO1_5', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X202_1_B2 = function() {
    try {

        if (document.MAINFORM.X202_1_B2.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing2_SYF_FFIT_X202_1_B2_6', '1');
        } else {
            document.MAINFORM.TEMP_NM2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_finc_changefield = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.FINC_DUE_DT, 'M', 'N');
        if (SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) > '360') {
            SYT_ChangeFldClass(document.MAINFORM.LIBOR_RT, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LIBOR_RT, 'P', 'N');
        }
        if (document.MAINFORM.MULTI_DUE_DT_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.PRE_FINC_INT, 'M', 'N');
        }

        SYF_FFIT_NET_CR_AMT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_inqFinDNA = function() {
    try {

        var SHeader; // Utility Auto Fix Comments
        var arrayEntry; // Utility Auto Fix Comments
        var bk_add_obj; // Utility Auto Fix Comments
        var bk_nm_obj; // Utility Auto Fix Comments
        var bk_sw_obj; // Utility Auto Fix Comments
        var cust_add_obj; // Utility Auto Fix Comments
        var cust_nm_obj; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        SHeader = new Array(6);
        SHeader[0] = '2';
        SHeader[1] = document.MAINFORM.C_MAIN_REF.value;
        SHeader[2] = document.MAINFORM.BLACK_INSTYP.value;
        SHeader[3] = document.MAINFORM.CLERK_ID.value;
        SHeader[4] = document.MAINFORM.GTS_BR_ID.value;
        SHeader[5] = '2';
        arrayEntry = new Array();
        i = -1;
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
        inqFinDNA(SHeader, arrayEntry);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_AMT_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_CCY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_CCY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACTUAL_COST_RT_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_AMT3();
        EEHtml.fireEvent(document.MAINFORM.TEMP_AMT3, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_FAV_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_AMT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_FEE_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_START_DT_onchange = function(event) {
    try {
        SYF_FFIT_FINC_AMT_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_AC_NO_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_AMT_onchange = function(event) {
    try {
        SYF_FFIT_NET_CR_AMT1();
        SYF_FFIT_finc_changefield();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DAYS_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DUE_DT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_NET_AMT_onchange = function(event) {
    try {
        SYF_FFIT_NET_CR_AMT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GTS_BR_ID_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_INT_MTHD_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LIBOR_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MARGIN_INT_FLG_onchange = function(event) {
    try {
        SYF_FFIT_PRE_OVS_CHG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_NET_CR_AMT1_onchange = function(event) {
    try {
        SYF_FFIT_AUTH_POINT1();
        SYF_FFIT_NET_CR_AMT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_DEDUCTED_CHG_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_CHAR4();
        SYF_FFIT_PreDeductedCHG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_FINC_INT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_OVS_CHG_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_CHAR4();
        SYF_FFIT_PreDeductedCHG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SELLING_CUST_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SELL_BK_REF_onchange = function(event) {
    try {
        if (document.MAINFORM.SELL_BK_REF.value != '') {
            document.MAINFORM.X202_RELATEDNO_21.value = document.MAINFORM.SELL_BK_REF.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_ADD4_onchange = function(event) {
    try {
        document.MAINFORM.OVER_AC_NO.value = document.MAINFORM.TEMP_ADD4.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT11_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT3_onchange = function(event) {
    try {
        SYF_FFIT_ACTUAL_REVENUE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT5_onchange = function(event) {
    try {
        SYF_FFIT_NET_CR_AMT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT7_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_AMT7();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT8_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_AMT8();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_CHAR1_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG1_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_FLG1();
        if (document.MAINFORM.TEMP_FLG1.value == '3') {
            document.MAINFORM.TEMP_ADD4.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG2_onchange = function(event) {
    try {
        //SYF_FFIT_VENT_TEMP_NO1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_INT1_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TTL_FINANCE_FEE_onchange = function(event) {
    try {
        SYF_FFIT_NET_CR_AMT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_VENT_TEMP_NO1_S_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202SENDCORRMED53A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202SENDCORRMED53A.value == "SWIFT auth") {
            SYT_ChangeFldClass(document.MAINFORM.X202_SENDCORRSW53A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_53A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD153A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD253A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD353A, 'O');
        } else if (document.MAINFORM.X202SENDCORRMED53A.value == "Telex") {
            SYT_ChangeFldClass(document.MAINFORM.Telex_3, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD153A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD253A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD353A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_SENDCORRSW53A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_53A, 'O');
        } else if (document.MAINFORM.X202SENDCORRMED53A.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD153A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD253A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD353A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_SENDCORRSW53A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_53A, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD153A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD253A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202SENDCORADD353A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.Telex_3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_SENDCORRSW53A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_53A, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ACC_BKMED57A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ACC_BKMED57A.value == "SWIFT auth") {
            SYT_ChangeFldClass(document.MAINFORM.X202_ACC_BKSW_57A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_57A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_6, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD1_57A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD2_57A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD3_57A, 'O');
        } else if (document.MAINFORM.X202_ACC_BKMED57A.value == "Telex") {
            SYT_ChangeFldClass(document.MAINFORM.Telex_6, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD1_57A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD2_57A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD3_57A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACC_BKSW_57A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_57A, 'O');
        } else if (document.MAINFORM.X202_ACC_BKMED57A.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD1_57A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD2_57A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD3_57A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_6, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACC_BKSW_57A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_57A, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD1_57A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD2_57A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACCBKADD3_57A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.Telex_6, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ACC_BKSW_57A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_57A, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
            SYS_GetCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
        } else {
            document.MAINFORM.X202_ADV_BKNM_B2.value = ''
            document.MAINFORM.X202_ADV_BKADD1_B2.value = ''
            document.MAINFORM.X202_ADV_BKADD2_B2.value = ''
            document.MAINFORM.X202_ADV_BKADD3_B2.value = ''
            document.MAINFORM.X202_ADV_BKMED_B2.value = ''
            document.MAINFORM.X202_ADV_BKSW_B2.value = ''
            document.MAINFORM.X202_TAG_B2.value = ''
            document.MAINFORM.Telex_1.value = ''
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ADV_BKMED_B2_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ADV_BKMED_B2.value == "SWIFT auth") {
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD1_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD2_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD3_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.Telex_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_B2, 'M');
        } else if (document.MAINFORM.X202_ADV_BKMED_B2.value == "Telex") {
            SYT_ChangeFldClass(document.MAINFORM.Telex_1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD1_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD2_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD3_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_B2, 'O');
        } else if (document.MAINFORM.X202_ADV_BKMED_B2.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD1_B2, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD2_B2, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD3_B2, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_B2, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD1_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD2_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKADD3_B2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.Telex_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_B2, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_AMT_32A_onchange = function(event) {
    try {
        document.MAINFORM.X202_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.X202_CCY_32A.value, document.MAINFORM.X202_AMT_32A.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_BENEBKMED_58A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_BENEBKMED_58A.value == "SWIFT auth") {
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_58A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_7, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD2_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD3_58A, 'O');
        } else if (document.MAINFORM.X202_BENEBKMED_58A.value == "Telex") {
            SYT_ChangeFldClass(document.MAINFORM.Telex_7, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD2_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD3_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_58A, 'O');
        } else if (document.MAINFORM.X202_BENEBKMED_58A.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD2_58A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD3_58A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_7, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_58A, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD2_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD3_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.Telex_7, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_58A, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
            SYS_GetCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = ''
            document.MAINFORM.X202BENEBKADD1_58A.value = ''
            document.MAINFORM.X202BENEBKADD2_58A.value = ''
            document.MAINFORM.X202BENEBKADD3_58A.value = ''
            document.MAINFORM.X202_BENEBKMED_58A.value = ''
            document.MAINFORM.X202_BENE_BKSW_58A.value = ''
            document.MAINFORM.X202_TAG_58A.value = ''
            document.MAINFORM.X202_BENEBKACNO58A.value = ''
            document.MAINFORM.Telex_7.value = ''
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_MEDI_BKMED56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_MEDI_BKMED56A.value == "SWIFT auth") {
            SYT_ChangeFldClass(document.MAINFORM.X202_MEDI_BKSW_56A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_56A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_5, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD1_56A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD2_56A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD3_56A, 'O');
        } else if (document.MAINFORM.X202_MEDI_BKMED56A.value == "Telex") {
            SYT_ChangeFldClass(document.MAINFORM.Telex_5, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD1_56A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD2_56A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD3_56A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_MEDI_BKSW_56A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_56A, 'O');
        } else if (document.MAINFORM.X202_MEDI_BKMED56A.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD1_56A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD2_56A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD3_56A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_5, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X202_MEDI_BKSW_56A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_56A, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD1_56A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD2_56A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202MEDIBKADD3_56A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.Telex_5, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_MEDI_BKSW_56A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_56A, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ORDBK_MED_52A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ORDBK_MED_52A.value == "SWIFT auth") {
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBK_SW_52A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_52A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD1_52A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD2_52A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD3_52A, 'O');
        } else if (document.MAINFORM.X202_ORDBK_MED_52A.value == "Telex") {
            SYT_ChangeFldClass(document.MAINFORM.Telex_2, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD1_52A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD2_52A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD3_52A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBK_SW_52A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_52A, 'O');
        } else if (document.MAINFORM.X202_ORDBK_MED_52A.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD1_52A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD2_52A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD3_52A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBK_SW_52A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_52A, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD1_52A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD2_52A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBKADD3_52A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.Telex_2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_ORDBK_SW_52A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_52A, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_RECCORRMED54A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_RECCORRMED54A.value == "SWIFT auth") {
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORRSW_54A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_54A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_4, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD154A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD254A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD354A, 'O');
        } else if (document.MAINFORM.X202_RECCORRMED54A.value == "Telex") {
            SYT_ChangeFldClass(document.MAINFORM.Telex_4, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD154A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD254A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD354A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORRSW_54A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_54A, 'O');
        } else if (document.MAINFORM.X202_RECCORRMED54A.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD154A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD254A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD354A, 'M');
            SYT_ChangeFldClass(document.MAINFORM.Telex_4, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORRSW_54A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_54A, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD154A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD254A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORADD354A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.Telex_4, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_RECCORRSW_54A, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X202_TAG_54A, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_VALUE_DT_32A_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing2.js", e);
    }
}