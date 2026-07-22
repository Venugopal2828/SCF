var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var Cable_Type = '';

csFuncLevelProto.SYF_FFIT_CHANGEFIELD = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.NET_DR_AMT.value) > '0') {
            SYT_ChangeFldClass(document.MAINFORM.PMT_CUST_AC_NO1, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMON_PRDT_CODE = function() {
    try {

        document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.FINC_TYPE.value;
        if (document.MAINFORM.TEMP_FLG1.value == '2') {
            document.MAINFORM.COVER_CRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CableOut_SYF_FFIT_COMMON_PRDT_CODE_0', '1');
        } else if (document.MAINFORM.TEMP_FLG1.value == '3') {
            document.MAINFORM.COVER_BR_ID.value = document.MAINFORM.GTS_BR_ID.value;
            document.MAINFORM.COVER_CRAC_BUSI_TYPE.value = INTERFACE_BANCS_BGLCR_TRX_CODE;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COUNTER_CNTY_CODE = function() {
    try {

        /*if (document.MAINFORM.CABLE_TYPE.value == '6') {
            SYT_GetCntyCode(document.MAINFORM.X202_ADV_BKSW_B2.value, document.MAINFORM.COUNTER_CNTY_CODE.name);
        } else {
            document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        }*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_FFIT_PMT_AC_NO();
        SYF_FFIT_COUNTER_CNTY_CODE();
        SYF_FFIT_X742_33B_AMT_qing();
        PaymentCustId(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.COUNTER_CNTY_CODE.value, document.MAINFORM.EXPT_ID.value);
        PMT_ConfirmCall();
        SYF_FFIT_COMMON_PRDT_CODE();
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        SYT_Check_AMT();

        if (EEHtml.getElementById('B').style.display == 'none') {
            SYT_DisableDivClass('B_div');
        }


        if (EEHtml.getElementById('C').style.display == 'none') {
            SYT_DisableDivClass('C_div');
        }
        
        if (EEHtml.getElementById('Z').style.display == 'none') {
            SYT_DisableDivClass('Z_div');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_check_acno()) {
            return false;
        }
        if (!SYT_WHZH_TRX_CODE_CHECK()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MT799 = function() {
    try {

        var tdMT799 = EEHtml.getElementById('B');
        var tdMT799_79 = EEHtml.getElementById('C');
        if ((document.MAINFORM.CABLE_TYPE.value == '1' ||
            document.MAINFORM.CABLE_TYPE.value == '2' ||
            document.MAINFORM.CABLE_TYPE.value == '3' ||
            document.MAINFORM.CABLE_TYPE.value == '4' ||
            document.MAINFORM.CABLE_TYPE.value == '5' ||
            document.MAINFORM.CABLE_TYPE.value == '11'
        ) && (
            Cable_Type != '1' || Cable_Type != '2' || Cable_Type != '3' || Cable_Type != '4' || Cable_Type != '5' || Cable_Type != '11')) {
            tdMT799.style.display = '';
            tdMT799_79.style.display = '';
            document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
            SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_79, 'M', 'N');
        } else if (Cable_Type == '1' || Cable_Type == '2' || Cable_Type == '3' || Cable_Type == '4' || Cable_Type == '5' || Cable_Type == '11') {
            tdMT799.style.display = 'none';
            tdMT799_79.style.display = 'none';
            document.MAINFORM.TEMP_N90_REF_20.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_79, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MT799_Telex = function() {
    try {

        /*
var tdTELEX=EEHtml.getElementById('K');
if(document.MAINFORM.CABLE_TYPE.value=='7'){
    tdTELEX.style.display='';
    document.MAINFORM.CORR_SW_ADD.value='BKCHCNBJTLX';                     
    //document.MAINFORM.TEMP_CHAR22.value=document.MAINFORM.C_MAIN_REF.value;
    SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR23,'M','N');
}
if(Cable_Type=='7'){
    tdTELEX.style.display='none';
    document.MAINFORM.CORR_SW_ADD.value='';                     
    //document.MAINFORM.TEMP_CHAR22.value='';
    SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR23,'O','N');
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MT799orMT202 = function() {
    try {

        var tdMT799 = EEHtml.getElementById('B');
        var tdMT799_79 = EEHtml.getElementById('C');
        var tdMT202 = EEHtml.getElementById('E');
        var tdTELEX = EEHtml.getElementById('K');
        if (document.MAINFORM.CABLE_TYPE.value == '6') {
            if (document.MAINFORM.TEMP_FLG1.value == '2') {
                tdMT799.style.display = 'none';
                tdMT799_79.style.display = 'none';
                tdTELEX.style.display = 'none';
                tdMT202.style.display = '';
                document.MAINFORM.TEMP_N90_REF_20.value = '';
                document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.TRX_DT.value;
                document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.TEMP_BP_CCY1.value;
                document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
                SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR1, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_BP_CCY1, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.PMT_AMT, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'M', 'N');
                if (document.MAINFORM.X202_TAG_58A.value == '') {
                    SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'M', 'N');
                }
                if (document.MAINFORM.X202_TAG_58A.value == 'A') {
                    SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKID_58A, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O', 'N');
                }
                if (document.MAINFORM.X202_TAG_58A.value == 'D') {
                    SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKID_58A, 'O', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'M', 'N');
                }
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG1, 'M', 'N');
            } else if (document.MAINFORM.TEMP_FLG1.value == '3') {
                tdMT799.style.display = 'none';
                tdMT799_79.style.display = 'none';
                tdTELEX.style.display = 'none';
                tdMT202.style.display = 'none';
                document.MAINFORM.X202_VALUE_DT_32A.value = '';
                document.MAINFORM.X202_CCY_32A.value = '';
                document.MAINFORM.X202_TRX_REF_NO_20.value = '';
                document.MAINFORM.X202_RELATEDNO_21.value = '';
                document.MAINFORM.TEMP_N90_REF_20.value = '';
                document.MAINFORM.TEMP_N90_REF_21.value = '';
                SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR1, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_BP_CCY1, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.PMT_AMT, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.PMT_AC_NO, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG1, 'M', 'N');
            }
        } else {
            if (document.MAINFORM.CABLE_TYPE.value == '1' || document.MAINFORM.CABLE_TYPE.value == '2' || document.MAINFORM.CABLE_TYPE.value == '3' || document.MAINFORM.CABLE_TYPE.value == '4' || document.MAINFORM.CABLE_TYPE.value == '5') {
                tdMT799.style.display = '';
                tdMT799_79.style.display = '';
                tdMT202.style.display = 'none';
                tdTELEX.style.display = 'none';
                document.MAINFORM.PMT_AMT.value = '0';
                document.MAINFORM.TEMP_BP_CCY1.value = '';
                GetTrxCcyExchRt(document.MAINFORM.FINC_CCY.value, document.MAINFORM.EXPT_ID.value);
                document.MAINFORM.PMT_AC_NO.value = '';
                document.MAINFORM.X202_VALUE_DT_32A.value = '';
                document.MAINFORM.X202_CCY_32A.value = '';
                document.MAINFORM.X202_TRX_REF_NO_20.value = '';
                document.MAINFORM.X202_RELATEDNO_21.value = '';
                document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
                document.MAINFORM.TEMP_CHAR1.value = '';
                SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR1, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR1, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_BP_CCY1, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.PMT_AMT, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.PMT_AC_NO, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG1, 'P', 'N');
            } else if (document.MAINFORM.CABLE_TYPE.value == '7') {
                tdMT799.style.display = 'none';
                tdMT799_79.style.display = '';
                tdMT202.style.display = 'none';
                tdTELEX.style.display = '';
                //document.MAINFORM.TEMP_CHAR21.value='BKCHCNBJTLX';
                document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
                document.MAINFORM.PMT_AMT.value = '0';
                document.MAINFORM.TEMP_BP_CCY1.value = '';
                GetTrxCcyExchRt(document.MAINFORM.FINC_CCY.value, document.MAINFORM.EXPT_ID.value);
                document.MAINFORM.PMT_AC_NO.value = '';
                document.MAINFORM.X202_VALUE_DT_32A.value = '';
                document.MAINFORM.X202_CCY_32A.value = '';
                document.MAINFORM.X202_TRX_REF_NO_20.value = '';
                document.MAINFORM.X202_RELATEDNO_21.value = '';
                document.MAINFORM.TEMP_N90_REF_20.value = '';
                document.MAINFORM.TEMP_N90_REF_21.value = '';
                document.MAINFORM.TEMP_CHAR1.value = '';
                SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR1, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_BP_CCY1, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.PMT_AMT, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.PMT_AC_NO, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG1, 'P', 'N');
            } else {
                tdMT202.style.display = 'none';
                document.MAINFORM.PMT_AMT.value = '0';
                document.MAINFORM.TEMP_BP_CCY1.value = '';
                GetTrxCcyExchRt(document.MAINFORM.FINC_CCY.value, document.MAINFORM.EXPT_ID.value);
                document.MAINFORM.PMT_AC_NO.value = '';
                document.MAINFORM.X202_VALUE_DT_32A.value = '';
                document.MAINFORM.X202_CCY_32A.value = '';
                document.MAINFORM.X202_TRX_REF_NO_20.value = '';
                document.MAINFORM.X202_RELATEDNO_21.value = '';
                document.MAINFORM.TEMP_N90_REF_20.value = '';
                document.MAINFORM.TEMP_N90_REF_21.value = '';
                document.MAINFORM.TEMP_CHAR1.value = '';
                SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR1, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.PMT_AMT, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_BP_CCY1, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.PMT_AC_NO, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKID_58A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG1, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'O', 'N');
                tdMT799.style.display = 'none';
                tdMT799_79.style.display = 'none';
                tdTELEX.style.display = 'none';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MT999 = function() {
    try {

        var tdMT999 = EEHtml.getElementById('G');
        if ((document.MAINFORM.CABLE_TYPE.value == '11') && (Cable_Type != '11')) {
            tdMT999.style.display = '';
            document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
            SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'M', 'N');
        } else if (Cable_Type == '11') {
            tdMT999.style.display = 'none';
            document.MAINFORM.TEMP_N90_REF_20.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_REF_21, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PMT_AC_NO = function() {
    try {

        if ((document.MAINFORM.CABLE_TYPE.value == '6') && (document.MAINFORM.PMT_AC_NO.value != '')) {
            document.MAINFORM.COVER_AC_NO_CR.value = document.MAINFORM.PMT_AC_NO.value;
            document.MAINFORM.COVER_CCY_CR.value = document.MAINFORM.TEMP_BP_CCY1.value;
        } else {
            document.MAINFORM.PMT_AC_NO.value = '';
            document.MAINFORM.COVER_AC_NO_CR.value = '';
            document.MAINFORM.COVER_CCY_CR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PMT_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.PMT_AMT.value) > 0) {
            document.MAINFORM.PMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY1.value, document.MAINFORM.PMT_AMT.value);
            PaymentCcyAmt('', '');
            PaymentCcyAmt(document.MAINFORM.TEMP_BP_CCY1.value, document.MAINFORM.PMT_AMT.value);
        } else {
            PaymentCcyAmt('', '');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PMT_PAGE_onchange = function() {
    try {

    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            GetTrxCcyExchRt(document.MAINFORM.TEMP_BP_CCY1.value, document.MAINFORM.EXPT_ID.value);
            SYF_FFIT_TEMP_BP_CCY1();
            SYT_RELE_CREA_BY();
            SYT_GetCustAcNo(document.MAINFORM.EXPT_ID.value);
            PaymentGetCustAcno();
            //InitEvent_MT202();
            SYF_FFIT_MT799();
            SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'O', 'N');
            //SYF_FFIT_MT();
            SYF_FFIT_PMT_AMT();
            //SYF_FFIT_CHANGEFIELD();
            SYT_ExchRate_FIX_PENDING();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYF_FFIT_TEMP_BP_CCY1();
            SYF_FFIT_MT799()
            SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'O', 'N');
            //SYF_FFIT_MT();
            //SYF_FFIT_PMT_AMT();
            //SYF_FFIT_CHANGEFIELD();
        }
        document.MAINFORM.NET_DR_CCY.value = document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.NET_DR_AMT.value = document.MAINFORM.FINC_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            //SYT_loadExchRate();
            GetTrxCcyExchRt(document.MAINFORM.FINC_CCY.value, document.MAINFORM.EXPT_ID.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetRefNo = function() {
    try {

        //document.MAINFORM.C_MAIN_REF.value=ref;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_BP_CCY1 = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.PMT_AMT.value) > 0 && document.MAINFORM.TEMP_BP_CCY1.value != '') {
            document.MAINFORM.PMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY1.value, document.MAINFORM.PMT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_FLG1 = function() {
    try {

        if (document.MAINFORM.CABLE_TYPE.value == '6') {
            if (document.MAINFORM.TEMP_FLG1.value == '2') {
                document.MAINFORM.PMT_AC_NO.value = GL9992;
                SYT_ChangeFldClass(document.MAINFORM.PMT_AC_NO, 'P', 'N');
            } else if (document.MAINFORM.TEMP_FLG1.value == '3') {
                document.MAINFORM.PMT_AC_NO.value = '';
                SYT_ChangeFldClass(document.MAINFORM.PMT_AC_NO, 'M', 'N');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X202_1_32A_AMT = function() {
    try {

        if ((document.MAINFORM.CABLE_TYPE.value == '6') && (SYS_BeFloat(document.MAINFORM.PMT_AMT.value) > 0 || document.MAINFORM.TEMP_BP_CCY1.value != '')) {
            document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.PMT_AMT.value;
            document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.TEMP_BP_CCY1.value;
            document.MAINFORM.COVER_AMT_CR.value = document.MAINFORM.PMT_AMT.value;

        } else {
            document.MAINFORM.X202_AMT_32A.value = '0';
            document.MAINFORM.TEMP_BP_CCY1.value = '';
            document.MAINFORM.COVER_AMT_CR.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X202_1_B2 = function() {
    try {

        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CableOut_SYF_FFIT_X202_1_B2_1', '1');
        } else {
            document.MAINFORM.TEMP_NM2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X202_32A_CCY_AMT = function() {
    try {

        document.MAINFORM.X202_AMT_32A.value = SYT_CCY_AMT(document.MAINFORM.X202_CCY_32A.value, document.MAINFORM.X202_AMT_32A.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X742_32B_CCY_AMT = function() {
    try {

        document.MAINFORM.X742_32B_AMT.value = SYT_CCY_AMT(document.MAINFORM.X742_32B_CCY.value, document.MAINFORM.X742_32B_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X742_33B_AMT_qing = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.X742_33B_AMT.value) == 0 && document.MAINFORM.X742_33B_CCY.value != '') {
            document.MAINFORM.X742_33B_CCY.value = '';
        }
        if (document.MAINFORM.X742_33B_CCY.value == '') {
            if (SYS_BeFloat(document.MAINFORM.X742_33B_AMT.value) == 0) {
                document.MAINFORM.X742_33B_AMT.value = '';
                document.MAINFORM.X742_33B_AMT.className = "CHAR_O";
            } else {
                document.MAINFORM.X742_33B_AMT.className = "AMT_O";
            }
        } else {
            document.MAINFORM.X742_33B_AMT.className = "AMT_O";
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X742_33B_CCY_AMT = function() {
    try {

        document.MAINFORM.X742_33B_AMT.value = SYT_CCY_AMT(document.MAINFORM.X742_33B_CCY.value, document.MAINFORM.X742_33B_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X742_34A_CCY_AMT = function() {
    try {

        document.MAINFORM.X742_34A_AMT.value = SYT_CCY_AMT(document.MAINFORM.X742_34A_CCY.value, document.MAINFORM.X742_34A_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X742_52A_BIC = function() {
    try {

        if (document.MAINFORM.X742_52A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CableOut_SYF_FFIT_X742_52A_BIC_2', '1');
        } else {
            document.MAINFORM.X742_52A_ID.value = '';
            document.MAINFORM.X742_52A_ADD.value = '';
        }
        if (document.MAINFORM.X742_52A_BIC.value != '') {
            document.MAINFORM.X742_52A_TAG.value = 'A';
        } else if (document.MAINFORM.X742_52A_ADD.value != '') {
            document.MAINFORM.X742_52A_TAG.value = 'D';
        } else {
            document.MAINFORM.X742_52A_TAG.value = '';
        }
        EEHtml.fireEvent(document.MAINFORM.X742_52A_TAG, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X742_52A_ID = function() {
    try {

        if (document.MAINFORM.X742_52A_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CableOut_SYF_FFIT_X742_52A_ID_3', '1');
        } else {
            document.MAINFORM.X742_52A_BIC.value = '';
            document.MAINFORM.X742_52A_ADD.value = '';
        }
        if (document.MAINFORM.X742_52A_BIC.value != '') {
            document.MAINFORM.X742_52A_TAG.value = 'A';
        } else if (document.MAINFORM.X742_52A_ADD.value != '') {
            document.MAINFORM.X742_52A_TAG.value = 'D';
        } else {
            document.MAINFORM.X742_52A_TAG.value = '';
        }
        EEHtml.fireEvent(document.MAINFORM.X742_52A_TAG, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X742_57A_BIC = function() {
    try {

        if (document.MAINFORM.X742_57A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CableOut_SYF_FFIT_X742_57A_BIC_4', '1');
        } else {
            document.MAINFORM.X742_57A_ID.value = '';
            document.MAINFORM.X742_57A_ADD.value = '';
        }
        if (document.MAINFORM.X742_57A_BIC.value != '') {
            document.MAINFORM.X742_57A_TAG.value = 'A';
        } else if (document.MAINFORM.X742_57A_ADD.value != '') {
            document.MAINFORM.X742_57A_TAG.value = 'D';
        } else {
            document.MAINFORM.X742_57A_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X742_57A_ID = function() {
    try {

        if (document.MAINFORM.X742_57A_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CableOut_SYF_FFIT_X742_57A_ID_5', '1');
        } else {
            document.MAINFORM.X742_57A_BIC.value = '';
            document.MAINFORM.X742_57A_ADD.value = '';
            document.MAINFORM.X742_57A_NM.value = '';
        }
        if (document.MAINFORM.X742_57A_BIC.value != '') {
            document.MAINFORM.X742_57A_TAG.value = 'A';
        } else if (document.MAINFORM.X742_57A_ADD.value != '') {
            document.MAINFORM.X742_57A_TAG.value = 'D';
        } else {
            document.MAINFORM.X742_57A_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X742_58A_BIC = function() {
    try {

        if (document.MAINFORM.X742_58A_BIC.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CableOut_SYF_FFIT_X742_58A_BIC_6', '1');
        } else {
            document.MAINFORM.X742_58A_ID.value = '';
            document.MAINFORM.X742_58A_ADD.value = '';
        }
        if (document.MAINFORM.X742_58A_BIC.value != '') {
            document.MAINFORM.X742_58A_TAG.value = 'A';
        } else if (document.MAINFORM.X742_58A_ADD.value != '') {
            document.MAINFORM.X742_58A_TAG.value = 'D';
        } else {
            document.MAINFORM.X742_58A_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X742_58A_ID = function() {
    try {

        if (document.MAINFORM.X742_58A_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CableOut_SYF_FFIT_X742_58A_ID_7', '1');
        } else {
            document.MAINFORM.X742_58A_BIC.value = '';
            document.MAINFORM.X742_58A_ADD.value = '';
        }
        if (document.MAINFORM.X742_58A_BIC.value != '') {
            document.MAINFORM.X742_58A_TAG.value = 'A';
        } else if (document.MAINFORM.X742_58A_ADD.value != '') {
            document.MAINFORM.X742_58A_TAG.value = 'D';
        } else {
            document.MAINFORM.X742_58A_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_check_acno = function() {
    try {

        var a1 = document.MAINFORM.PMT_CUST_AC_NO1.value;
        var a2 = document.MAINFORM.PMT_CUST_AC_NO2.value;
        var a3 = document.MAINFORM.PMT_CUST_AC_NO3.value;
        var a4 = document.MAINFORM.PMT_CUST_AC_NO4.value;
        var a5 = document.MAINFORM.PMT_CUST_AC_NO5.value;
        var b1 = document.MAINFORM.PMT_EQ_AMT1.value;
        var b2 = document.MAINFORM.PMT_EQ_AMT2.value;
        var b3 = document.MAINFORM.PMT_EQ_AMT3.value;
        var b4 = document.MAINFORM.PMT_EQ_AMT4.value;
        var b5 = document.MAINFORM.PMT_EQ_AMT5.value;
        if (SYS_BeFloat(document.MAINFORM.NET_DR_AMT.value) > '0') {
            if ((b1 > '0') && (a1 == '')) {
                SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO1, 'Please input the account No.1!');
                return false;
            } else if ((b2 > '0') && (a2 == '')) {
                SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO2, 'Please input the account No.2!');
                return false;
            } else if ((b3 > '0') && (a3 == '')) {
                SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO3, 'Please input the account No.3!');
                return false;
            } else if ((b4 > '0') && (a4 == '')) {
                SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO4, 'Please input the account No.4!');
                return false;
            } else if ((b5 > '0') && (a5 == '')) {
                SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO5, 'Please input the account No.5!');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.NET_DR_CCY.value = document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.NET_DR_AMT.value = document.MAINFORM.FINC_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ADD1_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ADD2_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ADD3_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ADD_BTN2_onclick = function(event) {
    try {
        Cal_AC_WT_INST_ADD_BTN2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ID_onchange = function(event) {
    try {
        Cal_AC_WT_INST_ID();
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ID_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_NM_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ORDER_NO_onchange = function(event) {
    try {
        Cal_AC_WT_INST_ID_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_SW_ADD_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUTTON_MT742_52_ID_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_52A_ID', 'X742_52A_ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUTTON_MT742_52_SW_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_52A_SW', 'X742_52A_SW');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUTTON_MT742_57_ID_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_57A_ID', 'X742_57A_ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUTTON_MT742_57_SW_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_57A_SW', 'X742_57A_SW');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUTTON_MT742_58_ID_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_58A_ID', 'X742_58A_ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUTTON_MT742_58_SW_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_58A_SW', 'X742_58A_SW');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_FAV_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CABLE_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_MT799()
        //SYF_FFIT_MT();
        SYF_FFIT_TEMP_FLG1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHECK_BOX_798_onchange = function(event) {
    try {
        Cal_SUB_MESS_TYPE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ADD1_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ADD2_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ADD3_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ADD_BTN_onclick = function(event) {
    try {
        CAL_CORR_MULT_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ADD_ORDER_NO_onchange = function(event) {
    try {
        Cal_CORR_ID_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_CUST_BANK_onchange = function(event) {
    try {
        CAL_Clear_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ID_onchange = function(event) {
    try {
        Cal_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ID_BTN_onclick = function(event) {
    try {
        CAL_CORR_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_NM_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ORDER_NO_onchange = function(event) {
    try {
        Cal_CORR_POST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_POST_BTN_onclick = function(event) {
    try {
        Cal_CORR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_SW_ADD_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();

        Cal_CORR_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_C_MAIN_REF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_TYPE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MESG_TYPE_onchange = function(event) {
    try {
        Set_CORR_SW_ADD();
        Cal_CORR_EMAIL_ADD();
        Cal_CORR_FAX_NO();
        Cal_CORR_MAIL_ADD();
        Cal_CORR_TLX_NO();
        Cal_TEMP_MESG_TYPE();
        Cal_MESG_TYPE();
        Cal_TEMP_DT_ORGNL_MSG();
        Cal_TEMP_MAIL_TXT();
        Cal_TEMP_N90_AC_IDN_25();
        Cal_TEMP_N90_CHG_32();
        Cal_TEMP_N90_CHG_71();
        Cal_TEMP_N90_DT_32();
        Cal_TEMP_N90_SNDINF_72();
        Cal_TEMP_N95_NARR_77();
        Cal_TEMP_N95_NARR_79();
        Cal_TEMP_N95_QA_75();
        Cal_TEMP_ORGNLMSG_TYPE();
        Cal_TEMP_SND_RCV_11();
        Cal_TEMP_REF();
        Cal_MTn91_52_57();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_NET_DR_AMT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_NET_DR_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ADD1_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ADD2_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ADD3_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ADD_BTN_onclick = function(event) {
    try {
        Cal_ORDER_INST_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ID_onchange = function(event) {
    try {
        Cal_ORDER_INST_ID();
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ID_BTN_onclick = function(event) {
    try {
        Cal_ORDER_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_NM_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ORDER_NO_onchange = function(event) {
    try {
        Cal_ORDER_INST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_SW_ADD_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PMT_AC_NO_onchange = function(event) {
    try {
        SYF_FFIT_PMT_AC_NO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PMT_AMT_onchange = function(event) {
    try {
        SYF_FFIT_PMT_AMT();
        SYF_FFIT_X202_1_32A_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PMT_CNTY_CODE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PMT_CUST_AC_NO2_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PMT_CUST_ID_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SELLING_CUST_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY1_onchange = function(event) {
    try {
        GetTrxCcyExchRt(document.MAINFORM.TEMP_BP_CCY1.value, document.MAINFORM.EXPT_ID.value);
        SYF_FFIT_PMT_AMT();
        SYF_FFIT_X202_1_32A_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_CATEGORY_FLG_onchange = function(event) {
    try {
        Cal_TEMP_MESG_TYPE();
        Cal_MESG_TYPE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_DT_ORGNL_MSG_onchange = function(event) {
    try {
        Cal_TEMP_SND_RCV_11();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG1_onchange = function(event) {
    try {
        SYF_FFIT_MT799()
        SYF_FFIT_MT202();
        Pmt_Type = document.MAINFORM.TEMP_FLG1.value;
        SYF_FFIT_TEMP_FLG1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_MAIL_TXT_BTN_onclick = function(event) {
    try {
        Cal_TEMP_MAIL_TXT_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_N90_CCY_32_onchange = function(event) {
    try {
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_N90_CHG_32_onchange = function(event) {
    try {
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_N90_DT_32_onchange = function(event) {
    try {
        //Chk_TEMP_N90_DT_32();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_N95_NARR_79_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_ORGNLMSG_TYPE_onchange = function(event) {
    try {
        Chk_TEMP_ORGNLMSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_REF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CableOut.js", e);
    }
}