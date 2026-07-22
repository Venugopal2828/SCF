var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.TEMP_REF.value; //added Jax 2020/5/19
        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.X202_RELATEDNO_21.value = document.MAINFORM.C_MAIN_REF.value;
        SYT_Check_AMT();
        SYT_ChangeFldClass(document.MAINFORM.X798_CUST_REF, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X798_21R_BANK_REF, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X798_ADV_BK_REF_21P, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X798_31C_ISSUE_DATE, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_TRX_CCY_AMT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.STL_DT, 'O');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        //SYF_FFIT_CABLE_ITEM_check();
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.EVENT_TYPE.value = 'FFFTCableln';
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        document.MAINFORM.AUTH_BLACK.value = '0';
        document.MAINFORM.AUTH_POINT1.value = '0';
        document.MAINFORM.TEMP_DT_ORGNL_MSG.value = SYS_BUSI_DATE;
        document.MAINFORM.TEMP_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
        }
        SYT_ChangeFldClass(document.MAINFORM.X798_CUST_REF, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X798_21R_BANK_REF, 'O');
         SYT_DisableDivClass('Z_div');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {
        //if(SYS_FUNCTION_TYPE=='PM' || SYS_FUNCTION_TYPE=='EC' )
        //{
        SYT_loadExchRate();
        //}
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CABLE_ITEM_check = function() {
    try {
        if ((document.MAINFORM.FINANCE_FLG.value == '2') && (document.MAINFORM.FFT_TRF_FLG.value == '1')) {
            alert('This transaction have been transfer.');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CHK_X202_TAG_52A = function() {
    try {
        if (document.MAINFORM.X202_ORDBK_SW_52A.value != '') {
            document.MAINFORM.X202_TAG_52A.value = 'A';
        }
        if ((document.MAINFORM.X202_ORDBK_NM_52A.value != '' || document.MAINFORM.X202_ORDBKADD1_52A.value != '' || document.MAINFORM.X202_ORDBKADD2_52A.value != '' || document.MAINFORM.X202_ORDBKADD3_52A.value != '') && document.MAINFORM.X202_ORDBK_SW_52A.value == '') {
            document.MAINFORM.X202_TAG_52A.value = 'D';
        }
        if (document.MAINFORM.X202_ORDBK_NM_52A.value == '' && document.MAINFORM.X202_ORDBKADD1_52A.value == '' && document.MAINFORM.X202_ORDBKADD2_52A.value == '' && document.MAINFORM.X202_ORDBKADD3_52A.value == '' && document.MAINFORM.X202_ORDBK_SW_52A.value == '') {
            document.MAINFORM.X202_TAG_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_Cal_TEMP_MESG_TYPE = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        var TEMP_CATEGORY_FLG; // Utility Auto Fix Comments
        var TEMP_MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;
        TEMP_CATEGORY_FLG = document.MAINFORM.TEMP_CATEGORY_FLG.value;
        TEMP_MESG_TYPE = '';

        if (MESG_TYPE == 'MTn30') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '30';
        } else if (MESG_TYPE == 'MTn90') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '90';
        } else if (MESG_TYPE == 'MTn91') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '91';
        } else if (MESG_TYPE == 'MTn92') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '92';
        } else if (MESG_TYPE == 'MTn95') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '95';
        } else if (MESG_TYPE == 'MTn96') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '96';
        } else if (MESG_TYPE == 'MTn99') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '99';
        }
        document.MAINFORM.TEMP_MESG_TYPE.value = TEMP_MESG_TYPE;
        Cal_SUB_MESS_TYPE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ADD1_onchange = function() {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ADD2_onchange = function() {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ADD3_onchange = function() {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ID_onchange = function() {
    try {
        Cal_AC_WT_INST_ID();
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_NM_onchange = function() {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ORDER_NO_onchange = function() {
    try {
        Cal_AC_WT_INST_ID_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_SW_ADD_onchange = function() {
    try {
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHECK_BOX_798_onchange = function() {
    try {
        Cal_SUB_MESS_TYPE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ADD1_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ADD2_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ADD3_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ADD_ORDER_NO_onchange = function() {
    try {
        Cal_CORR_ID_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_CUST_BANK_onchange = function() {
    try {
        CAL_Clear_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ID_onchange = function() {
    try {
        Cal_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_NM_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ORDER_NO_onchange = function() {
    try {
        Cal_CORR_POST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_SW_ADD_onchange = function() {
    try {
        Cal_CORR_SW_TAG();

        Cal_CORR_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FFT_TRF_FLG_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MESG_TYPE_onchange = function() {
    try {
        Set_CORR_SW_ADD();
        Cal_CORR_EMAIL_ADD();
        Cal_CORR_FAX_NO();
        Cal_CORR_MAIL_ADD();
        Cal_CORR_TLX_NO();
        //Cal_TEMP_MESG_TYPE();
        SYF_FFIT_Cal_TEMP_MESG_TYPE();
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
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ADD1_onchange = function() {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ADD2_onchange = function() {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ADD3_onchange = function() {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ID_onchange = function() {
    try {
        Cal_ORDER_INST_ID();
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_NM_onchange = function() {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ORDER_NO_onchange = function() {
    try {
        Cal_ORDER_INST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_SW_ADD_onchange = function() {
    try {
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_CATEGORY_FLG_onchange = function() {
    try {
        //Cal_TEMP_MESG_TYPE();
        SYF_FFIT_Cal_TEMP_MESG_TYPE();
        Cal_MESG_TYPE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_DT_ORGNL_MSG_onchange = function() {
    try {
        Cal_TEMP_SND_RCV_11();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_N90_CCY_32_onchange = function() {
    try {
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_N90_CHG_32_onchange = function() {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_N90_CHG_32.value)) {
            document.MAINFORM.TEMP_N90_CHG_32.value = 0;
        }
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_N90_DT_32_onchange = function() {
    try {
        //Chk_TEMP_N90_DT_32();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_ORGNLMSG_TYPE_onchange = function() {
    try {
        Chk_TEMP_ORGNLMSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_REF_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_52_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ORDBK_ADD_52A', 'X202_52_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_53_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_SENDCORRADD53A', 'X202_53_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_54_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_RECCORRADD_54A', 'X202_54_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_56_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_MEDI_BKADD_56A', 'X202_56_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_57_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ACC_BKADD_57A', 'X202_57_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_58_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_BENE_BKADD_58A', 'X202_58_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ACC_BKID_57A_onchange = function() {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
            SYS_GetCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A', 'SYM_FFIT_CHK_X202_TAG_57A()');
        } else {
            document.MAINFORM.X202_ACC_BKNM_57A.value = '';
            document.MAINFORM.X202_ACCBKADD1_57A.value = '';
            document.MAINFORM.X202_ACCBKADD2_57A.value = '';
            document.MAINFORM.X202_ACCBKADD3_57A.value = '';
            document.MAINFORM.X202_ACC_BKSW_57A.value = '';
            document.MAINFORM.X202_ACC_BKACNO57A.value = '';
            document.MAINFORM.X202_TAG_57A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ADV_BKID_B2_onchange = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
            SYS_GetCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2', 'SYM_FFIT_CHK_X202_TAG_B2()');
        } else {
            document.MAINFORM.X202_ADV_BKNM_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD1_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD2_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD3_B2.value = '';
            document.MAINFORM.X202_ADV_BKSW_B2.value = '';
            document.MAINFORM.X202_TAG_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ADV_BKSW_B2_onchange = function() {
    try {
        SYM_FFIT_CHK_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_AMT_32A_onchange = function() {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.X202_AMT_32A.value)) {
            document.MAINFORM.X202_AMT_32A.value = 0;
        }
        document.MAINFORM.X202_AMT_32A.value = SYS_BeFloat(document.MAINFORM.X202_AMT_32A.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_B2_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ADV_BKADD_B2', 'X202_B2_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_BENE_BKID_58A_onchange = function() {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
            SYS_GetCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A', 'SYM_FFIT_CHK_X202_TAG_58A()');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = '';
            document.MAINFORM.X202BENEBKADD1_58A.value = '';
            document.MAINFORM.X202BENEBKADD2_58A.value = '';
            document.MAINFORM.X202BENEBKADD3_58A.value = '';
            document.MAINFORM.X202_BENE_BKSW_58A.value = '';
            document.MAINFORM.X202_BENEBKACNO58A.value = '';
            document.MAINFORM.X202_TAG_58A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_MEDI_BKID_56A_onchange = function() {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A', 'SYM_FFIT_CHK_X202_TAG_56A()');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = '';
            document.MAINFORM.X202_RECCORADD154A.value = '';
            document.MAINFORM.X202_RECCORADD254A.value = '';
            document.MAINFORM.X202_RECCORADD354A.value = '';
            document.MAINFORM.X202_RECCORRSW_54A.value = '';
            document.MAINFORM.X202RECCORRACNO54A.value = '';
            document.MAINFORM.X202_TAG_56A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ORDBK_ID_52A_onchange = function() {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
            SYS_GetCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'SYM_FFIT_CHK_X202_TAG_52A()');
        } else {
            document.MAINFORM.X202_ORDBK_NM_52A.value = '';
            document.MAINFORM.X202_ORDBKADD1_52A.value = '';
            document.MAINFORM.X202_ORDBKADD2_52A.value = '';
            document.MAINFORM.X202_ORDBKADD3_52A.value = '';
            document.MAINFORM.X202_ORDBK_SW_52A.value = '';
            document.MAINFORM.X202_ORDBKACNO_52A.value = '';
            document.MAINFORM.X202_TAG_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_RECCORRID_54A_onchange = function() {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
            SYS_GetCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A', 'SYM_FFIT_CHK_X202_TAG_54A()');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = '';
            document.MAINFORM.X202_RECCORADD154A.value = '';
            document.MAINFORM.X202_RECCORADD254A.value = '';
            document.MAINFORM.X202_RECCORADD354A.value = '';
            document.MAINFORM.X202_RECCORRSW_54A.value = '';
            document.MAINFORM.X202RECCORRACNO54A.value = '';
            document.MAINFORM.X202_TAG_54A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_SENDCORRID53A_onchange = function() {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
            SYS_GetCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A', 'SYM_FFIT_CHK_X202_TAG_53A()');
        } else {
            document.MAINFORM.X202_SENDCORRNM53A.value = '';
            document.MAINFORM.X202SENDCORADD153A.value = '';
            document.MAINFORM.X202SENDCORADD253A.value = '';
            document.MAINFORM.X202SENDCORADD353A.value = '';
            document.MAINFORM.X202_SENDCORRSW53A.value = '';
            document.MAINFORM.X202SENDCORACNO53A.value = '';
            document.MAINFORM.X202_TAG_53A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_TAG_B2_onchange = function() {
    try {
        SYM_FFIT_CHK_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ADD_BTN2_onclick = function() {
    try {
        Cal_AC_WT_INST_ADD_BTN2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AC_WT_INST_ID_BTN_onclick = function() {
    try {
        Cal_AC_WT_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ADD_BTN_onclick = function() {
    try {
        CAL_CORR_MULT_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_ID_BTN_onclick = function() {
    try {
        CAL_CORR_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CORR_POST_BTN_onclick = function() {
    try {
        Cal_CORR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ADD_BTN_onclick = function() {
    try {
        Cal_ORDER_INST_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ORDER_INST_ID_BTN_onclick = function() {
    try {
        Cal_ORDER_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_MAIL_TXT_BTN_onclick = function() {
    try {
        Cal_TEMP_MAIL_TXT_BTN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_52_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ORDBK_ADD_52A', 'X202_ORDBK_ID_52A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_BTN_onclick = function() {
    try {
        SYS_GetCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'SYF_FFIT_CHK_X202_TAG_52A()');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_53_ORDER_NO.value = '';
        SYS_InqCUBK('X202_SENDCORRADD53A', 'X202_SENDCORRID53A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_54_ORDER_NO.value = '';
        SYS_InqCUBK('X202_RECCORRADD_54A', 'X202_RECCORRID_54A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_56_ORDER_NO.value = '';
        SYS_InqCUBK('X202_MEDI_BKADD_56A', 'X202_MEDI_BKID_56A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_57_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ACC_BKADD_57A', 'X202_ACC_BKID_57A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_58_ORDER_NO.value = '';
        SYS_InqCUBK('X202_BENE_BKADD_58A', 'X202_BENE_BKID_58A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_B2_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ADV_BKADD_B2', 'X202_ADV_BKID_B2', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_BTN_onclick = function() {
    try {
        SYS_GetCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2', 'SYM_FFIT_CHK_X202_TAG_B2()');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Cableln.js", e);
    }
}