var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_AMT = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.CR_AMT.value != '') {
            document.MAINFORM.CR_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.CR_AMT.value);
            document.MAINFORM.TEMP_AMT4.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT4.value);
        }
        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.LONG_AMT.value != '') {
            document.MAINFORM.LONG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.LONG_AMT.value);
        }
        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.SHORT_AMT.value != '') {
            document.MAINFORM.SHORT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.SHORT_AMT.value);
        }
        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.INT_REVENUE_DUE.value != '') {
            document.MAINFORM.INT_REVENUE_DUE.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.INT_REVENUE_DUE.value);
        }
        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.TEMP_AMT.value != '') {
            document.MAINFORM.TEMP_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT.value);
        }
        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.OVS_CHG.value != '') {
            document.MAINFORM.OVS_CHG.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.OVS_CHG.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_APPL_COMM = function() {
    try {

        if ((SYS_BeFloat(document.MAINFORM.TTL_FOR_CHG_AMT.value) > '0') || (SYS_BeFloat(document.MAINFORM.TTL_CUST_CHG_AMT.value) > '0')) {
            document.MAINFORM.APPL_COMM.value = SYS_BeFloat(document.MAINFORM.TTL_CUST_CHG_AMT.value) + SYS_BeFloat(document.MAINFORM.TTL_FOR_CHG_AMT.value);
        } else {
            document.MAINFORM.APPL_COMM.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CHANGEFIELD = function() {
    try {

        if (document.MAINFORM.TEMP_FLG3.value == '1' || document.MAINFORM.TEMP_FLG3.value == '4' || document.MAINFORM.TEMP_FLG3.value == '5' || document.MAINFORM.TEMP_FLG3.value == '6') {
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'P', 'N');
        } else if (document.MAINFORM.TEMP_FLG3.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'P', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'P', 'N');
        }
        if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_LONG_FLG.value == '2')) {
            SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'M', 'N');
        }
        if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_SHORT_FLG.value == '2')) {
            SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'M', 'N');
        }
        if ((document.MAINFORM.FFT_TYPE.value == '2') && (document.MAINFORM.CR_LONG_FLG.value == '1')) {
            SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CHECK_842_NO = function() {
    try {

        if (document.MAINFORM.TEMP_FLG3.value == '5' && document.MAINFORM.TEMP_CHAR10.value == '') {
            SYS_CheckError(document.MAINFORM.TEMP_CHAR10, 'Please input the transfer exchange settlement 842No.');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COUNTER_CNTY_CODE = function() {
    try {

        if (document.MAINFORM.CR_LONG_FLG.value == '4') {
            SYT_GetCntyCode(document.MAINFORM.X202_ADV_BKSW_B2.value, document.MAINFORM.COUNTER_CNTY_CODE.name);
        } else {
            document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COVER_BGL_ACNO = function() {
    try {

        if (document.MAINFORM.TEMP_FLG3.value == '1' || document.MAINFORM.TEMP_FLG3.value == '6') {
            document.MAINFORM.CR_AC_NO.value = GL9992;
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'P', 'N');
            document.MAINFORM.COVER_BGL_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'P', 'N');
        } else if (document.MAINFORM.TEMP_FLG3.value == '4') {
            document.MAINFORM.CR_AC_NO.value = '9991';
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'P', 'N');
            document.MAINFORM.COVER_BGL_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'P', 'N');
        } else if (document.MAINFORM.TEMP_FLG3.value == '5') {
            document.MAINFORM.CR_AC_NO.value = GL8421;
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'P', 'N');
            document.MAINFORM.COVER_BGL_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'P', 'N');
        } else {
            document.MAINFORM.CR_AC_NO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'M', 'N');
            document.MAINFORM.COVER_BGL_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COVER_DRAC_BUSI_TYPE = function() {
    try {

        document.MAINFORM.COVER_AC_NO_CR.value = document.MAINFORM.LONG_AMT_AC_NO.value;
        document.MAINFORM.COVER_AMT_CR.value = document.MAINFORM.LONG_AMT.value;
        document.MAINFORM.COVER_CCY_CR.value = document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.COVER_BR_ID2.value = document.MAINFORM.GTS_BR_ID.value;
        document.MAINFORM.COVER_CRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        if (document.MAINFORM.TEMP_FLG2.value == '1') {
            document.MAINFORM.COVER_BR_ID2.value = document.MAINFORM.GTS_BR_ID.value;
            document.MAINFORM.COVER_CRAC_BUSI_TYPE.value = INTERFACE_BANCS_CR_TRX_CODE;
        } else if (document.MAINFORM.TEMP_FLG2.value == '2') {
            document.MAINFORM.COVER_CRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_COVER_DRAC_BUSI_TYPE_0', '1');
        } else if (document.MAINFORM.TEMP_FLG2.value == '3') {
            document.MAINFORM.COVER_CRAC_BUSI_TYPE.value = INTERFACE_BANCS_BGLCR_TRX_CODE;
            document.MAINFORM.COVER_BR_ID2.value = document.MAINFORM.GTS_BR_ID.value;
        }
        document.MAINFORM.COVER_AC_NO_DR.value = document.MAINFORM.CR_AC_NO.value;
        document.MAINFORM.COVER_AMT_DR.value = document.MAINFORM.CR_AMT.value;
        document.MAINFORM.COVER_CCY_DR.value = document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.FINC_TYPE.value;
        if (document.MAINFORM.TEMP_FLG3.value == '1' || document.MAINFORM.TEMP_FLG3.value == '4' || document.MAINFORM.TEMP_FLG3.value == '6') {
            document.MAINFORM.COVER_DRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_COVER_DRAC_BUSI_TYPE_1', '1');
        } else if (document.MAINFORM.TEMP_FLG3.value == '2') {
            document.MAINFORM.COVER_DRAC_BUSI_TYPE.value = INTERFACE_BANCS_BGLDR_TRX_CODE;
            document.MAINFORM.COVER_BR_ID.value = document.MAINFORM.GTS_BR_ID.value;
        } else if (document.MAINFORM.TEMP_FLG3.value == '3') {
            document.MAINFORM.COVER_DRAC_BUSI_TYPE.value = INTERFACE_BANCS_DR_TRX_CODE;
            document.MAINFORM.COVER_BR_ID.value = document.MAINFORM.GTS_BR_ID.value;
        } else if (document.MAINFORM.TEMP_FLG3.value == '5') {
            document.MAINFORM.COVER_DRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
            document.MAINFORM.COVER_BR_ID.value = document.MAINFORM.GTS_BR_ID.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CR_LONG_FLG = function() {
    try {

        document.MAINFORM.TEMP_FLG2.value = '';
        SYF_FFIT_TEMP_FLG2();
        SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'O', 'N');
        SYF_FFIT_set_842_no();
        if (document.MAINFORM.CR_LONG_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'P', 'N');
            document.MAINFORM.LONG_AMT_AC_NO.value = '8421';
            SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'M', 'N');
            SYF_FFIT_set_842_no();
        } else if (document.MAINFORM.CR_LONG_FLG.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'P', 'N');
            document.MAINFORM.LONG_AMT_AC_NO.value = '';
        } else if (document.MAINFORM.CR_LONG_FLG.value == '3') {
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'P', 'N');
            document.MAINFORM.LONG_AMT_AC_NO.value = '';
        } else if (document.MAINFORM.CR_LONG_FLG.value == '4') {
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'M', 'N');
            document.MAINFORM.LONG_AMT_AC_NO.value = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'P', 'N');
            document.MAINFORM.LONG_AMT_AC_NO.value = '';
        }
        SYF_FFIT_CalBkQqAmt();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CalBkQqAmt = function() {
    try {

        var bkEqAmt; // Utility Auto Fix Comments
        if (document.MAINFORM.TEMP_FLG4.value == '1' && SYS_BeFloat(document.MAINFORM.CR_AMT.value) >= SYS_BeFloat(document.MAINFORM.FINC_AMT.value)) {
            SYF_FFIT_MT202Init2(true);
        } else {
            SYF_FFIT_MT202Init2(false);
        }
        // document.MAINFORM.TEMP_FLG4.value = '0';
        document.MAINFORM.TEMP_FLG7.value = '0';
        document.MAINFORM.TEMP_AC_NO7.value = '';
        SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO7, 'P', 'N');
        if (document.MAINFORM.FFT_TYPE.value == '2') {
            if (document.MAINFORM.CR_LONG_FLG.value == '2' || document.MAINFORM.SHORT_REASON.value == '1') {
                bkEqAmt = SYS_BeFloat(document.MAINFORM.CR_AMT.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT59.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT19.value) - SYS_BeFloat(document.MAINFORM.APPL_COMM.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT30.value) - SYS_BeFloat(document.MAINFORM.FINC_INT.value);
            } else if (document.MAINFORM.CR_LONG_FLG.value == '3' || document.MAINFORM.CR_LONG_FLG.value == '4' || document.MAINFORM.CR_LONG_FLG.value == '1') {
                bkEqAmt = SYS_BeFloat(document.MAINFORM.TEMP_AMT59.value); // Utility Auto Fix Comments
            } else {
                bkEqAmt = 0;
            }
            document.MAINFORM.BK_EQ_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, bkEqAmt);
            if (bkEqAmt > 0) {
                document.MAINFORM.TEMP_FLG7.value = '0';
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG4, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG7, 'P', 'N');
            } else if (bkEqAmt < 0) {
                document.MAINFORM.TEMP_FLG4.value = '0';
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG4, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG7, 'M', 'N');
            } else {
                document.MAINFORM.TEMP_FLG4.value = '0';
                document.MAINFORM.TEMP_FLG7.value = '0';
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG4, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG7, 'P', 'N');
            }
        } else {
            document.MAINFORM.TEMP_FLG4.value = '0';
            document.MAINFORM.TEMP_FLG7.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG4, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG7, 'P', 'N');
            document.MAINFORM.BK_EQ_AMT.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ChangeFieldClass = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.LONG_AMT.value) > 0) {
            if (document.MAINFORM.CR_LONG_FLG.value == '3' || (document.MAINFORM.CR_LONG_FLG.value == '4' && (document.MAINFORM.TEMP_FLG2.value == '1' || document.MAINFORM.TEMP_FLG2.value == '3'))) {
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'M', 'N');
            }
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'P', 'N');
        }
        if (SYS_BeFloat(document.MAINFORM.SHORT_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_AMT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'M', 'N');
        }
        if (document.MAINFORM.FFT_TYPE.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_PRICE, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_AMT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_RT_BUY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG1, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ACTUAL_INT_BUY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_REVENUE_DUE, 'M', 'N');
        }
        if (document.MAINFORM.TEMP_AC_NO6.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO6, 'M', 'N');
        }
        if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_LONG_FLG.value == '2' || document.MAINFORM.TRF_SHORT_FLG.value == '3')) {
            SYT_ChangeFldClass(document.MAINFORM.TRF_CUAZHANG_AMT, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CheckX202_32DT1 = function() {
    try {

        var subDays; // Utility Auto Fix Comments
        if (EEHtml.getElementById('L').style.display == '') {
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
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CheckX202_32DT2 = function() {
    try {

        var subDays; // Utility Auto Fix Comments
        if (EEHtml.getElementById('L').style.display == '') {
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
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ClaimAmtApplCommOnchange = function() {
    try {

        document.MAINFORM.CLAIM_AMT.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) + SYS_BeFloat(document.MAINFORM.APPL_COMM.value);
        document.MAINFORM.CLAIM_BAL.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT2.value) + SYS_BeFloat(document.MAINFORM.APPL_COMM.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ClaimBal_ShortAmtOnchange = function() {
    try {

        if (document.MAINFORM.SHORT_REASON.value == '1') {

            document.MAINFORM.CLAIM_BAL.value = 0;
        } else {
            document.MAINFORM.CLAIM_BAL.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.CLAIM_BAL.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FINC_LAST_PMT_DT.value = document.MAINFORM.CR_VALUE_DT.value;

        SYF_FFIT_FINC_PAY_AMT();
        document.MAINFORM.FINC_CPS_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        SYF_FFIT_set_842_no();
        document.MAINFORM.PRE_OVS_CHG.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT54.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT59.value);
        if (document.MAINFORM.FFT_TYPE.value != '1') {
            if (document.MAINFORM.CR_LONG_FLG.value == '2') {
                document.MAINFORM.TEMP_AMT6.value = '0';
            } else {
                document.MAINFORM.TEMP_AMT6.value = document.MAINFORM.LONG_AMT.value;
            }
        } else {
            document.MAINFORM.TEMP_AMT6.value = '0';
        }

        SYF_FFIT_PRE_OVS_CHG_BUY();
        SYF_FFIT_TEMP_AMT7();
        SYF_FFIT_TEMP_DATE2();
        SYF_FFIT_MRGN_CUST_AC_NO3_A();

        SYF_FFIT_FINC_BAL();
        SYF_FFIT_TEMP_CHAR5();

        SYF_FFIT_COUNTER_CNTY_CODE();
        SYF_FFIT_COVER_DRAC_BUSI_TYPE();
        SYF_FFIT_FINC_PAY_DT();
        //ConfirmBusinessCall_COMM();
        SYF_FFIT_TEMP_AMT5();
        document.MAINFORM.TEMP_AMT31.value = SYS_BeFloat(document.MAINFORM.TRF_CUAZHANG_AMT.value);
        document.MAINFORM.TEMP_AMT31.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT31.value);
        //SYT_Check_AMT();
        SYT_CHG_VOUCHER();
        SYF_FFIT_SetAccountBusiType();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_TEMP_AMT4()) {
            return false;
        }
        if (!SYF_FFIT_XuCuiShou_FenQiFuKuan_check()) {
            return false;
        }
        if (!SYF_FFIT_FEIYONG_KONGZHI()) {
            return false;
        }

        if (!SYF_FFIT_TRF_LONG_SHPRT_FLG()) {
            return false;
        }
        if (!SYF_FFIT_CHECK_842_NO()) {
            return false;
        }
        if (!SYF_FFIT_CheckX202_32DT1()) {
            return false;
        }
        if (!SYF_FFIT_CheckX202_32DT2()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FEIYONG_KONGZHI = function() {
    try {

        var A; // Utility Auto Fix Comments
        var chgmothd; // Utility Auto Fix Comments
        var feenumber; // Utility Auto Fix Comments
        var feenumber0; // Utility Auto Fix Comments
        var i;
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FFT_TYPE = function() {
    try {

        document.MAINFORM.CR_LONG_FLG.value = '';
        document.MAINFORM.LONG_AMT.value = '0';
        document.MAINFORM.LONG_AMT_AC_NO.value = '';
        document.MAINFORM.SHORT_REASON.value = '';
        document.MAINFORM.SHORT_AMT.value = '0';
        document.MAINFORM.TEMP_FLG2.value = '';
        document.MAINFORM.TEMP_CHAR19.value = '';
        document.MAINFORM.FINC_INT.value = '';
        document.MAINFORM.TEMP_DATE5.value = '';
        //document.MAINFORM.AUTH_POINT1.value='0';
        //document.MAINFORM.AUTH_POINT2.value='0';
        SYF_FFIT_MT202Init2(false);
        SYF_FFIT_INT_REVENUE_DUE();

        if (document.MAINFORM.FFT_TYPE.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_PRICE, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_AMT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG1, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_RT_BUY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ACTUAL_INT_BUY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_REVENUE_DUE, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AMT19, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FINC_INT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DATE5, 'P', 'N');


        } else if (document.MAINFORM.FFT_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.TRF_PRICE, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_AMT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG1, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_RT_BUY, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ACTUAL_INT_BUY, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_REVENUE_DUE, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AMT19, 'M', 'N');

            if (document.MAINFORM.INT_MTHD.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.FINC_INT, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_DATE5, 'M', 'N');
            }
            SYF_FFIT_shortVsLongAmt(); // Utility Auto Fix Comments

        } else {
            SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_PRICE, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_AMT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG1, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_RT_BUY, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ACTUAL_INT_BUY, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_REVENUE_DUE, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AMT19, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FINC_INT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DATE5, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'P', 'N');

        }
        SYF_FFIT_CalBkQqAmt();
        SYF_FFIT_PRE_OVS_CHG_BUY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_BAL = function() {
    try {

        if ((document.MAINFORM.TRF_SHORT_FLG.value == '2') || (document.MAINFORM.SHORT_REASON.value == '2') || (document.MAINFORM.SHORT_REASON.value == '3')) {
            document.MAINFORM.FINC_BAL.value = document.MAINFORM.TEMP_AMT2.value;
        } else {
            document.MAINFORM.FINC_BAL.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT2.value) - SYS_BeFloat(document.MAINFORM.FINC_PAY_AMT.value);
            if (SYS_BeFloat(document.MAINFORM.FINC_BAL.value) < 0) {
                document.MAINFORM.FINC_BAL.value = '0';
            }
            if (SYS_BeFloat(document.MAINFORM.TTL_CABLE_APDE.value) < 0) {
                document.MAINFORM.TTL_CABLE_APDE.value = '0';
            }
        }

        if (document.MAINFORM.FFT_TYPE.value == '2') {
            document.MAINFORM.TRF_DT.value = document.MAINFORM.TRX_DT.value;
        } else {
            document.MAINFORM.TRF_DT.value = document.MAINFORM.TEMP_DATE1.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_PAY_AMT = function() {
    try {

        if (document.MAINFORM.FFT_TYPE.value == '1') {
            if (document.MAINFORM.TRF_SHORT_FLG.value == '2') {
                document.MAINFORM.FINC_PAY_AMT.value = '0';
            } else {
                document.MAINFORM.FINC_PAY_AMT.value = document.MAINFORM.TRF_AMT.value;
            }
        } else if (document.MAINFORM.FFT_TYPE.value == '2') {
            if ((document.MAINFORM.SHORT_REASON.value == '2') || (document.MAINFORM.SHORT_REASON.value == '3')) {
                document.MAINFORM.FINC_PAY_AMT.value = '0';
            } else {
                document.MAINFORM.FINC_PAY_AMT.value = document.MAINFORM.TEMP_AMT19.value;
            }
        } else {
            document.MAINFORM.FINC_PAY_AMT.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_PAY_DT = function() {
    try {

        if (document.MAINFORM.FFT_TYPE.value == '1' && document.MAINFORM.TRF_SHORT_FLG.value == '2') {
            document.MAINFORM.FINC_PAY_DT.value = '';
        } else {
            if (document.MAINFORM.SETTLE_DT2.value != '') {
                document.MAINFORM.FINC_PAY_DT.value = document.MAINFORM.SETTLE_DT2.value;
            } else if (document.MAINFORM.SETTLE_DT1.value != '') {
                document.MAINFORM.FINC_PAY_DT.value = document.MAINFORM.SETTLE_DT1.value;
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_INT_REVENUE_DUE = function() {
    try {

        if (document.MAINFORM.FFT_TYPE.value == '1') {
            document.MAINFORM.INT_REVENUE_DUE.value = SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value) - SYS_BeFloat(document.MAINFORM.ACTUAL_INT_BUY.value);
        } else {
            document.MAINFORM.INT_REVENUE_DUE.value = 0;
        }
        document.MAINFORM.INT_REVENUE_DUE.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.INT_REVENUE_DUE.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'FFTSettlement2';
        document.MAINFORM.FINC_UNIT_CODE.value = SYS_ORI_UNIT_CODE;
        document.MAINFORM.TEMP_AMT2.value = document.MAINFORM.FINC_BAL.value;
        document.MAINFORM.CLAIM_AMT.value = document.MAINFORM.TEMP_AMT2.value;
        document.MAINFORM.CLAIM_BAL.value = document.MAINFORM.CLAIM_AMT.value;
        document.MAINFORM.TEMP_DATE1.value = document.MAINFORM.TRF_DT.value;
        document.MAINFORM.TEMP_CHAR10.value = '';
        document.MAINFORM.TEMP_AMT54.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.PRE_OVS_CHG.value);
        document.MAINFORM.TEMP_AMT59.value = document.MAINFORM.TEMP_AMT54.value;
        document.MAINFORM.FFT_TYPE.value = '';
        document.MAINFORM.PRE_OVS_CHG_AC_NO.value = FFTPREFEE;
        SYF_FFIT_AMT();
        SYF_FFIT_SETTLE_TIMES();
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_LATE_PAY_INT = function() {
    try {

        var subdays1; // Utility Auto Fix Comments
        var subdays2; // Utility Auto Fix Comments
        var subdays3; // Utility Auto Fix Comments
        if (document.MAINFORM.INT_MTHD.value == '2') {
            subdays1 = SYS_GetSubDays(document.MAINFORM.CR_VALUE_DT.name, document.MAINFORM.FINC_DUE_DT.name);
            subdays2 = SYS_GetSubDays(document.MAINFORM.TEMP_DATE5.name, document.MAINFORM.CR_VALUE_DT.name);
            subdays3 = SYS_GetSubDays(document.MAINFORM.TEMP_DATE5.name, document.MAINFORM.FINC_DUE_DT.name);
            if (subdate1 >= 0) {
                if (subdays2 >= 0) {
                    document.MAINFORM.FINC_INT.value = SYS_BeFloat(document.MAINFORM.FINC_BAL.value) * subdays2 * SYS_BeFloat(document.MAINFORM.FINC_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAY.value);
                } else {
                    document.MAINFORM.FINC_INT.value = 0;
                }
            } else {
                if (subdays3 >= 0) {
                    document.MAINFORM.FINC_INT.value = SYS_BeFloat(document.MAINFORM.FINC_BAL.value) * subdays3 * SYS_BeFloat(document.MAINFORM.FINC_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAY.value);
                } else {
                    document.MAINFORM.FINC_INT.value = 0;
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MRGN_CUST_AC_NO3_A = function() {
    try {

        var days; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_MRGN_CUST_AC_NO3_A_2', '1');
        days = SYS_GetSubDays(document.MAINFORM.FINC_DT.name, document.MAINFORM.TRX_DT.name);
        if (SYS_BeFloat(days) > 0) {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_MRGN_CUST_AC_NO3_A_3', '1');
        } else {
            if (document.MAINFORM.FINC_TYPE_DESC.value == 'FINCFFITLC') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_MRGN_CUST_AC_NO3_A_4', '1');
            }
            if (document.MAINFORM.FINC_TYPE_DESC.value == 'FINCFFITCL') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_MRGN_CUST_AC_NO3_A_5', '1');
            }
        }
        document.MAINFORM.TEMP_AMT8.value = 0;
        document.MAINFORM.TEMP_AMT.value = 0;
        document.MAINFORM.TEMP_AMT11.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT9.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT11.value);

        if ((document.MAINFORM.FFT_TYPE.value == '1') && ((document.MAINFORM.TRF_LONG_FLG.value == '1') || (document.MAINFORM.TRF_SHORT_FLG.value == '1'))) {
            document.MAINFORM.TEMP_AMT.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT7.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT34.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT11.value) - SYS_BeFloat(document.MAINFORM.FINC_PAY_AMT.value);
        }

        if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_LONG_FLG.value == '2')) {
            document.MAINFORM.TEMP_AMT8.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value) - SYS_BeFloat(document.MAINFORM.TRF_CUAZHANG_AMT.value);
            document.MAINFORM.TEMP_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT8.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT7.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT34.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT11.value) - SYS_BeFloat(document.MAINFORM.FINC_PAY_AMT.value);
        }

        if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_SHORT_FLG.value == '2')) {
            document.MAINFORM.TRF_CUAZHANG_AMT.value = document.MAINFORM.CR_AMT.value;
        }

        if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_SHORT_FLG.value == '3')) {
            document.MAINFORM.TEMP_AMT.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value) + SYS_BeFloat(document.MAINFORM.TRF_CUAZHANG_AMT.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT7.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT34.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT11.value) - SYS_BeFloat(document.MAINFORM.FINC_PAY_AMT.value);
        }

        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT.value) < 0) {
            alert('8452 balance lacking.Please deal with accounts by hand');
        }
        document.MAINFORM.TEMP_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT.value);
        document.MAINFORM.TRF_CUAZHANG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TRF_CUAZHANG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MT202Init2 = function(state) {
    try {

        var tdMT202; // Utility Auto Fix Comments
        tdMT202 = EEHtml.getElementById('L');
        if (state == true) {
            tdMT202.style.display = '';
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'M', 'N');
            document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.X202_VALUE_DT_32A.value = SYS_BUSI_DATE;
            document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.FINC_CCY.value;
            if (document.MAINFORM.BK_EQ_AMT.value > 0) {
                document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.BK_EQ_AMT.value;
                // SYF_FFIT_CLEAR();
            } else {
                document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.LONG_AMT.value;
                // SYF_FFIT_CLEAR();
            }
        } else {
            tdMT202.style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKID_58A, 'O', 'N');
            document.MAINFORM.X202_TRX_REF_NO_20.value = '';
            document.MAINFORM.X202_VALUE_DT_32A.value = '';
            document.MAINFORM.X202_CCY_32A.value = '';
            document.MAINFORM.X202_AMT_32A.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PRE_OVS_CHG_BUY = function() {
    try {

        var sA; // Utility Auto Fix Comments
        sA = SYS_BeFloat(document.MAINFORM.PRE_OVS_CHG_BUY.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT54.value);
        if (sA > 0 && document.MAINFORM.FFT_TYPE.value == '1') {
            document.MAINFORM.TEMP_AMT34.value = document.MAINFORM.TEMP_AMT54.value;
            document.MAINFORM.TEMP_AMT11.value = SYS_BeFloat(document.MAINFORM.PRE_OVS_CHG_BUY.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT54.value);
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO6, 'M', 'N');
            document.MAINFORM.TEMP_AC_NO6.value = GL6201;
        } else {
            if (SYS_BeFloat(document.MAINFORM.TEMP_AMT9.value) <= '0') {
                document.MAINFORM.TEMP_AC_NO6.value = '';
                SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO6, 'P', 'N');
            }
            document.MAINFORM.TEMP_AMT34.value = document.MAINFORM.PRE_OVS_CHG_BUY.value;
            document.MAINFORM.TEMP_AMT11.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
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
            SYT_GetCustAcNo(document.MAINFORM.EXPT_ID.value);
            SYF_FFIT_ChangeFieldClass();
            SYF_FFIT_TRF_LONG_FLG();
            document.MAINFORM.TRANS_DATE_ID.value = SYT_GetDateID(document.MAINFORM.TRX_DT.value);
            if (document.MAINFORM.SETTLE_TIMES.value == '1') {
                document.MAINFORM.SETTLE_DT1.value = SYS_BUSI_DATE;
            } else {
                document.MAINFORM.SETTLE_DT2.value = SYS_BUSI_DATE;
            }
            SYF_FFIT_TEMP_AMT30();
            SYF_FFIT_CHANGEFIELD();
            SYT_ExchRate_FIX_PENDING();
            if (document.MAINFORM.FFT_TYPE.value == '2') { // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.TEMP_AMT19, 'M', 'N'); // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            SYF_FFIT_miscellaneousSett();
            SYF_FFIT_TEMP_FLG2();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
            SYF_FFIT_CR_LONG_FLG();
            SYF_FFIT_ChangeFieldClass();
            SYF_FFIT_TRF_LONG_FLG();
            SYF_FFIT_TEMP_AMT30();
            SYF_FFIT_CHANGEFIELD();
        }
        Chg.Screen.mapLocalCust("EXPT_ID", "EXPT_NM");
        Chg.Screen.mapForeignCust("EXPT_ID", "EXPT_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            arr = ['ADVICE_CHG', 'CABLE_ADVICE_CHG'];
            amt = document.MAINFORM.CR_AMT.value;
            ccy = document.MAINFORM.ACPT_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_REMAINING_LIFE = function() {
    try {

        if (document.MAINFORM.CR_VALUE_DT.value != '') {
            if ((document.MAINFORM.MATURITY.value != '') && (document.MAINFORM.FFT_TYPE.value == '1')) {
                if ((document.MAINFORM.GRACE_FLG.value == '2') && (document.MAINFORM.GRACE_DAYS_BUY.value >= '0')) {
                    SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.MATURITY.value, document.MAINFORM.GRACE_DAYS_BUY.value, 'TEMP_DATE4', 'A', 'Y', 'Y');
                } else if ((document.MAINFORM.GRACE_FLG.value == '1') && (document.MAINFORM.GRACE_DAYS_BUY.value >= '0')) {
                    SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.MATURITY.value, document.MAINFORM.GRACE_DAYS_BUY.value, 'TEMP_DATE4', 'A', 'N', 'Y');
                } else {
                    document.MAINFORM.TEMP_DATE4.value = '';
                }
            } else {
                document.MAINFORM.TEMP_DATE4.value = '';
            }

            if (document.MAINFORM.TEMP_DATE4.value != '') {
                document.MAINFORM.REMAINING_LIFE.value = SYS_GetSubDays(document.MAINFORM.CR_VALUE_DT.name, document.MAINFORM.TEMP_DATE4.name);
            } else {
                document.MAINFORM.REMAINING_LIFE.value = '0';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SETTLE_TIMES = function() {
    try {

        if (document.MAINFORM.SETTLE_TIMES.value == '0') {
            document.MAINFORM.SETTLE_TIMES.value = '1';
            document.MAINFORM.SETTLE_DT1.value = SYS_BUSI_DATE;
            document.MAINFORM.TTL_CABLE_APDE.value = document.MAINFORM.PRE_OVS_CHG.value;
        } else {
            document.MAINFORM.SETTLE_TIMES.value = SYS_BeFloat(document.MAINFORM.SETTLE_TIMES.value) + 1;
            document.MAINFORM.SETTLE_DT2.value = SYS_BUSI_DATE;
            document.MAINFORM.CR_AMT.value = '0';
            document.MAINFORM.CR_VALUE_DT.value = '';
            document.MAINFORM.TRF_PRICE.value = '0';
            document.MAINFORM.TRF_AMT.value = '0';
            document.MAINFORM.PRE_OVS_CHG_BUY.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SHORT_REASON = function() {
    try {

        if (document.MAINFORM.SHORT_REASON.value == '2' || document.MAINFORM.SHORT_REASON.value == '3') {
            alert('Please deal with accounts by hand!');
        }
        SYF_FFIT_shortVsLongAmt();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetAccountBusiType = function() {
    try {

        if (document.MAINFORM.TEMP_FLG5.value == 'D') {
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
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetAuthPoint = function() {
    try {

        var sEQAMT; // Utility Auto Fix Comments
        SYS_GetExchangeRate_Boc(document.MAINFORM.X202_CCY_32A.value, 'USD', 'Selling Rate', 'TEMP_CHAR18', 'FLD_FFIT_TEMP_CHAR18_onchange');
        SYS_GetExchangeRate_Boc('USD', 'USD', 'Buying Rate', 'TEMP_CHAR19', 'FLD_FFIT_TEMP_CHAR19_onchange');
        sEQAMT = SYS_BeFloat(document.MAINFORM.X202_AMT_32A.value) * document.MAINFORM.TEMP_CHAR18.value / document.MAINFORM.TEMP_CHAR19.value;
        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_SetAuthPoint_6', '1');
        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_SetAuthPoint_7', '1');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT3 = function() {
    try {

        if ((document.MAINFORM.TEMP_CHAR2.value == 'BP') || (document.MAINFORM.TEMP_CHAR2.value == 'OC')) {
            if (document.MAINFORM.SETTLE_TIMES.value == '1' && document.MAINFORM.TRF_SHORT_FLG.value != '2' && document.MAINFORM.TRF_SHORT_FLG.value != '3') {
                document.MAINFORM.TEMP_AMT3.value = document.MAINFORM.BAL_DRAFT.value;
            } else if (SYS_BeFloat(document.MAINFORM.SETTLE_TIMES.value) > '1' && document.MAINFORM.FFT_TYPE.value == '1' && document.MAINFORM.TRF_SHORT_FLG.value == '3') {
                document.MAINFORM.TEMP_AMT3.value = document.MAINFORM.BAL_DRAFT.value;
            } else {
                document.MAINFORM.TEMP_AMT3.value = '0';
            }
        } else {
            document.MAINFORM.TEMP_AMT3.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT30 = function() {
    try {

        var sdays; // Utility Auto Fix Comments
        sdays = SYS_GetSubDays(document.MAINFORM.FINC_DUE_DT.name, document.MAINFORM.TRX_DT.name);
        if (sdays > '0') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AMT30, 'O', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AMT30, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT4 = function() {
    try {

        var amt; // Utility Auto Fix Comments
        amt = SYS_BeFloat(document.MAINFORM.TEMP_AMT4.value) - SYS_BeFloat(document.MAINFORM.CR_AMT.value);
        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT4.value) > '0' && SYS_BeFloat(document.MAINFORM.CR_AMT.value) > '0' && amt != 0) {
            SYS_CheckError(document.MAINFORM.CR_AMT, 'Please check the nostro amount!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT5 = function() {
    try {

        document.MAINFORM.TEMP_AMT5.value = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FINC_DUE_DT.name);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT7 = function() {
    try {

        var A; // Utility Auto Fix Comments
        var b; // Utility Auto Fix Comments
        var n; // Utility Auto Fix Comments
        var s; // Utility Auto Fix Comments
        if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_SHORT_FLG.value != '2')) {
            document.MAINFORM.TEMP_CHAR7.value = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FINC_DUE_DT.name);
            document.MAINFORM.TEMP_AMT7.value = (SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value) * SYS_BeFloat(document.MAINFORM.TEMP_CHAR7.value) / SYS_BeFloat(document.MAINFORM.FINC_DAYS.value)) * (SYS_BeFloat(document.MAINFORM.TRF_AMT.value) / SYS_BeFloat(document.MAINFORM.FINC_AMT.value));
            A = document.MAINFORM.TEMP_AMT7.value;
            s = A.toString();
            n = s.indexOf('.');
            if (n != '-1') {
                if (document.MAINFORM.FINC_CCY.value == 'JPY') {
                    b = s.substring(0, n + 1);
                } else {
                    b = s.substring(0, n + 3); // Utility Auto Fix Comments
                }
            } else {
                b = document.MAINFORM.TEMP_AMT7.value;
            }
            document.MAINFORM.FINC_RFD_INT.value = b;
            document.MAINFORM.TEMP_AMT7.value = b;
            document.MAINFORM.FINC_RFD_INT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT7.value);
            document.MAINFORM.TEMP_AMT7.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT7.value);
        } else {
            document.MAINFORM.TEMP_AMT7.value = 0;
            document.MAINFORM.FINC_RFD_INT.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT7.value) <= '0') {
            document.MAINFORM.TEMP_AMT7.value = 0;
            document.MAINFORM.FINC_RFD_INT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT9 = function() {
    try {

        if ((SYS_BeFloat(document.MAINFORM.TEMP_AMT9.value) > 0) && (document.MAINFORM.FFT_TYPE.value == '1')) {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO6, 'M', 'N');
            document.MAINFORM.TEMP_AC_NO6.value = GL6201;
        } else {
            document.MAINFORM.TEMP_AC_NO6.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO6, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR5 = function() {
    try {

        if (document.MAINFORM.TEMP_CHAR2.value == 'AD' || document.MAINFORM.TEMP_CHAR2.value == 'BP') {
            document.MAINFORM.TEMP_CHAR5.value = '603';
        } else {
            document.MAINFORM.TEMP_CHAR5.value = '610';
        }

        if (document.MAINFORM.SETTLE_TIMES.value == '1') {
            document.MAINFORM.TEMP_CHAR1.value = '1';
        } else {
            document.MAINFORM.TEMP_CHAR1.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_DATE2 = function() {
    try {

        if (SYS_BeInt(document.MAINFORM.SETTLE_TIMES.value) == 1) {
            document.MAINFORM.TEMP_DATE2.value = document.MAINFORM.SETTLE_DT1.value;
        } else if (SYS_BeInt(document.MAINFORM.SETTLE_TIMES.value) > 1) {
            document.MAINFORM.TEMP_DATE2.value = document.MAINFORM.SETTLE_DT2.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_DATE5_init = function() {
    try {

        if (document.MAINFORM.SETTLE_TIMES.value == '1') {
            document.MAINFORM.TEMP_DATE5.value = document.MAINFORM.FINC_DT.value;
        } else {
            document.MAINFORM.TEMP_DATE5.value = document.MAINFORM.FINC_LAST_PMT_DT.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_FLG2 = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.LONG_AMT.value) > 0 && document.MAINFORM.CR_LONG_FLG.value == '4') {
            if (document.MAINFORM.TEMP_FLG2.value == '2') {
                SYF_FFIT_MT202Init2(true);
                document.MAINFORM.LONG_AMT_AC_NO.value = GL9992;
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
                SYF_FFIT_SetAuthPoint(document.MAINFORM.X202_AMT_32A.value, document.MAINFORM.X202_CCY_32A.value);
            } else if (document.MAINFORM.TEMP_FLG2.value == '1' || document.MAINFORM.TEMP_FLG2.value == '3') {
                SYF_FFIT_MT202Init2(false);
                document.MAINFORM.LONG_AMT_AC_NO.value = '';
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'M', 'N');
            }
        } else {
            SYF_FFIT_MT202Init2(false);
            document.MAINFORM.LONG_AMT_AC_NO.value = '';
            document.MAINFORM.CR_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRF_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.TRF_AMT.value) > '0') {
            document.MAINFORM.TRF_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TRF_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRF_CUAZHANG_AMT = function() {
    try {

        document.MAINFORM.REMARK_COLL.value = '';
        SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'O', 'N');
        if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_LONG_FLG.value == '2')) {
            document.MAINFORM.TRF_CUAZHANG_AMT.value = document.MAINFORM.CR_AMT.value;
            SYT_ChangeFldClass(document.MAINFORM.TRF_CUAZHANG_AMT, 'M', 'N');
            document.MAINFORM.TRF_GUAZHANG_AC_NO.value = GL8421;
            SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'M', 'N');
        } else if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_SHORT_FLG.value == '2')) {
            document.MAINFORM.TRF_CUAZHANG_AMT.value = document.MAINFORM.CR_AMT.value;
            SYT_ChangeFldClass(document.MAINFORM.TRF_CUAZHANG_AMT, 'P', 'N');
            document.MAINFORM.TRF_GUAZHANG_AC_NO.value = GL8421;
            SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'M', 'N');
        } else if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_SHORT_FLG.value == '3')) {
            SYT_ChangeFldClass(document.MAINFORM.TRF_CUAZHANG_AMT, 'M', 'N');
            document.MAINFORM.TRF_GUAZHANG_AC_NO.value = GL8421;
        } else {
            document.MAINFORM.TRF_CUAZHANG_AMT.value = '0';
            document.MAINFORM.TRF_GUAZHANG_AC_NO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TRF_CUAZHANG_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_GUAZHANG_AC_NO, 'P', 'N');
        }
        document.MAINFORM.TRF_CUAZHANG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TRF_CUAZHANG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRF_LONG_FLG = function() {
    try {

        if (document.MAINFORM.FFT_TYPE.value == '1') {
            if (document.MAINFORM.TRF_LONG_FLG.value == '1' || document.MAINFORM.TRF_LONG_FLG.value == '2') {
                document.MAINFORM.TRF_SHORT_FLG.value = '';
                SYT_ChangeFldClass(document.MAINFORM.TRF_SHORT_FLG, 'P', 'N');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.TRF_SHORT_FLG, 'O', 'N');
            }

            if (document.MAINFORM.TRF_SHORT_FLG.value == '1' || document.MAINFORM.TRF_SHORT_FLG.value == '2' || document.MAINFORM.TRF_SHORT_FLG.value == '3') {
                document.MAINFORM.TRF_LONG_FLG.value = '';
                SYT_ChangeFldClass(document.MAINFORM.TRF_LONG_FLG, 'P', 'N');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.TRF_LONG_FLG, 'O', 'N');
            }
        } else {
            document.MAINFORM.TRF_SHORT_FLG.value = '';
            document.MAINFORM.TRF_LONG_FLG.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TRF_LONG_FLG, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_SHORT_FLG, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRF_LONG_SHPRT_FLG = function() {
    try {

        if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_LONG_FLG.value == '') && (document.MAINFORM.TRF_SHORT_FLG.value == '')) {
            SYS_CheckError(document.MAINFORM.TRF_LONG_FLG, 'Short or long flag cannot be empty!'); // Utility Auto Fix Comments
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X202_1_32A_AMT = function() {
    try {

        var sEQAMT; // Utility Auto Fix Comments
        var sMAINREF; // Utility Auto Fix Comments
        sMAINREF = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        if (sMAINREF == 'FP') {
            SYS_GetExchangeRate_Boc(document.MAINFORM.X202_CCY_32A.value, 'USD', 'Selling Rate', 'TEMP_CHAR18');
            SYS_GetExchangeRate_Boc('USD', 'USD', 'Buying Rate', 'TEMP_CHAR19');
            sEQAMT = SYS_BeFloat(document.MAINFORM.X202_AMT_32A.value) * document.MAINFORM.TEMP_CHAR18.value / document.MAINFORM.TEMP_CHAR19.value;
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_X202_1_32A_AMT_8', '1');
            /*
if(sEQAMT=='0')
{
   //document.MAINFORM.AUTH_POINT1.value='0';
}
else if(sEQAMT<=SYS_BeFloat(document.MAINFORM.TEMP_AMT10.value))
{
   //document.MAINFORM.AUTH_POINT1.value='1';
}
else if(sEQAMT>SYS_BeFloat(document.MAINFORM.TEMP_AMT10.value)&&sEQAMT<=SYS_BeFloat(document.MAINFORM.TEMP_AMT12.value))
{
   //document.MAINFORM.AUTH_POINT1.value='2';
}
else if(sEQAMT>SYS_BeFloat(document.MAINFORM.TEMP_AMT12.value)&&sEQAMT<=SYS_BeFloat(document.MAINFORM.TEMP_AMT13.value))
{
   //document.MAINFORM.AUTH_POINT1.value='3';
}
else if(sEQAMT>SYS_BeFloat(document.MAINFORM.TEMP_AMT13.value))
{
   //document.MAINFORM.AUTH_POINT1.value='3';
}
*/
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_X202_1_32A_AMT_9', '1');
            /*
if(sEQAMT>SYS_BeFloat(document.MAINFORM.TEMP_AMT13.value)&&sEQAMT<=SYS_BeFloat(document.MAINFORM.TEMP_AMT14.value))
{
  //document.MAINFORM.AUTH_POINT2.value='4';
}
else if(sEQAMT>SYS_BeFloat(document.MAINFORM.TEMP_AMT14.value))
{
  //document.MAINFORM.AUTH_POINT2.value='5';
}
else
{
  //document.MAINFORM.AUTH_POINT2.value='0';
}
*/
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X202_1_B2 = function() {
    try {

        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_X202_1_B2_10', '1');
        } else {
            document.MAINFORM.TEMP_NM2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X202_2_B2 = function() {
    try {

        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_X202_2_B2_11', '1');
        } else {
            document.MAINFORM.TEMP_NM3.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_XuCuiShou_FenQiFuKuan_check = function() {
    try {

        if ((document.MAINFORM.FFT_TYPE.value == '2') && (document.MAINFORM.SHORT_REASON.value == '2' || document.MAINFORM.SHORT_REASON.value == '3')) {
            SYS_CheckError(document.MAINFORM.SHORT_REASON, 'Please deal with accounts by hand!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_miscellaneousSett = function() {
    try {

        SYF_FFIT_MT202Init2(false);
        document.MAINFORM.TEMP_AMT19.value = document.MAINFORM.TEMP_AMT35.value;
        SYT_ChangeFldClass(document.MAINFORM.TEMP_AMT19, 'M', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO7, 'P', 'N');
        document.MAINFORM.TEMP_AC_NO7.value = '';
        if (SYS_BeFloat(document.MAINFORM.BK_EQ_AMT.value) >= 0) {
            document.MAINFORM.TEMP_AMT33.value = SYS_BeFloat(document.MAINFORM.BK_EQ_AMT.value);
            document.MAINFORM.TEMP_CHAR37.value = 'C';
        } else {
            document.MAINFORM.TEMP_AMT33.value = -SYS_BeFloat(document.MAINFORM.BK_EQ_AMT.value);
            document.MAINFORM.TEMP_CHAR37.value = 'D';
        }
        if (document.MAINFORM.TEMP_FLG4.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO7, 'M', 'N');
            document.MAINFORM.TEMP_CHAR38.value = INTERFACE_BANCS_BGLCR_TRX_CODE;
            document.MAINFORM.TEMP_CHAR39.value = document.MAINFORM.GTS_BR_ID.value;
        } else if (document.MAINFORM.TEMP_FLG7.value == '2' || document.MAINFORM.TEMP_FLG4.value == '4') {
            document.MAINFORM.TEMP_AC_NO7.value = '9991';
            document.MAINFORM.TEMP_CHAR38.value = INTERFACE_GL_TRX_CODE;
            document.MAINFORM.TEMP_CHAR39.value = document.MAINFORM.GTS_BR_ID.value;

        } else if (document.MAINFORM.TEMP_FLG7.value == '3') {
            document.MAINFORM.TEMP_AMT19.value = SYS_BeFloat(document.MAINFORM.CR_AMT.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT59.value) - SYS_BeFloat(document.MAINFORM.APPL_COMM.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT30.value) - SYS_BeFloat(document.MAINFORM.FINC_INT.value);
            document.MAINFORM.TEMP_AMT19.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT19.value);
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AMT19, 'P', 'N'); // Utility Auto Fix Comments
        } else if (document.MAINFORM.TEMP_FLG4.value == '1') {
            document.MAINFORM.TEMP_AC_NO7.value = '9988';
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement2_SYF_FFIT_miscellaneousSett_12', '1');
            document.MAINFORM.TEMP_CHAR38.value = INTERFACE_GL_TRX_CODE;
            SYF_FFIT_MT202Init2(true);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_set_842_no = function() {
    try {

        if (document.MAINFORM.FFT_TYPE.value == '2' && (document.MAINFORM.CR_LONG_FLG.value == '1') && SYS_BeFloat(document.MAINFORM.LONG_AMT.value) > 0) {
            document.MAINFORM.TEMP_CHAR8.value = document.MAINFORM.C_MAIN_REF.value + 'S' + document.MAINFORM.SETTLE_TIMES.value;
        } else if (document.MAINFORM.FFT_TYPE.value == '1' && (document.MAINFORM.TRF_LONG_FLG.value == '2' || document.MAINFORM.TRF_SHORT_FLG.value == '2') && SYS_BeFloat(document.MAINFORM.TRF_CUAZHANG_AMT.value) > 0) {
            document.MAINFORM.TEMP_CHAR8.value = document.MAINFORM.C_MAIN_REF.value + 'S' + document.MAINFORM.SETTLE_TIMES.value;
        } else {
            document.MAINFORM.TEMP_CHAR8.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_shortVsLongAmt = function() {
    try {

        var nShortVsLongAmt; // Utility Auto Fix Comments
        var tempCR_ACNO; // Utility Auto Fix Comments
        var tempCR_LONG_FLG; // Utility Auto Fix Comments
        var tempLONG_AMT_AC_NO; // Utility Auto Fix Comments
        var tempSHORT_REASON; // Utility Auto Fix Comments
        var tempTEMP_FLG2; // Utility Auto Fix Comments
        nShortVsLongAmt = 0;
        tempCR_LONG_FLG = document.MAINFORM.CR_LONG_FLG.value;
        tempTEMP_FLG2 = document.MAINFORM.TEMP_FLG2.value;
        tempSHORT_REASON = document.MAINFORM.SHORT_REASON.value;
        tempLONG_AMT_AC_NO = document.MAINFORM.LONG_AMT_AC_NO.value;
        tempCR_ACNO = document.MAINFORM.CR_ACNO.value;
        document.MAINFORM.TEMP_AMT19.value = document.MAINFORM.TEMP_AMT35.value;
        SYT_ChangeFldClass(document.MAINFORM.TEMP_AMT19, 'M', 'N');

        if (document.MAINFORM.FFT_TYPE.value == '2') {
            if (SYS_BeFloat(document.MAINFORM.CR_AMT.value) != 0) {
                nShortVsLongAmt = SYS_BeFloat(document.MAINFORM.CR_AMT.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT2.value) - SYS_BeFloat(document.MAINFORM.APPL_COMM.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT30.value) - SYS_BeFloat(document.MAINFORM.FINC_INT.value);
                nShortVsLongAmt = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, nShortVsLongAmt);
            }
            if (SYS_BeFloat(nShortVsLongAmt) < 0) {
                document.MAINFORM.SHORT_AMT.value = -SYS_BeFloat(nShortVsLongAmt);
                document.MAINFORM.SHORT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.SHORT_AMT.value);
                document.MAINFORM.LONG_AMT.value = 0;
                document.MAINFORM.SHORT_REASON.value = tempSHORT_REASON;
                document.MAINFORM.CR_LONG_FLG.value = '';
                document.MAINFORM.TEMP_FLG2.value = '';
                document.MAINFORM.LONG_AMT_AC_NO.value = '';
                document.MAINFORM.CR_ACNO.value = '';
                SYT_ChangeFldClass(document.MAINFORM.SHORT_AMT, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'P', 'N');
            } else if (SYS_BeFloat(nShortVsLongAmt) > 0) {
                document.MAINFORM.SHORT_REASON.value = '';
                document.MAINFORM.SHORT_AMT.value = 0;
                document.MAINFORM.CR_LONG_FLG.value = tempCR_LONG_FLG;
                document.MAINFORM.TEMP_FLG2.value = tempTEMP_FLG2;
                document.MAINFORM.LONG_AMT_AC_NO.value = tempLONG_AMT_AC_NO;
                document.MAINFORM.CR_ACNO.value = tempCR_ACNO;
                document.MAINFORM.LONG_AMT.value = nShortVsLongAmt;
                SYT_ChangeFldClass(document.MAINFORM.SHORT_AMT, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'P', 'N');
            } else {
                document.MAINFORM.SHORT_AMT.value = 0;
                document.MAINFORM.LONG_AMT.value = 0;
                document.MAINFORM.CR_LONG_FLG.value = '';
                document.MAINFORM.TEMP_FLG2.value = '';
                document.MAINFORM.LONG_AMT_AC_NO.value = '';
                document.MAINFORM.CR_ACNO.value = '';
                SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.SHORT_AMT, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'P', 'N');
            }

            if (document.MAINFORM.FINC_CCY.value != '') {
                document.MAINFORM.SHORT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.SHORT_AMT.value);
                document.MAINFORM.LONG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.LONG_AMT.value);
            }
            SYF_FFIT_CalBkQqAmt();
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACTUAL_INT_BUY_onchange = function(event) {
    try {
        var AIB = SYS_BeFloat(document.MAINFORM.ACTUAL_INT_BUY.value);
        var PFI = SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value);
        if (AIB >= PFI) {
            alert("The Actual Int Buyer should be less than Pre-Finance Int");
            document.MAINFORM.ACTUAL_INT_BUY.value = 0;
        }
        if (AIB < 0) {
            alert("Actual Int Buyer value should not be negative");
            document.MAINFORM.ACTUAL_INT_BUY.value = 0;
        }
        SYF_FFIT_INT_REVENUE_DUE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_APPL_COMM_onchange = function(event) {
    try {
        SYF_FFIT_shortVsLongAmt();
        SYF_FFIT_ClaimAmtApplCommOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_FAV_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CLAIM_BAL_onchange = function(event) {
    try {
        SYF_FFIT_ClaimBal_ShortAmtOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CR_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.CR_AMT.value)) {
            document.MAINFORM.CR_AMT.value = 0;
        }
        SYF_FFIT_shortVsLongAmt();
        SYF_FFIT_AMT();
        SYF_FFIT_TEMP_AMT4();
        SYF_FFIT_TRF_CUAZHANG_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CR_LONG_FLG_onchange = function(event) {
    try {
        SYF_FFIT_CR_LONG_FLG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CR_VALUE_DT_onchange = function(event) {
    try {
        SYF_FFIT_REMAINING_LIFE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FFT_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_FFT_TYPE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_INT_onchange = function(event) {
    try {
        document.MAINFORM.FINC_INT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_INT.value);
        SYF_FFIT_shortVsLongAmt();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_DAYS_BUY_onchange = function(event) {
    try {
        SYF_FFIT_REMAINING_LIFE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_FLG_onchange = function(event) {
    try {
        SYF_FFIT_REMAINING_LIFE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GTS_BR_ID_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_INT_RT_BUY_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.INT_RT_BUY.value)) {
            document.MAINFORM.INT_RT_BUY.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LONG_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.LONG_AMT.value)) {
            document.MAINFORM.LONG_AMT.value = 0;
        }
        SYF_FFIT_CR_LONG_FLG();
        SYF_FFIT_TEMP_FLG2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_OVS_CHG_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.OVS_CHG.value)) {
            document.MAINFORM.OVS_CHG.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_OVS_CHG_BUY_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.PRE_OVS_CHG_BUY.value)) {
            document.MAINFORM.PRE_OVS_CHG_BUY.value = 0;
        }
        SYF_FFIT_PRE_OVS_CHG_BUY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SELLING_CUST_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SHORT_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.SHORT_AMT.value)) {
            document.MAINFORM.SHORT_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SHORT_REASON_onchange = function(event) {
    try {
        SYF_FFIT_SHORT_REASON();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT13_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT14_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT19_onchange = function(event) {
    try {
        document.MAINFORM.TEMP_AMT19.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT19.value);
        document.MAINFORM.TEMP_AMT35.value = document.MAINFORM.TEMP_AMT19.value;
        SYF_FFIT_shortVsLongAmt();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT2_onchange = function(event) {
    try {
        SYF_FFIT_FINC_PAY_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT30_onchange = function(event) {
    try {
        SYF_FFIT_shortVsLongAmt();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT38_onchange = function(event) {
    try {
        document.MAINFORM.TEMP_AMT38.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT38.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT39_onchange = function(event) {
    try {
        document.MAINFORM.TEMP_AMT39.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT39.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT4_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_AMT4.value)) {
            document.MAINFORM.TEMP_AMT4.value = 0;
        }
        SYF_FFIT_TEMP_AMT4();
        SYF_FFIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT59_onchange = function(event) {
    try {
        document.MAINFORM.TEMP_AMT59.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT59.value);
        SYF_FFIT_shortVsLongAmt();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT9_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_AMT9.value)) {
            document.MAINFORM.TEMP_AMT9.value = 0;
        }
        SYF_FFIT_TEMP_AMT9();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_CHAR19_onchange = function(event) {
    try {
        SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT19.value);
        SYF_FFIT_shortVsLongAmt();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG2_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_FLG2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG3_onchange = function(event) {
    try {
        SYF_FFIT_COVER_BGL_ACNO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG4_onchange = function(event) {
    try {
        SYF_FFIT_miscellaneousSett();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG7_onchange = function(event) {
    try {
        SYF_FFIT_miscellaneousSett();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TRF_AMT.value)) {
            document.MAINFORM.TRF_AMT.value = 0;
        }
        SYF_FFIT_TRF_AMT();
        SYF_FFIT_FINC_PAY_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_LONG_FLG_onchange = function(event) {
    try {
        SYF_FFIT_TRF_CUAZHANG_AMT();
        SYF_FFIT_TRF_LONG_FLG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_SHORT_FLG_onchange = function(event) {
    try {
        SYF_FFIT_TRF_CUAZHANG_AMT();
        SYF_FFIT_TRF_LONG_FLG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_52_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ORDBK_ADD_52A', 'X202_ORDBK_ID_52A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_52_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ORDBK_ADD_52A', 'X202_52_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_53_ORDER_NO.value = '';
        SYS_InqCUBK('X202_SENDCORRADD53A', 'X202_SENDCORRID53A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_53_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_SENDCORRADD53A', 'X202_53_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_54_ORDER_NO.value = '';
        SYS_InqCUBK('X202_RECCORRADD_54A', 'X202_RECCORRID_54A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_54_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_RECCORRADD_54A', 'X202_54_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_56_ORDER_NO.value = '';
        SYS_InqCUBK('X202_MEDI_BKADD_56A', 'X202_MEDI_BKID_56A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_56_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_MEDI_BKADD_56A', 'X202_56_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_57_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ACC_BKADD_57A', 'X202_ACC_BKID_57A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_57_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ACC_BKADD_57A', 'X202_57_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_58_ORDER_NO.value = '';
        SYS_InqCUBK('X202_BENE_BKADD_58A', 'X202_BENE_BKID_58A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_58_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_BENE_BKADD_58A', 'X202_58_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ACC_BKID_57A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
            SYS_GetCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
        } else {
            document.MAINFORM.X202_ACC_BKNM_57A.value = '';
            document.MAINFORM.X202_ACCBKADD1_57A.value = '';
            document.MAINFORM.X202_ACCBKADD2_57A.value = '';
            document.MAINFORM.X202_ACCBKADD3_57A.value = '';
            document.MAINFORM.X202_ACC_BKSW_57A.value = '';
            document.MAINFORM.X202_ACC_BKACNO57A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ADV_BKID_B2_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
            SYS_GetCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
        } else {
            document.MAINFORM.X202_ADV_BKNM_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD1_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD2_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD3_B2.value = '';
            document.MAINFORM.X202_ADV_BKSW_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ADV_BKSW_B2_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_AMT_32A_onchange = function(event) {
    try {
        document.MAINFORM.X202_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.X202_CCY_32A.value, document.MAINFORM.X202_AMT_32A.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_B2_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ADV_BKADD_B2', 'X202_ADV_BKID_B2', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_B2_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ADV_BKADD_B2', 'X202_B2_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_BENE_BKID_58A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
            SYS_GetCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = '';
            document.MAINFORM.X202BENEBKADD1_58A.value = '';
            document.MAINFORM.X202BENEBKADD2_58A.value = '';
            document.MAINFORM.X202BENEBKADD3_58A.value = '';
            document.MAINFORM.X202_BENE_BKSW_58A.value = '';
            document.MAINFORM.X202_BENEBKACNO58A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_MEDI_BKID_56A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A');
        } else {
            document.MAINFORM.X202_MEDI_BKNM_56A.value = '';
            document.MAINFORM.X202MEDIBKADD1_56A.value = '';
            document.MAINFORM.X202MEDIBKADD2_56A.value = '';
            document.MAINFORM.X202MEDIBKADD3_56A.value = '';
            document.MAINFORM.X202_MEDI_BKSW_56A.value = '';
            document.MAINFORM.X202_MEDIBKACNO56A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ORDBK_ID_52A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
            SYS_GetCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A');
        } else {
            document.MAINFORM.X202_ORDBK_NM_52A.value = '';
            document.MAINFORM.X202_ORDBKADD1_52A.value = '';
            document.MAINFORM.X202_ORDBKADD2_52A.value = '';
            document.MAINFORM.X202_ORDBKADD3_52A.value = '';
            document.MAINFORM.X202_ORDBK_SW_52A.value = '';
            document.MAINFORM.X202_ORDBKACNO_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_RECCORRID_54A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
            SYS_GetCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = '';
            document.MAINFORM.X202_RECCORADD154A.value = '';
            document.MAINFORM.X202_RECCORADD254A.value = '';
            document.MAINFORM.X202_RECCORADD354A.value = '';
            document.MAINFORM.X202_RECCORRSW_54A.value = '';
            document.MAINFORM.X202RECCORRACNO54A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_SENDCORRID53A_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
            SYS_GetCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A');
        } else {
            document.MAINFORM.X202_SENDCORRNM53A.value = '';
            document.MAINFORM.X202SENDCORADD153A.value = '';
            document.MAINFORM.X202SENDCORADD253A.value = '';
            document.MAINFORM.X202SENDCORADD353A.value = '';
            document.MAINFORM.X202_SENDCORRSW53A.value = '';
            document.MAINFORM.X202SENDCORACNO53A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_VALUE_DT_32A_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement2.js", e);
    }
}