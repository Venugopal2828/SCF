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
        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.TEMP_AMT54.value != '') {
            document.MAINFORM.TEMP_AMT54.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT54.value);
        }
        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.PRE_OVS_CHG_BUY.value != '') {
            document.MAINFORM.PRE_OVS_CHG_BUY.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.PRE_OVS_CHG_BUY.value);
        }
        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.TEMP_AMT.value != '') {
            document.MAINFORM.TEMP_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT.value);
        }
        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.OVS_CHG.value != '') {
            document.MAINFORM.OVS_CHG.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.OVS_CHG.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CHANGEFIELD = function() {
    try {

        if (document.MAINFORM.TEMP_FLG3.value == '1' || document.MAINFORM.TEMP_FLG3.value == '4' || document.MAINFORM.TEMP_FLG3.value == '5' || document.MAINFORM.TEMP_FLG3.value == '6') {
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'P', 'N');
        } else if (document.MAINFORM.TEMP_FLG3.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'P', 'N');
            //SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO,'M','N');
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COVER_BGL_ACNO = function() {
    try {

        if (document.MAINFORM.TEMP_FLG3.value == '1') {
            document.MAINFORM.CR_AC_NO.value = GL9992;
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'P', 'N');
            document.MAINFORM.COVER_BGL_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'P', 'N');
        }
        /*else if(document.MAINFORM.TEMP_FLG3.value=='2')
{
document.MAINFORM.CR_AC_NO.value=GL9992;
SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO,'P','N');
SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO,'M','N');
}*/
        else if (document.MAINFORM.TEMP_FLG3.value == '4' || document.MAINFORM.TEMP_FLG3.value == '6') {
            document.MAINFORM.CR_AC_NO.value = CGL9991;
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COVER_DRAC_BUSI_TYPE = function() {
    try {

        if (document.MAINFORM.CR_LONG_FLG.value == '4') {
            document.MAINFORM.COVER_AC_NO_CR.value = document.MAINFORM.LONG_AMT_AC_NO.value;
            document.MAINFORM.COVER_AMT_CR.value = document.MAINFORM.LONG_AMT.value;
            document.MAINFORM.COVER_CCY_CR.value = document.MAINFORM.FINC_CCY.value;
            if (document.MAINFORM.TEMP_FLG2.value == '1') {
                document.MAINFORM.COVER_BR_ID2.value = document.MAINFORM.GTS_BR_ID.value;
                document.MAINFORM.COVER_CRAC_BUSI_TYPE.value = INTERFACE_BANCS_CR_TRX_CODE;
            } else if (document.MAINFORM.TEMP_FLG2.value == '2') {

                document.MAINFORM.COVER_CRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_COVER_DRAC_BUSI_TYPE_0', '1');
            } else if (document.MAINFORM.TEMP_FLG2.value == '3') {
                document.MAINFORM.COVER_CRAC_BUSI_TYPE.value = INTERFACE_BANCS_BGLCR_TRX_CODE;
                document.MAINFORM.COVER_BR_ID2.value = document.MAINFORM.GTS_BR_ID.value;
            }
        }
        document.MAINFORM.COVER_AC_NO_DR.value = document.MAINFORM.CR_AC_NO.value;
        document.MAINFORM.COVER_AMT_DR.value = document.MAINFORM.CR_AMT.value;
        document.MAINFORM.COVER_CCY_DR.value = document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.FINC_TYPE.value;
        if (document.MAINFORM.TEMP_FLG3.value == '1') {
            document.MAINFORM.COVER_DRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_COVER_DRAC_BUSI_TYPE_1', '1');
        } else if (document.MAINFORM.TEMP_FLG3.value == '2') {
            document.MAINFORM.COVER_DRAC_BUSI_TYPE.value = INTERFACE_BANCS_BGLDR_TRX_CODE;
            document.MAINFORM.COVER_BR_ID.value = document.MAINFORM.GTS_BR_ID.value;
        } else if (document.MAINFORM.TEMP_FLG3.value == '5') {
            document.MAINFORM.COVER_DRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
            document.MAINFORM.COVER_BR_ID.value = document.MAINFORM.GTS_BR_ID.value;
        } else if (document.MAINFORM.TEMP_FLG3.value == '4') {
            document.MAINFORM.COVER_DRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
            document.MAINFORM.COVER_BR_ID.value = document.MAINFORM.GTS_BR_ID.value;
        } else if (document.MAINFORM.TEMP_FLG3.value == '6') {
            document.MAINFORM.COVER_DRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
            document.MAINFORM.COVER_BR_ID.value = document.MAINFORM.GTS_BR_ID.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CR_AMT = function() {
    try {

        /*
if(SYS_BeFloat(document.MAINFORM.CR_AMT.value)>0)
{
   if(document.MAINFORM.TRF_SHORT_FLG.value=='2'||document.MAINFORM.CR_LONG_FLG.value=='1'||document.MAINFORM.SHORT_REASON.value=='2'||document.MAINFORM.SHORT_REASON.value=='3')	
   {
        document.MAINFORM.RPT_SETT_FLAG.value='NO';
        SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_FLAG,'O','N');
        Rpt_ChangeFieldClass();
        RPT_ISPRINTFLG();
   }
   else
   {
        document.MAINFORM.RPT_TRX_CCY.value=document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.RPT_TRX_CCY1.value=document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.RPT_TRX_AMT.value=document.MAINFORM.CR_AMT.value;
        document.MAINFORM.RPT_TRX_AMT1.value=document.MAINFORM.CR_AMT.value;
        document.MAINFORM.RPT_TRX_AMT.value=SYT_CCY_AMT('JPY',document.MAINFORM.RPT_TRX_AMT.value);
        document.MAINFORM.RPT_TRX_AMT1.value=SYT_CCY_AMT('JPY',document.MAINFORM.RPT_TRX_AMT1.value);
        document.MAINFORM.RPT_SETT_FLAG.value='YES';
        if(document.MAINFORM.RPT_DCLR_NO.value=='')
        {
        SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_FLAG,'M','Y'); 
        }
        else
        {
        SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_FLAG,'M','N'); 
        Rpt_ChangeFieldClass(); 
        RPT_ISPRINTFLG();
        }	
        
    }
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CR_LONG_FLG = function() {
    try {

        var sEQAMT; // Utility Auto Fix Comments
        var sMAINREF; // Utility Auto Fix Comments
        var tdMT202; // Utility Auto Fix Comments
        sMAINREF = document.MAINFORM.C_MAIN_REF.value.substring(4, 6);
        tdMT202 = EEHtml.getElementById('K');
        if (sMAINREF == 'FP') {
            tdMT202.style.display = '';
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'M', 'N');
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
        } else if ((document.MAINFORM.CR_LONG_FLG.value == '4') && (SYS_BeFloat(document.MAINFORM.LONG_AMT.value) > 0) && ((sMAINREF == 'FT') || (sMAINREF == 'AD'))) {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'M', 'N');
            if (document.MAINFORM.TEMP_FLG2.value == '2') {
                tdMT202.style.display = '';
                SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'P', 'N');
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
                SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'M', 'N');
                document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
                document.MAINFORM.X202_VALUE_DT_32A.value = SYS_BUSI_DATE;
                document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.FINC_CCY.value;
                document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.LONG_AMT.value;
                SYS_GetExchangeRate_Boc(document.MAINFORM.FINC_CCY.value, 'USD', 'Selling Rate', 'TEMP_CHAR18');
                SYS_GetExchangeRate_Boc('USD', 'USD', 'Buying Rate', 'TEMP_CHAR19');
                if (document.MAINFORM.FINC_CCY.value != 'USD') {
                    sEQAMT = SYS_BeFloat(document.MAINFORM.LONG_AMT.value) * document.MAINFORM.TEMP_CHAR18.value / document.MAINFORM.TEMP_CHAR19.value;
                } else {
                    sEQAMT = SYS_BeFloat(document.MAINFORM.LONG_AMT.value);
                }
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_CR_LONG_FLG_2', '1');
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_CR_LONG_FLG_3', '1');
            } else if (document.MAINFORM.TEMP_FLG2.value == '1' || document.MAINFORM.TEMP_FLG2.value == '3') {
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
            document.MAINFORM.TEMP_FLG2.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'P', 'N');
        }
        if (document.MAINFORM.FFT_TYPE.value == '2' && SYS_BeFloat(document.MAINFORM.LONG_AMT.value) > 0 && document.MAINFORM.CR_LONG_FLG.value == '3') {
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'M', 'N');
        } else if (document.MAINFORM.FFT_TYPE.value == '2' && SYS_BeFloat(document.MAINFORM.LONG_AMT.value) > 0 && document.MAINFORM.CR_LONG_FLG.value == '4' && (document.MAINFORM.TEMP_FLG2.value == '1' || document.MAINFORM.TEMP_FLG2.value == '3')) {
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CUST_AC_EQ_AMT = function() {
    try {

        var sAmtPaid; // Utility Auto Fix Comments
        var sTEMP_AMT59; // Utility Auto Fix Comments
        //CUST A/C EQ AMT=AMT PAID+ PRE DEDUCTED CHG-FFT AMT- TTL COMM APPLICANT- TOTAL CABLE APPLICA
        //document.MAINFORM.TEMP_AMT59.value
        sAmtPaid = 0;

        if (document.MAINFORM.FFT_TYPE.value == '2') {
            if (SYS_BeFloat(document.MAINFORM.LONG_AMT.value) > 0) {
                if (document.MAINFORM.CR_LONG_FLG.value == '2') {
                    sAmtPaid = document.MAINFORM.CR_AMT.value;
                } else if (document.MAINFORM.CR_LONG_FLG.value == '1' || document.MAINFORM.CR_LONG_FLG.value == '4' || document.MAINFORM.CR_LONG_FLG.value == '3') {
                    sAmtPaid = SYS_BeFloat(document.MAINFORM.CR_AMT.value) - SYS_BeFloat(document.MAINFORM.LONG_AMT.value);
                } else {
                    sAmtPaid = 0;
                }
            } else if (SYS_BeFloat(document.MAINFORM.SHORT_AMT.value) > 0) {
                if (document.MAINFORM.SHORT_REASON.value == '1') {
                    sAmtPaid = document.MAINFORM.CR_AMT.value;
                } else {
                    sAmtPaid = 0;
                }
            } else if (SYS_BeFloat(document.MAINFORM.SHORT_AMT.value) == 0 || SYS_BeFloat(document.MAINFORM.LONG_AMT.value) == 0) {
                sAmtPaid = document.MAINFORM.CR_AMT.value;
            } else {
                sAmtPaid = 0;

            }


            if (document.MAINFORM.CR_LONG_FLG.value == '' && document.MAINFORM.SHORT_REASON.value == '') {
                sAmtPaid = document.MAINFORM.CR_AMT.value;
            }


            if (SYS_BeFloat(document.MAINFORM.CR_AMT.value) != 0 || SYS_BeFloat(document.MAINFORM.TEMP_AMT54.value) != 0 || SYS_BeFloat(document.MAINFORM.FINC_AMT.value) != 0 || SYS_BeFloat(document.MAINFORM.APPL_COMM.value) != 0) {
                if ((document.MAINFORM.SHORT_REASON.value == '2' || document.MAINFORM.SHORT_REASON.value == '3') && document.MAINFORM.CR_LONG_FLG.value == '') {
                    document.MAINFORM.TEMP_AMT59.value = 0;
                } else {
                    document.MAINFORM.TEMP_AMT59.value = SYS_BeFloat(sAmtPaid) + SYS_BeFloat(document.MAINFORM.TEMP_AMT54.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT2.value) - SYS_BeFloat(document.MAINFORM.APPL_COMM.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT30.value);
                    document.MAINFORM.TEMP_AMT59.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT59.value); // Utility Auto Fix Comments
                }
            }

            /*
//settle,payment-subpage;

      if(SYS_BeFloat(document.MAINFORM.TEMP_AMT59.value)>0)
      {
	if(document.MAINFORM.CR_LONG_FLG.value=='4')
	{
		//SettleReturnOvsAmt(document.MAINFORM.FINC_CCY.value,document.MAINFORM.TEMP_AMT59.value);
                  SettleCcyAmt(document.MAINFORM.FINC_CCY.value,document.MAINFORM.TEMP_AMT59.value)
  		SettleReturnOvsAmt('','','');
		PaymentCcyAmt('','');
	}else if((document.MAINFORM.CR_LONG_FLG.value=='2')||(document.MAINFORM.SHORT_REASON.value=='1')||(document.MAINFORM.CR_LONG_FLG.value=='1')||(document.MAINFORM.CR_LONG_FLG.value=='3'))
	{
		SettleCcyAmt(document.MAINFORM.FINC_CCY.value,document.MAINFORM.TEMP_AMT59.value);
		SettleReturnOvsAmt('','','');
		PaymentCcyAmt('','');
	}else if((document.MAINFORM.CR_LONG_FLG.value=='')&&(document.MAINFORM.SHORT_REASON.value=='')) 
         {
                  SettleCcyAmt(document.MAINFORM.FINC_CCY.value,document.MAINFORM.TEMP_AMT59.value);
	         SettleReturnOvsAmt('','','');
	         PaymentCcyAmt('','');
         }else
	{
	  	SettleCcyAmt('','');
  	  	SettleReturnOvsAmt('','','');	
		PaymentCcyAmt('','');	
	}
      }else if(SYS_BeFloat(document.MAINFORM.TEMP_AMT59.value)<0)
      {
	          sTEMP_AMT59=-SYS_BeFloat(document.MAINFORM.TEMP_AMT59.value);	
	          PaymentCcyAmt (document.MAINFORM.FINC_CCY.value,sTEMP_AMT59);
	          SettleCcyAmt('','');
  	          SettleReturnOvsAmt('','','');
      }else
      {
	          SettleCcyAmt('','');
  	          SettleReturnOvsAmt('','','');
	          PaymentCcyAmt('','');
       }*/
        }
        /*
else
{
	  document.MAINFORM.TEMP_AMT59.value=0;
	  SettleCcyAmt('','');
  	  SettleReturnOvsAmt('','','');
	  PaymentCcyAmt ('','');
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        /* 2010-09-09 Jacob.lu
if(document.MAINFORM.RPT_SETT_FLAG.value=='YES')
{
SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE,'M','N');
Rpt_ChangeFieldClass();
}
else
{
SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE,'O','N');
Rpt_ChangeFieldClass();
}*/
        //Rpt_ChangeFieldClass();
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

        /*
if(SYS_BeFloat(document.MAINFORM.NET_CR_AMT.value)>0)
{
SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO1,'M','N');
}

if(SYS_BeFloat(document.MAINFORM.NET_DR_AMT.value)>'0')
{
        SYT_ChangeFldClass(document.MAINFORM.PMT_CUST_AC_NO1,'O','N');
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ClaimAmtApplCommOnchange = function() {
    try {

        document.MAINFORM.CLAIM_AMT.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) + SYS_BeFloat(document.MAINFORM.APPL_COMM.value);
        document.MAINFORM.CLAIM_BAL.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT2.value) + SYS_BeFloat(document.MAINFORM.APPL_COMM.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_FFIT_FINC_PAY_AMT();
        document.MAINFORM.FINC_CPS_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        SYF_FFIT_set_842_no();

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

        SYF_FFIT_TEMP_CHAR2();
        SYF_FFIT_TEMP_CHAR2_1();
        SYF_FFIT_TEMP_AMT3();
        SYF_FFIT_VENT_CUST_AC_NO1();
        SYF_FFIT_TEMP_CHAR6();
        SYF_FFIT_FINC_BAL();
        SYF_FFIT_TEMP_CHAR5();

        SYF_FFIT_COUNTER_CNTY_CODE();
        //PaymentCustId(document.MAINFORM.C_MAIN_REF.value,document.MAINFORM.COUNTER_CNTY_CODE.value,document.MAINFORM.EXPT_ID.value);
        //SettleCustId(document.MAINFORM.C_MAIN_REF.value,document.MAINFORM.COUNTER_CNTY_CODE.value,document.MAINFORM.EXPT_ID.value);
        //PMT_ConfirmCall();
        //SETT_ConfirmCall();
        SYF_FFIT_COVER_DRAC_BUSI_TYPE();
        SYF_FFIT_FINC_PAY_DT();
        //ConfirmBusinessCall_COMM();
        SYF_FFIT_TEMP_AMT5();
        document.MAINFORM.TEMP_AMT31.value = SYS_BeFloat(document.MAINFORM.TRF_CUAZHANG_AMT.value);
        document.MAINFORM.TEMP_AMT31.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT31.value);
        //SYT_Check_AMT();
        SYT_CHG_VOUCHER();

        if (document.MAINFORM.TEMP_FLG4.value == 'YES') {
            //document.MAINFORM.ST_8114_AMT.value=document.MAINFORM.SETT_EQ_AMT1.value;
            //document.MAINFORM.ST_8114_BAL.value=document.MAINFORM.SETT_EQ_AMT1.value;
            //document.MAINFORM.CR_8114_ST_ACNO.value=document.MAINFORM.SETT_CUST_AC_NO1.value;
            document.MAINFORM.CR_8114_ST_DT.value = SYS_BUSI_DATE;
            //  document.MAINFORM.DECLARE_NO_ST.value=SYT_subDeclare(document.MAINFORM.SETT_VCH_DESC_S1.value);//mark
        } else {
            document.MAINFORM.ST_8114_AMT.value = 0.00;
            document.MAINFORM.ST_8114_BAL.value = 0.00;
            document.MAINFORM.CR_8114_ST_ACNO.value = "";
            document.MAINFORM.CR_8114_ST_DT.value = "";
            document.MAINFORM.DECLARE_NO_ST.value = '';
        }

        //document.MAINFORM.TEMP_CHAR3.value=document.MAINFORM.RPT_TRX_CCY2.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_TEMP_AMT4()) {
            return false;
        }
        /*
if(!SYF_FFIT_check_acno())
{
return false;
}
*/
        if (!SYF_FFIT_XuCuiShou_FenQiFuKuan_check()) {
            return false;
        }
        if (!SYF_FFIT_FEIYONG_KONGZHI()) {
            return false;
        }
        /*
if(!RptConfirmCheck())
{
return false;
}
*/
        if (!SYF_FFIT_TRF_LONG_SHPRT_FLG()) {
            return false;
        }
        if (!SYT_WHZH_TRX_CODE_CHECK()) {
            return false;
        }
        if (!SYF_FFIT_CHECK_842_NO()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FEIYONG_KONGZHI = function() {
    try {

        var A; // Utility Auto Fix Comments
        var chgmothd; // Utility Auto Fix Comments
        var feenumber; // Utility Auto Fix Comments
        var feenumber0; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        /*
feenumber0=document.MAINFORM.FEE_NUMBER.value;  

A='0';
        for(i = 0; i < feenumber0; i++)
        {       
                feenumber=i;
                chgmothd=EEHtml.getElementById('CHG_MTHD_'+feenumber);
                if(chgmothd.value=='TRANSACTION')
                {
                   A='1';
                   break;
                }
        }
        if(A=='1'&&document.MAINFORM.FFT_TYPE.value=='1')
        {
        	SYS_CheckError(chgmothd,'Only deferred under the transfer transaction!');
        	return false;
        }
*/
        //else
        //{
        return true;
        //}
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FFT_CHG_FLG = function() {
    try {

        //CHG_INOUT_FLAG('IN',document.MAINFORM.FINC_CCY.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FFT_TYPE = function() {
    try {

        if (document.MAINFORM.FFT_TYPE.value == '1') {
            document.MAINFORM.CR_LONG_FLG.value = '';
            document.MAINFORM.LONG_AMT.value = '0';
            document.MAINFORM.LONG_AMT_AC_NO.value = '';
            document.MAINFORM.SHORT_REASON.value = '';
            document.MAINFORM.SHORT_AMT.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_AMT, 'P', 'N');

            SYT_ChangeFldClass(document.MAINFORM.TRF_PRICE, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_AMT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG1, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_RT_BUY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ACTUAL_INT_BUY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_REVENUE_DUE, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_PRICE, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_AMT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG1, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_RT_BUY, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ACTUAL_INT_BUY, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.INT_REVENUE_DUE, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_BAL = function() {
    try {

        if ((document.MAINFORM.TRF_SHORT_FLG.value == '2') || (document.MAINFORM.SHORT_REASON.value == '2') || (document.MAINFORM.SHORT_REASON.value == '3')) {
            document.MAINFORM.FINC_BAL.value = document.MAINFORM.TEMP_AMT2.value;
            document.MAINFORM.TTL_CABLE_APDE.value = document.MAINFORM.TEMP_AMT54.value;
        } else {
            document.MAINFORM.FINC_BAL.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT2.value) - SYS_BeFloat(document.MAINFORM.FINC_PAY_AMT.value);
            document.MAINFORM.TTL_CABLE_APDE.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT54.value) - SYS_BeFloat(document.MAINFORM.PRE_OVS_CHG_BUY.value);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
                document.MAINFORM.FINC_PAY_AMT.value = document.MAINFORM.TEMP_AMT2.value;
            }
        } else {
            document.MAINFORM.FINC_PAY_AMT.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'FFTSettlement';
        document.MAINFORM.FINC_UNIT_CODE.value = SYS_ORI_UNIT_CODE;
        //document.MAINFORM.RPT_PAY_FLG.value='F';
        //document.MAINFORM.RPT_ISREF.value='N';
        //document.MAINFORM.RPT_TRX_REF_NO.value=document.MAINFORM.C_MAIN_REF.value;
        //document.MAINFORM.RPT_PAYER_NM.value=document.MAINFORM.IMPT_NM.value;
        document.MAINFORM.TEMP_AMT2.value = document.MAINFORM.FINC_BAL.value;
        document.MAINFORM.FFT_CHG_FLG.value = '2';
        document.MAINFORM.TEMP_DATE1.value = document.MAINFORM.TRF_DT.value;
        //document.MAINFORM.RPT_IN_CHG_CCY.value=document.MAINFORM.FINC_CCY.value;
        //document.MAINFORM.RPT_OUT_CHG_CCY.value=document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.TEMP_CHAR9.value = '';
        document.MAINFORM.TEMP_CHAR10.value = '';
        SYF_FFIT_FFT_CHG_FLG();
        //InitEvent_MT202();

        //InitValues_COMM();
        //TRX_CCY_COMM(document.MAINFORM.FINC_CCY.value);
        //SYT_CommPageConfirm();
        //CommCustId(document.MAINFORM.C_MAIN_REF.value,'CHN',document.MAINFORM.EXPT_ID.value);

        SYF_FFIT_TEMP_CHAR2();
        SYF_FFIT_AMT();
        SYF_FFIT_SETTLE_TIMES();

        //RptInitCust(document.MAINFORM.EXPT_ID.value);

        SYF_FFIT_ClaimAmtApplCommOnchange();

        SYF_FFIT_FINC_PAY_AMT();
        SYF_FFIT_TRF_AMT();

        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;

        //document.MAINFORM.RPT_TRX_CCY2.value='';
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MRGN_CUST_AC_NO3_A = function() {
    try {

        var days; // Utility Auto Fix Comments
        if (document.MAINFORM.TEMP_CHAR2.value == 'AD' || document.MAINFORM.TEMP_CHAR2.value == 'BP') {
            document.MAINFORM.FINC_TYPE_DESC.value = 'FINCFFITLC';
        } else {
            document.MAINFORM.FINC_TYPE_DESC.value = 'FINCFFITCL';
        }

        days = SYS_GetSubDays(document.MAINFORM.FINC_DT.name, document.MAINFORM.TRX_DT.name);
        if (SYS_BeFloat(days) > 0) {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_MRGN_CUST_AC_NO3_A_4', '1');
        } else {
            if (document.MAINFORM.FINC_TYPE_DESC.value == 'FINCFFITLC') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_MRGN_CUST_AC_NO3_A_5', '1');
            }
            if (document.MAINFORM.FINC_TYPE_DESC.value == 'FINCFFITCL') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_MRGN_CUST_AC_NO3_A_6', '1');
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_OVS_CHG = function() {
    try {

        if (document.MAINFORM.SHORT_REASON.value == '1') {
            document.MAINFORM.OVS_CHG.value = document.MAINFORM.SHORT_AMT.value;
        }
        if (document.MAINFORM.CR_LONG_FLG.value == '2') {
            document.MAINFORM.OVS_CHG.value = document.MAINFORM.LONG_AMT.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PRE_OVS_CHG_BUY = function() {
    try {

        var sA; // Utility Auto Fix Comments
        sA = SYS_BeFloat(document.MAINFORM.PRE_OVS_CHG_BUY.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT54.value);
        if ((sA > 0) && (document.MAINFORM.FFT_TYPE.value == '1')) {
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        /*
if(SYS_FUNCTION_TYPE=='EC' && document.MAINFORM.TEMP_CHAR3.value=='')
{
// document.MAINFORM.RPT_TRX_CCY2.value='';
}
*/

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            //GetTrxCcyExchRt(document.MAINFORM.FINC_CCY.value, document.MAINFORM.EXPT_ID.value);
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            //document.MAINFORM.RPT_TRX_DT.value=SYS_BUSI_DATE;
            //document.MAINFORM.RPT_DT.value=SYS_BUSI_DATE;
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
            SYT_GetCustAcNo(document.MAINFORM.EXPT_ID.value);
            //ChgAcNoInitValue();

            SYT_GetCustAcNo(document.MAINFORM.EXPT_ID.value);
            //PaymentGetCustAcno();
            //SettleGetCustAcno();

            SYF_FFIT_CR_LONG_FLG();
            //InitEvent_MT202();
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

        //SETT_TRANS_FLDCLASS_onchange();
        alertFlag = 1;
        //Rpt_ChangeFieldClass1();
        //Rpt_ChangeFieldClass_SETT_RPT_ISREF();
        //Rpt_ChangeFieldClass_SETT_RPT_IS_REF1();



        Chg.Screen.mapLocalCust("EXPT_ID", "EXPT_NM");
        Chg.Screen.mapForeignCust("EXPT_ID", "EXPT_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {

            arr = ['ADVICE_CHG', 'CABLE_ADVICE_CHG'];
            ccy = document.MAINFORM.ACPT_CCY.value;
            amt = document.MAINFORM.CR_AMT.value;
            Chg.calculate(arr, ccy, amt, '');
        }
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
            }
            /* else {
                document.MAINFORM.REMAINING_LIFE.value = '0';
            }*/
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_RPT_IN_CHG_AMT = function() {
    try {

        /*
if(document.MAINFORM.FFT_TYPE.value=='1'||document.MAINFORM.FFT_TYPE.value=='2')
{
//document.MAINFORM.RPT_IN_CHG_AMT.value=SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value)+SYS_BeFloat(document.MAINFORM.TTL_COMM_APDE.value)+SYS_BeFloat(document.MAINFORM.TTL_CUST_CHG_AMT.value)+SYS_BeFloat(document.MAINFORM.TTL_FOR_CHG_AMT.value)+SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_COMM.value);
}
document.MAINFORM.RPT_IN_CHG_AMT.value=SYT_CCY_AMT('JPY',document.MAINFORM.RPT_IN_CHG_AMT.value);

if(document.MAINFORM.RPT_CNY_AC_NO.value!='')
{
document.MAINFORM.RPT_CNY_AMT.value=SYS_BeFloat(document.MAINFORM.CR_AMT.value)-SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT.value);
}
else
{
document.MAINFORM.RPT_CCY_AMT.value=SYS_BeFloat(document.MAINFORM.CR_AMT.value)-SYS_BeFloat(document.MAINFORM.RPT_IN_CHG_AMT.value);
}
document.MAINFORM.RPT_CNY_AMT.value=SYT_CCY_AMT('JPY',document.MAINFORM.RPT_CNY_AMT.value);
document.MAINFORM.RPT_CCY_AMT.value=SYT_CCY_AMT('JPY',document.MAINFORM.RPT_CCY_AMT.value);
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_RPT_OUT_CHG_AMT = function() {
    try {

        /*
document.MAINFORM.RPT_IN_CHG_CCY.value=document.MAINFORM.FINC_CCY.value;
document.MAINFORM.RPT_OUT_CHG_CCY.value=document.MAINFORM.FINC_CCY.value;
document.MAINFORM.RPT_OUT_CHG_AMT.value=document.MAINFORM.OVS_CHG.value;
document.MAINFORM.RPT_OUT_CHG_AMT.value=SYT_CCY_AMT('JPY',document.MAINFORM.RPT_OUT_CHG_AMT.value);
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SETTLE_TIMES = function() {
    try {

        if (document.MAINFORM.SETTLE_TIMES.value == '0') {
            document.MAINFORM.SETTLE_TIMES.value = '1';
            document.MAINFORM.SETTLE_DT1.value = SYS_BUSI_DATE;
            document.MAINFORM.TEMP_AMT54.value = document.MAINFORM.PRE_OVS_CHG.value;
            document.MAINFORM.TTL_CABLE_APDE.value = document.MAINFORM.PRE_OVS_CHG.value;
        } else {
            document.MAINFORM.SETTLE_TIMES.value = SYS_BeFloat(document.MAINFORM.SETTLE_TIMES.value) + 1;
            document.MAINFORM.SETTLE_DT2.value = SYS_BUSI_DATE;
            document.MAINFORM.TEMP_AMT54.value = document.MAINFORM.TTL_CABLE_APDE.value;
            document.MAINFORM.CR_AMT.value = '0';
            document.MAINFORM.CR_VALUE_DT.value = '';
            document.MAINFORM.TRF_PRICE.value = '0';
            document.MAINFORM.TRF_AMT.value = '0';
            document.MAINFORM.PRE_OVS_CHG_BUY.value = '0';
        }

        if (SYS_BeFloat(document.MAINFORM.TTL_CABLE_APDE.value) > 0) {
            document.MAINFORM.PRE_OVS_CHG_AC_NO.value = FFTPREFEE;
        } else {
            document.MAINFORM.PRE_OVS_CHG_AC_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SHORT_REASON = function() {
    try {

        if (document.MAINFORM.SHORT_REASON.value == '2' || document.MAINFORM.SHORT_REASON.value == '3') {
            alert('Please deal with accounts by hand!');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT5 = function() {
    try {

        document.MAINFORM.TEMP_AMT5.value = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FINC_DUE_DT.name);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT9 = function() {
    try {

        //TEMP_AMT9  驴Other Charge Buyer
        //TEMP_AC_NO6  驴Other Charge BuyerAC NO
        if ((SYS_BeFloat(document.MAINFORM.TEMP_AMT9.value) > 0) && (document.MAINFORM.FFT_TYPE.value == '1')) {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO6, 'M', 'N');
            document.MAINFORM.TEMP_AC_NO6.value = GL6201;
        } else {
            document.MAINFORM.TEMP_AC_NO6.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TEMP_AC_NO6, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR2 = function() {
    try {

        var sA; // Utility Auto Fix Comments
        var sB; // Utility Auto Fix Comments
        var sC; // Utility Auto Fix Comments
        var sTRX_NO; // Utility Auto Fix Comments
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            sA = '';
            /* sA=SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",
     'LC_CCY;DRAFT_AMT;DRAFT_BAL','LC_CCY;DRAFT_AMT;BAL_DRAFT');*/
            if (sA == 'Y') {
                document.MAINFORM.TEMP_CHAR2.value = 'BP';
                //document.MAINFORM.RPT_SETT_MTHD.value='L';
            }
        } else if (sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
            sB = '';
            /*sB=SYS_Get22TableData_Boc('EXCL_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",
     'COLL_CCY;DRAFT_AMT;DRAFT_BAL','LC_CCY;DRAFT_AMT;BAL_DRAFT');*/
            if (sB == 'Y') {
                document.MAINFORM.TEMP_CHAR2.value = 'OC';
                //document.MAINFORM.RPT_SETT_MTHD.value='C';
            }
        } else if (sTRX_NO == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'AD') {
            sC = '';
            /*sC=SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'LC_NO','TEMP_AC_NO2');*/
            if (sC == 'Y') {
                document.MAINFORM.TEMP_CHAR2.value = 'AD';
                // document.MAINFORM.RPT_SETT_MTHD.value='L';
            }
        } else {
            document.MAINFORM.TEMP_CHAR2.value = '';
            //document.MAINFORM.RPT_SETT_MTHD.value='O';
        }

        if (SYS_BeFloat(document.MAINFORM.DRAFT_AMT.value) > 0) {
            document.MAINFORM.DRAFT_AMT.value = SYT_CCY_AMT(document.MAINFORM.LC_CCY.value, document.MAINFORM.DRAFT_AMT.value);
        } else {
            document.MAINFORM.DRAFT_AMT.value = '0';
            document.MAINFORM.DRAFT_AMT.value = SYT_CCY_AMT(document.MAINFORM.LC_CCY.value, document.MAINFORM.DRAFT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR2_1 = function() {
    try {

        var sA; // Utility Auto Fix Comments
        var sB; // Utility Auto Fix Comments
        var sC; // Utility Auto Fix Comments
        var sTRX_NO; // Utility Auto Fix Comments
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO != 'AD' && sTRX_NO != 'BP' && sTRX_NO != 'OC') {
            if (document.MAINFORM.BA_ADOC_NO.value != '' && document.MAINFORM.BA_TRX_NO.value != '') {
                sA = '';
                /* sA=SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",
     'LC_CCY;DRAFT_AMT;DRAFT_BAL','LC_CCY;DRAFT_AMT;BAL_DRAFT');*/
                if (sA == 'Y') {
                    document.MAINFORM.TEMP_CHAR2.value = 'BP';
                    //document.MAINFORM.RPT_SETT_MTHD.value='L';
                }
            } else if (document.MAINFORM.BA_ADOC_NO.value != '' && document.MAINFORM.BA_TRX_NO.value == '') {
                sB = '';
                /* sB=SYS_Get22TableData_Boc('EXCL_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",
     'COLL_CCY;DRAFT_AMT;DRAFT_BAL','LC_CCY;DRAFT_AMT;BAL_DRAFT');*/
                if (sB == 'Y') {
                    document.MAINFORM.TEMP_CHAR2.value = 'OC';
                    //document.MAINFORM.RPT_SETT_MTHD.value='C';
                }
                if (sB == 'N') {
                    sC = '';
                    /* sC=SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'LC_NO','TEMP_AC_NO2');*/
                    if (sC == 'Y') {
                        document.MAINFORM.TEMP_CHAR2.value = 'AD';
                        //document.MAINFORM.RPT_SETT_MTHD.value='L';
                    } else {
                        document.MAINFORM.TEMP_CHAR2.value = '';
                        //document.MAINFORM.RPT_SETT_MTHD.value='O';
                    }
                }
            } else {
                document.MAINFORM.TEMP_CHAR2.value = '';
                //document.MAINFORM.RPT_SETT_MTHD.value='O';
            }
        }

        if (SYS_BeFloat(document.MAINFORM.DRAFT_AMT.value) > 0) {
            document.MAINFORM.DRAFT_AMT.value = SYT_CCY_AMT(document.MAINFORM.LC_CCY.value, document.MAINFORM.DRAFT_AMT.value);
        } else {
            document.MAINFORM.DRAFT_AMT.value = '0';
            //document.MAINFORM.DRAFT_AMT.value=SYT_CCY_AMT(document.MAINFORM.LC_CCY.value,document.MAINFORM.DRAFT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR6 = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.DRAFT_AMT.value) > 0) {
            document.MAINFORM.TEMP_CHAR6.value = document.MAINFORM.LC_CCY.value;
        } else {
            document.MAINFORM.TEMP_CHAR6.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_FLG2 = function() {
    try {

        //document.MAINFORM.REMARK_COLL.value='';
        //SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL,'O','N');
        if ((document.MAINFORM.FFT_TYPE.value == '2') && (document.MAINFORM.CR_LONG_FLG.value == '1' || document.MAINFORM.CR_LONG_FLG.value == '3' || document.MAINFORM.CR_LONG_FLG.value == '4')) {
            if (SYS_BeFloat(document.MAINFORM.LONG_AMT.value) > 0 && document.MAINFORM.CR_LONG_FLG.value == '4') {
                if (document.MAINFORM.TEMP_FLG2.value == '2') {
                    document.MAINFORM.LONG_AMT_AC_NO.value = GL9992;
                    SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
                } else if (document.MAINFORM.TEMP_FLG2.value == '1' || document.MAINFORM.TEMP_FLG2.value == '3') {
                    document.MAINFORM.LONG_AMT_AC_NO.value = '';
                    SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'M', 'N');
                }
            } else if (SYS_BeFloat(document.MAINFORM.LONG_AMT.value) > 0 && document.MAINFORM.CR_LONG_FLG.value == '3') {
                document.MAINFORM.LONG_AMT_AC_NO.value = '';
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'M', 'N');
            } else if (SYS_BeFloat(document.MAINFORM.LONG_AMT.value) > 0 && (document.MAINFORM.CR_LONG_FLG.value == '1')) {
                document.MAINFORM.LONG_AMT_AC_NO.value = GL8421;
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
                //SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL,'M','N');
            }
        } else {
            document.MAINFORM.LONG_AMT_AC_NO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_FLG4_Onchange = function() {
    try {

        //document.MAINFORM.SETT_NONEXCH_FLG.value=document.MAINFORM.TEMP_FLG4.value
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRF_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.TRF_AMT.value) > '0') {
            document.MAINFORM.TRF_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TRF_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRF_CUAZHANG_AMT = function() {
    try {

        //document.MAINFORM.REMARK_COLL.value='';
        //SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL,'O','N');
        if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_LONG_FLG.value == '2')) {
            document.MAINFORM.TRF_CUAZHANG_AMT.value = document.MAINFORM.CR_AMT.value;
            SYT_ChangeFldClass(document.MAINFORM.TRF_CUAZHANG_AMT, 'M', 'N');
            document.MAINFORM.TRF_GUAZHANG_AC_NO.value = GL8421;
            //SYT_ChangeFldClass(document.MAINFORM.TRF_GUAZHANG_AC_NO,'M','N');
            //SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL,'M','N');  
        } else if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_SHORT_FLG.value == '2')) {
            document.MAINFORM.TRF_CUAZHANG_AMT.value = document.MAINFORM.CR_AMT.value;
            SYT_ChangeFldClass(document.MAINFORM.TRF_CUAZHANG_AMT, 'P', 'N');
            document.MAINFORM.TRF_GUAZHANG_AC_NO.value = GL8421;
            //SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL,'M','N');                                         
            //SYT_ChangeFldClass(document.MAINFORM.TRF_GUAZHANG_AC_NO,'M','N');                                       
        } else if ((document.MAINFORM.FFT_TYPE.value == '1') && (document.MAINFORM.TRF_SHORT_FLG.value == '3')) {
            SYT_ChangeFldClass(document.MAINFORM.TRF_CUAZHANG_AMT, 'M', 'N');
            document.MAINFORM.TRF_GUAZHANG_AC_NO.value = GL8421;
            //SYT_ChangeFldClass(document.MAINFORM.TRF_GUAZHANG_AC_NO,'M','N');                                       
        } else {
            document.MAINFORM.TRF_CUAZHANG_AMT.value = '0';
            document.MAINFORM.TRF_GUAZHANG_AC_NO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TRF_CUAZHANG_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TRF_GUAZHANG_AC_NO, 'P', 'N');
        }
        document.MAINFORM.TRF_CUAZHANG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TRF_CUAZHANG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_CUST_AC_NO1 = function() {
    try {

        if (document.MAINFORM.TEMP_CHAR2.value == 'BP') {
            /*SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",
     'PRODUCT_CODE_NEGO','VENT_CUST_AC_NO2');*/
            if (document.MAINFORM.VENT_CUST_AC_NO2.value == '') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_VENT_CUST_AC_NO1_7', '1');
            } else {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_VENT_CUST_AC_NO1_8', '1');
            }
        }
        if (document.MAINFORM.TEMP_CHAR2.value == 'OC') {
            /*SYS_Get22TableData_Boc('EXCL_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",
     'PRODUCT_CODE_COLL','VENT_CUST_AC_NO2');*/
            if (document.MAINFORM.VENT_CUST_AC_NO2.value == '') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_VENT_CUST_AC_NO1_9', '1');
            } else {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_VENT_CUST_AC_NO1_10', '1');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_X202_1_32A_AMT_11', '1');
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
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_X202_1_32A_AMT_12', '1');
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X202_1_B2 = function() {
    try {

        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Settlement_SYF_FFIT_X202_1_B2_13', '1');
        } else {
            document.MAINFORM.TEMP_NM2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_check_acno = function() {
    try {

        var a1; // Utility Auto Fix Comments
        var a2; // Utility Auto Fix Comments
        var a3; // Utility Auto Fix Comments
        var a4; // Utility Auto Fix Comments
        var a5; // Utility Auto Fix Comments
        var b1; // Utility Auto Fix Comments
        var b2; // Utility Auto Fix Comments
        var b3; // Utility Auto Fix Comments
        var b4; // Utility Auto Fix Comments
        var b5; // Utility Auto Fix Comments
        /*
a1=document.MAINFORM.PMT_CUST_AC_NO1.value;
a2=document.MAINFORM.PMT_CUST_AC_NO2.value;
a3=document.MAINFORM.PMT_CUST_AC_NO3.value;
a4=document.MAINFORM.PMT_CUST_AC_NO4.value;
a5=document.MAINFORM.PMT_CUST_AC_NO5.value;
b1=document.MAINFORM.PMT_EQ_AMT1.value;
b2=document.MAINFORM.PMT_EQ_AMT2.value;
b3=document.MAINFORM.PMT_EQ_AMT3.value;
b4=document.MAINFORM.PMT_EQ_AMT4.value;
b5=document.MAINFORM.PMT_EQ_AMT5.value;
if(SYS_BeFloat(document.MAINFORM.NET_DR_AMT.value)>'0')
{
    if((b1>'0')&&(a1==''))
    {
       SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO1,'Please input the account No.1!');
       return false;
    }
    else if((b2>'0')&&(a2==''))
    {
        SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO2,'Please input the account No.2!');
        return false;
    } 
    else if((b3>'0')&&(a3==''))
    {
        SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO3,'Please input the account No.3!');
        return false; 
    }
    else if((b4>'0')&&(a4==''))
    {
        SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO4,'Please input the account No.4!');
        return false; 
    }
    else if((b5>'0')&&(a5==''))
    {
        SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO5,'Please input the account No.5!');
        return false; 
    }
    else
    {
        return true;
    } 
}
else
{
   return true;
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_set_842_no = function() {
    try {

        /*
if(document.MAINFORM.FFT_TYPE.value=='2'&&document.MAINFORM.CR_LONG_FLG.value=='1'&&SYS_BeFloat(document.MAINFORM.LONG_AMT.value)>0)
{
document.MAINFORM.TEMP_CHAR8.value=document.MAINFORM.C_MAIN_REF.value+'S'+document.MAINFORM.SETTLE_TIMES.value;  //ZHW
}
else if(document.MAINFORM.FFT_TYPE.value=='1'&&(document.MAINFORM.TRF_LONG_FLG.value=='2'||document.MAINFORM.TRF_SHORT_FLG.value=='2')&&SYS_BeFloat(document.MAINFORM.TRF_CUAZHANG_AMT.value)>0)
{
document.MAINFORM.TEMP_CHAR8.value=document.MAINFORM.C_MAIN_REF.value+'S'+document.MAINFORM.SETTLE_TIMES.value; 
}
else
{
document.MAINFORM.TEMP_CHAR8.value='';
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_shortVsLongAmt = function() {
    try {

        var nShortVsLongAmt; // Utility Auto Fix Comments
        nShortVsLongAmt = 0;
        //if(document.MAINFORM.FFT_TYPE.value!='1')
        if (document.MAINFORM.FFT_TYPE.value == '2') {
            if (SYS_BeFloat(document.MAINFORM.CR_AMT.value) != 0) {
                nShortVsLongAmt = SYS_BeFloat(document.MAINFORM.CR_AMT.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT2.value) - SYS_BeFloat(document.MAINFORM.APPL_COMM.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT30.value);
                nShortVsLongAmt = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, nShortVsLongAmt);
            }
            if (SYS_BeFloat(nShortVsLongAmt) < 0) {
                document.MAINFORM.SHORT_AMT.value = -SYS_BeFloat(nShortVsLongAmt);
                document.MAINFORM.SHORT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.SHORT_AMT.value);
                document.MAINFORM.LONG_AMT.value = 0;
                document.MAINFORM.SHORT_REASON.value = '1';
                SYT_ChangeFldClass(document.MAINFORM.SHORT_AMT, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'M', 'N');
                document.MAINFORM.CR_LONG_FLG.value = '';
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
            } else if (SYS_BeFloat(nShortVsLongAmt) > 0) {
                document.MAINFORM.SHORT_AMT.value = 0;
                document.MAINFORM.LONG_AMT.value = nShortVsLongAmt;
                document.MAINFORM.CR_LONG_FLG.value = '2';
                document.MAINFORM.SHORT_REASON.value = '';
                SYT_ChangeFldClass(document.MAINFORM.SHORT_AMT, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
            } else {
                document.MAINFORM.SHORT_AMT.value = 0;
                document.MAINFORM.LONG_AMT.value = 0;
                document.MAINFORM.CR_LONG_FLG.value = '';
                document.MAINFORM.SHORT_REASON.value = '';
                SYT_ChangeFldClass(document.MAINFORM.CR_LONG_FLG, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.SHORT_REASON, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.SHORT_AMT, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.LONG_AMT_AC_NO, 'P', 'N');
            }

            if (document.MAINFORM.FINC_CCY.value != '') {
                document.MAINFORM.SHORT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.SHORT_AMT.value);
                document.MAINFORM.LONG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.LONG_AMT.value);
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_APPL_COMM_onchange = function(event) {
    try {
        SYF_FFIT_ClaimAmtApplCommOnchange();
        EEHtml.fireEvent(document.MAINFORM.CLAIM_BAL, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CLAIM_AMT, 'onchange');
        SYF_FFIT_shortVsLongAmt();
        EEHtml.fireEvent(document.MAINFORM.SHORT_REASON, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.LONG_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CR_LONG_FLG, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.SHORT_AMT, 'onchange');

        SYF_FFIT_CUST_AC_EQ_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_FAV_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CR_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.CR_AMT.value)) {
            document.MAINFORM.CR_AMT.value = 0;
        }
        SYF_FFIT_AMT();
        SYF_FFIT_TEMP_AMT4();
        SYF_FFIT_shortVsLongAmt();
        EEHtml.fireEvent(document.MAINFORM.LONG_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.SHORT_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.SHORT_REASON, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CR_LONG_FLG, 'onchange');
        SYF_FFIT_CUST_AC_EQ_AMT();
        SYF_FFIT_TRF_CUAZHANG_AMT();
        SYF_FFIT_CR_AMT();
        //SYF_FFIT_RPT_IN_CHG_AMT();
        //SETT_NONEXCH_FLG_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CR_LONG_FLG_onchange = function(event) {
    try {
        //SYF_FFIT_FFT_CHG_FLG();
        SYF_FFIT_CR_LONG_FLG();
        SYF_FFIT_TEMP_FLG2();
        SYF_FFIT_CUST_AC_EQ_AMT();
        SYF_FFIT_CR_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CR_VALUE_DT_onchange = function(event) {
    try {
        SYF_FFIT_REMAINING_LIFE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_C_MAIN_REF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FFT_CHG_FLG_onchange = function(event) {
    try {
        //SYF_FFIT_FFT_CHG_FLG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FFT_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_FINC_PAY_AMT();
        EEHtml.fireEvent(document.MAINFORM.FINC_PAY_AMT, 'onchange');
        SYF_FFIT_FFT_TYPE();
        SYF_FFIT_CR_LONG_FLG();
        SYF_FFIT_TEMP_FLG2();
        SYF_FFIT_shortVsLongAmt();
        SYF_FFIT_CUST_AC_EQ_AMT();
        SYF_FFIT_INT_REVENUE_DUE();
        SYF_FFIT_TRF_CUAZHANG_AMT();
        SYF_FFIT_TRF_LONG_FLG();
        //SYF_FFIT_RPT_IN_CHG_AMT();
        SYF_FFIT_PRE_OVS_CHG_BUY();
        SYF_FFIT_TEMP_AMT9();
        SYF_FFIT_CR_AMT();
        SYF_FFIT_REMAINING_LIFE();
        //SETT_NONEXCH_FLG_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_BAL_onchange = function(event) {
    try {
        /*SYF_FFIT_ClaimAmtApplCommOnchange();
document.MAINFORM.CLAIM_BAL.fireEvent('onchange');
SYF_FFIT_shortVsLongAmt();
document.MAINFORM.SHORT_REASON.fireEvent('onchange');
document.MAINFORM.LONG_AMT.fireEvent('onchange');
document.MAINFORM.CR_LONG_FLG.fireEvent('onchange');
document.MAINFORM.SHORT_AMT.fireEvent('onchange');
SYF_FFIT_CUST_AC_EQ_AMT();
document.MAINFORM.TEMP_AMT59.fireEvent('onchange');*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DUE_DT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_DAYS_BUY_onchange = function(event) {
    try {
        if (document.MAINFORM.GRACE_DAYS_BUY.value < 0) {
            alert("Grace Days buyer value should not be in negative");
            document.MAINFORM.GRACE_DAYS_BUY.value = '';
        }
        if (document.MAINFORM.GRACE_DAYS_BUY.value == '') {
            document.MAINFORM.GRACE_DAYS_BUY.value = 0;
        }
        SYF_FFIT_REMAINING_LIFE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_FLG_onchange = function(event) {
    try {
        SYF_FFIT_REMAINING_LIFE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_INT_REVENUE_DUE_onchange = function(event) {
    try {
        if (document.MAINFORM.INT_REVENUE_DUE.value < 0) {
            alert("Int Revenue Due value should not be negative");
            document.MAINFORM.INT_REVENUE_DUE.value = 0;
        }
        SYF_FFIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LC_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LONG_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.LONG_AMT.value)) {
            document.MAINFORM.LONG_AMT.value = 0;
        }
        SYF_FFIT_CUST_AC_EQ_AMT();
        SYF_FFIT_CR_LONG_FLG();
        SYF_FFIT_TEMP_FLG2();
        SYF_FFIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LONG_AMT_AC_NO_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_OVS_CHG_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.OVS_CHG.value)) {
            document.MAINFORM.OVS_CHG.value = 0;
        }
        SYF_FFIT_AMT();
        //SYF_FFIT_RPT_OUT_CHG_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_OVS_CHG_onchange = function(event) {
    try {
        SYF_FFIT_CUST_AC_EQ_AMT();

        SYF_FFIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_OVS_CHG_BUY_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.PRE_OVS_CHG_BUY.value)) {
            document.MAINFORM.PRE_OVS_CHG_BUY.value = 0;
        }
        SYF_FFIT_AMT();
        SYF_FFIT_PRE_OVS_CHG_BUY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SELLING_CUST_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SHORT_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.SHORT_AMT.value)) {
            document.MAINFORM.SHORT_AMT.value = 0;
        }
        SYF_FFIT_ClaimBal_ShortAmtOnchange();
        EEHtml.fireEvent(document.MAINFORM.CLAIM_BAL, 'onchange');


        SYF_FFIT_CUST_AC_EQ_AMT();
        SYF_FFIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SHORT_REASON_onchange = function(event) {
    try {
        SYF_FFIT_SHORT_REASON();
        SYF_FFIT_CUST_AC_EQ_AMT();
        SYF_FFIT_ClaimBal_ShortAmtOnchange();
        SYF_FFIT_CR_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AC_NO6_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT_onchange = function(event) {
    try {
        SYF_FFIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT12_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT13_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT2_onchange = function(event) {
    try {
        SYF_FFIT_FINC_PAY_AMT();
        EEHtml.fireEvent(document.MAINFORM.FINC_PAY_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT30_onchange = function(event) {
    try {
        SYF_FFIT_shortVsLongAmt();
        EEHtml.fireEvent(document.MAINFORM.SHORT_REASON, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.LONG_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CR_LONG_FLG, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.SHORT_AMT, 'onchange');

        SYF_FFIT_CUST_AC_EQ_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT4_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_AMT4.value)) {
            document.MAINFORM.TEMP_AMT4.value = 0;
        }
        SYF_FFIT_AMT();
        SYF_FFIT_TEMP_AMT4();
        //SETT_NONEXCH_FLG_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT59_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT9_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_AMT9.value)) {
            document.MAINFORM.TEMP_AMT9.value = 0;
        }
        SYF_FFIT_TEMP_AMT9();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_CHAR2_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG2_onchange = function(event) {
    try {
        SYF_FFIT_CR_LONG_FLG();
        SYF_FFIT_TEMP_FLG2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG3_onchange = function(event) {
    try {
        SYF_FFIT_COVER_BGL_ACNO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG4_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_FLG4_Onchange();
        //SETT_NONEXCH_FLG_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TRF_AMT.value)) {
            document.MAINFORM.TRF_AMT.value = 0;
        }
        SYF_FFIT_TRF_AMT();
        SYF_FFIT_FINC_PAY_AMT();
        EEHtml.fireEvent(document.MAINFORM.FINC_PAY_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_CUAZHANG_AMT_onchange = function(event) {
    try {
        document.MAINFORM.TRF_CUAZHANG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TRF_CUAZHANG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_LONG_FLG_onchange = function(event) {
    try {
        SYF_FFIT_TRF_CUAZHANG_AMT();
        SYF_FFIT_TRF_LONG_FLG();
        SYF_FFIT_CR_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_SHORT_FLG_onchange = function(event) {
    try {
        SYF_FFIT_TRF_CUAZHANG_AMT();
        SYF_FFIT_TRF_LONG_FLG();
        SYF_FFIT_CR_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_52_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ORDBK_ADD_52A', 'X202_ORDBK_ID_52A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_52_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ORDBK_ADD_52A', 'X202_52_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_53_ORDER_NO.value = '';
        SYS_InqCUBK('X202_SENDCORRADD53A', 'X202_SENDCORRID53A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_53_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_SENDCORRADD53A', 'X202_53_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_54_ORDER_NO.value = '';
        SYS_InqCUBK('X202_RECCORRADD_54A', 'X202_RECCORRID_54A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_54_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_RECCORRADD_54A', 'X202_54_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_56_ORDER_NO.value = '';
        SYS_InqCUBK('X202_MEDI_BKADD_56A', 'X202_MEDI_BKID_56A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_56_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_MEDI_BKADD_56A', 'X202_56_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_57_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ACC_BKADD_57A', 'X202_ACC_BKID_57A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_57_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ACC_BKADD_57A', 'X202_57_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_58_ORDER_NO.value = '';
        SYS_InqCUBK('X202_BENE_BKADD_58A', 'X202_BENE_BKID_58A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_58_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_BENE_BKADD_58A', 'X202_58_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ADV_BKSW_B2_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_ADD_BTN_onclick = function(event) {
    try {
        document.MAINFORM.X202_B2_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ADV_BKADD_B2', 'X202_ADV_BKID_B2', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_ORDER_NO_onchange = function(event) {
    try {
        if (document.MAINFORM.X202_B2_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ADV_BKADD_B2', 'X202_B2_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Settlement.js", e);
    }
}